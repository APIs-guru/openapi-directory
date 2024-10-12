# openapi_client.AppPreviewsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**app_previews_create_instance**](AppPreviewsApi.md#app_previews_create_instance) | **POST** /v1/appPreviews | 
[**app_previews_delete_instance**](AppPreviewsApi.md#app_previews_delete_instance) | **DELETE** /v1/appPreviews/{id} | 
[**app_previews_get_instance**](AppPreviewsApi.md#app_previews_get_instance) | **GET** /v1/appPreviews/{id} | 
[**app_previews_update_instance**](AppPreviewsApi.md#app_previews_update_instance) | **PATCH** /v1/appPreviews/{id} | 


# **app_previews_create_instance**
> AppPreviewResponse app_previews_create_instance(app_preview_create_request)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.app_preview_create_request import AppPreviewCreateRequest
from openapi_client.models.app_preview_response import AppPreviewResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appstoreconnect.apple.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appstoreconnect.apple.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): itc-bearer-token
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AppPreviewsApi(api_client)
    app_preview_create_request = openapi_client.AppPreviewCreateRequest() # AppPreviewCreateRequest | AppPreview representation

    try:
        api_response = api_instance.app_previews_create_instance(app_preview_create_request)
        print("The response of AppPreviewsApi->app_previews_create_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppPreviewsApi->app_previews_create_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_preview_create_request** | [**AppPreviewCreateRequest**](AppPreviewCreateRequest.md)| AppPreview representation | 

### Return type

[**AppPreviewResponse**](AppPreviewResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Single AppPreview |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_previews_delete_instance**
> app_previews_delete_instance(id)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appstoreconnect.apple.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appstoreconnect.apple.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): itc-bearer-token
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AppPreviewsApi(api_client)
    id = 'id_example' # str | the id of the requested resource

    try:
        api_instance.app_previews_delete_instance(id)
    except Exception as e:
        print("Exception when calling AppPreviewsApi->app_previews_delete_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 

### Return type

void (empty response body)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success (no content) |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_previews_get_instance**
> AppPreviewResponse app_previews_get_instance(id, fields_app_previews=fields_app_previews, include=include)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.app_preview_response import AppPreviewResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appstoreconnect.apple.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appstoreconnect.apple.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): itc-bearer-token
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AppPreviewsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    fields_app_previews = ['fields_app_previews_example'] # List[str] | the fields to include for returned resources of type appPreviews (optional)
    include = ['include_example'] # List[str] | comma-separated list of relationships to include (optional)

    try:
        api_response = api_instance.app_previews_get_instance(id, fields_app_previews=fields_app_previews, include=include)
        print("The response of AppPreviewsApi->app_previews_get_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppPreviewsApi->app_previews_get_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **fields_app_previews** | [**List[str]**](str.md)| the fields to include for returned resources of type appPreviews | [optional] 
 **include** | [**List[str]**](str.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**AppPreviewResponse**](AppPreviewResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Single AppPreview |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_previews_update_instance**
> AppPreviewResponse app_previews_update_instance(id, app_preview_update_request)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.app_preview_response import AppPreviewResponse
from openapi_client.models.app_preview_update_request import AppPreviewUpdateRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appstoreconnect.apple.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appstoreconnect.apple.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): itc-bearer-token
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AppPreviewsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    app_preview_update_request = openapi_client.AppPreviewUpdateRequest() # AppPreviewUpdateRequest | AppPreview representation

    try:
        api_response = api_instance.app_previews_update_instance(id, app_preview_update_request)
        print("The response of AppPreviewsApi->app_previews_update_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppPreviewsApi->app_previews_update_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **app_preview_update_request** | [**AppPreviewUpdateRequest**](AppPreviewUpdateRequest.md)| AppPreview representation | 

### Return type

[**AppPreviewResponse**](AppPreviewResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Single AppPreview |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

