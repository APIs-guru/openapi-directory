# openapi_client.SearchApi

All URIs are relative to *https://api.mastercard.com/mdes/csapi/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**search_post**](SearchApi.md#search_post) | **POST** /search | 


# **search_post**
> SearchResponseSchema search_post(search_request_schema=search_request_schema)



Provides the ability to search for tokens based on Account PAN, Alternate Account Identifier, Token Unique Reference, Token, Payment App Instance Id or Comment Id. Returns all of the tokens associated with an account according to the scope of the indicated search request criteria. The response includes key state and informational data for each token, including the Token Unique Reference which is needed for subsequent token lifecycle management activities.<br><br>_Notes:_ The Search API request MUST include only one of the available search methods Account PAN, Token Unique Reference, Token, Payment App Instance Id, Comment Id, or Alternate Account Identifier. They cannot be used together in a single request.<br> Moreover, this function only retrieves results if the search criteria matches a current value from the token vault. In other words, if the search criteria is a PAN that has been replaced, the system will not retrieve any data.  

### Example


```python
import openapi_client
from openapi_client.models.search_request_schema import SearchRequestSchema
from openapi_client.models.search_response_schema import SearchResponseSchema
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
    api_instance = openapi_client.SearchApi(api_client)
    search_request_schema = openapi_client.SearchRequestSchema() # SearchRequestSchema | Contains the details of the request message. (optional)

    try:
        api_response = api_instance.search_post(search_request_schema=search_request_schema)
        print("The response of SearchApi->search_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SearchApi->search_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search_request_schema** | [**SearchRequestSchema**](SearchRequestSchema.md)| Contains the details of the request message. | [optional] 

### Return type

[**SearchResponseSchema**](SearchResponseSchema.md)

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

