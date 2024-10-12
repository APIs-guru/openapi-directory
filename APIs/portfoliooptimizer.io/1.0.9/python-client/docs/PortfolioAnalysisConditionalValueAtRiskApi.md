# openapi_client.PortfolioAnalysisConditionalValueAtRiskApi

All URIs are relative to *https://api.portfoliooptimizer.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**portfolio_analysis_value_at_risk_conditional_cornish_fisher_corrected_post**](PortfolioAnalysisConditionalValueAtRiskApi.md#portfolio_analysis_value_at_risk_conditional_cornish_fisher_corrected_post) | **POST** /portfolio/analysis/value-at-risk/conditional/cornish-fisher/corrected | Corrected Cornish-Fisher Conditional Value At Risk
[**portfolio_analysis_value_at_risk_conditional_cornish_fisher_post**](PortfolioAnalysisConditionalValueAtRiskApi.md#portfolio_analysis_value_at_risk_conditional_cornish_fisher_post) | **POST** /portfolio/analysis/value-at-risk/conditional/cornish-fisher | Cornish-Fisher Conditional Value At Risk
[**portfolio_analysis_value_at_risk_conditional_gaussian_post**](PortfolioAnalysisConditionalValueAtRiskApi.md#portfolio_analysis_value_at_risk_conditional_gaussian_post) | **POST** /portfolio/analysis/value-at-risk/conditional/gaussian | Gaussian Conditional Value At Risk
[**portfolio_analysis_value_at_risk_conditional_historical_post**](PortfolioAnalysisConditionalValueAtRiskApi.md#portfolio_analysis_value_at_risk_conditional_historical_post) | **POST** /portfolio/analysis/value-at-risk/conditional/historical | Historical Conditional Value At Risk


# **portfolio_analysis_value_at_risk_conditional_cornish_fisher_corrected_post**
> PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200Response portfolio_analysis_value_at_risk_conditional_cornish_fisher_corrected_post(body)

Corrected Cornish-Fisher Conditional Value At Risk

Compute the corrected Cornish-Fisher conditional value at risk of one or several portfolio(s) from portfolio values.  References * [Maillard, Didier, A User’s Guide to the Cornish Fisher Expansion](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1997178) * [Lamb, John D., Maura E. Monville, and Kai-Hong Tee. Making Cornish–fisher Fit for Risk Measurement, Journal of Risk, Volume 21, Number 5, p. 53-81](http://doi.org/10.21314/JOR.2019.408) 

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.portfolio_analysis_value_at_risk_conditional_cornish_fisher_post200_response import PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200Response
from openapi_client.models.portfolio_analysis_value_at_risk_conditional_cornish_fisher_post_request import PortfolioAnalysisValueAtRiskConditionalCornishFisherPostRequest
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
    api_instance = openapi_client.PortfolioAnalysisConditionalValueAtRiskApi(api_client)
    body = {"portfolios":[{"portfolioValues":[100,95,100,90,85,70]}]} # PortfolioAnalysisValueAtRiskConditionalCornishFisherPostRequest | 

    try:
        # Corrected Cornish-Fisher Conditional Value At Risk
        api_response = api_instance.portfolio_analysis_value_at_risk_conditional_cornish_fisher_corrected_post(body)
        print("The response of PortfolioAnalysisConditionalValueAtRiskApi->portfolio_analysis_value_at_risk_conditional_cornish_fisher_corrected_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortfolioAnalysisConditionalValueAtRiskApi->portfolio_analysis_value_at_risk_conditional_cornish_fisher_corrected_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PortfolioAnalysisValueAtRiskConditionalCornishFisherPostRequest**](PortfolioAnalysisValueAtRiskConditionalCornishFisherPostRequest.md)|  | 

### Return type

[**PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200Response**](PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200Response.md)

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

# **portfolio_analysis_value_at_risk_conditional_cornish_fisher_post**
> PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200Response portfolio_analysis_value_at_risk_conditional_cornish_fisher_post(body)

Cornish-Fisher Conditional Value At Risk

Compute the Cornish-Fisher conditional value at risk of one or several portfolio(s) from portfolio values.  References * [Boudt, Kris and Peterson, Brian G. and Croux, Christophe, Estimation and Decomposition of Downside Risk for Portfolios with Non-Normal Returns (October 31, 2007). Journal of Risk, Vol. 11, No. 2, pp. 79-103, 2008](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1024151). * [Maillard, Didier, A User’s Guide to the Cornish Fisher Expansion](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1997178) * [Lamb, John D., Maura E. Monville, and Kai-Hong Tee. Making Cornish–fisher Fit for Risk Measurement, Journal of Risk, Volume 21, Number 5, p. 53-81](http://doi.org/10.21314/JOR.2019.408) 

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.portfolio_analysis_value_at_risk_conditional_cornish_fisher_post200_response import PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200Response
from openapi_client.models.portfolio_analysis_value_at_risk_conditional_cornish_fisher_post_request import PortfolioAnalysisValueAtRiskConditionalCornishFisherPostRequest
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
    api_instance = openapi_client.PortfolioAnalysisConditionalValueAtRiskApi(api_client)
    body = {"portfolios":[{"portfolioValues":[100,95,100,90,85,70]}]} # PortfolioAnalysisValueAtRiskConditionalCornishFisherPostRequest | 

    try:
        # Cornish-Fisher Conditional Value At Risk
        api_response = api_instance.portfolio_analysis_value_at_risk_conditional_cornish_fisher_post(body)
        print("The response of PortfolioAnalysisConditionalValueAtRiskApi->portfolio_analysis_value_at_risk_conditional_cornish_fisher_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortfolioAnalysisConditionalValueAtRiskApi->portfolio_analysis_value_at_risk_conditional_cornish_fisher_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PortfolioAnalysisValueAtRiskConditionalCornishFisherPostRequest**](PortfolioAnalysisValueAtRiskConditionalCornishFisherPostRequest.md)|  | 

### Return type

[**PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200Response**](PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200Response.md)

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

# **portfolio_analysis_value_at_risk_conditional_gaussian_post**
> PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200Response portfolio_analysis_value_at_risk_conditional_gaussian_post(body)

Gaussian Conditional Value At Risk

Compute the Gaussian conditional value at risk of one or several portfolio(s) from portfolio values.  References * [Boudt, Kris and Peterson, Brian G. and Croux, Christophe, Estimation and Decomposition of Downside Risk for Portfolios with Non-Normal Returns (October 31, 2007). Journal of Risk, Vol. 11, No. 2, pp. 79-103, 2008](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1024151). 

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.portfolio_analysis_value_at_risk_conditional_cornish_fisher_post200_response import PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200Response
from openapi_client.models.portfolio_analysis_value_at_risk_conditional_gaussian_post_request import PortfolioAnalysisValueAtRiskConditionalGaussianPostRequest
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
    api_instance = openapi_client.PortfolioAnalysisConditionalValueAtRiskApi(api_client)
    body = {"portfolios":[{"portfolioValues":[100,95,100,90,85,70]}]} # PortfolioAnalysisValueAtRiskConditionalGaussianPostRequest | 

    try:
        # Gaussian Conditional Value At Risk
        api_response = api_instance.portfolio_analysis_value_at_risk_conditional_gaussian_post(body)
        print("The response of PortfolioAnalysisConditionalValueAtRiskApi->portfolio_analysis_value_at_risk_conditional_gaussian_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortfolioAnalysisConditionalValueAtRiskApi->portfolio_analysis_value_at_risk_conditional_gaussian_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PortfolioAnalysisValueAtRiskConditionalGaussianPostRequest**](PortfolioAnalysisValueAtRiskConditionalGaussianPostRequest.md)|  | 

### Return type

[**PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200Response**](PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200Response.md)

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

# **portfolio_analysis_value_at_risk_conditional_historical_post**
> PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200Response portfolio_analysis_value_at_risk_conditional_historical_post(body)

Historical Conditional Value At Risk

Compute the historical conditional value at risk of one or several portfolio(s) from portfolio values.  References * [Wikipedia, Value at risk](https://en.wikipedia.org/wiki/Value_at_risk) * [Acerbi, C. and Tasche, D. (2002), Expected Shortfall: A Natural Coherent Alternative to Value at Risk. Economic Notes, 31: 379-388](https://onlinelibrary.wiley.com/doi/abs/10.1111/1468-0300.00091) 

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.portfolio_analysis_value_at_risk_conditional_cornish_fisher_post200_response import PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200Response
from openapi_client.models.portfolio_analysis_value_at_risk_conditional_historical_post_request import PortfolioAnalysisValueAtRiskConditionalHistoricalPostRequest
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
    api_instance = openapi_client.PortfolioAnalysisConditionalValueAtRiskApi(api_client)
    body = {"portfolios":[{"portfolioValues":[100,95,100,90,85,70]}]} # PortfolioAnalysisValueAtRiskConditionalHistoricalPostRequest | 

    try:
        # Historical Conditional Value At Risk
        api_response = api_instance.portfolio_analysis_value_at_risk_conditional_historical_post(body)
        print("The response of PortfolioAnalysisConditionalValueAtRiskApi->portfolio_analysis_value_at_risk_conditional_historical_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortfolioAnalysisConditionalValueAtRiskApi->portfolio_analysis_value_at_risk_conditional_historical_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PortfolioAnalysisValueAtRiskConditionalHistoricalPostRequest**](PortfolioAnalysisValueAtRiskConditionalHistoricalPostRequest.md)|  | 

### Return type

[**PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200Response**](PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200Response.md)

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

