# openapi_client.PayLineApi

All URIs are relative to *https://api.test.payrun.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_all_pay_line_tags_0**](PayLineApi.md#get_all_pay_line_tags_0) | **GET** /Employer/{EmployerId}/Employee/{EmployeeId}/PayLines/Tags | Get all pay line tags
[**get_pay_line_from_employee**](PayLineApi.md#get_pay_line_from_employee) | **GET** /Employer/{EmployerId}/Employee/{EmployeeId}/PayLine/{PayLineId} | Gets the specified pay line from the employee
[**get_pay_lines_from_employee**](PayLineApi.md#get_pay_lines_from_employee) | **GET** /Employer/{EmployerId}/Employee/{EmployeeId}/PayLines | Gets the pay lines from the specified employee
[**get_pay_lines_from_pay_run**](PayLineApi.md#get_pay_lines_from_pay_run) | **GET** /Employer/{EmployerId}/PaySchedule/{PayScheduleId}/PayRun/{PayRunId}/PayLines | Gets the pay lines from the specified pay run
[**get_pay_lines_with_tag_0**](PayLineApi.md#get_pay_lines_with_tag_0) | **GET** /Employer/{EmployerId}/Employee/{EmployeeId}/PayLines/Tag/{TagId} | Get pay lines with tag


# **get_all_pay_line_tags_0**
> LinkCollection get_all_pay_line_tags_0(employer_id, employee_id, authorization, api_version)

Get all pay line tags

Gets all the pay line tags

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
    api_instance = openapi_client.PayLineApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    employee_id = 'employee_id_example' # str | The employees' unique identifier. E.g EE001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get all pay line tags
        api_response = api_instance.get_all_pay_line_tags_0(employer_id, employee_id, authorization, api_version)
        print("The response of PayLineApi->get_all_pay_line_tags_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PayLineApi->get_all_pay_line_tags_0: %s\n" % e)
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

# **get_pay_line_from_employee**
> PayLine get_pay_line_from_employee(employer_id, employee_id, pay_line_id, authorization, api_version)

Gets the specified pay line from the employee

Returns the specified pay line from employee

### Example


```python
import openapi_client
from openapi_client.models.pay_line import PayLine
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
    api_instance = openapi_client.PayLineApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    employee_id = 'employee_id_example' # str | The employees' unique identifier. E.g EE001
    pay_line_id = 'pay_line_id_example' # str | The pay line unique identifier. E.g. PL001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Gets the specified pay line from the employee
        api_response = api_instance.get_pay_line_from_employee(employer_id, employee_id, pay_line_id, authorization, api_version)
        print("The response of PayLineApi->get_pay_line_from_employee:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PayLineApi->get_pay_line_from_employee: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **employee_id** | **str**| The employees&#39; unique identifier. E.g EE001 | 
 **pay_line_id** | **str**| The pay line unique identifier. E.g. PL001 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

[**PayLine**](PayLine.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The pay line object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_pay_lines_from_employee**
> LinkCollection get_pay_lines_from_employee(employer_id, employee_id, authorization, api_version)

Gets the pay lines from the specified employee

Get links to all pay lines for the specified employee

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
    api_instance = openapi_client.PayLineApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    employee_id = 'employee_id_example' # str | The employees' unique identifier. E.g EE001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Gets the pay lines from the specified employee
        api_response = api_instance.get_pay_lines_from_employee(employer_id, employee_id, authorization, api_version)
        print("The response of PayLineApi->get_pay_lines_from_employee:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PayLineApi->get_pay_lines_from_employee: %s\n" % e)
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

# **get_pay_lines_from_pay_run**
> LinkCollection get_pay_lines_from_pay_run(employer_id, pay_schedule_id, pay_run_id, authorization, api_version)

Gets the pay lines from the specified pay run

Get links to all pay lines for the specified pay run

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
    api_instance = openapi_client.PayLineApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    pay_schedule_id = 'pay_schedule_id_example' # str | The pay schedules' unique identifier. E.g SCH001
    pay_run_id = 'pay_run_id_example' # str | The pay runs' unique identifier. E.g. PR001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Gets the pay lines from the specified pay run
        api_response = api_instance.get_pay_lines_from_pay_run(employer_id, pay_schedule_id, pay_run_id, authorization, api_version)
        print("The response of PayLineApi->get_pay_lines_from_pay_run:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PayLineApi->get_pay_lines_from_pay_run: %s\n" % e)
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

# **get_pay_lines_with_tag_0**
> LinkCollection get_pay_lines_with_tag_0(employer_id, employee_id, tag_id, authorization, api_version)

Get pay lines with tag

Gets the pay line with the tag

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
    api_instance = openapi_client.PayLineApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    employee_id = 'employee_id_example' # str | The employees' unique identifier. E.g EE001
    tag_id = 'tag_id_example' # str | The tag unique identifier. E.g. MyTag
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get pay lines with tag
        api_response = api_instance.get_pay_lines_with_tag_0(employer_id, employee_id, tag_id, authorization, api_version)
        print("The response of PayLineApi->get_pay_lines_with_tag_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PayLineApi->get_pay_lines_with_tag_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **employee_id** | **str**| The employees&#39; unique identifier. E.g EE001 | 
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

