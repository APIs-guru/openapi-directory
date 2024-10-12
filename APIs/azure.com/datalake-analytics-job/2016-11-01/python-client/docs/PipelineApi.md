# openapi_client.PipelineApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**pipeline_get**](PipelineApi.md#pipeline_get) | **GET** /pipelines/{pipelineIdentity} | 
[**pipeline_list**](PipelineApi.md#pipeline_list) | **GET** /pipelines | 


# **pipeline_get**
> JobPipelineInformation pipeline_get(pipeline_identity, api_version, start_date_time=start_date_time, end_date_time=end_date_time)



Gets the Pipeline information for the specified pipeline ID.

### Example


```python
import openapi_client
from openapi_client.models.job_pipeline_information import JobPipelineInformation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PipelineApi(api_client)
    pipeline_identity = 'pipeline_identity_example' # str | Pipeline ID.
    api_version = 'api_version_example' # str | Client Api Version.
    start_date_time = '2013-10-20T19:20:30+01:00' # datetime | The start date for when to get the pipeline and aggregate its data. The startDateTime and endDateTime can be no more than 30 days apart. (optional)
    end_date_time = '2013-10-20T19:20:30+01:00' # datetime | The end date for when to get the pipeline and aggregate its data. The startDateTime and endDateTime can be no more than 30 days apart. (optional)

    try:
        api_response = api_instance.pipeline_get(pipeline_identity, api_version, start_date_time=start_date_time, end_date_time=end_date_time)
        print("The response of PipelineApi->pipeline_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelineApi->pipeline_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pipeline_identity** | **str**| Pipeline ID. | 
 **api_version** | **str**| Client Api Version. | 
 **start_date_time** | **datetime**| The start date for when to get the pipeline and aggregate its data. The startDateTime and endDateTime can be no more than 30 days apart. | [optional] 
 **end_date_time** | **datetime**| The end date for when to get the pipeline and aggregate its data. The startDateTime and endDateTime can be no more than 30 days apart. | [optional] 

### Return type

[**JobPipelineInformation**](JobPipelineInformation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved details of the specified pipeline. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pipeline_list**
> JobPipelineInformationListResult pipeline_list(api_version, start_date_time=start_date_time, end_date_time=end_date_time)



Lists all pipelines.

### Example


```python
import openapi_client
from openapi_client.models.job_pipeline_information_list_result import JobPipelineInformationListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PipelineApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    start_date_time = '2013-10-20T19:20:30+01:00' # datetime | The start date for when to get the list of pipelines. The startDateTime and endDateTime can be no more than 30 days apart. (optional)
    end_date_time = '2013-10-20T19:20:30+01:00' # datetime | The end date for when to get the list of pipelines. The startDateTime and endDateTime can be no more than 30 days apart. (optional)

    try:
        api_response = api_instance.pipeline_list(api_version, start_date_time=start_date_time, end_date_time=end_date_time)
        print("The response of PipelineApi->pipeline_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelineApi->pipeline_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **start_date_time** | **datetime**| The start date for when to get the list of pipelines. The startDateTime and endDateTime can be no more than 30 days apart. | [optional] 
 **end_date_time** | **datetime**| The end date for when to get the list of pipelines. The startDateTime and endDateTime can be no more than 30 days apart. | [optional] 

### Return type

[**JobPipelineInformationListResult**](JobPipelineInformationListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of pipelines. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

