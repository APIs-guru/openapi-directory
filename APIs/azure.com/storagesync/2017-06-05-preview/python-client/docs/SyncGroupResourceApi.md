# openapi_client.SyncGroupResourceApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sync_groups_create**](SyncGroupResourceApi.md#sync_groups_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName} | 
[**sync_groups_delete**](SyncGroupResourceApi.md#sync_groups_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName} | 
[**sync_groups_get**](SyncGroupResourceApi.md#sync_groups_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName} | 
[**sync_groups_list_by_storage_sync_service**](SyncGroupResourceApi.md#sync_groups_list_by_storage_sync_service) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups | 


# **sync_groups_create**
> SyncGroup sync_groups_create(subscription_id, resource_group_name, api_version, storage_sync_service_name, sync_group_name, parameters)



Create a new SyncGroup.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.sync_group import SyncGroup
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
    api_instance = openapi_client.SyncGroupResourceApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    api_version = 'api_version_example' # str | Client Api Version.
    storage_sync_service_name = 'storage_sync_service_name_example' # str | Name of Storage Sync Service resource.
    sync_group_name = 'sync_group_name_example' # str | Name of Sync Group resource.
    parameters = openapi_client.SyncGroup() # SyncGroup | Sync Group Body

    try:
        api_response = api_instance.sync_groups_create(subscription_id, resource_group_name, api_version, storage_sync_service_name, sync_group_name, parameters)
        print("The response of SyncGroupResourceApi->sync_groups_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SyncGroupResourceApi->sync_groups_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **api_version** | **str**| Client Api Version. | 
 **storage_sync_service_name** | **str**| Name of Storage Sync Service resource. | 
 **sync_group_name** | **str**| Name of Sync Group resource. | 
 **parameters** | [**SyncGroup**](SyncGroup.md)| Sync Group Body | 

### Return type

[**SyncGroup**](SyncGroup.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Sync Group object |  * x-ms-request-id - request id. <br>  * x-ms-correlation-request-id - correlation request id. <br>  |
**0** | Error message indicating why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sync_groups_delete**
> sync_groups_delete(subscription_id, resource_group_name, api_version, storage_sync_service_name, sync_group_name)



Delete a given SyncGroup.

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
    api_instance = openapi_client.SyncGroupResourceApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    api_version = 'api_version_example' # str | Client Api Version.
    storage_sync_service_name = 'storage_sync_service_name_example' # str | Name of Storage Sync Service resource.
    sync_group_name = 'sync_group_name_example' # str | Name of Sync Group resource.

    try:
        api_instance.sync_groups_delete(subscription_id, resource_group_name, api_version, storage_sync_service_name, sync_group_name)
    except Exception as e:
        print("Exception when calling SyncGroupResourceApi->sync_groups_delete: %s\n" % e)
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

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Sync Group object was deleted |  * x-ms-request-id - request id. <br>  * x-ms-correlation-request-id - correlation request id. <br>  |
**204** | Resource doesn&#39;t exist |  -  |
**0** | Error message indicating why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sync_groups_get**
> SyncGroup sync_groups_get(subscription_id, resource_group_name, api_version, storage_sync_service_name, sync_group_name)



Get a given SyncGroup.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.sync_group import SyncGroup
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
    api_instance = openapi_client.SyncGroupResourceApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    api_version = 'api_version_example' # str | Client Api Version.
    storage_sync_service_name = 'storage_sync_service_name_example' # str | Name of Storage Sync Service resource.
    sync_group_name = 'sync_group_name_example' # str | Name of Sync Group resource.

    try:
        api_response = api_instance.sync_groups_get(subscription_id, resource_group_name, api_version, storage_sync_service_name, sync_group_name)
        print("The response of SyncGroupResourceApi->sync_groups_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SyncGroupResourceApi->sync_groups_get: %s\n" % e)
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

[**SyncGroup**](SyncGroup.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Sync Group object |  * x-ms-request-id - request id. <br>  * x-ms-correlation-request-id - correlation request id. <br>  |
**0** | Error message indicating why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sync_groups_list_by_storage_sync_service**
> SyncGroupArray sync_groups_list_by_storage_sync_service(subscription_id, resource_group_name, api_version, storage_sync_service_name)



Get a SyncGroup List.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.sync_group_array import SyncGroupArray
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
    api_instance = openapi_client.SyncGroupResourceApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    api_version = 'api_version_example' # str | Client Api Version.
    storage_sync_service_name = 'storage_sync_service_name_example' # str | Name of Storage Sync Service resource.

    try:
        api_response = api_instance.sync_groups_list_by_storage_sync_service(subscription_id, resource_group_name, api_version, storage_sync_service_name)
        print("The response of SyncGroupResourceApi->sync_groups_list_by_storage_sync_service:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SyncGroupResourceApi->sync_groups_list_by_storage_sync_service: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **api_version** | **str**| Client Api Version. | 
 **storage_sync_service_name** | **str**| Name of Storage Sync Service resource. | 

### Return type

[**SyncGroupArray**](SyncGroupArray.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of Sync Group resources in Storage Sync Service |  * x-ms-request-id - request id. <br>  * x-ms-correlation-request-id - correlation request id. <br>  |
**0** | Error message indicating why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

