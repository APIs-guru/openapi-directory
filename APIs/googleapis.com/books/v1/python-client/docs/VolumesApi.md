# openapi_client.VolumesApi

All URIs are relative to *https://books.googleapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**books_volumes_associated_list**](VolumesApi.md#books_volumes_associated_list) | **GET** /books/v1/volumes/{volumeId}/associated | 
[**books_volumes_get**](VolumesApi.md#books_volumes_get) | **GET** /books/v1/volumes/{volumeId} | 
[**books_volumes_list**](VolumesApi.md#books_volumes_list) | **GET** /books/v1/volumes | 
[**books_volumes_mybooks_list**](VolumesApi.md#books_volumes_mybooks_list) | **GET** /books/v1/volumes/mybooks | 
[**books_volumes_recommended_list**](VolumesApi.md#books_volumes_recommended_list) | **GET** /books/v1/volumes/recommended | 
[**books_volumes_recommended_rate**](VolumesApi.md#books_volumes_recommended_rate) | **POST** /books/v1/volumes/recommended/rate | 
[**books_volumes_useruploaded_list**](VolumesApi.md#books_volumes_useruploaded_list) | **GET** /books/v1/volumes/useruploaded | 


# **books_volumes_associated_list**
> Volumes books_volumes_associated_list(volume_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, association=association, locale=locale, max_allowed_maturity_rating=max_allowed_maturity_rating, source=source)



Return a list of associated books.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.volumes import Volumes
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://books.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://books.googleapis.com"
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
    api_instance = openapi_client.VolumesApi(api_client)
    volume_id = 'volume_id_example' # str | ID of the source volume.
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
    association = 'association_example' # str | Association type. (optional)
    locale = 'locale_example' # str | ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations. (optional)
    max_allowed_maturity_rating = 'max_allowed_maturity_rating_example' # str | The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out. (optional)
    source = 'source_example' # str | String to identify the originator of this request. (optional)

    try:
        api_response = api_instance.books_volumes_associated_list(volume_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, association=association, locale=locale, max_allowed_maturity_rating=max_allowed_maturity_rating, source=source)
        print("The response of VolumesApi->books_volumes_associated_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VolumesApi->books_volumes_associated_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **volume_id** | **str**| ID of the source volume. | 
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
 **association** | **str**| Association type. | [optional] 
 **locale** | **str**| ISO-639-1 language and ISO-3166-1 country code. Ex: &#39;en_US&#39;. Used for generating recommendations. | [optional] 
 **max_allowed_maturity_rating** | **str**| The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out. | [optional] 
 **source** | **str**| String to identify the originator of this request. | [optional] 

### Return type

[**Volumes**](Volumes.md)

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

# **books_volumes_get**
> Volume books_volumes_get(volume_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, country=country, include_non_comics_series=include_non_comics_series, partner=partner, projection=projection, source=source, user_library_consistent_read=user_library_consistent_read)



Gets volume information for a single volume.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.volume import Volume
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://books.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://books.googleapis.com"
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
    api_instance = openapi_client.VolumesApi(api_client)
    volume_id = 'volume_id_example' # str | ID of volume to retrieve.
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
    country = 'country_example' # str | ISO-3166-1 code to override the IP-based location. (optional)
    include_non_comics_series = True # bool | Set to true to include non-comics series. Defaults to false. (optional)
    partner = 'partner_example' # str | Brand results for partner ID. (optional)
    projection = 'projection_example' # str | Restrict information returned to a set of selected fields. (optional)
    source = 'source_example' # str | string to identify the originator of this request. (optional)
    user_library_consistent_read = True # bool |  (optional)

    try:
        api_response = api_instance.books_volumes_get(volume_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, country=country, include_non_comics_series=include_non_comics_series, partner=partner, projection=projection, source=source, user_library_consistent_read=user_library_consistent_read)
        print("The response of VolumesApi->books_volumes_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VolumesApi->books_volumes_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **volume_id** | **str**| ID of volume to retrieve. | 
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
 **country** | **str**| ISO-3166-1 code to override the IP-based location. | [optional] 
 **include_non_comics_series** | **bool**| Set to true to include non-comics series. Defaults to false. | [optional] 
 **partner** | **str**| Brand results for partner ID. | [optional] 
 **projection** | **str**| Restrict information returned to a set of selected fields. | [optional] 
 **source** | **str**| string to identify the originator of this request. | [optional] 
 **user_library_consistent_read** | **bool**|  | [optional] 

### Return type

[**Volume**](Volume.md)

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

# **books_volumes_list**
> Volumes books_volumes_list(q, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, download=download, filter=filter, lang_restrict=lang_restrict, library_restrict=library_restrict, max_allowed_maturity_rating=max_allowed_maturity_rating, max_results=max_results, order_by=order_by, partner=partner, print_type=print_type, projection=projection, show_preorders=show_preorders, source=source, start_index=start_index)



Performs a book search.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.volumes import Volumes
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://books.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://books.googleapis.com"
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
    api_instance = openapi_client.VolumesApi(api_client)
    q = 'q_example' # str | Full-text search query string.
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
    download = 'download_example' # str | Restrict to volumes by download availability. (optional)
    filter = 'filter_example' # str | Filter search results. (optional)
    lang_restrict = 'lang_restrict_example' # str | Restrict results to books with this language code. (optional)
    library_restrict = 'library_restrict_example' # str | Restrict search to this user's library. (optional)
    max_allowed_maturity_rating = 'max_allowed_maturity_rating_example' # str | The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out. (optional)
    max_results = 56 # int | Maximum number of results to return. (optional)
    order_by = 'order_by_example' # str | Sort search results. (optional)
    partner = 'partner_example' # str | Restrict and brand results for partner ID. (optional)
    print_type = 'print_type_example' # str | Restrict to books or magazines. (optional)
    projection = 'projection_example' # str | Restrict information returned to a set of selected fields. (optional)
    show_preorders = True # bool | Set to true to show books available for preorder. Defaults to false. (optional)
    source = 'source_example' # str | String to identify the originator of this request. (optional)
    start_index = 56 # int | Index of the first result to return (starts at 0) (optional)

    try:
        api_response = api_instance.books_volumes_list(q, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, download=download, filter=filter, lang_restrict=lang_restrict, library_restrict=library_restrict, max_allowed_maturity_rating=max_allowed_maturity_rating, max_results=max_results, order_by=order_by, partner=partner, print_type=print_type, projection=projection, show_preorders=show_preorders, source=source, start_index=start_index)
        print("The response of VolumesApi->books_volumes_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VolumesApi->books_volumes_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **str**| Full-text search query string. | 
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
 **download** | **str**| Restrict to volumes by download availability. | [optional] 
 **filter** | **str**| Filter search results. | [optional] 
 **lang_restrict** | **str**| Restrict results to books with this language code. | [optional] 
 **library_restrict** | **str**| Restrict search to this user&#39;s library. | [optional] 
 **max_allowed_maturity_rating** | **str**| The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out. | [optional] 
 **max_results** | **int**| Maximum number of results to return. | [optional] 
 **order_by** | **str**| Sort search results. | [optional] 
 **partner** | **str**| Restrict and brand results for partner ID. | [optional] 
 **print_type** | **str**| Restrict to books or magazines. | [optional] 
 **projection** | **str**| Restrict information returned to a set of selected fields. | [optional] 
 **show_preorders** | **bool**| Set to true to show books available for preorder. Defaults to false. | [optional] 
 **source** | **str**| String to identify the originator of this request. | [optional] 
 **start_index** | **int**| Index of the first result to return (starts at 0) | [optional] 

### Return type

[**Volumes**](Volumes.md)

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

# **books_volumes_mybooks_list**
> Volumes books_volumes_mybooks_list(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, acquire_method=acquire_method, country=country, locale=locale, max_results=max_results, processing_state=processing_state, source=source, start_index=start_index)



Return a list of books in My Library.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.volumes import Volumes
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://books.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://books.googleapis.com"
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
    api_instance = openapi_client.VolumesApi(api_client)
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
    acquire_method = ['acquire_method_example'] # List[str] | How the book was acquired (optional)
    country = 'country_example' # str | ISO-3166-1 code to override the IP-based location. (optional)
    locale = 'locale_example' # str | ISO-639-1 language and ISO-3166-1 country code. Ex:'en_US'. Used for generating recommendations. (optional)
    max_results = 56 # int | Maximum number of results to return. (optional)
    processing_state = ['processing_state_example'] # List[str] | The processing state of the user uploaded volumes to be returned. Applicable only if the UPLOADED is specified in the acquireMethod. (optional)
    source = 'source_example' # str | String to identify the originator of this request. (optional)
    start_index = 56 # int | Index of the first result to return (starts at 0) (optional)

    try:
        api_response = api_instance.books_volumes_mybooks_list(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, acquire_method=acquire_method, country=country, locale=locale, max_results=max_results, processing_state=processing_state, source=source, start_index=start_index)
        print("The response of VolumesApi->books_volumes_mybooks_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VolumesApi->books_volumes_mybooks_list: %s\n" % e)
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
 **acquire_method** | [**List[str]**](str.md)| How the book was acquired | [optional] 
 **country** | **str**| ISO-3166-1 code to override the IP-based location. | [optional] 
 **locale** | **str**| ISO-639-1 language and ISO-3166-1 country code. Ex:&#39;en_US&#39;. Used for generating recommendations. | [optional] 
 **max_results** | **int**| Maximum number of results to return. | [optional] 
 **processing_state** | [**List[str]**](str.md)| The processing state of the user uploaded volumes to be returned. Applicable only if the UPLOADED is specified in the acquireMethod. | [optional] 
 **source** | **str**| String to identify the originator of this request. | [optional] 
 **start_index** | **int**| Index of the first result to return (starts at 0) | [optional] 

### Return type

[**Volumes**](Volumes.md)

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

# **books_volumes_recommended_list**
> Volumes books_volumes_recommended_list(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, locale=locale, max_allowed_maturity_rating=max_allowed_maturity_rating, source=source)



Return a list of recommended books for the current user.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.volumes import Volumes
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://books.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://books.googleapis.com"
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
    api_instance = openapi_client.VolumesApi(api_client)
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
    locale = 'locale_example' # str | ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations. (optional)
    max_allowed_maturity_rating = 'max_allowed_maturity_rating_example' # str | The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out. (optional)
    source = 'source_example' # str | String to identify the originator of this request. (optional)

    try:
        api_response = api_instance.books_volumes_recommended_list(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, locale=locale, max_allowed_maturity_rating=max_allowed_maturity_rating, source=source)
        print("The response of VolumesApi->books_volumes_recommended_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VolumesApi->books_volumes_recommended_list: %s\n" % e)
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
 **locale** | **str**| ISO-639-1 language and ISO-3166-1 country code. Ex: &#39;en_US&#39;. Used for generating recommendations. | [optional] 
 **max_allowed_maturity_rating** | **str**| The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out. | [optional] 
 **source** | **str**| String to identify the originator of this request. | [optional] 

### Return type

[**Volumes**](Volumes.md)

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

# **books_volumes_recommended_rate**
> BooksVolumesRecommendedRateResponse books_volumes_recommended_rate(rating, volume_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, locale=locale, source=source)



Rate a recommended book for the current user.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.books_volumes_recommended_rate_response import BooksVolumesRecommendedRateResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://books.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://books.googleapis.com"
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
    api_instance = openapi_client.VolumesApi(api_client)
    rating = 'rating_example' # str | Rating to be given to the volume.
    volume_id = 'volume_id_example' # str | ID of the source volume.
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
    locale = 'locale_example' # str | ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations. (optional)
    source = 'source_example' # str | String to identify the originator of this request. (optional)

    try:
        api_response = api_instance.books_volumes_recommended_rate(rating, volume_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, locale=locale, source=source)
        print("The response of VolumesApi->books_volumes_recommended_rate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VolumesApi->books_volumes_recommended_rate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rating** | **str**| Rating to be given to the volume. | 
 **volume_id** | **str**| ID of the source volume. | 
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
 **locale** | **str**| ISO-639-1 language and ISO-3166-1 country code. Ex: &#39;en_US&#39;. Used for generating recommendations. | [optional] 
 **source** | **str**| String to identify the originator of this request. | [optional] 

### Return type

[**BooksVolumesRecommendedRateResponse**](BooksVolumesRecommendedRateResponse.md)

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

# **books_volumes_useruploaded_list**
> Volumes books_volumes_useruploaded_list(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, locale=locale, max_results=max_results, processing_state=processing_state, source=source, start_index=start_index, volume_id=volume_id)



Return a list of books uploaded by the current user.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.volumes import Volumes
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://books.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://books.googleapis.com"
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
    api_instance = openapi_client.VolumesApi(api_client)
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
    locale = 'locale_example' # str | ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations. (optional)
    max_results = 56 # int | Maximum number of results to return. (optional)
    processing_state = ['processing_state_example'] # List[str] | The processing state of the user uploaded volumes to be returned. (optional)
    source = 'source_example' # str | String to identify the originator of this request. (optional)
    start_index = 56 # int | Index of the first result to return (starts at 0) (optional)
    volume_id = ['volume_id_example'] # List[str] | The ids of the volumes to be returned. If not specified all that match the processingState are returned. (optional)

    try:
        api_response = api_instance.books_volumes_useruploaded_list(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, locale=locale, max_results=max_results, processing_state=processing_state, source=source, start_index=start_index, volume_id=volume_id)
        print("The response of VolumesApi->books_volumes_useruploaded_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VolumesApi->books_volumes_useruploaded_list: %s\n" % e)
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
 **locale** | **str**| ISO-639-1 language and ISO-3166-1 country code. Ex: &#39;en_US&#39;. Used for generating recommendations. | [optional] 
 **max_results** | **int**| Maximum number of results to return. | [optional] 
 **processing_state** | [**List[str]**](str.md)| The processing state of the user uploaded volumes to be returned. | [optional] 
 **source** | **str**| String to identify the originator of this request. | [optional] 
 **start_index** | **int**| Index of the first result to return (starts at 0) | [optional] 
 **volume_id** | [**List[str]**](str.md)| The ids of the volumes to be returned. If not specified all that match the processingState are returned. | [optional] 

### Return type

[**Volumes**](Volumes.md)

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

