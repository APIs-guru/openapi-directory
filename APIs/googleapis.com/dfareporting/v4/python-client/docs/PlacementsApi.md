# openapi_client.PlacementsApi

All URIs are relative to *https://dfareporting.googleapis.com/dfareporting/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dfareporting_placements_generatetags**](PlacementsApi.md#dfareporting_placements_generatetags) | **POST** /userprofiles/{profileId}/placements/generatetags | 
[**dfareporting_placements_get**](PlacementsApi.md#dfareporting_placements_get) | **GET** /userprofiles/{profileId}/placements/{id} | 
[**dfareporting_placements_insert**](PlacementsApi.md#dfareporting_placements_insert) | **POST** /userprofiles/{profileId}/placements | 
[**dfareporting_placements_list**](PlacementsApi.md#dfareporting_placements_list) | **GET** /userprofiles/{profileId}/placements | 
[**dfareporting_placements_patch**](PlacementsApi.md#dfareporting_placements_patch) | **PATCH** /userprofiles/{profileId}/placements | 
[**dfareporting_placements_update**](PlacementsApi.md#dfareporting_placements_update) | **PUT** /userprofiles/{profileId}/placements | 


# **dfareporting_placements_generatetags**
> PlacementsGenerateTagsResponse dfareporting_placements_generatetags(profile_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, campaign_id=campaign_id, placement_ids=placement_ids, tag_formats=tag_formats)



Generates tags for a placement.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.placements_generate_tags_response import PlacementsGenerateTagsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dfareporting.googleapis.com/dfareporting/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dfareporting.googleapis.com/dfareporting/v4"
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
    api_instance = openapi_client.PlacementsApi(api_client)
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
    campaign_id = 'campaign_id_example' # str | Generate placements belonging to this campaign. This is a required field. (optional)
    placement_ids = ['placement_ids_example'] # List[str] | Generate tags for these placements. (optional)
    tag_formats = ['tag_formats_example'] # List[str] | Tag formats to generate for these placements. *Note:* PLACEMENT_TAG_STANDARD can only be generated for 1x1 placements. (optional)

    try:
        api_response = api_instance.dfareporting_placements_generatetags(profile_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, campaign_id=campaign_id, placement_ids=placement_ids, tag_formats=tag_formats)
        print("The response of PlacementsApi->dfareporting_placements_generatetags:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlacementsApi->dfareporting_placements_generatetags: %s\n" % e)
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
 **campaign_id** | **str**| Generate placements belonging to this campaign. This is a required field. | [optional] 
 **placement_ids** | [**List[str]**](str.md)| Generate tags for these placements. | [optional] 
 **tag_formats** | [**List[str]**](str.md)| Tag formats to generate for these placements. *Note:* PLACEMENT_TAG_STANDARD can only be generated for 1x1 placements. | [optional] 

### Return type

[**PlacementsGenerateTagsResponse**](PlacementsGenerateTagsResponse.md)

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

# **dfareporting_placements_get**
> Placement dfareporting_placements_get(profile_id, id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)



Gets one placement by ID.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.placement import Placement
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dfareporting.googleapis.com/dfareporting/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dfareporting.googleapis.com/dfareporting/v4"
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
    api_instance = openapi_client.PlacementsApi(api_client)
    profile_id = 'profile_id_example' # str | User profile ID associated with this request.
    id = 'id_example' # str | Placement ID.
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
        api_response = api_instance.dfareporting_placements_get(profile_id, id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)
        print("The response of PlacementsApi->dfareporting_placements_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlacementsApi->dfareporting_placements_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profile_id** | **str**| User profile ID associated with this request. | 
 **id** | **str**| Placement ID. | 
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

[**Placement**](Placement.md)

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

# **dfareporting_placements_insert**
> Placement dfareporting_placements_insert(profile_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, placement=placement)



Inserts a new placement.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.placement import Placement
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dfareporting.googleapis.com/dfareporting/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dfareporting.googleapis.com/dfareporting/v4"
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
    api_instance = openapi_client.PlacementsApi(api_client)
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
    placement = openapi_client.Placement() # Placement |  (optional)

    try:
        api_response = api_instance.dfareporting_placements_insert(profile_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, placement=placement)
        print("The response of PlacementsApi->dfareporting_placements_insert:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlacementsApi->dfareporting_placements_insert: %s\n" % e)
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
 **placement** | [**Placement**](Placement.md)|  | [optional] 

### Return type

[**Placement**](Placement.md)

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

# **dfareporting_placements_list**
> PlacementsListResponse dfareporting_placements_list(profile_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, active_status=active_status, advertiser_ids=advertiser_ids, campaign_ids=campaign_ids, compatibilities=compatibilities, content_category_ids=content_category_ids, directory_site_ids=directory_site_ids, group_ids=group_ids, ids=ids, max_end_date=max_end_date, max_results=max_results, max_start_date=max_start_date, min_end_date=min_end_date, min_start_date=min_start_date, page_token=page_token, payment_source=payment_source, placement_strategy_ids=placement_strategy_ids, pricing_types=pricing_types, search_string=search_string, site_ids=site_ids, size_ids=size_ids, sort_field=sort_field, sort_order=sort_order)



Retrieves a list of placements, possibly filtered. This method supports paging.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.placements_list_response import PlacementsListResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dfareporting.googleapis.com/dfareporting/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dfareporting.googleapis.com/dfareporting/v4"
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
    api_instance = openapi_client.PlacementsApi(api_client)
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
    active_status = ['active_status_example'] # List[str] | Select only placements with these active statuses. (optional)
    advertiser_ids = ['advertiser_ids_example'] # List[str] | Select only placements that belong to these advertisers. (optional)
    campaign_ids = ['campaign_ids_example'] # List[str] | Select only placements that belong to these campaigns. (optional)
    compatibilities = ['compatibilities_example'] # List[str] | Select only placements that are associated with these compatibilities. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering either on desktop or on mobile devices for regular or interstitial ads respectively. APP and APP_INTERSTITIAL are for rendering in mobile apps. IN_STREAM_VIDEO refers to rendering in in-stream video ads developed with the VAST standard. (optional)
    content_category_ids = ['content_category_ids_example'] # List[str] | Select only placements that are associated with these content categories. (optional)
    directory_site_ids = ['directory_site_ids_example'] # List[str] | Select only placements that are associated with these directory sites. (optional)
    group_ids = ['group_ids_example'] # List[str] | Select only placements that belong to these placement groups. (optional)
    ids = ['ids_example'] # List[str] | Select only placements with these IDs. (optional)
    max_end_date = 'max_end_date_example' # str | Select only placements or placement groups whose end date is on or before the specified maxEndDate. The date should be formatted as \"yyyy-MM-dd\". (optional)
    max_results = 56 # int | Maximum number of results to return. (optional)
    max_start_date = 'max_start_date_example' # str | Select only placements or placement groups whose start date is on or before the specified maxStartDate. The date should be formatted as \"yyyy-MM-dd\". (optional)
    min_end_date = 'min_end_date_example' # str | Select only placements or placement groups whose end date is on or after the specified minEndDate. The date should be formatted as \"yyyy-MM-dd\". (optional)
    min_start_date = 'min_start_date_example' # str | Select only placements or placement groups whose start date is on or after the specified minStartDate. The date should be formatted as \"yyyy-MM-dd\". (optional)
    page_token = 'page_token_example' # str | Value of the nextPageToken from the previous result page. (optional)
    payment_source = 'payment_source_example' # str | Select only placements with this payment source. (optional)
    placement_strategy_ids = ['placement_strategy_ids_example'] # List[str] | Select only placements that are associated with these placement strategies. (optional)
    pricing_types = ['pricing_types_example'] # List[str] | Select only placements with these pricing types. (optional)
    search_string = 'search_string_example' # str | Allows searching for placements by name or ID. Wildcards (*) are allowed. For example, \"placement*2015\" will return placements with names like \"placement June 2015\", \"placement May 2015\", or simply \"placements 2015\". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of \"placement\" will match placements with name \"my placement\", \"placement 2015\", or simply \"placement\" . (optional)
    site_ids = ['site_ids_example'] # List[str] | Select only placements that are associated with these sites. (optional)
    size_ids = ['size_ids_example'] # List[str] | Select only placements that are associated with these sizes. (optional)
    sort_field = 'sort_field_example' # str | Field by which to sort the list. (optional)
    sort_order = 'sort_order_example' # str | Order of sorted results. (optional)

    try:
        api_response = api_instance.dfareporting_placements_list(profile_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, active_status=active_status, advertiser_ids=advertiser_ids, campaign_ids=campaign_ids, compatibilities=compatibilities, content_category_ids=content_category_ids, directory_site_ids=directory_site_ids, group_ids=group_ids, ids=ids, max_end_date=max_end_date, max_results=max_results, max_start_date=max_start_date, min_end_date=min_end_date, min_start_date=min_start_date, page_token=page_token, payment_source=payment_source, placement_strategy_ids=placement_strategy_ids, pricing_types=pricing_types, search_string=search_string, site_ids=site_ids, size_ids=size_ids, sort_field=sort_field, sort_order=sort_order)
        print("The response of PlacementsApi->dfareporting_placements_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlacementsApi->dfareporting_placements_list: %s\n" % e)
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
 **active_status** | [**List[str]**](str.md)| Select only placements with these active statuses. | [optional] 
 **advertiser_ids** | [**List[str]**](str.md)| Select only placements that belong to these advertisers. | [optional] 
 **campaign_ids** | [**List[str]**](str.md)| Select only placements that belong to these campaigns. | [optional] 
 **compatibilities** | [**List[str]**](str.md)| Select only placements that are associated with these compatibilities. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering either on desktop or on mobile devices for regular or interstitial ads respectively. APP and APP_INTERSTITIAL are for rendering in mobile apps. IN_STREAM_VIDEO refers to rendering in in-stream video ads developed with the VAST standard. | [optional] 
 **content_category_ids** | [**List[str]**](str.md)| Select only placements that are associated with these content categories. | [optional] 
 **directory_site_ids** | [**List[str]**](str.md)| Select only placements that are associated with these directory sites. | [optional] 
 **group_ids** | [**List[str]**](str.md)| Select only placements that belong to these placement groups. | [optional] 
 **ids** | [**List[str]**](str.md)| Select only placements with these IDs. | [optional] 
 **max_end_date** | **str**| Select only placements or placement groups whose end date is on or before the specified maxEndDate. The date should be formatted as \&quot;yyyy-MM-dd\&quot;. | [optional] 
 **max_results** | **int**| Maximum number of results to return. | [optional] 
 **max_start_date** | **str**| Select only placements or placement groups whose start date is on or before the specified maxStartDate. The date should be formatted as \&quot;yyyy-MM-dd\&quot;. | [optional] 
 **min_end_date** | **str**| Select only placements or placement groups whose end date is on or after the specified minEndDate. The date should be formatted as \&quot;yyyy-MM-dd\&quot;. | [optional] 
 **min_start_date** | **str**| Select only placements or placement groups whose start date is on or after the specified minStartDate. The date should be formatted as \&quot;yyyy-MM-dd\&quot;. | [optional] 
 **page_token** | **str**| Value of the nextPageToken from the previous result page. | [optional] 
 **payment_source** | **str**| Select only placements with this payment source. | [optional] 
 **placement_strategy_ids** | [**List[str]**](str.md)| Select only placements that are associated with these placement strategies. | [optional] 
 **pricing_types** | [**List[str]**](str.md)| Select only placements with these pricing types. | [optional] 
 **search_string** | **str**| Allows searching for placements by name or ID. Wildcards (*) are allowed. For example, \&quot;placement*2015\&quot; will return placements with names like \&quot;placement June 2015\&quot;, \&quot;placement May 2015\&quot;, or simply \&quot;placements 2015\&quot;. Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of \&quot;placement\&quot; will match placements with name \&quot;my placement\&quot;, \&quot;placement 2015\&quot;, or simply \&quot;placement\&quot; . | [optional] 
 **site_ids** | [**List[str]**](str.md)| Select only placements that are associated with these sites. | [optional] 
 **size_ids** | [**List[str]**](str.md)| Select only placements that are associated with these sizes. | [optional] 
 **sort_field** | **str**| Field by which to sort the list. | [optional] 
 **sort_order** | **str**| Order of sorted results. | [optional] 

### Return type

[**PlacementsListResponse**](PlacementsListResponse.md)

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

# **dfareporting_placements_patch**
> Placement dfareporting_placements_patch(profile_id, id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, placement=placement)



Updates an existing placement. This method supports patch semantics.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.placement import Placement
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dfareporting.googleapis.com/dfareporting/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dfareporting.googleapis.com/dfareporting/v4"
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
    api_instance = openapi_client.PlacementsApi(api_client)
    profile_id = 'profile_id_example' # str | User profile ID associated with this request.
    id = 'id_example' # str | Required. Placement ID.
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
    placement = openapi_client.Placement() # Placement |  (optional)

    try:
        api_response = api_instance.dfareporting_placements_patch(profile_id, id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, placement=placement)
        print("The response of PlacementsApi->dfareporting_placements_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlacementsApi->dfareporting_placements_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profile_id** | **str**| User profile ID associated with this request. | 
 **id** | **str**| Required. Placement ID. | 
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
 **placement** | [**Placement**](Placement.md)|  | [optional] 

### Return type

[**Placement**](Placement.md)

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

# **dfareporting_placements_update**
> Placement dfareporting_placements_update(profile_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, placement=placement)



Updates an existing placement.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.placement import Placement
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dfareporting.googleapis.com/dfareporting/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dfareporting.googleapis.com/dfareporting/v4"
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
    api_instance = openapi_client.PlacementsApi(api_client)
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
    placement = openapi_client.Placement() # Placement |  (optional)

    try:
        api_response = api_instance.dfareporting_placements_update(profile_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, placement=placement)
        print("The response of PlacementsApi->dfareporting_placements_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlacementsApi->dfareporting_placements_update: %s\n" % e)
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
 **placement** | [**Placement**](Placement.md)|  | [optional] 

### Return type

[**Placement**](Placement.md)

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

