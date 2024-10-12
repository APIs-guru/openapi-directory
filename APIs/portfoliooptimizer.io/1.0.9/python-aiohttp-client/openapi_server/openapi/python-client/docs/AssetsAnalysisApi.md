# openapi_client.AssetsAnalysisApi

All URIs are relative to *https://api.portfoliooptimizer.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assets_analysis_absorption_ratio_post**](AssetsAnalysisApi.md#assets_analysis_absorption_ratio_post) | **POST** /assets/analysis/absorption-ratio | Absorption Ratio
[**assets_analysis_turbulence_index_post**](AssetsAnalysisApi.md#assets_analysis_turbulence_index_post) | **POST** /assets/analysis/turbulence-index | Turbulence Index


# **assets_analysis_absorption_ratio_post**
> AssetsAnalysisAbsorptionRatioPost200Response assets_analysis_absorption_ratio_post(body)

Absorption Ratio

Compute the absorption ratio associated to a universe of assets.  References * [Mark Kritzman, Yuanzhen Li, Sebastien Page and Roberto Rigobon, Principal Components as a Measure of Systemic Risk, The Journal of Portfolio Management Summer 2011, 37 (4) 112-126](https://jpm.pm-research.com/content/37/4/112) 

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.assets_analysis_absorption_ratio_post200_response import AssetsAnalysisAbsorptionRatioPost200Response
from openapi_client.models.assets_analysis_absorption_ratio_post_request import AssetsAnalysisAbsorptionRatioPostRequest
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
    api_instance = openapi_client.AssetsAnalysisApi(api_client)
    body = {"assets":2,"assetsCovarianceMatrix":[[9,1],[1,1]]} # AssetsAnalysisAbsorptionRatioPostRequest | 

    try:
        # Absorption Ratio
        api_response = api_instance.assets_analysis_absorption_ratio_post(body)
        print("The response of AssetsAnalysisApi->assets_analysis_absorption_ratio_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetsAnalysisApi->assets_analysis_absorption_ratio_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AssetsAnalysisAbsorptionRatioPostRequest**](AssetsAnalysisAbsorptionRatioPostRequest.md)|  | 

### Return type

[**AssetsAnalysisAbsorptionRatioPost200Response**](AssetsAnalysisAbsorptionRatioPost200Response.md)

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

# **assets_analysis_turbulence_index_post**
> AssetsAnalysisTurbulenceIndexPost200Response assets_analysis_turbulence_index_post(body)

Turbulence Index

Compute the turbulence index associated to a universe of assets.  References * [M. Kritzman, Y. Li, Skulls, Financial Turbulence, and Risk Management,Financial Analysts Journal, Volume 66, Number 5, Pages 30-41, Year 2010](https://www.tandfonline.com/doi/abs/10.2469/faj.v66.n5.3) * [Kinlaw, W., Turkington, D. Correlation surprise. J Asset Manag 14, 385–399 (2013)](https://link.springer.com/article/10.1057/jam.2013.27) 

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.assets_analysis_turbulence_index_post200_response import AssetsAnalysisTurbulenceIndexPost200Response
from openapi_client.models.assets_analysis_turbulence_index_post_request import AssetsAnalysisTurbulenceIndexPostRequest
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
    api_instance = openapi_client.AssetsAnalysisApi(api_client)
    body = {"assets":1,"assetsAverageReturns":[0.5],"assetsCovarianceMatrix":[[1]],"assetsReturns":[1]} # AssetsAnalysisTurbulenceIndexPostRequest | 

    try:
        # Turbulence Index
        api_response = api_instance.assets_analysis_turbulence_index_post(body)
        print("The response of AssetsAnalysisApi->assets_analysis_turbulence_index_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetsAnalysisApi->assets_analysis_turbulence_index_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AssetsAnalysisTurbulenceIndexPostRequest**](AssetsAnalysisTurbulenceIndexPostRequest.md)|  | 

### Return type

[**AssetsAnalysisTurbulenceIndexPost200Response**](AssetsAnalysisTurbulenceIndexPost200Response.md)

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

