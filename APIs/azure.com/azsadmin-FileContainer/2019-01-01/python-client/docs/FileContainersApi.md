# openapi_client.FileContainersApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**file_containers_create**](FileContainersApi.md#file_containers_create) | **PUT** /subscriptions/{subscriptionId}/providers/Microsoft.Deployment.Admin/locations/global/fileContainers/{fileContainerId} | 
[**file_containers_delete**](FileContainersApi.md#file_containers_delete) | **DELETE** /subscriptions/{subscriptionId}/providers/Microsoft.Deployment.Admin/locations/global/fileContainers/{fileContainerId} | Deletes specified file container.
[**file_containers_get**](FileContainersApi.md#file_containers_get) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Deployment.Admin/locations/global/fileContainers/{fileContainerId} | 
[**file_containers_list**](FileContainersApi.md#file_containers_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Deployment.Admin/locations/global/fileContainers | 


# **file_containers_create**
> FileContainer file_containers_create(subscription_id, api_version, file_container_id, file_container_parameters)



Creates a new file container.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.file_container import FileContainer
from openapi_client.models.file_container_parameters import FileContainerParameters
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FileContainersApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = '2019-01-01' # str | Client API Version. (default to '2019-01-01')
    file_container_id = 'file_container_id_example' # str | The file container identifier.
    file_container_parameters = openapi_client.FileContainerParameters() # FileContainerParameters | The parameters required to create a new file container.

    try:
        api_response = api_instance.file_containers_create(subscription_id, api_version, file_container_id, file_container_parameters)
        print("The response of FileContainersApi->file_containers_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FileContainersApi->file_containers_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2019-01-01&#39;]
 **file_container_id** | **str**| The file container identifier. | 
 **file_container_parameters** | [**FileContainerParameters**](FileContainerParameters.md)| The parameters required to create a new file container. | 

### Return type

[**FileContainer**](FileContainer.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **file_containers_delete**
> file_containers_delete(subscription_id, file_container_id, api_version)

Deletes specified file container.

Delete an existing file container.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FileContainersApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    file_container_id = 'file_container_id_example' # str | The file container identifier.
    api_version = '2019-01-01' # str | Client API Version. (default to '2019-01-01')

    try:
        # Deletes specified file container.
        api_instance.file_containers_delete(subscription_id, file_container_id, api_version)
    except Exception as e:
        print("Exception when calling FileContainersApi->file_containers_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **file_container_id** | **str**| The file container identifier. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2019-01-01&#39;]

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **file_containers_get**
> FileContainer file_containers_get(subscription_id, file_container_id, api_version)



Retrieves the specific file container details.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.file_container import FileContainer
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FileContainersApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    file_container_id = 'file_container_id_example' # str | The file container identifier.
    api_version = '2019-01-01' # str | Client API Version. (default to '2019-01-01')

    try:
        api_response = api_instance.file_containers_get(subscription_id, file_container_id, api_version)
        print("The response of FileContainersApi->file_containers_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FileContainersApi->file_containers_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **file_container_id** | **str**| The file container identifier. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2019-01-01&#39;]

### Return type

[**FileContainer**](FileContainer.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **file_containers_list**
> FileContainersList file_containers_list(subscription_id, api_version)



Returns an array of file containers.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.file_containers_list import FileContainersList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FileContainersApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = '2019-01-01' # str | Client API Version. (default to '2019-01-01')

    try:
        api_response = api_instance.file_containers_list(subscription_id, api_version)
        print("The response of FileContainersApi->file_containers_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FileContainersApi->file_containers_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2019-01-01&#39;]

### Return type

[**FileContainersList**](FileContainersList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

