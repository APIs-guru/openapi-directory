# openapi_client.ActivityrunsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activity_runs_list_by_pipeline_run**](ActivityrunsApi.md#activity_runs_list_by_pipeline_run) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/pipelineruns/{runId}/activityruns | 


# **activity_runs_list_by_pipeline_run**
> ActivityRunsListResponse activity_runs_list_by_pipeline_run(subscription_id, resource_group_name, factory_name, run_id, api_version, start_time, end_time, status=status, activity_name=activity_name, linked_service_name=linked_service_name)



List activity runs based on input filter conditions.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.activity_runs_list_response import ActivityRunsListResponse
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
    api_instance = openapi_client.ActivityrunsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    factory_name = 'factory_name_example' # str | The factory name.
    run_id = 'run_id_example' # str | The pipeline run identifier.
    api_version = 'api_version_example' # str | The API version.
    start_time = '2013-10-20T19:20:30+01:00' # datetime | The start time of activity runs in ISO8601 format.
    end_time = '2013-10-20T19:20:30+01:00' # datetime | The end time of activity runs in ISO8601 format.
    status = 'status_example' # str | The status of the pipeline run. (optional)
    activity_name = 'activity_name_example' # str | The name of the activity. (optional)
    linked_service_name = 'linked_service_name_example' # str | The linked service name. (optional)

    try:
        api_response = api_instance.activity_runs_list_by_pipeline_run(subscription_id, resource_group_name, factory_name, run_id, api_version, start_time, end_time, status=status, activity_name=activity_name, linked_service_name=linked_service_name)
        print("The response of ActivityrunsApi->activity_runs_list_by_pipeline_run:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ActivityrunsApi->activity_runs_list_by_pipeline_run: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The resource group name. | 
 **factory_name** | **str**| The factory name. | 
 **run_id** | **str**| The pipeline run identifier. | 
 **api_version** | **str**| The API version. | 
 **start_time** | **datetime**| The start time of activity runs in ISO8601 format. | 
 **end_time** | **datetime**| The end time of activity runs in ISO8601 format. | 
 **status** | **str**| The status of the pipeline run. | [optional] 
 **activity_name** | **str**| The name of the activity. | [optional] 
 **linked_service_name** | **str**| The linked service name. | [optional] 

### Return type

[**ActivityRunsListResponse**](ActivityRunsListResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**0** | An error response received from the Azure Data Factory service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

