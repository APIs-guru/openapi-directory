# openapi_client.ReportLineInstructionApi

All URIs are relative to *https://api.test.payrun.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_reporting_instruction**](ReportLineInstructionApi.md#delete_reporting_instruction) | **DELETE** /Employer/{EmployerId}/ReportingInstruction/{ReportingInstructionId} | Deletes a reporting instruction
[**get_reporting_instruction_from_employer**](ReportLineInstructionApi.md#get_reporting_instruction_from_employer) | **GET** /Employer/{EmployerId}/ReportingInstruction/{ReportingInstructionId} | Gets the specified reporting instruction from the employer
[**get_reporting_instructions_from_employer**](ReportLineInstructionApi.md#get_reporting_instructions_from_employer) | **GET** /Employer/{EmployerId}/ReportingInstructions | Gets the reporting instructions from the specified employer
[**post_reporting_instruction**](ReportLineInstructionApi.md#post_reporting_instruction) | **POST** /Employer/{EmployerId}/ReportingInstructions | Creates a new Reporting Instruction
[**put_reporting_instruction**](ReportLineInstructionApi.md#put_reporting_instruction) | **PUT** /Employer/{EmployerId}/ReportingInstruction/{ReportingInstructionId} | Update a reporting Instruction


# **delete_reporting_instruction**
> delete_reporting_instruction(employer_id, reporting_instruction_id, authorization, api_version)

Deletes a reporting instruction

Delete the specified reporting instruction

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
    api_instance = openapi_client.ReportLineInstructionApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    reporting_instruction_id = 'reporting_instruction_id_example' # str | The reporting instruction unique identifier. E.g. SERRPT001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Deletes a reporting instruction
        api_instance.delete_reporting_instruction(employer_id, reporting_instruction_id, authorization, api_version)
    except Exception as e:
        print("Exception when calling ReportLineInstructionApi->delete_reporting_instruction: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **reporting_instruction_id** | **str**| The reporting instruction unique identifier. E.g. SERRPT001 | 
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

# **get_reporting_instruction_from_employer**
> ReportingInstruction get_reporting_instruction_from_employer(employer_id, reporting_instruction_id, authorization, api_version)

Gets the specified reporting instruction from the employer

Returns the specified pay instruction from employee

### Example


```python
import openapi_client
from openapi_client.models.reporting_instruction import ReportingInstruction
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
    api_instance = openapi_client.ReportLineInstructionApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    reporting_instruction_id = 'reporting_instruction_id_example' # str | The reporting instruction unique identifier. E.g. SERRPT001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Gets the specified reporting instruction from the employer
        api_response = api_instance.get_reporting_instruction_from_employer(employer_id, reporting_instruction_id, authorization, api_version)
        print("The response of ReportLineInstructionApi->get_reporting_instruction_from_employer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportLineInstructionApi->get_reporting_instruction_from_employer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **reporting_instruction_id** | **str**| The reporting instruction unique identifier. E.g. SERRPT001 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

[**ReportingInstruction**](ReportingInstruction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The reporting instruction object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_reporting_instructions_from_employer**
> LinkCollection get_reporting_instructions_from_employer(employer_id, authorization, api_version)

Gets the reporting instructions from the specified employer

Get links to all pay instructions for the specified employee

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
    api_instance = openapi_client.ReportLineInstructionApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Gets the reporting instructions from the specified employer
        api_response = api_instance.get_reporting_instructions_from_employer(employer_id, authorization, api_version)
        print("The response of ReportLineInstructionApi->get_reporting_instructions_from_employer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportLineInstructionApi->get_reporting_instructions_from_employer: %s\n" % e)
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

# **post_reporting_instruction**
> Link post_reporting_instruction(employer_id, authorization, api_version, reporting_instruction)

Creates a new Reporting Instruction

Creates a new reporting instruction object

### Example


```python
import openapi_client
from openapi_client.models.link import Link
from openapi_client.models.reporting_instruction import ReportingInstruction
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
    api_instance = openapi_client.ReportLineInstructionApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')
    reporting_instruction = openapi_client.ReportingInstruction() # ReportingInstruction | The reporting instruction object.

    try:
        # Creates a new Reporting Instruction
        api_response = api_instance.post_reporting_instruction(employer_id, authorization, api_version, reporting_instruction)
        print("The response of ReportLineInstructionApi->post_reporting_instruction:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportLineInstructionApi->post_reporting_instruction: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]
 **reporting_instruction** | [**ReportingInstruction**](ReportingInstruction.md)| The reporting instruction object. | 

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

# **put_reporting_instruction**
> ReportingInstruction put_reporting_instruction(employer_id, reporting_instruction_id, authorization, api_version, reporting_instruction)

Update a reporting Instruction

Updates the existing specified reporting instruction object

### Example


```python
import openapi_client
from openapi_client.models.reporting_instruction import ReportingInstruction
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
    api_instance = openapi_client.ReportLineInstructionApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    reporting_instruction_id = 'reporting_instruction_id_example' # str | The reporting instruction unique identifier. E.g. SERRPT001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')
    reporting_instruction = openapi_client.ReportingInstruction() # ReportingInstruction | The reporting instruction object.

    try:
        # Update a reporting Instruction
        api_response = api_instance.put_reporting_instruction(employer_id, reporting_instruction_id, authorization, api_version, reporting_instruction)
        print("The response of ReportLineInstructionApi->put_reporting_instruction:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportLineInstructionApi->put_reporting_instruction: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **reporting_instruction_id** | **str**| The reporting instruction unique identifier. E.g. SERRPT001 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]
 **reporting_instruction** | [**ReportingInstruction**](ReportingInstruction.md)| The reporting instruction object. | 

### Return type

[**ReportingInstruction**](ReportingInstruction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The reporting instruction object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

