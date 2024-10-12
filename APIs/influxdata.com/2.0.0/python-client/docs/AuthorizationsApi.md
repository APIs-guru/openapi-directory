# openapi_client.AuthorizationsApi

All URIs are relative to */api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_authorizations_id**](AuthorizationsApi.md#delete_authorizations_id) | **DELETE** /authorizations/{authID} | Delete an authorization
[**get_authorizations**](AuthorizationsApi.md#get_authorizations) | **GET** /authorizations | List all authorizations
[**get_authorizations_id**](AuthorizationsApi.md#get_authorizations_id) | **GET** /authorizations/{authID} | Retrieve an authorization
[**patch_authorizations_id**](AuthorizationsApi.md#patch_authorizations_id) | **PATCH** /authorizations/{authID} | Update an authorization to be active or inactive
[**post_authorizations**](AuthorizationsApi.md#post_authorizations) | **POST** /authorizations | Create an authorization


# **delete_authorizations_id**
> delete_authorizations_id(auth_id, zap_trace_span=zap_trace_span)

Delete an authorization

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AuthorizationsApi(api_client)
    auth_id = 'auth_id_example' # str | The ID of the authorization to delete.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Delete an authorization
        api_instance.delete_authorizations_id(auth_id, zap_trace_span=zap_trace_span)
    except Exception as e:
        print("Exception when calling AuthorizationsApi->delete_authorizations_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **auth_id** | **str**| The ID of the authorization to delete. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Authorization deleted |  -  |
**0** | Non 2XX error response from server. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_authorizations**
> Authorizations get_authorizations(zap_trace_span=zap_trace_span, user_id=user_id, user=user, org_id=org_id, org=org)

List all authorizations

### Example


```python
import openapi_client
from openapi_client.models.authorizations import Authorizations
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AuthorizationsApi(api_client)
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)
    user_id = 'user_id_example' # str | Only show authorizations that belong to a user ID. (optional)
    user = 'user_example' # str | Only show authorizations that belong to a user name. (optional)
    org_id = 'org_id_example' # str | Only show authorizations that belong to an organization ID. (optional)
    org = 'org_example' # str | Only show authorizations that belong to a organization name. (optional)

    try:
        # List all authorizations
        api_response = api_instance.get_authorizations(zap_trace_span=zap_trace_span, user_id=user_id, user=user, org_id=org_id, org=org)
        print("The response of AuthorizationsApi->get_authorizations:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthorizationsApi->get_authorizations: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 
 **user_id** | **str**| Only show authorizations that belong to a user ID. | [optional] 
 **user** | **str**| Only show authorizations that belong to a user name. | [optional] 
 **org_id** | **str**| Only show authorizations that belong to an organization ID. | [optional] 
 **org** | **str**| Only show authorizations that belong to a organization name. | [optional] 

### Return type

[**Authorizations**](Authorizations.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of authorizations |  -  |
**0** | Non 2XX error response from server. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_authorizations_id**
> Authorization get_authorizations_id(auth_id, zap_trace_span=zap_trace_span)

Retrieve an authorization

### Example


```python
import openapi_client
from openapi_client.models.authorization import Authorization
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AuthorizationsApi(api_client)
    auth_id = 'auth_id_example' # str | The ID of the authorization to get.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Retrieve an authorization
        api_response = api_instance.get_authorizations_id(auth_id, zap_trace_span=zap_trace_span)
        print("The response of AuthorizationsApi->get_authorizations_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthorizationsApi->get_authorizations_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **auth_id** | **str**| The ID of the authorization to get. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**Authorization**](Authorization.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Authorization details |  -  |
**0** | Non 2XX error response from server. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patch_authorizations_id**
> Authorization patch_authorizations_id(auth_id, authorization_update_request, zap_trace_span=zap_trace_span)

Update an authorization to be active or inactive

### Example


```python
import openapi_client
from openapi_client.models.authorization import Authorization
from openapi_client.models.authorization_update_request import AuthorizationUpdateRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AuthorizationsApi(api_client)
    auth_id = 'auth_id_example' # str | The ID of the authorization to update.
    authorization_update_request = openapi_client.AuthorizationUpdateRequest() # AuthorizationUpdateRequest | Authorization to update
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Update an authorization to be active or inactive
        api_response = api_instance.patch_authorizations_id(auth_id, authorization_update_request, zap_trace_span=zap_trace_span)
        print("The response of AuthorizationsApi->patch_authorizations_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthorizationsApi->patch_authorizations_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **auth_id** | **str**| The ID of the authorization to update. | 
 **authorization_update_request** | [**AuthorizationUpdateRequest**](AuthorizationUpdateRequest.md)| Authorization to update | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**Authorization**](Authorization.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The active or inactie authorization |  -  |
**0** | Non 2XX error response from server. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_authorizations**
> Authorization post_authorizations(authorization_post_request, zap_trace_span=zap_trace_span)

Create an authorization

### Example


```python
import openapi_client
from openapi_client.models.authorization import Authorization
from openapi_client.models.authorization_post_request import AuthorizationPostRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AuthorizationsApi(api_client)
    authorization_post_request = openapi_client.AuthorizationPostRequest() # AuthorizationPostRequest | Authorization to create
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Create an authorization
        api_response = api_instance.post_authorizations(authorization_post_request, zap_trace_span=zap_trace_span)
        print("The response of AuthorizationsApi->post_authorizations:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthorizationsApi->post_authorizations: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization_post_request** | [**AuthorizationPostRequest**](AuthorizationPostRequest.md)| Authorization to create | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**Authorization**](Authorization.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Authorization created |  -  |
**400** | Non 2XX error response from server. |  -  |
**0** | Non 2XX error response from server. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

