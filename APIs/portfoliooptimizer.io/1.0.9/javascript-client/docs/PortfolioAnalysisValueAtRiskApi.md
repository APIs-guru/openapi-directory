# PortfolioOptimizer.PortfolioAnalysisValueAtRiskApi

All URIs are relative to *https://api.portfoliooptimizer.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**portfolioAnalysisValueAtRiskCornishFisherCorrectedPost**](PortfolioAnalysisValueAtRiskApi.md#portfolioAnalysisValueAtRiskCornishFisherCorrectedPost) | **POST** /portfolio/analysis/value-at-risk/cornish-fisher/corrected | Corrected Cornish-Fisher Value At Risk
[**portfolioAnalysisValueAtRiskCornishFisherPost**](PortfolioAnalysisValueAtRiskApi.md#portfolioAnalysisValueAtRiskCornishFisherPost) | **POST** /portfolio/analysis/value-at-risk/cornish-fisher | Cornish-Fisher Value At Risk
[**portfolioAnalysisValueAtRiskGaussianPost**](PortfolioAnalysisValueAtRiskApi.md#portfolioAnalysisValueAtRiskGaussianPost) | **POST** /portfolio/analysis/value-at-risk/gaussian | Gaussian Value At Risk
[**portfolioAnalysisValueAtRiskHistoricalPost**](PortfolioAnalysisValueAtRiskApi.md#portfolioAnalysisValueAtRiskHistoricalPost) | **POST** /portfolio/analysis/value-at-risk/historical | Historical Value At Risk



## portfolioAnalysisValueAtRiskCornishFisherCorrectedPost

> PortfolioAnalysisValueAtRiskCornishFisherPost200Response portfolioAnalysisValueAtRiskCornishFisherCorrectedPost(body)

Corrected Cornish-Fisher Value At Risk

Compute the corrected Cornish-Fisher value at risk of one or several portfolio(s) from portfolio values.  References * [Lamb, John D., Maura E. Monville, and Kai-Hong Tee. Making Cornish–fisher Fit for Risk Measurement, Journal of Risk, Volume 21, Number 5, p. 53-81](http://doi.org/10.21314/JOR.2019.408) 

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.PortfolioAnalysisValueAtRiskApi();
let body = {"portfolios":[{"portfolioValues":[100,95,100,90,85,70]}]}; // PortfolioAnalysisValueAtRiskConditionalCornishFisherPostRequest | 
apiInstance.portfolioAnalysisValueAtRiskCornishFisherCorrectedPost(body, (error, data, response) => {
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
 **body** | [**PortfolioAnalysisValueAtRiskConditionalCornishFisherPostRequest**](PortfolioAnalysisValueAtRiskConditionalCornishFisherPostRequest.md)|  | 

### Return type

[**PortfolioAnalysisValueAtRiskCornishFisherPost200Response**](PortfolioAnalysisValueAtRiskCornishFisherPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## portfolioAnalysisValueAtRiskCornishFisherPost

> PortfolioAnalysisValueAtRiskCornishFisherPost200Response portfolioAnalysisValueAtRiskCornishFisherPost(body)

Cornish-Fisher Value At Risk

Compute the Cornish-Fisher value at risk of one or several portfolio(s) from portfolio values.  References * [Laurent Favre and José-Antonio Galeano, Mean-Modified Value-at-Risk Optimization with Hedge Funds, The Journal of Alternative Investments Fall 2002, 5 (2) 21-25](https://jai.pm-research.com/content/5/2/21) * [Lamb, John D., Maura E. Monville, and Kai-Hong Tee. Making Cornish–fisher Fit for Risk Measurement, Journal of Risk, Volume 21, Number 5, p. 53-81](http://doi.org/10.21314/JOR.2019.408) 

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.PortfolioAnalysisValueAtRiskApi();
let body = {"portfolios":[{"portfolioValues":[100,95,100,90,85,70]}]}; // PortfolioAnalysisValueAtRiskConditionalCornishFisherPostRequest | 
apiInstance.portfolioAnalysisValueAtRiskCornishFisherPost(body, (error, data, response) => {
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
 **body** | [**PortfolioAnalysisValueAtRiskConditionalCornishFisherPostRequest**](PortfolioAnalysisValueAtRiskConditionalCornishFisherPostRequest.md)|  | 

### Return type

[**PortfolioAnalysisValueAtRiskCornishFisherPost200Response**](PortfolioAnalysisValueAtRiskCornishFisherPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## portfolioAnalysisValueAtRiskGaussianPost

> PortfolioAnalysisValueAtRiskCornishFisherPost200Response portfolioAnalysisValueAtRiskGaussianPost(body)

Gaussian Value At Risk

Compute the Gaussian value at risk of one or several portfolio(s) from portfolio values.  References * [Ballotta, Laura and Fusai, Gianluca, A Gentle Introduction to Value at Risk](https://papers.ssrn.com/sol3/papers.cfm?abstract_id&#x3D;2942138) 

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.PortfolioAnalysisValueAtRiskApi();
let body = {"portfolios":[{"portfolioValues":[100,95,100,90,85,70]}]}; // PortfolioAnalysisValueAtRiskConditionalGaussianPostRequest | 
apiInstance.portfolioAnalysisValueAtRiskGaussianPost(body, (error, data, response) => {
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
 **body** | [**PortfolioAnalysisValueAtRiskConditionalGaussianPostRequest**](PortfolioAnalysisValueAtRiskConditionalGaussianPostRequest.md)|  | 

### Return type

[**PortfolioAnalysisValueAtRiskCornishFisherPost200Response**](PortfolioAnalysisValueAtRiskCornishFisherPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## portfolioAnalysisValueAtRiskHistoricalPost

> PortfolioAnalysisValueAtRiskCornishFisherPost200Response portfolioAnalysisValueAtRiskHistoricalPost(body)

Historical Value At Risk

Compute the historical value at risk of one or several portfolio(s) from portfolio values.  References * [Wikipedia, Value at risk](https://en.wikipedia.org/wiki/Value_at_risk) * [Acerbi, C. and Tasche, D. (2002), Expected Shortfall: A Natural Coherent Alternative to Value at Risk. Economic Notes, 31: 379-388](https://onlinelibrary.wiley.com/doi/abs/10.1111/1468-0300.00091) 

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.PortfolioAnalysisValueAtRiskApi();
let body = {"portfolios":[{"portfolioValues":[100,95,100,90,85,70]}]}; // PortfolioAnalysisValueAtRiskConditionalHistoricalPostRequest | 
apiInstance.portfolioAnalysisValueAtRiskHistoricalPost(body, (error, data, response) => {
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
 **body** | [**PortfolioAnalysisValueAtRiskConditionalHistoricalPostRequest**](PortfolioAnalysisValueAtRiskConditionalHistoricalPostRequest.md)|  | 

### Return type

[**PortfolioAnalysisValueAtRiskCornishFisherPost200Response**](PortfolioAnalysisValueAtRiskCornishFisherPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

