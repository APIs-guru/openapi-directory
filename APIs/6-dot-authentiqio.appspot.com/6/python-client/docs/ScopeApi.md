# openapi_client.ScopeApi

All URIs are relative to *https://6-dot-authentiqio.appspot.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sign_confirm**](ScopeApi.md#sign_confirm) | **POST** /scope/{job} | 
[**sign_delete**](ScopeApi.md#sign_delete) | **DELETE** /scope/{job} | 
[**sign_request**](ScopeApi.md#sign_request) | **POST** /scope | 
[**sign_retrieve**](ScopeApi.md#sign_retrieve) | **GET** /scope/{job} | 
[**sign_retrieve_head**](ScopeApi.md#sign_retrieve_head) | **HEAD** /scope/{job} | 
[**sign_update**](ScopeApi.md#sign_update) | **PUT** /scope/{job} | 


# **sign_confirm**
> KeyBind200Response sign_confirm(job)



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
    api_instance = openapi_client.ScopeApi(api_client)
    job = 'job_example' # str | Job ID (20 chars)

    try:
        api_response = api_instance.sign_confirm(job)
        print("The response of ScopeApi->sign_confirm:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScopeApi->sign_confirm: %s\n" % e)
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

# **sign_delete**
> KeyRevoke200Response sign_delete(job)



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
    api_instance = openapi_client.ScopeApi(api_client)
    job = 'job_example' # str | Job ID (20 chars)

    try:
        api_response = api_instance.sign_delete(job)
        print("The response of ScopeApi->sign_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScopeApi->sign_delete: %s\n" % e)
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

# **sign_request**
> SignRequest201Response sign_request(claims, test=test)



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
    api_instance = openapi_client.ScopeApi(api_client)
    claims = openapi_client.Claims() # Claims | Claims of scope
    test = 56 # int | test only mode, using test issuer (optional)

    try:
        api_response = api_instance.sign_request(claims, test=test)
        print("The response of ScopeApi->sign_request:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScopeApi->sign_request: %s\n" % e)
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

# **sign_retrieve**
> JWT1 sign_retrieve(job)



get the status / current content of a verification job

### Example


```python
import openapi_client
from openapi_client.models.jwt1 import JWT1
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
    api_instance = openapi_client.ScopeApi(api_client)
    job = 'job_example' # str | Job ID (20 chars)

    try:
        api_response = api_instance.sign_retrieve(job)
        print("The response of ScopeApi->sign_retrieve:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScopeApi->sign_retrieve: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **job** | **str**| Job ID (20 chars) | 

### Return type

[**JWT1**](JWT1.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/jwt, */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response (JWT) |  -  |
**204** | Confirmed, waiting for signing |  -  |
**404** | Job not found &#x60;unknown-job&#x60; |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sign_retrieve_head**
> sign_retrieve_head(job)



HEAD to get the status of a verification job

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
    api_instance = openapi_client.ScopeApi(api_client)
    job = 'job_example' # str | Job ID (20 chars)

    try:
        api_instance.sign_retrieve_head(job)
    except Exception as e:
        print("Exception when calling ScopeApi->sign_retrieve_head: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **job** | **str**| Job ID (20 chars) | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Confirmed and signed |  -  |
**204** | Confirmed, waiting for signing |  -  |
**404** | Job not found &#x60;unknown-job&#x60; |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sign_update**
> SignUpdate200Response sign_update(job)



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
    api_instance = openapi_client.ScopeApi(api_client)
    job = 'job_example' # str | Job ID (20 chars)

    try:
        api_response = api_instance.sign_update(job)
        print("The response of ScopeApi->sign_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScopeApi->sign_update: %s\n" % e)
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

