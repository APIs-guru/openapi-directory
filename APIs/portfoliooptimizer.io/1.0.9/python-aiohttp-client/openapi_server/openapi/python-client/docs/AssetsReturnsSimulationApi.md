# openapi_client.AssetsReturnsSimulationApi

All URIs are relative to *https://api.portfoliooptimizer.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assets_returns_simulation_bootstrap_post**](AssetsReturnsSimulationApi.md#assets_returns_simulation_bootstrap_post) | **POST** /assets/returns/simulation/bootstrap | Bootstrap


# **assets_returns_simulation_bootstrap_post**
> AssetsReturnsSimulationBootstrapPost200Response assets_returns_simulation_bootstrap_post(body)

Bootstrap

Simulate the return(s) of one or several asset(s) for one or several time period(s) using a bootstrap method.  References * [Efron, B. (1979), Bootstrap methods: Another look at the jackknife, The Annals of Statistics 7, 1-26](https://projecteuclid.org/journals/annals-of-statistics/volume-7/issue-1/Bootstrap-Methods-Another-Look-at-the-Jackknife/10.1214/aos/1176344552.full) * [Politis, D. N. and Romano, J. P., A circular block resampling procedure for stationary data, in R. Lepage and L. Billard, eds, Exploring the Limits of Bootstrap, Wiley, New York, pp. 263-270](https://statistics.stanford.edu/technical-reports/circular-block-resampling-procedure-stationary-data) * [Politis, D. N. and Romano, J. P., The stationary bootstrap, Journal of the American Statistical Association 89, 1303-1313](https://www.jstor.org/stable/2290993) 

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.assets_returns_simulation_bootstrap_post200_response import AssetsReturnsSimulationBootstrapPost200Response
from openapi_client.models.assets_returns_simulation_bootstrap_post_request import AssetsReturnsSimulationBootstrapPostRequest
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
    api_instance = openapi_client.AssetsReturnsSimulationApi(api_client)
    body = {"assets":[{"assetReturns":[0.1,-0.05,0.01,0.025,-0.1]},{"assetReturns":[0,0.01,0.02,-0.01,0.05]}],"bootstrapBlockLength":2,"bootstrapMethod":"circularBlock","simulations":5,"simulationsLength":4} # AssetsReturnsSimulationBootstrapPostRequest | 

    try:
        # Bootstrap
        api_response = api_instance.assets_returns_simulation_bootstrap_post(body)
        print("The response of AssetsReturnsSimulationApi->assets_returns_simulation_bootstrap_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetsReturnsSimulationApi->assets_returns_simulation_bootstrap_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AssetsReturnsSimulationBootstrapPostRequest**](AssetsReturnsSimulationBootstrapPostRequest.md)|  | 

### Return type

[**AssetsReturnsSimulationBootstrapPost200Response**](AssetsReturnsSimulationBootstrapPost200Response.md)

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

