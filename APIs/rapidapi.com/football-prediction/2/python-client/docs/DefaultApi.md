# openapi_client.DefaultApi

All URIs are relative to *https://football-prediction-api.p.rapidapi.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_v2_list_federations_get**](DefaultApi.md#api_v2_list_federations_get) | **GET** /api/v2/list-federations | 
[**api_v2_list_markets_get**](DefaultApi.md#api_v2_list_markets_get) | **GET** /api/v2/list-markets | 
[**api_v2_performance_stats_get**](DefaultApi.md#api_v2_performance_stats_get) | **GET** /api/v2/performance-stats | 
[**api_v2_predictions_get**](DefaultApi.md#api_v2_predictions_get) | **GET** /api/v2/predictions | 
[**api_v2_predictions_id_get**](DefaultApi.md#api_v2_predictions_id_get) | **GET** /api/v2/predictions/{id} | 


# **api_v2_list_federations_get**
> ApiV2ListFederationsGet200Response api_v2_list_federations_get(x_rapid_api_key=x_rapid_api_key)



Returns an array of all the available federations.

### Example


```python
import openapi_client
from openapi_client.models.api_v2_list_federations_get200_response import ApiV2ListFederationsGet200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://football-prediction-api.p.rapidapi.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://football-prediction-api.p.rapidapi.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    x_rapid_api_key = 'x_rapid_api_key_example' # str | Your key obtained from https://boggio-analytics.com/fp-api/ (optional)

    try:
        api_response = api_instance.api_v2_list_federations_get(x_rapid_api_key=x_rapid_api_key)
        print("The response of DefaultApi->api_v2_list_federations_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v2_list_federations_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_rapid_api_key** | **str**| Your key obtained from https://boggio-analytics.com/fp-api/ | [optional] 

### Return type

[**ApiV2ListFederationsGet200Response**](ApiV2ListFederationsGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Static response, shows available federations. |  -  |
**404** | Bad request, check response for detailed errors. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v2_list_markets_get**
> ApiV2ListMarketsGet200Response api_v2_list_markets_get(x_rapid_api_key=x_rapid_api_key)



Returns an array of all the supported prediction markets

### Example


```python
import openapi_client
from openapi_client.models.api_v2_list_markets_get200_response import ApiV2ListMarketsGet200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://football-prediction-api.p.rapidapi.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://football-prediction-api.p.rapidapi.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    x_rapid_api_key = 'x_rapid_api_key_example' # str | Your key obtained from https://boggio-analytics.com/fp-api/ (optional)

    try:
        api_response = api_instance.api_v2_list_markets_get(x_rapid_api_key=x_rapid_api_key)
        print("The response of DefaultApi->api_v2_list_markets_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v2_list_markets_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_rapid_api_key** | **str**| Your key obtained from https://boggio-analytics.com/fp-api/ | [optional] 

### Return type

[**ApiV2ListMarketsGet200Response**](ApiV2ListMarketsGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Static response, shows available markets for the current subscription and all available markets in general. |  -  |
**404** | Bad request, check response for detailed errors. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v2_performance_stats_get**
> ApiV2PerformanceStatsGet200Response api_v2_performance_stats_get(x_rapid_api_key=x_rapid_api_key)



Returns predictions accuracy in the last 1, 7, 14, 30 days.

### Example


```python
import openapi_client
from openapi_client.models.api_v2_performance_stats_get200_response import ApiV2PerformanceStatsGet200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://football-prediction-api.p.rapidapi.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://football-prediction-api.p.rapidapi.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    x_rapid_api_key = 'x_rapid_api_key_example' # str | Your key obtained from https://boggio-analytics.com/fp-api/ (optional)

    try:
        api_response = api_instance.api_v2_performance_stats_get(x_rapid_api_key=x_rapid_api_key)
        print("The response of DefaultApi->api_v2_performance_stats_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v2_performance_stats_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_rapid_api_key** | **str**| Your key obtained from https://boggio-analytics.com/fp-api/ | [optional] 

### Return type

[**ApiV2PerformanceStatsGet200Response**](ApiV2PerformanceStatsGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Good request, returns object that contains accuracy and other datails about predictions. |  -  |
**404** | Bad request, check response for detailed errors. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v2_predictions_get**
> api_v2_predictions_get(x_rapid_api_key=x_rapid_api_key)



This endpoint returns by default the next non-expired football predictions. URL parameters can be specified to show specific date in the past or future or to filter by federation and prediction market name.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://football-prediction-api.p.rapidapi.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://football-prediction-api.p.rapidapi.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    x_rapid_api_key = 'x_rapid_api_key_example' # str | Your key obtained from https://boggio-analytics.com/fp-api/ (optional)

    try:
        api_instance.api_v2_predictions_get(x_rapid_api_key=x_rapid_api_key)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v2_predictions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_rapid_api_key** | **str**| Your key obtained from https://boggio-analytics.com/fp-api/ | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Good request, returns object that contains data array with all predictions. |  -  |
**404** | Bad request, check response for detailed errors. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v2_predictions_id_get**
> ApiV2PredictionsIdGet200Response api_v2_predictions_id_get(id)



Returns all predictions available for a match id.

### Example


```python
import openapi_client
from openapi_client.models.api_v2_predictions_id_get200_response import ApiV2PredictionsIdGet200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://football-prediction-api.p.rapidapi.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://football-prediction-api.p.rapidapi.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    id = 56 # int | ID of match

    try:
        api_response = api_instance.api_v2_predictions_id_get(id)
        print("The response of DefaultApi->api_v2_predictions_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v2_predictions_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| ID of match | 

### Return type

[**ApiV2PredictionsIdGet200Response**](ApiV2PredictionsIdGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Good request, returns object that contains all the predictions for a certain event. |  -  |
**404** | Bad request, check response for detailed errors. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

