# openapi_client.ScrapeEmailsApi

All URIs are relative to *http://scrapewebsite.email*

Method | HTTP request | Description
------------- | ------------- | -------------
[**g_etv1_scrape_emails_format**](ScrapeEmailsApi.md#g_etv1_scrape_emails_format) | **GET** /v1/scrape_emails.json | Returns a list of emails scraped by priority (ie. e-mails appear on top level pages are first). Please note that subsequent calls to the same url will be fetched from the &lt;b&gt;cache&lt;/b&gt; (14 day flush). &lt;br/&gt;&lt;br/&gt;Will also parse patterns such as hello[at]site.com, hello[at]site[dot]com, hello(at)site.com, hello(at)site(dot)com, hello @ site.com, hello @ site . com. &lt;br/&gt;&lt;br/&gt;Please do note we cannot parse sites that require a login (for now), so for some Facebook pages it is not possible at the moment to fetch the e-mail.&lt;br/&gt;&lt;br/&gt;Finally, please note that the api will fetch links for up to 2 minutes. After that time it will start analysing the pages which have been scraped. &lt;b&gt;Therefore&lt;/b&gt; please ensure that your client has a timeout of at least &lt;b&gt;150 seconds&lt;/b&gt; (2 mins to fetch and the rest to parse). &lt;br/&gt;&lt;br/&gt;&lt;b&gt;Please note&lt;/b&gt; that due to the fact that the api goes out to fetch the pages, the server allows only 1 concurrent request/ip. Requests which are made while the 1 request is still processing will result in a 429 code.&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Please note&lt;/b&gt; that as of May 25, 2014, the main mechanism of tracking usage will be done via Mashape. You can get the free calls by signing up with the FREE plan.&lt;br/&gt;&lt;br/&gt;Please visit &lt;a href&#x3D;&#39;https://www.mashape.com/tommytcchan/scrape-website-email&#39;&gt;https://www.mashape.com/tommytcchan/scrape-website-email&lt;/a&gt;.&lt;br/&gt;&lt;br/&gt;&lt;b&gt;There is now a limit of 5 requests per day using this sample interface.&lt;/b&gt;&lt;br/&gt;&lt;br/&gt;


# **g_etv1_scrape_emails_format**
> g_etv1_scrape_emails_format(website, must_include=must_include)

Returns a list of emails scraped by priority (ie. e-mails appear on top level pages are first). Please note that subsequent calls to the same url will be fetched from the <b>cache</b> (14 day flush). <br/><br/>Will also parse patterns such as hello[at]site.com, hello[at]site[dot]com, hello(at)site.com, hello(at)site(dot)com, hello @ site.com, hello @ site . com. <br/><br/>Please do note we cannot parse sites that require a login (for now), so for some Facebook pages it is not possible at the moment to fetch the e-mail.<br/><br/>Finally, please note that the api will fetch links for up to 2 minutes. After that time it will start analysing the pages which have been scraped. <b>Therefore</b> please ensure that your client has a timeout of at least <b>150 seconds</b> (2 mins to fetch and the rest to parse). <br/><br/><b>Please note</b> that due to the fact that the api goes out to fetch the pages, the server allows only 1 concurrent request/ip. Requests which are made while the 1 request is still processing will result in a 429 code.<br/><br/><b>Please note</b> that as of May 25, 2014, the main mechanism of tracking usage will be done via Mashape. You can get the free calls by signing up with the FREE plan.<br/><br/>Please visit <a href='https://www.mashape.com/tommytcchan/scrape-website-email'>https://www.mashape.com/tommytcchan/scrape-website-email</a>.<br/><br/><b>There is now a limit of 5 requests per day using this sample interface.</b><br/><br/>

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
    api_instance = openapi_client.ScrapeEmailsApi(api_client)
    website = 'website_example' # str | <p>The website (ie. www.soundflair.com)</p> 
    must_include = 'must_include_example' # str | <table>   <tbody>     <tr>       <td>Optional. The word(s) that the webpage must include (otherwise it will skip scraping that page). Good if you want to scrape only contact pages. Takes regex (ie. about</td>       <td>contact).</td>     </tr>   </tbody> </table>  (optional)

    try:
        # Returns a list of emails scraped by priority (ie. e-mails appear on top level pages are first). Please note that subsequent calls to the same url will be fetched from the <b>cache</b> (14 day flush). <br/><br/>Will also parse patterns such as hello[at]site.com, hello[at]site[dot]com, hello(at)site.com, hello(at)site(dot)com, hello @ site.com, hello @ site . com. <br/><br/>Please do note we cannot parse sites that require a login (for now), so for some Facebook pages it is not possible at the moment to fetch the e-mail.<br/><br/>Finally, please note that the api will fetch links for up to 2 minutes. After that time it will start analysing the pages which have been scraped. <b>Therefore</b> please ensure that your client has a timeout of at least <b>150 seconds</b> (2 mins to fetch and the rest to parse). <br/><br/><b>Please note</b> that due to the fact that the api goes out to fetch the pages, the server allows only 1 concurrent request/ip. Requests which are made while the 1 request is still processing will result in a 429 code.<br/><br/><b>Please note</b> that as of May 25, 2014, the main mechanism of tracking usage will be done via Mashape. You can get the free calls by signing up with the FREE plan.<br/><br/>Please visit <a href='https://www.mashape.com/tommytcchan/scrape-website-email'>https://www.mashape.com/tommytcchan/scrape-website-email</a>.<br/><br/><b>There is now a limit of 5 requests per day using this sample interface.</b><br/><br/>
        api_instance.g_etv1_scrape_emails_format(website, must_include=must_include)
    except Exception as e:
        print("Exception when calling ScrapeEmailsApi->g_etv1_scrape_emails_format: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **website** | **str**| &lt;p&gt;The website (ie. www.soundflair.com)&lt;/p&gt;  | 
 **must_include** | **str**| &lt;table&gt;   &lt;tbody&gt;     &lt;tr&gt;       &lt;td&gt;Optional. The word(s) that the webpage must include (otherwise it will skip scraping that page). Good if you want to scrape only contact pages. Takes regex (ie. about&lt;/td&gt;       &lt;td&gt;contact).&lt;/td&gt;     &lt;/tr&gt;   &lt;/tbody&gt; &lt;/table&gt;  | [optional] 

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

