# openapi_client.ConnectionsApi

All URIs are relative to *https://unify.apideck.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**connection_settings_all**](ConnectionsApi.md#connection_settings_all) | **GET** /vault/connections/{unified_api}/{service_id}/{resource}/config | Get resource settings
[**connection_settings_update**](ConnectionsApi.md#connection_settings_update) | **PATCH** /vault/connections/{unified_api}/{service_id}/{resource}/config | Update settings
[**connections_add**](ConnectionsApi.md#connections_add) | **POST** /vault/connections/{unified_api}/{service_id} | Create connection
[**connections_all**](ConnectionsApi.md#connections_all) | **GET** /vault/connections | Get all connections
[**connections_authorize**](ConnectionsApi.md#connections_authorize) | **GET** /vault/authorize/{service_id}/{application_id} | Authorize
[**connections_callback**](ConnectionsApi.md#connections_callback) | **GET** /vault/callback | Callback
[**connections_delete**](ConnectionsApi.md#connections_delete) | **DELETE** /vault/connections/{unified_api}/{service_id} | Deletes a connection
[**connections_import**](ConnectionsApi.md#connections_import) | **POST** /vault/connections/{unified_api}/{service_id}/import | Import connection
[**connections_one**](ConnectionsApi.md#connections_one) | **GET** /vault/connections/{unified_api}/{service_id} | Get connection
[**connections_revoke**](ConnectionsApi.md#connections_revoke) | **GET** /vault/revoke/{service_id}/{application_id} | Revoke connection
[**connections_token**](ConnectionsApi.md#connections_token) | **POST** /vault/connections/{unified_api}/{service_id}/token | Get Access Token
[**connections_update**](ConnectionsApi.md#connections_update) | **PATCH** /vault/connections/{unified_api}/{service_id} | Update connection
[**custom_fields_all**](ConnectionsApi.md#custom_fields_all) | **GET** /vault/connections/{unified_api}/{service_id}/{resource}/custom-fields | Get resource custom fields


# **connection_settings_all**
> GetConnectionResponse connection_settings_all(x_apideck_consumer_id, x_apideck_app_id, unified_api, service_id, resource)

Get resource settings

This endpoint returns custom settings and their defaults required by connection for a given resource. 

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.get_connection_response import GetConnectionResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://unify.apideck.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://unify.apideck.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ConnectionsApi(api_client)
    x_apideck_consumer_id = 'x_apideck_consumer_id_example' # str | ID of the consumer which you want to get or push data from
    x_apideck_app_id = 'dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' # str | The ID of your Unify application
    unified_api = 'crm' # str | Unified API
    service_id = 'pipedrive' # str | Service ID of the resource to return
    resource = 'leads' # str | Name of the resource (plural)

    try:
        # Get resource settings
        api_response = api_instance.connection_settings_all(x_apideck_consumer_id, x_apideck_app_id, unified_api, service_id, resource)
        print("The response of ConnectionsApi->connection_settings_all:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectionsApi->connection_settings_all: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_apideck_consumer_id** | **str**| ID of the consumer which you want to get or push data from | 
 **x_apideck_app_id** | **str**| The ID of your Unify application | 
 **unified_api** | **str**| Unified API | 
 **service_id** | **str**| Service ID of the resource to return | 
 **resource** | **str**| Name of the resource (plural) | 

### Return type

[**GetConnectionResponse**](GetConnectionResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Connection |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**402** | Payment Required |  -  |
**404** | The specified resource was not found |  -  |
**422** | Unprocessable |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **connection_settings_update**
> UpdateConnectionResponse connection_settings_update(x_apideck_consumer_id, x_apideck_app_id, service_id, unified_api, resource, connection)

Update settings

Update default values for a connection's resource settings

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.connection import Connection
from openapi_client.models.update_connection_response import UpdateConnectionResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://unify.apideck.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://unify.apideck.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ConnectionsApi(api_client)
    x_apideck_consumer_id = 'x_apideck_consumer_id_example' # str | ID of the consumer which you want to get or push data from
    x_apideck_app_id = 'dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' # str | The ID of your Unify application
    service_id = 'pipedrive' # str | Service ID of the resource to return
    unified_api = 'crm' # str | Unified API
    resource = 'leads' # str | Name of the resource (plural)
    connection = openapi_client.Connection() # Connection | Fields that need to be updated on the resource

    try:
        # Update settings
        api_response = api_instance.connection_settings_update(x_apideck_consumer_id, x_apideck_app_id, service_id, unified_api, resource, connection)
        print("The response of ConnectionsApi->connection_settings_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectionsApi->connection_settings_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_apideck_consumer_id** | **str**| ID of the consumer which you want to get or push data from | 
 **x_apideck_app_id** | **str**| The ID of your Unify application | 
 **service_id** | **str**| Service ID of the resource to return | 
 **unified_api** | **str**| Unified API | 
 **resource** | **str**| Name of the resource (plural) | 
 **connection** | [**Connection**](Connection.md)| Fields that need to be updated on the resource | 

### Return type

[**UpdateConnectionResponse**](UpdateConnectionResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Connection updated |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**402** | Payment Required |  -  |
**404** | The specified resource was not found |  -  |
**422** | Unprocessable |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **connections_add**
> CreateConnectionResponse connections_add(x_apideck_consumer_id, x_apideck_app_id, service_id, unified_api, connection)

Create connection

Create an authorized connection 

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.connection import Connection
from openapi_client.models.create_connection_response import CreateConnectionResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://unify.apideck.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://unify.apideck.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ConnectionsApi(api_client)
    x_apideck_consumer_id = 'x_apideck_consumer_id_example' # str | ID of the consumer which you want to get or push data from
    x_apideck_app_id = 'dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' # str | The ID of your Unify application
    service_id = 'pipedrive' # str | Service ID of the resource to return
    unified_api = 'crm' # str | Unified API
    connection = openapi_client.Connection() # Connection | Fields that need to be persisted on the resource

    try:
        # Create connection
        api_response = api_instance.connections_add(x_apideck_consumer_id, x_apideck_app_id, service_id, unified_api, connection)
        print("The response of ConnectionsApi->connections_add:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectionsApi->connections_add: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_apideck_consumer_id** | **str**| ID of the consumer which you want to get or push data from | 
 **x_apideck_app_id** | **str**| The ID of your Unify application | 
 **service_id** | **str**| Service ID of the resource to return | 
 **unified_api** | **str**| Unified API | 
 **connection** | [**Connection**](Connection.md)| Fields that need to be persisted on the resource | 

### Return type

[**CreateConnectionResponse**](CreateConnectionResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Connection created |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**402** | Payment Required |  -  |
**404** | The specified resource was not found |  -  |
**422** | Unprocessable |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **connections_all**
> GetConnectionsResponse connections_all(x_apideck_consumer_id, x_apideck_app_id, api=api, configured=configured)

Get all connections

This endpoint includes all the configured integrations and contains the required assets to build an integrations page where your users can install integrations. OAuth2 supported integrations will contain authorize and revoke links to handle the authentication flows. 

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.get_connections_response import GetConnectionsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://unify.apideck.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://unify.apideck.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ConnectionsApi(api_client)
    x_apideck_consumer_id = 'x_apideck_consumer_id_example' # str | ID of the consumer which you want to get or push data from
    x_apideck_app_id = 'dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' # str | The ID of your Unify application
    api = 'crm' # str | Scope results to Unified API (optional)
    configured = true # bool | Scopes results to connections that have been configured or not (optional)

    try:
        # Get all connections
        api_response = api_instance.connections_all(x_apideck_consumer_id, x_apideck_app_id, api=api, configured=configured)
        print("The response of ConnectionsApi->connections_all:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectionsApi->connections_all: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_apideck_consumer_id** | **str**| ID of the consumer which you want to get or push data from | 
 **x_apideck_app_id** | **str**| The ID of your Unify application | 
 **api** | **str**| Scope results to Unified API | [optional] 
 **configured** | **bool**| Scopes results to connections that have been configured or not | [optional] 

### Return type

[**GetConnectionsResponse**](GetConnectionsResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Connections |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**402** | Payment Required |  -  |
**404** | The specified resource was not found |  -  |
**422** | Unprocessable |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **connections_authorize**
> UnexpectedErrorResponse connections_authorize(service_id, application_id, state, redirect_uri, scope=scope)

Authorize

__In most cases the authorize link is provided in the ``/connections`` endpoint. Normally you don't need to manually generate these links.__  Use this endpoint to authenticate a user with a connector. It will return a 301 redirect to the downstream connector endpoints.  Auth links will have a state parameter included to verify the validity of the request. This is the url your users will use to activate OAuth supported integration providers.  Vault handles the complete Authorization Code Grant Type Flow for you and will redirect you to the dynamic redirect uri you have appended to the url in case this is missing the default redirect uri you have configured for your Unify application. 

### Example


```python
import openapi_client
from openapi_client.models.unexpected_error_response import UnexpectedErrorResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://unify.apideck.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://unify.apideck.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ConnectionsApi(api_client)
    service_id = 'pipedrive' # str | Service ID of the resource to return
    application_id = 'dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' # str | Application ID of the resource to return
    state = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb25zdW1lcl9pZCI6InRlc3RfdXNlcl9pZCIsInVuaWZpZWRfYXBpIjoiZGVmYXVsdCIsInNlcnZpY2VfaWQiOiJ0ZWFtbGVhZGVyIiwiYXBwbGljYXRpb25faWQiOiIxMTExIiwiaWF0IjoxNjIyMTI2Nzg3fQ.97_pn1UAXc7mctXBdr15czUNO1jjdQ9sJUOIE_Myzbk' # str | An opaque value the applications adds to the initial request that the authorization server includes when redirecting the back to the application. This value must be used by the application to prevent CSRF attacks.
    redirect_uri = 'http://example.com/integrations' # str | URL to redirect back to after authorization. When left empty the default configured redirect uri will be used.
    scope = ['[\"openid\",\"leads:write\",\"profile:read\"]'] # List[str] | One or more OAuth scopes to request from the connector. OAuth scopes control the set of resources and operations that are allowed after authorization. Refer to the connector's documentation for the available scopes. (optional)

    try:
        # Authorize
        api_response = api_instance.connections_authorize(service_id, application_id, state, redirect_uri, scope=scope)
        print("The response of ConnectionsApi->connections_authorize:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectionsApi->connections_authorize: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **str**| Service ID of the resource to return | 
 **application_id** | **str**| Application ID of the resource to return | 
 **state** | **str**| An opaque value the applications adds to the initial request that the authorization server includes when redirecting the back to the application. This value must be used by the application to prevent CSRF attacks. | 
 **redirect_uri** | **str**| URL to redirect back to after authorization. When left empty the default configured redirect uri will be used. | 
 **scope** | [**List[str]**](str.md)| One or more OAuth scopes to request from the connector. OAuth scopes control the set of resources and operations that are allowed after authorization. Refer to the connector&#39;s documentation for the available scopes. | [optional] 

### Return type

[**UnexpectedErrorResponse**](UnexpectedErrorResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**301** | redirect |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**402** | Payment Required |  -  |
**404** | The specified resource was not found |  -  |
**422** | Unprocessable |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **connections_callback**
> UnexpectedErrorResponse connections_callback(state, code)

Callback

This endpoint gets called after the triggering the authorize flow.  Callback links need a state and code parameter to verify the validity of the request. 

### Example


```python
import openapi_client
from openapi_client.models.unexpected_error_response import UnexpectedErrorResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://unify.apideck.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://unify.apideck.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ConnectionsApi(api_client)
    state = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb25zdW1lcl9pZCI6InRlc3RfdXNlcl9pZCIsInVuaWZpZWRfYXBpIjoiZGVmYXVsdCIsInNlcnZpY2VfaWQiOiJ0ZWFtbGVhZGVyIiwiYXBwbGljYXRpb25faWQiOiIxMTExIiwiaWF0IjoxNjIyMTI2Nzg3fQ.97_pn1UAXc7mctXBdr15czUNO1jjdQ9sJUOIE_Myzbk' # str | An opaque value the applications adds to the initial request that the authorization server includes when redirecting the back to the application. This value must be used by the application to prevent CSRF attacks.
    code = 'g0ZGZmNjVmOWI' # str | An authorization code from the connector which Apideck Vault will later exchange for an access token.

    try:
        # Callback
        api_response = api_instance.connections_callback(state, code)
        print("The response of ConnectionsApi->connections_callback:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectionsApi->connections_callback: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **state** | **str**| An opaque value the applications adds to the initial request that the authorization server includes when redirecting the back to the application. This value must be used by the application to prevent CSRF attacks. | 
 **code** | **str**| An authorization code from the connector which Apideck Vault will later exchange for an access token. | 

### Return type

[**UnexpectedErrorResponse**](UnexpectedErrorResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**301** | callback |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**402** | Payment Required |  -  |
**404** | The specified resource was not found |  -  |
**422** | Unprocessable |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **connections_delete**
> connections_delete(x_apideck_consumer_id, x_apideck_app_id, service_id, unified_api)

Deletes a connection

Deletes a connection

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://unify.apideck.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://unify.apideck.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ConnectionsApi(api_client)
    x_apideck_consumer_id = 'x_apideck_consumer_id_example' # str | ID of the consumer which you want to get or push data from
    x_apideck_app_id = 'dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' # str | The ID of your Unify application
    service_id = 'pipedrive' # str | Service ID of the resource to return
    unified_api = 'crm' # str | Unified API

    try:
        # Deletes a connection
        api_instance.connections_delete(x_apideck_consumer_id, x_apideck_app_id, service_id, unified_api)
    except Exception as e:
        print("Exception when calling ConnectionsApi->connections_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_apideck_consumer_id** | **str**| ID of the consumer which you want to get or push data from | 
 **x_apideck_app_id** | **str**| The ID of your Unify application | 
 **service_id** | **str**| Service ID of the resource to return | 
 **unified_api** | **str**| Unified API | 

### Return type

void (empty response body)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Resource deleted |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**402** | Payment Required |  -  |
**404** | The specified resource was not found |  -  |
**422** | Unprocessable |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **connections_import**
> CreateConnectionResponse connections_import(x_apideck_consumer_id, x_apideck_app_id, service_id, unified_api, connection_import_data)

Import connection

Import an authorized connection. 

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.connection_import_data import ConnectionImportData
from openapi_client.models.create_connection_response import CreateConnectionResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://unify.apideck.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://unify.apideck.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ConnectionsApi(api_client)
    x_apideck_consumer_id = 'x_apideck_consumer_id_example' # str | ID of the consumer which you want to get or push data from
    x_apideck_app_id = 'dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' # str | The ID of your Unify application
    service_id = 'pipedrive' # str | Service ID of the resource to return
    unified_api = 'crm' # str | Unified API
    connection_import_data = openapi_client.ConnectionImportData() # ConnectionImportData | Fields that need to be persisted on the resource

    try:
        # Import connection
        api_response = api_instance.connections_import(x_apideck_consumer_id, x_apideck_app_id, service_id, unified_api, connection_import_data)
        print("The response of ConnectionsApi->connections_import:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectionsApi->connections_import: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_apideck_consumer_id** | **str**| ID of the consumer which you want to get or push data from | 
 **x_apideck_app_id** | **str**| The ID of your Unify application | 
 **service_id** | **str**| Service ID of the resource to return | 
 **unified_api** | **str**| Unified API | 
 **connection_import_data** | [**ConnectionImportData**](ConnectionImportData.md)| Fields that need to be persisted on the resource | 

### Return type

[**CreateConnectionResponse**](CreateConnectionResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Connection created |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**402** | Payment Required |  -  |
**404** | The specified resource was not found |  -  |
**422** | Unprocessable |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **connections_one**
> GetConnectionResponse connections_one(x_apideck_consumer_id, x_apideck_app_id, service_id, unified_api)

Get connection

Get a connection

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.get_connection_response import GetConnectionResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://unify.apideck.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://unify.apideck.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ConnectionsApi(api_client)
    x_apideck_consumer_id = 'x_apideck_consumer_id_example' # str | ID of the consumer which you want to get or push data from
    x_apideck_app_id = 'dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' # str | The ID of your Unify application
    service_id = 'pipedrive' # str | Service ID of the resource to return
    unified_api = 'crm' # str | Unified API

    try:
        # Get connection
        api_response = api_instance.connections_one(x_apideck_consumer_id, x_apideck_app_id, service_id, unified_api)
        print("The response of ConnectionsApi->connections_one:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectionsApi->connections_one: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_apideck_consumer_id** | **str**| ID of the consumer which you want to get or push data from | 
 **x_apideck_app_id** | **str**| The ID of your Unify application | 
 **service_id** | **str**| Service ID of the resource to return | 
 **unified_api** | **str**| Unified API | 

### Return type

[**GetConnectionResponse**](GetConnectionResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Connection |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**402** | Payment Required |  -  |
**404** | The specified resource was not found |  -  |
**422** | Unprocessable |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **connections_revoke**
> UnexpectedErrorResponse connections_revoke(service_id, application_id, state, redirect_uri)

Revoke connection

__In most cases the authorize link is provided in the ``/connections`` endpoint. Normally you don't need to manually generate these links.__  Use this endpoint to revoke an existing OAuth connector.  Auth links will have a state parameter included to verify the validity of the request. This is the url your users will use to activate OAuth supported integration providers.  Vault handles the complete revoke flow for you and will redirect you to the dynamic redirect uri you have appended to the url in case this is missing the default redirect uri you have configured for your Unify application. 

### Example


```python
import openapi_client
from openapi_client.models.unexpected_error_response import UnexpectedErrorResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://unify.apideck.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://unify.apideck.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ConnectionsApi(api_client)
    service_id = 'pipedrive' # str | Service ID of the resource to return
    application_id = 'dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' # str | Application ID of the resource to return
    state = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb25zdW1lcl9pZCI6InRlc3RfdXNlcl9pZCIsInVuaWZpZWRfYXBpIjoiZGVmYXVsdCIsInNlcnZpY2VfaWQiOiJ0ZWFtbGVhZGVyIiwiYXBwbGljYXRpb25faWQiOiIxMTExIiwiaWF0IjoxNjIyMTI2Nzg3fQ.97_pn1UAXc7mctXBdr15czUNO1jjdQ9sJUOIE_Myzbk' # str | An opaque value the applications adds to the initial request that the authorization server includes when redirecting the back to the application. This value must be used by the application to prevent CSRF attacks.
    redirect_uri = 'http://example.com/integrations' # str | URL to redirect back to after authorization. When left empty the default configured redirect uri will be used.

    try:
        # Revoke connection
        api_response = api_instance.connections_revoke(service_id, application_id, state, redirect_uri)
        print("The response of ConnectionsApi->connections_revoke:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectionsApi->connections_revoke: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **str**| Service ID of the resource to return | 
 **application_id** | **str**| Application ID of the resource to return | 
 **state** | **str**| An opaque value the applications adds to the initial request that the authorization server includes when redirecting the back to the application. This value must be used by the application to prevent CSRF attacks. | 
 **redirect_uri** | **str**| URL to redirect back to after authorization. When left empty the default configured redirect uri will be used. | 

### Return type

[**UnexpectedErrorResponse**](UnexpectedErrorResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**301** | redirect |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**402** | Payment Required |  -  |
**404** | The specified resource was not found |  -  |
**422** | Unprocessable |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **connections_token**
> GetConnectionResponse connections_token(x_apideck_consumer_id, x_apideck_app_id, service_id, unified_api, body=body)

Get Access Token

Get an access token for a connection and store it in Vault. Currently only supported for connections with the client_credentials OAuth grant type.  Note that the access token will not be returned in the response. A 200 response code indicates a valid access token was stored on the connection. 

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.get_connection_response import GetConnectionResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://unify.apideck.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://unify.apideck.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ConnectionsApi(api_client)
    x_apideck_consumer_id = 'x_apideck_consumer_id_example' # str | ID of the consumer which you want to get or push data from
    x_apideck_app_id = 'dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' # str | The ID of your Unify application
    service_id = 'pipedrive' # str | Service ID of the resource to return
    unified_api = 'crm' # str | Unified API
    body = None # object |  (optional)

    try:
        # Get Access Token
        api_response = api_instance.connections_token(x_apideck_consumer_id, x_apideck_app_id, service_id, unified_api, body=body)
        print("The response of ConnectionsApi->connections_token:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectionsApi->connections_token: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_apideck_consumer_id** | **str**| ID of the consumer which you want to get or push data from | 
 **x_apideck_app_id** | **str**| The ID of your Unify application | 
 **service_id** | **str**| Service ID of the resource to return | 
 **unified_api** | **str**| Unified API | 
 **body** | **object**|  | [optional] 

### Return type

[**GetConnectionResponse**](GetConnectionResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Connection |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**402** | Payment Required |  -  |
**404** | The specified resource was not found |  -  |
**422** | Unprocessable |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **connections_update**
> UpdateConnectionResponse connections_update(x_apideck_consumer_id, x_apideck_app_id, service_id, unified_api, connection)

Update connection

Update a connection

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.connection import Connection
from openapi_client.models.update_connection_response import UpdateConnectionResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://unify.apideck.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://unify.apideck.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ConnectionsApi(api_client)
    x_apideck_consumer_id = 'x_apideck_consumer_id_example' # str | ID of the consumer which you want to get or push data from
    x_apideck_app_id = 'dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' # str | The ID of your Unify application
    service_id = 'pipedrive' # str | Service ID of the resource to return
    unified_api = 'crm' # str | Unified API
    connection = openapi_client.Connection() # Connection | Fields that need to be updated on the resource

    try:
        # Update connection
        api_response = api_instance.connections_update(x_apideck_consumer_id, x_apideck_app_id, service_id, unified_api, connection)
        print("The response of ConnectionsApi->connections_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectionsApi->connections_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_apideck_consumer_id** | **str**| ID of the consumer which you want to get or push data from | 
 **x_apideck_app_id** | **str**| The ID of your Unify application | 
 **service_id** | **str**| Service ID of the resource to return | 
 **unified_api** | **str**| Unified API | 
 **connection** | [**Connection**](Connection.md)| Fields that need to be updated on the resource | 

### Return type

[**UpdateConnectionResponse**](UpdateConnectionResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Connection updated |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**402** | Payment Required |  -  |
**404** | The specified resource was not found |  -  |
**422** | Unprocessable |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **custom_fields_all**
> GetCustomFieldsResponse custom_fields_all(x_apideck_consumer_id, x_apideck_app_id, unified_api, service_id, resource)

Get resource custom fields

This endpoint returns an custom fields on a connection resource. 

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.get_custom_fields_response import GetCustomFieldsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://unify.apideck.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://unify.apideck.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ConnectionsApi(api_client)
    x_apideck_consumer_id = 'x_apideck_consumer_id_example' # str | ID of the consumer which you want to get or push data from
    x_apideck_app_id = 'dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' # str | The ID of your Unify application
    unified_api = 'crm' # str | Unified API
    service_id = 'pipedrive' # str | Service ID of the resource to return
    resource = 'leads' # str | Name of the resource (plural)

    try:
        # Get resource custom fields
        api_response = api_instance.custom_fields_all(x_apideck_consumer_id, x_apideck_app_id, unified_api, service_id, resource)
        print("The response of ConnectionsApi->custom_fields_all:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectionsApi->custom_fields_all: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_apideck_consumer_id** | **str**| ID of the consumer which you want to get or push data from | 
 **x_apideck_app_id** | **str**| The ID of your Unify application | 
 **unified_api** | **str**| Unified API | 
 **service_id** | **str**| Service ID of the resource to return | 
 **resource** | **str**| Name of the resource (plural) | 

### Return type

[**GetCustomFieldsResponse**](GetCustomFieldsResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Custom mapping |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**402** | Payment Required |  -  |
**404** | The specified resource was not found |  -  |
**422** | Unprocessable |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

