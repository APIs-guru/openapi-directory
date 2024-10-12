# openapi_client.CountryApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_daily_report_all_countries**](CountryApi.md#get_daily_report_all_countries) | **GET** /report/country/all | getDailyReportAllCountries
[**get_daily_report_by_country_code**](CountryApi.md#get_daily_report_by_country_code) | **GET** /report/country/code | getDailyReportByCountryCode
[**get_daily_report_by_country_name**](CountryApi.md#get_daily_report_by_country_name) | **GET** /report/country/name | getDailyReportByCountryName
[**get_latest_all_countries**](CountryApi.md#get_latest_all_countries) | **GET** /country/all | getLatestAllCountries
[**get_latest_country_data_by_code**](CountryApi.md#get_latest_country_data_by_code) | **GET** /country/code | getLatestCountryDataByCode
[**get_latest_country_data_by_name**](CountryApi.md#get_latest_country_data_by_name) | **GET** /country | getLatestCountryDataByName


# **get_daily_report_all_countries**
> List[GetDailyReportAllCountries200ResponseInner] get_daily_report_all_countries(var_date, date_format=date_format, format=format)

getDailyReportAllCountries

Get daily report for all countries. Date is mandatory parametar. Date format is by ISO 8601 standard, but you can provide different format with date-format parameter.

### Example


```python
import openapi_client
from openapi_client.models.get_daily_report_all_countries200_response_inner import GetDailyReportAllCountries200ResponseInner
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
    api_instance = openapi_client.CountryApi(api_client)
    var_date = 'var_date_example' # str | Date of the report.
    date_format = YYYY-MM-DD # str | Date format. If you dont want to use ISO 8601 standard (YYYY-MM-DD), you can provide different format. (optional) (default to YYYY-MM-DD)
    format = json # str | Format of the response (optional) (default to json)

    try:
        # getDailyReportAllCountries
        api_response = api_instance.get_daily_report_all_countries(var_date, date_format=date_format, format=format)
        print("The response of CountryApi->get_daily_report_all_countries:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CountryApi->get_daily_report_all_countries: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_date** | **str**| Date of the report. | 
 **date_format** | **str**| Date format. If you dont want to use ISO 8601 standard (YYYY-MM-DD), you can provide different format. | [optional] [default to YYYY-MM-DD]
 **format** | **str**| Format of the response | [optional] [default to json]

### Return type

[**List[GetDailyReportAllCountries200ResponseInner]**](GetDailyReportAllCountries200ResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Daily report for COVID-19 for selected country. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_daily_report_by_country_code**
> List[GetDailyReportAllCountries200ResponseInner] get_daily_report_by_country_code(code, var_date, date_format=date_format, format=format)

getDailyReportByCountryCode

Get daily report for specific country. Country code and date are mandatory in parametars. Country code is in ISO 3166-1 standard. It can be 2 chars (Alpha-2) or 3 chars (Alpha-3) type. Date format is by ISO 8601 standard, but you can provide different format with date-format parameter

### Example


```python
import openapi_client
from openapi_client.models.get_daily_report_all_countries200_response_inner import GetDailyReportAllCountries200ResponseInner
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
    api_instance = openapi_client.CountryApi(api_client)
    code = 'code_example' # str | Country code. Country code is by ISO 3166-1 standard. It can be 2 chars (Alpha-2) or 3 chars (Alpha-3) type.
    var_date = 'var_date_example' # str | Date of the report.
    date_format = YYYY-MM-DD # str | Date format. If you dont want to use ISO 8601 standard (YYYY-MM-DD), you can provide different format. (optional) (default to YYYY-MM-DD)
    format = json # str | Format of the response (optional) (default to json)

    try:
        # getDailyReportByCountryCode
        api_response = api_instance.get_daily_report_by_country_code(code, var_date, date_format=date_format, format=format)
        print("The response of CountryApi->get_daily_report_by_country_code:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CountryApi->get_daily_report_by_country_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **str**| Country code. Country code is by ISO 3166-1 standard. It can be 2 chars (Alpha-2) or 3 chars (Alpha-3) type. | 
 **var_date** | **str**| Date of the report. | 
 **date_format** | **str**| Date format. If you dont want to use ISO 8601 standard (YYYY-MM-DD), you can provide different format. | [optional] [default to YYYY-MM-DD]
 **format** | **str**| Format of the response | [optional] [default to json]

### Return type

[**List[GetDailyReportAllCountries200ResponseInner]**](GetDailyReportAllCountries200ResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Daily report for COVID-19 for selected country. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_daily_report_by_country_name**
> List[GetDailyReportAllCountries200ResponseInner] get_daily_report_by_country_name(name, var_date, date_format=date_format, format=format)

getDailyReportByCountryName

Get daily report for specific country. Country name and date are mandatory in parametars. Date format is by ISO 8601 standard, but you can provide different format with date-format parameter

### Example


```python
import openapi_client
from openapi_client.models.get_daily_report_all_countries200_response_inner import GetDailyReportAllCountries200ResponseInner
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
    api_instance = openapi_client.CountryApi(api_client)
    name = 'name_example' # str | Country name.
    var_date = 'var_date_example' # str | Date of the report.
    date_format = YYYY-MM-DD # str | Date format. If you dont want to use ISO 8601 standard (YYYY-MM-DD), you can provide different format. (optional) (default to YYYY-MM-DD)
    format = json # str | Format of the response (optional) (default to json)

    try:
        # getDailyReportByCountryName
        api_response = api_instance.get_daily_report_by_country_name(name, var_date, date_format=date_format, format=format)
        print("The response of CountryApi->get_daily_report_by_country_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CountryApi->get_daily_report_by_country_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Country name. | 
 **var_date** | **str**| Date of the report. | 
 **date_format** | **str**| Date format. If you dont want to use ISO 8601 standard (YYYY-MM-DD), you can provide different format. | [optional] [default to YYYY-MM-DD]
 **format** | **str**| Format of the response | [optional] [default to json]

### Return type

[**List[GetDailyReportAllCountries200ResponseInner]**](GetDailyReportAllCountries200ResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Daily report for COVID-19 for selected country. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_latest_all_countries**
> List[GetLatestCountryDataByName200ResponseInner] get_latest_all_countries(format=format)

getLatestAllCountries

Get latest data from all countries.

### Example


```python
import openapi_client
from openapi_client.models.get_latest_country_data_by_name200_response_inner import GetLatestCountryDataByName200ResponseInner
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
    api_instance = openapi_client.CountryApi(api_client)
    format = json # str | Format of the response (optional) (default to json)

    try:
        # getLatestAllCountries
        api_response = api_instance.get_latest_all_countries(format=format)
        print("The response of CountryApi->get_latest_all_countries:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CountryApi->get_latest_all_countries: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **str**| Format of the response | [optional] [default to json]

### Return type

[**List[GetLatestCountryDataByName200ResponseInner]**](GetLatestCountryDataByName200ResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns all countries with latest data about COVID-19 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_latest_country_data_by_code**
> List[GetLatestCountryDataByName200ResponseInner] get_latest_country_data_by_code(code, format=format)

getLatestCountryDataByCode

Get latest data for specific country. Country code and format are in parametars. Country code is in ISO 3166-1 standard. It can be 2 chars (Alpha-2) or 3 chars (Alpha-3) type.

### Example


```python
import openapi_client
from openapi_client.models.get_latest_country_data_by_name200_response_inner import GetLatestCountryDataByName200ResponseInner
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
    api_instance = openapi_client.CountryApi(api_client)
    code = 'code_example' # str | Country code
    format = json # str | Format of the response (optional) (default to json)

    try:
        # getLatestCountryDataByCode
        api_response = api_instance.get_latest_country_data_by_code(code, format=format)
        print("The response of CountryApi->get_latest_country_data_by_code:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CountryApi->get_latest_country_data_by_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **str**| Country code | 
 **format** | **str**| Format of the response | [optional] [default to json]

### Return type

[**List[GetLatestCountryDataByName200ResponseInner]**](GetLatestCountryDataByName200ResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Latest data about COVID-19 for selected country |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_latest_country_data_by_name**
> List[GetLatestCountryDataByName200ResponseInner] get_latest_country_data_by_name(name, format=format)

getLatestCountryDataByName

Get latest data for specific country. Country name and format are in parametars.

### Example


```python
import openapi_client
from openapi_client.models.get_latest_country_data_by_name200_response_inner import GetLatestCountryDataByName200ResponseInner
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
    api_instance = openapi_client.CountryApi(api_client)
    name = 'name_example' # str | Name of the country
    format = json # str | Format of the response (optional) (default to json)

    try:
        # getLatestCountryDataByName
        api_response = api_instance.get_latest_country_data_by_name(name, format=format)
        print("The response of CountryApi->get_latest_country_data_by_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CountryApi->get_latest_country_data_by_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Name of the country | 
 **format** | **str**| Format of the response | [optional] [default to json]

### Return type

[**List[GetLatestCountryDataByName200ResponseInner]**](GetLatestCountryDataByName200ResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Latest data about COVID-19 for selected country |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

