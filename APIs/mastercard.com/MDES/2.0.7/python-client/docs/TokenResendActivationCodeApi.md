# openapi_client.TokenResendActivationCodeApi

All URIs are relative to *https://api.mastercard.com/mdes/csapi/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**token_resendactivationcode_post**](TokenResendActivationCodeApi.md#token_resendactivationcode_post) | **POST** /token/resendactivationcode | 


# **token_resendactivationcode_post**
> TokenResendActivationCodeResponseSchema token_resendactivationcode_post(token_resend_activation_code_request_schema=token_resend_activation_code_request_schema)



Used to trigger the process of generating and sending a new Activation Code (for a specific token) to the cardholder via the requested Activation Method. When successful, a new Activation Code Expiration Date Time period will begin, and a new Activation Code will be sent to the issuer using the Activation Code Notification (ACN) pre-digitization network message. It can only be used to do this for Activation Methods that involve the external distribution of an Activation Code to the cardholder. For example, via email or SMS. It cannot be used to send a new activation code via the \"Mobile Application\" activation method, for instance. A new Activation Code can be sent even if the previous code has not expired. A new Activation Code can also be sent even after the previous code has expired; however, it can only be done up to 30 days after the token was created  (the number of days is subject to change at the discretion of Mastercard). 

### Example


```python
import openapi_client
from openapi_client.models.token_resend_activation_code_request_schema import TokenResendActivationCodeRequestSchema
from openapi_client.models.token_resend_activation_code_response_schema import TokenResendActivationCodeResponseSchema
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
    api_instance = openapi_client.TokenResendActivationCodeApi(api_client)
    token_resend_activation_code_request_schema = openapi_client.TokenResendActivationCodeRequestSchema() # TokenResendActivationCodeRequestSchema | Contains the details of the request message. (optional)

    try:
        api_response = api_instance.token_resendactivationcode_post(token_resend_activation_code_request_schema=token_resend_activation_code_request_schema)
        print("The response of TokenResendActivationCodeApi->token_resendactivationcode_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TokenResendActivationCodeApi->token_resendactivationcode_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token_resend_activation_code_request_schema** | [**TokenResendActivationCodeRequestSchema**](TokenResendActivationCodeRequestSchema.md)| Contains the details of the request message. | [optional] 

### Return type

[**TokenResendActivationCodeResponseSchema**](TokenResendActivationCodeResponseSchema.md)

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

