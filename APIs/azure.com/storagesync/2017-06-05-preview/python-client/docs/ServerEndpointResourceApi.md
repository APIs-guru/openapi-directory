# openapi_client.ServerEndpointResourceApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**server_endpoints_create**](ServerEndpointResourceApi.md#server_endpoints_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}/serverEndpoints/{serverEndpointName} | 
[**server_endpoints_delete**](ServerEndpointResourceApi.md#server_endpoints_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}/serverEndpoints/{serverEndpointName} | 
[**server_endpoints_get**](ServerEndpointResourceApi.md#server_endpoints_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}/serverEndpoints/{serverEndpointName} | 
[**server_endpoints_list_by_sync_group**](ServerEndpointResourceApi.md#server_endpoints_list_by_sync_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}/serverEndpoints | 
[**server_endpoints_recall**](ServerEndpointResourceApi.md#server_endpoints_recall) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}/serverEndpoints/{serverEndpointName}/recallAction | 
[**server_endpoints_update**](ServerEndpointResourceApi.md#server_endpoints_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}/serverEndpoints/{serverEndpointName} | 


# **server_endpoints_create**
> ServerEndpoint server_endpoints_create(subscription_id, resource_group_name, api_version, storage_sync_service_name, sync_group_name, server_endpoint_name, parameters)



Create a new ServerEndpoint.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.server_endpoint import ServerEndpoint
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
    api_instance = openapi_client.ServerEndpointResourceApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    api_version = 'api_version_example' # str | Client Api Version.
    storage_sync_service_name = 'storage_sync_service_name_example' # str | Name of Storage Sync Service resource.
    sync_group_name = 'sync_group_name_example' # str | Name of Sync Group resource.
    server_endpoint_name = 'server_endpoint_name_example' # str | Name of Server Endpoint object.
    parameters = openapi_client.ServerEndpoint() # ServerEndpoint | Body of Server Endpoint object.

    try:
        api_response = api_instance.server_endpoints_create(subscription_id, resource_group_name, api_version, storage_sync_service_name, sync_group_name, server_endpoint_name, parameters)
        print("The response of ServerEndpointResourceApi->server_endpoints_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServerEndpointResourceApi->server_endpoints_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **api_version** | **str**| Client Api Version. | 
 **storage_sync_service_name** | **str**| Name of Storage Sync Service resource. | 
 **sync_group_name** | **str**| Name of Sync Group resource. | 
 **server_endpoint_name** | **str**| Name of Server Endpoint object. | 
 **parameters** | [**ServerEndpoint**](ServerEndpoint.md)| Body of Server Endpoint object. | 

### Return type

[**ServerEndpoint**](ServerEndpoint.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Server Endpoint object |  * x-ms-request-id - request id. <br>  * x-ms-correlation-request-id - correlation request id. <br>  |
**202** | Asynchronous Operation Status Location |  * Azure-AsyncOperation - Operation Status Location URI <br>  * x-ms-request-id - request id. <br>  * x-ms-correlation-request-id - correlation request id. <br>  * Location - Operation Status Location URI <br>  |
**0** | Error message indicating why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **server_endpoints_delete**
> server_endpoints_delete(subscription_id, resource_group_name, api_version, storage_sync_service_name, sync_group_name, server_endpoint_name)



Delete a given ServerEndpoint.

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
    api_instance = openapi_client.ServerEndpointResourceApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    api_version = 'api_version_example' # str | Client Api Version.
    storage_sync_service_name = 'storage_sync_service_name_example' # str | Name of Storage Sync Service resource.
    sync_group_name = 'sync_group_name_example' # str | Name of Sync Group resource.
    server_endpoint_name = 'server_endpoint_name_example' # str | Name of Server Endpoint object.

    try:
        api_instance.server_endpoints_delete(subscription_id, resource_group_name, api_version, storage_sync_service_name, sync_group_name, server_endpoint_name)
    except Exception as e:
        print("Exception when calling ServerEndpointResourceApi->server_endpoints_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **api_version** | **str**| Client Api Version. | 
 **storage_sync_service_name** | **str**| Name of Storage Sync Service resource. | 
 **sync_group_name** | **str**| Name of Sync Group resource. | 
 **server_endpoint_name** | **str**| Name of Server Endpoint object. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  * x-ms-request-id - request id. <br>  * x-ms-correlation-request-id - correlation request id. <br>  |
**202** | Asynchronous Operation Status Location |  * x-ms-request-id - request id. <br>  * x-ms-correlation-request-id - correlation request id. <br>  * Location - Operation Status Location URI <br>  |
**0** | Error message indicating why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **server_endpoints_get**
> ServerEndpoint server_endpoints_get(subscription_id, resource_group_name, api_version, storage_sync_service_name, sync_group_name, server_endpoint_name)



Get a ServerEndpoint.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.server_endpoint import ServerEndpoint
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
    api_instance = openapi_client.ServerEndpointResourceApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    api_version = 'api_version_example' # str | Client Api Version.
    storage_sync_service_name = 'storage_sync_service_name_example' # str | Name of Storage Sync Service resource.
    sync_group_name = 'sync_group_name_example' # str | Name of Sync Group resource.
    server_endpoint_name = 'server_endpoint_name_example' # str | Name of Server Endpoint object.

    try:
        api_response = api_instance.server_endpoints_get(subscription_id, resource_group_name, api_version, storage_sync_service_name, sync_group_name, server_endpoint_name)
        print("The response of ServerEndpointResourceApi->server_endpoints_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServerEndpointResourceApi->server_endpoints_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **api_version** | **str**| Client Api Version. | 
 **storage_sync_service_name** | **str**| Name of Storage Sync Service resource. | 
 **sync_group_name** | **str**| Name of Sync Group resource. | 
 **server_endpoint_name** | **str**| Name of Server Endpoint object. | 

### Return type

[**ServerEndpoint**](ServerEndpoint.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Server Endpoint object |  * x-ms-request-id - request id. <br>  * x-ms-correlation-request-id - correlation request id. <br>  |
**0** | Error message indicating why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **server_endpoints_list_by_sync_group**
> ServerEndpointArray server_endpoints_list_by_sync_group(subscription_id, resource_group_name, api_version, storage_sync_service_name, sync_group_name)



Get a ServerEndpoint list.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.server_endpoint_array import ServerEndpointArray
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
    api_instance = openapi_client.ServerEndpointResourceApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    api_version = 'api_version_example' # str | Client Api Version.
    storage_sync_service_name = 'storage_sync_service_name_example' # str | Name of Storage Sync Service resource.
    sync_group_name = 'sync_group_name_example' # str | Name of Sync Group resource.

    try:
        api_response = api_instance.server_endpoints_list_by_sync_group(subscription_id, resource_group_name, api_version, storage_sync_service_name, sync_group_name)
        print("The response of ServerEndpointResourceApi->server_endpoints_list_by_sync_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServerEndpointResourceApi->server_endpoints_list_by_sync_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **api_version** | **str**| Client Api Version. | 
 **storage_sync_service_name** | **str**| Name of Storage Sync Service resource. | 
 **sync_group_name** | **str**| Name of Sync Group resource. | 

### Return type

[**ServerEndpointArray**](ServerEndpointArray.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of Server Endpoint resources in Sync Group |  * x-ms-request-id - request id. <br>  * x-ms-correlation-request-id - correlation request id. <br>  * Location - Operation Status Location URI <br>  |
**0** | Error message indicating why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **server_endpoints_recall**
> server_endpoints_recall(subscription_id, resource_group_name, api_version, storage_sync_service_name, sync_group_name, server_endpoint_name)



Recall a server endpoint.

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
    api_instance = openapi_client.ServerEndpointResourceApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    api_version = 'api_version_example' # str | Client Api Version.
    storage_sync_service_name = 'storage_sync_service_name_example' # str | Name of Storage Sync Service resource.
    sync_group_name = 'sync_group_name_example' # str | Name of Sync Group resource.
    server_endpoint_name = 'server_endpoint_name_example' # str | Name of Server Endpoint object.

    try:
        api_instance.server_endpoints_recall(subscription_id, resource_group_name, api_version, storage_sync_service_name, sync_group_name, server_endpoint_name)
    except Exception as e:
        print("Exception when calling ServerEndpointResourceApi->server_endpoints_recall: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **api_version** | **str**| Client Api Version. | 
 **storage_sync_service_name** | **str**| Name of Storage Sync Service resource. | 
 **sync_group_name** | **str**| Name of Sync Group resource. | 
 **server_endpoint_name** | **str**| Name of Server Endpoint object. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Server Endpoint object |  * x-ms-request-id - request id. <br>  * x-ms-correlation-request-id - correlation request id. <br>  |
**202** | Asynchronous Operation Status Location |  * x-ms-request-id - request id. <br>  * x-ms-correlation-request-id - correlation request id. <br>  * Location - Operation Status Location URI <br>  |
**0** | Error message indicating why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **server_endpoints_update**
> ServerEndpoint server_endpoints_update(subscription_id, resource_group_name, api_version, storage_sync_service_name, sync_group_name, server_endpoint_name, parameters=parameters)



Patch a given ServerEndpoint.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.server_endpoint import ServerEndpoint
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
    api_instance = openapi_client.ServerEndpointResourceApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    api_version = 'api_version_example' # str | Client Api Version.
    storage_sync_service_name = 'storage_sync_service_name_example' # str | Name of Storage Sync Service resource.
    sync_group_name = 'sync_group_name_example' # str | Name of Sync Group resource.
    server_endpoint_name = 'server_endpoint_name_example' # str | Name of Server Endpoint object.
    parameters = openapi_client.ServerEndpoint() # ServerEndpoint | Any of the properties applicable in PUT request. (optional)

    try:
        api_response = api_instance.server_endpoints_update(subscription_id, resource_group_name, api_version, storage_sync_service_name, sync_group_name, server_endpoint_name, parameters=parameters)
        print("The response of ServerEndpointResourceApi->server_endpoints_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServerEndpointResourceApi->server_endpoints_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **api_version** | **str**| Client Api Version. | 
 **storage_sync_service_name** | **str**| Name of Storage Sync Service resource. | 
 **sync_group_name** | **str**| Name of Sync Group resource. | 
 **server_endpoint_name** | **str**| Name of Server Endpoint object. | 
 **parameters** | [**ServerEndpoint**](ServerEndpoint.md)| Any of the properties applicable in PUT request. | [optional] 

### Return type

[**ServerEndpoint**](ServerEndpoint.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Server Endpoint object |  * x-ms-request-id - request id. <br>  * x-ms-correlation-request-id - correlation request id. <br>  |
**202** | Asynchronous Operation Status Location |  * Azure-AsyncOperation - Operation Status Location URI <br>  * x-ms-request-id - request id. <br>  * x-ms-correlation-request-id - correlation request id. <br>  * Location - Operation Status Location URI <br>  |
**0** | Error message indicating why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

