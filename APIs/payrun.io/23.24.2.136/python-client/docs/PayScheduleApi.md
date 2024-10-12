# openapi_client.PayScheduleApi

All URIs are relative to *https://api.test.payrun.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_pay_schedule**](PayScheduleApi.md#delete_pay_schedule) | **DELETE** /Employer/{EmployerId}/PaySchedule/{PayScheduleId} | Deletes a pay schedule
[**get_all_pay_schedule_tags_0**](PayScheduleApi.md#get_all_pay_schedule_tags_0) | **GET** /Employer/{EmployerId}/PaySchedules/Tags | Get all pay schedule tags
[**get_employees_from_pay_schedule_0**](PayScheduleApi.md#get_employees_from_pay_schedule_0) | **GET** /Employer/{EmployerId}/PaySchedule/{PayScheduleId}/Employees | Get all employees revisions from a pay schedule.
[**get_employees_from_pay_schedule_on_effective_date_0**](PayScheduleApi.md#get_employees_from_pay_schedule_on_effective_date_0) | **GET** /Employer/{EmployerId}/PaySchedule/{PayScheduleId}/Employees/{EffectiveDate} | Get employees from a pay schedule on effective date.
[**get_pay_run_from_pay_schedule_0**](PayScheduleApi.md#get_pay_run_from_pay_schedule_0) | **GET** /Employer/{EmployerId}/PaySchedule/{PayScheduleId}/PayRun/{PayRunId} | Gets the pay run from the pay schedule
[**get_pay_runs_from_pay_schedule_0**](PayScheduleApi.md#get_pay_runs_from_pay_schedule_0) | **GET** /Employer/{EmployerId}/PaySchedule/{PayScheduleId}/PayRuns | Gets the pay runs from the pay schedule
[**get_pay_schedule_from_employer**](PayScheduleApi.md#get_pay_schedule_from_employer) | **GET** /Employer/{EmployerId}/PaySchedule/{PayScheduleId} | Gets the specified pay schedule from the employer
[**get_pay_schedules_from_employer**](PayScheduleApi.md#get_pay_schedules_from_employer) | **GET** /Employer/{EmployerId}/PaySchedules | Gets the pay schedule from the specified employer
[**get_pay_schedules_with_tag_0**](PayScheduleApi.md#get_pay_schedules_with_tag_0) | **GET** /Employer/{EmployerId}/PaySchedules/Tag/{TagId} | Get pay schedule with tag
[**post_pay_schedule**](PayScheduleApi.md#post_pay_schedule) | **POST** /Employer/{EmployerId}/PaySchedules | Create a new pay schedule
[**put_pay_schedule**](PayScheduleApi.md#put_pay_schedule) | **PUT** /Employer/{EmployerId}/PaySchedule/{PayScheduleId} | Updates a pay schedule


# **delete_pay_schedule**
> delete_pay_schedule(employer_id, pay_schedule_id, authorization, api_version)

Deletes a pay schedule

Delete the specified pay schedule

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
    api_instance = openapi_client.PayScheduleApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    pay_schedule_id = 'pay_schedule_id_example' # str | The pay schedules' unique identifier. E.g SCH001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Deletes a pay schedule
        api_instance.delete_pay_schedule(employer_id, pay_schedule_id, authorization, api_version)
    except Exception as e:
        print("Exception when calling PayScheduleApi->delete_pay_schedule: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **pay_schedule_id** | **str**| The pay schedules&#39; unique identifier. E.g SCH001 | 
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

# **get_all_pay_schedule_tags_0**
> LinkCollection get_all_pay_schedule_tags_0(employer_id, authorization, api_version)

Get all pay schedule tags

Gets all the pay schedule tags

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
    api_instance = openapi_client.PayScheduleApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get all pay schedule tags
        api_response = api_instance.get_all_pay_schedule_tags_0(employer_id, authorization, api_version)
        print("The response of PayScheduleApi->get_all_pay_schedule_tags_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PayScheduleApi->get_all_pay_schedule_tags_0: %s\n" % e)
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

# **get_employees_from_pay_schedule_0**
> LinkCollection get_employees_from_pay_schedule_0(employer_id, pay_schedule_id, authorization, api_version)

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
    api_instance = openapi_client.PayScheduleApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    pay_schedule_id = 'pay_schedule_id_example' # str | The pay schedules' unique identifier. E.g SCH001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get all employees revisions from a pay schedule.
        api_response = api_instance.get_employees_from_pay_schedule_0(employer_id, pay_schedule_id, authorization, api_version)
        print("The response of PayScheduleApi->get_employees_from_pay_schedule_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PayScheduleApi->get_employees_from_pay_schedule_0: %s\n" % e)
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

# **get_employees_from_pay_schedule_on_effective_date_0**
> LinkCollection get_employees_from_pay_schedule_on_effective_date_0(employer_id, pay_schedule_id, effective_date, authorization, api_version)

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
    api_instance = openapi_client.PayScheduleApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    pay_schedule_id = 'pay_schedule_id_example' # str | The pay schedules' unique identifier. E.g SCH001
    effective_date = '2013-10-20' # date | The effective date to be applied. E.g 2016-04-06
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get employees from a pay schedule on effective date.
        api_response = api_instance.get_employees_from_pay_schedule_on_effective_date_0(employer_id, pay_schedule_id, effective_date, authorization, api_version)
        print("The response of PayScheduleApi->get_employees_from_pay_schedule_on_effective_date_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PayScheduleApi->get_employees_from_pay_schedule_on_effective_date_0: %s\n" % e)
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

# **get_pay_run_from_pay_schedule_0**
> PayRun get_pay_run_from_pay_schedule_0(employer_id, pay_schedule_id, pay_run_id, authorization, api_version)

Gets the pay run from the pay schedule

Returns the pay run from the pay schedule

### Example


```python
import openapi_client
from openapi_client.models.pay_run import PayRun
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
    api_instance = openapi_client.PayScheduleApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    pay_schedule_id = 'pay_schedule_id_example' # str | The pay schedules' unique identifier. E.g SCH001
    pay_run_id = 'pay_run_id_example' # str | The pay runs' unique identifier. E.g. PR001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Gets the pay run from the pay schedule
        api_response = api_instance.get_pay_run_from_pay_schedule_0(employer_id, pay_schedule_id, pay_run_id, authorization, api_version)
        print("The response of PayScheduleApi->get_pay_run_from_pay_schedule_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PayScheduleApi->get_pay_run_from_pay_schedule_0: %s\n" % e)
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

[**PayRun**](PayRun.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The pay run object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_pay_runs_from_pay_schedule_0**
> LinkCollection get_pay_runs_from_pay_schedule_0(employer_id, pay_schedule_id, authorization, api_version)

Gets the pay runs from the pay schedule

Get links to all pay runs for the specified pay schedule

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
    api_instance = openapi_client.PayScheduleApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    pay_schedule_id = 'pay_schedule_id_example' # str | The pay schedules' unique identifier. E.g SCH001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Gets the pay runs from the pay schedule
        api_response = api_instance.get_pay_runs_from_pay_schedule_0(employer_id, pay_schedule_id, authorization, api_version)
        print("The response of PayScheduleApi->get_pay_runs_from_pay_schedule_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PayScheduleApi->get_pay_runs_from_pay_schedule_0: %s\n" % e)
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

# **get_pay_schedule_from_employer**
> PaySchedule get_pay_schedule_from_employer(employer_id, pay_schedule_id, authorization, api_version)

Gets the specified pay schedule from the employer

Returns the specified pay schedule object from employer

### Example


```python
import openapi_client
from openapi_client.models.pay_schedule import PaySchedule
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
    api_instance = openapi_client.PayScheduleApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    pay_schedule_id = 'pay_schedule_id_example' # str | The pay schedules' unique identifier. E.g SCH001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Gets the specified pay schedule from the employer
        api_response = api_instance.get_pay_schedule_from_employer(employer_id, pay_schedule_id, authorization, api_version)
        print("The response of PayScheduleApi->get_pay_schedule_from_employer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PayScheduleApi->get_pay_schedule_from_employer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **pay_schedule_id** | **str**| The pay schedules&#39; unique identifier. E.g SCH001 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

[**PaySchedule**](PaySchedule.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The pay schedule object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_pay_schedules_from_employer**
> LinkCollection get_pay_schedules_from_employer(employer_id, authorization, api_version)

Gets the pay schedule from the specified employer

Get links to all pay schedules for the specified employer

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
    api_instance = openapi_client.PayScheduleApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Gets the pay schedule from the specified employer
        api_response = api_instance.get_pay_schedules_from_employer(employer_id, authorization, api_version)
        print("The response of PayScheduleApi->get_pay_schedules_from_employer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PayScheduleApi->get_pay_schedules_from_employer: %s\n" % e)
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

# **get_pay_schedules_with_tag_0**
> LinkCollection get_pay_schedules_with_tag_0(employer_id, tag_id, authorization, api_version)

Get pay schedule with tag

Gets the pay schedules with the tag

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
    api_instance = openapi_client.PayScheduleApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    tag_id = 'tag_id_example' # str | The tag unique identifier. E.g. MyTag
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get pay schedule with tag
        api_response = api_instance.get_pay_schedules_with_tag_0(employer_id, tag_id, authorization, api_version)
        print("The response of PayScheduleApi->get_pay_schedules_with_tag_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PayScheduleApi->get_pay_schedules_with_tag_0: %s\n" % e)
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

# **post_pay_schedule**
> Link post_pay_schedule(employer_id, authorization, api_version, pay_schedule)

Create a new pay schedule

Create a new pay schedule object

### Example


```python
import openapi_client
from openapi_client.models.link import Link
from openapi_client.models.pay_schedule import PaySchedule
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
    api_instance = openapi_client.PayScheduleApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')
    pay_schedule = openapi_client.PaySchedule() # PaySchedule | The pay schedule object.

    try:
        # Create a new pay schedule
        api_response = api_instance.post_pay_schedule(employer_id, authorization, api_version, pay_schedule)
        print("The response of PayScheduleApi->post_pay_schedule:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PayScheduleApi->post_pay_schedule: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]
 **pay_schedule** | [**PaySchedule**](PaySchedule.md)| The pay schedule object. | 

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

# **put_pay_schedule**
> PaySchedule put_pay_schedule(employer_id, pay_schedule_id, authorization, api_version, pay_schedule)

Updates a pay schedule

Updates the existing specified pay schedule object

### Example


```python
import openapi_client
from openapi_client.models.pay_schedule import PaySchedule
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
    api_instance = openapi_client.PayScheduleApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    pay_schedule_id = 'pay_schedule_id_example' # str | The pay schedules' unique identifier. E.g SCH001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')
    pay_schedule = openapi_client.PaySchedule() # PaySchedule | The pay schedule object.

    try:
        # Updates a pay schedule
        api_response = api_instance.put_pay_schedule(employer_id, pay_schedule_id, authorization, api_version, pay_schedule)
        print("The response of PayScheduleApi->put_pay_schedule:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PayScheduleApi->put_pay_schedule: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **pay_schedule_id** | **str**| The pay schedules&#39; unique identifier. E.g SCH001 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]
 **pay_schedule** | [**PaySchedule**](PaySchedule.md)| The pay schedule object. | 

### Return type

[**PaySchedule**](PaySchedule.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The pay schedule object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

