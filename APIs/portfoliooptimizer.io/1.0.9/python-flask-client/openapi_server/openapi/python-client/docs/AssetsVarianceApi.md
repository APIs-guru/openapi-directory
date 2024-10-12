# openapi_client.AssetsVarianceApi

All URIs are relative to *https://api.portfoliooptimizer.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assets_variance_post**](AssetsVarianceApi.md#assets_variance_post) | **POST** /assets/variance | Variance


# **assets_variance_post**
> AssetsVariancePost200Response assets_variance_post(body)

Variance

Compute the variance of one or several asset(s) from either:   * The asset returns * The asset covariance matrix * The asset volatility(ies)  References * [Wikipedia, Variance](https://en.wikipedia.org/wiki/Variance)         

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.assets_variance_post200_response import AssetsVariancePost200Response
from openapi_client.models.assets_variance_post_request import AssetsVariancePostRequest
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
    api_instance = openapi_client.AssetsVarianceApi(api_client)
    body = {"assets":2,"assetsCovarianceMatrix":[[0.01,-0.0025],[-0.0025,0.0025]]} # AssetsVariancePostRequest | 

    try:
        # Variance
        api_response = api_instance.assets_variance_post(body)
        print("The response of AssetsVarianceApi->assets_variance_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetsVarianceApi->assets_variance_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AssetsVariancePostRequest**](AssetsVariancePostRequest.md)|  | 

### Return type

[**AssetsVariancePost200Response**](AssetsVariancePost200Response.md)

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

