# PortfolioOptimizer.AssetsKurtosisApi

All URIs are relative to *https://api.portfoliooptimizer.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assetsKurtosisPost**](AssetsKurtosisApi.md#assetsKurtosisPost) | **POST** /assets/kurtosis | Kurtosis



## assetsKurtosisPost

> AssetsKurtosisPost200Response assetsKurtosisPost(body)

Kurtosis

Compute the kurtosis of one or several asset(s), from the asset returns.  References * [Wikipedia, Kurtosis](https://en.wikipedia.org/wiki/Kurtosis) 

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.AssetsKurtosisApi();
let body = {"assets":[{"assetReturns":[0.01,0,0.02,-0.03]}]}; // AssetsKurtosisPostRequest | 
apiInstance.assetsKurtosisPost(body, (error, data, response) => {
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
 **body** | [**AssetsKurtosisPostRequest**](AssetsKurtosisPostRequest.md)|  | 

### Return type

[**AssetsKurtosisPost200Response**](AssetsKurtosisPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

