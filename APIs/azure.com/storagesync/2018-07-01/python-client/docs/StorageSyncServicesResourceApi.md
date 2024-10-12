# openapi_client.StorageSyncServicesResourceApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**storage_sync_services_create**](StorageSyncServicesResourceApi.md#storage_sync_services_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName} | 
[**storage_sync_services_delete**](StorageSyncServicesResourceApi.md#storage_sync_services_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName} | 
[**storage_sync_services_get**](StorageSyncServicesResourceApi.md#storage_sync_services_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName} | 
[**storage_sync_services_list_by_resource_group**](StorageSyncServicesResourceApi.md#storage_sync_services_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices | 
[**storage_sync_services_list_by_subscription**](StorageSyncServicesResourceApi.md#storage_sync_services_list_by_subscription) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.StorageSync/storageSyncServices | 
[**storage_sync_services_update**](StorageSyncServicesResourceApi.md#storage_sync_services_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName} | 


# **storage_sync_services_create**
> StorageSyncService storage_sync_services_create(subscription_id, resource_group_name, api_version, storage_sync_service_name, parameters)



Create a new StorageSyncService.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.storage_sync_service import StorageSyncService
from openapi_client.models.storage_sync_service_create_parameters import StorageSyncServiceCreateParameters
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
    api_instance = openapi_client.StorageSyncServicesResourceApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    storage_sync_service_name = 'storage_sync_service_name_example' # str | Name of Storage Sync Service resource.
    parameters = openapi_client.StorageSyncServiceCreateParameters() # StorageSyncServiceCreateParameters | Storage Sync Service resource name.

    try:
        api_response = api_instance.storage_sync_services_create(subscription_id, resource_group_name, api_version, storage_sync_service_name, parameters)
        print("The response of StorageSyncServicesResourceApi->storage_sync_services_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorageSyncServicesResourceApi->storage_sync_services_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **storage_sync_service_name** | **str**| Name of Storage Sync Service resource. | 
 **parameters** | [**StorageSyncServiceCreateParameters**](StorageSyncServiceCreateParameters.md)| Storage Sync Service resource name. | 

### Return type

[**StorageSyncService**](StorageSyncService.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Storage Sync Service object created/updated |  -  |
**0** | Error message indicating why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storage_sync_services_delete**
> storage_sync_services_delete(subscription_id, resource_group_name, api_version, storage_sync_service_name)



Delete a given StorageSyncService.

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
    api_instance = openapi_client.StorageSyncServicesResourceApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    storage_sync_service_name = 'storage_sync_service_name_example' # str | Name of Storage Sync Service resource.

    try:
        api_instance.storage_sync_services_delete(subscription_id, resource_group_name, api_version, storage_sync_service_name)
    except Exception as e:
        print("Exception when calling StorageSyncServicesResourceApi->storage_sync_services_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **storage_sync_service_name** | **str**| Name of Storage Sync Service resource. | 

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
**200** | Storage Sync Service object was deleted. |  * x-ms-request-id - request id. <br>  * x-ms-correlation-request-id - correlation request id. <br>  |
**204** | Storage Sync Service Resource doesn&#39;t exist |  -  |
**0** | Error message indicating why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storage_sync_services_get**
> StorageSyncService storage_sync_services_get(subscription_id, resource_group_name, storage_sync_service_name, api_version)



Get a given StorageSyncService.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.storage_sync_service import StorageSyncService
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
    api_instance = openapi_client.StorageSyncServicesResourceApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    storage_sync_service_name = 'storage_sync_service_name_example' # str | Name of Storage Sync Service resource.
    api_version = 'api_version_example' # str | The API version to use for this operation.

    try:
        api_response = api_instance.storage_sync_services_get(subscription_id, resource_group_name, storage_sync_service_name, api_version)
        print("The response of StorageSyncServicesResourceApi->storage_sync_services_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorageSyncServicesResourceApi->storage_sync_services_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **storage_sync_service_name** | **str**| Name of Storage Sync Service resource. | 
 **api_version** | **str**| The API version to use for this operation. | 

### Return type

[**StorageSyncService**](StorageSyncService.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Storage Sync Service object |  * x-ms-request-id - request id. <br>  * x-ms-correlation-request-id - correlation request id. <br>  |
**0** | Error message indicating why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storage_sync_services_list_by_resource_group**
> StorageSyncServiceArray storage_sync_services_list_by_resource_group(subscription_id, resource_group_name, api_version)



Get a StorageSyncService list by Resource group name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.storage_sync_service_array import StorageSyncServiceArray
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
    api_instance = openapi_client.StorageSyncServicesResourceApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.

    try:
        api_response = api_instance.storage_sync_services_list_by_resource_group(subscription_id, resource_group_name, api_version)
        print("The response of StorageSyncServicesResourceApi->storage_sync_services_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorageSyncServicesResourceApi->storage_sync_services_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 

### Return type

[**StorageSyncServiceArray**](StorageSyncServiceArray.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of registered Storage Sync Service resources in the Resource Group |  * x-ms-request-id - request id. <br>  * x-ms-correlation-request-id - correlation request id. <br>  |
**0** | Error message indicating why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storage_sync_services_list_by_subscription**
> StorageSyncServiceArray storage_sync_services_list_by_subscription(subscription_id, api_version)



Get a StorageSyncService list by subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.storage_sync_service_array import StorageSyncServiceArray
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
    api_instance = openapi_client.StorageSyncServicesResourceApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    api_version = 'api_version_example' # str | The API version to use for this operation.

    try:
        api_response = api_instance.storage_sync_services_list_by_subscription(subscription_id, api_version)
        print("The response of StorageSyncServicesResourceApi->storage_sync_services_list_by_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorageSyncServicesResourceApi->storage_sync_services_list_by_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **api_version** | **str**| The API version to use for this operation. | 

### Return type

[**StorageSyncServiceArray**](StorageSyncServiceArray.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of registered Storage Sync Service resources in the subscription. |  * x-ms-request-id - request id. <br>  * x-ms-correlation-request-id - correlation request id. <br>  |
**0** | Error message indicating why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storage_sync_services_update**
> StorageSyncService storage_sync_services_update(subscription_id, resource_group_name, api_version, storage_sync_service_name, parameters=parameters)



Patch a given StorageSyncService.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.storage_sync_service import StorageSyncService
from openapi_client.models.storage_sync_service_update_parameters import StorageSyncServiceUpdateParameters
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
    api_instance = openapi_client.StorageSyncServicesResourceApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    storage_sync_service_name = 'storage_sync_service_name_example' # str | Name of Storage Sync Service resource.
    parameters = openapi_client.StorageSyncServiceUpdateParameters() # StorageSyncServiceUpdateParameters | Storage Sync Service resource. (optional)

    try:
        api_response = api_instance.storage_sync_services_update(subscription_id, resource_group_name, api_version, storage_sync_service_name, parameters=parameters)
        print("The response of StorageSyncServicesResourceApi->storage_sync_services_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorageSyncServicesResourceApi->storage_sync_services_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **storage_sync_service_name** | **str**| Name of Storage Sync Service resource. | 
 **parameters** | [**StorageSyncServiceUpdateParameters**](StorageSyncServiceUpdateParameters.md)| Storage Sync Service resource. | [optional] 

### Return type

[**StorageSyncService**](StorageSyncService.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Storage Sync Service object created/updated |  * x-ms-request-id - request id. <br>  * x-ms-correlation-request-id - correlation request id. <br>  |
**0** | Error message indicating why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

