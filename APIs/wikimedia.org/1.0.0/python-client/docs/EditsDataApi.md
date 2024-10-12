# openapi_client.EditsDataApi

All URIs are relative to *https://wikimedia.org/api/rest_v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**metrics_edits_aggregate_project_editor_type_page_type_granularity_start_end_get**](EditsDataApi.md#metrics_edits_aggregate_project_editor_type_page_type_granularity_start_end_get) | **GET** /metrics/edits/aggregate/{project}/{editor-type}/{page-type}/{granularity}/{start}/{end} | Get edits counts for a project.
[**metrics_edits_per_page_project_page_title_editor_type_granularity_start_end_get**](EditsDataApi.md#metrics_edits_per_page_project_page_title_editor_type_granularity_start_end_get) | **GET** /metrics/edits/per-page/{project}/{page-title}/{editor-type}/{granularity}/{start}/{end} | Get edit counts for a page in a project.


# **metrics_edits_aggregate_project_editor_type_page_type_granularity_start_end_get**
> Edits metrics_edits_aggregate_project_editor_type_page_type_granularity_start_end_get(project, editor_type, page_type, granularity, start, end)

Get edits counts for a project.

Given a Mediawiki project and a date range, returns a timeseries of edits counts. You can filter by editors-type (all-editor-types, anonymous, bot, registered) and page-type (all-page-types, content or non-content). You can choose between daily and monthly granularity as well.  - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental) - Rate limit: 25 req/s - License: Data accessible via this endpoint is available under the   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/). 

### Example


