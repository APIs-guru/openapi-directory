# openapi_client.TestsApi

All URIs are relative to *https://api.runscope.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**buckets_bucket_key_tests_get**](TestsApi.md#buckets_bucket_key_tests_get) | **GET** /buckets/{bucketKey}/tests | Returns a list of tests.
[**buckets_bucket_key_tests_post**](TestsApi.md#buckets_bucket_key_tests_post) | **POST** /buckets/{bucketKey}/tests | Create a test.
[**buckets_bucket_key_tests_test_id_delete**](TestsApi.md#buckets_bucket_key_tests_test_id_delete) | **DELETE** /buckets/{bucketKey}/tests/{testId} | Delete a test, including all steps, schedules, test-specific environments and results.
[**buckets_bucket_key_tests_test_id_get**](TestsApi.md#buckets_bucket_key_tests_test_id_get) | **GET** /buckets/{bucketKey}/tests/{testId} | Retrieve the details of a given test by ID.
[**buckets_bucket_key_tests_test_id_metrics_get**](TestsApi.md#buckets_bucket_key_tests_test_id_metrics_get) | **GET** /buckets/{bucketKey}/tests/{testId}/metrics | Return details of the test metrics for the specified timeframe.
[**buckets_bucket_key_tests_test_id_put**](TestsApi.md#buckets_bucket_key_tests_test_id_put) | **PUT** /buckets/{bucketKey}/tests/{testId} | Modify a test&#39;s name, description, default environment and its steps. To modify other individual properties of a test, make requests to the steps, environments, and schedules subresources of the test.


# **buckets_bucket_key_tests_get**
> BucketsBucketKeyTestsGet200Response buckets_bucket_key_tests_get(bucket_key)

Returns a list of tests.

### Example

* OAuth Authentication (runscope_auth):

```python
import openapi_client
from openapi_client.models.buckets_bucket_key_tests_get200_response import BucketsBucketKeyTestsGet200Response
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
    api_instance = openapi_client.TestsApi(api_client)
    bucket_key = 'bucket_key_example' # str | Unique identifier for a bucket

    try:
        # Returns a list of tests.
        api_response = api_instance.buckets_bucket_key_tests_get(bucket_key)
        print("The response of TestsApi->buckets_bucket_key_tests_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TestsApi->buckets_bucket_key_tests_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket_key** | **str**| Unique identifier for a bucket | 

### Return type

[**BucketsBucketKeyTestsGet200Response**](BucketsBucketKeyTestsGet200Response.md)

### Authorization

[runscope_auth](../README.md#runscope_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of tests for this bucket |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **buckets_bucket_key_tests_post**
> BucketsBucketKeyTestsGet200Response buckets_bucket_key_tests_post(bucket_key, new_test)

Create a test.

### Example

* OAuth Authentication (runscope_auth):

```python
import openapi_client
from openapi_client.models.buckets_bucket_key_tests_get200_response import BucketsBucketKeyTestsGet200Response
from openapi_client.models.test import Test
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
    api_instance = openapi_client.TestsApi(api_client)
    bucket_key = 'bucket_key_example' # str | Unique identifier for a bucket
    new_test = openapi_client.Test() # Test | 

    try:
        # Create a test.
        api_response = api_instance.buckets_bucket_key_tests_post(bucket_key, new_test)
        print("The response of TestsApi->buckets_bucket_key_tests_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TestsApi->buckets_bucket_key_tests_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket_key** | **str**| Unique identifier for a bucket | 
 **new_test** | [**Test**](Test.md)|  | 

### Return type

[**BucketsBucketKeyTestsGet200Response**](BucketsBucketKeyTestsGet200Response.md)

### Authorization

[runscope_auth](../README.md#runscope_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of tests for this bucket |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **buckets_bucket_key_tests_test_id_delete**
> buckets_bucket_key_tests_test_id_delete(bucket_key, test_id)

Delete a test, including all steps, schedules, test-specific environments and results.

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
    api_instance = openapi_client.TestsApi(api_client)
    bucket_key = 'bucket_key_example' # str | Unique identifier for a bucket
    test_id = 'test_id_example' # str | Unique identifier for a test

    try:
        # Delete a test, including all steps, schedules, test-specific environments and results.
        api_instance.buckets_bucket_key_tests_test_id_delete(bucket_key, test_id)
    except Exception as e:
        print("Exception when calling TestsApi->buckets_bucket_key_tests_test_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket_key** | **str**| Unique identifier for a bucket | 
 **test_id** | **str**| Unique identifier for a test | 

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
**204** | No content with no body. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **buckets_bucket_key_tests_test_id_get**
> TestDetail buckets_bucket_key_tests_test_id_get(bucket_key, test_id)

Retrieve the details of a given test by ID.

### Example

* OAuth Authentication (runscope_auth):

```python
import openapi_client
from openapi_client.models.test_detail import TestDetail
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
    api_instance = openapi_client.TestsApi(api_client)
    bucket_key = 'bucket_key_example' # str | Unique identifier for a bucket
    test_id = 'test_id_example' # str | Unique identifier for a test

    try:
        # Retrieve the details of a given test by ID.
        api_response = api_instance.buckets_bucket_key_tests_test_id_get(bucket_key, test_id)
        print("The response of TestsApi->buckets_bucket_key_tests_test_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TestsApi->buckets_bucket_key_tests_test_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket_key** | **str**| Unique identifier for a bucket | 
 **test_id** | **str**| Unique identifier for a test | 

### Return type

[**TestDetail**](TestDetail.md)

### Authorization

[runscope_auth](../README.md#runscope_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an object with the details of the given test. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **buckets_bucket_key_tests_test_id_metrics_get**
> Metrics buckets_bucket_key_tests_test_id_metrics_get(bucket_key, test_id)

Return details of the test metrics for the specified timeframe.

### Example

* OAuth Authentication (runscope_auth):

```python
import openapi_client
from openapi_client.models.metrics import Metrics
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
    api_instance = openapi_client.TestsApi(api_client)
    bucket_key = 'bucket_key_example' # str | Unique identifier for a bucket
    test_id = 'test_id_example' # str | Unique identifier for a test

    try:
        # Return details of the test metrics for the specified timeframe.
        api_response = api_instance.buckets_bucket_key_tests_test_id_metrics_get(bucket_key, test_id)
        print("The response of TestsApi->buckets_bucket_key_tests_test_id_metrics_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TestsApi->buckets_bucket_key_tests_test_id_metrics_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket_key** | **str**| Unique identifier for a bucket | 
 **test_id** | **str**| Unique identifier for a test | 

### Return type

[**Metrics**](Metrics.md)

### Authorization

[runscope_auth](../README.md#runscope_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of average response times and additional performance metrics belonging to this test. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **buckets_bucket_key_tests_test_id_put**
> TestDetail buckets_bucket_key_tests_test_id_put(bucket_key, test_id)

Modify a test's name, description, default environment and its steps. To modify other individual properties of a test, make requests to the steps, environments, and schedules subresources of the test.

### Example

* OAuth Authentication (runscope_auth):

```python
import openapi_client
from openapi_client.models.test_detail import TestDetail
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
    api_instance = openapi_client.TestsApi(api_client)
    bucket_key = 'bucket_key_example' # str | Unique identifier for a bucket
    test_id = 'test_id_example' # str | Unique identifier for a test

    try:
        # Modify a test's name, description, default environment and its steps. To modify other individual properties of a test, make requests to the steps, environments, and schedules subresources of the test.
        api_response = api_instance.buckets_bucket_key_tests_test_id_put(bucket_key, test_id)
        print("The response of TestsApi->buckets_bucket_key_tests_test_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TestsApi->buckets_bucket_key_tests_test_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket_key** | **str**| Unique identifier for a bucket | 
 **test_id** | **str**| Unique identifier for a test | 

### Return type

[**TestDetail**](TestDetail.md)

### Authorization

[runscope_auth](../README.md#runscope_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns 201 and the updated test&#39;s JSON description if the test is successfully updated. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

