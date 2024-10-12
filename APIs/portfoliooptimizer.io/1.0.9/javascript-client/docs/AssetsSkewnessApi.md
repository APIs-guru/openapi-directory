# PortfolioOptimizer.AssetsSkewnessApi

All URIs are relative to *https://api.portfoliooptimizer.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assetsSkewnessPost**](AssetsSkewnessApi.md#assetsSkewnessPost) | **POST** /assets/skewness | Skewness



## assetsSkewnessPost

> AssetsSkewnessPost200Response assetsSkewnessPost(body)

Skewness

Compute the skewness of one or several asset(s), from the asset returns.  References * [Wikipedia, Skewness](https://en.wikipedia.org/wiki/Skewness) 

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.AssetsSkewnessApi();
let body = {"assets":[{"assetReturns":[0.01,0,0.02,-0.03]}]}; // AssetsSkewnessPostRequest | 
apiInstance.assetsSkewnessPost(body, (error, data, response) => {
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
 **body** | [**AssetsSkewnessPostRequest**](AssetsSkewnessPostRequest.md)|  | 

### Return type

[**AssetsSkewnessPost200Response**](AssetsSkewnessPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

