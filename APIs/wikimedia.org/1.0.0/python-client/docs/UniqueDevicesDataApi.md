# openapi_client.UniqueDevicesDataApi

All URIs are relative to *https://wikimedia.org/api/rest_v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**metrics_unique_devices_project_access_site_granularity_start_end_get**](UniqueDevicesDataApi.md#metrics_unique_devices_project_access_site_granularity_start_end_get) | **GET** /metrics/unique-devices/{project}/{access-site}/{granularity}/{start}/{end} | Get unique devices count per project


# **metrics_unique_devices_project_access_site_granularity_start_end_get**
> UniqueDevices metrics_unique_devices_project_access_site_granularity_start_end_get(project, access_site, granularity, start, end)

Get unique devices count per project

Given a project and a date range, returns a timeseries of unique devices counts. You need to specify a project, and can filter by accessed site (mobile or desktop). You can choose between daily and hourly granularity as well.  - Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable) - Rate limit: 100 req/s - License: Data accessible via this endpoint is available under the   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/). 

### Example


```python
import openapi_client
from openapi_client.models.unique_devices import UniqueDevices
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://wikimedia.org/api/rest_v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://wikimedia.org/api/rest_v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UniqueDevicesDataApi(api_client)
    project = 'project_example' # str | If you want to filter by project, use the domain of any Wikimedia project, for example 'en.wikipedia.org', 'www.mediawiki.org' or 'commons.wikimedia.org'. 
    access_site = 'access_site_example' # str | If you want to filter by accessed site, use one of desktop-site or mobile-site. If you are interested in unique devices regardless of accessed site, use or all-sites. 
    granularity = 'granularity_example' # str | The time unit for the response data. As of today, the supported granularities for this endpoint are daily and monthly. 
    start = 'start_example' # str | The timestamp of the first day/month to include, in YYYYMMDD format
    end = 'end_example' # str | The timestamp of the last day/month to include, in YYYYMMDD format

    try:
        # Get unique devices count per project
        api_response = api_instance.metrics_unique_devices_project_access_site_granularity_start_end_get(project, access_site, granularity, start, end)
        print("The response of UniqueDevicesDataApi->metrics_unique_devices_project_access_site_granularity_start_end_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UniqueDevicesDataApi->metrics_unique_devices_project_access_site_granularity_start_end_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | **str**| If you want to filter by project, use the domain of any Wikimedia project, for example &#39;en.wikipedia.org&#39;, &#39;www.mediawiki.org&#39; or &#39;commons.wikimedia.org&#39;.  | 
 **access_site** | **str**| If you want to filter by accessed site, use one of desktop-site or mobile-site. If you are interested in unique devices regardless of accessed site, use or all-sites.  | 
 **granularity** | **str**| The time unit for the response data. As of today, the supported granularities for this endpoint are daily and monthly.  | 
 **start** | **str**| The timestamp of the first day/month to include, in YYYYMMDD format | 
 **end** | **str**| The timestamp of the last day/month to include, in YYYYMMDD format | 

### Return type

[**UniqueDevices**](UniqueDevices.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of values |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

