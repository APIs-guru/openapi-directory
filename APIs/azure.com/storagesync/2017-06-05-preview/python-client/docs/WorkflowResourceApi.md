# openapi_client.WorkflowResourceApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**workflows_abort**](WorkflowResourceApi.md#workflows_abort) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/workflows/{workflowId}/abort | 
[**workflows_get**](WorkflowResourceApi.md#workflows_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/workflows/{workflowId} | 


# **workflows_abort**
> workflows_abort(subscription_id, resource_group_name, api_version, storage_sync_service_name, workflow_id)



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
    api_instance = openapi_client.WorkflowResourceApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    api_version = 'api_version_example' # str | Client Api Version.
    storage_sync_service_name = 'storage_sync_service_name_example' # str | Name of Storage Sync Service resource.
    workflow_id = 'workflow_id_example' # str | workflow Id

    try:
        api_instance.workflows_abort(subscription_id, resource_group_name, api_version, storage_sync_service_name, workflow_id)
    except Exception as e:
        print("Exception when calling WorkflowResourceApi->workflows_abort: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **api_version** | **str**| Client Api Version. | 
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

# **workflows_get**
> Workflow workflows_get(subscription_id, resource_group_name, api_version, storage_sync_service_name, workflow_id)



Get Workflows resource

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.workflow import Workflow
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
    api_instance = openapi_client.WorkflowResourceApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    api_version = 'api_version_example' # str | Client Api Version.
    storage_sync_service_name = 'storage_sync_service_name_example' # str | Name of Storage Sync Service resource.
    workflow_id = 'workflow_id_example' # str | workflow Id

    try:
        api_response = api_instance.workflows_get(subscription_id, resource_group_name, api_version, storage_sync_service_name, workflow_id)
        print("The response of WorkflowResourceApi->workflows_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowResourceApi->workflows_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **api_version** | **str**| Client Api Version. | 
 **storage_sync_service_name** | **str**| Name of Storage Sync Service resource. | 
 **workflow_id** | **str**| workflow Id | 

### Return type

[**Workflow**](Workflow.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Workflow object |  * x-ms-request-id - request id. <br>  * x-ms-correlation-request-id - correlation request id. <br>  |
**0** | Error message indicating why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

