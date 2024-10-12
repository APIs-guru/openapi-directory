# openapi_client.CloudEndpointResourceApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cloud_endpoints_create**](CloudEndpointResourceApi.md#cloud_endpoints_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}/cloudEndpoints/{cloudEndpointName} | 
[**cloud_endpoints_delete**](CloudEndpointResourceApi.md#cloud_endpoints_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}/cloudEndpoints/{cloudEndpointName} | 
[**cloud_endpoints_get**](CloudEndpointResourceApi.md#cloud_endpoints_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}/cloudEndpoints/{cloudEndpointName} | 
[**cloud_endpoints_list_by_sync_group**](CloudEndpointResourceApi.md#cloud_endpoints_list_by_sync_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}/cloudEndpoints | 
[**cloud_endpoints_post_backup**](CloudEndpointResourceApi.md#cloud_endpoints_post_backup) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}/cloudEndpoints/{cloudEndpointName}/postbackup | 
[**cloud_endpoints_post_restore**](CloudEndpointResourceApi.md#cloud_endpoints_post_restore) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}/cloudEndpoints/{cloudEndpointName}/postrestore | 
[**cloud_endpoints_pre_backup**](CloudEndpointResourceApi.md#cloud_endpoints_pre_backup) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}/cloudEndpoints/{cloudEndpointName}/prebackup | 
[**cloud_endpoints_pre_restore**](CloudEndpointResourceApi.md#cloud_endpoints_pre_restore) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}/cloudEndpoints/{cloudEndpointName}/prerestore | 
[**cloud_endpoints_restoreheartbeat**](CloudEndpointResourceApi.md#cloud_endpoints_restoreheartbeat) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}/cloudEndpoints/{cloudEndpointName}/restoreheartbeat | 


# **cloud_endpoints_create**
> CloudEndpoint cloud_endpoints_create(subscription_id, resource_group_name, api_version, storage_sync_service_name, sync_group_name, cloud_endpoint_name, parameters)



Create a new CloudEndpoint.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.cloud_endpoint import CloudEndpoint
from openapi_client.models.cloud_endpoint_create_parameters import CloudEndpointCreateParameters
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
    api_instance = openapi_client.CloudEndpointResourceApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    storage_sync_service_name = 'storage_sync_service_name_example' # str | Name of Storage Sync Service resource.
    sync_group_name = 'sync_group_name_example' # str | Name of Sync Group resource.
    cloud_endpoint_name = 'cloud_endpoint_name_example' # str | Name of Cloud Endpoint object.
    parameters = openapi_client.CloudEndpointCreateParameters() # CloudEndpointCreateParameters | Body of Cloud Endpoint resource.

    try:
        api_response = api_instance.cloud_endpoints_create(subscription_id, resource_group_name, api_version, storage_sync_service_name, sync_group_name, cloud_endpoint_name, parameters)
        print("The response of CloudEndpointResourceApi->cloud_endpoints_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CloudEndpointResourceApi->cloud_endpoints_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **storage_sync_service_name** | **str**| Name of Storage Sync Service resource. | 
 **sync_group_name** | **str**| Name of Sync Group resource. | 
 **cloud_endpoint_name** | **str**| Name of Cloud Endpoint object. | 
 **parameters** | [**CloudEndpointCreateParameters**](CloudEndpointCreateParameters.md)| Body of Cloud Endpoint resource. | 

### Return type

[**CloudEndpoint**](CloudEndpoint.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Cloud Endpoint object |  * x-ms-request-id - request id. <br>  * x-ms-correlation-request-id - correlation request id. <br>  |
**202** | Asynchronous Operation Status Location |  * Retry-After - Retry After <br>  * Azure-AsyncOperation - Operation Status Location URI <br>  * x-ms-request-id - request id. <br>  * x-ms-correlation-request-id - correlation request id. <br>  * Location - Operation Status Location URI <br>  |
**0** | Error message indicating why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloud_endpoints_delete**
> cloud_endpoints_delete(subscription_id, resource_group_name, api_version, storage_sync_service_name, sync_group_name, cloud_endpoint_name)



Delete a given CloudEndpoint.

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
    api_instance = openapi_client.CloudEndpointResourceApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    storage_sync_service_name = 'storage_sync_service_name_example' # str | Name of Storage Sync Service resource.
    sync_group_name = 'sync_group_name_example' # str | Name of Sync Group resource.
    cloud_endpoint_name = 'cloud_endpoint_name_example' # str | Name of Cloud Endpoint object.

    try:
        api_instance.cloud_endpoints_delete(subscription_id, resource_group_name, api_version, storage_sync_service_name, sync_group_name, cloud_endpoint_name)
    except Exception as e:
        print("Exception when calling CloudEndpointResourceApi->cloud_endpoints_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **storage_sync_service_name** | **str**| Name of Storage Sync Service resource. | 
 **sync_group_name** | **str**| Name of Sync Group resource. | 
 **cloud_endpoint_name** | **str**| Name of Cloud Endpoint object. | 

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
**202** | Asynchronous Operation Status Location |  * Retry-After - Retry After <br>  * Azure-AsyncOperation - Operation Status Location URI <br>  * x-ms-request-id - request id. <br>  * x-ms-correlation-request-id - correlation request id. <br>  * Location - Operation Status Location URI <br>  |
**204** | Resource doesn&#39;t exist |  -  |
**0** | Error message indicating why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloud_endpoints_get**
> CloudEndpoint cloud_endpoints_get(subscription_id, resource_group_name, api_version, storage_sync_service_name, sync_group_name, cloud_endpoint_name)



Get a given CloudEndpoint.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.cloud_endpoint import CloudEndpoint
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
    api_instance = openapi_client.CloudEndpointResourceApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    storage_sync_service_name = 'storage_sync_service_name_example' # str | Name of Storage Sync Service resource.
    sync_group_name = 'sync_group_name_example' # str | Name of Sync Group resource.
    cloud_endpoint_name = 'cloud_endpoint_name_example' # str | Name of Cloud Endpoint object.

    try:
        api_response = api_instance.cloud_endpoints_get(subscription_id, resource_group_name, api_version, storage_sync_service_name, sync_group_name, cloud_endpoint_name)
        print("The response of CloudEndpointResourceApi->cloud_endpoints_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CloudEndpointResourceApi->cloud_endpoints_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **storage_sync_service_name** | **str**| Name of Storage Sync Service resource. | 
 **sync_group_name** | **str**| Name of Sync Group resource. | 
 **cloud_endpoint_name** | **str**| Name of Cloud Endpoint object. | 

### Return type

[**CloudEndpoint**](CloudEndpoint.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Cloud Endpoint object |  * x-ms-request-id - request id. <br>  * x-ms-correlation-request-id - correlation request id. <br>  |
**0** | Error message indicating why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloud_endpoints_list_by_sync_group**
> CloudEndpointArray cloud_endpoints_list_by_sync_group(subscription_id, resource_group_name, api_version, storage_sync_service_name, sync_group_name)



Get a CloudEndpoint List.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.cloud_endpoint_array import CloudEndpointArray
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
    api_instance = openapi_client.CloudEndpointResourceApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    storage_sync_service_name = 'storage_sync_service_name_example' # str | Name of Storage Sync Service resource.
    sync_group_name = 'sync_group_name_example' # str | Name of Sync Group resource.

    try:
        api_response = api_instance.cloud_endpoints_list_by_sync_group(subscription_id, resource_group_name, api_version, storage_sync_service_name, sync_group_name)
        print("The response of CloudEndpointResourceApi->cloud_endpoints_list_by_sync_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CloudEndpointResourceApi->cloud_endpoints_list_by_sync_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **storage_sync_service_name** | **str**| Name of Storage Sync Service resource. | 
 **sync_group_name** | **str**| Name of Sync Group resource. | 

### Return type

[**CloudEndpointArray**](CloudEndpointArray.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of Cloud Endpoint resources in Sync Group |  * x-ms-request-id - request id. <br>  * x-ms-correlation-request-id - correlation request id. <br>  |
**0** | Error message indicating why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloud_endpoints_post_backup**
> PostBackupResponse cloud_endpoints_post_backup(subscription_id, resource_group_name, api_version, storage_sync_service_name, sync_group_name, cloud_endpoint_name, parameters)



Post Backup a given CloudEndpoint.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.backup_request import BackupRequest
from openapi_client.models.post_backup_response import PostBackupResponse
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
    api_instance = openapi_client.CloudEndpointResourceApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    storage_sync_service_name = 'storage_sync_service_name_example' # str | Name of Storage Sync Service resource.
    sync_group_name = 'sync_group_name_example' # str | Name of Sync Group resource.
    cloud_endpoint_name = 'cloud_endpoint_name_example' # str | Name of Cloud Endpoint object.
    parameters = openapi_client.BackupRequest() # BackupRequest | Body of Backup request.

    try:
        api_response = api_instance.cloud_endpoints_post_backup(subscription_id, resource_group_name, api_version, storage_sync_service_name, sync_group_name, cloud_endpoint_name, parameters)
        print("The response of CloudEndpointResourceApi->cloud_endpoints_post_backup:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CloudEndpointResourceApi->cloud_endpoints_post_backup: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **storage_sync_service_name** | **str**| Name of Storage Sync Service resource. | 
 **sync_group_name** | **str**| Name of Sync Group resource. | 
 **cloud_endpoint_name** | **str**| Name of Cloud Endpoint object. | 
 **parameters** | [**BackupRequest**](BackupRequest.md)| Body of Backup request. | 

### Return type

[**PostBackupResponse**](PostBackupResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  * x-ms-request-id - request id. <br>  * x-ms-correlation-request-id - correlation request id. <br>  * Location - Operation Status Location URI <br>  |
**202** | Asynchronous Operation Status Location |  * x-ms-request-id - request id. <br>  * x-ms-correlation-request-id - correlation request id. <br>  * Location - Operation Status Location URI <br>  |
**0** | Error message indicating why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloud_endpoints_post_restore**
> cloud_endpoints_post_restore(subscription_id, resource_group_name, api_version, storage_sync_service_name, sync_group_name, cloud_endpoint_name, parameters)



Post Restore a given CloudEndpoint.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.post_restore_request import PostRestoreRequest
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
    api_instance = openapi_client.CloudEndpointResourceApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    storage_sync_service_name = 'storage_sync_service_name_example' # str | Name of Storage Sync Service resource.
    sync_group_name = 'sync_group_name_example' # str | Name of Sync Group resource.
    cloud_endpoint_name = 'cloud_endpoint_name_example' # str | Name of Cloud Endpoint object.
    parameters = openapi_client.PostRestoreRequest() # PostRestoreRequest | Body of Cloud Endpoint object.

    try:
        api_instance.cloud_endpoints_post_restore(subscription_id, resource_group_name, api_version, storage_sync_service_name, sync_group_name, cloud_endpoint_name, parameters)
    except Exception as e:
        print("Exception when calling CloudEndpointResourceApi->cloud_endpoints_post_restore: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **storage_sync_service_name** | **str**| Name of Storage Sync Service resource. | 
 **sync_group_name** | **str**| Name of Sync Group resource. | 
 **cloud_endpoint_name** | **str**| Name of Cloud Endpoint object. | 
 **parameters** | [**PostRestoreRequest**](PostRestoreRequest.md)| Body of Cloud Endpoint object. | 

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
**200** | Ok |  -  |
**202** | Asynchronous Operation Status Location |  * x-ms-request-id - request id. <br>  * x-ms-correlation-request-id - correlation request id. <br>  * Location - Operation Status Location URI <br>  |
**0** | Error message indicating why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloud_endpoints_pre_backup**
> cloud_endpoints_pre_backup(subscription_id, resource_group_name, api_version, storage_sync_service_name, sync_group_name, cloud_endpoint_name, parameters)



Pre Backup a given CloudEndpoint.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.backup_request import BackupRequest
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
    api_instance = openapi_client.CloudEndpointResourceApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    storage_sync_service_name = 'storage_sync_service_name_example' # str | Name of Storage Sync Service resource.
    sync_group_name = 'sync_group_name_example' # str | Name of Sync Group resource.
    cloud_endpoint_name = 'cloud_endpoint_name_example' # str | Name of Cloud Endpoint object.
    parameters = openapi_client.BackupRequest() # BackupRequest | Body of Backup request.

    try:
        api_instance.cloud_endpoints_pre_backup(subscription_id, resource_group_name, api_version, storage_sync_service_name, sync_group_name, cloud_endpoint_name, parameters)
    except Exception as e:
        print("Exception when calling CloudEndpointResourceApi->cloud_endpoints_pre_backup: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **storage_sync_service_name** | **str**| Name of Storage Sync Service resource. | 
 **sync_group_name** | **str**| Name of Sync Group resource. | 
 **cloud_endpoint_name** | **str**| Name of Cloud Endpoint object. | 
 **parameters** | [**BackupRequest**](BackupRequest.md)| Body of Backup request. | 

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
**200** | Ok |  * x-ms-request-id - request id. <br>  * x-ms-correlation-request-id - correlation request id. <br>  * Location - Operation Status Location URI <br>  |
**202** | Asynchronous Operation Status Location |  * x-ms-request-id - request id. <br>  * x-ms-correlation-request-id - correlation request id. <br>  * Location - Operation Status Location URI <br>  |
**0** | Error message indicating why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloud_endpoints_pre_restore**
> cloud_endpoints_pre_restore(subscription_id, resource_group_name, api_version, storage_sync_service_name, sync_group_name, cloud_endpoint_name, parameters)



Pre Restore a given CloudEndpoint.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.pre_restore_request import PreRestoreRequest
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
    api_instance = openapi_client.CloudEndpointResourceApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    storage_sync_service_name = 'storage_sync_service_name_example' # str | Name of Storage Sync Service resource.
    sync_group_name = 'sync_group_name_example' # str | Name of Sync Group resource.
    cloud_endpoint_name = 'cloud_endpoint_name_example' # str | Name of Cloud Endpoint object.
    parameters = openapi_client.PreRestoreRequest() # PreRestoreRequest | Body of Cloud Endpoint object.

    try:
        api_instance.cloud_endpoints_pre_restore(subscription_id, resource_group_name, api_version, storage_sync_service_name, sync_group_name, cloud_endpoint_name, parameters)
    except Exception as e:
        print("Exception when calling CloudEndpointResourceApi->cloud_endpoints_pre_restore: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **storage_sync_service_name** | **str**| Name of Storage Sync Service resource. | 
 **sync_group_name** | **str**| Name of Sync Group resource. | 
 **cloud_endpoint_name** | **str**| Name of Cloud Endpoint object. | 
 **parameters** | [**PreRestoreRequest**](PreRestoreRequest.md)| Body of Cloud Endpoint object. | 

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
**200** | Ok |  -  |
**202** | Asynchronous Operation Status Location |  * x-ms-request-id - request id. <br>  * x-ms-correlation-request-id - correlation request id. <br>  * Location - Operation Status Location URI <br>  |
**0** | Error message indicating why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloud_endpoints_restoreheartbeat**
> cloud_endpoints_restoreheartbeat(subscription_id, resource_group_name, api_version, storage_sync_service_name, sync_group_name, cloud_endpoint_name)



Restore Heartbeat a given CloudEndpoint.

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
    api_instance = openapi_client.CloudEndpointResourceApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    storage_sync_service_name = 'storage_sync_service_name_example' # str | Name of Storage Sync Service resource.
    sync_group_name = 'sync_group_name_example' # str | Name of Sync Group resource.
    cloud_endpoint_name = 'cloud_endpoint_name_example' # str | Name of Cloud Endpoint object.

    try:
        api_instance.cloud_endpoints_restoreheartbeat(subscription_id, resource_group_name, api_version, storage_sync_service_name, sync_group_name, cloud_endpoint_name)
    except Exception as e:
        print("Exception when calling CloudEndpointResourceApi->cloud_endpoints_restoreheartbeat: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **storage_sync_service_name** | **str**| Name of Storage Sync Service resource. | 
 **sync_group_name** | **str**| Name of Sync Group resource. | 
 **cloud_endpoint_name** | **str**| Name of Cloud Endpoint object. | 

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
**200** | Restore Heartbeat Operation has ran successfully. |  * x-ms-request-id - request id. <br>  * x-ms-correlation-request-id - correlation request id. <br>  |
**0** | Error message indicating why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

