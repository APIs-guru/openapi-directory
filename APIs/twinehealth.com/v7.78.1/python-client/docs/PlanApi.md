# openapi_client.PlanApi

All URIs are relative to *https://api.twinehealth.com/pub*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fetch_patient_plan_summaries**](PlanApi.md#fetch_patient_plan_summaries) | **GET** /patient_plan_summary | List patient plan summaries
[**fetch_patient_plan_summary**](PlanApi.md#fetch_patient_plan_summary) | **GET** /patient_plan_summary/{id} | Get the plan summary for a patient
[**update_patient_plan_summary**](PlanApi.md#update_patient_plan_summary) | **PATCH** /patient_plan_summary/{id} | Update a plan summary


# **fetch_patient_plan_summaries**
> FetchPatientPlanSummariesResponse fetch_patient_plan_summaries(filter_patient=filter_patient, filter_groups=filter_groups, filter_organization=filter_organization, include=include)

List patient plan summaries

Get a list of patient plan summaries

### Example


```python
import openapi_client
from openapi_client.models.fetch_patient_plan_summaries_response import FetchPatientPlanSummariesResponse
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
    api_instance = openapi_client.PlanApi(api_client)
    filter_patient = 'filter_patient_example' # str | Patient id to fetch plan summary for. Note that one of the following filters must be specified: `filter[patient]`, `filter[groups]`, `filter[organization]`.  (optional)
    filter_groups = 'filter_groups_example' # str | Comma-separated list of group ids. Note that one of the following filters must be specified: `filter[patient]`, `filter[groups]`, `filter[organization]`.  (optional)
    filter_organization = 'filter_organization_example' # str | Fitbit Plus organization id. Note that one of the following filters must be specified: `filter[patient]`, `filter[groups]`, `filter[organization]`.  (optional)
    include = 'include_example' # str | List of related resources to include in the response (optional)

    try:
        # List patient plan summaries
        api_response = api_instance.fetch_patient_plan_summaries(filter_patient=filter_patient, filter_groups=filter_groups, filter_organization=filter_organization, include=include)
        print("The response of PlanApi->fetch_patient_plan_summaries:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlanApi->fetch_patient_plan_summaries: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter_patient** | **str**| Patient id to fetch plan summary for. Note that one of the following filters must be specified: &#x60;filter[patient]&#x60;, &#x60;filter[groups]&#x60;, &#x60;filter[organization]&#x60;.  | [optional] 
 **filter_groups** | **str**| Comma-separated list of group ids. Note that one of the following filters must be specified: &#x60;filter[patient]&#x60;, &#x60;filter[groups]&#x60;, &#x60;filter[organization]&#x60;.  | [optional] 
 **filter_organization** | **str**| Fitbit Plus organization id. Note that one of the following filters must be specified: &#x60;filter[patient]&#x60;, &#x60;filter[groups]&#x60;, &#x60;filter[organization]&#x60;.  | [optional] 
 **include** | **str**| List of related resources to include in the response | [optional] 

### Return type

[**FetchPatientPlanSummariesResponse**](FetchPatientPlanSummariesResponse.md)

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

# **fetch_patient_plan_summary**
> FetchPatientPlanSummaryResponse fetch_patient_plan_summary(id, include=include)

Get the plan summary for a patient

Get the plan summary for a patient.

### Example


```python
import openapi_client
from openapi_client.models.fetch_patient_plan_summary_response import FetchPatientPlanSummaryResponse
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
    api_instance = openapi_client.PlanApi(api_client)
    id = 'id_example' # str | Plan summary identifier
    include = 'include_example' # str | List of related resources to include in the response (optional)

    try:
        # Get the plan summary for a patient
        api_response = api_instance.fetch_patient_plan_summary(id, include=include)
        print("The response of PlanApi->fetch_patient_plan_summary:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlanApi->fetch_patient_plan_summary: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Plan summary identifier | 
 **include** | **str**| List of related resources to include in the response | [optional] 

### Return type

[**FetchPatientPlanSummaryResponse**](FetchPatientPlanSummaryResponse.md)

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

# **update_patient_plan_summary**
> UpdatePatientPlanSummaryResponse update_patient_plan_summary(id, update_patient_plan_summary_request)

Update a plan summary

Update a plan summary record for a patient.

### Example


```python
import openapi_client
from openapi_client.models.update_patient_plan_summary_request import UpdatePatientPlanSummaryRequest
from openapi_client.models.update_patient_plan_summary_response import UpdatePatientPlanSummaryResponse
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
    api_instance = openapi_client.PlanApi(api_client)
    id = 'id_example' # str | Plan summary identifier
    update_patient_plan_summary_request = openapi_client.UpdatePatientPlanSummaryRequest() # UpdatePatientPlanSummaryRequest | 

    try:
        # Update a plan summary
        api_response = api_instance.update_patient_plan_summary(id, update_patient_plan_summary_request)
        print("The response of PlanApi->update_patient_plan_summary:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlanApi->update_patient_plan_summary: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Plan summary identifier | 
 **update_patient_plan_summary_request** | [**UpdatePatientPlanSummaryRequest**](UpdatePatientPlanSummaryRequest.md)|  | 

### Return type

[**UpdatePatientPlanSummaryResponse**](UpdatePatientPlanSummaryResponse.md)

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

