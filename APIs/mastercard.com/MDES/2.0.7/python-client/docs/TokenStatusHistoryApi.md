# openapi_client.TokenStatusHistoryApi

All URIs are relative to *https://api.mastercard.com/mdes/csapi/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**token_statushistory_post**](TokenStatusHistoryApi.md#token_statushistory_post) | **POST** /token/statushistory | 


# **token_statushistory_post**
> TokenStatusHistoryResponseSchema token_statushistory_post(token_status_history_request_schema=token_status_history_request_schema)



Used to retrieve the historical statuses and lifecycle events for a token, such as when it was initially activated, subsequently suspended or resumed, and finally deleted. 

### Example


```python
import openapi_client
from openapi_client.models.token_status_history_request_schema import TokenStatusHistoryRequestSchema
from openapi_client.models.token_status_history_response_schema import TokenStatusHistoryResponseSchema
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
    api_instance = openapi_client.TokenStatusHistoryApi(api_client)
    token_status_history_request_schema = openapi_client.TokenStatusHistoryRequestSchema() # TokenStatusHistoryRequestSchema | Contains the details of the request message. (optional)

    try:
        api_response = api_instance.token_statushistory_post(token_status_history_request_schema=token_status_history_request_schema)
        print("The response of TokenStatusHistoryApi->token_statushistory_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TokenStatusHistoryApi->token_statushistory_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token_status_history_request_schema** | [**TokenStatusHistoryRequestSchema**](TokenStatusHistoryRequestSchema.md)| Contains the details of the request message. | [optional] 

### Return type

[**TokenStatusHistoryResponseSchema**](TokenStatusHistoryResponseSchema.md)

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

