# openapi_client.AppStoreVersionLocalizationsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**app_store_version_localizations_app_preview_sets_get_to_many_related**](AppStoreVersionLocalizationsApi.md#app_store_version_localizations_app_preview_sets_get_to_many_related) | **GET** /v1/appStoreVersionLocalizations/{id}/appPreviewSets | 
[**app_store_version_localizations_app_screenshot_sets_get_to_many_related**](AppStoreVersionLocalizationsApi.md#app_store_version_localizations_app_screenshot_sets_get_to_many_related) | **GET** /v1/appStoreVersionLocalizations/{id}/appScreenshotSets | 
[**app_store_version_localizations_create_instance**](AppStoreVersionLocalizationsApi.md#app_store_version_localizations_create_instance) | **POST** /v1/appStoreVersionLocalizations | 
[**app_store_version_localizations_delete_instance**](AppStoreVersionLocalizationsApi.md#app_store_version_localizations_delete_instance) | **DELETE** /v1/appStoreVersionLocalizations/{id} | 
[**app_store_version_localizations_get_instance**](AppStoreVersionLocalizationsApi.md#app_store_version_localizations_get_instance) | **GET** /v1/appStoreVersionLocalizations/{id} | 
[**app_store_version_localizations_update_instance**](AppStoreVersionLocalizationsApi.md#app_store_version_localizations_update_instance) | **PATCH** /v1/appStoreVersionLocalizations/{id} | 


# **app_store_version_localizations_app_preview_sets_get_to_many_related**
> AppPreviewSetsResponse app_store_version_localizations_app_preview_sets_get_to_many_related(id, filter_preview_type=filter_preview_type, fields_app_store_version_localizations=fields_app_store_version_localizations, fields_app_previews=fields_app_previews, fields_app_preview_sets=fields_app_preview_sets, limit=limit, include=include)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.app_preview_sets_response import AppPreviewSetsResponse
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
    api_instance = openapi_client.AppStoreVersionLocalizationsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    filter_preview_type = ['filter_preview_type_example'] # List[str] | filter by attribute 'previewType' (optional)
    fields_app_store_version_localizations = ['fields_app_store_version_localizations_example'] # List[str] | the fields to include for returned resources of type appStoreVersionLocalizations (optional)
    fields_app_previews = ['fields_app_previews_example'] # List[str] | the fields to include for returned resources of type appPreviews (optional)
    fields_app_preview_sets = ['fields_app_preview_sets_example'] # List[str] | the fields to include for returned resources of type appPreviewSets (optional)
    limit = 56 # int | maximum resources per page (optional)
    include = ['include_example'] # List[str] | comma-separated list of relationships to include (optional)

    try:
        api_response = api_instance.app_store_version_localizations_app_preview_sets_get_to_many_related(id, filter_preview_type=filter_preview_type, fields_app_store_version_localizations=fields_app_store_version_localizations, fields_app_previews=fields_app_previews, fields_app_preview_sets=fields_app_preview_sets, limit=limit, include=include)
        print("The response of AppStoreVersionLocalizationsApi->app_store_version_localizations_app_preview_sets_get_to_many_related:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppStoreVersionLocalizationsApi->app_store_version_localizations_app_preview_sets_get_to_many_related: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **filter_preview_type** | [**List[str]**](str.md)| filter by attribute &#39;previewType&#39; | [optional] 
 **fields_app_store_version_localizations** | [**List[str]**](str.md)| the fields to include for returned resources of type appStoreVersionLocalizations | [optional] 
 **fields_app_previews** | [**List[str]**](str.md)| the fields to include for returned resources of type appPreviews | [optional] 
 **fields_app_preview_sets** | [**List[str]**](str.md)| the fields to include for returned resources of type appPreviewSets | [optional] 
 **limit** | **int**| maximum resources per page | [optional] 
 **include** | [**List[str]**](str.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**AppPreviewSetsResponse**](AppPreviewSetsResponse.md)

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

# **app_store_version_localizations_app_screenshot_sets_get_to_many_related**
> AppScreenshotSetsResponse app_store_version_localizations_app_screenshot_sets_get_to_many_related(id, filter_screenshot_display_type=filter_screenshot_display_type, fields_app_store_version_localizations=fields_app_store_version_localizations, fields_app_screenshot_sets=fields_app_screenshot_sets, fields_app_screenshots=fields_app_screenshots, limit=limit, include=include)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.app_screenshot_sets_response import AppScreenshotSetsResponse
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
    api_instance = openapi_client.AppStoreVersionLocalizationsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    filter_screenshot_display_type = ['filter_screenshot_display_type_example'] # List[str] | filter by attribute 'screenshotDisplayType' (optional)
    fields_app_store_version_localizations = ['fields_app_store_version_localizations_example'] # List[str] | the fields to include for returned resources of type appStoreVersionLocalizations (optional)
    fields_app_screenshot_sets = ['fields_app_screenshot_sets_example'] # List[str] | the fields to include for returned resources of type appScreenshotSets (optional)
    fields_app_screenshots = ['fields_app_screenshots_example'] # List[str] | the fields to include for returned resources of type appScreenshots (optional)
    limit = 56 # int | maximum resources per page (optional)
    include = ['include_example'] # List[str] | comma-separated list of relationships to include (optional)

    try:
        api_response = api_instance.app_store_version_localizations_app_screenshot_sets_get_to_many_related(id, filter_screenshot_display_type=filter_screenshot_display_type, fields_app_store_version_localizations=fields_app_store_version_localizations, fields_app_screenshot_sets=fields_app_screenshot_sets, fields_app_screenshots=fields_app_screenshots, limit=limit, include=include)
        print("The response of AppStoreVersionLocalizationsApi->app_store_version_localizations_app_screenshot_sets_get_to_many_related:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppStoreVersionLocalizationsApi->app_store_version_localizations_app_screenshot_sets_get_to_many_related: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **filter_screenshot_display_type** | [**List[str]**](str.md)| filter by attribute &#39;screenshotDisplayType&#39; | [optional] 
 **fields_app_store_version_localizations** | [**List[str]**](str.md)| the fields to include for returned resources of type appStoreVersionLocalizations | [optional] 
 **fields_app_screenshot_sets** | [**List[str]**](str.md)| the fields to include for returned resources of type appScreenshotSets | [optional] 
 **fields_app_screenshots** | [**List[str]**](str.md)| the fields to include for returned resources of type appScreenshots | [optional] 
 **limit** | **int**| maximum resources per page | [optional] 
 **include** | [**List[str]**](str.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**AppScreenshotSetsResponse**](AppScreenshotSetsResponse.md)

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

# **app_store_version_localizations_create_instance**
> AppStoreVersionLocalizationResponse app_store_version_localizations_create_instance(app_store_version_localization_create_request)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.app_store_version_localization_create_request import AppStoreVersionLocalizationCreateRequest
from openapi_client.models.app_store_version_localization_response import AppStoreVersionLocalizationResponse
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
    api_instance = openapi_client.AppStoreVersionLocalizationsApi(api_client)
    app_store_version_localization_create_request = openapi_client.AppStoreVersionLocalizationCreateRequest() # AppStoreVersionLocalizationCreateRequest | AppStoreVersionLocalization representation

    try:
        api_response = api_instance.app_store_version_localizations_create_instance(app_store_version_localization_create_request)
        print("The response of AppStoreVersionLocalizationsApi->app_store_version_localizations_create_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppStoreVersionLocalizationsApi->app_store_version_localizations_create_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_store_version_localization_create_request** | [**AppStoreVersionLocalizationCreateRequest**](AppStoreVersionLocalizationCreateRequest.md)| AppStoreVersionLocalization representation | 

### Return type

[**AppStoreVersionLocalizationResponse**](AppStoreVersionLocalizationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Single AppStoreVersionLocalization |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_store_version_localizations_delete_instance**
> app_store_version_localizations_delete_instance(id)



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
    api_instance = openapi_client.AppStoreVersionLocalizationsApi(api_client)
    id = 'id_example' # str | the id of the requested resource

    try:
        api_instance.app_store_version_localizations_delete_instance(id)
    except Exception as e:
        print("Exception when calling AppStoreVersionLocalizationsApi->app_store_version_localizations_delete_instance: %s\n" % e)
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

# **app_store_version_localizations_get_instance**
> AppStoreVersionLocalizationResponse app_store_version_localizations_get_instance(id, fields_app_store_version_localizations=fields_app_store_version_localizations, include=include, fields_app_screenshot_sets=fields_app_screenshot_sets, fields_app_preview_sets=fields_app_preview_sets, limit_app_preview_sets=limit_app_preview_sets, limit_app_screenshot_sets=limit_app_screenshot_sets)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.app_store_version_localization_response import AppStoreVersionLocalizationResponse
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
    api_instance = openapi_client.AppStoreVersionLocalizationsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    fields_app_store_version_localizations = ['fields_app_store_version_localizations_example'] # List[str] | the fields to include for returned resources of type appStoreVersionLocalizations (optional)
    include = ['include_example'] # List[str] | comma-separated list of relationships to include (optional)
    fields_app_screenshot_sets = ['fields_app_screenshot_sets_example'] # List[str] | the fields to include for returned resources of type appScreenshotSets (optional)
    fields_app_preview_sets = ['fields_app_preview_sets_example'] # List[str] | the fields to include for returned resources of type appPreviewSets (optional)
    limit_app_preview_sets = 56 # int | maximum number of related appPreviewSets returned (when they are included) (optional)
    limit_app_screenshot_sets = 56 # int | maximum number of related appScreenshotSets returned (when they are included) (optional)

    try:
        api_response = api_instance.app_store_version_localizations_get_instance(id, fields_app_store_version_localizations=fields_app_store_version_localizations, include=include, fields_app_screenshot_sets=fields_app_screenshot_sets, fields_app_preview_sets=fields_app_preview_sets, limit_app_preview_sets=limit_app_preview_sets, limit_app_screenshot_sets=limit_app_screenshot_sets)
        print("The response of AppStoreVersionLocalizationsApi->app_store_version_localizations_get_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppStoreVersionLocalizationsApi->app_store_version_localizations_get_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **fields_app_store_version_localizations** | [**List[str]**](str.md)| the fields to include for returned resources of type appStoreVersionLocalizations | [optional] 
 **include** | [**List[str]**](str.md)| comma-separated list of relationships to include | [optional] 
 **fields_app_screenshot_sets** | [**List[str]**](str.md)| the fields to include for returned resources of type appScreenshotSets | [optional] 
 **fields_app_preview_sets** | [**List[str]**](str.md)| the fields to include for returned resources of type appPreviewSets | [optional] 
 **limit_app_preview_sets** | **int**| maximum number of related appPreviewSets returned (when they are included) | [optional] 
 **limit_app_screenshot_sets** | **int**| maximum number of related appScreenshotSets returned (when they are included) | [optional] 

### Return type

[**AppStoreVersionLocalizationResponse**](AppStoreVersionLocalizationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Single AppStoreVersionLocalization |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_store_version_localizations_update_instance**
> AppStoreVersionLocalizationResponse app_store_version_localizations_update_instance(id, app_store_version_localization_update_request)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.app_store_version_localization_response import AppStoreVersionLocalizationResponse
from openapi_client.models.app_store_version_localization_update_request import AppStoreVersionLocalizationUpdateRequest
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
    api_instance = openapi_client.AppStoreVersionLocalizationsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    app_store_version_localization_update_request = openapi_client.AppStoreVersionLocalizationUpdateRequest() # AppStoreVersionLocalizationUpdateRequest | AppStoreVersionLocalization representation

    try:
        api_response = api_instance.app_store_version_localizations_update_instance(id, app_store_version_localization_update_request)
        print("The response of AppStoreVersionLocalizationsApi->app_store_version_localizations_update_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppStoreVersionLocalizationsApi->app_store_version_localizations_update_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **app_store_version_localization_update_request** | [**AppStoreVersionLocalizationUpdateRequest**](AppStoreVersionLocalizationUpdateRequest.md)| AppStoreVersionLocalization representation | 

### Return type

[**AppStoreVersionLocalizationResponse**](AppStoreVersionLocalizationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Single AppStoreVersionLocalization |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

