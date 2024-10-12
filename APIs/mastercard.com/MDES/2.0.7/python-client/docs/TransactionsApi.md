# openapi_client.TransactionsApi

All URIs are relative to *https://api.mastercard.com/mdes/csapi/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**transactions_post**](TransactionsApi.md#transactions_post) | **POST** /transactions | 


# **transactions_post**
> TransactionsResponseSchema transactions_post(transactions_request_schema=transactions_request_schema)



Used to retrieve transactions performed by a token. It only returns transactions performed within the last 30 days, to help identify a particular token, or to identify a particular recent transaction. It is not intended to provide the full transaction history of a token or Account PAN.<br><br>_Notes:_ The Transaction History API response is not supported for static Card on File (CoF) tokens.<br>If a set of tokens has been re-mapped to a new FPAN, all digital transactions will be made available before or after the FPAN has been updated. MDES does not return the value of the FPAN which was mapped to the particular token at the time of the transaction. However, MDES will return the history of all transactions performed on that particular token in the last 30 days, based on old and/or new FPAN. 

### Example


```python
import openapi_client
from openapi_client.models.transactions_request_schema import TransactionsRequestSchema
from openapi_client.models.transactions_response_schema import TransactionsResponseSchema
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mastercard.com/mdes/csapi/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mastercard.com/mdes/csapi/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TransactionsApi(api_client)
    transactions_request_schema = openapi_client.TransactionsRequestSchema() # TransactionsRequestSchema | Contains the details of the request message. (optional)

    try:
        api_response = api_instance.transactions_post(transactions_request_schema=transactions_request_schema)
        print("The response of TransactionsApi->transactions_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransactionsApi->transactions_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactions_request_schema** | [**TransactionsRequestSchema**](TransactionsRequestSchema.md)| Contains the details of the request message. | [optional] 

### Return type

[**TransactionsResponseSchema**](TransactionsResponseSchema.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contains the details of the response message. |  -  |
**0** | unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