```python
import openapi_client
from openapi_client.models.edits import Edits
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
    api_instance = openapi_client.EditsDataApi(api_client)
    project = 'project_example' # str | The name of any Wikimedia project formatted like {language code}.{project name}, for example en.wikipedia. You may pass en.wikipedia.org and the .org will be stripped off.  For projects like commons without language codes, use commons.wikimedia. For projects like www.mediawiki.org, you can use that full string, or just use mediawiki or mediawiki.org. If you're interested in the aggregation of all projects, use all-projects. 
    editor_type = 'editor_type_example' # str | If you want to filter by editor-type, use one of anonymous, group-bot (registered accounts belonging to the bot group), name-bot (registered accounts not belonging to the bot group but having bot-like names) or user (registered account not in bot group nor having bot-like name). If you are interested in edits regardless of their editor-type, use all-editor-types. 
    page_type = 'page_type_example' # str | If you want to filter by page-type, use one of content (edits on pages in content namespaces) or non-content (edits on pages in non-content namespaces). If you are interested in edits regardless of their page-type, use all-page-types. 
    granularity = 'granularity_example' # str | The time unit for the response data. As of today, supported values are daily and monthly. 
    start = 'start_example' # str | The date of the first day to include, in YYYYMMDD format
    end = 'end_example' # str | The date of the last day to include, in YYYYMMDD format

    try:
        # Get edits counts for a project.
        api_response = api_instance.metrics_edits_aggregate_project_editor_type_page_type_granularity_start_end_get(project, editor_type, page_type, granularity, start, end)
        print("The response of EditsDataApi->metrics_edits_aggregate_project_editor_type_page_type_granularity_start_end_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EditsDataApi->metrics_edits_aggregate_project_editor_type_page_type_granularity_start_end_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | **str**| The name of any Wikimedia project formatted like {language code}.{project name}, for example en.wikipedia. You may pass en.wikipedia.org and the .org will be stripped off.  For projects like commons without language codes, use commons.wikimedia. For projects like www.mediawiki.org, you can use that full string, or just use mediawiki or mediawiki.org. If you&#39;re interested in the aggregation of all projects, use all-projects.  | 
 **editor_type** | **str**| If you want to filter by editor-type, use one of anonymous, group-bot (registered accounts belonging to the bot group), name-bot (registered accounts not belonging to the bot group but having bot-like names) or user (registered account not in bot group nor having bot-like name). If you are interested in edits regardless of their editor-type, use all-editor-types.  | 
 **page_type** | **str**| If you want to filter by page-type, use one of content (edits on pages in content namespaces) or non-content (edits on pages in non-content namespaces). If you are interested in edits regardless of their page-type, use all-page-types.  | 
 **granularity** | **str**| The time unit for the response data. As of today, supported values are daily and monthly.  | 
 **start** | **str**| The date of the first day to include, in YYYYMMDD format | 
 **end** | **str**| The date of the last day to include, in YYYYMMDD format | 

### Return type

[**Edits**](Edits.md)

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

# **metrics_edits_per_page_project_page_title_editor_type_granularity_start_end_get**
> EditsPerPage metrics_edits_per_page_project_page_title_editor_type_granularity_start_end_get(project, page_title, editor_type, granularity, start, end)

Get edit counts for a page in a project.

Given a Mediawiki project, a page-title prefixed with its canonical namespace (for instance 'User:Jimbo_Wales') and a date range, returns a timeseries of edit counts. You can filter by editors-type (all-editor-types, anonymous, group-bot, name-bot, user). You can choose between daily and monthly granularity as well.  - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental) - Rate limit: 25 req/s - License: Data accessible via this endpoint is available under the   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/). 

### Example


```python
import openapi_client
from openapi_client.models.edits_per_page import EditsPerPage
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
    api_instance = openapi_client.EditsDataApi(api_client)
    project = 'project_example' # str | The name of any Wikimedia project formatted like {language code}.{project name}, for example en.wikipedia. You may pass en.wikipedia.org and the .org will be stripped off. For projects like commons without language codes, use commons.wikimedia. For projects like www.mediawiki.org, you can use that full string, or just use mediawiki or mediawiki.org. 
    page_title = 'page_title_example' # str | The page-title to request edits for. It should be prefixed with canonical namespace. Spaces will be converted to underscores. 
    editor_type = 'editor_type_example' # str | If you want to filter by editor-type, use one of anonymous, group-bot (registered accounts belonging to the bot group), name-bot (registered accounts not belonging to the bot group but having bot-like names) or user (registered account not in bot group nor having bot-like name). If you are interested in edits regardless of their editor-type, use all-editor-types. 
    granularity = 'granularity_example' # str | Time unit for the response data. As of today, supported values are daily and monthly 
    start = 'start_example' # str | The date of the first day to include, in YYYYMMDD format
    end = 'end_example' # str | The date of the last day to include, in YYYYMMDD format

    try:
        # Get edit counts for a page in a project.
        api_response = api_instance.metrics_edits_per_page_project_page_title_editor_type_granularity_start_end_get(project, page_title, editor_type, granularity, start, end)
        print("The response of EditsDataApi->metrics_edits_per_page_project_page_title_editor_type_granularity_start_end_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EditsDataApi->metrics_edits_per_page_project_page_title_editor_type_granularity_start_end_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | **str**| The name of any Wikimedia project formatted like {language code}.{project name}, for example en.wikipedia. You may pass en.wikipedia.org and the .org will be stripped off. For projects like commons without language codes, use commons.wikimedia. For projects like www.mediawiki.org, you can use that full string, or just use mediawiki or mediawiki.org.  | 
 **page_title** | **str**| The page-title to request edits for. It should be prefixed with canonical namespace. Spaces will be converted to underscores.  | 
 **editor_type** | **str**| If you want to filter by editor-type, use one of anonymous, group-bot (registered accounts belonging to the bot group), name-bot (registered accounts not belonging to the bot group but having bot-like names) or user (registered account not in bot group nor having bot-like name). If you are interested in edits regardless of their editor-type, use all-editor-types.  | 
 **granularity** | **str**| Time unit for the response data. As of today, supported values are daily and monthly  | 
 **start** | **str**| The date of the first day to include, in YYYYMMDD format | 
 **end** | **str**| The date of the last day to include, in YYYYMMDD format | 

### Return type

[**EditsPerPage**](EditsPerPage.md)

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

