# PortfolioOptimizer.AssetsReturnsSimulationApi

All URIs are relative to *https://api.portfoliooptimizer.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assetsReturnsSimulationBootstrapPost**](AssetsReturnsSimulationApi.md#assetsReturnsSimulationBootstrapPost) | **POST** /assets/returns/simulation/bootstrap | Bootstrap



## assetsReturnsSimulationBootstrapPost

> AssetsReturnsSimulationBootstrapPost200Response assetsReturnsSimulationBootstrapPost(body)

Bootstrap

Simulate the return(s) of one or several asset(s) for one or several time period(s) using a bootstrap method.  References * [Efron, B. (1979), Bootstrap methods: Another look at the jackknife, The Annals of Statistics 7, 1-26](https://projecteuclid.org/journals/annals-of-statistics/volume-7/issue-1/Bootstrap-Methods-Another-Look-at-the-Jackknife/10.1214/aos/1176344552.full) * [Politis, D. N. and Romano, J. P., A circular block resampling procedure for stationary data, in R. Lepage and L. Billard, eds, Exploring the Limits of Bootstrap, Wiley, New York, pp. 263-270](https://statistics.stanford.edu/technical-reports/circular-block-resampling-procedure-stationary-data) * [Politis, D. N. and Romano, J. P., The stationary bootstrap, Journal of the American Statistical Association 89, 1303-1313](https://www.jstor.org/stable/2290993) 

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.AssetsReturnsSimulationApi();
let body = {"assets":[{"assetReturns":[0.1,-0.05,0.01,0.025,-0.1]},{"assetReturns":[0,0.01,0.02,-0.01,0.05]}],"bootstrapBlockLength":2,"bootstrapMethod":"circularBlock","simulations":5,"simulationsLength":4}; // AssetsReturnsSimulationBootstrapPostRequest | 
apiInstance.assetsReturnsSimulationBootstrapPost(body, (error, data, response) => {
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
 **body** | [**AssetsReturnsSimulationBootstrapPostRequest**](AssetsReturnsSimulationBootstrapPostRequest.md)|  | 

### Return type

[**AssetsReturnsSimulationBootstrapPost200Response**](AssetsReturnsSimulationBootstrapPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

