# openapi_client.StatsAPIApi

All URIs are relative to *http://api.postmarkapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_bounce_counts**](StatsAPIApi.md#get_bounce_counts) | **GET** /stats/outbound/bounces | Get bounce counts
[**get_outbound_click_counts**](StatsAPIApi.md#get_outbound_click_counts) | **GET** /stats/outbound/clicks | Get click counts
[**get_outbound_click_counts_by_browser_family**](StatsAPIApi.md#get_outbound_click_counts_by_browser_family) | **GET** /stats/outbound/clicks/browserfamilies | Get browser usage by family
[**get_outbound_click_counts_by_location**](StatsAPIApi.md#get_outbound_click_counts_by_location) | **GET** /stats/outbound/clicks/location | Get clicks by body location
[**get_outbound_click_counts_by_platform**](StatsAPIApi.md#get_outbound_click_counts_by_platform) | **GET** /stats/outbound/clicks/platforms | Get browser plaform usage
[**get_outbound_open_counts**](StatsAPIApi.md#get_outbound_open_counts) | **GET** /stats/outbound/opens | Get email open counts
[**get_outbound_open_counts_by_email_client**](StatsAPIApi.md#get_outbound_open_counts_by_email_client) | **GET** /stats/outbound/opens/emailclients | Get email client usage
[**get_outbound_open_counts_by_platform**](StatsAPIApi.md#get_outbound_open_counts_by_platform) | **GET** /stats/outbound/opens/platforms | Get email platform usage
[**get_outbound_overview_statistics**](StatsAPIApi.md#get_outbound_overview_statistics) | **GET** /stats/outbound | Get outbound overview
[**get_sent_counts**](StatsAPIApi.md#get_sent_counts) | **GET** /stats/outbound/sends | Get sent counts
[**get_spam_complaints**](StatsAPIApi.md#get_spam_complaints) | **GET** /stats/outbound/spam | Get spam complaints
[**get_tracked_email_counts**](StatsAPIApi.md#get_tracked_email_counts) | **GET** /stats/outbound/tracked | Get tracked email counts


# **get_bounce_counts**
> GetBounceCounts200Response get_bounce_counts(x_postmark_server_token, tag=tag, fromdate=fromdate, todate=todate)

Get bounce counts

### Example


```python
import openapi_client
from openapi_client.models.get_bounce_counts200_response import GetBounceCounts200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.postmarkapp.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.postmarkapp.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StatsAPIApi(api_client)
    x_postmark_server_token = 'x_postmark_server_token_example' # str | The token associated with the Server on which this request will operate.
    tag = 'tag_example' # str | Filter by tag (optional)
    fromdate = '2013-10-20' # date | Filter stats starting from the date specified. e.g. `2014-01-01` (optional)
    todate = '2013-10-20' # date | Filter stats up to the date specified. e.g. `2014-02-01` (optional)

    try:
        # Get bounce counts
        api_response = api_instance.get_bounce_counts(x_postmark_server_token, tag=tag, fromdate=fromdate, todate=todate)
        print("The response of StatsAPIApi->get_bounce_counts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StatsAPIApi->get_bounce_counts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_postmark_server_token** | **str**| The token associated with the Server on which this request will operate. | 
 **tag** | **str**| Filter by tag | [optional] 
 **fromdate** | **date**| Filter stats starting from the date specified. e.g. &#x60;2014-01-01&#x60; | [optional] 
 **todate** | **date**| Filter stats up to the date specified. e.g. &#x60;2014-02-01&#x60; | [optional] 

### Return type

[**GetBounceCounts200Response**](GetBounceCounts200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**422** | An error was generated due to incorrect use of the API. See the Message associated with this response for more information. |  -  |
**500** | Indicates an internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_outbound_click_counts**
> object get_outbound_click_counts(x_postmark_server_token, tag=tag, fromdate=fromdate, todate=todate)

Get click counts

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.postmarkapp.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.postmarkapp.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StatsAPIApi(api_client)
    x_postmark_server_token = 'x_postmark_server_token_example' # str | The token associated with the Server on which this request will operate.
    tag = 'tag_example' # str | Filter by tag (optional)
    fromdate = '2013-10-20' # date | Filter stats starting from the date specified. e.g. `2014-01-01` (optional)
    todate = '2013-10-20' # date | Filter stats up to the date specified. e.g. `2014-02-01` (optional)

    try:
        # Get click counts
        api_response = api_instance.get_outbound_click_counts(x_postmark_server_token, tag=tag, fromdate=fromdate, todate=todate)
        print("The response of StatsAPIApi->get_outbound_click_counts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StatsAPIApi->get_outbound_click_counts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_postmark_server_token** | **str**| The token associated with the Server on which this request will operate. | 
 **tag** | **str**| Filter by tag | [optional] 
 **fromdate** | **date**| Filter stats starting from the date specified. e.g. &#x60;2014-01-01&#x60; | [optional] 
 **todate** | **date**| Filter stats up to the date specified. e.g. &#x60;2014-02-01&#x60; | [optional] 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**422** | An error was generated due to incorrect use of the API. See the Message associated with this response for more information. |  -  |
**500** | Indicates an internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_outbound_click_counts_by_browser_family**
> object get_outbound_click_counts_by_browser_family(x_postmark_server_token, tag=tag, fromdate=fromdate, todate=todate)

Get browser usage by family

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.postmarkapp.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.postmarkapp.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StatsAPIApi(api_client)
    x_postmark_server_token = 'x_postmark_server_token_example' # str | The token associated with the Server on which this request will operate.
    tag = 'tag_example' # str | Filter by tag (optional)
    fromdate = '2013-10-20' # date | Filter stats starting from the date specified. e.g. `2014-01-01` (optional)
    todate = '2013-10-20' # date | Filter stats up to the date specified. e.g. `2014-02-01` (optional)

    try:
        # Get browser usage by family
        api_response = api_instance.get_outbound_click_counts_by_browser_family(x_postmark_server_token, tag=tag, fromdate=fromdate, todate=todate)
        print("The response of StatsAPIApi->get_outbound_click_counts_by_browser_family:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StatsAPIApi->get_outbound_click_counts_by_browser_family: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_postmark_server_token** | **str**| The token associated with the Server on which this request will operate. | 
 **tag** | **str**| Filter by tag | [optional] 
 **fromdate** | **date**| Filter stats starting from the date specified. e.g. &#x60;2014-01-01&#x60; | [optional] 
 **todate** | **date**| Filter stats up to the date specified. e.g. &#x60;2014-02-01&#x60; | [optional] 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**422** | An error was generated due to incorrect use of the API. See the Message associated with this response for more information. |  -  |
**500** | Indicates an internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_outbound_click_counts_by_location**
> object get_outbound_click_counts_by_location(x_postmark_server_token, tag=tag, fromdate=fromdate, todate=todate)

Get clicks by body location

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.postmarkapp.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.postmarkapp.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StatsAPIApi(api_client)
    x_postmark_server_token = 'x_postmark_server_token_example' # str | The token associated with the Server on which this request will operate.
    tag = 'tag_example' # str | Filter by tag (optional)
    fromdate = '2013-10-20' # date | Filter stats starting from the date specified. e.g. `2014-01-01` (optional)
    todate = '2013-10-20' # date | Filter stats up to the date specified. e.g. `2014-02-01` (optional)

    try:
        # Get clicks by body location
        api_response = api_instance.get_outbound_click_counts_by_location(x_postmark_server_token, tag=tag, fromdate=fromdate, todate=todate)
        print("The response of StatsAPIApi->get_outbound_click_counts_by_location:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StatsAPIApi->get_outbound_click_counts_by_location: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_postmark_server_token** | **str**| The token associated with the Server on which this request will operate. | 
 **tag** | **str**| Filter by tag | [optional] 
 **fromdate** | **date**| Filter stats starting from the date specified. e.g. &#x60;2014-01-01&#x60; | [optional] 
 **todate** | **date**| Filter stats up to the date specified. e.g. &#x60;2014-02-01&#x60; | [optional] 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**422** | An error was generated due to incorrect use of the API. See the Message associated with this response for more information. |  -  |
**500** | Indicates an internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_outbound_click_counts_by_platform**
> object get_outbound_click_counts_by_platform(x_postmark_server_token, tag=tag, fromdate=fromdate, todate=todate)

Get browser plaform usage

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.postmarkapp.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.postmarkapp.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StatsAPIApi(api_client)
    x_postmark_server_token = 'x_postmark_server_token_example' # str | The token associated with the Server on which this request will operate.
    tag = 'tag_example' # str | Filter by tag (optional)
    fromdate = '2013-10-20' # date | Filter stats starting from the date specified. e.g. `2014-01-01` (optional)
    todate = '2013-10-20' # date | Filter stats up to the date specified. e.g. `2014-02-01` (optional)

    try:
        # Get browser plaform usage
        api_response = api_instance.get_outbound_click_counts_by_platform(x_postmark_server_token, tag=tag, fromdate=fromdate, todate=todate)
        print("The response of StatsAPIApi->get_outbound_click_counts_by_platform:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StatsAPIApi->get_outbound_click_counts_by_platform: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_postmark_server_token** | **str**| The token associated with the Server on which this request will operate. | 
 **tag** | **str**| Filter by tag | [optional] 
 **fromdate** | **date**| Filter stats starting from the date specified. e.g. &#x60;2014-01-01&#x60; | [optional] 
 **todate** | **date**| Filter stats up to the date specified. e.g. &#x60;2014-02-01&#x60; | [optional] 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**422** | An error was generated due to incorrect use of the API. See the Message associated with this response for more information. |  -  |
**500** | Indicates an internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_outbound_open_counts**
> GetOutboundOpenCounts200Response get_outbound_open_counts(x_postmark_server_token, tag=tag, fromdate=fromdate, todate=todate)

Get email open counts

### Example


```python
import openapi_client
from openapi_client.models.get_outbound_open_counts200_response import GetOutboundOpenCounts200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.postmarkapp.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.postmarkapp.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StatsAPIApi(api_client)
    x_postmark_server_token = 'x_postmark_server_token_example' # str | The token associated with the Server on which this request will operate.
    tag = 'tag_example' # str | Filter by tag (optional)
    fromdate = '2013-10-20' # date | Filter stats starting from the date specified. e.g. `2014-01-01` (optional)
    todate = '2013-10-20' # date | Filter stats up to the date specified. e.g. `2014-02-01` (optional)

    try:
        # Get email open counts
        api_response = api_instance.get_outbound_open_counts(x_postmark_server_token, tag=tag, fromdate=fromdate, todate=todate)
        print("The response of StatsAPIApi->get_outbound_open_counts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StatsAPIApi->get_outbound_open_counts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_postmark_server_token** | **str**| The token associated with the Server on which this request will operate. | 
 **tag** | **str**| Filter by tag | [optional] 
 **fromdate** | **date**| Filter stats starting from the date specified. e.g. &#x60;2014-01-01&#x60; | [optional] 
 **todate** | **date**| Filter stats up to the date specified. e.g. &#x60;2014-02-01&#x60; | [optional] 

### Return type

[**GetOutboundOpenCounts200Response**](GetOutboundOpenCounts200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**422** | An error was generated due to incorrect use of the API. See the Message associated with this response for more information. |  -  |
**500** | Indicates an internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_outbound_open_counts_by_email_client**
> GetOutboundOpenCountsByEmailClient200Response get_outbound_open_counts_by_email_client(x_postmark_server_token, tag=tag, fromdate=fromdate, todate=todate)

Get email client usage

### Example


```python
import openapi_client
from openapi_client.models.get_outbound_open_counts_by_email_client200_response import GetOutboundOpenCountsByEmailClient200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.postmarkapp.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.postmarkapp.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StatsAPIApi(api_client)
    x_postmark_server_token = 'x_postmark_server_token_example' # str | The token associated with the Server on which this request will operate.
    tag = 'tag_example' # str | Filter by tag (optional)
    fromdate = '2013-10-20' # date | Filter stats starting from the date specified. e.g. `2014-01-01` (optional)
    todate = '2013-10-20' # date | Filter stats up to the date specified. e.g. `2014-02-01` (optional)

    try:
        # Get email client usage
        api_response = api_instance.get_outbound_open_counts_by_email_client(x_postmark_server_token, tag=tag, fromdate=fromdate, todate=todate)
        print("The response of StatsAPIApi->get_outbound_open_counts_by_email_client:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StatsAPIApi->get_outbound_open_counts_by_email_client: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_postmark_server_token** | **str**| The token associated with the Server on which this request will operate. | 
 **tag** | **str**| Filter by tag | [optional] 
 **fromdate** | **date**| Filter stats starting from the date specified. e.g. &#x60;2014-01-01&#x60; | [optional] 
 **todate** | **date**| Filter stats up to the date specified. e.g. &#x60;2014-02-01&#x60; | [optional] 

### Return type

[**GetOutboundOpenCountsByEmailClient200Response**](GetOutboundOpenCountsByEmailClient200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**422** | An error was generated due to incorrect use of the API. See the Message associated with this response for more information. |  -  |
**500** | Indicates an internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_outbound_open_counts_by_platform**
> GetOutboundOpenCountsByPlatform200Response get_outbound_open_counts_by_platform(x_postmark_server_token, tag=tag, fromdate=fromdate, todate=todate)

Get email platform usage

### Example


```python
import openapi_client
from openapi_client.models.get_outbound_open_counts_by_platform200_response import GetOutboundOpenCountsByPlatform200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.postmarkapp.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.postmarkapp.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StatsAPIApi(api_client)
    x_postmark_server_token = 'x_postmark_server_token_example' # str | The token associated with the Server on which this request will operate.
    tag = 'tag_example' # str | Filter by tag (optional)
    fromdate = '2013-10-20' # date | Filter stats starting from the date specified. e.g. `2014-01-01` (optional)
    todate = '2013-10-20' # date | Filter stats up to the date specified. e.g. `2014-02-01` (optional)

    try:
        # Get email platform usage
        api_response = api_instance.get_outbound_open_counts_by_platform(x_postmark_server_token, tag=tag, fromdate=fromdate, todate=todate)
        print("The response of StatsAPIApi->get_outbound_open_counts_by_platform:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StatsAPIApi->get_outbound_open_counts_by_platform: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_postmark_server_token** | **str**| The token associated with the Server on which this request will operate. | 
 **tag** | **str**| Filter by tag | [optional] 
 **fromdate** | **date**| Filter stats starting from the date specified. e.g. &#x60;2014-01-01&#x60; | [optional] 
 **todate** | **date**| Filter stats up to the date specified. e.g. &#x60;2014-02-01&#x60; | [optional] 

### Return type

[**GetOutboundOpenCountsByPlatform200Response**](GetOutboundOpenCountsByPlatform200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**422** | An error was generated due to incorrect use of the API. See the Message associated with this response for more information. |  -  |
**500** | Indicates an internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_outbound_overview_statistics**
> OutboundOverviewStatsResponse get_outbound_overview_statistics(x_postmark_server_token, tag=tag, fromdate=fromdate, todate=todate)

Get outbound overview

### Example


```python
import openapi_client
from openapi_client.models.outbound_overview_stats_response import OutboundOverviewStatsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.postmarkapp.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.postmarkapp.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StatsAPIApi(api_client)
    x_postmark_server_token = 'x_postmark_server_token_example' # str | The token associated with the Server on which this request will operate.
    tag = 'tag_example' # str | Filter by tag (optional)
    fromdate = '2013-10-20' # date | Filter stats starting from the date specified. e.g. `2014-01-01` (optional)
    todate = '2013-10-20' # date | Filter stats up to the date specified. e.g. `2014-02-01` (optional)

    try:
        # Get outbound overview
        api_response = api_instance.get_outbound_overview_statistics(x_postmark_server_token, tag=tag, fromdate=fromdate, todate=todate)
        print("The response of StatsAPIApi->get_outbound_overview_statistics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StatsAPIApi->get_outbound_overview_statistics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_postmark_server_token** | **str**| The token associated with the Server on which this request will operate. | 
 **tag** | **str**| Filter by tag | [optional] 
 **fromdate** | **date**| Filter stats starting from the date specified. e.g. &#x60;2014-01-01&#x60; | [optional] 
 **todate** | **date**| Filter stats up to the date specified. e.g. &#x60;2014-02-01&#x60; | [optional] 

### Return type

[**OutboundOverviewStatsResponse**](OutboundOverviewStatsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**422** | An error was generated due to incorrect use of the API. See the Message associated with this response for more information. |  -  |
**500** | Indicates an internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_sent_counts**
> SentCountsResponse get_sent_counts(x_postmark_server_token, tag=tag, fromdate=fromdate, todate=todate)

Get sent counts

### Example


```python
import openapi_client
from openapi_client.models.sent_counts_response import SentCountsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.postmarkapp.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.postmarkapp.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StatsAPIApi(api_client)
    x_postmark_server_token = 'x_postmark_server_token_example' # str | The token associated with the Server on which this request will operate.
    tag = 'tag_example' # str | Filter by tag (optional)
    fromdate = '2013-10-20' # date | Filter stats starting from the date specified. e.g. `2014-01-01` (optional)
    todate = '2013-10-20' # date | Filter stats up to the date specified. e.g. `2014-02-01` (optional)

    try:
        # Get sent counts
        api_response = api_instance.get_sent_counts(x_postmark_server_token, tag=tag, fromdate=fromdate, todate=todate)
        print("The response of StatsAPIApi->get_sent_counts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StatsAPIApi->get_sent_counts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_postmark_server_token** | **str**| The token associated with the Server on which this request will operate. | 
 **tag** | **str**| Filter by tag | [optional] 
 **fromdate** | **date**| Filter stats starting from the date specified. e.g. &#x60;2014-01-01&#x60; | [optional] 
 **todate** | **date**| Filter stats up to the date specified. e.g. &#x60;2014-02-01&#x60; | [optional] 

### Return type

[**SentCountsResponse**](SentCountsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**422** | An error was generated due to incorrect use of the API. See the Message associated with this response for more information. |  -  |
**500** | Indicates an internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_spam_complaints**
> GetSpamComplaints200Response get_spam_complaints(x_postmark_server_token, tag=tag, fromdate=fromdate, todate=todate)

Get spam complaints

### Example


```python
import openapi_client
from openapi_client.models.get_spam_complaints200_response import GetSpamComplaints200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.postmarkapp.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.postmarkapp.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StatsAPIApi(api_client)
    x_postmark_server_token = 'x_postmark_server_token_example' # str | The token associated with the Server on which this request will operate.
    tag = 'tag_example' # str | Filter by tag (optional)
    fromdate = '2013-10-20' # date | Filter stats starting from the date specified. e.g. `2014-01-01` (optional)
    todate = '2013-10-20' # date | Filter stats up to the date specified. e.g. `2014-02-01` (optional)

    try:
        # Get spam complaints
        api_response = api_instance.get_spam_complaints(x_postmark_server_token, tag=tag, fromdate=fromdate, todate=todate)
        print("The response of StatsAPIApi->get_spam_complaints:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StatsAPIApi->get_spam_complaints: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_postmark_server_token** | **str**| The token associated with the Server on which this request will operate. | 
 **tag** | **str**| Filter by tag | [optional] 
 **fromdate** | **date**| Filter stats starting from the date specified. e.g. &#x60;2014-01-01&#x60; | [optional] 
 **todate** | **date**| Filter stats up to the date specified. e.g. &#x60;2014-02-01&#x60; | [optional] 

### Return type

[**GetSpamComplaints200Response**](GetSpamComplaints200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**422** | An error was generated due to incorrect use of the API. See the Message associated with this response for more information. |  -  |
**500** | Indicates an internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_tracked_email_counts**
> GetTrackedEmailCounts200Response get_tracked_email_counts(x_postmark_server_token, tag=tag, fromdate=fromdate, todate=todate)

Get tracked email counts

### Example


```python
import openapi_client
from openapi_client.models.get_tracked_email_counts200_response import GetTrackedEmailCounts200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.postmarkapp.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.postmarkapp.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StatsAPIApi(api_client)
    x_postmark_server_token = 'x_postmark_server_token_example' # str | The token associated with the Server on which this request will operate.
    tag = 'tag_example' # str | Filter by tag (optional)
    fromdate = '2013-10-20' # date | Filter stats starting from the date specified. e.g. `2014-01-01` (optional)
    todate = '2013-10-20' # date | Filter stats starting from the date specified. e.g. `2014-01-01` (optional)

    try:
        # Get tracked email counts
        api_response = api_instance.get_tracked_email_counts(x_postmark_server_token, tag=tag, fromdate=fromdate, todate=todate)
        print("The response of StatsAPIApi->get_tracked_email_counts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StatsAPIApi->get_tracked_email_counts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_postmark_server_token** | **str**| The token associated with the Server on which this request will operate. | 
 **tag** | **str**| Filter by tag | [optional] 
 **fromdate** | **date**| Filter stats starting from the date specified. e.g. &#x60;2014-01-01&#x60; | [optional] 
 **todate** | **date**| Filter stats starting from the date specified. e.g. &#x60;2014-01-01&#x60; | [optional] 

### Return type

[**GetTrackedEmailCounts200Response**](GetTrackedEmailCounts200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**422** | An error was generated due to incorrect use of the API. See the Message associated with this response for more information. |  -  |
**500** | Indicates an internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

