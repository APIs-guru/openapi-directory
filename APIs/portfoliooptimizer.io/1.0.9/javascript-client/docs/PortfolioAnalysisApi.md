# PortfolioOptimizer.PortfolioAnalysisApi

All URIs are relative to *https://api.portfoliooptimizer.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**portfolioAnalysisAlphaPost**](PortfolioAnalysisApi.md#portfolioAnalysisAlphaPost) | **POST** /portfolio/analysis/alpha | Alpha
[**portfolioAnalysisBetaPost**](PortfolioAnalysisApi.md#portfolioAnalysisBetaPost) | **POST** /portfolio/analysis/beta | Beta
[**portfolioAnalysisContributionsReturnPost**](PortfolioAnalysisApi.md#portfolioAnalysisContributionsReturnPost) | **POST** /portfolio/analysis/contributions/return | Return Contributions
[**portfolioAnalysisContributionsRiskPost**](PortfolioAnalysisApi.md#portfolioAnalysisContributionsRiskPost) | **POST** /portfolio/analysis/contributions/risk | Risk Contributions
[**portfolioAnalysisCorrelationSpectrumPost**](PortfolioAnalysisApi.md#portfolioAnalysisCorrelationSpectrumPost) | **POST** /portfolio/analysis/correlation-spectrum | Correlation Spectrum
[**portfolioAnalysisDiversificationRatioPost**](PortfolioAnalysisApi.md#portfolioAnalysisDiversificationRatioPost) | **POST** /portfolio/analysis/diversification-ratio | Diversification Ratio
[**portfolioAnalysisDrawdownsPost**](PortfolioAnalysisApi.md#portfolioAnalysisDrawdownsPost) | **POST** /portfolio/analysis/drawdowns | Drawdowns
[**portfolioAnalysisEffectiveNumberOfBetsPost**](PortfolioAnalysisApi.md#portfolioAnalysisEffectiveNumberOfBetsPost) | **POST** /portfolio/analysis/effective-number-of-bets | Effective Number of Bets
[**portfolioAnalysisFactorsExposuresPost**](PortfolioAnalysisApi.md#portfolioAnalysisFactorsExposuresPost) | **POST** /portfolio/analysis/factors/exposures | Factor Exposures
[**portfolioAnalysisMeanVarianceEfficientFrontierPost**](PortfolioAnalysisApi.md#portfolioAnalysisMeanVarianceEfficientFrontierPost) | **POST** /portfolio/analysis/mean-variance/efficient-frontier | Mean-Variance Efficient Frontier
[**portfolioAnalysisMeanVarianceMinimumVarianceFrontierPost**](PortfolioAnalysisApi.md#portfolioAnalysisMeanVarianceMinimumVarianceFrontierPost) | **POST** /portfolio/analysis/mean-variance/minimum-variance-frontier | Mean-Variance Minimum Variance Frontier
[**portfolioAnalysisReturnPost**](PortfolioAnalysisApi.md#portfolioAnalysisReturnPost) | **POST** /portfolio/analysis/return | Arithmetic Return
[**portfolioAnalysisReturnsAveragePost**](PortfolioAnalysisApi.md#portfolioAnalysisReturnsAveragePost) | **POST** /portfolio/analysis/returns/average | Arithmetic Average Return
[**portfolioAnalysisTrackingErrorPost**](PortfolioAnalysisApi.md#portfolioAnalysisTrackingErrorPost) | **POST** /portfolio/analysis/tracking-error | Tracking Error
[**portfolioAnalysisUlcerIndexPost**](PortfolioAnalysisApi.md#portfolioAnalysisUlcerIndexPost) | **POST** /portfolio/analysis/ulcer-index | Ulcer Index
[**portfolioAnalysisUlcerPerformanceIndexPost**](PortfolioAnalysisApi.md#portfolioAnalysisUlcerPerformanceIndexPost) | **POST** /portfolio/analysis/ulcer-performance-index | Ulcer Performance Index
[**portfolioAnalysisVolatilityPost**](PortfolioAnalysisApi.md#portfolioAnalysisVolatilityPost) | **POST** /portfolio/analysis/volatility | Volatility



## portfolioAnalysisAlphaPost

> PortfolioAnalysisAlphaPost200Response portfolioAnalysisAlphaPost(body)

Alpha

Compute the Jensen’s alpha of one or several portfolio(s) in the Capital Asset Pricing Model (CAPM).  References * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution   

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.PortfolioAnalysisApi();
let body = {"benchmarkReturns":[0.002,0.025,0.018,-0.011,0.014],"portfolios":[{"portfolioReturns":[0.003,0.026,0.011,-0.01,0.015]}],"riskFreeRate":0.01}; // PortfolioAnalysisAlphaPostRequest | 
apiInstance.portfolioAnalysisAlphaPost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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


## portfolioAnalysisBetaPost

> PortfolioAnalysisBetaPost200Response portfolioAnalysisBetaPost(body)

Beta

Compute the beta of one or several portfolio(s) in the Capital Asset Pricing Model (CAPM).  References * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution   

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.PortfolioAnalysisApi();
let body = {"benchmarkReturns":[0.002,0.025,0.018,-0.011,0.014],"portfolios":[{"portfolioReturns":[0.003,0.026,0.011,-0.01,0.015]}],"riskFreeRate":0.01}; // PortfolioAnalysisAlphaPostRequest | 
apiInstance.portfolioAnalysisBetaPost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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


## portfolioAnalysisContributionsReturnPost

> PortfolioAnalysisContributionsReturnPost200Response portfolioAnalysisContributionsReturnPost(body)

Return Contributions

Perform a return contribution analysis of one or several portfolio(s), optionally using groups of assets.  References * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution 

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.PortfolioAnalysisApi();
let body = {"assets":3,"assetsGroups":[[1,2]],"assetsReturns":[0.01,-0.01,0.025],"portfolios":[{"assetsWeights":[0.5,0.25,0.25]}]}; // PortfolioAnalysisContributionsReturnPostRequest | 
apiInstance.portfolioAnalysisContributionsReturnPost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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


## portfolioAnalysisContributionsRiskPost

> PortfolioAnalysisContributionsRiskPost200Response portfolioAnalysisContributionsRiskPost(body)

Risk Contributions

Perform a risk contribution analysis of one or several portfolio(s), optionally using groups of assets.  References * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution 

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.PortfolioAnalysisApi();
let body = {"assets":3,"assetsCovarianceMatrix":[[1.0E-4,0,0],[0,1.0E-4,0],[0,0,0.04]],"portfolios":[{"assetsWeights":[0.5,0.25,0.25]}]}; // PortfolioAnalysisContributionsRiskPostRequest | 
apiInstance.portfolioAnalysisContributionsRiskPost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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


## portfolioAnalysisCorrelationSpectrumPost

> PortfolioAnalysisCorrelationSpectrumPost200Response portfolioAnalysisCorrelationSpectrumPost(body)

Correlation Spectrum

Compute the correlation spectrum of one or several portfolio(s).  References * [Tristan Froidure, Khalid Jalalzai and Yves Choueifaty, Portfolio Rho-Representativity, International Journal of Theoretical and Applied FinanceVol. 22, No. 07, 1950034 (2019)](https://www.worldscientific.com/doi/10.1142/S0219024919500341) 

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.PortfolioAnalysisApi();
let body = {"assets":2,"assetsCovarianceMatrix":[[0.0025,5.0E-4],[5.0E-4,0.01]],"portfolios":[{"assetsWeights":[0.5,0.5]}]}; // PortfolioAnalysisCorrelationSpectrumPostRequest | 
apiInstance.portfolioAnalysisCorrelationSpectrumPost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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


## portfolioAnalysisDiversificationRatioPost

> PortfolioAnalysisDiversificationRatioPost200Response portfolioAnalysisDiversificationRatioPost(body)

Diversification Ratio

Compute the diversification ratio of one or several portfolio(s).  References * [Yves Choueifaty and Yves Coignard, Toward Maximum Diversification, The Journal of Portfolio Management Fall 2008, 35 (1) 40-51](https://doi.org/10.3905/JPM.2008.35.1.40) * [Tristan Froidure, Khalid Jalalzai and Yves Choueifaty, Portfolio Rho-Representativity, International Journal of Theoretical and Applied FinanceVol. 22, No. 07, 1950034 (2019)](https://www.worldscientific.com/doi/10.1142/S0219024919500341) 

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.PortfolioAnalysisApi();
let body = {"assets":2,"assetsCovarianceMatrix":[[0.0025,5.0E-4],[5.0E-4,0.01]],"portfolios":[{"assetsWeights":[0.5,0.5]}]}; // PortfolioAnalysisCorrelationSpectrumPostRequest | 
apiInstance.portfolioAnalysisDiversificationRatioPost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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


## portfolioAnalysisDrawdownsPost

> PortfolioAnalysisDrawdownsPost200Response portfolioAnalysisDrawdownsPost(body)

Drawdowns

Compute the drawdown function - also called the underwater equity curve -, as well as the worst 10 drawdowns of one or several portfolio(s).  References * [Wikipedia, Drawdown](https://en.wikipedia.org/wiki/Drawdown_(economics))         

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.PortfolioAnalysisApi();
let body = {"portfolios":[{"portfolioValues":[100,95,100,90,85,70]}]}; // PortfolioAnalysisDrawdownsPostRequest | 
apiInstance.portfolioAnalysisDrawdownsPost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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


## portfolioAnalysisEffectiveNumberOfBetsPost

> PortfolioAnalysisEffectiveNumberOfBetsPost200Response portfolioAnalysisEffectiveNumberOfBetsPost(body)

Effective Number of Bets

Compute the effective number of bets of one or several portfolio(s).  References * [Meucci, Attilio and Santangelo, Alberto and Deguest, Romain, Risk Budgeting and Diversification Based on Optimized Uncorrelated Factors (November 10, 2015)](https://papers.ssrn.com/sol3/papers.cfm?abstract_id&#x3D;2276632) 

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.PortfolioAnalysisApi();
let body = {"assets":3,"assetsCovarianceMatrix":[[1,0,0],[0,286.31,100.79],[0,100.79,601.36]],"portfolios":[{"assetsWeights":[10.96,1.06,0.22]}]}; // PortfolioAnalysisEffectiveNumberOfBetsPostRequest | 
apiInstance.portfolioAnalysisEffectiveNumberOfBetsPost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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


## portfolioAnalysisFactorsExposuresPost

> PortfolioAnalysisFactorsExposuresPost200Response portfolioAnalysisFactorsExposuresPost(body)

Factor Exposures

Compute the exposures of one or several portfolio(s) to a set of factors, using a returns-based linear regression analysis.  References * [Measuring Factor Exposures: Uses and Abuses, Ronen Israel and Adrienne Ross, The Journal of Alternative Investments Summer 2017, 20 (1) 10-25](https://jai.pm-research.com/content/20/1/10.short)  

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.PortfolioAnalysisApi();
let body = {"factors":[{"factorReturns":[-0.00414169934,0.01201656108,0.0087181369]},{"factorReturns":[-0.01387258782,-0.01097961581,0.01742002062]}],"portfolios":[{"portfolioReturns":[-0.04302,0.01310372213,0.06482589323]}]}; // PortfolioAnalysisFactorsExposuresPostRequest | 
apiInstance.portfolioAnalysisFactorsExposuresPost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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


## portfolioAnalysisMeanVarianceEfficientFrontierPost

> PortfolioAnalysisMeanVarianceEfficientFrontierPost200Response portfolioAnalysisMeanVarianceEfficientFrontierPost(body)

Mean-Variance Efficient Frontier

Compute the discretized mean-variance efficient frontier associated to a list of assets, optionally subject to: * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraint  References  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.PortfolioAnalysisApi();
let body = {"assets":2,"assetsCovarianceMatrix":[[0.0025,5.0E-4],[5.0E-4,0.01]],"assetsReturns":[0.01,0.05],"constraints":{"minimumAssetsWeights":[0.2,0]},"portfolios":3}; // PortfolioAnalysisMeanVarianceEfficientFrontierPostRequest | 
apiInstance.portfolioAnalysisMeanVarianceEfficientFrontierPost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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


## portfolioAnalysisMeanVarianceMinimumVarianceFrontierPost

> PortfolioAnalysisMeanVarianceEfficientFrontierPost200Response portfolioAnalysisMeanVarianceMinimumVarianceFrontierPost(body)

Mean-Variance Minimum Variance Frontier

Compute the discretized mean-variance minimum variance frontier associated to a list of assets, optionally subject to: * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraint  &gt; This endpoint is similar to the endpoint [&#x60;/portfolio/analysis/mean-variance/efficient-frontier&#x60;](#post-/portfolio/analysis/mean-variance/efficient-frontier), because the mean-variance efficient frontier is the \&quot;top\&quot; portion of the mean-variance minimum variance frontier.  References  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.PortfolioAnalysisApi();
let body = {"assets":2,"assetsCovarianceMatrix":[[0.0025,5.0E-4],[5.0E-4,0.01]],"assetsReturns":[0.01,0.05],"constraints":{"minimumAssetsWeights":[0.2,0]},"portfolios":4}; // PortfolioAnalysisMeanVarianceMinimumVarianceFrontierPostRequest | 
apiInstance.portfolioAnalysisMeanVarianceMinimumVarianceFrontierPost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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


## portfolioAnalysisReturnPost

> PortfolioAnalysisReturnPost200Response portfolioAnalysisReturnPost(body)

Arithmetic Return

Compute the arithmetic return of one or several portfolio(s) from either:   * Portfolio assets arithmetic returns * Portfolio values  References * [Wikipedia, Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Return) * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.PortfolioAnalysisApi();
let body = {"assets":2,"assetsReturns":[0.01,0.05],"portfolios":[{"assetsWeights":[1,0]},{"assetsWeights":[0,1]}]}; // PortfolioAnalysisReturnPostRequest | 
apiInstance.portfolioAnalysisReturnPost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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


## portfolioAnalysisReturnsAveragePost

> PortfolioAnalysisReturnsAveragePost200Response portfolioAnalysisReturnsAveragePost(body)

Arithmetic Average Return

Compute the arithmetic average of the arithmetic return(s) of one or several portfolio(s).  References * [Wikipedia, Arithmetic Average Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Arithmetic_average_rate_of_return) 

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.PortfolioAnalysisApi();
let body = {"portfolios":[{"portfolioValues":[100,95,100,90,85,70]}]}; // PortfolioAnalysisDrawdownsPostRequest | 
apiInstance.portfolioAnalysisReturnsAveragePost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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


## portfolioAnalysisTrackingErrorPost

> PortfolioAnalysisTrackingErrorPost200Response portfolioAnalysisTrackingErrorPost(body)

Tracking Error

Compute the tracking error between a benchmark and one or several portfolio(s).  References * [Wikipedia, Tracking error](https://en.wikipedia.org/wiki/Tracking_error)  * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution  

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.PortfolioAnalysisApi();
let body = {"benchmarkReturns":[0.002,0.025,0.018,-0.011,0.014,0.018,0.014,0.065,-0.015,0.042,-0.006,0.083,0.039,-0.038,-0.062,0.015,-0.048,0.021,0.06,0.056,-0.067,0.019,-0.003,0],"portfolios":[{"portfolioReturns":[0.003,0.026,0.011,-0.01,0.015,0.025,0.016,0.067,-0.014,0.04,-0.005,0.081,0.04,-0.037,-0.061,0.017,-0.049,-0.022,0.07,0.058,-0.065,0.024,-0.005,-0.009]}]}; // PortfolioAnalysisTrackingErrorPostRequest | 
apiInstance.portfolioAnalysisTrackingErrorPost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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


## portfolioAnalysisUlcerIndexPost

> PortfolioAnalysisUlcerIndexPost200Response portfolioAnalysisUlcerIndexPost(body)

Ulcer Index

Compute the Ulcer Index of one or several portfolio(s).  References * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution * [Peter G. Martin, Ulcer Index, An Alternative Approach to the Measurement of Investment Risk &amp; Risk-Adjusted Performance](http://www.tangotools.com/ui/ui.htm) 

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.PortfolioAnalysisApi();
let body = {"portfolios":[{"portfolioValues":[100,95,100,90,85,70]}]}; // PortfolioAnalysisSharpeRatioPostRequestOneOf1 | 
apiInstance.portfolioAnalysisUlcerIndexPost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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


## portfolioAnalysisUlcerPerformanceIndexPost

> PortfolioAnalysisUlcerPerformanceIndexPost200Response portfolioAnalysisUlcerPerformanceIndexPost(body)

Ulcer Performance Index

Compute the Ulcer Performance Index of one or several portfolio(s).  References * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution * [Peter G. Martin, Ulcer Index, An Alternative Approach to the Measurement of Investment Risk &amp; Risk-Adjusted Performance](http://www.tangotools.com/ui/ui.htm) 

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.PortfolioAnalysisApi();
let body = {"portfolios":[{"portfolioValues":[100,95,100,90,85,70]}],"riskFreeRate":0}; // PortfolioAnalysisSharpeRatioPostRequestOneOf1 | 
apiInstance.portfolioAnalysisUlcerPerformanceIndexPost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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


## portfolioAnalysisVolatilityPost

> PortfolioAnalysisVolatilityPost200Response portfolioAnalysisVolatilityPost(body)

Volatility

Compute the volatility (i.e., standard deviation) of one or several portfolio(s) from either:   * Portfolio assets covariance matrix * Portfolio values  References * [Wikipedia, Standard Deviation](https://en.wikipedia.org/wiki/Standard_deviation#Finance) * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.PortfolioAnalysisApi();
let body = {"assets":2,"assetsCovarianceMatrix":[[0.0025,5.0E-4],[5.0E-4,0.01]],"portfolios":[{"assetsWeights":[1,0]},{"assetsWeights":[0,1]}]}; // PortfolioAnalysisVolatilityPostRequest | 
apiInstance.portfolioAnalysisVolatilityPost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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

