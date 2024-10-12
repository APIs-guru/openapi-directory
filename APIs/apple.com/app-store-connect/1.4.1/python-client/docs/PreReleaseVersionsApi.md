# openapi_client.PreReleaseVersionsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**pre_release_versions_app_get_to_one_related**](PreReleaseVersionsApi.md#pre_release_versions_app_get_to_one_related) | **GET** /v1/preReleaseVersions/{id}/app | 
[**pre_release_versions_builds_get_to_many_related**](PreReleaseVersionsApi.md#pre_release_versions_builds_get_to_many_related) | **GET** /v1/preReleaseVersions/{id}/builds | 
[**pre_release_versions_get_collection**](PreReleaseVersionsApi.md#pre_release_versions_get_collection) | **GET** /v1/preReleaseVersions | 
[**pre_release_versions_get_instance**](PreReleaseVersionsApi.md#pre_release_versions_get_instance) | **GET** /v1/preReleaseVersions/{id} | 


# **pre_release_versions_app_get_to_one_related**
> AppResponse pre_release_versions_app_get_to_one_related(id, fields_apps=fields_apps)



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
    api_instance = openapi_client.PreReleaseVersionsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    fields_apps = ['fields_apps_example'] # List[str] | the fields to include for returned resources of type apps (optional)

    try:
        api_response = api_instance.pre_release_versions_app_get_to_one_related(id, fields_apps=fields_apps)
        print("The response of PreReleaseVersionsApi->pre_release_versions_app_get_to_one_related:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreReleaseVersionsApi->pre_release_versions_app_get_to_one_related: %s\n" % e)
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

# **pre_release_versions_builds_get_to_many_related**
> BuildsResponse pre_release_versions_builds_get_to_many_related(id, fields_builds=fields_builds, limit=limit)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.builds_response import BuildsResponse
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
    api_instance = openapi_client.PreReleaseVersionsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    fields_builds = ['fields_builds_example'] # List[str] | the fields to include for returned resources of type builds (optional)
    limit = 56 # int | maximum resources per page (optional)

    try:
        api_response = api_instance.pre_release_versions_builds_get_to_many_related(id, fields_builds=fields_builds, limit=limit)
        print("The response of PreReleaseVersionsApi->pre_release_versions_builds_get_to_many_related:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreReleaseVersionsApi->pre_release_versions_builds_get_to_many_related: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **fields_builds** | [**List[str]**](str.md)| the fields to include for returned resources of type builds | [optional] 
 **limit** | **int**| maximum resources per page | [optional] 

### Return type

[**BuildsResponse**](BuildsResponse.md)

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

# **pre_release_versions_get_collection**
> PreReleaseVersionsResponse pre_release_versions_get_collection(filter_builds_expired=filter_builds_expired, filter_builds_processing_state=filter_builds_processing_state, filter_platform=filter_platform, filter_version=filter_version, filter_app=filter_app, filter_builds=filter_builds, sort=sort, fields_pre_release_versions=fields_pre_release_versions, limit=limit, include=include, fields_builds=fields_builds, fields_apps=fields_apps, limit_builds=limit_builds)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.pre_release_versions_response import PreReleaseVersionsResponse
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
    api_instance = openapi_client.PreReleaseVersionsApi(api_client)
    filter_builds_expired = ['filter_builds_expired_example'] # List[str] | filter by attribute 'builds.expired' (optional)
    filter_builds_processing_state = ['filter_builds_processing_state_example'] # List[str] | filter by attribute 'builds.processingState' (optional)
    filter_platform = ['filter_platform_example'] # List[str] | filter by attribute 'platform' (optional)
    filter_version = ['filter_version_example'] # List[str] | filter by attribute 'version' (optional)
    filter_app = ['filter_app_example'] # List[str] | filter by id(s) of related 'app' (optional)
    filter_builds = ['filter_builds_example'] # List[str] | filter by id(s) of related 'builds' (optional)
    sort = ['sort_example'] # List[str] | comma-separated list of sort expressions; resources will be sorted as specified (optional)
    fields_pre_release_versions = ['fields_pre_release_versions_example'] # List[str] | the fields to include for returned resources of type preReleaseVersions (optional)
    limit = 56 # int | maximum resources per page (optional)
    include = ['include_example'] # List[str] | comma-separated list of relationships to include (optional)
    fields_builds = ['fields_builds_example'] # List[str] | the fields to include for returned resources of type builds (optional)
    fields_apps = ['fields_apps_example'] # List[str] | the fields to include for returned resources of type apps (optional)
    limit_builds = 56 # int | maximum number of related builds returned (when they are included) (optional)

    try:
        api_response = api_instance.pre_release_versions_get_collection(filter_builds_expired=filter_builds_expired, filter_builds_processing_state=filter_builds_processing_state, filter_platform=filter_platform, filter_version=filter_version, filter_app=filter_app, filter_builds=filter_builds, sort=sort, fields_pre_release_versions=fields_pre_release_versions, limit=limit, include=include, fields_builds=fields_builds, fields_apps=fields_apps, limit_builds=limit_builds)
        print("The response of PreReleaseVersionsApi->pre_release_versions_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreReleaseVersionsApi->pre_release_versions_get_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter_builds_expired** | [**List[str]**](str.md)| filter by attribute &#39;builds.expired&#39; | [optional] 
 **filter_builds_processing_state** | [**List[str]**](str.md)| filter by attribute &#39;builds.processingState&#39; | [optional] 
 **filter_platform** | [**List[str]**](str.md)| filter by attribute &#39;platform&#39; | [optional] 
 **filter_version** | [**List[str]**](str.md)| filter by attribute &#39;version&#39; | [optional] 
 **filter_app** | [**List[str]**](str.md)| filter by id(s) of related &#39;app&#39; | [optional] 
 **filter_builds** | [**List[str]**](str.md)| filter by id(s) of related &#39;builds&#39; | [optional] 
 **sort** | [**List[str]**](str.md)| comma-separated list of sort expressions; resources will be sorted as specified | [optional] 
 **fields_pre_release_versions** | [**List[str]**](str.md)| the fields to include for returned resources of type preReleaseVersions | [optional] 
 **limit** | **int**| maximum resources per page | [optional] 
 **include** | [**List[str]**](str.md)| comma-separated list of relationships to include | [optional] 
 **fields_builds** | [**List[str]**](str.md)| the fields to include for returned resources of type builds | [optional] 
 **fields_apps** | [**List[str]**](str.md)| the fields to include for returned resources of type apps | [optional] 
 **limit_builds** | **int**| maximum number of related builds returned (when they are included) | [optional] 

### Return type

[**PreReleaseVersionsResponse**](PreReleaseVersionsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of PreReleaseVersions |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pre_release_versions_get_instance**
> PrereleaseVersionResponse pre_release_versions_get_instance(id, fields_pre_release_versions=fields_pre_release_versions, include=include, fields_builds=fields_builds, fields_apps=fields_apps, limit_builds=limit_builds)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.prerelease_version_response import PrereleaseVersionResponse
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
    api_instance = openapi_client.PreReleaseVersionsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    fields_pre_release_versions = ['fields_pre_release_versions_example'] # List[str] | the fields to include for returned resources of type preReleaseVersions (optional)
    include = ['include_example'] # List[str] | comma-separated list of relationships to include (optional)
    fields_builds = ['fields_builds_example'] # List[str] | the fields to include for returned resources of type builds (optional)
    fields_apps = ['fields_apps_example'] # List[str] | the fields to include for returned resources of type apps (optional)
    limit_builds = 56 # int | maximum number of related builds returned (when they are included) (optional)

    try:
        api_response = api_instance.pre_release_versions_get_instance(id, fields_pre_release_versions=fields_pre_release_versions, include=include, fields_builds=fields_builds, fields_apps=fields_apps, limit_builds=limit_builds)
        print("The response of PreReleaseVersionsApi->pre_release_versions_get_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreReleaseVersionsApi->pre_release_versions_get_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **fields_pre_release_versions** | [**List[str]**](str.md)| the fields to include for returned resources of type preReleaseVersions | [optional] 
 **include** | [**List[str]**](str.md)| comma-separated list of relationships to include | [optional] 
 **fields_builds** | [**List[str]**](str.md)| the fields to include for returned resources of type builds | [optional] 
 **fields_apps** | [**List[str]**](str.md)| the fields to include for returned resources of type apps | [optional] 
 **limit_builds** | **int**| maximum number of related builds returned (when they are included) | [optional] 

### Return type

[**PrereleaseVersionResponse**](PrereleaseVersionResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Single PrereleaseVersion |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

