# openapi-client
Portfolio Optimizer is a [Web API](https://en.wikipedia.org/wiki/Web_API) to analyze and optimize investment portfolios (collection of financial assets such as stocks, bonds, ETFs, crypto-currencies) using modern portfolio theory algorithms (mean-variance, VaR, etc.).

# API General Information

  Portfolio Optimizer is based on [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) for easy integration, uses [JSON](https://en.wikipedia.org/wiki/JSON) for the exchange of data and uses a standard [HTTP verb](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods) (`POST`) to represent the action(s).

Portfolio Optimizer is also as secured as a Web API could be: 
* [256-bit HTTPS Encryption](https://en.wikipedia.org/wiki/HTTPS)
* No usage of cookies
* No usage of personal data  

## API Headers 
The following HTTP header(s) are required when calling Portfolio Optimizer endpoints:
* `Content-type: application/json`  
  This header specifies that the data provided in input to the endpoint is in JSON format

The following HTTP header(s) are optional when calling Portfolio Optimizer endpoints:
* `Content-Encoding: gzip`  
  This header indicates that the data provided in input to the endpoint is compressed with gzip.
* `X-API-Key: <private API key>`  
  This header enables [authenticated users](#auth) to provide their private [API key](#overview--api-key) in order to [benefit from higher API limits](#overview--api-limits)

## API Key
Portfolio Optimizer is free to use, but not free to run.

In order to obtain an API key and benefit from [higher API limits](#overview--api-limits), a *small* participation to Portfolio Optimizer running costs is required.

This participation takes the form of coffee(s), with one coffee = one month of usage.

<p><a href=\"https://www.buymeacoffee.com/portfolioopt\"><img alt='Buy a Coffee at buymeacoffee.com' src=\"https://img.buymeacoffee.com/button-api/?text=Buymeacoffee.com&emoji=&slug=portfolioopt&button_colour=000000&font_colour=ffffff&font_family=Cookie&outline_colour=ffffff&coffee_colour=FFDD00\"></a></p>


> **Notes:** 
> * Please make sure not to expose your API key publicly!

## API Limits 

Portfolio Optimizer comes with *fairly reasonable* API limits.

For anonymous users:  
* The API requests are restricted to a subset of all the available endpoints and/or endpoints features  
* The API requests are limited to 1 request per second for all the anonymous users combined, with concurrent requests rejected 
* The API requests are limited to 1 second of execution time
* The API requests are limited to 20 assets, 250 portfolios, 500 series data points and 5 factors

For authenticated users with an [API key](#overview--api-key):  
* The API requests have access to all the available endpoints and endpoints features
* The API requests are limited to 10000 requests per 24 hour per API key, with concurrent requests queued
* The API requests are limited to 2.5 seconds of execution time
* The API requests are limited to 100 assets, 1250 portfolios, 2500 series data points and 25 factors

> **Notes:** 
> * It is possible to further relax the API limits, or to disable the API limits alltogether; please [contact the support](https://portfoliooptimizer.io/contact/) for more details.
> * Information on the API rate limits are provided in response messages HTTP headers `x-ratelimit-*`:  
>   * `x-ratelimit-limit-second`, the limit on the number of API requests per second
>   * `x-ratelimit-remaining-second`, the number of remaining API requests in the current second    
>   * `x-ratelimit-limit-minute`, the limit on the number of API requests per minute
>   * ...

## API Regions
Portfolio Optimizer servers are located in Western Europe.

> **Notes:** 
> * It is possible to deploy Portfolio Optimizer in other geographical regions, for example to improve the API latency; please [contact the support](https://portfoliooptimizer.io/contact/) for more details. 

## API Response Codes       

Standard [HTTP response codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) are used by Portfolio Optimizer to provide details on the status of API requests.

| HTTP Code | Description | Notes |
| --------- | ----------- | ----- |
| 200 | Request successfully processed | - |
| 400 | Request failed to be processed because of incorrect content | The response message body contains information on the incorrect content |
| 401 | Request failed to be processed because of invalid API key | - |
| 404 | Request failed to be processed because of non existing endpoint | The requested endpoint might exist, but needs to be accessed with another HTTP method (e.g., `POST` instead of `GET`) |
| 429 | Request failed to be processed because of API limits violated | The response message HTTP headers `x-ratelimit-*` contain information on the [API limits](#overview--api-limits) |
| 500 | Request failed to be processed because of an internal error | Something went wrong on Portfolio Optimizer side, do not hesitate to [report the issue](#overview--support) |
| 502 | Request failed to be processed because of a temporary connectivity error | Something went wrong on Portfolio Optimizer side, please check the [API status](#overview--api-status) and do not hesitate to [report the issue](#overview--support) |

## API Status  

Portfolio Optimizer is monitored 24/7 by [UptimeRobot](https://stats.uptimerobot.com/wgW71SL1AW).

# Support

For any issue or question about Portfolio Optimizer, please do not hesitate to [contact the support](https://portfoliooptimizer.io/contact/).


This Python package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.9
- Package version: 1.0.0
- Generator version: 7.9.0
- Build package: org.openapitools.codegen.languages.PythonClientCodegen
For more information, please visit [https://portfoliooptimizer.io/](https://portfoliooptimizer.io/)

## Requirements.

Python 3.7+

## Installation & Usage
### pip install

If the python package is hosted on a repository, you can install directly using:

```sh
pip install git+https://github.com/GIT_USER_ID/GIT_REPO_ID.git
```
(you may need to run `pip` with root permission: `sudo pip install git+https://github.com/GIT_USER_ID/GIT_REPO_ID.git`)

Then import the package:
```python
import openapi_client
```

### Setuptools

Install via [Setuptools](http://pypi.python.org/pypi/setuptools).

```sh
python setup.py install --user
```
(or `sudo python setup.py install` to install the package for all users)

Then import the package:
```python
import openapi_client
```

### Tests

Execute `pytest` to run the tests.

## Getting Started

Please follow the [installation procedure](#installation--usage) and then run the following:

```python

import openapi_client
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
    except ApiException as e:
        print("Exception when calling AssetsAnalysisApi->assets_analysis_absorption_ratio_post: %s\n" % e)

```

## Documentation for API Endpoints

All URIs are relative to *https://api.portfoliooptimizer.io/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AssetsAnalysisApi* | [**assets_analysis_absorption_ratio_post**](docs/AssetsAnalysisApi.md#assets_analysis_absorption_ratio_post) | **POST** /assets/analysis/absorption-ratio | Absorption Ratio
*AssetsAnalysisApi* | [**assets_analysis_turbulence_index_post**](docs/AssetsAnalysisApi.md#assets_analysis_turbulence_index_post) | **POST** /assets/analysis/turbulence-index | Turbulence Index
*AssetsCorrelationMatrixApi* | [**assets_correlation_matrix_bounds_post**](docs/AssetsCorrelationMatrixApi.md#assets_correlation_matrix_bounds_post) | **POST** /assets/correlation/matrix/bounds | Correlation Matrix Bounds
*AssetsCorrelationMatrixApi* | [**assets_correlation_matrix_denoised_post**](docs/AssetsCorrelationMatrixApi.md#assets_correlation_matrix_denoised_post) | **POST** /assets/correlation/matrix/denoised | Denoised Correlation Matrix
*AssetsCorrelationMatrixApi* | [**assets_correlation_matrix_distance_post**](docs/AssetsCorrelationMatrixApi.md#assets_correlation_matrix_distance_post) | **POST** /assets/correlation/matrix/distance | Correlation Matrix Distance
*AssetsCorrelationMatrixApi* | [**assets_correlation_matrix_effective_rank_post**](docs/AssetsCorrelationMatrixApi.md#assets_correlation_matrix_effective_rank_post) | **POST** /assets/correlation/matrix/effective-rank | Correlation Matrix Effective Rank
*AssetsCorrelationMatrixApi* | [**assets_correlation_matrix_informativeness_post**](docs/AssetsCorrelationMatrixApi.md#assets_correlation_matrix_informativeness_post) | **POST** /assets/correlation/matrix/informativeness | Correlation Matrix Informativeness
*AssetsCorrelationMatrixApi* | [**assets_correlation_matrix_nearest_post**](docs/AssetsCorrelationMatrixApi.md#assets_correlation_matrix_nearest_post) | **POST** /assets/correlation/matrix/nearest | Nearest Correlation Matrix
*AssetsCorrelationMatrixApi* | [**assets_correlation_matrix_post**](docs/AssetsCorrelationMatrixApi.md#assets_correlation_matrix_post) | **POST** /assets/correlation/matrix | Correlation Matrix
*AssetsCorrelationMatrixApi* | [**assets_correlation_matrix_random_post**](docs/AssetsCorrelationMatrixApi.md#assets_correlation_matrix_random_post) | **POST** /assets/correlation/matrix/random | Random Correlation Matrix
*AssetsCorrelationMatrixApi* | [**assets_correlation_matrix_shrinkage_post**](docs/AssetsCorrelationMatrixApi.md#assets_correlation_matrix_shrinkage_post) | **POST** /assets/correlation/matrix/shrinkage | Correlation Matrix Shrinkage
*AssetsCorrelationMatrixApi* | [**assets_correlation_matrix_theory_implied_post**](docs/AssetsCorrelationMatrixApi.md#assets_correlation_matrix_theory_implied_post) | **POST** /assets/correlation/matrix/theory-implied | Theory-Implied Correlation Matrix
*AssetsCorrelationMatrixApi* | [**assets_correlation_matrix_validation_post**](docs/AssetsCorrelationMatrixApi.md#assets_correlation_matrix_validation_post) | **POST** /assets/correlation/matrix/validation | Correlation Matrix Validation
*AssetsCovarianceMatrixApi* | [**assets_covariance_matrix_effective_rank_post**](docs/AssetsCovarianceMatrixApi.md#assets_covariance_matrix_effective_rank_post) | **POST** /assets/covariance/matrix/effective-rank | Covariance Matrix Effective Rank
*AssetsCovarianceMatrixApi* | [**assets_covariance_matrix_exponentially_weighted_post**](docs/AssetsCovarianceMatrixApi.md#assets_covariance_matrix_exponentially_weighted_post) | **POST** /assets/covariance/matrix/exponentially-weighted | Exponentially Weighted Covariance Matrix
*AssetsCovarianceMatrixApi* | [**assets_covariance_matrix_post**](docs/AssetsCovarianceMatrixApi.md#assets_covariance_matrix_post) | **POST** /assets/covariance/matrix | Covariance Matrix
*AssetsCovarianceMatrixApi* | [**assets_covariance_matrix_validation_post**](docs/AssetsCovarianceMatrixApi.md#assets_covariance_matrix_validation_post) | **POST** /assets/covariance/matrix/validation | Covariance Matrix Validation
*AssetsKurtosisApi* | [**assets_kurtosis_post**](docs/AssetsKurtosisApi.md#assets_kurtosis_post) | **POST** /assets/kurtosis | Kurtosis
*AssetsMonteCarloReturnsSimulationApi* | [**assets_returns_simulation_monte_carlo_cornish_fisher_corrected_post**](docs/AssetsMonteCarloReturnsSimulationApi.md#assets_returns_simulation_monte_carlo_cornish_fisher_corrected_post) | **POST** /assets/returns/simulation/monte-carlo/cornish-fisher/corrected | Corrected Cornish-Fisher Distribution
*AssetsMonteCarloReturnsSimulationApi* | [**assets_returns_simulation_monte_carlo_cornish_fisher_post**](docs/AssetsMonteCarloReturnsSimulationApi.md#assets_returns_simulation_monte_carlo_cornish_fisher_post) | **POST** /assets/returns/simulation/monte-carlo/cornish-fisher | Cornish-Fisher Distribution
*AssetsMonteCarloReturnsSimulationApi* | [**assets_returns_simulation_monte_carlo_gaussian_post**](docs/AssetsMonteCarloReturnsSimulationApi.md#assets_returns_simulation_monte_carlo_gaussian_post) | **POST** /assets/returns/simulation/monte-carlo/gaussian | Gaussian Distribution
*AssetsPricesApi* | [**assets_prices_adjusted_forward_post**](docs/AssetsPricesApi.md#assets_prices_adjusted_forward_post) | **POST** /assets/prices/adjusted/forward | Forward-Adjusted Prices
*AssetsPricesApi* | [**assets_prices_adjusted_post**](docs/AssetsPricesApi.md#assets_prices_adjusted_post) | **POST** /assets/prices/adjusted | Adjusted Prices
*AssetsReturnsApi* | [**assets_returns_average_post**](docs/AssetsReturnsApi.md#assets_returns_average_post) | **POST** /assets/returns/average | Arithmetic Average Return
*AssetsReturnsApi* | [**assets_returns_logarithmic_post**](docs/AssetsReturnsApi.md#assets_returns_logarithmic_post) | **POST** /assets/returns/logarithmic | Logarithmic Returns
*AssetsReturnsApi* | [**assets_returns_post**](docs/AssetsReturnsApi.md#assets_returns_post) | **POST** /assets/returns | Arithmetic Returns
*AssetsReturnsApi* | [**assets_returns_turbulence_partitioned_post**](docs/AssetsReturnsApi.md#assets_returns_turbulence_partitioned_post) | **POST** /assets/returns/turbulence-partitioned | Turbulence-partitioned Asset Returns
*AssetsReturnsSimulationApi* | [**assets_returns_simulation_bootstrap_post**](docs/AssetsReturnsSimulationApi.md#assets_returns_simulation_bootstrap_post) | **POST** /assets/returns/simulation/bootstrap | Bootstrap
*AssetsSkewnessApi* | [**assets_skewness_post**](docs/AssetsSkewnessApi.md#assets_skewness_post) | **POST** /assets/skewness | Skewness
*AssetsVarianceApi* | [**assets_variance_post**](docs/AssetsVarianceApi.md#assets_variance_post) | **POST** /assets/variance | Variance
*AssetsVolatilityApi* | [**assets_volatility_post**](docs/AssetsVolatilityApi.md#assets_volatility_post) | **POST** /assets/volatility | Volatility
*FactorsApi* | [**factors_residualization_post**](docs/FactorsApi.md#factors_residualization_post) | **POST** /factors/residualization | Residualization
*PortfolioAnalysisApi* | [**portfolio_analysis_alpha_post**](docs/PortfolioAnalysisApi.md#portfolio_analysis_alpha_post) | **POST** /portfolio/analysis/alpha | Alpha
*PortfolioAnalysisApi* | [**portfolio_analysis_beta_post**](docs/PortfolioAnalysisApi.md#portfolio_analysis_beta_post) | **POST** /portfolio/analysis/beta | Beta
*PortfolioAnalysisApi* | [**portfolio_analysis_contributions_return_post**](docs/PortfolioAnalysisApi.md#portfolio_analysis_contributions_return_post) | **POST** /portfolio/analysis/contributions/return | Return Contributions
*PortfolioAnalysisApi* | [**portfolio_analysis_contributions_risk_post**](docs/PortfolioAnalysisApi.md#portfolio_analysis_contributions_risk_post) | **POST** /portfolio/analysis/contributions/risk | Risk Contributions
*PortfolioAnalysisApi* | [**portfolio_analysis_correlation_spectrum_post**](docs/PortfolioAnalysisApi.md#portfolio_analysis_correlation_spectrum_post) | **POST** /portfolio/analysis/correlation-spectrum | Correlation Spectrum
*PortfolioAnalysisApi* | [**portfolio_analysis_diversification_ratio_post**](docs/PortfolioAnalysisApi.md#portfolio_analysis_diversification_ratio_post) | **POST** /portfolio/analysis/diversification-ratio | Diversification Ratio
*PortfolioAnalysisApi* | [**portfolio_analysis_drawdowns_post**](docs/PortfolioAnalysisApi.md#portfolio_analysis_drawdowns_post) | **POST** /portfolio/analysis/drawdowns | Drawdowns
*PortfolioAnalysisApi* | [**portfolio_analysis_effective_number_of_bets_post**](docs/PortfolioAnalysisApi.md#portfolio_analysis_effective_number_of_bets_post) | **POST** /portfolio/analysis/effective-number-of-bets | Effective Number of Bets
*PortfolioAnalysisApi* | [**portfolio_analysis_factors_exposures_post**](docs/PortfolioAnalysisApi.md#portfolio_analysis_factors_exposures_post) | **POST** /portfolio/analysis/factors/exposures | Factor Exposures
*PortfolioAnalysisApi* | [**portfolio_analysis_mean_variance_efficient_frontier_post**](docs/PortfolioAnalysisApi.md#portfolio_analysis_mean_variance_efficient_frontier_post) | **POST** /portfolio/analysis/mean-variance/efficient-frontier | Mean-Variance Efficient Frontier
*PortfolioAnalysisApi* | [**portfolio_analysis_mean_variance_minimum_variance_frontier_post**](docs/PortfolioAnalysisApi.md#portfolio_analysis_mean_variance_minimum_variance_frontier_post) | **POST** /portfolio/analysis/mean-variance/minimum-variance-frontier | Mean-Variance Minimum Variance Frontier
*PortfolioAnalysisApi* | [**portfolio_analysis_return_post**](docs/PortfolioAnalysisApi.md#portfolio_analysis_return_post) | **POST** /portfolio/analysis/return | Arithmetic Return
*PortfolioAnalysisApi* | [**portfolio_analysis_returns_average_post**](docs/PortfolioAnalysisApi.md#portfolio_analysis_returns_average_post) | **POST** /portfolio/analysis/returns/average | Arithmetic Average Return
*PortfolioAnalysisApi* | [**portfolio_analysis_tracking_error_post**](docs/PortfolioAnalysisApi.md#portfolio_analysis_tracking_error_post) | **POST** /portfolio/analysis/tracking-error | Tracking Error
*PortfolioAnalysisApi* | [**portfolio_analysis_ulcer_index_post**](docs/PortfolioAnalysisApi.md#portfolio_analysis_ulcer_index_post) | **POST** /portfolio/analysis/ulcer-index | Ulcer Index
*PortfolioAnalysisApi* | [**portfolio_analysis_ulcer_performance_index_post**](docs/PortfolioAnalysisApi.md#portfolio_analysis_ulcer_performance_index_post) | **POST** /portfolio/analysis/ulcer-performance-index | Ulcer Performance Index
*PortfolioAnalysisApi* | [**portfolio_analysis_volatility_post**](docs/PortfolioAnalysisApi.md#portfolio_analysis_volatility_post) | **POST** /portfolio/analysis/volatility | Volatility
*PortfolioAnalysisConditionalValueAtRiskApi* | [**portfolio_analysis_value_at_risk_conditional_cornish_fisher_corrected_post**](docs/PortfolioAnalysisConditionalValueAtRiskApi.md#portfolio_analysis_value_at_risk_conditional_cornish_fisher_corrected_post) | **POST** /portfolio/analysis/value-at-risk/conditional/cornish-fisher/corrected | Corrected Cornish-Fisher Conditional Value At Risk
*PortfolioAnalysisConditionalValueAtRiskApi* | [**portfolio_analysis_value_at_risk_conditional_cornish_fisher_post**](docs/PortfolioAnalysisConditionalValueAtRiskApi.md#portfolio_analysis_value_at_risk_conditional_cornish_fisher_post) | **POST** /portfolio/analysis/value-at-risk/conditional/cornish-fisher | Cornish-Fisher Conditional Value At Risk
*PortfolioAnalysisConditionalValueAtRiskApi* | [**portfolio_analysis_value_at_risk_conditional_gaussian_post**](docs/PortfolioAnalysisConditionalValueAtRiskApi.md#portfolio_analysis_value_at_risk_conditional_gaussian_post) | **POST** /portfolio/analysis/value-at-risk/conditional/gaussian | Gaussian Conditional Value At Risk
*PortfolioAnalysisConditionalValueAtRiskApi* | [**portfolio_analysis_value_at_risk_conditional_historical_post**](docs/PortfolioAnalysisConditionalValueAtRiskApi.md#portfolio_analysis_value_at_risk_conditional_historical_post) | **POST** /portfolio/analysis/value-at-risk/conditional/historical | Historical Conditional Value At Risk
*PortfolioAnalysisSharpeRatioApi* | [**portfolio_analysis_sharpe_ratio_bias_adjusted_post**](docs/PortfolioAnalysisSharpeRatioApi.md#portfolio_analysis_sharpe_ratio_bias_adjusted_post) | **POST** /portfolio/analysis/sharpe-ratio/bias-adjusted | Bias-Adjusted Sharpe Ratio
*PortfolioAnalysisSharpeRatioApi* | [**portfolio_analysis_sharpe_ratio_confidence_interval_post**](docs/PortfolioAnalysisSharpeRatioApi.md#portfolio_analysis_sharpe_ratio_confidence_interval_post) | **POST** /portfolio/analysis/sharpe-ratio/confidence-interval | Sharpe Ratio Confidence Interval
*PortfolioAnalysisSharpeRatioApi* | [**portfolio_analysis_sharpe_ratio_post**](docs/PortfolioAnalysisSharpeRatioApi.md#portfolio_analysis_sharpe_ratio_post) | **POST** /portfolio/analysis/sharpe-ratio | Sharpe Ratio
*PortfolioAnalysisSharpeRatioApi* | [**portfolio_analysis_sharpe_ratio_probabilistic_minimum_track_record_length_post**](docs/PortfolioAnalysisSharpeRatioApi.md#portfolio_analysis_sharpe_ratio_probabilistic_minimum_track_record_length_post) | **POST** /portfolio/analysis/sharpe-ratio/probabilistic/minimum-track-record-length | Minimum Track Record Length
*PortfolioAnalysisSharpeRatioApi* | [**portfolio_analysis_sharpe_ratio_probabilistic_post**](docs/PortfolioAnalysisSharpeRatioApi.md#portfolio_analysis_sharpe_ratio_probabilistic_post) | **POST** /portfolio/analysis/sharpe-ratio/probabilistic | Probabilistic Sharpe Ratio
*PortfolioAnalysisValueAtRiskApi* | [**portfolio_analysis_value_at_risk_cornish_fisher_corrected_post**](docs/PortfolioAnalysisValueAtRiskApi.md#portfolio_analysis_value_at_risk_cornish_fisher_corrected_post) | **POST** /portfolio/analysis/value-at-risk/cornish-fisher/corrected | Corrected Cornish-Fisher Value At Risk
*PortfolioAnalysisValueAtRiskApi* | [**portfolio_analysis_value_at_risk_cornish_fisher_post**](docs/PortfolioAnalysisValueAtRiskApi.md#portfolio_analysis_value_at_risk_cornish_fisher_post) | **POST** /portfolio/analysis/value-at-risk/cornish-fisher | Cornish-Fisher Value At Risk
*PortfolioAnalysisValueAtRiskApi* | [**portfolio_analysis_value_at_risk_gaussian_post**](docs/PortfolioAnalysisValueAtRiskApi.md#portfolio_analysis_value_at_risk_gaussian_post) | **POST** /portfolio/analysis/value-at-risk/gaussian | Gaussian Value At Risk
*PortfolioAnalysisValueAtRiskApi* | [**portfolio_analysis_value_at_risk_historical_post**](docs/PortfolioAnalysisValueAtRiskApi.md#portfolio_analysis_value_at_risk_historical_post) | **POST** /portfolio/analysis/value-at-risk/historical | Historical Value At Risk
*PortfolioConstructionApi* | [**portfolio_construction_investable_post**](docs/PortfolioConstructionApi.md#portfolio_construction_investable_post) | **POST** /portfolio/construction/investable | Investable Portfolio
*PortfolioConstructionApi* | [**portfolio_construction_mimicking_post**](docs/PortfolioConstructionApi.md#portfolio_construction_mimicking_post) | **POST** /portfolio/construction/mimicking | Mimicking Portfolio
*PortfolioConstructionApi* | [**portfolio_construction_random_post**](docs/PortfolioConstructionApi.md#portfolio_construction_random_post) | **POST** /portfolio/construction/random | Random Portfolio
*PortfolioOptimizationApi* | [**portfolio_optimization_equal_risk_contributions_post**](docs/PortfolioOptimizationApi.md#portfolio_optimization_equal_risk_contributions_post) | **POST** /portfolio/optimization/equal-risk-contributions | Equal Risk Contributions Portfolio
*PortfolioOptimizationApi* | [**portfolio_optimization_equal_sharpe_ratio_contributions_post**](docs/PortfolioOptimizationApi.md#portfolio_optimization_equal_sharpe_ratio_contributions_post) | **POST** /portfolio/optimization/equal-sharpe-ratio-contributions | Equal Sharpe Ratio Contributions Portfolio
*PortfolioOptimizationApi* | [**portfolio_optimization_equal_volatility_weighted_post**](docs/PortfolioOptimizationApi.md#portfolio_optimization_equal_volatility_weighted_post) | **POST** /portfolio/optimization/equal-volatility-weighted | Equal Volatility Weighted Portfolio
*PortfolioOptimizationApi* | [**portfolio_optimization_equal_weighted_post**](docs/PortfolioOptimizationApi.md#portfolio_optimization_equal_weighted_post) | **POST** /portfolio/optimization/equal-weighted | Equal Weighted Portfolio
*PortfolioOptimizationApi* | [**portfolio_optimization_hierarchical_risk_parity_clustering_based_post**](docs/PortfolioOptimizationApi.md#portfolio_optimization_hierarchical_risk_parity_clustering_based_post) | **POST** /portfolio/optimization/hierarchical-risk-parity/clustering-based | Hierarchical Clustering-Based Risk Parity Portfolio
*PortfolioOptimizationApi* | [**portfolio_optimization_hierarchical_risk_parity_post**](docs/PortfolioOptimizationApi.md#portfolio_optimization_hierarchical_risk_parity_post) | **POST** /portfolio/optimization/hierarchical-risk-parity | Hierarchical Risk Parity Portfolio
*PortfolioOptimizationApi* | [**portfolio_optimization_inverse_variance_weighted_post**](docs/PortfolioOptimizationApi.md#portfolio_optimization_inverse_variance_weighted_post) | **POST** /portfolio/optimization/inverse-variance-weighted | Inverse Variance Weighted Portfolio
*PortfolioOptimizationApi* | [**portfolio_optimization_inverse_volatility_weighted_post**](docs/PortfolioOptimizationApi.md#portfolio_optimization_inverse_volatility_weighted_post) | **POST** /portfolio/optimization/inverse-volatility-weighted | Inverse Volatility Weighted Portfolio
*PortfolioOptimizationApi* | [**portfolio_optimization_market_capitalization_weighted_post**](docs/PortfolioOptimizationApi.md#portfolio_optimization_market_capitalization_weighted_post) | **POST** /portfolio/optimization/market-capitalization-weighted | Market Capitalization Weighted Portfolio
*PortfolioOptimizationApi* | [**portfolio_optimization_maximum_decorrelation_post**](docs/PortfolioOptimizationApi.md#portfolio_optimization_maximum_decorrelation_post) | **POST** /portfolio/optimization/maximum-decorrelation | Maximum Decorrelation Portfolio
*PortfolioOptimizationApi* | [**portfolio_optimization_maximum_ulcer_performance_index_post**](docs/PortfolioOptimizationApi.md#portfolio_optimization_maximum_ulcer_performance_index_post) | **POST** /portfolio/optimization/maximum-ulcer-performance-index | Maximum Ulcer Performance Index Portfolio
*PortfolioOptimizationApi* | [**portfolio_optimization_minimum_correlation_post**](docs/PortfolioOptimizationApi.md#portfolio_optimization_minimum_correlation_post) | **POST** /portfolio/optimization/minimum-correlation | Minimum Correlation Portfolio
*PortfolioOptimizationApi* | [**portfolio_optimization_minimum_ulcer_index_post**](docs/PortfolioOptimizationApi.md#portfolio_optimization_minimum_ulcer_index_post) | **POST** /portfolio/optimization/minimum-ulcer-index | Minimum Ulcer Index Portfolio
*PortfolioOptimizationApi* | [**portfolio_optimization_most_diversified_post**](docs/PortfolioOptimizationApi.md#portfolio_optimization_most_diversified_post) | **POST** /portfolio/optimization/most-diversified | Most Diversified Portfolio
*PortfolioOptimizationMeanVarianceApi* | [**portfolio_optimization_maximum_return_diversified_post**](docs/PortfolioOptimizationMeanVarianceApi.md#portfolio_optimization_maximum_return_diversified_post) | **POST** /portfolio/optimization/maximum-return/diversified | Diversified Maximum Return Portfolio
*PortfolioOptimizationMeanVarianceApi* | [**portfolio_optimization_maximum_return_post**](docs/PortfolioOptimizationMeanVarianceApi.md#portfolio_optimization_maximum_return_post) | **POST** /portfolio/optimization/maximum-return | Maximum Return Portfolio
*PortfolioOptimizationMeanVarianceApi* | [**portfolio_optimization_maximum_return_subset_resampling_based_post**](docs/PortfolioOptimizationMeanVarianceApi.md#portfolio_optimization_maximum_return_subset_resampling_based_post) | **POST** /portfolio/optimization/maximum-return/subset-resampling-based | Subset Resampling-Based Maximum Return Portfolio
*PortfolioOptimizationMeanVarianceApi* | [**portfolio_optimization_maximum_sharpe_ratio_diversified_post**](docs/PortfolioOptimizationMeanVarianceApi.md#portfolio_optimization_maximum_sharpe_ratio_diversified_post) | **POST** /portfolio/optimization/maximum-sharpe-ratio/diversified | Diversified Maximum Sharpe Ratio Portfolio
*PortfolioOptimizationMeanVarianceApi* | [**portfolio_optimization_maximum_sharpe_ratio_post**](docs/PortfolioOptimizationMeanVarianceApi.md#portfolio_optimization_maximum_sharpe_ratio_post) | **POST** /portfolio/optimization/maximum-sharpe-ratio | Maximum Sharpe Ratio Portfolio
*PortfolioOptimizationMeanVarianceApi* | [**portfolio_optimization_maximum_sharpe_ratio_subset_resampling_based_post**](docs/PortfolioOptimizationMeanVarianceApi.md#portfolio_optimization_maximum_sharpe_ratio_subset_resampling_based_post) | **POST** /portfolio/optimization/maximum-sharpe-ratio/subset-resampling-based | Subset Resampling-Based Maximum Sharpe Ratio Portfolio
*PortfolioOptimizationMeanVarianceApi* | [**portfolio_optimization_mean_variance_efficient_diversified_post**](docs/PortfolioOptimizationMeanVarianceApi.md#portfolio_optimization_mean_variance_efficient_diversified_post) | **POST** /portfolio/optimization/mean-variance-efficient/diversified | Diversified Mean-Variance Efficient Portfolio
*PortfolioOptimizationMeanVarianceApi* | [**portfolio_optimization_mean_variance_efficient_post**](docs/PortfolioOptimizationMeanVarianceApi.md#portfolio_optimization_mean_variance_efficient_post) | **POST** /portfolio/optimization/mean-variance-efficient | Mean-Variance Efficient Portfolio
*PortfolioOptimizationMeanVarianceApi* | [**portfolio_optimization_mean_variance_efficient_subset_resampling_based_post**](docs/PortfolioOptimizationMeanVarianceApi.md#portfolio_optimization_mean_variance_efficient_subset_resampling_based_post) | **POST** /portfolio/optimization/mean-variance-efficient/subset-resampling-based | Subset Resampling-Based Mean-Variance Efficient Portfolio
*PortfolioOptimizationMeanVarianceApi* | [**portfolio_optimization_minimum_variance_diversified_post**](docs/PortfolioOptimizationMeanVarianceApi.md#portfolio_optimization_minimum_variance_diversified_post) | **POST** /portfolio/optimization/minimum-variance/diversified | Diversified Minimum Variance Portfolio
*PortfolioOptimizationMeanVarianceApi* | [**portfolio_optimization_minimum_variance_post**](docs/PortfolioOptimizationMeanVarianceApi.md#portfolio_optimization_minimum_variance_post) | **POST** /portfolio/optimization/minimum-variance | Minimum Variance Portfolio
*PortfolioOptimizationMeanVarianceApi* | [**portfolio_optimization_minimum_variance_subset_resampling_based_post**](docs/PortfolioOptimizationMeanVarianceApi.md#portfolio_optimization_minimum_variance_subset_resampling_based_post) | **POST** /portfolio/optimization/minimum-variance/subset-resampling-based | Subset Resampling-Based Minimum Variance Portfolio
*PortfolioSimulationApi* | [**portfolio_simulation_rebalancing_drift_weight_post**](docs/PortfolioSimulationApi.md#portfolio_simulation_rebalancing_drift_weight_post) | **POST** /portfolio/simulation/rebalancing/drift-weight | Drift-weight Portfolio Rebalancing
*PortfolioSimulationApi* | [**portfolio_simulation_rebalancing_fixed_weight_post**](docs/PortfolioSimulationApi.md#portfolio_simulation_rebalancing_fixed_weight_post) | **POST** /portfolio/simulation/rebalancing/fixed-weight | Fixed-weight Portfolio Rebalancing
*PortfolioSimulationApi* | [**portfolio_simulation_rebalancing_random_weight_post**](docs/PortfolioSimulationApi.md#portfolio_simulation_rebalancing_random_weight_post) | **POST** /portfolio/simulation/rebalancing/random-weight | Random-weight Portfolio Rebalancing


## Documentation For Models

 - [AssetsAnalysisAbsorptionRatioPost200Response](docs/AssetsAnalysisAbsorptionRatioPost200Response.md)
 - [AssetsAnalysisAbsorptionRatioPostRequest](docs/AssetsAnalysisAbsorptionRatioPostRequest.md)
 - [AssetsAnalysisAbsorptionRatioPostRequestAssetsCovarianceMatrixEigenvectors](docs/AssetsAnalysisAbsorptionRatioPostRequestAssetsCovarianceMatrixEigenvectors.md)
 - [AssetsAnalysisTurbulenceIndexPost200Response](docs/AssetsAnalysisTurbulenceIndexPost200Response.md)
 - [AssetsAnalysisTurbulenceIndexPostRequest](docs/AssetsAnalysisTurbulenceIndexPostRequest.md)
 - [AssetsCorrelationMatrixBoundsPost200Response](docs/AssetsCorrelationMatrixBoundsPost200Response.md)
 - [AssetsCorrelationMatrixBoundsPostRequest](docs/AssetsCorrelationMatrixBoundsPostRequest.md)
 - [AssetsCorrelationMatrixDenoisedPost200Response](docs/AssetsCorrelationMatrixDenoisedPost200Response.md)
 - [AssetsCorrelationMatrixDenoisedPostRequest](docs/AssetsCorrelationMatrixDenoisedPostRequest.md)
 - [AssetsCorrelationMatrixDistancePost200Response](docs/AssetsCorrelationMatrixDistancePost200Response.md)
 - [AssetsCorrelationMatrixDistancePostRequest](docs/AssetsCorrelationMatrixDistancePostRequest.md)
 - [AssetsCorrelationMatrixEffectiveRankPost200Response](docs/AssetsCorrelationMatrixEffectiveRankPost200Response.md)
 - [AssetsCorrelationMatrixEffectiveRankPostRequest](docs/AssetsCorrelationMatrixEffectiveRankPostRequest.md)
 - [AssetsCorrelationMatrixInformativenessPost200Response](docs/AssetsCorrelationMatrixInformativenessPost200Response.md)
 - [AssetsCorrelationMatrixInformativenessPostRequest](docs/AssetsCorrelationMatrixInformativenessPostRequest.md)
 - [AssetsCorrelationMatrixNearestPostRequest](docs/AssetsCorrelationMatrixNearestPostRequest.md)
 - [AssetsCorrelationMatrixPost200Response](docs/AssetsCorrelationMatrixPost200Response.md)
 - [AssetsCorrelationMatrixPostRequest](docs/AssetsCorrelationMatrixPostRequest.md)
 - [AssetsCorrelationMatrixPostRequestOneOf](docs/AssetsCorrelationMatrixPostRequestOneOf.md)
 - [AssetsCorrelationMatrixPostRequestOneOf1](docs/AssetsCorrelationMatrixPostRequestOneOf1.md)
 - [AssetsCorrelationMatrixPostRequestOneOfAssetsInner](docs/AssetsCorrelationMatrixPostRequestOneOfAssetsInner.md)
 - [AssetsCorrelationMatrixRandomPostRequest](docs/AssetsCorrelationMatrixRandomPostRequest.md)
 - [AssetsCorrelationMatrixShrinkagePostRequest](docs/AssetsCorrelationMatrixShrinkagePostRequest.md)
 - [AssetsCorrelationMatrixShrinkagePostRequestOneOf](docs/AssetsCorrelationMatrixShrinkagePostRequestOneOf.md)
 - [AssetsCorrelationMatrixShrinkagePostRequestOneOf1](docs/AssetsCorrelationMatrixShrinkagePostRequestOneOf1.md)
 - [AssetsCorrelationMatrixTheoryImpliedPostRequest](docs/AssetsCorrelationMatrixTheoryImpliedPostRequest.md)
 - [AssetsCorrelationMatrixTheoryImpliedPostRequestAssetsInner](docs/AssetsCorrelationMatrixTheoryImpliedPostRequestAssetsInner.md)
 - [AssetsCorrelationMatrixTheoryImpliedPostRequestAssetsInnerAssetHierarchicalClassificationInner](docs/AssetsCorrelationMatrixTheoryImpliedPostRequestAssetsInnerAssetHierarchicalClassificationInner.md)
 - [AssetsCorrelationMatrixValidationPost200Response](docs/AssetsCorrelationMatrixValidationPost200Response.md)
 - [AssetsCorrelationMatrixValidationPostRequest](docs/AssetsCorrelationMatrixValidationPostRequest.md)
 - [AssetsCovarianceMatrixEffectiveRankPost200Response](docs/AssetsCovarianceMatrixEffectiveRankPost200Response.md)
 - [AssetsCovarianceMatrixEffectiveRankPostRequest](docs/AssetsCovarianceMatrixEffectiveRankPostRequest.md)
 - [AssetsCovarianceMatrixExponentiallyWeightedPost200Response](docs/AssetsCovarianceMatrixExponentiallyWeightedPost200Response.md)
 - [AssetsCovarianceMatrixExponentiallyWeightedPostRequest](docs/AssetsCovarianceMatrixExponentiallyWeightedPostRequest.md)
 - [AssetsCovarianceMatrixPost200Response](docs/AssetsCovarianceMatrixPost200Response.md)
 - [AssetsCovarianceMatrixPostRequest](docs/AssetsCovarianceMatrixPostRequest.md)
 - [AssetsCovarianceMatrixPostRequestOneOf](docs/AssetsCovarianceMatrixPostRequestOneOf.md)
 - [AssetsCovarianceMatrixPostRequestOneOf1](docs/AssetsCovarianceMatrixPostRequestOneOf1.md)
 - [AssetsCovarianceMatrixValidationPost200Response](docs/AssetsCovarianceMatrixValidationPost200Response.md)
 - [AssetsKurtosisPost200Response](docs/AssetsKurtosisPost200Response.md)
 - [AssetsKurtosisPost200ResponseAssetsInner](docs/AssetsKurtosisPost200ResponseAssetsInner.md)
 - [AssetsKurtosisPostRequest](docs/AssetsKurtosisPostRequest.md)
 - [AssetsKurtosisPostRequestAssetsInner](docs/AssetsKurtosisPostRequestAssetsInner.md)
 - [AssetsPricesAdjustedPost200Response](docs/AssetsPricesAdjustedPost200Response.md)
 - [AssetsPricesAdjustedPost200ResponseAssetsInner](docs/AssetsPricesAdjustedPost200ResponseAssetsInner.md)
 - [AssetsPricesAdjustedPost200ResponseAssetsInnerAssetAdjustedPricesInner](docs/AssetsPricesAdjustedPost200ResponseAssetsInnerAssetAdjustedPricesInner.md)
 - [AssetsPricesAdjustedPostRequest](docs/AssetsPricesAdjustedPostRequest.md)
 - [AssetsPricesAdjustedPostRequestAssetsInner](docs/AssetsPricesAdjustedPostRequestAssetsInner.md)
 - [AssetsPricesAdjustedPostRequestAssetsInnerAssetDividendsInner](docs/AssetsPricesAdjustedPostRequestAssetsInnerAssetDividendsInner.md)
 - [AssetsPricesAdjustedPostRequestAssetsInnerAssetPricesInner](docs/AssetsPricesAdjustedPostRequestAssetsInnerAssetPricesInner.md)
 - [AssetsPricesAdjustedPostRequestAssetsInnerAssetSplitsInner](docs/AssetsPricesAdjustedPostRequestAssetsInnerAssetSplitsInner.md)
 - [AssetsReturnsAveragePost200Response](docs/AssetsReturnsAveragePost200Response.md)
 - [AssetsReturnsAveragePost200ResponseAssetsInner](docs/AssetsReturnsAveragePost200ResponseAssetsInner.md)
 - [AssetsReturnsAveragePostRequest](docs/AssetsReturnsAveragePostRequest.md)
 - [AssetsReturnsAveragePostRequestAssetsInner](docs/AssetsReturnsAveragePostRequestAssetsInner.md)
 - [AssetsReturnsLogarithmicPost200Response](docs/AssetsReturnsLogarithmicPost200Response.md)
 - [AssetsReturnsLogarithmicPost200ResponseAssetsInner](docs/AssetsReturnsLogarithmicPost200ResponseAssetsInner.md)
 - [AssetsReturnsPost200Response](docs/AssetsReturnsPost200Response.md)
 - [AssetsReturnsPost200ResponseAssetsInner](docs/AssetsReturnsPost200ResponseAssetsInner.md)
 - [AssetsReturnsPostRequest](docs/AssetsReturnsPostRequest.md)
 - [AssetsReturnsPostRequestAssetsInner](docs/AssetsReturnsPostRequestAssetsInner.md)
 - [AssetsReturnsSimulationBootstrapPost200Response](docs/AssetsReturnsSimulationBootstrapPost200Response.md)
 - [AssetsReturnsSimulationBootstrapPost200ResponseSimulationsInner](docs/AssetsReturnsSimulationBootstrapPost200ResponseSimulationsInner.md)
 - [AssetsReturnsSimulationBootstrapPost200ResponseSimulationsInnerAssetsInner](docs/AssetsReturnsSimulationBootstrapPost200ResponseSimulationsInnerAssetsInner.md)
 - [AssetsReturnsSimulationBootstrapPostRequest](docs/AssetsReturnsSimulationBootstrapPostRequest.md)
 - [AssetsReturnsSimulationBootstrapPostRequestAssetsInner](docs/AssetsReturnsSimulationBootstrapPostRequestAssetsInner.md)
 - [AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest](docs/AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest.md)
 - [AssetsReturnsSimulationMonteCarloCornishFisherPost200Response](docs/AssetsReturnsSimulationMonteCarloCornishFisherPost200Response.md)
 - [AssetsReturnsSimulationMonteCarloCornishFisherPost200ResponseSimulationsInner](docs/AssetsReturnsSimulationMonteCarloCornishFisherPost200ResponseSimulationsInner.md)
 - [AssetsReturnsSimulationMonteCarloCornishFisherPostRequest](docs/AssetsReturnsSimulationMonteCarloCornishFisherPostRequest.md)
 - [AssetsReturnsSimulationMonteCarloGaussianPostRequest](docs/AssetsReturnsSimulationMonteCarloGaussianPostRequest.md)
 - [AssetsReturnsTurbulencePartitionedPost200Response](docs/AssetsReturnsTurbulencePartitionedPost200Response.md)
 - [AssetsReturnsTurbulencePartitionedPost200ResponseAssetsInner](docs/AssetsReturnsTurbulencePartitionedPost200ResponseAssetsInner.md)
 - [AssetsReturnsTurbulencePartitionedPost200ResponseAssetsInnerAssetTurbulencePartitionedReturnsInner](docs/AssetsReturnsTurbulencePartitionedPost200ResponseAssetsInnerAssetTurbulencePartitionedReturnsInner.md)
 - [AssetsReturnsTurbulencePartitionedPostRequest](docs/AssetsReturnsTurbulencePartitionedPostRequest.md)
 - [AssetsSkewnessPost200Response](docs/AssetsSkewnessPost200Response.md)
 - [AssetsSkewnessPost200ResponseAssetsInner](docs/AssetsSkewnessPost200ResponseAssetsInner.md)
 - [AssetsSkewnessPostRequest](docs/AssetsSkewnessPostRequest.md)
 - [AssetsSkewnessPostRequestAssetsInner](docs/AssetsSkewnessPostRequestAssetsInner.md)
 - [AssetsVariancePost200Response](docs/AssetsVariancePost200Response.md)
 - [AssetsVariancePost200ResponseAssetsInner](docs/AssetsVariancePost200ResponseAssetsInner.md)
 - [AssetsVariancePostRequest](docs/AssetsVariancePostRequest.md)
 - [AssetsVariancePostRequestOneOf](docs/AssetsVariancePostRequestOneOf.md)
 - [AssetsVariancePostRequestOneOf1](docs/AssetsVariancePostRequestOneOf1.md)
 - [AssetsVariancePostRequestOneOf1AssetsInner](docs/AssetsVariancePostRequestOneOf1AssetsInner.md)
 - [AssetsVariancePostRequestOneOfAssetsInner](docs/AssetsVariancePostRequestOneOfAssetsInner.md)
 - [AssetsVolatilityPost200Response](docs/AssetsVolatilityPost200Response.md)
 - [AssetsVolatilityPost200ResponseAssetsInner](docs/AssetsVolatilityPost200ResponseAssetsInner.md)
 - [AssetsVolatilityPostRequest](docs/AssetsVolatilityPostRequest.md)
 - [AssetsVolatilityPostRequestOneOf](docs/AssetsVolatilityPostRequestOneOf.md)
 - [AssetsVolatilityPostRequestOneOfAssetsInner](docs/AssetsVolatilityPostRequestOneOfAssetsInner.md)
 - [FactorsResidualizationPost200Response](docs/FactorsResidualizationPost200Response.md)
 - [FactorsResidualizationPostRequest](docs/FactorsResidualizationPostRequest.md)
 - [FactorsResidualizationPostRequestFactorsInner](docs/FactorsResidualizationPostRequestFactorsInner.md)
 - [PortfolioAnalysisAlphaPost200Response](docs/PortfolioAnalysisAlphaPost200Response.md)
 - [PortfolioAnalysisAlphaPost200ResponsePortfoliosInner](docs/PortfolioAnalysisAlphaPost200ResponsePortfoliosInner.md)
 - [PortfolioAnalysisAlphaPostRequest](docs/PortfolioAnalysisAlphaPostRequest.md)
 - [PortfolioAnalysisAlphaPostRequestOneOf](docs/PortfolioAnalysisAlphaPostRequestOneOf.md)
 - [PortfolioAnalysisAlphaPostRequestOneOf1](docs/PortfolioAnalysisAlphaPostRequestOneOf1.md)
 - [PortfolioAnalysisAlphaPostRequestOneOfPortfoliosInner](docs/PortfolioAnalysisAlphaPostRequestOneOfPortfoliosInner.md)
 - [PortfolioAnalysisBetaPost200Response](docs/PortfolioAnalysisBetaPost200Response.md)
 - [PortfolioAnalysisBetaPost200ResponsePortfoliosInner](docs/PortfolioAnalysisBetaPost200ResponsePortfoliosInner.md)
 - [PortfolioAnalysisContributionsReturnPost200Response](docs/PortfolioAnalysisContributionsReturnPost200Response.md)
 - [PortfolioAnalysisContributionsReturnPost200ResponsePortfoliosInner](docs/PortfolioAnalysisContributionsReturnPost200ResponsePortfoliosInner.md)
 - [PortfolioAnalysisContributionsReturnPostRequest](docs/PortfolioAnalysisContributionsReturnPostRequest.md)
 - [PortfolioAnalysisContributionsReturnPostRequestPortfoliosInner](docs/PortfolioAnalysisContributionsReturnPostRequestPortfoliosInner.md)
 - [PortfolioAnalysisContributionsRiskPost200Response](docs/PortfolioAnalysisContributionsRiskPost200Response.md)
 - [PortfolioAnalysisContributionsRiskPost200ResponsePortfoliosInner](docs/PortfolioAnalysisContributionsRiskPost200ResponsePortfoliosInner.md)
 - [PortfolioAnalysisContributionsRiskPostRequest](docs/PortfolioAnalysisContributionsRiskPostRequest.md)
 - [PortfolioAnalysisCorrelationSpectrumPost200Response](docs/PortfolioAnalysisCorrelationSpectrumPost200Response.md)
 - [PortfolioAnalysisCorrelationSpectrumPost200ResponsePortfoliosInner](docs/PortfolioAnalysisCorrelationSpectrumPost200ResponsePortfoliosInner.md)
 - [PortfolioAnalysisCorrelationSpectrumPostRequest](docs/PortfolioAnalysisCorrelationSpectrumPostRequest.md)
 - [PortfolioAnalysisCorrelationSpectrumPostRequestOneOf](docs/PortfolioAnalysisCorrelationSpectrumPostRequestOneOf.md)
 - [PortfolioAnalysisCorrelationSpectrumPostRequestOneOf1](docs/PortfolioAnalysisCorrelationSpectrumPostRequestOneOf1.md)
 - [PortfolioAnalysisCorrelationSpectrumPostRequestOneOf1AssetsInner](docs/PortfolioAnalysisCorrelationSpectrumPostRequestOneOf1AssetsInner.md)
 - [PortfolioAnalysisCorrelationSpectrumPostRequestOneOf1PortfoliosInner](docs/PortfolioAnalysisCorrelationSpectrumPostRequestOneOf1PortfoliosInner.md)
 - [PortfolioAnalysisDiversificationRatioPost200Response](docs/PortfolioAnalysisDiversificationRatioPost200Response.md)
 - [PortfolioAnalysisDiversificationRatioPost200ResponsePortfoliosInner](docs/PortfolioAnalysisDiversificationRatioPost200ResponsePortfoliosInner.md)
 - [PortfolioAnalysisDrawdownsPost200Response](docs/PortfolioAnalysisDrawdownsPost200Response.md)
 - [PortfolioAnalysisDrawdownsPost200ResponsePortfoliosInner](docs/PortfolioAnalysisDrawdownsPost200ResponsePortfoliosInner.md)
 - [PortfolioAnalysisDrawdownsPost200ResponsePortfoliosInnerPortfolioWorstDrawdownsInner](docs/PortfolioAnalysisDrawdownsPost200ResponsePortfoliosInnerPortfolioWorstDrawdownsInner.md)
 - [PortfolioAnalysisDrawdownsPostRequest](docs/PortfolioAnalysisDrawdownsPostRequest.md)
 - [PortfolioAnalysisDrawdownsPostRequestPortfoliosInner](docs/PortfolioAnalysisDrawdownsPostRequestPortfoliosInner.md)
 - [PortfolioAnalysisEffectiveNumberOfBetsPost200Response](docs/PortfolioAnalysisEffectiveNumberOfBetsPost200Response.md)
 - [PortfolioAnalysisEffectiveNumberOfBetsPost200ResponsePortfoliosInner](docs/PortfolioAnalysisEffectiveNumberOfBetsPost200ResponsePortfoliosInner.md)
 - [PortfolioAnalysisEffectiveNumberOfBetsPostRequest](docs/PortfolioAnalysisEffectiveNumberOfBetsPostRequest.md)
 - [PortfolioAnalysisEffectiveNumberOfBetsPostRequestPortfoliosInner](docs/PortfolioAnalysisEffectiveNumberOfBetsPostRequestPortfoliosInner.md)
 - [PortfolioAnalysisFactorsExposuresPost200Response](docs/PortfolioAnalysisFactorsExposuresPost200Response.md)
 - [PortfolioAnalysisFactorsExposuresPost200ResponsePortfoliosInner](docs/PortfolioAnalysisFactorsExposuresPost200ResponsePortfoliosInner.md)
 - [PortfolioAnalysisFactorsExposuresPostRequest](docs/PortfolioAnalysisFactorsExposuresPostRequest.md)
 - [PortfolioAnalysisFactorsExposuresPostRequestFactorsInner](docs/PortfolioAnalysisFactorsExposuresPostRequestFactorsInner.md)
 - [PortfolioAnalysisFactorsExposuresPostRequestPortfoliosInner](docs/PortfolioAnalysisFactorsExposuresPostRequestPortfoliosInner.md)
 - [PortfolioAnalysisMeanVarianceEfficientFrontierPost200Response](docs/PortfolioAnalysisMeanVarianceEfficientFrontierPost200Response.md)
 - [PortfolioAnalysisMeanVarianceEfficientFrontierPost200ResponsePortfoliosInner](docs/PortfolioAnalysisMeanVarianceEfficientFrontierPost200ResponsePortfoliosInner.md)
 - [PortfolioAnalysisMeanVarianceEfficientFrontierPostRequest](docs/PortfolioAnalysisMeanVarianceEfficientFrontierPostRequest.md)
 - [PortfolioAnalysisMeanVarianceEfficientFrontierPostRequestConstraints](docs/PortfolioAnalysisMeanVarianceEfficientFrontierPostRequestConstraints.md)
 - [PortfolioAnalysisMeanVarianceMinimumVarianceFrontierPostRequest](docs/PortfolioAnalysisMeanVarianceMinimumVarianceFrontierPostRequest.md)
 - [PortfolioAnalysisReturnPost200Response](docs/PortfolioAnalysisReturnPost200Response.md)
 - [PortfolioAnalysisReturnPost200ResponsePortfoliosInner](docs/PortfolioAnalysisReturnPost200ResponsePortfoliosInner.md)
 - [PortfolioAnalysisReturnPostRequest](docs/PortfolioAnalysisReturnPostRequest.md)
 - [PortfolioAnalysisReturnPostRequestOneOf](docs/PortfolioAnalysisReturnPostRequestOneOf.md)
 - [PortfolioAnalysisReturnPostRequestOneOf1](docs/PortfolioAnalysisReturnPostRequestOneOf1.md)
 - [PortfolioAnalysisReturnPostRequestOneOf1PortfoliosInner](docs/PortfolioAnalysisReturnPostRequestOneOf1PortfoliosInner.md)
 - [PortfolioAnalysisReturnsAveragePost200Response](docs/PortfolioAnalysisReturnsAveragePost200Response.md)
 - [PortfolioAnalysisReturnsAveragePost200ResponsePortfoliosInner](docs/PortfolioAnalysisReturnsAveragePost200ResponsePortfoliosInner.md)
 - [PortfolioAnalysisSharpeRatioBiasAdjustedPost200Response](docs/PortfolioAnalysisSharpeRatioBiasAdjustedPost200Response.md)
 - [PortfolioAnalysisSharpeRatioBiasAdjustedPost200ResponsePortfoliosInner](docs/PortfolioAnalysisSharpeRatioBiasAdjustedPost200ResponsePortfoliosInner.md)
 - [PortfolioAnalysisSharpeRatioBiasAdjustedPostRequest](docs/PortfolioAnalysisSharpeRatioBiasAdjustedPostRequest.md)
 - [PortfolioAnalysisSharpeRatioBiasAdjustedPostRequestPortfoliosInner](docs/PortfolioAnalysisSharpeRatioBiasAdjustedPostRequestPortfoliosInner.md)
 - [PortfolioAnalysisSharpeRatioConfidenceIntervalPost200Response](docs/PortfolioAnalysisSharpeRatioConfidenceIntervalPost200Response.md)
 - [PortfolioAnalysisSharpeRatioConfidenceIntervalPost200ResponsePortfoliosInner](docs/PortfolioAnalysisSharpeRatioConfidenceIntervalPost200ResponsePortfoliosInner.md)
 - [PortfolioAnalysisSharpeRatioConfidenceIntervalPostRequest](docs/PortfolioAnalysisSharpeRatioConfidenceIntervalPostRequest.md)
 - [PortfolioAnalysisSharpeRatioPost200Response](docs/PortfolioAnalysisSharpeRatioPost200Response.md)
 - [PortfolioAnalysisSharpeRatioPost200ResponsePortfoliosInner](docs/PortfolioAnalysisSharpeRatioPost200ResponsePortfoliosInner.md)
 - [PortfolioAnalysisSharpeRatioPostRequest](docs/PortfolioAnalysisSharpeRatioPostRequest.md)
 - [PortfolioAnalysisSharpeRatioPostRequestOneOf](docs/PortfolioAnalysisSharpeRatioPostRequestOneOf.md)
 - [PortfolioAnalysisSharpeRatioPostRequestOneOf1](docs/PortfolioAnalysisSharpeRatioPostRequestOneOf1.md)
 - [PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner](docs/PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner.md)
 - [PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost200Response](docs/PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost200Response.md)
 - [PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost200ResponsePortfoliosInner](docs/PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost200ResponsePortfoliosInner.md)
 - [PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostRequest](docs/PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostRequest.md)
 - [PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostRequestOneOf](docs/PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostRequestOneOf.md)
 - [PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostRequestOneOf1](docs/PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostRequestOneOf1.md)
 - [PortfolioAnalysisSharpeRatioProbabilisticPost200Response](docs/PortfolioAnalysisSharpeRatioProbabilisticPost200Response.md)
 - [PortfolioAnalysisSharpeRatioProbabilisticPost200ResponsePortfoliosInner](docs/PortfolioAnalysisSharpeRatioProbabilisticPost200ResponsePortfoliosInner.md)
 - [PortfolioAnalysisSharpeRatioProbabilisticPostRequest](docs/PortfolioAnalysisSharpeRatioProbabilisticPostRequest.md)
 - [PortfolioAnalysisSharpeRatioProbabilisticPostRequestOneOf](docs/PortfolioAnalysisSharpeRatioProbabilisticPostRequestOneOf.md)
 - [PortfolioAnalysisSharpeRatioProbabilisticPostRequestOneOf1](docs/PortfolioAnalysisSharpeRatioProbabilisticPostRequestOneOf1.md)
 - [PortfolioAnalysisSharpeRatioProbabilisticPostRequestOneOf1PortfoliosInner](docs/PortfolioAnalysisSharpeRatioProbabilisticPostRequestOneOf1PortfoliosInner.md)
 - [PortfolioAnalysisTrackingErrorPost200Response](docs/PortfolioAnalysisTrackingErrorPost200Response.md)
 - [PortfolioAnalysisTrackingErrorPost200ResponsePortfoliosInner](docs/PortfolioAnalysisTrackingErrorPost200ResponsePortfoliosInner.md)
 - [PortfolioAnalysisTrackingErrorPostRequest](docs/PortfolioAnalysisTrackingErrorPostRequest.md)
 - [PortfolioAnalysisTrackingErrorPostRequestPortfoliosInner](docs/PortfolioAnalysisTrackingErrorPostRequestPortfoliosInner.md)
 - [PortfolioAnalysisUlcerIndexPost200Response](docs/PortfolioAnalysisUlcerIndexPost200Response.md)
 - [PortfolioAnalysisUlcerIndexPost200ResponsePortfoliosInner](docs/PortfolioAnalysisUlcerIndexPost200ResponsePortfoliosInner.md)
 - [PortfolioAnalysisUlcerPerformanceIndexPost200Response](docs/PortfolioAnalysisUlcerPerformanceIndexPost200Response.md)
 - [PortfolioAnalysisUlcerPerformanceIndexPost200ResponsePortfoliosInner](docs/PortfolioAnalysisUlcerPerformanceIndexPost200ResponsePortfoliosInner.md)
 - [PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200Response](docs/PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200Response.md)
 - [PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200ResponsePortfoliosInner](docs/PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200ResponsePortfoliosInner.md)
 - [PortfolioAnalysisValueAtRiskConditionalCornishFisherPostRequest](docs/PortfolioAnalysisValueAtRiskConditionalCornishFisherPostRequest.md)
 - [PortfolioAnalysisValueAtRiskConditionalCornishFisherPostRequestPortfoliosInner](docs/PortfolioAnalysisValueAtRiskConditionalCornishFisherPostRequestPortfoliosInner.md)
 - [PortfolioAnalysisValueAtRiskConditionalGaussianPostRequest](docs/PortfolioAnalysisValueAtRiskConditionalGaussianPostRequest.md)
 - [PortfolioAnalysisValueAtRiskConditionalGaussianPostRequestPortfoliosInner](docs/PortfolioAnalysisValueAtRiskConditionalGaussianPostRequestPortfoliosInner.md)
 - [PortfolioAnalysisValueAtRiskConditionalHistoricalPostRequest](docs/PortfolioAnalysisValueAtRiskConditionalHistoricalPostRequest.md)
 - [PortfolioAnalysisValueAtRiskCornishFisherPost200Response](docs/PortfolioAnalysisValueAtRiskCornishFisherPost200Response.md)
 - [PortfolioAnalysisValueAtRiskCornishFisherPost200ResponsePortfoliosInner](docs/PortfolioAnalysisValueAtRiskCornishFisherPost200ResponsePortfoliosInner.md)
 - [PortfolioAnalysisVolatilityPost200Response](docs/PortfolioAnalysisVolatilityPost200Response.md)
 - [PortfolioAnalysisVolatilityPost200ResponsePortfoliosInner](docs/PortfolioAnalysisVolatilityPost200ResponsePortfoliosInner.md)
 - [PortfolioAnalysisVolatilityPostRequest](docs/PortfolioAnalysisVolatilityPostRequest.md)
 - [PortfolioAnalysisVolatilityPostRequestOneOf](docs/PortfolioAnalysisVolatilityPostRequestOneOf.md)
 - [PortfolioConstructionInvestablePost200Response](docs/PortfolioConstructionInvestablePost200Response.md)
 - [PortfolioConstructionInvestablePostRequest](docs/PortfolioConstructionInvestablePostRequest.md)
 - [PortfolioConstructionMimickingPostRequest](docs/PortfolioConstructionMimickingPostRequest.md)
 - [PortfolioConstructionRandomPost200Response](docs/PortfolioConstructionRandomPost200Response.md)
 - [PortfolioConstructionRandomPostRequest](docs/PortfolioConstructionRandomPostRequest.md)
 - [PortfolioConstructionRandomPostRequestConstraints](docs/PortfolioConstructionRandomPostRequestConstraints.md)
 - [PortfolioOptimizationEqualRiskContributionsPostRequest](docs/PortfolioOptimizationEqualRiskContributionsPostRequest.md)
 - [PortfolioOptimizationEqualRiskContributionsPostRequestConstraints](docs/PortfolioOptimizationEqualRiskContributionsPostRequestConstraints.md)
 - [PortfolioOptimizationEqualSharpeRatioContributionsPostRequest](docs/PortfolioOptimizationEqualSharpeRatioContributionsPostRequest.md)
 - [PortfolioOptimizationEqualVolatilityWeightedPostRequest](docs/PortfolioOptimizationEqualVolatilityWeightedPostRequest.md)
 - [PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest](docs/PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest.md)
 - [PortfolioOptimizationHierarchicalRiskParityPostRequest](docs/PortfolioOptimizationHierarchicalRiskParityPostRequest.md)
 - [PortfolioOptimizationInverseVarianceWeightedPostRequest](docs/PortfolioOptimizationInverseVarianceWeightedPostRequest.md)
 - [PortfolioOptimizationMarketCapitalizationWeightedPostRequest](docs/PortfolioOptimizationMarketCapitalizationWeightedPostRequest.md)
 - [PortfolioOptimizationMaximumDecorrelationPostRequest](docs/PortfolioOptimizationMaximumDecorrelationPostRequest.md)
 - [PortfolioOptimizationMaximumReturnDiversifiedPostRequest](docs/PortfolioOptimizationMaximumReturnDiversifiedPostRequest.md)
 - [PortfolioOptimizationMaximumReturnDiversifiedPostRequestConstraints](docs/PortfolioOptimizationMaximumReturnDiversifiedPostRequestConstraints.md)
 - [PortfolioOptimizationMaximumReturnPostRequest](docs/PortfolioOptimizationMaximumReturnPostRequest.md)
 - [PortfolioOptimizationMaximumReturnSubsetResamplingBasedPostRequest](docs/PortfolioOptimizationMaximumReturnSubsetResamplingBasedPostRequest.md)
 - [PortfolioOptimizationMaximumSharpeRatioDiversifiedPostRequest](docs/PortfolioOptimizationMaximumSharpeRatioDiversifiedPostRequest.md)
 - [PortfolioOptimizationMaximumSharpeRatioDiversifiedPostRequestConstraints](docs/PortfolioOptimizationMaximumSharpeRatioDiversifiedPostRequestConstraints.md)
 - [PortfolioOptimizationMaximumSharpeRatioPostRequest](docs/PortfolioOptimizationMaximumSharpeRatioPostRequest.md)
 - [PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest](docs/PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest.md)
 - [PortfolioOptimizationMaximumUlcerPerformanceIndexPostRequest](docs/PortfolioOptimizationMaximumUlcerPerformanceIndexPostRequest.md)
 - [PortfolioOptimizationMeanVarianceEfficientDiversifiedPostRequest](docs/PortfolioOptimizationMeanVarianceEfficientDiversifiedPostRequest.md)
 - [PortfolioOptimizationMeanVarianceEfficientDiversifiedPostRequestConstraints](docs/PortfolioOptimizationMeanVarianceEfficientDiversifiedPostRequestConstraints.md)
 - [PortfolioOptimizationMeanVarianceEfficientPostRequest](docs/PortfolioOptimizationMeanVarianceEfficientPostRequest.md)
 - [PortfolioOptimizationMeanVarianceEfficientPostRequestConstraints](docs/PortfolioOptimizationMeanVarianceEfficientPostRequestConstraints.md)
 - [PortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPostRequest](docs/PortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPostRequest.md)
 - [PortfolioOptimizationMinimumCorrelationPostRequest](docs/PortfolioOptimizationMinimumCorrelationPostRequest.md)
 - [PortfolioOptimizationMinimumUlcerIndexPostRequest](docs/PortfolioOptimizationMinimumUlcerIndexPostRequest.md)
 - [PortfolioOptimizationMinimumVarianceDiversifiedPostRequest](docs/PortfolioOptimizationMinimumVarianceDiversifiedPostRequest.md)
 - [PortfolioOptimizationMinimumVarianceDiversifiedPostRequestConstraints](docs/PortfolioOptimizationMinimumVarianceDiversifiedPostRequestConstraints.md)
 - [PortfolioOptimizationMinimumVariancePostRequest](docs/PortfolioOptimizationMinimumVariancePostRequest.md)
 - [PortfolioOptimizationMinimumVarianceSubsetResamplingBasedPostRequest](docs/PortfolioOptimizationMinimumVarianceSubsetResamplingBasedPostRequest.md)
 - [PortfolioOptimizationMostDiversifiedPostRequest](docs/PortfolioOptimizationMostDiversifiedPostRequest.md)
 - [PortfolioSimulationRebalancingDriftWeightPost200Response](docs/PortfolioSimulationRebalancingDriftWeightPost200Response.md)
 - [PortfolioSimulationRebalancingDriftWeightPost200ResponsePortfoliosInner](docs/PortfolioSimulationRebalancingDriftWeightPost200ResponsePortfoliosInner.md)
 - [PortfolioSimulationRebalancingDriftWeightPostRequest](docs/PortfolioSimulationRebalancingDriftWeightPostRequest.md)
 - [PortfolioSimulationRebalancingRandomWeightPostRequest](docs/PortfolioSimulationRebalancingRandomWeightPostRequest.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization


Authentication schemes defined for the API:
<a id="ApiKeyAuth"></a>
### ApiKeyAuth

- **Type**: API key
- **API key parameter name**: X-API-Key
- **Location**: HTTP header


## Author

contact@portfoliooptimizer.io


