# openapi_client.RegisteredServerResourceApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**registered_servers_create**](RegisteredServerResourceApi.md#registered_servers_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/registeredServers/{serverId} | 
[**registered_servers_delete**](RegisteredServerResourceApi.md#registered_servers_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/registeredServers/{serverId} | 
[**registered_servers_get**](RegisteredServerResourceApi.md#registered_servers_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/registeredServers/{serverId} | 
[**registered_servers_list_by_storage_sync_service**](RegisteredServerResourceApi.md#registered_servers_list_by_storage_sync_service) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/registeredServers | 
[**registered_servers_trigger_rollover**](RegisteredServerResourceApi.md#registered_servers_trigger_rollover) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/registeredServers/{serverId}/triggerRollover | 


# **registered_servers_create**
> RegisteredServer registered_servers_create(subscription_id, resource_group_name, api_version, storage_sync_service_name, server_id, parameters)



Add a new registered server.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.registered_server import RegisteredServer
from openapi_client.models.registered_server_create_parameters import RegisteredServerCreateParameters
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
    api_instance = openapi_client.RegisteredServerResourceApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    storage_sync_service_name = 'storage_sync_service_name_example' # str | Name of Storage Sync Service resource.
    server_id = 'server_id_example' # str | GUID identifying the on-premises server.
    parameters = openapi_client.RegisteredServerCreateParameters() # RegisteredServerCreateParameters | Body of Registered Server object.

    try:
        api_response = api_instance.registered_servers_create(subscription_id, resource_group_name, api_version, storage_sync_service_name, server_id, parameters)
        print("The response of RegisteredServerResourceApi->registered_servers_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RegisteredServerResourceApi->registered_servers_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **storage_sync_service_name** | **str**| Name of Storage Sync Service resource. | 
 **server_id** | **str**| GUID identifying the on-premises server. | 
 **parameters** | [**RegisteredServerCreateParameters**](RegisteredServerCreateParameters.md)| Body of Registered Server object. | 

### Return type

[**RegisteredServer**](RegisteredServer.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Registered Server resources in Sync Group |  * x-ms-request-id - request id. <br>  * x-ms-correlation-request-id - correlation request id. <br>  |
**202** | Asynchronous Operation Status Location |  * Azure-AsyncOperation - Operation Status Location URI <br>  * x-ms-request-id - request id. <br>  * x-ms-correlation-request-id - correlation request id. <br>  * Location - Operation Status Location URI <br>  |
**0** | Error message indicating why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **registered_servers_delete**
> registered_servers_delete(subscription_id, resource_group_name, api_version, storage_sync_service_name, server_id)



Delete the given registered server.

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
    api_instance = openapi_client.RegisteredServerResourceApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    storage_sync_service_name = 'storage_sync_service_name_example' # str | Name of Storage Sync Service resource.
    server_id = 'server_id_example' # str | GUID identifying the on-premises server.

    try:
        api_instance.registered_servers_delete(subscription_id, resource_group_name, api_version, storage_sync_service_name, server_id)
    except Exception as e:
        print("Exception when calling RegisteredServerResourceApi->registered_servers_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **storage_sync_service_name** | **str**| Name of Storage Sync Service resource. | 
 **server_id** | **str**| GUID identifying the on-premises server. | 

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
**204** | Resource doesn&#39;t exist |  -  |
**0** | Error message indicating why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **registered_servers_get**
> RegisteredServer registered_servers_get(subscription_id, resource_group_name, api_version, storage_sync_service_name, server_id)



Get a given registered server.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.registered_server import RegisteredServer
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
    api_instance = openapi_client.RegisteredServerResourceApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    storage_sync_service_name = 'storage_sync_service_name_example' # str | Name of Storage Sync Service resource.
    server_id = 'server_id_example' # str | GUID identifying the on-premises server.

    try:
        api_response = api_instance.registered_servers_get(subscription_id, resource_group_name, api_version, storage_sync_service_name, server_id)
        print("The response of RegisteredServerResourceApi->registered_servers_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RegisteredServerResourceApi->registered_servers_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **storage_sync_service_name** | **str**| Name of Storage Sync Service resource. | 
 **server_id** | **str**| GUID identifying the on-premises server. | 

### Return type

[**RegisteredServer**](RegisteredServer.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Registered Server resources in Sync Group |  * x-ms-request-id - request id. <br>  * x-ms-correlation-request-id - correlation request id. <br>  |
**0** | Error message indicating why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **registered_servers_list_by_storage_sync_service**
> RegisteredServerArray registered_servers_list_by_storage_sync_service(subscription_id, resource_group_name, api_version, storage_sync_service_name)



Get a given registered server list.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.registered_server_array import RegisteredServerArray
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
    api_instance = openapi_client.RegisteredServerResourceApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    storage_sync_service_name = 'storage_sync_service_name_example' # str | Name of Storage Sync Service resource.

    try:
        api_response = api_instance.registered_servers_list_by_storage_sync_service(subscription_id, resource_group_name, api_version, storage_sync_service_name)
        print("The response of RegisteredServerResourceApi->registered_servers_list_by_storage_sync_service:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RegisteredServerResourceApi->registered_servers_list_by_storage_sync_service: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **storage_sync_service_name** | **str**| Name of Storage Sync Service resource. | 

### Return type

[**RegisteredServerArray**](RegisteredServerArray.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of Registered Server resources in Storage Sync Service |  * x-ms-request-id - request id. <br>  * x-ms-correlation-request-id - correlation request id. <br>  |
**0** | Error message indicating why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **registered_servers_trigger_rollover**
> registered_servers_trigger_rollover(subscription_id, resource_group_name, api_version, storage_sync_service_name, server_id, parameters)



Triggers Server certificate rollover.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.trigger_rollover_request import TriggerRolloverRequest
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
    api_instance = openapi_client.RegisteredServerResourceApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    storage_sync_service_name = 'storage_sync_service_name_example' # str | Name of Storage Sync Service resource.
    server_id = 'server_id_example' # str | Server Id
    parameters = openapi_client.TriggerRolloverRequest() # TriggerRolloverRequest | Body of Trigger Rollover request.

    try:
        api_instance.registered_servers_trigger_rollover(subscription_id, resource_group_name, api_version, storage_sync_service_name, server_id, parameters)
    except Exception as e:
        print("Exception when calling RegisteredServerResourceApi->registered_servers_trigger_rollover: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **storage_sync_service_name** | **str**| Name of Storage Sync Service resource. | 
 **server_id** | **str**| Server Id | 
 **parameters** | [**TriggerRolloverRequest**](TriggerRolloverRequest.md)| Body of Trigger Rollover request. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Trigger Rollover success status |  * x-ms-request-id - request id. <br>  * x-ms-correlation-request-id - correlation request id. <br>  |
**202** | Asynchronous Operation Status Location |  * x-ms-request-id - request id. <br>  * x-ms-correlation-request-id - correlation request id. <br>  * Location - Operation Status Location URI <br>  |
**0** | Error message indicating why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

