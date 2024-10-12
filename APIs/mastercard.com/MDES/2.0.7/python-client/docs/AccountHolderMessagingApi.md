# openapi_client.AccountHolderMessagingApi

All URIs are relative to *https://api.mastercard.com/mdes/csapi/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountholdermessaging_post**](AccountHolderMessagingApi.md#accountholdermessaging_post) | **POST** /accountholdermessaging | 


# **accountholdermessaging_post**
> AccountHolderMessagingResponseSchema accountholdermessaging_post(accountholder_messaging_request_schema=accountholder_messaging_request_schema)



Allows issuers to display customized messages per token within the Apple Pay wallet, below the digitized image of the card. 

### Example


```python
import openapi_client
from openapi_client.models.account_holder_messaging_request import AccountHolderMessagingRequest
from openapi_client.models.account_holder_messaging_response_schema import AccountHolderMessagingResponseSchema
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
    api_instance = openapi_client.AccountHolderMessagingApi(api_client)
    accountholder_messaging_request_schema = openapi_client.AccountHolderMessagingRequest() # AccountHolderMessagingRequest | Contains the details of the request message. (optional)

    try:
        api_response = api_instance.accountholdermessaging_post(accountholder_messaging_request_schema=accountholder_messaging_request_schema)
        print("The response of AccountHolderMessagingApi->accountholdermessaging_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountHolderMessagingApi->accountholdermessaging_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountholder_messaging_request_schema** | [**AccountHolderMessagingRequest**](AccountHolderMessagingRequest.md)| Contains the details of the request message. | [optional] 

### Return type

[**AccountHolderMessagingResponseSchema**](AccountHolderMessagingResponseSchema.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contains the details of the response |  -  |
**0** | unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

