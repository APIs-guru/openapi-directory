# PortfolioOptimizer.PortfolioOptimizationMeanVarianceApi

All URIs are relative to *https://api.portfoliooptimizer.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**portfolioOptimizationMaximumReturnDiversifiedPost**](PortfolioOptimizationMeanVarianceApi.md#portfolioOptimizationMaximumReturnDiversifiedPost) | **POST** /portfolio/optimization/maximum-return/diversified | Diversified Maximum Return Portfolio
[**portfolioOptimizationMaximumReturnPost**](PortfolioOptimizationMeanVarianceApi.md#portfolioOptimizationMaximumReturnPost) | **POST** /portfolio/optimization/maximum-return | Maximum Return Portfolio
[**portfolioOptimizationMaximumReturnSubsetResamplingBasedPost**](PortfolioOptimizationMeanVarianceApi.md#portfolioOptimizationMaximumReturnSubsetResamplingBasedPost) | **POST** /portfolio/optimization/maximum-return/subset-resampling-based | Subset Resampling-Based Maximum Return Portfolio
[**portfolioOptimizationMaximumSharpeRatioDiversifiedPost**](PortfolioOptimizationMeanVarianceApi.md#portfolioOptimizationMaximumSharpeRatioDiversifiedPost) | **POST** /portfolio/optimization/maximum-sharpe-ratio/diversified | Diversified Maximum Sharpe Ratio Portfolio
[**portfolioOptimizationMaximumSharpeRatioPost**](PortfolioOptimizationMeanVarianceApi.md#portfolioOptimizationMaximumSharpeRatioPost) | **POST** /portfolio/optimization/maximum-sharpe-ratio | Maximum Sharpe Ratio Portfolio
[**portfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPost**](PortfolioOptimizationMeanVarianceApi.md#portfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPost) | **POST** /portfolio/optimization/maximum-sharpe-ratio/subset-resampling-based | Subset Resampling-Based Maximum Sharpe Ratio Portfolio
[**portfolioOptimizationMeanVarianceEfficientDiversifiedPost**](PortfolioOptimizationMeanVarianceApi.md#portfolioOptimizationMeanVarianceEfficientDiversifiedPost) | **POST** /portfolio/optimization/mean-variance-efficient/diversified | Diversified Mean-Variance Efficient Portfolio
[**portfolioOptimizationMeanVarianceEfficientPost**](PortfolioOptimizationMeanVarianceApi.md#portfolioOptimizationMeanVarianceEfficientPost) | **POST** /portfolio/optimization/mean-variance-efficient | Mean-Variance Efficient Portfolio
[**portfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPost**](PortfolioOptimizationMeanVarianceApi.md#portfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPost) | **POST** /portfolio/optimization/mean-variance-efficient/subset-resampling-based | Subset Resampling-Based Mean-Variance Efficient Portfolio
[**portfolioOptimizationMinimumVarianceDiversifiedPost**](PortfolioOptimizationMeanVarianceApi.md#portfolioOptimizationMinimumVarianceDiversifiedPost) | **POST** /portfolio/optimization/minimum-variance/diversified | Diversified Minimum Variance Portfolio
[**portfolioOptimizationMinimumVariancePost**](PortfolioOptimizationMeanVarianceApi.md#portfolioOptimizationMinimumVariancePost) | **POST** /portfolio/optimization/minimum-variance | Minimum Variance Portfolio
[**portfolioOptimizationMinimumVarianceSubsetResamplingBasedPost**](PortfolioOptimizationMeanVarianceApi.md#portfolioOptimizationMinimumVarianceSubsetResamplingBasedPost) | **POST** /portfolio/optimization/minimum-variance/subset-resampling-based | Subset Resampling-Based Minimum Variance Portfolio



## portfolioOptimizationMaximumReturnDiversifiedPost

> PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolioOptimizationMaximumReturnDiversifiedPost(body)

Diversified Maximum Return Portfolio

Compute the asset weights of the diversified maximum return portfolio, as defined in the first reference, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  The diversification measure used in the optimization procedure is the [Herfindahl-Hirschman Index](https://en.wikipedia.org/wiki/Herfindahl%E2%80%93Hirschman_index) of the assets weights.  References  * [Alejandro Corvalan, 2005. Well Diversified Efficient Portfolios, Working Papers Central Bank of Chile 336, Central Bank of Chile](https://ideas.repec.org/p/chb/bcchwp/336.html)  * [Bouchaud, Jean-Philippe and Potters, Marc and Aguilar, Jean-Pierre, Missing Information and Asset Allocation, arXiv, 1997](https://arxiv.org/abs/cond-mat/9707042)  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.PortfolioOptimizationMeanVarianceApi();
let body = {"assets":2,"assetsReturns":[0.02,0.01],"constraints":{"maximumAssetsWeights":[0.4,1]}}; // PortfolioOptimizationMaximumReturnDiversifiedPostRequest | 
apiInstance.portfolioOptimizationMaximumReturnDiversifiedPost(body, (error, data, response) => {
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
 **body** | [**PortfolioOptimizationMaximumReturnDiversifiedPostRequest**](PortfolioOptimizationMaximumReturnDiversifiedPostRequest.md)|  | 

### Return type

[**PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner**](PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## portfolioOptimizationMaximumReturnPost

> PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolioOptimizationMaximumReturnPost(body)

Maximum Return Portfolio

Compute the asset weights of the maximum return portfolio, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.PortfolioOptimizationMeanVarianceApi();
let body = {"assets":2,"assetsReturns":[0.02,0.01],"constraints":{"maximumAssetsWeights":[0.4,1]}}; // PortfolioOptimizationMaximumReturnPostRequest | 
apiInstance.portfolioOptimizationMaximumReturnPost(body, (error, data, response) => {
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
 **body** | [**PortfolioOptimizationMaximumReturnPostRequest**](PortfolioOptimizationMaximumReturnPostRequest.md)|  | 

### Return type

[**PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner**](PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## portfolioOptimizationMaximumReturnSubsetResamplingBasedPost

> PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolioOptimizationMaximumReturnSubsetResamplingBasedPost(body)

Subset Resampling-Based Maximum Return Portfolio

Compute the asset weights of the subset resampling-based maximum return portfolio, following the methodology described in the first and the second references, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * [CSSA, Random Subspace Optimization (RSO)](https://cssanalytics.wordpress.com/2013/10/06/random-subspace-optimization-rso/)  * [Subset Optimization for Asset Allocation,Benjamin J. Gillen](https://www.bengillen.com/uploads/1/2/3/8/123891022/subsets.pdf)  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.PortfolioOptimizationMeanVarianceApi();
let body = {"assets":3,"assetsReturns":[0.01,0.02,0.03],"subsetPortfoliosEnumerationMethod":"complete"}; // PortfolioOptimizationMaximumReturnSubsetResamplingBasedPostRequest | 
apiInstance.portfolioOptimizationMaximumReturnSubsetResamplingBasedPost(body, (error, data, response) => {
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
 **body** | [**PortfolioOptimizationMaximumReturnSubsetResamplingBasedPostRequest**](PortfolioOptimizationMaximumReturnSubsetResamplingBasedPostRequest.md)|  | 

### Return type

[**PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner**](PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## portfolioOptimizationMaximumSharpeRatioDiversifiedPost

> PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolioOptimizationMaximumSharpeRatioDiversifiedPost(body)

Diversified Maximum Sharpe Ratio Portfolio

Compute the asset weights of the diversified maximum Sharpe ratio portfolio, as defined in the first reference, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  The diversification measure used in the optimization procedure is the [Herfindahl-Hirschman Index](https://en.wikipedia.org/wiki/Herfindahl%E2%80%93Hirschman_index) of the assets weights.  References  * [Alejandro Corvalan, 2005. Well Diversified Efficient Portfolios, Working Papers Central Bank of Chile 336, Central Bank of Chile](https://ideas.repec.org/p/chb/bcchwp/336.html)  * [Bouchaud, Jean-Philippe and Potters, Marc and Aguilar, Jean-Pierre, Missing Information and Asset Allocation, arXiv, 1997](https://arxiv.org/abs/cond-mat/9707042)  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.PortfolioOptimizationMeanVarianceApi();
let body = {"assets":2,"assetsCovarianceMatrix":[[0.05,0.02],[0.02,0.07]],"assetsReturns":[0.05,0.1],"riskFreeRate":0}; // PortfolioOptimizationMaximumSharpeRatioDiversifiedPostRequest | 
apiInstance.portfolioOptimizationMaximumSharpeRatioDiversifiedPost(body, (error, data, response) => {
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
 **body** | [**PortfolioOptimizationMaximumSharpeRatioDiversifiedPostRequest**](PortfolioOptimizationMaximumSharpeRatioDiversifiedPostRequest.md)|  | 

### Return type

[**PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner**](PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## portfolioOptimizationMaximumSharpeRatioPost

> PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolioOptimizationMaximumSharpeRatioPost(body)

Maximum Sharpe Ratio Portfolio

Compute the asset weights of the maximum Sharpe ratio portfolio, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.PortfolioOptimizationMeanVarianceApi();
let body = {"assets":2,"assetsCovarianceMatrix":[[0.05,0.02],[0.02,0.07]],"assetsReturns":[0.05,0.1],"riskFreeRate":0}; // PortfolioOptimizationMaximumSharpeRatioPostRequest | 
apiInstance.portfolioOptimizationMaximumSharpeRatioPost(body, (error, data, response) => {
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
 **body** | [**PortfolioOptimizationMaximumSharpeRatioPostRequest**](PortfolioOptimizationMaximumSharpeRatioPostRequest.md)|  | 

### Return type

[**PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner**](PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## portfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPost

> PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPost(body)

Subset Resampling-Based Maximum Sharpe Ratio Portfolio

Compute the asset weights of the susbet resampling-based maximum Sharpe ratio portfolio, following the methodology described in the first and the second references, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * [CSSA, Random Subspace Optimization (RSO)](https://cssanalytics.wordpress.com/2013/10/06/random-subspace-optimization-rso/)  * [Subset Optimization for Asset Allocation,Benjamin J. Gillen](https://www.bengillen.com/uploads/1/2/3/8/123891022/subsets.pdf)  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.PortfolioOptimizationMeanVarianceApi();
let body = {"assets":3,"assetsCovarianceMatrix":[[0.05,0.02,0],[0.02,0.07,0.5],[0,0.5,0.1]],"assetsReturns":[0.05,0.1,0.025],"riskFreeRate":0}; // PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest | 
apiInstance.portfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPost(body, (error, data, response) => {
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
 **body** | [**PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest**](PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest.md)|  | 

### Return type

[**PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner**](PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## portfolioOptimizationMeanVarianceEfficientDiversifiedPost

> PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolioOptimizationMeanVarianceEfficientDiversifiedPost(body)

Diversified Mean-Variance Efficient Portfolio

Compute the asset weights of a diversified mean-variance efficient portfolio, as defined in the first reference, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  The diversification measure used in the optimization procedure is the [Herfindahl-Hirschman Index](https://en.wikipedia.org/wiki/Herfindahl%E2%80%93Hirschman_index) of the assets weights.  &gt; A diversified mean-variance efficient portfolio does NOT belong to [the mean-variance efficient frontier](#post-/portfolio/analysis/mean-variance/efficient-frontier), but is close to this frontier.  References  * [Alejandro Corvalan, 2005. Well Diversified Efficient Portfolios, Working Papers Central Bank of Chile 336, Central Bank of Chile](https://ideas.repec.org/p/chb/bcchwp/336.html)  * [Bouchaud, Jean-Philippe and Potters, Marc and Aguilar, Jean-Pierre, Missing Information and Asset Allocation, arXiv, 1997](https://arxiv.org/abs/cond-mat/9707042)  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.PortfolioOptimizationMeanVarianceApi();
let body = {"assets":2,"assetsCovarianceMatrix":[[1,0.3],[0.3,1]],"assetsReturns":[0.1,0.2],"constraints":{"deltaReturn":0.05,"deltaVolatility":0.05,"portfolioReturn":0.175}}; // PortfolioOptimizationMeanVarianceEfficientDiversifiedPostRequest | 
apiInstance.portfolioOptimizationMeanVarianceEfficientDiversifiedPost(body, (error, data, response) => {
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
 **body** | [**PortfolioOptimizationMeanVarianceEfficientDiversifiedPostRequest**](PortfolioOptimizationMeanVarianceEfficientDiversifiedPostRequest.md)|  | 

### Return type

[**PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner**](PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## portfolioOptimizationMeanVarianceEfficientPost

> PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolioOptimizationMeanVarianceEfficientPost(body)

Mean-Variance Efficient Portfolio

Compute the asset weights of a mean-variance efficient portfolio, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  &gt; A mean-variance efficient portfolio is a portfolio belonging to [the mean-variance efficient frontier](#post-/portfolio/analysis/mean-variance/efficient-frontier).  References  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.PortfolioOptimizationMeanVarianceApi();
let body = {"assets":2,"assetsCovarianceMatrix":[[1,0.3],[0.3,1]],"assetsReturns":[0.1,0.2],"constraints":{"portfolioReturn":0.15}}; // PortfolioOptimizationMeanVarianceEfficientPostRequest | 
apiInstance.portfolioOptimizationMeanVarianceEfficientPost(body, (error, data, response) => {
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
 **body** | [**PortfolioOptimizationMeanVarianceEfficientPostRequest**](PortfolioOptimizationMeanVarianceEfficientPostRequest.md)|  | 

### Return type

[**PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner**](PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## portfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPost

> PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPost(body)

Subset Resampling-Based Mean-Variance Efficient Portfolio

Compute the asset weights of a subset resampling-based  mean-variance efficient portfolio, following the methodology described in the first and the second references, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * [CSSA, Random Subspace Optimization (RSO)](https://cssanalytics.wordpress.com/2013/10/06/random-subspace-optimization-rso/)  * [Subset Optimization for Asset Allocation,Benjamin J. Gillen](https://www.bengillen.com/uploads/1/2/3/8/123891022/subsets.pdf)  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.PortfolioOptimizationMeanVarianceApi();
let body = {"assets":3,"assetsCovarianceMatrix":[[1,0,0],[0,1,0],[0,0,1]],"assetsReturns":[0.1,0.2,0.3],"constraints":{"riskTolerance":2}}; // PortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPostRequest | 
apiInstance.portfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPost(body, (error, data, response) => {
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
 **body** | [**PortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPostRequest**](PortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPostRequest.md)|  | 

### Return type

[**PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner**](PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## portfolioOptimizationMinimumVarianceDiversifiedPost

> PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolioOptimizationMinimumVarianceDiversifiedPost(body)

Diversified Minimum Variance Portfolio

Compute the asset weights of the diversified minimum variance portfolio, as defined in the first reference, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  The diversification measure used in the optimization procedure is the [Herfindahl-Hirschman Index](https://en.wikipedia.org/wiki/Herfindahl%E2%80%93Hirschman_index) of the assets weights.  References  * [Alejandro Corvalan, 2005. Well Diversified Efficient Portfolios, Working Papers Central Bank of Chile 336, Central Bank of Chile](https://ideas.repec.org/p/chb/bcchwp/336.html)  * [Bouchaud, Jean-Philippe and Potters, Marc and Aguilar, Jean-Pierre, Missing Information and Asset Allocation, arXiv, 1997](https://arxiv.org/abs/cond-mat/9707042)  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.PortfolioOptimizationMeanVarianceApi();
let body = {"assets":2,"assetsCovarianceMatrix":[[0.0025,5.0E-4],[5.0E-4,0.01]],"constraints":{"maximumAssetsWeights":[0.4,1],"maximumPortfolioExposure":0.5,"minimumPortfolioExposure":0.5}}; // PortfolioOptimizationMinimumVarianceDiversifiedPostRequest | 
apiInstance.portfolioOptimizationMinimumVarianceDiversifiedPost(body, (error, data, response) => {
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
 **body** | [**PortfolioOptimizationMinimumVarianceDiversifiedPostRequest**](PortfolioOptimizationMinimumVarianceDiversifiedPostRequest.md)|  | 

### Return type

[**PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner**](PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## portfolioOptimizationMinimumVariancePost

> PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolioOptimizationMinimumVariancePost(body)

Minimum Variance Portfolio

Compute the asset weights of the minimum variance portfolio, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.PortfolioOptimizationMeanVarianceApi();
let body = {"assets":2,"assetsCovarianceMatrix":[[0.0025,5.0E-4],[5.0E-4,0.01]],"constraints":{"maximumAssetsWeights":[0.4,1],"maximumPortfolioExposure":0.5,"minimumPortfolioExposure":0.5}}; // PortfolioOptimizationMinimumVariancePostRequest | 
apiInstance.portfolioOptimizationMinimumVariancePost(body, (error, data, response) => {
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
 **body** | [**PortfolioOptimizationMinimumVariancePostRequest**](PortfolioOptimizationMinimumVariancePostRequest.md)|  | 

### Return type

[**PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner**](PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## portfolioOptimizationMinimumVarianceSubsetResamplingBasedPost

> PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner portfolioOptimizationMinimumVarianceSubsetResamplingBasedPost(body)

Subset Resampling-Based Minimum Variance Portfolio

Compute the asset weights of the subset resampling-based minimum variance portfolio, following the methodology described in the first and the second references, optionally subject to:   * Minimum and maximum weights constraints * Maximum group weights constraints * Minimum and maximum portfolio exposure constraints  References  * [CSSA, Random Subspace Optimization (RSO)](https://cssanalytics.wordpress.com/2013/10/06/random-subspace-optimization-rso/)  * [Subset Optimization for Asset Allocation,Benjamin J. Gillen](https://www.bengillen.com/uploads/1/2/3/8/123891022/subsets.pdf)  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.PortfolioOptimizationMeanVarianceApi();
let body = {"assets":2,"assetsCovarianceMatrix":[[0.0025,5.0E-4],[5.0E-4,0.01]],"constraints":{"maximumAssetsWeights":[0.4,1],"maximumPortfolioExposure":0.5,"minimumPortfolioExposure":0.5},"subsetPortfolios":1}; // PortfolioOptimizationMinimumVarianceSubsetResamplingBasedPostRequest | 
apiInstance.portfolioOptimizationMinimumVarianceSubsetResamplingBasedPost(body, (error, data, response) => {
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
 **body** | [**PortfolioOptimizationMinimumVarianceSubsetResamplingBasedPostRequest**](PortfolioOptimizationMinimumVarianceSubsetResamplingBasedPostRequest.md)|  | 

### Return type

[**PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner**](PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

