# openapi_client.BetaAppLocalizationsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**beta_app_localizations_app_get_to_one_related**](BetaAppLocalizationsApi.md#beta_app_localizations_app_get_to_one_related) | **GET** /v1/betaAppLocalizations/{id}/app | 
[**beta_app_localizations_create_instance**](BetaAppLocalizationsApi.md#beta_app_localizations_create_instance) | **POST** /v1/betaAppLocalizations | 
[**beta_app_localizations_delete_instance**](BetaAppLocalizationsApi.md#beta_app_localizations_delete_instance) | **DELETE** /v1/betaAppLocalizations/{id} | 
[**beta_app_localizations_get_collection**](BetaAppLocalizationsApi.md#beta_app_localizations_get_collection) | **GET** /v1/betaAppLocalizations | 
[**beta_app_localizations_get_instance**](BetaAppLocalizationsApi.md#beta_app_localizations_get_instance) | **GET** /v1/betaAppLocalizations/{id} | 
[**beta_app_localizations_update_instance**](BetaAppLocalizationsApi.md#beta_app_localizations_update_instance) | **PATCH** /v1/betaAppLocalizations/{id} | 


# **beta_app_localizations_app_get_to_one_related**
> AppResponse beta_app_localizations_app_get_to_one_related(id, fields_apps=fields_apps)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.app_response import AppResponse
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
    api_instance = openapi_client.BetaAppLocalizationsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    fields_apps = ['fields_apps_example'] # List[str] | the fields to include for returned resources of type apps (optional)

    try:
        api_response = api_instance.beta_app_localizations_app_get_to_one_related(id, fields_apps=fields_apps)
        print("The response of BetaAppLocalizationsApi->beta_app_localizations_app_get_to_one_related:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BetaAppLocalizationsApi->beta_app_localizations_app_get_to_one_related: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **fields_apps** | [**List[str]**](str.md)| the fields to include for returned resources of type apps | [optional] 

### Return type

[**AppResponse**](AppResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Related resource |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **beta_app_localizations_create_instance**
> BetaAppLocalizationResponse beta_app_localizations_create_instance(beta_app_localization_create_request)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.beta_app_localization_create_request import BetaAppLocalizationCreateRequest
from openapi_client.models.beta_app_localization_response import BetaAppLocalizationResponse
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
    api_instance = openapi_client.BetaAppLocalizationsApi(api_client)
    beta_app_localization_create_request = openapi_client.BetaAppLocalizationCreateRequest() # BetaAppLocalizationCreateRequest | BetaAppLocalization representation

    try:
        api_response = api_instance.beta_app_localizations_create_instance(beta_app_localization_create_request)
        print("The response of BetaAppLocalizationsApi->beta_app_localizations_create_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BetaAppLocalizationsApi->beta_app_localizations_create_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **beta_app_localization_create_request** | [**BetaAppLocalizationCreateRequest**](BetaAppLocalizationCreateRequest.md)| BetaAppLocalization representation | 

### Return type

[**BetaAppLocalizationResponse**](BetaAppLocalizationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Single BetaAppLocalization |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **beta_app_localizations_delete_instance**
> beta_app_localizations_delete_instance(id)



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
    api_instance = openapi_client.BetaAppLocalizationsApi(api_client)
    id = 'id_example' # str | the id of the requested resource

    try:
        api_instance.beta_app_localizations_delete_instance(id)
    except Exception as e:
        print("Exception when calling BetaAppLocalizationsApi->beta_app_localizations_delete_instance: %s\n" % e)
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

# **beta_app_localizations_get_collection**
> BetaAppLocalizationsResponse beta_app_localizations_get_collection(filter_locale=filter_locale, filter_app=filter_app, fields_beta_app_localizations=fields_beta_app_localizations, limit=limit, include=include, fields_apps=fields_apps)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.beta_app_localizations_response import BetaAppLocalizationsResponse
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
    api_instance = openapi_client.BetaAppLocalizationsApi(api_client)
    filter_locale = ['filter_locale_example'] # List[str] | filter by attribute 'locale' (optional)
    filter_app = ['filter_app_example'] # List[str] | filter by id(s) of related 'app' (optional)
    fields_beta_app_localizations = ['fields_beta_app_localizations_example'] # List[str] | the fields to include for returned resources of type betaAppLocalizations (optional)
    limit = 56 # int | maximum resources per page (optional)
    include = ['include_example'] # List[str] | comma-separated list of relationships to include (optional)
    fields_apps = ['fields_apps_example'] # List[str] | the fields to include for returned resources of type apps (optional)

    try:
        api_response = api_instance.beta_app_localizations_get_collection(filter_locale=filter_locale, filter_app=filter_app, fields_beta_app_localizations=fields_beta_app_localizations, limit=limit, include=include, fields_apps=fields_apps)
        print("The response of BetaAppLocalizationsApi->beta_app_localizations_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BetaAppLocalizationsApi->beta_app_localizations_get_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter_locale** | [**List[str]**](str.md)| filter by attribute &#39;locale&#39; | [optional] 
 **filter_app** | [**List[str]**](str.md)| filter by id(s) of related &#39;app&#39; | [optional] 
 **fields_beta_app_localizations** | [**List[str]**](str.md)| the fields to include for returned resources of type betaAppLocalizations | [optional] 
 **limit** | **int**| maximum resources per page | [optional] 
 **include** | [**List[str]**](str.md)| comma-separated list of relationships to include | [optional] 
 **fields_apps** | [**List[str]**](str.md)| the fields to include for returned resources of type apps | [optional] 

### Return type

[**BetaAppLocalizationsResponse**](BetaAppLocalizationsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of BetaAppLocalizations |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **beta_app_localizations_get_instance**
> BetaAppLocalizationResponse beta_app_localizations_get_instance(id, fields_beta_app_localizations=fields_beta_app_localizations, include=include, fields_apps=fields_apps)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.beta_app_localization_response import BetaAppLocalizationResponse
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
    api_instance = openapi_client.BetaAppLocalizationsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    fields_beta_app_localizations = ['fields_beta_app_localizations_example'] # List[str] | the fields to include for returned resources of type betaAppLocalizations (optional)
    include = ['include_example'] # List[str] | comma-separated list of relationships to include (optional)
    fields_apps = ['fields_apps_example'] # List[str] | the fields to include for returned resources of type apps (optional)

    try:
        api_response = api_instance.beta_app_localizations_get_instance(id, fields_beta_app_localizations=fields_beta_app_localizations, include=include, fields_apps=fields_apps)
        print("The response of BetaAppLocalizationsApi->beta_app_localizations_get_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BetaAppLocalizationsApi->beta_app_localizations_get_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **fields_beta_app_localizations** | [**List[str]**](str.md)| the fields to include for returned resources of type betaAppLocalizations | [optional] 
 **include** | [**List[str]**](str.md)| comma-separated list of relationships to include | [optional] 
 **fields_apps** | [**List[str]**](str.md)| the fields to include for returned resources of type apps | [optional] 

### Return type

[**BetaAppLocalizationResponse**](BetaAppLocalizationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Single BetaAppLocalization |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **beta_app_localizations_update_instance**
> BetaAppLocalizationResponse beta_app_localizations_update_instance(id, beta_app_localization_update_request)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.beta_app_localization_response import BetaAppLocalizationResponse
from openapi_client.models.beta_app_localization_update_request import BetaAppLocalizationUpdateRequest
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
    api_instance = openapi_client.BetaAppLocalizationsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    beta_app_localization_update_request = openapi_client.BetaAppLocalizationUpdateRequest() # BetaAppLocalizationUpdateRequest | BetaAppLocalization representation

    try:
        api_response = api_instance.beta_app_localizations_update_instance(id, beta_app_localization_update_request)
        print("The response of BetaAppLocalizationsApi->beta_app_localizations_update_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BetaAppLocalizationsApi->beta_app_localizations_update_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **beta_app_localization_update_request** | [**BetaAppLocalizationUpdateRequest**](BetaAppLocalizationUpdateRequest.md)| BetaAppLocalization representation | 

### Return type

[**BetaAppLocalizationResponse**](BetaAppLocalizationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Single BetaAppLocalization |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

