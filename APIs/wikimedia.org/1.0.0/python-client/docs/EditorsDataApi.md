# openapi_client.EditorsDataApi

All URIs are relative to *https://wikimedia.org/api/rest_v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**metrics_editors_aggregate_project_editor_type_page_type_activity_level_granularity_start_end_get**](EditorsDataApi.md#metrics_editors_aggregate_project_editor_type_page_type_activity_level_granularity_start_end_get) | **GET** /metrics/editors/aggregate/{project}/{editor-type}/{page-type}/{activity-level}/{granularity}/{start}/{end} | Get editors counts for a project.
[**metrics_editors_top_by_absolute_bytes_difference_project_editor_type_page_type_year_month_day_get**](EditorsDataApi.md#metrics_editors_top_by_absolute_bytes_difference_project_editor_type_page_type_year_month_day_get) | **GET** /metrics/editors/top-by-absolute-bytes-difference/{project}/{editor-type}/{page-type}/{year}/{month}/{day} | Get top 100 editors by absolute bytes-difference.
[**metrics_editors_top_by_edits_project_editor_type_page_type_year_month_day_get**](EditorsDataApi.md#metrics_editors_top_by_edits_project_editor_type_page_type_year_month_day_get) | **GET** /metrics/editors/top-by-edits/{project}/{editor-type}/{page-type}/{year}/{month}/{day} | Get top 100 editors by edits count.
[**metrics_editors_top_by_net_bytes_difference_project_editor_type_page_type_year_month_day_get**](EditorsDataApi.md#metrics_editors_top_by_net_bytes_difference_project_editor_type_page_type_year_month_day_get) | **GET** /metrics/editors/top-by-net-bytes-difference/{project}/{editor-type}/{page-type}/{year}/{month}/{day} | Get top 100 editors by net bytes-difference.


# **metrics_editors_aggregate_project_editor_type_page_type_activity_level_granularity_start_end_get**
> Editors metrics_editors_aggregate_project_editor_type_page_type_activity_level_granularity_start_end_get(project, editor_type, page_type, activity_level, granularity, start, end)

Get editors counts for a project.

Given a Mediawiki project and a date range, returns a timeseries of its editors counts. You can filter by editory-type (all-editor-types, anonymous, group-bot, name-bot, user), page-type (all-page-types, content or non-content) or activity-level (1..4-edits, 5..24-edits, 25..99-edits or 100..-edits). You can choose between daily and monthly granularity as well.  - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental) - Rate limit: 25 req/s - License: Data accessible via this endpoint is available under the   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/). 

### Example


```python
import openapi_client
from openapi_client.models.editors import Editors
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
    api_instance = openapi_client.EditorsDataApi(api_client)
    project = 'project_example' # str | The name of any Wikimedia project formatted like {language code}.{project name}, for example en.wikipedia. You may pass en.wikipedia.org and the .org will be stripped off.  For projects like commons without language codes, use commons.wikimedia. For projects like www.mediawiki.org, you can use that full string, or just use mediawiki or mediawiki.org. 
    editor_type = 'editor_type_example' # str | If you want to filter by editor-type, use one of anonymous, group-bot (registered accounts belonging to the bot group), name-bot (registered accounts not belonging to the bot group but having bot-like names) or user (registered account not in bot group nor having bot-like name). If you are interested in edits regardless of their editor-type, use all-editor-types. 
    page_type = 'page_type_example' # str | If you want to filter by page-type, use one of content (edits made in content namespaces) or non-content (edits made in non-content namespaces). If you are interested in editors regardless of their page-type, use all-page-types. 
    activity_level = 'activity_level_example' # str | If you want to filter by activity-level, use one of 1..4-edits, 5..24-edits, 25..99-edits or 100..-edits. If you are interested in editors regardless of their activity-level, use all-activity-levels. 
    granularity = 'granularity_example' # str | The time unit for the response data. As of today, supported values are daily and monthly. 
    start = 'start_example' # str | The date of the first day to include, in YYYYMMDD format
    end = 'end_example' # str | The date of the last day to include, in YYYYMMDD format

    try:
        # Get editors counts for a project.
        api_response = api_instance.metrics_editors_aggregate_project_editor_type_page_type_activity_level_granularity_start_end_get(project, editor_type, page_type, activity_level, granularity, start, end)
        print("The response of EditorsDataApi->metrics_editors_aggregate_project_editor_type_page_type_activity_level_granularity_start_end_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EditorsDataApi->metrics_editors_aggregate_project_editor_type_page_type_activity_level_granularity_start_end_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | **str**| The name of any Wikimedia project formatted like {language code}.{project name}, for example en.wikipedia. You may pass en.wikipedia.org and the .org will be stripped off.  For projects like commons without language codes, use commons.wikimedia. For projects like www.mediawiki.org, you can use that full string, or just use mediawiki or mediawiki.org.  | 
 **editor_type** | **str**| If you want to filter by editor-type, use one of anonymous, group-bot (registered accounts belonging to the bot group), name-bot (registered accounts not belonging to the bot group but having bot-like names) or user (registered account not in bot group nor having bot-like name). If you are interested in edits regardless of their editor-type, use all-editor-types.  | 
 **page_type** | **str**| If you want to filter by page-type, use one of content (edits made in content namespaces) or non-content (edits made in non-content namespaces). If you are interested in editors regardless of their page-type, use all-page-types.  | 
 **activity_level** | **str**| If you want to filter by activity-level, use one of 1..4-edits, 5..24-edits, 25..99-edits or 100..-edits. If you are interested in editors regardless of their activity-level, use all-activity-levels.  | 
 **granularity** | **str**| The time unit for the response data. As of today, supported values are daily and monthly.  | 
 **start** | **str**| The date of the first day to include, in YYYYMMDD format | 
 **end** | **str**| The date of the last day to include, in YYYYMMDD format | 

### Return type

[**Editors**](Editors.md)

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

# **metrics_editors_top_by_absolute_bytes_difference_project_editor_type_page_type_year_month_day_get**
> TopEditorsByAbsBytesDiff metrics_editors_top_by_absolute_bytes_difference_project_editor_type_page_type_year_month_day_get(project, editor_type, page_type, year, month, day)

Get top 100 editors by absolute bytes-difference.

Given a Mediawiki project and a date (day or month), returns a timeseries of the top 100 editors by absolute bytes-difference. You can filter by editor-type (all-editor-types, anonymous, group-bot, name-bot, user) or page-type (all-page-types, content or non-content). The user_text returned is either the mediawiki user_text if the user is registered, or null if user is anonymous.  - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental) - Rate limit: 25 req/s - License: Data accessible via this endpoint is available under the   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/). 

### Example


```python
import openapi_client
from openapi_client.models.top_editors_by_abs_bytes_diff import TopEditorsByAbsBytesDiff
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
    api_instance = openapi_client.EditorsDataApi(api_client)
    project = 'project_example' # str | The name of any Wikimedia project formatted like {language code}.{project name}, for example en.wikipedia. You may pass en.wikipedia.org and the .org will be stripped off. For projects like commons without language codes, use commons.wikimedia. For projects like www.mediawiki.org, you can use that full string, or just use mediawiki or mediawiki.org. 
    editor_type = 'editor_type_example' # str | If you want to filter by editor-type, use one of anonymous, group-bot (registered accounts belonging to the bot group), name-bot (registered accounts not belonging to the bot group but having bot-like names) or user (registered account not in bot group nor having bot-like name). If you are interested in edits regardless of their editor-type, use all-editor-types. 
    page_type = 'page_type_example' # str | If you want to filter by page-type, use one of content (edits on pages in content namespaces) or non-content (edits on pages in non-content namespaces). If you are interested in edits regardless of their page-type, use all-page-types. 
    year = 'year_example' # str | The year of the date for which to retrieve top editors, in YYYY format.
    month = 'month_example' # str | The month of the date for which to retrieve top editors, in MM format. If you want to get the top editors of a whole month, the day parameter should be all-days.
    day = 'day_example' # str | The day of the date for which to retrieve top editors, in DD format, or all-days for a monthly value.

    try:
        # Get top 100 editors by absolute bytes-difference.
        api_response = api_instance.metrics_editors_top_by_absolute_bytes_difference_project_editor_type_page_type_year_month_day_get(project, editor_type, page_type, year, month, day)
        print("The response of EditorsDataApi->metrics_editors_top_by_absolute_bytes_difference_project_editor_type_page_type_year_month_day_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EditorsDataApi->metrics_editors_top_by_absolute_bytes_difference_project_editor_type_page_type_year_month_day_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | **str**| The name of any Wikimedia project formatted like {language code}.{project name}, for example en.wikipedia. You may pass en.wikipedia.org and the .org will be stripped off. For projects like commons without language codes, use commons.wikimedia. For projects like www.mediawiki.org, you can use that full string, or just use mediawiki or mediawiki.org.  | 
 **editor_type** | **str**| If you want to filter by editor-type, use one of anonymous, group-bot (registered accounts belonging to the bot group), name-bot (registered accounts not belonging to the bot group but having bot-like names) or user (registered account not in bot group nor having bot-like name). If you are interested in edits regardless of their editor-type, use all-editor-types.  | 
 **page_type** | **str**| If you want to filter by page-type, use one of content (edits on pages in content namespaces) or non-content (edits on pages in non-content namespaces). If you are interested in edits regardless of their page-type, use all-page-types.  | 
 **year** | **str**| The year of the date for which to retrieve top editors, in YYYY format. | 
 **month** | **str**| The month of the date for which to retrieve top editors, in MM format. If you want to get the top editors of a whole month, the day parameter should be all-days. | 
 **day** | **str**| The day of the date for which to retrieve top editors, in DD format, or all-days for a monthly value. | 

### Return type

[**TopEditorsByAbsBytesDiff**](TopEditorsByAbsBytesDiff.md)

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

# **metrics_editors_top_by_edits_project_editor_type_page_type_year_month_day_get**
> TopEditorsByEdits metrics_editors_top_by_edits_project_editor_type_page_type_year_month_day_get(project, editor_type, page_type, year, month, day)

Get top 100 editors by edits count.

Given a Mediawiki project and a date (day or month), returns a timeseries of the top 100 editors by edits count. You can filter by editor-type (all-editor-types, anonymous, group-bot, name-bot, user) or page-type (all-page-types, content or non-content). The user_text returned is either the mediawiki user_text if the user is registered, or null if user is anonymous.  - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental) - Rate limit: 25 req/s - License: Data accessible via this endpoint is available under the   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/). 

