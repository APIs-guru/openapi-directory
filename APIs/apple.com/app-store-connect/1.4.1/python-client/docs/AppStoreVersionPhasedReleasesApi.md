# openapi_client.AppStoreVersionPhasedReleasesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**app_store_version_phased_releases_create_instance**](AppStoreVersionPhasedReleasesApi.md#app_store_version_phased_releases_create_instance) | **POST** /v1/appStoreVersionPhasedReleases | 
[**app_store_version_phased_releases_delete_instance**](AppStoreVersionPhasedReleasesApi.md#app_store_version_phased_releases_delete_instance) | **DELETE** /v1/appStoreVersionPhasedReleases/{id} | 
[**app_store_version_phased_releases_update_instance**](AppStoreVersionPhasedReleasesApi.md#app_store_version_phased_releases_update_instance) | **PATCH** /v1/appStoreVersionPhasedReleases/{id} | 


# **app_store_version_phased_releases_create_instance**
> AppStoreVersionPhasedReleaseResponse app_store_version_phased_releases_create_instance(app_store_version_phased_release_create_request)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.app_store_version_phased_release_create_request import AppStoreVersionPhasedReleaseCreateRequest
from openapi_client.models.app_store_version_phased_release_response import AppStoreVersionPhasedReleaseResponse
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
    api_instance = openapi_client.AppStoreVersionPhasedReleasesApi(api_client)
    app_store_version_phased_release_create_request = openapi_client.AppStoreVersionPhasedReleaseCreateRequest() # AppStoreVersionPhasedReleaseCreateRequest | AppStoreVersionPhasedRelease representation

    try:
        api_response = api_instance.app_store_version_phased_releases_create_instance(app_store_version_phased_release_create_request)
        print("The response of AppStoreVersionPhasedReleasesApi->app_store_version_phased_releases_create_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppStoreVersionPhasedReleasesApi->app_store_version_phased_releases_create_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_store_version_phased_release_create_request** | [**AppStoreVersionPhasedReleaseCreateRequest**](AppStoreVersionPhasedReleaseCreateRequest.md)| AppStoreVersionPhasedRelease representation | 

### Return type

[**AppStoreVersionPhasedReleaseResponse**](AppStoreVersionPhasedReleaseResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Single AppStoreVersionPhasedRelease |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_store_version_phased_releases_delete_instance**
> app_store_version_phased_releases_delete_instance(id)



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
    api_instance = openapi_client.AppStoreVersionPhasedReleasesApi(api_client)
    id = 'id_example' # str | the id of the requested resource

    try:
        api_instance.app_store_version_phased_releases_delete_instance(id)
    except Exception as e:
        print("Exception when calling AppStoreVersionPhasedReleasesApi->app_store_version_phased_releases_delete_instance: %s\n" % e)
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

# **app_store_version_phased_releases_update_instance**
> AppStoreVersionPhasedReleaseResponse app_store_version_phased_releases_update_instance(id, app_store_version_phased_release_update_request)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.app_store_version_phased_release_response import AppStoreVersionPhasedReleaseResponse
from openapi_client.models.app_store_version_phased_release_update_request import AppStoreVersionPhasedReleaseUpdateRequest
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
    api_instance = openapi_client.AppStoreVersionPhasedReleasesApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    app_store_version_phased_release_update_request = openapi_client.AppStoreVersionPhasedReleaseUpdateRequest() # AppStoreVersionPhasedReleaseUpdateRequest | AppStoreVersionPhasedRelease representation

    try:
        api_response = api_instance.app_store_version_phased_releases_update_instance(id, app_store_version_phased_release_update_request)
        print("The response of AppStoreVersionPhasedReleasesApi->app_store_version_phased_releases_update_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppStoreVersionPhasedReleasesApi->app_store_version_phased_releases_update_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **app_store_version_phased_release_update_request** | [**AppStoreVersionPhasedReleaseUpdateRequest**](AppStoreVersionPhasedReleaseUpdateRequest.md)| AppStoreVersionPhasedRelease representation | 

### Return type

[**AppStoreVersionPhasedReleaseResponse**](AppStoreVersionPhasedReleaseResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Single AppStoreVersionPhasedRelease |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

