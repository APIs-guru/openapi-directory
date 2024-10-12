# openapi_client.CISApi

All URIs are relative to *https://api.test.payrun.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_cis_instruction**](CISApi.md#delete_cis_instruction) | **DELETE** /Employer/{EmployerId}/SubContractor/{SubContractorId}/CisInstruction/{CisInstructionId} | Delete a CIS instruction
[**delete_cis_instruction_tag_0**](CISApi.md#delete_cis_instruction_tag_0) | **DELETE** /Employer/{EmployerId}/SubContractor/{SubContractorId}/CisInstruction/{CisInstructionId}/Tag/{TagId} | Delete CIS instruction tag
[**delete_cis_line**](CISApi.md#delete_cis_line) | **DELETE** /Employer/{EmployerId}/SubContractor/{SubContractorId}/CisLine/{CisLineId} | Delete a CIS line
[**delete_cis_line_tag_0**](CISApi.md#delete_cis_line_tag_0) | **DELETE** /Employer/{EmployerId}/SubContractor/{SubContractorId}/CisLine/{CisLineId}/Tag/{TagId} | Delete CIS line tag
[**delete_cis_line_type**](CISApi.md#delete_cis_line_type) | **DELETE** /Employer/{EmployerId}/CisLineType/{CisLineTypeId} | Delete an CIS line type
[**delete_cis_line_type_tag_0**](CISApi.md#delete_cis_line_type_tag_0) | **DELETE** /Employer/{EmployerId}/CisLineType/{CisLineTypeId}/Tag/{TagId} | Delete CIS line type tag
[**delete_cis_transaction**](CISApi.md#delete_cis_transaction) | **DELETE** /Employer/{EmployerId}/CisTransaction/{CisTransactionId} | Delete the CIS transaction
[**delete_sub_contractor_tag_0**](CISApi.md#delete_sub_contractor_tag_0) | **DELETE** /Employer/{EmployerId}/SubContractor/{SubContractorId}/Tag/{TagId} | Delete sub contractor tag
[**get_all_cis_instruction_tags_0**](CISApi.md#get_all_cis_instruction_tags_0) | **GET** /Employer/{EmployerId}/SubContractor/{SubContractorId}/CisInstructions/Tags | Get all CIS instruction tags
[**get_all_cis_line_tags_0**](CISApi.md#get_all_cis_line_tags_0) | **GET** /Employer/{EmployerId}/SubContractor/{SubContractorId}/CisLines/Tags | Get all CIS line tags
[**get_all_cis_line_type_tags_0**](CISApi.md#get_all_cis_line_type_tags_0) | **GET** /Employer/{EmployerId}/CisLineTypes/Tags | Get all CIS line type tags
[**get_all_sub_contractor_tags_0**](CISApi.md#get_all_sub_contractor_tags_0) | **GET** /Employer/{EmployerId}/SubContractors/Tags | Get all sub contractor tags
[**get_cis_instruction_from_sub_contractor**](CISApi.md#get_cis_instruction_from_sub_contractor) | **GET** /Employer/{EmployerId}/SubContractor/{SubContractorId}/CisInstruction/{CisInstructionId} | Get CIS instruction from sub contractor
[**get_cis_instructions_from_sub_contractor**](CISApi.md#get_cis_instructions_from_sub_contractor) | **GET** /Employer/{EmployerId}/SubContractor/{SubContractorId}/CisInstructions | Get CIS instructions from sub contractor.
[**get_cis_instructions_with_tag_0**](CISApi.md#get_cis_instructions_with_tag_0) | **GET** /Employer/{EmployerId}/SubContractor/{SubContractorId}/CisInstructions/Tag/{TagId} | Get CIS instructions with tag
[**get_cis_line_from_sub_contractor**](CISApi.md#get_cis_line_from_sub_contractor) | **GET** /Employer/{EmployerId}/SubContractor/{SubContractorId}/CisLine/{CisLineId} | Get CIS line from sub contractor
[**get_cis_line_type_from_employer**](CISApi.md#get_cis_line_type_from_employer) | **GET** /Employer/{EmployerId}/CisLineType/{CisLineTypeId} | Get CIS line type from employer
[**get_cis_line_types_from_employer**](CISApi.md#get_cis_line_types_from_employer) | **GET** /Employer/{EmployerId}/CisLineTypes | Get CIS line types from employer.
[**get_cis_line_types_with_tag_0**](CISApi.md#get_cis_line_types_with_tag_0) | **GET** /Employer/{EmployerId}/CisLineTypes/Tag/{TagId} | Get CIS line types with tag
[**get_cis_lines_from_sub_contractor**](CISApi.md#get_cis_lines_from_sub_contractor) | **GET** /Employer/{EmployerId}/SubContractor/{SubContractorId}/CisLines | Get CIS lines from sub contractor.
[**get_cis_lines_with_tag_0**](CISApi.md#get_cis_lines_with_tag_0) | **GET** /Employer/{EmployerId}/SubContractor/{SubContractorId}/CisLines/Tag/{TagId} | Get CIS lines with tag
[**get_cis_transaction_from_employer**](CISApi.md#get_cis_transaction_from_employer) | **GET** /Employer/{EmployerId}/CisTransaction/{CisTransactionId} | Get the CIS transaction
[**get_cis_transactions_from_employer**](CISApi.md#get_cis_transactions_from_employer) | **GET** /Employer/{EmployerId}/CisTransactions | Get all CIS transactions for the employer
[**get_sub_contractors_with_tag_0**](CISApi.md#get_sub_contractors_with_tag_0) | **GET** /Employer/{EmployerId}/SubContractors/Tag/{TagId} | Get sub contractors with tag
[**get_tag_from_cis_instruction_0**](CISApi.md#get_tag_from_cis_instruction_0) | **GET** /Employer/{EmployerId}/SubContractor/{SubContractorId}/CisInstruction/{CisInstructionId}/Tag/{TagId} | Get CIS instruction tag
[**get_tag_from_cis_line_0**](CISApi.md#get_tag_from_cis_line_0) | **GET** /Employer/{EmployerId}/SubContractor/{SubContractorId}/CisLine/{CisLineId}/Tag/{TagId} | Get CIS line tag
[**get_tag_from_cis_line_type_0**](CISApi.md#get_tag_from_cis_line_type_0) | **GET** /Employer/{EmployerId}/CisLineType/{CisLineTypeId}/Tag/{TagId} | Get CIS line type tag
[**get_tag_from_sub_contractor_0**](CISApi.md#get_tag_from_sub_contractor_0) | **GET** /Employer/{EmployerId}/SubContractor/{SubContractorId}/Tag/{TagId} | Get sub contractor tag
[**get_tag_from_sub_contractor_revision_0**](CISApi.md#get_tag_from_sub_contractor_revision_0) | **GET** /Employer/{EmployerId}/SubContractor/{SubContractorId}/Tag/{TagId}/{EffectiveDate} | Get sub contractor revision tag
[**get_tags_from_cis_instruction_0**](CISApi.md#get_tags_from_cis_instruction_0) | **GET** /Employer/{EmployerId}/SubContractor/{SubContractorId}/CisInstruction/{CisInstructionId}/Tags | Get all tags from the CIS instruction
[**get_tags_from_cis_line_0**](CISApi.md#get_tags_from_cis_line_0) | **GET** /Employer/{EmployerId}/SubContractor/{SubContractorId}/CisLine/{CisLineId}/Tags | Get all tags from the CIS line
[**get_tags_from_cis_line_type_0**](CISApi.md#get_tags_from_cis_line_type_0) | **GET** /Employer/{EmployerId}/CisLineType/{CisLineTypeId}/Tags | Get all tags from the CIS line type
[**get_tags_from_sub_contractor_0**](CISApi.md#get_tags_from_sub_contractor_0) | **GET** /Employer/{EmployerId}/SubContractor/{SubContractorId}/Tags | Get all tags from the sub contractor
[**get_tags_from_sub_contractor_revision_0**](CISApi.md#get_tags_from_sub_contractor_revision_0) | **GET** /Employer/{EmployerId}/SubContractor/{SubContractorId}/Tags/{EffectiveDate} | Get all sub contractor revision tags
[**patch_cis_instruction**](CISApi.md#patch_cis_instruction) | **PATCH** /Employer/{EmployerId}/SubContractor/{SubContractorId}/CisInstruction/{CisInstructionId} | Patches the CIS instruction
[**post_cis_instruction_into_sub_contractor**](CISApi.md#post_cis_instruction_into_sub_contractor) | **POST** /Employer/{EmployerId}/SubContractor/{SubContractorId}/CisInstructions | Create a new CIS instruction
[**post_cis_line_type_into_employer**](CISApi.md#post_cis_line_type_into_employer) | **POST** /Employer/{EmployerId}/CisLineTypes | Create a new CIS line type
[**put_cis_instruction_into_sub_contractor**](CISApi.md#put_cis_instruction_into_sub_contractor) | **PUT** /Employer/{EmployerId}/SubContractor/{SubContractorId}/CisInstruction/{CisInstructionId} | Updates the CIS instruction
[**put_cis_instruction_tag_0**](CISApi.md#put_cis_instruction_tag_0) | **PUT** /Employer/{EmployerId}/SubContractor/{SubContractorId}/CisInstruction/{CisInstructionId}/Tag/{TagId} | Insert CIS instruction tag
[**put_cis_line_tag_0**](CISApi.md#put_cis_line_tag_0) | **PUT** /Employer/{EmployerId}/SubContractor/{SubContractorId}/CisLine/{CisLineId}/Tag/{TagId} | Insert CIS line tag
[**put_cis_line_type_into_employer**](CISApi.md#put_cis_line_type_into_employer) | **PUT** /Employer/{EmployerId}/CisLineType/{CisLineTypeId} | Updates the CIS line type
[**put_cis_line_type_tag_0**](CISApi.md#put_cis_line_type_tag_0) | **PUT** /Employer/{EmployerId}/CisLineType/{CisLineTypeId}/Tag/{TagId} | Insert CIS line type tag
[**put_sub_contractor_tag_0**](CISApi.md#put_sub_contractor_tag_0) | **PUT** /Employer/{EmployerId}/SubContractor/{SubContractorId}/Tag/{TagId} | Insert sub contractor tag


# **delete_cis_instruction**
> delete_cis_instruction(employer_id, sub_contractor_id, cis_instruction_id, authorization, api_version)

Delete a CIS instruction

Delete the specified CIS instruction

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
    api_instance = openapi_client.CISApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    sub_contractor_id = 'sub_contractor_id_example' # str | The sub contractors' unique identifier. E.g SUB001
    cis_instruction_id = 'cis_instruction_id_example' # str | The CIS instruction unique identifier. E.g. CIS001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Delete a CIS instruction
        api_instance.delete_cis_instruction(employer_id, sub_contractor_id, cis_instruction_id, authorization, api_version)
    except Exception as e:
        print("Exception when calling CISApi->delete_cis_instruction: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **sub_contractor_id** | **str**| The sub contractors&#39; unique identifier. E.g SUB001 | 
 **cis_instruction_id** | **str**| The CIS instruction unique identifier. E.g. CIS001 | 
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

# **delete_cis_instruction_tag_0**
> delete_cis_instruction_tag_0(employer_id, sub_contractor_id, cis_instruction_id, tag_id, authorization, api_version)

Delete CIS instruction tag

Deletes a tag from the CIS instruction

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
    api_instance = openapi_client.CISApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    sub_contractor_id = 'sub_contractor_id_example' # str | The sub contractors' unique identifier. E.g SUB001
    cis_instruction_id = 'cis_instruction_id_example' # str | The CIS instruction unique identifier. E.g. CIS001
    tag_id = 'tag_id_example' # str | The tag unique identifier. E.g. MyTag
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Delete CIS instruction tag
        api_instance.delete_cis_instruction_tag_0(employer_id, sub_contractor_id, cis_instruction_id, tag_id, authorization, api_version)
    except Exception as e:
        print("Exception when calling CISApi->delete_cis_instruction_tag_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **sub_contractor_id** | **str**| The sub contractors&#39; unique identifier. E.g SUB001 | 
 **cis_instruction_id** | **str**| The CIS instruction unique identifier. E.g. CIS001 | 
 **tag_id** | **str**| The tag unique identifier. E.g. MyTag | 
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

# **delete_cis_line**
> delete_cis_line(employer_id, sub_contractor_id, cis_line_id, authorization, api_version)

Delete a CIS line

Delete the specified CIS line

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
    api_instance = openapi_client.CISApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    sub_contractor_id = 'sub_contractor_id_example' # str | The sub contractors' unique identifier. E.g SUB001
    cis_line_id = 'cis_line_id_example' # str | The CIS line unique identifier. E.g. CISLN001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Delete a CIS line
        api_instance.delete_cis_line(employer_id, sub_contractor_id, cis_line_id, authorization, api_version)
    except Exception as e:
        print("Exception when calling CISApi->delete_cis_line: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **sub_contractor_id** | **str**| The sub contractors&#39; unique identifier. E.g SUB001 | 
 **cis_line_id** | **str**| The CIS line unique identifier. E.g. CISLN001 | 
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

# **delete_cis_line_tag_0**
> delete_cis_line_tag_0(employer_id, sub_contractor_id, cis_line_id, tag_id, authorization, api_version)

Delete CIS line tag

Deletes a tag from the CIS line

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
    api_instance = openapi_client.CISApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    sub_contractor_id = 'sub_contractor_id_example' # str | The sub contractors' unique identifier. E.g SUB001
    cis_line_id = 'cis_line_id_example' # str | The CIS line unique identifier. E.g. CISLN001
    tag_id = 'tag_id_example' # str | The tag unique identifier. E.g. MyTag
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Delete CIS line tag
        api_instance.delete_cis_line_tag_0(employer_id, sub_contractor_id, cis_line_id, tag_id, authorization, api_version)
    except Exception as e:
        print("Exception when calling CISApi->delete_cis_line_tag_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **sub_contractor_id** | **str**| The sub contractors&#39; unique identifier. E.g SUB001 | 
 **cis_line_id** | **str**| The CIS line unique identifier. E.g. CISLN001 | 
 **tag_id** | **str**| The tag unique identifier. E.g. MyTag | 
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

# **delete_cis_line_type**
> delete_cis_line_type(employer_id, cis_line_type_id, authorization, api_version)

Delete an CIS line type

Delete the specified CIS line type

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
    api_instance = openapi_client.CISApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    cis_line_type_id = 'cis_line_type_id_example' # str | The CIS line type unique identifier. E.g. TYPEA
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Delete an CIS line type
        api_instance.delete_cis_line_type(employer_id, cis_line_type_id, authorization, api_version)
    except Exception as e:
        print("Exception when calling CISApi->delete_cis_line_type: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **cis_line_type_id** | **str**| The CIS line type unique identifier. E.g. TYPEA | 
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

# **delete_cis_line_type_tag_0**
> delete_cis_line_type_tag_0(employer_id, cis_line_type_id, tag_id, authorization, api_version)

Delete CIS line type tag

Deletes a tag from the CIS line type

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
    api_instance = openapi_client.CISApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    cis_line_type_id = 'cis_line_type_id_example' # str | The CIS line type unique identifier. E.g. TYPEA
    tag_id = 'tag_id_example' # str | The tag unique identifier. E.g. MyTag
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Delete CIS line type tag
        api_instance.delete_cis_line_type_tag_0(employer_id, cis_line_type_id, tag_id, authorization, api_version)
    except Exception as e:
        print("Exception when calling CISApi->delete_cis_line_type_tag_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **cis_line_type_id** | **str**| The CIS line type unique identifier. E.g. TYPEA | 
 **tag_id** | **str**| The tag unique identifier. E.g. MyTag | 
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

# **delete_cis_transaction**
> delete_cis_transaction(employer_id, cis_transaction_id, authorization, api_version)

Delete the CIS transaction

Deletes the specified CIS transaction

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
    api_instance = openapi_client.CISApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    cis_transaction_id = 'cis_transaction_id_example' # str | The CIS transaction unique identifier. E.g. CISTRAN001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Delete the CIS transaction
        api_instance.delete_cis_transaction(employer_id, cis_transaction_id, authorization, api_version)
    except Exception as e:
        print("Exception when calling CISApi->delete_cis_transaction: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **cis_transaction_id** | **str**| The CIS transaction unique identifier. E.g. CISTRAN001 | 
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

# **delete_sub_contractor_tag_0**
> delete_sub_contractor_tag_0(employer_id, sub_contractor_id, tag_id, authorization, api_version)

Delete sub contractor tag

Deletes a tag from the sub contractor

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
    api_instance = openapi_client.CISApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    sub_contractor_id = 'sub_contractor_id_example' # str | The sub contractors' unique identifier. E.g SUB001
    tag_id = 'tag_id_example' # str | The tag unique identifier. E.g. MyTag
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Delete sub contractor tag
        api_instance.delete_sub_contractor_tag_0(employer_id, sub_contractor_id, tag_id, authorization, api_version)
    except Exception as e:
        print("Exception when calling CISApi->delete_sub_contractor_tag_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **sub_contractor_id** | **str**| The sub contractors&#39; unique identifier. E.g SUB001 | 
 **tag_id** | **str**| The tag unique identifier. E.g. MyTag | 
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

# **get_all_cis_instruction_tags_0**
> LinkCollection get_all_cis_instruction_tags_0(employer_id, sub_contractor_id, authorization, api_version)

Get all CIS instruction tags

Gets all the CIS instruction tags

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
    api_instance = openapi_client.CISApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    sub_contractor_id = 'sub_contractor_id_example' # str | The sub contractors' unique identifier. E.g SUB001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get all CIS instruction tags
        api_response = api_instance.get_all_cis_instruction_tags_0(employer_id, sub_contractor_id, authorization, api_version)
        print("The response of CISApi->get_all_cis_instruction_tags_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CISApi->get_all_cis_instruction_tags_0: %s\n" % e)
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

# **get_all_cis_line_tags_0**
> LinkCollection get_all_cis_line_tags_0(employer_id, sub_contractor_id, authorization, api_version)

Get all CIS line tags

Gets all the CIS line tags

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
    api_instance = openapi_client.CISApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    sub_contractor_id = 'sub_contractor_id_example' # str | The sub contractors' unique identifier. E.g SUB001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get all CIS line tags
        api_response = api_instance.get_all_cis_line_tags_0(employer_id, sub_contractor_id, authorization, api_version)
        print("The response of CISApi->get_all_cis_line_tags_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CISApi->get_all_cis_line_tags_0: %s\n" % e)
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

# **get_all_cis_line_type_tags_0**
> LinkCollection get_all_cis_line_type_tags_0(employer_id, authorization, api_version)

Get all CIS line type tags

Gets all the CIS line type tags

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
    api_instance = openapi_client.CISApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get all CIS line type tags
        api_response = api_instance.get_all_cis_line_type_tags_0(employer_id, authorization, api_version)
        print("The response of CISApi->get_all_cis_line_type_tags_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CISApi->get_all_cis_line_type_tags_0: %s\n" % e)
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

# **get_all_sub_contractor_tags_0**
> LinkCollection get_all_sub_contractor_tags_0(employer_id, authorization, api_version)

Get all sub contractor tags

Gets all the sub contractor tags

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
    api_instance = openapi_client.CISApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get all sub contractor tags
        api_response = api_instance.get_all_sub_contractor_tags_0(employer_id, authorization, api_version)
        print("The response of CISApi->get_all_sub_contractor_tags_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CISApi->get_all_sub_contractor_tags_0: %s\n" % e)
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

# **get_cis_instruction_from_sub_contractor**
> CisInstruction get_cis_instruction_from_sub_contractor(employer_id, sub_contractor_id, cis_instruction_id, authorization, api_version)

Get CIS instruction from sub contractor

Gets the specified CIS instruction from sub contractor.

### Example


```python
import openapi_client
from openapi_client.models.cis_instruction import CisInstruction
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
    api_instance = openapi_client.CISApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    sub_contractor_id = 'sub_contractor_id_example' # str | The sub contractors' unique identifier. E.g SUB001
    cis_instruction_id = 'cis_instruction_id_example' # str | The CIS instruction unique identifier. E.g. CIS001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get CIS instruction from sub contractor
        api_response = api_instance.get_cis_instruction_from_sub_contractor(employer_id, sub_contractor_id, cis_instruction_id, authorization, api_version)
        print("The response of CISApi->get_cis_instruction_from_sub_contractor:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CISApi->get_cis_instruction_from_sub_contractor: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **sub_contractor_id** | **str**| The sub contractors&#39; unique identifier. E.g SUB001 | 
 **cis_instruction_id** | **str**| The CIS instruction unique identifier. E.g. CIS001 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

[**CisInstruction**](CisInstruction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The cis instruction object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_cis_instructions_from_sub_contractor**
> LinkCollection get_cis_instructions_from_sub_contractor(employer_id, sub_contractor_id, authorization, api_version)

Get CIS instructions from sub contractor.

Get links to all CIS instructions for the specified sub contractor.

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
    api_instance = openapi_client.CISApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    sub_contractor_id = 'sub_contractor_id_example' # str | The sub contractors' unique identifier. E.g SUB001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get CIS instructions from sub contractor.
        api_response = api_instance.get_cis_instructions_from_sub_contractor(employer_id, sub_contractor_id, authorization, api_version)
        print("The response of CISApi->get_cis_instructions_from_sub_contractor:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CISApi->get_cis_instructions_from_sub_contractor: %s\n" % e)
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

# **get_cis_instructions_with_tag_0**
> LinkCollection get_cis_instructions_with_tag_0(employer_id, sub_contractor_id, tag_id, authorization, api_version)

Get CIS instructions with tag

Gets the CIS instruction with the tag

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
    api_instance = openapi_client.CISApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    sub_contractor_id = 'sub_contractor_id_example' # str | The sub contractors' unique identifier. E.g SUB001
    tag_id = 'tag_id_example' # str | The tag unique identifier. E.g. MyTag
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get CIS instructions with tag
        api_response = api_instance.get_cis_instructions_with_tag_0(employer_id, sub_contractor_id, tag_id, authorization, api_version)
        print("The response of CISApi->get_cis_instructions_with_tag_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CISApi->get_cis_instructions_with_tag_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **sub_contractor_id** | **str**| The sub contractors&#39; unique identifier. E.g SUB001 | 
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

# **get_cis_line_from_sub_contractor**
> CisLine get_cis_line_from_sub_contractor(employer_id, sub_contractor_id, cis_line_id, authorization, api_version)

Get CIS line from sub contractor

Gets the specified CIS line from sub contractor.

### Example


```python
import openapi_client
from openapi_client.models.cis_line import CisLine
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
    api_instance = openapi_client.CISApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    sub_contractor_id = 'sub_contractor_id_example' # str | The sub contractors' unique identifier. E.g SUB001
    cis_line_id = 'cis_line_id_example' # str | The CIS line unique identifier. E.g. CISLN001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get CIS line from sub contractor
        api_response = api_instance.get_cis_line_from_sub_contractor(employer_id, sub_contractor_id, cis_line_id, authorization, api_version)
        print("The response of CISApi->get_cis_line_from_sub_contractor:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CISApi->get_cis_line_from_sub_contractor: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **sub_contractor_id** | **str**| The sub contractors&#39; unique identifier. E.g SUB001 | 
 **cis_line_id** | **str**| The CIS line unique identifier. E.g. CISLN001 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

[**CisLine**](CisLine.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The cis line object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_cis_line_type_from_employer**
> CisLineType get_cis_line_type_from_employer(employer_id, cis_line_type_id, authorization, api_version)

Get CIS line type from employer

Gets the specified CIS line type from employer.

### Example


```python
import openapi_client
from openapi_client.models.cis_line_type import CisLineType
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
    api_instance = openapi_client.CISApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    cis_line_type_id = 'cis_line_type_id_example' # str | The CIS line type unique identifier. E.g. TYPEA
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get CIS line type from employer
        api_response = api_instance.get_cis_line_type_from_employer(employer_id, cis_line_type_id, authorization, api_version)
        print("The response of CISApi->get_cis_line_type_from_employer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CISApi->get_cis_line_type_from_employer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **cis_line_type_id** | **str**| The CIS line type unique identifier. E.g. TYPEA | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

[**CisLineType**](CisLineType.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The cis line type object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_cis_line_types_from_employer**
> LinkCollection get_cis_line_types_from_employer(employer_id, authorization, api_version)

Get CIS line types from employer.

Get links to all CIS line types for the specified employer.

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
    api_instance = openapi_client.CISApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get CIS line types from employer.
        api_response = api_instance.get_cis_line_types_from_employer(employer_id, authorization, api_version)
        print("The response of CISApi->get_cis_line_types_from_employer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CISApi->get_cis_line_types_from_employer: %s\n" % e)
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

# **get_cis_line_types_with_tag_0**
> LinkCollection get_cis_line_types_with_tag_0(employer_id, tag_id, authorization, api_version)

Get CIS line types with tag

Gets the CIS line type with the tag

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
    api_instance = openapi_client.CISApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    tag_id = 'tag_id_example' # str | The tag unique identifier. E.g. MyTag
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get CIS line types with tag
        api_response = api_instance.get_cis_line_types_with_tag_0(employer_id, tag_id, authorization, api_version)
        print("The response of CISApi->get_cis_line_types_with_tag_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CISApi->get_cis_line_types_with_tag_0: %s\n" % e)
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

# **get_cis_lines_from_sub_contractor**
> LinkCollection get_cis_lines_from_sub_contractor(employer_id, sub_contractor_id, authorization, api_version)

Get CIS lines from sub contractor.

Get links to all CIS lines for the specified sub contractor.

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
    api_instance = openapi_client.CISApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    sub_contractor_id = 'sub_contractor_id_example' # str | The sub contractors' unique identifier. E.g SUB001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get CIS lines from sub contractor.
        api_response = api_instance.get_cis_lines_from_sub_contractor(employer_id, sub_contractor_id, authorization, api_version)
        print("The response of CISApi->get_cis_lines_from_sub_contractor:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CISApi->get_cis_lines_from_sub_contractor: %s\n" % e)
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

# **get_cis_lines_with_tag_0**
> LinkCollection get_cis_lines_with_tag_0(employer_id, sub_contractor_id, tag_id, authorization, api_version)

Get CIS lines with tag

Gets the CIS line with the tag

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
    api_instance = openapi_client.CISApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    sub_contractor_id = 'sub_contractor_id_example' # str | The sub contractors' unique identifier. E.g SUB001
    tag_id = 'tag_id_example' # str | The tag unique identifier. E.g. MyTag
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get CIS lines with tag
        api_response = api_instance.get_cis_lines_with_tag_0(employer_id, sub_contractor_id, tag_id, authorization, api_version)
        print("The response of CISApi->get_cis_lines_with_tag_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CISApi->get_cis_lines_with_tag_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **sub_contractor_id** | **str**| The sub contractors&#39; unique identifier. E.g SUB001 | 
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

# **get_cis_transaction_from_employer**
> CisTransaction get_cis_transaction_from_employer(employer_id, cis_transaction_id, authorization, api_version)

Get the CIS transaction

Returns the specified CIS transaction

### Example


```python
import openapi_client
from openapi_client.models.cis_transaction import CisTransaction
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
    api_instance = openapi_client.CISApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    cis_transaction_id = 'cis_transaction_id_example' # str | The CIS transaction unique identifier. E.g. CISTRAN001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get the CIS transaction
        api_response = api_instance.get_cis_transaction_from_employer(employer_id, cis_transaction_id, authorization, api_version)
        print("The response of CISApi->get_cis_transaction_from_employer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CISApi->get_cis_transaction_from_employer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **cis_transaction_id** | **str**| The CIS transaction unique identifier. E.g. CISTRAN001 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

[**CisTransaction**](CisTransaction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The cis transaction object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_cis_transactions_from_employer**
> LinkCollection get_cis_transactions_from_employer(employer_id, authorization, api_version)

Get all CIS transactions for the employer

Get links for all CIS transactions for the specified employer

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
    api_instance = openapi_client.CISApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get all CIS transactions for the employer
        api_response = api_instance.get_cis_transactions_from_employer(employer_id, authorization, api_version)
        print("The response of CISApi->get_cis_transactions_from_employer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CISApi->get_cis_transactions_from_employer: %s\n" % e)
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

# **get_sub_contractors_with_tag_0**
> LinkCollection get_sub_contractors_with_tag_0(employer_id, tag_id, authorization, api_version)

Get sub contractors with tag

Gets the sub contractor with the tag

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
    api_instance = openapi_client.CISApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    tag_id = 'tag_id_example' # str | The tag unique identifier. E.g. MyTag
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get sub contractors with tag
        api_response = api_instance.get_sub_contractors_with_tag_0(employer_id, tag_id, authorization, api_version)
        print("The response of CISApi->get_sub_contractors_with_tag_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CISApi->get_sub_contractors_with_tag_0: %s\n" % e)
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

# **get_tag_from_cis_instruction_0**
> Tag get_tag_from_cis_instruction_0(employer_id, sub_contractor_id, cis_instruction_id, tag_id, authorization, api_version)

Get CIS instruction tag

Gets the tag from the CIS instruction

### Example


```python
import openapi_client
from openapi_client.models.tag import Tag
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
    api_instance = openapi_client.CISApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    sub_contractor_id = 'sub_contractor_id_example' # str | The sub contractors' unique identifier. E.g SUB001
    cis_instruction_id = 'cis_instruction_id_example' # str | The CIS instruction unique identifier. E.g. CIS001
    tag_id = 'tag_id_example' # str | The tag unique identifier. E.g. MyTag
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get CIS instruction tag
        api_response = api_instance.get_tag_from_cis_instruction_0(employer_id, sub_contractor_id, cis_instruction_id, tag_id, authorization, api_version)
        print("The response of CISApi->get_tag_from_cis_instruction_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CISApi->get_tag_from_cis_instruction_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **sub_contractor_id** | **str**| The sub contractors&#39; unique identifier. E.g SUB001 | 
 **cis_instruction_id** | **str**| The CIS instruction unique identifier. E.g. CIS001 | 
 **tag_id** | **str**| The tag unique identifier. E.g. MyTag | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

[**Tag**](Tag.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The tag object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_tag_from_cis_line_0**
> Tag get_tag_from_cis_line_0(employer_id, sub_contractor_id, cis_line_id, tag_id, authorization, api_version)

Get CIS line tag

Gets the tag from the CIS line

### Example


```python
import openapi_client
from openapi_client.models.tag import Tag
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
    api_instance = openapi_client.CISApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    sub_contractor_id = 'sub_contractor_id_example' # str | The sub contractors' unique identifier. E.g SUB001
    cis_line_id = 'cis_line_id_example' # str | The CIS line unique identifier. E.g. CISLN001
    tag_id = 'tag_id_example' # str | The tag unique identifier. E.g. MyTag
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get CIS line tag
        api_response = api_instance.get_tag_from_cis_line_0(employer_id, sub_contractor_id, cis_line_id, tag_id, authorization, api_version)
        print("The response of CISApi->get_tag_from_cis_line_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CISApi->get_tag_from_cis_line_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **sub_contractor_id** | **str**| The sub contractors&#39; unique identifier. E.g SUB001 | 
 **cis_line_id** | **str**| The CIS line unique identifier. E.g. CISLN001 | 
 **tag_id** | **str**| The tag unique identifier. E.g. MyTag | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

[**Tag**](Tag.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The tag object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_tag_from_cis_line_type_0**
> Tag get_tag_from_cis_line_type_0(employer_id, cis_line_type_id, tag_id, authorization, api_version)

Get CIS line type tag

Gets the tag from the CIS line type

### Example


```python
import openapi_client
from openapi_client.models.tag import Tag
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
    api_instance = openapi_client.CISApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    cis_line_type_id = 'cis_line_type_id_example' # str | The CIS line type unique identifier. E.g. TYPEA
    tag_id = 'tag_id_example' # str | The tag unique identifier. E.g. MyTag
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get CIS line type tag
        api_response = api_instance.get_tag_from_cis_line_type_0(employer_id, cis_line_type_id, tag_id, authorization, api_version)
        print("The response of CISApi->get_tag_from_cis_line_type_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CISApi->get_tag_from_cis_line_type_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **cis_line_type_id** | **str**| The CIS line type unique identifier. E.g. TYPEA | 
 **tag_id** | **str**| The tag unique identifier. E.g. MyTag | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

[**Tag**](Tag.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The tag object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_tag_from_sub_contractor_0**
> Tag get_tag_from_sub_contractor_0(employer_id, sub_contractor_id, tag_id, authorization, api_version)

Get sub contractor tag

Gets the tag from the sub contractor

### Example


```python
import openapi_client
from openapi_client.models.tag import Tag
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
    api_instance = openapi_client.CISApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    sub_contractor_id = 'sub_contractor_id_example' # str | The sub contractors' unique identifier. E.g SUB001
    tag_id = 'tag_id_example' # str | The tag unique identifier. E.g. MyTag
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get sub contractor tag
        api_response = api_instance.get_tag_from_sub_contractor_0(employer_id, sub_contractor_id, tag_id, authorization, api_version)
        print("The response of CISApi->get_tag_from_sub_contractor_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CISApi->get_tag_from_sub_contractor_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **sub_contractor_id** | **str**| The sub contractors&#39; unique identifier. E.g SUB001 | 
 **tag_id** | **str**| The tag unique identifier. E.g. MyTag | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

[**Tag**](Tag.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The tag object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_tag_from_sub_contractor_revision_0**
> Tag get_tag_from_sub_contractor_revision_0(employer_id, sub_contractor_id, tag_id, effective_date, authorization, api_version)

Get sub contractor revision tag

Gets the tag from the sub contractor revision

### Example


```python
import openapi_client
from openapi_client.models.tag import Tag
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
    api_instance = openapi_client.CISApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    sub_contractor_id = 'sub_contractor_id_example' # str | The sub contractors' unique identifier. E.g SUB001
    tag_id = 'tag_id_example' # str | The tag unique identifier. E.g. MyTag
    effective_date = '2013-10-20' # date | The effective date to be applied. E.g 2016-04-06
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get sub contractor revision tag
        api_response = api_instance.get_tag_from_sub_contractor_revision_0(employer_id, sub_contractor_id, tag_id, effective_date, authorization, api_version)
        print("The response of CISApi->get_tag_from_sub_contractor_revision_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CISApi->get_tag_from_sub_contractor_revision_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **sub_contractor_id** | **str**| The sub contractors&#39; unique identifier. E.g SUB001 | 
 **tag_id** | **str**| The tag unique identifier. E.g. MyTag | 
 **effective_date** | **date**| The effective date to be applied. E.g 2016-04-06 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

[**Tag**](Tag.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The tag object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_tags_from_cis_instruction_0**
> LinkCollection get_tags_from_cis_instruction_0(employer_id, sub_contractor_id, cis_instruction_id, authorization, api_version)

Get all tags from the CIS instruction

Gets all the tags from the CIS instruction

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
    api_instance = openapi_client.CISApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    sub_contractor_id = 'sub_contractor_id_example' # str | The sub contractors' unique identifier. E.g SUB001
    cis_instruction_id = 'cis_instruction_id_example' # str | The CIS instruction unique identifier. E.g. CIS001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get all tags from the CIS instruction
        api_response = api_instance.get_tags_from_cis_instruction_0(employer_id, sub_contractor_id, cis_instruction_id, authorization, api_version)
        print("The response of CISApi->get_tags_from_cis_instruction_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CISApi->get_tags_from_cis_instruction_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **sub_contractor_id** | **str**| The sub contractors&#39; unique identifier. E.g SUB001 | 
 **cis_instruction_id** | **str**| The CIS instruction unique identifier. E.g. CIS001 | 
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

# **get_tags_from_cis_line_0**
> LinkCollection get_tags_from_cis_line_0(employer_id, sub_contractor_id, cis_line_id, authorization, api_version)

Get all tags from the CIS line

Gets all the tags from the CIS line

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
    api_instance = openapi_client.CISApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    sub_contractor_id = 'sub_contractor_id_example' # str | The sub contractors' unique identifier. E.g SUB001
    cis_line_id = 'cis_line_id_example' # str | The CIS line unique identifier. E.g. CISLN001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get all tags from the CIS line
        api_response = api_instance.get_tags_from_cis_line_0(employer_id, sub_contractor_id, cis_line_id, authorization, api_version)
        print("The response of CISApi->get_tags_from_cis_line_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CISApi->get_tags_from_cis_line_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **sub_contractor_id** | **str**| The sub contractors&#39; unique identifier. E.g SUB001 | 
 **cis_line_id** | **str**| The CIS line unique identifier. E.g. CISLN001 | 
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

# **get_tags_from_cis_line_type_0**
> LinkCollection get_tags_from_cis_line_type_0(employer_id, cis_line_type_id, authorization, api_version)

Get all tags from the CIS line type

Gets all the tags from the CIS line type

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
    api_instance = openapi_client.CISApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    cis_line_type_id = 'cis_line_type_id_example' # str | The CIS line type unique identifier. E.g. TYPEA
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get all tags from the CIS line type
        api_response = api_instance.get_tags_from_cis_line_type_0(employer_id, cis_line_type_id, authorization, api_version)
        print("The response of CISApi->get_tags_from_cis_line_type_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CISApi->get_tags_from_cis_line_type_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **cis_line_type_id** | **str**| The CIS line type unique identifier. E.g. TYPEA | 
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

# **get_tags_from_sub_contractor_0**
> LinkCollection get_tags_from_sub_contractor_0(employer_id, sub_contractor_id, authorization, api_version)

Get all tags from the sub contractor

Gets all the tags from the sub contractor

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
    api_instance = openapi_client.CISApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    sub_contractor_id = 'sub_contractor_id_example' # str | The sub contractors' unique identifier. E.g SUB001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get all tags from the sub contractor
        api_response = api_instance.get_tags_from_sub_contractor_0(employer_id, sub_contractor_id, authorization, api_version)
        print("The response of CISApi->get_tags_from_sub_contractor_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CISApi->get_tags_from_sub_contractor_0: %s\n" % e)
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

# **get_tags_from_sub_contractor_revision_0**
> LinkCollection get_tags_from_sub_contractor_revision_0(employer_id, sub_contractor_id, effective_date, authorization, api_version)

Get all sub contractor revision tags

Gets all the tags from the sub contractor revision

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
    api_instance = openapi_client.CISApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    sub_contractor_id = 'sub_contractor_id_example' # str | The sub contractors' unique identifier. E.g SUB001
    effective_date = '2013-10-20' # date | The effective date to be applied. E.g 2016-04-06
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get all sub contractor revision tags
        api_response = api_instance.get_tags_from_sub_contractor_revision_0(employer_id, sub_contractor_id, effective_date, authorization, api_version)
        print("The response of CISApi->get_tags_from_sub_contractor_revision_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CISApi->get_tags_from_sub_contractor_revision_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **sub_contractor_id** | **str**| The sub contractors&#39; unique identifier. E.g SUB001 | 
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

# **patch_cis_instruction**
> CisInstruction patch_cis_instruction(employer_id, sub_contractor_id, cis_instruction_id, authorization, api_version)

Patches the CIS instruction

Update an existing CIS instruction object

### Example


```python
import openapi_client
from openapi_client.models.cis_instruction import CisInstruction
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
    api_instance = openapi_client.CISApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    sub_contractor_id = 'sub_contractor_id_example' # str | The sub contractors' unique identifier. E.g SUB001
    cis_instruction_id = 'cis_instruction_id_example' # str | The CIS instruction unique identifier. E.g. CIS001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Patches the CIS instruction
        api_response = api_instance.patch_cis_instruction(employer_id, sub_contractor_id, cis_instruction_id, authorization, api_version)
        print("The response of CISApi->patch_cis_instruction:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CISApi->patch_cis_instruction: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **sub_contractor_id** | **str**| The sub contractors&#39; unique identifier. E.g SUB001 | 
 **cis_instruction_id** | **str**| The CIS instruction unique identifier. E.g. CIS001 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

[**CisInstruction**](CisInstruction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The cis instruction object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_cis_instruction_into_sub_contractor**
> Link post_cis_instruction_into_sub_contractor(employer_id, sub_contractor_id, authorization, api_version, cis_instruction)

Create a new CIS instruction

Create a new CIS instruction object

### Example


```python
import openapi_client
from openapi_client.models.cis_instruction import CisInstruction
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
    api_instance = openapi_client.CISApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    sub_contractor_id = 'sub_contractor_id_example' # str | The sub contractors' unique identifier. E.g SUB001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')
    cis_instruction = openapi_client.CisInstruction() # CisInstruction | The CIS instruction object.

    try:
        # Create a new CIS instruction
        api_response = api_instance.post_cis_instruction_into_sub_contractor(employer_id, sub_contractor_id, authorization, api_version, cis_instruction)
        print("The response of CISApi->post_cis_instruction_into_sub_contractor:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CISApi->post_cis_instruction_into_sub_contractor: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **sub_contractor_id** | **str**| The sub contractors&#39; unique identifier. E.g SUB001 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]
 **cis_instruction** | [**CisInstruction**](CisInstruction.md)| The CIS instruction object. | 

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

# **post_cis_line_type_into_employer**
> Link post_cis_line_type_into_employer(employer_id, authorization, api_version, cis_line_type)

Create a new CIS line type

Create a new CIS line type object

### Example


```python
import openapi_client
from openapi_client.models.cis_line_type import CisLineType
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
    api_instance = openapi_client.CISApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')
    cis_line_type = openapi_client.CisLineType() # CisLineType | The CIS line type object.

    try:
        # Create a new CIS line type
        api_response = api_instance.post_cis_line_type_into_employer(employer_id, authorization, api_version, cis_line_type)
        print("The response of CISApi->post_cis_line_type_into_employer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CISApi->post_cis_line_type_into_employer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]
 **cis_line_type** | [**CisLineType**](CisLineType.md)| The CIS line type object. | 

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

# **put_cis_instruction_into_sub_contractor**
> CisInstruction put_cis_instruction_into_sub_contractor(employer_id, sub_contractor_id, cis_instruction_id, authorization, api_version, cis_instruction)

Updates the CIS instruction

Insert or update existing CIS instruction object

### Example


```python
import openapi_client
from openapi_client.models.cis_instruction import CisInstruction
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
    api_instance = openapi_client.CISApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    sub_contractor_id = 'sub_contractor_id_example' # str | The sub contractors' unique identifier. E.g SUB001
    cis_instruction_id = 'cis_instruction_id_example' # str | The CIS instruction unique identifier. E.g. CIS001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')
    cis_instruction = openapi_client.CisInstruction() # CisInstruction | The CIS instruction object.

    try:
        # Updates the CIS instruction
        api_response = api_instance.put_cis_instruction_into_sub_contractor(employer_id, sub_contractor_id, cis_instruction_id, authorization, api_version, cis_instruction)
        print("The response of CISApi->put_cis_instruction_into_sub_contractor:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CISApi->put_cis_instruction_into_sub_contractor: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **sub_contractor_id** | **str**| The sub contractors&#39; unique identifier. E.g SUB001 | 
 **cis_instruction_id** | **str**| The CIS instruction unique identifier. E.g. CIS001 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]
 **cis_instruction** | [**CisInstruction**](CisInstruction.md)| The CIS instruction object. | 

### Return type

[**CisInstruction**](CisInstruction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The cis instruction object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_cis_instruction_tag_0**
> Tag put_cis_instruction_tag_0(employer_id, sub_contractor_id, cis_instruction_id, tag_id, authorization, api_version)

Insert CIS instruction tag

Inserts a new tag on the CIS instruction

### Example


```python
import openapi_client
from openapi_client.models.tag import Tag
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
    api_instance = openapi_client.CISApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    sub_contractor_id = 'sub_contractor_id_example' # str | The sub contractors' unique identifier. E.g SUB001
    cis_instruction_id = 'cis_instruction_id_example' # str | The CIS instruction unique identifier. E.g. CIS001
    tag_id = 'tag_id_example' # str | The tag unique identifier. E.g. MyTag
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Insert CIS instruction tag
        api_response = api_instance.put_cis_instruction_tag_0(employer_id, sub_contractor_id, cis_instruction_id, tag_id, authorization, api_version)
        print("The response of CISApi->put_cis_instruction_tag_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CISApi->put_cis_instruction_tag_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **sub_contractor_id** | **str**| The sub contractors&#39; unique identifier. E.g SUB001 | 
 **cis_instruction_id** | **str**| The CIS instruction unique identifier. E.g. CIS001 | 
 **tag_id** | **str**| The tag unique identifier. E.g. MyTag | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

[**Tag**](Tag.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The tag object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_cis_line_tag_0**
> Tag put_cis_line_tag_0(employer_id, sub_contractor_id, cis_line_id, tag_id, authorization, api_version)

Insert CIS line tag

Inserts a new tag on the CIS line

### Example


```python
import openapi_client
from openapi_client.models.tag import Tag
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
    api_instance = openapi_client.CISApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    sub_contractor_id = 'sub_contractor_id_example' # str | The sub contractors' unique identifier. E.g SUB001
    cis_line_id = 'cis_line_id_example' # str | The CIS line unique identifier. E.g. CISLN001
    tag_id = 'tag_id_example' # str | The tag unique identifier. E.g. MyTag
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Insert CIS line tag
        api_response = api_instance.put_cis_line_tag_0(employer_id, sub_contractor_id, cis_line_id, tag_id, authorization, api_version)
        print("The response of CISApi->put_cis_line_tag_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CISApi->put_cis_line_tag_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **sub_contractor_id** | **str**| The sub contractors&#39; unique identifier. E.g SUB001 | 
 **cis_line_id** | **str**| The CIS line unique identifier. E.g. CISLN001 | 
 **tag_id** | **str**| The tag unique identifier. E.g. MyTag | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

[**Tag**](Tag.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The tag object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_cis_line_type_into_employer**
> CisLineType put_cis_line_type_into_employer(employer_id, cis_line_type_id, authorization, api_version, cis_line_type)

Updates the CIS line type

Updates the existing specified CIS line type object

### Example


```python
import openapi_client
from openapi_client.models.cis_line_type import CisLineType
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
    api_instance = openapi_client.CISApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    cis_line_type_id = 'cis_line_type_id_example' # str | The CIS line type unique identifier. E.g. TYPEA
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')
    cis_line_type = openapi_client.CisLineType() # CisLineType | The CIS line type object.

    try:
        # Updates the CIS line type
        api_response = api_instance.put_cis_line_type_into_employer(employer_id, cis_line_type_id, authorization, api_version, cis_line_type)
        print("The response of CISApi->put_cis_line_type_into_employer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CISApi->put_cis_line_type_into_employer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **cis_line_type_id** | **str**| The CIS line type unique identifier. E.g. TYPEA | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]
 **cis_line_type** | [**CisLineType**](CisLineType.md)| The CIS line type object. | 

### Return type

[**CisLineType**](CisLineType.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The cis line type object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_cis_line_type_tag_0**
> Tag put_cis_line_type_tag_0(employer_id, cis_line_type_id, tag_id, authorization, api_version)

Insert CIS line type tag

Inserts a new tag on the CIS line type

### Example


```python
import openapi_client
from openapi_client.models.tag import Tag
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
    api_instance = openapi_client.CISApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    cis_line_type_id = 'cis_line_type_id_example' # str | The CIS line type unique identifier. E.g. TYPEA
    tag_id = 'tag_id_example' # str | The tag unique identifier. E.g. MyTag
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Insert CIS line type tag
        api_response = api_instance.put_cis_line_type_tag_0(employer_id, cis_line_type_id, tag_id, authorization, api_version)
        print("The response of CISApi->put_cis_line_type_tag_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CISApi->put_cis_line_type_tag_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **cis_line_type_id** | **str**| The CIS line type unique identifier. E.g. TYPEA | 
 **tag_id** | **str**| The tag unique identifier. E.g. MyTag | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

[**Tag**](Tag.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The tag object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_sub_contractor_tag_0**
> Tag put_sub_contractor_tag_0(employer_id, sub_contractor_id, tag_id, authorization, api_version)

Insert sub contractor tag

Inserts a new tag on the sub contractor

### Example


```python
import openapi_client
from openapi_client.models.tag import Tag
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
    api_instance = openapi_client.CISApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    sub_contractor_id = 'sub_contractor_id_example' # str | The sub contractors' unique identifier. E.g SUB001
    tag_id = 'tag_id_example' # str | The tag unique identifier. E.g. MyTag
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Insert sub contractor tag
        api_response = api_instance.put_sub_contractor_tag_0(employer_id, sub_contractor_id, tag_id, authorization, api_version)
        print("The response of CISApi->put_sub_contractor_tag_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CISApi->put_sub_contractor_tag_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **sub_contractor_id** | **str**| The sub contractors&#39; unique identifier. E.g SUB001 | 
 **tag_id** | **str**| The tag unique identifier. E.g. MyTag | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

[**Tag**](Tag.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The tag object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

