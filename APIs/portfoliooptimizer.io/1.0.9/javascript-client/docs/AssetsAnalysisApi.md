# PortfolioOptimizer.AssetsAnalysisApi

All URIs are relative to *https://api.portfoliooptimizer.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assetsAnalysisAbsorptionRatioPost**](AssetsAnalysisApi.md#assetsAnalysisAbsorptionRatioPost) | **POST** /assets/analysis/absorption-ratio | Absorption Ratio
[**assetsAnalysisTurbulenceIndexPost**](AssetsAnalysisApi.md#assetsAnalysisTurbulenceIndexPost) | **POST** /assets/analysis/turbulence-index | Turbulence Index



## assetsAnalysisAbsorptionRatioPost

> AssetsAnalysisAbsorptionRatioPost200Response assetsAnalysisAbsorptionRatioPost(body)

Absorption Ratio

Compute the absorption ratio associated to a universe of assets.  References * [Mark Kritzman, Yuanzhen Li, Sebastien Page and Roberto Rigobon, Principal Components as a Measure of Systemic Risk, The Journal of Portfolio Management Summer 2011, 37 (4) 112-126](https://jpm.pm-research.com/content/37/4/112) 

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.AssetsAnalysisApi();
let body = {"assets":2,"assetsCovarianceMatrix":[[9,1],[1,1]]}; // AssetsAnalysisAbsorptionRatioPostRequest | 
apiInstance.assetsAnalysisAbsorptionRatioPost(body, (error, data, response) => {
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
 **body** | [**AssetsAnalysisAbsorptionRatioPostRequest**](AssetsAnalysisAbsorptionRatioPostRequest.md)|  | 

### Return type

[**AssetsAnalysisAbsorptionRatioPost200Response**](AssetsAnalysisAbsorptionRatioPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## assetsAnalysisTurbulenceIndexPost

> AssetsAnalysisTurbulenceIndexPost200Response assetsAnalysisTurbulenceIndexPost(body)

Turbulence Index

Compute the turbulence index associated to a universe of assets.  References * [M. Kritzman, Y. Li, Skulls, Financial Turbulence, and Risk Management,Financial Analysts Journal, Volume 66, Number 5, Pages 30-41, Year 2010](https://www.tandfonline.com/doi/abs/10.2469/faj.v66.n5.3) * [Kinlaw, W., Turkington, D. Correlation surprise. J Asset Manag 14, 385–399 (2013)](https://link.springer.com/article/10.1057/jam.2013.27) 

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.AssetsAnalysisApi();
let body = {"assets":1,"assetsAverageReturns":[0.5],"assetsCovarianceMatrix":[[1]],"assetsReturns":[1]}; // AssetsAnalysisTurbulenceIndexPostRequest | 
apiInstance.assetsAnalysisTurbulenceIndexPost(body, (error, data, response) => {
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
 **body** | [**AssetsAnalysisTurbulenceIndexPostRequest**](AssetsAnalysisTurbulenceIndexPostRequest.md)|  | 

### Return type

[**AssetsAnalysisTurbulenceIndexPost200Response**](AssetsAnalysisTurbulenceIndexPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

