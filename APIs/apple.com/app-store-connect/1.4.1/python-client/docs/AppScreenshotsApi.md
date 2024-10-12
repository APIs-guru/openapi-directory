# openapi_client.AppScreenshotsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**app_screenshots_create_instance**](AppScreenshotsApi.md#app_screenshots_create_instance) | **POST** /v1/appScreenshots | 
[**app_screenshots_delete_instance**](AppScreenshotsApi.md#app_screenshots_delete_instance) | **DELETE** /v1/appScreenshots/{id} | 
[**app_screenshots_get_instance**](AppScreenshotsApi.md#app_screenshots_get_instance) | **GET** /v1/appScreenshots/{id} | 
[**app_screenshots_update_instance**](AppScreenshotsApi.md#app_screenshots_update_instance) | **PATCH** /v1/appScreenshots/{id} | 


# **app_screenshots_create_instance**
> AppScreenshotResponse app_screenshots_create_instance(app_screenshot_create_request)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.app_screenshot_create_request import AppScreenshotCreateRequest
from openapi_client.models.app_screenshot_response import AppScreenshotResponse
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
    api_instance = openapi_client.AppScreenshotsApi(api_client)
    app_screenshot_create_request = openapi_client.AppScreenshotCreateRequest() # AppScreenshotCreateRequest | AppScreenshot representation

    try:
        api_response = api_instance.app_screenshots_create_instance(app_screenshot_create_request)
        print("The response of AppScreenshotsApi->app_screenshots_create_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppScreenshotsApi->app_screenshots_create_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_screenshot_create_request** | [**AppScreenshotCreateRequest**](AppScreenshotCreateRequest.md)| AppScreenshot representation | 

### Return type

[**AppScreenshotResponse**](AppScreenshotResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Single AppScreenshot |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_screenshots_delete_instance**
> app_screenshots_delete_instance(id)



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
    api_instance = openapi_client.AppScreenshotsApi(api_client)
    id = 'id_example' # str | the id of the requested resource

    try:
        api_instance.app_screenshots_delete_instance(id)
    except Exception as e:
        print("Exception when calling AppScreenshotsApi->app_screenshots_delete_instance: %s\n" % e)
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

# **app_screenshots_get_instance**
> AppScreenshotResponse app_screenshots_get_instance(id, fields_app_screenshots=fields_app_screenshots, include=include)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.app_screenshot_response import AppScreenshotResponse
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
    api_instance = openapi_client.AppScreenshotsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    fields_app_screenshots = ['fields_app_screenshots_example'] # List[str] | the fields to include for returned resources of type appScreenshots (optional)
    include = ['include_example'] # List[str] | comma-separated list of relationships to include (optional)

    try:
        api_response = api_instance.app_screenshots_get_instance(id, fields_app_screenshots=fields_app_screenshots, include=include)
        print("The response of AppScreenshotsApi->app_screenshots_get_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppScreenshotsApi->app_screenshots_get_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **fields_app_screenshots** | [**List[str]**](str.md)| the fields to include for returned resources of type appScreenshots | [optional] 
 **include** | [**List[str]**](str.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**AppScreenshotResponse**](AppScreenshotResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Single AppScreenshot |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_screenshots_update_instance**
> AppScreenshotResponse app_screenshots_update_instance(id, app_screenshot_update_request)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.app_screenshot_response import AppScreenshotResponse
from openapi_client.models.app_screenshot_update_request import AppScreenshotUpdateRequest
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
    api_instance = openapi_client.AppScreenshotsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    app_screenshot_update_request = openapi_client.AppScreenshotUpdateRequest() # AppScreenshotUpdateRequest | AppScreenshot representation

    try:
        api_response = api_instance.app_screenshots_update_instance(id, app_screenshot_update_request)
        print("The response of AppScreenshotsApi->app_screenshots_update_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppScreenshotsApi->app_screenshots_update_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **app_screenshot_update_request** | [**AppScreenshotUpdateRequest**](AppScreenshotUpdateRequest.md)| AppScreenshot representation | 

### Return type

[**AppScreenshotResponse**](AppScreenshotResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Single AppScreenshot |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

