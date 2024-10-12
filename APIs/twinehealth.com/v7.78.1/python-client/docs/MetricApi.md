# openapi_client.MetricApi

All URIs are relative to *https://api.twinehealth.com/pub*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_patient_health_metric**](MetricApi.md#create_patient_health_metric) | **POST** /patient_health_metric | Create patient health metrics
[**fetch_patient_health_metric**](MetricApi.md#fetch_patient_health_metric) | **GET** /patient_health_metric/{id} | Get a patient health metric
[**fetch_patient_health_metrics**](MetricApi.md#fetch_patient_health_metrics) | **GET** /patient_health_metric | List patient health metrics


# **create_patient_health_metric**
> CreatePatientHealthMetricResponse create_patient_health_metric(create_patient_health_metric_request)

Create patient health metrics

Create one or more patient health metrics.  Example for creating a patient health result with a patient specified using `meta.query` instead of `id`:  ```JSON   {     \"data\": {       \"type\": \"patient_health_metric\",        \"attributes\": {          \"code\": {            \"system\": \"LOINC\",            \"value\": \"13457-7\"          },          \"type\": \"ldl_cholesterol\",          \"occurred_at\": \"2017-03-14T11:00:57.000Z\",          \"value\": 121,          \"unit\": \"mg/dl\"       },       \"relationships\": {         \"patient\": {           \"data\": {             \"type\": \"patient\",             \"meta\": {               \"query\": {                 \"identifier\": {                   \"system\": \"medical-record-number\",                   \"value\": \"121212\"                 },                 \"organization\": \"58c4554710123c5c40dbab81\"               }             }           }         }       }     }   } ``` 

### Example


```python
import openapi_client
from openapi_client.models.create_patient_health_metric_request import CreatePatientHealthMetricRequest
from openapi_client.models.create_patient_health_metric_response import CreatePatientHealthMetricResponse
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
    api_instance = openapi_client.MetricApi(api_client)
    create_patient_health_metric_request = openapi_client.CreatePatientHealthMetricRequest() # CreatePatientHealthMetricRequest | 

    try:
        # Create patient health metrics
        api_response = api_instance.create_patient_health_metric(create_patient_health_metric_request)
        print("The response of MetricApi->create_patient_health_metric:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MetricApi->create_patient_health_metric: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_patient_health_metric_request** | [**CreatePatientHealthMetricRequest**](CreatePatientHealthMetricRequest.md)|  | 

### Return type

[**CreatePatientHealthMetricResponse**](CreatePatientHealthMetricResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**409** | Invalid Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetch_patient_health_metric**
> FetchPatientHealthMetricResponse fetch_patient_health_metric(id)

Get a patient health metric

Get the plan summary for a patient.

### Example


```python
import openapi_client
from openapi_client.models.fetch_patient_health_metric_response import FetchPatientHealthMetricResponse
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
    api_instance = openapi_client.MetricApi(api_client)
    id = 'id_example' # str | Patient health metric identifier

    try:
        # Get a patient health metric
        api_response = api_instance.fetch_patient_health_metric(id)
        print("The response of MetricApi->fetch_patient_health_metric:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MetricApi->fetch_patient_health_metric: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Patient health metric identifier | 

### Return type

[**FetchPatientHealthMetricResponse**](FetchPatientHealthMetricResponse.md)

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

# **fetch_patient_health_metrics**
> FetchPatientHealthMetricResponse fetch_patient_health_metrics(filter_patient=filter_patient, filter_groups=filter_groups, filter_organization=filter_organization, page_number=page_number, page_size=page_size, page_limit=page_limit, page_cursor=page_cursor)

List patient health metrics

Get a list of patient health metrics.

### Example


```python
import openapi_client
from openapi_client.models.fetch_patient_health_metric_response import FetchPatientHealthMetricResponse
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
    api_instance = openapi_client.MetricApi(api_client)
    filter_patient = 'filter_patient_example' # str | Filter the patient health metrics for a specified patient. Note that one of the following filters must be specified: `filter[patient]`, `filter[groups]`, `filter[organization]`.  (optional)
    filter_groups = 'filter_groups_example' # str | Comma-separated list of group ids. Note that one of the following filters must be specified: `filter[patient]`, `filter[groups]`, `filter[organization]`.  (optional)
    filter_organization = 'filter_organization_example' # str | Fitbit Plus organization id. Note that one of the following filters must be specified: `filter[patient]`, `filter[groups]`, `filter[organization]`.  (optional)
    page_number = 1 # int | Page number (optional) (default to 1)
    page_size = 10 # int | Page size (optional) (default to 10)
    page_limit = 50 # int | Page limit (optional) (default to 50)
    page_cursor = 'page_cursor_example' # str | Page cursor (optional)

    try:
        # List patient health metrics
        api_response = api_instance.fetch_patient_health_metrics(filter_patient=filter_patient, filter_groups=filter_groups, filter_organization=filter_organization, page_number=page_number, page_size=page_size, page_limit=page_limit, page_cursor=page_cursor)
        print("The response of MetricApi->fetch_patient_health_metrics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MetricApi->fetch_patient_health_metrics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter_patient** | **str**| Filter the patient health metrics for a specified patient. Note that one of the following filters must be specified: &#x60;filter[patient]&#x60;, &#x60;filter[groups]&#x60;, &#x60;filter[organization]&#x60;.  | [optional] 
 **filter_groups** | **str**| Comma-separated list of group ids. Note that one of the following filters must be specified: &#x60;filter[patient]&#x60;, &#x60;filter[groups]&#x60;, &#x60;filter[organization]&#x60;.  | [optional] 
 **filter_organization** | **str**| Fitbit Plus organization id. Note that one of the following filters must be specified: &#x60;filter[patient]&#x60;, &#x60;filter[groups]&#x60;, &#x60;filter[organization]&#x60;.  | [optional] 
 **page_number** | **int**| Page number | [optional] [default to 1]
 **page_size** | **int**| Page size | [optional] [default to 10]
 **page_limit** | **int**| Page limit | [optional] [default to 50]
 **page_cursor** | **str**| Page cursor | [optional] 

### Return type

[**FetchPatientHealthMetricResponse**](FetchPatientHealthMetricResponse.md)

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

