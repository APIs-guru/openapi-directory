# openapi_client.TriggerrunsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**trigger_runs_query_by_factory**](TriggerrunsApi.md#trigger_runs_query_by_factory) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/queryTriggerRuns | 
[**trigger_runs_rerun**](TriggerrunsApi.md#trigger_runs_rerun) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/triggers/{triggerName}/triggerRuns/{runId}/rerun | 


# **trigger_runs_query_by_factory**
> TriggerRunsQueryResponse trigger_runs_query_by_factory(subscription_id, resource_group_name, factory_name, api_version, filter_parameters)



Query trigger runs.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.run_filter_parameters import RunFilterParameters
from openapi_client.models.trigger_runs_query_response import TriggerRunsQueryResponse
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
    api_instance = openapi_client.TriggerrunsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    factory_name = 'factory_name_example' # str | The factory name.
    api_version = 'api_version_example' # str | The API version.
    filter_parameters = openapi_client.RunFilterParameters() # RunFilterParameters | Parameters to filter the pipeline run.

    try:
        api_response = api_instance.trigger_runs_query_by_factory(subscription_id, resource_group_name, factory_name, api_version, filter_parameters)
        print("The response of TriggerrunsApi->trigger_runs_query_by_factory:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TriggerrunsApi->trigger_runs_query_by_factory: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The resource group name. | 
 **factory_name** | **str**| The factory name. | 
 **api_version** | **str**| The API version. | 
 **filter_parameters** | [**RunFilterParameters**](RunFilterParameters.md)| Parameters to filter the pipeline run. | 

### Return type

[**TriggerRunsQueryResponse**](TriggerRunsQueryResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**0** | An error response received from the Azure Data Factory service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **trigger_runs_rerun**
> trigger_runs_rerun(subscription_id, resource_group_name, factory_name, trigger_name, run_id, api_version)



Rerun single trigger instance by runId.

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
    api_instance = openapi_client.TriggerrunsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    factory_name = 'factory_name_example' # str | The factory name.
    trigger_name = 'trigger_name_example' # str | The trigger name.
    run_id = 'run_id_example' # str | The pipeline run identifier.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_instance.trigger_runs_rerun(subscription_id, resource_group_name, factory_name, trigger_name, run_id, api_version)
    except Exception as e:
        print("Exception when calling TriggerrunsApi->trigger_runs_rerun: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The resource group name. | 
 **factory_name** | **str**| The factory name. | 
 **trigger_name** | **str**| The trigger name. | 
 **run_id** | **str**| The pipeline run identifier. | 
 **api_version** | **str**| The API version. | 

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
**200** | TriggerRun has been restarted. |  -  |
**0** | An error response received from the Azure Data Factory service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

