# openapi_client.AuthenticationApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**expire_all_api_v1_auth_app_app_id_expire_all_post**](AuthenticationApi.md#expire_all_api_v1_auth_app_app_id_expire_all_post) | **POST** /api/v1/auth/app/{app_id}/expire-all/ | Expire All
[**get_app_portal_access_api_v1_auth_app_portal_access_app_id_post**](AuthenticationApi.md#get_app_portal_access_api_v1_auth_app_portal_access_app_id_post) | **POST** /api/v1/auth/app-portal-access/{app_id}/ | Get Consumer App Portal Access
[**get_dashboard_access_api_v1_auth_dashboard_access_app_id_post**](AuthenticationApi.md#get_dashboard_access_api_v1_auth_dashboard_access_app_id_post) | **POST** /api/v1/auth/dashboard-access/{app_id}/ | Get Dashboard Access
[**logout_api_v1_auth_logout_post**](AuthenticationApi.md#logout_api_v1_auth_logout_post) | **POST** /api/v1/auth/logout/ | Logout


# **expire_all_api_v1_auth_app_app_id_expire_all_post**
> expire_all_api_v1_auth_app_app_id_expire_all_post(app_id, application_token_expire_in, idempotency_key=idempotency_key)

Expire All

Expire all of the tokens associated with a specific Application

### Example

* Bearer Authentication (HTTPBearer):

```python
import openapi_client
from openapi_client.models.application_token_expire_in import ApplicationTokenExpireIn
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: HTTPBearer
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AuthenticationApi(api_client)
    app_id = 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    application_token_expire_in = openapi_client.ApplicationTokenExpireIn() # ApplicationTokenExpireIn | 
    idempotency_key = 'idempotency_key_example' # str | The request's idempotency key (optional)

    try:
        # Expire All
        api_instance.expire_all_api_v1_auth_app_app_id_expire_all_post(app_id, application_token_expire_in, idempotency_key=idempotency_key)
    except Exception as e:
        print("Exception when calling AuthenticationApi->expire_all_api_v1_auth_app_app_id_expire_all_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**|  | 
 **application_token_expire_in** | [**ApplicationTokenExpireIn**](ApplicationTokenExpireIn.md)|  | 
 **idempotency_key** | **str**| The request&#39;s idempotency key | [optional] 

### Return type

void (empty response body)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful Response |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**422** | Validation Error |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_app_portal_access_api_v1_auth_app_portal_access_app_id_post**
> AppPortalAccessOut get_app_portal_access_api_v1_auth_app_portal_access_app_id_post(app_id, app_portal_access_in, idempotency_key=idempotency_key)

Get Consumer App Portal Access

Use this function to get magic links (and authentication codes) for connecting your users to the Consumer Application Portal.

### Example

* Bearer Authentication (HTTPBearer):

```python
import openapi_client
from openapi_client.models.app_portal_access_in import AppPortalAccessIn
from openapi_client.models.app_portal_access_out import AppPortalAccessOut
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: HTTPBearer
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AuthenticationApi(api_client)
    app_id = 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    app_portal_access_in = openapi_client.AppPortalAccessIn() # AppPortalAccessIn | 
    idempotency_key = 'idempotency_key_example' # str | The request's idempotency key (optional)

    try:
        # Get Consumer App Portal Access
        api_response = api_instance.get_app_portal_access_api_v1_auth_app_portal_access_app_id_post(app_id, app_portal_access_in, idempotency_key=idempotency_key)
        print("The response of AuthenticationApi->get_app_portal_access_api_v1_auth_app_portal_access_app_id_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthenticationApi->get_app_portal_access_api_v1_auth_app_portal_access_app_id_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**|  | 
 **app_portal_access_in** | [**AppPortalAccessIn**](AppPortalAccessIn.md)|  | 
 **idempotency_key** | **str**| The request&#39;s idempotency key | [optional] 

### Return type

[**AppPortalAccessOut**](AppPortalAccessOut.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**422** | Validation Error |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_dashboard_access_api_v1_auth_dashboard_access_app_id_post**
> DashboardAccessOut get_dashboard_access_api_v1_auth_dashboard_access_app_id_post(app_id, idempotency_key=idempotency_key)

Get Dashboard Access

DEPRECATED: Please use `app-portal-access` instead.  Use this function to get magic links (and authentication codes) for connecting your users to the Consumer Application Portal.

### Example

* Bearer Authentication (HTTPBearer):

```python
import openapi_client
from openapi_client.models.dashboard_access_out import DashboardAccessOut
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: HTTPBearer
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AuthenticationApi(api_client)
    app_id = 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    idempotency_key = 'idempotency_key_example' # str | The request's idempotency key (optional)

    try:
        # Get Dashboard Access
        api_response = api_instance.get_dashboard_access_api_v1_auth_dashboard_access_app_id_post(app_id, idempotency_key=idempotency_key)
        print("The response of AuthenticationApi->get_dashboard_access_api_v1_auth_dashboard_access_app_id_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthenticationApi->get_dashboard_access_api_v1_auth_dashboard_access_app_id_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**|  | 
 **idempotency_key** | **str**| The request&#39;s idempotency key | [optional] 

### Return type

[**DashboardAccessOut**](DashboardAccessOut.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**422** | Validation Error |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **logout_api_v1_auth_logout_post**
> logout_api_v1_auth_logout_post(idempotency_key=idempotency_key)

Logout

Logout an app token.  Trying to log out other tokens will fail.

### Example

* Bearer Authentication (HTTPBearer):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: HTTPBearer
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AuthenticationApi(api_client)
    idempotency_key = 'idempotency_key_example' # str | The request's idempotency key (optional)

    try:
        # Logout
        api_instance.logout_api_v1_auth_logout_post(idempotency_key=idempotency_key)
    except Exception as e:
        print("Exception when calling AuthenticationApi->logout_api_v1_auth_logout_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idempotency_key** | **str**| The request&#39;s idempotency key | [optional] 

### Return type

void (empty response body)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful Response |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**422** | Validation Error |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

