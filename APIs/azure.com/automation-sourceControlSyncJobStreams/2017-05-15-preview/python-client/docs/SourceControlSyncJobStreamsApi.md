# openapi_client.SourceControlSyncJobStreamsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**source_control_sync_job_streams_get**](SourceControlSyncJobStreamsApi.md#source_control_sync_job_streams_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/sourceControls/{sourceControlName}/sourceControlSyncJobs/{sourceControlSyncJobId}/streams/{streamId} | 
[**source_control_sync_job_streams_list_by_sync_job**](SourceControlSyncJobStreamsApi.md#source_control_sync_job_streams_list_by_sync_job) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/sourceControls/{sourceControlName}/sourceControlSyncJobs/{sourceControlSyncJobId}/streams | 


# **source_control_sync_job_streams_get**
> SourceControlSyncJobStreamById source_control_sync_job_streams_get(resource_group_name, automation_account_name, source_control_name, source_control_sync_job_id, stream_id, subscription_id, api_version)



Retrieve a sync job stream identified by stream id.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.source_control_sync_job_stream_by_id import SourceControlSyncJobStreamById
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
    api_instance = openapi_client.SourceControlSyncJobStreamsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    automation_account_name = 'automation_account_name_example' # str | The name of the automation account.
    source_control_name = 'source_control_name_example' # str | The source control name.
    source_control_sync_job_id = 'source_control_sync_job_id_example' # str | The source control sync job id.
    stream_id = 'stream_id_example' # str | The id of the sync job stream.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.source_control_sync_job_streams_get(resource_group_name, automation_account_name, source_control_name, source_control_sync_job_id, stream_id, subscription_id, api_version)
        print("The response of SourceControlSyncJobStreamsApi->source_control_sync_job_streams_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SourceControlSyncJobStreamsApi->source_control_sync_job_streams_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **automation_account_name** | **str**| The name of the automation account. | 
 **source_control_name** | **str**| The source control name. | 
 **source_control_sync_job_id** | **str**| The source control sync job id. | 
 **stream_id** | **str**| The id of the sync job stream. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**SourceControlSyncJobStreamById**](SourceControlSyncJobStreamById.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Automation error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **source_control_sync_job_streams_list_by_sync_job**
> SourceControlSyncJobStreamsListBySyncJob source_control_sync_job_streams_list_by_sync_job(resource_group_name, automation_account_name, source_control_name, source_control_sync_job_id, subscription_id, api_version, filter=filter)



Retrieve a list of sync job streams identified by sync job id.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.source_control_sync_job_streams_list_by_sync_job import SourceControlSyncJobStreamsListBySyncJob
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
    api_instance = openapi_client.SourceControlSyncJobStreamsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    automation_account_name = 'automation_account_name_example' # str | The name of the automation account.
    source_control_name = 'source_control_name_example' # str | The source control name.
    source_control_sync_job_id = 'source_control_sync_job_id_example' # str | The source control sync job id.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client Api Version.
    filter = 'filter_example' # str | The filter to apply on the operation. (optional)

    try:
        api_response = api_instance.source_control_sync_job_streams_list_by_sync_job(resource_group_name, automation_account_name, source_control_name, source_control_sync_job_id, subscription_id, api_version, filter=filter)
        print("The response of SourceControlSyncJobStreamsApi->source_control_sync_job_streams_list_by_sync_job:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SourceControlSyncJobStreamsApi->source_control_sync_job_streams_list_by_sync_job: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **automation_account_name** | **str**| The name of the automation account. | 
 **source_control_name** | **str**| The source control name. | 
 **source_control_sync_job_id** | **str**| The source control sync job id. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client Api Version. | 
 **filter** | **str**| The filter to apply on the operation. | [optional] 

### Return type

[**SourceControlSyncJobStreamsListBySyncJob**](SourceControlSyncJobStreamsListBySyncJob.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Automation error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

