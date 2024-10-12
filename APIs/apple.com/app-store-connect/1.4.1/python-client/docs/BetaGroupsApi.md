# openapi_client.BetaGroupsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**beta_groups_app_get_to_one_related**](BetaGroupsApi.md#beta_groups_app_get_to_one_related) | **GET** /v1/betaGroups/{id}/app | 
[**beta_groups_beta_testers_create_to_many_relationship**](BetaGroupsApi.md#beta_groups_beta_testers_create_to_many_relationship) | **POST** /v1/betaGroups/{id}/relationships/betaTesters | 
[**beta_groups_beta_testers_delete_to_many_relationship**](BetaGroupsApi.md#beta_groups_beta_testers_delete_to_many_relationship) | **DELETE** /v1/betaGroups/{id}/relationships/betaTesters | 
[**beta_groups_beta_testers_get_to_many_related**](BetaGroupsApi.md#beta_groups_beta_testers_get_to_many_related) | **GET** /v1/betaGroups/{id}/betaTesters | 
[**beta_groups_beta_testers_get_to_many_relationship**](BetaGroupsApi.md#beta_groups_beta_testers_get_to_many_relationship) | **GET** /v1/betaGroups/{id}/relationships/betaTesters | 
[**beta_groups_builds_create_to_many_relationship**](BetaGroupsApi.md#beta_groups_builds_create_to_many_relationship) | **POST** /v1/betaGroups/{id}/relationships/builds | 
[**beta_groups_builds_delete_to_many_relationship**](BetaGroupsApi.md#beta_groups_builds_delete_to_many_relationship) | **DELETE** /v1/betaGroups/{id}/relationships/builds | 
[**beta_groups_builds_get_to_many_related**](BetaGroupsApi.md#beta_groups_builds_get_to_many_related) | **GET** /v1/betaGroups/{id}/builds | 
[**beta_groups_builds_get_to_many_relationship**](BetaGroupsApi.md#beta_groups_builds_get_to_many_relationship) | **GET** /v1/betaGroups/{id}/relationships/builds | 
[**beta_groups_create_instance**](BetaGroupsApi.md#beta_groups_create_instance) | **POST** /v1/betaGroups | 
[**beta_groups_delete_instance**](BetaGroupsApi.md#beta_groups_delete_instance) | **DELETE** /v1/betaGroups/{id} | 
[**beta_groups_get_collection**](BetaGroupsApi.md#beta_groups_get_collection) | **GET** /v1/betaGroups | 
[**beta_groups_get_instance**](BetaGroupsApi.md#beta_groups_get_instance) | **GET** /v1/betaGroups/{id} | 
[**beta_groups_update_instance**](BetaGroupsApi.md#beta_groups_update_instance) | **PATCH** /v1/betaGroups/{id} | 


# **beta_groups_app_get_to_one_related**
> AppResponse beta_groups_app_get_to_one_related(id, fields_apps=fields_apps)



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
    api_instance = openapi_client.BetaGroupsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    fields_apps = ['fields_apps_example'] # List[str] | the fields to include for returned resources of type apps (optional)

    try:
        api_response = api_instance.beta_groups_app_get_to_one_related(id, fields_apps=fields_apps)
        print("The response of BetaGroupsApi->beta_groups_app_get_to_one_related:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BetaGroupsApi->beta_groups_app_get_to_one_related: %s\n" % e)
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

# **beta_groups_beta_testers_create_to_many_relationship**
> beta_groups_beta_testers_create_to_many_relationship(id, beta_group_beta_testers_linkages_request)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.beta_group_beta_testers_linkages_request import BetaGroupBetaTestersLinkagesRequest
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
    api_instance = openapi_client.BetaGroupsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    beta_group_beta_testers_linkages_request = openapi_client.BetaGroupBetaTestersLinkagesRequest() # BetaGroupBetaTestersLinkagesRequest | List of related linkages

    try:
        api_instance.beta_groups_beta_testers_create_to_many_relationship(id, beta_group_beta_testers_linkages_request)
    except Exception as e:
        print("Exception when calling BetaGroupsApi->beta_groups_beta_testers_create_to_many_relationship: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **beta_group_beta_testers_linkages_request** | [**BetaGroupBetaTestersLinkagesRequest**](BetaGroupBetaTestersLinkagesRequest.md)| List of related linkages | 

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

# **beta_groups_beta_testers_delete_to_many_relationship**
> beta_groups_beta_testers_delete_to_many_relationship(id, beta_group_beta_testers_linkages_request)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.beta_group_beta_testers_linkages_request import BetaGroupBetaTestersLinkagesRequest
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
    api_instance = openapi_client.BetaGroupsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    beta_group_beta_testers_linkages_request = openapi_client.BetaGroupBetaTestersLinkagesRequest() # BetaGroupBetaTestersLinkagesRequest | List of related linkages

    try:
        api_instance.beta_groups_beta_testers_delete_to_many_relationship(id, beta_group_beta_testers_linkages_request)
    except Exception as e:
        print("Exception when calling BetaGroupsApi->beta_groups_beta_testers_delete_to_many_relationship: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **beta_group_beta_testers_linkages_request** | [**BetaGroupBetaTestersLinkagesRequest**](BetaGroupBetaTestersLinkagesRequest.md)| List of related linkages | 

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

# **beta_groups_beta_testers_get_to_many_related**
> BetaTestersResponse beta_groups_beta_testers_get_to_many_related(id, fields_beta_testers=fields_beta_testers, limit=limit)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.beta_testers_response import BetaTestersResponse
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
    api_instance = openapi_client.BetaGroupsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    fields_beta_testers = ['fields_beta_testers_example'] # List[str] | the fields to include for returned resources of type betaTesters (optional)
    limit = 56 # int | maximum resources per page (optional)

    try:
        api_response = api_instance.beta_groups_beta_testers_get_to_many_related(id, fields_beta_testers=fields_beta_testers, limit=limit)
        print("The response of BetaGroupsApi->beta_groups_beta_testers_get_to_many_related:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BetaGroupsApi->beta_groups_beta_testers_get_to_many_related: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **fields_beta_testers** | [**List[str]**](str.md)| the fields to include for returned resources of type betaTesters | [optional] 
 **limit** | **int**| maximum resources per page | [optional] 

### Return type

[**BetaTestersResponse**](BetaTestersResponse.md)

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

# **beta_groups_beta_testers_get_to_many_relationship**
> BetaGroupBetaTestersLinkagesResponse beta_groups_beta_testers_get_to_many_relationship(id, limit=limit)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.beta_group_beta_testers_linkages_response import BetaGroupBetaTestersLinkagesResponse
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
    api_instance = openapi_client.BetaGroupsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    limit = 56 # int | maximum resources per page (optional)

    try:
        api_response = api_instance.beta_groups_beta_testers_get_to_many_relationship(id, limit=limit)
        print("The response of BetaGroupsApi->beta_groups_beta_testers_get_to_many_relationship:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BetaGroupsApi->beta_groups_beta_testers_get_to_many_relationship: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **limit** | **int**| maximum resources per page | [optional] 

### Return type

[**BetaGroupBetaTestersLinkagesResponse**](BetaGroupBetaTestersLinkagesResponse.md)

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

# **beta_groups_builds_create_to_many_relationship**
> beta_groups_builds_create_to_many_relationship(id, beta_group_builds_linkages_request)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.beta_group_builds_linkages_request import BetaGroupBuildsLinkagesRequest
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
    api_instance = openapi_client.BetaGroupsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    beta_group_builds_linkages_request = openapi_client.BetaGroupBuildsLinkagesRequest() # BetaGroupBuildsLinkagesRequest | List of related linkages

    try:
        api_instance.beta_groups_builds_create_to_many_relationship(id, beta_group_builds_linkages_request)
    except Exception as e:
        print("Exception when calling BetaGroupsApi->beta_groups_builds_create_to_many_relationship: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **beta_group_builds_linkages_request** | [**BetaGroupBuildsLinkagesRequest**](BetaGroupBuildsLinkagesRequest.md)| List of related linkages | 

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

# **beta_groups_builds_delete_to_many_relationship**
> beta_groups_builds_delete_to_many_relationship(id, beta_group_builds_linkages_request)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.beta_group_builds_linkages_request import BetaGroupBuildsLinkagesRequest
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
    api_instance = openapi_client.BetaGroupsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    beta_group_builds_linkages_request = openapi_client.BetaGroupBuildsLinkagesRequest() # BetaGroupBuildsLinkagesRequest | List of related linkages

    try:
        api_instance.beta_groups_builds_delete_to_many_relationship(id, beta_group_builds_linkages_request)
    except Exception as e:
        print("Exception when calling BetaGroupsApi->beta_groups_builds_delete_to_many_relationship: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **beta_group_builds_linkages_request** | [**BetaGroupBuildsLinkagesRequest**](BetaGroupBuildsLinkagesRequest.md)| List of related linkages | 

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

# **beta_groups_builds_get_to_many_related**
> BuildsResponse beta_groups_builds_get_to_many_related(id, fields_builds=fields_builds, limit=limit)



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
    api_instance = openapi_client.BetaGroupsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    fields_builds = ['fields_builds_example'] # List[str] | the fields to include for returned resources of type builds (optional)
    limit = 56 # int | maximum resources per page (optional)

    try:
        api_response = api_instance.beta_groups_builds_get_to_many_related(id, fields_builds=fields_builds, limit=limit)
        print("The response of BetaGroupsApi->beta_groups_builds_get_to_many_related:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BetaGroupsApi->beta_groups_builds_get_to_many_related: %s\n" % e)
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

# **beta_groups_builds_get_to_many_relationship**
> BetaGroupBuildsLinkagesResponse beta_groups_builds_get_to_many_relationship(id, limit=limit)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.beta_group_builds_linkages_response import BetaGroupBuildsLinkagesResponse
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
    api_instance = openapi_client.BetaGroupsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    limit = 56 # int | maximum resources per page (optional)

    try:
        api_response = api_instance.beta_groups_builds_get_to_many_relationship(id, limit=limit)
        print("The response of BetaGroupsApi->beta_groups_builds_get_to_many_relationship:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BetaGroupsApi->beta_groups_builds_get_to_many_relationship: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **limit** | **int**| maximum resources per page | [optional] 

### Return type

[**BetaGroupBuildsLinkagesResponse**](BetaGroupBuildsLinkagesResponse.md)

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

# **beta_groups_create_instance**
> BetaGroupResponse beta_groups_create_instance(beta_group_create_request)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.beta_group_create_request import BetaGroupCreateRequest
from openapi_client.models.beta_group_response import BetaGroupResponse
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
    api_instance = openapi_client.BetaGroupsApi(api_client)
    beta_group_create_request = openapi_client.BetaGroupCreateRequest() # BetaGroupCreateRequest | BetaGroup representation

    try:
        api_response = api_instance.beta_groups_create_instance(beta_group_create_request)
        print("The response of BetaGroupsApi->beta_groups_create_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BetaGroupsApi->beta_groups_create_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **beta_group_create_request** | [**BetaGroupCreateRequest**](BetaGroupCreateRequest.md)| BetaGroup representation | 

### Return type

[**BetaGroupResponse**](BetaGroupResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Single BetaGroup |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **beta_groups_delete_instance**
> beta_groups_delete_instance(id)



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
    api_instance = openapi_client.BetaGroupsApi(api_client)
    id = 'id_example' # str | the id of the requested resource

    try:
        api_instance.beta_groups_delete_instance(id)
    except Exception as e:
        print("Exception when calling BetaGroupsApi->beta_groups_delete_instance: %s\n" % e)
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

# **beta_groups_get_collection**
> BetaGroupsResponse beta_groups_get_collection(filter_is_internal_group=filter_is_internal_group, filter_name=filter_name, filter_public_link=filter_public_link, filter_public_link_enabled=filter_public_link_enabled, filter_public_link_limit_enabled=filter_public_link_limit_enabled, filter_app=filter_app, filter_builds=filter_builds, filter_id=filter_id, sort=sort, fields_beta_groups=fields_beta_groups, limit=limit, include=include, fields_builds=fields_builds, fields_beta_testers=fields_beta_testers, fields_apps=fields_apps, limit_beta_testers=limit_beta_testers, limit_builds=limit_builds)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.beta_groups_response import BetaGroupsResponse
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
    api_instance = openapi_client.BetaGroupsApi(api_client)
    filter_is_internal_group = ['filter_is_internal_group_example'] # List[str] | filter by attribute 'isInternalGroup' (optional)
    filter_name = ['filter_name_example'] # List[str] | filter by attribute 'name' (optional)
    filter_public_link = ['filter_public_link_example'] # List[str] | filter by attribute 'publicLink' (optional)
    filter_public_link_enabled = ['filter_public_link_enabled_example'] # List[str] | filter by attribute 'publicLinkEnabled' (optional)
    filter_public_link_limit_enabled = ['filter_public_link_limit_enabled_example'] # List[str] | filter by attribute 'publicLinkLimitEnabled' (optional)
    filter_app = ['filter_app_example'] # List[str] | filter by id(s) of related 'app' (optional)
    filter_builds = ['filter_builds_example'] # List[str] | filter by id(s) of related 'builds' (optional)
    filter_id = ['filter_id_example'] # List[str] | filter by id(s) (optional)
    sort = ['sort_example'] # List[str] | comma-separated list of sort expressions; resources will be sorted as specified (optional)
    fields_beta_groups = ['fields_beta_groups_example'] # List[str] | the fields to include for returned resources of type betaGroups (optional)
    limit = 56 # int | maximum resources per page (optional)
    include = ['include_example'] # List[str] | comma-separated list of relationships to include (optional)
    fields_builds = ['fields_builds_example'] # List[str] | the fields to include for returned resources of type builds (optional)
    fields_beta_testers = ['fields_beta_testers_example'] # List[str] | the fields to include for returned resources of type betaTesters (optional)
    fields_apps = ['fields_apps_example'] # List[str] | the fields to include for returned resources of type apps (optional)
    limit_beta_testers = 56 # int | maximum number of related betaTesters returned (when they are included) (optional)
    limit_builds = 56 # int | maximum number of related builds returned (when they are included) (optional)

    try:
        api_response = api_instance.beta_groups_get_collection(filter_is_internal_group=filter_is_internal_group, filter_name=filter_name, filter_public_link=filter_public_link, filter_public_link_enabled=filter_public_link_enabled, filter_public_link_limit_enabled=filter_public_link_limit_enabled, filter_app=filter_app, filter_builds=filter_builds, filter_id=filter_id, sort=sort, fields_beta_groups=fields_beta_groups, limit=limit, include=include, fields_builds=fields_builds, fields_beta_testers=fields_beta_testers, fields_apps=fields_apps, limit_beta_testers=limit_beta_testers, limit_builds=limit_builds)
        print("The response of BetaGroupsApi->beta_groups_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BetaGroupsApi->beta_groups_get_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter_is_internal_group** | [**List[str]**](str.md)| filter by attribute &#39;isInternalGroup&#39; | [optional] 
 **filter_name** | [**List[str]**](str.md)| filter by attribute &#39;name&#39; | [optional] 
 **filter_public_link** | [**List[str]**](str.md)| filter by attribute &#39;publicLink&#39; | [optional] 
 **filter_public_link_enabled** | [**List[str]**](str.md)| filter by attribute &#39;publicLinkEnabled&#39; | [optional] 
 **filter_public_link_limit_enabled** | [**List[str]**](str.md)| filter by attribute &#39;publicLinkLimitEnabled&#39; | [optional] 
 **filter_app** | [**List[str]**](str.md)| filter by id(s) of related &#39;app&#39; | [optional] 
 **filter_builds** | [**List[str]**](str.md)| filter by id(s) of related &#39;builds&#39; | [optional] 
 **filter_id** | [**List[str]**](str.md)| filter by id(s) | [optional] 
 **sort** | [**List[str]**](str.md)| comma-separated list of sort expressions; resources will be sorted as specified | [optional] 
 **fields_beta_groups** | [**List[str]**](str.md)| the fields to include for returned resources of type betaGroups | [optional] 
 **limit** | **int**| maximum resources per page | [optional] 
 **include** | [**List[str]**](str.md)| comma-separated list of relationships to include | [optional] 
 **fields_builds** | [**List[str]**](str.md)| the fields to include for returned resources of type builds | [optional] 
 **fields_beta_testers** | [**List[str]**](str.md)| the fields to include for returned resources of type betaTesters | [optional] 
 **fields_apps** | [**List[str]**](str.md)| the fields to include for returned resources of type apps | [optional] 
 **limit_beta_testers** | **int**| maximum number of related betaTesters returned (when they are included) | [optional] 
 **limit_builds** | **int**| maximum number of related builds returned (when they are included) | [optional] 

### Return type

[**BetaGroupsResponse**](BetaGroupsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of BetaGroups |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **beta_groups_get_instance**
> BetaGroupResponse beta_groups_get_instance(id, fields_beta_groups=fields_beta_groups, include=include, fields_builds=fields_builds, fields_beta_testers=fields_beta_testers, fields_apps=fields_apps, limit_beta_testers=limit_beta_testers, limit_builds=limit_builds)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.beta_group_response import BetaGroupResponse
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
    api_instance = openapi_client.BetaGroupsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    fields_beta_groups = ['fields_beta_groups_example'] # List[str] | the fields to include for returned resources of type betaGroups (optional)
    include = ['include_example'] # List[str] | comma-separated list of relationships to include (optional)
    fields_builds = ['fields_builds_example'] # List[str] | the fields to include for returned resources of type builds (optional)
    fields_beta_testers = ['fields_beta_testers_example'] # List[str] | the fields to include for returned resources of type betaTesters (optional)
    fields_apps = ['fields_apps_example'] # List[str] | the fields to include for returned resources of type apps (optional)
    limit_beta_testers = 56 # int | maximum number of related betaTesters returned (when they are included) (optional)
    limit_builds = 56 # int | maximum number of related builds returned (when they are included) (optional)

    try:
        api_response = api_instance.beta_groups_get_instance(id, fields_beta_groups=fields_beta_groups, include=include, fields_builds=fields_builds, fields_beta_testers=fields_beta_testers, fields_apps=fields_apps, limit_beta_testers=limit_beta_testers, limit_builds=limit_builds)
        print("The response of BetaGroupsApi->beta_groups_get_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BetaGroupsApi->beta_groups_get_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **fields_beta_groups** | [**List[str]**](str.md)| the fields to include for returned resources of type betaGroups | [optional] 
 **include** | [**List[str]**](str.md)| comma-separated list of relationships to include | [optional] 
 **fields_builds** | [**List[str]**](str.md)| the fields to include for returned resources of type builds | [optional] 
 **fields_beta_testers** | [**List[str]**](str.md)| the fields to include for returned resources of type betaTesters | [optional] 
 **fields_apps** | [**List[str]**](str.md)| the fields to include for returned resources of type apps | [optional] 
 **limit_beta_testers** | **int**| maximum number of related betaTesters returned (when they are included) | [optional] 
 **limit_builds** | **int**| maximum number of related builds returned (when they are included) | [optional] 

### Return type

[**BetaGroupResponse**](BetaGroupResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Single BetaGroup |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **beta_groups_update_instance**
> BetaGroupResponse beta_groups_update_instance(id, beta_group_update_request)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.beta_group_response import BetaGroupResponse
from openapi_client.models.beta_group_update_request import BetaGroupUpdateRequest
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
    api_instance = openapi_client.BetaGroupsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    beta_group_update_request = openapi_client.BetaGroupUpdateRequest() # BetaGroupUpdateRequest | BetaGroup representation

    try:
        api_response = api_instance.beta_groups_update_instance(id, beta_group_update_request)
        print("The response of BetaGroupsApi->beta_groups_update_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BetaGroupsApi->beta_groups_update_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **beta_group_update_request** | [**BetaGroupUpdateRequest**](BetaGroupUpdateRequest.md)| BetaGroup representation | 

### Return type

[**BetaGroupResponse**](BetaGroupResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Single BetaGroup |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

