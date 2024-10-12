# openapi_client.TokenUnsuspendApi

All URIs are relative to *https://api.mastercard.com/mdes/csapi/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**token_unsuspend_post**](TokenUnsuspendApi.md#token_unsuspend_post) | **POST** /token/unsuspend | 


# **token_unsuspend_post**
> TokenUnsuspendResponseSchema token_unsuspend_post(token_unsuspend_request_schema=token_unsuspend_request_schema)



Used to unsuspend or resume a suspended token and return it to the active state where it may initiate new transactions. Tokens may be suspended by multiple parties (suspenders) concurrently. The token status is updated from ACTIVE to SUSPENDED when the first suspender triggers a suspend action. Additional suspenders can add their suspend action to the list of suspenders. Suspenders can unsuspend only their own suspend action. All suspenders need to perform an unsuspend action to move a token from SUSPENDED to ACTIVE. The token status will only change when the last suspender has unsuspended the token. <br>For CoF tokens, the only two supported suspenders are issuer and token requestor.<br>For Apple Pay tokens, there are some differences in behavior versus the general principles. An issuer may add themselves as a suspender to a token already suspended by a cardholder, as above. However, a cardholder cannot suspend a token already suspended by the issuer. As a special case for Apple Pay, an issuer may unsuspend (override) a token already suspended by a cardholder. However, a cardholder cannot unsuspend a token already suspended by the issuer. 

### Example


```python
import openapi_client
from openapi_client.models.token_unsuspend_request_schema import TokenUnsuspendRequestSchema
from openapi_client.models.token_unsuspend_response_schema import TokenUnsuspendResponseSchema
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
    api_instance = openapi_client.TokenUnsuspendApi(api_client)
    token_unsuspend_request_schema = openapi_client.TokenUnsuspendRequestSchema() # TokenUnsuspendRequestSchema | Contains the details of the request message. (optional)

    try:
        api_response = api_instance.token_unsuspend_post(token_unsuspend_request_schema=token_unsuspend_request_schema)
        print("The response of TokenUnsuspendApi->token_unsuspend_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TokenUnsuspendApi->token_unsuspend_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token_unsuspend_request_schema** | [**TokenUnsuspendRequestSchema**](TokenUnsuspendRequestSchema.md)| Contains the details of the request message. | [optional] 

### Return type

[**TokenUnsuspendResponseSchema**](TokenUnsuspendResponseSchema.md)

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

