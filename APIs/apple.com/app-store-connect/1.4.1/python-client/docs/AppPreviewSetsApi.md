# openapi_client.AppPreviewSetsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**app_preview_sets_app_previews_get_to_many_related**](AppPreviewSetsApi.md#app_preview_sets_app_previews_get_to_many_related) | **GET** /v1/appPreviewSets/{id}/appPreviews | 
[**app_preview_sets_app_previews_get_to_many_relationship**](AppPreviewSetsApi.md#app_preview_sets_app_previews_get_to_many_relationship) | **GET** /v1/appPreviewSets/{id}/relationships/appPreviews | 
[**app_preview_sets_app_previews_replace_to_many_relationship**](AppPreviewSetsApi.md#app_preview_sets_app_previews_replace_to_many_relationship) | **PATCH** /v1/appPreviewSets/{id}/relationships/appPreviews | 
[**app_preview_sets_create_instance**](AppPreviewSetsApi.md#app_preview_sets_create_instance) | **POST** /v1/appPreviewSets | 
[**app_preview_sets_delete_instance**](AppPreviewSetsApi.md#app_preview_sets_delete_instance) | **DELETE** /v1/appPreviewSets/{id} | 
[**app_preview_sets_get_instance**](AppPreviewSetsApi.md#app_preview_sets_get_instance) | **GET** /v1/appPreviewSets/{id} | 


# **app_preview_sets_app_previews_get_to_many_related**
> AppPreviewsResponse app_preview_sets_app_previews_get_to_many_related(id, fields_app_previews=fields_app_previews, fields_app_preview_sets=fields_app_preview_sets, limit=limit, include=include)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.app_previews_response import AppPreviewsResponse
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
    api_instance = openapi_client.AppPreviewSetsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    fields_app_previews = ['fields_app_previews_example'] # List[str] | the fields to include for returned resources of type appPreviews (optional)
    fields_app_preview_sets = ['fields_app_preview_sets_example'] # List[str] | the fields to include for returned resources of type appPreviewSets (optional)
    limit = 56 # int | maximum resources per page (optional)
    include = ['include_example'] # List[str] | comma-separated list of relationships to include (optional)

    try:
        api_response = api_instance.app_preview_sets_app_previews_get_to_many_related(id, fields_app_previews=fields_app_previews, fields_app_preview_sets=fields_app_preview_sets, limit=limit, include=include)
        print("The response of AppPreviewSetsApi->app_preview_sets_app_previews_get_to_many_related:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppPreviewSetsApi->app_preview_sets_app_previews_get_to_many_related: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **fields_app_previews** | [**List[str]**](str.md)| the fields to include for returned resources of type appPreviews | [optional] 
 **fields_app_preview_sets** | [**List[str]**](str.md)| the fields to include for returned resources of type appPreviewSets | [optional] 
 **limit** | **int**| maximum resources per page | [optional] 
 **include** | [**List[str]**](str.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**AppPreviewsResponse**](AppPreviewsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of related resources |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_preview_sets_app_previews_get_to_many_relationship**
> AppPreviewSetAppPreviewsLinkagesResponse app_preview_sets_app_previews_get_to_many_relationship(id, limit=limit)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.app_preview_set_app_previews_linkages_response import AppPreviewSetAppPreviewsLinkagesResponse
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
    api_instance = openapi_client.AppPreviewSetsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    limit = 56 # int | maximum resources per page (optional)

    try:
        api_response = api_instance.app_preview_sets_app_previews_get_to_many_relationship(id, limit=limit)
        print("The response of AppPreviewSetsApi->app_preview_sets_app_previews_get_to_many_relationship:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppPreviewSetsApi->app_preview_sets_app_previews_get_to_many_relationship: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **limit** | **int**| maximum resources per page | [optional] 

### Return type

[**AppPreviewSetAppPreviewsLinkagesResponse**](AppPreviewSetAppPreviewsLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of related linkages |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_preview_sets_app_previews_replace_to_many_relationship**
> app_preview_sets_app_previews_replace_to_many_relationship(id, app_preview_set_app_previews_linkages_request)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.app_preview_set_app_previews_linkages_request import AppPreviewSetAppPreviewsLinkagesRequest
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
    api_instance = openapi_client.AppPreviewSetsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    app_preview_set_app_previews_linkages_request = openapi_client.AppPreviewSetAppPreviewsLinkagesRequest() # AppPreviewSetAppPreviewsLinkagesRequest | List of related linkages

    try:
        api_instance.app_preview_sets_app_previews_replace_to_many_relationship(id, app_preview_set_app_previews_linkages_request)
    except Exception as e:
        print("Exception when calling AppPreviewSetsApi->app_preview_sets_app_previews_replace_to_many_relationship: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **app_preview_set_app_previews_linkages_request** | [**AppPreviewSetAppPreviewsLinkagesRequest**](AppPreviewSetAppPreviewsLinkagesRequest.md)| List of related linkages | 

### Return type

void (empty response body)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success (no content) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_preview_sets_create_instance**
> AppPreviewSetResponse app_preview_sets_create_instance(app_preview_set_create_request)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.app_preview_set_create_request import AppPreviewSetCreateRequest
from openapi_client.models.app_preview_set_response import AppPreviewSetResponse
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
    api_instance = openapi_client.AppPreviewSetsApi(api_client)
    app_preview_set_create_request = openapi_client.AppPreviewSetCreateRequest() # AppPreviewSetCreateRequest | AppPreviewSet representation

    try:
        api_response = api_instance.app_preview_sets_create_instance(app_preview_set_create_request)
        print("The response of AppPreviewSetsApi->app_preview_sets_create_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppPreviewSetsApi->app_preview_sets_create_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_preview_set_create_request** | [**AppPreviewSetCreateRequest**](AppPreviewSetCreateRequest.md)| AppPreviewSet representation | 

### Return type

[**AppPreviewSetResponse**](AppPreviewSetResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Single AppPreviewSet |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_preview_sets_delete_instance**
> app_preview_sets_delete_instance(id)



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
    api_instance = openapi_client.AppPreviewSetsApi(api_client)
    id = 'id_example' # str | the id of the requested resource

    try:
        api_instance.app_preview_sets_delete_instance(id)
    except Exception as e:
        print("Exception when calling AppPreviewSetsApi->app_preview_sets_delete_instance: %s\n" % e)
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

# **app_preview_sets_get_instance**
> AppPreviewSetResponse app_preview_sets_get_instance(id, fields_app_preview_sets=fields_app_preview_sets, include=include, fields_app_previews=fields_app_previews, limit_app_previews=limit_app_previews)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.app_preview_set_response import AppPreviewSetResponse
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
    api_instance = openapi_client.AppPreviewSetsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    fields_app_preview_sets = ['fields_app_preview_sets_example'] # List[str] | the fields to include for returned resources of type appPreviewSets (optional)
    include = ['include_example'] # List[str] | comma-separated list of relationships to include (optional)
    fields_app_previews = ['fields_app_previews_example'] # List[str] | the fields to include for returned resources of type appPreviews (optional)
    limit_app_previews = 56 # int | maximum number of related appPreviews returned (when they are included) (optional)

    try:
        api_response = api_instance.app_preview_sets_get_instance(id, fields_app_preview_sets=fields_app_preview_sets, include=include, fields_app_previews=fields_app_previews, limit_app_previews=limit_app_previews)
        print("The response of AppPreviewSetsApi->app_preview_sets_get_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppPreviewSetsApi->app_preview_sets_get_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **fields_app_preview_sets** | [**List[str]**](str.md)| the fields to include for returned resources of type appPreviewSets | [optional] 
 **include** | [**List[str]**](str.md)| comma-separated list of relationships to include | [optional] 
 **fields_app_previews** | [**List[str]**](str.md)| the fields to include for returned resources of type appPreviews | [optional] 
 **limit_app_previews** | **int**| maximum number of related appPreviews returned (when they are included) | [optional] 

### Return type

[**AppPreviewSetResponse**](AppPreviewSetResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Single AppPreviewSet |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

