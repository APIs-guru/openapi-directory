# openapi_client.TokenizationApi

All URIs are relative to *https://www.beanstream.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**scripts_tokenization_tokens_post**](TokenizationApi.md#scripts_tokenization_tokens_post) | **POST** /scripts/tokenization/tokens | Tokenize credit card


# **scripts_tokenization_tokens_post**
> TokenResponse scripts_tokenization_tokens_post(token_request=token_request)

Tokenize credit card

NOTE that the full URL for this API call is https://www.beanstream.com/scripts/tokenization/tokens. Turn a credit card into a token using this service. This helps lessen your PCI scope by not passing the credit card information to your server. Instead you turn the card number into a token in the client app, then send the token to the server. When you send the token to Beanstream to make a payment, Beanstream then looks up the card number from that token and makes the payment. Tokens can also be used to create payment profiles.

### Example


```python
import openapi_client
from openapi_client.models.token_request import TokenRequest
from openapi_client.models.token_response import TokenResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.beanstream.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.beanstream.com/api/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TokenizationApi(api_client)
    token_request = openapi_client.TokenRequest() # TokenRequest |  (optional)

    try:
        # Tokenize credit card
        api_response = api_instance.scripts_tokenization_tokens_post(token_request=token_request)
        print("The response of TokenizationApi->scripts_tokenization_tokens_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TokenizationApi->scripts_tokenization_tokens_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token_request** | [**TokenRequest**](TokenRequest.md)|  | [optional] 

### Return type

[**TokenResponse**](TokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Token response object. One will always be returned even if the data or card was invalid. The validity of the card is not checked with this API call. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

