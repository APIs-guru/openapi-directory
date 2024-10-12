# openapi_client.AssessmentDataApi

All URIs are relative to *https://api.iqualify.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**offerings_offering_id_analytics_activities_responses_get**](AssessmentDataApi.md#offerings_offering_id_analytics_activities_responses_get) | **GET** /offerings/{offeringId}/analytics/activities/responses | Find open response activity attempts
[**offerings_offering_id_analytics_marks_assignments_get**](AssessmentDataApi.md#offerings_offering_id_analytics_marks_assignments_get) | **GET** /offerings/{offeringId}/analytics/marks/assignments | Find assessment marks
[**offerings_offering_id_analytics_marks_quizzes_get**](AssessmentDataApi.md#offerings_offering_id_analytics_marks_quizzes_get) | **GET** /offerings/{offeringId}/analytics/marks/quizzes | Find quiz marks
[**offerings_offering_id_analytics_submissions_assignments_get**](AssessmentDataApi.md#offerings_offering_id_analytics_submissions_assignments_get) | **GET** /offerings/{offeringId}/analytics/submissions/assignments | Find submissions to assessments, including marks if any
[**offerings_offering_id_analytics_submissions_open_response_assessment_id_get**](AssessmentDataApi.md#offerings_offering_id_analytics_submissions_open_response_assessment_id_get) | **GET** /offerings/{offeringId}/analytics/submissions/open-response/{assessmentId} | Find submissions to a specified open response assessment, including marks if any
[**offerings_offering_id_analytics_submissions_user_email_assignments_assessment_id_get**](AssessmentDataApi.md#offerings_offering_id_analytics_submissions_user_email_assignments_assessment_id_get) | **GET** /offerings/{offeringId}/analytics/submissions/{userEmail}/assignments/{assessmentId} | Find a learner&#39;s submission to a specified assessment, including marks if any


# **offerings_offering_id_analytics_activities_responses_get**
> List[ActivityAttemptOpenResponse] offerings_offering_id_analytics_activities_responses_get(offering_id)

Find open response activity attempts

Responds with all learner activity attempts for open response activities in an offering matching the offeringId.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.activity_attempt_open_response import ActivityAttemptOpenResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.iqualify.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.iqualify.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AssessmentDataApi(api_client)
    offering_id = 'offering_id_example' # str | offering's id

    try:
        # Find open response activity attempts
        api_response = api_instance.offerings_offering_id_analytics_activities_responses_get(offering_id)
        print("The response of AssessmentDataApi->offerings_offering_id_analytics_activities_responses_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssessmentDataApi->offerings_offering_id_analytics_activities_responses_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offering_id** | **str**| offering&#39;s id | 

### Return type

[**List[ActivityAttemptOpenResponse]**](ActivityAttemptOpenResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Offering activity attempt open responses |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **offerings_offering_id_analytics_marks_assignments_get**
> List[AssignmentMarkResponse] offerings_offering_id_analytics_marks_assignments_get(offering_id)

Find assessment marks

Responds with all learner assessment marks in an offering matching the offeringId.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.assignment_mark_response import AssignmentMarkResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.iqualify.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.iqualify.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AssessmentDataApi(api_client)
    offering_id = 'offering_id_example' # str | offering's id

    try:
        # Find assessment marks
        api_response = api_instance.offerings_offering_id_analytics_marks_assignments_get(offering_id)
        print("The response of AssessmentDataApi->offerings_offering_id_analytics_marks_assignments_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssessmentDataApi->offerings_offering_id_analytics_marks_assignments_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offering_id** | **str**| offering&#39;s id | 

### Return type

[**List[AssignmentMarkResponse]**](AssignmentMarkResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Assignments marks |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **offerings_offering_id_analytics_marks_quizzes_get**
> List[QuizMarkResponse] offerings_offering_id_analytics_marks_quizzes_get(offering_id)

Find quiz marks

Responds with all learner quiz marks in an offering matching the offeringId.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.quiz_mark_response import QuizMarkResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.iqualify.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.iqualify.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AssessmentDataApi(api_client)
    offering_id = 'offering_id_example' # str | offering's id

    try:
        # Find quiz marks
        api_response = api_instance.offerings_offering_id_analytics_marks_quizzes_get(offering_id)
        print("The response of AssessmentDataApi->offerings_offering_id_analytics_marks_quizzes_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssessmentDataApi->offerings_offering_id_analytics_marks_quizzes_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offering_id** | **str**| offering&#39;s id | 

### Return type

[**List[QuizMarkResponse]**](QuizMarkResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Quizzes marks |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **offerings_offering_id_analytics_submissions_assignments_get**
> List[AssignmentMarkResponse] offerings_offering_id_analytics_submissions_assignments_get(offering_id)

Find submissions to assessments, including marks if any

Responds with all learner assessment submissions and marks, if any, in an offering matching the offeringId.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.assignment_mark_response import AssignmentMarkResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.iqualify.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.iqualify.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AssessmentDataApi(api_client)
    offering_id = 'offering_id_example' # str | offering's id

    try:
        # Find submissions to assessments, including marks if any
        api_response = api_instance.offerings_offering_id_analytics_submissions_assignments_get(offering_id)
        print("The response of AssessmentDataApi->offerings_offering_id_analytics_submissions_assignments_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssessmentDataApi->offerings_offering_id_analytics_submissions_assignments_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offering_id** | **str**| offering&#39;s id | 

### Return type

[**List[AssignmentMarkResponse]**](AssignmentMarkResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Assignments submissions |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **offerings_offering_id_analytics_submissions_open_response_assessment_id_get**
> List[SubmissionMarkResponse] offerings_offering_id_analytics_submissions_open_response_assessment_id_get(offering_id, assessment_id)

Find submissions to a specified open response assessment, including marks if any

Responds with all learner assessment submissions and marks, if any, in a specified open response assessment.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.submission_mark_response import SubmissionMarkResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.iqualify.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.iqualify.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AssessmentDataApi(api_client)
    offering_id = 'offering_id_example' # str | offering's id
    assessment_id = 'assessment_id_example' # str | assessment's id

    try:
        # Find submissions to a specified open response assessment, including marks if any
        api_response = api_instance.offerings_offering_id_analytics_submissions_open_response_assessment_id_get(offering_id, assessment_id)
        print("The response of AssessmentDataApi->offerings_offering_id_analytics_submissions_open_response_assessment_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssessmentDataApi->offerings_offering_id_analytics_submissions_open_response_assessment_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offering_id** | **str**| offering&#39;s id | 
 **assessment_id** | **str**| assessment&#39;s id | 

### Return type

[**List[SubmissionMarkResponse]**](SubmissionMarkResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Responds with assignment submissions for the specified assignment. |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **offerings_offering_id_analytics_submissions_user_email_assignments_assessment_id_get**
> List[SubmissionMarkResponse] offerings_offering_id_analytics_submissions_user_email_assignments_assessment_id_get(offering_id, user_email, assessment_id)

Find a learner's submission to a specified assessment, including marks if any

Responds with the learner's assessment submission and any marks for the submission.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.submission_mark_response import SubmissionMarkResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.iqualify.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.iqualify.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AssessmentDataApi(api_client)
    offering_id = 'offering_id_example' # str | offering's id
    user_email = 'user_email_example' # str | user's email
    assessment_id = 'assessment_id_example' # str | assessment's id

    try:
        # Find a learner's submission to a specified assessment, including marks if any
        api_response = api_instance.offerings_offering_id_analytics_submissions_user_email_assignments_assessment_id_get(offering_id, user_email, assessment_id)
        print("The response of AssessmentDataApi->offerings_offering_id_analytics_submissions_user_email_assignments_assessment_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssessmentDataApi->offerings_offering_id_analytics_submissions_user_email_assignments_assessment_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offering_id** | **str**| offering&#39;s id | 
 **user_email** | **str**| user&#39;s email | 
 **assessment_id** | **str**| assessment&#39;s id | 

### Return type

[**List[SubmissionMarkResponse]**](SubmissionMarkResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Responds with the learner&#39;s assessment submission and any marks for the submission. |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

