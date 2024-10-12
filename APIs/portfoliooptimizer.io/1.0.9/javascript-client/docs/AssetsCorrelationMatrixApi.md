# PortfolioOptimizer.AssetsCorrelationMatrixApi

All URIs are relative to *https://api.portfoliooptimizer.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assetsCorrelationMatrixBoundsPost**](AssetsCorrelationMatrixApi.md#assetsCorrelationMatrixBoundsPost) | **POST** /assets/correlation/matrix/bounds | Correlation Matrix Bounds
[**assetsCorrelationMatrixDenoisedPost**](AssetsCorrelationMatrixApi.md#assetsCorrelationMatrixDenoisedPost) | **POST** /assets/correlation/matrix/denoised | Denoised Correlation Matrix
[**assetsCorrelationMatrixDistancePost**](AssetsCorrelationMatrixApi.md#assetsCorrelationMatrixDistancePost) | **POST** /assets/correlation/matrix/distance | Correlation Matrix Distance
[**assetsCorrelationMatrixEffectiveRankPost**](AssetsCorrelationMatrixApi.md#assetsCorrelationMatrixEffectiveRankPost) | **POST** /assets/correlation/matrix/effective-rank | Correlation Matrix Effective Rank
[**assetsCorrelationMatrixInformativenessPost**](AssetsCorrelationMatrixApi.md#assetsCorrelationMatrixInformativenessPost) | **POST** /assets/correlation/matrix/informativeness | Correlation Matrix Informativeness
[**assetsCorrelationMatrixNearestPost**](AssetsCorrelationMatrixApi.md#assetsCorrelationMatrixNearestPost) | **POST** /assets/correlation/matrix/nearest | Nearest Correlation Matrix
[**assetsCorrelationMatrixPost**](AssetsCorrelationMatrixApi.md#assetsCorrelationMatrixPost) | **POST** /assets/correlation/matrix | Correlation Matrix
[**assetsCorrelationMatrixRandomPost**](AssetsCorrelationMatrixApi.md#assetsCorrelationMatrixRandomPost) | **POST** /assets/correlation/matrix/random | Random Correlation Matrix
[**assetsCorrelationMatrixShrinkagePost**](AssetsCorrelationMatrixApi.md#assetsCorrelationMatrixShrinkagePost) | **POST** /assets/correlation/matrix/shrinkage | Correlation Matrix Shrinkage
[**assetsCorrelationMatrixTheoryImpliedPost**](AssetsCorrelationMatrixApi.md#assetsCorrelationMatrixTheoryImpliedPost) | **POST** /assets/correlation/matrix/theory-implied | Theory-Implied Correlation Matrix
[**assetsCorrelationMatrixValidationPost**](AssetsCorrelationMatrixApi.md#assetsCorrelationMatrixValidationPost) | **POST** /assets/correlation/matrix/validation | Correlation Matrix Validation



## assetsCorrelationMatrixBoundsPost

> AssetsCorrelationMatrixBoundsPost200Response assetsCorrelationMatrixBoundsPost(body)

Correlation Matrix Bounds

Compute the lower bounds and the upper bounds of an asset correlation matrix associated to a given group of assets.    References  * [Kawee Numpacharoen &amp; Kornkanok Bunwong (2013) Boundaries of Correlation Adjustment with Applications to Financial Risk Management, Applied Mathematical Finance, 20:4, 403-414](http://dx.doi.org/10.1080/1350486X.2012.723517). 

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.AssetsCorrelationMatrixApi();
let body = {"assets":4,"assetsCorrelationMatrix":[[1,-0.55,-0.15,-0.1],[-0.55,1,0.4,0.3],[-0.15,0.4,1,0.5],[-0.1,0.3,0.5,1]],"assetsGroup":[2,3,4]}; // AssetsCorrelationMatrixBoundsPostRequest | 
apiInstance.assetsCorrelationMatrixBoundsPost(body, (error, data, response) => {
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
 **body** | [**AssetsCorrelationMatrixBoundsPostRequest**](AssetsCorrelationMatrixBoundsPostRequest.md)|  | 

### Return type

[**AssetsCorrelationMatrixBoundsPost200Response**](AssetsCorrelationMatrixBoundsPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## assetsCorrelationMatrixDenoisedPost

> AssetsCorrelationMatrixDenoisedPost200Response assetsCorrelationMatrixDenoisedPost(body)

Denoised Correlation Matrix

Compute a denoised asset correlation matrix, using one of the following methods:  * The eigenvalues clipping method, described in the first reference, which is based on random matrix theory    References  * [Laurent Laloux, Pierre Cizeau, Jean-Philippe Bouchaud, and Marc Potters, Noise Dressing of Financial Correlation Matrices, Phys. Rev. Lett. 83, 1467](https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.83.1467) 

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.AssetsCorrelationMatrixApi();
let body = {"assets":3,"assetsCorrelationMatrix":[[1,0.5,0.9],[0.5,1,0.7],[0.9,0.7,1]],"assetsCorrelationMatrixAspectRatio":0.5}; // AssetsCorrelationMatrixDenoisedPostRequest | 
apiInstance.assetsCorrelationMatrixDenoisedPost(body, (error, data, response) => {
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
 **body** | [**AssetsCorrelationMatrixDenoisedPostRequest**](AssetsCorrelationMatrixDenoisedPostRequest.md)|  | 

### Return type

[**AssetsCorrelationMatrixDenoisedPost200Response**](AssetsCorrelationMatrixDenoisedPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## assetsCorrelationMatrixDistancePost

> AssetsCorrelationMatrixDistancePost200Response assetsCorrelationMatrixDistancePost(body)

Correlation Matrix Distance

Compute the distance between an asset correlation matrix and a reference correlation matrix, using one of the following distance metrics: * Euclidean distance (default), which is the distance induced by [the Frobenius norm](https://en.wikipedia.org/wiki/Matrix_norm#Frobenius_norm) * Correlation matrix distance, defined in the first reference, which corresponds to [the cosine distance](https://en.wikipedia.org/wiki/Cosine_similarity) between the two vectorized asset correlation matrices * Bures distance, defined in the second reference   References  * [M. Herdin, N. Czink, H. Ozcelik and E. Bonek, Correlation matrix distance, a meaningful measure for evaluation of non-stationary MIMO channels, 2005 IEEE 61st Vehicular Technology Conference, 2005, pp. 136-140 Vol. 1](https://ieeexplore.ieee.org/document/1543265)  * [Rajendra Bhatia, Tanvi Jain, Yongdo Lim, On the Bures–Wasserstein distance between positive definite matrices, Expositiones Mathematicae, Volume 37, Issue 2, 2019](https://www.sciencedirect.com/science/article/pii/S0723086918300021) 

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.AssetsCorrelationMatrixApi();
let body = {"assets":3,"assetsCorrelationMatrix":[[1,0.5,0.9],[0.5,1,0.7],[0.9,0.7,1]],"distanceMetric":"correlationMatrix","referenceCorrelationMatrix":[[1,1,1],[1,1,1],[1,1,1]]}; // AssetsCorrelationMatrixDistancePostRequest | 
apiInstance.assetsCorrelationMatrixDistancePost(body, (error, data, response) => {
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
 **body** | [**AssetsCorrelationMatrixDistancePostRequest**](AssetsCorrelationMatrixDistancePostRequest.md)|  | 

### Return type

[**AssetsCorrelationMatrixDistancePost200Response**](AssetsCorrelationMatrixDistancePost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## assetsCorrelationMatrixEffectiveRankPost

> AssetsCorrelationMatrixEffectiveRankPost200Response assetsCorrelationMatrixEffectiveRankPost(body)

Correlation Matrix Effective Rank

Compute the effective rank of an asset correlation matrix.  References * [Olivier Roy and Martin Vetterli, The effective rank: A measure of effective dimensionality, 15th European Signal Processing Conference, 2007](https://ieeexplore.ieee.org/document/7098875) 

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.AssetsCorrelationMatrixApi();
let body = {"assets":2,"assetsCorrelationMatrix":[[1,0],[0,1]]}; // AssetsCorrelationMatrixEffectiveRankPostRequest | 
apiInstance.assetsCorrelationMatrixEffectiveRankPost(body, (error, data, response) => {
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
 **body** | [**AssetsCorrelationMatrixEffectiveRankPostRequest**](AssetsCorrelationMatrixEffectiveRankPostRequest.md)|  | 

### Return type

[**AssetsCorrelationMatrixEffectiveRankPost200Response**](AssetsCorrelationMatrixEffectiveRankPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## assetsCorrelationMatrixInformativenessPost

> AssetsCorrelationMatrixInformativenessPost200Response assetsCorrelationMatrixInformativenessPost(body)

Correlation Matrix Informativeness

Compute the informativeness of an asset correlation matrix, using one of the following distance metrics: * Euclidean distance (default), which is the distance induced by [the Frobenius norm](https://en.wikipedia.org/wiki/Matrix_norm#Frobenius_norm) * Correlation matrix distance, defined in the second reference, which corresponds to [the cosine distance](https://en.wikipedia.org/wiki/Cosine_similarity) between the two vectorized asset correlation matrices * Bures distance, defined in the third reference   References  * [Austin J. Brockmeier and Tingting Mu and Sophia Ananiadou and John Y. Goulermas, Quantifying the Informativeness of Similarity Measurements, Journal of Machine Learning Research, 2017](http://jmlr.org/papers/v18/16-296.html)  * [M. Herdin, N. Czink, H. Ozcelik and E. Bonek, Correlation matrix distance, a meaningful measure for evaluation of non-stationary MIMO channels, 2005 IEEE 61st Vehicular Technology Conference, 2005, pp. 136-140 Vol. 1](https://ieeexplore.ieee.org/document/1543265)  * [Rajendra Bhatia, Tanvi Jain, Yongdo Lim, On the Bures–Wasserstein distance between positive definite matrices, Expositiones Mathematicae, Volume 37, Issue 2, 2019](https://www.sciencedirect.com/science/article/pii/S0723086918300021) 

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.AssetsCorrelationMatrixApi();
let body = {"assets":3,"assetsCorrelationMatrix":[[1,0.5,0.9],[0.5,1,0.7],[0.9,0.7,1]],"distanceMetric":"bures"}; // AssetsCorrelationMatrixInformativenessPostRequest | 
apiInstance.assetsCorrelationMatrixInformativenessPost(body, (error, data, response) => {
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
 **body** | [**AssetsCorrelationMatrixInformativenessPostRequest**](AssetsCorrelationMatrixInformativenessPostRequest.md)|  | 

### Return type

[**AssetsCorrelationMatrixInformativenessPost200Response**](AssetsCorrelationMatrixInformativenessPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## assetsCorrelationMatrixNearestPost

> AssetsCorrelationMatrixPost200Response assetsCorrelationMatrixNearestPost(body)

Nearest Correlation Matrix

Compute the _closest_ - in terms of [the Frobenius norm](https://en.wikipedia.org/wiki/Matrix_norm#Frobenius_norm) - asset correlation matrix to an approximate asset correlation matrix, optionally keeping a selected number of correlations fixed.  References * [Nicholas J. Higham, Computing the Nearest Correlation Matrix—A Problem from Finance, IMA J. Numer. Anal. 22, 329–343, 2002.](http://www.maths.manchester.ac.uk/~higham/narep/narep369.pdf) 

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.AssetsCorrelationMatrixApi();
let body = {"assets":3,"assetsApproximateCorrelationMatrix":[[1,1,0],[1,1,1],[0,1,1]]}; // AssetsCorrelationMatrixNearestPostRequest | 
apiInstance.assetsCorrelationMatrixNearestPost(body, (error, data, response) => {
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
 **body** | [**AssetsCorrelationMatrixNearestPostRequest**](AssetsCorrelationMatrixNearestPostRequest.md)|  | 

### Return type

[**AssetsCorrelationMatrixPost200Response**](AssetsCorrelationMatrixPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## assetsCorrelationMatrixPost

> AssetsCorrelationMatrixPost200Response assetsCorrelationMatrixPost(body)

Correlation Matrix

Compute the Pearson asset correlation matrix from either:   * The asset returns * The asset covariance matrix  References * [Wikipedia, Correlation and Dependence](https://en.wikipedia.org/wiki/Correlation_and_dependence#Correlation_matrices) 

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.AssetsCorrelationMatrixApi();
let body = {"assets":2,"assetsCovarianceMatrix":[[0.01,-0.0025],[-0.0025,0.0025]]}; // AssetsCorrelationMatrixPostRequest | 
apiInstance.assetsCorrelationMatrixPost(body, (error, data, response) => {
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
 **body** | [**AssetsCorrelationMatrixPostRequest**](AssetsCorrelationMatrixPostRequest.md)|  | 

### Return type

[**AssetsCorrelationMatrixPost200Response**](AssetsCorrelationMatrixPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## assetsCorrelationMatrixRandomPost

> AssetsCorrelationMatrixPost200Response assetsCorrelationMatrixRandomPost(body)

Random Correlation Matrix

Generate an asset correlation matrix uniformly at random over the space of positive definite correlation matrices.  References * [Joe, H., Generating random correlation matrices based on partial correlations. Journal of Multivariate Analysis, 2006, 97, 2177-2189](https://www.sciencedirect.com/science/article/pii/S0047259X05000886) 

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.AssetsCorrelationMatrixApi();
let body = {"assets":2}; // AssetsCorrelationMatrixRandomPostRequest | 
apiInstance.assetsCorrelationMatrixRandomPost(body, (error, data, response) => {
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
 **body** | [**AssetsCorrelationMatrixRandomPostRequest**](AssetsCorrelationMatrixRandomPostRequest.md)|  | 

### Return type

[**AssetsCorrelationMatrixPost200Response**](AssetsCorrelationMatrixPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## assetsCorrelationMatrixShrinkagePost

> AssetsCorrelationMatrixPost200Response assetsCorrelationMatrixShrinkagePost(body)

Correlation Matrix Shrinkage

Compute an asset correlation matrix as a convex linear combination of an asset correlation matrix and a target correlation matrix, the target correlation matrix being either:    * An equicorrelation matrix made of 1  * An equicorrelation matrix made of 0  * An equicorrelation matrix made of -1/(n-1), with n the number of assets  * A provided correlation matrix    References  * [Steiner, Andreas, Manipulating Valid Correlation Matrices](https://papers.ssrn.com/sol3/papers.cfm?abstract_id&#x3D;1878165) 

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.AssetsCorrelationMatrixApi();
let body = {"assets":3,"assetsCorrelationMatrix":[[1,0.5,0.9],[0.5,1,0.7],[0.9,0.7,1]],"shrinkageFactor":0.5,"targetCorrelationMatrix":[[1,0,0],[0,1,0],[0,0,1]]}; // AssetsCorrelationMatrixShrinkagePostRequest | 
apiInstance.assetsCorrelationMatrixShrinkagePost(body, (error, data, response) => {
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
 **body** | [**AssetsCorrelationMatrixShrinkagePostRequest**](AssetsCorrelationMatrixShrinkagePostRequest.md)|  | 

### Return type

[**AssetsCorrelationMatrixPost200Response**](AssetsCorrelationMatrixPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## assetsCorrelationMatrixTheoryImpliedPost

> AssetsCorrelationMatrixPost200Response assetsCorrelationMatrixTheoryImpliedPost(body)

Theory-Implied Correlation Matrix

Compute the theory-implied asset correlation matrix associated with: * A hierarchical classification of a universe of assets * An asset correlation matrix  References * [Lopez de Prado, Marcos Estimation of Theory-Implied Correlation Matrices (November 9, 2019)](https://papers.ssrn.com/sol3/papers.cfm?abstract_id&#x3D;3484152) 

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.AssetsCorrelationMatrixApi();
let body = {"assets":[{"assetHierarchicalClassification":[35,3510,351010,35101010]},{"assetHierarchicalClassification":[20,2030,203020,20302010]}],"assetsCorrelationMatrix":[[1,-3.5E-4],[-3.5E-4,1]]}; // AssetsCorrelationMatrixTheoryImpliedPostRequest | 
apiInstance.assetsCorrelationMatrixTheoryImpliedPost(body, (error, data, response) => {
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
 **body** | [**AssetsCorrelationMatrixTheoryImpliedPostRequest**](AssetsCorrelationMatrixTheoryImpliedPostRequest.md)|  | 

### Return type

[**AssetsCorrelationMatrixPost200Response**](AssetsCorrelationMatrixPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## assetsCorrelationMatrixValidationPost

> AssetsCorrelationMatrixValidationPost200Response assetsCorrelationMatrixValidationPost(body)

Correlation Matrix Validation

Validate whether a matrix is an asset correlation matrix.  References * [Wikipedia, Correlation and Dependence](https://en.wikipedia.org/wiki/Correlation_and_dependence#Correlation_matrices) 

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.AssetsCorrelationMatrixApi();
let body = {"assets":2,"assetsCorrelationMatrix":[[1,-3.5E-4],[-3.5E-4,1]]}; // AssetsCorrelationMatrixValidationPostRequest | 
apiInstance.assetsCorrelationMatrixValidationPost(body, (error, data, response) => {
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
 **body** | [**AssetsCorrelationMatrixValidationPostRequest**](AssetsCorrelationMatrixValidationPostRequest.md)|  | 

### Return type

[**AssetsCorrelationMatrixValidationPost200Response**](AssetsCorrelationMatrixValidationPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

