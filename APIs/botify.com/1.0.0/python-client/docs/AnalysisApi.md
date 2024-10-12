# openapi_client.AnalysisApi

All URIs are relative to *https://api.botify.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_urls_export**](AnalysisApi.md#create_urls_export) | **POST** /analyses/{username}/{project_slug}/{analysis_slug}/urls/export | Creates a new UrlExport object and starts a task that will export the results into a csv
[**get_analysis_summary**](AnalysisApi.md#get_analysis_summary) | **GET** /analyses/{username}/{project_slug}/{analysis_slug} | Get an Analysis detail
[**get_crawl_statistics**](AnalysisApi.md#get_crawl_statistics) | **GET** /analyses/{username}/{project_slug}/{analysis_slug}/crawl_statistics | Return global statistics for an analysis
[**get_crawl_statistics_by_frequency**](AnalysisApi.md#get_crawl_statistics_by_frequency) | **GET** /analyses/{username}/{project_slug}/{analysis_slug}/crawl_statistics/time | Return crawl statistics grouped by time frequency (1 min, 5 mins or 60 min)
[**get_crawl_statistics_urls**](AnalysisApi.md#get_crawl_statistics_urls) | **GET** /analyses/{username}/{project_slug}/{analysis_slug}/crawl_statistics/urls/{list_type} | Return a list of 1000 latest URLs crawled (all crawled URLs or only URLS with HTTP errors)
[**get_ganalytics_orphan_urls**](AnalysisApi.md#get_ganalytics_orphan_urls) | **GET** /analyses/{username}/{project_slug}/{analysis_slug}/features/ganalytics/orphan_urls/{medium}/{source} | List of Orphan URLs
[**get_links_percentiles**](AnalysisApi.md#get_links_percentiles) | **GET** /analyses/{username}/{project_slug}/{analysis_slug}/features/links/percentiles | Get inlinks percentiles
[**get_links_top_domains**](AnalysisApi.md#get_links_top_domains) | **GET** /analyses/{username}/{project_slug}/{analysis_slug}/features/top_domains/domains | Top domains
[**get_links_top_subdomains**](AnalysisApi.md#get_links_top_subdomains) | **GET** /analyses/{username}/{project_slug}/{analysis_slug}/features/top_domains/subdomains | Top subddomains
[**get_page_rank_lost**](AnalysisApi.md#get_page_rank_lost) | **GET** /analyses/{username}/{project_slug}/{analysis_slug}/features/pagerank/lost | Lost pagerank
[**get_sitemaps_report**](AnalysisApi.md#get_sitemaps_report) | **GET** /analyses/{username}/{project_slug}/{analysis_slug}/features/sitemaps/report | Get global information of the sitemaps found (sitemaps indexes, invalid sitemaps urls, etc
[**get_sitemaps_samples_out_of_config**](AnalysisApi.md#get_sitemaps_samples_out_of_config) | **GET** /analyses/{username}/{project_slug}/{analysis_slug}/features/sitemaps/samples/out_of_config | Sample list of URLs which were found in your sitemaps but outside of the
[**get_sitemaps_samples_sitemaps_only**](AnalysisApi.md#get_sitemaps_samples_sitemaps_only) | **GET** /analyses/{username}/{project_slug}/{analysis_slug}/features/sitemaps/samples/sitemap_only | Sample list of URLs which were found in your sitemaps, within the project
[**get_url_detail**](AnalysisApi.md#get_url_detail) | **GET** /analyses/{username}/{project_slug}/{analysis_slug}/urls/{url} | Gets the detail of an URL for an analysis
[**get_urls**](AnalysisApi.md#get_urls) | **POST** /analyses/{username}/{project_slug}/{analysis_slug}/urls | Executes a query and returns a paginated response
[**get_urls_aggs**](AnalysisApi.md#get_urls_aggs) | **POST** /analyses/{username}/{project_slug}/{analysis_slug}/urls/aggs | Query aggregator
[**get_urls_datamodel**](AnalysisApi.md#get_urls_datamodel) | **GET** /analyses/{username}/{project_slug}/{analysis_slug}/urls/datamodel | Gets an Analysis datamodel
[**get_urls_export_status**](AnalysisApi.md#get_urls_export_status) | **GET** /analyses/{username}/{project_slug}/{analysis_slug}/urls/export/{url_export_id} | Checks the status of an CSVUrlExportJob object
[**get_urls_exports**](AnalysisApi.md#get_urls_exports) | **GET** /analyses/{username}/{project_slug}/{analysis_slug}/urls/export | A list of the CSV Exports requests and their current status
[**get_urls_suggested_filters**](AnalysisApi.md#get_urls_suggested_filters) | **POST** /analyses/{username}/{project_slug}/{analysis_slug}/urls/suggested_filters | Return most frequent segments (&#x3D; suggested patterns in the previous version)


# **create_urls_export**
> CsvExportStatus create_urls_export(username, project_slug, analysis_slug, area=area, urls_query=urls_query)

Creates a new UrlExport object and starts a task that will export the results into a csv

Creates a new UrlExport object and starts a task that will export the results into a csv. Returns the model id that manages the task

### Example

* Api Key Authentication (DjangoRestToken):

```python
import openapi_client
from openapi_client.models.csv_export_status import CsvExportStatus
from openapi_client.models.urls_query import UrlsQuery
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.botify.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.botify.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: DjangoRestToken
configuration.api_key['DjangoRestToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['DjangoRestToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AnalysisApi(api_client)
    username = 'username_example' # str | User's identifier
    project_slug = 'project_slug_example' # str | Project's identifier
    analysis_slug = 'analysis_slug_example' # str | Analysis' identifier
    area = current # str |  (optional) (default to current)
    urls_query = openapi_client.UrlsQuery() # UrlsQuery |  (optional)

    try:
        # Creates a new UrlExport object and starts a task that will export the results into a csv
        api_response = api_instance.create_urls_export(username, project_slug, analysis_slug, area=area, urls_query=urls_query)
        print("The response of AnalysisApi->create_urls_export:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalysisApi->create_urls_export: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **str**| User&#39;s identifier | 
 **project_slug** | **str**| Project&#39;s identifier | 
 **analysis_slug** | **str**| Analysis&#39; identifier | 
 **area** | **str**|  | [optional] [default to current]
 **urls_query** | [**UrlsQuery**](UrlsQuery.md)|  | [optional] 

### Return type

[**CsvExportStatus**](CsvExportStatus.md)

### Authorization

[DjangoRestToken](../README.md#DjangoRestToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful operation |  -  |
**0** | error payload |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_analysis_summary**
> AnalysisDetail get_analysis_summary(username, project_slug, analysis_slug)

Get an Analysis detail

Get an Analysis detail

### Example

* Api Key Authentication (DjangoRestToken):

```python
import openapi_client
from openapi_client.models.analysis_detail import AnalysisDetail
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.botify.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.botify.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: DjangoRestToken
configuration.api_key['DjangoRestToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['DjangoRestToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AnalysisApi(api_client)
    username = 'username_example' # str | User's identifier
    project_slug = 'project_slug_example' # str | Project's identifier
    analysis_slug = 'analysis_slug_example' # str | Analysis' identifier

    try:
        # Get an Analysis detail
        api_response = api_instance.get_analysis_summary(username, project_slug, analysis_slug)
        print("The response of AnalysisApi->get_analysis_summary:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalysisApi->get_analysis_summary: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **str**| User&#39;s identifier | 
 **project_slug** | **str**| Project&#39;s identifier | 
 **analysis_slug** | **str**| Analysis&#39; identifier | 

### Return type

[**AnalysisDetail**](AnalysisDetail.md)

### Authorization

[DjangoRestToken](../README.md#DjangoRestToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**0** | error payload |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_crawl_statistics**
> CrawlStatistics get_crawl_statistics(username, project_slug, analysis_slug)

Return global statistics for an analysis

Return global statistics for an analysis

### Example

* Api Key Authentication (DjangoRestToken):

```python
import openapi_client
from openapi_client.models.crawl_statistics import CrawlStatistics
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.botify.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.botify.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: DjangoRestToken
configuration.api_key['DjangoRestToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['DjangoRestToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AnalysisApi(api_client)
    username = 'username_example' # str | User's identifier
    project_slug = 'project_slug_example' # str | Project's identifier
    analysis_slug = 'analysis_slug_example' # str | Analysis' identifier

    try:
        # Return global statistics for an analysis
        api_response = api_instance.get_crawl_statistics(username, project_slug, analysis_slug)
        print("The response of AnalysisApi->get_crawl_statistics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalysisApi->get_crawl_statistics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **str**| User&#39;s identifier | 
 **project_slug** | **str**| Project&#39;s identifier | 
 **analysis_slug** | **str**| Analysis&#39; identifier | 

### Return type

[**CrawlStatistics**](CrawlStatistics.md)

### Authorization

[DjangoRestToken](../README.md#DjangoRestToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**0** | error payload |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_crawl_statistics_by_frequency**
> CrawlStatisticsTime get_crawl_statistics_by_frequency(username, project_slug, analysis_slug, frequency, limit=limit)

Return crawl statistics grouped by time frequency (1 min, 5 mins or 60 min)

Return crawl statistics grouped by time frequency (1 min, 5 mins or 60 min) for an analysis

### Example

* Api Key Authentication (DjangoRestToken):

```python
import openapi_client
from openapi_client.models.crawl_statistics_time import CrawlStatisticsTime
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.botify.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.botify.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: DjangoRestToken
configuration.api_key['DjangoRestToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['DjangoRestToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AnalysisApi(api_client)
    username = 'username_example' # str | User's identifier
    project_slug = 'project_slug_example' # str | Project's identifier
    analysis_slug = 'analysis_slug_example' # str | Analysis' identifier
    frequency = 'frequency_example' # str | Aggregation frequency
    limit = 56 # int | max number of elements to retrieve (optional)

    try:
        # Return crawl statistics grouped by time frequency (1 min, 5 mins or 60 min)
        api_response = api_instance.get_crawl_statistics_by_frequency(username, project_slug, analysis_slug, frequency, limit=limit)
        print("The response of AnalysisApi->get_crawl_statistics_by_frequency:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalysisApi->get_crawl_statistics_by_frequency: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **str**| User&#39;s identifier | 
 **project_slug** | **str**| Project&#39;s identifier | 
 **analysis_slug** | **str**| Analysis&#39; identifier | 
 **frequency** | **str**| Aggregation frequency | 
 **limit** | **int**| max number of elements to retrieve | [optional] 

### Return type

[**CrawlStatisticsTime**](CrawlStatisticsTime.md)

### Authorization

[DjangoRestToken](../README.md#DjangoRestToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**0** | error payload |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_crawl_statistics_urls**
> List[object] get_crawl_statistics_urls(username, project_slug, analysis_slug, list_type)

Return a list of 1000 latest URLs crawled (all crawled URLs or only URLS with HTTP errors)

Return a list of 1000 latest URLs crawled (all crawled URLs or only URLS with HTTP errors)

### Example

* Api Key Authentication (DjangoRestToken):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.botify.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.botify.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: DjangoRestToken
configuration.api_key['DjangoRestToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['DjangoRestToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AnalysisApi(api_client)
    username = 'username_example' # str | User's identifier
    project_slug = 'project_slug_example' # str | Project's identifier
    analysis_slug = 'analysis_slug_example' # str | Analysis' identifier
    list_type = 'list_type_example' # str | URLs list type (crawled URLs or error URLs)

    try:
        # Return a list of 1000 latest URLs crawled (all crawled URLs or only URLS with HTTP errors)
        api_response = api_instance.get_crawl_statistics_urls(username, project_slug, analysis_slug, list_type)
        print("The response of AnalysisApi->get_crawl_statistics_urls:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalysisApi->get_crawl_statistics_urls: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **str**| User&#39;s identifier | 
 **project_slug** | **str**| Project&#39;s identifier | 
 **analysis_slug** | **str**| Analysis&#39; identifier | 
 **list_type** | **str**| URLs list type (crawled URLs or error URLs) | 

### Return type

**List[object]**

### Authorization

[DjangoRestToken](../README.md#DjangoRestToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**0** | error payload |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_ganalytics_orphan_urls**
> GetGanalyticsOrphanURLs200Response get_ganalytics_orphan_urls(username, project_slug, analysis_slug, medium, source, page=page, size=size)

List of Orphan URLs

List of Orphan URLs. URLs which generated visits from the selected source according to Google Analytics data, but were not crawled with by the Botify crawler (either because no links to them were found on the website, or because the crawler was not allowed to follow these links according to the project settings).   For a search engine (medium: origanic; sources: all, aol, ask, baidu, bing, google, naver, yahoo, yandex) or a social network (medium: social; sources: all, facebook, google+, linkedin, pinterest, reddit, tumblr, twitter)

### Example

* Api Key Authentication (DjangoRestToken):

```python
import openapi_client
from openapi_client.models.get_ganalytics_orphan_urls200_response import GetGanalyticsOrphanURLs200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.botify.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.botify.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: DjangoRestToken
configuration.api_key['DjangoRestToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['DjangoRestToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AnalysisApi(api_client)
    username = 'username_example' # str | User's identifier
    project_slug = 'project_slug_example' # str | Project's identifier
    analysis_slug = 'analysis_slug_example' # str | Analysis' identifier
    medium = 'medium_example' # str | Type of traffic, value: 'organic' (from search engine)or 'social' (from a social network)
    source = 'source_example' # str | Traffic source, value: name of the search engine or social network
    page = 56 # int | Page Number (optional)
    size = 56 # int | Page Size (optional)

    try:
        # List of Orphan URLs
        api_response = api_instance.get_ganalytics_orphan_urls(username, project_slug, analysis_slug, medium, source, page=page, size=size)
        print("The response of AnalysisApi->get_ganalytics_orphan_urls:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalysisApi->get_ganalytics_orphan_urls: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **str**| User&#39;s identifier | 
 **project_slug** | **str**| Project&#39;s identifier | 
 **analysis_slug** | **str**| Analysis&#39; identifier | 
 **medium** | **str**| Type of traffic, value: &#39;organic&#39; (from search engine)or &#39;social&#39; (from a social network) | 
 **source** | **str**| Traffic source, value: name of the search engine or social network | 
 **page** | **int**| Page Number | [optional] 
 **size** | **int**| Page Size | [optional] 

### Return type

[**GetGanalyticsOrphanURLs200Response**](GetGanalyticsOrphanURLs200Response.md)

### Authorization

[DjangoRestToken](../README.md#DjangoRestToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**0** | error payload |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_links_percentiles**
> LinksPercentiles get_links_percentiles(username, project_slug, analysis_slug)

Get inlinks percentiles

Get inlinks percentiles

### Example

* Api Key Authentication (DjangoRestToken):

```python
import openapi_client
from openapi_client.models.links_percentiles import LinksPercentiles
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.botify.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.botify.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: DjangoRestToken
configuration.api_key['DjangoRestToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['DjangoRestToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AnalysisApi(api_client)
    username = 'username_example' # str | User's identifier
    project_slug = 'project_slug_example' # str | Project's identifier
    analysis_slug = 'analysis_slug_example' # str | Analysis' identifier

    try:
        # Get inlinks percentiles
        api_response = api_instance.get_links_percentiles(username, project_slug, analysis_slug)
        print("The response of AnalysisApi->get_links_percentiles:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalysisApi->get_links_percentiles: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **str**| User&#39;s identifier | 
 **project_slug** | **str**| Project&#39;s identifier | 
 **analysis_slug** | **str**| Analysis&#39; identifier | 

### Return type

[**LinksPercentiles**](LinksPercentiles.md)

### Authorization

[DjangoRestToken](../README.md#DjangoRestToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**0** | error payload |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_links_top_domains**
> GetLinksTopDomains200Response get_links_top_domains(username, project_slug, analysis_slug, page=page, size=size)

Top domains

Top domains

### Example

* Api Key Authentication (DjangoRestToken):

```python
import openapi_client
from openapi_client.models.get_links_top_domains200_response import GetLinksTopDomains200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.botify.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.botify.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: DjangoRestToken
configuration.api_key['DjangoRestToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['DjangoRestToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AnalysisApi(api_client)
    username = 'username_example' # str | User's identifier
    project_slug = 'project_slug_example' # str | Project's identifier
    analysis_slug = 'analysis_slug_example' # str | Analysis' identifier
    page = 56 # int | Page Number (optional)
    size = 56 # int | Page Size (optional)

    try:
        # Top domains
        api_response = api_instance.get_links_top_domains(username, project_slug, analysis_slug, page=page, size=size)
        print("The response of AnalysisApi->get_links_top_domains:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalysisApi->get_links_top_domains: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **str**| User&#39;s identifier | 
 **project_slug** | **str**| Project&#39;s identifier | 
 **analysis_slug** | **str**| Analysis&#39; identifier | 
 **page** | **int**| Page Number | [optional] 
 **size** | **int**| Page Size | [optional] 

### Return type

[**GetLinksTopDomains200Response**](GetLinksTopDomains200Response.md)

### Authorization

[DjangoRestToken](../README.md#DjangoRestToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**0** | error payload |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_links_top_subdomains**
> GetLinksTopDomains200Response get_links_top_subdomains(username, project_slug, analysis_slug, page=page, size=size)

Top subddomains

Top subddomains

### Example

* Api Key Authentication (DjangoRestToken):

```python
import openapi_client
from openapi_client.models.get_links_top_domains200_response import GetLinksTopDomains200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.botify.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.botify.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: DjangoRestToken
configuration.api_key['DjangoRestToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['DjangoRestToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AnalysisApi(api_client)
    username = 'username_example' # str | User's identifier
    project_slug = 'project_slug_example' # str | Project's identifier
    analysis_slug = 'analysis_slug_example' # str | Analysis' identifier
    page = 56 # int | Page Number (optional)
    size = 56 # int | Page Size (optional)

    try:
        # Top subddomains
        api_response = api_instance.get_links_top_subdomains(username, project_slug, analysis_slug, page=page, size=size)
        print("The response of AnalysisApi->get_links_top_subdomains:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalysisApi->get_links_top_subdomains: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **str**| User&#39;s identifier | 
 **project_slug** | **str**| Project&#39;s identifier | 
 **analysis_slug** | **str**| Analysis&#39; identifier | 
 **page** | **int**| Page Number | [optional] 
 **size** | **int**| Page Size | [optional] 

### Return type

[**GetLinksTopDomains200Response**](GetLinksTopDomains200Response.md)

### Authorization

[DjangoRestToken](../README.md#DjangoRestToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**0** | error payload |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_page_rank_lost**
> PageRankLost get_page_rank_lost(username, project_slug, analysis_slug)

Lost pagerank

Lost pagerank

### Example

* Api Key Authentication (DjangoRestToken):

```python
import openapi_client
from openapi_client.models.page_rank_lost import PageRankLost
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.botify.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.botify.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: DjangoRestToken
configuration.api_key['DjangoRestToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['DjangoRestToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AnalysisApi(api_client)
    username = 'username_example' # str | User's identifier
    project_slug = 'project_slug_example' # str | Project's identifier
    analysis_slug = 'analysis_slug_example' # str | Analysis' identifier

    try:
        # Lost pagerank
        api_response = api_instance.get_page_rank_lost(username, project_slug, analysis_slug)
        print("The response of AnalysisApi->get_page_rank_lost:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalysisApi->get_page_rank_lost: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **str**| User&#39;s identifier | 
 **project_slug** | **str**| Project&#39;s identifier | 
 **analysis_slug** | **str**| Analysis&#39; identifier | 

### Return type

[**PageRankLost**](PageRankLost.md)

### Authorization

[DjangoRestToken](../README.md#DjangoRestToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**0** | error payload |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_sitemaps_report**
> SitemapsReport get_sitemaps_report(username, project_slug, analysis_slug)

Get global information of the sitemaps found (sitemaps indexes, invalid sitemaps urls, etc

Get global information of the sitemaps found (sitemaps indexes, invalid sitemaps urls, etc.)

### Example

* Api Key Authentication (DjangoRestToken):

```python
import openapi_client
from openapi_client.models.sitemaps_report import SitemapsReport
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.botify.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.botify.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: DjangoRestToken
configuration.api_key['DjangoRestToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['DjangoRestToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AnalysisApi(api_client)
    username = 'username_example' # str | User's identifier
    project_slug = 'project_slug_example' # str | Project's identifier
    analysis_slug = 'analysis_slug_example' # str | Analysis' identifier

    try:
        # Get global information of the sitemaps found (sitemaps indexes, invalid sitemaps urls, etc
        api_response = api_instance.get_sitemaps_report(username, project_slug, analysis_slug)
        print("The response of AnalysisApi->get_sitemaps_report:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalysisApi->get_sitemaps_report: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **str**| User&#39;s identifier | 
 **project_slug** | **str**| Project&#39;s identifier | 
 **analysis_slug** | **str**| Analysis&#39; identifier | 

### Return type

[**SitemapsReport**](SitemapsReport.md)

### Authorization

[DjangoRestToken](../README.md#DjangoRestToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**0** | error payload |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_sitemaps_samples_out_of_config**
> GetSitemapsSamplesOutOfConfig200Response get_sitemaps_samples_out_of_config(username, project_slug, analysis_slug, page=page, size=size)

Sample list of URLs which were found in your sitemaps but outside of the

Sample list of URLs which were found in your sitemaps but outside of the crawl perimeter defined for the project, for instance domain/subdomain or protocol (HTTP/HTTPS) not allowed in the crawl settings.

### Example

* Api Key Authentication (DjangoRestToken):

```python
import openapi_client
from openapi_client.models.get_sitemaps_samples_out_of_config200_response import GetSitemapsSamplesOutOfConfig200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.botify.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.botify.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: DjangoRestToken
configuration.api_key['DjangoRestToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['DjangoRestToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AnalysisApi(api_client)
    username = 'username_example' # str | User's identifier
    project_slug = 'project_slug_example' # str | Project's identifier
    analysis_slug = 'analysis_slug_example' # str | Analysis' identifier
    page = 56 # int | Page Number (optional)
    size = 56 # int | Page Size (optional)

    try:
        # Sample list of URLs which were found in your sitemaps but outside of the
        api_response = api_instance.get_sitemaps_samples_out_of_config(username, project_slug, analysis_slug, page=page, size=size)
        print("The response of AnalysisApi->get_sitemaps_samples_out_of_config:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalysisApi->get_sitemaps_samples_out_of_config: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **str**| User&#39;s identifier | 
 **project_slug** | **str**| Project&#39;s identifier | 
 **analysis_slug** | **str**| Analysis&#39; identifier | 
 **page** | **int**| Page Number | [optional] 
 **size** | **int**| Page Size | [optional] 

### Return type

[**GetSitemapsSamplesOutOfConfig200Response**](GetSitemapsSamplesOutOfConfig200Response.md)

### Authorization

[DjangoRestToken](../README.md#DjangoRestToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**0** | error payload |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_sitemaps_samples_sitemaps_only**
> GetSitemapsSamplesOutOfConfig200Response get_sitemaps_samples_sitemaps_only(username, project_slug, analysis_slug, page=page, size=size)

Sample list of URLs which were found in your sitemaps, within the project

Sample list of URLs which were found in your sitemaps, within the project allowed scope (allowed domains/subdomains/protocols), but not found by the Botify crawler.

### Example

* Api Key Authentication (DjangoRestToken):

```python
import openapi_client
from openapi_client.models.get_sitemaps_samples_out_of_config200_response import GetSitemapsSamplesOutOfConfig200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.botify.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.botify.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: DjangoRestToken
configuration.api_key['DjangoRestToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['DjangoRestToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AnalysisApi(api_client)
    username = 'username_example' # str | User's identifier
    project_slug = 'project_slug_example' # str | Project's identifier
    analysis_slug = 'analysis_slug_example' # str | Analysis' identifier
    page = 56 # int | Page Number (optional)
    size = 56 # int | Page Size (optional)

    try:
        # Sample list of URLs which were found in your sitemaps, within the project
        api_response = api_instance.get_sitemaps_samples_sitemaps_only(username, project_slug, analysis_slug, page=page, size=size)
        print("The response of AnalysisApi->get_sitemaps_samples_sitemaps_only:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalysisApi->get_sitemaps_samples_sitemaps_only: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **str**| User&#39;s identifier | 
 **project_slug** | **str**| Project&#39;s identifier | 
 **analysis_slug** | **str**| Analysis&#39; identifier | 
 **page** | **int**| Page Number | [optional] 
 **size** | **int**| Page Size | [optional] 

### Return type

[**GetSitemapsSamplesOutOfConfig200Response**](GetSitemapsSamplesOutOfConfig200Response.md)

### Authorization

[DjangoRestToken](../README.md#DjangoRestToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**0** | error payload |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_url_detail**
> object get_url_detail(username, project_slug, analysis_slug, url, fields=fields)

Gets the detail of an URL for an analysis

Gets the detail of an URL for an analysis

### Example

* Api Key Authentication (DjangoRestToken):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.botify.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.botify.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: DjangoRestToken
configuration.api_key['DjangoRestToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['DjangoRestToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AnalysisApi(api_client)
    username = 'username_example' # str | User's identifier
    project_slug = 'project_slug_example' # str | Project's identifier
    analysis_slug = 'analysis_slug_example' # str | Analysis' identifier
    url = 'url_example' # str | (Urlencoded) Searched URL
    fields = ['fields_example'] # List[str] | comma separated list of fields to return (c.f. URLs Datamodel) (optional)

    try:
        # Gets the detail of an URL for an analysis
        api_response = api_instance.get_url_detail(username, project_slug, analysis_slug, url, fields=fields)
        print("The response of AnalysisApi->get_url_detail:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalysisApi->get_url_detail: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **str**| User&#39;s identifier | 
 **project_slug** | **str**| Project&#39;s identifier | 
 **analysis_slug** | **str**| Analysis&#39; identifier | 
 **url** | **str**| (Urlencoded) Searched URL | 
 **fields** | [**List[str]**](str.md)| comma separated list of fields to return (c.f. URLs Datamodel) | [optional] 

### Return type

**object**

### Authorization

[DjangoRestToken](../README.md#DjangoRestToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**0** | error payload |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_urls**
> GetUrls200Response get_urls(username, project_slug, analysis_slug, area=area, page=page, size=size, urls_query=urls_query)

Executes a query and returns a paginated response

Executes a query and returns a paginated response

### Example

* Api Key Authentication (DjangoRestToken):

```python
import openapi_client
from openapi_client.models.get_urls200_response import GetUrls200Response
from openapi_client.models.urls_query import UrlsQuery
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.botify.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.botify.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: DjangoRestToken
configuration.api_key['DjangoRestToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['DjangoRestToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AnalysisApi(api_client)
    username = 'username_example' # str | User's identifier
    project_slug = 'project_slug_example' # str | Project's identifier
    analysis_slug = 'analysis_slug_example' # str | Analysis' identifier
    area = current # str | Analysis context to execute the query (optional) (default to current)
    page = 56 # int | Page Number (optional)
    size = 56 # int | Page Size (optional)
    urls_query = openapi_client.UrlsQuery() # UrlsQuery |  (optional)

    try:
        # Executes a query and returns a paginated response
        api_response = api_instance.get_urls(username, project_slug, analysis_slug, area=area, page=page, size=size, urls_query=urls_query)
        print("The response of AnalysisApi->get_urls:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalysisApi->get_urls: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **str**| User&#39;s identifier | 
 **project_slug** | **str**| Project&#39;s identifier | 
 **analysis_slug** | **str**| Analysis&#39; identifier | 
 **area** | **str**| Analysis context to execute the query | [optional] [default to current]
 **page** | **int**| Page Number | [optional] 
 **size** | **int**| Page Size | [optional] 
 **urls_query** | [**UrlsQuery**](UrlsQuery.md)|  | [optional] 

### Return type

[**GetUrls200Response**](GetUrls200Response.md)

### Authorization

[DjangoRestToken](../README.md#DjangoRestToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**0** | error payload |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_urls_aggs**
> List[object] get_urls_aggs(username, project_slug, analysis_slug, area=area, urls_aggs_query=urls_aggs_query)

Query aggregator

Query aggregator. It accepts multiple queries

### Example

* Api Key Authentication (DjangoRestToken):

```python
import openapi_client
from openapi_client.models.urls_aggs_query import UrlsAggsQuery
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.botify.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.botify.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: DjangoRestToken
configuration.api_key['DjangoRestToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['DjangoRestToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AnalysisApi(api_client)
    username = 'username_example' # str | User's identifier
    project_slug = 'project_slug_example' # str | Project's identifier
    analysis_slug = 'analysis_slug_example' # str | Analysis' identifier
    area = current # str |  (optional) (default to current)
    urls_aggs_query = [openapi_client.UrlsAggsQuery()] # List[UrlsAggsQuery] |  (optional)

    try:
        # Query aggregator
        api_response = api_instance.get_urls_aggs(username, project_slug, analysis_slug, area=area, urls_aggs_query=urls_aggs_query)
        print("The response of AnalysisApi->get_urls_aggs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalysisApi->get_urls_aggs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **str**| User&#39;s identifier | 
 **project_slug** | **str**| Project&#39;s identifier | 
 **analysis_slug** | **str**| Analysis&#39; identifier | 
 **area** | **str**|  | [optional] [default to current]
 **urls_aggs_query** | [**List[UrlsAggsQuery]**](UrlsAggsQuery.md)|  | [optional] 

### Return type

**List[object]**

### Authorization

[DjangoRestToken](../README.md#DjangoRestToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**0** | error payload |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_urls_datamodel**
> CrawlDatamodel get_urls_datamodel(username, project_slug, analysis_slug, area=area)

Gets an Analysis datamodel

Gets an Analysis datamodel

### Example

* Api Key Authentication (DjangoRestToken):

```python
import openapi_client
from openapi_client.models.crawl_datamodel import CrawlDatamodel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.botify.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.botify.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: DjangoRestToken
configuration.api_key['DjangoRestToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['DjangoRestToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AnalysisApi(api_client)
    username = 'username_example' # str | User's identifier
    project_slug = 'project_slug_example' # str | Project's identifier
    analysis_slug = 'analysis_slug_example' # str | Analysis' identifier
    area = current # str |  (optional) (default to current)

    try:
        # Gets an Analysis datamodel
        api_response = api_instance.get_urls_datamodel(username, project_slug, analysis_slug, area=area)
        print("The response of AnalysisApi->get_urls_datamodel:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalysisApi->get_urls_datamodel: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **str**| User&#39;s identifier | 
 **project_slug** | **str**| Project&#39;s identifier | 
 **analysis_slug** | **str**| Analysis&#39; identifier | 
 **area** | **str**|  | [optional] [default to current]

### Return type

[**CrawlDatamodel**](CrawlDatamodel.md)

### Authorization

[DjangoRestToken](../README.md#DjangoRestToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**0** | error payload |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_urls_export_status**
> CsvExportStatus get_urls_export_status(username, project_slug, analysis_slug, url_export_id)

Checks the status of an CSVUrlExportJob object

Checks the status of an CSVUrlExportJob object. Returns json object with the status.

### Example

* Api Key Authentication (DjangoRestToken):

```python
import openapi_client
from openapi_client.models.csv_export_status import CsvExportStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.botify.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.botify.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: DjangoRestToken
configuration.api_key['DjangoRestToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['DjangoRestToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AnalysisApi(api_client)
    username = 'username_example' # str | User's identifier
    project_slug = 'project_slug_example' # str | Project's identifier
    analysis_slug = 'analysis_slug_example' # str | Analysis' identifier
    url_export_id = 'url_export_id_example' # str | Url Export ID

    try:
        # Checks the status of an CSVUrlExportJob object
        api_response = api_instance.get_urls_export_status(username, project_slug, analysis_slug, url_export_id)
        print("The response of AnalysisApi->get_urls_export_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalysisApi->get_urls_export_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **str**| User&#39;s identifier | 
 **project_slug** | **str**| Project&#39;s identifier | 
 **analysis_slug** | **str**| Analysis&#39; identifier | 
 **url_export_id** | **str**| Url Export ID | 

### Return type

[**CsvExportStatus**](CsvExportStatus.md)

### Authorization

[DjangoRestToken](../README.md#DjangoRestToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**0** | error payload |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_urls_exports**
> GetUrlsExports200Response get_urls_exports(username, project_slug, analysis_slug, page=page, size=size)

A list of the CSV Exports requests and their current status

A list of the CSV Exports requests and their current status

### Example

* Api Key Authentication (DjangoRestToken):

```python
import openapi_client
from openapi_client.models.get_urls_exports200_response import GetUrlsExports200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.botify.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.botify.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: DjangoRestToken
configuration.api_key['DjangoRestToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['DjangoRestToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AnalysisApi(api_client)
    username = 'username_example' # str | User's identifier
    project_slug = 'project_slug_example' # str | Project's identifier
    analysis_slug = 'analysis_slug_example' # str | Analysis' identifier
    page = 56 # int | Page Number (optional)
    size = 56 # int | Page Size (optional)

    try:
        # A list of the CSV Exports requests and their current status
        api_response = api_instance.get_urls_exports(username, project_slug, analysis_slug, page=page, size=size)
        print("The response of AnalysisApi->get_urls_exports:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalysisApi->get_urls_exports: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **str**| User&#39;s identifier | 
 **project_slug** | **str**| Project&#39;s identifier | 
 **analysis_slug** | **str**| Analysis&#39; identifier | 
 **page** | **int**| Page Number | [optional] 
 **size** | **int**| Page Size | [optional] 

### Return type

[**GetUrlsExports200Response**](GetUrlsExports200Response.md)

### Authorization

[DjangoRestToken](../README.md#DjangoRestToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**0** | error payload |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_urls_suggested_filters**
> UrlsAggsQuery get_urls_suggested_filters(username, project_slug, analysis_slug, area=area, urls_aggs_query=urls_aggs_query)

Return most frequent segments (= suggested patterns in the previous version)

Return most frequent segments (= suggested patterns in the previous version) for a Botify Query.

### Example

* Api Key Authentication (DjangoRestToken):

```python
import openapi_client
from openapi_client.models.urls_aggs_query import UrlsAggsQuery
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.botify.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.botify.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: DjangoRestToken
configuration.api_key['DjangoRestToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['DjangoRestToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AnalysisApi(api_client)
    username = 'username_example' # str | User's identifier
    project_slug = 'project_slug_example' # str | Project's identifier
    analysis_slug = 'analysis_slug_example' # str | Analysis' identifier
    area = current # str |  (optional) (default to current)
    urls_aggs_query = openapi_client.UrlsAggsQuery() # UrlsAggsQuery |  (optional)

    try:
        # Return most frequent segments (= suggested patterns in the previous version)
        api_response = api_instance.get_urls_suggested_filters(username, project_slug, analysis_slug, area=area, urls_aggs_query=urls_aggs_query)
        print("The response of AnalysisApi->get_urls_suggested_filters:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalysisApi->get_urls_suggested_filters: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **str**| User&#39;s identifier | 
 **project_slug** | **str**| Project&#39;s identifier | 
 **analysis_slug** | **str**| Analysis&#39; identifier | 
 **area** | **str**|  | [optional] [default to current]
 **urls_aggs_query** | [**UrlsAggsQuery**](UrlsAggsQuery.md)|  | [optional] 

### Return type

[**UrlsAggsQuery**](UrlsAggsQuery.md)

### Authorization

[DjangoRestToken](../README.md#DjangoRestToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful operation |  -  |
**0** | error payload |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

