# openapi_client.AssetsVolatilityApi

All URIs are relative to *https://api.portfoliooptimizer.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assets_volatility_post**](AssetsVolatilityApi.md#assets_volatility_post) | **POST** /assets/volatility | Volatility


# **assets_volatility_post**
> AssetsVolatilityPost200Response assets_volatility_post(body)

Volatility

Compute the volatility (i.e., standard deviation) of one or several asset(s) from either:   * The asset returns * The asset covariance matrix * The asset variance(s)  References * [Wikipedia, Standard Deviation](https://en.wikipedia.org/wiki/Standard_deviation) 

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.assets_volatility_post200_response import AssetsVolatilityPost200Response
from openapi_client.models.assets_volatility_post_request import AssetsVolatilityPostRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.portfoliooptimizer.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.portfoliooptimizer.io/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AssetsVolatilityApi(api_client)
    body = {"assets":2,"assetsCovarianceMatrix":[[0.01,-0.0025],[-0.0025,0.0025]]} # AssetsVolatilityPostRequest | 

    try:
        # Volatility
        api_response = api_instance.assets_volatility_post(body)
        print("The response of AssetsVolatilityApi->assets_volatility_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetsVolatilityApi->assets_volatility_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AssetsVolatilityPostRequest**](AssetsVolatilityPostRequest.md)|  | 

### Return type

[**AssetsVolatilityPost200Response**](AssetsVolatilityPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

