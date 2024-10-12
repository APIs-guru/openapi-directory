# openapi_client.HealthProfileAnswerApi

All URIs are relative to *https://api.twinehealth.com/pub*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fetch_health_profile_answer**](HealthProfileAnswerApi.md#fetch_health_profile_answer) | **GET** /health_profile_answer/{id} | Get a health profile answer
[**fetch_health_profile_answers**](HealthProfileAnswerApi.md#fetch_health_profile_answers) | **GET** /health_profile_answer | List health profile answers


# **fetch_health_profile_answer**
> FetchHealthProfileAnswerResponse fetch_health_profile_answer(id, include=include)

Get a health profile answer

Get a health profile answer by id

### Example


```python
import openapi_client
from openapi_client.models.fetch_health_profile_answer_response import FetchHealthProfileAnswerResponse
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
    api_instance = openapi_client.HealthProfileAnswerApi(api_client)
    id = 'id_example' # str | Health profile answer identifier
    include = 'include_example' # str | List of related resources to include in the response (optional)

    try:
        # Get a health profile answer
        api_response = api_instance.fetch_health_profile_answer(id, include=include)
        print("The response of HealthProfileAnswerApi->fetch_health_profile_answer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HealthProfileAnswerApi->fetch_health_profile_answer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Health profile answer identifier | 
 **include** | **str**| List of related resources to include in the response | [optional] 

### Return type

[**FetchHealthProfileAnswerResponse**](FetchHealthProfileAnswerResponse.md)

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

# **fetch_health_profile_answers**
> FetchHealthProfileAnswersResponse fetch_health_profile_answers(filter_patient=filter_patient, filter_groups=filter_groups, filter_organization=filter_organization, page_number=page_number, page_size=page_size, page_limit=page_limit, page_cursor=page_cursor, include=include)

List health profile answers

Get a list of health profile answers

### Example


```python
import openapi_client
from openapi_client.models.fetch_health_profile_answers_response import FetchHealthProfileAnswersResponse
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
    api_instance = openapi_client.HealthProfileAnswerApi(api_client)
    filter_patient = 'filter_patient_example' # str | Patient id to fetch healt profile answers. Note that one of the following filters must be specified: `filter[patient]`, `filter[group]`, or `filter[organization]`.  (optional)
    filter_groups = 'filter_groups_example' # str | Comma-separated list of group ids. Note that one of the following filters must be specified: `filter[patient]`, `filter[group]`, or `filter[organization]`.  (optional)
    filter_organization = 'filter_organization_example' # str | Fitbit Plus organization id. Note that one of the following filters must be specified: `filter[patient]`, `filter[group]`, or `filter[organization]`.  (optional)
    page_number = 1 # int | Page number (optional) (default to 1)
    page_size = 50 # int | Page size (optional) (default to 50)
    page_limit = 50 # int | Page limit (optional) (default to 50)
    page_cursor = 'page_cursor_example' # str | Page cursor (optional)
    include = 'include_example' # str | List of related resources to include in the response (optional)

    try:
        # List health profile answers
        api_response = api_instance.fetch_health_profile_answers(filter_patient=filter_patient, filter_groups=filter_groups, filter_organization=filter_organization, page_number=page_number, page_size=page_size, page_limit=page_limit, page_cursor=page_cursor, include=include)
        print("The response of HealthProfileAnswerApi->fetch_health_profile_answers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HealthProfileAnswerApi->fetch_health_profile_answers: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter_patient** | **str**| Patient id to fetch healt profile answers. Note that one of the following filters must be specified: &#x60;filter[patient]&#x60;, &#x60;filter[group]&#x60;, or &#x60;filter[organization]&#x60;.  | [optional] 
 **filter_groups** | **str**| Comma-separated list of group ids. Note that one of the following filters must be specified: &#x60;filter[patient]&#x60;, &#x60;filter[group]&#x60;, or &#x60;filter[organization]&#x60;.  | [optional] 
 **filter_organization** | **str**| Fitbit Plus organization id. Note that one of the following filters must be specified: &#x60;filter[patient]&#x60;, &#x60;filter[group]&#x60;, or &#x60;filter[organization]&#x60;.  | [optional] 
 **page_number** | **int**| Page number | [optional] [default to 1]
 **page_size** | **int**| Page size | [optional] [default to 50]
 **page_limit** | **int**| Page limit | [optional] [default to 50]
 **page_cursor** | **str**| Page cursor | [optional] 
 **include** | **str**| List of related resources to include in the response | [optional] 

### Return type

[**FetchHealthProfileAnswersResponse**](FetchHealthProfileAnswersResponse.md)

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

