# openapi_client.PortfolioAnalysisSharpeRatioApi

All URIs are relative to *https://api.portfoliooptimizer.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**portfolio_analysis_sharpe_ratio_bias_adjusted_post**](PortfolioAnalysisSharpeRatioApi.md#portfolio_analysis_sharpe_ratio_bias_adjusted_post) | **POST** /portfolio/analysis/sharpe-ratio/bias-adjusted | Bias-Adjusted Sharpe Ratio
[**portfolio_analysis_sharpe_ratio_confidence_interval_post**](PortfolioAnalysisSharpeRatioApi.md#portfolio_analysis_sharpe_ratio_confidence_interval_post) | **POST** /portfolio/analysis/sharpe-ratio/confidence-interval | Sharpe Ratio Confidence Interval
[**portfolio_analysis_sharpe_ratio_post**](PortfolioAnalysisSharpeRatioApi.md#portfolio_analysis_sharpe_ratio_post) | **POST** /portfolio/analysis/sharpe-ratio | Sharpe Ratio
[**portfolio_analysis_sharpe_ratio_probabilistic_minimum_track_record_length_post**](PortfolioAnalysisSharpeRatioApi.md#portfolio_analysis_sharpe_ratio_probabilistic_minimum_track_record_length_post) | **POST** /portfolio/analysis/sharpe-ratio/probabilistic/minimum-track-record-length | Minimum Track Record Length
[**portfolio_analysis_sharpe_ratio_probabilistic_post**](PortfolioAnalysisSharpeRatioApi.md#portfolio_analysis_sharpe_ratio_probabilistic_post) | **POST** /portfolio/analysis/sharpe-ratio/probabilistic | Probabilistic Sharpe Ratio


# **portfolio_analysis_sharpe_ratio_bias_adjusted_post**
> PortfolioAnalysisSharpeRatioBiasAdjustedPost200Response portfolio_analysis_sharpe_ratio_bias_adjusted_post(body)

Bias-Adjusted Sharpe Ratio

Compute the Sharpe ratio of one or several portfolio(s), adjusted for small sample bias.  References * [Opdyke, J., Comparing Sharpe ratios: So where are the p-values?. J Asset Manag 8, 308–336 (2007)](https://link.springer.com/article/10.1057/palgrave.jam.2250084) 

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.portfolio_analysis_sharpe_ratio_bias_adjusted_post200_response import PortfolioAnalysisSharpeRatioBiasAdjustedPost200Response
from openapi_client.models.portfolio_analysis_sharpe_ratio_bias_adjusted_post_request import PortfolioAnalysisSharpeRatioBiasAdjustedPostRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.portfoliooptimizer.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.portfoliooptimizer.io/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PortfolioAnalysisSharpeRatioApi(api_client)
    body = {"portfolios":[{"portfolioValues":[100,95,100,90,85,70]}],"riskFreeRate":0} # PortfolioAnalysisSharpeRatioBiasAdjustedPostRequest | 

    try:
        # Bias-Adjusted Sharpe Ratio
        api_response = api_instance.portfolio_analysis_sharpe_ratio_bias_adjusted_post(body)
        print("The response of PortfolioAnalysisSharpeRatioApi->portfolio_analysis_sharpe_ratio_bias_adjusted_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortfolioAnalysisSharpeRatioApi->portfolio_analysis_sharpe_ratio_bias_adjusted_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PortfolioAnalysisSharpeRatioBiasAdjustedPostRequest**](PortfolioAnalysisSharpeRatioBiasAdjustedPostRequest.md)|  | 

### Return type

[**PortfolioAnalysisSharpeRatioBiasAdjustedPost200Response**](PortfolioAnalysisSharpeRatioBiasAdjustedPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **portfolio_analysis_sharpe_ratio_confidence_interval_post**
> PortfolioAnalysisSharpeRatioConfidenceIntervalPost200Response portfolio_analysis_sharpe_ratio_confidence_interval_post(body)

Sharpe Ratio Confidence Interval

Build a confidence interval for the Sharpe ratio of one or several portfolio(s).  References * [Opdyke, J.D., Comparing Sharpe ratios: So where are the p-values?. J Asset Manag 8, 308–336 (2007)](https://link.springer.com/article/10.1057/palgrave.jam.2250084) 

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.portfolio_analysis_sharpe_ratio_confidence_interval_post200_response import PortfolioAnalysisSharpeRatioConfidenceIntervalPost200Response
from openapi_client.models.portfolio_analysis_sharpe_ratio_confidence_interval_post_request import PortfolioAnalysisSharpeRatioConfidenceIntervalPostRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.portfoliooptimizer.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.portfoliooptimizer.io/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PortfolioAnalysisSharpeRatioApi(api_client)
    body = {"confidenceIntervalType":"twoSided","confidenceLevel":0.99,"portfolios":[{"portfolioValues":[100,95,100,90,85,70]}],"riskFreeRate":0} # PortfolioAnalysisSharpeRatioConfidenceIntervalPostRequest | 

    try:
        # Sharpe Ratio Confidence Interval
        api_response = api_instance.portfolio_analysis_sharpe_ratio_confidence_interval_post(body)
        print("The response of PortfolioAnalysisSharpeRatioApi->portfolio_analysis_sharpe_ratio_confidence_interval_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortfolioAnalysisSharpeRatioApi->portfolio_analysis_sharpe_ratio_confidence_interval_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PortfolioAnalysisSharpeRatioConfidenceIntervalPostRequest**](PortfolioAnalysisSharpeRatioConfidenceIntervalPostRequest.md)|  | 

### Return type

[**PortfolioAnalysisSharpeRatioConfidenceIntervalPost200Response**](PortfolioAnalysisSharpeRatioConfidenceIntervalPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **portfolio_analysis_sharpe_ratio_post**
> PortfolioAnalysisSharpeRatioPost200Response portfolio_analysis_sharpe_ratio_post(body)

Sharpe Ratio

Compute the Sharpe ratio of one or several portfolio(s) from either: * Portfolio assets arithmetic returns and assets covariance matrix * Portfolio values  References * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc. 

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.portfolio_analysis_sharpe_ratio_post200_response import PortfolioAnalysisSharpeRatioPost200Response
from openapi_client.models.portfolio_analysis_sharpe_ratio_post_request import PortfolioAnalysisSharpeRatioPostRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.portfoliooptimizer.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.portfoliooptimizer.io/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PortfolioAnalysisSharpeRatioApi(api_client)
    body = {"assets":2,"assetsCovarianceMatrix":[[0.0025,5.0E-4],[5.0E-4,0.01]],"assetsReturns":[0.01,0.05],"portfolios":[{"assetsWeights":[1,0]},{"assetsWeights":[0,1]}],"riskFreeRate":0} # PortfolioAnalysisSharpeRatioPostRequest | 

    try:
        # Sharpe Ratio
        api_response = api_instance.portfolio_analysis_sharpe_ratio_post(body)
        print("The response of PortfolioAnalysisSharpeRatioApi->portfolio_analysis_sharpe_ratio_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortfolioAnalysisSharpeRatioApi->portfolio_analysis_sharpe_ratio_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PortfolioAnalysisSharpeRatioPostRequest**](PortfolioAnalysisSharpeRatioPostRequest.md)|  | 

### Return type

[**PortfolioAnalysisSharpeRatioPost200Response**](PortfolioAnalysisSharpeRatioPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **portfolio_analysis_sharpe_ratio_probabilistic_minimum_track_record_length_post**
> PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost200Response portfolio_analysis_sharpe_ratio_probabilistic_minimum_track_record_length_post(body)

Minimum Track Record Length

Compute the minimum track record length of one or several portfolio(s).  References * [Bailey, David H. and Lopez de Prado, Marcos, The Sharpe Ratio Efficient Frontier (April 1, 2012). Journal of Risk, Vol. 15, No. 2, Winter 2012/13](https://ssrn.com/abstract=1821643) 

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.portfolio_analysis_sharpe_ratio_probabilistic_minimum_track_record_length_post200_response import PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost200Response
from openapi_client.models.portfolio_analysis_sharpe_ratio_probabilistic_minimum_track_record_length_post_request import PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.portfoliooptimizer.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.portfoliooptimizer.io/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PortfolioAnalysisSharpeRatioApi(api_client)
    body = {"benchmarkValues":[100,101,98,85,75,65],"portfolios":[{"portfolioValues":[100,95,100,90,85,70]}],"riskFreeRate":0} # PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostRequest | 

    try:
        # Minimum Track Record Length
        api_response = api_instance.portfolio_analysis_sharpe_ratio_probabilistic_minimum_track_record_length_post(body)
        print("The response of PortfolioAnalysisSharpeRatioApi->portfolio_analysis_sharpe_ratio_probabilistic_minimum_track_record_length_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortfolioAnalysisSharpeRatioApi->portfolio_analysis_sharpe_ratio_probabilistic_minimum_track_record_length_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostRequest**](PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostRequest.md)|  | 

### Return type

[**PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost200Response**](PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **portfolio_analysis_sharpe_ratio_probabilistic_post**
> PortfolioAnalysisSharpeRatioProbabilisticPost200Response portfolio_analysis_sharpe_ratio_probabilistic_post(body)

Probabilistic Sharpe Ratio

Compute the probabilistic Sharpe ratio of one or several portfolio(s).  References * [Opdyke, J.D., Comparing Sharpe ratios: So where are the p-values?. J Asset Manag 8, 308–336 (2007)](https://link.springer.com/article/10.1057/palgrave.jam.2250084) * [Bailey, David H. and Lopez de Prado, Marcos, The Sharpe Ratio Efficient Frontier (April 1, 2012). Journal of Risk, Vol. 15, No. 2, Winter 2012/13](https://ssrn.com/abstract=1821643) 

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.portfolio_analysis_sharpe_ratio_probabilistic_post200_response import PortfolioAnalysisSharpeRatioProbabilisticPost200Response
from openapi_client.models.portfolio_analysis_sharpe_ratio_probabilistic_post_request import PortfolioAnalysisSharpeRatioProbabilisticPostRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.portfoliooptimizer.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.portfoliooptimizer.io/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PortfolioAnalysisSharpeRatioApi(api_client)
    body = {"benchmarkValues":[100,101,98,102,95,90],"portfolios":[{"portfolioValues":[100,95,100,90,85,70]}],"riskFreeRate":0} # PortfolioAnalysisSharpeRatioProbabilisticPostRequest | 

    try:
        # Probabilistic Sharpe Ratio
        api_response = api_instance.portfolio_analysis_sharpe_ratio_probabilistic_post(body)
        print("The response of PortfolioAnalysisSharpeRatioApi->portfolio_analysis_sharpe_ratio_probabilistic_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortfolioAnalysisSharpeRatioApi->portfolio_analysis_sharpe_ratio_probabilistic_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PortfolioAnalysisSharpeRatioProbabilisticPostRequest**](PortfolioAnalysisSharpeRatioProbabilisticPostRequest.md)|  | 

### Return type

[**PortfolioAnalysisSharpeRatioProbabilisticPost200Response**](PortfolioAnalysisSharpeRatioProbabilisticPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

