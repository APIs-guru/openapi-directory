# openapi_client.AuthenticationApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_sub_user_keys_get_sub_user_keys_get**](AuthenticationApi.md#get_sub_user_keys_get_sub_user_keys_get) | **GET** /getSubUserKeys | Get all Sub User Keys associated with your account.
[**make_sub_user_key_make_sub_user_key_post**](AuthenticationApi.md#make_sub_user_key_make_sub_user_key_post) | **POST** /makeSubUserKey | Generate a Sub User Key that can be used by your users to make API calls in frontend applications.
[**make_token_get_token_get**](AuthenticationApi.md#make_token_get_token_get) | **GET** /getToken | Get a JWT from your API credentials
[**make_token_get_token_post**](AuthenticationApi.md#make_token_get_token_post) | **POST** /getToken | Get a JWT from your API credentials
[**revoke_sub_user_key_revoke_sub_user_key_put**](AuthenticationApi.md#revoke_sub_user_key_revoke_sub_user_key_put) | **PUT** /revokeSubUserKey | Revoke a Sub User Key associated with your account.


# **get_sub_user_keys_get_sub_user_keys_get**
> GenericResponse get_sub_user_keys_get_sub_user_keys_get(api_id, api_key)

Get all Sub User Keys associated with your account.

Get a list of your issued SubUser API Keys. Includes active and revoked keys.

### Example


```python
import openapi_client
from openapi_client.models.generic_response import GenericResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AuthenticationApi(api_client)
    api_id = 'api_id_example' # str | 
    api_key = 'api_key_example' # str | 

    try:
        # Get all Sub User Keys associated with your account.
        api_response = api_instance.get_sub_user_keys_get_sub_user_keys_get(api_id, api_key)
        print("The response of AuthenticationApi->get_sub_user_keys_get_sub_user_keys_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthenticationApi->get_sub_user_keys_get_sub_user_keys_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_id** | **str**|  | 
 **api_key** | **str**|  | 

### Return type

[**GenericResponse**](GenericResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **make_sub_user_key_make_sub_user_key_post**
> SubUserJSONWebToken make_sub_user_key_make_sub_user_key_post(api_id, api_key, endpoint_list, site_name=site_name)

Generate a Sub User Key that can be used by your users to make API calls in frontend applications.

This endpoint is only fully available to users with a paid plan. Users on Basic or Trial plans may only create keys valid on the \"localhost\" domain. This endpoint creates an API key that can be embedded in frontend applications such as web pages that allow your users to directly make API calls.  The \"endpoints\" value is an array of strings that name the allowed endpoints that may be called using the Sub User Key. Passing a \"*\" value in the array will allow all endpoints that require a JWT (JSON Web Token) to be called by the Sub User Key. The keys are valid for as long as your account is valid or you revoke the Sub User Key. All API calls made by the Sub User Keys are billed to your account. Additionally you should not call this endpoint or the /revokeSubUserKey endpoint at a combined rate  higher than once per second. 

### Example


```python
import openapi_client
from openapi_client.models.endpoint_list import EndpointList
from openapi_client.models.sub_user_json_web_token import SubUserJSONWebToken
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AuthenticationApi(api_client)
    api_id = 'api_id_example' # str | 
    api_key = 'api_key_example' # str | 
    endpoint_list = openapi_client.EndpointList() # EndpointList | 
    site_name = 'localhost' # str |  (optional) (default to 'localhost')

    try:
        # Generate a Sub User Key that can be used by your users to make API calls in frontend applications.
        api_response = api_instance.make_sub_user_key_make_sub_user_key_post(api_id, api_key, endpoint_list, site_name=site_name)
        print("The response of AuthenticationApi->make_sub_user_key_make_sub_user_key_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthenticationApi->make_sub_user_key_make_sub_user_key_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_id** | **str**|  | 
 **api_key** | **str**|  | 
 **endpoint_list** | [**EndpointList**](EndpointList.md)|  | 
 **site_name** | **str**|  | [optional] [default to &#39;localhost&#39;]

### Return type

[**SubUserJSONWebToken**](SubUserJSONWebToken.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **make_token_get_token_get**
> JSONWebToken make_token_get_token_get(api_id, api_key)

Get a JWT from your API credentials

This is the first function you should call.   If you are accessing our API through a third party provider they will handle authenticating to our API for you  and you will not need call this function or retrieve a JSON Web Token.   All other functions require the JSON Web Token (JWT) from this function to  be incuded in their arguments. The value of the \"token\" field is the actual JWT and any other values in the returned JSON are metadata there for your convenience. Tokens are valid for a default of 1 hour (3600 seconds). If you try calling an API endpoint with a missing, invalid, or expired JWT it will return a HTTP 403 code. You would then need to call this end point to get a new token.

### Example


```python
import openapi_client
from openapi_client.models.json_web_token import JSONWebToken
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AuthenticationApi(api_client)
    api_id = 'api_id_example' # str | 
    api_key = 'api_key_example' # str | 

    try:
        # Get a JWT from your API credentials
        api_response = api_instance.make_token_get_token_get(api_id, api_key)
        print("The response of AuthenticationApi->make_token_get_token_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthenticationApi->make_token_get_token_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_id** | **str**|  | 
 **api_key** | **str**|  | 

### Return type

[**JSONWebToken**](JSONWebToken.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **make_token_get_token_post**
> JSONWebToken make_token_get_token_post(api_id, api_key)

Get a JWT from your API credentials

This is the first function you should call.   If you are accessing our API through a third party provider they will handle authenticating to our API for you  and you will not need call this function or retrieve a JSON Web Token.   All other functions require the JSON Web Token (JWT) from this function to  be incuded in their arguments. The value of the \"token\" field is the actual JWT and any other values in the returned JSON are metadata there for your convenience. Tokens are valid for a default of 1 hour (3600 seconds). If you try calling an API endpoint with a missing, invalid, or expired JWT it will return a HTTP 403 code. You would then need to call this end point to get a new token.

### Example


```python
import openapi_client
from openapi_client.models.json_web_token import JSONWebToken
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AuthenticationApi(api_client)
    api_id = 'api_id_example' # str | 
    api_key = 'api_key_example' # str | 

    try:
        # Get a JWT from your API credentials
        api_response = api_instance.make_token_get_token_post(api_id, api_key)
        print("The response of AuthenticationApi->make_token_get_token_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthenticationApi->make_token_get_token_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_id** | **str**|  | 
 **api_key** | **str**|  | 

### Return type

[**JSONWebToken**](JSONWebToken.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **revoke_sub_user_key_revoke_sub_user_key_put**
> GenericResponse revoke_sub_user_key_revoke_sub_user_key_put(api_id, api_key, sub_user_key_uuid)

Revoke a Sub User Key associated with your account.

Revoke a SubUser API Key with the given UUID. This action can not be undone.

### Example


```python
import openapi_client
from openapi_client.models.generic_response import GenericResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AuthenticationApi(api_client)
    api_id = 'api_id_example' # str | 
    api_key = 'api_key_example' # str | 
    sub_user_key_uuid = 'sub_user_key_uuid_example' # str | 

    try:
        # Revoke a Sub User Key associated with your account.
        api_response = api_instance.revoke_sub_user_key_revoke_sub_user_key_put(api_id, api_key, sub_user_key_uuid)
        print("The response of AuthenticationApi->revoke_sub_user_key_revoke_sub_user_key_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthenticationApi->revoke_sub_user_key_revoke_sub_user_key_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_id** | **str**|  | 
 **api_key** | **str**|  | 
 **sub_user_key_uuid** | **str**|  | 

### Return type

[**GenericResponse**](GenericResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

