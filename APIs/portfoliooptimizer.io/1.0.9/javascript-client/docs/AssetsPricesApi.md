# PortfolioOptimizer.AssetsPricesApi

All URIs are relative to *https://api.portfoliooptimizer.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assetsPricesAdjustedForwardPost**](AssetsPricesApi.md#assetsPricesAdjustedForwardPost) | **POST** /assets/prices/adjusted/forward | Forward-Adjusted Prices
[**assetsPricesAdjustedPost**](AssetsPricesApi.md#assetsPricesAdjustedPost) | **POST** /assets/prices/adjusted | Adjusted Prices



## assetsPricesAdjustedForwardPost

> AssetsPricesAdjustedPost200Response assetsPricesAdjustedForwardPost(body)

Forward-Adjusted Prices

Compute the forward-adjusted prices of one or several asset(s) for one or several date(s) from: * Unadjusted prices * Capital distributions, like stock dividends * Splits, like stock splits  The adjustment base date is chosen to be the first date for which unadjusted prices are available, which implies that: * The price on the first date for which unadjusted prices are available is left unadjusted * The price on any other date is adjusted based on the capital distributions and the splits which occurred between this date and the first date for which unadjusted prices are available  References * [Center for Research in Security Prices](https://www.crsp.org/products/documentation/crsp-calculations) 

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.AssetsPricesApi();
let body = {"assets":[{"assetPrices":[{"close":2213.4,"date":"2020-08-28"},{"close":498.32,"date":"2020-08-31"},{"close":475.05,"date":"2020-09-01"}],"assetSplits":[{"date":"2020-08-31","factor":5}]}]}; // AssetsPricesAdjustedPostRequest | 
apiInstance.assetsPricesAdjustedForwardPost(body, (error, data, response) => {
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
 **body** | [**AssetsPricesAdjustedPostRequest**](AssetsPricesAdjustedPostRequest.md)|  | 

### Return type

[**AssetsPricesAdjustedPost200Response**](AssetsPricesAdjustedPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## assetsPricesAdjustedPost

> AssetsPricesAdjustedPost200Response assetsPricesAdjustedPost(body)

Adjusted Prices

Compute the backward-adjusted prices of one or several asset(s) for one or several date(s) from: * Unadjusted prices * Capital distributions, like stock dividends * Splits, like stock splits  The adjustment base date is chosen to be the last date for which unadjusted prices are available, which implies that: * The price on the last date for which unadjusted prices are available is left unadjusted * The price on any other date is adjusted based on the capital distributions and the splits which occurred between this date and the last date for which unadjusted prices are available  References * [Center for Research in Security Prices](https://www.crsp.org/products/documentation/crsp-calculations) 

### Example

```javascript
import PortfolioOptimizer from 'portfolio_optimizer';
let defaultClient = PortfolioOptimizer.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new PortfolioOptimizer.AssetsPricesApi();
let body = {"assets":[{"assetPrices":[{"close":2213.4,"date":"2020-08-28"},{"close":498.32,"date":"2020-08-31"},{"close":475.05,"date":"2020-09-01"}],"assetSplits":[{"date":"2020-08-31","factor":5}]}]}; // AssetsPricesAdjustedPostRequest | 
apiInstance.assetsPricesAdjustedPost(body, (error, data, response) => {
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
 **body** | [**AssetsPricesAdjustedPostRequest**](AssetsPricesAdjustedPostRequest.md)|  | 

### Return type

[**AssetsPricesAdjustedPost200Response**](AssetsPricesAdjustedPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

