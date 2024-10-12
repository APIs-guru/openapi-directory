# openapi_client.LegacyDataApi

All URIs are relative to *https://wikimedia.org/api/rest_v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**metrics_legacy_pagecounts_aggregate_project_access_site_granularity_start_end_get**](LegacyDataApi.md#metrics_legacy_pagecounts_aggregate_project_access_site_granularity_start_end_get) | **GET** /metrics/legacy/pagecounts/aggregate/{project}/{access-site}/{granularity}/{start}/{end} | 


# **metrics_legacy_pagecounts_aggregate_project_access_site_granularity_start_end_get**
> PagecountsProject metrics_legacy_pagecounts_aggregate_project_access_site_granularity_start_end_get(project, access_site, granularity, start, end)



Given a project and a date range, returns a timeseries of pagecounts. You can filter by access site (mobile or desktop) and you can choose between monthly, daily and hourly granularity as well.  - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental) - Rate limit: 100 req/s - License: Data accessible via this endpoint is available under the   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/). 

### Example


```python
import openapi_client
from openapi_client.models.pagecounts_project import PagecountsProject
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
    api_instance = openapi_client.LegacyDataApi(api_client)
    project = 'project_example' # str | The name of any Wikimedia project formatted like {language code}.{project name}, for example en.wikipedia. You may pass en.wikipedia.org and the .org will be stripped off. For projects like commons without language codes, use commons.wikimedia. 
    access_site = 'access_site_example' # str | If you want to filter by access site, use one of desktop-site or mobile-site. If you are interested in pagecounts regardless of access site use all-sites.
    granularity = 'granularity_example' # str | The time unit for the response data. As of today, the supported granularities for this endpoint are hourly, daily and monthly. 
    start = 'start_example' # str | The timestamp of the first hour/day/month to include, in YYYYMMDDHH format.
    end = 'end_example' # str | The timestamp of the last hour/day/month to include, in YYYYMMDDHH format. In hourly and daily granularities this value is inclusive, in the monthly granularity this value is exclusive. 

    try:
        api_response = api_instance.metrics_legacy_pagecounts_aggregate_project_access_site_granularity_start_end_get(project, access_site, granularity, start, end)
        print("The response of LegacyDataApi->metrics_legacy_pagecounts_aggregate_project_access_site_granularity_start_end_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LegacyDataApi->metrics_legacy_pagecounts_aggregate_project_access_site_granularity_start_end_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | **str**| The name of any Wikimedia project formatted like {language code}.{project name}, for example en.wikipedia. You may pass en.wikipedia.org and the .org will be stripped off. For projects like commons without language codes, use commons.wikimedia.  | 
 **access_site** | **str**| If you want to filter by access site, use one of desktop-site or mobile-site. If you are interested in pagecounts regardless of access site use all-sites. | 
 **granularity** | **str**| The time unit for the response data. As of today, the supported granularities for this endpoint are hourly, daily and monthly.  | 
 **start** | **str**| The timestamp of the first hour/day/month to include, in YYYYMMDDHH format. | 
 **end** | **str**| The timestamp of the last hour/day/month to include, in YYYYMMDDHH format. In hourly and daily granularities this value is inclusive, in the monthly granularity this value is exclusive.  | 

### Return type

[**PagecountsProject**](PagecountsProject.md)

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

