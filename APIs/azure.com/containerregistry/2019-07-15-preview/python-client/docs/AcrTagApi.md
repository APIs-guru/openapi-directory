# openapi_client.AcrTagApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_acr_tag**](AcrTagApi.md#delete_acr_tag) | **DELETE** /acr/v1/{name}/_tags/{reference} | 
[**get_acr_tag_attributes**](AcrTagApi.md#get_acr_tag_attributes) | **GET** /acr/v1/{name}/_tags/{reference} | 
[**get_acr_tags**](AcrTagApi.md#get_acr_tags) | **GET** /acr/v1/{name}/_tags | 
[**update_acr_tag_attributes**](AcrTagApi.md#update_acr_tag_attributes) | **PATCH** /acr/v1/{name}/_tags/{reference} | 


# **delete_acr_tag**
> delete_acr_tag(name, reference)



Delete tag

### Example

* Api Key Authentication (registry_oauth2):
* Basic Authentication (registry_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: registry_oauth2
configuration.api_key['registry_oauth2'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['registry_oauth2'] = 'Bearer'

# Configure HTTP basic authorization: registry_auth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AcrTagApi(api_client)
    name = 'name_example' # str | Name of the image (including the namespace)
    reference = 'reference_example' # str | Tag or digest of the target manifest

    try:
        api_instance.delete_acr_tag(name, reference)
    except Exception as e:
        print("Exception when calling AcrTagApi->delete_acr_tag: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Name of the image (including the namespace) | 
 **reference** | **str**| Tag or digest of the target manifest | 

### Return type

void (empty response body)

### Authorization

[registry_oauth2](../README.md#registry_oauth2), [registry_auth](../README.md#registry_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | The tag is deleted |  -  |
**0** | ACR error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_acr_tag_attributes**
> AcrTagAttributes get_acr_tag_attributes(name, reference)



Get tag attributes by tag

### Example

* Api Key Authentication (registry_oauth2):
* Basic Authentication (registry_auth):

```python
import openapi_client
from openapi_client.models.acr_tag_attributes import AcrTagAttributes
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: registry_oauth2
configuration.api_key['registry_oauth2'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['registry_oauth2'] = 'Bearer'

# Configure HTTP basic authorization: registry_auth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AcrTagApi(api_client)
    name = 'name_example' # str | Name of the image (including the namespace)
    reference = 'reference_example' # str | Tag or digest of the target manifest

    try:
        api_response = api_instance.get_acr_tag_attributes(name, reference)
        print("The response of AcrTagApi->get_acr_tag_attributes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AcrTagApi->get_acr_tag_attributes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Name of the image (including the namespace) | 
 **reference** | **str**| Tag or digest of the target manifest | 

### Return type

[**AcrTagAttributes**](AcrTagAttributes.md)

### Authorization

[registry_oauth2](../README.md#registry_oauth2), [registry_auth](../README.md#registry_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Tag attributes |  -  |
**0** | ACR error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_acr_tags**
> AcrRepositoryTags get_acr_tags(name, last=last, n=n, orderby=orderby, digest=digest)



List tags of a repository

### Example

* Api Key Authentication (registry_oauth2):
* Basic Authentication (registry_auth):

```python
import openapi_client
from openapi_client.models.acr_repository_tags import AcrRepositoryTags
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: registry_oauth2
configuration.api_key['registry_oauth2'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['registry_oauth2'] = 'Bearer'

# Configure HTTP basic authorization: registry_auth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AcrTagApi(api_client)
    name = 'name_example' # str | Name of the image (including the namespace)
    last = 'last_example' # str | Query parameter for the last item in previous query. Result set will include values lexically after last. (optional)
    n = 56 # int | query parameter for max number of items (optional)
    orderby = 'orderby_example' # str | orderby query parameter (optional)
    digest = 'digest_example' # str | filter by digest (optional)

    try:
        api_response = api_instance.get_acr_tags(name, last=last, n=n, orderby=orderby, digest=digest)
        print("The response of AcrTagApi->get_acr_tags:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AcrTagApi->get_acr_tags: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Name of the image (including the namespace) | 
 **last** | **str**| Query parameter for the last item in previous query. Result set will include values lexically after last. | [optional] 
 **n** | **int**| query parameter for max number of items | [optional] 
 **orderby** | **str**| orderby query parameter | [optional] 
 **digest** | **str**| filter by digest | [optional] 

### Return type

[**AcrRepositoryTags**](AcrRepositoryTags.md)

### Authorization

[registry_oauth2](../README.md#registry_oauth2), [registry_auth](../README.md#registry_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Tag details of a repository |  -  |
**0** | ACR error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_acr_tag_attributes**
> update_acr_tag_attributes(name, reference, value=value)



Update tag attributes

### Example

* Api Key Authentication (registry_oauth2):
* Basic Authentication (registry_auth):

```python
import openapi_client
from openapi_client.models.changeable_attributes import ChangeableAttributes
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: registry_oauth2
configuration.api_key['registry_oauth2'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['registry_oauth2'] = 'Bearer'

# Configure HTTP basic authorization: registry_auth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AcrTagApi(api_client)
    name = 'name_example' # str | Name of the image (including the namespace)
    reference = 'reference_example' # str | Tag or digest of the target manifest
    value = openapi_client.ChangeableAttributes() # ChangeableAttributes | Repository attribute value (optional)

    try:
        api_instance.update_acr_tag_attributes(name, reference, value=value)
    except Exception as e:
        print("Exception when calling AcrTagApi->update_acr_tag_attributes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Name of the image (including the namespace) | 
 **reference** | **str**| Tag or digest of the target manifest | 
 **value** | [**ChangeableAttributes**](ChangeableAttributes.md)| Repository attribute value | [optional] 

### Return type

void (empty response body)

### Authorization

[registry_oauth2](../README.md#registry_oauth2), [registry_auth](../README.md#registry_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The attributes are updated |  -  |
**0** | ACR error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

