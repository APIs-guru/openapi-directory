# openapi_client.PortfolioAnalysisApi

All URIs are relative to *https://api.portfoliooptimizer.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**portfolio_analysis_alpha_post**](PortfolioAnalysisApi.md#portfolio_analysis_alpha_post) | **POST** /portfolio/analysis/alpha | Alpha
[**portfolio_analysis_beta_post**](PortfolioAnalysisApi.md#portfolio_analysis_beta_post) | **POST** /portfolio/analysis/beta | Beta
[**portfolio_analysis_contributions_return_post**](PortfolioAnalysisApi.md#portfolio_analysis_contributions_return_post) | **POST** /portfolio/analysis/contributions/return | Return Contributions
[**portfolio_analysis_contributions_risk_post**](PortfolioAnalysisApi.md#portfolio_analysis_contributions_risk_post) | **POST** /portfolio/analysis/contributions/risk | Risk Contributions
[**portfolio_analysis_correlation_spectrum_post**](PortfolioAnalysisApi.md#portfolio_analysis_correlation_spectrum_post) | **POST** /portfolio/analysis/correlation-spectrum | Correlation Spectrum
[**portfolio_analysis_diversification_ratio_post**](PortfolioAnalysisApi.md#portfolio_analysis_diversification_ratio_post) | **POST** /portfolio/analysis/diversification-ratio | Diversification Ratio
[**portfolio_analysis_drawdowns_post**](PortfolioAnalysisApi.md#portfolio_analysis_drawdowns_post) | **POST** /portfolio/analysis/drawdowns | Drawdowns
[**portfolio_analysis_effective_number_of_bets_post**](PortfolioAnalysisApi.md#portfolio_analysis_effective_number_of_bets_post) | **POST** /portfolio/analysis/effective-number-of-bets | Effective Number of Bets
[**portfolio_analysis_factors_exposures_post**](PortfolioAnalysisApi.md#portfolio_analysis_factors_exposures_post) | **POST** /portfolio/analysis/factors/exposures | Factor Exposures
[**portfolio_analysis_mean_variance_efficient_frontier_post**](PortfolioAnalysisApi.md#portfolio_analysis_mean_variance_efficient_frontier_post) | **POST** /portfolio/analysis/mean-variance/efficient-frontier | Mean-Variance Efficient Frontier
[**portfolio_analysis_mean_variance_minimum_variance_frontier_post**](PortfolioAnalysisApi.md#portfolio_analysis_mean_variance_minimum_variance_frontier_post) | **POST** /portfolio/analysis/mean-variance/minimum-variance-frontier | Mean-Variance Minimum Variance Frontier
[**portfolio_analysis_return_post**](PortfolioAnalysisApi.md#portfolio_analysis_return_post) | **POST** /portfolio/analysis/return | Arithmetic Return
[**portfolio_analysis_returns_average_post**](PortfolioAnalysisApi.md#portfolio_analysis_returns_average_post) | **POST** /portfolio/analysis/returns/average | Arithmetic Average Return
[**portfolio_analysis_tracking_error_post**](PortfolioAnalysisApi.md#portfolio_analysis_tracking_error_post) | **POST** /portfolio/analysis/tracking-error | Tracking Error
[**portfolio_analysis_ulcer_index_post**](PortfolioAnalysisApi.md#portfolio_analysis_ulcer_index_post) | **POST** /portfolio/analysis/ulcer-index | Ulcer Index
[**portfolio_analysis_ulcer_performance_index_post**](PortfolioAnalysisApi.md#portfolio_analysis_ulcer_performance_index_post) | **POST** /portfolio/analysis/ulcer-performance-index | Ulcer Performance Index
[**portfolio_analysis_volatility_post**](PortfolioAnalysisApi.md#portfolio_analysis_volatility_post) | **POST** /portfolio/analysis/volatility | Volatility


# **portfolio_analysis_alpha_post**
> PortfolioAnalysisAlphaPost200Response portfolio_analysis_alpha_post(body)

Alpha

Compute the Jensen’s alpha of one or several portfolio(s) in the Capital Asset Pricing Model (CAPM).  References * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution   

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.portfolio_analysis_alpha_post200_response import PortfolioAnalysisAlphaPost200Response
from openapi_client.models.portfolio_analysis_alpha_post_request import PortfolioAnalysisAlphaPostRequest
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
    api_instance = openapi_client.PortfolioAnalysisApi(api_client)
    body = {"benchmarkReturns":[0.002,0.025,0.018,-0.011,0.014],"portfolios":[{"portfolioReturns":[0.003,0.026,0.011,-0.01,0.015]}],"riskFreeRate":0.01} # PortfolioAnalysisAlphaPostRequest | 

    try:
        # Alpha
        api_response = api_instance.portfolio_analysis_alpha_post(body)
        print("The response of PortfolioAnalysisApi->portfolio_analysis_alpha_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortfolioAnalysisApi->portfolio_analysis_alpha_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PortfolioAnalysisAlphaPostRequest**](PortfolioAnalysisAlphaPostRequest.md)|  | 

### Return type

[**PortfolioAnalysisAlphaPost200Response**](PortfolioAnalysisAlphaPost200Response.md)

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

# **portfolio_analysis_beta_post**
> PortfolioAnalysisBetaPost200Response portfolio_analysis_beta_post(body)

Beta

Compute the beta of one or several portfolio(s) in the Capital Asset Pricing Model (CAPM).  References * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution   

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.portfolio_analysis_alpha_post_request import PortfolioAnalysisAlphaPostRequest
from openapi_client.models.portfolio_analysis_beta_post200_response import PortfolioAnalysisBetaPost200Response
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
    api_instance = openapi_client.PortfolioAnalysisApi(api_client)
    body = {"benchmarkReturns":[0.002,0.025,0.018,-0.011,0.014],"portfolios":[{"portfolioReturns":[0.003,0.026,0.011,-0.01,0.015]}],"riskFreeRate":0.01} # PortfolioAnalysisAlphaPostRequest | 

    try:
        # Beta
        api_response = api_instance.portfolio_analysis_beta_post(body)
        print("The response of PortfolioAnalysisApi->portfolio_analysis_beta_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortfolioAnalysisApi->portfolio_analysis_beta_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PortfolioAnalysisAlphaPostRequest**](PortfolioAnalysisAlphaPostRequest.md)|  | 

### Return type

[**PortfolioAnalysisBetaPost200Response**](PortfolioAnalysisBetaPost200Response.md)

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

# **portfolio_analysis_contributions_return_post**
> PortfolioAnalysisContributionsReturnPost200Response portfolio_analysis_contributions_return_post(body)

Return Contributions

Perform a return contribution analysis of one or several portfolio(s), optionally using groups of assets.  References * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution 

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.portfolio_analysis_contributions_return_post200_response import PortfolioAnalysisContributionsReturnPost200Response
from openapi_client.models.portfolio_analysis_contributions_return_post_request import PortfolioAnalysisContributionsReturnPostRequest
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
    api_instance = openapi_client.PortfolioAnalysisApi(api_client)
    body = {"assets":3,"assetsGroups":[[1,2]],"assetsReturns":[0.01,-0.01,0.025],"portfolios":[{"assetsWeights":[0.5,0.25,0.25]}]} # PortfolioAnalysisContributionsReturnPostRequest | 

    try:
        # Return Contributions
        api_response = api_instance.portfolio_analysis_contributions_return_post(body)
        print("The response of PortfolioAnalysisApi->portfolio_analysis_contributions_return_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortfolioAnalysisApi->portfolio_analysis_contributions_return_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PortfolioAnalysisContributionsReturnPostRequest**](PortfolioAnalysisContributionsReturnPostRequest.md)|  | 

### Return type

[**PortfolioAnalysisContributionsReturnPost200Response**](PortfolioAnalysisContributionsReturnPost200Response.md)

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

# **portfolio_analysis_contributions_risk_post**
> PortfolioAnalysisContributionsRiskPost200Response portfolio_analysis_contributions_risk_post(body)

Risk Contributions

Perform a risk contribution analysis of one or several portfolio(s), optionally using groups of assets.  References * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution 

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.portfolio_analysis_contributions_risk_post200_response import PortfolioAnalysisContributionsRiskPost200Response
from openapi_client.models.portfolio_analysis_contributions_risk_post_request import PortfolioAnalysisContributionsRiskPostRequest
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
    api_instance = openapi_client.PortfolioAnalysisApi(api_client)
    body = {"assets":3,"assetsCovarianceMatrix":[[1.0E-4,0,0],[0,1.0E-4,0],[0,0,0.04]],"portfolios":[{"assetsWeights":[0.5,0.25,0.25]}]} # PortfolioAnalysisContributionsRiskPostRequest | 

    try:
        # Risk Contributions
        api_response = api_instance.portfolio_analysis_contributions_risk_post(body)
        print("The response of PortfolioAnalysisApi->portfolio_analysis_contributions_risk_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortfolioAnalysisApi->portfolio_analysis_contributions_risk_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PortfolioAnalysisContributionsRiskPostRequest**](PortfolioAnalysisContributionsRiskPostRequest.md)|  | 

### Return type

[**PortfolioAnalysisContributionsRiskPost200Response**](PortfolioAnalysisContributionsRiskPost200Response.md)

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

# **portfolio_analysis_correlation_spectrum_post**
> PortfolioAnalysisCorrelationSpectrumPost200Response portfolio_analysis_correlation_spectrum_post(body)

Correlation Spectrum

Compute the correlation spectrum of one or several portfolio(s).  References * [Tristan Froidure, Khalid Jalalzai and Yves Choueifaty, Portfolio Rho-Representativity, International Journal of Theoretical and Applied FinanceVol. 22, No. 07, 1950034 (2019)](https://www.worldscientific.com/doi/10.1142/S0219024919500341) 

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.portfolio_analysis_correlation_spectrum_post200_response import PortfolioAnalysisCorrelationSpectrumPost200Response
from openapi_client.models.portfolio_analysis_correlation_spectrum_post_request import PortfolioAnalysisCorrelationSpectrumPostRequest
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
    api_instance = openapi_client.PortfolioAnalysisApi(api_client)
    body = {"assets":2,"assetsCovarianceMatrix":[[0.0025,5.0E-4],[5.0E-4,0.01]],"portfolios":[{"assetsWeights":[0.5,0.5]}]} # PortfolioAnalysisCorrelationSpectrumPostRequest | 

    try:
        # Correlation Spectrum
        api_response = api_instance.portfolio_analysis_correlation_spectrum_post(body)
        print("The response of PortfolioAnalysisApi->portfolio_analysis_correlation_spectrum_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortfolioAnalysisApi->portfolio_analysis_correlation_spectrum_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PortfolioAnalysisCorrelationSpectrumPostRequest**](PortfolioAnalysisCorrelationSpectrumPostRequest.md)|  | 

### Return type

[**PortfolioAnalysisCorrelationSpectrumPost200Response**](PortfolioAnalysisCorrelationSpectrumPost200Response.md)

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

# **portfolio_analysis_diversification_ratio_post**
> PortfolioAnalysisDiversificationRatioPost200Response portfolio_analysis_diversification_ratio_post(body)

Diversification Ratio

Compute the diversification ratio of one or several portfolio(s).  References * [Yves Choueifaty and Yves Coignard, Toward Maximum Diversification, The Journal of Portfolio Management Fall 2008, 35 (1) 40-51](https://doi.org/10.3905/JPM.2008.35.1.40) * [Tristan Froidure, Khalid Jalalzai and Yves Choueifaty, Portfolio Rho-Representativity, International Journal of Theoretical and Applied FinanceVol. 22, No. 07, 1950034 (2019)](https://www.worldscientific.com/doi/10.1142/S0219024919500341) 

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.portfolio_analysis_correlation_spectrum_post_request import PortfolioAnalysisCorrelationSpectrumPostRequest
from openapi_client.models.portfolio_analysis_diversification_ratio_post200_response import PortfolioAnalysisDiversificationRatioPost200Response
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
    api_instance = openapi_client.PortfolioAnalysisApi(api_client)
    body = {"assets":2,"assetsCovarianceMatrix":[[0.0025,5.0E-4],[5.0E-4,0.01]],"portfolios":[{"assetsWeights":[0.5,0.5]}]} # PortfolioAnalysisCorrelationSpectrumPostRequest | 

    try:
        # Diversification Ratio
        api_response = api_instance.portfolio_analysis_diversification_ratio_post(body)
        print("The response of PortfolioAnalysisApi->portfolio_analysis_diversification_ratio_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortfolioAnalysisApi->portfolio_analysis_diversification_ratio_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PortfolioAnalysisCorrelationSpectrumPostRequest**](PortfolioAnalysisCorrelationSpectrumPostRequest.md)|  | 

### Return type

[**PortfolioAnalysisDiversificationRatioPost200Response**](PortfolioAnalysisDiversificationRatioPost200Response.md)

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

# **portfolio_analysis_drawdowns_post**
> PortfolioAnalysisDrawdownsPost200Response portfolio_analysis_drawdowns_post(body)

Drawdowns

Compute the drawdown function - also called the underwater equity curve -, as well as the worst 10 drawdowns of one or several portfolio(s).  References * [Wikipedia, Drawdown](https://en.wikipedia.org/wiki/Drawdown_(economics))         

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.portfolio_analysis_drawdowns_post200_response import PortfolioAnalysisDrawdownsPost200Response
from openapi_client.models.portfolio_analysis_drawdowns_post_request import PortfolioAnalysisDrawdownsPostRequest
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
    api_instance = openapi_client.PortfolioAnalysisApi(api_client)
    body = {"portfolios":[{"portfolioValues":[100,95,100,90,85,70]}]} # PortfolioAnalysisDrawdownsPostRequest | 

    try:
        # Drawdowns
        api_response = api_instance.portfolio_analysis_drawdowns_post(body)
        print("The response of PortfolioAnalysisApi->portfolio_analysis_drawdowns_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortfolioAnalysisApi->portfolio_analysis_drawdowns_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PortfolioAnalysisDrawdownsPostRequest**](PortfolioAnalysisDrawdownsPostRequest.md)|  | 

### Return type

[**PortfolioAnalysisDrawdownsPost200Response**](PortfolioAnalysisDrawdownsPost200Response.md)

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

# **portfolio_analysis_effective_number_of_bets_post**
> PortfolioAnalysisEffectiveNumberOfBetsPost200Response portfolio_analysis_effective_number_of_bets_post(body)

Effective Number of Bets

Compute the effective number of bets of one or several portfolio(s).  References * [Meucci, Attilio and Santangelo, Alberto and Deguest, Romain, Risk Budgeting and Diversification Based on Optimized Uncorrelated Factors (November 10, 2015)](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2276632) 

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.portfolio_analysis_effective_number_of_bets_post200_response import PortfolioAnalysisEffectiveNumberOfBetsPost200Response
from openapi_client.models.portfolio_analysis_effective_number_of_bets_post_request import PortfolioAnalysisEffectiveNumberOfBetsPostRequest
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
    api_instance = openapi_client.PortfolioAnalysisApi(api_client)
    body = {"assets":3,"assetsCovarianceMatrix":[[1,0,0],[0,286.31,100.79],[0,100.79,601.36]],"portfolios":[{"assetsWeights":[10.96,1.06,0.22]}]} # PortfolioAnalysisEffectiveNumberOfBetsPostRequest | 

    try:
        # Effective Number of Bets
        api_response = api_instance.portfolio_analysis_effective_number_of_bets_post(body)
        print("The response of PortfolioAnalysisApi->portfolio_analysis_effective_number_of_bets_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortfolioAnalysisApi->portfolio_analysis_effective_number_of_bets_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PortfolioAnalysisEffectiveNumberOfBetsPostRequest**](PortfolioAnalysisEffectiveNumberOfBetsPostRequest.md)|  | 

### Return type

[**PortfolioAnalysisEffectiveNumberOfBetsPost200Response**](PortfolioAnalysisEffectiveNumberOfBetsPost200Response.md)

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

# **portfolio_analysis_factors_exposures_post**
> PortfolioAnalysisFactorsExposuresPost200Response portfolio_analysis_factors_exposures_post(body)

Factor Exposures

Compute the exposures of one or several portfolio(s) to a set of factors, using a returns-based linear regression analysis.  References * [Measuring Factor Exposures: Uses and Abuses, Ronen Israel and Adrienne Ross, The Journal of Alternative Investments Summer 2017, 20 (1) 10-25](https://jai.pm-research.com/content/20/1/10.short)  

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.portfolio_analysis_factors_exposures_post200_response import PortfolioAnalysisFactorsExposuresPost200Response
from openapi_client.models.portfolio_analysis_factors_exposures_post_request import PortfolioAnalysisFactorsExposuresPostRequest
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
    api_instance = openapi_client.PortfolioAnalysisApi(api_client)
    body = {"factors":[{"factorReturns":[-0.00414169934,0.01201656108,0.0087181369]},{"factorReturns":[-0.01387258782,-0.01097961581,0.01742002062]}],"portfolios":[{"portfolioReturns":[-0.04302,0.01310372213,0.06482589323]}]} # PortfolioAnalysisFactorsExposuresPostRequest | 

    try:
        # Factor Exposures
        api_response = api_instance.portfolio_analysis_factors_exposures_post(body)
        print("The response of PortfolioAnalysisApi->portfolio_analysis_factors_exposures_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortfolioAnalysisApi->portfolio_analysis_factors_exposures_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PortfolioAnalysisFactorsExposuresPostRequest**](PortfolioAnalysisFactorsExposuresPostRequest.md)|  | 

### Return type

[**PortfolioAnalysisFactorsExposuresPost200Response**](PortfolioAnalysisFactorsExposuresPost200Response.md)

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

# **portfolio_analysis_mean_variance_efficient_frontier_post**
> PortfolioAnalysisMeanVarianceEfficientFrontierPost200Response portfolio_analysis_mean_variance_efficient_frontier_post(body)

Mean-Variance Efficient Frontier

Compute the discretized mean-variance efficient frontier associated to a list of assets, optionally subject to: * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraint  References  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.portfolio_analysis_mean_variance_efficient_frontier_post200_response import PortfolioAnalysisMeanVarianceEfficientFrontierPost200Response
from openapi_client.models.portfolio_analysis_mean_variance_efficient_frontier_post_request import PortfolioAnalysisMeanVarianceEfficientFrontierPostRequest
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
    api_instance = openapi_client.PortfolioAnalysisApi(api_client)
    body = {"assets":2,"assetsCovarianceMatrix":[[0.0025,5.0E-4],[5.0E-4,0.01]],"assetsReturns":[0.01,0.05],"constraints":{"minimumAssetsWeights":[0.2,0]},"portfolios":3} # PortfolioAnalysisMeanVarianceEfficientFrontierPostRequest | 

    try:
        # Mean-Variance Efficient Frontier
        api_response = api_instance.portfolio_analysis_mean_variance_efficient_frontier_post(body)
        print("The response of PortfolioAnalysisApi->portfolio_analysis_mean_variance_efficient_frontier_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortfolioAnalysisApi->portfolio_analysis_mean_variance_efficient_frontier_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PortfolioAnalysisMeanVarianceEfficientFrontierPostRequest**](PortfolioAnalysisMeanVarianceEfficientFrontierPostRequest.md)|  | 

### Return type

[**PortfolioAnalysisMeanVarianceEfficientFrontierPost200Response**](PortfolioAnalysisMeanVarianceEfficientFrontierPost200Response.md)

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

# **portfolio_analysis_mean_variance_minimum_variance_frontier_post**
> PortfolioAnalysisMeanVarianceEfficientFrontierPost200Response portfolio_analysis_mean_variance_minimum_variance_frontier_post(body)

Mean-Variance Minimum Variance Frontier

Compute the discretized mean-variance minimum variance frontier associated to a list of assets, optionally subject to: * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraint  > This endpoint is similar to the endpoint [`/portfolio/analysis/mean-variance/efficient-frontier`](#post-/portfolio/analysis/mean-variance/efficient-frontier), because the mean-variance efficient frontier is the \"top\" portion of the mean-variance minimum variance frontier.  References  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.portfolio_analysis_mean_variance_efficient_frontier_post200_response import PortfolioAnalysisMeanVarianceEfficientFrontierPost200Response
from openapi_client.models.portfolio_analysis_mean_variance_minimum_variance_frontier_post_request import PortfolioAnalysisMeanVarianceMinimumVarianceFrontierPostRequest
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
    api_instance = openapi_client.PortfolioAnalysisApi(api_client)
    body = {"assets":2,"assetsCovarianceMatrix":[[0.0025,5.0E-4],[5.0E-4,0.01]],"assetsReturns":[0.01,0.05],"constraints":{"minimumAssetsWeights":[0.2,0]},"portfolios":4} # PortfolioAnalysisMeanVarianceMinimumVarianceFrontierPostRequest | 

    try:
        # Mean-Variance Minimum Variance Frontier
        api_response = api_instance.portfolio_analysis_mean_variance_minimum_variance_frontier_post(body)
        print("The response of PortfolioAnalysisApi->portfolio_analysis_mean_variance_minimum_variance_frontier_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortfolioAnalysisApi->portfolio_analysis_mean_variance_minimum_variance_frontier_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PortfolioAnalysisMeanVarianceMinimumVarianceFrontierPostRequest**](PortfolioAnalysisMeanVarianceMinimumVarianceFrontierPostRequest.md)|  | 

### Return type

[**PortfolioAnalysisMeanVarianceEfficientFrontierPost200Response**](PortfolioAnalysisMeanVarianceEfficientFrontierPost200Response.md)

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

# **portfolio_analysis_return_post**
> PortfolioAnalysisReturnPost200Response portfolio_analysis_return_post(body)

Arithmetic Return

Compute the arithmetic return of one or several portfolio(s) from either:   * Portfolio assets arithmetic returns * Portfolio values  References * [Wikipedia, Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Return) * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.portfolio_analysis_return_post200_response import PortfolioAnalysisReturnPost200Response
from openapi_client.models.portfolio_analysis_return_post_request import PortfolioAnalysisReturnPostRequest
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
    api_instance = openapi_client.PortfolioAnalysisApi(api_client)
    body = {"assets":2,"assetsReturns":[0.01,0.05],"portfolios":[{"assetsWeights":[1,0]},{"assetsWeights":[0,1]}]} # PortfolioAnalysisReturnPostRequest | 

    try:
        # Arithmetic Return
        api_response = api_instance.portfolio_analysis_return_post(body)
        print("The response of PortfolioAnalysisApi->portfolio_analysis_return_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortfolioAnalysisApi->portfolio_analysis_return_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PortfolioAnalysisReturnPostRequest**](PortfolioAnalysisReturnPostRequest.md)|  | 

### Return type

[**PortfolioAnalysisReturnPost200Response**](PortfolioAnalysisReturnPost200Response.md)

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

# **portfolio_analysis_returns_average_post**
> PortfolioAnalysisReturnsAveragePost200Response portfolio_analysis_returns_average_post(body)

Arithmetic Average Return

Compute the arithmetic average of the arithmetic return(s) of one or several portfolio(s).  References * [Wikipedia, Arithmetic Average Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Arithmetic_average_rate_of_return) 

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.portfolio_analysis_drawdowns_post_request import PortfolioAnalysisDrawdownsPostRequest
from openapi_client.models.portfolio_analysis_returns_average_post200_response import PortfolioAnalysisReturnsAveragePost200Response
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
    api_instance = openapi_client.PortfolioAnalysisApi(api_client)
    body = {"portfolios":[{"portfolioValues":[100,95,100,90,85,70]}]} # PortfolioAnalysisDrawdownsPostRequest | 

    try:
        # Arithmetic Average Return
        api_response = api_instance.portfolio_analysis_returns_average_post(body)
        print("The response of PortfolioAnalysisApi->portfolio_analysis_returns_average_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortfolioAnalysisApi->portfolio_analysis_returns_average_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PortfolioAnalysisDrawdownsPostRequest**](PortfolioAnalysisDrawdownsPostRequest.md)|  | 

### Return type

[**PortfolioAnalysisReturnsAveragePost200Response**](PortfolioAnalysisReturnsAveragePost200Response.md)

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

# **portfolio_analysis_tracking_error_post**
> PortfolioAnalysisTrackingErrorPost200Response portfolio_analysis_tracking_error_post(body)

Tracking Error

Compute the tracking error between a benchmark and one or several portfolio(s).  References * [Wikipedia, Tracking error](https://en.wikipedia.org/wiki/Tracking_error)  * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution  

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.portfolio_analysis_tracking_error_post200_response import PortfolioAnalysisTrackingErrorPost200Response
from openapi_client.models.portfolio_analysis_tracking_error_post_request import PortfolioAnalysisTrackingErrorPostRequest
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
    api_instance = openapi_client.PortfolioAnalysisApi(api_client)
    body = {"benchmarkReturns":[0.002,0.025,0.018,-0.011,0.014,0.018,0.014,0.065,-0.015,0.042,-0.006,0.083,0.039,-0.038,-0.062,0.015,-0.048,0.021,0.06,0.056,-0.067,0.019,-0.003,0],"portfolios":[{"portfolioReturns":[0.003,0.026,0.011,-0.01,0.015,0.025,0.016,0.067,-0.014,0.04,-0.005,0.081,0.04,-0.037,-0.061,0.017,-0.049,-0.022,0.07,0.058,-0.065,0.024,-0.005,-0.009]}]} # PortfolioAnalysisTrackingErrorPostRequest | 

    try:
        # Tracking Error
        api_response = api_instance.portfolio_analysis_tracking_error_post(body)
        print("The response of PortfolioAnalysisApi->portfolio_analysis_tracking_error_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortfolioAnalysisApi->portfolio_analysis_tracking_error_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PortfolioAnalysisTrackingErrorPostRequest**](PortfolioAnalysisTrackingErrorPostRequest.md)|  | 

### Return type

[**PortfolioAnalysisTrackingErrorPost200Response**](PortfolioAnalysisTrackingErrorPost200Response.md)

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

# **portfolio_analysis_ulcer_index_post**
> PortfolioAnalysisUlcerIndexPost200Response portfolio_analysis_ulcer_index_post(body)

Ulcer Index

Compute the Ulcer Index of one or several portfolio(s).  References * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution * [Peter G. Martin, Ulcer Index, An Alternative Approach to the Measurement of Investment Risk & Risk-Adjusted Performance](http://www.tangotools.com/ui/ui.htm) 

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.portfolio_analysis_sharpe_ratio_post_request_one_of1 import PortfolioAnalysisSharpeRatioPostRequestOneOf1
from openapi_client.models.portfolio_analysis_ulcer_index_post200_response import PortfolioAnalysisUlcerIndexPost200Response
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
    api_instance = openapi_client.PortfolioAnalysisApi(api_client)
    body = {"portfolios":[{"portfolioValues":[100,95,100,90,85,70]}]} # PortfolioAnalysisSharpeRatioPostRequestOneOf1 | 

    try:
        # Ulcer Index
        api_response = api_instance.portfolio_analysis_ulcer_index_post(body)
        print("The response of PortfolioAnalysisApi->portfolio_analysis_ulcer_index_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortfolioAnalysisApi->portfolio_analysis_ulcer_index_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PortfolioAnalysisSharpeRatioPostRequestOneOf1**](PortfolioAnalysisSharpeRatioPostRequestOneOf1.md)|  | 

### Return type

[**PortfolioAnalysisUlcerIndexPost200Response**](PortfolioAnalysisUlcerIndexPost200Response.md)

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

# **portfolio_analysis_ulcer_performance_index_post**
> PortfolioAnalysisUlcerPerformanceIndexPost200Response portfolio_analysis_ulcer_performance_index_post(body)

Ulcer Performance Index

Compute the Ulcer Performance Index of one or several portfolio(s).  References * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution * [Peter G. Martin, Ulcer Index, An Alternative Approach to the Measurement of Investment Risk & Risk-Adjusted Performance](http://www.tangotools.com/ui/ui.htm) 

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.portfolio_analysis_sharpe_ratio_post_request_one_of1 import PortfolioAnalysisSharpeRatioPostRequestOneOf1
from openapi_client.models.portfolio_analysis_ulcer_performance_index_post200_response import PortfolioAnalysisUlcerPerformanceIndexPost200Response
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
    api_instance = openapi_client.PortfolioAnalysisApi(api_client)
    body = {"portfolios":[{"portfolioValues":[100,95,100,90,85,70]}],"riskFreeRate":0} # PortfolioAnalysisSharpeRatioPostRequestOneOf1 | 

    try:
        # Ulcer Performance Index
        api_response = api_instance.portfolio_analysis_ulcer_performance_index_post(body)
        print("The response of PortfolioAnalysisApi->portfolio_analysis_ulcer_performance_index_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortfolioAnalysisApi->portfolio_analysis_ulcer_performance_index_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PortfolioAnalysisSharpeRatioPostRequestOneOf1**](PortfolioAnalysisSharpeRatioPostRequestOneOf1.md)|  | 

### Return type

[**PortfolioAnalysisUlcerPerformanceIndexPost200Response**](PortfolioAnalysisUlcerPerformanceIndexPost200Response.md)

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

# **portfolio_analysis_volatility_post**
> PortfolioAnalysisVolatilityPost200Response portfolio_analysis_volatility_post(body)

Volatility

Compute the volatility (i.e., standard deviation) of one or several portfolio(s) from either:   * Portfolio assets covariance matrix * Portfolio values  References * [Wikipedia, Standard Deviation](https://en.wikipedia.org/wiki/Standard_deviation#Finance) * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.portfolio_analysis_volatility_post200_response import PortfolioAnalysisVolatilityPost200Response
from openapi_client.models.portfolio_analysis_volatility_post_request import PortfolioAnalysisVolatilityPostRequest
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
    api_instance = openapi_client.PortfolioAnalysisApi(api_client)
    body = {"assets":2,"assetsCovarianceMatrix":[[0.0025,5.0E-4],[5.0E-4,0.01]],"portfolios":[{"assetsWeights":[1,0]},{"assetsWeights":[0,1]}]} # PortfolioAnalysisVolatilityPostRequest | 

    try:
        # Volatility
        api_response = api_instance.portfolio_analysis_volatility_post(body)
        print("The response of PortfolioAnalysisApi->portfolio_analysis_volatility_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortfolioAnalysisApi->portfolio_analysis_volatility_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PortfolioAnalysisVolatilityPostRequest**](PortfolioAnalysisVolatilityPostRequest.md)|  | 

### Return type

[**PortfolioAnalysisVolatilityPost200Response**](PortfolioAnalysisVolatilityPost200Response.md)

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

