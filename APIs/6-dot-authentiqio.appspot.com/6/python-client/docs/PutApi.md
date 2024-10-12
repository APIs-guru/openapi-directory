# openapi_client.PutApi

All URIs are relative to *https://6-dot-authentiqio.appspot.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**key_bind_0**](PutApi.md#key_bind_0) | **PUT** /key/{PK} | 
[**sign_update_0**](PutApi.md#sign_update_0) | **PUT** /scope/{job} | 


# **key_bind_0**
> KeyBind200Response key_bind_0(pk, authentiq_id)



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
    api_instance = openapi_client.PutApi(api_client)
    pk = 'pk_example' # str | Public Signing Key - Authentiq ID (43 chars)
    authentiq_id = openapi_client.AuthentiqID() # AuthentiqID | Authentiq ID to register

    try:
        api_response = api_instance.key_bind_0(pk, authentiq_id)
        print("The response of PutApi->key_bind_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PutApi->key_bind_0: %s\n" % e)
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

# **sign_update_0**
> SignUpdate200Response sign_update_0(job)



authority updates a JWT with its signature See: https://github.com/skion/authentiq/wiki/JWT-Examples 

### Example


```python
import openapi_client
from openapi_client.models.sign_update200_response import SignUpdate200Response
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
    api_instance = openapi_client.PutApi(api_client)
    job = 'job_example' # str | Job ID (20 chars)

    try:
        api_response = api_instance.sign_update_0(job)
        print("The response of PutApi->sign_update_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PutApi->sign_update_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **job** | **str**| Job ID (20 chars) | 

### Return type

[**SignUpdate200Response**](SignUpdate200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/jwt, */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated |  -  |
**404** | Job not found &#x60;unknown-job&#x60; |  -  |
**409** | Job not confirmed yet &#x60;confirm-first&#x60; |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

