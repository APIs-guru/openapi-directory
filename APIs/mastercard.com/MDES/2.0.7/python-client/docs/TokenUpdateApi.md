# openapi_client.TokenUpdateApi

All URIs are relative to *https://api.mastercard.com/mdes/csapi/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**token_update_post**](TokenUpdateApi.md#token_update_post) | **POST** /token/update | 


# **token_update_post**
> TokenUpdateResponseSchema token_update_post(token_update_request_schema=token_update_request_schema)



Used to update Account PAN Mapping Information or Issuer Product Configuration ID associated to a provisioned token. To update a specific token, the API should be requested using the Token Unique Reference. To update all tokens mapped to a specific Account PAN, the API should be requested using the Account PAN. In either case, updates will only be applied to tokens in ACTIVE or SUSPENDED state, not those in IN PROGRESS or DELETED state. When updating Account PAN Mapping Information, the Account PAN, Expiration Date and Sequence Number, may be updated individually or in any combination. Only information provided will be updated. The account mapping will only update an Account PAN for a new Account PAN when they are both in the same Account Range. 

### Example


```python
import openapi_client
from openapi_client.models.token_update_request_schema import TokenUpdateRequestSchema
from openapi_client.models.token_update_response_schema import TokenUpdateResponseSchema
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
    api_instance = openapi_client.TokenUpdateApi(api_client)
    token_update_request_schema = openapi_client.TokenUpdateRequestSchema() # TokenUpdateRequestSchema | Contains the details of the request message. (optional)

    try:
        api_response = api_instance.token_update_post(token_update_request_schema=token_update_request_schema)
        print("The response of TokenUpdateApi->token_update_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TokenUpdateApi->token_update_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token_update_request_schema** | [**TokenUpdateRequestSchema**](TokenUpdateRequestSchema.md)| Contains the details of the request message. | [optional] 

### Return type

[**TokenUpdateResponseSchema**](TokenUpdateResponseSchema.md)

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

