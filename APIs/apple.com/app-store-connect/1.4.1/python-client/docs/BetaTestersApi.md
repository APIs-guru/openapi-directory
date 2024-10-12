# openapi_client.BetaTestersApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**beta_testers_apps_delete_to_many_relationship**](BetaTestersApi.md#beta_testers_apps_delete_to_many_relationship) | **DELETE** /v1/betaTesters/{id}/relationships/apps | 
[**beta_testers_apps_get_to_many_related**](BetaTestersApi.md#beta_testers_apps_get_to_many_related) | **GET** /v1/betaTesters/{id}/apps | 
[**beta_testers_apps_get_to_many_relationship**](BetaTestersApi.md#beta_testers_apps_get_to_many_relationship) | **GET** /v1/betaTesters/{id}/relationships/apps | 
[**beta_testers_beta_groups_create_to_many_relationship**](BetaTestersApi.md#beta_testers_beta_groups_create_to_many_relationship) | **POST** /v1/betaTesters/{id}/relationships/betaGroups | 
[**beta_testers_beta_groups_delete_to_many_relationship**](BetaTestersApi.md#beta_testers_beta_groups_delete_to_many_relationship) | **DELETE** /v1/betaTesters/{id}/relationships/betaGroups | 
[**beta_testers_beta_groups_get_to_many_related**](BetaTestersApi.md#beta_testers_beta_groups_get_to_many_related) | **GET** /v1/betaTesters/{id}/betaGroups | 
[**beta_testers_beta_groups_get_to_many_relationship**](BetaTestersApi.md#beta_testers_beta_groups_get_to_many_relationship) | **GET** /v1/betaTesters/{id}/relationships/betaGroups | 
[**beta_testers_builds_create_to_many_relationship**](BetaTestersApi.md#beta_testers_builds_create_to_many_relationship) | **POST** /v1/betaTesters/{id}/relationships/builds | 
[**beta_testers_builds_delete_to_many_relationship**](BetaTestersApi.md#beta_testers_builds_delete_to_many_relationship) | **DELETE** /v1/betaTesters/{id}/relationships/builds | 
[**beta_testers_builds_get_to_many_related**](BetaTestersApi.md#beta_testers_builds_get_to_many_related) | **GET** /v1/betaTesters/{id}/builds | 
[**beta_testers_builds_get_to_many_relationship**](BetaTestersApi.md#beta_testers_builds_get_to_many_relationship) | **GET** /v1/betaTesters/{id}/relationships/builds | 
[**beta_testers_create_instance**](BetaTestersApi.md#beta_testers_create_instance) | **POST** /v1/betaTesters | 
[**beta_testers_delete_instance**](BetaTestersApi.md#beta_testers_delete_instance) | **DELETE** /v1/betaTesters/{id} | 
[**beta_testers_get_collection**](BetaTestersApi.md#beta_testers_get_collection) | **GET** /v1/betaTesters | 
[**beta_testers_get_instance**](BetaTestersApi.md#beta_testers_get_instance) | **GET** /v1/betaTesters/{id} | 


# **beta_testers_apps_delete_to_many_relationship**
> beta_testers_apps_delete_to_many_relationship(id, beta_tester_apps_linkages_request)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.beta_tester_apps_linkages_request import BetaTesterAppsLinkagesRequest
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
    api_instance = openapi_client.BetaTestersApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    beta_tester_apps_linkages_request = openapi_client.BetaTesterAppsLinkagesRequest() # BetaTesterAppsLinkagesRequest | List of related linkages

    try:
        api_instance.beta_testers_apps_delete_to_many_relationship(id, beta_tester_apps_linkages_request)
    except Exception as e:
        print("Exception when calling BetaTestersApi->beta_testers_apps_delete_to_many_relationship: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **beta_tester_apps_linkages_request** | [**BetaTesterAppsLinkagesRequest**](BetaTesterAppsLinkagesRequest.md)| List of related linkages | 

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

# **beta_testers_apps_get_to_many_related**
> AppsResponse beta_testers_apps_get_to_many_related(id, fields_apps=fields_apps, limit=limit)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.apps_response import AppsResponse
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
    api_instance = openapi_client.BetaTestersApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    fields_apps = ['fields_apps_example'] # List[str] | the fields to include for returned resources of type apps (optional)
    limit = 56 # int | maximum resources per page (optional)

    try:
        api_response = api_instance.beta_testers_apps_get_to_many_related(id, fields_apps=fields_apps, limit=limit)
        print("The response of BetaTestersApi->beta_testers_apps_get_to_many_related:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BetaTestersApi->beta_testers_apps_get_to_many_related: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **fields_apps** | [**List[str]**](str.md)| the fields to include for returned resources of type apps | [optional] 
 **limit** | **int**| maximum resources per page | [optional] 

### Return type

[**AppsResponse**](AppsResponse.md)

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

# **beta_testers_apps_get_to_many_relationship**
> BetaTesterAppsLinkagesResponse beta_testers_apps_get_to_many_relationship(id, limit=limit)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.beta_tester_apps_linkages_response import BetaTesterAppsLinkagesResponse
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
    api_instance = openapi_client.BetaTestersApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    limit = 56 # int | maximum resources per page (optional)

    try:
        api_response = api_instance.beta_testers_apps_get_to_many_relationship(id, limit=limit)
        print("The response of BetaTestersApi->beta_testers_apps_get_to_many_relationship:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BetaTestersApi->beta_testers_apps_get_to_many_relationship: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **limit** | **int**| maximum resources per page | [optional] 

### Return type

[**BetaTesterAppsLinkagesResponse**](BetaTesterAppsLinkagesResponse.md)

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

# **beta_testers_beta_groups_create_to_many_relationship**
> beta_testers_beta_groups_create_to_many_relationship(id, beta_tester_beta_groups_linkages_request)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.beta_tester_beta_groups_linkages_request import BetaTesterBetaGroupsLinkagesRequest
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
    api_instance = openapi_client.BetaTestersApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    beta_tester_beta_groups_linkages_request = openapi_client.BetaTesterBetaGroupsLinkagesRequest() # BetaTesterBetaGroupsLinkagesRequest | List of related linkages

    try:
        api_instance.beta_testers_beta_groups_create_to_many_relationship(id, beta_tester_beta_groups_linkages_request)
    except Exception as e:
        print("Exception when calling BetaTestersApi->beta_testers_beta_groups_create_to_many_relationship: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **beta_tester_beta_groups_linkages_request** | [**BetaTesterBetaGroupsLinkagesRequest**](BetaTesterBetaGroupsLinkagesRequest.md)| List of related linkages | 

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

# **beta_testers_beta_groups_delete_to_many_relationship**
> beta_testers_beta_groups_delete_to_many_relationship(id, beta_tester_beta_groups_linkages_request)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.beta_tester_beta_groups_linkages_request import BetaTesterBetaGroupsLinkagesRequest
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
    api_instance = openapi_client.BetaTestersApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    beta_tester_beta_groups_linkages_request = openapi_client.BetaTesterBetaGroupsLinkagesRequest() # BetaTesterBetaGroupsLinkagesRequest | List of related linkages

    try:
        api_instance.beta_testers_beta_groups_delete_to_many_relationship(id, beta_tester_beta_groups_linkages_request)
    except Exception as e:
        print("Exception when calling BetaTestersApi->beta_testers_beta_groups_delete_to_many_relationship: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **beta_tester_beta_groups_linkages_request** | [**BetaTesterBetaGroupsLinkagesRequest**](BetaTesterBetaGroupsLinkagesRequest.md)| List of related linkages | 

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

# **beta_testers_beta_groups_get_to_many_related**
> BetaGroupsResponse beta_testers_beta_groups_get_to_many_related(id, fields_beta_groups=fields_beta_groups, limit=limit)



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
    api_instance = openapi_client.BetaTestersApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    fields_beta_groups = ['fields_beta_groups_example'] # List[str] | the fields to include for returned resources of type betaGroups (optional)
    limit = 56 # int | maximum resources per page (optional)

    try:
        api_response = api_instance.beta_testers_beta_groups_get_to_many_related(id, fields_beta_groups=fields_beta_groups, limit=limit)
        print("The response of BetaTestersApi->beta_testers_beta_groups_get_to_many_related:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BetaTestersApi->beta_testers_beta_groups_get_to_many_related: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **fields_beta_groups** | [**List[str]**](str.md)| the fields to include for returned resources of type betaGroups | [optional] 
 **limit** | **int**| maximum resources per page | [optional] 

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
**200** | List of related resources |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **beta_testers_beta_groups_get_to_many_relationship**
> BetaTesterBetaGroupsLinkagesResponse beta_testers_beta_groups_get_to_many_relationship(id, limit=limit)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.beta_tester_beta_groups_linkages_response import BetaTesterBetaGroupsLinkagesResponse
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
    api_instance = openapi_client.BetaTestersApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    limit = 56 # int | maximum resources per page (optional)

    try:
        api_response = api_instance.beta_testers_beta_groups_get_to_many_relationship(id, limit=limit)
        print("The response of BetaTestersApi->beta_testers_beta_groups_get_to_many_relationship:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BetaTestersApi->beta_testers_beta_groups_get_to_many_relationship: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **limit** | **int**| maximum resources per page | [optional] 

### Return type

[**BetaTesterBetaGroupsLinkagesResponse**](BetaTesterBetaGroupsLinkagesResponse.md)

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

# **beta_testers_builds_create_to_many_relationship**
> beta_testers_builds_create_to_many_relationship(id, beta_tester_builds_linkages_request)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.beta_tester_builds_linkages_request import BetaTesterBuildsLinkagesRequest
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
    api_instance = openapi_client.BetaTestersApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    beta_tester_builds_linkages_request = openapi_client.BetaTesterBuildsLinkagesRequest() # BetaTesterBuildsLinkagesRequest | List of related linkages

    try:
        api_instance.beta_testers_builds_create_to_many_relationship(id, beta_tester_builds_linkages_request)
    except Exception as e:
        print("Exception when calling BetaTestersApi->beta_testers_builds_create_to_many_relationship: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **beta_tester_builds_linkages_request** | [**BetaTesterBuildsLinkagesRequest**](BetaTesterBuildsLinkagesRequest.md)| List of related linkages | 

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

# **beta_testers_builds_delete_to_many_relationship**
> beta_testers_builds_delete_to_many_relationship(id, beta_tester_builds_linkages_request)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.beta_tester_builds_linkages_request import BetaTesterBuildsLinkagesRequest
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
    api_instance = openapi_client.BetaTestersApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    beta_tester_builds_linkages_request = openapi_client.BetaTesterBuildsLinkagesRequest() # BetaTesterBuildsLinkagesRequest | List of related linkages

    try:
        api_instance.beta_testers_builds_delete_to_many_relationship(id, beta_tester_builds_linkages_request)
    except Exception as e:
        print("Exception when calling BetaTestersApi->beta_testers_builds_delete_to_many_relationship: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **beta_tester_builds_linkages_request** | [**BetaTesterBuildsLinkagesRequest**](BetaTesterBuildsLinkagesRequest.md)| List of related linkages | 

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

# **beta_testers_builds_get_to_many_related**
> BuildsResponse beta_testers_builds_get_to_many_related(id, fields_builds=fields_builds, limit=limit)



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
    api_instance = openapi_client.BetaTestersApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    fields_builds = ['fields_builds_example'] # List[str] | the fields to include for returned resources of type builds (optional)
    limit = 56 # int | maximum resources per page (optional)

    try:
        api_response = api_instance.beta_testers_builds_get_to_many_related(id, fields_builds=fields_builds, limit=limit)
        print("The response of BetaTestersApi->beta_testers_builds_get_to_many_related:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BetaTestersApi->beta_testers_builds_get_to_many_related: %s\n" % e)
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

# **beta_testers_builds_get_to_many_relationship**
> BetaTesterBuildsLinkagesResponse beta_testers_builds_get_to_many_relationship(id, limit=limit)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.beta_tester_builds_linkages_response import BetaTesterBuildsLinkagesResponse
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
    api_instance = openapi_client.BetaTestersApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    limit = 56 # int | maximum resources per page (optional)

    try:
        api_response = api_instance.beta_testers_builds_get_to_many_relationship(id, limit=limit)
        print("The response of BetaTestersApi->beta_testers_builds_get_to_many_relationship:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BetaTestersApi->beta_testers_builds_get_to_many_relationship: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **limit** | **int**| maximum resources per page | [optional] 

### Return type

[**BetaTesterBuildsLinkagesResponse**](BetaTesterBuildsLinkagesResponse.md)

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

# **beta_testers_create_instance**
> BetaTesterResponse beta_testers_create_instance(beta_tester_create_request)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.beta_tester_create_request import BetaTesterCreateRequest
from openapi_client.models.beta_tester_response import BetaTesterResponse
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
    api_instance = openapi_client.BetaTestersApi(api_client)
    beta_tester_create_request = openapi_client.BetaTesterCreateRequest() # BetaTesterCreateRequest | BetaTester representation

    try:
        api_response = api_instance.beta_testers_create_instance(beta_tester_create_request)
        print("The response of BetaTestersApi->beta_testers_create_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BetaTestersApi->beta_testers_create_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **beta_tester_create_request** | [**BetaTesterCreateRequest**](BetaTesterCreateRequest.md)| BetaTester representation | 

### Return type

[**BetaTesterResponse**](BetaTesterResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Single BetaTester |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **beta_testers_delete_instance**
> beta_testers_delete_instance(id)



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
    api_instance = openapi_client.BetaTestersApi(api_client)
    id = 'id_example' # str | the id of the requested resource

    try:
        api_instance.beta_testers_delete_instance(id)
    except Exception as e:
        print("Exception when calling BetaTestersApi->beta_testers_delete_instance: %s\n" % e)
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

# **beta_testers_get_collection**
> BetaTestersResponse beta_testers_get_collection(filter_email=filter_email, filter_first_name=filter_first_name, filter_invite_type=filter_invite_type, filter_last_name=filter_last_name, filter_apps=filter_apps, filter_beta_groups=filter_beta_groups, filter_builds=filter_builds, sort=sort, fields_beta_testers=fields_beta_testers, limit=limit, include=include, fields_beta_groups=fields_beta_groups, fields_builds=fields_builds, fields_apps=fields_apps, limit_apps=limit_apps, limit_beta_groups=limit_beta_groups, limit_builds=limit_builds)



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
    api_instance = openapi_client.BetaTestersApi(api_client)
    filter_email = ['filter_email_example'] # List[str] | filter by attribute 'email' (optional)
    filter_first_name = ['filter_first_name_example'] # List[str] | filter by attribute 'firstName' (optional)
    filter_invite_type = ['filter_invite_type_example'] # List[str] | filter by attribute 'inviteType' (optional)
    filter_last_name = ['filter_last_name_example'] # List[str] | filter by attribute 'lastName' (optional)
    filter_apps = ['filter_apps_example'] # List[str] | filter by id(s) of related 'apps' (optional)
    filter_beta_groups = ['filter_beta_groups_example'] # List[str] | filter by id(s) of related 'betaGroups' (optional)
    filter_builds = ['filter_builds_example'] # List[str] | filter by id(s) of related 'builds' (optional)
    sort = ['sort_example'] # List[str] | comma-separated list of sort expressions; resources will be sorted as specified (optional)
    fields_beta_testers = ['fields_beta_testers_example'] # List[str] | the fields to include for returned resources of type betaTesters (optional)
    limit = 56 # int | maximum resources per page (optional)
    include = ['include_example'] # List[str] | comma-separated list of relationships to include (optional)
    fields_beta_groups = ['fields_beta_groups_example'] # List[str] | the fields to include for returned resources of type betaGroups (optional)
    fields_builds = ['fields_builds_example'] # List[str] | the fields to include for returned resources of type builds (optional)
    fields_apps = ['fields_apps_example'] # List[str] | the fields to include for returned resources of type apps (optional)
    limit_apps = 56 # int | maximum number of related apps returned (when they are included) (optional)
    limit_beta_groups = 56 # int | maximum number of related betaGroups returned (when they are included) (optional)
    limit_builds = 56 # int | maximum number of related builds returned (when they are included) (optional)

    try:
        api_response = api_instance.beta_testers_get_collection(filter_email=filter_email, filter_first_name=filter_first_name, filter_invite_type=filter_invite_type, filter_last_name=filter_last_name, filter_apps=filter_apps, filter_beta_groups=filter_beta_groups, filter_builds=filter_builds, sort=sort, fields_beta_testers=fields_beta_testers, limit=limit, include=include, fields_beta_groups=fields_beta_groups, fields_builds=fields_builds, fields_apps=fields_apps, limit_apps=limit_apps, limit_beta_groups=limit_beta_groups, limit_builds=limit_builds)
        print("The response of BetaTestersApi->beta_testers_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BetaTestersApi->beta_testers_get_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter_email** | [**List[str]**](str.md)| filter by attribute &#39;email&#39; | [optional] 
 **filter_first_name** | [**List[str]**](str.md)| filter by attribute &#39;firstName&#39; | [optional] 
 **filter_invite_type** | [**List[str]**](str.md)| filter by attribute &#39;inviteType&#39; | [optional] 
 **filter_last_name** | [**List[str]**](str.md)| filter by attribute &#39;lastName&#39; | [optional] 
 **filter_apps** | [**List[str]**](str.md)| filter by id(s) of related &#39;apps&#39; | [optional] 
 **filter_beta_groups** | [**List[str]**](str.md)| filter by id(s) of related &#39;betaGroups&#39; | [optional] 
 **filter_builds** | [**List[str]**](str.md)| filter by id(s) of related &#39;builds&#39; | [optional] 
 **sort** | [**List[str]**](str.md)| comma-separated list of sort expressions; resources will be sorted as specified | [optional] 
 **fields_beta_testers** | [**List[str]**](str.md)| the fields to include for returned resources of type betaTesters | [optional] 
 **limit** | **int**| maximum resources per page | [optional] 
 **include** | [**List[str]**](str.md)| comma-separated list of relationships to include | [optional] 
 **fields_beta_groups** | [**List[str]**](str.md)| the fields to include for returned resources of type betaGroups | [optional] 
 **fields_builds** | [**List[str]**](str.md)| the fields to include for returned resources of type builds | [optional] 
 **fields_apps** | [**List[str]**](str.md)| the fields to include for returned resources of type apps | [optional] 
 **limit_apps** | **int**| maximum number of related apps returned (when they are included) | [optional] 
 **limit_beta_groups** | **int**| maximum number of related betaGroups returned (when they are included) | [optional] 
 **limit_builds** | **int**| maximum number of related builds returned (when they are included) | [optional] 

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
**200** | List of BetaTesters |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **beta_testers_get_instance**
> BetaTesterResponse beta_testers_get_instance(id, fields_beta_testers=fields_beta_testers, include=include, fields_beta_groups=fields_beta_groups, fields_builds=fields_builds, fields_apps=fields_apps, limit_apps=limit_apps, limit_beta_groups=limit_beta_groups, limit_builds=limit_builds)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.beta_tester_response import BetaTesterResponse
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
    api_instance = openapi_client.BetaTestersApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    fields_beta_testers = ['fields_beta_testers_example'] # List[str] | the fields to include for returned resources of type betaTesters (optional)
    include = ['include_example'] # List[str] | comma-separated list of relationships to include (optional)
    fields_beta_groups = ['fields_beta_groups_example'] # List[str] | the fields to include for returned resources of type betaGroups (optional)
    fields_builds = ['fields_builds_example'] # List[str] | the fields to include for returned resources of type builds (optional)
    fields_apps = ['fields_apps_example'] # List[str] | the fields to include for returned resources of type apps (optional)
    limit_apps = 56 # int | maximum number of related apps returned (when they are included) (optional)
    limit_beta_groups = 56 # int | maximum number of related betaGroups returned (when they are included) (optional)
    limit_builds = 56 # int | maximum number of related builds returned (when they are included) (optional)

    try:
        api_response = api_instance.beta_testers_get_instance(id, fields_beta_testers=fields_beta_testers, include=include, fields_beta_groups=fields_beta_groups, fields_builds=fields_builds, fields_apps=fields_apps, limit_apps=limit_apps, limit_beta_groups=limit_beta_groups, limit_builds=limit_builds)
        print("The response of BetaTestersApi->beta_testers_get_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BetaTestersApi->beta_testers_get_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **fields_beta_testers** | [**List[str]**](str.md)| the fields to include for returned resources of type betaTesters | [optional] 
 **include** | [**List[str]**](str.md)| comma-separated list of relationships to include | [optional] 
 **fields_beta_groups** | [**List[str]**](str.md)| the fields to include for returned resources of type betaGroups | [optional] 
 **fields_builds** | [**List[str]**](str.md)| the fields to include for returned resources of type builds | [optional] 
 **fields_apps** | [**List[str]**](str.md)| the fields to include for returned resources of type apps | [optional] 
 **limit_apps** | **int**| maximum number of related apps returned (when they are included) | [optional] 
 **limit_beta_groups** | **int**| maximum number of related betaGroups returned (when they are included) | [optional] 
 **limit_builds** | **int**| maximum number of related builds returned (when they are included) | [optional] 

### Return type

[**BetaTesterResponse**](BetaTesterResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Single BetaTester |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

