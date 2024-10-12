# openapi_client.AppScreenshotSetsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**app_screenshot_sets_app_screenshots_get_to_many_related**](AppScreenshotSetsApi.md#app_screenshot_sets_app_screenshots_get_to_many_related) | **GET** /v1/appScreenshotSets/{id}/appScreenshots | 
[**app_screenshot_sets_app_screenshots_get_to_many_relationship**](AppScreenshotSetsApi.md#app_screenshot_sets_app_screenshots_get_to_many_relationship) | **GET** /v1/appScreenshotSets/{id}/relationships/appScreenshots | 
[**app_screenshot_sets_app_screenshots_replace_to_many_relationship**](AppScreenshotSetsApi.md#app_screenshot_sets_app_screenshots_replace_to_many_relationship) | **PATCH** /v1/appScreenshotSets/{id}/relationships/appScreenshots | 
[**app_screenshot_sets_create_instance**](AppScreenshotSetsApi.md#app_screenshot_sets_create_instance) | **POST** /v1/appScreenshotSets | 
[**app_screenshot_sets_delete_instance**](AppScreenshotSetsApi.md#app_screenshot_sets_delete_instance) | **DELETE** /v1/appScreenshotSets/{id} | 
[**app_screenshot_sets_get_instance**](AppScreenshotSetsApi.md#app_screenshot_sets_get_instance) | **GET** /v1/appScreenshotSets/{id} | 


# **app_screenshot_sets_app_screenshots_get_to_many_related**
> AppScreenshotsResponse app_screenshot_sets_app_screenshots_get_to_many_related(id, fields_app_screenshot_sets=fields_app_screenshot_sets, fields_app_screenshots=fields_app_screenshots, limit=limit, include=include)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.app_screenshots_response import AppScreenshotsResponse
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
    api_instance = openapi_client.AppScreenshotSetsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    fields_app_screenshot_sets = ['fields_app_screenshot_sets_example'] # List[str] | the fields to include for returned resources of type appScreenshotSets (optional)
    fields_app_screenshots = ['fields_app_screenshots_example'] # List[str] | the fields to include for returned resources of type appScreenshots (optional)
    limit = 56 # int | maximum resources per page (optional)
    include = ['include_example'] # List[str] | comma-separated list of relationships to include (optional)

    try:
        api_response = api_instance.app_screenshot_sets_app_screenshots_get_to_many_related(id, fields_app_screenshot_sets=fields_app_screenshot_sets, fields_app_screenshots=fields_app_screenshots, limit=limit, include=include)
        print("The response of AppScreenshotSetsApi->app_screenshot_sets_app_screenshots_get_to_many_related:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppScreenshotSetsApi->app_screenshot_sets_app_screenshots_get_to_many_related: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **fields_app_screenshot_sets** | [**List[str]**](str.md)| the fields to include for returned resources of type appScreenshotSets | [optional] 
 **fields_app_screenshots** | [**List[str]**](str.md)| the fields to include for returned resources of type appScreenshots | [optional] 
 **limit** | **int**| maximum resources per page | [optional] 
 **include** | [**List[str]**](str.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**AppScreenshotsResponse**](AppScreenshotsResponse.md)

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

# **app_screenshot_sets_app_screenshots_get_to_many_relationship**
> AppScreenshotSetAppScreenshotsLinkagesResponse app_screenshot_sets_app_screenshots_get_to_many_relationship(id, limit=limit)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.app_screenshot_set_app_screenshots_linkages_response import AppScreenshotSetAppScreenshotsLinkagesResponse
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
    api_instance = openapi_client.AppScreenshotSetsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    limit = 56 # int | maximum resources per page (optional)

    try:
        api_response = api_instance.app_screenshot_sets_app_screenshots_get_to_many_relationship(id, limit=limit)
        print("The response of AppScreenshotSetsApi->app_screenshot_sets_app_screenshots_get_to_many_relationship:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppScreenshotSetsApi->app_screenshot_sets_app_screenshots_get_to_many_relationship: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **limit** | **int**| maximum resources per page | [optional] 

### Return type

[**AppScreenshotSetAppScreenshotsLinkagesResponse**](AppScreenshotSetAppScreenshotsLinkagesResponse.md)

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

# **app_screenshot_sets_app_screenshots_replace_to_many_relationship**
> app_screenshot_sets_app_screenshots_replace_to_many_relationship(id, app_screenshot_set_app_screenshots_linkages_request)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.app_screenshot_set_app_screenshots_linkages_request import AppScreenshotSetAppScreenshotsLinkagesRequest
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
    api_instance = openapi_client.AppScreenshotSetsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    app_screenshot_set_app_screenshots_linkages_request = openapi_client.AppScreenshotSetAppScreenshotsLinkagesRequest() # AppScreenshotSetAppScreenshotsLinkagesRequest | List of related linkages

    try:
        api_instance.app_screenshot_sets_app_screenshots_replace_to_many_relationship(id, app_screenshot_set_app_screenshots_linkages_request)
    except Exception as e:
        print("Exception when calling AppScreenshotSetsApi->app_screenshot_sets_app_screenshots_replace_to_many_relationship: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **app_screenshot_set_app_screenshots_linkages_request** | [**AppScreenshotSetAppScreenshotsLinkagesRequest**](AppScreenshotSetAppScreenshotsLinkagesRequest.md)| List of related linkages | 

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

# **app_screenshot_sets_create_instance**
> AppScreenshotSetResponse app_screenshot_sets_create_instance(app_screenshot_set_create_request)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.app_screenshot_set_create_request import AppScreenshotSetCreateRequest
from openapi_client.models.app_screenshot_set_response import AppScreenshotSetResponse
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
    api_instance = openapi_client.AppScreenshotSetsApi(api_client)
    app_screenshot_set_create_request = openapi_client.AppScreenshotSetCreateRequest() # AppScreenshotSetCreateRequest | AppScreenshotSet representation

    try:
        api_response = api_instance.app_screenshot_sets_create_instance(app_screenshot_set_create_request)
        print("The response of AppScreenshotSetsApi->app_screenshot_sets_create_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppScreenshotSetsApi->app_screenshot_sets_create_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_screenshot_set_create_request** | [**AppScreenshotSetCreateRequest**](AppScreenshotSetCreateRequest.md)| AppScreenshotSet representation | 

### Return type

[**AppScreenshotSetResponse**](AppScreenshotSetResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Single AppScreenshotSet |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_screenshot_sets_delete_instance**
> app_screenshot_sets_delete_instance(id)



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
    api_instance = openapi_client.AppScreenshotSetsApi(api_client)
    id = 'id_example' # str | the id of the requested resource

    try:
        api_instance.app_screenshot_sets_delete_instance(id)
    except Exception as e:
        print("Exception when calling AppScreenshotSetsApi->app_screenshot_sets_delete_instance: %s\n" % e)
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

# **app_screenshot_sets_get_instance**
> AppScreenshotSetResponse app_screenshot_sets_get_instance(id, fields_app_screenshot_sets=fields_app_screenshot_sets, include=include, fields_app_screenshots=fields_app_screenshots, limit_app_screenshots=limit_app_screenshots)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.app_screenshot_set_response import AppScreenshotSetResponse
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
    api_instance = openapi_client.AppScreenshotSetsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    fields_app_screenshot_sets = ['fields_app_screenshot_sets_example'] # List[str] | the fields to include for returned resources of type appScreenshotSets (optional)
    include = ['include_example'] # List[str] | comma-separated list of relationships to include (optional)
    fields_app_screenshots = ['fields_app_screenshots_example'] # List[str] | the fields to include for returned resources of type appScreenshots (optional)
    limit_app_screenshots = 56 # int | maximum number of related appScreenshots returned (when they are included) (optional)

    try:
        api_response = api_instance.app_screenshot_sets_get_instance(id, fields_app_screenshot_sets=fields_app_screenshot_sets, include=include, fields_app_screenshots=fields_app_screenshots, limit_app_screenshots=limit_app_screenshots)
        print("The response of AppScreenshotSetsApi->app_screenshot_sets_get_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppScreenshotSetsApi->app_screenshot_sets_get_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **fields_app_screenshot_sets** | [**List[str]**](str.md)| the fields to include for returned resources of type appScreenshotSets | [optional] 
 **include** | [**List[str]**](str.md)| comma-separated list of relationships to include | [optional] 
 **fields_app_screenshots** | [**List[str]**](str.md)| the fields to include for returned resources of type appScreenshots | [optional] 
 **limit_app_screenshots** | **int**| maximum number of related appScreenshots returned (when they are included) | [optional] 

### Return type

[**AppScreenshotSetResponse**](AppScreenshotSetResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Single AppScreenshotSet |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

