# openapi_client.TokenResetMobilePINApi

All URIs are relative to *https://api.mastercard.com/mdes/csapi/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**token_resetmobilepin_post**](TokenResetMobilePINApi.md#token_resetmobilepin_post) | **POST** /token/resetmobilepin | 


# **token_resetmobilepin_post**
> TokenResetMobilePinResponseSchema token_resetmobilepin_post(token_reset_mobile_pin_request_schema=token_reset_mobile_pin_request_schema)



Used to request that the Mobile PIN for a Mastercard Cloud-Based Payment token in a single issuer wallet is reset. The request is passed to the Credential Management System for processing. When the Mobile PIN is a token-level PIN (as opposed to a wallet-level PIN), the cardholder must choose a new PIN within 10 minutes of a Reset Mobile PIN action. Otherwise, the reset will need to be re-requested. 

### Example


```python
import openapi_client
from openapi_client.models.token_reset_mobile_pin_request_schema import TokenResetMobilePinRequestSchema
from openapi_client.models.token_reset_mobile_pin_response_schema import TokenResetMobilePinResponseSchema
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
    api_instance = openapi_client.TokenResetMobilePINApi(api_client)
    token_reset_mobile_pin_request_schema = openapi_client.TokenResetMobilePinRequestSchema() # TokenResetMobilePinRequestSchema | Contains the details of the request message. (optional)

    try:
        api_response = api_instance.token_resetmobilepin_post(token_reset_mobile_pin_request_schema=token_reset_mobile_pin_request_schema)
        print("The response of TokenResetMobilePINApi->token_resetmobilepin_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TokenResetMobilePINApi->token_resetmobilepin_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token_reset_mobile_pin_request_schema** | [**TokenResetMobilePinRequestSchema**](TokenResetMobilePinRequestSchema.md)| Contains the details of the request message. | [optional] 

### Return type

[**TokenResetMobilePinResponseSchema**](TokenResetMobilePinResponseSchema.md)

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

