# openapi_client.DefaultApi

All URIs are relative to *http://tyk.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tyk_apis_api_id_delete**](DefaultApi.md#tyk_apis_api_id_delete) | **DELETE** /tyk/apis/{apiID} | 
[**tyk_apis_api_id_get**](DefaultApi.md#tyk_apis_api_id_get) | **GET** /tyk/apis/{apiID} | 
[**tyk_apis_api_id_put**](DefaultApi.md#tyk_apis_api_id_put) | **PUT** /tyk/apis/{apiID} | 
[**tyk_apis_get**](DefaultApi.md#tyk_apis_get) | **GET** /tyk/apis/ | 
[**tyk_apis_post**](DefaultApi.md#tyk_apis_post) | **POST** /tyk/apis/ | 
[**tyk_health_get**](DefaultApi.md#tyk_health_get) | **GET** /tyk/health/ | 
[**tyk_keys_create_post**](DefaultApi.md#tyk_keys_create_post) | **POST** /tyk/keys/create | 
[**tyk_keys_get**](DefaultApi.md#tyk_keys_get) | **GET** /tyk/keys/ | 
[**tyk_keys_key_id_delete**](DefaultApi.md#tyk_keys_key_id_delete) | **DELETE** /tyk/keys/{keyId} | 
[**tyk_keys_key_id_post**](DefaultApi.md#tyk_keys_key_id_post) | **POST** /tyk/keys/{keyId} | 
[**tyk_keys_key_id_put**](DefaultApi.md#tyk_keys_key_id_put) | **PUT** /tyk/keys/{keyId} | 
[**tyk_oauth_authorize_client_post**](DefaultApi.md#tyk_oauth_authorize_client_post) | **POST** /tyk/oauth/authorize-client/ | 
[**tyk_oauth_clients_api_id_client_id_delete**](DefaultApi.md#tyk_oauth_clients_api_id_client_id_delete) | **DELETE** /tyk/oauth/clients/{apiId}/{clientId} | 
[**tyk_oauth_clients_api_id_get**](DefaultApi.md#tyk_oauth_clients_api_id_get) | **GET** /tyk/oauth/clients/{apiId} | 
[**tyk_oauth_clients_create_post**](DefaultApi.md#tyk_oauth_clients_create_post) | **POST** /tyk/oauth/clients/create | 
[**tyk_oauth_refresh_key_id_delete**](DefaultApi.md#tyk_oauth_refresh_key_id_delete) | **DELETE** /tyk/oauth/refresh/{keyId} | 
[**tyk_reload_get**](DefaultApi.md#tyk_reload_get) | **GET** /tyk/reload/ | 
[**tyk_reload_group_get**](DefaultApi.md#tyk_reload_group_get) | **GET** /tyk/reload/group | 


# **tyk_apis_api_id_delete**
> TykApisApiIDDelete200Response tyk_apis_api_id_delete(x_tyk_authorization, api_id)



Deletes an *API Definition* object, if it exists 

### Example


```python
import openapi_client
from openapi_client.models.tyk_apis_api_id_delete200_response import TykApisApiIDDelete200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://tyk.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://tyk.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    x_tyk_authorization = 'x_tyk_authorization_example' # str | tyk gateway shared secret
    api_id = 'api_id_example' # str | API ID

    try:
        api_response = api_instance.tyk_apis_api_id_delete(x_tyk_authorization, api_id)
        print("The response of DefaultApi->tyk_apis_api_id_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->tyk_apis_api_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_tyk_authorization** | **str**| tyk gateway shared secret | 
 **api_id** | **str**| API ID | 

### Return type

[**TykApisApiIDDelete200Response**](TykApisApiIDDelete200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Succesful API Deletion |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tyk_apis_api_id_get**
> APIDefinition tyk_apis_api_id_get(x_tyk_authorization, api_id)



Gets an *API Definition* object, if it exists 

### Example


```python
import openapi_client
from openapi_client.models.api_definition import APIDefinition
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://tyk.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://tyk.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    x_tyk_authorization = 'x_tyk_authorization_example' # str | tyk gateway shared secret
    api_id = 'api_id_example' # str | API ID

    try:
        api_response = api_instance.tyk_apis_api_id_get(x_tyk_authorization, api_id)
        print("The response of DefaultApi->tyk_apis_api_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->tyk_apis_api_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_tyk_authorization** | **str**| tyk gateway shared secret | 
 **api_id** | **str**| API ID | 

### Return type

[**APIDefinition**](APIDefinition.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Succesful API response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tyk_apis_api_id_put**
> TykApisPost200Response tyk_apis_api_id_put(x_tyk_authorization, api_id, api_definition=api_definition)



Updates an *API Definition* object, if it exists 

### Example


```python
import openapi_client
from openapi_client.models.api_definition import APIDefinition
from openapi_client.models.tyk_apis_post200_response import TykApisPost200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://tyk.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://tyk.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    x_tyk_authorization = 'x_tyk_authorization_example' # str | tyk gateway shared secret
    api_id = 'api_id_example' # str | API ID
    api_definition = openapi_client.APIDefinition() # APIDefinition |  (optional)

    try:
        api_response = api_instance.tyk_apis_api_id_put(x_tyk_authorization, api_id, api_definition=api_definition)
        print("The response of DefaultApi->tyk_apis_api_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->tyk_apis_api_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_tyk_authorization** | **str**| tyk gateway shared secret | 
 **api_id** | **str**| API ID | 
 **api_definition** | [**APIDefinition**](APIDefinition.md)|  | [optional] 

### Return type

[**TykApisPost200Response**](TykApisPost200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Succesful API Deletion |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tyk_apis_get**
> List[APIDefinition] tyk_apis_get(x_tyk_authorization)



Gets a list of *API Definition* objects that are currently live on the gateway  

### Example


```python
import openapi_client
from openapi_client.models.api_definition import APIDefinition
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://tyk.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://tyk.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    x_tyk_authorization = 'x_tyk_authorization_example' # str | tyk gateway shared secret

    try:
        api_response = api_instance.tyk_apis_get(x_tyk_authorization)
        print("The response of DefaultApi->tyk_apis_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->tyk_apis_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_tyk_authorization** | **str**| tyk gateway shared secret | 

### Return type

[**List[APIDefinition]**](APIDefinition.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Succesful list response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tyk_apis_post**
> TykApisPost200Response tyk_apis_post(api_definition=api_definition)



Create an *API Definition* object 

### Example


```python
import openapi_client
from openapi_client.models.api_definition import APIDefinition
from openapi_client.models.tyk_apis_post200_response import TykApisPost200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://tyk.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://tyk.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    api_definition = openapi_client.APIDefinition() # APIDefinition |  (optional)

    try:
        api_response = api_instance.tyk_apis_post(api_definition=api_definition)
        print("The response of DefaultApi->tyk_apis_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->tyk_apis_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_definition** | [**APIDefinition**](APIDefinition.md)|  | [optional] 

### Return type

[**TykApisPost200Response**](TykApisPost200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Succesful API Deletion |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tyk_health_get**
> TykHealthGet200Response tyk_health_get(x_tyk_authorization, api_id)



Gets the health check values for an API if it is being recorded 

### Example


```python
import openapi_client
from openapi_client.models.tyk_health_get200_response import TykHealthGet200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://tyk.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://tyk.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    x_tyk_authorization = 'x_tyk_authorization_example' # str | tyk gateway shared secret
    api_id = 'api_id_example' # str | API ID to query

    try:
        api_response = api_instance.tyk_health_get(x_tyk_authorization, api_id)
        print("The response of DefaultApi->tyk_health_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->tyk_health_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_tyk_authorization** | **str**| tyk gateway shared secret | 
 **api_id** | **str**| API ID to query | 

### Return type

[**TykHealthGet200Response**](TykHealthGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Succesful healthcheck response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tyk_keys_create_post**
> TykKeysCreatePost200Response tyk_keys_create_post(x_tyk_authorization, suppress_reset=suppress_reset, session_object=session_object)



Create a new *API token* with the *session object* defined in the body 

### Example


```python
import openapi_client
from openapi_client.models.session_object import SessionObject
from openapi_client.models.tyk_keys_create_post200_response import TykKeysCreatePost200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://tyk.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://tyk.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    x_tyk_authorization = 'x_tyk_authorization_example' # str | tyk gateway shared secret
    suppress_reset = 3.4 # float | Adding the `suppress_reset` parameter and setting it to `1`, will cause Tyk to not reset the quota limit that is in the current live quota manager. By default Tyk will reset the quota in the live quota manager (initialising it) when ADDing a key. Adding the `suppress_reset` flag to the URL parameters will avoid this behaviour. (optional)
    session_object = openapi_client.SessionObject() # SessionObject |  (optional)

    try:
        api_response = api_instance.tyk_keys_create_post(x_tyk_authorization, suppress_reset=suppress_reset, session_object=session_object)
        print("The response of DefaultApi->tyk_keys_create_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->tyk_keys_create_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_tyk_authorization** | **str**| tyk gateway shared secret | 
 **suppress_reset** | **float**| Adding the &#x60;suppress_reset&#x60; parameter and setting it to &#x60;1&#x60;, will cause Tyk to not reset the quota limit that is in the current live quota manager. By default Tyk will reset the quota in the live quota manager (initialising it) when ADDing a key. Adding the &#x60;suppress_reset&#x60; flag to the URL parameters will avoid this behaviour. | [optional] 
 **session_object** | [**SessionObject**](SessionObject.md)|  | [optional] 

### Return type

[**TykKeysCreatePost200Response**](TykKeysCreatePost200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Key Created Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tyk_keys_get**
> TykKeysGet200Response tyk_keys_get(api_id, x_tyk_authorization)



Gets a list of *key* IDs (will only work with non-hashed installations) 

### Example


```python
import openapi_client
from openapi_client.models.tyk_keys_get200_response import TykKeysGet200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://tyk.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://tyk.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    api_id = 'api_id_example' # str | Back-end to target
    x_tyk_authorization = 'x_tyk_authorization_example' # str | tyk gateway shared secret

    try:
        api_response = api_instance.tyk_keys_get(api_id, x_tyk_authorization)
        print("The response of DefaultApi->tyk_keys_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->tyk_keys_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_id** | **str**| Back-end to target | 
 **x_tyk_authorization** | **str**| tyk gateway shared secret | 

### Return type

[**TykKeysGet200Response**](TykKeysGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tyk_keys_key_id_delete**
> TykApisApiIDDelete200Response tyk_keys_key_id_delete(x_tyk_authorization, key_id, api_id)



Remove this *API token* from the gateway, this will completely destroy the token and metadata associated with the token and instantly stop access from being granted 

### Example


```python
import openapi_client
from openapi_client.models.tyk_apis_api_id_delete200_response import TykApisApiIDDelete200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://tyk.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://tyk.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    x_tyk_authorization = 'x_tyk_authorization_example' # str | tyk gateway shared secret
    key_id = 'key_id_example' # str | Access Token
    api_id = 'api_id_example' # str | Back-end to target

    try:
        api_response = api_instance.tyk_keys_key_id_delete(x_tyk_authorization, key_id, api_id)
        print("The response of DefaultApi->tyk_keys_key_id_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->tyk_keys_key_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_tyk_authorization** | **str**| tyk gateway shared secret | 
 **key_id** | **str**| Access Token | 
 **api_id** | **str**| Back-end to target | 

### Return type

[**TykApisApiIDDelete200Response**](TykApisApiIDDelete200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Key Deleted Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tyk_keys_key_id_post**
> TykKeysKeyIdPost200Response tyk_keys_key_id_post(x_tyk_authorization, key_id, session_object=session_object)



Add a pre-specified *API token* with the *session object* defined in the body, this operatin creates a custom token that dsoes not use the gateway naming convention for tokens 

### Example


```python
import openapi_client
from openapi_client.models.session_object import SessionObject
from openapi_client.models.tyk_keys_key_id_post200_response import TykKeysKeyIdPost200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://tyk.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://tyk.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    x_tyk_authorization = 'x_tyk_authorization_example' # str | tyk gateway shared secret
    key_id = 'key_id_example' # str | Access Token
    session_object = openapi_client.SessionObject() # SessionObject |  (optional)

    try:
        api_response = api_instance.tyk_keys_key_id_post(x_tyk_authorization, key_id, session_object=session_object)
        print("The response of DefaultApi->tyk_keys_key_id_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->tyk_keys_key_id_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_tyk_authorization** | **str**| tyk gateway shared secret | 
 **key_id** | **str**| Access Token | 
 **session_object** | [**SessionObject**](SessionObject.md)|  | [optional] 

### Return type

[**TykKeysKeyIdPost200Response**](TykKeysKeyIdPost200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Key Added Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tyk_keys_key_id_put**
> TykKeysKeyIdPut200Response tyk_keys_key_id_put(x_tyk_authorization, key_id, api_id, suppress_reset=suppress_reset, session_object=session_object)



Update an *API token* with the *session object* defined in the body, this operatin overwrites the existing object 

### Example


```python
import openapi_client
from openapi_client.models.session_object import SessionObject
from openapi_client.models.tyk_keys_key_id_put200_response import TykKeysKeyIdPut200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://tyk.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://tyk.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    x_tyk_authorization = 'x_tyk_authorization_example' # str | tyk gateway shared secret
    key_id = 'key_id_example' # str | Access Token
    api_id = 'api_id_example' # str | Back-end to target
    suppress_reset = 3.4 # float | Adding the `suppress_reset` parameter and setting it to `1`, will cause Tyk to not reset the quota limit that is in the current live quota manager. By default Tyk will reset the quota in the live quota manager (initialising it) when ADDing a key. Adding the `suppress_reset` flag to the URL parameters will avoid this behaviour. (optional)
    session_object = openapi_client.SessionObject() # SessionObject |  (optional)

    try:
        api_response = api_instance.tyk_keys_key_id_put(x_tyk_authorization, key_id, api_id, suppress_reset=suppress_reset, session_object=session_object)
        print("The response of DefaultApi->tyk_keys_key_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->tyk_keys_key_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_tyk_authorization** | **str**| tyk gateway shared secret | 
 **key_id** | **str**| Access Token | 
 **api_id** | **str**| Back-end to target | 
 **suppress_reset** | **float**| Adding the &#x60;suppress_reset&#x60; parameter and setting it to &#x60;1&#x60;, will cause Tyk to not reset the quota limit that is in the current live quota manager. By default Tyk will reset the quota in the live quota manager (initialising it) when ADDing a key. Adding the &#x60;suppress_reset&#x60; flag to the URL parameters will avoid this behaviour. | [optional] 
 **session_object** | [**SessionObject**](SessionObject.md)|  | [optional] 

### Return type

[**TykKeysKeyIdPut200Response**](TykKeysKeyIdPut200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Key Updated Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tyk_oauth_authorize_client_post**
> TykOauthAuthorizeClientPost200Response tyk_oauth_authorize_client_post(x_tyk_authorization, response_type, client_id, redirect_uri, key_rules)



The final request from an authorising party for a redirect URI during the Tyk OAuth flow 

### Example


```python
import openapi_client
from openapi_client.models.tyk_oauth_authorize_client_post200_response import TykOauthAuthorizeClientPost200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://tyk.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://tyk.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    x_tyk_authorization = 'x_tyk_authorization_example' # str | tyk gateway shared secret
    response_type = 'response_type_example' # str | Should be provided by requesting client as part of authorisation request, this should be either `code` or `token` depending on the methods you have specified for the API
    client_id = 'client_id_example' # str | Should be provided by requesting client as part of authorisation request. The Client ID that is making the request
    redirect_uri = 'redirect_uri_example' # str | Should be provided by requesting client as part of authorisation request. Must match with the record stored with Tyk
    key_rules = 'key_rules_example' # str | A string representation of a *Session Object (form-encoded)*. This should be provided by your application in order to apply any quotas or rules to the key

    try:
        api_response = api_instance.tyk_oauth_authorize_client_post(x_tyk_authorization, response_type, client_id, redirect_uri, key_rules)
        print("The response of DefaultApi->tyk_oauth_authorize_client_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->tyk_oauth_authorize_client_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_tyk_authorization** | **str**| tyk gateway shared secret | 
 **response_type** | **str**| Should be provided by requesting client as part of authorisation request, this should be either &#x60;code&#x60; or &#x60;token&#x60; depending on the methods you have specified for the API | 
 **client_id** | **str**| Should be provided by requesting client as part of authorisation request. The Client ID that is making the request | 
 **redirect_uri** | **str**| Should be provided by requesting client as part of authorisation request. Must match with the record stored with Tyk | 
 **key_rules** | **str**| A string representation of a *Session Object (form-encoded)*. This should be provided by your application in order to apply any quotas or rules to the key | 

### Return type

[**TykOauthAuthorizeClientPost200Response**](TykOauthAuthorizeClientPost200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Succesful token response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tyk_oauth_clients_api_id_client_id_delete**
> TykApisApiIDDelete200Response tyk_oauth_clients_api_id_client_id_delete(x_tyk_authorization, api_id, client_id)



Delete the OAuth client 

### Example


```python
import openapi_client
from openapi_client.models.tyk_apis_api_id_delete200_response import TykApisApiIDDelete200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://tyk.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://tyk.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    x_tyk_authorization = 'x_tyk_authorization_example' # str | tyk gateway shared secret
    api_id = 'api_id_example' # str | API ID that owns this client (back end)
    client_id = 'client_id_example' # str | OAuth Client ID to delete

    try:
        api_response = api_instance.tyk_oauth_clients_api_id_client_id_delete(x_tyk_authorization, api_id, client_id)
        print("The response of DefaultApi->tyk_oauth_clients_api_id_client_id_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->tyk_oauth_clients_api_id_client_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_tyk_authorization** | **str**| tyk gateway shared secret | 
 **api_id** | **str**| API ID that owns this client (back end) | 
 **client_id** | **str**| OAuth Client ID to delete | 

### Return type

[**TykApisApiIDDelete200Response**](TykApisApiIDDelete200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Succesful OAuth client deletion |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tyk_oauth_clients_api_id_get**
> List[OAuthClient] tyk_oauth_clients_api_id_get(x_tyk_authorization, api_id)



Get a list of OAuth clients bound to this back end  

### Example


```python
import openapi_client
from openapi_client.models.o_auth_client import OAuthClient
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://tyk.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://tyk.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    x_tyk_authorization = 'x_tyk_authorization_example' # str | tyk gateway shared secret
    api_id = 'api_id_example' # str | API ID that owns this client (back end)

    try:
        api_response = api_instance.tyk_oauth_clients_api_id_get(x_tyk_authorization, api_id)
        print("The response of DefaultApi->tyk_oauth_clients_api_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->tyk_oauth_clients_api_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_tyk_authorization** | **str**| tyk gateway shared secret | 
 **api_id** | **str**| API ID that owns this client (back end) | 

### Return type

[**List[OAuthClient]**](OAuthClient.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Succesful listy response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tyk_oauth_clients_create_post**
> OAuthClient tyk_oauth_clients_create_post(x_tyk_authorization, oauth_client=oauth_client)



Create a new OAuth client 

### Example


```python
import openapi_client
from openapi_client.models.o_auth_client import OAuthClient
from openapi_client.models.tyk_oauth_clients_create_post_request import TykOauthClientsCreatePostRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://tyk.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://tyk.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    x_tyk_authorization = 'x_tyk_authorization_example' # str | tyk gateway shared secret
    oauth_client = openapi_client.TykOauthClientsCreatePostRequest() # TykOauthClientsCreatePostRequest |  (optional)

    try:
        api_response = api_instance.tyk_oauth_clients_create_post(x_tyk_authorization, oauth_client=oauth_client)
        print("The response of DefaultApi->tyk_oauth_clients_create_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->tyk_oauth_clients_create_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_tyk_authorization** | **str**| tyk gateway shared secret | 
 **oauth_client** | [**TykOauthClientsCreatePostRequest**](TykOauthClientsCreatePostRequest.md)|  | [optional] 

### Return type

[**OAuthClient**](OAuthClient.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Succesful create response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tyk_oauth_refresh_key_id_delete**
> TykApisApiIDDelete200Response tyk_oauth_refresh_key_id_delete(x_tyk_authorization, key_id, api_id)



Invalidate a refresh token 

### Example


```python
import openapi_client
from openapi_client.models.tyk_apis_api_id_delete200_response import TykApisApiIDDelete200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://tyk.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://tyk.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    x_tyk_authorization = 'x_tyk_authorization_example' # str | tyk gateway shared secret
    key_id = 'key_id_example' # str | Access Token
    api_id = 'api_id_example' # str | API ID

    try:
        api_response = api_instance.tyk_oauth_refresh_key_id_delete(x_tyk_authorization, key_id, api_id)
        print("The response of DefaultApi->tyk_oauth_refresh_key_id_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->tyk_oauth_refresh_key_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_tyk_authorization** | **str**| tyk gateway shared secret | 
 **key_id** | **str**| Access Token | 
 **api_id** | **str**| API ID | 

### Return type

[**TykApisApiIDDelete200Response**](TykApisApiIDDelete200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Succesful token revoked |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tyk_reload_get**
> TykReloadGet200Response tyk_reload_get(x_tyk_authorization)



Will reload the targetted gateway 

### Example


```python
import openapi_client
from openapi_client.models.tyk_reload_get200_response import TykReloadGet200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://tyk.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://tyk.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    x_tyk_authorization = 'x_tyk_authorization_example' # str | tyk gateway shared secret

    try:
        api_response = api_instance.tyk_reload_get(x_tyk_authorization)
        print("The response of DefaultApi->tyk_reload_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->tyk_reload_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_tyk_authorization** | **str**| tyk gateway shared secret | 

### Return type

[**TykReloadGet200Response**](TykReloadGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Succesful reload response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tyk_reload_group_get**
> TykReloadGet200Response tyk_reload_group_get(x_tyk_authorization)



Will reload the cluster via the targeted gateway 

### Example


```python
import openapi_client
from openapi_client.models.tyk_reload_get200_response import TykReloadGet200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://tyk.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://tyk.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    x_tyk_authorization = 'x_tyk_authorization_example' # str | tyk gateway shared secret

    try:
        api_response = api_instance.tyk_reload_group_get(x_tyk_authorization)
        print("The response of DefaultApi->tyk_reload_group_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->tyk_reload_group_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_tyk_authorization** | **str**| tyk gateway shared secret | 

### Return type

[**TykReloadGet200Response**](TykReloadGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Succesful reload response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

