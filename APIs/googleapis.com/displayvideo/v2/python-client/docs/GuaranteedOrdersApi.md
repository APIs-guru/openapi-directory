# openapi_client.GuaranteedOrdersApi

All URIs are relative to *https://displayvideo.googleapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**displayvideo_guaranteed_orders_create**](GuaranteedOrdersApi.md#displayvideo_guaranteed_orders_create) | **POST** /v2/guaranteedOrders | 
[**displayvideo_guaranteed_orders_edit_guaranteed_order_read_accessors**](GuaranteedOrdersApi.md#displayvideo_guaranteed_orders_edit_guaranteed_order_read_accessors) | **POST** /v2/guaranteedOrders/{guaranteedOrderId}:editGuaranteedOrderReadAccessors | 
[**displayvideo_guaranteed_orders_get**](GuaranteedOrdersApi.md#displayvideo_guaranteed_orders_get) | **GET** /v2/guaranteedOrders/{guaranteedOrderId} | 
[**displayvideo_guaranteed_orders_list**](GuaranteedOrdersApi.md#displayvideo_guaranteed_orders_list) | **GET** /v2/guaranteedOrders | 
[**displayvideo_guaranteed_orders_patch**](GuaranteedOrdersApi.md#displayvideo_guaranteed_orders_patch) | **PATCH** /v2/guaranteedOrders/{guaranteedOrderId} | 


# **displayvideo_guaranteed_orders_create**
> GuaranteedOrder displayvideo_guaranteed_orders_create(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, advertiser_id=advertiser_id, partner_id=partner_id, guaranteed_order=guaranteed_order)



Creates a new guaranteed order. Returns the newly created guaranteed order if successful.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.guaranteed_order import GuaranteedOrder
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GuaranteedOrdersApi(api_client)
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    alt = 'alt_example' # str | Data format for response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    advertiser_id = 'advertiser_id_example' # str | The ID of the advertiser that the request is being made within. (optional)
    partner_id = 'partner_id_example' # str | The ID of the partner that the request is being made within. (optional)
    guaranteed_order = openapi_client.GuaranteedOrder() # GuaranteedOrder |  (optional)

    try:
        api_response = api_instance.displayvideo_guaranteed_orders_create(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, advertiser_id=advertiser_id, partner_id=partner_id, guaranteed_order=guaranteed_order)
        print("The response of GuaranteedOrdersApi->displayvideo_guaranteed_orders_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GuaranteedOrdersApi->displayvideo_guaranteed_orders_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xgafv** | **str**| V1 error format. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **alt** | **str**| Data format for response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **advertiser_id** | **str**| The ID of the advertiser that the request is being made within. | [optional] 
 **partner_id** | **str**| The ID of the partner that the request is being made within. | [optional] 
 **guaranteed_order** | [**GuaranteedOrder**](GuaranteedOrder.md)|  | [optional] 

### Return type

[**GuaranteedOrder**](GuaranteedOrder.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **displayvideo_guaranteed_orders_edit_guaranteed_order_read_accessors**
> EditGuaranteedOrderReadAccessorsResponse displayvideo_guaranteed_orders_edit_guaranteed_order_read_accessors(guaranteed_order_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, edit_guaranteed_order_read_accessors_request=edit_guaranteed_order_read_accessors_request)



Edits read advertisers of a guaranteed order.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.edit_guaranteed_order_read_accessors_request import EditGuaranteedOrderReadAccessorsRequest
from openapi_client.models.edit_guaranteed_order_read_accessors_response import EditGuaranteedOrderReadAccessorsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GuaranteedOrdersApi(api_client)
    guaranteed_order_id = 'guaranteed_order_id_example' # str | Required. The ID of the guaranteed order to edit. The ID is of the format `{exchange}-{legacy_guaranteed_order_id}`
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    alt = 'alt_example' # str | Data format for response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    edit_guaranteed_order_read_accessors_request = openapi_client.EditGuaranteedOrderReadAccessorsRequest() # EditGuaranteedOrderReadAccessorsRequest |  (optional)

    try:
        api_response = api_instance.displayvideo_guaranteed_orders_edit_guaranteed_order_read_accessors(guaranteed_order_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, edit_guaranteed_order_read_accessors_request=edit_guaranteed_order_read_accessors_request)
        print("The response of GuaranteedOrdersApi->displayvideo_guaranteed_orders_edit_guaranteed_order_read_accessors:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GuaranteedOrdersApi->displayvideo_guaranteed_orders_edit_guaranteed_order_read_accessors: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guaranteed_order_id** | **str**| Required. The ID of the guaranteed order to edit. The ID is of the format &#x60;{exchange}-{legacy_guaranteed_order_id}&#x60; | 
 **xgafv** | **str**| V1 error format. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **alt** | **str**| Data format for response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **edit_guaranteed_order_read_accessors_request** | [**EditGuaranteedOrderReadAccessorsRequest**](EditGuaranteedOrderReadAccessorsRequest.md)|  | [optional] 

### Return type

[**EditGuaranteedOrderReadAccessorsResponse**](EditGuaranteedOrderReadAccessorsResponse.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **displayvideo_guaranteed_orders_get**
> GuaranteedOrder displayvideo_guaranteed_orders_get(guaranteed_order_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, advertiser_id=advertiser_id, partner_id=partner_id)



Gets a guaranteed order.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.guaranteed_order import GuaranteedOrder
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GuaranteedOrdersApi(api_client)
    guaranteed_order_id = 'guaranteed_order_id_example' # str | Required. The ID of the guaranteed order to fetch. The ID is of the format `{exchange}-{legacy_guaranteed_order_id}`
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    alt = 'alt_example' # str | Data format for response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    advertiser_id = 'advertiser_id_example' # str | The ID of the advertiser that has access to the guaranteed order. (optional)
    partner_id = 'partner_id_example' # str | The ID of the partner that has access to the guaranteed order. (optional)

    try:
        api_response = api_instance.displayvideo_guaranteed_orders_get(guaranteed_order_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, advertiser_id=advertiser_id, partner_id=partner_id)
        print("The response of GuaranteedOrdersApi->displayvideo_guaranteed_orders_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GuaranteedOrdersApi->displayvideo_guaranteed_orders_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guaranteed_order_id** | **str**| Required. The ID of the guaranteed order to fetch. The ID is of the format &#x60;{exchange}-{legacy_guaranteed_order_id}&#x60; | 
 **xgafv** | **str**| V1 error format. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **alt** | **str**| Data format for response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **advertiser_id** | **str**| The ID of the advertiser that has access to the guaranteed order. | [optional] 
 **partner_id** | **str**| The ID of the partner that has access to the guaranteed order. | [optional] 

### Return type

[**GuaranteedOrder**](GuaranteedOrder.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **displayvideo_guaranteed_orders_list**
> ListGuaranteedOrdersResponse displayvideo_guaranteed_orders_list(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, advertiser_id=advertiser_id, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token, partner_id=partner_id)



Lists guaranteed orders that are accessible to the current user. The order is defined by the order_by parameter. If a filter by entity_status is not specified, guaranteed orders with entity status `ENTITY_STATUS_ARCHIVED` will not be included in the results.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.list_guaranteed_orders_response import ListGuaranteedOrdersResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GuaranteedOrdersApi(api_client)
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    alt = 'alt_example' # str | Data format for response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    advertiser_id = 'advertiser_id_example' # str | The ID of the advertiser that has access to the guaranteed order. (optional)
    filter = 'filter_example' # str | Allows filtering by guaranteed order fields. * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `guaranteed_order_id` * `exchange` * `display_name` * `status.entityStatus` Examples: * All active guaranteed orders: `status.entityStatus=\"ENTITY_STATUS_ACTIVE\"` * Guaranteed orders belonging to Google Ad Manager or Rubicon exchanges: `exchange=\"EXCHANGE_GOOGLE_AD_MANAGER\" OR exchange=\"EXCHANGE_RUBICON\"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information. (optional)
    order_by = 'order_by_example' # str | Field by which to sort the list. Acceptable values are: * `displayName` (default) The default sorting order is ascending. To specify descending order for a field, a suffix \"desc\" should be added to the field name. For example, `displayName desc`. (optional)
    page_size = 56 # int | Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. (optional)
    page_token = 'page_token_example' # str | A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListGuaranteedOrders` method. If not specified, the first page of results will be returned. (optional)
    partner_id = 'partner_id_example' # str | The ID of the partner that has access to the guaranteed order. (optional)

    try:
        api_response = api_instance.displayvideo_guaranteed_orders_list(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, advertiser_id=advertiser_id, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token, partner_id=partner_id)
        print("The response of GuaranteedOrdersApi->displayvideo_guaranteed_orders_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GuaranteedOrdersApi->displayvideo_guaranteed_orders_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xgafv** | **str**| V1 error format. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **alt** | **str**| Data format for response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **advertiser_id** | **str**| The ID of the advertiser that has access to the guaranteed order. | [optional] 
 **filter** | **str**| Allows filtering by guaranteed order fields. * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by &#x60;AND&#x60; or &#x60;OR&#x60; logical operators. A sequence of restrictions implicitly uses &#x60;AND&#x60;. * A restriction has the form of &#x60;{field} {operator} {value}&#x60;. * All fields must use the &#x60;EQUALS (&#x3D;)&#x60; operator. Supported fields: * &#x60;guaranteed_order_id&#x60; * &#x60;exchange&#x60; * &#x60;display_name&#x60; * &#x60;status.entityStatus&#x60; Examples: * All active guaranteed orders: &#x60;status.entityStatus&#x3D;\&quot;ENTITY_STATUS_ACTIVE\&quot;&#x60; * Guaranteed orders belonging to Google Ad Manager or Rubicon exchanges: &#x60;exchange&#x3D;\&quot;EXCHANGE_GOOGLE_AD_MANAGER\&quot; OR exchange&#x3D;\&quot;EXCHANGE_RUBICON\&quot;&#x60; The length of this field should be no more than 500 characters. Reference our [filter &#x60;LIST&#x60; requests](/display-video/api/guides/how-tos/filters) guide for more information. | [optional] 
 **order_by** | **str**| Field by which to sort the list. Acceptable values are: * &#x60;displayName&#x60; (default) The default sorting order is ascending. To specify descending order for a field, a suffix \&quot;desc\&quot; should be added to the field name. For example, &#x60;displayName desc&#x60;. | [optional] 
 **page_size** | **int**| Requested page size. Must be between &#x60;1&#x60; and &#x60;200&#x60;. If unspecified will default to &#x60;100&#x60;. | [optional] 
 **page_token** | **str**| A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to &#x60;ListGuaranteedOrders&#x60; method. If not specified, the first page of results will be returned. | [optional] 
 **partner_id** | **str**| The ID of the partner that has access to the guaranteed order. | [optional] 

### Return type

[**ListGuaranteedOrdersResponse**](ListGuaranteedOrdersResponse.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **displayvideo_guaranteed_orders_patch**
> GuaranteedOrder displayvideo_guaranteed_orders_patch(guaranteed_order_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, advertiser_id=advertiser_id, partner_id=partner_id, update_mask=update_mask, guaranteed_order=guaranteed_order)



Updates an existing guaranteed order. Returns the updated guaranteed order if successful.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.guaranteed_order import GuaranteedOrder
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://displayvideo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://displayvideo.googleapis.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GuaranteedOrdersApi(api_client)
    guaranteed_order_id = 'guaranteed_order_id_example' # str | Output only. The unique identifier of the guaranteed order. The guaranteed order IDs have the format `{exchange}-{legacy_guaranteed_order_id}`.
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    alt = 'alt_example' # str | Data format for response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    advertiser_id = 'advertiser_id_example' # str | The ID of the advertiser that the request is being made within. (optional)
    partner_id = 'partner_id_example' # str | The ID of the partner that the request is being made within. (optional)
    update_mask = 'update_mask_example' # str | Required. The mask to control which fields to update. (optional)
    guaranteed_order = openapi_client.GuaranteedOrder() # GuaranteedOrder |  (optional)

    try:
        api_response = api_instance.displayvideo_guaranteed_orders_patch(guaranteed_order_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, advertiser_id=advertiser_id, partner_id=partner_id, update_mask=update_mask, guaranteed_order=guaranteed_order)
        print("The response of GuaranteedOrdersApi->displayvideo_guaranteed_orders_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GuaranteedOrdersApi->displayvideo_guaranteed_orders_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guaranteed_order_id** | **str**| Output only. The unique identifier of the guaranteed order. The guaranteed order IDs have the format &#x60;{exchange}-{legacy_guaranteed_order_id}&#x60;. | 
 **xgafv** | **str**| V1 error format. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **alt** | **str**| Data format for response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **advertiser_id** | **str**| The ID of the advertiser that the request is being made within. | [optional] 
 **partner_id** | **str**| The ID of the partner that the request is being made within. | [optional] 
 **update_mask** | **str**| Required. The mask to control which fields to update. | [optional] 
 **guaranteed_order** | [**GuaranteedOrder**](GuaranteedOrder.md)|  | [optional] 

### Return type

[**GuaranteedOrder**](GuaranteedOrder.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

