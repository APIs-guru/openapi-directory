# openapi_client.SharedEnvironmentsApi

All URIs are relative to *https://api.runscope.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**buckets_bucket_key_environments_environment_id_put**](SharedEnvironmentsApi.md#buckets_bucket_key_environments_environment_id_put) | **PUT** /buckets/{bucketKey}/environments/{environmentId} | Update the details of a shared environment.
[**buckets_bucket_key_environments_get**](SharedEnvironmentsApi.md#buckets_bucket_key_environments_get) | **GET** /buckets/{bucketKey}/environments | Returns list of shared environments for a specified bucket.
[**buckets_bucket_key_environments_post**](SharedEnvironmentsApi.md#buckets_bucket_key_environments_post) | **POST** /buckets/{bucketKey}/environments | Create new shared environment.


# **buckets_bucket_key_environments_environment_id_put**
> buckets_bucket_key_environments_environment_id_put(bucket_key, environment_id, modified_environment)

Update the details of a shared environment.

### Example

* OAuth Authentication (runscope_auth):

```python
import openapi_client
from openapi_client.models.environment import Environment
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
    api_instance = openapi_client.SharedEnvironmentsApi(api_client)
    bucket_key = 'bucket_key_example' # str | Unique identifier for a bucket
    environment_id = 'environment_id_example' # str | Unique identifier for a test environment
    modified_environment = openapi_client.Environment() # Environment | 

    try:
        # Update the details of a shared environment.
        api_instance.buckets_bucket_key_environments_environment_id_put(bucket_key, environment_id, modified_environment)
    except Exception as e:
        print("Exception when calling SharedEnvironmentsApi->buckets_bucket_key_environments_environment_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket_key** | **str**| Unique identifier for a bucket | 
 **environment_id** | **str**| Unique identifier for a test environment | 
 **modified_environment** | [**Environment**](Environment.md)|  | 

### Return type

void (empty response body)

### Authorization

[runscope_auth](../README.md#runscope_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Details of the modified test environment. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **buckets_bucket_key_environments_get**
> buckets_bucket_key_environments_get(bucket_key)

Returns list of shared environments for a specified bucket.

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
    api_instance = openapi_client.SharedEnvironmentsApi(api_client)
    bucket_key = 'bucket_key_example' # str | Unique identifier for a bucket

    try:
        # Returns list of shared environments for a specified bucket.
        api_instance.buckets_bucket_key_environments_get(bucket_key)
    except Exception as e:
        print("Exception when calling SharedEnvironmentsApi->buckets_bucket_key_environments_get: %s\n" % e)
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
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of shared environments belonging to this bucket. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **buckets_bucket_key_environments_post**
> buckets_bucket_key_environments_post(bucket_key, new_environment)

Create new shared environment.

### Example

* OAuth Authentication (runscope_auth):

```python
import openapi_client
from openapi_client.models.environment import Environment
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
    api_instance = openapi_client.SharedEnvironmentsApi(api_client)
    bucket_key = 'bucket_key_example' # str | Unique identifier for a bucket
    new_environment = openapi_client.Environment() # Environment | 

    try:
        # Create new shared environment.
        api_instance.buckets_bucket_key_environments_post(bucket_key, new_environment)
    except Exception as e:
        print("Exception when calling SharedEnvironmentsApi->buckets_bucket_key_environments_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket_key** | **str**| Unique identifier for a bucket | 
 **new_environment** | [**Environment**](Environment.md)|  | 

### Return type

void (empty response body)

### Authorization

[runscope_auth](../README.md#runscope_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Details of the new test environment. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

