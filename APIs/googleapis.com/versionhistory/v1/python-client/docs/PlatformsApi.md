# openapi_client.PlatformsApi

All URIs are relative to *https://versionhistory.googleapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**versionhistory_platforms_channels_list**](PlatformsApi.md#versionhistory_platforms_channels_list) | **GET** /v1/{parent}/channels | 
[**versionhistory_platforms_channels_versions_list**](PlatformsApi.md#versionhistory_platforms_channels_versions_list) | **GET** /v1/{parent}/versions | 
[**versionhistory_platforms_channels_versions_releases_list**](PlatformsApi.md#versionhistory_platforms_channels_versions_releases_list) | **GET** /v1/{parent}/releases | 
[**versionhistory_platforms_list**](PlatformsApi.md#versionhistory_platforms_list) | **GET** /v1/{parent}/platforms | 


# **versionhistory_platforms_channels_list**
> ListChannelsResponse versionhistory_platforms_channels_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, page_size=page_size, page_token=page_token)



Returns list of channels that are available for a given platform.

### Example


```python
import openapi_client
from openapi_client.models.list_channels_response import ListChannelsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://versionhistory.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://versionhistory.googleapis.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PlatformsApi(api_client)
    parent = 'parent_example' # str | Required. The platform, which owns this collection of channels. Format: {product}/platforms/{platform}
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
    page_size = 56 # int | Optional. Optional limit on the number of channels to include in the response. If unspecified, the server will pick an appropriate default. (optional)
    page_token = 'page_token_example' # str | Optional. A page token, received from a previous `ListChannels` call. Provide this to retrieve the subsequent page. (optional)

    try:
        api_response = api_instance.versionhistory_platforms_channels_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, page_size=page_size, page_token=page_token)
        print("The response of PlatformsApi->versionhistory_platforms_channels_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlatformsApi->versionhistory_platforms_channels_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The platform, which owns this collection of channels. Format: {product}/platforms/{platform} | 
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
 **page_size** | **int**| Optional. Optional limit on the number of channels to include in the response. If unspecified, the server will pick an appropriate default. | [optional] 
 **page_token** | **str**| Optional. A page token, received from a previous &#x60;ListChannels&#x60; call. Provide this to retrieve the subsequent page. | [optional] 

### Return type

[**ListChannelsResponse**](ListChannelsResponse.md)

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

# **versionhistory_platforms_channels_versions_list**
> ListVersionsResponse versionhistory_platforms_channels_versions_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)



Returns list of version for the given platform/channel.

### Example


```python
import openapi_client
from openapi_client.models.list_versions_response import ListVersionsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://versionhistory.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://versionhistory.googleapis.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PlatformsApi(api_client)
    parent = 'parent_example' # str | Required. The channel, which owns this collection of versions. Format: {product}/platforms/{platform}/channels/{channel}
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
    filter = 'filter_example' # str | Optional. Filter string. Format is a comma separated list of All comma separated filter clauses are conjoined with a logical \"and\". Valid field_names are \"version\", \"name\", \"platform\", and \"channel\". Valid operators are \"<\", \"<=\", \"=\", \">=\", and \">\". Channel comparison is done by distance from stable. Ex) stable < beta, beta < dev, canary < canary_asan. Version comparison is done numerically. If version is not entirely written, the version will be appended with 0 in missing fields. Ex) version > 80 becoms version > 80.0.0.0 Name and platform are filtered by string comparison. Ex) \"...?filter=channel<=beta, version >= 80 Ex) \"...?filter=version > 80, version < 81 (optional)
    order_by = 'order_by_example' # str | Optional. Ordering string. Valid order_by strings are \"version\", \"name\", \"platform\", and \"channel\". Optionally, you can append \" desc\" or \" asc\" to specify the sorting order. Multiple order_by strings can be used in a comma separated list. Ordering by channel will sort by distance from the stable channel (not alphabetically). A list of channels sorted in this order is: stable, beta, dev, canary, and canary_asan. Sorting by name may cause unexpected behaviour as it is a naive string sort. For example, 1.0.0.8 will be before 1.0.0.10 in descending order. If order_by is not specified the response will be sorted by version in descending order. Ex) \"...?order_by=version asc\" Ex) \"...?order_by=platform desc, channel, version\" (optional)
    page_size = 56 # int | Optional. Optional limit on the number of versions to include in the response. If unspecified, the server will pick an appropriate default. (optional)
    page_token = 'page_token_example' # str | Optional. A page token, received from a previous `ListVersions` call. Provide this to retrieve the subsequent page. (optional)

    try:
        api_response = api_instance.versionhistory_platforms_channels_versions_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of PlatformsApi->versionhistory_platforms_channels_versions_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlatformsApi->versionhistory_platforms_channels_versions_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The channel, which owns this collection of versions. Format: {product}/platforms/{platform}/channels/{channel} | 
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
 **filter** | **str**| Optional. Filter string. Format is a comma separated list of All comma separated filter clauses are conjoined with a logical \&quot;and\&quot;. Valid field_names are \&quot;version\&quot;, \&quot;name\&quot;, \&quot;platform\&quot;, and \&quot;channel\&quot;. Valid operators are \&quot;&lt;\&quot;, \&quot;&lt;&#x3D;\&quot;, \&quot;&#x3D;\&quot;, \&quot;&gt;&#x3D;\&quot;, and \&quot;&gt;\&quot;. Channel comparison is done by distance from stable. Ex) stable &lt; beta, beta &lt; dev, canary &lt; canary_asan. Version comparison is done numerically. If version is not entirely written, the version will be appended with 0 in missing fields. Ex) version &gt; 80 becoms version &gt; 80.0.0.0 Name and platform are filtered by string comparison. Ex) \&quot;...?filter&#x3D;channel&lt;&#x3D;beta, version &gt;&#x3D; 80 Ex) \&quot;...?filter&#x3D;version &gt; 80, version &lt; 81 | [optional] 
 **order_by** | **str**| Optional. Ordering string. Valid order_by strings are \&quot;version\&quot;, \&quot;name\&quot;, \&quot;platform\&quot;, and \&quot;channel\&quot;. Optionally, you can append \&quot; desc\&quot; or \&quot; asc\&quot; to specify the sorting order. Multiple order_by strings can be used in a comma separated list. Ordering by channel will sort by distance from the stable channel (not alphabetically). A list of channels sorted in this order is: stable, beta, dev, canary, and canary_asan. Sorting by name may cause unexpected behaviour as it is a naive string sort. For example, 1.0.0.8 will be before 1.0.0.10 in descending order. If order_by is not specified the response will be sorted by version in descending order. Ex) \&quot;...?order_by&#x3D;version asc\&quot; Ex) \&quot;...?order_by&#x3D;platform desc, channel, version\&quot; | [optional] 
 **page_size** | **int**| Optional. Optional limit on the number of versions to include in the response. If unspecified, the server will pick an appropriate default. | [optional] 
 **page_token** | **str**| Optional. A page token, received from a previous &#x60;ListVersions&#x60; call. Provide this to retrieve the subsequent page. | [optional] 

### Return type

[**ListVersionsResponse**](ListVersionsResponse.md)

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

# **versionhistory_platforms_channels_versions_releases_list**
> ListReleasesResponse versionhistory_platforms_channels_versions_releases_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)



