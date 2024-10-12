# openapi_client.LocationsApi

All URIs are relative to *https://discoveryengine.googleapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**discoveryengine_locations_lookup_widget_config**](LocationsApi.md#discoveryengine_locations_lookup_widget_config) | **POST** /v1alpha/{location}/lookupWidgetConfig | 
[**discoveryengine_locations_widget_complete_query**](LocationsApi.md#discoveryengine_locations_widget_complete_query) | **POST** /v1alpha/{location}/widgetCompleteQuery | 
[**discoveryengine_locations_widget_converse_conversation**](LocationsApi.md#discoveryengine_locations_widget_converse_conversation) | **POST** /v1alpha/{location}/widgetConverseConversation | 
[**discoveryengine_locations_widget_search**](LocationsApi.md#discoveryengine_locations_widget_search) | **POST** /v1alpha/{location}/widgetSearch | 


# **discoveryengine_locations_lookup_widget_config**
> GoogleCloudDiscoveryengineV1alphaLookupWidgetConfigResponse discoveryengine_locations_lookup_widget_config(location, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_discoveryengine_v1alpha_lookup_widget_config_request=google_cloud_discoveryengine_v1alpha_lookup_widget_config_request)



Gets the Widget Config using the uuid.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_discoveryengine_v1alpha_lookup_widget_config_request import GoogleCloudDiscoveryengineV1alphaLookupWidgetConfigRequest
from openapi_client.models.google_cloud_discoveryengine_v1alpha_lookup_widget_config_response import GoogleCloudDiscoveryengineV1alphaLookupWidgetConfigResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://discoveryengine.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://discoveryengine.googleapis.com"
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
    api_instance = openapi_client.LocationsApi(api_client)
    location = 'location_example' # str | Required. The location resource where lookup widget will be performed. Format: `locations/{location}`
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
    google_cloud_discoveryengine_v1alpha_lookup_widget_config_request = openapi_client.GoogleCloudDiscoveryengineV1alphaLookupWidgetConfigRequest() # GoogleCloudDiscoveryengineV1alphaLookupWidgetConfigRequest |  (optional)

    try:
        api_response = api_instance.discoveryengine_locations_lookup_widget_config(location, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_discoveryengine_v1alpha_lookup_widget_config_request=google_cloud_discoveryengine_v1alpha_lookup_widget_config_request)
        print("The response of LocationsApi->discoveryengine_locations_lookup_widget_config:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LocationsApi->discoveryengine_locations_lookup_widget_config: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | **str**| Required. The location resource where lookup widget will be performed. Format: &#x60;locations/{location}&#x60; | 
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
 **google_cloud_discoveryengine_v1alpha_lookup_widget_config_request** | [**GoogleCloudDiscoveryengineV1alphaLookupWidgetConfigRequest**](GoogleCloudDiscoveryengineV1alphaLookupWidgetConfigRequest.md)|  | [optional] 

### Return type

[**GoogleCloudDiscoveryengineV1alphaLookupWidgetConfigResponse**](GoogleCloudDiscoveryengineV1alphaLookupWidgetConfigResponse.md)

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

# **discoveryengine_locations_widget_complete_query**
> GoogleCloudDiscoveryengineV1alphaWidgetCompleteQueryResponse discoveryengine_locations_widget_complete_query(location, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_discoveryengine_v1alpha_widget_complete_query_request=google_cloud_discoveryengine_v1alpha_widget_complete_query_request)



Performs a user input completion with keyword suggestion. Similar to the CompletionService.CompleteQuery method, but a widget version that allows CompleteQuery without API Key. It supports CompleteQuery with or without JWT token.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_discoveryengine_v1alpha_widget_complete_query_request import GoogleCloudDiscoveryengineV1alphaWidgetCompleteQueryRequest
from openapi_client.models.google_cloud_discoveryengine_v1alpha_widget_complete_query_response import GoogleCloudDiscoveryengineV1alphaWidgetCompleteQueryResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://discoveryengine.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://discoveryengine.googleapis.com"
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
    api_instance = openapi_client.LocationsApi(api_client)
    location = 'location_example' # str | Required. The location resource where widget complete query will be performed. Format: `locations/{location}`
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
    google_cloud_discoveryengine_v1alpha_widget_complete_query_request = openapi_client.GoogleCloudDiscoveryengineV1alphaWidgetCompleteQueryRequest() # GoogleCloudDiscoveryengineV1alphaWidgetCompleteQueryRequest |  (optional)

    try:
        api_response = api_instance.discoveryengine_locations_widget_complete_query(location, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_discoveryengine_v1alpha_widget_complete_query_request=google_cloud_discoveryengine_v1alpha_widget_complete_query_request)
        print("The response of LocationsApi->discoveryengine_locations_widget_complete_query:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LocationsApi->discoveryengine_locations_widget_complete_query: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | **str**| Required. The location resource where widget complete query will be performed. Format: &#x60;locations/{location}&#x60; | 
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
 **google_cloud_discoveryengine_v1alpha_widget_complete_query_request** | [**GoogleCloudDiscoveryengineV1alphaWidgetCompleteQueryRequest**](GoogleCloudDiscoveryengineV1alphaWidgetCompleteQueryRequest.md)|  | [optional] 

### Return type

[**GoogleCloudDiscoveryengineV1alphaWidgetCompleteQueryResponse**](GoogleCloudDiscoveryengineV1alphaWidgetCompleteQueryResponse.md)

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

# **discoveryengine_locations_widget_converse_conversation**
> GoogleCloudDiscoveryengineV1alphaWidgetConverseConversationResponse discoveryengine_locations_widget_converse_conversation(location, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_discoveryengine_v1alpha_widget_converse_conversation_request=google_cloud_discoveryengine_v1alpha_widget_converse_conversation_request)



Converse a conversation with Widget.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_discoveryengine_v1alpha_widget_converse_conversation_request import GoogleCloudDiscoveryengineV1alphaWidgetConverseConversationRequest
from openapi_client.models.google_cloud_discoveryengine_v1alpha_widget_converse_conversation_response import GoogleCloudDiscoveryengineV1alphaWidgetConverseConversationResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://discoveryengine.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://discoveryengine.googleapis.com"
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
    api_instance = openapi_client.LocationsApi(api_client)
    location = 'location_example' # str | Required. The location resource where widget converse conversation will be performed. Format: `locations/{location}`
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
    google_cloud_discoveryengine_v1alpha_widget_converse_conversation_request = openapi_client.GoogleCloudDiscoveryengineV1alphaWidgetConverseConversationRequest() # GoogleCloudDiscoveryengineV1alphaWidgetConverseConversationRequest |  (optional)

    try:
        api_response = api_instance.discoveryengine_locations_widget_converse_conversation(location, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_discoveryengine_v1alpha_widget_converse_conversation_request=google_cloud_discoveryengine_v1alpha_widget_converse_conversation_request)
        print("The response of LocationsApi->discoveryengine_locations_widget_converse_conversation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LocationsApi->discoveryengine_locations_widget_converse_conversation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | **str**| Required. The location resource where widget converse conversation will be performed. Format: &#x60;locations/{location}&#x60; | 
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
 **google_cloud_discoveryengine_v1alpha_widget_converse_conversation_request** | [**GoogleCloudDiscoveryengineV1alphaWidgetConverseConversationRequest**](GoogleCloudDiscoveryengineV1alphaWidgetConverseConversationRequest.md)|  | [optional] 

### Return type

[**GoogleCloudDiscoveryengineV1alphaWidgetConverseConversationResponse**](GoogleCloudDiscoveryengineV1alphaWidgetConverseConversationResponse.md)

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

# **discoveryengine_locations_widget_search**
> GoogleCloudDiscoveryengineV1alphaWidgetSearchResponse discoveryengine_locations_widget_search(location, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_discoveryengine_v1alpha_widget_search_request=google_cloud_discoveryengine_v1alpha_widget_search_request)



Performs a search. Similar to the SearchService.Search method, but a widget version that allows search without API Key. It supports search with or without JWT token.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_discoveryengine_v1alpha_widget_search_request import GoogleCloudDiscoveryengineV1alphaWidgetSearchRequest
from openapi_client.models.google_cloud_discoveryengine_v1alpha_widget_search_response import GoogleCloudDiscoveryengineV1alphaWidgetSearchResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://discoveryengine.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://discoveryengine.googleapis.com"
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
    api_instance = openapi_client.LocationsApi(api_client)
    location = 'location_example' # str | Required. The location resource where widget search will be performed. Format: `locations/{location}`
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
    google_cloud_discoveryengine_v1alpha_widget_search_request = openapi_client.GoogleCloudDiscoveryengineV1alphaWidgetSearchRequest() # GoogleCloudDiscoveryengineV1alphaWidgetSearchRequest |  (optional)

    try:
        api_response = api_instance.discoveryengine_locations_widget_search(location, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_discoveryengine_v1alpha_widget_search_request=google_cloud_discoveryengine_v1alpha_widget_search_request)
        print("The response of LocationsApi->discoveryengine_locations_widget_search:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LocationsApi->discoveryengine_locations_widget_search: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | **str**| Required. The location resource where widget search will be performed. Format: &#x60;locations/{location}&#x60; | 
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
 **google_cloud_discoveryengine_v1alpha_widget_search_request** | [**GoogleCloudDiscoveryengineV1alphaWidgetSearchRequest**](GoogleCloudDiscoveryengineV1alphaWidgetSearchRequest.md)|  | [optional] 

### Return type

[**GoogleCloudDiscoveryengineV1alphaWidgetSearchResponse**](GoogleCloudDiscoveryengineV1alphaWidgetSearchResponse.md)

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

