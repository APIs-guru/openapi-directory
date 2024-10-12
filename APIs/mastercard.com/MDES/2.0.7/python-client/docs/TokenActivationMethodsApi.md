# openapi_client.TokenActivationMethodsApi

All URIs are relative to *https://api.mastercard.com/mdes/csapi/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**token_activationmethods_post**](TokenActivationMethodsApi.md#token_activationmethods_post) | **POST** /token/activationmethods | 


# **token_activationmethods_post**
> TokenActivationMethodsResponseSchema token_activationmethods_post(token_activation_methods_request_schema=token_activation_methods_request_schema)



Used to retrieve the available Activation Methods for a token that is awaiting activation. Activation Methods are the means by which a cardholder may complete cardholder authentication with the issuer beyond the scope of MDES. It is possible that there are no Activation Methods for a token when an issuer did not provide any cardholder-specific information with the Tokenization Authorization Request (TAR) pre-digitization network message response. 

### Example


```python
import openapi_client
from openapi_client.models.token_activation_methods_request_schema import TokenActivationMethodsRequestSchema
from openapi_client.models.token_activation_methods_response_schema import TokenActivationMethodsResponseSchema
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
    api_instance = openapi_client.TokenActivationMethodsApi(api_client)
    token_activation_methods_request_schema = openapi_client.TokenActivationMethodsRequestSchema() # TokenActivationMethodsRequestSchema | Contains the details of the request message. (optional)

    try:
        api_response = api_instance.token_activationmethods_post(token_activation_methods_request_schema=token_activation_methods_request_schema)
        print("The response of TokenActivationMethodsApi->token_activationmethods_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TokenActivationMethodsApi->token_activationmethods_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token_activation_methods_request_schema** | [**TokenActivationMethodsRequestSchema**](TokenActivationMethodsRequestSchema.md)| Contains the details of the request message. | [optional] 

### Return type

[**TokenActivationMethodsResponseSchema**](TokenActivationMethodsResponseSchema.md)

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

