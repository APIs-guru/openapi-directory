# openapi_client.PlaceActionTypeMetadataApi

All URIs are relative to *https://mybusinessplaceactions.googleapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**mybusinessplaceactions_place_action_type_metadata_list**](PlaceActionTypeMetadataApi.md#mybusinessplaceactions_place_action_type_metadata_list) | **GET** /v1/placeActionTypeMetadata | 


# **mybusinessplaceactions_place_action_type_metadata_list**
> ListPlaceActionTypeMetadataResponse mybusinessplaceactions_place_action_type_metadata_list(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, language_code=language_code, page_size=page_size, page_token=page_token)



Returns the list of available place action types for a location or country.

### Example


```python
import openapi_client
from openapi_client.models.list_place_action_type_metadata_response import ListPlaceActionTypeMetadataResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://mybusinessplaceactions.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://mybusinessplaceactions.googleapis.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PlaceActionTypeMetadataApi(api_client)
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
    filter = 'filter_example' # str | Optional. A filter constraining the place action types to return metadata for. The response includes entries that match the filter. We support only the following filters: 1. location=XYZ where XYZ is a string indicating the resource name of a location, in the format `locations/{location_id}`. 2. region_code=XYZ where XYZ is a Unicode CLDR region code to find available action types. If no filter is provided, all place action types are returned. (optional)
    language_code = 'language_code_example' # str | Optional. The IETF BCP-47 code of language to get display names in. If this language is not available, they will be provided in English. (optional)
    page_size = 56 # int | Optional. How many action types to include per page. Default is 10, minimum is 1. (optional)
    page_token = 'page_token_example' # str | Optional. If specified, the next page of place action type metadata is retrieved. The `pageToken` is returned when a call to `placeActionTypeMetadata.list` returns more results than can fit into the requested page size. (optional)

    try:
        api_response = api_instance.mybusinessplaceactions_place_action_type_metadata_list(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, language_code=language_code, page_size=page_size, page_token=page_token)
        print("The response of PlaceActionTypeMetadataApi->mybusinessplaceactions_place_action_type_metadata_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlaceActionTypeMetadataApi->mybusinessplaceactions_place_action_type_metadata_list: %s\n" % e)
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
 **filter** | **str**| Optional. A filter constraining the place action types to return metadata for. The response includes entries that match the filter. We support only the following filters: 1. location&#x3D;XYZ where XYZ is a string indicating the resource name of a location, in the format &#x60;locations/{location_id}&#x60;. 2. region_code&#x3D;XYZ where XYZ is a Unicode CLDR region code to find available action types. If no filter is provided, all place action types are returned. | [optional] 
 **language_code** | **str**| Optional. The IETF BCP-47 code of language to get display names in. If this language is not available, they will be provided in English. | [optional] 
 **page_size** | **int**| Optional. How many action types to include per page. Default is 10, minimum is 1. | [optional] 
 **page_token** | **str**| Optional. If specified, the next page of place action type metadata is retrieved. The &#x60;pageToken&#x60; is returned when a call to &#x60;placeActionTypeMetadata.list&#x60; returns more results than can fit into the requested page size. | [optional] 

### Return type

[**ListPlaceActionTypeMetadataResponse**](ListPlaceActionTypeMetadataResponse.md)

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

