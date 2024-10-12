# openapi_client.CalendarTelevisionShowSchedulesApi

All URIs are relative to *https://api.hillbillysoftware.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**calendar_by_show_name_get**](CalendarTelevisionShowSchedulesApi.md#calendar_by_show_name_get) | **GET** /Calendar/Show/{AccessToken}/{Name}/{Year} | Will return show schedule for queried showname and year
[**calendar_countries_get**](CalendarTelevisionShowSchedulesApi.md#calendar_countries_get) | **GET** /Calendar/Countries/{AccessToken} | Returns list of available countries in calendar database
[**calendar_networks_get**](CalendarTelevisionShowSchedulesApi.md#calendar_networks_get) | **GET** /Calendar/Networks/{AccessToken} | Gets a list of available networks
[**calendar_show_seasons_get**](CalendarTelevisionShowSchedulesApi.md#calendar_show_seasons_get) | **GET** /Calendar/Seasons/{AccessToken}/{Name} | Returns list of seasons available in the calendar for show
[**calendar_today_get**](CalendarTelevisionShowSchedulesApi.md#calendar_today_get) | **GET** /Calendar/Today/{AccessToken} | Will return show schedule for today for all countries in database
[**calendarby_showname_season_get**](CalendarTelevisionShowSchedulesApi.md#calendarby_showname_season_get) | **GET** /Calendar/Show/Season/{AccessToken}/{Name}/{Season} | Get Calendar by showname and season
[**schedule_by_date_get**](CalendarTelevisionShowSchedulesApi.md#schedule_by_date_get) | **GET** /Calendar/ByDate/{AccessToken}/{Date}/{Country} | Gets TV Schedule for selected data


# **calendar_by_show_name_get**
> List[Schedule] calendar_by_show_name_get(access_token, name, year)

Will return show schedule for queried showname and year

### Example


```python
import openapi_client
from openapi_client.models.schedule import Schedule
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.hillbillysoftware.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.hillbillysoftware.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CalendarTelevisionShowSchedulesApi(api_client)
    access_token = 'access_token_example' # str | 
    name = 'name_example' # str | 
    year = 'year_example' # str | 

    try:
        # Will return show schedule for queried showname and year
        api_response = api_instance.calendar_by_show_name_get(access_token, name, year)
        print("The response of CalendarTelevisionShowSchedulesApi->calendar_by_show_name_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CalendarTelevisionShowSchedulesApi->calendar_by_show_name_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **access_token** | **str**|  | 
 **name** | **str**|  | 
 **year** | **str**|  | 

### Return type

[**List[Schedule]**](Schedule.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of schedules/calendar entries |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **calendar_countries_get**
> List[Country] calendar_countries_get(access_token)

Returns list of available countries in calendar database

### Example


```python
import openapi_client
from openapi_client.models.country import Country
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.hillbillysoftware.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.hillbillysoftware.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CalendarTelevisionShowSchedulesApi(api_client)
    access_token = 'access_token_example' # str | 

    try:
        # Returns list of available countries in calendar database
        api_response = api_instance.calendar_countries_get(access_token)
        print("The response of CalendarTelevisionShowSchedulesApi->calendar_countries_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CalendarTelevisionShowSchedulesApi->calendar_countries_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **access_token** | **str**|  | 

### Return type

[**List[Country]**](Country.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of countries |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **calendar_networks_get**
> List[Networks] calendar_networks_get(access_token)

Gets a list of available networks

### Example


```python
import openapi_client
from openapi_client.models.networks import Networks
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.hillbillysoftware.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.hillbillysoftware.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CalendarTelevisionShowSchedulesApi(api_client)
    access_token = 'access_token_example' # str | 

    try:
        # Gets a list of available networks
        api_response = api_instance.calendar_networks_get(access_token)
        print("The response of CalendarTelevisionShowSchedulesApi->calendar_networks_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CalendarTelevisionShowSchedulesApi->calendar_networks_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **access_token** | **str**|  | 

### Return type

[**List[Networks]**](Networks.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of networks |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **calendar_show_seasons_get**
> List[ShowSeasons] calendar_show_seasons_get(access_token, name)

Returns list of seasons available in the calendar for show

### Example


```python
import openapi_client
from openapi_client.models.show_seasons import ShowSeasons
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.hillbillysoftware.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.hillbillysoftware.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CalendarTelevisionShowSchedulesApi(api_client)
    access_token = 'access_token_example' # str | 
    name = 'name_example' # str | 

    try:
        # Returns list of seasons available in the calendar for show
        api_response = api_instance.calendar_show_seasons_get(access_token, name)
        print("The response of CalendarTelevisionShowSchedulesApi->calendar_show_seasons_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CalendarTelevisionShowSchedulesApi->calendar_show_seasons_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **access_token** | **str**|  | 
 **name** | **str**|  | 

### Return type

[**List[ShowSeasons]**](ShowSeasons.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of years |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **calendar_today_get**
> List[Schedule] calendar_today_get(access_token)

Will return show schedule for today for all countries in database

### Example


```python
import openapi_client
from openapi_client.models.schedule import Schedule
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.hillbillysoftware.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.hillbillysoftware.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CalendarTelevisionShowSchedulesApi(api_client)
    access_token = 'access_token_example' # str | 

    try:
        # Will return show schedule for today for all countries in database
        api_response = api_instance.calendar_today_get(access_token)
        print("The response of CalendarTelevisionShowSchedulesApi->calendar_today_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CalendarTelevisionShowSchedulesApi->calendar_today_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **access_token** | **str**|  | 

### Return type

[**List[Schedule]**](Schedule.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of schedules/calendar entries |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **calendarby_showname_season_get**
> List[Schedule] calendarby_showname_season_get(access_token, name, season)

Get Calendar by showname and season

### Example


```python
import openapi_client
from openapi_client.models.schedule import Schedule
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.hillbillysoftware.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.hillbillysoftware.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CalendarTelevisionShowSchedulesApi(api_client)
    access_token = 'access_token_example' # str | 
    name = 'name_example' # str | 
    season = 'season_example' # str | 

    try:
        # Get Calendar by showname and season
        api_response = api_instance.calendarby_showname_season_get(access_token, name, season)
        print("The response of CalendarTelevisionShowSchedulesApi->calendarby_showname_season_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CalendarTelevisionShowSchedulesApi->calendarby_showname_season_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **access_token** | **str**|  | 
 **name** | **str**|  | 
 **season** | **str**|  | 

### Return type

[**List[Schedule]**](Schedule.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of schedules/calendar entries |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **schedule_by_date_get**
> List[Schedule] schedule_by_date_get(access_token, var_date, country)

Gets TV Schedule for selected data

### Example


```python
import openapi_client
from openapi_client.models.schedule import Schedule
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.hillbillysoftware.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.hillbillysoftware.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CalendarTelevisionShowSchedulesApi(api_client)
    access_token = 'access_token_example' # str | 
    var_date = 'var_date_example' # str | date format year-month-day
    country = 'country_example' # str | US / CA / NL / BE / DE / GB or FR

    try:
        # Gets TV Schedule for selected data
        api_response = api_instance.schedule_by_date_get(access_token, var_date, country)
        print("The response of CalendarTelevisionShowSchedulesApi->schedule_by_date_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CalendarTelevisionShowSchedulesApi->schedule_by_date_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **access_token** | **str**|  | 
 **var_date** | **str**| date format year-month-day | 
 **country** | **str**| US / CA / NL / BE / DE / GB or FR | 

### Return type

[**List[Schedule]**](Schedule.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of schedules/calendar entries |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

