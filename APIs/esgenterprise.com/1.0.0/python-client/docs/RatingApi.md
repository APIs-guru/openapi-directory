# openapi_client.RatingApi

All URIs are relative to *https://tf689y3hbj.execute-api.us-east-1.amazonaws.com/prod/authorization*

Method | HTTP request | Description
------------- | ------------- | -------------
[**search_get**](RatingApi.md#search_get) | **GET** /search | List all company ESG Ratings


# **search_get**
> SearchGet200Response search_get(q)

List all company ESG Ratings

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.search_get200_response import SearchGet200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://tf689y3hbj.execute-api.us-east-1.amazonaws.com/prod/authorization
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://tf689y3hbj.execute-api.us-east-1.amazonaws.com/prod/authorization"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RatingApi(api_client)
    q = 'q_example' # str | Company name or stock symbol

    try:
        # List all company ESG Ratings
        api_response = api_instance.search_get(q)
        print("The response of RatingApi->search_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RatingApi->search_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **str**| Company name or stock symbol | 

### Return type

[**SearchGet200Response**](SearchGet200Response.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An array of ESG Ratings |  * x-next - ESG ratings <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

