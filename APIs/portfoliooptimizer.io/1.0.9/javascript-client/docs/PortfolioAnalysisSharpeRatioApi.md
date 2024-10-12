# PortfolioOptimizer.PortfolioAnalysisSharpeRatioApi

All URIs are relative to *https://api.portfoliooptimizer.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**portfolioAnalysisSharpeRatioBiasAdjustedPost**](PortfolioAnalysisSharpeRatioApi.md#portfolioAnalysisSharpeRatioBiasAdjustedPost) | **POST** /portfolio/analysis/sharpe-ratio/bias-adjusted | Bias-Adjusted Sharpe Ratio
[**portfolioAnalysisSharpeRatioConfidenceIntervalPost**](PortfolioAnalysisSharpeRatioApi.md#portfolioAnalysisSharpeRatioConfidenceIntervalPost) | **POST** /portfolio/analysis/sharpe-ratio/confidence-interval | Sharpe Ratio Confidence Interval
[**portfolioAnalysisSharpeRatioPost**](PortfolioAnalysisSharpeRatioApi.md#portfolioAnalysisSharpeRatioPost) | **POST** /portfolio/analysis/sharpe-ratio | Sharpe Ratio
[**portfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost**](PortfolioAnalysisSharpeRatioApi.md#portfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost) | **POST** /portfolio/analysis/sharpe-ratio/probabilistic/minimum-track-record-length | Minimum Track Record Length
[**portfolioAnalysisSharpeRatioProbabilisticPost**](PortfolioAnalysisSharpeRatioApi.md#portfolioAnalysisSharpeRatioProbabilisticPost) | **POST** /portfolio/analysis/sharpe-ratio/probabilistic | Probabilistic Sharpe Ratio



## portfolioAnalysisSharpeRatioBiasAdjustedPost

> PortfolioAnalysisSharpeRatioBiasAdjustedPost200Response portfolioAnalysisSharpeRatioBiasAdjustedPost(body)

Bias-Adjusted Sharpe Ratio

Compute the Sharpe ratio of one or several portfolio(s), adjusted for small sample bias.  References * [Opdyke, J., Comparing Sharpe ratios: So where are the p-values?. J Asset Manag 8, 308–336 (2007)](https://link.springer.com/article/10.1057/palgrave.jam.2250084) 

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.PortfolioAnalysisSharpeRatioApi();
let body = {"portfolios":[{"portfolioValues":[100,95,100,90,85,70]}],"riskFreeRate":0}; // PortfolioAnalysisSharpeRatioBiasAdjustedPostRequest | 
apiInstance.portfolioAnalysisSharpeRatioBiasAdjustedPost(body, (error, data, response) => {
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
 **body** | [**PortfolioAnalysisSharpeRatioBiasAdjustedPostRequest**](PortfolioAnalysisSharpeRatioBiasAdjustedPostRequest.md)|  | 

### Return type

[**PortfolioAnalysisSharpeRatioBiasAdjustedPost200Response**](PortfolioAnalysisSharpeRatioBiasAdjustedPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## portfolioAnalysisSharpeRatioConfidenceIntervalPost

> PortfolioAnalysisSharpeRatioConfidenceIntervalPost200Response portfolioAnalysisSharpeRatioConfidenceIntervalPost(body)

Sharpe Ratio Confidence Interval

Build a confidence interval for the Sharpe ratio of one or several portfolio(s).  References * [Opdyke, J.D., Comparing Sharpe ratios: So where are the p-values?. J Asset Manag 8, 308–336 (2007)](https://link.springer.com/article/10.1057/palgrave.jam.2250084) 

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.PortfolioAnalysisSharpeRatioApi();
let body = {"confidenceIntervalType":"twoSided","confidenceLevel":0.99,"portfolios":[{"portfolioValues":[100,95,100,90,85,70]}],"riskFreeRate":0}; // PortfolioAnalysisSharpeRatioConfidenceIntervalPostRequest | 
apiInstance.portfolioAnalysisSharpeRatioConfidenceIntervalPost(body, (error, data, response) => {
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
 **body** | [**PortfolioAnalysisSharpeRatioConfidenceIntervalPostRequest**](PortfolioAnalysisSharpeRatioConfidenceIntervalPostRequest.md)|  | 

### Return type

[**PortfolioAnalysisSharpeRatioConfidenceIntervalPost200Response**](PortfolioAnalysisSharpeRatioConfidenceIntervalPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## portfolioAnalysisSharpeRatioPost

> PortfolioAnalysisSharpeRatioPost200Response portfolioAnalysisSharpeRatioPost(body)

Sharpe Ratio

Compute the Sharpe ratio of one or several portfolio(s) from either: * Portfolio assets arithmetic returns and assets covariance matrix * Portfolio values  References * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.PortfolioAnalysisSharpeRatioApi();
let body = {"assets":2,"assetsCovarianceMatrix":[[0.0025,5.0E-4],[5.0E-4,0.01]],"assetsReturns":[0.01,0.05],"portfolios":[{"assetsWeights":[1,0]},{"assetsWeights":[0,1]}],"riskFreeRate":0}; // PortfolioAnalysisSharpeRatioPostRequest | 
apiInstance.portfolioAnalysisSharpeRatioPost(body, (error, data, response) => {
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
 **body** | [**PortfolioAnalysisSharpeRatioPostRequest**](PortfolioAnalysisSharpeRatioPostRequest.md)|  | 

### Return type

[**PortfolioAnalysisSharpeRatioPost200Response**](PortfolioAnalysisSharpeRatioPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## portfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost

> PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost200Response portfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost(body)

Minimum Track Record Length

Compute the minimum track record length of one or several portfolio(s).  References * [Bailey, David H. and Lopez de Prado, Marcos, The Sharpe Ratio Efficient Frontier (April 1, 2012). Journal of Risk, Vol. 15, No. 2, Winter 2012/13](https://ssrn.com/abstract&#x3D;1821643) 

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.PortfolioAnalysisSharpeRatioApi();
let body = {"benchmarkValues":[100,101,98,85,75,65],"portfolios":[{"portfolioValues":[100,95,100,90,85,70]}],"riskFreeRate":0}; // PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostRequest | 
apiInstance.portfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost(body, (error, data, response) => {
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
 **body** | [**PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostRequest**](PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostRequest.md)|  | 

### Return type

[**PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost200Response**](PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## portfolioAnalysisSharpeRatioProbabilisticPost

> PortfolioAnalysisSharpeRatioProbabilisticPost200Response portfolioAnalysisSharpeRatioProbabilisticPost(body)

Probabilistic Sharpe Ratio

Compute the probabilistic Sharpe ratio of one or several portfolio(s).  References * [Opdyke, J.D., Comparing Sharpe ratios: So where are the p-values?. J Asset Manag 8, 308–336 (2007)](https://link.springer.com/article/10.1057/palgrave.jam.2250084) * [Bailey, David H. and Lopez de Prado, Marcos, The Sharpe Ratio Efficient Frontier (April 1, 2012). Journal of Risk, Vol. 15, No. 2, Winter 2012/13](https://ssrn.com/abstract&#x3D;1821643) 

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.PortfolioAnalysisSharpeRatioApi();
let body = {"benchmarkValues":[100,101,98,102,95,90],"portfolios":[{"portfolioValues":[100,95,100,90,85,70]}],"riskFreeRate":0}; // PortfolioAnalysisSharpeRatioProbabilisticPostRequest | 
apiInstance.portfolioAnalysisSharpeRatioProbabilisticPost(body, (error, data, response) => {
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
 **body** | [**PortfolioAnalysisSharpeRatioProbabilisticPostRequest**](PortfolioAnalysisSharpeRatioProbabilisticPostRequest.md)|  | 

### Return type

[**PortfolioAnalysisSharpeRatioProbabilisticPost200Response**](PortfolioAnalysisSharpeRatioProbabilisticPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

