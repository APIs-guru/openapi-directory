# openapi_client.PipelinerunsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**factories_cancel_pipeline_run**](PipelinerunsApi.md#factories_cancel_pipeline_run) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/cancelpipelinerun/{runId} | 
[**pipeline_runs_get**](PipelinerunsApi.md#pipeline_runs_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/pipelineruns/{runId} | 
[**pipeline_runs_query_by_factory**](PipelinerunsApi.md#pipeline_runs_query_by_factory) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/pipelineruns | 


# **factories_cancel_pipeline_run**
> factories_cancel_pipeline_run(subscription_id, resource_group_name, factory_name, run_id, api_version)



Cancel a pipeline run by its run ID.

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
    api_instance = openapi_client.PipelinerunsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    factory_name = 'factory_name_example' # str | The factory name.
    run_id = 'run_id_example' # str | The pipeline run identifier.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_instance.factories_cancel_pipeline_run(subscription_id, resource_group_name, factory_name, run_id, api_version)
    except Exception as e:
        print("Exception when calling PipelinerunsApi->factories_cancel_pipeline_run: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The resource group name. | 
 **factory_name** | **str**| The factory name. | 
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
**200** | Pipeline run has been canceled successfully.  |  -  |
**0** | An error response received from the Azure Data Factory service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pipeline_runs_get**
> PipelineRun pipeline_runs_get(subscription_id, resource_group_name, factory_name, run_id, api_version)



Get a pipeline run by its run ID.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.pipeline_run import PipelineRun
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
    api_instance = openapi_client.PipelinerunsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    factory_name = 'factory_name_example' # str | The factory name.
    run_id = 'run_id_example' # str | The pipeline run identifier.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_response = api_instance.pipeline_runs_get(subscription_id, resource_group_name, factory_name, run_id, api_version)
        print("The response of PipelinerunsApi->pipeline_runs_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinerunsApi->pipeline_runs_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The resource group name. | 
 **factory_name** | **str**| The factory name. | 
 **run_id** | **str**| The pipeline run identifier. | 
 **api_version** | **str**| The API version. | 

### Return type

[**PipelineRun**](PipelineRun.md)

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

# **pipeline_runs_query_by_factory**
> PipelineRunQueryResponse pipeline_runs_query_by_factory(subscription_id, resource_group_name, factory_name, api_version, filter_parameters)



Query pipeline runs in the factory based on input filter conditions.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.pipeline_run_filter_parameters import PipelineRunFilterParameters
from openapi_client.models.pipeline_run_query_response import PipelineRunQueryResponse
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
    api_instance = openapi_client.PipelinerunsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    factory_name = 'factory_name_example' # str | The factory name.
    api_version = 'api_version_example' # str | The API version.
    filter_parameters = openapi_client.PipelineRunFilterParameters() # PipelineRunFilterParameters | Parameters to filter the pipeline run.

    try:
        api_response = api_instance.pipeline_runs_query_by_factory(subscription_id, resource_group_name, factory_name, api_version, filter_parameters)
        print("The response of PipelinerunsApi->pipeline_runs_query_by_factory:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinerunsApi->pipeline_runs_query_by_factory: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The resource group name. | 
 **factory_name** | **str**| The factory name. | 
 **api_version** | **str**| The API version. | 
 **filter_parameters** | [**PipelineRunFilterParameters**](PipelineRunFilterParameters.md)| Parameters to filter the pipeline run. | 

### Return type

[**PipelineRunQueryResponse**](PipelineRunQueryResponse.md)

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

