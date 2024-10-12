# openapi_client.KeyApi

All URIs are relative to *https://6-dot-authentiqio.appspot.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**key_bind**](KeyApi.md#key_bind) | **PUT** /key/{PK} | 
[**key_pk_head**](KeyApi.md#key_pk_head) | **HEAD** /key/{PK} | 
[**key_register**](KeyApi.md#key_register) | **POST** /key | 
[**key_retrieve**](KeyApi.md#key_retrieve) | **GET** /key/{PK} | 
[**key_revoke**](KeyApi.md#key_revoke) | **DELETE** /key/{PK} | 
[**key_revoke_nosecret**](KeyApi.md#key_revoke_nosecret) | **DELETE** /key | 
[**key_update**](KeyApi.md#key_update) | **POST** /key/{PK} | 


# **key_bind**
> KeyBind200Response key_bind(pk, authentiq_id)



Update Authentiq ID by replacing the object.  v4: `JWT(sub,email,phone)` to bind email/phone hash;   v5: POST issuer-signed email & phone scopes and PUT to update registration `JWT(sub, pk, devtoken, ...)`  See: https://github.com/skion/authentiq/wiki/JWT-Examples 

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
    api_instance = openapi_client.KeyApi(api_client)
    pk = 'pk_example' # str | Public Signing Key - Authentiq ID (43 chars)
    authentiq_id = openapi_client.AuthentiqID() # AuthentiqID | Authentiq ID to register

    try:
        api_response = api_instance.key_bind(pk, authentiq_id)
        print("The response of KeyApi->key_bind:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling KeyApi->key_bind: %s\n" % e)
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
**409** | Already bound to another key &#x60;duplicate-hash&#x60; |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **key_pk_head**
> key_pk_head(pk)



HEAD info on Authentiq ID 

### Example


```python
import openapi_client
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
    api_instance = openapi_client.KeyApi(api_client)
    pk = 'pk_example' # str | Public Signing Key - Authentiq ID (43 chars)

    try:
        api_instance.key_pk_head(pk)
    except Exception as e:
        print("Exception when calling KeyApi->key_pk_head: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pk** | **str**| Public Signing Key - Authentiq ID (43 chars) | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Key exists |  -  |
**404** | Unknown key &#x60;unknown-key&#x60; |  -  |
**410** | Key is revoked &#x60;revoked-key&#x60; |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **key_register**
> KeyRegister201Response key_register(authentiq_id)



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
    api_instance = openapi_client.KeyApi(api_client)
    authentiq_id = openapi_client.AuthentiqID() # AuthentiqID | Authentiq ID to register

    try:
        api_response = api_instance.key_register(authentiq_id)
        print("The response of KeyApi->key_register:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling KeyApi->key_register: %s\n" % e)
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

# **key_retrieve**
> JWT key_retrieve(pk)



Get public details of an Authentiq ID. 

### Example


```python
import openapi_client
from openapi_client.models.jwt import JWT
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
    api_instance = openapi_client.KeyApi(api_client)
    pk = 'pk_example' # str | Public Signing Key - Authentiq ID (43 chars)

    try:
        api_response = api_instance.key_retrieve(pk)
        print("The response of KeyApi->key_retrieve:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling KeyApi->key_retrieve: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pk** | **str**| Public Signing Key - Authentiq ID (43 chars) | 

### Return type

[**JWT**](JWT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved |  -  |
**404** | Unknown key &#x60;unknown-key&#x60; |  -  |
**410** | Key is revoked (gone). &#x60;revoked-key&#x60; |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **key_revoke**
> KeyRevoke200Response key_revoke(pk, secret)



Revoke an Identity (Key) with a revocation secret

### Example


```python
import openapi_client
from openapi_client.models.key_revoke200_response import KeyRevoke200Response
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
    api_instance = openapi_client.KeyApi(api_client)
    pk = 'pk_example' # str | Public Signing Key - Authentiq ID (43 chars)
    secret = 'secret_example' # str | revokation secret

    try:
        api_response = api_instance.key_revoke(pk, secret)
        print("The response of KeyApi->key_revoke:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling KeyApi->key_revoke: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pk** | **str**| Public Signing Key - Authentiq ID (43 chars) | 
 **secret** | **str**| revokation secret | 

### Return type

[**KeyRevoke200Response**](KeyRevoke200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**401** | Key not found / wrong code &#x60;auth-error&#x60; |  -  |
**404** | Unknown key &#x60;unknown-key&#x60; |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **key_revoke_nosecret**
> KeyRevokeNosecret200Response key_revoke_nosecret(email, phone, code=code)



Revoke an Authentiq ID using email & phone.  If called with `email` and `phone` only, a verification code  will be sent by email. Do a second call adding `code` to  complete the revocation. 

### Example


```python
import openapi_client
from openapi_client.models.key_revoke_nosecret200_response import KeyRevokeNosecret200Response
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
    api_instance = openapi_client.KeyApi(api_client)
    email = 'email_example' # str | primary email associated to Key (ID)
    phone = 'phone_example' # str | primary phone number, international representation
    code = 'code_example' # str | verification code sent by email (optional)

    try:
        api_response = api_instance.key_revoke_nosecret(email, phone, code=code)
        print("The response of KeyApi->key_revoke_nosecret:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling KeyApi->key_revoke_nosecret: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **str**| primary email associated to Key (ID) | 
 **phone** | **str**| primary phone number, international representation | 
 **code** | **str**| verification code sent by email | [optional] 

### Return type

[**KeyRevokeNosecret200Response**](KeyRevokeNosecret200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully deleted |  -  |
**401** | Authentication error &#x60;auth-error&#x60; |  -  |
**404** | Unknown key &#x60;unknown-key&#x60; |  -  |
**409** | Confirm with code sent &#x60;confirm-first&#x60; |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **key_update**
> KeyBind200Response key_update(pk, authentiq_id)



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
    api_instance = openapi_client.KeyApi(api_client)
    pk = 'pk_example' # str | Public Signing Key - Authentiq ID (43 chars)
    authentiq_id = openapi_client.AuthentiqID() # AuthentiqID | Authentiq ID to register

    try:
        api_response = api_instance.key_update(pk, authentiq_id)
        print("The response of KeyApi->key_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling KeyApi->key_update: %s\n" % e)
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

