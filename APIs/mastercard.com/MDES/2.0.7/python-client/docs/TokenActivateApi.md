# openapi_client.TokenActivateApi

All URIs are relative to *https://api.mastercard.com/mdes/csapi/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**token_activate_post**](TokenActivateApi.md#token_activate_post) | **POST** /token/activate | 


# **token_activate_post**
> TokenActivateResponseSchema token_activate_post(token_activate_request_schema=token_activate_request_schema)



Used to activate a token for a digitization that has been approved and provisioned, but requires additional cardholder authentication prior to activation. If the provisioning was not completed successfully, activation cannot be accomplished using Customer Service API. It is expected that a cardholder will complete the authentication process using an issuer's call center or using an issuer-supplied mobile application, and only then should the issuer use this API to activate the token. 

### Example


```python
import openapi_client
from openapi_client.models.token_activate_request_schema import TokenActivateRequestSchema
from openapi_client.models.token_activate_response_schema import TokenActivateResponseSchema
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
    api_instance = openapi_client.TokenActivateApi(api_client)
    token_activate_request_schema = openapi_client.TokenActivateRequestSchema() # TokenActivateRequestSchema | Contains the details of the request message. (optional)

    try:
        api_response = api_instance.token_activate_post(token_activate_request_schema=token_activate_request_schema)
        print("The response of TokenActivateApi->token_activate_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TokenActivateApi->token_activate_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token_activate_request_schema** | [**TokenActivateRequestSchema**](TokenActivateRequestSchema.md)| Contains the details of the request message. | [optional] 

### Return type

[**TokenActivateResponseSchema**](TokenActivateResponseSchema.md)

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

