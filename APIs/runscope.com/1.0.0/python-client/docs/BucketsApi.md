# openapi_client.BucketsApi

All URIs are relative to *https://api.runscope.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**buckets_bucket_key_delete**](BucketsApi.md#buckets_bucket_key_delete) | **DELETE** /buckets/{bucketKey} | Delete a single bucket resource.
[**buckets_bucket_key_get**](BucketsApi.md#buckets_bucket_key_get) | **GET** /buckets/{bucketKey} | Returns a single bucket resource.
[**buckets_get**](BucketsApi.md#buckets_get) | **GET** /buckets | Returns a list of buckets.
[**buckets_post**](BucketsApi.md#buckets_post) | **POST** /buckets | Create a new bucket


# **buckets_bucket_key_delete**
> buckets_bucket_key_delete(bucket_key)

Delete a single bucket resource.

### Example

* OAuth Authentication (runscope_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.runscope.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.runscope.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BucketsApi(api_client)
    bucket_key = 'bucket_key_example' # str | Unique identifier for a bucket

    try:
        # Delete a single bucket resource.
        api_instance.buckets_bucket_key_delete(bucket_key)
    except Exception as e:
        print("Exception when calling BucketsApi->buckets_bucket_key_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket_key** | **str**| Unique identifier for a bucket | 

### Return type

void (empty response body)

### Authorization

[runscope_auth](../README.md#runscope_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No content with no body. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **buckets_bucket_key_get**
> Bucket buckets_bucket_key_get(bucket_key)

Returns a single bucket resource.

### Example

* OAuth Authentication (runscope_auth):

```python
import openapi_client
from openapi_client.models.bucket import Bucket
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.runscope.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.runscope.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BucketsApi(api_client)
    bucket_key = 'bucket_key_example' # str | Unique identifier for a bucket

    try:
        # Returns a single bucket resource.
        api_response = api_instance.buckets_bucket_key_get(bucket_key)
        print("The response of BucketsApi->buckets_bucket_key_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BucketsApi->buckets_bucket_key_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket_key** | **str**| Unique identifier for a bucket | 

### Return type

[**Bucket**](Bucket.md)

### Authorization

[runscope_auth](../README.md#runscope_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Bucket details. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **buckets_get**
> BucketsGet200Response buckets_get()

Returns a list of buckets.

### Example

* OAuth Authentication (runscope_auth):

```python
import openapi_client
from openapi_client.models.buckets_get200_response import BucketsGet200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.runscope.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.runscope.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BucketsApi(api_client)

    try:
        # Returns a list of buckets.
        api_response = api_instance.buckets_get()
        print("The response of BucketsApi->buckets_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BucketsApi->buckets_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**BucketsGet200Response**](BucketsGet200Response.md)

### Authorization

[runscope_auth](../README.md#runscope_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of buckets associated with this authenticated account. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **buckets_post**
> Bucket buckets_post(new_bucket)

Create a new bucket

### Example

* OAuth Authentication (runscope_auth):

```python
import openapi_client
from openapi_client.models.bucket import Bucket
from openapi_client.models.new_bucket import NewBucket
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.runscope.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.runscope.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BucketsApi(api_client)
    new_bucket = openapi_client.NewBucket() # NewBucket | 

    try:
        # Create a new bucket
        api_response = api_instance.buckets_post(new_bucket)
        print("The response of BucketsApi->buckets_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BucketsApi->buckets_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **new_bucket** | [**NewBucket**](NewBucket.md)|  | 

### Return type

[**Bucket**](Bucket.md)

### Authorization

[runscope_auth](../README.md#runscope_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Bucket details. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

