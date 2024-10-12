# openapi_client.TokenCommentsApi

All URIs are relative to *https://api.mastercard.com/mdes/csapi/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**token_comments_post**](TokenCommentsApi.md#token_comments_post) | **POST** /token/comments | 


# **token_comments_post**
> TokenCommentsResponseSchema token_comments_post(token_comments_request_schema=token_comments_request_schema)



Used to retrieve all comments associated with a token. Typically the response includes comments created earlier by Issuer Customer Service representatives detailing additional information about a particular inquiry or event. There may also be comments with warnings of potential fraud. These comments are created automatically by the MDES system when a Token requestor indicates a high risk of fraud during digitization. 

### Example


```python
import openapi_client
from openapi_client.models.token_comments_request_schema import TokenCommentsRequestSchema
from openapi_client.models.token_comments_response_schema import TokenCommentsResponseSchema
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
    api_instance = openapi_client.TokenCommentsApi(api_client)
    token_comments_request_schema = openapi_client.TokenCommentsRequestSchema() # TokenCommentsRequestSchema | Contains the details of the request message. (optional)

    try:
        api_response = api_instance.token_comments_post(token_comments_request_schema=token_comments_request_schema)
        print("The response of TokenCommentsApi->token_comments_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TokenCommentsApi->token_comments_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token_comments_request_schema** | [**TokenCommentsRequestSchema**](TokenCommentsRequestSchema.md)| Contains the details of the request message. | [optional] 

### Return type

[**TokenCommentsResponseSchema**](TokenCommentsResponseSchema.md)

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

