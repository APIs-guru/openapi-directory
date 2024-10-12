# PortfolioOptimizer.AssetsCovarianceMatrixApi

All URIs are relative to *https://api.portfoliooptimizer.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assetsCovarianceMatrixEffectiveRankPost**](AssetsCovarianceMatrixApi.md#assetsCovarianceMatrixEffectiveRankPost) | **POST** /assets/covariance/matrix/effective-rank | Covariance Matrix Effective Rank
[**assetsCovarianceMatrixExponentiallyWeightedPost**](AssetsCovarianceMatrixApi.md#assetsCovarianceMatrixExponentiallyWeightedPost) | **POST** /assets/covariance/matrix/exponentially-weighted | Exponentially Weighted Covariance Matrix
[**assetsCovarianceMatrixPost**](AssetsCovarianceMatrixApi.md#assetsCovarianceMatrixPost) | **POST** /assets/covariance/matrix | Covariance Matrix
[**assetsCovarianceMatrixValidationPost**](AssetsCovarianceMatrixApi.md#assetsCovarianceMatrixValidationPost) | **POST** /assets/covariance/matrix/validation | Covariance Matrix Validation



## assetsCovarianceMatrixEffectiveRankPost

> AssetsCovarianceMatrixEffectiveRankPost200Response assetsCovarianceMatrixEffectiveRankPost(body)

Covariance Matrix Effective Rank

Compute the effective rank of an asset covariance matrix.  References * [Olivier Roy and Martin Vetterli, The effective rank: A measure of effective dimensionality, 15th European Signal Processing Conference, 2007](https://ieeexplore.ieee.org/document/7098875) 

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.AssetsCovarianceMatrixApi();
let body = {"assets":2,"assetsCovarianceMatrix":[[3.5E-4,-3.5E-4],[-3.5E-4,3.5E-4]]}; // AssetsCovarianceMatrixEffectiveRankPostRequest | 
apiInstance.assetsCovarianceMatrixEffectiveRankPost(body, (error, data, response) => {
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
 **body** | [**AssetsCovarianceMatrixEffectiveRankPostRequest**](AssetsCovarianceMatrixEffectiveRankPostRequest.md)|  | 

### Return type

[**AssetsCovarianceMatrixEffectiveRankPost200Response**](AssetsCovarianceMatrixEffectiveRankPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## assetsCovarianceMatrixExponentiallyWeightedPost

> AssetsCovarianceMatrixExponentiallyWeightedPost200Response assetsCovarianceMatrixExponentiallyWeightedPost(body)

Exponentially Weighted Covariance Matrix

Compute an exponentially weighted covariance matrix of assets returns.  References * [RiskMetrics Group. Longerstaey, J. (1996). RiskMetrics technical document, Technical Report fourth edition](https://www.msci.com/documents/10199/5915b101-4206-4ba0-aee2-3449d5c7e95a) 

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.AssetsCovarianceMatrixApi();
let body = {"assets":[{"assetReturns":[0.01,0.01,0.02,0.01]},{"assetReturns":[-0.02,-0.02,-0.04,-0.02]}],"decayFactor":0.5}; // AssetsCovarianceMatrixExponentiallyWeightedPostRequest | 
apiInstance.assetsCovarianceMatrixExponentiallyWeightedPost(body, (error, data, response) => {
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
 **body** | [**AssetsCovarianceMatrixExponentiallyWeightedPostRequest**](AssetsCovarianceMatrixExponentiallyWeightedPostRequest.md)|  | 

### Return type

[**AssetsCovarianceMatrixExponentiallyWeightedPost200Response**](AssetsCovarianceMatrixExponentiallyWeightedPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## assetsCovarianceMatrixPost

> AssetsCovarianceMatrixPost200Response assetsCovarianceMatrixPost(body)

Covariance Matrix

Compute the covariance matrix of assets from either:   * The asset correlation matrix and their volatilities (i.e., standard deviations) * The asset correlation matrix and their variances * The asset returns  References * [Wikipedia, Covariance Matrix](https://en.wikipedia.org/wiki/Covariance_matrix) 

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.AssetsCovarianceMatrixApi();
let body = {"assets":2,"assetsCorrelationMatrix":[[1,-0.5],[-0.5,1]],"assetsVolatilities":[0.1,0.05]}; // AssetsCovarianceMatrixPostRequest | 
apiInstance.assetsCovarianceMatrixPost(body, (error, data, response) => {
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
 **body** | [**AssetsCovarianceMatrixPostRequest**](AssetsCovarianceMatrixPostRequest.md)|  | 

### Return type

[**AssetsCovarianceMatrixPost200Response**](AssetsCovarianceMatrixPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## assetsCovarianceMatrixValidationPost

> AssetsCovarianceMatrixValidationPost200Response assetsCovarianceMatrixValidationPost(body)

Covariance Matrix Validation

Validate whether a matrix is a covariance matrix.  References * [Wikipedia, Covariance Matrix](https://en.wikipedia.org/wiki/Covariance_matrix) 

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.AssetsCovarianceMatrixApi();
let body = {"assets":2,"assetsCovarianceMatrix":[[3.5E-4,-3.5E-4],[-3.5E-4,3.5E-4]]}; // AssetsCorrelationMatrixPostRequestOneOf1 | 
apiInstance.assetsCovarianceMatrixValidationPost(body, (error, data, response) => {
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
 **body** | [**AssetsCorrelationMatrixPostRequestOneOf1**](AssetsCorrelationMatrixPostRequestOneOf1.md)|  | 

### Return type

[**AssetsCovarianceMatrixValidationPost200Response**](AssetsCovarianceMatrixValidationPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

