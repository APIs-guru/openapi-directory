# PortfolioOptimizer.PortfolioSimulationApi

All URIs are relative to *https://api.portfoliooptimizer.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**portfolioSimulationRebalancingDriftWeightPost**](PortfolioSimulationApi.md#portfolioSimulationRebalancingDriftWeightPost) | **POST** /portfolio/simulation/rebalancing/drift-weight | Drift-weight Portfolio Rebalancing
[**portfolioSimulationRebalancingFixedWeightPost**](PortfolioSimulationApi.md#portfolioSimulationRebalancingFixedWeightPost) | **POST** /portfolio/simulation/rebalancing/fixed-weight | Fixed-weight Portfolio Rebalancing
[**portfolioSimulationRebalancingRandomWeightPost**](PortfolioSimulationApi.md#portfolioSimulationRebalancingRandomWeightPost) | **POST** /portfolio/simulation/rebalancing/random-weight | Random-weight Portfolio Rebalancing



## portfolioSimulationRebalancingDriftWeightPost

> PortfolioSimulationRebalancingDriftWeightPost200Response portfolioSimulationRebalancingDriftWeightPost(body)

Drift-weight Portfolio Rebalancing

Simulate the evolution of one or several portfolio(s) over one or several time period(s), the portfolio(s) being never rebalanced (a.k.a. buy and hold).  References * [Hillion, Pierre, The Ex-Ante Rebalancing Premium (March 11, 2016). INSEAD Working Paper No. 2016/15/FIN](https://ssrn.com/abstract&#x3D;2746471) 

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.PortfolioSimulationApi();
let body = {"assets":[{"assetPrices":[100,105,110]},{"assetPrices":[15,12.5,11.25]},{"assetPrices":[0.5,0.51,0.49]}],"portfolios":[{"assetsWeights":[1,0,0]},{"assetsWeights":[0,1,0]},{"assetsWeights":[0,0,1]}]}; // PortfolioSimulationRebalancingDriftWeightPostRequest | 
apiInstance.portfolioSimulationRebalancingDriftWeightPost(body, (error, data, response) => {
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
 **body** | [**PortfolioSimulationRebalancingDriftWeightPostRequest**](PortfolioSimulationRebalancingDriftWeightPostRequest.md)|  | 

### Return type

[**PortfolioSimulationRebalancingDriftWeightPost200Response**](PortfolioSimulationRebalancingDriftWeightPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## portfolioSimulationRebalancingFixedWeightPost

> PortfolioSimulationRebalancingDriftWeightPost200Response portfolioSimulationRebalancingFixedWeightPost(body)

Fixed-weight Portfolio Rebalancing

Simulate the evolution of one or several portfolio(s) over one or several time period(s), the portfolio(s) being rebalanced toward fixed weights at the beginning of each time period.  References * [Hillion, Pierre, The Ex-Ante Rebalancing Premium (March 11, 2016). INSEAD Working Paper No. 2016/15/FIN](https://ssrn.com/abstract&#x3D;2746471)         

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.PortfolioSimulationApi();
let body = {"assets":[{"assetPrices":[100,105,110]},{"assetPrices":[15,12.5,11.25]},{"assetPrices":[0.5,0.51,0.49]}],"portfolios":[{"assetsWeights":[0.5,0.5,0]},{"assetsWeights":[0,0.5,0.5]},{"assetsWeights":[0.5,0,0.5]}]}; // PortfolioSimulationRebalancingDriftWeightPostRequest | 
apiInstance.portfolioSimulationRebalancingFixedWeightPost(body, (error, data, response) => {
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
 **body** | [**PortfolioSimulationRebalancingDriftWeightPostRequest**](PortfolioSimulationRebalancingDriftWeightPostRequest.md)|  | 

### Return type

[**PortfolioSimulationRebalancingDriftWeightPost200Response**](PortfolioSimulationRebalancingDriftWeightPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## portfolioSimulationRebalancingRandomWeightPost

> PortfolioSimulationRebalancingDriftWeightPost200Response portfolioSimulationRebalancingRandomWeightPost(body)

Random-weight Portfolio Rebalancing

Simulate the evolution of one or several portfolio(s) over one or several time period(s), the portfolio(s) being rebalanced toward random weights at the beginning of each time period.  References * [R Stein, Not fooled by randomness: Using random portfolios to analyse investment funds, Investment Analysts Journal, 43:79, 1-15, DOI: 10.1080/10293523.2014.11082564](https://www.tandfonline.com/doi/abs/10.1080/10293523.2014.11082564) 

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.PortfolioSimulationApi();
let body = {"assets":[{"assetPrices":[100,105,110]},{"assetPrices":[15,12.5,11.25]},{"assetPrices":[0.5,0.51,0.49]}],"portfolios":2}; // PortfolioSimulationRebalancingRandomWeightPostRequest | 
apiInstance.portfolioSimulationRebalancingRandomWeightPost(body, (error, data, response) => {
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
 **body** | [**PortfolioSimulationRebalancingRandomWeightPostRequest**](PortfolioSimulationRebalancingRandomWeightPostRequest.md)|  | 

### Return type

[**PortfolioSimulationRebalancingDriftWeightPost200Response**](PortfolioSimulationRebalancingDriftWeightPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

