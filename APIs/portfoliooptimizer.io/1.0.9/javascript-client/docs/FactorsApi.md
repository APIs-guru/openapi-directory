# PortfolioOptimizer.FactorsApi

All URIs are relative to *https://api.portfoliooptimizer.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**factorsResidualizationPost**](FactorsApi.md#factorsResidualizationPost) | **POST** /factors/residualization | Residualization



## factorsResidualizationPost

> FactorsResidualizationPost200Response factorsResidualizationPost(body)

Residualization

Compute the residuals of a factor against a set of factors, using a returns-based linear regression analysis.  References * [Factor Research, Factor Exposure Analysis: Exploring Residualization](https://insights.factorresearch.com/research-factor-exposure-analysis-exploring-residualization/) * [Catalina B. Garcia, Román Salmeron, Claudia Garcia &amp; Jose Garcia (2019): Residualization: justification, properties and application, Journal of Applied Statistics](https://doi.org/10.1080/02664763.2019.1701638) 

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.FactorsApi();
let body = {"factors":[{"factorReturns":[0.01,0.02,-0.01]},{"factorReturns":[0.025,0.005,-0.02]}],"residualizedFactor":1}; // FactorsResidualizationPostRequest | 
apiInstance.factorsResidualizationPost(body, (error, data, response) => {
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
 **body** | [**FactorsResidualizationPostRequest**](FactorsResidualizationPostRequest.md)|  | 

### Return type

[**FactorsResidualizationPost200Response**](FactorsResidualizationPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

