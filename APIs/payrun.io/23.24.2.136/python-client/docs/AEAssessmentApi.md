# openapi_client.AEAssessmentApi

All URIs are relative to *https://api.test.payrun.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_ae_assessment**](AEAssessmentApi.md#delete_ae_assessment) | **DELETE** /Employer/{EmployerId}/Employee/{EmployeeId}/AEAssessment/{AEAssessmentId} | Delete auto enrolment assessment
[**get_ae_assessment_from_employee**](AEAssessmentApi.md#get_ae_assessment_from_employee) | **GET** /Employer/{EmployerId}/Employee/{EmployeeId}/AEAssessment/{AEAssessmentId} | Get the auto enrolment assessment
[**get_ae_assessments_from_employee**](AEAssessmentApi.md#get_ae_assessments_from_employee) | **GET** /Employer/{EmployerId}/Employee/{EmployeeId}/AEAssessments | Get the auto enrolment assessments
[**get_ae_assessments_from_pay_run**](AEAssessmentApi.md#get_ae_assessments_from_pay_run) | **GET** /Employer/{EmployerId}/PaySchedule/{PayScheduleId}/PayRun/{PayRunId}/AEAssessments | Get the auto enrolment assessments
[**post_new_ae_assessment**](AEAssessmentApi.md#post_new_ae_assessment) | **POST** /Employer/{EmployerId}/Employee/{EmployeeId}/AEAssessments | Insert new auto enrolment assessment
[**put_new_ae_assessment**](AEAssessmentApi.md#put_new_ae_assessment) | **PUT** /Employer/{EmployerId}/Employee/{EmployeeId}/AEAssessment/{AEAssessmentId} | Insert new auto enrolment assessment


# **delete_ae_assessment**
> delete_ae_assessment(employer_id, employee_id, ae_assessment_id, authorization, api_version)

Delete auto enrolment assessment

Deletes an existing auto enrolment assessment for the employee. Used to remove historical assessments

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.test.payrun.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.test.payrun.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AEAssessmentApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    employee_id = 'employee_id_example' # str | The employees' unique identifier. E.g EE001
    ae_assessment_id = 'ae_assessment_id_example' # str | The auto enrolment assessment unique identifier. E.g. AE001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Delete auto enrolment assessment
        api_instance.delete_ae_assessment(employer_id, employee_id, ae_assessment_id, authorization, api_version)
    except Exception as e:
        print("Exception when calling AEAssessmentApi->delete_ae_assessment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **employee_id** | **str**| The employees&#39; unique identifier. E.g EE001 | 
 **ae_assessment_id** | **str**| The auto enrolment assessment unique identifier. E.g. AE001 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | No Content |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_ae_assessment_from_employee**
> AEAssessment get_ae_assessment_from_employee(employer_id, employee_id, ae_assessment_id, authorization, api_version)

Get the auto enrolment assessment

Gets the auto enrolment assessment from the specified employee

### Example


```python
import openapi_client
from openapi_client.models.ae_assessment import AEAssessment
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.test.payrun.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.test.payrun.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AEAssessmentApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    employee_id = 'employee_id_example' # str | The employees' unique identifier. E.g EE001
    ae_assessment_id = 'ae_assessment_id_example' # str | The auto enrolment assessment unique identifier. E.g. AE001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get the auto enrolment assessment
        api_response = api_instance.get_ae_assessment_from_employee(employer_id, employee_id, ae_assessment_id, authorization, api_version)
        print("The response of AEAssessmentApi->get_ae_assessment_from_employee:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AEAssessmentApi->get_ae_assessment_from_employee: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **employee_id** | **str**| The employees&#39; unique identifier. E.g EE001 | 
 **ae_assessment_id** | **str**| The auto enrolment assessment unique identifier. E.g. AE001 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

[**AEAssessment**](AEAssessment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The a e assessment object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_ae_assessments_from_employee**
> LinkCollection get_ae_assessments_from_employee(employer_id, employee_id, authorization, api_version)

Get the auto enrolment assessments

Gets all auto enrolment assessments from the specified employee

### Example


```python
import openapi_client
from openapi_client.models.link_collection import LinkCollection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.test.payrun.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.test.payrun.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AEAssessmentApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    employee_id = 'employee_id_example' # str | The employees' unique identifier. E.g EE001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get the auto enrolment assessments
        api_response = api_instance.get_ae_assessments_from_employee(employer_id, employee_id, authorization, api_version)
        print("The response of AEAssessmentApi->get_ae_assessments_from_employee:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AEAssessmentApi->get_ae_assessments_from_employee: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **employee_id** | **str**| The employees&#39; unique identifier. E.g EE001 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

[**LinkCollection**](LinkCollection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The link collection object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_ae_assessments_from_pay_run**
> LinkCollection get_ae_assessments_from_pay_run(employer_id, pay_schedule_id, pay_run_id, authorization, api_version)

Get the auto enrolment assessments

Gets all auto enrolment assessments from the specified pay run

### Example


```python
import openapi_client
from openapi_client.models.link_collection import LinkCollection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.test.payrun.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.test.payrun.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AEAssessmentApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    pay_schedule_id = 'pay_schedule_id_example' # str | The pay schedules' unique identifier. E.g SCH001
    pay_run_id = 'pay_run_id_example' # str | The pay runs' unique identifier. E.g. PR001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get the auto enrolment assessments
        api_response = api_instance.get_ae_assessments_from_pay_run(employer_id, pay_schedule_id, pay_run_id, authorization, api_version)
        print("The response of AEAssessmentApi->get_ae_assessments_from_pay_run:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AEAssessmentApi->get_ae_assessments_from_pay_run: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **pay_schedule_id** | **str**| The pay schedules&#39; unique identifier. E.g SCH001 | 
 **pay_run_id** | **str**| The pay runs&#39; unique identifier. E.g. PR001 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

[**LinkCollection**](LinkCollection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The link collection object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_new_ae_assessment**
> Link post_new_ae_assessment(employer_id, employee_id, authorization, api_version, ae_assessment)

Insert new auto enrolment assessment

Creates a new auto enrolment assessment for the employee. Used to insert historical assessments

### Example


```python
import openapi_client
from openapi_client.models.ae_assessment import AEAssessment
from openapi_client.models.link import Link
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.test.payrun.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.test.payrun.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AEAssessmentApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    employee_id = 'employee_id_example' # str | The employees' unique identifier. E.g EE001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')
    ae_assessment = openapi_client.AEAssessment() # AEAssessment | The auto enrolment assessment object.

    try:
        # Insert new auto enrolment assessment
        api_response = api_instance.post_new_ae_assessment(employer_id, employee_id, authorization, api_version, ae_assessment)
        print("The response of AEAssessmentApi->post_new_ae_assessment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AEAssessmentApi->post_new_ae_assessment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **employee_id** | **str**| The employees&#39; unique identifier. E.g EE001 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]
 **ae_assessment** | [**AEAssessment**](AEAssessment.md)| The auto enrolment assessment object. | 

### Return type

[**Link**](Link.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The link object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_new_ae_assessment**
> AEAssessment put_new_ae_assessment(employer_id, employee_id, ae_assessment_id, authorization, api_version, ae_assessment)

Insert new auto enrolment assessment

Creates a new auto enrolment assessment for the employee. Used to insert historical assessments

### Example


```python
import openapi_client
from openapi_client.models.ae_assessment import AEAssessment
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.test.payrun.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.test.payrun.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AEAssessmentApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    employee_id = 'employee_id_example' # str | The employees' unique identifier. E.g EE001
    ae_assessment_id = 'ae_assessment_id_example' # str | The auto enrolment assessment unique identifier. E.g. AE001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')
    ae_assessment = openapi_client.AEAssessment() # AEAssessment | The auto enrolment assessment object.

    try:
        # Insert new auto enrolment assessment
        api_response = api_instance.put_new_ae_assessment(employer_id, employee_id, ae_assessment_id, authorization, api_version, ae_assessment)
        print("The response of AEAssessmentApi->put_new_ae_assessment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AEAssessmentApi->put_new_ae_assessment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **employee_id** | **str**| The employees&#39; unique identifier. E.g EE001 | 
 **ae_assessment_id** | **str**| The auto enrolment assessment unique identifier. E.g. AE001 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]
 **ae_assessment** | [**AEAssessment**](AEAssessment.md)| The auto enrolment assessment object. | 

### Return type

[**AEAssessment**](AEAssessment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The a e assessment object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

