# openapi_client.ReportsApi

All URIs are relative to *https://api.nativeads.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**publisher_reports_daily_get**](ReportsApi.md#publisher_reports_daily_get) | **GET** /publisher/reports/daily | 
[**publisher_reports_website_get**](ReportsApi.md#publisher_reports_website_get) | **GET** /publisher/reports/website | 
[**publisher_reports_widget_get**](ReportsApi.md#publisher_reports_widget_get) | **GET** /publisher/reports/widget | 


# **publisher_reports_daily_get**
> ReportsDailyResponse publisher_reports_daily_get(token, start_date, end_date, limit, page)



Returns publisher statistics split by date

### Example


```python
import openapi_client
from openapi_client.models.reports_daily_response import ReportsDailyResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nativeads.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nativeads.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReportsApi(api_client)
    token = 'token_example' # str | Native Ads Publisher API authentication token
    start_date = '2013-10-20' # date | start date in format YYYY-MM-DD
    end_date = '2013-10-20' # date | end date in format YYYY-MM-DD
    limit = 100 # int | maximum number of results per page (default to 100)
    page = 1 # int | page number (default to 1)

    try:
        api_response = api_instance.publisher_reports_daily_get(token, start_date, end_date, limit, page)
        print("The response of ReportsApi->publisher_reports_daily_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->publisher_reports_daily_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Native Ads Publisher API authentication token | 
 **start_date** | **date**| start date in format YYYY-MM-DD | 
 **end_date** | **date**| end date in format YYYY-MM-DD | 
 **limit** | **int**| maximum number of results per page | [default to 100]
 **page** | **int**| page number | [default to 1]

### Return type

[**ReportsDailyResponse**](ReportsDailyResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | report response |  -  |
**400** | error message |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **publisher_reports_website_get**
> ReportsWebsiteResponse publisher_reports_website_get(token, start_date, end_date, limit, page)



Returns publisher statistics split by website

### Example


```python
import openapi_client
from openapi_client.models.reports_website_response import ReportsWebsiteResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nativeads.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nativeads.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReportsApi(api_client)
    token = 'token_example' # str | Native Ads Publisher API authentication token
    start_date = '2013-10-20' # date | start date in format YYYY-MM-DD
    end_date = '2013-10-20' # date | end date in format YYYY-MM-DD
    limit = 100 # int | maximum number of results per page (default to 100)
    page = 1 # int | page number (default to 1)

    try:
        api_response = api_instance.publisher_reports_website_get(token, start_date, end_date, limit, page)
        print("The response of ReportsApi->publisher_reports_website_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->publisher_reports_website_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Native Ads Publisher API authentication token | 
 **start_date** | **date**| start date in format YYYY-MM-DD | 
 **end_date** | **date**| end date in format YYYY-MM-DD | 
 **limit** | **int**| maximum number of results per page | [default to 100]
 **page** | **int**| page number | [default to 1]

### Return type

[**ReportsWebsiteResponse**](ReportsWebsiteResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | report response |  -  |
**400** | authentication error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **publisher_reports_widget_get**
> ReportsWidgetResponse publisher_reports_widget_get(token, start_date, end_date, limit, page)



Returns publisher statistics split by widget

### Example


```python
import openapi_client
from openapi_client.models.reports_widget_response import ReportsWidgetResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nativeads.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nativeads.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReportsApi(api_client)
    token = 'token_example' # str | Native Ads Publisher API authentication token
    start_date = '2013-10-20' # date | start date in format YYYY-MM-DD
    end_date = '2013-10-20' # date | end date in format YYYY-MM-DD
    limit = 100 # int | maximum number of results per page (default to 100)
    page = 1 # int | page number (default to 1)

    try:
        api_response = api_instance.publisher_reports_widget_get(token, start_date, end_date, limit, page)
        print("The response of ReportsApi->publisher_reports_widget_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->publisher_reports_widget_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Native Ads Publisher API authentication token | 
 **start_date** | **date**| start date in format YYYY-MM-DD | 
 **end_date** | **date**| end date in format YYYY-MM-DD | 
 **limit** | **int**| maximum number of results per page | [default to 100]
 **page** | **int**| page number | [default to 1]

### Return type

[**ReportsWidgetResponse**](ReportsWidgetResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | report response |  -  |
**400** | authentication error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

