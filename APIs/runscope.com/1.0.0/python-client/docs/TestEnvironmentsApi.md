# openapi_client.TestEnvironmentsApi

All URIs are relative to *https://api.runscope.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**buckets_bucket_key_tests_test_id_environments_environment_id_put**](TestEnvironmentsApi.md#buckets_bucket_key_tests_test_id_environments_environment_id_put) | **PUT** /buckets/{bucketKey}/tests/{testId}/environments/{environmentId} | Update the details of a test environment.
[**buckets_bucket_key_tests_test_id_environments_get**](TestEnvironmentsApi.md#buckets_bucket_key_tests_test_id_environments_get) | **GET** /buckets/{bucketKey}/tests/{testId}/environments | Return details of the test&#39;s environments (only those that belong to the specified test)
[**buckets_bucket_key_tests_test_id_environments_post**](TestEnvironmentsApi.md#buckets_bucket_key_tests_test_id_environments_post) | **POST** /buckets/{bucketKey}/tests/{testId}/environments | Create new test environment.


# **buckets_bucket_key_tests_test_id_environments_environment_id_put**
> buckets_bucket_key_tests_test_id_environments_environment_id_put(bucket_key, test_id, environment_id, modified_environment)

Update the details of a test environment.

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
    api_instance = openapi_client.TestEnvironmentsApi(api_client)
    bucket_key = 'bucket_key_example' # str | Unique identifier for a bucket
    test_id = 'test_id_example' # str | Unique identifier for a test
    environment_id = 'environment_id_example' # str | Unique identifier for a test environment
    modified_environment = openapi_client.Environment() # Environment | 

    try:
        # Update the details of a test environment.
        api_instance.buckets_bucket_key_tests_test_id_environments_environment_id_put(bucket_key, test_id, environment_id, modified_environment)
    except Exception as e:
        print("Exception when calling TestEnvironmentsApi->buckets_bucket_key_tests_test_id_environments_environment_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket_key** | **str**| Unique identifier for a bucket | 
 **test_id** | **str**| Unique identifier for a test | 
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

# **buckets_bucket_key_tests_test_id_environments_get**
> BucketsBucketKeyTestsTestIdEnvironmentsGet200Response buckets_bucket_key_tests_test_id_environments_get(bucket_key, test_id)

Return details of the test's environments (only those that belong to the specified test)

### Example

* OAuth Authentication (runscope_auth):

```python
import openapi_client
from openapi_client.models.buckets_bucket_key_tests_test_id_environments_get200_response import BucketsBucketKeyTestsTestIdEnvironmentsGet200Response
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
    api_instance = openapi_client.TestEnvironmentsApi(api_client)
    bucket_key = 'bucket_key_example' # str | Unique identifier for a bucket
    test_id = 'test_id_example' # str | Unique identifier for a test

    try:
        # Return details of the test's environments (only those that belong to the specified test)
        api_response = api_instance.buckets_bucket_key_tests_test_id_environments_get(bucket_key, test_id)
        print("The response of TestEnvironmentsApi->buckets_bucket_key_tests_test_id_environments_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TestEnvironmentsApi->buckets_bucket_key_tests_test_id_environments_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket_key** | **str**| Unique identifier for a bucket | 
 **test_id** | **str**| Unique identifier for a test | 

### Return type

[**BucketsBucketKeyTestsTestIdEnvironmentsGet200Response**](BucketsBucketKeyTestsTestIdEnvironmentsGet200Response.md)

### Authorization

[runscope_auth](../README.md#runscope_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of environments belonging to this test. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **buckets_bucket_key_tests_test_id_environments_post**
> buckets_bucket_key_tests_test_id_environments_post(bucket_key, test_id, new_environment)

Create new test environment.

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
    api_instance = openapi_client.TestEnvironmentsApi(api_client)
    bucket_key = 'bucket_key_example' # str | Unique identifier for a bucket
    test_id = 'test_id_example' # str | Unique identifier for a test
    new_environment = openapi_client.Environment() # Environment | 

    try:
        # Create new test environment.
        api_instance.buckets_bucket_key_tests_test_id_environments_post(bucket_key, test_id, new_environment)
    except Exception as e:
        print("Exception when calling TestEnvironmentsApi->buckets_bucket_key_tests_test_id_environments_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket_key** | **str**| Unique identifier for a bucket | 
 **test_id** | **str**| Unique identifier for a test | 
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

