# openapi_client.21UserStatisticsOptionalApi

All URIs are relative to *https://api.telematicssdk.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**user_statistice_daily_value_v1_statistics_individual_daily_0**](21UserStatisticsOptionalApi.md#user_statistice_daily_value_v1_statistics_individual_daily_0) | **GET** /statistics/v1/Statistics/individual/daily/ | User statistice - Daily value - v1/Statistics/individual/daily
[**user_statistics_accumulated_value_v1_statistics_individual_0**](21UserStatisticsOptionalApi.md#user_statistics_accumulated_value_v1_statistics_individual_0) | **GET** /statistics/v1/Statistics/individual/ | User statistics - Accumulated value - /v1/Statistics/individual


# **user_statistice_daily_value_v1_statistics_individual_daily_0**
> UserStatisticeDailyValueV1StatisticsIndividualDaily200Response user_statistice_daily_value_v1_statistics_individual_daily_0(start_date=start_date, end_date=end_date)

User statistice - Daily value - v1/Statistics/individual/daily

User statistice - Daily value - v1/Statistics/individual/daily

### Example


```python
import openapi_client
from openapi_client.models.user_statistice_daily_value_v1_statistics_individual_daily200_response import UserStatisticeDailyValueV1StatisticsIndividualDaily200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.telematicssdk.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.telematicssdk.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.21UserStatisticsOptionalApi(api_client)
    start_date = '2021-03-30' # str |  (optional)
    end_date = '2021-03-30' # str |  (optional)

    try:
        # User statistice - Daily value - v1/Statistics/individual/daily
        api_response = api_instance.user_statistice_daily_value_v1_statistics_individual_daily_0(start_date=start_date, end_date=end_date)
        print("The response of 21UserStatisticsOptionalApi->user_statistice_daily_value_v1_statistics_individual_daily_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling 21UserStatisticsOptionalApi->user_statistice_daily_value_v1_statistics_individual_daily_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start_date** | **str**|  | [optional] 
 **end_date** | **str**|  | [optional] 

### Return type

[**UserStatisticeDailyValueV1StatisticsIndividualDaily200Response**](UserStatisticeDailyValueV1StatisticsIndividualDaily200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  * Content-Length -  <br>  * Date -  <br>  * Server -  <br>  * Strict-Transport-Security -  <br>  * X-Powered-By -  <br>  * X-StackifyID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_statistics_accumulated_value_v1_statistics_individual_0**
> UserStatisticsAccumulatedValueV1StatisticsIndividual200Response user_statistics_accumulated_value_v1_statistics_individual_0(start_date=start_date, end_date=end_date)

User statistics - Accumulated value - /v1/Statistics/individual

User statistics - Accumulated value - /v1/Statistics/individual

### Example


```python
import openapi_client
from openapi_client.models.user_statistics_accumulated_value_v1_statistics_individual200_response import UserStatisticsAccumulatedValueV1StatisticsIndividual200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.telematicssdk.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.telematicssdk.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.21UserStatisticsOptionalApi(api_client)
    start_date = '2021-01-01' # str |  (optional)
    end_date = '2021-01-30' # str |  (optional)

    try:
        # User statistics - Accumulated value - /v1/Statistics/individual
        api_response = api_instance.user_statistics_accumulated_value_v1_statistics_individual_0(start_date=start_date, end_date=end_date)
        print("The response of 21UserStatisticsOptionalApi->user_statistics_accumulated_value_v1_statistics_individual_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling 21UserStatisticsOptionalApi->user_statistics_accumulated_value_v1_statistics_individual_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start_date** | **str**|  | [optional] 
 **end_date** | **str**|  | [optional] 

### Return type

[**UserStatisticsAccumulatedValueV1StatisticsIndividual200Response**](UserStatisticsAccumulatedValueV1StatisticsIndividual200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  * Content-Length -  <br>  * Date -  <br>  * Server -  <br>  * Strict-Transport-Security -  <br>  * X-Powered-By -  <br>  * X-StackifyID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

