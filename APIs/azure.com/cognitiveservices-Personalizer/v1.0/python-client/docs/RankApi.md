# openapi_client.RankApi

All URIs are relative to *https://azure.local/personalizer/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**rank**](RankApi.md#rank) | **POST** /rank | Post Rank.


# **rank**
> RankResponse rank(rank_request)

Post Rank.

Submit a Personalizer rank request, to get which of the provided actions should be used in the provided context.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.rank_request import RankRequest
from openapi_client.models.rank_response import RankResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/personalizer/v1.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/personalizer/v1.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RankApi(api_client)
    rank_request = openapi_client.RankRequest() # RankRequest | A Personalizer request.

    try:
        # Post Rank.
        api_response = api_instance.rank(rank_request)
        print("The response of RankApi->rank:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RankApi->rank: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rank_request** | [**RankRequest**](RankRequest.md)| A Personalizer request. | 

### Return type

[**RankResponse**](RankResponse.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Success |  -  |
**0** | Invalid rank request. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

