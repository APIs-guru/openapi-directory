# openapi_client.UpdateTokenAssuranceApi

All URIs are relative to *https://api.mastercard.com/mdes/csapi/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**updatetokenassurance_post**](UpdateTokenAssuranceApi.md#updatetokenassurance_post) | **POST** /updatetokenassurance | 


# **updatetokenassurance_post**
> UpdateTokenAssuranceResponseSchema updatetokenassurance_post(update_token_assurance_request_schema=update_token_assurance_request_schema)



Used after an issuer has performed additional cardholder authentication to indicate an increased level of token assurance. It will only be applied to tokens that actually have a Token Assurance Level, and those that are in ACTIVE or SUSPENDED state. 

### Example


```python
import openapi_client
from openapi_client.models.update_token_assurance_request_schema import UpdateTokenAssuranceRequestSchema
from openapi_client.models.update_token_assurance_response_schema import UpdateTokenAssuranceResponseSchema
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
    api_instance = openapi_client.UpdateTokenAssuranceApi(api_client)
    update_token_assurance_request_schema = openapi_client.UpdateTokenAssuranceRequestSchema() # UpdateTokenAssuranceRequestSchema | Contains the details of the request message. (optional)

    try:
        api_response = api_instance.updatetokenassurance_post(update_token_assurance_request_schema=update_token_assurance_request_schema)
        print("The response of UpdateTokenAssuranceApi->updatetokenassurance_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UpdateTokenAssuranceApi->updatetokenassurance_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **update_token_assurance_request_schema** | [**UpdateTokenAssuranceRequestSchema**](UpdateTokenAssuranceRequestSchema.md)| Contains the details of the request message. | [optional] 

### Return type

[**UpdateTokenAssuranceResponseSchema**](UpdateTokenAssuranceResponseSchema.md)

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

