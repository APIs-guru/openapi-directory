# openapi_client.CustomBiddingAlgorithmsApi

All URIs are relative to *https://displayvideo.googleapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**displayvideo_custom_bidding_algorithms_create**](CustomBiddingAlgorithmsApi.md#displayvideo_custom_bidding_algorithms_create) | **POST** /v3/customBiddingAlgorithms | 
[**displayvideo_custom_bidding_algorithms_get**](CustomBiddingAlgorithmsApi.md#displayvideo_custom_bidding_algorithms_get) | **GET** /v3/customBiddingAlgorithms/{customBiddingAlgorithmId} | 
[**displayvideo_custom_bidding_algorithms_list**](CustomBiddingAlgorithmsApi.md#displayvideo_custom_bidding_algorithms_list) | **GET** /v3/customBiddingAlgorithms | 
[**displayvideo_custom_bidding_algorithms_patch**](CustomBiddingAlgorithmsApi.md#displayvideo_custom_bidding_algorithms_patch) | **PATCH** /v3/customBiddingAlgorithms/{customBiddingAlgorithmId} | 
[**displayvideo_custom_bidding_algorithms_rules_create**](CustomBiddingAlgorithmsApi.md#displayvideo_custom_bidding_algorithms_rules_create) | **POST** /v3/customBiddingAlgorithms/{customBiddingAlgorithmId}/rules | 
[**displayvideo_custom_bidding_algorithms_rules_get**](CustomBiddingAlgorithmsApi.md#displayvideo_custom_bidding_algorithms_rules_get) | **GET** /v3/customBiddingAlgorithms/{customBiddingAlgorithmId}/rules/{customBiddingAlgorithmRulesId} | 
[**displayvideo_custom_bidding_algorithms_rules_list**](CustomBiddingAlgorithmsApi.md#displayvideo_custom_bidding_algorithms_rules_list) | **GET** /v3/customBiddingAlgorithms/{customBiddingAlgorithmId}/rules | 
[**displayvideo_custom_bidding_algorithms_scripts_create**](CustomBiddingAlgorithmsApi.md#displayvideo_custom_bidding_algorithms_scripts_create) | **POST** /v3/customBiddingAlgorithms/{customBiddingAlgorithmId}/scripts | 
[**displayvideo_custom_bidding_algorithms_scripts_get**](CustomBiddingAlgorithmsApi.md#displayvideo_custom_bidding_algorithms_scripts_get) | **GET** /v3/customBiddingAlgorithms/{customBiddingAlgorithmId}/scripts/{customBiddingScriptId} | 
[**displayvideo_custom_bidding_algorithms_scripts_list**](CustomBiddingAlgorithmsApi.md#displayvideo_custom_bidding_algorithms_scripts_list) | **GET** /v3/customBiddingAlgorithms/{customBiddingAlgorithmId}/scripts | 
[**displayvideo_custom_bidding_algorithms_upload_rules**](CustomBiddingAlgorithmsApi.md#displayvideo_custom_bidding_algorithms_upload_rules) | **GET** /v3/customBiddingAlgorithms/{customBiddingAlgorithmId}:uploadRules | 
[**displayvideo_custom_bidding_algorithms_upload_script**](CustomBiddingAlgorithmsApi.md#displayvideo_custom_bidding_algorithms_upload_script) | **GET** /v3/customBiddingAlgorithms/{customBiddingAlgorithmId}:uploadScript | 


# **displayvideo_custom_bidding_algorithms_create**
> CustomBiddingAlgorithm displayvideo_custom_bidding_algorithms_create(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, custom_bidding_algorithm=custom_bidding_algorithm)



Creates a new custom bidding algorithm. Returns the newly created custom bidding algorithm if successful.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.custom_bidding_algorithm import CustomBiddingAlgorithm
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
    api_instance = openapi_client.CustomBiddingAlgorithmsApi(api_client)
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
    custom_bidding_algorithm = openapi_client.CustomBiddingAlgorithm() # CustomBiddingAlgorithm |  (optional)

    try:
        api_response = api_instance.displayvideo_custom_bidding_algorithms_create(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, custom_bidding_algorithm=custom_bidding_algorithm)
        print("The response of CustomBiddingAlgorithmsApi->displayvideo_custom_bidding_algorithms_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomBiddingAlgorithmsApi->displayvideo_custom_bidding_algorithms_create: %s\n" % e)
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
 **custom_bidding_algorithm** | [**CustomBiddingAlgorithm**](CustomBiddingAlgorithm.md)|  | [optional] 

### Return type

[**CustomBiddingAlgorithm**](CustomBiddingAlgorithm.md)

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

# **displayvideo_custom_bidding_algorithms_get**
> CustomBiddingAlgorithm displayvideo_custom_bidding_algorithms_get(custom_bidding_algorithm_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, advertiser_id=advertiser_id, partner_id=partner_id)



Gets a custom bidding algorithm.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.custom_bidding_algorithm import CustomBiddingAlgorithm
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
    api_instance = openapi_client.CustomBiddingAlgorithmsApi(api_client)
    custom_bidding_algorithm_id = 'custom_bidding_algorithm_id_example' # str | Required. The ID of the custom bidding algorithm to fetch.
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
    advertiser_id = 'advertiser_id_example' # str | The ID of the DV360 partner that has access to the custom bidding algorithm. (optional)
    partner_id = 'partner_id_example' # str | The ID of the DV360 partner that has access to the custom bidding algorithm. (optional)

    try:
        api_response = api_instance.displayvideo_custom_bidding_algorithms_get(custom_bidding_algorithm_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, advertiser_id=advertiser_id, partner_id=partner_id)
        print("The response of CustomBiddingAlgorithmsApi->displayvideo_custom_bidding_algorithms_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomBiddingAlgorithmsApi->displayvideo_custom_bidding_algorithms_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **custom_bidding_algorithm_id** | **str**| Required. The ID of the custom bidding algorithm to fetch. | 
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
 **advertiser_id** | **str**| The ID of the DV360 partner that has access to the custom bidding algorithm. | [optional] 
 **partner_id** | **str**| The ID of the DV360 partner that has access to the custom bidding algorithm. | [optional] 

### Return type

[**CustomBiddingAlgorithm**](CustomBiddingAlgorithm.md)

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

# **displayvideo_custom_bidding_algorithms_list**
> ListCustomBiddingAlgorithmsResponse displayvideo_custom_bidding_algorithms_list(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, advertiser_id=advertiser_id, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token, partner_id=partner_id)



Lists custom bidding algorithms that are accessible to the current user and can be used in bidding stratgies. The order is defined by the order_by parameter.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.list_custom_bidding_algorithms_response import ListCustomBiddingAlgorithmsResponse
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
    api_instance = openapi_client.CustomBiddingAlgorithmsApi(api_client)
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
    advertiser_id = 'advertiser_id_example' # str | The ID of the DV360 advertiser that has access to the custom bidding algorithm. (optional)
    filter = 'filter_example' # str | Allows filtering by custom bidding algorithm fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND`. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * The `customBiddingAlgorithmType` field must use the `EQUALS (=)` operator. * The `displayName` field must use the `HAS (:)` operator. Supported fields: * `customBiddingAlgorithmType` * `displayName` Examples: * All custom bidding algorithms for which the display name contains \"politics\": `displayName:\"politics\"`. * All custom bidding algorithms for which the type is \"SCRIPT_BASED\": `customBiddingAlgorithmType=SCRIPT_BASED` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information. (optional)
    order_by = 'order_by_example' # str | Field by which to sort the list. Acceptable values are: * `displayName` (default) The default sorting order is ascending. To specify descending order for a field, a suffix \"desc\" should be added to the field name. Example: `displayName desc`. (optional)
    page_size = 56 # int | Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. (optional)
    page_token = 'page_token_example' # str | A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListCustomBiddingAlgorithms` method. If not specified, the first page of results will be returned. (optional)
    partner_id = 'partner_id_example' # str | The ID of the DV360 partner that has access to the custom bidding algorithm. (optional)

    try:
        api_response = api_instance.displayvideo_custom_bidding_algorithms_list(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, advertiser_id=advertiser_id, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token, partner_id=partner_id)
        print("The response of CustomBiddingAlgorithmsApi->displayvideo_custom_bidding_algorithms_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomBiddingAlgorithmsApi->displayvideo_custom_bidding_algorithms_list: %s\n" % e)
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
 **advertiser_id** | **str**| The ID of the DV360 advertiser that has access to the custom bidding algorithm. | [optional] 
 **filter** | **str**| Allows filtering by custom bidding algorithm fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by &#x60;AND&#x60;. A sequence of restrictions implicitly uses &#x60;AND&#x60;. * A restriction has the form of &#x60;{field} {operator} {value}&#x60;. * The &#x60;customBiddingAlgorithmType&#x60; field must use the &#x60;EQUALS (&#x3D;)&#x60; operator. * The &#x60;displayName&#x60; field must use the &#x60;HAS (:)&#x60; operator. Supported fields: * &#x60;customBiddingAlgorithmType&#x60; * &#x60;displayName&#x60; Examples: * All custom bidding algorithms for which the display name contains \&quot;politics\&quot;: &#x60;displayName:\&quot;politics\&quot;&#x60;. * All custom bidding algorithms for which the type is \&quot;SCRIPT_BASED\&quot;: &#x60;customBiddingAlgorithmType&#x3D;SCRIPT_BASED&#x60; The length of this field should be no more than 500 characters. Reference our [filter &#x60;LIST&#x60; requests](/display-video/api/guides/how-tos/filters) guide for more information. | [optional] 
 **order_by** | **str**| Field by which to sort the list. Acceptable values are: * &#x60;displayName&#x60; (default) The default sorting order is ascending. To specify descending order for a field, a suffix \&quot;desc\&quot; should be added to the field name. Example: &#x60;displayName desc&#x60;. | [optional] 
 **page_size** | **int**| Requested page size. Must be between &#x60;1&#x60; and &#x60;200&#x60;. If unspecified will default to &#x60;100&#x60;. Returns error code &#x60;INVALID_ARGUMENT&#x60; if an invalid value is specified. | [optional] 
 **page_token** | **str**| A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to &#x60;ListCustomBiddingAlgorithms&#x60; method. If not specified, the first page of results will be returned. | [optional] 
 **partner_id** | **str**| The ID of the DV360 partner that has access to the custom bidding algorithm. | [optional] 

### Return type

[**ListCustomBiddingAlgorithmsResponse**](ListCustomBiddingAlgorithmsResponse.md)

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

# **displayvideo_custom_bidding_algorithms_patch**
> CustomBiddingAlgorithm displayvideo_custom_bidding_algorithms_patch(custom_bidding_algorithm_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, update_mask=update_mask, custom_bidding_algorithm=custom_bidding_algorithm)



Updates an existing custom bidding algorithm. Returns the updated custom bidding algorithm if successful.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.custom_bidding_algorithm import CustomBiddingAlgorithm
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
    api_instance = openapi_client.CustomBiddingAlgorithmsApi(api_client)
    custom_bidding_algorithm_id = 'custom_bidding_algorithm_id_example' # str | Output only. The unique ID of the custom bidding algorithm. Assigned by the system.
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
    update_mask = 'update_mask_example' # str | Required. The mask to control which fields to update. (optional)
    custom_bidding_algorithm = openapi_client.CustomBiddingAlgorithm() # CustomBiddingAlgorithm |  (optional)

    try:
        api_response = api_instance.displayvideo_custom_bidding_algorithms_patch(custom_bidding_algorithm_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, update_mask=update_mask, custom_bidding_algorithm=custom_bidding_algorithm)
        print("The response of CustomBiddingAlgorithmsApi->displayvideo_custom_bidding_algorithms_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomBiddingAlgorithmsApi->displayvideo_custom_bidding_algorithms_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **custom_bidding_algorithm_id** | **str**| Output only. The unique ID of the custom bidding algorithm. Assigned by the system. | 
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
 **update_mask** | **str**| Required. The mask to control which fields to update. | [optional] 
 **custom_bidding_algorithm** | [**CustomBiddingAlgorithm**](CustomBiddingAlgorithm.md)|  | [optional] 

### Return type

[**CustomBiddingAlgorithm**](CustomBiddingAlgorithm.md)

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

# **displayvideo_custom_bidding_algorithms_rules_create**
> CustomBiddingAlgorithmRules displayvideo_custom_bidding_algorithms_rules_create(custom_bidding_algorithm_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, advertiser_id=advertiser_id, partner_id=partner_id, custom_bidding_algorithm_rules=custom_bidding_algorithm_rules)



Creates a new rules resource. Returns the newly created rules resource if successful.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.custom_bidding_algorithm_rules import CustomBiddingAlgorithmRules
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
    api_instance = openapi_client.CustomBiddingAlgorithmsApi(api_client)
    custom_bidding_algorithm_id = 'custom_bidding_algorithm_id_example' # str | Required. The ID of the custom bidding algorithm that owns the rules resource.
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
    advertiser_id = 'advertiser_id_example' # str | The ID of the advertiser that owns the parent custom bidding algorithm. (optional)
    partner_id = 'partner_id_example' # str | The ID of the partner that owns the parent custom bidding algorithm. Only this partner will have write access to this rules resource. (optional)
    custom_bidding_algorithm_rules = openapi_client.CustomBiddingAlgorithmRules() # CustomBiddingAlgorithmRules |  (optional)

    try:
        api_response = api_instance.displayvideo_custom_bidding_algorithms_rules_create(custom_bidding_algorithm_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, advertiser_id=advertiser_id, partner_id=partner_id, custom_bidding_algorithm_rules=custom_bidding_algorithm_rules)
        print("The response of CustomBiddingAlgorithmsApi->displayvideo_custom_bidding_algorithms_rules_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomBiddingAlgorithmsApi->displayvideo_custom_bidding_algorithms_rules_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **custom_bidding_algorithm_id** | **str**| Required. The ID of the custom bidding algorithm that owns the rules resource. | 
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
 **advertiser_id** | **str**| The ID of the advertiser that owns the parent custom bidding algorithm. | [optional] 
 **partner_id** | **str**| The ID of the partner that owns the parent custom bidding algorithm. Only this partner will have write access to this rules resource. | [optional] 
 **custom_bidding_algorithm_rules** | [**CustomBiddingAlgorithmRules**](CustomBiddingAlgorithmRules.md)|  | [optional] 

### Return type

[**CustomBiddingAlgorithmRules**](CustomBiddingAlgorithmRules.md)

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

# **displayvideo_custom_bidding_algorithms_rules_get**
> CustomBiddingAlgorithmRules displayvideo_custom_bidding_algorithms_rules_get(custom_bidding_algorithm_id, custom_bidding_algorithm_rules_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, advertiser_id=advertiser_id, partner_id=partner_id)



Retrieves a rules resource.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.custom_bidding_algorithm_rules import CustomBiddingAlgorithmRules
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
    api_instance = openapi_client.CustomBiddingAlgorithmsApi(api_client)
    custom_bidding_algorithm_id = 'custom_bidding_algorithm_id_example' # str | Required. The ID of the custom bidding algorithm that owns the rules resource.
    custom_bidding_algorithm_rules_id = 'custom_bidding_algorithm_rules_id_example' # str | Required. The ID of the rules resource to fetch.
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
    advertiser_id = 'advertiser_id_example' # str | The ID of the advertiser that owns the parent custom bidding algorithm. (optional)
    partner_id = 'partner_id_example' # str | The ID of the partner that owns the parent custom bidding algorithm. (optional)

    try:
        api_response = api_instance.displayvideo_custom_bidding_algorithms_rules_get(custom_bidding_algorithm_id, custom_bidding_algorithm_rules_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, advertiser_id=advertiser_id, partner_id=partner_id)
        print("The response of CustomBiddingAlgorithmsApi->displayvideo_custom_bidding_algorithms_rules_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomBiddingAlgorithmsApi->displayvideo_custom_bidding_algorithms_rules_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **custom_bidding_algorithm_id** | **str**| Required. The ID of the custom bidding algorithm that owns the rules resource. | 
 **custom_bidding_algorithm_rules_id** | **str**| Required. The ID of the rules resource to fetch. | 
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
 **advertiser_id** | **str**| The ID of the advertiser that owns the parent custom bidding algorithm. | [optional] 
 **partner_id** | **str**| The ID of the partner that owns the parent custom bidding algorithm. | [optional] 

### Return type

[**CustomBiddingAlgorithmRules**](CustomBiddingAlgorithmRules.md)

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

# **displayvideo_custom_bidding_algorithms_rules_list**
> ListCustomBiddingAlgorithmRulesResponse displayvideo_custom_bidding_algorithms_rules_list(custom_bidding_algorithm_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, advertiser_id=advertiser_id, order_by=order_by, page_size=page_size, page_token=page_token, partner_id=partner_id)



Lists rules resources that belong to the given algorithm. The order is defined by the order_by parameter.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.list_custom_bidding_algorithm_rules_response import ListCustomBiddingAlgorithmRulesResponse
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
    api_instance = openapi_client.CustomBiddingAlgorithmsApi(api_client)
    custom_bidding_algorithm_id = 'custom_bidding_algorithm_id_example' # str | Required. The ID of the custom bidding algorithm that owns the rules resource.
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
    advertiser_id = 'advertiser_id_example' # str | The ID of the advertiser that owns the parent custom bidding algorithm. (optional)
    order_by = 'order_by_example' # str | Field by which to sort the list. Acceptable values are: * `createTime desc` (default) The default sorting order is descending. To specify ascending order for a field, the suffix \"desc\" should be removed. Example: `createTime`. (optional)
    page_size = 56 # int | Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. (optional)
    page_token = 'page_token_example' # str | A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListCustomBiddingAlgorithmRules` method. If not specified, the first page of results will be returned. (optional)
    partner_id = 'partner_id_example' # str | The ID of the partner that owns the parent custom bidding algorithm. (optional)

    try:
        api_response = api_instance.displayvideo_custom_bidding_algorithms_rules_list(custom_bidding_algorithm_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, advertiser_id=advertiser_id, order_by=order_by, page_size=page_size, page_token=page_token, partner_id=partner_id)
        print("The response of CustomBiddingAlgorithmsApi->displayvideo_custom_bidding_algorithms_rules_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomBiddingAlgorithmsApi->displayvideo_custom_bidding_algorithms_rules_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **custom_bidding_algorithm_id** | **str**| Required. The ID of the custom bidding algorithm that owns the rules resource. | 
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
 **advertiser_id** | **str**| The ID of the advertiser that owns the parent custom bidding algorithm. | [optional] 
 **order_by** | **str**| Field by which to sort the list. Acceptable values are: * &#x60;createTime desc&#x60; (default) The default sorting order is descending. To specify ascending order for a field, the suffix \&quot;desc\&quot; should be removed. Example: &#x60;createTime&#x60;. | [optional] 
 **page_size** | **int**| Requested page size. Must be between &#x60;1&#x60; and &#x60;200&#x60;. If unspecified will default to &#x60;100&#x60;. Returns error code &#x60;INVALID_ARGUMENT&#x60; if an invalid value is specified. | [optional] 
 **page_token** | **str**| A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to &#x60;ListCustomBiddingAlgorithmRules&#x60; method. If not specified, the first page of results will be returned. | [optional] 
 **partner_id** | **str**| The ID of the partner that owns the parent custom bidding algorithm. | [optional] 

### Return type

[**ListCustomBiddingAlgorithmRulesResponse**](ListCustomBiddingAlgorithmRulesResponse.md)

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

# **displayvideo_custom_bidding_algorithms_scripts_create**
> CustomBiddingScript displayvideo_custom_bidding_algorithms_scripts_create(custom_bidding_algorithm_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, advertiser_id=advertiser_id, partner_id=partner_id, custom_bidding_script=custom_bidding_script)



Creates a new custom bidding script. Returns the newly created script if successful.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.custom_bidding_script import CustomBiddingScript
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
    api_instance = openapi_client.CustomBiddingAlgorithmsApi(api_client)
    custom_bidding_algorithm_id = 'custom_bidding_algorithm_id_example' # str | Required. The ID of the custom bidding algorithm that owns the script.
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
    advertiser_id = 'advertiser_id_example' # str | The ID of the advertiser that owns the parent custom bidding algorithm. (optional)
    partner_id = 'partner_id_example' # str | The ID of the partner that owns the parent custom bidding algorithm. Only this partner will have write access to this custom bidding script. (optional)
    custom_bidding_script = openapi_client.CustomBiddingScript() # CustomBiddingScript |  (optional)

    try:
        api_response = api_instance.displayvideo_custom_bidding_algorithms_scripts_create(custom_bidding_algorithm_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, advertiser_id=advertiser_id, partner_id=partner_id, custom_bidding_script=custom_bidding_script)
        print("The response of CustomBiddingAlgorithmsApi->displayvideo_custom_bidding_algorithms_scripts_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomBiddingAlgorithmsApi->displayvideo_custom_bidding_algorithms_scripts_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **custom_bidding_algorithm_id** | **str**| Required. The ID of the custom bidding algorithm that owns the script. | 
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
 **advertiser_id** | **str**| The ID of the advertiser that owns the parent custom bidding algorithm. | [optional] 
 **partner_id** | **str**| The ID of the partner that owns the parent custom bidding algorithm. Only this partner will have write access to this custom bidding script. | [optional] 
 **custom_bidding_script** | [**CustomBiddingScript**](CustomBiddingScript.md)|  | [optional] 

### Return type

[**CustomBiddingScript**](CustomBiddingScript.md)

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

# **displayvideo_custom_bidding_algorithms_scripts_get**
> CustomBiddingScript displayvideo_custom_bidding_algorithms_scripts_get(custom_bidding_algorithm_id, custom_bidding_script_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, advertiser_id=advertiser_id, partner_id=partner_id)



Gets a custom bidding script.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.custom_bidding_script import CustomBiddingScript
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
    api_instance = openapi_client.CustomBiddingAlgorithmsApi(api_client)
    custom_bidding_algorithm_id = 'custom_bidding_algorithm_id_example' # str | Required. The ID of the custom bidding algorithm owns the script.
    custom_bidding_script_id = 'custom_bidding_script_id_example' # str | Required. The ID of the custom bidding script to fetch.
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
    advertiser_id = 'advertiser_id_example' # str | The ID of the advertiser that owns the parent custom bidding algorithm. (optional)
    partner_id = 'partner_id_example' # str | The ID of the partner that owns the parent custom bidding algorithm. Only this partner will have write access to this custom bidding script. (optional)

    try:
        api_response = api_instance.displayvideo_custom_bidding_algorithms_scripts_get(custom_bidding_algorithm_id, custom_bidding_script_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, advertiser_id=advertiser_id, partner_id=partner_id)
        print("The response of CustomBiddingAlgorithmsApi->displayvideo_custom_bidding_algorithms_scripts_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomBiddingAlgorithmsApi->displayvideo_custom_bidding_algorithms_scripts_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **custom_bidding_algorithm_id** | **str**| Required. The ID of the custom bidding algorithm owns the script. | 
 **custom_bidding_script_id** | **str**| Required. The ID of the custom bidding script to fetch. | 
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
 **advertiser_id** | **str**| The ID of the advertiser that owns the parent custom bidding algorithm. | [optional] 
 **partner_id** | **str**| The ID of the partner that owns the parent custom bidding algorithm. Only this partner will have write access to this custom bidding script. | [optional] 

### Return type

[**CustomBiddingScript**](CustomBiddingScript.md)

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

# **displayvideo_custom_bidding_algorithms_scripts_list**
> ListCustomBiddingScriptsResponse displayvideo_custom_bidding_algorithms_scripts_list(custom_bidding_algorithm_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, advertiser_id=advertiser_id, order_by=order_by, page_size=page_size, page_token=page_token, partner_id=partner_id)



Lists custom bidding scripts that belong to the given algorithm. The order is defined by the order_by parameter.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.list_custom_bidding_scripts_response import ListCustomBiddingScriptsResponse
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
    api_instance = openapi_client.CustomBiddingAlgorithmsApi(api_client)
    custom_bidding_algorithm_id = 'custom_bidding_algorithm_id_example' # str | Required. The ID of the custom bidding algorithm owns the script.
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
    advertiser_id = 'advertiser_id_example' # str | The ID of the advertiser that owns the parent custom bidding algorithm. (optional)
    order_by = 'order_by_example' # str | Field by which to sort the list. Acceptable values are: * `createTime desc` (default) The default sorting order is descending. To specify ascending order for a field, the suffix \"desc\" should be removed. Example: `createTime`. (optional)
    page_size = 56 # int | Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. (optional)
    page_token = 'page_token_example' # str | A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListCustomBiddingScripts` method. If not specified, the first page of results will be returned. (optional)
    partner_id = 'partner_id_example' # str | The ID of the partner that owns the parent custom bidding algorithm. Only this partner will have write access to this custom bidding script. (optional)

    try:
        api_response = api_instance.displayvideo_custom_bidding_algorithms_scripts_list(custom_bidding_algorithm_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, advertiser_id=advertiser_id, order_by=order_by, page_size=page_size, page_token=page_token, partner_id=partner_id)
        print("The response of CustomBiddingAlgorithmsApi->displayvideo_custom_bidding_algorithms_scripts_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomBiddingAlgorithmsApi->displayvideo_custom_bidding_algorithms_scripts_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **custom_bidding_algorithm_id** | **str**| Required. The ID of the custom bidding algorithm owns the script. | 
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
 **advertiser_id** | **str**| The ID of the advertiser that owns the parent custom bidding algorithm. | [optional] 
 **order_by** | **str**| Field by which to sort the list. Acceptable values are: * &#x60;createTime desc&#x60; (default) The default sorting order is descending. To specify ascending order for a field, the suffix \&quot;desc\&quot; should be removed. Example: &#x60;createTime&#x60;. | [optional] 
 **page_size** | **int**| Requested page size. Must be between &#x60;1&#x60; and &#x60;200&#x60;. If unspecified will default to &#x60;100&#x60;. Returns error code &#x60;INVALID_ARGUMENT&#x60; if an invalid value is specified. | [optional] 
 **page_token** | **str**| A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to &#x60;ListCustomBiddingScripts&#x60; method. If not specified, the first page of results will be returned. | [optional] 
 **partner_id** | **str**| The ID of the partner that owns the parent custom bidding algorithm. Only this partner will have write access to this custom bidding script. | [optional] 

### Return type

[**ListCustomBiddingScriptsResponse**](ListCustomBiddingScriptsResponse.md)

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

# **displayvideo_custom_bidding_algorithms_upload_rules**
> CustomBiddingAlgorithmRulesRef displayvideo_custom_bidding_algorithms_upload_rules(custom_bidding_algorithm_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, advertiser_id=advertiser_id, partner_id=partner_id)



Creates a rules reference object for an AlgorithmRules file. The resulting reference object provides a resource path where the AlgorithmRules file should be uploaded. This reference object should be included when creating a new CustomBiddingAlgorithmRules resource.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.custom_bidding_algorithm_rules_ref import CustomBiddingAlgorithmRulesRef
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
    api_instance = openapi_client.CustomBiddingAlgorithmsApi(api_client)
    custom_bidding_algorithm_id = 'custom_bidding_algorithm_id_example' # str | Required. The ID of the custom bidding algorithm that owns the rules resource.
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
    advertiser_id = 'advertiser_id_example' # str | The ID of the advertiser that owns the parent custom bidding algorithm. (optional)
    partner_id = 'partner_id_example' # str | The ID of the partner that owns the parent custom bidding algorithm. (optional)

    try:
        api_response = api_instance.displayvideo_custom_bidding_algorithms_upload_rules(custom_bidding_algorithm_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, advertiser_id=advertiser_id, partner_id=partner_id)
        print("The response of CustomBiddingAlgorithmsApi->displayvideo_custom_bidding_algorithms_upload_rules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomBiddingAlgorithmsApi->displayvideo_custom_bidding_algorithms_upload_rules: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **custom_bidding_algorithm_id** | **str**| Required. The ID of the custom bidding algorithm that owns the rules resource. | 
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
 **advertiser_id** | **str**| The ID of the advertiser that owns the parent custom bidding algorithm. | [optional] 
 **partner_id** | **str**| The ID of the partner that owns the parent custom bidding algorithm. | [optional] 

### Return type

[**CustomBiddingAlgorithmRulesRef**](CustomBiddingAlgorithmRulesRef.md)

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

# **displayvideo_custom_bidding_algorithms_upload_script**
> CustomBiddingScriptRef displayvideo_custom_bidding_algorithms_upload_script(custom_bidding_algorithm_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, advertiser_id=advertiser_id, partner_id=partner_id)



Creates a custom bidding script reference object for a script file. The resulting reference object provides a resource path to which the script file should be uploaded. This reference object should be included in when creating a new custom bidding script object.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.custom_bidding_script_ref import CustomBiddingScriptRef
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
    api_instance = openapi_client.CustomBiddingAlgorithmsApi(api_client)
    custom_bidding_algorithm_id = 'custom_bidding_algorithm_id_example' # str | Required. The ID of the custom bidding algorithm owns the script.
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
    advertiser_id = 'advertiser_id_example' # str | The ID of the advertiser that owns the parent custom bidding algorithm. (optional)
    partner_id = 'partner_id_example' # str | The ID of the partner that owns the parent custom bidding algorithm. Only this partner will have write access to this custom bidding script. (optional)

    try:
        api_response = api_instance.displayvideo_custom_bidding_algorithms_upload_script(custom_bidding_algorithm_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, advertiser_id=advertiser_id, partner_id=partner_id)
        print("The response of CustomBiddingAlgorithmsApi->displayvideo_custom_bidding_algorithms_upload_script:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomBiddingAlgorithmsApi->displayvideo_custom_bidding_algorithms_upload_script: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **custom_bidding_algorithm_id** | **str**| Required. The ID of the custom bidding algorithm owns the script. | 
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
 **advertiser_id** | **str**| The ID of the advertiser that owns the parent custom bidding algorithm. | [optional] 
 **partner_id** | **str**| The ID of the partner that owns the parent custom bidding algorithm. Only this partner will have write access to this custom bidding script. | [optional] 

### Return type

[**CustomBiddingScriptRef**](CustomBiddingScriptRef.md)

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

