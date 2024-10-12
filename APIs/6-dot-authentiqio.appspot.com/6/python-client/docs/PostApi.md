# openapi_client.PostApi

All URIs are relative to *https://6-dot-authentiqio.appspot.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**key_register_0**](PostApi.md#key_register_0) | **POST** /key | 
[**key_update_0**](PostApi.md#key_update_0) | **POST** /key/{PK} | 
[**push_login_request_0**](PostApi.md#push_login_request_0) | **POST** /login | 
[**sign_confirm_0**](PostApi.md#sign_confirm_0) | **POST** /scope/{job} | 
[**sign_request_0**](PostApi.md#sign_request_0) | **POST** /scope | 


# **key_register_0**
> KeyRegister201Response key_register_0(authentiq_id)



Register a new ID `JWT(sub, devtoken)`  v5: `JWT(sub, pk, devtoken, ...)`  See: https://github.com/skion/authentiq/wiki/JWT-Examples 

### Example


```python
import openapi_client
from openapi_client.models.authentiq_id import AuthentiqID
from openapi_client.models.key_register201_response import KeyRegister201Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://6-dot-authentiqio.appspot.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://6-dot-authentiqio.appspot.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PostApi(api_client)
    authentiq_id = openapi_client.AuthentiqID() # AuthentiqID | Authentiq ID to register

    try:
        api_response = api_instance.key_register_0(authentiq_id)
        print("The response of PostApi->key_register_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PostApi->key_register_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authentiq_id** | [**AuthentiqID**](AuthentiqID.md)| Authentiq ID to register | 

### Return type

[**KeyRegister201Response**](KeyRegister201Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/jwt
 - **Accept**: application/json, */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successfully registered |  -  |
**409** | Key already registered &#x60;duplicate-key&#x60; |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **key_update_0**
> KeyBind200Response key_update_0(pk, authentiq_id)



update properties of an Authentiq ID. (not operational in v4; use PUT for now)  v5: POST issuer-signed email & phone scopes in a self-signed JWT  See: https://github.com/skion/authentiq/wiki/JWT-Examples 

### Example


```python
import openapi_client
from openapi_client.models.authentiq_id import AuthentiqID
from openapi_client.models.key_bind200_response import KeyBind200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://6-dot-authentiqio.appspot.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://6-dot-authentiqio.appspot.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PostApi(api_client)
    pk = 'pk_example' # str | Public Signing Key - Authentiq ID (43 chars)
    authentiq_id = openapi_client.AuthentiqID() # AuthentiqID | Authentiq ID to register

    try:
        api_response = api_instance.key_update_0(pk, authentiq_id)
        print("The response of PostApi->key_update_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PostApi->key_update_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pk** | **str**| Public Signing Key - Authentiq ID (43 chars) | 
 **authentiq_id** | [**AuthentiqID**](AuthentiqID.md)| Authentiq ID to register | 

### Return type

[**KeyBind200Response**](KeyBind200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/jwt
 - **Accept**: application/json, */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated |  -  |
**404** | Unknown key &#x60;unknown-key&#x60; |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **push_login_request_0**
> PushLoginRequest200Response push_login_request_0(param_callback, push_token)



push sign-in request See: https://github.com/skion/authentiq/wiki/JWT-Examples 

### Example


```python
import openapi_client
from openapi_client.models.push_login_request200_response import PushLoginRequest200Response
from openapi_client.models.push_token import PushToken
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://6-dot-authentiqio.appspot.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://6-dot-authentiqio.appspot.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PostApi(api_client)
    param_callback = 'param_callback_example' # str | URI App will connect to
    push_token = openapi_client.PushToken() # PushToken | Push Token.

    try:
        api_response = api_instance.push_login_request_0(param_callback, push_token)
        print("The response of PostApi->push_login_request_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PostApi->push_login_request_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **param_callback** | **str**| URI App will connect to | 
 **push_token** | [**PushToken**](PushToken.md)| Push Token. | 

### Return type

[**PushLoginRequest200Response**](PushLoginRequest200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/jwt
 - **Accept**: application/json, */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**401** | Unauthorized for this callback audience &#x60;aud-error&#x60; or JWT should be self-signed &#x60;auth-error&#x60; |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sign_confirm_0**
> KeyBind200Response sign_confirm_0(job)



this is a scope confirmation

### Example


```python
import openapi_client
from openapi_client.models.key_bind200_response import KeyBind200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://6-dot-authentiqio.appspot.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://6-dot-authentiqio.appspot.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PostApi(api_client)
    job = 'job_example' # str | Job ID (20 chars)

    try:
        api_response = api_instance.sign_confirm_0(job)
        print("The response of PostApi->sign_confirm_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PostApi->sign_confirm_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **job** | **str**| Job ID (20 chars) | 

### Return type

[**KeyBind200Response**](KeyBind200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Successfully confirmed |  -  |
**401** | Confirmation error &#x60;auth-error&#x60; |  -  |
**404** | Job not found &#x60;unknown-job&#x60; |  -  |
**405** | JWT POSTed to scope &#x60;not-supported&#x60; |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sign_request_0**
> SignRequest201Response sign_request_0(claims, test=test)



scope verification request See: https://github.com/skion/authentiq/wiki/JWT-Examples 

### Example


```python
import openapi_client
from openapi_client.models.claims import Claims
from openapi_client.models.sign_request201_response import SignRequest201Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://6-dot-authentiqio.appspot.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://6-dot-authentiqio.appspot.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PostApi(api_client)
    claims = openapi_client.Claims() # Claims | Claims of scope
    test = 56 # int | test only mode, using test issuer (optional)

    try:
        api_response = api_instance.sign_request_0(claims, test=test)
        print("The response of PostApi->sign_request_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PostApi->sign_request_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **claims** | [**Claims**](Claims.md)| Claims of scope | 
 **test** | **int**| test only mode, using test issuer | [optional] 

### Return type

[**SignRequest201Response**](SignRequest201Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/jwt
 - **Accept**: application/json, */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful response |  -  |
**429** | Too Many Requests on same address / number &#x60;rate-limit&#x60; |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

