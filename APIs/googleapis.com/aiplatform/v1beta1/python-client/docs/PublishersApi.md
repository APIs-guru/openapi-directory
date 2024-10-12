# openapi_client.PublishersApi

All URIs are relative to *https://aiplatform.googleapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**aiplatform_publishers_models_get**](PublishersApi.md#aiplatform_publishers_models_get) | **GET** /v1beta1/{name} | 
[**aiplatform_publishers_models_list**](PublishersApi.md#aiplatform_publishers_models_list) | **GET** /v1beta1/{parent}/models | 


# **aiplatform_publishers_models_get**
> GoogleCloudAiplatformV1beta1PublisherModel aiplatform_publishers_models_get(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, language_code=language_code, view=view)



Gets a Model Garden publisher model.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_aiplatform_v1beta1_publisher_model import GoogleCloudAiplatformV1beta1PublisherModel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://aiplatform.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://aiplatform.googleapis.com"
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
    api_instance = openapi_client.PublishersApi(api_client)
    name = 'name_example' # str | Required. The name of the PublisherModel resource. Format: `publishers/{publisher}/models/{publisher_model}`
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
    language_code = 'language_code_example' # str | Optional. The IETF BCP-47 language code representing the language in which the publisher model's text information should be written in (see go/bcp47). (optional)
    view = 'view_example' # str | Optional. PublisherModel view specifying which fields to read. (optional)

    try:
        api_response = api_instance.aiplatform_publishers_models_get(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, language_code=language_code, view=view)
        print("The response of PublishersApi->aiplatform_publishers_models_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PublishersApi->aiplatform_publishers_models_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Required. The name of the PublisherModel resource. Format: &#x60;publishers/{publisher}/models/{publisher_model}&#x60; | 
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
 **language_code** | **str**| Optional. The IETF BCP-47 language code representing the language in which the publisher model&#39;s text information should be written in (see go/bcp47). | [optional] 
 **view** | **str**| Optional. PublisherModel view specifying which fields to read. | [optional] 

### Return type

[**GoogleCloudAiplatformV1beta1PublisherModel**](GoogleCloudAiplatformV1beta1PublisherModel.md)

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

# **aiplatform_publishers_models_list**
> GoogleCloudAiplatformV1beta1ListPublisherModelsResponse aiplatform_publishers_models_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, language_code=language_code, order_by=order_by, page_size=page_size, page_token=page_token, view=view)



Lists publisher models in Model Garden.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_aiplatform_v1beta1_list_publisher_models_response import GoogleCloudAiplatformV1beta1ListPublisherModelsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://aiplatform.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://aiplatform.googleapis.com"
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
    api_instance = openapi_client.PublishersApi(api_client)
    parent = 'parent_example' # str | Required. The name of the Publisher from which to list the PublisherModels. Format: `publishers/{publisher}`
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
    filter = 'filter_example' # str | Optional. The standard list filter. (optional)
    language_code = 'language_code_example' # str | Optional. The IETF BCP-47 language code representing the language in which the publisher models' text information should be written in (see go/bcp47). If not set, by default English (en). (optional)
    order_by = 'order_by_example' # str | Optional. A comma-separated list of fields to order by, sorted in ascending order. Use \"desc\" after a field name for descending. (optional)
    page_size = 56 # int | Optional. The standard list page size. (optional)
    page_token = 'page_token_example' # str | Optional. The standard list page token. Typically obtained via ListPublisherModelsResponse.next_page_token of the previous ModelGardenService.ListPublisherModels call. (optional)
    view = 'view_example' # str | Optional. PublisherModel view specifying which fields to read. (optional)

    try:
        api_response = api_instance.aiplatform_publishers_models_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, language_code=language_code, order_by=order_by, page_size=page_size, page_token=page_token, view=view)
        print("The response of PublishersApi->aiplatform_publishers_models_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PublishersApi->aiplatform_publishers_models_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The name of the Publisher from which to list the PublisherModels. Format: &#x60;publishers/{publisher}&#x60; | 
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
 **filter** | **str**| Optional. The standard list filter. | [optional] 
 **language_code** | **str**| Optional. The IETF BCP-47 language code representing the language in which the publisher models&#39; text information should be written in (see go/bcp47). If not set, by default English (en). | [optional] 
 **order_by** | **str**| Optional. A comma-separated list of fields to order by, sorted in ascending order. Use \&quot;desc\&quot; after a field name for descending. | [optional] 
 **page_size** | **int**| Optional. The standard list page size. | [optional] 
 **page_token** | **str**| Optional. The standard list page token. Typically obtained via ListPublisherModelsResponse.next_page_token of the previous ModelGardenService.ListPublisherModels call. | [optional] 
 **view** | **str**| Optional. PublisherModel view specifying which fields to read. | [optional] 

### Return type

[**GoogleCloudAiplatformV1beta1ListPublisherModelsResponse**](GoogleCloudAiplatformV1beta1ListPublisherModelsResponse.md)

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

