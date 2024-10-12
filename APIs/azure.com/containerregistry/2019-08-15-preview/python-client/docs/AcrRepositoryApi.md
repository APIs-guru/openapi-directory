# openapi_client.AcrRepositoryApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**repository_delete**](AcrRepositoryApi.md#repository_delete) | **DELETE** /acr/v1/{name} | 
[**repository_get_attributes**](AcrRepositoryApi.md#repository_get_attributes) | **GET** /acr/v1/{name} | 
[**repository_get_list**](AcrRepositoryApi.md#repository_get_list) | **GET** /acr/v1/_catalog | 
[**repository_update_attributes**](AcrRepositoryApi.md#repository_update_attributes) | **PATCH** /acr/v1/{name} | 


# **repository_delete**
> DeletedRepository repository_delete(name)



Delete the repository identified by `name`

### Example

* Api Key Authentication (registry_oauth2):
* Basic Authentication (registry_auth):

```python
import openapi_client
from openapi_client.models.deleted_repository import DeletedRepository
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
    api_instance = openapi_client.AcrRepositoryApi(api_client)
    name = 'name_example' # str | Name of the image (including the namespace)

    try:
        api_response = api_instance.repository_delete(name)
        print("The response of AcrRepositoryApi->repository_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AcrRepositoryApi->repository_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Name of the image (including the namespace) | 

### Return type

[**DeletedRepository**](DeletedRepository.md)

### Authorization

[registry_oauth2](../README.md#registry_oauth2), [registry_auth](../README.md#registry_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | The repository is deleted |  -  |
**0** | ACR error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **repository_get_attributes**
> RepositoryAttributes repository_get_attributes(name)



Get repository attributes

### Example

* Api Key Authentication (registry_oauth2):
* Basic Authentication (registry_auth):

```python
import openapi_client
from openapi_client.models.repository_attributes import RepositoryAttributes
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
    api_instance = openapi_client.AcrRepositoryApi(api_client)
    name = 'name_example' # str | Name of the image (including the namespace)

    try:
        api_response = api_instance.repository_get_attributes(name)
        print("The response of AcrRepositoryApi->repository_get_attributes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AcrRepositoryApi->repository_get_attributes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Name of the image (including the namespace) | 

### Return type

[**RepositoryAttributes**](RepositoryAttributes.md)

### Authorization

[registry_oauth2](../README.md#registry_oauth2), [registry_auth](../README.md#registry_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of attributes |  -  |
**0** | ACR error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **repository_get_list**
> Repositories repository_get_list(last=last, n=n)



List repositories

### Example

* Api Key Authentication (registry_oauth2):
* Basic Authentication (registry_auth):

```python
import openapi_client
from openapi_client.models.repositories import Repositories
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
    api_instance = openapi_client.AcrRepositoryApi(api_client)
    last = 'last_example' # str | Query parameter for the last item in previous query. Result set will include values lexically after last. (optional)
    n = 56 # int | query parameter for max number of items (optional)

    try:
        api_response = api_instance.repository_get_list(last=last, n=n)
        print("The response of AcrRepositoryApi->repository_get_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AcrRepositoryApi->repository_get_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **last** | **str**| Query parameter for the last item in previous query. Result set will include values lexically after last. | [optional] 
 **n** | **int**| query parameter for max number of items | [optional] 

### Return type

[**Repositories**](Repositories.md)

### Authorization

[registry_oauth2](../README.md#registry_oauth2), [registry_auth](../README.md#registry_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of repositories |  * Link - next paginated result <br>  |
**0** | ACR error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **repository_update_attributes**
> repository_update_attributes(name, value=value)



Update the attribute identified by `name` where `reference` is the name of the repository.

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
    api_instance = openapi_client.AcrRepositoryApi(api_client)
    name = 'name_example' # str | Name of the image (including the namespace)
    value = openapi_client.ChangeableAttributes() # ChangeableAttributes | Repository attribute value (optional)

    try:
        api_instance.repository_update_attributes(name, value=value)
    except Exception as e:
        print("Exception when calling AcrRepositoryApi->repository_update_attributes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Name of the image (including the namespace) | 
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

