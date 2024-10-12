# openapi_client.DeleteApi

All URIs are relative to *https://6-dot-authentiqio.appspot.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**key_revoke_0**](DeleteApi.md#key_revoke_0) | **DELETE** /key/{PK} | 
[**key_revoke_nosecret_0**](DeleteApi.md#key_revoke_nosecret_0) | **DELETE** /key | 
[**sign_delete_0**](DeleteApi.md#sign_delete_0) | **DELETE** /scope/{job} | 


# **key_revoke_0**
> KeyRevoke200Response key_revoke_0(pk, secret)



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
    api_instance = openapi_client.DeleteApi(api_client)
    pk = 'pk_example' # str | Public Signing Key - Authentiq ID (43 chars)
    secret = 'secret_example' # str | revokation secret

    try:
        api_response = api_instance.key_revoke_0(pk, secret)
        print("The response of DeleteApi->key_revoke_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeleteApi->key_revoke_0: %s\n" % e)
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

# **key_revoke_nosecret_0**
> KeyRevokeNosecret200Response key_revoke_nosecret_0(email, phone, code=code)



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
    api_instance = openapi_client.DeleteApi(api_client)
    email = 'email_example' # str | primary email associated to Key (ID)
    phone = 'phone_example' # str | primary phone number, international representation
    code = 'code_example' # str | verification code sent by email (optional)

    try:
        api_response = api_instance.key_revoke_nosecret_0(email, phone, code=code)
        print("The response of DeleteApi->key_revoke_nosecret_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeleteApi->key_revoke_nosecret_0: %s\n" % e)
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

# **sign_delete_0**
> KeyRevoke200Response sign_delete_0(job)



delete a verification job

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
    api_instance = openapi_client.DeleteApi(api_client)
    job = 'job_example' # str | Job ID (20 chars)

    try:
        api_response = api_instance.sign_delete_0(job)
        print("The response of DeleteApi->sign_delete_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeleteApi->sign_delete_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **job** | **str**| Job ID (20 chars) | 

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
**200** | Successfully deleted |  -  |
**404** | Job not found &#x60;unknown-job&#x60; |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

