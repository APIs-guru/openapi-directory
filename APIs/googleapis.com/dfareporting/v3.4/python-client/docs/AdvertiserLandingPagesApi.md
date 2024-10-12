# openapi_client.AdvertiserLandingPagesApi

All URIs are relative to *https://dfareporting.googleapis.com/dfareporting/v3.4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dfareporting_advertiser_landing_pages_get**](AdvertiserLandingPagesApi.md#dfareporting_advertiser_landing_pages_get) | **GET** /userprofiles/{profileId}/advertiserLandingPages/{id} | 
[**dfareporting_advertiser_landing_pages_insert**](AdvertiserLandingPagesApi.md#dfareporting_advertiser_landing_pages_insert) | **POST** /userprofiles/{profileId}/advertiserLandingPages | 
[**dfareporting_advertiser_landing_pages_list**](AdvertiserLandingPagesApi.md#dfareporting_advertiser_landing_pages_list) | **GET** /userprofiles/{profileId}/advertiserLandingPages | 
[**dfareporting_advertiser_landing_pages_patch**](AdvertiserLandingPagesApi.md#dfareporting_advertiser_landing_pages_patch) | **PATCH** /userprofiles/{profileId}/advertiserLandingPages | 
[**dfareporting_advertiser_landing_pages_update**](AdvertiserLandingPagesApi.md#dfareporting_advertiser_landing_pages_update) | **PUT** /userprofiles/{profileId}/advertiserLandingPages | 


# **dfareporting_advertiser_landing_pages_get**
> LandingPage dfareporting_advertiser_landing_pages_get(profile_id, id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)



Gets one landing page by ID.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.landing_page import LandingPage
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dfareporting.googleapis.com/dfareporting/v3.4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dfareporting.googleapis.com/dfareporting/v3.4"
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
    api_instance = openapi_client.AdvertiserLandingPagesApi(api_client)
    profile_id = 'profile_id_example' # str | User profile ID associated with this request.
    id = 'id_example' # str | Landing page ID.
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

    try:
        api_response = api_instance.dfareporting_advertiser_landing_pages_get(profile_id, id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)
        print("The response of AdvertiserLandingPagesApi->dfareporting_advertiser_landing_pages_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertiserLandingPagesApi->dfareporting_advertiser_landing_pages_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profile_id** | **str**| User profile ID associated with this request. | 
 **id** | **str**| Landing page ID. | 
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

### Return type

[**LandingPage**](LandingPage.md)

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

# **dfareporting_advertiser_landing_pages_insert**
> LandingPage dfareporting_advertiser_landing_pages_insert(profile_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, landing_page=landing_page)



Inserts a new landing page.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.landing_page import LandingPage
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dfareporting.googleapis.com/dfareporting/v3.4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dfareporting.googleapis.com/dfareporting/v3.4"
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
    api_instance = openapi_client.AdvertiserLandingPagesApi(api_client)
    profile_id = 'profile_id_example' # str | User profile ID associated with this request.
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
    landing_page = openapi_client.LandingPage() # LandingPage |  (optional)

    try:
        api_response = api_instance.dfareporting_advertiser_landing_pages_insert(profile_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, landing_page=landing_page)
        print("The response of AdvertiserLandingPagesApi->dfareporting_advertiser_landing_pages_insert:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertiserLandingPagesApi->dfareporting_advertiser_landing_pages_insert: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profile_id** | **str**| User profile ID associated with this request. | 
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
 **landing_page** | [**LandingPage**](LandingPage.md)|  | [optional] 

### Return type

[**LandingPage**](LandingPage.md)

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

# **dfareporting_advertiser_landing_pages_list**
> AdvertiserLandingPagesListResponse dfareporting_advertiser_landing_pages_list(profile_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, advertiser_ids=advertiser_ids, archived=archived, campaign_ids=campaign_ids, ids=ids, max_results=max_results, page_token=page_token, search_string=search_string, sort_field=sort_field, sort_order=sort_order, subaccount_id=subaccount_id)



Retrieves a list of landing pages.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.advertiser_landing_pages_list_response import AdvertiserLandingPagesListResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dfareporting.googleapis.com/dfareporting/v3.4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dfareporting.googleapis.com/dfareporting/v3.4"
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
    api_instance = openapi_client.AdvertiserLandingPagesApi(api_client)
    profile_id = 'profile_id_example' # str | User profile ID associated with this request.
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
    advertiser_ids = ['advertiser_ids_example'] # List[str] | Select only landing pages that belong to these advertisers. (optional)
    archived = True # bool | Select only archived landing pages. Don't set this field to select both archived and non-archived landing pages. (optional)
    campaign_ids = ['campaign_ids_example'] # List[str] | Select only landing pages that are associated with these campaigns. (optional)
    ids = ['ids_example'] # List[str] | Select only landing pages with these IDs. (optional)
    max_results = 56 # int | Maximum number of results to return. (optional)
    page_token = 'page_token_example' # str | Value of the nextPageToken from the previous result page. (optional)
    search_string = 'search_string_example' # str | Allows searching for landing pages by name or ID. Wildcards (*) are allowed. For example, \"landingpage*2017\" will return landing pages with names like \"landingpage July 2017\", \"landingpage March 2017\", or simply \"landingpage 2017\". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of \"landingpage\" will match campaigns with name \"my landingpage\", \"landingpage 2015\", or simply \"landingpage\". (optional)
    sort_field = 'sort_field_example' # str | Field by which to sort the list. (optional)
    sort_order = 'sort_order_example' # str | Order of sorted results. (optional)
    subaccount_id = 'subaccount_id_example' # str | Select only landing pages that belong to this subaccount. (optional)

    try:
        api_response = api_instance.dfareporting_advertiser_landing_pages_list(profile_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, advertiser_ids=advertiser_ids, archived=archived, campaign_ids=campaign_ids, ids=ids, max_results=max_results, page_token=page_token, search_string=search_string, sort_field=sort_field, sort_order=sort_order, subaccount_id=subaccount_id)
        print("The response of AdvertiserLandingPagesApi->dfareporting_advertiser_landing_pages_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertiserLandingPagesApi->dfareporting_advertiser_landing_pages_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profile_id** | **str**| User profile ID associated with this request. | 
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
 **advertiser_ids** | [**List[str]**](str.md)| Select only landing pages that belong to these advertisers. | [optional] 
 **archived** | **bool**| Select only archived landing pages. Don&#39;t set this field to select both archived and non-archived landing pages. | [optional] 
 **campaign_ids** | [**List[str]**](str.md)| Select only landing pages that are associated with these campaigns. | [optional] 
 **ids** | [**List[str]**](str.md)| Select only landing pages with these IDs. | [optional] 
 **max_results** | **int**| Maximum number of results to return. | [optional] 
 **page_token** | **str**| Value of the nextPageToken from the previous result page. | [optional] 
 **search_string** | **str**| Allows searching for landing pages by name or ID. Wildcards (*) are allowed. For example, \&quot;landingpage*2017\&quot; will return landing pages with names like \&quot;landingpage July 2017\&quot;, \&quot;landingpage March 2017\&quot;, or simply \&quot;landingpage 2017\&quot;. Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of \&quot;landingpage\&quot; will match campaigns with name \&quot;my landingpage\&quot;, \&quot;landingpage 2015\&quot;, or simply \&quot;landingpage\&quot;. | [optional] 
 **sort_field** | **str**| Field by which to sort the list. | [optional] 
 **sort_order** | **str**| Order of sorted results. | [optional] 
 **subaccount_id** | **str**| Select only landing pages that belong to this subaccount. | [optional] 

### Return type

[**AdvertiserLandingPagesListResponse**](AdvertiserLandingPagesListResponse.md)

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

# **dfareporting_advertiser_landing_pages_patch**
> LandingPage dfareporting_advertiser_landing_pages_patch(profile_id, id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, landing_page=landing_page)



Updates an existing advertiser landing page. This method supports patch semantics.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.landing_page import LandingPage
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dfareporting.googleapis.com/dfareporting/v3.4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dfareporting.googleapis.com/dfareporting/v3.4"
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
    api_instance = openapi_client.AdvertiserLandingPagesApi(api_client)
    profile_id = 'profile_id_example' # str | User profile ID associated with this request.
    id = 'id_example' # str | LandingPage ID.
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
    landing_page = openapi_client.LandingPage() # LandingPage |  (optional)

    try:
        api_response = api_instance.dfareporting_advertiser_landing_pages_patch(profile_id, id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, landing_page=landing_page)
        print("The response of AdvertiserLandingPagesApi->dfareporting_advertiser_landing_pages_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertiserLandingPagesApi->dfareporting_advertiser_landing_pages_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profile_id** | **str**| User profile ID associated with this request. | 
 **id** | **str**| LandingPage ID. | 
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
 **landing_page** | [**LandingPage**](LandingPage.md)|  | [optional] 

### Return type

[**LandingPage**](LandingPage.md)

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

# **dfareporting_advertiser_landing_pages_update**
> LandingPage dfareporting_advertiser_landing_pages_update(profile_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, landing_page=landing_page)



Updates an existing landing page.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.landing_page import LandingPage
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dfareporting.googleapis.com/dfareporting/v3.4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dfareporting.googleapis.com/dfareporting/v3.4"
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
    api_instance = openapi_client.AdvertiserLandingPagesApi(api_client)
    profile_id = 'profile_id_example' # str | User profile ID associated with this request.
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
    landing_page = openapi_client.LandingPage() # LandingPage |  (optional)

    try:
        api_response = api_instance.dfareporting_advertiser_landing_pages_update(profile_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, landing_page=landing_page)
        print("The response of AdvertiserLandingPagesApi->dfareporting_advertiser_landing_pages_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdvertiserLandingPagesApi->dfareporting_advertiser_landing_pages_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profile_id** | **str**| User profile ID associated with this request. | 
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
 **landing_page** | [**LandingPage**](LandingPage.md)|  | [optional] 

### Return type

[**LandingPage**](LandingPage.md)

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

