# openapi_client.TemplatesApi

All URIs are relative to *https://api.swaggerhub.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_template**](TemplatesApi.md#delete_template) | **DELETE** /templates/{owner}/{templateId} | Delete a template
[**delete_template_version**](TemplatesApi.md#delete_template_version) | **DELETE** /templates/{owner}/{templateId}/{version} | Delete a particular version of a template
[**fork_template**](TemplatesApi.md#fork_template) | **POST** /templates/{owner}/{templateId}/{version}/fork | Create a fork for a template
[**get_template_comments**](TemplatesApi.md#get_template_comments) | **GET** /templates/{owner}/{templateId}/{version}/comments | Return the list of comments for a template
[**get_template_definition**](TemplatesApi.md#get_template_definition) | **GET** /templates/{owner}/{templateId}/{version} | Retrieve a template definition
[**get_template_lifecycle_settings**](TemplatesApi.md#get_template_lifecycle_settings) | **GET** /templates/{owner}/{templateId}/{version}/settings/lifecycle | Retrieve lifecycle settings for a template
[**get_template_private_settings**](TemplatesApi.md#get_template_private_settings) | **GET** /templates/{owner}/{templateId}/{version}/settings/private | Retrieve visibility settings for a template
[**get_template_versions**](TemplatesApi.md#get_template_versions) | **GET** /templates/{owner}/{templateId} | Retrieve an APIs.json listing for all template versions for an owner and template
[**get_templates**](TemplatesApi.md#get_templates) | **GET** /templates | Retrieve a list of templates for an owner
[**rename_template**](TemplatesApi.md#rename_template) | **POST** /templates/{owner}/{templateId}/rename | Rename a template
[**save_template_definition**](TemplatesApi.md#save_template_definition) | **POST** /templates/{owner}/{templateId} | Create or update a template
[**search_apis_and_domains_1**](TemplatesApi.md#search_apis_and_domains_1) | **GET** /specs | Retrieve a list of currently defined APIs, domains, and templates in APIs.json format
[**set_template_lifecycle_settings**](TemplatesApi.md#set_template_lifecycle_settings) | **PUT** /templates/{owner}/{templateId}/{version}/settings/lifecycle | Update lifecycle settings for a template
[**set_template_private_settings**](TemplatesApi.md#set_template_private_settings) | **PUT** /templates/{owner}/{templateId}/{version}/settings/private | Update visibility settings for a template
[**update_template_comments**](TemplatesApi.md#update_template_comments) | **POST** /templates/{owner}/{templateId}/{version}/comments/batch | Update the list of comments for a template


# **delete_template**
> delete_template(owner, template_id)

Delete a template

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
    api_instance = openapi_client.TemplatesApi(api_client)
    owner = 'owner_example' # str | API, domain, or template owner identifier (case-sensitive)
    template_id = 'template_id_example' # str | Template identifier

    try:
        # Delete a template
        api_instance.delete_template(owner, template_id)
    except Exception as e:
        print("Exception when calling TemplatesApi->delete_template: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| API, domain, or template owner identifier (case-sensitive) | 
 **template_id** | **str**| Template identifier | 

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
**204** | Template successfully deleted |  -  |
**403** | Access denied |  -  |
**409** | Template has published versions, and cannot be deleted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_template_version**
> delete_template_version(owner, template_id, version)

Delete a particular version of a template

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
    api_instance = openapi_client.TemplatesApi(api_client)
    owner = 'owner_example' # str | API, domain, or template owner identifier (case-sensitive)
    template_id = 'template_id_example' # str | Template identifier
    version = 'version_example' # str | Version identifier

    try:
        # Delete a particular version of a template
        api_instance.delete_template_version(owner, template_id, version)
    except Exception as e:
        print("Exception when calling TemplatesApi->delete_template_version: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| API, domain, or template owner identifier (case-sensitive) | 
 **template_id** | **str**| Template identifier | 
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
**204** | Template version successfully deleted |  -  |
**403** | Access denied |  -  |
**409** | Selected template version is either published or the only version, and cannot be deleted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fork_template**
> fork_template(owner, template_id, version, body)

Create a fork for a template

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
    api_instance = openapi_client.TemplatesApi(api_client)
    owner = 'owner_example' # str | API, domain, or template owner identifier (case-sensitive)
    template_id = 'template_id_example' # str | Template identifier
    version = 'version_example' # str | Version identifier
    body = openapi_client.ForkVersion() # ForkVersion | Fork version information

    try:
        # Create a fork for a template
        api_instance.fork_template(owner, template_id, version, body)
    except Exception as e:
        print("Exception when calling TemplatesApi->fork_template: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| API, domain, or template owner identifier (case-sensitive) | 
 **template_id** | **str**| Template identifier | 
 **version** | **str**| Version identifier | 
 **body** | [**ForkVersion**](ForkVersion.md)| Fork version information | 

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
**201** | Template fork successfully created |  -  |
**400** | Request body invalid |  -  |
**403** | Access denied |  -  |
**409** | Conflict with existing template |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_template_comments**
> List[ClosableComment] get_template_comments(owner, template_id, version)

Return the list of comments for a template

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
    api_instance = openapi_client.TemplatesApi(api_client)
    owner = 'owner_example' # str | API, domain, or template owner identifier (case-sensitive)
    template_id = 'template_id_example' # str | Template identifier
    version = 'version_example' # str | Version identifier

    try:
        # Return the list of comments for a template
        api_response = api_instance.get_template_comments(owner, template_id, version)
        print("The response of TemplatesApi->get_template_comments:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TemplatesApi->get_template_comments: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| API, domain, or template owner identifier (case-sensitive) | 
 **template_id** | **str**| Template identifier | 
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
**200** | Comments for the template |  -  |
**204** | No comments found for the template |  -  |
**401** | Access token is not set or invalid |  -  |
**403** | The comment feature is not available for the organization&#39;s plan, or the authenticating user does not have permission to complete this action |  -  |
**404** | Template not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_template_definition**
> object get_template_definition(owner, template_id, version, flatten=flatten)

Retrieve a template definition

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
    api_instance = openapi_client.TemplatesApi(api_client)
    owner = 'owner_example' # str | API, domain, or template owner identifier (case-sensitive)
    template_id = 'template_id_example' # str | Template identifier
    version = 'version_example' # str | Version identifier
    flatten = False # bool | If set to `true`, it creates models from inline schemas in OpenAPI definition. AsyncAPI definitions cannot be flattened. (optional) (default to False)

    try:
        # Retrieve a template definition
        api_response = api_instance.get_template_definition(owner, template_id, version, flatten=flatten)
        print("The response of TemplatesApi->get_template_definition:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TemplatesApi->get_template_definition: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| API, domain, or template owner identifier (case-sensitive) | 
 **template_id** | **str**| Template identifier | 
 **version** | **str**| Version identifier | 
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
**200** | The template in requested format (YAML or JSON) |  -  |
**404** | Template not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_template_lifecycle_settings**
> LifecycleSettings get_template_lifecycle_settings(owner, template_id, version)

Retrieve lifecycle settings for a template

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
    api_instance = openapi_client.TemplatesApi(api_client)
    owner = 'owner_example' # str | API, domain, or template owner identifier (case-sensitive)
    template_id = 'template_id_example' # str | Template identifier
    version = 'version_example' # str | Version identifier

    try:
        # Retrieve lifecycle settings for a template
        api_response = api_instance.get_template_lifecycle_settings(owner, template_id, version)
        print("The response of TemplatesApi->get_template_lifecycle_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TemplatesApi->get_template_lifecycle_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| API, domain, or template owner identifier (case-sensitive) | 
 **template_id** | **str**| Template identifier | 
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
**200** | Lifecycle settings for the specified template |  -  |
**404** | Template not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_template_private_settings**
> VisibilitySettings get_template_private_settings(owner, template_id, version)

Retrieve visibility settings for a template

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
    api_instance = openapi_client.TemplatesApi(api_client)
    owner = 'owner_example' # str | API, domain, or template owner identifier (case-sensitive)
    template_id = 'template_id_example' # str | Template identifier
    version = 'version_example' # str | Version identifier

    try:
        # Retrieve visibility settings for a template
        api_response = api_instance.get_template_private_settings(owner, template_id, version)
        print("The response of TemplatesApi->get_template_private_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TemplatesApi->get_template_private_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| API, domain, or template owner identifier (case-sensitive) | 
 **template_id** | **str**| Template identifier | 
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
**200** | Visibility settings for the template |  -  |
**404** | Template not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_template_versions**
> ApisJson get_template_versions(owner, template_id)

Retrieve an APIs.json listing for all template versions for an owner and template

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
    api_instance = openapi_client.TemplatesApi(api_client)
    owner = 'owner_example' # str | API, domain, or template owner identifier (case-sensitive)
    template_id = 'template_id_example' # str | Template identifier

    try:
        # Retrieve an APIs.json listing for all template versions for an owner and template
        api_response = api_instance.get_template_versions(owner, template_id)
        print("The response of TemplatesApi->get_template_versions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TemplatesApi->get_template_versions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| API, domain, or template owner identifier (case-sensitive) | 
 **template_id** | **str**| Template identifier | 

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
**200** | A list of template versions in APIs.json format |  -  |
**404** | Template not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_templates**
> TemplateWrapper get_templates(owner=owner)

Retrieve a list of templates for an owner

### Example

* Api Key Authentication (TokenSecured):

```python
import openapi_client
from openapi_client.models.template_wrapper import TemplateWrapper
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
    api_instance = openapi_client.TemplatesApi(api_client)
    owner = 'owner_example' # str | Owner name (optional)

    try:
        # Retrieve a list of templates for an owner
        api_response = api_instance.get_templates(owner=owner)
        print("The response of TemplatesApi->get_templates:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TemplatesApi->get_templates: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| Owner name | [optional] 

### Return type

[**TemplateWrapper**](TemplateWrapper.md)

### Authorization

[TokenSecured](../README.md#TokenSecured)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Template wrapper |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rename_template**
> rename_template(owner, template_id, new_name)

Rename a template

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
    api_instance = openapi_client.TemplatesApi(api_client)
    owner = 'owner_example' # str | API, domain, or template owner identifier (case-sensitive)
    template_id = 'template_id_example' # str | Template identifier
    new_name = 'new_name_example' # str | New name

    try:
        # Rename a template
        api_instance.rename_template(owner, template_id, new_name)
    except Exception as e:
        print("Exception when calling TemplatesApi->rename_template: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| API, domain, or template owner identifier (case-sensitive) | 
 **template_id** | **str**| Template identifier | 
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
**200** | Template successfully renamed |  -  |
**400** | Invalid request |  -  |
**403** | Access denied |  -  |
**409** | API, domain, and template with the new name already exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **save_template_definition**
> save_template_definition(owner, template_id, body, is_private=is_private, version=version, force=force, project_name=project_name)

Create or update a template

Saves the provided template definition; the owner must match the token owner. The version will be extracted from the template definitions itself.

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
    api_instance = openapi_client.TemplatesApi(api_client)
    owner = 'owner_example' # str | API, domain, or template owner identifier (case-sensitive)
    template_id = 'template_id_example' # str | Template identifier
    body = 'body_example' # str | The template definition
    is_private = False # bool | Defines whether the API or template has to be private (optional) (default to False)
    version = 'version_example' # str | Template version to create or update. If omitted, the version will be taken from the `info.version` field in the definition. (optional)
    force = True # bool | Force update (optional)
    project_name = 'project_name_example' # str | The project to add the API, domain, or template to (optional)

    try:
        # Create or update a template
        api_instance.save_template_definition(owner, template_id, body, is_private=is_private, version=version, force=force, project_name=project_name)
    except Exception as e:
        print("Exception when calling TemplatesApi->save_template_definition: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| API, domain, or template owner identifier (case-sensitive) | 
 **template_id** | **str**| Template identifier | 
 **body** | **str**| The template definition | 
 **is_private** | **bool**| Defines whether the API or template has to be private | [optional] [default to False]
 **version** | **str**| Template version to create or update. If omitted, the version will be taken from the &#x60;info.version&#x60; field in the definition. | [optional] 
 **force** | **bool**| Force update | [optional] 
 **project_name** | **str**| The project to add the API, domain, or template to | [optional] 

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
**200** | Template successfully saved |  -  |
**201** | New template successfully saved |  -  |
**205** | Template successfully saved, and should be reloaded |  -  |
**400** | Template definition invalid |  -  |
**403** | Access denied |  -  |
**409** | Cannot overwrite a template version |  -  |
**415** | Invalid content type |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search_apis_and_domains_1**
> ApisJson search_apis_and_domains_1(spec_type=spec_type, visibility=visibility, state=state, owner=owner, query=query, page=page, limit=limit, sort=sort, order=order)

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
    api_instance = openapi_client.TemplatesApi(api_client)
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
        api_response = api_instance.search_apis_and_domains_1(spec_type=spec_type, visibility=visibility, state=state, owner=owner, query=query, page=page, limit=limit, sort=sort, order=order)
        print("The response of TemplatesApi->search_apis_and_domains_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TemplatesApi->search_apis_and_domains_1: %s\n" % e)
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

# **set_template_lifecycle_settings**
> set_template_lifecycle_settings(owner, template_id, version, body, force=force)

Update lifecycle settings for a template

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
    api_instance = openapi_client.TemplatesApi(api_client)
    owner = 'owner_example' # str | API, domain, or template owner identifier (case-sensitive)
    template_id = 'template_id_example' # str | Template identifier
    version = 'version_example' # str | Version identifier
    body = openapi_client.LifecycleSettings() # LifecycleSettings | Fork version information
    force = True # bool | Force update (optional)

    try:
        # Update lifecycle settings for a template
        api_instance.set_template_lifecycle_settings(owner, template_id, version, body, force=force)
    except Exception as e:
        print("Exception when calling TemplatesApi->set_template_lifecycle_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| API, domain, or template owner identifier (case-sensitive) | 
 **template_id** | **str**| Template identifier | 
 **version** | **str**| Version identifier | 
 **body** | [**LifecycleSettings**](LifecycleSettings.md)| Fork version information | 
 **force** | **bool**| Force update | [optional] 

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
**200** | Lifecycle settings successfully stored |  -  |
**400** | Request body invalid |  -  |
**403** | Access denied |  -  |
**404** | Template not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **set_template_private_settings**
> set_template_private_settings(owner, template_id, version, body)

Update visibility settings for a template

### Example


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


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TemplatesApi(api_client)
    owner = 'owner_example' # str | API, domain, or template owner identifier (case-sensitive)
    template_id = 'template_id_example' # str | Template identifier
    version = 'version_example' # str | Version identifier
    body = openapi_client.VisibilitySettings() # VisibilitySettings | Private settings

    try:
        # Update visibility settings for a template
        api_instance.set_template_private_settings(owner, template_id, version, body)
    except Exception as e:
        print("Exception when calling TemplatesApi->set_template_private_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| API, domain, or template owner identifier (case-sensitive) | 
 **template_id** | **str**| Template identifier | 
 **version** | **str**| Version identifier | 
 **body** | [**VisibilitySettings**](VisibilitySettings.md)| Private settings | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Visibility setting updated |  -  |
**400** | Request body invalid |  -  |
**403** | Access denied |  -  |
**404** | Template not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_template_comments**
> update_template_comments(owner, template_id, version, body)

Update the list of comments for a template

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
    api_instance = openapi_client.TemplatesApi(api_client)
    owner = 'owner_example' # str | API, domain, or template owner identifier (case-sensitive)
    template_id = 'template_id_example' # str | Template identifier
    version = 'version_example' # str | Version identifier
    body = openapi_client.CommentsBatch() # CommentsBatch | 

    try:
        # Update the list of comments for a template
        api_instance.update_template_comments(owner, template_id, version, body)
    except Exception as e:
        print("Exception when calling TemplatesApi->update_template_comments: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| API, domain, or template owner identifier (case-sensitive) | 
 **template_id** | **str**| Template identifier | 
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
**200** | Comments successfully updated |  -  |
**400** | Request body invalid |  -  |
**401** | Access token is not set or invalid |  -  |
**403** | The comment feature is not available for the organization&#39;s plan, or the authenticating user does not have permission to complete this action |  -  |
**404** | Template, comment, or reply not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

