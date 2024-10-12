# openapi_client.Version2Api

All URIs are relative to *https://developer.walmart.com/proxy/item-api-doc-app/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2do_post_multi_part**](Version2Api.md#v2do_post_multi_part) | **POST** /v2/feeds | Upload an item feed
[**v2get_all_items_status**](Version2Api.md#v2get_all_items_status) | **GET** /v2/feeds/{feedId} | Get status of an item within a feed
[**v2get_feed_item_status**](Version2Api.md#v2get_feed_item_status) | **GET** /v2/feeds | Get status of an item feed


# **v2do_post_multi_part**
> v2do_post_multi_part(wm_consumer_channel_type, wm_consumer_id, wm_sec_timestamp, wm_sec_auth_signature, wm_svc_name, wm_qos_correlation_id, file, feed_type=feed_type)

Upload an item feed

You can upload an item feed. If the feed successfully processed, it returns a feed ID. Use the returned feed ID to retrieve a feed status. You need your Consumer ID and the Private Key to upload an item.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://developer.walmart.com/proxy/item-api-doc-app/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://developer.walmart.com/proxy/item-api-doc-app/rest"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.Version2Api(api_client)
    wm_consumer_channel_type = SWAGGER_CHANNEL_TYPE # str | Channel Type (default to SWAGGER_CHANNEL_TYPE)
    wm_consumer_id = 'wm_consumer_id_example' # str | Your Consumer ID
    wm_sec_timestamp = 'Auto populated' # str | Epoch timestamp (default to 'Auto populated')
    wm_sec_auth_signature = 'Auto populated' # str | Authentication signature (default to 'Auto populated')
    wm_svc_name = 'Walmart Marketplace' # str | The Service name (default to 'Walmart Marketplace')
    wm_qos_correlation_id = '123456abcdef' # str | A Transaction ID (default to '123456abcdef')
    file = None # bytearray | Feed File to upload
    feed_type = item # str | Feed Type (optional) (default to item)

    try:
        # Upload an item feed
        api_instance.v2do_post_multi_part(wm_consumer_channel_type, wm_consumer_id, wm_sec_timestamp, wm_sec_auth_signature, wm_svc_name, wm_qos_correlation_id, file, feed_type=feed_type)
    except Exception as e:
        print("Exception when calling Version2Api->v2do_post_multi_part: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wm_consumer_channel_type** | **str**| Channel Type | [default to SWAGGER_CHANNEL_TYPE]
 **wm_consumer_id** | **str**| Your Consumer ID | 
 **wm_sec_timestamp** | **str**| Epoch timestamp | [default to &#39;Auto populated&#39;]
 **wm_sec_auth_signature** | **str**| Authentication signature | [default to &#39;Auto populated&#39;]
 **wm_svc_name** | **str**| The Service name | [default to &#39;Walmart Marketplace&#39;]
 **wm_qos_correlation_id** | **str**| A Transaction ID | [default to &#39;123456abcdef&#39;]
 **file** | **bytearray**| Feed File to upload | 
 **feed_type** | **str**| Feed Type | [optional] [default to item]

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2get_all_items_status**
> v2get_all_items_status(feed_id, wm_consumer_channel_type, wm_consumer_id, wm_sec_timestamp, wm_sec_auth_signature, wm_svc_name, wm_qos_correlation_id, include_details=include_details, offset=offset, limit=limit)

Get status of an item within a feed

You can display the status of all items within a feed. Use the feed ID returned from the upload an item API.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://developer.walmart.com/proxy/item-api-doc-app/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://developer.walmart.com/proxy/item-api-doc-app/rest"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.Version2Api(api_client)
    feed_id = 'feed_id_example' # str | The feed ID
    wm_consumer_channel_type = SWAGGER_CHANNEL_TYPE # str | Channel Type (default to SWAGGER_CHANNEL_TYPE)
    wm_consumer_id = 'wm_consumer_id_example' # str | Your Consumer ID
    wm_sec_timestamp = 'Auto populated' # str | Epoch timestamp (default to 'Auto populated')
    wm_sec_auth_signature = 'Auto populated' # str | Authentication signature (default to 'Auto populated')
    wm_svc_name = 'Walmart Marketplace' # str | The Service name (default to 'Walmart Marketplace')
    wm_qos_correlation_id = '123456abcdef' # str | A Transaction ID (default to '123456abcdef')
    include_details = 'false' # str | Includes details of each entity in the feed. Do not set this parameter to true. (optional) (default to 'false')
    offset = '0' # str | The object response to start with, where 0 is the first entity that can be requested. It can only be used when includeDetails is set to true. (optional) (default to '0')
    limit = '50' # str | The number of entities to be returned. It cannot be more than 50 entities. Use it only when the includeDetails is set to true. (optional) (default to '50')

    try:
        # Get status of an item within a feed
        api_instance.v2get_all_items_status(feed_id, wm_consumer_channel_type, wm_consumer_id, wm_sec_timestamp, wm_sec_auth_signature, wm_svc_name, wm_qos_correlation_id, include_details=include_details, offset=offset, limit=limit)
    except Exception as e:
        print("Exception when calling Version2Api->v2get_all_items_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **feed_id** | **str**| The feed ID | 
 **wm_consumer_channel_type** | **str**| Channel Type | [default to SWAGGER_CHANNEL_TYPE]
 **wm_consumer_id** | **str**| Your Consumer ID | 
 **wm_sec_timestamp** | **str**| Epoch timestamp | [default to &#39;Auto populated&#39;]
 **wm_sec_auth_signature** | **str**| Authentication signature | [default to &#39;Auto populated&#39;]
 **wm_svc_name** | **str**| The Service name | [default to &#39;Walmart Marketplace&#39;]
 **wm_qos_correlation_id** | **str**| A Transaction ID | [default to &#39;123456abcdef&#39;]
 **include_details** | **str**| Includes details of each entity in the feed. Do not set this parameter to true. | [optional] [default to &#39;false&#39;]
 **offset** | **str**| The object response to start with, where 0 is the first entity that can be requested. It can only be used when includeDetails is set to true. | [optional] [default to &#39;0&#39;]
 **limit** | **str**| The number of entities to be returned. It cannot be more than 50 entities. Use it only when the includeDetails is set to true. | [optional] [default to &#39;50&#39;]

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
**0** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2get_feed_item_status**
> v2get_feed_item_status(wm_consumer_channel_type, wm_consumer_id, wm_sec_timestamp, wm_sec_auth_signature, wm_svc_name, wm_qos_correlation_id, feed_id=feed_id, include_details=include_details, offset=offset, limit=limit)

Get status of an item feed

You can display the status of an item within a feed. Use the feed ID returned from the upload an item API.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://developer.walmart.com/proxy/item-api-doc-app/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://developer.walmart.com/proxy/item-api-doc-app/rest"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.Version2Api(api_client)
    wm_consumer_channel_type = SWAGGER_CHANNEL_TYPE # str | Channel Type (default to SWAGGER_CHANNEL_TYPE)
    wm_consumer_id = 'wm_consumer_id_example' # str | Your Consumer ID
    wm_sec_timestamp = 'Auto populated' # str | Epoch timestamp (default to 'Auto populated')
    wm_sec_auth_signature = 'Auto populated' # str | Authentication signature (default to 'Auto populated')
    wm_svc_name = 'Walmart Marketplace' # str | The Service name (default to 'Walmart Marketplace')
    wm_qos_correlation_id = '123456abcdef' # str | A Transaction ID (default to '123456abcdef')
    feed_id = 'feed_id_example' # str | The feed ID. (optional)
    include_details = 'false' # str | Includes the status details for each item in the feed. Do not set this parameter to true as discrepancies may appear between the header and the item details (the item details may be incorrect). Instead, use the Get a feedItems status. (optional) (default to 'false')
    offset = '0' # str | The object response to start with, where 0 is the first entity that can be requested. It can only be used when includeDetails is set to true. (optional) (default to '0')
    limit = '50' # str | The number of items to be returned. Cannot be more than 50 items. Use it only when the includeDetails is set to true. (optional) (default to '50')

    try:
        # Get status of an item feed
        api_instance.v2get_feed_item_status(wm_consumer_channel_type, wm_consumer_id, wm_sec_timestamp, wm_sec_auth_signature, wm_svc_name, wm_qos_correlation_id, feed_id=feed_id, include_details=include_details, offset=offset, limit=limit)
    except Exception as e:
        print("Exception when calling Version2Api->v2get_feed_item_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wm_consumer_channel_type** | **str**| Channel Type | [default to SWAGGER_CHANNEL_TYPE]
 **wm_consumer_id** | **str**| Your Consumer ID | 
 **wm_sec_timestamp** | **str**| Epoch timestamp | [default to &#39;Auto populated&#39;]
 **wm_sec_auth_signature** | **str**| Authentication signature | [default to &#39;Auto populated&#39;]
 **wm_svc_name** | **str**| The Service name | [default to &#39;Walmart Marketplace&#39;]
 **wm_qos_correlation_id** | **str**| A Transaction ID | [default to &#39;123456abcdef&#39;]
 **feed_id** | **str**| The feed ID. | [optional] 
 **include_details** | **str**| Includes the status details for each item in the feed. Do not set this parameter to true as discrepancies may appear between the header and the item details (the item details may be incorrect). Instead, use the Get a feedItems status. | [optional] [default to &#39;false&#39;]
 **offset** | **str**| The object response to start with, where 0 is the first entity that can be requested. It can only be used when includeDetails is set to true. | [optional] [default to &#39;0&#39;]
 **limit** | **str**| The number of items to be returned. Cannot be more than 50 items. Use it only when the includeDetails is set to true. | [optional] [default to &#39;50&#39;]

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
**0** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

