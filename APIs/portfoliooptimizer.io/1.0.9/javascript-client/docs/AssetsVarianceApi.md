# PortfolioOptimizer.AssetsVarianceApi

All URIs are relative to *https://api.portfoliooptimizer.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assetsVariancePost**](AssetsVarianceApi.md#assetsVariancePost) | **POST** /assets/variance | Variance



## assetsVariancePost

> AssetsVariancePost200Response assetsVariancePost(body)

Variance

Compute the variance of one or several asset(s) from either:   * The asset returns * The asset covariance matrix * The asset volatility(ies)  References * [Wikipedia, Variance](https://en.wikipedia.org/wiki/Variance)         

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.AssetsVarianceApi();
let body = {"assets":2,"assetsCovarianceMatrix":[[0.01,-0.0025],[-0.0025,0.0025]]}; // AssetsVariancePostRequest | 
apiInstance.assetsVariancePost(body, (error, data, response) => {
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
 **body** | [**AssetsVariancePostRequest**](AssetsVariancePostRequest.md)|  | 

### Return type

[**AssetsVariancePost200Response**](AssetsVariancePost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

