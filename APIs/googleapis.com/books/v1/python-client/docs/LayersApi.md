# openapi_client.LayersApi

All URIs are relative to *https://books.googleapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**books_layers_annotation_data_get**](LayersApi.md#books_layers_annotation_data_get) | **GET** /books/v1/volumes/{volumeId}/layers/{layerId}/data/{annotationDataId} | 
[**books_layers_annotation_data_list**](LayersApi.md#books_layers_annotation_data_list) | **GET** /books/v1/volumes/{volumeId}/layers/{layerId}/data | 
[**books_layers_get**](LayersApi.md#books_layers_get) | **GET** /books/v1/volumes/{volumeId}/layersummary/{summaryId} | 
[**books_layers_list**](LayersApi.md#books_layers_list) | **GET** /books/v1/volumes/{volumeId}/layersummary | 
[**books_layers_volume_annotations_get**](LayersApi.md#books_layers_volume_annotations_get) | **GET** /books/v1/volumes/{volumeId}/layers/{layerId}/annotations/{annotationId} | 
[**books_layers_volume_annotations_list**](LayersApi.md#books_layers_volume_annotations_list) | **GET** /books/v1/volumes/{volumeId}/layers/{layerId} | 


# **books_layers_annotation_data_get**
> DictionaryAnnotationdata books_layers_annotation_data_get(volume_id, layer_id, annotation_data_id, content_version, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, allow_web_definitions=allow_web_definitions, h=h, locale=locale, scale=scale, source=source, w=w)



Gets the annotation data.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.dictionary_annotationdata import DictionaryAnnotationdata
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
    api_instance = openapi_client.LayersApi(api_client)
    volume_id = 'volume_id_example' # str | The volume to retrieve annotations for.
    layer_id = 'layer_id_example' # str | The ID for the layer to get the annotations.
    annotation_data_id = 'annotation_data_id_example' # str | The ID of the annotation data to retrieve.
    content_version = 'content_version_example' # str | The content version for the volume you are trying to retrieve.
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
    allow_web_definitions = True # bool | For the dictionary layer. Whether or not to allow web definitions. (optional)
    h = 56 # int | The requested pixel height for any images. If height is provided width must also be provided. (optional)
    locale = 'locale_example' # str | The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. (optional)
    scale = 56 # int | The requested scale for the image. (optional)
    source = 'source_example' # str | String to identify the originator of this request. (optional)
    w = 56 # int | The requested pixel width for any images. If width is provided height must also be provided. (optional)

    try:
        api_response = api_instance.books_layers_annotation_data_get(volume_id, layer_id, annotation_data_id, content_version, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, allow_web_definitions=allow_web_definitions, h=h, locale=locale, scale=scale, source=source, w=w)
        print("The response of LayersApi->books_layers_annotation_data_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LayersApi->books_layers_annotation_data_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **volume_id** | **str**| The volume to retrieve annotations for. | 
 **layer_id** | **str**| The ID for the layer to get the annotations. | 
 **annotation_data_id** | **str**| The ID of the annotation data to retrieve. | 
 **content_version** | **str**| The content version for the volume you are trying to retrieve. | 
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
 **allow_web_definitions** | **bool**| For the dictionary layer. Whether or not to allow web definitions. | [optional] 
 **h** | **int**| The requested pixel height for any images. If height is provided width must also be provided. | [optional] 
 **locale** | **str**| The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: &#39;en_US&#39;. | [optional] 
 **scale** | **int**| The requested scale for the image. | [optional] 
 **source** | **str**| String to identify the originator of this request. | [optional] 
 **w** | **int**| The requested pixel width for any images. If width is provided height must also be provided. | [optional] 

### Return type

[**DictionaryAnnotationdata**](DictionaryAnnotationdata.md)

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

# **books_layers_annotation_data_list**
> Annotationsdata books_layers_annotation_data_list(volume_id, layer_id, content_version, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, annotation_data_id=annotation_data_id, h=h, locale=locale, max_results=max_results, page_token=page_token, scale=scale, source=source, updated_max=updated_max, updated_min=updated_min, w=w)



Gets the annotation data for a volume and layer.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.annotationsdata import Annotationsdata
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
    api_instance = openapi_client.LayersApi(api_client)
    volume_id = 'volume_id_example' # str | The volume to retrieve annotation data for.
    layer_id = 'layer_id_example' # str | The ID for the layer to get the annotation data.
    content_version = 'content_version_example' # str | The content version for the requested volume.
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
    annotation_data_id = ['annotation_data_id_example'] # List[str] | The list of Annotation Data Ids to retrieve. Pagination is ignored if this is set. (optional)
    h = 56 # int | The requested pixel height for any images. If height is provided width must also be provided. (optional)
    locale = 'locale_example' # str | The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. (optional)
    max_results = 56 # int | Maximum number of results to return (optional)
    page_token = 'page_token_example' # str | The value of the nextToken from the previous page. (optional)
    scale = 56 # int | The requested scale for the image. (optional)
    source = 'source_example' # str | String to identify the originator of this request. (optional)
    updated_max = 'updated_max_example' # str | RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive). (optional)
    updated_min = 'updated_min_example' # str | RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive). (optional)
    w = 56 # int | The requested pixel width for any images. If width is provided height must also be provided. (optional)

    try:
        api_response = api_instance.books_layers_annotation_data_list(volume_id, layer_id, content_version, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, annotation_data_id=annotation_data_id, h=h, locale=locale, max_results=max_results, page_token=page_token, scale=scale, source=source, updated_max=updated_max, updated_min=updated_min, w=w)
        print("The response of LayersApi->books_layers_annotation_data_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LayersApi->books_layers_annotation_data_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **volume_id** | **str**| The volume to retrieve annotation data for. | 
 **layer_id** | **str**| The ID for the layer to get the annotation data. | 
 **content_version** | **str**| The content version for the requested volume. | 
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
 **annotation_data_id** | [**List[str]**](str.md)| The list of Annotation Data Ids to retrieve. Pagination is ignored if this is set. | [optional] 
 **h** | **int**| The requested pixel height for any images. If height is provided width must also be provided. | [optional] 
 **locale** | **str**| The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: &#39;en_US&#39;. | [optional] 
 **max_results** | **int**| Maximum number of results to return | [optional] 
 **page_token** | **str**| The value of the nextToken from the previous page. | [optional] 
 **scale** | **int**| The requested scale for the image. | [optional] 
 **source** | **str**| String to identify the originator of this request. | [optional] 
 **updated_max** | **str**| RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive). | [optional] 
 **updated_min** | **str**| RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive). | [optional] 
 **w** | **int**| The requested pixel width for any images. If width is provided height must also be provided. | [optional] 

### Return type

[**Annotationsdata**](Annotationsdata.md)

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

# **books_layers_get**
> Layersummary books_layers_get(volume_id, summary_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, content_version=content_version, source=source)



Gets the layer summary for a volume.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.layersummary import Layersummary
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
    api_instance = openapi_client.LayersApi(api_client)
    volume_id = 'volume_id_example' # str | The volume to retrieve layers for.
    summary_id = 'summary_id_example' # str | The ID for the layer to get the summary for.
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
    content_version = 'content_version_example' # str | The content version for the requested volume. (optional)
    source = 'source_example' # str | String to identify the originator of this request. (optional)

    try:
        api_response = api_instance.books_layers_get(volume_id, summary_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, content_version=content_version, source=source)
        print("The response of LayersApi->books_layers_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LayersApi->books_layers_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **volume_id** | **str**| The volume to retrieve layers for. | 
 **summary_id** | **str**| The ID for the layer to get the summary for. | 
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
 **content_version** | **str**| The content version for the requested volume. | [optional] 
 **source** | **str**| String to identify the originator of this request. | [optional] 

### Return type

[**Layersummary**](Layersummary.md)

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

# **books_layers_list**
> Layersummaries books_layers_list(volume_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, content_version=content_version, max_results=max_results, page_token=page_token, source=source)



List the layer summaries for a volume.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.layersummaries import Layersummaries
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
    api_instance = openapi_client.LayersApi(api_client)
    volume_id = 'volume_id_example' # str | The volume to retrieve layers for.
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
    content_version = 'content_version_example' # str | The content version for the requested volume. (optional)
    max_results = 56 # int | Maximum number of results to return (optional)
    page_token = 'page_token_example' # str | The value of the nextToken from the previous page. (optional)
    source = 'source_example' # str | String to identify the originator of this request. (optional)

    try:
        api_response = api_instance.books_layers_list(volume_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, content_version=content_version, max_results=max_results, page_token=page_token, source=source)
        print("The response of LayersApi->books_layers_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LayersApi->books_layers_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **volume_id** | **str**| The volume to retrieve layers for. | 
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
 **content_version** | **str**| The content version for the requested volume. | [optional] 
 **max_results** | **int**| Maximum number of results to return | [optional] 
 **page_token** | **str**| The value of the nextToken from the previous page. | [optional] 
 **source** | **str**| String to identify the originator of this request. | [optional] 

### Return type

[**Layersummaries**](Layersummaries.md)

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

# **books_layers_volume_annotations_get**
> Volumeannotation books_layers_volume_annotations_get(volume_id, layer_id, annotation_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, locale=locale, source=source)



Gets the volume annotation.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.volumeannotation import Volumeannotation
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
    api_instance = openapi_client.LayersApi(api_client)
    volume_id = 'volume_id_example' # str | The volume to retrieve annotations for.
    layer_id = 'layer_id_example' # str | The ID for the layer to get the annotations.
    annotation_id = 'annotation_id_example' # str | The ID of the volume annotation to retrieve.
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
    locale = 'locale_example' # str | The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. (optional)
    source = 'source_example' # str | String to identify the originator of this request. (optional)

    try:
        api_response = api_instance.books_layers_volume_annotations_get(volume_id, layer_id, annotation_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, locale=locale, source=source)
        print("The response of LayersApi->books_layers_volume_annotations_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LayersApi->books_layers_volume_annotations_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **volume_id** | **str**| The volume to retrieve annotations for. | 
 **layer_id** | **str**| The ID for the layer to get the annotations. | 
 **annotation_id** | **str**| The ID of the volume annotation to retrieve. | 
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
 **locale** | **str**| The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: &#39;en_US&#39;. | [optional] 
 **source** | **str**| String to identify the originator of this request. | [optional] 

### Return type

[**Volumeannotation**](Volumeannotation.md)

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

# **books_layers_volume_annotations_list**
> Volumeannotations books_layers_volume_annotations_list(volume_id, layer_id, content_version, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, end_offset=end_offset, end_position=end_position, locale=locale, max_results=max_results, page_token=page_token, show_deleted=show_deleted, source=source, start_offset=start_offset, start_position=start_position, updated_max=updated_max, updated_min=updated_min, volume_annotations_version=volume_annotations_version)



Gets the volume annotations for a volume and layer.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.volumeannotations import Volumeannotations
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
    api_instance = openapi_client.LayersApi(api_client)
    volume_id = 'volume_id_example' # str | The volume to retrieve annotations for.
    layer_id = 'layer_id_example' # str | The ID for the layer to get the annotations.
    content_version = 'content_version_example' # str | The content version for the requested volume.
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
    end_offset = 'end_offset_example' # str | The end offset to end retrieving data from. (optional)
    end_position = 'end_position_example' # str | The end position to end retrieving data from. (optional)
    locale = 'locale_example' # str | The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. (optional)
    max_results = 56 # int | Maximum number of results to return (optional)
    page_token = 'page_token_example' # str | The value of the nextToken from the previous page. (optional)
    show_deleted = True # bool | Set to true to return deleted annotations. updatedMin must be in the request to use this. Defaults to false. (optional)
    source = 'source_example' # str | String to identify the originator of this request. (optional)
    start_offset = 'start_offset_example' # str | The start offset to start retrieving data from. (optional)
    start_position = 'start_position_example' # str | The start position to start retrieving data from. (optional)
    updated_max = 'updated_max_example' # str | RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive). (optional)
    updated_min = 'updated_min_example' # str | RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive). (optional)
    volume_annotations_version = 'volume_annotations_version_example' # str | The version of the volume annotations that you are requesting. (optional)

    try:
        api_response = api_instance.books_layers_volume_annotations_list(volume_id, layer_id, content_version, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, end_offset=end_offset, end_position=end_position, locale=locale, max_results=max_results, page_token=page_token, show_deleted=show_deleted, source=source, start_offset=start_offset, start_position=start_position, updated_max=updated_max, updated_min=updated_min, volume_annotations_version=volume_annotations_version)
        print("The response of LayersApi->books_layers_volume_annotations_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LayersApi->books_layers_volume_annotations_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **volume_id** | **str**| The volume to retrieve annotations for. | 
 **layer_id** | **str**| The ID for the layer to get the annotations. | 
 **content_version** | **str**| The content version for the requested volume. | 
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
 **end_offset** | **str**| The end offset to end retrieving data from. | [optional] 
 **end_position** | **str**| The end position to end retrieving data from. | [optional] 
 **locale** | **str**| The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: &#39;en_US&#39;. | [optional] 
 **max_results** | **int**| Maximum number of results to return | [optional] 
 **page_token** | **str**| The value of the nextToken from the previous page. | [optional] 
 **show_deleted** | **bool**| Set to true to return deleted annotations. updatedMin must be in the request to use this. Defaults to false. | [optional] 
 **source** | **str**| String to identify the originator of this request. | [optional] 
 **start_offset** | **str**| The start offset to start retrieving data from. | [optional] 
 **start_position** | **str**| The start position to start retrieving data from. | [optional] 
 **updated_max** | **str**| RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive). | [optional] 
 **updated_min** | **str**| RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive). | [optional] 
 **volume_annotations_version** | **str**| The version of the volume annotations that you are requesting. | [optional] 

### Return type

[**Volumeannotations**](Volumeannotations.md)

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

