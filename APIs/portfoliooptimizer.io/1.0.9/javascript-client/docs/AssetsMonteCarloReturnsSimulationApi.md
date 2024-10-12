# PortfolioOptimizer.AssetsMonteCarloReturnsSimulationApi

All URIs are relative to *https://api.portfoliooptimizer.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assetsReturnsSimulationMonteCarloCornishFisherCorrectedPost**](AssetsMonteCarloReturnsSimulationApi.md#assetsReturnsSimulationMonteCarloCornishFisherCorrectedPost) | **POST** /assets/returns/simulation/monte-carlo/cornish-fisher/corrected | Corrected Cornish-Fisher Distribution
[**assetsReturnsSimulationMonteCarloCornishFisherPost**](AssetsMonteCarloReturnsSimulationApi.md#assetsReturnsSimulationMonteCarloCornishFisherPost) | **POST** /assets/returns/simulation/monte-carlo/cornish-fisher | Cornish-Fisher Distribution
[**assetsReturnsSimulationMonteCarloGaussianPost**](AssetsMonteCarloReturnsSimulationApi.md#assetsReturnsSimulationMonteCarloGaussianPost) | **POST** /assets/returns/simulation/monte-carlo/gaussian | Gaussian Distribution



## assetsReturnsSimulationMonteCarloCornishFisherCorrectedPost

> AssetsReturnsSimulationMonteCarloCornishFisherPost200Response assetsReturnsSimulationMonteCarloCornishFisherCorrectedPost(body)

Corrected Cornish-Fisher Distribution

Simulate the return(s) of one asset for one or several time period(s) using a corrected Cornish-Fisher distribution.  References * [Maillard, Didier, A User’s Guide to the Cornish Fisher Expansion](https://papers.ssrn.com/sol3/papers.cfm?abstract_id&#x3D;1997178) * [Lamb, John D., Maura E. Monville, and Kai-Hong Tee. Making Cornish–fisher Fit for Risk Measurement, Journal of Risk, Volume 21, Number 5, p. 53-81](http://doi.org/10.21314/JOR.2019.408) 

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.AssetsMonteCarloReturnsSimulationApi();
let body = {"assetAverageReturn":0.05,"assetKurtosis":1,"assetSkewness":0.5,"assetVolatility":0.2,"simulations":5,"simulationsLength":4}; // AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest | 
apiInstance.assetsReturnsSimulationMonteCarloCornishFisherCorrectedPost(body, (error, data, response) => {
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
 **body** | [**AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest**](AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest.md)|  | 

### Return type

[**AssetsReturnsSimulationMonteCarloCornishFisherPost200Response**](AssetsReturnsSimulationMonteCarloCornishFisherPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## assetsReturnsSimulationMonteCarloCornishFisherPost

> AssetsReturnsSimulationMonteCarloCornishFisherPost200Response assetsReturnsSimulationMonteCarloCornishFisherPost(body)

Cornish-Fisher Distribution

Simulate the return(s) of one asset for one or several time period(s) using a Cornish-Fisher distribution.  References * [Maillard, Didier, A User’s Guide to the Cornish Fisher Expansion](https://papers.ssrn.com/sol3/papers.cfm?abstract_id&#x3D;1997178) * [Lamb, John D., Maura E. Monville, and Kai-Hong Tee. Making Cornish–Fisher Fit for Risk Measurement, Journal of Risk, Volume 21, Number 5, p. 53-81](http://doi.org/10.21314/JOR.2019.408) 

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.AssetsMonteCarloReturnsSimulationApi();
let body = {"assetAverageReturnParameter":0.05,"assetKurtosisParameter":1,"assetSkewnessParameter":0.5,"assetVolatilityParameter":0.2,"simulations":5,"simulationsLength":4}; // AssetsReturnsSimulationMonteCarloCornishFisherPostRequest | 
apiInstance.assetsReturnsSimulationMonteCarloCornishFisherPost(body, (error, data, response) => {
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
 **body** | [**AssetsReturnsSimulationMonteCarloCornishFisherPostRequest**](AssetsReturnsSimulationMonteCarloCornishFisherPostRequest.md)|  | 

### Return type

[**AssetsReturnsSimulationMonteCarloCornishFisherPost200Response**](AssetsReturnsSimulationMonteCarloCornishFisherPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## assetsReturnsSimulationMonteCarloGaussianPost

> AssetsReturnsSimulationMonteCarloCornishFisherPost200Response assetsReturnsSimulationMonteCarloGaussianPost(body)

Gaussian Distribution

Simulate the return(s) of one asset for one or several time period(s) using a Gaussian distribution.  References * [Wikipedia, Normal distribution](https://en.wikipedia.org/wiki/Normal_distribution) 

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.AssetsMonteCarloReturnsSimulationApi();
let body = {"assetAverageReturn":0.05,"assetVolatility":0.2,"simulations":5,"simulationsLength":4}; // AssetsReturnsSimulationMonteCarloGaussianPostRequest | 
apiInstance.assetsReturnsSimulationMonteCarloGaussianPost(body, (error, data, response) => {
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
 **body** | [**AssetsReturnsSimulationMonteCarloGaussianPostRequest**](AssetsReturnsSimulationMonteCarloGaussianPostRequest.md)|  | 

### Return type

[**AssetsReturnsSimulationMonteCarloCornishFisherPost200Response**](AssetsReturnsSimulationMonteCarloCornishFisherPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

