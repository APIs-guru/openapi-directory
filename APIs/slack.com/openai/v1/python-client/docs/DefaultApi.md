# openapi_client.DefaultApi

All URIs are relative to *https://slack.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ai_alpha_search_messages**](DefaultApi.md#ai_alpha_search_messages) | **POST** /ai.alpha.search.messages | 


# **ai_alpha_search_messages**
> AiAlphaSearchMessages200Response ai_alpha_search_messages(search_request)



Search for messages matching a query

### Example


```python
import openapi_client
from openapi_client.models.ai_alpha_search_messages200_response import AiAlphaSearchMessages200Response
from openapi_client.models.search_request import SearchRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://slack.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://slack.com/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    search_request = openapi_client.SearchRequest() # SearchRequest | 

    try:
        api_response = api_instance.ai_alpha_search_messages(search_request)
        print("The response of DefaultApi->ai_alpha_search_messages:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->ai_alpha_search_messages: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search_request** | [**SearchRequest**](SearchRequest.md)|  | 

### Return type

[**AiAlphaSearchMessages200Response**](AiAlphaSearchMessages200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

