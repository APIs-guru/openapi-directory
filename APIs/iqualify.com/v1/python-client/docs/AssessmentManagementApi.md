# openapi_client.AssessmentManagementApi

All URIs are relative to *https://api.iqualify.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**offerings_offering_id_activities_openresponse_get**](AssessmentManagementApi.md#offerings_offering_id_activities_openresponse_get) | **GET** /offerings/{offeringId}/activities/openresponse | Find offering&#39;s activities
[**offerings_offering_id_assessments_assessment_id_documents_document_id_delete**](AssessmentManagementApi.md#offerings_offering_id_assessments_assessment_id_documents_document_id_delete) | **DELETE** /offerings/{offeringId}/assessments/{assessmentId}/documents/{documentId} | Remove assessment document
[**offerings_offering_id_assessments_assessment_id_patch**](AssessmentManagementApi.md#offerings_offering_id_assessments_assessment_id_patch) | **PATCH** /offerings/{offeringId}/assessments/{assessmentId} | Update assessment details
[**offerings_offering_id_assessments_assessment_id_user_email_patch**](AssessmentManagementApi.md#offerings_offering_id_assessments_assessment_id_user_email_patch) | **PATCH** /offerings/{offeringId}/assessments/{assessmentId}/{userEmail} | Update the due dates for a learner&#39;s quiz attempt
[**offerings_offering_id_assessments_get**](AssessmentManagementApi.md#offerings_offering_id_assessments_get) | **GET** /offerings/{offeringId}/assessments | Find offering&#39;s assessments
[**offerings_offering_id_learners_pending_submission_get**](AssessmentManagementApi.md#offerings_offering_id_learners_pending_submission_get) | **GET** /offerings/{offeringId}/learners/pending-submission | Find learners with assessments pending x days before due date within the specified offeringId
[**offerings_offering_id_users_user_email_assessments_assessment_id_delete**](AssessmentManagementApi.md#offerings_offering_id_users_user_email_assessments_assessment_id_delete) | **DELETE** /offerings/{offeringId}/users/{userEmail}/assessments/{assessmentId} | Reset user&#39;s assessment to draft state
[**offerings_offering_id_users_user_email_submissions_open_response_get**](AssessmentManagementApi.md#offerings_offering_id_users_user_email_submissions_open_response_get) | **GET** /offerings/{offeringId}/users/{userEmail}/submissions/open-response | Find learner&#39;s open response assessment submissions


# **offerings_offering_id_activities_openresponse_get**
> List[OfferingActivitiesResponse] offerings_offering_id_activities_openresponse_get(offering_id)

Find offering's activities

Responds with the activities in a specific offering.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.offering_activities_response import OfferingActivitiesResponse
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
    api_instance = openapi_client.AssessmentManagementApi(api_client)
    offering_id = 'offering_id_example' # str | offering's id

    try:
        # Find offering's activities
        api_response = api_instance.offerings_offering_id_activities_openresponse_get(offering_id)
        print("The response of AssessmentManagementApi->offerings_offering_id_activities_openresponse_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssessmentManagementApi->offerings_offering_id_activities_openresponse_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offering_id** | **str**| offering&#39;s id | 

### Return type

[**List[OfferingActivitiesResponse]**](OfferingActivitiesResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | offering&#39;s learners |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **offerings_offering_id_assessments_assessment_id_documents_document_id_delete**
> offerings_offering_id_assessments_assessment_id_documents_document_id_delete(offering_id, assessment_id, document_id)

Remove assessment document

Removes the assessment document file for a specified assessment in an offering.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
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
    api_instance = openapi_client.AssessmentManagementApi(api_client)
    offering_id = 'offering_id_example' # str | offering's id
    assessment_id = 'assessment_id_example' # str | assessment's id
    document_id = 'document_id_example' # str | documents's id

    try:
        # Remove assessment document
        api_instance.offerings_offering_id_assessments_assessment_id_documents_document_id_delete(offering_id, assessment_id, document_id)
    except Exception as e:
        print("Exception when calling AssessmentManagementApi->offerings_offering_id_assessments_assessment_id_documents_document_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offering_id** | **str**| offering&#39;s id | 
 **assessment_id** | **str**| assessment&#39;s id | 
 **document_id** | **str**| documents&#39;s id | 

### Return type

void (empty response body)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | assessment document successfully removed |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **offerings_offering_id_assessments_assessment_id_patch**
> AssessmentResponse offerings_offering_id_assessments_assessment_id_patch(offering_id, assessment_id, assessment)

Update assessment details

Updates the assessment details for a specified assessment in an offering.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.assessment import Assessment
from openapi_client.models.assessment_response import AssessmentResponse
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
    api_instance = openapi_client.AssessmentManagementApi(api_client)
    offering_id = 'offering_id_example' # str | offering's id
    assessment_id = 'assessment_id_example' # str | assessment's id
    assessment = openapi_client.Assessment() # Assessment | 

    try:
        # Update assessment details
        api_response = api_instance.offerings_offering_id_assessments_assessment_id_patch(offering_id, assessment_id, assessment)
        print("The response of AssessmentManagementApi->offerings_offering_id_assessments_assessment_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssessmentManagementApi->offerings_offering_id_assessments_assessment_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offering_id** | **str**| offering&#39;s id | 
 **assessment_id** | **str**| assessment&#39;s id | 
 **assessment** | [**Assessment**](Assessment.md)|  | 

### Return type

[**AssessmentResponse**](AssessmentResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | assessment successfully updated |  -  |
**400** | Bad Request |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **offerings_offering_id_assessments_assessment_id_user_email_patch**
> offerings_offering_id_assessments_assessment_id_user_email_patch(offering_id, assessment_id, user_email, offerings_offering_id_assessments_assessment_id_user_email_patch_request)

Update the due dates for a learner's quiz attempt

Updates the due dates for a learner's quiz attempt specified by the assessmentId.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.offerings_offering_id_assessments_assessment_id_user_email_patch_request import OfferingsOfferingIdAssessmentsAssessmentIdUserEmailPatchRequest
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
    api_instance = openapi_client.AssessmentManagementApi(api_client)
    offering_id = 'offering_id_example' # str | offering's id
    assessment_id = 'assessment_id_example' # str | assessment's id
    user_email = 'user_email_example' # str | user's email
    offerings_offering_id_assessments_assessment_id_user_email_patch_request = openapi_client.OfferingsOfferingIdAssessmentsAssessmentIdUserEmailPatchRequest() # OfferingsOfferingIdAssessmentsAssessmentIdUserEmailPatchRequest | 

    try:
        # Update the due dates for a learner's quiz attempt
        api_instance.offerings_offering_id_assessments_assessment_id_user_email_patch(offering_id, assessment_id, user_email, offerings_offering_id_assessments_assessment_id_user_email_patch_request)
    except Exception as e:
        print("Exception when calling AssessmentManagementApi->offerings_offering_id_assessments_assessment_id_user_email_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offering_id** | **str**| offering&#39;s id | 
 **assessment_id** | **str**| assessment&#39;s id | 
 **user_email** | **str**| user&#39;s email | 
 **offerings_offering_id_assessments_assessment_id_user_email_patch_request** | [**OfferingsOfferingIdAssessmentsAssessmentIdUserEmailPatchRequest**](OfferingsOfferingIdAssessmentsAssessmentIdUserEmailPatchRequest.md)|  | 

### Return type

void (empty response body)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successfully updated assessment due date. |  -  |
**400** | Bad Request |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **offerings_offering_id_assessments_get**
> List[AssessmentResponse] offerings_offering_id_assessments_get(offering_id)

Find offering's assessments

Responds with all assessments in an offering matching the offeringId.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.assessment_response import AssessmentResponse
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
    api_instance = openapi_client.AssessmentManagementApi(api_client)
    offering_id = 'offering_id_example' # str | offering's id

    try:
        # Find offering's assessments
        api_response = api_instance.offerings_offering_id_assessments_get(offering_id)
        print("The response of AssessmentManagementApi->offerings_offering_id_assessments_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssessmentManagementApi->offerings_offering_id_assessments_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offering_id** | **str**| offering&#39;s id | 

### Return type

[**List[AssessmentResponse]**](AssessmentResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | offering&#39;s assessments |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **offerings_offering_id_learners_pending_submission_get**
> List[AssessmentPendingSubmission] offerings_offering_id_learners_pending_submission_get(offering_id, days=days)

Find learners with assessments pending x days before due date within the specified offeringId

Responds with learners who have one or more assessments due x days before the due date, with each assessment that is due, where x = the number of days specified in the request. The default is 3 days.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.assessment_pending_submission import AssessmentPendingSubmission
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
    api_instance = openapi_client.AssessmentManagementApi(api_client)
    offering_id = 'offering_id_example' # str | offering's id
    days = 'days_example' # str | days to assessment due date. Default is 3 days (optional)

    try:
        # Find learners with assessments pending x days before due date within the specified offeringId
        api_response = api_instance.offerings_offering_id_learners_pending_submission_get(offering_id, days=days)
        print("The response of AssessmentManagementApi->offerings_offering_id_learners_pending_submission_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssessmentManagementApi->offerings_offering_id_learners_pending_submission_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offering_id** | **str**| offering&#39;s id | 
 **days** | **str**| days to assessment due date. Default is 3 days | [optional] 

### Return type

[**List[AssessmentPendingSubmission]**](AssessmentPendingSubmission.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | offering&#39;s learners |  -  |
**400** | Bad Request |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **offerings_offering_id_users_user_email_assessments_assessment_id_delete**
> offerings_offering_id_users_user_email_assessments_assessment_id_delete(offering_id, user_email, assessment_id)

Reset user's assessment to draft state

Resets the user's submitted assessment to a draft state.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
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
    api_instance = openapi_client.AssessmentManagementApi(api_client)
    offering_id = 'offering_id_example' # str | offering's id
    user_email = 'user_email_example' # str | user's email
    assessment_id = 'assessment_id_example' # str | assessment's id

    try:
        # Reset user's assessment to draft state
        api_instance.offerings_offering_id_users_user_email_assessments_assessment_id_delete(offering_id, user_email, assessment_id)
    except Exception as e:
        print("Exception when calling AssessmentManagementApi->offerings_offering_id_users_user_email_assessments_assessment_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offering_id** | **str**| offering&#39;s id | 
 **user_email** | **str**| user&#39;s email | 
 **assessment_id** | **str**| assessment&#39;s id | 

### Return type

void (empty response body)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | User&#39;s assessment successfully moved to draft state. |  -  |
**400** | Bad Request |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **offerings_offering_id_users_user_email_submissions_open_response_get**
> List[Assignments] offerings_offering_id_users_user_email_submissions_open_response_get(offering_id, user_email)

Find learner's open response assessment submissions

Responds with open response assessment submissions by a learner in an offering.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.assignments import Assignments
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
    api_instance = openapi_client.AssessmentManagementApi(api_client)
    offering_id = 'offering_id_example' # str | offering's id
    user_email = 'user_email_example' # str | user's email

    try:
        # Find learner's open response assessment submissions
        api_response = api_instance.offerings_offering_id_users_user_email_submissions_open_response_get(offering_id, user_email)
        print("The response of AssessmentManagementApi->offerings_offering_id_users_user_email_submissions_open_response_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssessmentManagementApi->offerings_offering_id_users_user_email_submissions_open_response_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offering_id** | **str**| offering&#39;s id | 
 **user_email** | **str**| user&#39;s email | 

### Return type

[**List[Assignments]**](Assignments.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | user open response submission and mark details |  -  |
**400** | Bad Request |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

