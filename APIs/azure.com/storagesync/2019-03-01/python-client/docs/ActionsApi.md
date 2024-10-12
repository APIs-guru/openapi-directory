# openapi_client.ActionsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cloud_endpoints_post_backup_0**](ActionsApi.md#cloud_endpoints_post_backup_0) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}/cloudEndpoints/{cloudEndpointName}/postbackup | 
[**cloud_endpoints_post_restore_0**](ActionsApi.md#cloud_endpoints_post_restore_0) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}/cloudEndpoints/{cloudEndpointName}/postrestore | 
[**cloud_endpoints_pre_backup_0**](ActionsApi.md#cloud_endpoints_pre_backup_0) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}/cloudEndpoints/{cloudEndpointName}/prebackup | 
[**cloud_endpoints_pre_restore_0**](ActionsApi.md#cloud_endpoints_pre_restore_0) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}/cloudEndpoints/{cloudEndpointName}/prerestore | 
[**cloud_endpoints_restoreheartbeat_0**](ActionsApi.md#cloud_endpoints_restoreheartbeat_0) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}/cloudEndpoints/{cloudEndpointName}/restoreheartbeat | 
[**cloud_endpoints_trigger_change_detection_0**](ActionsApi.md#cloud_endpoints_trigger_change_detection_0) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}/cloudEndpoints/{cloudEndpointName}/triggerChangeDetection | 
[**registered_servers_trigger_rollover_0**](ActionsApi.md#registered_servers_trigger_rollover_0) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/registeredServers/{serverId}/triggerRollover | 
[**server_endpoints_recall_action_0**](ActionsApi.md#server_endpoints_recall_action_0) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}/serverEndpoints/{serverEndpointName}/recallAction | 
[**workflows_abort_0**](ActionsApi.md#workflows_abort_0) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/workflows/{workflowId}/abort | 


# **cloud_endpoints_post_backup_0**
> PostBackupResponse cloud_endpoints_post_backup_0(subscription_id, resource_group_name, api_version, storage_sync_service_name, sync_group_name, cloud_endpoint_name, parameters)



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
    api_instance = openapi_client.ActionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    storage_sync_service_name = 'storage_sync_service_name_example' # str | Name of Storage Sync Service resource.
    sync_group_name = 'sync_group_name_example' # str | Name of Sync Group resource.
    cloud_endpoint_name = 'cloud_endpoint_name_example' # str | Name of Cloud Endpoint object.
    parameters = openapi_client.BackupRequest() # BackupRequest | Body of Backup request.

    try:
        api_response = api_instance.cloud_endpoints_post_backup_0(subscription_id, resource_group_name, api_version, storage_sync_service_name, sync_group_name, cloud_endpoint_name, parameters)
        print("The response of ActionsApi->cloud_endpoints_post_backup_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ActionsApi->cloud_endpoints_post_backup_0: %s\n" % e)
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

# **cloud_endpoints_post_restore_0**
> cloud_endpoints_post_restore_0(subscription_id, resource_group_name, api_version, storage_sync_service_name, sync_group_name, cloud_endpoint_name, parameters)



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
    api_instance = openapi_client.ActionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    storage_sync_service_name = 'storage_sync_service_name_example' # str | Name of Storage Sync Service resource.
    sync_group_name = 'sync_group_name_example' # str | Name of Sync Group resource.
    cloud_endpoint_name = 'cloud_endpoint_name_example' # str | Name of Cloud Endpoint object.
    parameters = openapi_client.PostRestoreRequest() # PostRestoreRequest | Body of Cloud Endpoint object.

    try:
        api_instance.cloud_endpoints_post_restore_0(subscription_id, resource_group_name, api_version, storage_sync_service_name, sync_group_name, cloud_endpoint_name, parameters)
    except Exception as e:
        print("Exception when calling ActionsApi->cloud_endpoints_post_restore_0: %s\n" % e)
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

# **cloud_endpoints_pre_backup_0**
> cloud_endpoints_pre_backup_0(subscription_id, resource_group_name, api_version, storage_sync_service_name, sync_group_name, cloud_endpoint_name, parameters)



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
    api_instance = openapi_client.ActionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    storage_sync_service_name = 'storage_sync_service_name_example' # str | Name of Storage Sync Service resource.
    sync_group_name = 'sync_group_name_example' # str | Name of Sync Group resource.
    cloud_endpoint_name = 'cloud_endpoint_name_example' # str | Name of Cloud Endpoint object.
    parameters = openapi_client.BackupRequest() # BackupRequest | Body of Backup request.

    try:
        api_instance.cloud_endpoints_pre_backup_0(subscription_id, resource_group_name, api_version, storage_sync_service_name, sync_group_name, cloud_endpoint_name, parameters)
    except Exception as e:
        print("Exception when calling ActionsApi->cloud_endpoints_pre_backup_0: %s\n" % e)
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

# **cloud_endpoints_pre_restore_0**
> cloud_endpoints_pre_restore_0(subscription_id, resource_group_name, api_version, storage_sync_service_name, sync_group_name, cloud_endpoint_name, parameters)



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
    api_instance = openapi_client.ActionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    storage_sync_service_name = 'storage_sync_service_name_example' # str | Name of Storage Sync Service resource.
    sync_group_name = 'sync_group_name_example' # str | Name of Sync Group resource.
    cloud_endpoint_name = 'cloud_endpoint_name_example' # str | Name of Cloud Endpoint object.
    parameters = openapi_client.PreRestoreRequest() # PreRestoreRequest | Body of Cloud Endpoint object.

    try:
        api_instance.cloud_endpoints_pre_restore_0(subscription_id, resource_group_name, api_version, storage_sync_service_name, sync_group_name, cloud_endpoint_name, parameters)
    except Exception as e:
        print("Exception when calling ActionsApi->cloud_endpoints_pre_restore_0: %s\n" % e)
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

# **cloud_endpoints_restoreheartbeat_0**
> cloud_endpoints_restoreheartbeat_0(subscription_id, resource_group_name, api_version, storage_sync_service_name, sync_group_name, cloud_endpoint_name)



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
    api_instance = openapi_client.ActionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    storage_sync_service_name = 'storage_sync_service_name_example' # str | Name of Storage Sync Service resource.
    sync_group_name = 'sync_group_name_example' # str | Name of Sync Group resource.
    cloud_endpoint_name = 'cloud_endpoint_name_example' # str | Name of Cloud Endpoint object.

    try:
        api_instance.cloud_endpoints_restoreheartbeat_0(subscription_id, resource_group_name, api_version, storage_sync_service_name, sync_group_name, cloud_endpoint_name)
    except Exception as e:
        print("Exception when calling ActionsApi->cloud_endpoints_restoreheartbeat_0: %s\n" % e)
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

# **cloud_endpoints_trigger_change_detection_0**
> cloud_endpoints_trigger_change_detection_0(subscription_id, resource_group_name, api_version, storage_sync_service_name, sync_group_name, cloud_endpoint_name, parameters)



Triggers detection of changes performed on Azure File share connected to the specified Azure File Sync Cloud Endpoint.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.trigger_change_detection_parameters import TriggerChangeDetectionParameters
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
    api_instance = openapi_client.ActionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    storage_sync_service_name = 'storage_sync_service_name_example' # str | Name of Storage Sync Service resource.
    sync_group_name = 'sync_group_name_example' # str | Name of Sync Group resource.
    cloud_endpoint_name = 'cloud_endpoint_name_example' # str | Name of Cloud Endpoint object.
    parameters = openapi_client.TriggerChangeDetectionParameters() # TriggerChangeDetectionParameters | Trigger Change Detection Action parameters.

    try:
        api_instance.cloud_endpoints_trigger_change_detection_0(subscription_id, resource_group_name, api_version, storage_sync_service_name, sync_group_name, cloud_endpoint_name, parameters)
    except Exception as e:
        print("Exception when calling ActionsApi->cloud_endpoints_trigger_change_detection_0: %s\n" % e)
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
 **parameters** | [**TriggerChangeDetectionParameters**](TriggerChangeDetectionParameters.md)| Trigger Change Detection Action parameters. | 

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

# **registered_servers_trigger_rollover_0**
> registered_servers_trigger_rollover_0(subscription_id, resource_group_name, api_version, storage_sync_service_name, server_id, parameters)



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
    api_instance = openapi_client.ActionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    storage_sync_service_name = 'storage_sync_service_name_example' # str | Name of Storage Sync Service resource.
    server_id = 'server_id_example' # str | Server Id
    parameters = openapi_client.TriggerRolloverRequest() # TriggerRolloverRequest | Body of Trigger Rollover request.

    try:
        api_instance.registered_servers_trigger_rollover_0(subscription_id, resource_group_name, api_version, storage_sync_service_name, server_id, parameters)
    except Exception as e:
        print("Exception when calling ActionsApi->registered_servers_trigger_rollover_0: %s\n" % e)
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

# **server_endpoints_recall_action_0**
> server_endpoints_recall_action_0(subscription_id, resource_group_name, api_version, storage_sync_service_name, sync_group_name, server_endpoint_name, parameters)



Recall a server endpoint.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.recall_action_parameters import RecallActionParameters
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
    api_instance = openapi_client.ActionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    storage_sync_service_name = 'storage_sync_service_name_example' # str | Name of Storage Sync Service resource.
    sync_group_name = 'sync_group_name_example' # str | Name of Sync Group resource.
    server_endpoint_name = 'server_endpoint_name_example' # str | Name of Server Endpoint object.
    parameters = openapi_client.RecallActionParameters() # RecallActionParameters | Body of Recall Action object.

    try:
        api_instance.server_endpoints_recall_action_0(subscription_id, resource_group_name, api_version, storage_sync_service_name, sync_group_name, server_endpoint_name, parameters)
    except Exception as e:
        print("Exception when calling ActionsApi->server_endpoints_recall_action_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **storage_sync_service_name** | **str**| Name of Storage Sync Service resource. | 
 **sync_group_name** | **str**| Name of Sync Group resource. | 
 **server_endpoint_name** | **str**| Name of Server Endpoint object. | 
 **parameters** | [**RecallActionParameters**](RecallActionParameters.md)| Body of Recall Action object. | 

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
**200** | Server Endpoint object |  * x-ms-request-id - request id. <br>  * x-ms-correlation-request-id - correlation request id. <br>  |
**202** | Asynchronous Operation Status Location |  * x-ms-request-id - request id. <br>  * x-ms-correlation-request-id - correlation request id. <br>  * Location - Operation Status Location URI <br>  |
**0** | Error message indicating why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workflows_abort_0**
> workflows_abort_0(subscription_id, resource_group_name, api_version, storage_sync_service_name, workflow_id)



Abort the given workflow.

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
    api_instance = openapi_client.ActionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    storage_sync_service_name = 'storage_sync_service_name_example' # str | Name of Storage Sync Service resource.
    workflow_id = 'workflow_id_example' # str | workflow Id

    try:
        api_instance.workflows_abort_0(subscription_id, resource_group_name, api_version, storage_sync_service_name, workflow_id)
    except Exception as e:
        print("Exception when calling ActionsApi->workflows_abort_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **storage_sync_service_name** | **str**| Name of Storage Sync Service resource. | 
 **workflow_id** | **str**| workflow Id | 

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
**200** | success |  * x-ms-request-id - request id. <br>  * x-ms-correlation-request-id - correlation request id. <br>  |
**0** | Error message indicating why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

