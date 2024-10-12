# openapi_client.ReferenceApi

All URIs are relative to *https://api.test.payrun.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_journal_expression_schema**](ReferenceApi.md#get_journal_expression_schema) | **GET** /ReferenceData/JournalExpressionDataTable | Gets the journal expression data schema


# **get_journal_expression_schema**
> JournalExpressionDataTable get_journal_expression_schema(authorization, api_version)

Gets the journal expression data schema

Gets the data schema for all available journal expression values. Includes table names, column names and data types.

### Example


```python
import openapi_client
from openapi_client.models.journal_expression_data_table import JournalExpressionDataTable
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
    api_instance = openapi_client.ReferenceApi(api_client)
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Gets the journal expression data schema
        api_response = api_instance.get_journal_expression_schema(authorization, api_version)
        print("The response of ReferenceApi->get_journal_expression_schema:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReferenceApi->get_journal_expression_schema: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

[**JournalExpressionDataTable**](JournalExpressionDataTable.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The journal expression data table object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

