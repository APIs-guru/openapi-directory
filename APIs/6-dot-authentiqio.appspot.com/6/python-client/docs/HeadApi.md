# openapi_client.HeadApi

All URIs are relative to *https://6-dot-authentiqio.appspot.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**key_pk_head_0**](HeadApi.md#key_pk_head_0) | **HEAD** /key/{PK} | 
[**sign_retrieve_head_0**](HeadApi.md#sign_retrieve_head_0) | **HEAD** /scope/{job} | 


# **key_pk_head_0**
> key_pk_head_0(pk)



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
    api_instance = openapi_client.HeadApi(api_client)
    pk = 'pk_example' # str | Public Signing Key - Authentiq ID (43 chars)

    try:
        api_instance.key_pk_head_0(pk)
    except Exception as e:
        print("Exception when calling HeadApi->key_pk_head_0: %s\n" % e)
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

# **sign_retrieve_head_0**
> sign_retrieve_head_0(job)



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
    api_instance = openapi_client.HeadApi(api_client)
    job = 'job_example' # str | Job ID (20 chars)

    try:
        api_instance.sign_retrieve_head_0(job)
    except Exception as e:
        print("Exception when calling HeadApi->sign_retrieve_head_0: %s\n" % e)
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

