# openapi_client.WWWApi

All URIs are relative to *https://neutrinoapi.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**browser_bot**](WWWApi.md#browser_bot) | **POST** /browser-bot | Browser Bot
[**h_tml_clean**](WWWApi.md#h_tml_clean) | **POST** /html-clean | HTML Clean
[**u_rl_info**](WWWApi.md#u_rl_info) | **GET** /url-info | URL Info


# **browser_bot**
> BrowserBotResponse browser_bot(url, delay=delay, var_exec=var_exec, ignore_certificate_errors=ignore_certificate_errors, selector=selector, timeout=timeout, user_agent=user_agent)

Browser Bot

Browser bot can extract content, interact with keyboard and mouse events, and execute JavaScript on a website

### Example

* Api Key Authentication (api-key):
* Api Key Authentication (user-id):

```python
import openapi_client
from openapi_client.models.browser_bot_response import BrowserBotResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://neutrinoapi.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://neutrinoapi.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api-key
configuration.api_key['api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api-key'] = 'Bearer'

# Configure API key authorization: user-id
configuration.api_key['user-id'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['user-id'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WWWApi(api_client)
    url = 'url_example' # str | The URL to load
    delay = 3 # int | Delay in seconds to wait before capturing any page data, executing selectors or JavaScript (optional) (default to 3)
    var_exec = ['var_exec_example'] # List[str] | Execute JavaScript on the website. This parameter accepts JavaScript as either a string containing JavaScript or for sending multiple separate statements a JSON array or POST array can also be used. If a statement returns any value it will be returned in the 'exec-results' response. You can also use the following specially defined user interaction functions: <br> <br> <div> sleep(seconds); Just wait/sleep for the specified number of seconds. <br>click('selector'); Click on the first element matching the given selector. <br>focus('selector'); Focus on the first element matching the given selector. <br>keys('characters'); Send the specified keyboard characters. Use click() or focus() first to send keys to a specific element. <br>enter(); Send the Enter key. <br>tab(); Send the Tab key. <br> </div> (optional)
    ignore_certificate_errors = False # bool | Ignore any TLS/SSL certificate errors and load the page anyway (optional) (default to False)
    selector = 'selector_example' # str | Extract content from the page DOM using this selector. Commonly known as a CSS selector, you can find a good reference <a href=\\\"https://www.w3schools.com/cssref/css_selectors.asp\\\">here</a> (optional)
    timeout = 30 # int | Timeout in seconds. Give up if still trying to load the page after this number of seconds (optional) (default to 30)
    user_agent = 'user_agent_example' # str | Override the browsers default user-agent string with this one (optional)

    try:
        # Browser Bot
        api_response = api_instance.browser_bot(url, delay=delay, var_exec=var_exec, ignore_certificate_errors=ignore_certificate_errors, selector=selector, timeout=timeout, user_agent=user_agent)
        print("The response of WWWApi->browser_bot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WWWApi->browser_bot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **url** | **str**| The URL to load | 
 **delay** | **int**| Delay in seconds to wait before capturing any page data, executing selectors or JavaScript | [optional] [default to 3]
 **var_exec** | [**List[str]**](str.md)| Execute JavaScript on the website. This parameter accepts JavaScript as either a string containing JavaScript or for sending multiple separate statements a JSON array or POST array can also be used. If a statement returns any value it will be returned in the &#39;exec-results&#39; response. You can also use the following specially defined user interaction functions: &lt;br&gt; &lt;br&gt; &lt;div&gt; sleep(seconds); Just wait/sleep for the specified number of seconds. &lt;br&gt;click(&#39;selector&#39;); Click on the first element matching the given selector. &lt;br&gt;focus(&#39;selector&#39;); Focus on the first element matching the given selector. &lt;br&gt;keys(&#39;characters&#39;); Send the specified keyboard characters. Use click() or focus() first to send keys to a specific element. &lt;br&gt;enter(); Send the Enter key. &lt;br&gt;tab(); Send the Tab key. &lt;br&gt; &lt;/div&gt; | [optional] 
 **ignore_certificate_errors** | **bool**| Ignore any TLS/SSL certificate errors and load the page anyway | [optional] [default to False]
 **selector** | **str**| Extract content from the page DOM using this selector. Commonly known as a CSS selector, you can find a good reference &lt;a href&#x3D;\\\&quot;https://www.w3schools.com/cssref/css_selectors.asp\\\&quot;&gt;here&lt;/a&gt; | [optional] 
 **timeout** | **int**| Timeout in seconds. Give up if still trying to load the page after this number of seconds | [optional] [default to 30]
 **user_agent** | **str**| Override the browsers default user-agent string with this one | [optional] 

### Return type

[**BrowserBotResponse**](BrowserBotResponse.md)

### Authorization

[api-key](../README.md#api-key), [user-id](../README.md#user-id)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**400** | Your API request has been rejected. Check error code for details |  -  |
**403** | You have failed to authenticate |  -  |
**500** | We messed up, sorry! Your request has caused a fatal exception |  -  |
**0** | We messed up, sorry! Your request has caused an error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **h_tml_clean**
> bytearray h_tml_clean(content, output_type)

HTML Clean

Clean and sanitize untrusted HTML

### Example

* Api Key Authentication (api-key):
* Api Key Authentication (user-id):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://neutrinoapi.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://neutrinoapi.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api-key
configuration.api_key['api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api-key'] = 'Bearer'

# Configure API key authorization: user-id
configuration.api_key['user-id'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['user-id'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WWWApi(api_client)
    content = 'content_example' # str | The HTML content. This can be either a URL to load from, a file upload (multipart/form-data) or an HTML content string
    output_type = 'output_type_example' # str | The level of sanitization, possible values are: <br><b>plain-text</b>: reduce the content to plain text only (no HTML tags at all) <br><b>simple-text</b>: allow only very basic text formatting tags like b, em, i, strong, u <br><b>basic-html</b>: allow advanced text formatting and hyper links <br><b>basic-html-with-images</b>: same as basic html but also allows image tags <br><b>advanced-html</b>: same as basic html with images but also allows many more common HTML tags like table, ul, dl, pre <br>

    try:
        # HTML Clean
        api_response = api_instance.h_tml_clean(content, output_type)
        print("The response of WWWApi->h_tml_clean:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WWWApi->h_tml_clean: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content** | **str**| The HTML content. This can be either a URL to load from, a file upload (multipart/form-data) or an HTML content string | 
 **output_type** | **str**| The level of sanitization, possible values are: &lt;br&gt;&lt;b&gt;plain-text&lt;/b&gt;: reduce the content to plain text only (no HTML tags at all) &lt;br&gt;&lt;b&gt;simple-text&lt;/b&gt;: allow only very basic text formatting tags like b, em, i, strong, u &lt;br&gt;&lt;b&gt;basic-html&lt;/b&gt;: allow advanced text formatting and hyper links &lt;br&gt;&lt;b&gt;basic-html-with-images&lt;/b&gt;: same as basic html but also allows image tags &lt;br&gt;&lt;b&gt;advanced-html&lt;/b&gt;: same as basic html with images but also allows many more common HTML tags like table, ul, dl, pre &lt;br&gt; | 

### Return type

**bytearray**

### Authorization

[api-key](../README.md#api-key), [user-id](../README.md#user-id)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**400** | Your API request has been rejected. Check error code for details |  -  |
**403** | You have failed to authenticate |  -  |
**500** | We messed up, sorry! Your request has caused a fatal exception |  -  |
**0** | We messed up, sorry! Your request has caused an error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **u_rl_info**
> URLInfoResponse u_rl_info(url, fetch_content=fetch_content, ignore_certificate_errors=ignore_certificate_errors, timeout=timeout, retry=retry)

URL Info

Parse, analyze and retrieve content from the supplied URL

### Example

* Api Key Authentication (api-key):
* Api Key Authentication (user-id):

```python
import openapi_client
from openapi_client.models.url_info_response import URLInfoResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://neutrinoapi.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://neutrinoapi.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api-key
configuration.api_key['api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api-key'] = 'Bearer'

# Configure API key authorization: user-id
configuration.api_key['user-id'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['user-id'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WWWApi(api_client)
    url = 'url_example' # str | The URL to probe
    fetch_content = False # bool | If this URL responds with html, text, json or xml then return the response. This option is useful if you want to perform further processing on the URL content (e.g. with the HTML Extract or HTML Clean APIs) (optional) (default to False)
    ignore_certificate_errors = False # bool | Ignore any TLS/SSL certificate errors and load the URL anyway (optional) (default to False)
    timeout = 60 # int | Timeout in seconds. Give up if still trying to load the URL after this number of seconds (optional) (default to 60)
    retry = 0 # int | If the request fails for any reason try again this many times (optional) (default to 0)

    try:
        # URL Info
        api_response = api_instance.u_rl_info(url, fetch_content=fetch_content, ignore_certificate_errors=ignore_certificate_errors, timeout=timeout, retry=retry)
        print("The response of WWWApi->u_rl_info:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WWWApi->u_rl_info: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **url** | **str**| The URL to probe | 
 **fetch_content** | **bool**| If this URL responds with html, text, json or xml then return the response. This option is useful if you want to perform further processing on the URL content (e.g. with the HTML Extract or HTML Clean APIs) | [optional] [default to False]
 **ignore_certificate_errors** | **bool**| Ignore any TLS/SSL certificate errors and load the URL anyway | [optional] [default to False]
 **timeout** | **int**| Timeout in seconds. Give up if still trying to load the URL after this number of seconds | [optional] [default to 60]
 **retry** | **int**| If the request fails for any reason try again this many times | [optional] [default to 0]

### Return type

[**URLInfoResponse**](URLInfoResponse.md)

### Authorization

[api-key](../README.md#api-key), [user-id](../README.md#user-id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**400** | Your API request has been rejected. Check error code for details |  -  |
**403** | You have failed to authenticate |  -  |
**500** | We messed up, sorry! Your request has caused a fatal exception |  -  |
**0** | We messed up, sorry! Your request has caused an error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

