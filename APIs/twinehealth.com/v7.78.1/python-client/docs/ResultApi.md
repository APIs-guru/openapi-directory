# openapi_client.ResultApi

All URIs are relative to *https://api.twinehealth.com/pub*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fetch_patient_health_result**](ResultApi.md#fetch_patient_health_result) | **GET** /result/{id} | Get a patient health result
[**fetch_patient_health_results**](ResultApi.md#fetch_patient_health_results) | **GET** /result | List patient health results


# **fetch_patient_health_result**
> FetchPatientHealthResultResponse fetch_patient_health_result(id)

Get a patient health result

Get patient health result by id.

### Example


```python
import openapi_client
from openapi_client.models.fetch_patient_health_result_response import FetchPatientHealthResultResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twinehealth.com/pub
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twinehealth.com/pub"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ResultApi(api_client)
    id = 'id_example' # str | Patient health result identifier

    try:
        # Get a patient health result
        api_response = api_instance.fetch_patient_health_result(id)
        print("The response of ResultApi->fetch_patient_health_result:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResultApi->fetch_patient_health_result: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Patient health result identifier | 

### Return type

[**FetchPatientHealthResultResponse**](FetchPatientHealthResultResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetch_patient_health_results**
> FetchPatientHealthResultResponse fetch_patient_health_results(filter_patient, filter_actions=filter_actions, filter_start_at=filter_start_at, filter_end_at=filter_end_at, filter_threads=filter_threads, filter_created_at=filter_created_at, filter_updated_at=filter_updated_at, page_number=page_number, page_size=page_size, page_limit=page_limit, page_after=page_after)

List patient health results

Get a list of patient health results.

### Example


```python
import openapi_client
from openapi_client.models.fetch_patient_health_result_response import FetchPatientHealthResultResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twinehealth.com/pub
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twinehealth.com/pub"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ResultApi(api_client)
    filter_patient = 'filter_patient_example' # str | Filter the patient health results for a specified patient
    filter_actions = 'filter_actions_example' # str | A comma-separated list of action identifiers (optional)
    filter_start_at = 'filter_start_at_example' # str | Filter results that occurred after the passed ISO date and time string (optional)
    filter_end_at = 'filter_end_at_example' # str | Filter results that occurred before the passed ISO date and time string (optional)
    filter_threads = 'filter_threads_example' # str | A comma-separated list of thread identifiers (optional)
    filter_created_at = 'filter_created_at_example' # str | The start (inclusive) and end (exclusive) dates are ISO date and time strings separated by `..`. Example for results created in November 2017 (America/New_York): `filter[created_at]=2017-11-01T00:00:00-04:00..2017-12-01T00:00:00-05:00`  (optional)
    filter_updated_at = 'filter_updated_at_example' # str | The start (inclusive) and end (exclusive) dates are ISO date and time strings separated by `..`. Example for results updated in November 2017 (America/New_York): `filter[updated_at]=2017-11-01T00:00:00-04:00..2017-12-01T00:00:00-05:00`  (optional)
    page_number = 1 # int | Page number (optional) (default to 1)
    page_size = 10 # int | Page size (optional) (default to 10)
    page_limit = 50 # int | Page limit (optional) (default to 50)
    page_after = 'page_after_example' # str | Page cursor (optional)

    try:
        # List patient health results
        api_response = api_instance.fetch_patient_health_results(filter_patient, filter_actions=filter_actions, filter_start_at=filter_start_at, filter_end_at=filter_end_at, filter_threads=filter_threads, filter_created_at=filter_created_at, filter_updated_at=filter_updated_at, page_number=page_number, page_size=page_size, page_limit=page_limit, page_after=page_after)
        print("The response of ResultApi->fetch_patient_health_results:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResultApi->fetch_patient_health_results: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter_patient** | **str**| Filter the patient health results for a specified patient | 
 **filter_actions** | **str**| A comma-separated list of action identifiers | [optional] 
 **filter_start_at** | **str**| Filter results that occurred after the passed ISO date and time string | [optional] 
 **filter_end_at** | **str**| Filter results that occurred before the passed ISO date and time string | [optional] 
 **filter_threads** | **str**| A comma-separated list of thread identifiers | [optional] 
 **filter_created_at** | **str**| The start (inclusive) and end (exclusive) dates are ISO date and time strings separated by &#x60;..&#x60;. Example for results created in November 2017 (America/New_York): &#x60;filter[created_at]&#x3D;2017-11-01T00:00:00-04:00..2017-12-01T00:00:00-05:00&#x60;  | [optional] 
 **filter_updated_at** | **str**| The start (inclusive) and end (exclusive) dates are ISO date and time strings separated by &#x60;..&#x60;. Example for results updated in November 2017 (America/New_York): &#x60;filter[updated_at]&#x3D;2017-11-01T00:00:00-04:00..2017-12-01T00:00:00-05:00&#x60;  | [optional] 
 **page_number** | **int**| Page number | [optional] [default to 1]
 **page_size** | **int**| Page size | [optional] [default to 10]
 **page_limit** | **int**| Page limit | [optional] [default to 50]
 **page_after** | **str**| Page cursor | [optional] 

### Return type

[**FetchPatientHealthResultResponse**](FetchPatientHealthResultResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**409** | Invalid Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

