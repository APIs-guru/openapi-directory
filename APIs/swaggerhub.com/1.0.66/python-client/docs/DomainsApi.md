# openapi_client.DomainsApi

All URIs are relative to *https://api.swaggerhub.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_domain_comment_reply_v2**](DomainsApi.md#add_domain_comment_reply_v2) | **POST** /domains/{owner}/{domain}/{version}/comments/{comment}/replies | Reply to a comment
[**add_domain_comment_v2**](DomainsApi.md#add_domain_comment_v2) | **POST** /domains/{owner}/{domain}/{version}/comments | Add a new comment
[**clone_domain**](DomainsApi.md#clone_domain) | **POST** /domains/{owner}/{domain}/{version}/clone | Create a new domain version
[**delete_domain**](DomainsApi.md#delete_domain) | **DELETE** /domains/{owner}/{domain} | Delete a domain
[**delete_domain_comment_reply_v2**](DomainsApi.md#delete_domain_comment_reply_v2) | **DELETE** /domains/{owner}/{domain}/{version}/comments/{comment}/replies/{reply} | Delete a comment reply
[**delete_domain_comment_v2**](DomainsApi.md#delete_domain_comment_v2) | **DELETE** /domains/{owner}/{domain}/{version}/comments/{comment} | Delete a comment
[**delete_domain_version**](DomainsApi.md#delete_domain_version) | **DELETE** /domains/{owner}/{domain}/{version} | Delete a domain version
[**fork_domain**](DomainsApi.md#fork_domain) | **POST** /domains/{owner}/{domain}/{version}/fork | Fork a domain
[**get_domain_comments_v2**](DomainsApi.md#get_domain_comments_v2) | **GET** /domains/{owner}/{domain}/{version}/comments | Get comments for the specified domain version
[**get_domain_default_version**](DomainsApi.md#get_domain_default_version) | **GET** /domains/{owner}/{domain}/settings/default | Get the default version of a domain
[**get_domain_definition**](DomainsApi.md#get_domain_definition) | **GET** /domains/{owner}/{domain}/{version} | Get the OpenAPI definition of the specified domain version
[**get_domain_json_definition**](DomainsApi.md#get_domain_json_definition) | **GET** /domains/{owner}/{domain}/{version}/domain.json | Get the OpenAPI definition for the specified domain version in JSON format
[**get_domain_lifecycle_settings**](DomainsApi.md#get_domain_lifecycle_settings) | **GET** /domains/{owner}/{domain}/{version}/settings/lifecycle | Get the published status for the specified domain and version
[**get_domain_private_settings**](DomainsApi.md#get_domain_private_settings) | **GET** /domains/{owner}/{domain}/{version}/settings/private | Get the visibility (public or private) of a domain version
[**get_domain_versions**](DomainsApi.md#get_domain_versions) | **GET** /domains/{owner}/{domain} | Get a list of domain versions
[**get_domain_yaml_definition**](DomainsApi.md#get_domain_yaml_definition) | **GET** /domains/{owner}/{domain}/{version}/domain.yaml | Get the OpenAPI definition for the specified domain version in YAML format
[**get_owner_domains**](DomainsApi.md#get_owner_domains) | **GET** /domains/{owner} | Get a list of domains of the specified owner
[**rename_domain**](DomainsApi.md#rename_domain) | **POST** /domains/{owner}/{domain}/rename | Rename a domain
[**save_domain_definition**](DomainsApi.md#save_domain_definition) | **POST** /domains/{owner}/{domain} | Create or update a domain
[**search_apis_and_domains_0**](DomainsApi.md#search_apis_and_domains_0) | **GET** /specs | Retrieve a list of currently defined APIs, domains, and templates in APIs.json format
[**search_domains**](DomainsApi.md#search_domains) | **GET** /domains | Search domains
[**set_domain_comment_status_v2**](DomainsApi.md#set_domain_comment_status_v2) | **PUT** /domains/{owner}/{domain}/{version}/comments/{comment}/status/{status} | Resolve or reopen a comment
[**set_domain_default_version**](DomainsApi.md#set_domain_default_version) | **PUT** /domains/{owner}/{domain}/settings/default | Set the default version for a domain
[**set_domain_lifecycle_settings**](DomainsApi.md#set_domain_lifecycle_settings) | **PUT** /domains/{owner}/{domain}/{version}/settings/lifecycle | Publish or unpublish a domain version
[**set_domain_private_settings**](DomainsApi.md#set_domain_private_settings) | **PUT** /domains/{owner}/{domain}/{version}/settings/private | Set the visibility (public or private) of a domain version
[**update_domain_comment_reply_v2**](DomainsApi.md#update_domain_comment_reply_v2) | **PATCH** /domains/{owner}/{domain}/{version}/comments/{comment}/replies/{reply} | Update a comment reply
[**update_domain_comment_v2**](DomainsApi.md#update_domain_comment_v2) | **PATCH** /domains/{owner}/{domain}/{version}/comments/{comment} | Update a comment
[**update_domain_comments_v2**](DomainsApi.md#update_domain_comments_v2) | **POST** /domains/{owner}/{domain}/{version}/comments/batch | Bulk update comments


# **add_domain_comment_reply_v2**
> List[Comment] add_domain_comment_reply_v2(owner, domain, version, comment, body)

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
    api_instance = openapi_client.DomainsApi(api_client)
    owner = 'owner_example' # str | Domain owner (organization or user, case-sensitive)
    domain = 'domain_example' # str | Domain name (case-sensitive)
    version = 'version_example' # str | Version identifier
    comment = 'comment_example' # str | Comment identifier
    body = openapi_client.NewReply() # NewReply | 

    try:
        # Reply to a comment
        api_response = api_instance.add_domain_comment_reply_v2(owner, domain, version, comment, body)
        print("The response of DomainsApi->add_domain_comment_reply_v2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomainsApi->add_domain_comment_reply_v2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Domain owner (organization or user, case-sensitive) | 
 **domain** | **str**| Domain name (case-sensitive) | 
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
**200** | Newly created reply |  -  |
**400** | Request body invalid |  -  |
**401** | Access token is not set or invalid |  -  |
**403** | The comment feature is not available for the organization&#39;s plan, or the authenticating user does not have permission to complete this action |  -  |
**404** | The specified domain or comment was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **add_domain_comment_v2**
> ClosableComment add_domain_comment_v2(owner, domain, version, body)

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
    api_instance = openapi_client.DomainsApi(api_client)
    owner = 'owner_example' # str | Domain owner (organization or user, case-sensitive)
    domain = 'domain_example' # str | Domain name (case-sensitive)
    version = 'version_example' # str | Version identifier
    body = openapi_client.NewComment() # NewComment | 

    try:
        # Add a new comment
        api_response = api_instance.add_domain_comment_v2(owner, domain, version, body)
        print("The response of DomainsApi->add_domain_comment_v2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomainsApi->add_domain_comment_v2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Domain owner (organization or user, case-sensitive) | 
 **domain** | **str**| Domain name (case-sensitive) | 
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
**200** | Newly created comment for the specified domain |  -  |
**400** | Request body invalid |  -  |
**401** | Access token is not set or invalid |  -  |
**403** | The comment feature is not available for the organization&#39;s plan, or the authenticating user does not have permission to complete this action |  -  |
**404** | The specified domain was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clone_domain**
> clone_domain(owner, domain, version, new_version)

Create a new domain version

Use this operation to clone an existing domain version as a new version.  Note that the new version is not automatically set as the default version.

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
    api_instance = openapi_client.DomainsApi(api_client)
    owner = 'owner_example' # str | Domain owner (organization or user, case-sensitive)
    domain = 'domain_example' # str | Domain name (case-sensitive)
    version = 'version_example' # str | The version to clone (case-sensitive)
    new_version = openapi_client.NewVersion() # NewVersion | An object that contains the new version number and other parameters. The version number must be in the format described in the [documentation](https://support.smartbear.com/swaggerhub/docs/apis/versioning.html#format).

    try:
        # Create a new domain version
        api_instance.clone_domain(owner, domain, version, new_version)
    except Exception as e:
        print("Exception when calling DomainsApi->clone_domain: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Domain owner (organization or user, case-sensitive) | 
 **domain** | **str**| Domain name (case-sensitive) | 
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
**201** | New domain version was successfully created |  -  |
**400** | Bad request |  -  |
**403** | Access denied |  -  |
**404** | The specified domain or version was not found |  -  |
**409** | The domain version you are trying to create already exists |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_domain**
> delete_domain(owner, domain, force=force)

Delete a domain

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
    api_instance = openapi_client.DomainsApi(api_client)
    owner = 'owner_example' # str | Domain owner (organization or user, case-sensitive)
    domain = 'domain_example' # str | Domain name (case-sensitive)
    force = False # bool | If this domain is referenced from other APIs and domains, this parameter must be `true`. Otherwise, the request will be rejected with status code 424. (optional) (default to False)

    try:
        # Delete a domain
        api_instance.delete_domain(owner, domain, force=force)
    except Exception as e:
        print("Exception when calling DomainsApi->delete_domain: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Domain owner (organization or user, case-sensitive) | 
 **domain** | **str**| Domain name (case-sensitive) | 
 **force** | **bool**| If this domain is referenced from other APIs and domains, this parameter must be &#x60;true&#x60;. Otherwise, the request will be rejected with status code 424. | [optional] [default to False]

### Return type

void (empty response body)

### Authorization

[TokenSecured](../README.md#TokenSecured)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The domain was successfully deleted |  -  |
**403** | Access denied |  -  |
**404** | The specified domain not found |  -  |
**409** | The domain has published versions and can not be deleted |  -  |
**424** | The domain you are trying to delete is referenced from other APIs and domains. To delete it anyway, repeat the request with the &#x60;force&#x3D;true&#x60; query parameter.  The response body contains a list of APIs and domains that reference this domain. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_domain_comment_reply_v2**
> delete_domain_comment_reply_v2(owner, domain, version, comment, reply)

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
    api_instance = openapi_client.DomainsApi(api_client)
    owner = 'owner_example' # str | Domain owner (organization or user, case-sensitive)
    domain = 'domain_example' # str | Domain name (case-sensitive)
    version = 'version_example' # str | Version identifier
    comment = 'comment_example' # str | Comment identifier
    reply = 'reply_example' # str | Reply identifier

    try:
        # Delete a comment reply
        api_instance.delete_domain_comment_reply_v2(owner, domain, version, comment, reply)
    except Exception as e:
        print("Exception when calling DomainsApi->delete_domain_comment_reply_v2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Domain owner (organization or user, case-sensitive) | 
 **domain** | **str**| Domain name (case-sensitive) | 
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
**200** | Comment reply was deleted |  -  |
**401** | Access token is not set or invalid |  -  |
**403** | The comment feature is not available for the organization&#39;s plan, or the authenticating user does not have permission to complete this action |  -  |
**404** | The specified domain, comment, or reply was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_domain_comment_v2**
> delete_domain_comment_v2(owner, domain, version, comment)

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
    api_instance = openapi_client.DomainsApi(api_client)
    owner = 'owner_example' # str | Domain owner (organization or user, case-sensitive)
    domain = 'domain_example' # str | Domain name (case-sensitive)
    version = 'version_example' # str | Version identifier
    comment = 'comment_example' # str | Comment identifier

    try:
        # Delete a comment
        api_instance.delete_domain_comment_v2(owner, domain, version, comment)
    except Exception as e:
        print("Exception when calling DomainsApi->delete_domain_comment_v2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Domain owner (organization or user, case-sensitive) | 
 **domain** | **str**| Domain name (case-sensitive) | 
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
**404** | The specified domain or comment was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_domain_version**
> delete_domain_version(owner, domain, version, force=force)

Delete a domain version

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
    api_instance = openapi_client.DomainsApi(api_client)
    owner = 'owner_example' # str | Domain owner (organization or user, case-sensitive)
    domain = 'domain_example' # str | Domain name (case-sensitive)
    version = 'version_example' # str | Version identifier
    force = False # bool | If this domain version is referenced from other APIs and domains, this parameter must be `true`. Otherwise, the request will be rejected with status code 424. (optional) (default to False)

    try:
        # Delete a domain version
        api_instance.delete_domain_version(owner, domain, version, force=force)
    except Exception as e:
        print("Exception when calling DomainsApi->delete_domain_version: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Domain owner (organization or user, case-sensitive) | 
 **domain** | **str**| Domain name (case-sensitive) | 
 **version** | **str**| Version identifier | 
 **force** | **bool**| If this domain version is referenced from other APIs and domains, this parameter must be &#x60;true&#x60;. Otherwise, the request will be rejected with status code 424. | [optional] [default to False]

### Return type

void (empty response body)

### Authorization

[TokenSecured](../README.md#TokenSecured)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The domain version was successfully deleted |  -  |
**403** | Access denied |  -  |
**404** | The specified domain or version was not found |  -  |
**409** | The domain version is published and can not be deleted or it is the only version of this domain |  -  |
**424** | The domain version you are trying to delete is referenced from other APIs and domains. To delete it anyway, repeat the request with the &#x60;force&#x3D;true&#x60; query parameter.  The response body contains a list of APIs and domains that reference this domain version. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fork_domain**
> fork_domain(owner, domain, version, fork_version)

Fork a domain

Creates a [fork](https://support.smartbear.com/swaggerhub/docs/apis/forking-api.html) of the specified domain definition and version. The fork can be created as a new domain, or as a new version in another existing domain.

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
    api_instance = openapi_client.DomainsApi(api_client)
    owner = 'owner_example' # str | Domain owner (organization or user, case-sensitive)
    domain = 'domain_example' # str | Domain name (case-sensitive)
    version = 'version_example' # str | Version identifier
    fork_version = openapi_client.ForkVersion() # ForkVersion | Fork parameters

    try:
        # Fork a domain
        api_instance.fork_domain(owner, domain, version, fork_version)
    except Exception as e:
        print("Exception when calling DomainsApi->fork_domain: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Domain owner (organization or user, case-sensitive) | 
 **domain** | **str**| Domain name (case-sensitive) | 
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
**201** | The domain was successfully forked |  -  |
**400** | Some parameters are missing or invalid |  -  |
**401** | Access token is not set or invalid |  -  |
**403** | Access denied |  -  |
**404** | The specified owner or domain was not found |  -  |
**409** | A domain with the name and version you&#39;re trying to create already exists |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_domain_comments_v2**
> List[ClosableComment] get_domain_comments_v2(owner, domain, version)

Get comments for the specified domain version

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
    api_instance = openapi_client.DomainsApi(api_client)
    owner = 'owner_example' # str | Domain owner (organization or user, case-sensitive)
    domain = 'domain_example' # str | Domain name (case-sensitive)
    version = 'version_example' # str | Version identifier

    try:
        # Get comments for the specified domain version
        api_response = api_instance.get_domain_comments_v2(owner, domain, version)
        print("The response of DomainsApi->get_domain_comments_v2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomainsApi->get_domain_comments_v2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Domain owner (organization or user, case-sensitive) | 
 **domain** | **str**| Domain name (case-sensitive) | 
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
**200** | Comments for the specified domain version |  -  |
**204** | No comments were found for the specified domain version |  -  |
**401** | Access token is not set or invalid |  -  |
**403** | The comment feature is not available for the organization&#39;s plan, or the authenticating user does not have permission to complete this action |  -  |
**404** | The specified domain was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_domain_default_version**
> DefaultVersion get_domain_default_version(owner, domain)

Get the default version of a domain

This operation returns the version identifier, such as `1.0.0`. To get the definition itself, use `GET /domains/{owner}/{domain}/{version}`.

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
    api_instance = openapi_client.DomainsApi(api_client)
    owner = 'owner_example' # str | Domain owner (organization or user, case-sensitive)
    domain = 'domain_example' # str | Domain name (case-sensitive)

    try:
        # Get the default version of a domain
        api_response = api_instance.get_domain_default_version(owner, domain)
        print("The response of DomainsApi->get_domain_default_version:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomainsApi->get_domain_default_version: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Domain owner (organization or user, case-sensitive) | 
 **domain** | **str**| Domain name (case-sensitive) | 

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
**200** | The default version identifier for this domain |  -  |
**404** | The specified API was not found. If it is private, make sure the request is authenticated. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_domain_definition**
> object get_domain_definition(owner, domain, version)

Get the OpenAPI definition of the specified domain version

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
    api_instance = openapi_client.DomainsApi(api_client)
    owner = 'owner_example' # str | Domain owner (organization or user, case-sensitive)
    domain = 'domain_example' # str | Domain name (case-sensitive)
    version = 'version_example' # str | Version identifier

    try:
        # Get the OpenAPI definition of the specified domain version
        api_response = api_instance.get_domain_definition(owner, domain, version)
        print("The response of DomainsApi->get_domain_definition:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomainsApi->get_domain_definition: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Domain owner (organization or user, case-sensitive) | 
 **domain** | **str**| Domain name (case-sensitive) | 
 **version** | **str**| Version identifier | 

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
**200** | OpenAPI definition of a domain in the requested format (YAML or JSON) |  -  |
**404** | The specified domain or version was not found. If it is private, make sure the request is authenticated and the authenticating user has access to this API. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_domain_json_definition**
> object get_domain_json_definition(owner, domain, version)

Get the OpenAPI definition for the specified domain version in JSON format

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
    api_instance = openapi_client.DomainsApi(api_client)
    owner = 'owner_example' # str | Domain owner (organization or user, case-sensitive)
    domain = 'domain_example' # str | Domain name (case-sensitive)
    version = 'version_example' # str | Version identifier

    try:
        # Get the OpenAPI definition for the specified domain version in JSON format
        api_response = api_instance.get_domain_json_definition(owner, domain, version)
        print("The response of DomainsApi->get_domain_json_definition:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomainsApi->get_domain_json_definition: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Domain owner (organization or user, case-sensitive) | 
 **domain** | **str**| Domain name (case-sensitive) | 
 **version** | **str**| Version identifier | 

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
**200** | Domain definition in JSON format |  -  |
**404** | The specified domain or version was not found. If it is private, make sure the request is authenticated and the authenticating user has access to this API. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_domain_lifecycle_settings**
> LifecycleSettings get_domain_lifecycle_settings(owner, domain, version)

Get the published status for the specified domain and version

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
    api_instance = openapi_client.DomainsApi(api_client)
    owner = 'owner_example' # str | Domain owner (organization or user, case-sensitive)
    domain = 'domain_example' # str | Domain name (case-sensitive)
    version = 'version_example' # str | Version identifier

    try:
        # Get the published status for the specified domain and version
        api_response = api_instance.get_domain_lifecycle_settings(owner, domain, version)
        print("The response of DomainsApi->get_domain_lifecycle_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomainsApi->get_domain_lifecycle_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Domain owner (organization or user, case-sensitive) | 
 **domain** | **str**| Domain name (case-sensitive) | 
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
**200** | The published status of this domain version |  -  |
**401** | Access token is not set or invalid |  -  |
**404** | The specified domain or version was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_domain_private_settings**
> VisibilitySettings get_domain_private_settings(owner, domain, version)

Get the visibility (public or private) of a domain version

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
    api_instance = openapi_client.DomainsApi(api_client)
    owner = 'owner_example' # str | Domain owner (organization or user, case-sensitive)
    domain = 'domain_example' # str | Domain name (case-sensitive)
    version = 'version_example' # str | Version identifier

    try:
        # Get the visibility (public or private) of a domain version
        api_response = api_instance.get_domain_private_settings(owner, domain, version)
        print("The response of DomainsApi->get_domain_private_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomainsApi->get_domain_private_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Domain owner (organization or user, case-sensitive) | 
 **domain** | **str**| Domain name (case-sensitive) | 
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
**200** | The response body indicates whether this domain version is private (&#x60;true&#x60;) or public (&#x60;false&#x60;) |  -  |
**401** | Access token is not set or invalid |  -  |
**404** | The specified domain or version was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_domain_versions**
> ApisJson get_domain_versions(owner, domain)

Get a list of domain versions

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
    api_instance = openapi_client.DomainsApi(api_client)
    owner = 'owner_example' # str | Domain owner (organization or user, case-sensitive)
    domain = 'domain_example' # str | Domain name (case-sensitive)

    try:
        # Get a list of domain versions
        api_response = api_instance.get_domain_versions(owner, domain)
        print("The response of DomainsApi->get_domain_versions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomainsApi->get_domain_versions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Domain owner (organization or user, case-sensitive) | 
 **domain** | **str**| Domain name (case-sensitive) | 

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
**200** | A list of domain versions in APIs.json format |  -  |
**404** | The specified domain was not found. If it is private, make sure the request is authenticated and the authenticating user has access to this API. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_domain_yaml_definition**
> object get_domain_yaml_definition(owner, domain, version)

Get the OpenAPI definition for the specified domain version in YAML format

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
    api_instance = openapi_client.DomainsApi(api_client)
    owner = 'owner_example' # str | Domain owner (organization or user, case-sensitive)
    domain = 'domain_example' # str | Domain name (case-sensitive)
    version = 'version_example' # str | Version identifier

    try:
        # Get the OpenAPI definition for the specified domain version in YAML format
        api_response = api_instance.get_domain_yaml_definition(owner, domain, version)
        print("The response of DomainsApi->get_domain_yaml_definition:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomainsApi->get_domain_yaml_definition: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Domain owner (organization or user, case-sensitive) | 
 **domain** | **str**| Domain name (case-sensitive) | 
 **version** | **str**| Version identifier | 

### Return type

**object**

### Authorization

[TokenSecured](../README.md#TokenSecured)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/yaml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Domain definition in YAML format |  -  |
**404** | The specified domain or version was not found. If it is private, make sure the request is authenticated and the authenticating user has access to this API. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_owner_domains**
> ApisJson get_owner_domains(owner, page=page, limit=limit, sort=sort, order=order)

Get a list of domains of the specified owner

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
    api_instance = openapi_client.DomainsApi(api_client)
    owner = 'owner_example' # str | Domain owner (organization or user, case-sensitive)
    page = 0 # int | Page to return (optional) (default to 0)
    limit = 10 # int | Number of results per page (1 .. 100) (optional) (default to 10)
    sort = NAME # str | Sort criteria of result set: * NAME * UPDATED * CREATED * OWNER * BEST_MATCH - by relevance * TITLE - by `info.title`  (optional) (default to NAME)
    order = ASC # str | Sort order (optional) (default to ASC)

    try:
        # Get a list of domains of the specified owner
        api_response = api_instance.get_owner_domains(owner, page=page, limit=limit, sort=sort, order=order)
        print("The response of DomainsApi->get_owner_domains:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomainsApi->get_owner_domains: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Domain owner (organization or user, case-sensitive) | 
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
**200** | A list of domains in APIs.json format |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rename_domain**
> rename_domain(owner, domain, new_name, force=force)

Rename a domain

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
    api_instance = openapi_client.DomainsApi(api_client)
    owner = 'owner_example' # str | Domain owner (organization or user, case-sensitive)
    domain = 'domain_example' # str | Domain name (case-sensitive)
    new_name = 'new_name_example' # str | New name
    force = False # bool | If this domain is referenced from other APIs and domains, this parameter must be true. Otherwise, the request will be rejected with status code 424. (optional) (default to False)

    try:
        # Rename a domain
        api_instance.rename_domain(owner, domain, new_name, force=force)
    except Exception as e:
        print("Exception when calling DomainsApi->rename_domain: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Domain owner (organization or user, case-sensitive) | 
 **domain** | **str**| Domain name (case-sensitive) | 
 **new_name** | **str**| New name | 
 **force** | **bool**| If this domain is referenced from other APIs and domains, this parameter must be true. Otherwise, the request will be rejected with status code 424. | [optional] [default to False]

### Return type

void (empty response body)

### Authorization

[TokenSecured](../README.md#TokenSecured)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The domain was successfully renamed |  -  |
**401** | Access token is not set or invalid |  -  |
**403** | Access denied (insufficient user permissions) |  -  |
**409** | An API or domain with the new name already exists, or the new and old names are the same |  -  |
**424** | The domain you are trying to rename is referenced from other APIs or domains. Renaming the domain will break the references in those definitions. To rename the domain anyway, repeat the request with the &#x60;force&#x3D;true&#x60; query parameter.  The response body contains a list of APIs and domains that reference this domain. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **save_domain_definition**
> save_domain_definition(owner, domain, is_private=is_private, version=version, force=force, definition=definition)

Create or update a domain

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
    api_instance = openapi_client.DomainsApi(api_client)
    owner = 'owner_example' # str | Domain owner (organization or user, case-sensitive)
    domain = 'domain_example' # str | Domain name (case-sensitive)
    is_private = False # bool | Specifies whether the domain has to be private (optional) (default to False)
    version = 'version_example' # str | Domain version. If omitted, will be taken from the `info.version` field in the definition. (optional)
    force = True # bool | Force update (optional)
    definition = 'definition_example' # str | OpenAPI definition of this domain (optional)

    try:
        # Create or update a domain
        api_instance.save_domain_definition(owner, domain, is_private=is_private, version=version, force=force, definition=definition)
    except Exception as e:
        print("Exception when calling DomainsApi->save_domain_definition: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Domain owner (organization or user, case-sensitive) | 
 **domain** | **str**| Domain name (case-sensitive) | 
 **is_private** | **bool**| Specifies whether the domain has to be private | [optional] [default to False]
 **version** | **str**| Domain version. If omitted, will be taken from the &#x60;info.version&#x60; field in the definition. | [optional] 
 **force** | **bool**| Force update | [optional] 
 **definition** | **str**| OpenAPI definition of this domain | [optional] 

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
**200** | The domain was successfully saved |  -  |
**201** | New domain was successfully saved |  -  |
**205** | The domain was successfully saved and should be reloaded |  -  |
**400** | Possible reasons:   * Some parameter values are invalid, or the provided OpenAPI domain definition is invalid.  * The specified &#x60;projectName&#x60; does not exist in the &#x60;owner&#x60; organization.  * Cannot create a new domain because an API with this name already exists in the &#x60;owner&#x60; account. Try a different name. |  -  |
**403** | Maximum number of domains reached |  -  |
**409** | Cannot overwrite a published domain version |  -  |
**415** | Invalid content type |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search_apis_and_domains_0**
> ApisJson search_apis_and_domains_0(spec_type=spec_type, visibility=visibility, state=state, owner=owner, query=query, page=page, limit=limit, sort=sort, order=order)

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
    api_instance = openapi_client.DomainsApi(api_client)
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
        api_response = api_instance.search_apis_and_domains_0(spec_type=spec_type, visibility=visibility, state=state, owner=owner, query=query, page=page, limit=limit, sort=sort, order=order)
        print("The response of DomainsApi->search_apis_and_domains_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomainsApi->search_apis_and_domains_0: %s\n" % e)
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

# **search_domains**
> search_domains(query=query, state=state, page=page, limit=limit, sort=sort, order=order)

Search domains

This is a convenience alias for `GET /specs?specType=DOMAIN`.

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
    api_instance = openapi_client.DomainsApi(api_client)
    query = 'query_example' # str | Free text query to match (optional)
    state = ALL # str | Matches against published state of the spec: * UNPUBLISHED - spec is a draft, a work in progress * PUBLISHED - spec is a stable version ready for consuming from client applications * ANY - either PUBLISHED or UNPUBLISHED  (optional) (default to ALL)
    page = 0 # int | Page to return (optional) (default to 0)
    limit = 10 # int | Number of results per page (1 .. 100) (optional) (default to 10)
    sort = NAME # str | Sort criteria of result set: * NAME * UPDATED * CREATED * OWNER * BEST_MATCH - by relevance * TITLE - by `info.title`  (optional) (default to NAME)
    order = ASC # str | Sort order (optional) (default to ASC)

    try:
        # Search domains
        api_instance.search_domains(query=query, state=state, page=page, limit=limit, sort=sort, order=order)
    except Exception as e:
        print("Exception when calling DomainsApi->search_domains: %s\n" % e)
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

# **set_domain_comment_status_v2**
> set_domain_comment_status_v2(owner, domain, version, comment, status)

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
    api_instance = openapi_client.DomainsApi(api_client)
    owner = 'owner_example' # str | Domain owner (organization or user, case-sensitive)
    domain = 'domain_example' # str | Domain name (case-sensitive)
    version = 'version_example' # str | Version identifier
    comment = 'comment_example' # str | Comment identifier
    status = 'status_example' # str | Comment status

    try:
        # Resolve or reopen a comment
        api_instance.set_domain_comment_status_v2(owner, domain, version, comment, status)
    except Exception as e:
        print("Exception when calling DomainsApi->set_domain_comment_status_v2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Domain owner (organization or user, case-sensitive) | 
 **domain** | **str**| Domain name (case-sensitive) | 
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
**404** | The specified domain or comment was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **set_domain_default_version**
> set_domain_default_version(owner, domain, default_version)

Set the default version for a domain

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
    api_instance = openapi_client.DomainsApi(api_client)
    owner = 'owner_example' # str | Domain owner (organization or user, case-sensitive)
    domain = 'domain_example' # str | Domain name (case-sensitive)
    default_version = openapi_client.DefaultVersion() # DefaultVersion | An object that specifies the default version for this domain

    try:
        # Set the default version for a domain
        api_instance.set_domain_default_version(owner, domain, default_version)
    except Exception as e:
        print("Exception when calling DomainsApi->set_domain_default_version: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Domain owner (organization or user, case-sensitive) | 
 **domain** | **str**| Domain name (case-sensitive) | 
 **default_version** | [**DefaultVersion**](DefaultVersion.md)| An object that specifies the default version for this domain | 

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
**404** | The specified domain or version was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **set_domain_lifecycle_settings**
> set_domain_lifecycle_settings(owner, domain, version, settings, force=force)

Publish or unpublish a domain version

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
    api_instance = openapi_client.DomainsApi(api_client)
    owner = 'owner_example' # str | Domain owner (organization or user, case-sensitive)
    domain = 'domain_example' # str | Domain name (case-sensitive)
    version = 'version_example' # str | Version identifier
    settings = openapi_client.LifecycleSettings() # LifecycleSettings | An object that specifies the new `published` state: `true` means published, `false` - unpublished
    force = False # bool | To publish a domain that references other _unpublished_ domains, this parameter must be `true`. Otherwise, the request will be rejected with status code 424. (optional) (default to False)

    try:
        # Publish or unpublish a domain version
        api_instance.set_domain_lifecycle_settings(owner, domain, version, settings, force=force)
    except Exception as e:
        print("Exception when calling DomainsApi->set_domain_lifecycle_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Domain owner (organization or user, case-sensitive) | 
 **domain** | **str**| Domain name (case-sensitive) | 
 **version** | **str**| Version identifier | 
 **settings** | [**LifecycleSettings**](LifecycleSettings.md)| An object that specifies the new &#x60;published&#x60; state: &#x60;true&#x60; means published, &#x60;false&#x60; - unpublished | 
 **force** | **bool**| To publish a domain that references other _unpublished_ domains, this parameter must be &#x60;true&#x60;. Otherwise, the request will be rejected with status code 424. | [optional] [default to False]

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
**200** | Successfully published or unpublished the domain |  -  |
**401** | Access token is not set or invalid |  -  |
**403** | Access denied (insufficient user permissions) |  -  |
**404** | The specified domain or version was not found |  -  |
**424** | The domain version you are trying to publish contains references to other _unpublished_ domains. If those domains change, it may affect your domain. To publish the domain anyway, repeat the request with the &#x60;force&#x3D;true&#x60; query parameter.  The response body contains a list of unpublished domains referenced from this domain. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **set_domain_private_settings**
> set_domain_private_settings(owner, domain, version, settings, force=force)

Set the visibility (public or private) of a domain version

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
    api_instance = openapi_client.DomainsApi(api_client)
    owner = 'owner_example' # str | Domain owner (organization or user, case-sensitive)
    domain = 'domain_example' # str | Domain name (case-sensitive)
    version = 'version_example' # str | Version identifier
    settings = openapi_client.VisibilitySettings() # VisibilitySettings | An object that specifies the new visibility level: `true` means private, `false` - public
    force = False # bool | To change the visibility from _public_ to _private_ in case this domain is referenced from other _public_ definitions, this parameter must be `true`. Otherwise, the request will be rejected with status code 424. (optional) (default to False)

    try:
        # Set the visibility (public or private) of a domain version
        api_instance.set_domain_private_settings(owner, domain, version, settings, force=force)
    except Exception as e:
        print("Exception when calling DomainsApi->set_domain_private_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Domain owner (organization or user, case-sensitive) | 
 **domain** | **str**| Domain name (case-sensitive) | 
 **version** | **str**| Version identifier | 
 **settings** | [**VisibilitySettings**](VisibilitySettings.md)| An object that specifies the new visibility level: &#x60;true&#x60; means private, &#x60;false&#x60; - public | 
 **force** | **bool**| To change the visibility from _public_ to _private_ in case this domain is referenced from other _public_ definitions, this parameter must be &#x60;true&#x60;. Otherwise, the request will be rejected with status code 424. | [optional] [default to False]

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
**200** | Domain visibility was updated |  -  |
**401** | Access token is not set or invalid |  -  |
**403** | Access denied (insufficient user permissions) |  -  |
**404** | The specified domain or version was not found |  -  |
**424** | The domain version you are trying to make _private_ is referenced from other _public_ definitions. Changing domain visibility may affect those definitions. To proceed anyway, repeat the request with the &#x60;force&#x3D;true&#x60; query parameter.  The response body contains a list of APIs and domains that may be affected by this change. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_domain_comment_reply_v2**
> Comment update_domain_comment_reply_v2(owner, domain, version, comment, reply, body=body)

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
    api_instance = openapi_client.DomainsApi(api_client)
    owner = 'owner_example' # str | Domain owner (organization or user, case-sensitive)
    domain = 'domain_example' # str | Domain name (case-sensitive)
    version = 'version_example' # str | Version identifier
    comment = 'comment_example' # str | Comment identifier
    reply = 'reply_example' # str | Reply identifier
    body = openapi_client.CommentPatch() # CommentPatch |  (optional)

    try:
        # Update a comment reply
        api_response = api_instance.update_domain_comment_reply_v2(owner, domain, version, comment, reply, body=body)
        print("The response of DomainsApi->update_domain_comment_reply_v2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomainsApi->update_domain_comment_reply_v2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Domain owner (organization or user, case-sensitive) | 
 **domain** | **str**| Domain name (case-sensitive) | 
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
**200** | Comment reply was updated |  -  |
**400** | Request body invalid |  -  |
**401** | Access token is not set or invalid |  -  |
**403** | The comment feature is not available for the organization&#39;s plan, or the authenticating user does not have permission to complete this action |  -  |
**404** | The specified domain, comment, or reply was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_domain_comment_v2**
> ClosableComment update_domain_comment_v2(owner, domain, version, comment, body=body)

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
    api_instance = openapi_client.DomainsApi(api_client)
    owner = 'owner_example' # str | Domain owner (organization or user, case-sensitive)
    domain = 'domain_example' # str | Domain name (case-sensitive)
    version = 'version_example' # str | Version identifier
    comment = 'comment_example' # str | Comment identifier
    body = openapi_client.ClosableCommentPatch() # ClosableCommentPatch |  (optional)

    try:
        # Update a comment
        api_response = api_instance.update_domain_comment_v2(owner, domain, version, comment, body=body)
        print("The response of DomainsApi->update_domain_comment_v2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomainsApi->update_domain_comment_v2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Domain owner (organization or user, case-sensitive) | 
 **domain** | **str**| Domain name (case-sensitive) | 
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
**404** | The specified domain or comment was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_domain_comments_v2**
> update_domain_comments_v2(owner, domain, version, body)

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
    api_instance = openapi_client.DomainsApi(api_client)
    owner = 'owner_example' # str | Domain owner (organization or user, case-sensitive)
    domain = 'domain_example' # str | Domain name (case-sensitive)
    version = 'version_example' # str | Version identifier
    body = openapi_client.CommentsBatch() # CommentsBatch | 

    try:
        # Bulk update comments
        api_instance.update_domain_comments_v2(owner, domain, version, body)
    except Exception as e:
        print("Exception when calling DomainsApi->update_domain_comments_v2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Domain owner (organization or user, case-sensitive) | 
 **domain** | **str**| Domain name (case-sensitive) | 
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
**404** | The specified domain, comment, or reply was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

