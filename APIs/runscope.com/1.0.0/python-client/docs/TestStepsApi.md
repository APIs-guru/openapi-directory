# openapi_client.TestStepsApi

All URIs are relative to *https://api.runscope.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**buckets_bucket_key_tests_test_id_steps_get**](TestStepsApi.md#buckets_bucket_key_tests_test_id_steps_get) | **GET** /buckets/{bucketKey}/tests/{testId}/steps | List test steps for a test.
[**buckets_bucket_key_tests_test_id_steps_post**](TestStepsApi.md#buckets_bucket_key_tests_test_id_steps_post) | **POST** /buckets/{bucketKey}/tests/{testId}/steps | Add new test step.
[**buckets_bucket_key_tests_test_id_steps_step_id_delete**](TestStepsApi.md#buckets_bucket_key_tests_test_id_steps_step_id_delete) | **DELETE** /buckets/{bucketKey}/tests/{testId}/steps/{stepId} | Delete a step from a test.
[**buckets_bucket_key_tests_test_id_steps_step_id_put**](TestStepsApi.md#buckets_bucket_key_tests_test_id_steps_step_id_put) | **PUT** /buckets/{bucketKey}/tests/{testId}/steps/{stepId} | Update the details of a single test step.


# **buckets_bucket_key_tests_test_id_steps_get**
> buckets_bucket_key_tests_test_id_steps_get(bucket_key, test_id)

List test steps for a test.

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
    api_instance = openapi_client.TestStepsApi(api_client)
    bucket_key = 'bucket_key_example' # str | Unique identifier for a bucket
    test_id = 'test_id_example' # str | Unique identifier for a test

    try:
        # List test steps for a test.
        api_instance.buckets_bucket_key_tests_test_id_steps_get(bucket_key, test_id)
    except Exception as e:
        print("Exception when calling TestStepsApi->buckets_bucket_key_tests_test_id_steps_get: %s\n" % e)
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
**200** | List of test steps for a test |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **buckets_bucket_key_tests_test_id_steps_post**
> buckets_bucket_key_tests_test_id_steps_post(bucket_key, test_id, test_step)

Add new test step.

### Example

* OAuth Authentication (runscope_auth):

```python
import openapi_client
from openapi_client.models.test_step import TestStep
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
    api_instance = openapi_client.TestStepsApi(api_client)
    bucket_key = 'bucket_key_example' # str | Unique identifier for a bucket
    test_id = 'test_id_example' # str | Unique identifier for a test
    test_step = openapi_client.TestStep() # TestStep | 

    try:
        # Add new test step.
        api_instance.buckets_bucket_key_tests_test_id_steps_post(bucket_key, test_id, test_step)
    except Exception as e:
        print("Exception when calling TestStepsApi->buckets_bucket_key_tests_test_id_steps_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket_key** | **str**| Unique identifier for a bucket | 
 **test_id** | **str**| Unique identifier for a test | 
 **test_step** | [**TestStep**](TestStep.md)|  | 

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
**201** | Details of the new test step. |  -  |
**400** | Must send valid JSON object to create a new test step |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **buckets_bucket_key_tests_test_id_steps_step_id_delete**
> buckets_bucket_key_tests_test_id_steps_step_id_delete(bucket_key, test_id, step_id)

Delete a step from a test.

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
    api_instance = openapi_client.TestStepsApi(api_client)
    bucket_key = 'bucket_key_example' # str | Unique identifier for a bucket
    test_id = 'test_id_example' # str | Unique identifier for a test
    step_id = 'step_id_example' # str | Unique identifier for a test step

    try:
        # Delete a step from a test.
        api_instance.buckets_bucket_key_tests_test_id_steps_step_id_delete(bucket_key, test_id, step_id)
    except Exception as e:
        print("Exception when calling TestStepsApi->buckets_bucket_key_tests_test_id_steps_step_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket_key** | **str**| Unique identifier for a bucket | 
 **test_id** | **str**| Unique identifier for a test | 
 **step_id** | **str**| Unique identifier for a test step | 

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

# **buckets_bucket_key_tests_test_id_steps_step_id_put**
> buckets_bucket_key_tests_test_id_steps_step_id_put(bucket_key, test_id, step_id, test_step)

Update the details of a single test step.

### Example

* OAuth Authentication (runscope_auth):

```python
import openapi_client
from openapi_client.models.test_step import TestStep
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
    api_instance = openapi_client.TestStepsApi(api_client)
    bucket_key = 'bucket_key_example' # str | Unique identifier for a bucket
    test_id = 'test_id_example' # str | Unique identifier for a test
    step_id = 'step_id_example' # str | Unique identifier for a test step
    test_step = openapi_client.TestStep() # TestStep | 

    try:
        # Update the details of a single test step.
        api_instance.buckets_bucket_key_tests_test_id_steps_step_id_put(bucket_key, test_id, step_id, test_step)
    except Exception as e:
        print("Exception when calling TestStepsApi->buckets_bucket_key_tests_test_id_steps_step_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket_key** | **str**| Unique identifier for a bucket | 
 **test_id** | **str**| Unique identifier for a test | 
 **step_id** | **str**| Unique identifier for a test step | 
 **test_step** | [**TestStep**](TestStep.md)|  | 

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
**200** | List of test steps for a test |  -  |
**400** | Unable to update template &#39;{stepId}&#39; for test &#39;{testId}&#39; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

