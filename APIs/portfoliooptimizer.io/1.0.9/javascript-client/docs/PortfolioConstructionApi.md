# PortfolioOptimizer.PortfolioConstructionApi

All URIs are relative to *https://api.portfoliooptimizer.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**portfolioConstructionInvestablePost**](PortfolioConstructionApi.md#portfolioConstructionInvestablePost) | **POST** /portfolio/construction/investable | Investable Portfolio
[**portfolioConstructionMimickingPost**](PortfolioConstructionApi.md#portfolioConstructionMimickingPost) | **POST** /portfolio/construction/mimicking | Mimicking Portfolio
[**portfolioConstructionRandomPost**](PortfolioConstructionApi.md#portfolioConstructionRandomPost) | **POST** /portfolio/construction/random | Random Portfolio



## portfolioConstructionInvestablePost

> PortfolioConstructionInvestablePost200Response portfolioConstructionInvestablePost(body)

Investable Portfolio

Compute an investable portfolio as close as possible, in terms of assets weights, to a desired portfolio, taking into account: * The desired assets weights * The desired assets groups weights * The desired maximum assets groups weights * The prices of the assets * The portfolio value * The requirement to purchase some assets by round lots or by odd lots * The possibility to purchase some assets by a fractional quantity of shares * The requirement to purchase a minimum number of shares, or a minimum monetary value, for some assets  References * [Steiner, Andreas, Accuracy and Rounding in Portfolio Construction](https://papers.ssrn.com/sol3/papers.cfm?abstract_id&#x3D;2261131) 

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.PortfolioConstructionApi();
let body = {"assets":4,"assetsGroups":[[1,2],[3,4]],"assetsGroupsWeights":[0.4,0.4],"assetsPrices":[10,25,100,500],"assetsWeights":[0.2,null,null,null],"portfolioValue":10000}; // PortfolioConstructionInvestablePostRequest | 
apiInstance.portfolioConstructionInvestablePost(body, (error, data, response) => {
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
 **body** | [**PortfolioConstructionInvestablePostRequest**](PortfolioConstructionInvestablePostRequest.md)|  | 

### Return type

[**PortfolioConstructionInvestablePost200Response**](PortfolioConstructionInvestablePost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## portfolioConstructionMimickingPost

> PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolioConstructionMimickingPost(body)

Mimicking Portfolio

Construct a portfolio as close as possible, in terms of returns, to a benchmark, optionally subject to: * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * Konstantinos Benidis, Yiyong Feng, Daniel P. Palomar, Optimization Methods for Financial Index Tracking: From Theory to Practice, now publishers Inc (7 juin 2018) 

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.PortfolioConstructionApi();
let body = {"assets":[{"assetReturns":[0.01,0.02,0.03]},{"assetReturns":[-0.01,-0.02,-0.03]}],"benchmarkReturns":[0,0,0]}; // PortfolioConstructionMimickingPostRequest | 
apiInstance.portfolioConstructionMimickingPost(body, (error, data, response) => {
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
 **body** | [**PortfolioConstructionMimickingPostRequest**](PortfolioConstructionMimickingPostRequest.md)|  | 

### Return type

[**PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner**](PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## portfolioConstructionRandomPost

> PortfolioConstructionRandomPost200Response portfolioConstructionRandomPost(body)

Random Portfolio

Construct one or several random portfolio(s), optionally subject to:        * Minimum and maximum weights constraints * Minimum and maximum portfolio exposure constraints  &gt; Because of the nature of the endpoint, subsequent calls with the same input data will result in different output data.  References * [William Thornton Shaw, Monte Carlo Portfolio Optimization for General Investor Risk-Return Objectives and Arbitrary Return Distributions: A Solution for Long-Only Portfolios](https://papers.ssrn.com/sol3/papers.cfm?abstract_id&#x3D;1680224) 

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.PortfolioConstructionApi();
let body = {"assets":3,"portfolios":2}; // PortfolioConstructionRandomPostRequest | 
apiInstance.portfolioConstructionRandomPost(body, (error, data, response) => {
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
 **body** | [**PortfolioConstructionRandomPostRequest**](PortfolioConstructionRandomPostRequest.md)|  | 

### Return type

[**PortfolioConstructionRandomPost200Response**](PortfolioConstructionRandomPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

