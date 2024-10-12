# openapi_client.AccountsApi

All URIs are relative to *https://mybusinessbusinessinformation.googleapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**mybusinessbusinessinformation_accounts_locations_create**](AccountsApi.md#mybusinessbusinessinformation_accounts_locations_create) | **POST** /v1/{parent}/locations | 
[**mybusinessbusinessinformation_accounts_locations_list**](AccountsApi.md#mybusinessbusinessinformation_accounts_locations_list) | **GET** /v1/{parent}/locations | 


# **mybusinessbusinessinformation_accounts_locations_create**
> Location mybusinessbusinessinformation_accounts_locations_create(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, request_id=request_id, validate_only=validate_only, location=location)



Creates a new Location that will be owned by the logged in user.

### Example


```python
import openapi_client
from openapi_client.models.location import Location
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://mybusinessbusinessinformation.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://mybusinessbusinessinformation.googleapis.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountsApi(api_client)
    parent = 'parent_example' # str | Required. The name of the account in which to create this location.
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
    request_id = 'request_id_example' # str | Optional. A unique request ID for the server to detect duplicated requests. We recommend using UUIDs. Max length is 50 characters. (optional)
    validate_only = True # bool | Optional. If true, the request is validated without actually creating the location. (optional)
    location = openapi_client.Location() # Location |  (optional)

    try:
        api_response = api_instance.mybusinessbusinessinformation_accounts_locations_create(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, request_id=request_id, validate_only=validate_only, location=location)
        print("The response of AccountsApi->mybusinessbusinessinformation_accounts_locations_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->mybusinessbusinessinformation_accounts_locations_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The name of the account in which to create this location. | 
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
 **request_id** | **str**| Optional. A unique request ID for the server to detect duplicated requests. We recommend using UUIDs. Max length is 50 characters. | [optional] 
 **validate_only** | **bool**| Optional. If true, the request is validated without actually creating the location. | [optional] 
 **location** | [**Location**](Location.md)|  | [optional] 

### Return type

[**Location**](Location.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mybusinessbusinessinformation_accounts_locations_list**
> ListLocationsResponse mybusinessbusinessinformation_accounts_locations_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token, read_mask=read_mask)



Lists the locations for the specified account.

### Example


```python
import openapi_client
from openapi_client.models.list_locations_response import ListLocationsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://mybusinessbusinessinformation.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://mybusinessbusinessinformation.googleapis.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountsApi(api_client)
    parent = 'parent_example' # str | Required. The name of the account to fetch locations from. If the parent Account is of AccountType PERSONAL, only Locations that are directly owned by the Account are returned, otherwise it will return all accessible locations from the Account, either directly or indirectly.
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
    filter = 'filter_example' # str | Optional. A filter constraining the locations to return. The response includes only entries that match the filter. If `filter` is empty, then constraints are applied and all locations (paginated) are retrieved for the requested account. For more information about valid fields and example usage, see [Work with Location Data Guide](https://developers.google.com/my-business/content/location-data#filter_results_when_you_list_locations). (optional)
    order_by = 'order_by_example' # str | Optional. Sorting order for the request. Multiple fields should be comma-separated, following SQL syntax. The default sorting order is ascending. To specify descending order, a suffix \" desc\" should be added. Valid fields to order_by are title and store_code. For example: \"title, store_code desc\" or \"title\" or \"store_code desc\" (optional)
    page_size = 56 # int | Optional. How many locations to fetch per page. Default value is 10 if not set. Minimum is 1, and maximum page size is 100. (optional)
    page_token = 'page_token_example' # str | Optional. If specified, it fetches the next `page` of locations. The page token is returned by previous calls to `ListLocations` when there were more locations than could fit in the requested page size. (optional)
    read_mask = 'read_mask_example' # str | Required. Read mask to specify what fields will be returned in the response. (optional)

    try:
        api_response = api_instance.mybusinessbusinessinformation_accounts_locations_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token, read_mask=read_mask)
        print("The response of AccountsApi->mybusinessbusinessinformation_accounts_locations_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->mybusinessbusinessinformation_accounts_locations_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The name of the account to fetch locations from. If the parent Account is of AccountType PERSONAL, only Locations that are directly owned by the Account are returned, otherwise it will return all accessible locations from the Account, either directly or indirectly. | 
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
 **filter** | **str**| Optional. A filter constraining the locations to return. The response includes only entries that match the filter. If &#x60;filter&#x60; is empty, then constraints are applied and all locations (paginated) are retrieved for the requested account. For more information about valid fields and example usage, see [Work with Location Data Guide](https://developers.google.com/my-business/content/location-data#filter_results_when_you_list_locations). | [optional] 
 **order_by** | **str**| Optional. Sorting order for the request. Multiple fields should be comma-separated, following SQL syntax. The default sorting order is ascending. To specify descending order, a suffix \&quot; desc\&quot; should be added. Valid fields to order_by are title and store_code. For example: \&quot;title, store_code desc\&quot; or \&quot;title\&quot; or \&quot;store_code desc\&quot; | [optional] 
 **page_size** | **int**| Optional. How many locations to fetch per page. Default value is 10 if not set. Minimum is 1, and maximum page size is 100. | [optional] 
 **page_token** | **str**| Optional. If specified, it fetches the next &#x60;page&#x60; of locations. The page token is returned by previous calls to &#x60;ListLocations&#x60; when there were more locations than could fit in the requested page size. | [optional] 
 **read_mask** | **str**| Required. Read mask to specify what fields will be returned in the response. | [optional] 

### Return type

[**ListLocationsResponse**](ListLocationsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

