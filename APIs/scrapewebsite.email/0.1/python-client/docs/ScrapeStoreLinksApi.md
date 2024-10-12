# openapi_client.ScrapeStoreLinksApi

All URIs are relative to *http://scrapewebsite.email*

Method | HTTP request | Description
------------- | ------------- | -------------
[**g_etv1_scrape_store_links_format**](ScrapeStoreLinksApi.md#g_etv1_scrape_store_links_format) | **GET** /v1/scrape_store_links.json | Attempts to grab the google store url or the ios store url for a site, after searching through the site.


# **g_etv1_scrape_store_links_format**
> g_etv1_scrape_store_links_format(website)

Attempts to grab the google store url or the ios store url for a site, after searching through the site.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://scrapewebsite.email
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://scrapewebsite.email"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ScrapeStoreLinksApi(api_client)
    website = 'website_example' # str | <p>The website (ie. www.soundflair.com)</p> 

    try:
        # Attempts to grab the google store url or the ios store url for a site, after searching through the site.
        api_instance.g_etv1_scrape_store_links_format(website)
    except Exception as e:
        print("Exception when calling ScrapeStoreLinksApi->g_etv1_scrape_store_links_format: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **website** | **str**| &lt;p&gt;The website (ie. www.soundflair.com)&lt;/p&gt;  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | No response was specified |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

