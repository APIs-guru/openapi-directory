# openapi_client.EmployeeApi

All URIs are relative to *https://api.test.payrun.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_employee**](EmployeeApi.md#delete_employee) | **DELETE** /Employer/{EmployerId}/Employee/{EmployeeId} | Delete an Employee
[**delete_employee_revision**](EmployeeApi.md#delete_employee_revision) | **DELETE** /Employer/{EmployerId}/Employee/{EmployeeId}/{EffectiveDate} | Delete an Employee revision matching the specified revision date.
[**delete_employee_revision_by_number**](EmployeeApi.md#delete_employee_revision_by_number) | **DELETE** /Employer/{EmployerId}/Employee/{EmployeeId}/Revision/{RevisionNumber} | Delete an Employee revision matching the specified revision number.
[**delete_employee_secret**](EmployeeApi.md#delete_employee_secret) | **DELETE** /Employer/{EmployerId}/Employee/{EmployeeId}/Secret/{SecretId} | Deletes employee secret
[**get_ae_assessment_from_employee_0**](EmployeeApi.md#get_ae_assessment_from_employee_0) | **GET** /Employer/{EmployerId}/Employee/{EmployeeId}/AEAssessment/{AEAssessmentId} | Get the auto enrolment assessment
[**get_ae_assessments_from_employee_0**](EmployeeApi.md#get_ae_assessments_from_employee_0) | **GET** /Employer/{EmployerId}/Employee/{EmployeeId}/AEAssessments | Get the auto enrolment assessments
[**get_all_employee_tags_0**](EmployeeApi.md#get_all_employee_tags_0) | **GET** /Employer/{EmployerId}/Employees/Tags | Get all employee tags
[**get_commentaries_from_employee**](EmployeeApi.md#get_commentaries_from_employee) | **GET** /Employer/{EmployerId}/Employee/{EmployeeId}/Commentaries | Get links to all commentaries for the specified employee
[**get_commentary_from_employee**](EmployeeApi.md#get_commentary_from_employee) | **GET** /Employer/{EmployerId}/Employee/{EmployeeId}/Commentary/{CommentaryId} | Get commentary from employee
[**get_commentary_from_pay_run_by_employee**](EmployeeApi.md#get_commentary_from_pay_run_by_employee) | **GET** /Employer/{EmployerId}/PaySchedule/{PayScheduleId}/PayRun/{PayRunId}/Employee/{EmployeeId}/Commentary | Get commentary from payrun by specified employee.
[**get_employee_by_effective_date**](EmployeeApi.md#get_employee_by_effective_date) | **GET** /Employer/{EmployerId}/Employee/{EmployeeId}/{EffectiveDate} | Get employee by effective date.
[**get_employee_from_employer**](EmployeeApi.md#get_employee_from_employer) | **GET** /Employer/{EmployerId}/Employee/{EmployeeId} | Get employee from employer
[**get_employee_revision_by_number**](EmployeeApi.md#get_employee_revision_by_number) | **GET** /Employer/{EmployerId}/Employee/{EmployeeId}/Revision/{RevisionNumber} | Gets the employee by revision number
[**get_employee_revision_summaries**](EmployeeApi.md#get_employee_revision_summaries) | **GET** /Employer/{EmployerId}/Employee/{EmployeeId}/Revisions/Summary | Get all employee revision summaries
[**get_employee_revision_summary_by_number**](EmployeeApi.md#get_employee_revision_summary_by_number) | **GET** /Employer/{EmployerId}/Employee/{EmployeeId}/Revision/{RevisionNumber}/Summary | Gets the employee summary by revision number
[**get_employee_revisions**](EmployeeApi.md#get_employee_revisions) | **GET** /Employer/{EmployerId}/Employee/{EmployeeId}/Revisions | Get all employee revisions
[**get_employee_secret**](EmployeeApi.md#get_employee_secret) | **GET** /Employer/{EmployerId}/Employee/{EmployeeId}/Secret/{SecretId} | Get employee secret
[**get_employee_secrets**](EmployeeApi.md#get_employee_secrets) | **GET** /Employer/{EmployerId}/Employee/{EmployeeId}/Secrets | Get all employee secret links
[**get_employee_summaries_by_effective_date**](EmployeeApi.md#get_employee_summaries_by_effective_date) | **GET** /Employer/{EmployerId}/Employees/{EffectiveDate}/Summary | Get employee summaries from employer at a given effective date.
[**get_employee_summaries_from_employer**](EmployeeApi.md#get_employee_summaries_from_employer) | **GET** /Employer/{EmployerId}/Employees/Summary | Get employee summaries from employer.
[**get_employee_summary_by_effective_date**](EmployeeApi.md#get_employee_summary_by_effective_date) | **GET** /Employer/{EmployerId}/Employee/{EmployeeId}/{EffectiveDate}/Summary | Get employee summary by effective date.
[**get_employee_summary_from_employer**](EmployeeApi.md#get_employee_summary_from_employer) | **GET** /Employer/{EmployerId}/Employee/{EmployeeId}/Summary | Get employee summary from employer
[**get_employees_by_effective_date**](EmployeeApi.md#get_employees_by_effective_date) | **GET** /Employer/{EmployerId}/Employees/{EffectiveDate} | Get employees from employer at a given effective date.
[**get_employees_from_employer**](EmployeeApi.md#get_employees_from_employer) | **GET** /Employer/{EmployerId}/Employees | Get employees from employer.
[**get_employees_from_pay_run**](EmployeeApi.md#get_employees_from_pay_run) | **GET** /Employer/{EmployerId}/PaySchedule/{PayScheduleId}/PayRun/{PayRunId}/Employees | Get employees from the pay run
[**get_employees_from_pay_schedule**](EmployeeApi.md#get_employees_from_pay_schedule) | **GET** /Employer/{EmployerId}/PaySchedule/{PayScheduleId}/Employees | Get all employees revisions from a pay schedule.
[**get_employees_from_pay_schedule_on_effective_date**](EmployeeApi.md#get_employees_from_pay_schedule_on_effective_date) | **GET** /Employer/{EmployerId}/PaySchedule/{PayScheduleId}/Employees/{EffectiveDate} | Get employees from a pay schedule on effective date.
[**get_employees_with_tag_0**](EmployeeApi.md#get_employees_with_tag_0) | **GET** /Employer/{EmployerId}/Employees/Tag/{TagId} | Get employees with tag
[**get_pay_runs_from_employee_0**](EmployeeApi.md#get_pay_runs_from_employee_0) | **GET** /Employer/{EmployerId}/Employee/{EmployeeId}/PayRuns | Gets the pay runs from the employee
[**patch_employee**](EmployeeApi.md#patch_employee) | **PATCH** /Employer/{EmployerId}/Employee/{EmployeeId} | Patches the employee
[**post_employee_into_employer**](EmployeeApi.md#post_employee_into_employer) | **POST** /Employer/{EmployerId}/Employees | Create a new Employee
[**post_employee_secret**](EmployeeApi.md#post_employee_secret) | **POST** /Employer/{EmployerId}/Employee/{EmployeeId}/Secrets | Create a new employee secret
[**put_employee_into_employer**](EmployeeApi.md#put_employee_into_employer) | **PUT** /Employer/{EmployerId}/Employee/{EmployeeId} | Updates the Employee
[**put_employee_secret**](EmployeeApi.md#put_employee_secret) | **PUT** /Employer/{EmployerId}/Employee/{EmployeeId}/Secret/{SecretId} | Create a new employee secret


# **delete_employee**
> delete_employee(employer_id, employee_id, authorization, api_version)

Delete an Employee

Delete the specified employee

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
    api_instance = openapi_client.EmployeeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    employee_id = 'employee_id_example' # str | The employees' unique identifier. E.g EE001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Delete an Employee
        api_instance.delete_employee(employer_id, employee_id, authorization, api_version)
    except Exception as e:
        print("Exception when calling EmployeeApi->delete_employee: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **employee_id** | **str**| The employees&#39; unique identifier. E.g EE001 | 
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
**204** | No Content |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_employee_revision**
> delete_employee_revision(employer_id, employee_id, effective_date, authorization, api_version)

Delete an Employee revision matching the specified revision date.

Deletes the specified employee revision for the matching revision date

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
    api_instance = openapi_client.EmployeeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    employee_id = 'employee_id_example' # str | The employees' unique identifier. E.g EE001
    effective_date = '2013-10-20' # date | The effective date to be applied. E.g 2016-04-06
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Delete an Employee revision matching the specified revision date.
        api_instance.delete_employee_revision(employer_id, employee_id, effective_date, authorization, api_version)
    except Exception as e:
        print("Exception when calling EmployeeApi->delete_employee_revision: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **employee_id** | **str**| The employees&#39; unique identifier. E.g EE001 | 
 **effective_date** | **date**| The effective date to be applied. E.g 2016-04-06 | 
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
**204** | No Content |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_employee_revision_by_number**
> delete_employee_revision_by_number(employer_id, employee_id, revision_number, authorization, api_version)

Delete an Employee revision matching the specified revision number.

Deletes the specified employee revision for the matching revision number

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
    api_instance = openapi_client.EmployeeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    employee_id = 'employee_id_example' # str | The employees' unique identifier. E.g EE001
    revision_number = 'revision_number_example' # str | The revision number. E.g. 1
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Delete an Employee revision matching the specified revision number.
        api_instance.delete_employee_revision_by_number(employer_id, employee_id, revision_number, authorization, api_version)
    except Exception as e:
        print("Exception when calling EmployeeApi->delete_employee_revision_by_number: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **employee_id** | **str**| The employees&#39; unique identifier. E.g EE001 | 
 **revision_number** | **str**| The revision number. E.g. 1 | 
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
**204** | No Content |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_employee_secret**
> delete_employee_secret(employer_id, employee_id, secret_id, authorization, api_version)

Deletes employee secret

Deletes an employee secret from the given resource location

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
    api_instance = openapi_client.EmployeeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    employee_id = 'employee_id_example' # str | The employees' unique identifier. E.g EE001
    secret_id = 'secret_id_example' # str | The secret unique identifier. E.g ERSEC001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Deletes employee secret
        api_instance.delete_employee_secret(employer_id, employee_id, secret_id, authorization, api_version)
    except Exception as e:
        print("Exception when calling EmployeeApi->delete_employee_secret: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **employee_id** | **str**| The employees&#39; unique identifier. E.g EE001 | 
 **secret_id** | **str**| The secret unique identifier. E.g ERSEC001 | 
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
**204** | No Content |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_ae_assessment_from_employee_0**
> AEAssessment get_ae_assessment_from_employee_0(employer_id, employee_id, ae_assessment_id, authorization, api_version)

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
    api_instance = openapi_client.EmployeeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    employee_id = 'employee_id_example' # str | The employees' unique identifier. E.g EE001
    ae_assessment_id = 'ae_assessment_id_example' # str | The auto enrolment assessment unique identifier. E.g. AE001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get the auto enrolment assessment
        api_response = api_instance.get_ae_assessment_from_employee_0(employer_id, employee_id, ae_assessment_id, authorization, api_version)
        print("The response of EmployeeApi->get_ae_assessment_from_employee_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmployeeApi->get_ae_assessment_from_employee_0: %s\n" % e)
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

# **get_ae_assessments_from_employee_0**
> LinkCollection get_ae_assessments_from_employee_0(employer_id, employee_id, authorization, api_version)

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
    api_instance = openapi_client.EmployeeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    employee_id = 'employee_id_example' # str | The employees' unique identifier. E.g EE001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get the auto enrolment assessments
        api_response = api_instance.get_ae_assessments_from_employee_0(employer_id, employee_id, authorization, api_version)
        print("The response of EmployeeApi->get_ae_assessments_from_employee_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmployeeApi->get_ae_assessments_from_employee_0: %s\n" % e)
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

# **get_all_employee_tags_0**
> LinkCollection get_all_employee_tags_0(employer_id, authorization, api_version)

Get all employee tags

Gets all the employee tags

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
    api_instance = openapi_client.EmployeeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get all employee tags
        api_response = api_instance.get_all_employee_tags_0(employer_id, authorization, api_version)
        print("The response of EmployeeApi->get_all_employee_tags_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmployeeApi->get_all_employee_tags_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
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

# **get_commentaries_from_employee**
> LinkCollection get_commentaries_from_employee(employer_id, employee_id, authorization, api_version)

Get links to all commentaries for the specified employee

Get links to all commentaries for the specified employee.

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
    api_instance = openapi_client.EmployeeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    employee_id = 'employee_id_example' # str | The employees' unique identifier. E.g EE001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get links to all commentaries for the specified employee
        api_response = api_instance.get_commentaries_from_employee(employer_id, employee_id, authorization, api_version)
        print("The response of EmployeeApi->get_commentaries_from_employee:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmployeeApi->get_commentaries_from_employee: %s\n" % e)
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

# **get_commentary_from_employee**
> Commentary get_commentary_from_employee(employer_id, employee_id, commentary_id, authorization, api_version)

Get commentary from employee

Gets the specified commentary report from the employee

### Example


```python
import openapi_client
from openapi_client.models.commentary import Commentary
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
    api_instance = openapi_client.EmployeeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    employee_id = 'employee_id_example' # str | The employees' unique identifier. E.g EE001
    commentary_id = 'commentary_id_example' # str | The commentary unique identifier. E.g. C001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get commentary from employee
        api_response = api_instance.get_commentary_from_employee(employer_id, employee_id, commentary_id, authorization, api_version)
        print("The response of EmployeeApi->get_commentary_from_employee:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmployeeApi->get_commentary_from_employee: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **employee_id** | **str**| The employees&#39; unique identifier. E.g EE001 | 
 **commentary_id** | **str**| The commentary unique identifier. E.g. C001 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

[**Commentary**](Commentary.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The commentary object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_commentary_from_pay_run_by_employee**
> Commentary get_commentary_from_pay_run_by_employee(employer_id, pay_schedule_id, pay_run_id, employee_id, authorization, api_version)

Get commentary from payrun by specified employee.

Get commentary from payrun by specified employee.

### Example


```python
import openapi_client
from openapi_client.models.commentary import Commentary
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
    api_instance = openapi_client.EmployeeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    pay_schedule_id = 'pay_schedule_id_example' # str | The pay schedules' unique identifier. E.g SCH001
    pay_run_id = 'pay_run_id_example' # str | The pay runs' unique identifier. E.g. PR001
    employee_id = 'employee_id_example' # str | The employees' unique identifier. E.g EE001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get commentary from payrun by specified employee.
        api_response = api_instance.get_commentary_from_pay_run_by_employee(employer_id, pay_schedule_id, pay_run_id, employee_id, authorization, api_version)
        print("The response of EmployeeApi->get_commentary_from_pay_run_by_employee:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmployeeApi->get_commentary_from_pay_run_by_employee: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **pay_schedule_id** | **str**| The pay schedules&#39; unique identifier. E.g SCH001 | 
 **pay_run_id** | **str**| The pay runs&#39; unique identifier. E.g. PR001 | 
 **employee_id** | **str**| The employees&#39; unique identifier. E.g EE001 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

[**Commentary**](Commentary.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The commentary object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_employee_by_effective_date**
> Employee get_employee_by_effective_date(employer_id, employee_id, effective_date, authorization, api_version)

Get employee by effective date.

Returns the employee's state at the specified effective date.

### Example


```python
import openapi_client
from openapi_client.models.employee import Employee
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
    api_instance = openapi_client.EmployeeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    employee_id = 'employee_id_example' # str | The employees' unique identifier. E.g EE001
    effective_date = '2013-10-20' # date | The effective date to be applied. E.g 2016-04-06
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get employee by effective date.
        api_response = api_instance.get_employee_by_effective_date(employer_id, employee_id, effective_date, authorization, api_version)
        print("The response of EmployeeApi->get_employee_by_effective_date:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmployeeApi->get_employee_by_effective_date: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **employee_id** | **str**| The employees&#39; unique identifier. E.g EE001 | 
 **effective_date** | **date**| The effective date to be applied. E.g 2016-04-06 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

[**Employee**](Employee.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The employee object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_employee_from_employer**
> Employee get_employee_from_employer(employer_id, employee_id, authorization, api_version)

Get employee from employer

Gets the specified employee from employer by employee code.

### Example


```python
import openapi_client
from openapi_client.models.employee import Employee
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
    api_instance = openapi_client.EmployeeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    employee_id = 'employee_id_example' # str | The employees' unique identifier. E.g EE001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get employee from employer
        api_response = api_instance.get_employee_from_employer(employer_id, employee_id, authorization, api_version)
        print("The response of EmployeeApi->get_employee_from_employer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmployeeApi->get_employee_from_employer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **employee_id** | **str**| The employees&#39; unique identifier. E.g EE001 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

[**Employee**](Employee.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The employee object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_employee_revision_by_number**
> Employee get_employee_revision_by_number(employer_id, employee_id, revision_number, authorization, api_version)

Gets the employee by revision number

Get the employee revision matching the specified revision number

### Example


```python
import openapi_client
from openapi_client.models.employee import Employee
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
    api_instance = openapi_client.EmployeeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    employee_id = 'employee_id_example' # str | The employees' unique identifier. E.g EE001
    revision_number = 'revision_number_example' # str | The revision number. E.g. 1
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Gets the employee by revision number
        api_response = api_instance.get_employee_revision_by_number(employer_id, employee_id, revision_number, authorization, api_version)
        print("The response of EmployeeApi->get_employee_revision_by_number:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmployeeApi->get_employee_revision_by_number: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **employee_id** | **str**| The employees&#39; unique identifier. E.g EE001 | 
 **revision_number** | **str**| The revision number. E.g. 1 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

[**Employee**](Employee.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The employee object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_employee_revision_summaries**
> LinkCollection get_employee_revision_summaries(employer_id, employee_id, authorization, api_version)

Get all employee revision summaries

Gets links to all employee revision summaries

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
    api_instance = openapi_client.EmployeeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    employee_id = 'employee_id_example' # str | The employees' unique identifier. E.g EE001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get all employee revision summaries
        api_response = api_instance.get_employee_revision_summaries(employer_id, employee_id, authorization, api_version)
        print("The response of EmployeeApi->get_employee_revision_summaries:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmployeeApi->get_employee_revision_summaries: %s\n" % e)
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

# **get_employee_revision_summary_by_number**
> EmployeeSummary get_employee_revision_summary_by_number(employer_id, employee_id, revision_number, authorization, api_version)

Gets the employee summary by revision number

Get the employee revision summary matching the specified revision number

### Example


```python
import openapi_client
from openapi_client.models.employee_summary import EmployeeSummary
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
    api_instance = openapi_client.EmployeeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    employee_id = 'employee_id_example' # str | The employees' unique identifier. E.g EE001
    revision_number = 'revision_number_example' # str | The revision number. E.g. 1
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Gets the employee summary by revision number
        api_response = api_instance.get_employee_revision_summary_by_number(employer_id, employee_id, revision_number, authorization, api_version)
        print("The response of EmployeeApi->get_employee_revision_summary_by_number:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmployeeApi->get_employee_revision_summary_by_number: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **employee_id** | **str**| The employees&#39; unique identifier. E.g EE001 | 
 **revision_number** | **str**| The revision number. E.g. 1 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

[**EmployeeSummary**](EmployeeSummary.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The employee summary object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_employee_revisions**
> LinkCollection get_employee_revisions(employer_id, employee_id, authorization, api_version)

Get all employee revisions

Gets links to all employee revisions

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
    api_instance = openapi_client.EmployeeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    employee_id = 'employee_id_example' # str | The employees' unique identifier. E.g EE001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get all employee revisions
        api_response = api_instance.get_employee_revisions(employer_id, employee_id, authorization, api_version)
        print("The response of EmployeeApi->get_employee_revisions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmployeeApi->get_employee_revisions: %s\n" % e)
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

# **get_employee_secret**
> EmployeeSecret get_employee_secret(employer_id, employee_id, secret_id, authorization, api_version)

Get employee secret

Get the public visible employee secret object

### Example


```python
import openapi_client
from openapi_client.models.employee_secret import EmployeeSecret
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
    api_instance = openapi_client.EmployeeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    employee_id = 'employee_id_example' # str | The employees' unique identifier. E.g EE001
    secret_id = 'secret_id_example' # str | The secret unique identifier. E.g ERSEC001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get employee secret
        api_response = api_instance.get_employee_secret(employer_id, employee_id, secret_id, authorization, api_version)
        print("The response of EmployeeApi->get_employee_secret:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmployeeApi->get_employee_secret: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **employee_id** | **str**| The employees&#39; unique identifier. E.g EE001 | 
 **secret_id** | **str**| The secret unique identifier. E.g ERSEC001 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

[**EmployeeSecret**](EmployeeSecret.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The employee secret object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_employee_secrets**
> LinkCollection get_employee_secrets(employer_id, employee_id, authorization, api_version)

Get all employee secret links

Get all the employee secret links

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
    api_instance = openapi_client.EmployeeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    employee_id = 'employee_id_example' # str | The employees' unique identifier. E.g EE001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get all employee secret links
        api_response = api_instance.get_employee_secrets(employer_id, employee_id, authorization, api_version)
        print("The response of EmployeeApi->get_employee_secrets:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmployeeApi->get_employee_secrets: %s\n" % e)
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

# **get_employee_summaries_by_effective_date**
> LinkCollection get_employee_summaries_by_effective_date(employer_id, effective_date, authorization, api_version)

Get employee summaries from employer at a given effective date.

Get links to all employee summaries for the employer on specified effective date.

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
    api_instance = openapi_client.EmployeeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    effective_date = '2013-10-20' # date | The effective date to be applied. E.g 2016-04-06
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get employee summaries from employer at a given effective date.
        api_response = api_instance.get_employee_summaries_by_effective_date(employer_id, effective_date, authorization, api_version)
        print("The response of EmployeeApi->get_employee_summaries_by_effective_date:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmployeeApi->get_employee_summaries_by_effective_date: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **effective_date** | **date**| The effective date to be applied. E.g 2016-04-06 | 
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

# **get_employee_summaries_from_employer**
> LinkCollection get_employee_summaries_from_employer(employer_id, authorization, api_version)

Get employee summaries from employer.

Get links to all employee summaries for the specified employer.

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
    api_instance = openapi_client.EmployeeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get employee summaries from employer.
        api_response = api_instance.get_employee_summaries_from_employer(employer_id, authorization, api_version)
        print("The response of EmployeeApi->get_employee_summaries_from_employer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmployeeApi->get_employee_summaries_from_employer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
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

# **get_employee_summary_by_effective_date**
> EmployeeSummary get_employee_summary_by_effective_date(employer_id, employee_id, effective_date, authorization, api_version)

Get employee summary by effective date.

Gets the employee summary for the specified effective date.

### Example


```python
import openapi_client
from openapi_client.models.employee_summary import EmployeeSummary
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
    api_instance = openapi_client.EmployeeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    employee_id = 'employee_id_example' # str | The employees' unique identifier. E.g EE001
    effective_date = '2013-10-20' # date | The effective date to be applied. E.g 2016-04-06
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get employee summary by effective date.
        api_response = api_instance.get_employee_summary_by_effective_date(employer_id, employee_id, effective_date, authorization, api_version)
        print("The response of EmployeeApi->get_employee_summary_by_effective_date:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmployeeApi->get_employee_summary_by_effective_date: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **employee_id** | **str**| The employees&#39; unique identifier. E.g EE001 | 
 **effective_date** | **date**| The effective date to be applied. E.g 2016-04-06 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

[**EmployeeSummary**](EmployeeSummary.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The employee summary object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_employee_summary_from_employer**
> EmployeeSummary get_employee_summary_from_employer(employer_id, employee_id, authorization, api_version)

Get employee summary from employer

Gets the specified employee summary data from employer by employee code.

### Example


```python
import openapi_client
from openapi_client.models.employee_summary import EmployeeSummary
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
    api_instance = openapi_client.EmployeeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    employee_id = 'employee_id_example' # str | The employees' unique identifier. E.g EE001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get employee summary from employer
        api_response = api_instance.get_employee_summary_from_employer(employer_id, employee_id, authorization, api_version)
        print("The response of EmployeeApi->get_employee_summary_from_employer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmployeeApi->get_employee_summary_from_employer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **employee_id** | **str**| The employees&#39; unique identifier. E.g EE001 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

[**EmployeeSummary**](EmployeeSummary.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The employee summary object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_employees_by_effective_date**
> LinkCollection get_employees_by_effective_date(employer_id, effective_date, authorization, api_version)

Get employees from employer at a given effective date.

Get links to all employees for the employer on specified effective date.

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
    api_instance = openapi_client.EmployeeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    effective_date = '2013-10-20' # date | The effective date to be applied. E.g 2016-04-06
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get employees from employer at a given effective date.
        api_response = api_instance.get_employees_by_effective_date(employer_id, effective_date, authorization, api_version)
        print("The response of EmployeeApi->get_employees_by_effective_date:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmployeeApi->get_employees_by_effective_date: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **effective_date** | **date**| The effective date to be applied. E.g 2016-04-06 | 
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

# **get_employees_from_employer**
> LinkCollection get_employees_from_employer(employer_id, authorization, api_version)

Get employees from employer.

Get links to all employees for the specified employer.

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
    api_instance = openapi_client.EmployeeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get employees from employer.
        api_response = api_instance.get_employees_from_employer(employer_id, authorization, api_version)
        print("The response of EmployeeApi->get_employees_from_employer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmployeeApi->get_employees_from_employer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
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

# **get_employees_from_pay_run**
> LinkCollection get_employees_from_pay_run(employer_id, pay_schedule_id, pay_run_id, authorization, api_version)

Get employees from the pay run

Gets links to all employees included in the specified pay run.

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
    api_instance = openapi_client.EmployeeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    pay_schedule_id = 'pay_schedule_id_example' # str | The pay schedules' unique identifier. E.g SCH001
    pay_run_id = 'pay_run_id_example' # str | The pay runs' unique identifier. E.g. PR001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get employees from the pay run
        api_response = api_instance.get_employees_from_pay_run(employer_id, pay_schedule_id, pay_run_id, authorization, api_version)
        print("The response of EmployeeApi->get_employees_from_pay_run:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmployeeApi->get_employees_from_pay_run: %s\n" % e)
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

# **get_employees_from_pay_schedule**
> LinkCollection get_employees_from_pay_schedule(employer_id, pay_schedule_id, authorization, api_version)

Get all employees revisions from a pay schedule.

Gets links to all employee revisions that have ever existed in the specified pay schedule.

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
    api_instance = openapi_client.EmployeeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    pay_schedule_id = 'pay_schedule_id_example' # str | The pay schedules' unique identifier. E.g SCH001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get all employees revisions from a pay schedule.
        api_response = api_instance.get_employees_from_pay_schedule(employer_id, pay_schedule_id, authorization, api_version)
        print("The response of EmployeeApi->get_employees_from_pay_schedule:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmployeeApi->get_employees_from_pay_schedule: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **pay_schedule_id** | **str**| The pay schedules&#39; unique identifier. E.g SCH001 | 
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

# **get_employees_from_pay_schedule_on_effective_date**
> LinkCollection get_employees_from_pay_schedule_on_effective_date(employer_id, pay_schedule_id, effective_date, authorization, api_version)

Get employees from a pay schedule on effective date.

Gets links to all employee revisions in the specified pay schedule for the given effective date.

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
    api_instance = openapi_client.EmployeeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    pay_schedule_id = 'pay_schedule_id_example' # str | The pay schedules' unique identifier. E.g SCH001
    effective_date = '2013-10-20' # date | The effective date to be applied. E.g 2016-04-06
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get employees from a pay schedule on effective date.
        api_response = api_instance.get_employees_from_pay_schedule_on_effective_date(employer_id, pay_schedule_id, effective_date, authorization, api_version)
        print("The response of EmployeeApi->get_employees_from_pay_schedule_on_effective_date:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmployeeApi->get_employees_from_pay_schedule_on_effective_date: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **pay_schedule_id** | **str**| The pay schedules&#39; unique identifier. E.g SCH001 | 
 **effective_date** | **date**| The effective date to be applied. E.g 2016-04-06 | 
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

# **get_employees_with_tag_0**
> LinkCollection get_employees_with_tag_0(employer_id, tag_id, authorization, api_version)

Get employees with tag

Gets the employees with the tag

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
    api_instance = openapi_client.EmployeeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    tag_id = 'tag_id_example' # str | The tag unique identifier. E.g. MyTag
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get employees with tag
        api_response = api_instance.get_employees_with_tag_0(employer_id, tag_id, authorization, api_version)
        print("The response of EmployeeApi->get_employees_with_tag_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmployeeApi->get_employees_with_tag_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **tag_id** | **str**| The tag unique identifier. E.g. MyTag | 
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

# **get_pay_runs_from_employee_0**
> LinkCollection get_pay_runs_from_employee_0(employer_id, employee_id, authorization, api_version)

Gets the pay runs from the employee

Get links to all pay runs for the specified employee.

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
    api_instance = openapi_client.EmployeeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    employee_id = 'employee_id_example' # str | The employees' unique identifier. E.g EE001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Gets the pay runs from the employee
        api_response = api_instance.get_pay_runs_from_employee_0(employer_id, employee_id, authorization, api_version)
        print("The response of EmployeeApi->get_pay_runs_from_employee_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmployeeApi->get_pay_runs_from_employee_0: %s\n" % e)
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

# **patch_employee**
> Employee patch_employee(employer_id, employee_id, authorization, api_version, employee)

Patches the employee

Patches the specified employee with the supplied values

### Example


```python
import openapi_client
from openapi_client.models.employee import Employee
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
    api_instance = openapi_client.EmployeeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    employee_id = 'employee_id_example' # str | The employees' unique identifier. E.g EE001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')
    employee = openapi_client.Employee() # Employee | The employee object.

    try:
        # Patches the employee
        api_response = api_instance.patch_employee(employer_id, employee_id, authorization, api_version, employee)
        print("The response of EmployeeApi->patch_employee:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmployeeApi->patch_employee: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **employee_id** | **str**| The employees&#39; unique identifier. E.g EE001 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]
 **employee** | [**Employee**](Employee.md)| The employee object. | 

### Return type

[**Employee**](Employee.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The employee object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_employee_into_employer**
> Link post_employee_into_employer(employer_id, authorization, api_version, employee)

Create a new Employee

Create a new employee object

### Example


```python
import openapi_client
from openapi_client.models.employee import Employee
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
    api_instance = openapi_client.EmployeeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')
    employee = openapi_client.Employee() # Employee | The employee object.

    try:
        # Create a new Employee
        api_response = api_instance.post_employee_into_employer(employer_id, authorization, api_version, employee)
        print("The response of EmployeeApi->post_employee_into_employer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmployeeApi->post_employee_into_employer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]
 **employee** | [**Employee**](Employee.md)| The employee object. | 

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
**201** | The link object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_employee_secret**
> Link post_employee_secret(employer_id, employee_id, authorization, api_version)

Create a new employee secret

Create new employee secret using auto generated resource location key

### Example


```python
import openapi_client
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
    api_instance = openapi_client.EmployeeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    employee_id = 'employee_id_example' # str | The employees' unique identifier. E.g EE001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Create a new employee secret
        api_response = api_instance.post_employee_secret(employer_id, employee_id, authorization, api_version)
        print("The response of EmployeeApi->post_employee_secret:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmployeeApi->post_employee_secret: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **employee_id** | **str**| The employees&#39; unique identifier. E.g EE001 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

[**Link**](Link.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The link object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_employee_into_employer**
> Employee put_employee_into_employer(employer_id, employee_id, authorization, api_version, employee)

Updates the Employee

Updates the existing specified employee object

### Example


```python
import openapi_client
from openapi_client.models.employee import Employee
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
    api_instance = openapi_client.EmployeeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    employee_id = 'employee_id_example' # str | The employees' unique identifier. E.g EE001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')
    employee = openapi_client.Employee() # Employee | The employee object.

    try:
        # Updates the Employee
        api_response = api_instance.put_employee_into_employer(employer_id, employee_id, authorization, api_version, employee)
        print("The response of EmployeeApi->put_employee_into_employer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmployeeApi->put_employee_into_employer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **employee_id** | **str**| The employees&#39; unique identifier. E.g EE001 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]
 **employee** | [**Employee**](Employee.md)| The employee object. | 

### Return type

[**Employee**](Employee.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The employee object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_employee_secret**
> EmployeeSecret put_employee_secret(employer_id, employee_id, secret_id, authorization, api_version)

Create a new employee secret

Create / update an employee secret at the given resource location

### Example


```python
import openapi_client
from openapi_client.models.employee_secret import EmployeeSecret
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
    api_instance = openapi_client.EmployeeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    employee_id = 'employee_id_example' # str | The employees' unique identifier. E.g EE001
    secret_id = 'secret_id_example' # str | The secret unique identifier. E.g ERSEC001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Create a new employee secret
        api_response = api_instance.put_employee_secret(employer_id, employee_id, secret_id, authorization, api_version)
        print("The response of EmployeeApi->put_employee_secret:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmployeeApi->put_employee_secret: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **employee_id** | **str**| The employees&#39; unique identifier. E.g EE001 | 
 **secret_id** | **str**| The secret unique identifier. E.g ERSEC001 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

[**EmployeeSecret**](EmployeeSecret.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The employee secret object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

