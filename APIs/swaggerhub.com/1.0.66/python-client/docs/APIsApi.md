# openapi_client.APIsApi

All URIs are relative to *https://api.swaggerhub.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_api_comment_reply_v2**](APIsApi.md#add_api_comment_reply_v2) | **POST** /apis/{owner}/{api}/{version}/comments/{comment}/replies | Reply to a comment
[**add_api_comment_v2**](APIsApi.md#add_api_comment_v2) | **POST** /apis/{owner}/{api}/{version}/comments | Add a new comment
[**clone_api**](APIsApi.md#clone_api) | **POST** /apis/{owner}/{api}/{version}/clone | Create a new API version
[**delete_api**](APIsApi.md#delete_api) | **DELETE** /apis/{owner}/{api} | Delete an API
[**delete_api_comment_reply_v2**](APIsApi.md#delete_api_comment_reply_v2) | **DELETE** /apis/{owner}/{api}/{version}/comments/{comment}/replies/{reply} | Delete a comment reply
[**delete_api_comment_v2**](APIsApi.md#delete_api_comment_v2) | **DELETE** /apis/{owner}/{api}/{version}/comments/{comment} | Delete a comment
[**delete_api_version**](APIsApi.md#delete_api_version) | **DELETE** /apis/{owner}/{api}/{version} | Delete an API version
[**fork_api**](APIsApi.md#fork_api) | **POST** /apis/{owner}/{api}/{version}/fork | Fork an API
[**get_api_comments_v2**](APIsApi.md#get_api_comments_v2) | **GET** /apis/{owner}/{api}/{version}/comments | Get comments for the specified API version
[**get_api_default_version**](APIsApi.md#get_api_default_version) | **GET** /apis/{owner}/{api}/settings/default | Get the default version of an API
[**get_api_versions**](APIsApi.md#get_api_versions) | **GET** /apis/{owner}/{api} | Get a list of API versions
[**get_definition**](APIsApi.md#get_definition) | **GET** /apis/{owner}/{api}/{version} | Get the OpenAPI definition of the specified API version
[**get_json_definition**](APIsApi.md#get_json_definition) | **GET** /apis/{owner}/{api}/{version}/swagger.json | Get the OpenAPI definition for the specified API version in JSON format
[**get_lifecycle_settings**](APIsApi.md#get_lifecycle_settings) | **GET** /apis/{owner}/{api}/{version}/settings/lifecycle | Get the published status for the specified API and version
[**get_owner_apis**](APIsApi.md#get_owner_apis) | **GET** /apis/{owner} | Get a list of APIs of the specified owner
[**get_private_settings**](APIsApi.md#get_private_settings) | **GET** /apis/{owner}/{api}/{version}/settings/private | Get the visibility (public or private) of API version
[**get_standardization_errors**](APIsApi.md#get_standardization_errors) | **GET** /apis/{owner}/{api}/{version}/standardization | Retrieve the standardization errors for a given API definition
[**get_validation**](APIsApi.md#get_validation) | **GET** /apis/{owner}/{api}/{version}/validation | Deprecated Get API Standardization errors and warnings
[**get_yaml_definition**](APIsApi.md#get_yaml_definition) | **GET** /apis/{owner}/{api}/{version}/swagger.yaml | Get the OpenAPI definition for the specified API version in YAML format
[**rename_api**](APIsApi.md#rename_api) | **POST** /apis/{owner}/{api}/rename | Rename an API
[**save_definition**](APIsApi.md#save_definition) | **POST** /apis/{owner}/{api} | Create or update an API
[**search_apis**](APIsApi.md#search_apis) | **GET** /apis | Search APIs
[**search_apis_and_domains**](APIsApi.md#search_apis_and_domains) | **GET** /specs | Retrieve a list of currently defined APIs, domains, and templates in APIs.json format
[**set_api_comment_status_v2**](APIsApi.md#set_api_comment_status_v2) | **PUT** /apis/{owner}/{api}/{version}/comments/{comment}/status/{status} | Resolve or reopen a comment
[**set_api_default_version**](APIsApi.md#set_api_default_version) | **PUT** /apis/{owner}/{api}/settings/default | Set the default API version
[**set_lifecycle_settings**](APIsApi.md#set_lifecycle_settings) | **PUT** /apis/{owner}/{api}/{version}/settings/lifecycle | Publish or unpublish an API version
[**set_private_settings**](APIsApi.md#set_private_settings) | **PUT** /apis/{owner}/{api}/{version}/settings/private | Set the visibility (public or private) of an API version
[**update_api_comment_reply_v2**](APIsApi.md#update_api_comment_reply_v2) | **PATCH** /apis/{owner}/{api}/{version}/comments/{comment}/replies/{reply} | Update a comment reply
[**update_api_comment_v2**](APIsApi.md#update_api_comment_v2) | **PATCH** /apis/{owner}/{api}/{version}/comments/{comment} | Update a comment
[**update_api_comments_v2**](APIsApi.md#update_api_comments_v2) | **POST** /apis/{owner}/{api}/{version}/comments/batch | Bulk update comments


# **add_api_comment_reply_v2**
> List[Comment] add_api_comment_reply_v2(owner, api, version, comment, body)

Reply to a comment

### Example

* Api Key Authentication (TokenSecured):

```python
import openapi_client
from openapi_client.models.comment import Comment
from openapi_client.models.new_reply import NewReply
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.swaggerhub.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.swaggerhub.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: TokenSecured
configuration.api_key['TokenSecured'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['TokenSecured'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.APIsApi(api_client)
    owner = 'owner_example' # str | API owner (organization or user, case-sensitive)
    api = 'api_example' # str | API name (case-sensitive)
    version = 'version_example' # str | Version identifier
    comment = 'comment_example' # str | Comment identifier
    body = openapi_client.NewReply() # NewReply | 

    try:
        # Reply to a comment
        api_response = api_instance.add_api_comment_reply_v2(owner, api, version, comment, body)
        print("The response of APIsApi->add_api_comment_reply_v2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling APIsApi->add_api_comment_reply_v2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| API owner (organization or user, case-sensitive) | 
 **api** | **str**| API name (case-sensitive) | 
 **version** | **str**| Version identifier | 
 **comment** | **str**| Comment identifier | 
 **body** | [**NewReply**](NewReply.md)|  | 

### Return type

[**List[Comment]**](Comment.md)

### Authorization

[TokenSecured](../README.md#TokenSecured)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Newly created reply |  -  |
**400** | Request body invalid |  -  |
**401** | Access token is not set or invalid |  -  |
**403** | The comment feature is not available for the organization&#39;s plan, or the authenticating user does not have permission to complete this action |  -  |
**404** | The specified API or comment was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **add_api_comment_v2**
> ClosableComment add_api_comment_v2(owner, api, version, body)

Add a new comment

### Example

* Api Key Authentication (TokenSecured):

```python
import openapi_client
from openapi_client.models.closable_comment import ClosableComment
from openapi_client.models.new_comment import NewComment
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.swaggerhub.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.swaggerhub.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: TokenSecured
configuration.api_key['TokenSecured'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['TokenSecured'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.APIsApi(api_client)
    owner = 'owner_example' # str | API owner (organization or user, case-sensitive)
    api = 'api_example' # str | API name (case-sensitive)
    version = 'version_example' # str | Version identifier
    body = openapi_client.NewComment() # NewComment | 

    try:
        # Add a new comment
        api_response = api_instance.add_api_comment_v2(owner, api, version, body)
        print("The response of APIsApi->add_api_comment_v2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling APIsApi->add_api_comment_v2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| API owner (organization or user, case-sensitive) | 
 **api** | **str**| API name (case-sensitive) | 
 **version** | **str**| Version identifier | 
 **body** | [**NewComment**](NewComment.md)|  | 

### Return type

[**ClosableComment**](ClosableComment.md)

### Authorization

[TokenSecured](../README.md#TokenSecured)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Newly created comment for the specified API |  -  |
**400** | Request body invalid |  -  |
**401** | Access token is not set or invalid |  -  |
**403** | The comment feature is not available for the organization&#39;s plan, or the authenticating user does not have permission to complete this action |  -  |
**404** | The specified API was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clone_api**
> clone_api(owner, api, version, new_version)

Create a new API version

Use this operation to clone an existing API version as a new version. The new version will have the same YAML content but with updated `info.version`.  **Note:** Comments, integrations, and codegen options are not copied to the new version. The default version also remains unchanged.

### Example

* Api Key Authentication (TokenSecured):

```python
import openapi_client
from openapi_client.models.new_version import NewVersion
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.swaggerhub.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.swaggerhub.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: TokenSecured
configuration.api_key['TokenSecured'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['TokenSecured'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.APIsApi(api_client)
    owner = 'owner_example' # str | API owner (organization or user, case-sensitive)
    api = 'api_example' # str | API name (case-sensitive)
    version = 'version_example' # str | The version to clone (case-sensitive)
    new_version = openapi_client.NewVersion() # NewVersion | An object that contains the new version number and other parameters. The version number must be in the format described in the [documentation](https://support.smartbear.com/swaggerhub/docs/apis/versioning.html#format).

    try:
        # Create a new API version
        api_instance.clone_api(owner, api, version, new_version)
    except Exception as e:
        print("Exception when calling APIsApi->clone_api: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| API owner (organization or user, case-sensitive) | 
 **api** | **str**| API name (case-sensitive) | 
 **version** | **str**| The version to clone (case-sensitive) | 
 **new_version** | [**NewVersion**](NewVersion.md)| An object that contains the new version number and other parameters. The version number must be in the format described in the [documentation](https://support.smartbear.com/swaggerhub/docs/apis/versioning.html#format). | 

### Return type

void (empty response body)

### Authorization

[TokenSecured](../README.md#TokenSecured)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | New API version was successfully created |  -  |
**400** | Bad request |  -  |
**403** | Access denied |  -  |
**404** | The specified API or version was not found |  -  |
**409** | The API version you are trying to create already exists |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_api**
> delete_api(owner, api)

Delete an API

### Example

* Api Key Authentication (TokenSecured):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.swaggerhub.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.swaggerhub.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: TokenSecured
configuration.api_key['TokenSecured'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['TokenSecured'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.APIsApi(api_client)
    owner = 'owner_example' # str | API owner (organization or user, case-sensitive)
    api = 'api_example' # str | API name (case-sensitive)

    try:
        # Delete an API
        api_instance.delete_api(owner, api)
    except Exception as e:
        print("Exception when calling APIsApi->delete_api: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| API owner (organization or user, case-sensitive) | 
 **api** | **str**| API name (case-sensitive) | 

### Return type

void (empty response body)

### Authorization

[TokenSecured](../README.md#TokenSecured)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The API was successfully deleted |  -  |
**403** | Access denied |  -  |
**404** | The specified API not found |  -  |
**409** | The API has published versions and cannot be deleted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_api_comment_reply_v2**
> delete_api_comment_reply_v2(owner, api, version, comment, reply)

Delete a comment reply

### Example

* Api Key Authentication (TokenSecured):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.swaggerhub.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.swaggerhub.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: TokenSecured
configuration.api_key['TokenSecured'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['TokenSecured'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.APIsApi(api_client)
    owner = 'owner_example' # str | API owner (organization or user, case-sensitive)
    api = 'api_example' # str | API name (case-sensitive)
    version = 'version_example' # str | Version identifier
    comment = 'comment_example' # str | Comment identifier
    reply = 'reply_example' # str | Reply identifier

    try:
        # Delete a comment reply
        api_instance.delete_api_comment_reply_v2(owner, api, version, comment, reply)
    except Exception as e:
        print("Exception when calling APIsApi->delete_api_comment_reply_v2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| API owner (organization or user, case-sensitive) | 
 **api** | **str**| API name (case-sensitive) | 
 **version** | **str**| Version identifier | 
 **comment** | **str**| Comment identifier | 
 **reply** | **str**| Reply identifier | 

### Return type

void (empty response body)

### Authorization

[TokenSecured](../README.md#TokenSecured)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Сomment reply was deleted |  -  |
**401** | Access token is not set or invalid |  -  |
**403** | The comment feature is not available for the organization&#39;s plan, or the authenticating user does not have permission to complete this action |  -  |
**404** | The specified API, comment, or reply was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_api_comment_v2**
> delete_api_comment_v2(owner, api, version, comment)

Delete a comment

### Example

* Api Key Authentication (TokenSecured):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.swaggerhub.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.swaggerhub.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: TokenSecured
configuration.api_key['TokenSecured'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['TokenSecured'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.APIsApi(api_client)
    owner = 'owner_example' # str | API owner (organization or user, case-sensitive)
    api = 'api_example' # str | API name (case-sensitive)
    version = 'version_example' # str | Version identifier
    comment = 'comment_example' # str | Comment identifier

    try:
        # Delete a comment
        api_instance.delete_api_comment_v2(owner, api, version, comment)
    except Exception as e:
        print("Exception when calling APIsApi->delete_api_comment_v2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| API owner (organization or user, case-sensitive) | 
 **api** | **str**| API name (case-sensitive) | 
 **version** | **str**| Version identifier | 
 **comment** | **str**| Comment identifier | 

### Return type

void (empty response body)

### Authorization

[TokenSecured](../README.md#TokenSecured)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Comment was deleted |  -  |
**401** | Access token is not set or invalid |  -  |
**403** | The comment feature is not available for the organization&#39;s plan, or the authenticating user does not have permission to complete this action |  -  |
**404** | The specified API or comment was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_api_version**
> delete_api_version(owner, api, version)

Delete an API version

### Example

* Api Key Authentication (TokenSecured):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.swaggerhub.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.swaggerhub.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: TokenSecured
configuration.api_key['TokenSecured'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['TokenSecured'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.APIsApi(api_client)
    owner = 'owner_example' # str | API owner (organization or user, case-sensitive)
    api = 'api_example' # str | API name (case-sensitive)
    version = 'version_example' # str | Version identifier

    try:
        # Delete an API version
        api_instance.delete_api_version(owner, api, version)
    except Exception as e:
        print("Exception when calling APIsApi->delete_api_version: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| API owner (organization or user, case-sensitive) | 
 **api** | **str**| API name (case-sensitive) | 
 **version** | **str**| Version identifier | 

### Return type

void (empty response body)

### Authorization

[TokenSecured](../README.md#TokenSecured)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The API version was successfully deleted |  -  |
**403** | Access denied |  -  |
**404** | The specified API was not found |  -  |
**409** | The API version is published and cannot be deleted or it is the only version of this API |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fork_api**
> fork_api(owner, api, version, fork_version)

Fork an API

Creates a [fork](https://support.smartbear.com/swaggerhub/docs/apis/forking-api.html) of the specified API definition and version. The fork can be created as a new API, or as a new version in another existing API.

### Example

* Api Key Authentication (TokenSecured):

```python
import openapi_client
from openapi_client.models.fork_version import ForkVersion
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.swaggerhub.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.swaggerhub.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: TokenSecured
configuration.api_key['TokenSecured'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['TokenSecured'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.APIsApi(api_client)
    owner = 'owner_example' # str | API owner (organization or user, case-sensitive)
    api = 'api_example' # str | API name (case-sensitive)
    version = 'version_example' # str | Version identifier
    fork_version = openapi_client.ForkVersion() # ForkVersion | Fork parameters

    try:
        # Fork an API
        api_instance.fork_api(owner, api, version, fork_version)
    except Exception as e:
        print("Exception when calling APIsApi->fork_api: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| API owner (organization or user, case-sensitive) | 
 **api** | **str**| API name (case-sensitive) | 
 **version** | **str**| Version identifier | 
 **fork_version** | [**ForkVersion**](ForkVersion.md)| Fork parameters | 

### Return type

void (empty response body)

### Authorization

[TokenSecured](../README.md#TokenSecured)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The API was successfully forked |  -  |
**400** | Some parameters are missing or invalid |  -  |
**401** | Access token is not set or invalid |  -  |
**403** | Access denied |  -  |
**404** | The specified owner or API was not found |  -  |
**409** | An API with the name and version you&#39;re trying to create already exists |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_api_comments_v2**
> List[ClosableComment] get_api_comments_v2(owner, api, version)

Get comments for the specified API version

### Example

* Api Key Authentication (TokenSecured):

```python
import openapi_client
from openapi_client.models.closable_comment import ClosableComment
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.swaggerhub.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.swaggerhub.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: TokenSecured
configuration.api_key['TokenSecured'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['TokenSecured'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.APIsApi(api_client)
    owner = 'owner_example' # str | API owner (organization or user, case-sensitive)
    api = 'api_example' # str | API name (case-sensitive)
    version = 'version_example' # str | Version identifier

    try:
        # Get comments for the specified API version
        api_response = api_instance.get_api_comments_v2(owner, api, version)
        print("The response of APIsApi->get_api_comments_v2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling APIsApi->get_api_comments_v2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| API owner (organization or user, case-sensitive) | 
 **api** | **str**| API name (case-sensitive) | 
 **version** | **str**| Version identifier | 

### Return type

[**List[ClosableComment]**](ClosableComment.md)

### Authorization

[TokenSecured](../README.md#TokenSecured)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Comments for the specified API |  -  |
**204** | No comments were found for the specified API |  -  |
**401** | Access token is not set or invalid |  -  |
**403** | The comment feature is not available for the organization&#39;s plan, or the authenticating user does not have permission to complete this action |  -  |
**404** | The specified API was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_api_default_version**
> DefaultVersion get_api_default_version(owner, api)

Get the default version of an API

This operation returns the version identifier, such as `1.0.0`. To get the definition itself, use `GET /apis/{owner}/{api}/{version}`.

### Example

* Api Key Authentication (TokenSecured):

```python
import openapi_client
from openapi_client.models.default_version import DefaultVersion
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.swaggerhub.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.swaggerhub.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: TokenSecured
configuration.api_key['TokenSecured'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['TokenSecured'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.APIsApi(api_client)
    owner = 'owner_example' # str | API owner (organization or user, case-sensitive)
    api = 'api_example' # str | API name (case-sensitive)

    try:
        # Get the default version of an API
        api_response = api_instance.get_api_default_version(owner, api)
        print("The response of APIsApi->get_api_default_version:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling APIsApi->get_api_default_version: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| API owner (organization or user, case-sensitive) | 
 **api** | **str**| API name (case-sensitive) | 

### Return type

[**DefaultVersion**](DefaultVersion.md)

### Authorization

[TokenSecured](../README.md#TokenSecured)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The default version identifier for this API |  -  |
**404** | The specified API was not found. If it is private, make sure the request is authenticated and the authenticating user has access to this API. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_api_versions**
> ApisJson get_api_versions(owner, api)

Get a list of API versions

### Example

* Api Key Authentication (TokenSecured):

```python
import openapi_client
from openapi_client.models.apis_json import ApisJson
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.swaggerhub.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.swaggerhub.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: TokenSecured
configuration.api_key['TokenSecured'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['TokenSecured'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.APIsApi(api_client)
    owner = 'owner_example' # str | API owner (organization or user, case-sensitive)
    api = 'api_example' # str | API name (case-sensitive)

    try:
        # Get a list of API versions
        api_response = api_instance.get_api_versions(owner, api)
        print("The response of APIsApi->get_api_versions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling APIsApi->get_api_versions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| API owner (organization or user, case-sensitive) | 
 **api** | **str**| API name (case-sensitive) | 

### Return type

[**ApisJson**](ApisJson.md)

### Authorization

[TokenSecured](../README.md#TokenSecured)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of API versions in APIs.json format |  -  |
**404** | The specified API was not found. If it is private, make sure the request is authenticated and the authenticating user has access to this API. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_definition**
> object get_definition(owner, api, version, resolved=resolved, flatten=flatten)

Get the OpenAPI definition of the specified API version

### Example

* Api Key Authentication (TokenSecured):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.swaggerhub.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.swaggerhub.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: TokenSecured
configuration.api_key['TokenSecured'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['TokenSecured'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.APIsApi(api_client)
    owner = 'owner_example' # str | API owner (organization or user, case-sensitive)
    api = 'api_example' # str | API name (case-sensitive)
    version = 'version_example' # str | Version identifier
    resolved = False # bool | Set to true to get the resolved version of the API definition. The content of all external $refs will be included in the resulting file. (optional) (default to False)
    flatten = False # bool | If set to `true`, it creates models from inline schemas in OpenAPI definition. AsyncAPI definitions cannot be flattened. (optional) (default to False)

    try:
        # Get the OpenAPI definition of the specified API version
        api_response = api_instance.get_definition(owner, api, version, resolved=resolved, flatten=flatten)
        print("The response of APIsApi->get_definition:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling APIsApi->get_definition: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| API owner (organization or user, case-sensitive) | 
 **api** | **str**| API name (case-sensitive) | 
 **version** | **str**| Version identifier | 
 **resolved** | **bool**| Set to true to get the resolved version of the API definition. The content of all external $refs will be included in the resulting file. | [optional] [default to False]
 **flatten** | **bool**| If set to &#x60;true&#x60;, it creates models from inline schemas in OpenAPI definition. AsyncAPI definitions cannot be flattened. | [optional] [default to False]

### Return type

**object**

### Authorization

[TokenSecured](../README.md#TokenSecured)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OpenAPI definition in the requested format (YAML or JSON) |  -  |
**400** | Could not generate resolved definition due to syntax errors in the definition |  -  |
**404** | The specified API or version was not found. If it is private, make sure the request is authenticated and the authenticating user has access to this API. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_json_definition**
> object get_json_definition(owner, api, version, resolved=resolved, flatten=flatten)

Get the OpenAPI definition for the specified API version in JSON format

### Example

* Api Key Authentication (TokenSecured):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.swaggerhub.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.swaggerhub.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: TokenSecured
configuration.api_key['TokenSecured'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['TokenSecured'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.APIsApi(api_client)
    owner = 'owner_example' # str | API owner (organization or user, case-sensitive)
    api = 'api_example' # str | API name (case-sensitive)
    version = 'version_example' # str | Version identifier
    resolved = False # bool | Set to true to get the resolved version of the API definition. The content of all external $refs will be included in the resulting file. (optional) (default to False)
    flatten = False # bool | If set to `true`, it creates models from inline schemas in OpenAPI definition. AsyncAPI definitions cannot be flattened. (optional) (default to False)

    try:
        # Get the OpenAPI definition for the specified API version in JSON format
        api_response = api_instance.get_json_definition(owner, api, version, resolved=resolved, flatten=flatten)
        print("The response of APIsApi->get_json_definition:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling APIsApi->get_json_definition: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| API owner (organization or user, case-sensitive) | 
 **api** | **str**| API name (case-sensitive) | 
 **version** | **str**| Version identifier | 
 **resolved** | **bool**| Set to true to get the resolved version of the API definition. The content of all external $refs will be included in the resulting file. | [optional] [default to False]
 **flatten** | **bool**| If set to &#x60;true&#x60;, it creates models from inline schemas in OpenAPI definition. AsyncAPI definitions cannot be flattened. | [optional] [default to False]

### Return type

**object**

### Authorization

[TokenSecured](../README.md#TokenSecured)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OpenAPI definition in JSON format |  -  |
**400** | Could not generate resolved definition due to syntax errors in the definition |  -  |
**404** | The specified API or version was not found. If it is private, make sure the request is authenticated and the authenticating user has access to this API. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_lifecycle_settings**
> LifecycleSettings get_lifecycle_settings(owner, api, version)

Get the published status for the specified API and version

### Example

* Api Key Authentication (TokenSecured):

```python
import openapi_client
from openapi_client.models.lifecycle_settings import LifecycleSettings
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.swaggerhub.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.swaggerhub.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: TokenSecured
configuration.api_key['TokenSecured'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['TokenSecured'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.APIsApi(api_client)
    owner = 'owner_example' # str | API owner (organization or user, case-sensitive)
    api = 'api_example' # str | API name (case-sensitive)
    version = 'version_example' # str | Version identifier

    try:
        # Get the published status for the specified API and version
        api_response = api_instance.get_lifecycle_settings(owner, api, version)
        print("The response of APIsApi->get_lifecycle_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling APIsApi->get_lifecycle_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| API owner (organization or user, case-sensitive) | 
 **api** | **str**| API name (case-sensitive) | 
 **version** | **str**| Version identifier | 

### Return type

[**LifecycleSettings**](LifecycleSettings.md)

### Authorization

[TokenSecured](../README.md#TokenSecured)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The published status of this API version |  -  |
**401** | Access token is not set or invalid |  -  |
**404** | The specified API or version was not found. If it is private, make sure the request is authenticated and the authenticating user has access to this API. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_owner_apis**
> ApisJson get_owner_apis(owner, page=page, limit=limit, sort=sort, order=order)

Get a list of APIs of the specified owner

### Example

* Api Key Authentication (TokenSecured):

```python
import openapi_client
from openapi_client.models.apis_json import ApisJson
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.swaggerhub.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.swaggerhub.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: TokenSecured
configuration.api_key['TokenSecured'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['TokenSecured'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.APIsApi(api_client)
    owner = 'owner_example' # str | API owner (organization or user, case-sensitive)
    page = 0 # int | Page to return (optional) (default to 0)
    limit = 10 # int | Number of results per page (1 .. 100) (optional) (default to 10)
    sort = NAME # str | Sort criteria of result set: * NAME * UPDATED * CREATED * OWNER * BEST_MATCH - by relevance * TITLE - by `info.title`  (optional) (default to NAME)
    order = ASC # str | Sort order (optional) (default to ASC)

    try:
        # Get a list of APIs of the specified owner
        api_response = api_instance.get_owner_apis(owner, page=page, limit=limit, sort=sort, order=order)
        print("The response of APIsApi->get_owner_apis:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling APIsApi->get_owner_apis: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| API owner (organization or user, case-sensitive) | 
 **page** | **int**| Page to return | [optional] [default to 0]
 **limit** | **int**| Number of results per page (1 .. 100) | [optional] [default to 10]
 **sort** | **str**| Sort criteria of result set: * NAME * UPDATED * CREATED * OWNER * BEST_MATCH - by relevance * TITLE - by &#x60;info.title&#x60;  | [optional] [default to NAME]
 **order** | **str**| Sort order | [optional] [default to ASC]

### Return type

[**ApisJson**](ApisJson.md)

### Authorization

[TokenSecured](../README.md#TokenSecured)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of APIs in APIs.json format |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_private_settings**
> VisibilitySettings get_private_settings(owner, api, version)

Get the visibility (public or private) of API version

### Example

* Api Key Authentication (TokenSecured):

```python
import openapi_client
from openapi_client.models.visibility_settings import VisibilitySettings
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.swaggerhub.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.swaggerhub.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: TokenSecured
configuration.api_key['TokenSecured'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['TokenSecured'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.APIsApi(api_client)
    owner = 'owner_example' # str | API owner (organization or user, case-sensitive)
    api = 'api_example' # str | API name (case-sensitive)
    version = 'version_example' # str | Version identifier

    try:
        # Get the visibility (public or private) of API version
        api_response = api_instance.get_private_settings(owner, api, version)
        print("The response of APIsApi->get_private_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling APIsApi->get_private_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| API owner (organization or user, case-sensitive) | 
 **api** | **str**| API name (case-sensitive) | 
 **version** | **str**| Version identifier | 

### Return type

[**VisibilitySettings**](VisibilitySettings.md)

### Authorization

[TokenSecured](../README.md#TokenSecured)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The response body indicates whether this API version is private (&#x60;true&#x60;) or public (&#x60;false&#x60;) |  -  |
**401** | Access token is not set or invalid |  -  |
**404** | The specified API or version was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_standardization_errors**
> StandardizationResult get_standardization_errors(owner, api, version)

Retrieve the standardization errors for a given API definition

### Example

* Api Key Authentication (TokenSecured):

```python
import openapi_client
from openapi_client.models.standardization_result import StandardizationResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.swaggerhub.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.swaggerhub.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: TokenSecured
configuration.api_key['TokenSecured'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['TokenSecured'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.APIsApi(api_client)
    owner = 'owner_example' # str | API owner (organization or user, case-sensitive)
    api = 'api_example' # str | 
    version = 'version_example' # str | Version identifier

    try:
        # Retrieve the standardization errors for a given API definition
        api_response = api_instance.get_standardization_errors(owner, api, version)
        print("The response of APIsApi->get_standardization_errors:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling APIsApi->get_standardization_errors: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| API owner (organization or user, case-sensitive) | 
 **api** | **str**|  | 
 **version** | **str**| Version identifier | 

### Return type

[**StandardizationResult**](StandardizationResult.md)

### Authorization

[TokenSecured](../README.md#TokenSecured)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of standardization errors for the given API definition  |  -  |
**400** |  |  -  |
**404** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_validation**
> ValidationResult get_validation(owner, api, version)

Deprecated Get API Standardization errors and warnings

**Note:** This endpoint is deprecated. Use the following new endpoint instead: GET /apis/{owner}/{api}/{version}/standardization   If your organization has [API standardization](https://support.smartbear.com/swaggerhub/docs/organizations/api-standardization.html) configured, you can use this operation to validate a specific API version and get a list of errors or warnings with line numbers.  This operation checks for standardization errors only and does not return OpenAPI syntax errors (such as misspelled keywords) or YAML syntax errors.

### Example

* Api Key Authentication (TokenSecured):

```python
import openapi_client
from openapi_client.models.validation_result import ValidationResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.swaggerhub.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.swaggerhub.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: TokenSecured
configuration.api_key['TokenSecured'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['TokenSecured'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.APIsApi(api_client)
    owner = 'owner_example' # str | Organization name (case-sensitive)
    api = 'api_example' # str | API name (case-sensitive)
    version = 'version_example' # str | Version identifier

    try:
        # Deprecated Get API Standardization errors and warnings
        api_response = api_instance.get_validation(owner, api, version)
        print("The response of APIsApi->get_validation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling APIsApi->get_validation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Organization name (case-sensitive) | 
 **api** | **str**| API name (case-sensitive) | 
 **version** | **str**| Version identifier | 

### Return type

[**ValidationResult**](ValidationResult.md)

### Authorization

[TokenSecured](../README.md#TokenSecured)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An object that contains a list of standardization errors and warnings found in the specified API version. Error information includes line numbers, severity (error or warning), and error messages. If no standardization errors or warnings are found, an empty validation array is returned. |  -  |
**403** | Access denied |  -  |
**404** | The specified API or version was not found, or standardization is not enabled for this organization. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_yaml_definition**
> object get_yaml_definition(owner, api, version, resolved=resolved, flatten=flatten)

Get the OpenAPI definition for the specified API version in YAML format

### Example

* Api Key Authentication (TokenSecured):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.swaggerhub.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.swaggerhub.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: TokenSecured
configuration.api_key['TokenSecured'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['TokenSecured'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.APIsApi(api_client)
    owner = 'owner_example' # str | API owner (organization or user, case-sensitive)
    api = 'api_example' # str | API name (case-sensitive)
    version = 'version_example' # str | Version identifier
    resolved = False # bool | Set to true to get the resolved version of the API definition. The content of all external $refs will be included in the resulting file. (optional) (default to False)
    flatten = False # bool | If set to `true`, it creates models from inline schemas in OpenAPI definition. AsyncAPI definitions cannot be flattened. (optional) (default to False)

    try:
        # Get the OpenAPI definition for the specified API version in YAML format
        api_response = api_instance.get_yaml_definition(owner, api, version, resolved=resolved, flatten=flatten)
        print("The response of APIsApi->get_yaml_definition:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling APIsApi->get_yaml_definition: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| API owner (organization or user, case-sensitive) | 
 **api** | **str**| API name (case-sensitive) | 
 **version** | **str**| Version identifier | 
 **resolved** | **bool**| Set to true to get the resolved version of the API definition. The content of all external $refs will be included in the resulting file. | [optional] [default to False]
 **flatten** | **bool**| If set to &#x60;true&#x60;, it creates models from inline schemas in OpenAPI definition. AsyncAPI definitions cannot be flattened. | [optional] [default to False]

### Return type

**object**

### Authorization

[TokenSecured](../README.md#TokenSecured)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/yaml, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OpenAPI definition in YAML format |  -  |
**400** | Could not generate resolved definition due to syntax errors in the definition |  -  |
**404** | The specified API or version was not found. If it is private, make sure the request is authenticated and the authenticating user has access to this API. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rename_api**
> rename_api(owner, api, new_name)

Rename an API

The new name must follow the [naming rules](https://support.smartbear.com/swaggerhub/docs/apis/creating-api.html).

### Example

* Api Key Authentication (TokenSecured):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.swaggerhub.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.swaggerhub.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: TokenSecured
configuration.api_key['TokenSecured'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['TokenSecured'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.APIsApi(api_client)
    owner = 'owner_example' # str | API owner (organization or user, case-sensitive)
    api = 'api_example' # str | API name (case-sensitive)
    new_name = 'new_name_example' # str | New name

    try:
        # Rename an API
        api_instance.rename_api(owner, api, new_name)
    except Exception as e:
        print("Exception when calling APIsApi->rename_api: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| API owner (organization or user, case-sensitive) | 
 **api** | **str**| API name (case-sensitive) | 
 **new_name** | **str**| New name | 

### Return type

void (empty response body)

### Authorization

[TokenSecured](../README.md#TokenSecured)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The API was successfully renamed |  -  |
**401** | Access token is not set or invalid |  -  |
**403** | Access denied (insufficient user permissions) |  -  |
**404** | The specified owner or API was not found |  -  |
**409** | An API or domain with the new name already exists, or the new and old names are the same |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **save_definition**
> save_definition(owner, api, definition, is_private=is_private, version=version, force=force)

Create or update an API

Use this operation to create a new API or update an existing API by uploading its OpenAPI definition in YAML or JSON format. The authenticating user must have permissions to create or update APIs in the specified `owner` account.  The API name and version must follow SwaggerHub naming rules, otherwise the request will be rejected. Refer to:    * [API name format](https://support.smartbear.com/swaggerhub/docs/apis/creating-api.html)  * [Version format](https://support.smartbear.com/swaggerhub/docs/apis/versioning.html#format)   When a new version of an existing API is created, it does not automatically become the default version. You can use `PUT /apis/{owner}/{api}/settings/default` to set the default version.  ### cURL example Line breaks are added for readability.      curl -X POST \"https://api.swaggerhub.com/apis/OWNER/API_TO_CREATE_OR_UPDATE\"          -H \"Authorization: SWAGGERHUB_API_KEY\"          -H \"Content-Type: application/yaml\"          --data-binary @C:\\work\\swagger.yaml  **Note:** Use `--data-binary` (not `-d`) when uploading YAML files using cURL, and remember to specify the correct `Content-Type` header.

### Example

* Api Key Authentication (TokenSecured):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.swaggerhub.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.swaggerhub.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: TokenSecured
configuration.api_key['TokenSecured'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['TokenSecured'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.APIsApi(api_client)
    owner = 'owner_example' # str | API owner name (organization or user name, case-sensitive)
    api = 'api_example' # str | API name (case-sensitive)
    definition = 'definition_example' # str | OpenAPI definition in the YAML or JSON format. The content must be syntactically valid YAML or JSON.
    is_private = False # bool | Whether to make the API private (`true`) or public (`false`) (optional) (default to False)
    version = 'version_example' # str | API version to create or update. If omitted, the version is extracted from the `info.version` field of the provided OpenAPI definition.  Either the `version` parameter or the `info.version` value must be specified, otherwise the request will be rejected. If both are specified, the `version` parameter overrides the `info.version` value.  If this API version already exists, it will be updated with the new definition (unless that version has been published - in this case the update will be rejected). (optional)
    force = True # bool | Force update (optional)

    try:
        # Create or update an API
        api_instance.save_definition(owner, api, definition, is_private=is_private, version=version, force=force)
    except Exception as e:
        print("Exception when calling APIsApi->save_definition: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| API owner name (organization or user name, case-sensitive) | 
 **api** | **str**| API name (case-sensitive) | 
 **definition** | **str**| OpenAPI definition in the YAML or JSON format. The content must be syntactically valid YAML or JSON. | 
 **is_private** | **bool**| Whether to make the API private (&#x60;true&#x60;) or public (&#x60;false&#x60;) | [optional] [default to False]
 **version** | **str**| API version to create or update. If omitted, the version is extracted from the &#x60;info.version&#x60; field of the provided OpenAPI definition.  Either the &#x60;version&#x60; parameter or the &#x60;info.version&#x60; value must be specified, otherwise the request will be rejected. If both are specified, the &#x60;version&#x60; parameter overrides the &#x60;info.version&#x60; value.  If this API version already exists, it will be updated with the new definition (unless that version has been published - in this case the update will be rejected). | [optional] 
 **force** | **bool**| Force update | [optional] 

### Return type

void (empty response body)

### Authorization

[TokenSecured](../README.md#TokenSecured)

### HTTP request headers

 - **Content-Type**: application/json, application/yaml
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Existing API version was successfully updated |  -  |
**201** | New API or version was successfully created |  -  |
**205** | This status is returned when updating existing API versions that use [API Auto Mocking](https://support.smartbear.com/swaggerhub/docs/integrations/api-auto-mocking.html) with the \&quot;Update host setting\&quot; option enabled. Status 205 means the uploaded definition was successfully saved, and its &#x60;servers&#x60; or &#x60;host&#x60;+&#x60;basePath&#x60; values were automatically updated to point to the mock server.  The client can download the updated definition from SwaggerHub by using &#x60;GET /apis/{owner}/{api}&#x60;. |  -  |
**400** | Possible reasons:   * Some parameter values are invalid, or the provided OpenAPI definition is invalid.  * The specified &#x60;projectName&#x60; does not exist in the &#x60;owner&#x60; organization, or the authenticating user does not have access to this project.  * Cannot create a new API because a domain with this name already exists in the &#x60;owner&#x60; account. Try a different name. |  -  |
**401** | Access token is not set or invalid |  -  |
**403** | Maximum number of APIs reached |  -  |
**404** | The specified owner was not found |  -  |
**409** | Cannot overwrite a published API version |  -  |
**415** | Invalid content type |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search_apis**
> search_apis(query=query, state=state, page=page, limit=limit, sort=sort, order=order)

Search APIs

This is a convenience alias for `GET /specs?specType=API`.

### Example

* Api Key Authentication (TokenSecured):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.swaggerhub.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.swaggerhub.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: TokenSecured
configuration.api_key['TokenSecured'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['TokenSecured'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.APIsApi(api_client)
    query = 'query_example' # str | Free text query to match (optional)
    state = ALL # str | Matches against published state of the spec: * UNPUBLISHED - spec is a draft, a work in progress * PUBLISHED - spec is a stable version ready for consuming from client applications * ANY - either PUBLISHED or UNPUBLISHED  (optional) (default to ALL)
    page = 0 # int | Page to return (optional) (default to 0)
    limit = 10 # int | Number of results per page (1 .. 100) (optional) (default to 10)
    sort = NAME # str | Sort criteria of result set: * NAME * UPDATED * CREATED * OWNER * BEST_MATCH - by relevance * TITLE - by `info.title`  (optional) (default to NAME)
    order = ASC # str | Sort order (optional) (default to ASC)

    try:
        # Search APIs
        api_instance.search_apis(query=query, state=state, page=page, limit=limit, sort=sort, order=order)
    except Exception as e:
        print("Exception when calling APIsApi->search_apis: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Free text query to match | [optional] 
 **state** | **str**| Matches against published state of the spec: * UNPUBLISHED - spec is a draft, a work in progress * PUBLISHED - spec is a stable version ready for consuming from client applications * ANY - either PUBLISHED or UNPUBLISHED  | [optional] [default to ALL]
 **page** | **int**| Page to return | [optional] [default to 0]
 **limit** | **int**| Number of results per page (1 .. 100) | [optional] [default to 10]
 **sort** | **str**| Sort criteria of result set: * NAME * UPDATED * CREATED * OWNER * BEST_MATCH - by relevance * TITLE - by &#x60;info.title&#x60;  | [optional] [default to NAME]
 **order** | **str**| Sort order | [optional] [default to ASC]

### Return type

void (empty response body)

### Authorization

[TokenSecured](../README.md#TokenSecured)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**303** | Redirect to &#x60;GET /specs&#x60;, with all query parameters preserved |  * Location -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search_apis_and_domains**
> ApisJson search_apis_and_domains(spec_type=spec_type, visibility=visibility, state=state, owner=owner, query=query, page=page, limit=limit, sort=sort, order=order)

Retrieve a list of currently defined APIs, domains, and templates in APIs.json format

### Example

* Api Key Authentication (TokenSecured):

```python
import openapi_client
from openapi_client.models.apis_json import ApisJson
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.swaggerhub.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.swaggerhub.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: TokenSecured
configuration.api_key['TokenSecured'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['TokenSecured'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.APIsApi(api_client)
    spec_type = ANY # str | Type of definitions to search: * API - APIs only * DOMAIN - domains only * TEMPLATE - templates only * ANY - APIs, domains, and templates  (optional) (default to ANY)
    visibility = ANY # str | The visibility of a definition in SwaggerHub: * PUBLIC - can be viewed by anyone * PRIVATE - can only be viewed by you or your organization and those that you are collaborating with or have shared it with * ANY - either PUBLIC or PRIVATE  (optional) (default to ANY)
    state = ALL # str | Matches against published state of the spec: * UNPUBLISHED - spec is a draft, a work in progress * PUBLISHED - spec is a stable version ready for consuming from client applications * ANY - either PUBLISHED or UNPUBLISHED  (optional) (default to ALL)
    owner = 'owner_example' # str | API or domain owner. Can be username or organization name. Case-sensitive. (optional)
    query = 'query_example' # str | Free text query to match (optional)
    page = 0 # int | Page to return (optional) (default to 0)
    limit = 10 # int | Number of results per page (1 .. 100) (optional) (default to 10)
    sort = NAME # str | Sort criteria of result set: * NAME * UPDATED * CREATED * OWNER * BEST_MATCH - by relevance * TITLE - by `info.title`  (optional) (default to NAME)
    order = ASC # str | Sort order (optional) (default to ASC)

    try:
        # Retrieve a list of currently defined APIs, domains, and templates in APIs.json format
        api_response = api_instance.search_apis_and_domains(spec_type=spec_type, visibility=visibility, state=state, owner=owner, query=query, page=page, limit=limit, sort=sort, order=order)
        print("The response of APIsApi->search_apis_and_domains:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling APIsApi->search_apis_and_domains: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spec_type** | **str**| Type of definitions to search: * API - APIs only * DOMAIN - domains only * TEMPLATE - templates only * ANY - APIs, domains, and templates  | [optional] [default to ANY]
 **visibility** | **str**| The visibility of a definition in SwaggerHub: * PUBLIC - can be viewed by anyone * PRIVATE - can only be viewed by you or your organization and those that you are collaborating with or have shared it with * ANY - either PUBLIC or PRIVATE  | [optional] [default to ANY]
 **state** | **str**| Matches against published state of the spec: * UNPUBLISHED - spec is a draft, a work in progress * PUBLISHED - spec is a stable version ready for consuming from client applications * ANY - either PUBLISHED or UNPUBLISHED  | [optional] [default to ALL]
 **owner** | **str**| API or domain owner. Can be username or organization name. Case-sensitive. | [optional] 
 **query** | **str**| Free text query to match | [optional] 
 **page** | **int**| Page to return | [optional] [default to 0]
 **limit** | **int**| Number of results per page (1 .. 100) | [optional] [default to 10]
 **sort** | **str**| Sort criteria of result set: * NAME * UPDATED * CREATED * OWNER * BEST_MATCH - by relevance * TITLE - by &#x60;info.title&#x60;  | [optional] [default to NAME]
 **order** | **str**| Sort order | [optional] [default to ASC]

### Return type

[**ApisJson**](ApisJson.md)

### Authorization

[TokenSecured](../README.md#TokenSecured)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of APIs, domains, and templates in APIs.json format |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **set_api_comment_status_v2**
> set_api_comment_status_v2(owner, api, version, comment, status)

Resolve or reopen a comment

### Example

* Api Key Authentication (TokenSecured):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.swaggerhub.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.swaggerhub.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: TokenSecured
configuration.api_key['TokenSecured'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['TokenSecured'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.APIsApi(api_client)
    owner = 'owner_example' # str | API owner (organization or user, case-sensitive)
    api = 'api_example' # str | API name (case-sensitive)
    version = 'version_example' # str | Version identifier
    comment = 'comment_example' # str | Comment identifier
    status = 'status_example' # str | Comment status

    try:
        # Resolve or reopen a comment
        api_instance.set_api_comment_status_v2(owner, api, version, comment, status)
    except Exception as e:
        print("Exception when calling APIsApi->set_api_comment_status_v2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| API owner (organization or user, case-sensitive) | 
 **api** | **str**| API name (case-sensitive) | 
 **version** | **str**| Version identifier | 
 **comment** | **str**| Comment identifier | 
 **status** | **str**| Comment status | 

### Return type

void (empty response body)

### Authorization

[TokenSecured](../README.md#TokenSecured)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Comment status was updated |  -  |
**400** | Request body invalid |  -  |
**401** | Access token is not set or invalid |  -  |
**403** | The comment feature is not available for the organization&#39;s plan, or the authenticating user does not have permission to complete this action |  -  |
**404** | The specified API or comment was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **set_api_default_version**
> set_api_default_version(owner, api, default_version)

Set the default API version

### Example

* Api Key Authentication (TokenSecured):

```python
import openapi_client
from openapi_client.models.default_version import DefaultVersion
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.swaggerhub.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.swaggerhub.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: TokenSecured
configuration.api_key['TokenSecured'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['TokenSecured'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.APIsApi(api_client)
    owner = 'owner_example' # str | API owner (organization or user, case-sensitive)
    api = 'api_example' # str | API name (case-sensitive)
    default_version = openapi_client.DefaultVersion() # DefaultVersion | An object that specifies the default version for this API

    try:
        # Set the default API version
        api_instance.set_api_default_version(owner, api, default_version)
    except Exception as e:
        print("Exception when calling APIsApi->set_api_default_version: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| API owner (organization or user, case-sensitive) | 
 **api** | **str**| API name (case-sensitive) | 
 **default_version** | [**DefaultVersion**](DefaultVersion.md)| An object that specifies the default version for this API | 

### Return type

void (empty response body)

### Authorization

[TokenSecured](../README.md#TokenSecured)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The default version was successfully changed |  -  |
**401** | Access token is not set or invalid |  -  |
**403** | Access denied (insufficient user permissions) |  -  |
**404** | The specified API or version was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **set_lifecycle_settings**
> set_lifecycle_settings(owner, api, version, settings, force=force)

Publish or unpublish an API version

### Example

* Api Key Authentication (TokenSecured):

```python
import openapi_client
from openapi_client.models.lifecycle_settings import LifecycleSettings
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.swaggerhub.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.swaggerhub.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: TokenSecured
configuration.api_key['TokenSecured'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['TokenSecured'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.APIsApi(api_client)
    owner = 'owner_example' # str | API owner (organization or user, case-sensitive)
    api = 'api_example' # str | API name (case-sensitive)
    version = 'version_example' # str | Version identifier
    settings = openapi_client.LifecycleSettings() # LifecycleSettings | An object that specifies the new `published` state: `true` means published, `false` - unpublished
    force = False # bool | To publish an API that references _unpublished_ domains, this parameter must be `true`. Otherwise, the request will be rejected with status code 424. (optional) (default to False)

    try:
        # Publish or unpublish an API version
        api_instance.set_lifecycle_settings(owner, api, version, settings, force=force)
    except Exception as e:
        print("Exception when calling APIsApi->set_lifecycle_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| API owner (organization or user, case-sensitive) | 
 **api** | **str**| API name (case-sensitive) | 
 **version** | **str**| Version identifier | 
 **settings** | [**LifecycleSettings**](LifecycleSettings.md)| An object that specifies the new &#x60;published&#x60; state: &#x60;true&#x60; means published, &#x60;false&#x60; - unpublished | 
 **force** | **bool**| To publish an API that references _unpublished_ domains, this parameter must be &#x60;true&#x60;. Otherwise, the request will be rejected with status code 424. | [optional] [default to False]

### Return type

void (empty response body)

### Authorization

[TokenSecured](../README.md#TokenSecured)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully published or unpublished the API |  -  |
**400** | The API definition contains [standardization](https://support.smartbear.com/swaggerhub/docs/organizations/api-standardization.html) errors which prevent it from being published. |  -  |
**401** | Access token is not set or invalid |  -  |
**403** | Access denied (insufficient user permissions) |  -  |
**404** | The specified API or version was not found |  -  |
**424** | The API version you are trying to publish contains references to _unpublished_ domains. If those domains change, it may affect your API. To publish the API anyway, repeat the request with the &#x60;force&#x3D;true&#x60; query parameter.  The response body contains a list of unpublished domains referenced from this API. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **set_private_settings**
> set_private_settings(owner, api, version, settings)

Set the visibility (public or private) of an API version

### Example

* Api Key Authentication (TokenSecured):

```python
import openapi_client
from openapi_client.models.visibility_settings import VisibilitySettings
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.swaggerhub.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.swaggerhub.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: TokenSecured
configuration.api_key['TokenSecured'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['TokenSecured'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.APIsApi(api_client)
    owner = 'owner_example' # str | API owner (organization or user, case-sensitive)
    api = 'api_example' # str | API name (case-sensitive)
    version = 'version_example' # str | Version identifier
    settings = openapi_client.VisibilitySettings() # VisibilitySettings | An object that specifies the new visibility level: `true` means private, `false` - public

    try:
        # Set the visibility (public or private) of an API version
        api_instance.set_private_settings(owner, api, version, settings)
    except Exception as e:
        print("Exception when calling APIsApi->set_private_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| API owner (organization or user, case-sensitive) | 
 **api** | **str**| API name (case-sensitive) | 
 **version** | **str**| Version identifier | 
 **settings** | [**VisibilitySettings**](VisibilitySettings.md)| An object that specifies the new visibility level: &#x60;true&#x60; means private, &#x60;false&#x60; - public | 

### Return type

void (empty response body)

### Authorization

[TokenSecured](../README.md#TokenSecured)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | API visibility was updated |  -  |
**401** | Access token is not set or invalid |  -  |
**403** | Access denied (insufficient user permissions) |  -  |
**404** | The specified API or version was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_api_comment_reply_v2**
> Comment update_api_comment_reply_v2(owner, api, version, comment, reply, body=body)

Update a comment reply

### Example

* Api Key Authentication (TokenSecured):

```python
import openapi_client
from openapi_client.models.comment import Comment
from openapi_client.models.comment_patch import CommentPatch
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.swaggerhub.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.swaggerhub.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: TokenSecured
configuration.api_key['TokenSecured'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['TokenSecured'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.APIsApi(api_client)
    owner = 'owner_example' # str | API owner (organization or user, case-sensitive)
    api = 'api_example' # str | API name (case-sensitive)
    version = 'version_example' # str | Version identifier
    comment = 'comment_example' # str | Comment identifier
    reply = 'reply_example' # str | Reply identifier
    body = openapi_client.CommentPatch() # CommentPatch |  (optional)

    try:
        # Update a comment reply
        api_response = api_instance.update_api_comment_reply_v2(owner, api, version, comment, reply, body=body)
        print("The response of APIsApi->update_api_comment_reply_v2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling APIsApi->update_api_comment_reply_v2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| API owner (organization or user, case-sensitive) | 
 **api** | **str**| API name (case-sensitive) | 
 **version** | **str**| Version identifier | 
 **comment** | **str**| Comment identifier | 
 **reply** | **str**| Reply identifier | 
 **body** | [**CommentPatch**](CommentPatch.md)|  | [optional] 

### Return type

[**Comment**](Comment.md)

### Authorization

[TokenSecured](../README.md#TokenSecured)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Сomment reply was updated |  -  |
**400** | Request body invalid |  -  |
**401** | Access token is not set or invalid |  -  |
**403** | The comment feature is not available for the organization&#39;s plan, or the authenticating user does not have permission to complete this action |  -  |
**404** | The specified API, comment, or reply was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_api_comment_v2**
> ClosableComment update_api_comment_v2(owner, api, version, comment, body=body)

Update a comment

### Example

* Api Key Authentication (TokenSecured):

```python
import openapi_client
from openapi_client.models.closable_comment import ClosableComment
from openapi_client.models.closable_comment_patch import ClosableCommentPatch
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.swaggerhub.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.swaggerhub.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: TokenSecured
configuration.api_key['TokenSecured'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['TokenSecured'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.APIsApi(api_client)
    owner = 'owner_example' # str | API owner (organization or user, case-sensitive)
    api = 'api_example' # str | API name (case-sensitive)
    version = 'version_example' # str | Version identifier
    comment = 'comment_example' # str | Comment identifier
    body = openapi_client.ClosableCommentPatch() # ClosableCommentPatch |  (optional)

    try:
        # Update a comment
        api_response = api_instance.update_api_comment_v2(owner, api, version, comment, body=body)
        print("The response of APIsApi->update_api_comment_v2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling APIsApi->update_api_comment_v2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| API owner (organization or user, case-sensitive) | 
 **api** | **str**| API name (case-sensitive) | 
 **version** | **str**| Version identifier | 
 **comment** | **str**| Comment identifier | 
 **body** | [**ClosableCommentPatch**](ClosableCommentPatch.md)|  | [optional] 

### Return type

[**ClosableComment**](ClosableComment.md)

### Authorization

[TokenSecured](../README.md#TokenSecured)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Comment was updated |  -  |
**400** | Request body invalid |  -  |
**401** | Access token is not set or invalid |  -  |
**403** | The comment feature is not available for the organization&#39;s plan, or the authenticating user does not have permission to complete this action |  -  |
**404** | The specified API or comment was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_api_comments_v2**
> update_api_comments_v2(owner, api, version, body)

Bulk update comments

### Example

* Api Key Authentication (TokenSecured):

```python
import openapi_client
from openapi_client.models.comments_batch import CommentsBatch
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.swaggerhub.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.swaggerhub.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: TokenSecured
configuration.api_key['TokenSecured'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['TokenSecured'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.APIsApi(api_client)
    owner = 'owner_example' # str | API owner (organization or user, case-sensitive)
    api = 'api_example' # str | API name (case-sensitive)
    version = 'version_example' # str | Version identifier
    body = openapi_client.CommentsBatch() # CommentsBatch | 

    try:
        # Bulk update comments
        api_instance.update_api_comments_v2(owner, api, version, body)
    except Exception as e:
        print("Exception when calling APIsApi->update_api_comments_v2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| API owner (organization or user, case-sensitive) | 
 **api** | **str**| API name (case-sensitive) | 
 **version** | **str**| Version identifier | 
 **body** | [**CommentsBatch**](CommentsBatch.md)|  | 

### Return type

void (empty response body)

### Authorization

[TokenSecured](../README.md#TokenSecured)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Comments were updated |  -  |
**400** | Request body invalid |  -  |
**401** | Access token is not set or invalid |  -  |
**403** | The comment feature is not available for the organization&#39;s plan, or the authenticating user does not have permission to complete this action |  -  |
**404** | The specified API, comment, or reply was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

