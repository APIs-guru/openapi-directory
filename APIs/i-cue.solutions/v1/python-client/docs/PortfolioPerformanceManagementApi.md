# openapi_client.PortfolioPerformanceManagementApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**portfolio_abc_post**](PortfolioPerformanceManagementApi.md#portfolio_abc_post) | **POST** /portfolio/abc | ABC Analysis
[**portfolio_file_to_portfolio_post**](PortfolioPerformanceManagementApi.md#portfolio_file_to_portfolio_post) | **POST** /portfolio/file-to-portfolio | ABCxyz Analysis
[**portfolio_forecast_performance_rewind_post**](PortfolioPerformanceManagementApi.md#portfolio_forecast_performance_rewind_post) | **POST** /portfolio/forecast-performance-rewind | Planning level rewind to calculate and measure performance potential (internal versus iCUE).
[**portfolio_post**](PortfolioPerformanceManagementApi.md#portfolio_post) | **POST** /portfolio | ABCxyz Analysis
[**portfolio_xyz_post**](PortfolioPerformanceManagementApi.md#portfolio_xyz_post) | **POST** /portfolio/xyz | xyz Analysis


# **portfolio_abc_post**
> List[PortfolioAbcModel] portfolio_abc_post(token=token, portfolio_request=portfolio_request)

ABC Analysis

Calculate and retrieve results of ABC (pareto analysis) per timeseries and planning level.

### Example


```python
import openapi_client
from openapi_client.models.portfolio_abc_model import PortfolioAbcModel
from openapi_client.models.portfolio_request import PortfolioRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PortfolioPerformanceManagementApi(api_client)
    token = 'token_example' # str | User Authentication Token (optional)
    portfolio_request = openapi_client.PortfolioRequest() # PortfolioRequest |  (optional)

    try:
        # ABC Analysis
        api_response = api_instance.portfolio_abc_post(token=token, portfolio_request=portfolio_request)
        print("The response of PortfolioPerformanceManagementApi->portfolio_abc_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortfolioPerformanceManagementApi->portfolio_abc_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| User Authentication Token | [optional] 
 **portfolio_request** | [**PortfolioRequest**](PortfolioRequest.md)|  | [optional] 

### Return type

[**List[PortfolioAbcModel]**](PortfolioAbcModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/*+json, application/json, text/json
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **portfolio_file_to_portfolio_post**
> portfolio_file_to_portfolio_post(file, token=token)

ABCxyz Analysis

Calculate and retrieve results of ABC (pareto analysis) and xyz (Coefficient of variation) per timeseries and planning level. This analysis is a powerful means to estbalish a proper planning cadence, best accuracy messures and optimal hyperparameters for the organization. It provides a balanced and actionable overview of the entire product portfolio.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PortfolioPerformanceManagementApi(api_client)
    file = None # bytearray | 
    token = 'token_example' # str | User Authentication Token (optional)

    try:
        # ABCxyz Analysis
        api_instance.portfolio_file_to_portfolio_post(file, token=token)
    except Exception as e:
        print("Exception when calling PortfolioPerformanceManagementApi->portfolio_file_to_portfolio_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **bytearray**|  | 
 **token** | **str**| User Authentication Token | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **portfolio_forecast_performance_rewind_post**
> RewindResponse portfolio_forecast_performance_rewind_post(token=token, forecast_performance_request=forecast_performance_request)

Planning level rewind to calculate and measure performance potential (internal versus iCUE).

Planning level rewind to calculate and measure performance potential (internal versus iCUE).

### Example


```python
import openapi_client
from openapi_client.models.forecast_performance_request import ForecastPerformanceRequest
from openapi_client.models.rewind_response import RewindResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PortfolioPerformanceManagementApi(api_client)
    token = 'token_example' # str | User Authentication Token (optional)
    forecast_performance_request = openapi_client.ForecastPerformanceRequest() # ForecastPerformanceRequest |  (optional)

    try:
        # Planning level rewind to calculate and measure performance potential (internal versus iCUE).
        api_response = api_instance.portfolio_forecast_performance_rewind_post(token=token, forecast_performance_request=forecast_performance_request)
        print("The response of PortfolioPerformanceManagementApi->portfolio_forecast_performance_rewind_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortfolioPerformanceManagementApi->portfolio_forecast_performance_rewind_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| User Authentication Token | [optional] 
 **forecast_performance_request** | [**ForecastPerformanceRequest**](ForecastPerformanceRequest.md)|  | [optional] 

### Return type

[**RewindResponse**](RewindResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/*+json, application/json, text/json
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **portfolio_post**
> List[PortfolioModel] portfolio_post(token=token, portfolio_request=portfolio_request)

ABCxyz Analysis

Calculate and retrieve results of ABC (pareto analysis) and xyz (Coefficient of variation) per timeseries and planning level. This analysis is a powerful means to estbalish a proper planning cadence, best accuracy messures and optimal hyperparameters for the organization. It provides a balanced and actionable overview of the entire product portfolio.

### Example


```python
import openapi_client
from openapi_client.models.portfolio_model import PortfolioModel
from openapi_client.models.portfolio_request import PortfolioRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PortfolioPerformanceManagementApi(api_client)
    token = 'token_example' # str | User Authentication Token (optional)
    portfolio_request = openapi_client.PortfolioRequest() # PortfolioRequest |  (optional)

    try:
        # ABCxyz Analysis
        api_response = api_instance.portfolio_post(token=token, portfolio_request=portfolio_request)
        print("The response of PortfolioPerformanceManagementApi->portfolio_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortfolioPerformanceManagementApi->portfolio_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| User Authentication Token | [optional] 
 **portfolio_request** | [**PortfolioRequest**](PortfolioRequest.md)|  | [optional] 

### Return type

[**List[PortfolioModel]**](PortfolioModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/*+json, application/json, text/json
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **portfolio_xyz_post**
> List[PortfolioXyzModel] portfolio_xyz_post(token=token, portfolio_request=portfolio_request)

xyz Analysis

Calculate and retrieve results of xyz (Coefficient of variation) per timeseries and planning level.

### Example


```python
import openapi_client
from openapi_client.models.portfolio_request import PortfolioRequest
from openapi_client.models.portfolio_xyz_model import PortfolioXyzModel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PortfolioPerformanceManagementApi(api_client)
    token = 'token_example' # str | User Authentication Token (optional)
    portfolio_request = openapi_client.PortfolioRequest() # PortfolioRequest |  (optional)

    try:
        # xyz Analysis
        api_response = api_instance.portfolio_xyz_post(token=token, portfolio_request=portfolio_request)
        print("The response of PortfolioPerformanceManagementApi->portfolio_xyz_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortfolioPerformanceManagementApi->portfolio_xyz_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| User Authentication Token | [optional] 
 **portfolio_request** | [**PortfolioRequest**](PortfolioRequest.md)|  | [optional] 

### Return type

[**List[PortfolioXyzModel]**](PortfolioXyzModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/*+json, application/json, text/json
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

