# openapi_client.PageviewsDataApi

All URIs are relative to *https://wikimedia.org/api/rest_v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**metrics_pageviews_aggregate_project_access_agent_granularity_start_end_get**](PageviewsDataApi.md#metrics_pageviews_aggregate_project_access_agent_granularity_start_end_get) | **GET** /metrics/pageviews/aggregate/{project}/{access}/{agent}/{granularity}/{start}/{end} | Get pageview counts for a project.
[**metrics_pageviews_per_article_project_access_agent_article_granularity_start_end_get**](PageviewsDataApi.md#metrics_pageviews_per_article_project_access_agent_article_granularity_start_end_get) | **GET** /metrics/pageviews/per-article/{project}/{access}/{agent}/{article}/{granularity}/{start}/{end} | Get pageview counts for a page.
[**metrics_pageviews_top_by_country_project_access_year_month_get**](PageviewsDataApi.md#metrics_pageviews_top_by_country_project_access_year_month_get) | **GET** /metrics/pageviews/top-by-country/{project}/{access}/{year}/{month} | Get pageviews by country and access method.
[**metrics_pageviews_top_project_access_year_month_day_get**](PageviewsDataApi.md#metrics_pageviews_top_project_access_year_month_day_get) | **GET** /metrics/pageviews/top/{project}/{access}/{year}/{month}/{day} | Get the most viewed articles for a project.


# **metrics_pageviews_aggregate_project_access_agent_granularity_start_end_get**
> PageviewProject metrics_pageviews_aggregate_project_access_agent_granularity_start_end_get(project, access, agent, granularity, start, end)

Get pageview counts for a project.

Given a date range, returns a timeseries of pageview counts. You can filter by project, access method and/or agent type. You can choose between daily and hourly granularity as well.  - Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable) - Rate limit: 100 req/s - License: Data accessible via this endpoint is available under the   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/). 

### Example


```python
import openapi_client
from openapi_client.models.pageview_project import PageviewProject
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
    api_instance = openapi_client.PageviewsDataApi(api_client)
    project = 'project_example' # str | If you want to filter by project, use the domain of any Wikimedia project, for example 'en.wikipedia.org', 'www.mediawiki.org' or 'commons.wikimedia.org'. If you are interested in all pageviews regardless of project, use all-projects. 
    access = 'access_example' # str | If you want to filter by access method, use one of desktop, mobile-app or mobile-web. If you are interested in pageviews regardless of access method, use all-access. 
    agent = 'agent_example' # str | If you want to filter by agent type, use one of user or spider. If you are interested in pageviews regardless of agent type, use all-agents. 
    granularity = 'granularity_example' # str | The time unit for the response data. As of today, the supported granularities for this endpoint are hourly, daily, and monthly. 
    start = 'start_example' # str | The timestamp of the first hour/day/month to include, in YYYYMMDDHH format
    end = 'end_example' # str | The timestamp of the last hour/day/month to include, in YYYYMMDDHH format

    try:
        # Get pageview counts for a project.
        api_response = api_instance.metrics_pageviews_aggregate_project_access_agent_granularity_start_end_get(project, access, agent, granularity, start, end)
        print("The response of PageviewsDataApi->metrics_pageviews_aggregate_project_access_agent_granularity_start_end_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PageviewsDataApi->metrics_pageviews_aggregate_project_access_agent_granularity_start_end_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | **str**| If you want to filter by project, use the domain of any Wikimedia project, for example &#39;en.wikipedia.org&#39;, &#39;www.mediawiki.org&#39; or &#39;commons.wikimedia.org&#39;. If you are interested in all pageviews regardless of project, use all-projects.  | 
 **access** | **str**| If you want to filter by access method, use one of desktop, mobile-app or mobile-web. If you are interested in pageviews regardless of access method, use all-access.  | 
 **agent** | **str**| If you want to filter by agent type, use one of user or spider. If you are interested in pageviews regardless of agent type, use all-agents.  | 
 **granularity** | **str**| The time unit for the response data. As of today, the supported granularities for this endpoint are hourly, daily, and monthly.  | 
 **start** | **str**| The timestamp of the first hour/day/month to include, in YYYYMMDDHH format | 
 **end** | **str**| The timestamp of the last hour/day/month to include, in YYYYMMDDHH format | 

### Return type

[**PageviewProject**](PageviewProject.md)

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

# **metrics_pageviews_per_article_project_access_agent_article_granularity_start_end_get**
> PageviewArticle metrics_pageviews_per_article_project_access_agent_article_granularity_start_end_get(project, access, agent, article, granularity, start, end)

Get pageview counts for a page.

Given a Mediawiki article and a date range, returns a daily timeseries of its pageview counts. You can also filter by access method and/or agent type.  - Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable) - Rate limit: 100 req/s - License: Data accessible via this endpoint is available under the   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/). 

### Example


```python
import openapi_client
from openapi_client.models.pageview_article import PageviewArticle
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
    api_instance = openapi_client.PageviewsDataApi(api_client)
    project = 'project_example' # str | If you want to filter by project, use the domain of any Wikimedia project, for example 'en.wikipedia.org', 'www.mediawiki.org' or 'commons.wikimedia.org'. 
    access = 'access_example' # str | If you want to filter by access method, use one of desktop, mobile-app or mobile-web. If you are interested in pageviews regardless of access method, use all-access. 
    agent = 'agent_example' # str | If you want to filter by agent type, use one of user, bot or spider. If you are interested in pageviews regardless of agent type, use all-agents. 
    article = 'article_example' # str | 'The title of any article in the specified project. Any spaces should be replaced with underscores. It also should be URI-encoded, so that non-URI-safe characters like %, / or ? are accepted. Example: Are_You_the_One%3F'. 
    granularity = 'granularity_example' # str | The time unit for the response data. As of today, the only supported granularity for this endpoint is daily and monthly. 
    start = 'start_example' # str | The date of the first day to include, in YYYYMMDD or YYYYMMDDHH format
    end = 'end_example' # str | The date of the last day to include, in YYYYMMDD or YYYYMMDDHH format

    try:
        # Get pageview counts for a page.
        api_response = api_instance.metrics_pageviews_per_article_project_access_agent_article_granularity_start_end_get(project, access, agent, article, granularity, start, end)
        print("The response of PageviewsDataApi->metrics_pageviews_per_article_project_access_agent_article_granularity_start_end_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PageviewsDataApi->metrics_pageviews_per_article_project_access_agent_article_granularity_start_end_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | **str**| If you want to filter by project, use the domain of any Wikimedia project, for example &#39;en.wikipedia.org&#39;, &#39;www.mediawiki.org&#39; or &#39;commons.wikimedia.org&#39;.  | 
 **access** | **str**| If you want to filter by access method, use one of desktop, mobile-app or mobile-web. If you are interested in pageviews regardless of access method, use all-access.  | 
 **agent** | **str**| If you want to filter by agent type, use one of user, bot or spider. If you are interested in pageviews regardless of agent type, use all-agents.  | 
 **article** | **str**| &#39;The title of any article in the specified project. Any spaces should be replaced with underscores. It also should be URI-encoded, so that non-URI-safe characters like %, / or ? are accepted. Example: Are_You_the_One%3F&#39;.  | 
 **granularity** | **str**| The time unit for the response data. As of today, the only supported granularity for this endpoint is daily and monthly.  | 
 **start** | **str**| The date of the first day to include, in YYYYMMDD or YYYYMMDDHH format | 
 **end** | **str**| The date of the last day to include, in YYYYMMDD or YYYYMMDDHH format | 

### Return type

[**PageviewArticle**](PageviewArticle.md)

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

# **metrics_pageviews_top_by_country_project_access_year_month_get**
> ByCountry metrics_pageviews_top_by_country_project_access_year_month_get(project, access, year, month)

Get pageviews by country and access method.

Lists the pageviews to this project, split by country of origin for a given month. Because of privacy reasons, pageviews are given in a bucketed format, and countries with less than 100 views do not get reported. Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental) - Rate limit: 100 req/s - License: Data accessible via this endpoint is available under the   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/). 

