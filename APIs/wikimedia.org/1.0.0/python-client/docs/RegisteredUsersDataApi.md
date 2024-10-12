# openapi_client.RegisteredUsersDataApi

All URIs are relative to *https://wikimedia.org/api/rest_v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**metrics_registered_users_new_project_granularity_start_end_get**](RegisteredUsersDataApi.md#metrics_registered_users_new_project_granularity_start_end_get) | **GET** /metrics/registered-users/new/{project}/{granularity}/{start}/{end} | Get newly registered users counts for a project.


# **metrics_registered_users_new_project_granularity_start_end_get**
> NewRegisteredUsers metrics_registered_users_new_project_granularity_start_end_get(project, granularity, start, end)

Get newly registered users counts for a project.

Given a Mediawiki project and a date range, returns a timeseries of its newly registered users counts. You can choose between daily and monthly granularity. The newly registered users value is computed with self-created users only, not auto-login created ones.  - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental) - Rate limit: 25 req/s - License: Data accessible via this endpoint is available under the   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/). 

### Example


```python
import openapi_client
from openapi_client.models.new_registered_users import NewRegisteredUsers
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
    api_instance = openapi_client.RegisteredUsersDataApi(api_client)
    project = 'project_example' # str | The name of any Wikimedia project formatted like {language code}.{project name}, for example en.wikipedia. You may pass en.wikipedia.org and the .org will be stripped off.  For projects like commons without language codes, use commons.wikimedia. For projects like www.mediawiki.org, you can use that full string, or just use mediawiki or mediawiki.org. If you're interested in the aggregation of all projects, use all. 
    granularity = 'granularity_example' # str | The time unit for the response data. As of today, supported values are daily and monthly. 
    start = 'start_example' # str | The date of the first day to include, in YYYYMMDD format
    end = 'end_example' # str | The date of the last day to include, in YYYYMMDD format

    try:
        # Get newly registered users counts for a project.
        api_response = api_instance.metrics_registered_users_new_project_granularity_start_end_get(project, granularity, start, end)
        print("The response of RegisteredUsersDataApi->metrics_registered_users_new_project_granularity_start_end_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RegisteredUsersDataApi->metrics_registered_users_new_project_granularity_start_end_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | **str**| The name of any Wikimedia project formatted like {language code}.{project name}, for example en.wikipedia. You may pass en.wikipedia.org and the .org will be stripped off.  For projects like commons without language codes, use commons.wikimedia. For projects like www.mediawiki.org, you can use that full string, or just use mediawiki or mediawiki.org. If you&#39;re interested in the aggregation of all projects, use all.  | 
 **granularity** | **str**| The time unit for the response data. As of today, supported values are daily and monthly.  | 
 **start** | **str**| The date of the first day to include, in YYYYMMDD format | 
 **end** | **str**| The date of the last day to include, in YYYYMMDD format | 

### Return type

[**NewRegisteredUsers**](NewRegisteredUsers.md)

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

