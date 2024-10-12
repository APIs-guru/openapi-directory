# portfolio_optimizer

PortfolioOptimizer - JavaScript client for portfolio_optimizer
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

This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.9
- Package version: 1.0.9
- Generator version: 7.9.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen
For more information, please visit [https://portfoliooptimizer.io/](https://portfoliooptimizer.io/)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install portfolio_optimizer --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your portfolio_optimizer from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var PortfolioOptimizer = require('portfolio_optimizer');

var defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix['X-API-Key'] = "Token"

var api = new PortfolioOptimizer.AssetsAnalysisApi()
var body = {"assets":2,"assetsCovarianceMatrix":[[9,1],[1,1]]}; // {AssetsAnalysisAbsorptionRatioPostRequest} 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.assetsAnalysisAbsorptionRatioPost(body, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.portfoliooptimizer.io/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*PortfolioOptimizer.AssetsAnalysisApi* | [**assetsAnalysisAbsorptionRatioPost**](docs/AssetsAnalysisApi.md#assetsAnalysisAbsorptionRatioPost) | **POST** /assets/analysis/absorption-ratio | Absorption Ratio
*PortfolioOptimizer.AssetsAnalysisApi* | [**assetsAnalysisTurbulenceIndexPost**](docs/AssetsAnalysisApi.md#assetsAnalysisTurbulenceIndexPost) | **POST** /assets/analysis/turbulence-index | Turbulence Index
*PortfolioOptimizer.AssetsCorrelationMatrixApi* | [**assetsCorrelationMatrixBoundsPost**](docs/AssetsCorrelationMatrixApi.md#assetsCorrelationMatrixBoundsPost) | **POST** /assets/correlation/matrix/bounds | Correlation Matrix Bounds
*PortfolioOptimizer.AssetsCorrelationMatrixApi* | [**assetsCorrelationMatrixDenoisedPost**](docs/AssetsCorrelationMatrixApi.md#assetsCorrelationMatrixDenoisedPost) | **POST** /assets/correlation/matrix/denoised | Denoised Correlation Matrix
*PortfolioOptimizer.AssetsCorrelationMatrixApi* | [**assetsCorrelationMatrixDistancePost**](docs/AssetsCorrelationMatrixApi.md#assetsCorrelationMatrixDistancePost) | **POST** /assets/correlation/matrix/distance | Correlation Matrix Distance
*PortfolioOptimizer.AssetsCorrelationMatrixApi* | [**assetsCorrelationMatrixEffectiveRankPost**](docs/AssetsCorrelationMatrixApi.md#assetsCorrelationMatrixEffectiveRankPost) | **POST** /assets/correlation/matrix/effective-rank | Correlation Matrix Effective Rank
*PortfolioOptimizer.AssetsCorrelationMatrixApi* | [**assetsCorrelationMatrixInformativenessPost**](docs/AssetsCorrelationMatrixApi.md#assetsCorrelationMatrixInformativenessPost) | **POST** /assets/correlation/matrix/informativeness | Correlation Matrix Informativeness
*PortfolioOptimizer.AssetsCorrelationMatrixApi* | [**assetsCorrelationMatrixNearestPost**](docs/AssetsCorrelationMatrixApi.md#assetsCorrelationMatrixNearestPost) | **POST** /assets/correlation/matrix/nearest | Nearest Correlation Matrix
*PortfolioOptimizer.AssetsCorrelationMatrixApi* | [**assetsCorrelationMatrixPost**](docs/AssetsCorrelationMatrixApi.md#assetsCorrelationMatrixPost) | **POST** /assets/correlation/matrix | Correlation Matrix
*PortfolioOptimizer.AssetsCorrelationMatrixApi* | [**assetsCorrelationMatrixRandomPost**](docs/AssetsCorrelationMatrixApi.md#assetsCorrelationMatrixRandomPost) | **POST** /assets/correlation/matrix/random | Random Correlation Matrix
*PortfolioOptimizer.AssetsCorrelationMatrixApi* | [**assetsCorrelationMatrixShrinkagePost**](docs/AssetsCorrelationMatrixApi.md#assetsCorrelationMatrixShrinkagePost) | **POST** /assets/correlation/matrix/shrinkage | Correlation Matrix Shrinkage
*PortfolioOptimizer.AssetsCorrelationMatrixApi* | [**assetsCorrelationMatrixTheoryImpliedPost**](docs/AssetsCorrelationMatrixApi.md#assetsCorrelationMatrixTheoryImpliedPost) | **POST** /assets/correlation/matrix/theory-implied | Theory-Implied Correlation Matrix
*PortfolioOptimizer.AssetsCorrelationMatrixApi* | [**assetsCorrelationMatrixValidationPost**](docs/AssetsCorrelationMatrixApi.md#assetsCorrelationMatrixValidationPost) | **POST** /assets/correlation/matrix/validation | Correlation Matrix Validation
*PortfolioOptimizer.AssetsCovarianceMatrixApi* | [**assetsCovarianceMatrixEffectiveRankPost**](docs/AssetsCovarianceMatrixApi.md#assetsCovarianceMatrixEffectiveRankPost) | **POST** /assets/covariance/matrix/effective-rank | Covariance Matrix Effective Rank
*PortfolioOptimizer.AssetsCovarianceMatrixApi* | [**assetsCovarianceMatrixExponentiallyWeightedPost**](docs/AssetsCovarianceMatrixApi.md#assetsCovarianceMatrixExponentiallyWeightedPost) | **POST** /assets/covariance/matrix/exponentially-weighted | Exponentially Weighted Covariance Matrix
*PortfolioOptimizer.AssetsCovarianceMatrixApi* | [**assetsCovarianceMatrixPost**](docs/AssetsCovarianceMatrixApi.md#assetsCovarianceMatrixPost) | **POST** /assets/covariance/matrix | Covariance Matrix
*PortfolioOptimizer.AssetsCovarianceMatrixApi* | [**assetsCovarianceMatrixValidationPost**](docs/AssetsCovarianceMatrixApi.md#assetsCovarianceMatrixValidationPost) | **POST** /assets/covariance/matrix/validation | Covariance Matrix Validation
*PortfolioOptimizer.AssetsKurtosisApi* | [**assetsKurtosisPost**](docs/AssetsKurtosisApi.md#assetsKurtosisPost) | **POST** /assets/kurtosis | Kurtosis
*PortfolioOptimizer.AssetsMonteCarloReturnsSimulationApi* | [**assetsReturnsSimulationMonteCarloCornishFisherCorrectedPost**](docs/AssetsMonteCarloReturnsSimulationApi.md#assetsReturnsSimulationMonteCarloCornishFisherCorrectedPost) | **POST** /assets/returns/simulation/monte-carlo/cornish-fisher/corrected | Corrected Cornish-Fisher Distribution
*PortfolioOptimizer.AssetsMonteCarloReturnsSimulationApi* | [**assetsReturnsSimulationMonteCarloCornishFisherPost**](docs/AssetsMonteCarloReturnsSimulationApi.md#assetsReturnsSimulationMonteCarloCornishFisherPost) | **POST** /assets/returns/simulation/monte-carlo/cornish-fisher | Cornish-Fisher Distribution
*PortfolioOptimizer.AssetsMonteCarloReturnsSimulationApi* | [**assetsReturnsSimulationMonteCarloGaussianPost**](docs/AssetsMonteCarloReturnsSimulationApi.md#assetsReturnsSimulationMonteCarloGaussianPost) | **POST** /assets/returns/simulation/monte-carlo/gaussian | Gaussian Distribution
*PortfolioOptimizer.AssetsPricesApi* | [**assetsPricesAdjustedForwardPost**](docs/AssetsPricesApi.md#assetsPricesAdjustedForwardPost) | **POST** /assets/prices/adjusted/forward | Forward-Adjusted Prices
*PortfolioOptimizer.AssetsPricesApi* | [**assetsPricesAdjustedPost**](docs/AssetsPricesApi.md#assetsPricesAdjustedPost) | **POST** /assets/prices/adjusted | Adjusted Prices
*PortfolioOptimizer.AssetsReturnsApi* | [**assetsReturnsAveragePost**](docs/AssetsReturnsApi.md#assetsReturnsAveragePost) | **POST** /assets/returns/average | Arithmetic Average Return
*PortfolioOptimizer.AssetsReturnsApi* | [**assetsReturnsLogarithmicPost**](docs/AssetsReturnsApi.md#assetsReturnsLogarithmicPost) | **POST** /assets/returns/logarithmic | Logarithmic Returns
*PortfolioOptimizer.AssetsReturnsApi* | [**assetsReturnsPost**](docs/AssetsReturnsApi.md#assetsReturnsPost) | **POST** /assets/returns | Arithmetic Returns
*PortfolioOptimizer.AssetsReturnsApi* | [**assetsReturnsTurbulencePartitionedPost**](docs/AssetsReturnsApi.md#assetsReturnsTurbulencePartitionedPost) | **POST** /assets/returns/turbulence-partitioned | Turbulence-partitioned Asset Returns
*PortfolioOptimizer.AssetsReturnsSimulationApi* | [**assetsReturnsSimulationBootstrapPost**](docs/AssetsReturnsSimulationApi.md#assetsReturnsSimulationBootstrapPost) | **POST** /assets/returns/simulation/bootstrap | Bootstrap
*PortfolioOptimizer.AssetsSkewnessApi* | [**assetsSkewnessPost**](docs/AssetsSkewnessApi.md#assetsSkewnessPost) | **POST** /assets/skewness | Skewness
*PortfolioOptimizer.AssetsVarianceApi* | [**assetsVariancePost**](docs/AssetsVarianceApi.md#assetsVariancePost) | **POST** /assets/variance | Variance
*PortfolioOptimizer.AssetsVolatilityApi* | [**assetsVolatilityPost**](docs/AssetsVolatilityApi.md#assetsVolatilityPost) | **POST** /assets/volatility | Volatility
*PortfolioOptimizer.FactorsApi* | [**factorsResidualizationPost**](docs/FactorsApi.md#factorsResidualizationPost) | **POST** /factors/residualization | Residualization
*PortfolioOptimizer.PortfolioAnalysisApi* | [**portfolioAnalysisAlphaPost**](docs/PortfolioAnalysisApi.md#portfolioAnalysisAlphaPost) | **POST** /portfolio/analysis/alpha | Alpha
*PortfolioOptimizer.PortfolioAnalysisApi* | [**portfolioAnalysisBetaPost**](docs/PortfolioAnalysisApi.md#portfolioAnalysisBetaPost) | **POST** /portfolio/analysis/beta | Beta
*PortfolioOptimizer.PortfolioAnalysisApi* | [**portfolioAnalysisContributionsReturnPost**](docs/PortfolioAnalysisApi.md#portfolioAnalysisContributionsReturnPost) | **POST** /portfolio/analysis/contributions/return | Return Contributions
*PortfolioOptimizer.PortfolioAnalysisApi* | [**portfolioAnalysisContributionsRiskPost**](docs/PortfolioAnalysisApi.md#portfolioAnalysisContributionsRiskPost) | **POST** /portfolio/analysis/contributions/risk | Risk Contributions
*PortfolioOptimizer.PortfolioAnalysisApi* | [**portfolioAnalysisCorrelationSpectrumPost**](docs/PortfolioAnalysisApi.md#portfolioAnalysisCorrelationSpectrumPost) | **POST** /portfolio/analysis/correlation-spectrum | Correlation Spectrum
*PortfolioOptimizer.PortfolioAnalysisApi* | [**portfolioAnalysisDiversificationRatioPost**](docs/PortfolioAnalysisApi.md#portfolioAnalysisDiversificationRatioPost) | **POST** /portfolio/analysis/diversification-ratio | Diversification Ratio
*PortfolioOptimizer.PortfolioAnalysisApi* | [**portfolioAnalysisDrawdownsPost**](docs/PortfolioAnalysisApi.md#portfolioAnalysisDrawdownsPost) | **POST** /portfolio/analysis/drawdowns | Drawdowns
*PortfolioOptimizer.PortfolioAnalysisApi* | [**portfolioAnalysisEffectiveNumberOfBetsPost**](docs/PortfolioAnalysisApi.md#portfolioAnalysisEffectiveNumberOfBetsPost) | **POST** /portfolio/analysis/effective-number-of-bets | Effective Number of Bets
*PortfolioOptimizer.PortfolioAnalysisApi* | [**portfolioAnalysisFactorsExposuresPost**](docs/PortfolioAnalysisApi.md#portfolioAnalysisFactorsExposuresPost) | **POST** /portfolio/analysis/factors/exposures | Factor Exposures
*PortfolioOptimizer.PortfolioAnalysisApi* | [**portfolioAnalysisMeanVarianceEfficientFrontierPost**](docs/PortfolioAnalysisApi.md#portfolioAnalysisMeanVarianceEfficientFrontierPost) | **POST** /portfolio/analysis/mean-variance/efficient-frontier | Mean-Variance Efficient Frontier
*PortfolioOptimizer.PortfolioAnalysisApi* | [**portfolioAnalysisMeanVarianceMinimumVarianceFrontierPost**](docs/PortfolioAnalysisApi.md#portfolioAnalysisMeanVarianceMinimumVarianceFrontierPost) | **POST** /portfolio/analysis/mean-variance/minimum-variance-frontier | Mean-Variance Minimum Variance Frontier
*PortfolioOptimizer.PortfolioAnalysisApi* | [**portfolioAnalysisReturnPost**](docs/PortfolioAnalysisApi.md#portfolioAnalysisReturnPost) | **POST** /portfolio/analysis/return | Arithmetic Return
*PortfolioOptimizer.PortfolioAnalysisApi* | [**portfolioAnalysisReturnsAveragePost**](docs/PortfolioAnalysisApi.md#portfolioAnalysisReturnsAveragePost) | **POST** /portfolio/analysis/returns/average | Arithmetic Average Return
*PortfolioOptimizer.PortfolioAnalysisApi* | [**portfolioAnalysisTrackingErrorPost**](docs/PortfolioAnalysisApi.md#portfolioAnalysisTrackingErrorPost) | **POST** /portfolio/analysis/tracking-error | Tracking Error
*PortfolioOptimizer.PortfolioAnalysisApi* | [**portfolioAnalysisUlcerIndexPost**](docs/PortfolioAnalysisApi.md#portfolioAnalysisUlcerIndexPost) | **POST** /portfolio/analysis/ulcer-index | Ulcer Index
*PortfolioOptimizer.PortfolioAnalysisApi* | [**portfolioAnalysisUlcerPerformanceIndexPost**](docs/PortfolioAnalysisApi.md#portfolioAnalysisUlcerPerformanceIndexPost) | **POST** /portfolio/analysis/ulcer-performance-index | Ulcer Performance Index
*PortfolioOptimizer.PortfolioAnalysisApi* | [**portfolioAnalysisVolatilityPost**](docs/PortfolioAnalysisApi.md#portfolioAnalysisVolatilityPost) | **POST** /portfolio/analysis/volatility | Volatility
*PortfolioOptimizer.PortfolioAnalysisConditionalValueAtRiskApi* | [**portfolioAnalysisValueAtRiskConditionalCornishFisherCorrectedPost**](docs/PortfolioAnalysisConditionalValueAtRiskApi.md#portfolioAnalysisValueAtRiskConditionalCornishFisherCorrectedPost) | **POST** /portfolio/analysis/value-at-risk/conditional/cornish-fisher/corrected | Corrected Cornish-Fisher Conditional Value At Risk
*PortfolioOptimizer.PortfolioAnalysisConditionalValueAtRiskApi* | [**portfolioAnalysisValueAtRiskConditionalCornishFisherPost**](docs/PortfolioAnalysisConditionalValueAtRiskApi.md#portfolioAnalysisValueAtRiskConditionalCornishFisherPost) | **POST** /portfolio/analysis/value-at-risk/conditional/cornish-fisher | Cornish-Fisher Conditional Value At Risk
*PortfolioOptimizer.PortfolioAnalysisConditionalValueAtRiskApi* | [**portfolioAnalysisValueAtRiskConditionalGaussianPost**](docs/PortfolioAnalysisConditionalValueAtRiskApi.md#portfolioAnalysisValueAtRiskConditionalGaussianPost) | **POST** /portfolio/analysis/value-at-risk/conditional/gaussian | Gaussian Conditional Value At Risk
*PortfolioOptimizer.PortfolioAnalysisConditionalValueAtRiskApi* | [**portfolioAnalysisValueAtRiskConditionalHistoricalPost**](docs/PortfolioAnalysisConditionalValueAtRiskApi.md#portfolioAnalysisValueAtRiskConditionalHistoricalPost) | **POST** /portfolio/analysis/value-at-risk/conditional/historical | Historical Conditional Value At Risk
*PortfolioOptimizer.PortfolioAnalysisSharpeRatioApi* | [**portfolioAnalysisSharpeRatioBiasAdjustedPost**](docs/PortfolioAnalysisSharpeRatioApi.md#portfolioAnalysisSharpeRatioBiasAdjustedPost) | **POST** /portfolio/analysis/sharpe-ratio/bias-adjusted | Bias-Adjusted Sharpe Ratio
*PortfolioOptimizer.PortfolioAnalysisSharpeRatioApi* | [**portfolioAnalysisSharpeRatioConfidenceIntervalPost**](docs/PortfolioAnalysisSharpeRatioApi.md#portfolioAnalysisSharpeRatioConfidenceIntervalPost) | **POST** /portfolio/analysis/sharpe-ratio/confidence-interval | Sharpe Ratio Confidence Interval
*PortfolioOptimizer.PortfolioAnalysisSharpeRatioApi* | [**portfolioAnalysisSharpeRatioPost**](docs/PortfolioAnalysisSharpeRatioApi.md#portfolioAnalysisSharpeRatioPost) | **POST** /portfolio/analysis/sharpe-ratio | Sharpe Ratio
*PortfolioOptimizer.PortfolioAnalysisSharpeRatioApi* | [**portfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost**](docs/PortfolioAnalysisSharpeRatioApi.md#portfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost) | **POST** /portfolio/analysis/sharpe-ratio/probabilistic/minimum-track-record-length | Minimum Track Record Length
*PortfolioOptimizer.PortfolioAnalysisSharpeRatioApi* | [**portfolioAnalysisSharpeRatioProbabilisticPost**](docs/PortfolioAnalysisSharpeRatioApi.md#portfolioAnalysisSharpeRatioProbabilisticPost) | **POST** /portfolio/analysis/sharpe-ratio/probabilistic | Probabilistic Sharpe Ratio
*PortfolioOptimizer.PortfolioAnalysisValueAtRiskApi* | [**portfolioAnalysisValueAtRiskCornishFisherCorrectedPost**](docs/PortfolioAnalysisValueAtRiskApi.md#portfolioAnalysisValueAtRiskCornishFisherCorrectedPost) | **POST** /portfolio/analysis/value-at-risk/cornish-fisher/corrected | Corrected Cornish-Fisher Value At Risk
*PortfolioOptimizer.PortfolioAnalysisValueAtRiskApi* | [**portfolioAnalysisValueAtRiskCornishFisherPost**](docs/PortfolioAnalysisValueAtRiskApi.md#portfolioAnalysisValueAtRiskCornishFisherPost) | **POST** /portfolio/analysis/value-at-risk/cornish-fisher | Cornish-Fisher Value At Risk
*PortfolioOptimizer.PortfolioAnalysisValueAtRiskApi* | [**portfolioAnalysisValueAtRiskGaussianPost**](docs/PortfolioAnalysisValueAtRiskApi.md#portfolioAnalysisValueAtRiskGaussianPost) | **POST** /portfolio/analysis/value-at-risk/gaussian | Gaussian Value At Risk
*PortfolioOptimizer.PortfolioAnalysisValueAtRiskApi* | [**portfolioAnalysisValueAtRiskHistoricalPost**](docs/PortfolioAnalysisValueAtRiskApi.md#portfolioAnalysisValueAtRiskHistoricalPost) | **POST** /portfolio/analysis/value-at-risk/historical | Historical Value At Risk
*PortfolioOptimizer.PortfolioConstructionApi* | [**portfolioConstructionInvestablePost**](docs/PortfolioConstructionApi.md#portfolioConstructionInvestablePost) | **POST** /portfolio/construction/investable | Investable Portfolio
*PortfolioOptimizer.PortfolioConstructionApi* | [**portfolioConstructionMimickingPost**](docs/PortfolioConstructionApi.md#portfolioConstructionMimickingPost) | **POST** /portfolio/construction/mimicking | Mimicking Portfolio
*PortfolioOptimizer.PortfolioConstructionApi* | [**portfolioConstructionRandomPost**](docs/PortfolioConstructionApi.md#portfolioConstructionRandomPost) | **POST** /portfolio/construction/random | Random Portfolio
*PortfolioOptimizer.PortfolioOptimizationApi* | [**portfolioOptimizationEqualRiskContributionsPost**](docs/PortfolioOptimizationApi.md#portfolioOptimizationEqualRiskContributionsPost) | **POST** /portfolio/optimization/equal-risk-contributions | Equal Risk Contributions Portfolio
*PortfolioOptimizer.PortfolioOptimizationApi* | [**portfolioOptimizationEqualSharpeRatioContributionsPost**](docs/PortfolioOptimizationApi.md#portfolioOptimizationEqualSharpeRatioContributionsPost) | **POST** /portfolio/optimization/equal-sharpe-ratio-contributions | Equal Sharpe Ratio Contributions Portfolio
*PortfolioOptimizer.PortfolioOptimizationApi* | [**portfolioOptimizationEqualVolatilityWeightedPost**](docs/PortfolioOptimizationApi.md#portfolioOptimizationEqualVolatilityWeightedPost) | **POST** /portfolio/optimization/equal-volatility-weighted | Equal Volatility Weighted Portfolio
*PortfolioOptimizer.PortfolioOptimizationApi* | [**portfolioOptimizationEqualWeightedPost**](docs/PortfolioOptimizationApi.md#portfolioOptimizationEqualWeightedPost) | **POST** /portfolio/optimization/equal-weighted | Equal Weighted Portfolio
*PortfolioOptimizer.PortfolioOptimizationApi* | [**portfolioOptimizationHierarchicalRiskParityClusteringBasedPost**](docs/PortfolioOptimizationApi.md#portfolioOptimizationHierarchicalRiskParityClusteringBasedPost) | **POST** /portfolio/optimization/hierarchical-risk-parity/clustering-based | Hierarchical Clustering-Based Risk Parity Portfolio
*PortfolioOptimizer.PortfolioOptimizationApi* | [**portfolioOptimizationHierarchicalRiskParityPost**](docs/PortfolioOptimizationApi.md#portfolioOptimizationHierarchicalRiskParityPost) | **POST** /portfolio/optimization/hierarchical-risk-parity | Hierarchical Risk Parity Portfolio
*PortfolioOptimizer.PortfolioOptimizationApi* | [**portfolioOptimizationInverseVarianceWeightedPost**](docs/PortfolioOptimizationApi.md#portfolioOptimizationInverseVarianceWeightedPost) | **POST** /portfolio/optimization/inverse-variance-weighted | Inverse Variance Weighted Portfolio
*PortfolioOptimizer.PortfolioOptimizationApi* | [**portfolioOptimizationInverseVolatilityWeightedPost**](docs/PortfolioOptimizationApi.md#portfolioOptimizationInverseVolatilityWeightedPost) | **POST** /portfolio/optimization/inverse-volatility-weighted | Inverse Volatility Weighted Portfolio
*PortfolioOptimizer.PortfolioOptimizationApi* | [**portfolioOptimizationMarketCapitalizationWeightedPost**](docs/PortfolioOptimizationApi.md#portfolioOptimizationMarketCapitalizationWeightedPost) | **POST** /portfolio/optimization/market-capitalization-weighted | Market Capitalization Weighted Portfolio
*PortfolioOptimizer.PortfolioOptimizationApi* | [**portfolioOptimizationMaximumDecorrelationPost**](docs/PortfolioOptimizationApi.md#portfolioOptimizationMaximumDecorrelationPost) | **POST** /portfolio/optimization/maximum-decorrelation | Maximum Decorrelation Portfolio
*PortfolioOptimizer.PortfolioOptimizationApi* | [**portfolioOptimizationMaximumUlcerPerformanceIndexPost**](docs/PortfolioOptimizationApi.md#portfolioOptimizationMaximumUlcerPerformanceIndexPost) | **POST** /portfolio/optimization/maximum-ulcer-performance-index | Maximum Ulcer Performance Index Portfolio
*PortfolioOptimizer.PortfolioOptimizationApi* | [**portfolioOptimizationMinimumCorrelationPost**](docs/PortfolioOptimizationApi.md#portfolioOptimizationMinimumCorrelationPost) | **POST** /portfolio/optimization/minimum-correlation | Minimum Correlation Portfolio
*PortfolioOptimizer.PortfolioOptimizationApi* | [**portfolioOptimizationMinimumUlcerIndexPost**](docs/PortfolioOptimizationApi.md#portfolioOptimizationMinimumUlcerIndexPost) | **POST** /portfolio/optimization/minimum-ulcer-index | Minimum Ulcer Index Portfolio
*PortfolioOptimizer.PortfolioOptimizationApi* | [**portfolioOptimizationMostDiversifiedPost**](docs/PortfolioOptimizationApi.md#portfolioOptimizationMostDiversifiedPost) | **POST** /portfolio/optimization/most-diversified | Most Diversified Portfolio
*PortfolioOptimizer.PortfolioOptimizationMeanVarianceApi* | [**portfolioOptimizationMaximumReturnDiversifiedPost**](docs/PortfolioOptimizationMeanVarianceApi.md#portfolioOptimizationMaximumReturnDiversifiedPost) | **POST** /portfolio/optimization/maximum-return/diversified | Diversified Maximum Return Portfolio
*PortfolioOptimizer.PortfolioOptimizationMeanVarianceApi* | [**portfolioOptimizationMaximumReturnPost**](docs/PortfolioOptimizationMeanVarianceApi.md#portfolioOptimizationMaximumReturnPost) | **POST** /portfolio/optimization/maximum-return | Maximum Return Portfolio
*PortfolioOptimizer.PortfolioOptimizationMeanVarianceApi* | [**portfolioOptimizationMaximumReturnSubsetResamplingBasedPost**](docs/PortfolioOptimizationMeanVarianceApi.md#portfolioOptimizationMaximumReturnSubsetResamplingBasedPost) | **POST** /portfolio/optimization/maximum-return/subset-resampling-based | Subset Resampling-Based Maximum Return Portfolio
*PortfolioOptimizer.PortfolioOptimizationMeanVarianceApi* | [**portfolioOptimizationMaximumSharpeRatioDiversifiedPost**](docs/PortfolioOptimizationMeanVarianceApi.md#portfolioOptimizationMaximumSharpeRatioDiversifiedPost) | **POST** /portfolio/optimization/maximum-sharpe-ratio/diversified | Diversified Maximum Sharpe Ratio Portfolio
*PortfolioOptimizer.PortfolioOptimizationMeanVarianceApi* | [**portfolioOptimizationMaximumSharpeRatioPost**](docs/PortfolioOptimizationMeanVarianceApi.md#portfolioOptimizationMaximumSharpeRatioPost) | **POST** /portfolio/optimization/maximum-sharpe-ratio | Maximum Sharpe Ratio Portfolio
*PortfolioOptimizer.PortfolioOptimizationMeanVarianceApi* | [**portfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPost**](docs/PortfolioOptimizationMeanVarianceApi.md#portfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPost) | **POST** /portfolio/optimization/maximum-sharpe-ratio/subset-resampling-based | Subset Resampling-Based Maximum Sharpe Ratio Portfolio
*PortfolioOptimizer.PortfolioOptimizationMeanVarianceApi* | [**portfolioOptimizationMeanVarianceEfficientDiversifiedPost**](docs/PortfolioOptimizationMeanVarianceApi.md#portfolioOptimizationMeanVarianceEfficientDiversifiedPost) | **POST** /portfolio/optimization/mean-variance-efficient/diversified | Diversified Mean-Variance Efficient Portfolio
*PortfolioOptimizer.PortfolioOptimizationMeanVarianceApi* | [**portfolioOptimizationMeanVarianceEfficientPost**](docs/PortfolioOptimizationMeanVarianceApi.md#portfolioOptimizationMeanVarianceEfficientPost) | **POST** /portfolio/optimization/mean-variance-efficient | Mean-Variance Efficient Portfolio
*PortfolioOptimizer.PortfolioOptimizationMeanVarianceApi* | [**portfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPost**](docs/PortfolioOptimizationMeanVarianceApi.md#portfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPost) | **POST** /portfolio/optimization/mean-variance-efficient/subset-resampling-based | Subset Resampling-Based Mean-Variance Efficient Portfolio
*PortfolioOptimizer.PortfolioOptimizationMeanVarianceApi* | [**portfolioOptimizationMinimumVarianceDiversifiedPost**](docs/PortfolioOptimizationMeanVarianceApi.md#portfolioOptimizationMinimumVarianceDiversifiedPost) | **POST** /portfolio/optimization/minimum-variance/diversified | Diversified Minimum Variance Portfolio
*PortfolioOptimizer.PortfolioOptimizationMeanVarianceApi* | [**portfolioOptimizationMinimumVariancePost**](docs/PortfolioOptimizationMeanVarianceApi.md#portfolioOptimizationMinimumVariancePost) | **POST** /portfolio/optimization/minimum-variance | Minimum Variance Portfolio
*PortfolioOptimizer.PortfolioOptimizationMeanVarianceApi* | [**portfolioOptimizationMinimumVarianceSubsetResamplingBasedPost**](docs/PortfolioOptimizationMeanVarianceApi.md#portfolioOptimizationMinimumVarianceSubsetResamplingBasedPost) | **POST** /portfolio/optimization/minimum-variance/subset-resampling-based | Subset Resampling-Based Minimum Variance Portfolio
*PortfolioOptimizer.PortfolioSimulationApi* | [**portfolioSimulationRebalancingDriftWeightPost**](docs/PortfolioSimulationApi.md#portfolioSimulationRebalancingDriftWeightPost) | **POST** /portfolio/simulation/rebalancing/drift-weight | Drift-weight Portfolio Rebalancing
*PortfolioOptimizer.PortfolioSimulationApi* | [**portfolioSimulationRebalancingFixedWeightPost**](docs/PortfolioSimulationApi.md#portfolioSimulationRebalancingFixedWeightPost) | **POST** /portfolio/simulation/rebalancing/fixed-weight | Fixed-weight Portfolio Rebalancing
*PortfolioOptimizer.PortfolioSimulationApi* | [**portfolioSimulationRebalancingRandomWeightPost**](docs/PortfolioSimulationApi.md#portfolioSimulationRebalancingRandomWeightPost) | **POST** /portfolio/simulation/rebalancing/random-weight | Random-weight Portfolio Rebalancing


## Documentation for Models

 - [PortfolioOptimizer.AssetsAnalysisAbsorptionRatioPost200Response](docs/AssetsAnalysisAbsorptionRatioPost200Response.md)
 - [PortfolioOptimizer.AssetsAnalysisAbsorptionRatioPostRequest](docs/AssetsAnalysisAbsorptionRatioPostRequest.md)
 - [PortfolioOptimizer.AssetsAnalysisAbsorptionRatioPostRequestAssetsCovarianceMatrixEigenvectors](docs/AssetsAnalysisAbsorptionRatioPostRequestAssetsCovarianceMatrixEigenvectors.md)
 - [PortfolioOptimizer.AssetsAnalysisTurbulenceIndexPost200Response](docs/AssetsAnalysisTurbulenceIndexPost200Response.md)
 - [PortfolioOptimizer.AssetsAnalysisTurbulenceIndexPostRequest](docs/AssetsAnalysisTurbulenceIndexPostRequest.md)
 - [PortfolioOptimizer.AssetsCorrelationMatrixBoundsPost200Response](docs/AssetsCorrelationMatrixBoundsPost200Response.md)
 - [PortfolioOptimizer.AssetsCorrelationMatrixBoundsPostRequest](docs/AssetsCorrelationMatrixBoundsPostRequest.md)
 - [PortfolioOptimizer.AssetsCorrelationMatrixDenoisedPost200Response](docs/AssetsCorrelationMatrixDenoisedPost200Response.md)
 - [PortfolioOptimizer.AssetsCorrelationMatrixDenoisedPostRequest](docs/AssetsCorrelationMatrixDenoisedPostRequest.md)
 - [PortfolioOptimizer.AssetsCorrelationMatrixDistancePost200Response](docs/AssetsCorrelationMatrixDistancePost200Response.md)
 - [PortfolioOptimizer.AssetsCorrelationMatrixDistancePostRequest](docs/AssetsCorrelationMatrixDistancePostRequest.md)
 - [PortfolioOptimizer.AssetsCorrelationMatrixEffectiveRankPost200Response](docs/AssetsCorrelationMatrixEffectiveRankPost200Response.md)
 - [PortfolioOptimizer.AssetsCorrelationMatrixEffectiveRankPostRequest](docs/AssetsCorrelationMatrixEffectiveRankPostRequest.md)
 - [PortfolioOptimizer.AssetsCorrelationMatrixInformativenessPost200Response](docs/AssetsCorrelationMatrixInformativenessPost200Response.md)
 - [PortfolioOptimizer.AssetsCorrelationMatrixInformativenessPostRequest](docs/AssetsCorrelationMatrixInformativenessPostRequest.md)
 - [PortfolioOptimizer.AssetsCorrelationMatrixNearestPostRequest](docs/AssetsCorrelationMatrixNearestPostRequest.md)
 - [PortfolioOptimizer.AssetsCorrelationMatrixPost200Response](docs/AssetsCorrelationMatrixPost200Response.md)
 - [PortfolioOptimizer.AssetsCorrelationMatrixPostRequest](docs/AssetsCorrelationMatrixPostRequest.md)
 - [PortfolioOptimizer.AssetsCorrelationMatrixPostRequestOneOf](docs/AssetsCorrelationMatrixPostRequestOneOf.md)
 - [PortfolioOptimizer.AssetsCorrelationMatrixPostRequestOneOf1](docs/AssetsCorrelationMatrixPostRequestOneOf1.md)
 - [PortfolioOptimizer.AssetsCorrelationMatrixPostRequestOneOfAssetsInner](docs/AssetsCorrelationMatrixPostRequestOneOfAssetsInner.md)
 - [PortfolioOptimizer.AssetsCorrelationMatrixRandomPostRequest](docs/AssetsCorrelationMatrixRandomPostRequest.md)
 - [PortfolioOptimizer.AssetsCorrelationMatrixShrinkagePostRequest](docs/AssetsCorrelationMatrixShrinkagePostRequest.md)
 - [PortfolioOptimizer.AssetsCorrelationMatrixShrinkagePostRequestOneOf](docs/AssetsCorrelationMatrixShrinkagePostRequestOneOf.md)
 - [PortfolioOptimizer.AssetsCorrelationMatrixShrinkagePostRequestOneOf1](docs/AssetsCorrelationMatrixShrinkagePostRequestOneOf1.md)
 - [PortfolioOptimizer.AssetsCorrelationMatrixTheoryImpliedPostRequest](docs/AssetsCorrelationMatrixTheoryImpliedPostRequest.md)
 - [PortfolioOptimizer.AssetsCorrelationMatrixTheoryImpliedPostRequestAssetsInner](docs/AssetsCorrelationMatrixTheoryImpliedPostRequestAssetsInner.md)
 - [PortfolioOptimizer.AssetsCorrelationMatrixTheoryImpliedPostRequestAssetsInnerAssetHierarchicalClassificationInner](docs/AssetsCorrelationMatrixTheoryImpliedPostRequestAssetsInnerAssetHierarchicalClassificationInner.md)
 - [PortfolioOptimizer.AssetsCorrelationMatrixValidationPost200Response](docs/AssetsCorrelationMatrixValidationPost200Response.md)
 - [PortfolioOptimizer.AssetsCorrelationMatrixValidationPostRequest](docs/AssetsCorrelationMatrixValidationPostRequest.md)
 - [PortfolioOptimizer.AssetsCovarianceMatrixEffectiveRankPost200Response](docs/AssetsCovarianceMatrixEffectiveRankPost200Response.md)
 - [PortfolioOptimizer.AssetsCovarianceMatrixEffectiveRankPostRequest](docs/AssetsCovarianceMatrixEffectiveRankPostRequest.md)
 - [PortfolioOptimizer.AssetsCovarianceMatrixExponentiallyWeightedPost200Response](docs/AssetsCovarianceMatrixExponentiallyWeightedPost200Response.md)
 - [PortfolioOptimizer.AssetsCovarianceMatrixExponentiallyWeightedPostRequest](docs/AssetsCovarianceMatrixExponentiallyWeightedPostRequest.md)
 - [PortfolioOptimizer.AssetsCovarianceMatrixPost200Response](docs/AssetsCovarianceMatrixPost200Response.md)
 - [PortfolioOptimizer.AssetsCovarianceMatrixPostRequest](docs/AssetsCovarianceMatrixPostRequest.md)
 - [PortfolioOptimizer.AssetsCovarianceMatrixPostRequestOneOf](docs/AssetsCovarianceMatrixPostRequestOneOf.md)
 - [PortfolioOptimizer.AssetsCovarianceMatrixPostRequestOneOf1](docs/AssetsCovarianceMatrixPostRequestOneOf1.md)
 - [PortfolioOptimizer.AssetsCovarianceMatrixValidationPost200Response](docs/AssetsCovarianceMatrixValidationPost200Response.md)
 - [PortfolioOptimizer.AssetsKurtosisPost200Response](docs/AssetsKurtosisPost200Response.md)
 - [PortfolioOptimizer.AssetsKurtosisPost200ResponseAssetsInner](docs/AssetsKurtosisPost200ResponseAssetsInner.md)
 - [PortfolioOptimizer.AssetsKurtosisPostRequest](docs/AssetsKurtosisPostRequest.md)
 - [PortfolioOptimizer.AssetsKurtosisPostRequestAssetsInner](docs/AssetsKurtosisPostRequestAssetsInner.md)
 - [PortfolioOptimizer.AssetsPricesAdjustedPost200Response](docs/AssetsPricesAdjustedPost200Response.md)
 - [PortfolioOptimizer.AssetsPricesAdjustedPost200ResponseAssetsInner](docs/AssetsPricesAdjustedPost200ResponseAssetsInner.md)
 - [PortfolioOptimizer.AssetsPricesAdjustedPost200ResponseAssetsInnerAssetAdjustedPricesInner](docs/AssetsPricesAdjustedPost200ResponseAssetsInnerAssetAdjustedPricesInner.md)
 - [PortfolioOptimizer.AssetsPricesAdjustedPostRequest](docs/AssetsPricesAdjustedPostRequest.md)
 - [PortfolioOptimizer.AssetsPricesAdjustedPostRequestAssetsInner](docs/AssetsPricesAdjustedPostRequestAssetsInner.md)
 - [PortfolioOptimizer.AssetsPricesAdjustedPostRequestAssetsInnerAssetDividendsInner](docs/AssetsPricesAdjustedPostRequestAssetsInnerAssetDividendsInner.md)
 - [PortfolioOptimizer.AssetsPricesAdjustedPostRequestAssetsInnerAssetPricesInner](docs/AssetsPricesAdjustedPostRequestAssetsInnerAssetPricesInner.md)
 - [PortfolioOptimizer.AssetsPricesAdjustedPostRequestAssetsInnerAssetSplitsInner](docs/AssetsPricesAdjustedPostRequestAssetsInnerAssetSplitsInner.md)
 - [PortfolioOptimizer.AssetsReturnsAveragePost200Response](docs/AssetsReturnsAveragePost200Response.md)
 - [PortfolioOptimizer.AssetsReturnsAveragePost200ResponseAssetsInner](docs/AssetsReturnsAveragePost200ResponseAssetsInner.md)
 - [PortfolioOptimizer.AssetsReturnsAveragePostRequest](docs/AssetsReturnsAveragePostRequest.md)
 - [PortfolioOptimizer.AssetsReturnsAveragePostRequestAssetsInner](docs/AssetsReturnsAveragePostRequestAssetsInner.md)
 - [PortfolioOptimizer.AssetsReturnsLogarithmicPost200Response](docs/AssetsReturnsLogarithmicPost200Response.md)
 - [PortfolioOptimizer.AssetsReturnsLogarithmicPost200ResponseAssetsInner](docs/AssetsReturnsLogarithmicPost200ResponseAssetsInner.md)
 - [PortfolioOptimizer.AssetsReturnsPost200Response](docs/AssetsReturnsPost200Response.md)
 - [PortfolioOptimizer.AssetsReturnsPost200ResponseAssetsInner](docs/AssetsReturnsPost200ResponseAssetsInner.md)
 - [PortfolioOptimizer.AssetsReturnsPostRequest](docs/AssetsReturnsPostRequest.md)
 - [PortfolioOptimizer.AssetsReturnsPostRequestAssetsInner](docs/AssetsReturnsPostRequestAssetsInner.md)
 - [PortfolioOptimizer.AssetsReturnsSimulationBootstrapPost200Response](docs/AssetsReturnsSimulationBootstrapPost200Response.md)
 - [PortfolioOptimizer.AssetsReturnsSimulationBootstrapPost200ResponseSimulationsInner](docs/AssetsReturnsSimulationBootstrapPost200ResponseSimulationsInner.md)
 - [PortfolioOptimizer.AssetsReturnsSimulationBootstrapPost200ResponseSimulationsInnerAssetsInner](docs/AssetsReturnsSimulationBootstrapPost200ResponseSimulationsInnerAssetsInner.md)
 - [PortfolioOptimizer.AssetsReturnsSimulationBootstrapPostRequest](docs/AssetsReturnsSimulationBootstrapPostRequest.md)
 - [PortfolioOptimizer.AssetsReturnsSimulationBootstrapPostRequestAssetsInner](docs/AssetsReturnsSimulationBootstrapPostRequestAssetsInner.md)
 - [PortfolioOptimizer.AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest](docs/AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest.md)
 - [PortfolioOptimizer.AssetsReturnsSimulationMonteCarloCornishFisherPost200Response](docs/AssetsReturnsSimulationMonteCarloCornishFisherPost200Response.md)
 - [PortfolioOptimizer.AssetsReturnsSimulationMonteCarloCornishFisherPost200ResponseSimulationsInner](docs/AssetsReturnsSimulationMonteCarloCornishFisherPost200ResponseSimulationsInner.md)
 - [PortfolioOptimizer.AssetsReturnsSimulationMonteCarloCornishFisherPostRequest](docs/AssetsReturnsSimulationMonteCarloCornishFisherPostRequest.md)
 - [PortfolioOptimizer.AssetsReturnsSimulationMonteCarloGaussianPostRequest](docs/AssetsReturnsSimulationMonteCarloGaussianPostRequest.md)
 - [PortfolioOptimizer.AssetsReturnsTurbulencePartitionedPost200Response](docs/AssetsReturnsTurbulencePartitionedPost200Response.md)
 - [PortfolioOptimizer.AssetsReturnsTurbulencePartitionedPost200ResponseAssetsInner](docs/AssetsReturnsTurbulencePartitionedPost200ResponseAssetsInner.md)
 - [PortfolioOptimizer.AssetsReturnsTurbulencePartitionedPost200ResponseAssetsInnerAssetTurbulencePartitionedReturnsInner](docs/AssetsReturnsTurbulencePartitionedPost200ResponseAssetsInnerAssetTurbulencePartitionedReturnsInner.md)
 - [PortfolioOptimizer.AssetsReturnsTurbulencePartitionedPostRequest](docs/AssetsReturnsTurbulencePartitionedPostRequest.md)
 - [PortfolioOptimizer.AssetsSkewnessPost200Response](docs/AssetsSkewnessPost200Response.md)
 - [PortfolioOptimizer.AssetsSkewnessPost200ResponseAssetsInner](docs/AssetsSkewnessPost200ResponseAssetsInner.md)
 - [PortfolioOptimizer.AssetsSkewnessPostRequest](docs/AssetsSkewnessPostRequest.md)
 - [PortfolioOptimizer.AssetsSkewnessPostRequestAssetsInner](docs/AssetsSkewnessPostRequestAssetsInner.md)
 - [PortfolioOptimizer.AssetsVariancePost200Response](docs/AssetsVariancePost200Response.md)
 - [PortfolioOptimizer.AssetsVariancePost200ResponseAssetsInner](docs/AssetsVariancePost200ResponseAssetsInner.md)
 - [PortfolioOptimizer.AssetsVariancePostRequest](docs/AssetsVariancePostRequest.md)
 - [PortfolioOptimizer.AssetsVariancePostRequestOneOf](docs/AssetsVariancePostRequestOneOf.md)
 - [PortfolioOptimizer.AssetsVariancePostRequestOneOf1](docs/AssetsVariancePostRequestOneOf1.md)
 - [PortfolioOptimizer.AssetsVariancePostRequestOneOf1AssetsInner](docs/AssetsVariancePostRequestOneOf1AssetsInner.md)
 - [PortfolioOptimizer.AssetsVariancePostRequestOneOfAssetsInner](docs/AssetsVariancePostRequestOneOfAssetsInner.md)
 - [PortfolioOptimizer.AssetsVolatilityPost200Response](docs/AssetsVolatilityPost200Response.md)
 - [PortfolioOptimizer.AssetsVolatilityPost200ResponseAssetsInner](docs/AssetsVolatilityPost200ResponseAssetsInner.md)
 - [PortfolioOptimizer.AssetsVolatilityPostRequest](docs/AssetsVolatilityPostRequest.md)
 - [PortfolioOptimizer.AssetsVolatilityPostRequestOneOf](docs/AssetsVolatilityPostRequestOneOf.md)
 - [PortfolioOptimizer.AssetsVolatilityPostRequestOneOfAssetsInner](docs/AssetsVolatilityPostRequestOneOfAssetsInner.md)
 - [PortfolioOptimizer.FactorsResidualizationPost200Response](docs/FactorsResidualizationPost200Response.md)
 - [PortfolioOptimizer.FactorsResidualizationPostRequest](docs/FactorsResidualizationPostRequest.md)
 - [PortfolioOptimizer.FactorsResidualizationPostRequestFactorsInner](docs/FactorsResidualizationPostRequestFactorsInner.md)
 - [PortfolioOptimizer.PortfolioAnalysisAlphaPost200Response](docs/PortfolioAnalysisAlphaPost200Response.md)
 - [PortfolioOptimizer.PortfolioAnalysisAlphaPost200ResponsePortfoliosInner](docs/PortfolioAnalysisAlphaPost200ResponsePortfoliosInner.md)
 - [PortfolioOptimizer.PortfolioAnalysisAlphaPostRequest](docs/PortfolioAnalysisAlphaPostRequest.md)
 - [PortfolioOptimizer.PortfolioAnalysisAlphaPostRequestOneOf](docs/PortfolioAnalysisAlphaPostRequestOneOf.md)
 - [PortfolioOptimizer.PortfolioAnalysisAlphaPostRequestOneOf1](docs/PortfolioAnalysisAlphaPostRequestOneOf1.md)
 - [PortfolioOptimizer.PortfolioAnalysisAlphaPostRequestOneOfPortfoliosInner](docs/PortfolioAnalysisAlphaPostRequestOneOfPortfoliosInner.md)
 - [PortfolioOptimizer.PortfolioAnalysisBetaPost200Response](docs/PortfolioAnalysisBetaPost200Response.md)
 - [PortfolioOptimizer.PortfolioAnalysisBetaPost200ResponsePortfoliosInner](docs/PortfolioAnalysisBetaPost200ResponsePortfoliosInner.md)
 - [PortfolioOptimizer.PortfolioAnalysisContributionsReturnPost200Response](docs/PortfolioAnalysisContributionsReturnPost200Response.md)
 - [PortfolioOptimizer.PortfolioAnalysisContributionsReturnPost200ResponsePortfoliosInner](docs/PortfolioAnalysisContributionsReturnPost200ResponsePortfoliosInner.md)
 - [PortfolioOptimizer.PortfolioAnalysisContributionsReturnPostRequest](docs/PortfolioAnalysisContributionsReturnPostRequest.md)
 - [PortfolioOptimizer.PortfolioAnalysisContributionsReturnPostRequestPortfoliosInner](docs/PortfolioAnalysisContributionsReturnPostRequestPortfoliosInner.md)
 - [PortfolioOptimizer.PortfolioAnalysisContributionsRiskPost200Response](docs/PortfolioAnalysisContributionsRiskPost200Response.md)
 - [PortfolioOptimizer.PortfolioAnalysisContributionsRiskPost200ResponsePortfoliosInner](docs/PortfolioAnalysisContributionsRiskPost200ResponsePortfoliosInner.md)
 - [PortfolioOptimizer.PortfolioAnalysisContributionsRiskPostRequest](docs/PortfolioAnalysisContributionsRiskPostRequest.md)
 - [PortfolioOptimizer.PortfolioAnalysisCorrelationSpectrumPost200Response](docs/PortfolioAnalysisCorrelationSpectrumPost200Response.md)
 - [PortfolioOptimizer.PortfolioAnalysisCorrelationSpectrumPost200ResponsePortfoliosInner](docs/PortfolioAnalysisCorrelationSpectrumPost200ResponsePortfoliosInner.md)
 - [PortfolioOptimizer.PortfolioAnalysisCorrelationSpectrumPostRequest](docs/PortfolioAnalysisCorrelationSpectrumPostRequest.md)
 - [PortfolioOptimizer.PortfolioAnalysisCorrelationSpectrumPostRequestOneOf](docs/PortfolioAnalysisCorrelationSpectrumPostRequestOneOf.md)
 - [PortfolioOptimizer.PortfolioAnalysisCorrelationSpectrumPostRequestOneOf1](docs/PortfolioAnalysisCorrelationSpectrumPostRequestOneOf1.md)
 - [PortfolioOptimizer.PortfolioAnalysisCorrelationSpectrumPostRequestOneOf1AssetsInner](docs/PortfolioAnalysisCorrelationSpectrumPostRequestOneOf1AssetsInner.md)
 - [PortfolioOptimizer.PortfolioAnalysisCorrelationSpectrumPostRequestOneOf1PortfoliosInner](docs/PortfolioAnalysisCorrelationSpectrumPostRequestOneOf1PortfoliosInner.md)
 - [PortfolioOptimizer.PortfolioAnalysisDiversificationRatioPost200Response](docs/PortfolioAnalysisDiversificationRatioPost200Response.md)
 - [PortfolioOptimizer.PortfolioAnalysisDiversificationRatioPost200ResponsePortfoliosInner](docs/PortfolioAnalysisDiversificationRatioPost200ResponsePortfoliosInner.md)
 - [PortfolioOptimizer.PortfolioAnalysisDrawdownsPost200Response](docs/PortfolioAnalysisDrawdownsPost200Response.md)
 - [PortfolioOptimizer.PortfolioAnalysisDrawdownsPost200ResponsePortfoliosInner](docs/PortfolioAnalysisDrawdownsPost200ResponsePortfoliosInner.md)
 - [PortfolioOptimizer.PortfolioAnalysisDrawdownsPost200ResponsePortfoliosInnerPortfolioWorstDrawdownsInner](docs/PortfolioAnalysisDrawdownsPost200ResponsePortfoliosInnerPortfolioWorstDrawdownsInner.md)
 - [PortfolioOptimizer.PortfolioAnalysisDrawdownsPostRequest](docs/PortfolioAnalysisDrawdownsPostRequest.md)
 - [PortfolioOptimizer.PortfolioAnalysisDrawdownsPostRequestPortfoliosInner](docs/PortfolioAnalysisDrawdownsPostRequestPortfoliosInner.md)
 - [PortfolioOptimizer.PortfolioAnalysisEffectiveNumberOfBetsPost200Response](docs/PortfolioAnalysisEffectiveNumberOfBetsPost200Response.md)
 - [PortfolioOptimizer.PortfolioAnalysisEffectiveNumberOfBetsPost200ResponsePortfoliosInner](docs/PortfolioAnalysisEffectiveNumberOfBetsPost200ResponsePortfoliosInner.md)
 - [PortfolioOptimizer.PortfolioAnalysisEffectiveNumberOfBetsPostRequest](docs/PortfolioAnalysisEffectiveNumberOfBetsPostRequest.md)
 - [PortfolioOptimizer.PortfolioAnalysisEffectiveNumberOfBetsPostRequestPortfoliosInner](docs/PortfolioAnalysisEffectiveNumberOfBetsPostRequestPortfoliosInner.md)
 - [PortfolioOptimizer.PortfolioAnalysisFactorsExposuresPost200Response](docs/PortfolioAnalysisFactorsExposuresPost200Response.md)
 - [PortfolioOptimizer.PortfolioAnalysisFactorsExposuresPost200ResponsePortfoliosInner](docs/PortfolioAnalysisFactorsExposuresPost200ResponsePortfoliosInner.md)
 - [PortfolioOptimizer.PortfolioAnalysisFactorsExposuresPostRequest](docs/PortfolioAnalysisFactorsExposuresPostRequest.md)
 - [PortfolioOptimizer.PortfolioAnalysisFactorsExposuresPostRequestFactorsInner](docs/PortfolioAnalysisFactorsExposuresPostRequestFactorsInner.md)
 - [PortfolioOptimizer.PortfolioAnalysisFactorsExposuresPostRequestPortfoliosInner](docs/PortfolioAnalysisFactorsExposuresPostRequestPortfoliosInner.md)
 - [PortfolioOptimizer.PortfolioAnalysisMeanVarianceEfficientFrontierPost200Response](docs/PortfolioAnalysisMeanVarianceEfficientFrontierPost200Response.md)
 - [PortfolioOptimizer.PortfolioAnalysisMeanVarianceEfficientFrontierPost200ResponsePortfoliosInner](docs/PortfolioAnalysisMeanVarianceEfficientFrontierPost200ResponsePortfoliosInner.md)
 - [PortfolioOptimizer.PortfolioAnalysisMeanVarianceEfficientFrontierPostRequest](docs/PortfolioAnalysisMeanVarianceEfficientFrontierPostRequest.md)
 - [PortfolioOptimizer.PortfolioAnalysisMeanVarianceEfficientFrontierPostRequestConstraints](docs/PortfolioAnalysisMeanVarianceEfficientFrontierPostRequestConstraints.md)
 - [PortfolioOptimizer.PortfolioAnalysisMeanVarianceMinimumVarianceFrontierPostRequest](docs/PortfolioAnalysisMeanVarianceMinimumVarianceFrontierPostRequest.md)
 - [PortfolioOptimizer.PortfolioAnalysisReturnPost200Response](docs/PortfolioAnalysisReturnPost200Response.md)
 - [PortfolioOptimizer.PortfolioAnalysisReturnPost200ResponsePortfoliosInner](docs/PortfolioAnalysisReturnPost200ResponsePortfoliosInner.md)
 - [PortfolioOptimizer.PortfolioAnalysisReturnPostRequest](docs/PortfolioAnalysisReturnPostRequest.md)
 - [PortfolioOptimizer.PortfolioAnalysisReturnPostRequestOneOf](docs/PortfolioAnalysisReturnPostRequestOneOf.md)
 - [PortfolioOptimizer.PortfolioAnalysisReturnPostRequestOneOf1](docs/PortfolioAnalysisReturnPostRequestOneOf1.md)
 - [PortfolioOptimizer.PortfolioAnalysisReturnPostRequestOneOf1PortfoliosInner](docs/PortfolioAnalysisReturnPostRequestOneOf1PortfoliosInner.md)
 - [PortfolioOptimizer.PortfolioAnalysisReturnsAveragePost200Response](docs/PortfolioAnalysisReturnsAveragePost200Response.md)
 - [PortfolioOptimizer.PortfolioAnalysisReturnsAveragePost200ResponsePortfoliosInner](docs/PortfolioAnalysisReturnsAveragePost200ResponsePortfoliosInner.md)
 - [PortfolioOptimizer.PortfolioAnalysisSharpeRatioBiasAdjustedPost200Response](docs/PortfolioAnalysisSharpeRatioBiasAdjustedPost200Response.md)
 - [PortfolioOptimizer.PortfolioAnalysisSharpeRatioBiasAdjustedPost200ResponsePortfoliosInner](docs/PortfolioAnalysisSharpeRatioBiasAdjustedPost200ResponsePortfoliosInner.md)
 - [PortfolioOptimizer.PortfolioAnalysisSharpeRatioBiasAdjustedPostRequest](docs/PortfolioAnalysisSharpeRatioBiasAdjustedPostRequest.md)
 - [PortfolioOptimizer.PortfolioAnalysisSharpeRatioBiasAdjustedPostRequestPortfoliosInner](docs/PortfolioAnalysisSharpeRatioBiasAdjustedPostRequestPortfoliosInner.md)
 - [PortfolioOptimizer.PortfolioAnalysisSharpeRatioConfidenceIntervalPost200Response](docs/PortfolioAnalysisSharpeRatioConfidenceIntervalPost200Response.md)
 - [PortfolioOptimizer.PortfolioAnalysisSharpeRatioConfidenceIntervalPost200ResponsePortfoliosInner](docs/PortfolioAnalysisSharpeRatioConfidenceIntervalPost200ResponsePortfoliosInner.md)
 - [PortfolioOptimizer.PortfolioAnalysisSharpeRatioConfidenceIntervalPostRequest](docs/PortfolioAnalysisSharpeRatioConfidenceIntervalPostRequest.md)
 - [PortfolioOptimizer.PortfolioAnalysisSharpeRatioPost200Response](docs/PortfolioAnalysisSharpeRatioPost200Response.md)
 - [PortfolioOptimizer.PortfolioAnalysisSharpeRatioPost200ResponsePortfoliosInner](docs/PortfolioAnalysisSharpeRatioPost200ResponsePortfoliosInner.md)
 - [PortfolioOptimizer.PortfolioAnalysisSharpeRatioPostRequest](docs/PortfolioAnalysisSharpeRatioPostRequest.md)
 - [PortfolioOptimizer.PortfolioAnalysisSharpeRatioPostRequestOneOf](docs/PortfolioAnalysisSharpeRatioPostRequestOneOf.md)
 - [PortfolioOptimizer.PortfolioAnalysisSharpeRatioPostRequestOneOf1](docs/PortfolioAnalysisSharpeRatioPostRequestOneOf1.md)
 - [PortfolioOptimizer.PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner](docs/PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner.md)
 - [PortfolioOptimizer.PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost200Response](docs/PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost200Response.md)
 - [PortfolioOptimizer.PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost200ResponsePortfoliosInner](docs/PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost200ResponsePortfoliosInner.md)
 - [PortfolioOptimizer.PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostRequest](docs/PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostRequest.md)
 - [PortfolioOptimizer.PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostRequestOneOf](docs/PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostRequestOneOf.md)
 - [PortfolioOptimizer.PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostRequestOneOf1](docs/PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostRequestOneOf1.md)
 - [PortfolioOptimizer.PortfolioAnalysisSharpeRatioProbabilisticPost200Response](docs/PortfolioAnalysisSharpeRatioProbabilisticPost200Response.md)
 - [PortfolioOptimizer.PortfolioAnalysisSharpeRatioProbabilisticPost200ResponsePortfoliosInner](docs/PortfolioAnalysisSharpeRatioProbabilisticPost200ResponsePortfoliosInner.md)
 - [PortfolioOptimizer.PortfolioAnalysisSharpeRatioProbabilisticPostRequest](docs/PortfolioAnalysisSharpeRatioProbabilisticPostRequest.md)
 - [PortfolioOptimizer.PortfolioAnalysisSharpeRatioProbabilisticPostRequestOneOf](docs/PortfolioAnalysisSharpeRatioProbabilisticPostRequestOneOf.md)
 - [PortfolioOptimizer.PortfolioAnalysisSharpeRatioProbabilisticPostRequestOneOf1](docs/PortfolioAnalysisSharpeRatioProbabilisticPostRequestOneOf1.md)
 - [PortfolioOptimizer.PortfolioAnalysisSharpeRatioProbabilisticPostRequestOneOf1PortfoliosInner](docs/PortfolioAnalysisSharpeRatioProbabilisticPostRequestOneOf1PortfoliosInner.md)
 - [PortfolioOptimizer.PortfolioAnalysisTrackingErrorPost200Response](docs/PortfolioAnalysisTrackingErrorPost200Response.md)
 - [PortfolioOptimizer.PortfolioAnalysisTrackingErrorPost200ResponsePortfoliosInner](docs/PortfolioAnalysisTrackingErrorPost200ResponsePortfoliosInner.md)
 - [PortfolioOptimizer.PortfolioAnalysisTrackingErrorPostRequest](docs/PortfolioAnalysisTrackingErrorPostRequest.md)
 - [PortfolioOptimizer.PortfolioAnalysisTrackingErrorPostRequestPortfoliosInner](docs/PortfolioAnalysisTrackingErrorPostRequestPortfoliosInner.md)
 - [PortfolioOptimizer.PortfolioAnalysisUlcerIndexPost200Response](docs/PortfolioAnalysisUlcerIndexPost200Response.md)
 - [PortfolioOptimizer.PortfolioAnalysisUlcerIndexPost200ResponsePortfoliosInner](docs/PortfolioAnalysisUlcerIndexPost200ResponsePortfoliosInner.md)
 - [PortfolioOptimizer.PortfolioAnalysisUlcerPerformanceIndexPost200Response](docs/PortfolioAnalysisUlcerPerformanceIndexPost200Response.md)
 - [PortfolioOptimizer.PortfolioAnalysisUlcerPerformanceIndexPost200ResponsePortfoliosInner](docs/PortfolioAnalysisUlcerPerformanceIndexPost200ResponsePortfoliosInner.md)
 - [PortfolioOptimizer.PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200Response](docs/PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200Response.md)
 - [PortfolioOptimizer.PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200ResponsePortfoliosInner](docs/PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200ResponsePortfoliosInner.md)
 - [PortfolioOptimizer.PortfolioAnalysisValueAtRiskConditionalCornishFisherPostRequest](docs/PortfolioAnalysisValueAtRiskConditionalCornishFisherPostRequest.md)
 - [PortfolioOptimizer.PortfolioAnalysisValueAtRiskConditionalCornishFisherPostRequestPortfoliosInner](docs/PortfolioAnalysisValueAtRiskConditionalCornishFisherPostRequestPortfoliosInner.md)
 - [PortfolioOptimizer.PortfolioAnalysisValueAtRiskConditionalGaussianPostRequest](docs/PortfolioAnalysisValueAtRiskConditionalGaussianPostRequest.md)
 - [PortfolioOptimizer.PortfolioAnalysisValueAtRiskConditionalGaussianPostRequestPortfoliosInner](docs/PortfolioAnalysisValueAtRiskConditionalGaussianPostRequestPortfoliosInner.md)
 - [PortfolioOptimizer.PortfolioAnalysisValueAtRiskConditionalHistoricalPostRequest](docs/PortfolioAnalysisValueAtRiskConditionalHistoricalPostRequest.md)
 - [PortfolioOptimizer.PortfolioAnalysisValueAtRiskCornishFisherPost200Response](docs/PortfolioAnalysisValueAtRiskCornishFisherPost200Response.md)
 - [PortfolioOptimizer.PortfolioAnalysisValueAtRiskCornishFisherPost200ResponsePortfoliosInner](docs/PortfolioAnalysisValueAtRiskCornishFisherPost200ResponsePortfoliosInner.md)
 - [PortfolioOptimizer.PortfolioAnalysisVolatilityPost200Response](docs/PortfolioAnalysisVolatilityPost200Response.md)
 - [PortfolioOptimizer.PortfolioAnalysisVolatilityPost200ResponsePortfoliosInner](docs/PortfolioAnalysisVolatilityPost200ResponsePortfoliosInner.md)
 - [PortfolioOptimizer.PortfolioAnalysisVolatilityPostRequest](docs/PortfolioAnalysisVolatilityPostRequest.md)
 - [PortfolioOptimizer.PortfolioAnalysisVolatilityPostRequestOneOf](docs/PortfolioAnalysisVolatilityPostRequestOneOf.md)
 - [PortfolioOptimizer.PortfolioConstructionInvestablePost200Response](docs/PortfolioConstructionInvestablePost200Response.md)
 - [PortfolioOptimizer.PortfolioConstructionInvestablePostRequest](docs/PortfolioConstructionInvestablePostRequest.md)
 - [PortfolioOptimizer.PortfolioConstructionMimickingPostRequest](docs/PortfolioConstructionMimickingPostRequest.md)
 - [PortfolioOptimizer.PortfolioConstructionRandomPost200Response](docs/PortfolioConstructionRandomPost200Response.md)
 - [PortfolioOptimizer.PortfolioConstructionRandomPostRequest](docs/PortfolioConstructionRandomPostRequest.md)
 - [PortfolioOptimizer.PortfolioConstructionRandomPostRequestConstraints](docs/PortfolioConstructionRandomPostRequestConstraints.md)
 - [PortfolioOptimizer.PortfolioOptimizationEqualRiskContributionsPostRequest](docs/PortfolioOptimizationEqualRiskContributionsPostRequest.md)
 - [PortfolioOptimizer.PortfolioOptimizationEqualRiskContributionsPostRequestConstraints](docs/PortfolioOptimizationEqualRiskContributionsPostRequestConstraints.md)
 - [PortfolioOptimizer.PortfolioOptimizationEqualSharpeRatioContributionsPostRequest](docs/PortfolioOptimizationEqualSharpeRatioContributionsPostRequest.md)
 - [PortfolioOptimizer.PortfolioOptimizationEqualVolatilityWeightedPostRequest](docs/PortfolioOptimizationEqualVolatilityWeightedPostRequest.md)
 - [PortfolioOptimizer.PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest](docs/PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest.md)
 - [PortfolioOptimizer.PortfolioOptimizationHierarchicalRiskParityPostRequest](docs/PortfolioOptimizationHierarchicalRiskParityPostRequest.md)
 - [PortfolioOptimizer.PortfolioOptimizationInverseVarianceWeightedPostRequest](docs/PortfolioOptimizationInverseVarianceWeightedPostRequest.md)
 - [PortfolioOptimizer.PortfolioOptimizationMarketCapitalizationWeightedPostRequest](docs/PortfolioOptimizationMarketCapitalizationWeightedPostRequest.md)
 - [PortfolioOptimizer.PortfolioOptimizationMaximumDecorrelationPostRequest](docs/PortfolioOptimizationMaximumDecorrelationPostRequest.md)
 - [PortfolioOptimizer.PortfolioOptimizationMaximumReturnDiversifiedPostRequest](docs/PortfolioOptimizationMaximumReturnDiversifiedPostRequest.md)
 - [PortfolioOptimizer.PortfolioOptimizationMaximumReturnDiversifiedPostRequestConstraints](docs/PortfolioOptimizationMaximumReturnDiversifiedPostRequestConstraints.md)
 - [PortfolioOptimizer.PortfolioOptimizationMaximumReturnPostRequest](docs/PortfolioOptimizationMaximumReturnPostRequest.md)
 - [PortfolioOptimizer.PortfolioOptimizationMaximumReturnSubsetResamplingBasedPostRequest](docs/PortfolioOptimizationMaximumReturnSubsetResamplingBasedPostRequest.md)
 - [PortfolioOptimizer.PortfolioOptimizationMaximumSharpeRatioDiversifiedPostRequest](docs/PortfolioOptimizationMaximumSharpeRatioDiversifiedPostRequest.md)
 - [PortfolioOptimizer.PortfolioOptimizationMaximumSharpeRatioDiversifiedPostRequestConstraints](docs/PortfolioOptimizationMaximumSharpeRatioDiversifiedPostRequestConstraints.md)
 - [PortfolioOptimizer.PortfolioOptimizationMaximumSharpeRatioPostRequest](docs/PortfolioOptimizationMaximumSharpeRatioPostRequest.md)
 - [PortfolioOptimizer.PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest](docs/PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest.md)
 - [PortfolioOptimizer.PortfolioOptimizationMaximumUlcerPerformanceIndexPostRequest](docs/PortfolioOptimizationMaximumUlcerPerformanceIndexPostRequest.md)
 - [PortfolioOptimizer.PortfolioOptimizationMeanVarianceEfficientDiversifiedPostRequest](docs/PortfolioOptimizationMeanVarianceEfficientDiversifiedPostRequest.md)
 - [PortfolioOptimizer.PortfolioOptimizationMeanVarianceEfficientDiversifiedPostRequestConstraints](docs/PortfolioOptimizationMeanVarianceEfficientDiversifiedPostRequestConstraints.md)
 - [PortfolioOptimizer.PortfolioOptimizationMeanVarianceEfficientPostRequest](docs/PortfolioOptimizationMeanVarianceEfficientPostRequest.md)
 - [PortfolioOptimizer.PortfolioOptimizationMeanVarianceEfficientPostRequestConstraints](docs/PortfolioOptimizationMeanVarianceEfficientPostRequestConstraints.md)
 - [PortfolioOptimizer.PortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPostRequest](docs/PortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPostRequest.md)
 - [PortfolioOptimizer.PortfolioOptimizationMinimumCorrelationPostRequest](docs/PortfolioOptimizationMinimumCorrelationPostRequest.md)
 - [PortfolioOptimizer.PortfolioOptimizationMinimumUlcerIndexPostRequest](docs/PortfolioOptimizationMinimumUlcerIndexPostRequest.md)
 - [PortfolioOptimizer.PortfolioOptimizationMinimumVarianceDiversifiedPostRequest](docs/PortfolioOptimizationMinimumVarianceDiversifiedPostRequest.md)
 - [PortfolioOptimizer.PortfolioOptimizationMinimumVarianceDiversifiedPostRequestConstraints](docs/PortfolioOptimizationMinimumVarianceDiversifiedPostRequestConstraints.md)
 - [PortfolioOptimizer.PortfolioOptimizationMinimumVariancePostRequest](docs/PortfolioOptimizationMinimumVariancePostRequest.md)
 - [PortfolioOptimizer.PortfolioOptimizationMinimumVarianceSubsetResamplingBasedPostRequest](docs/PortfolioOptimizationMinimumVarianceSubsetResamplingBasedPostRequest.md)
 - [PortfolioOptimizer.PortfolioOptimizationMostDiversifiedPostRequest](docs/PortfolioOptimizationMostDiversifiedPostRequest.md)
 - [PortfolioOptimizer.PortfolioSimulationRebalancingDriftWeightPost200Response](docs/PortfolioSimulationRebalancingDriftWeightPost200Response.md)
 - [PortfolioOptimizer.PortfolioSimulationRebalancingDriftWeightPost200ResponsePortfoliosInner](docs/PortfolioSimulationRebalancingDriftWeightPost200ResponsePortfoliosInner.md)
 - [PortfolioOptimizer.PortfolioSimulationRebalancingDriftWeightPostRequest](docs/PortfolioSimulationRebalancingDriftWeightPostRequest.md)
 - [PortfolioOptimizer.PortfolioSimulationRebalancingRandomWeightPostRequest](docs/PortfolioSimulationRebalancingRandomWeightPostRequest.md)


## Documentation for Authorization


Authentication schemes defined for the API:
### ApiKeyAuth


- **Type**: API key
- **API key parameter name**: X-API-Key
- **Location**: HTTP header

