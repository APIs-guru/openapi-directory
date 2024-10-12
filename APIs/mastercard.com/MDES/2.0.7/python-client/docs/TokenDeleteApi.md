# openapi_client.TokenDeleteApi

All URIs are relative to *https://api.mastercard.com/mdes/csapi/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**token_delete_post**](TokenDeleteApi.md#token_delete_post) | **POST** /token/delete | 


# **token_delete_post**
> TokenDeleteResponseSchema token_delete_post(token_delete_request_schema=token_delete_request_schema)



Used to delete a token so that it may not initiate any new transactions. All authorizations for a deleted token will be declined. A deleted token may not be returned to an active state. 

### Example


```python
import openapi_client
from openapi_client.models.token_delete_request_schema import TokenDeleteRequestSchema
from openapi_client.models.token_delete_response_schema import TokenDeleteResponseSchema
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
    api_instance = openapi_client.TokenDeleteApi(api_client)
    token_delete_request_schema = openapi_client.TokenDeleteRequestSchema() # TokenDeleteRequestSchema | Contains the details of the request message. (optional)

    try:
        api_response = api_instance.token_delete_post(token_delete_request_schema=token_delete_request_schema)
        print("The response of TokenDeleteApi->token_delete_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TokenDeleteApi->token_delete_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token_delete_request_schema** | [**TokenDeleteRequestSchema**](TokenDeleteRequestSchema.md)| Contains the details of the request message. | [optional] 

### Return type

[**TokenDeleteResponseSchema**](TokenDeleteResponseSchema.md)

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