### Example


```python
import openapi_client
from openapi_client.models.by_country import ByCountry
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
    api_instance = openapi_client.PageviewsDataApi(api_client)
    project = 'project_example' # str | If you want to filter by project, use the domain of any Wikimedia project, for example 'en.wikipedia.org', 'www.mediawiki.org' or 'commons.wikimedia.org'. 
    access = 'access_example' # str | If you want to filter by access method, use one of desktop, mobile-app or mobile-web. If you are interested in pageviews regardless of access method, use all-access. 
    year = 'year_example' # str | The year of the date for which to retrieve top countries, in YYYY format.
    month = 'month_example' # str | The month of the date for which to retrieve top countries, in MM format. 

    try:
        # Get pageviews by country and access method.
        api_response = api_instance.metrics_pageviews_top_by_country_project_access_year_month_get(project, access, year, month)
        print("The response of PageviewsDataApi->metrics_pageviews_top_by_country_project_access_year_month_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PageviewsDataApi->metrics_pageviews_top_by_country_project_access_year_month_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | **str**| If you want to filter by project, use the domain of any Wikimedia project, for example &#39;en.wikipedia.org&#39;, &#39;www.mediawiki.org&#39; or &#39;commons.wikimedia.org&#39;.  | 
 **access** | **str**| If you want to filter by access method, use one of desktop, mobile-app or mobile-web. If you are interested in pageviews regardless of access method, use all-access.  | 
 **year** | **str**| The year of the date for which to retrieve top countries, in YYYY format. | 
 **month** | **str**| The month of the date for which to retrieve top countries, in MM format.  | 

### Return type

[**ByCountry**](ByCountry.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of top countries by pageviews in the project |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **metrics_pageviews_top_project_access_year_month_day_get**
> PageviewTops metrics_pageviews_top_project_access_year_month_day_get(project, access, year, month, day)

Get the most viewed articles for a project.

Lists the 1000 most viewed articles for a given project and timespan (month or day). You can filter by access method.  - Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable) - Rate limit: 100 req/s - License: Data accessible via this endpoint is available under the   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/). 

### Example


```python
import openapi_client
from openapi_client.models.pageview_tops import PageviewTops
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
    api_instance = openapi_client.PageviewsDataApi(api_client)
    project = 'project_example' # str | If you want to filter by project, use the domain of any Wikimedia project, for example 'en.wikipedia.org', 'www.mediawiki.org' or 'commons.wikimedia.org'. 
    access = 'access_example' # str | If you want to filter by access method, use one of desktop, mobile-app or mobile-web. If you are interested in pageviews regardless of access method, use all-access. 
    year = 'year_example' # str | The year of the date for which to retrieve top articles, in YYYY format.
    month = 'month_example' # str | The month of the date for which to retrieve top articles, in MM format. If you want to get the top articles of a whole month, the day parameter should be all-days. 
    day = 'day_example' # str | The day of the date for which to retrieve top articles, in DD format.

    try:
        # Get the most viewed articles for a project.
        api_response = api_instance.metrics_pageviews_top_project_access_year_month_day_get(project, access, year, month, day)
        print("The response of PageviewsDataApi->metrics_pageviews_top_project_access_year_month_day_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PageviewsDataApi->metrics_pageviews_top_project_access_year_month_day_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | **str**| If you want to filter by project, use the domain of any Wikimedia project, for example &#39;en.wikipedia.org&#39;, &#39;www.mediawiki.org&#39; or &#39;commons.wikimedia.org&#39;.  | 
 **access** | **str**| If you want to filter by access method, use one of desktop, mobile-app or mobile-web. If you are interested in pageviews regardless of access method, use all-access.  | 
 **year** | **str**| The year of the date for which to retrieve top articles, in YYYY format. | 
 **month** | **str**| The month of the date for which to retrieve top articles, in MM format. If you want to get the top articles of a whole month, the day parameter should be all-days.  | 
 **day** | **str**| The day of the date for which to retrieve top articles, in DD format. | 

### Return type

[**PageviewTops**](PageviewTops.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of top articles in the project |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

