# openapi_client.AppInfoLocalizationsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**app_info_localizations_create_instance**](AppInfoLocalizationsApi.md#app_info_localizations_create_instance) | **POST** /v1/appInfoLocalizations | 
[**app_info_localizations_delete_instance**](AppInfoLocalizationsApi.md#app_info_localizations_delete_instance) | **DELETE** /v1/appInfoLocalizations/{id} | 
[**app_info_localizations_get_instance**](AppInfoLocalizationsApi.md#app_info_localizations_get_instance) | **GET** /v1/appInfoLocalizations/{id} | 
[**app_info_localizations_update_instance**](AppInfoLocalizationsApi.md#app_info_localizations_update_instance) | **PATCH** /v1/appInfoLocalizations/{id} | 


# **app_info_localizations_create_instance**
> AppInfoLocalizationResponse app_info_localizations_create_instance(app_info_localization_create_request)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.app_info_localization_create_request import AppInfoLocalizationCreateRequest
from openapi_client.models.app_info_localization_response import AppInfoLocalizationResponse
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
    api_instance = openapi_client.AppInfoLocalizationsApi(api_client)
    app_info_localization_create_request = openapi_client.AppInfoLocalizationCreateRequest() # AppInfoLocalizationCreateRequest | AppInfoLocalization representation

    try:
        api_response = api_instance.app_info_localizations_create_instance(app_info_localization_create_request)
        print("The response of AppInfoLocalizationsApi->app_info_localizations_create_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppInfoLocalizationsApi->app_info_localizations_create_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_info_localization_create_request** | [**AppInfoLocalizationCreateRequest**](AppInfoLocalizationCreateRequest.md)| AppInfoLocalization representation | 

### Return type

[**AppInfoLocalizationResponse**](AppInfoLocalizationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Single AppInfoLocalization |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_info_localizations_delete_instance**
> app_info_localizations_delete_instance(id)



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
    api_instance = openapi_client.AppInfoLocalizationsApi(api_client)
    id = 'id_example' # str | the id of the requested resource

    try:
        api_instance.app_info_localizations_delete_instance(id)
    except Exception as e:
        print("Exception when calling AppInfoLocalizationsApi->app_info_localizations_delete_instance: %s\n" % e)
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

# **app_info_localizations_get_instance**
> AppInfoLocalizationResponse app_info_localizations_get_instance(id, fields_app_info_localizations=fields_app_info_localizations, include=include)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.app_info_localization_response import AppInfoLocalizationResponse
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
    api_instance = openapi_client.AppInfoLocalizationsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    fields_app_info_localizations = ['fields_app_info_localizations_example'] # List[str] | the fields to include for returned resources of type appInfoLocalizations (optional)
    include = ['include_example'] # List[str] | comma-separated list of relationships to include (optional)

    try:
        api_response = api_instance.app_info_localizations_get_instance(id, fields_app_info_localizations=fields_app_info_localizations, include=include)
        print("The response of AppInfoLocalizationsApi->app_info_localizations_get_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppInfoLocalizationsApi->app_info_localizations_get_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **fields_app_info_localizations** | [**List[str]**](str.md)| the fields to include for returned resources of type appInfoLocalizations | [optional] 
 **include** | [**List[str]**](str.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**AppInfoLocalizationResponse**](AppInfoLocalizationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Single AppInfoLocalization |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_info_localizations_update_instance**
> AppInfoLocalizationResponse app_info_localizations_update_instance(id, app_info_localization_update_request)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.app_info_localization_response import AppInfoLocalizationResponse
from openapi_client.models.app_info_localization_update_request import AppInfoLocalizationUpdateRequest
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
    api_instance = openapi_client.AppInfoLocalizationsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    app_info_localization_update_request = openapi_client.AppInfoLocalizationUpdateRequest() # AppInfoLocalizationUpdateRequest | AppInfoLocalization representation

    try:
        api_response = api_instance.app_info_localizations_update_instance(id, app_info_localization_update_request)
        print("The response of AppInfoLocalizationsApi->app_info_localizations_update_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppInfoLocalizationsApi->app_info_localizations_update_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **app_info_localization_update_request** | [**AppInfoLocalizationUpdateRequest**](AppInfoLocalizationUpdateRequest.md)| AppInfoLocalization representation | 

### Return type

[**AppInfoLocalizationResponse**](AppInfoLocalizationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Single AppInfoLocalization |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

