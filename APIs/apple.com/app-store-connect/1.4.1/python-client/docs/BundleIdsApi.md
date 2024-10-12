# openapi_client.BundleIdsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bundle_ids_app_get_to_one_related**](BundleIdsApi.md#bundle_ids_app_get_to_one_related) | **GET** /v1/bundleIds/{id}/app | 
[**bundle_ids_bundle_id_capabilities_get_to_many_related**](BundleIdsApi.md#bundle_ids_bundle_id_capabilities_get_to_many_related) | **GET** /v1/bundleIds/{id}/bundleIdCapabilities | 
[**bundle_ids_create_instance**](BundleIdsApi.md#bundle_ids_create_instance) | **POST** /v1/bundleIds | 
[**bundle_ids_delete_instance**](BundleIdsApi.md#bundle_ids_delete_instance) | **DELETE** /v1/bundleIds/{id} | 
[**bundle_ids_get_collection**](BundleIdsApi.md#bundle_ids_get_collection) | **GET** /v1/bundleIds | 
[**bundle_ids_get_instance**](BundleIdsApi.md#bundle_ids_get_instance) | **GET** /v1/bundleIds/{id} | 
[**bundle_ids_profiles_get_to_many_related**](BundleIdsApi.md#bundle_ids_profiles_get_to_many_related) | **GET** /v1/bundleIds/{id}/profiles | 
[**bundle_ids_update_instance**](BundleIdsApi.md#bundle_ids_update_instance) | **PATCH** /v1/bundleIds/{id} | 


# **bundle_ids_app_get_to_one_related**
> AppResponse bundle_ids_app_get_to_one_related(id, fields_apps=fields_apps)



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
    api_instance = openapi_client.BundleIdsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    fields_apps = ['fields_apps_example'] # List[str] | the fields to include for returned resources of type apps (optional)

    try:
        api_response = api_instance.bundle_ids_app_get_to_one_related(id, fields_apps=fields_apps)
        print("The response of BundleIdsApi->bundle_ids_app_get_to_one_related:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BundleIdsApi->bundle_ids_app_get_to_one_related: %s\n" % e)
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

# **bundle_ids_bundle_id_capabilities_get_to_many_related**
> BundleIdCapabilitiesResponse bundle_ids_bundle_id_capabilities_get_to_many_related(id, fields_bundle_id_capabilities=fields_bundle_id_capabilities, limit=limit)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.bundle_id_capabilities_response import BundleIdCapabilitiesResponse
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
    api_instance = openapi_client.BundleIdsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    fields_bundle_id_capabilities = ['fields_bundle_id_capabilities_example'] # List[str] | the fields to include for returned resources of type bundleIdCapabilities (optional)
    limit = 56 # int | maximum resources per page (optional)

    try:
        api_response = api_instance.bundle_ids_bundle_id_capabilities_get_to_many_related(id, fields_bundle_id_capabilities=fields_bundle_id_capabilities, limit=limit)
        print("The response of BundleIdsApi->bundle_ids_bundle_id_capabilities_get_to_many_related:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BundleIdsApi->bundle_ids_bundle_id_capabilities_get_to_many_related: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **fields_bundle_id_capabilities** | [**List[str]**](str.md)| the fields to include for returned resources of type bundleIdCapabilities | [optional] 
 **limit** | **int**| maximum resources per page | [optional] 

### Return type

[**BundleIdCapabilitiesResponse**](BundleIdCapabilitiesResponse.md)

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

# **bundle_ids_create_instance**
> BundleIdResponse bundle_ids_create_instance(bundle_id_create_request)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.bundle_id_create_request import BundleIdCreateRequest
from openapi_client.models.bundle_id_response import BundleIdResponse
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
    api_instance = openapi_client.BundleIdsApi(api_client)
    bundle_id_create_request = openapi_client.BundleIdCreateRequest() # BundleIdCreateRequest | BundleId representation

    try:
        api_response = api_instance.bundle_ids_create_instance(bundle_id_create_request)
        print("The response of BundleIdsApi->bundle_ids_create_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BundleIdsApi->bundle_ids_create_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bundle_id_create_request** | [**BundleIdCreateRequest**](BundleIdCreateRequest.md)| BundleId representation | 

### Return type

[**BundleIdResponse**](BundleIdResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Single BundleId |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bundle_ids_delete_instance**
> bundle_ids_delete_instance(id)



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
    api_instance = openapi_client.BundleIdsApi(api_client)
    id = 'id_example' # str | the id of the requested resource

    try:
        api_instance.bundle_ids_delete_instance(id)
    except Exception as e:
        print("Exception when calling BundleIdsApi->bundle_ids_delete_instance: %s\n" % e)
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

# **bundle_ids_get_collection**
> BundleIdsResponse bundle_ids_get_collection(filter_identifier=filter_identifier, filter_name=filter_name, filter_platform=filter_platform, filter_seed_id=filter_seed_id, filter_id=filter_id, sort=sort, fields_bundle_ids=fields_bundle_ids, limit=limit, include=include, fields_bundle_id_capabilities=fields_bundle_id_capabilities, fields_profiles=fields_profiles, fields_apps=fields_apps, limit_bundle_id_capabilities=limit_bundle_id_capabilities, limit_profiles=limit_profiles)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.bundle_ids_response import BundleIdsResponse
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
    api_instance = openapi_client.BundleIdsApi(api_client)
    filter_identifier = ['filter_identifier_example'] # List[str] | filter by attribute 'identifier' (optional)
    filter_name = ['filter_name_example'] # List[str] | filter by attribute 'name' (optional)
    filter_platform = ['filter_platform_example'] # List[str] | filter by attribute 'platform' (optional)
    filter_seed_id = ['filter_seed_id_example'] # List[str] | filter by attribute 'seedId' (optional)
    filter_id = ['filter_id_example'] # List[str] | filter by id(s) (optional)
    sort = ['sort_example'] # List[str] | comma-separated list of sort expressions; resources will be sorted as specified (optional)
    fields_bundle_ids = ['fields_bundle_ids_example'] # List[str] | the fields to include for returned resources of type bundleIds (optional)
    limit = 56 # int | maximum resources per page (optional)
    include = ['include_example'] # List[str] | comma-separated list of relationships to include (optional)
    fields_bundle_id_capabilities = ['fields_bundle_id_capabilities_example'] # List[str] | the fields to include for returned resources of type bundleIdCapabilities (optional)
    fields_profiles = ['fields_profiles_example'] # List[str] | the fields to include for returned resources of type profiles (optional)
    fields_apps = ['fields_apps_example'] # List[str] | the fields to include for returned resources of type apps (optional)
    limit_bundle_id_capabilities = 56 # int | maximum number of related bundleIdCapabilities returned (when they are included) (optional)
    limit_profiles = 56 # int | maximum number of related profiles returned (when they are included) (optional)

    try:
        api_response = api_instance.bundle_ids_get_collection(filter_identifier=filter_identifier, filter_name=filter_name, filter_platform=filter_platform, filter_seed_id=filter_seed_id, filter_id=filter_id, sort=sort, fields_bundle_ids=fields_bundle_ids, limit=limit, include=include, fields_bundle_id_capabilities=fields_bundle_id_capabilities, fields_profiles=fields_profiles, fields_apps=fields_apps, limit_bundle_id_capabilities=limit_bundle_id_capabilities, limit_profiles=limit_profiles)
        print("The response of BundleIdsApi->bundle_ids_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BundleIdsApi->bundle_ids_get_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter_identifier** | [**List[str]**](str.md)| filter by attribute &#39;identifier&#39; | [optional] 
 **filter_name** | [**List[str]**](str.md)| filter by attribute &#39;name&#39; | [optional] 
 **filter_platform** | [**List[str]**](str.md)| filter by attribute &#39;platform&#39; | [optional] 
 **filter_seed_id** | [**List[str]**](str.md)| filter by attribute &#39;seedId&#39; | [optional] 
 **filter_id** | [**List[str]**](str.md)| filter by id(s) | [optional] 
 **sort** | [**List[str]**](str.md)| comma-separated list of sort expressions; resources will be sorted as specified | [optional] 
 **fields_bundle_ids** | [**List[str]**](str.md)| the fields to include for returned resources of type bundleIds | [optional] 
 **limit** | **int**| maximum resources per page | [optional] 
 **include** | [**List[str]**](str.md)| comma-separated list of relationships to include | [optional] 
 **fields_bundle_id_capabilities** | [**List[str]**](str.md)| the fields to include for returned resources of type bundleIdCapabilities | [optional] 
 **fields_profiles** | [**List[str]**](str.md)| the fields to include for returned resources of type profiles | [optional] 
 **fields_apps** | [**List[str]**](str.md)| the fields to include for returned resources of type apps | [optional] 
 **limit_bundle_id_capabilities** | **int**| maximum number of related bundleIdCapabilities returned (when they are included) | [optional] 
 **limit_profiles** | **int**| maximum number of related profiles returned (when they are included) | [optional] 

### Return type

[**BundleIdsResponse**](BundleIdsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of BundleIds |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bundle_ids_get_instance**
> BundleIdResponse bundle_ids_get_instance(id, fields_bundle_ids=fields_bundle_ids, include=include, fields_bundle_id_capabilities=fields_bundle_id_capabilities, fields_profiles=fields_profiles, fields_apps=fields_apps, limit_bundle_id_capabilities=limit_bundle_id_capabilities, limit_profiles=limit_profiles)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.bundle_id_response import BundleIdResponse
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
    api_instance = openapi_client.BundleIdsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    fields_bundle_ids = ['fields_bundle_ids_example'] # List[str] | the fields to include for returned resources of type bundleIds (optional)
    include = ['include_example'] # List[str] | comma-separated list of relationships to include (optional)
    fields_bundle_id_capabilities = ['fields_bundle_id_capabilities_example'] # List[str] | the fields to include for returned resources of type bundleIdCapabilities (optional)
    fields_profiles = ['fields_profiles_example'] # List[str] | the fields to include for returned resources of type profiles (optional)
    fields_apps = ['fields_apps_example'] # List[str] | the fields to include for returned resources of type apps (optional)
    limit_bundle_id_capabilities = 56 # int | maximum number of related bundleIdCapabilities returned (when they are included) (optional)
    limit_profiles = 56 # int | maximum number of related profiles returned (when they are included) (optional)

    try:
        api_response = api_instance.bundle_ids_get_instance(id, fields_bundle_ids=fields_bundle_ids, include=include, fields_bundle_id_capabilities=fields_bundle_id_capabilities, fields_profiles=fields_profiles, fields_apps=fields_apps, limit_bundle_id_capabilities=limit_bundle_id_capabilities, limit_profiles=limit_profiles)
        print("The response of BundleIdsApi->bundle_ids_get_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BundleIdsApi->bundle_ids_get_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **fields_bundle_ids** | [**List[str]**](str.md)| the fields to include for returned resources of type bundleIds | [optional] 
 **include** | [**List[str]**](str.md)| comma-separated list of relationships to include | [optional] 
 **fields_bundle_id_capabilities** | [**List[str]**](str.md)| the fields to include for returned resources of type bundleIdCapabilities | [optional] 
 **fields_profiles** | [**List[str]**](str.md)| the fields to include for returned resources of type profiles | [optional] 
 **fields_apps** | [**List[str]**](str.md)| the fields to include for returned resources of type apps | [optional] 
 **limit_bundle_id_capabilities** | **int**| maximum number of related bundleIdCapabilities returned (when they are included) | [optional] 
 **limit_profiles** | **int**| maximum number of related profiles returned (when they are included) | [optional] 

### Return type

[**BundleIdResponse**](BundleIdResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Single BundleId |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bundle_ids_profiles_get_to_many_related**
> ProfilesResponse bundle_ids_profiles_get_to_many_related(id, fields_profiles=fields_profiles, limit=limit)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.profiles_response import ProfilesResponse
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
    api_instance = openapi_client.BundleIdsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    fields_profiles = ['fields_profiles_example'] # List[str] | the fields to include for returned resources of type profiles (optional)
    limit = 56 # int | maximum resources per page (optional)

    try:
        api_response = api_instance.bundle_ids_profiles_get_to_many_related(id, fields_profiles=fields_profiles, limit=limit)
        print("The response of BundleIdsApi->bundle_ids_profiles_get_to_many_related:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BundleIdsApi->bundle_ids_profiles_get_to_many_related: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **fields_profiles** | [**List[str]**](str.md)| the fields to include for returned resources of type profiles | [optional] 
 **limit** | **int**| maximum resources per page | [optional] 

### Return type

[**ProfilesResponse**](ProfilesResponse.md)

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

# **bundle_ids_update_instance**
> BundleIdResponse bundle_ids_update_instance(id, bundle_id_update_request)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.bundle_id_response import BundleIdResponse
from openapi_client.models.bundle_id_update_request import BundleIdUpdateRequest
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
    api_instance = openapi_client.BundleIdsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    bundle_id_update_request = openapi_client.BundleIdUpdateRequest() # BundleIdUpdateRequest | BundleId representation

    try:
        api_response = api_instance.bundle_ids_update_instance(id, bundle_id_update_request)
        print("The response of BundleIdsApi->bundle_ids_update_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BundleIdsApi->bundle_ids_update_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **bundle_id_update_request** | [**BundleIdUpdateRequest**](BundleIdUpdateRequest.md)| BundleId representation | 

### Return type

[**BundleIdResponse**](BundleIdResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Single BundleId |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

