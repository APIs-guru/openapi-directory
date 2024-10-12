# openapi_client.QualityApi

All URIs are relative to *https://webtris.highwaysengland.co.uk/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**quality_get_daily_data_quality_for_site**](QualityApi.md#quality_get_daily_data_quality_for_site) | **GET** /v{version}/quality/daily | Get Site DailyQuality
[**quality_get_overall_data_quality_for_sites**](QualityApi.md#quality_get_overall_data_quality_for_sites) | **GET** /v{version}/quality/overall | Get Site OverallQuality


# **quality_get_daily_data_quality_for_site**
> DailyQualityResponse quality_get_daily_data_quality_for_site(site_id, start_date, end_date, version)

Get Site DailyQuality

### Example


```python
import openapi_client
from openapi_client.models.daily_quality_response import DailyQualityResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://webtris.highwaysengland.co.uk/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://webtris.highwaysengland.co.uk/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.QualityApi(api_client)
    site_id = 'site_id_example' # str | 
    start_date = 'start_date_example' # str | The start date of the report in the format ddmmyyyy (i.e 31012016)
    end_date = 'end_date_example' # str | The end date of the report in the format ddmmyyyy (i.e 31012016)
    version = 'version_example' # str | 

    try:
        # Get Site DailyQuality
        api_response = api_instance.quality_get_daily_data_quality_for_site(site_id, start_date, end_date, version)
        print("The response of QualityApi->quality_get_daily_data_quality_for_site:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QualityApi->quality_get_daily_data_quality_for_site: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **site_id** | **str**|  | 
 **start_date** | **str**| The start date of the report in the format ddmmyyyy (i.e 31012016) | 
 **end_date** | **str**| The end date of the report in the format ddmmyyyy (i.e 31012016) | 
 **version** | **str**|  | 

### Return type

[**DailyQualityResponse**](DailyQualityResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**400** | Bad request |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **quality_get_overall_data_quality_for_sites**
> OverallQualityResponse quality_get_overall_data_quality_for_sites(sites, start_date, end_date, version)

Get Site OverallQuality

### Example


```python
import openapi_client
from openapi_client.models.overall_quality_response import OverallQualityResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://webtris.highwaysengland.co.uk/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://webtris.highwaysengland.co.uk/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.QualityApi(api_client)
    sites = 'sites_example' # str | Get site quality by site id delimited by ,
    start_date = 'start_date_example' # str | The start date of the report in the format ddmmyyyy (i.e 31012016)
    end_date = 'end_date_example' # str | The end date of the report in the format ddmmyyyy (i.e 31012016)
    version = 'version_example' # str | 

    try:
        # Get Site OverallQuality
        api_response = api_instance.quality_get_overall_data_quality_for_sites(sites, start_date, end_date, version)
        print("The response of QualityApi->quality_get_overall_data_quality_for_sites:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QualityApi->quality_get_overall_data_quality_for_sites: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sites** | **str**| Get site quality by site id delimited by , | 
 **start_date** | **str**| The start date of the report in the format ddmmyyyy (i.e 31012016) | 
 **end_date** | **str**| The end date of the report in the format ddmmyyyy (i.e 31012016) | 
 **version** | **str**|  | 

### Return type

[**OverallQualityResponse**](OverallQualityResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**400** | Bad request |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

