# openapi_client.GameCenterEnabledVersionsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**game_center_enabled_versions_compatible_versions_create_to_many_relationship**](GameCenterEnabledVersionsApi.md#game_center_enabled_versions_compatible_versions_create_to_many_relationship) | **POST** /v1/gameCenterEnabledVersions/{id}/relationships/compatibleVersions | 
[**game_center_enabled_versions_compatible_versions_delete_to_many_relationship**](GameCenterEnabledVersionsApi.md#game_center_enabled_versions_compatible_versions_delete_to_many_relationship) | **DELETE** /v1/gameCenterEnabledVersions/{id}/relationships/compatibleVersions | 
[**game_center_enabled_versions_compatible_versions_get_to_many_related**](GameCenterEnabledVersionsApi.md#game_center_enabled_versions_compatible_versions_get_to_many_related) | **GET** /v1/gameCenterEnabledVersions/{id}/compatibleVersions | 
[**game_center_enabled_versions_compatible_versions_get_to_many_relationship**](GameCenterEnabledVersionsApi.md#game_center_enabled_versions_compatible_versions_get_to_many_relationship) | **GET** /v1/gameCenterEnabledVersions/{id}/relationships/compatibleVersions | 
[**game_center_enabled_versions_compatible_versions_replace_to_many_relationship**](GameCenterEnabledVersionsApi.md#game_center_enabled_versions_compatible_versions_replace_to_many_relationship) | **PATCH** /v1/gameCenterEnabledVersions/{id}/relationships/compatibleVersions | 


# **game_center_enabled_versions_compatible_versions_create_to_many_relationship**
> game_center_enabled_versions_compatible_versions_create_to_many_relationship(id, game_center_enabled_version_compatible_versions_linkages_request)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.game_center_enabled_version_compatible_versions_linkages_request import GameCenterEnabledVersionCompatibleVersionsLinkagesRequest
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
    api_instance = openapi_client.GameCenterEnabledVersionsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    game_center_enabled_version_compatible_versions_linkages_request = openapi_client.GameCenterEnabledVersionCompatibleVersionsLinkagesRequest() # GameCenterEnabledVersionCompatibleVersionsLinkagesRequest | List of related linkages

    try:
        api_instance.game_center_enabled_versions_compatible_versions_create_to_many_relationship(id, game_center_enabled_version_compatible_versions_linkages_request)
    except Exception as e:
        print("Exception when calling GameCenterEnabledVersionsApi->game_center_enabled_versions_compatible_versions_create_to_many_relationship: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **game_center_enabled_version_compatible_versions_linkages_request** | [**GameCenterEnabledVersionCompatibleVersionsLinkagesRequest**](GameCenterEnabledVersionCompatibleVersionsLinkagesRequest.md)| List of related linkages | 

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

# **game_center_enabled_versions_compatible_versions_delete_to_many_relationship**
> game_center_enabled_versions_compatible_versions_delete_to_many_relationship(id, game_center_enabled_version_compatible_versions_linkages_request)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.game_center_enabled_version_compatible_versions_linkages_request import GameCenterEnabledVersionCompatibleVersionsLinkagesRequest
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
    api_instance = openapi_client.GameCenterEnabledVersionsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    game_center_enabled_version_compatible_versions_linkages_request = openapi_client.GameCenterEnabledVersionCompatibleVersionsLinkagesRequest() # GameCenterEnabledVersionCompatibleVersionsLinkagesRequest | List of related linkages

    try:
        api_instance.game_center_enabled_versions_compatible_versions_delete_to_many_relationship(id, game_center_enabled_version_compatible_versions_linkages_request)
    except Exception as e:
        print("Exception when calling GameCenterEnabledVersionsApi->game_center_enabled_versions_compatible_versions_delete_to_many_relationship: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **game_center_enabled_version_compatible_versions_linkages_request** | [**GameCenterEnabledVersionCompatibleVersionsLinkagesRequest**](GameCenterEnabledVersionCompatibleVersionsLinkagesRequest.md)| List of related linkages | 

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

# **game_center_enabled_versions_compatible_versions_get_to_many_related**
> GameCenterEnabledVersionsResponse game_center_enabled_versions_compatible_versions_get_to_many_related(id, filter_platform=filter_platform, filter_version_string=filter_version_string, filter_app=filter_app, filter_id=filter_id, sort=sort, fields_game_center_enabled_versions=fields_game_center_enabled_versions, fields_apps=fields_apps, limit=limit, include=include)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.game_center_enabled_versions_response import GameCenterEnabledVersionsResponse
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
    api_instance = openapi_client.GameCenterEnabledVersionsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    filter_platform = ['filter_platform_example'] # List[str] | filter by attribute 'platform' (optional)
    filter_version_string = ['filter_version_string_example'] # List[str] | filter by attribute 'versionString' (optional)
    filter_app = ['filter_app_example'] # List[str] | filter by id(s) of related 'app' (optional)
    filter_id = ['filter_id_example'] # List[str] | filter by id(s) (optional)
    sort = ['sort_example'] # List[str] | comma-separated list of sort expressions; resources will be sorted as specified (optional)
    fields_game_center_enabled_versions = ['fields_game_center_enabled_versions_example'] # List[str] | the fields to include for returned resources of type gameCenterEnabledVersions (optional)
    fields_apps = ['fields_apps_example'] # List[str] | the fields to include for returned resources of type apps (optional)
    limit = 56 # int | maximum resources per page (optional)
    include = ['include_example'] # List[str] | comma-separated list of relationships to include (optional)

    try:
        api_response = api_instance.game_center_enabled_versions_compatible_versions_get_to_many_related(id, filter_platform=filter_platform, filter_version_string=filter_version_string, filter_app=filter_app, filter_id=filter_id, sort=sort, fields_game_center_enabled_versions=fields_game_center_enabled_versions, fields_apps=fields_apps, limit=limit, include=include)
        print("The response of GameCenterEnabledVersionsApi->game_center_enabled_versions_compatible_versions_get_to_many_related:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GameCenterEnabledVersionsApi->game_center_enabled_versions_compatible_versions_get_to_many_related: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **filter_platform** | [**List[str]**](str.md)| filter by attribute &#39;platform&#39; | [optional] 
 **filter_version_string** | [**List[str]**](str.md)| filter by attribute &#39;versionString&#39; | [optional] 
 **filter_app** | [**List[str]**](str.md)| filter by id(s) of related &#39;app&#39; | [optional] 
 **filter_id** | [**List[str]**](str.md)| filter by id(s) | [optional] 
 **sort** | [**List[str]**](str.md)| comma-separated list of sort expressions; resources will be sorted as specified | [optional] 
 **fields_game_center_enabled_versions** | [**List[str]**](str.md)| the fields to include for returned resources of type gameCenterEnabledVersions | [optional] 
 **fields_apps** | [**List[str]**](str.md)| the fields to include for returned resources of type apps | [optional] 
 **limit** | **int**| maximum resources per page | [optional] 
 **include** | [**List[str]**](str.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**GameCenterEnabledVersionsResponse**](GameCenterEnabledVersionsResponse.md)

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

# **game_center_enabled_versions_compatible_versions_get_to_many_relationship**
> GameCenterEnabledVersionCompatibleVersionsLinkagesResponse game_center_enabled_versions_compatible_versions_get_to_many_relationship(id, limit=limit)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.game_center_enabled_version_compatible_versions_linkages_response import GameCenterEnabledVersionCompatibleVersionsLinkagesResponse
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
    api_instance = openapi_client.GameCenterEnabledVersionsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    limit = 56 # int | maximum resources per page (optional)

    try:
        api_response = api_instance.game_center_enabled_versions_compatible_versions_get_to_many_relationship(id, limit=limit)
        print("The response of GameCenterEnabledVersionsApi->game_center_enabled_versions_compatible_versions_get_to_many_relationship:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GameCenterEnabledVersionsApi->game_center_enabled_versions_compatible_versions_get_to_many_relationship: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **limit** | **int**| maximum resources per page | [optional] 

### Return type

[**GameCenterEnabledVersionCompatibleVersionsLinkagesResponse**](GameCenterEnabledVersionCompatibleVersionsLinkagesResponse.md)

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

# **game_center_enabled_versions_compatible_versions_replace_to_many_relationship**
> game_center_enabled_versions_compatible_versions_replace_to_many_relationship(id, game_center_enabled_version_compatible_versions_linkages_request)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.game_center_enabled_version_compatible_versions_linkages_request import GameCenterEnabledVersionCompatibleVersionsLinkagesRequest
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
    api_instance = openapi_client.GameCenterEnabledVersionsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    game_center_enabled_version_compatible_versions_linkages_request = openapi_client.GameCenterEnabledVersionCompatibleVersionsLinkagesRequest() # GameCenterEnabledVersionCompatibleVersionsLinkagesRequest | List of related linkages

    try:
        api_instance.game_center_enabled_versions_compatible_versions_replace_to_many_relationship(id, game_center_enabled_version_compatible_versions_linkages_request)
    except Exception as e:
        print("Exception when calling GameCenterEnabledVersionsApi->game_center_enabled_versions_compatible_versions_replace_to_many_relationship: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **game_center_enabled_version_compatible_versions_linkages_request** | [**GameCenterEnabledVersionCompatibleVersionsLinkagesRequest**](GameCenterEnabledVersionCompatibleVersionsLinkagesRequest.md)| List of related linkages | 

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