### Example


```python
import openapi_client
from openapi_client.models.top_editors_by_edits import TopEditorsByEdits
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
    api_instance = openapi_client.EditorsDataApi(api_client)
    project = 'project_example' # str | The name of any Wikimedia project formatted like {language code}.{project name}, for example en.wikipedia. You may pass en.wikipedia.org and the .org will be stripped off. For projects like commons without language codes, use commons.wikimedia. For projects like www.mediawiki.org, you can use that full string, or just use mediawiki or mediawiki.org. 
    editor_type = 'editor_type_example' # str | If you want to filter by editor-type, use one of anonymous, group-bot (registered accounts belonging to the bot group), name-bot (registered accounts not belonging to the bot group but having bot-like names) or user (registered account not in bot group nor having bot-like name). If you are interested in edits regardless of their editor-type, use all-editor-types. 
    page_type = 'page_type_example' # str | If you want to filter by page-type, use one of content (edits on pages in content namespaces) or non-content (edits on pages in non-content namespaces). If you are interested in edits regardless of their page-type, use all-page-types. 
    year = 'year_example' # str | The year of the date for which to retrieve top editors, in YYYY format.
    month = 'month_example' # str | The month of the date for which to retrieve top editors, in MM format. If you want to get the top editors of a whole month, the day parameter should be all-days.
    day = 'day_example' # str | The day of the date for which to retrieve top editors, in DD format, or all-days for a monthly value.

    try:
        # Get top 100 editors by edits count.
        api_response = api_instance.metrics_editors_top_by_edits_project_editor_type_page_type_year_month_day_get(project, editor_type, page_type, year, month, day)
        print("The response of EditorsDataApi->metrics_editors_top_by_edits_project_editor_type_page_type_year_month_day_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EditorsDataApi->metrics_editors_top_by_edits_project_editor_type_page_type_year_month_day_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | **str**| The name of any Wikimedia project formatted like {language code}.{project name}, for example en.wikipedia. You may pass en.wikipedia.org and the .org will be stripped off. For projects like commons without language codes, use commons.wikimedia. For projects like www.mediawiki.org, you can use that full string, or just use mediawiki or mediawiki.org.  | 
 **editor_type** | **str**| If you want to filter by editor-type, use one of anonymous, group-bot (registered accounts belonging to the bot group), name-bot (registered accounts not belonging to the bot group but having bot-like names) or user (registered account not in bot group nor having bot-like name). If you are interested in edits regardless of their editor-type, use all-editor-types.  | 
 **page_type** | **str**| If you want to filter by page-type, use one of content (edits on pages in content namespaces) or non-content (edits on pages in non-content namespaces). If you are interested in edits regardless of their page-type, use all-page-types.  | 
 **year** | **str**| The year of the date for which to retrieve top editors, in YYYY format. | 
 **month** | **str**| The month of the date for which to retrieve top editors, in MM format. If you want to get the top editors of a whole month, the day parameter should be all-days. | 
 **day** | **str**| The day of the date for which to retrieve top editors, in DD format, or all-days for a monthly value. | 

### Return type

[**TopEditorsByEdits**](TopEditorsByEdits.md)

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

# **metrics_editors_top_by_net_bytes_difference_project_editor_type_page_type_year_month_day_get**
> TopEditorsByNetBytesDiff metrics_editors_top_by_net_bytes_difference_project_editor_type_page_type_year_month_day_get(project, editor_type, page_type, year, month, day)

Get top 100 editors by net bytes-difference.

Given a Mediawiki project and a date (day or month), returns a timeseries of the top 100 editors by net bytes-difference. You can filter by editor-type (all-editor-types, anonymous, group-bot, name-bot, user) or page-type (all-page-types, content or non-content). The user_text returned is either the mediawiki user_text if the user is registered, or \"Anonymous Editor\" if user is anonymous.  - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental) - Rate limit: 25 req/s - License: Data accessible via this endpoint is available under the   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/). 

### Example


```python
import openapi_client
from openapi_client.models.top_editors_by_net_bytes_diff import TopEditorsByNetBytesDiff
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
    api_instance = openapi_client.EditorsDataApi(api_client)
    project = 'project_example' # str | The name of any Wikimedia project formatted like {language code}.{project name}, for example en.wikipedia. You may pass en.wikipedia.org and the .org will be stripped off. For projects like commons without language codes, use commons.wikimedia. For projects like www.mediawiki.org, you can use that full string, or just use mediawiki or mediawiki.org. 
    editor_type = 'editor_type_example' # str | If you want to filter by editor-type, use one of anonymous, group-bot (registered accounts belonging to the bot group), name-bot (registered accounts not belonging to the bot group but having bot-like names) or user (registered account not in bot group nor having bot-like name). If you are interested in edits regardless of their editor-type, use all-editor-types. 
    page_type = 'page_type_example' # str | If you want to filter by page-type, use one of content (edits on pages in content namespaces) or non-content (edits on pages in non-content namespaces). If you are interested in edits regardless of their page-type, use all-page-types. 
    year = 'year_example' # str | The year of the date for which to retrieve top editors, in YYYY format.
    month = 'month_example' # str | The month of the date for which to retrieve top editors, in MM format. If you want to get the top editors of a whole month, the day parameter should be all-days.
    day = 'day_example' # str | The day of the date for which to retrieve top editors, in DD format, or all-days for a monthly value.

    try:
        # Get top 100 editors by net bytes-difference.
        api_response = api_instance.metrics_editors_top_by_net_bytes_difference_project_editor_type_page_type_year_month_day_get(project, editor_type, page_type, year, month, day)
        print("The response of EditorsDataApi->metrics_editors_top_by_net_bytes_difference_project_editor_type_page_type_year_month_day_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EditorsDataApi->metrics_editors_top_by_net_bytes_difference_project_editor_type_page_type_year_month_day_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | **str**| The name of any Wikimedia project formatted like {language code}.{project name}, for example en.wikipedia. You may pass en.wikipedia.org and the .org will be stripped off. For projects like commons without language codes, use commons.wikimedia. For projects like www.mediawiki.org, you can use that full string, or just use mediawiki or mediawiki.org.  | 
 **editor_type** | **str**| If you want to filter by editor-type, use one of anonymous, group-bot (registered accounts belonging to the bot group), name-bot (registered accounts not belonging to the bot group but having bot-like names) or user (registered account not in bot group nor having bot-like name). If you are interested in edits regardless of their editor-type, use all-editor-types.  | 
 **page_type** | **str**| If you want to filter by page-type, use one of content (edits on pages in content namespaces) or non-content (edits on pages in non-content namespaces). If you are interested in edits regardless of their page-type, use all-page-types.  | 
 **year** | **str**| The year of the date for which to retrieve top editors, in YYYY format. | 
 **month** | **str**| The month of the date for which to retrieve top editors, in MM format. If you want to get the top editors of a whole month, the day parameter should be all-days. | 
 **day** | **str**| The day of the date for which to retrieve top editors, in DD format, or all-days for a monthly value. | 

### Return type

[**TopEditorsByNetBytesDiff**](TopEditorsByNetBytesDiff.md)

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

