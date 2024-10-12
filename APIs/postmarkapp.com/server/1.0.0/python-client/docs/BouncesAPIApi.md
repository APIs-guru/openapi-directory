# openapi_client.BouncesAPIApi

All URIs are relative to *http://api.postmarkapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activate_bounce**](BouncesAPIApi.md#activate_bounce) | **PUT** /bounces/{bounceid}/activate | Activate a bounce
[**bounces_bounceid_dump_get**](BouncesAPIApi.md#bounces_bounceid_dump_get) | **GET** /bounces/{bounceid}/dump | Get bounce dump
[**get_bounces**](BouncesAPIApi.md#get_bounces) | **GET** /bounces | Get bounces
[**get_delivery_stats**](BouncesAPIApi.md#get_delivery_stats) | **GET** /deliverystats | Get delivery stats
[**get_single_bounce**](BouncesAPIApi.md#get_single_bounce) | **GET** /bounces/{bounceid} | Get a single bounce


# **activate_bounce**
> BounceActivationResponse activate_bounce(x_postmark_server_token, bounceid)

Activate a bounce

### Example


```python
import openapi_client
from openapi_client.models.bounce_activation_response import BounceActivationResponse
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
    api_instance = openapi_client.BouncesAPIApi(api_client)
    x_postmark_server_token = 'x_postmark_server_token_example' # str | The token associated with the Server on which this request will operate.
    bounceid = 56 # int | The ID of the Bounce to activate.

    try:
        # Activate a bounce
        api_response = api_instance.activate_bounce(x_postmark_server_token, bounceid)
        print("The response of BouncesAPIApi->activate_bounce:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BouncesAPIApi->activate_bounce: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_postmark_server_token** | **str**| The token associated with the Server on which this request will operate. | 
 **bounceid** | **int**| The ID of the Bounce to activate. | 

### Return type

[**BounceActivationResponse**](BounceActivationResponse.md)

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

# **bounces_bounceid_dump_get**
> BounceDumpResponse bounces_bounceid_dump_get(x_postmark_server_token, bounceid)

Get bounce dump

### Example


```python
import openapi_client
from openapi_client.models.bounce_dump_response import BounceDumpResponse
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
    api_instance = openapi_client.BouncesAPIApi(api_client)
    x_postmark_server_token = 'x_postmark_server_token_example' # str | The token associated with the Server on which this request will operate.
    bounceid = 56 # int | The ID for the bounce dump to retrieve.

    try:
        # Get bounce dump
        api_response = api_instance.bounces_bounceid_dump_get(x_postmark_server_token, bounceid)
        print("The response of BouncesAPIApi->bounces_bounceid_dump_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BouncesAPIApi->bounces_bounceid_dump_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_postmark_server_token** | **str**| The token associated with the Server on which this request will operate. | 
 **bounceid** | **int**| The ID for the bounce dump to retrieve. | 

### Return type

[**BounceDumpResponse**](BounceDumpResponse.md)

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

# **get_bounces**
> BounceSearchResponse get_bounces(x_postmark_server_token, count, offset, type=type, inactive=inactive, email_filter=email_filter, message_id=message_id, tag=tag, todate=todate, fromdate=fromdate)

Get bounces

### Example


```python
import openapi_client
from openapi_client.models.bounce_search_response import BounceSearchResponse
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
    api_instance = openapi_client.BouncesAPIApi(api_client)
    x_postmark_server_token = 'x_postmark_server_token_example' # str | The token associated with the Server on which this request will operate.
    count = 56 # int | Number of bounces to return per request. Max 500.
    offset = 56 # int | Number of bounces to skip.
    type = 'type_example' # str | Filter by type of bounce (optional)
    inactive = True # bool | Filter by emails that were deactivated by Postmark due to the bounce. Set to true or false. If this isn't specified it will return both active and inactive. (optional)
    email_filter = 'email_filter_example' # str | Filter by email address (optional)
    message_id = 'message_id_example' # str | Filter by messageID (optional)
    tag = 'tag_example' # str | Filter by tag (optional)
    todate = '2013-10-20' # date | Filter messages up to the date specified. e.g. `2014-02-01` (optional)
    fromdate = '2013-10-20' # date | Filter messages starting from the date specified. e.g. `2014-02-01` (optional)

    try:
        # Get bounces
        api_response = api_instance.get_bounces(x_postmark_server_token, count, offset, type=type, inactive=inactive, email_filter=email_filter, message_id=message_id, tag=tag, todate=todate, fromdate=fromdate)
        print("The response of BouncesAPIApi->get_bounces:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BouncesAPIApi->get_bounces: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_postmark_server_token** | **str**| The token associated with the Server on which this request will operate. | 
 **count** | **int**| Number of bounces to return per request. Max 500. | 
 **offset** | **int**| Number of bounces to skip. | 
 **type** | **str**| Filter by type of bounce | [optional] 
 **inactive** | **bool**| Filter by emails that were deactivated by Postmark due to the bounce. Set to true or false. If this isn&#39;t specified it will return both active and inactive. | [optional] 
 **email_filter** | **str**| Filter by email address | [optional] 
 **message_id** | **str**| Filter by messageID | [optional] 
 **tag** | **str**| Filter by tag | [optional] 
 **todate** | **date**| Filter messages up to the date specified. e.g. &#x60;2014-02-01&#x60; | [optional] 
 **fromdate** | **date**| Filter messages starting from the date specified. e.g. &#x60;2014-02-01&#x60; | [optional] 

### Return type

[**BounceSearchResponse**](BounceSearchResponse.md)

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

# **get_delivery_stats**
> DeliveryStatsResponse get_delivery_stats(x_postmark_server_token)

Get delivery stats

### Example


```python
import openapi_client
from openapi_client.models.delivery_stats_response import DeliveryStatsResponse
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
    api_instance = openapi_client.BouncesAPIApi(api_client)
    x_postmark_server_token = 'x_postmark_server_token_example' # str | The token associated with the Server on which this request will operate.

    try:
        # Get delivery stats
        api_response = api_instance.get_delivery_stats(x_postmark_server_token)
        print("The response of BouncesAPIApi->get_delivery_stats:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BouncesAPIApi->get_delivery_stats: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_postmark_server_token** | **str**| The token associated with the Server on which this request will operate. | 

### Return type

[**DeliveryStatsResponse**](DeliveryStatsResponse.md)

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

# **get_single_bounce**
> BounceInfoResponse get_single_bounce(x_postmark_server_token, bounceid)

Get a single bounce

### Example


```python
import openapi_client
from openapi_client.models.bounce_info_response import BounceInfoResponse
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
    api_instance = openapi_client.BouncesAPIApi(api_client)
    x_postmark_server_token = 'x_postmark_server_token_example' # str | The token associated with the Server on which this request will operate.
    bounceid = 56 # int | The ID of the bounce to retrieve.

    try:
        # Get a single bounce
        api_response = api_instance.get_single_bounce(x_postmark_server_token, bounceid)
        print("The response of BouncesAPIApi->get_single_bounce:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BouncesAPIApi->get_single_bounce: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_postmark_server_token** | **str**| The token associated with the Server on which this request will operate. | 
 **bounceid** | **int**| The ID of the bounce to retrieve. | 

### Return type

[**BounceInfoResponse**](BounceInfoResponse.md)

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

