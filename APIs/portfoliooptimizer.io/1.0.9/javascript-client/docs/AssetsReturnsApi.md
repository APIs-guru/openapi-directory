# PortfolioOptimizer.AssetsReturnsApi

All URIs are relative to *https://api.portfoliooptimizer.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assetsReturnsAveragePost**](AssetsReturnsApi.md#assetsReturnsAveragePost) | **POST** /assets/returns/average | Arithmetic Average Return
[**assetsReturnsLogarithmicPost**](AssetsReturnsApi.md#assetsReturnsLogarithmicPost) | **POST** /assets/returns/logarithmic | Logarithmic Returns
[**assetsReturnsPost**](AssetsReturnsApi.md#assetsReturnsPost) | **POST** /assets/returns | Arithmetic Returns
[**assetsReturnsTurbulencePartitionedPost**](AssetsReturnsApi.md#assetsReturnsTurbulencePartitionedPost) | **POST** /assets/returns/turbulence-partitioned | Turbulence-partitioned Asset Returns



## assetsReturnsAveragePost

> AssetsReturnsAveragePost200Response assetsReturnsAveragePost(body)

Arithmetic Average Return

Compute the arithmetic average of the return(s) of one or several asset(s).  References * [Wikipedia, Arithmetic Average Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Arithmetic_average_rate_of_return) 

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.AssetsReturnsApi();
let body = {"assets":[{"assetReturns":[0.1,-0.05]},{"assetReturns":[0,-0.01,0.01]}]}; // AssetsReturnsAveragePostRequest | 
apiInstance.assetsReturnsAveragePost(body, (error, data, response) => {
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
 **body** | [**AssetsReturnsAveragePostRequest**](AssetsReturnsAveragePostRequest.md)|  | 

### Return type

[**AssetsReturnsAveragePost200Response**](AssetsReturnsAveragePost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## assetsReturnsLogarithmicPost

> AssetsReturnsLogarithmicPost200Response assetsReturnsLogarithmicPost(body)

Logarithmic Returns

Compute the logarithmic return(s) of one or several asset(s) for one or several time period(s).  References * [Wikipedia, Logarithmic or continuously compounded return](https://en.wikipedia.org/wiki/Rate_of_return#Logarithmic_or_continuously_compounded_return) 

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.AssetsReturnsApi();
let body = {"assets":[{"assetPrices":[1,2]},{"assetPrices":[2,3,6]}]}; // AssetsReturnsPostRequest | 
apiInstance.assetsReturnsLogarithmicPost(body, (error, data, response) => {
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
 **body** | [**AssetsReturnsPostRequest**](AssetsReturnsPostRequest.md)|  | 

### Return type

[**AssetsReturnsLogarithmicPost200Response**](AssetsReturnsLogarithmicPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## assetsReturnsPost

> AssetsReturnsPost200Response assetsReturnsPost(body)

Arithmetic Returns

Compute the arithmetic return(s) of one or several asset(s) for one or several time period(s).  References * [Wikipedia, Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Return) 

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.AssetsReturnsApi();
let body = {"assets":[{"assetPrices":[1,2]},{"assetPrices":[2,3,6]}]}; // AssetsReturnsPostRequest | 
apiInstance.assetsReturnsPost(body, (error, data, response) => {
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
 **body** | [**AssetsReturnsPostRequest**](AssetsReturnsPostRequest.md)|  | 

### Return type

[**AssetsReturnsPost200Response**](AssetsReturnsPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## assetsReturnsTurbulencePartitionedPost

> AssetsReturnsTurbulencePartitionedPost200Response assetsReturnsTurbulencePartitionedPost(body)

Turbulence-partitioned Asset Returns

Partition asset returns into several subsets based on their turbulence index.  References * [George Chow, Jacquier, E., Kritzman, M., &amp; Kenneth Lowry. (1999). Optimal Portfolios in Good Times and Bad. Financial Analysts Journal, 55(3), 65–73.](https://www.jstor.org/stable/4480169) 

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.AssetsReturnsApi();
let body = {"assets":[{"assetReturns":[0,0.1,0.05,-0.01,0.025]},{"assetReturns":[0.005,0.05,0.1,-0.02,0]}],"turbulenceThresholds":[0.8,0.95]}; // AssetsReturnsTurbulencePartitionedPostRequest | 
apiInstance.assetsReturnsTurbulencePartitionedPost(body, (error, data, response) => {
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
 **body** | [**AssetsReturnsTurbulencePartitionedPostRequest**](AssetsReturnsTurbulencePartitionedPostRequest.md)|  | 

### Return type

[**AssetsReturnsTurbulencePartitionedPost200Response**](AssetsReturnsTurbulencePartitionedPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

