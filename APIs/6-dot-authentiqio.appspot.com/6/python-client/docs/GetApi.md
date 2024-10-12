# openapi_client.GetApi

All URIs are relative to *https://6-dot-authentiqio.appspot.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**key_retrieve_0**](GetApi.md#key_retrieve_0) | **GET** /key/{PK} | 
[**sign_retrieve_0**](GetApi.md#sign_retrieve_0) | **GET** /scope/{job} | 


# **key_retrieve_0**
> JWT key_retrieve_0(pk)



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
    api_instance = openapi_client.GetApi(api_client)
    pk = 'pk_example' # str | Public Signing Key - Authentiq ID (43 chars)

    try:
        api_response = api_instance.key_retrieve_0(pk)
        print("The response of GetApi->key_retrieve_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GetApi->key_retrieve_0: %s\n" % e)
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

# **sign_retrieve_0**
> JWT1 sign_retrieve_0(job)



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
    api_instance = openapi_client.GetApi(api_client)
    job = 'job_example' # str | Job ID (20 chars)

    try:
        api_response = api_instance.sign_retrieve_0(job)
        print("The response of GetApi->sign_retrieve_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GetApi->sign_retrieve_0: %s\n" % e)
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