Returns list of releases of the given version.

### Example


```python
import openapi_client
from openapi_client.models.list_releases_response import ListReleasesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://versionhistory.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://versionhistory.googleapis.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PlatformsApi(api_client)
    parent = 'parent_example' # str | Required. The version, which owns this collection of releases. Format: {product}/platforms/{platform}/channels/{channel}/versions/{version}
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
    filter = 'filter_example' # str | Optional. Filter string. Format is a comma separated list of All comma separated filter clauses are conjoined with a logical \"and\". Valid field_names are \"version\", \"name\", \"platform\", \"channel\", \"fraction\" \"starttime\", and \"endtime\". Valid operators are \"<\", \"<=\", \"=\", \">=\", and \">\". Channel comparison is done by distance from stable. must be a valid channel when filtering by channel. Ex) stable < beta, beta < dev, canary < canary_asan. Version comparison is done numerically. Ex) 1.0.0.8 < 1.0.0.10. If version is not entirely written, the version will be appended with 0 for the missing fields. Ex) version > 80 becoms version > 80.0.0.0 When filtering by starttime or endtime, string must be in RFC 3339 date string format. Name and platform are filtered by string comparison. Ex) \"...?filter=channel<=beta, version >= 80 Ex) \"...?filter=version > 80, version < 81 Ex) \"...?filter=starttime>2020-01-01T00:00:00Z (optional)
    order_by = 'order_by_example' # str | Optional. Ordering string. Valid order_by strings are \"version\", \"name\", \"starttime\", \"endtime\", \"platform\", \"channel\", and \"fraction\". Optionally, you can append \"desc\" or \"asc\" to specify the sorting order. Multiple order_by strings can be used in a comma separated list. Ordering by channel will sort by distance from the stable channel (not alphabetically). A list of channels sorted in this order is: stable, beta, dev, canary, and canary_asan. Sorting by name may cause unexpected behaviour as it is a naive string sort. For example, 1.0.0.8 will be before 1.0.0.10 in descending order. If order_by is not specified the response will be sorted by starttime in descending order. Ex) \"...?order_by=starttime asc\" Ex) \"...?order_by=platform desc, channel, startime desc\" (optional)
    page_size = 56 # int | Optional. Optional limit on the number of releases to include in the response. If unspecified, the server will pick an appropriate default. (optional)
    page_token = 'page_token_example' # str | Optional. A page token, received from a previous `ListReleases` call. Provide this to retrieve the subsequent page. (optional)

    try:
        api_response = api_instance.versionhistory_platforms_channels_versions_releases_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of PlatformsApi->versionhistory_platforms_channels_versions_releases_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlatformsApi->versionhistory_platforms_channels_versions_releases_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The version, which owns this collection of releases. Format: {product}/platforms/{platform}/channels/{channel}/versions/{version} | 
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
 **filter** | **str**| Optional. Filter string. Format is a comma separated list of All comma separated filter clauses are conjoined with a logical \&quot;and\&quot;. Valid field_names are \&quot;version\&quot;, \&quot;name\&quot;, \&quot;platform\&quot;, \&quot;channel\&quot;, \&quot;fraction\&quot; \&quot;starttime\&quot;, and \&quot;endtime\&quot;. Valid operators are \&quot;&lt;\&quot;, \&quot;&lt;&#x3D;\&quot;, \&quot;&#x3D;\&quot;, \&quot;&gt;&#x3D;\&quot;, and \&quot;&gt;\&quot;. Channel comparison is done by distance from stable. must be a valid channel when filtering by channel. Ex) stable &lt; beta, beta &lt; dev, canary &lt; canary_asan. Version comparison is done numerically. Ex) 1.0.0.8 &lt; 1.0.0.10. If version is not entirely written, the version will be appended with 0 for the missing fields. Ex) version &gt; 80 becoms version &gt; 80.0.0.0 When filtering by starttime or endtime, string must be in RFC 3339 date string format. Name and platform are filtered by string comparison. Ex) \&quot;...?filter&#x3D;channel&lt;&#x3D;beta, version &gt;&#x3D; 80 Ex) \&quot;...?filter&#x3D;version &gt; 80, version &lt; 81 Ex) \&quot;...?filter&#x3D;starttime&gt;2020-01-01T00:00:00Z | [optional] 
 **order_by** | **str**| Optional. Ordering string. Valid order_by strings are \&quot;version\&quot;, \&quot;name\&quot;, \&quot;starttime\&quot;, \&quot;endtime\&quot;, \&quot;platform\&quot;, \&quot;channel\&quot;, and \&quot;fraction\&quot;. Optionally, you can append \&quot;desc\&quot; or \&quot;asc\&quot; to specify the sorting order. Multiple order_by strings can be used in a comma separated list. Ordering by channel will sort by distance from the stable channel (not alphabetically). A list of channels sorted in this order is: stable, beta, dev, canary, and canary_asan. Sorting by name may cause unexpected behaviour as it is a naive string sort. For example, 1.0.0.8 will be before 1.0.0.10 in descending order. If order_by is not specified the response will be sorted by starttime in descending order. Ex) \&quot;...?order_by&#x3D;starttime asc\&quot; Ex) \&quot;...?order_by&#x3D;platform desc, channel, startime desc\&quot; | [optional] 
 **page_size** | **int**| Optional. Optional limit on the number of releases to include in the response. If unspecified, the server will pick an appropriate default. | [optional] 
 **page_token** | **str**| Optional. A page token, received from a previous &#x60;ListReleases&#x60; call. Provide this to retrieve the subsequent page. | [optional] 

### Return type

[**ListReleasesResponse**](ListReleasesResponse.md)

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

# **versionhistory_platforms_list**
> ListPlatformsResponse versionhistory_platforms_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, page_size=page_size, page_token=page_token)



Returns list of platforms that are available for a given product. The resource \"product\" has no resource name in its name.

### Example


```python
import openapi_client
from openapi_client.models.list_platforms_response import ListPlatformsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://versionhistory.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://versionhistory.googleapis.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PlatformsApi(api_client)
    parent = 'parent_example' # str | Required. The product, which owns this collection of platforms. Format: {product}
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
    page_size = 56 # int | Optional. Optional limit on the number of channels to include in the response. If unspecified, the server will pick an appropriate default. (optional)
    page_token = 'page_token_example' # str | Optional. A page token, received from a previous `ListChannels` call. Provide this to retrieve the subsequent page. (optional)

    try:
        api_response = api_instance.versionhistory_platforms_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, page_size=page_size, page_token=page_token)
        print("The response of PlatformsApi->versionhistory_platforms_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlatformsApi->versionhistory_platforms_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The product, which owns this collection of platforms. Format: {product} | 
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
 **page_size** | **int**| Optional. Optional limit on the number of channels to include in the response. If unspecified, the server will pick an appropriate default. | [optional] 
 **page_token** | **str**| Optional. A page token, received from a previous &#x60;ListChannels&#x60; call. Provide this to retrieve the subsequent page. | [optional] 

### Return type

[**ListPlatformsResponse**](ListPlatformsResponse.md)

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

