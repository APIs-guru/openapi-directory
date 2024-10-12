# openapi_client.JournalsApi

All URIs are relative to *https://api.test.payrun.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_journal_instruction**](JournalsApi.md#delete_journal_instruction) | **DELETE** /Employer/{EmployerId}/JournalInstruction/{JournalInstructionId} | Deletes a Journal instruction
[**delete_journal_instruction_template**](JournalsApi.md#delete_journal_instruction_template) | **DELETE** /JournalInstruction/{JournalInstructionId} | Deletes a Journal instruction template
[**get_journal_instruction_from_employer**](JournalsApi.md#get_journal_instruction_from_employer) | **GET** /Employer/{EmployerId}/JournalInstruction/{JournalInstructionId} | Gets the specified journal instruction from the employer
[**get_journal_instruction_template**](JournalsApi.md#get_journal_instruction_template) | **GET** /JournalInstruction/{JournalInstructionId} | Gets the Journal instructions template for the application
[**get_journal_instruction_templates**](JournalsApi.md#get_journal_instruction_templates) | **GET** /JournalInstructions | Gets the Journal instructions templates for the application
[**get_journal_instructions_from_employer**](JournalsApi.md#get_journal_instructions_from_employer) | **GET** /Employer/{EmployerId}/JournalInstructions | Gets the Journal instructions from the specified employer
[**get_journal_line_from_employer**](JournalsApi.md#get_journal_line_from_employer) | **GET** /Employer/{EmployerId}/JournalLine/{JournalLineId} | Gets the specified journal Line from the employer
[**get_journal_lines_from_employee**](JournalsApi.md#get_journal_lines_from_employee) | **GET** /Employer/{EmployerId}/Employee/{EmployeeId}/JournalLines | Gets the journal Lines from the specified employee
[**get_journal_lines_from_employer**](JournalsApi.md#get_journal_lines_from_employer) | **GET** /Employer/{EmployerId}/JournalLines | Gets the Journal Lines from the specified employer
[**get_journal_lines_from_pay_run**](JournalsApi.md#get_journal_lines_from_pay_run) | **GET** /Employer/{EmployerId}/PaySchedule/{PayScheduleId}/PayRun/{PayRunId}/JournalLines | Gets the journal Lines from the specified pay run
[**get_journal_lines_from_sub_contractor**](JournalsApi.md#get_journal_lines_from_sub_contractor) | **GET** /Employer/{EmployerId}/SubContractor/{SubContractorId}/JournalLines | Gets the journal Lines from the specified sub contractor
[**post_journal_instruction**](JournalsApi.md#post_journal_instruction) | **POST** /Employer/{EmployerId}/JournalInstructions | Creates a new Journal Instruction
[**post_journal_instruction_template**](JournalsApi.md#post_journal_instruction_template) | **POST** /JournalInstructions | Creates a new Journal Instruction template
[**put_journal_instruction**](JournalsApi.md#put_journal_instruction) | **PUT** /Employer/{EmployerId}/JournalInstruction/{JournalInstructionId} | Update a Journal Instruction
[**put_journal_instruction_template**](JournalsApi.md#put_journal_instruction_template) | **PUT** /JournalInstruction/{JournalInstructionId} | Update a Journal Instruction template


# **delete_journal_instruction**
> delete_journal_instruction(employer_id, journal_instruction_id, authorization, api_version)

Deletes a Journal instruction

Delete the specified Journal instruction

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
    api_instance = openapi_client.JournalsApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    journal_instruction_id = 'journal_instruction_id_example' # str | The journal instruction unique identifier. E.g JI001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Deletes a Journal instruction
        api_instance.delete_journal_instruction(employer_id, journal_instruction_id, authorization, api_version)
    except Exception as e:
        print("Exception when calling JournalsApi->delete_journal_instruction: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **journal_instruction_id** | **str**| The journal instruction unique identifier. E.g JI001 | 
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

# **delete_journal_instruction_template**
> delete_journal_instruction_template(journal_instruction_id, authorization, api_version)

Deletes a Journal instruction template

Delete the specified Journal instruction template object

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
    api_instance = openapi_client.JournalsApi(api_client)
    journal_instruction_id = 'journal_instruction_id_example' # str | The journal instruction unique identifier. E.g JI001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Deletes a Journal instruction template
        api_instance.delete_journal_instruction_template(journal_instruction_id, authorization, api_version)
    except Exception as e:
        print("Exception when calling JournalsApi->delete_journal_instruction_template: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **journal_instruction_id** | **str**| The journal instruction unique identifier. E.g JI001 | 
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

# **get_journal_instruction_from_employer**
> JournalInstruction get_journal_instruction_from_employer(employer_id, journal_instruction_id, authorization, api_version)

Gets the specified journal instruction from the employer

Returns the specified journal instruction from employer

### Example


```python
import openapi_client
from openapi_client.models.journal_instruction import JournalInstruction
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
    api_instance = openapi_client.JournalsApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    journal_instruction_id = 'journal_instruction_id_example' # str | The journal instruction unique identifier. E.g JI001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Gets the specified journal instruction from the employer
        api_response = api_instance.get_journal_instruction_from_employer(employer_id, journal_instruction_id, authorization, api_version)
        print("The response of JournalsApi->get_journal_instruction_from_employer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JournalsApi->get_journal_instruction_from_employer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **journal_instruction_id** | **str**| The journal instruction unique identifier. E.g JI001 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

[**JournalInstruction**](JournalInstruction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The journal instruction object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_journal_instruction_template**
> JournalInstruction get_journal_instruction_template(journal_instruction_id, authorization, api_version)

Gets the Journal instructions template for the application

Retrurns the specified journal instruction from the application

### Example


```python
import openapi_client
from openapi_client.models.journal_instruction import JournalInstruction
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
    api_instance = openapi_client.JournalsApi(api_client)
    journal_instruction_id = 'journal_instruction_id_example' # str | The journal instruction unique identifier. E.g JI001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Gets the Journal instructions template for the application
        api_response = api_instance.get_journal_instruction_template(journal_instruction_id, authorization, api_version)
        print("The response of JournalsApi->get_journal_instruction_template:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JournalsApi->get_journal_instruction_template: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **journal_instruction_id** | **str**| The journal instruction unique identifier. E.g JI001 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

[**JournalInstruction**](JournalInstruction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The journal instruction object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_journal_instruction_templates**
> LinkCollection get_journal_instruction_templates(authorization, api_version)

Gets the Journal instructions templates for the application

Get links to all journal instruction templates for the application

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
    api_instance = openapi_client.JournalsApi(api_client)
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Gets the Journal instructions templates for the application
        api_response = api_instance.get_journal_instruction_templates(authorization, api_version)
        print("The response of JournalsApi->get_journal_instruction_templates:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JournalsApi->get_journal_instruction_templates: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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

# **get_journal_instructions_from_employer**
> LinkCollection get_journal_instructions_from_employer(employer_id, authorization, api_version)

Gets the Journal instructions from the specified employer

Get links to all journal instructions for the specified employer

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
    api_instance = openapi_client.JournalsApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Gets the Journal instructions from the specified employer
        api_response = api_instance.get_journal_instructions_from_employer(employer_id, authorization, api_version)
        print("The response of JournalsApi->get_journal_instructions_from_employer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JournalsApi->get_journal_instructions_from_employer: %s\n" % e)
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

# **get_journal_line_from_employer**
> JournalLine get_journal_line_from_employer(employer_id, journal_line_id, authorization, api_version)

Gets the specified journal Line from the employer

Returns the specified journal Line from employer

### Example


```python
import openapi_client
from openapi_client.models.journal_line import JournalLine
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
    api_instance = openapi_client.JournalsApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    journal_line_id = 'journal_line_id_example' # str | The journal line unique identifier. E.g JL001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Gets the specified journal Line from the employer
        api_response = api_instance.get_journal_line_from_employer(employer_id, journal_line_id, authorization, api_version)
        print("The response of JournalsApi->get_journal_line_from_employer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JournalsApi->get_journal_line_from_employer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **journal_line_id** | **str**| The journal line unique identifier. E.g JL001 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

[**JournalLine**](JournalLine.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The journal line object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_journal_lines_from_employee**
> LinkCollection get_journal_lines_from_employee(employer_id, employee_id, authorization, api_version)

Gets the journal Lines from the specified employee

Get links to all journal lines for the specified employee

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
    api_instance = openapi_client.JournalsApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    employee_id = 'employee_id_example' # str | The employees' unique identifier. E.g EE001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Gets the journal Lines from the specified employee
        api_response = api_instance.get_journal_lines_from_employee(employer_id, employee_id, authorization, api_version)
        print("The response of JournalsApi->get_journal_lines_from_employee:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JournalsApi->get_journal_lines_from_employee: %s\n" % e)
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

# **get_journal_lines_from_employer**
> LinkCollection get_journal_lines_from_employer(employer_id, authorization, api_version)

Gets the Journal Lines from the specified employer

Get links to all journal Lines for the specified employer

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
    api_instance = openapi_client.JournalsApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Gets the Journal Lines from the specified employer
        api_response = api_instance.get_journal_lines_from_employer(employer_id, authorization, api_version)
        print("The response of JournalsApi->get_journal_lines_from_employer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JournalsApi->get_journal_lines_from_employer: %s\n" % e)
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

# **get_journal_lines_from_pay_run**
> LinkCollection get_journal_lines_from_pay_run(employer_id, pay_schedule_id, pay_run_id, authorization, api_version)

Gets the journal Lines from the specified pay run

Get links to all journal lines for the specified pay run

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
    api_instance = openapi_client.JournalsApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    pay_schedule_id = 'pay_schedule_id_example' # str | The pay schedules' unique identifier. E.g SCH001
    pay_run_id = 'pay_run_id_example' # str | The pay runs' unique identifier. E.g. PR001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Gets the journal Lines from the specified pay run
        api_response = api_instance.get_journal_lines_from_pay_run(employer_id, pay_schedule_id, pay_run_id, authorization, api_version)
        print("The response of JournalsApi->get_journal_lines_from_pay_run:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JournalsApi->get_journal_lines_from_pay_run: %s\n" % e)
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

# **get_journal_lines_from_sub_contractor**
> LinkCollection get_journal_lines_from_sub_contractor(employer_id, sub_contractor_id, authorization, api_version)

Gets the journal Lines from the specified sub contractor

Get links to all journal lines for the specified sub contractor

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
    api_instance = openapi_client.JournalsApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    sub_contractor_id = 'sub_contractor_id_example' # str | The sub contractors' unique identifier. E.g SUB001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Gets the journal Lines from the specified sub contractor
        api_response = api_instance.get_journal_lines_from_sub_contractor(employer_id, sub_contractor_id, authorization, api_version)
        print("The response of JournalsApi->get_journal_lines_from_sub_contractor:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JournalsApi->get_journal_lines_from_sub_contractor: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **sub_contractor_id** | **str**| The sub contractors&#39; unique identifier. E.g SUB001 | 
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

# **post_journal_instruction**
> Link post_journal_instruction(employer_id, authorization, api_version)

Creates a new Journal Instruction

Creates a new Journal instruction object

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
    api_instance = openapi_client.JournalsApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Creates a new Journal Instruction
        api_response = api_instance.post_journal_instruction(employer_id, authorization, api_version)
        print("The response of JournalsApi->post_journal_instruction:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JournalsApi->post_journal_instruction: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
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

# **post_journal_instruction_template**
> Link post_journal_instruction_template(authorization, api_version)

Creates a new Journal Instruction template

Creates a new Journal instruction teamplte object

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
    api_instance = openapi_client.JournalsApi(api_client)
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Creates a new Journal Instruction template
        api_response = api_instance.post_journal_instruction_template(authorization, api_version)
        print("The response of JournalsApi->post_journal_instruction_template:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JournalsApi->post_journal_instruction_template: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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

# **put_journal_instruction**
> JournalInstruction put_journal_instruction(employer_id, journal_instruction_id, authorization, api_version)

Update a Journal Instruction

Updates the existing specified Journal instruction object

### Example


```python
import openapi_client
from openapi_client.models.journal_instruction import JournalInstruction
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
    api_instance = openapi_client.JournalsApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    journal_instruction_id = 'journal_instruction_id_example' # str | The journal instruction unique identifier. E.g JI001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Update a Journal Instruction
        api_response = api_instance.put_journal_instruction(employer_id, journal_instruction_id, authorization, api_version)
        print("The response of JournalsApi->put_journal_instruction:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JournalsApi->put_journal_instruction: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **journal_instruction_id** | **str**| The journal instruction unique identifier. E.g JI001 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

[**JournalInstruction**](JournalInstruction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The journal instruction object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_journal_instruction_template**
> JournalInstruction put_journal_instruction_template(journal_instruction_id, authorization, api_version)

Update a Journal Instruction template

Updates the existing specified Journal instruction template object

### Example


```python
import openapi_client
from openapi_client.models.journal_instruction import JournalInstruction
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
    api_instance = openapi_client.JournalsApi(api_client)
    journal_instruction_id = 'journal_instruction_id_example' # str | The journal instruction unique identifier. E.g JI001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Update a Journal Instruction template
        api_response = api_instance.put_journal_instruction_template(journal_instruction_id, authorization, api_version)
        print("The response of JournalsApi->put_journal_instruction_template:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JournalsApi->put_journal_instruction_template: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **journal_instruction_id** | **str**| The journal instruction unique identifier. E.g JI001 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

[**JournalInstruction**](JournalInstruction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The journal instruction object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

