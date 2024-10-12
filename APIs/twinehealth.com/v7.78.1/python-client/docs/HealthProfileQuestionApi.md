# openapi_client.HealthProfileQuestionApi

All URIs are relative to *https://api.twinehealth.com/pub*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fetch_health_profile_question**](HealthProfileQuestionApi.md#fetch_health_profile_question) | **GET** /health_profile_question/{id} | Get a health profile question
[**fetch_health_profile_questions**](HealthProfileQuestionApi.md#fetch_health_profile_questions) | **GET** /health_profile_question | List health profile questions


# **fetch_health_profile_question**
> FetchHealthProfileQuestionResponse fetch_health_profile_question(id, include=include)

Get a health profile question

Get a health profile by id

### Example


```python
import openapi_client
from openapi_client.models.fetch_health_profile_question_response import FetchHealthProfileQuestionResponse
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
    api_instance = openapi_client.HealthProfileQuestionApi(api_client)
    id = 'id_example' # str | Health profile question identifier
    include = 'include_example' # str | List of related resources to include in the response (optional)

    try:
        # Get a health profile question
        api_response = api_instance.fetch_health_profile_question(id, include=include)
        print("The response of HealthProfileQuestionApi->fetch_health_profile_question:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HealthProfileQuestionApi->fetch_health_profile_question: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Health profile question identifier | 
 **include** | **str**| List of related resources to include in the response | [optional] 

### Return type

[**FetchHealthProfileQuestionResponse**](FetchHealthProfileQuestionResponse.md)

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

# **fetch_health_profile_questions**
> FetchHealthProfileQuestionsResponse fetch_health_profile_questions(filter_patient=filter_patient, filter_groups=filter_groups, filter_organization=filter_organization, include=include)

List health profile questions

Get a list of health profile questions

### Example


```python
import openapi_client
from openapi_client.models.fetch_health_profile_questions_response import FetchHealthProfileQuestionsResponse
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
    api_instance = openapi_client.HealthProfileQuestionApi(api_client)
    filter_patient = 'filter_patient_example' # str | Patient id to fetch healt profile questions. Note that one of the following filters must be specified: `filter[patient]`, `filter[group]`, or `filter[organization]`.  (optional)
    filter_groups = 'filter_groups_example' # str | Comma-separated list of group ids. Note that one of the following filters must be specified: `filter[patient]`, `filter[group]`, or `filter[organization]`.  (optional)
    filter_organization = 'filter_organization_example' # str | Fitbit Plus organization id. Note that one of the following filters must be specified: `filter[patient]`, `filter[group]`, or `filter[organization]`.  (optional)
    include = 'include_example' # str | List of related resources to include in the response (optional)

    try:
        # List health profile questions
        api_response = api_instance.fetch_health_profile_questions(filter_patient=filter_patient, filter_groups=filter_groups, filter_organization=filter_organization, include=include)
        print("The response of HealthProfileQuestionApi->fetch_health_profile_questions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HealthProfileQuestionApi->fetch_health_profile_questions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter_patient** | **str**| Patient id to fetch healt profile questions. Note that one of the following filters must be specified: &#x60;filter[patient]&#x60;, &#x60;filter[group]&#x60;, or &#x60;filter[organization]&#x60;.  | [optional] 
 **filter_groups** | **str**| Comma-separated list of group ids. Note that one of the following filters must be specified: &#x60;filter[patient]&#x60;, &#x60;filter[group]&#x60;, or &#x60;filter[organization]&#x60;.  | [optional] 
 **filter_organization** | **str**| Fitbit Plus organization id. Note that one of the following filters must be specified: &#x60;filter[patient]&#x60;, &#x60;filter[group]&#x60;, or &#x60;filter[organization]&#x60;.  | [optional] 
 **include** | **str**| List of related resources to include in the response | [optional] 

### Return type

[**FetchHealthProfileQuestionsResponse**](FetchHealthProfileQuestionsResponse.md)

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

