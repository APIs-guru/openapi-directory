# PortfolioOptimizer.AssetsVolatilityApi

All URIs are relative to *https://api.portfoliooptimizer.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assetsVolatilityPost**](AssetsVolatilityApi.md#assetsVolatilityPost) | **POST** /assets/volatility | Volatility



## assetsVolatilityPost

> AssetsVolatilityPost200Response assetsVolatilityPost(body)

Volatility

Compute the volatility (i.e., standard deviation) of one or several asset(s) from either:   * The asset returns * The asset covariance matrix * The asset variance(s)  References * [Wikipedia, Standard Deviation](https://en.wikipedia.org/wiki/Standard_deviation) 

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.AssetsVolatilityApi();
let body = {"assets":2,"assetsCovarianceMatrix":[[0.01,-0.0025],[-0.0025,0.0025]]}; // AssetsVolatilityPostRequest | 
apiInstance.assetsVolatilityPost(body, (error, data, response) => {
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
 **body** | [**AssetsVolatilityPostRequest**](AssetsVolatilityPostRequest.md)|  | 

### Return type

[**AssetsVolatilityPost200Response**](AssetsVolatilityPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

