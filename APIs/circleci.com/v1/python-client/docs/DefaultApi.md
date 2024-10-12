# openapi_client.DefaultApi

All URIs are relative to *https://circleci.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**me_get**](DefaultApi.md#me_get) | **GET** /me | 
[**project_username_project_build_cache_delete**](DefaultApi.md#project_username_project_build_cache_delete) | **DELETE** /project/{username}/{project}/build-cache | 
[**project_username_project_build_num_artifacts_get**](DefaultApi.md#project_username_project_build_num_artifacts_get) | **GET** /project/{username}/{project}/{build_num}/artifacts | 
[**project_username_project_build_num_cancel_post**](DefaultApi.md#project_username_project_build_num_cancel_post) | **POST** /project/{username}/{project}/{build_num}/cancel | 
[**project_username_project_build_num_get**](DefaultApi.md#project_username_project_build_num_get) | **GET** /project/{username}/{project}/{build_num} | 
[**project_username_project_build_num_retry_post**](DefaultApi.md#project_username_project_build_num_retry_post) | **POST** /project/{username}/{project}/{build_num}/retry | 
[**project_username_project_build_num_tests_get**](DefaultApi.md#project_username_project_build_num_tests_get) | **GET** /project/{username}/{project}/{build_num}/tests | 
[**project_username_project_checkout_key_fingerprint_delete**](DefaultApi.md#project_username_project_checkout_key_fingerprint_delete) | **DELETE** /project/{username}/{project}/checkout-key/{fingerprint} | 
[**project_username_project_checkout_key_fingerprint_get**](DefaultApi.md#project_username_project_checkout_key_fingerprint_get) | **GET** /project/{username}/{project}/checkout-key/{fingerprint} | 
[**project_username_project_checkout_key_get**](DefaultApi.md#project_username_project_checkout_key_get) | **GET** /project/{username}/{project}/checkout-key | 
[**project_username_project_checkout_key_post**](DefaultApi.md#project_username_project_checkout_key_post) | **POST** /project/{username}/{project}/checkout-key | 
[**project_username_project_envvar_get**](DefaultApi.md#project_username_project_envvar_get) | **GET** /project/{username}/{project}/envvar | 
[**project_username_project_envvar_name_delete**](DefaultApi.md#project_username_project_envvar_name_delete) | **DELETE** /project/{username}/{project}/envvar/{name} | 
[**project_username_project_envvar_name_get**](DefaultApi.md#project_username_project_envvar_name_get) | **GET** /project/{username}/{project}/envvar/{name} | 
[**project_username_project_envvar_post**](DefaultApi.md#project_username_project_envvar_post) | **POST** /project/{username}/{project}/envvar | 
[**project_username_project_get**](DefaultApi.md#project_username_project_get) | **GET** /project/{username}/{project} | 
[**project_username_project_post**](DefaultApi.md#project_username_project_post) | **POST** /project/{username}/{project} | 
[**project_username_project_ssh_key_post**](DefaultApi.md#project_username_project_ssh_key_post) | **POST** /project/{username}/{project}/ssh-key | 
[**project_username_project_tree_branch_post**](DefaultApi.md#project_username_project_tree_branch_post) | **POST** /project/{username}/{project}/tree/{branch} | 
[**projects_get**](DefaultApi.md#projects_get) | **GET** /projects | 
[**recent_builds_get**](DefaultApi.md#recent_builds_get) | **GET** /recent-builds | 
[**user_heroku_key_post**](DefaultApi.md#user_heroku_key_post) | **POST** /user/heroku-key | 


# **me_get**
> User me_get()



Provides information about the signed in user. 

### Example

* Api Key Authentication (apikey):

```python
import openapi_client
from openapi_client.models.user import User
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circleci.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circleci.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apikey
configuration.api_key['apikey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apikey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        api_response = api_instance.me_get()
        print("The response of DefaultApi->me_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->me_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**User**](User.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | signed in user |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **project_username_project_build_cache_delete**
> ProjectUsernameProjectBuildCacheDelete200Response project_username_project_build_cache_delete(username, project)



Clears the cache for a project. 

### Example

* Api Key Authentication (apikey):

```python
import openapi_client
from openapi_client.models.project_username_project_build_cache_delete200_response import ProjectUsernameProjectBuildCacheDelete200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circleci.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circleci.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apikey
configuration.api_key['apikey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apikey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    username = 'username_example' # str | XXXXXXXXX 
    project = 'project_example' # str | XXXXXXXXX 

    try:
        api_response = api_instance.project_username_project_build_cache_delete(username, project)
        print("The response of DefaultApi->project_username_project_build_cache_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->project_username_project_build_cache_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **str**| XXXXXXXXX  | 
 **project** | **str**| XXXXXXXXX  | 

### Return type

[**ProjectUsernameProjectBuildCacheDelete200Response**](ProjectUsernameProjectBuildCacheDelete200Response.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | status message |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **project_username_project_build_num_artifacts_get**
> List[Artifact] project_username_project_build_num_artifacts_get(username, project, build_num)



List the artifacts produced by a given build. 

### Example

* Api Key Authentication (apikey):

```python
import openapi_client
from openapi_client.models.artifact import Artifact
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circleci.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circleci.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apikey
configuration.api_key['apikey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apikey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    username = 'username_example' # str | XXXXXXXXX 
    project = 'project_example' # str | XXXXXXXXX 
    build_num = 56 # int | XXXXXXXXXX 

    try:
        api_response = api_instance.project_username_project_build_num_artifacts_get(username, project, build_num)
        print("The response of DefaultApi->project_username_project_build_num_artifacts_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->project_username_project_build_num_artifacts_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **str**| XXXXXXXXX  | 
 **project** | **str**| XXXXXXXXX  | 
 **build_num** | **int**| XXXXXXXXXX  | 

### Return type

[**List[Artifact]**](Artifact.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List the artifacts produced by a given build |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **project_username_project_build_num_cancel_post**
> Build project_username_project_build_num_cancel_post(username, project, build_num)



Cancels the build, returns a summary of the build. 

### Example

* Api Key Authentication (apikey):

```python
import openapi_client
from openapi_client.models.build import Build
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circleci.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circleci.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apikey
configuration.api_key['apikey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apikey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    username = 'username_example' # str | XXXXXXXXX 
    project = 'project_example' # str | XXXXXXXXX 
    build_num = 56 # int | XXXXXXXXXX 

    try:
        api_response = api_instance.project_username_project_build_num_cancel_post(username, project, build_num)
        print("The response of DefaultApi->project_username_project_build_num_cancel_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->project_username_project_build_num_cancel_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **str**| XXXXXXXXX  | 
 **project** | **str**| XXXXXXXXX  | 
 **build_num** | **int**| XXXXXXXXXX  | 

### Return type

[**Build**](Build.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | returns a summary of the build |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **project_username_project_build_num_get**
> BuildDetail project_username_project_build_num_get(username, project, build_num)



Full details for a single build. The response includes all of the fields from the build summary. This is also the payload for the [notification webhooks](/docs/configuration/#notify), in which case this object is the value to a key named 'payload'. 

### Example

* Api Key Authentication (apikey):

```python
import openapi_client
from openapi_client.models.build_detail import BuildDetail
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circleci.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circleci.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apikey
configuration.api_key['apikey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apikey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    username = 'username_example' # str | XXXXXXXXX 
    project = 'project_example' # str | XXXXXXXXX 
    build_num = 56 # int | XXXXXXXXXX 

    try:
        api_response = api_instance.project_username_project_build_num_get(username, project, build_num)
        print("The response of DefaultApi->project_username_project_build_num_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->project_username_project_build_num_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **str**| XXXXXXXXX  | 
 **project** | **str**| XXXXXXXXX  | 
 **build_num** | **int**| XXXXXXXXXX  | 

### Return type

[**BuildDetail**](BuildDetail.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Full details for a single build |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **project_username_project_build_num_retry_post**
> Build project_username_project_build_num_retry_post(username, project, build_num)



Retries the build, returns a summary of the new build. 

### Example

* Api Key Authentication (apikey):

```python
import openapi_client
from openapi_client.models.build import Build
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circleci.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circleci.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apikey
configuration.api_key['apikey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apikey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    username = 'username_example' # str | XXXXXXXXX 
    project = 'project_example' # str | XXXXXXXXX 
    build_num = 56 # int | XXXXXXXXXX 

    try:
        api_response = api_instance.project_username_project_build_num_retry_post(username, project, build_num)
        print("The response of DefaultApi->project_username_project_build_num_retry_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->project_username_project_build_num_retry_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **str**| XXXXXXXXX  | 
 **project** | **str**| XXXXXXXXX  | 
 **build_num** | **int**| XXXXXXXXXX  | 

### Return type

[**Build**](Build.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | returns a summary of the new build |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **project_username_project_build_num_tests_get**
> Tests project_username_project_build_num_tests_get(username, project, build_num)



Provides test metadata for a build Note: [Learn how to set up your builds to collect test metadata](https://circleci.com/docs/test-metadata/) 

### Example

* Api Key Authentication (apikey):

```python
import openapi_client
from openapi_client.models.tests import Tests
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circleci.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circleci.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apikey
configuration.api_key['apikey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apikey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    username = 'username_example' # str | XXXXXXXXX 
    project = 'project_example' # str | XXXXXXXXX 
    build_num = 56 # int | XXXXXXXXXX 

    try:
        api_response = api_instance.project_username_project_build_num_tests_get(username, project, build_num)
        print("The response of DefaultApi->project_username_project_build_num_tests_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->project_username_project_build_num_tests_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **str**| XXXXXXXXX  | 
 **project** | **str**| XXXXXXXXX  | 
 **build_num** | **int**| XXXXXXXXXX  | 

### Return type

[**Tests**](Tests.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | test metadata for a build  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **project_username_project_checkout_key_fingerprint_delete**
> ProjectUsernameProjectCheckoutKeyFingerprintDelete200Response project_username_project_checkout_key_fingerprint_delete(username, project, fingerprint)



Delete a checkout key. 

### Example

* Api Key Authentication (apikey):

```python
import openapi_client
from openapi_client.models.project_username_project_checkout_key_fingerprint_delete200_response import ProjectUsernameProjectCheckoutKeyFingerprintDelete200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circleci.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circleci.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apikey
configuration.api_key['apikey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apikey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    username = 'username_example' # str | XXXXXXXXX 
    project = 'project_example' # str | XXXXXXXXX 
    fingerprint = 'fingerprint_example' # str | XXXXXXXXXX 

    try:
        api_response = api_instance.project_username_project_checkout_key_fingerprint_delete(username, project, fingerprint)
        print("The response of DefaultApi->project_username_project_checkout_key_fingerprint_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->project_username_project_checkout_key_fingerprint_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **str**| XXXXXXXXX  | 
 **project** | **str**| XXXXXXXXX  | 
 **fingerprint** | **str**| XXXXXXXXXX  | 

### Return type

[**ProjectUsernameProjectCheckoutKeyFingerprintDelete200Response**](ProjectUsernameProjectCheckoutKeyFingerprintDelete200Response.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | status message |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **project_username_project_checkout_key_fingerprint_get**
> Key project_username_project_checkout_key_fingerprint_get(username, project, fingerprint)



Get a checkout key. 

### Example

* Api Key Authentication (apikey):

```python
import openapi_client
from openapi_client.models.key import Key
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circleci.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circleci.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apikey
configuration.api_key['apikey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apikey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    username = 'username_example' # str | XXXXXXXXX 
    project = 'project_example' # str | XXXXXXXXX 
    fingerprint = 'fingerprint_example' # str | XXXXXXXXXX 

    try:
        api_response = api_instance.project_username_project_checkout_key_fingerprint_get(username, project, fingerprint)
        print("The response of DefaultApi->project_username_project_checkout_key_fingerprint_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->project_username_project_checkout_key_fingerprint_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **str**| XXXXXXXXX  | 
 **project** | **str**| XXXXXXXXX  | 
 **fingerprint** | **str**| XXXXXXXXXX  | 

### Return type

[**Key**](Key.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | checkout key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **project_username_project_checkout_key_get**
> List[Key] project_username_project_checkout_key_get(username, project)



Lists checkout keys. 

### Example

* Api Key Authentication (apikey):

```python
import openapi_client
from openapi_client.models.key import Key
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circleci.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circleci.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apikey
configuration.api_key['apikey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apikey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    username = 'username_example' # str | XXXXXXXXX 
    project = 'project_example' # str | XXXXXXXXX 

    try:
        api_response = api_instance.project_username_project_checkout_key_get(username, project)
        print("The response of DefaultApi->project_username_project_checkout_key_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->project_username_project_checkout_key_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **str**| XXXXXXXXX  | 
 **project** | **str**| XXXXXXXXX  | 

### Return type

[**List[Key]**](Key.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | checkout keys |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **project_username_project_checkout_key_post**
> Key project_username_project_checkout_key_post(username, project, body=body)



Creates a new checkout key. Only usable with a user API token. 

### Example

* Api Key Authentication (apikey):

```python
import openapi_client
from openapi_client.models.key import Key
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circleci.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circleci.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apikey
configuration.api_key['apikey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apikey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    username = 'username_example' # str | XXXXXXXXX 
    project = 'project_example' # str | XXXXXXXXX 
    body = 'body_example' # str | The type of key to create. Can be 'deploy-key' or 'github-user-key'.  (optional)

    try:
        api_response = api_instance.project_username_project_checkout_key_post(username, project, body=body)
        print("The response of DefaultApi->project_username_project_checkout_key_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->project_username_project_checkout_key_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **str**| XXXXXXXXX  | 
 **project** | **str**| XXXXXXXXX  | 
 **body** | **str**| The type of key to create. Can be &#39;deploy-key&#39; or &#39;github-user-key&#39;.  | [optional] 

### Return type

[**Key**](Key.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | checkout key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **project_username_project_envvar_get**
> List[Envvar] project_username_project_envvar_get(username, project)



Lists the environment variables for :project 

### Example

* Api Key Authentication (apikey):

```python
import openapi_client
from openapi_client.models.envvar import Envvar
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circleci.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circleci.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apikey
configuration.api_key['apikey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apikey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    username = 'username_example' # str | XXXXXXXXX 
    project = 'project_example' # str | XXXXXXXXX 

    try:
        api_response = api_instance.project_username_project_envvar_get(username, project)
        print("The response of DefaultApi->project_username_project_envvar_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->project_username_project_envvar_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **str**| XXXXXXXXX  | 
 **project** | **str**| XXXXXXXXX  | 

### Return type

[**List[Envvar]**](Envvar.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | XXX |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **project_username_project_envvar_name_delete**
> ProjectUsernameProjectCheckoutKeyFingerprintDelete200Response project_username_project_envvar_name_delete(username, project, name)



Deletes the environment variable named ':name' 

### Example

* Api Key Authentication (apikey):

```python
import openapi_client
from openapi_client.models.project_username_project_checkout_key_fingerprint_delete200_response import ProjectUsernameProjectCheckoutKeyFingerprintDelete200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circleci.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circleci.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apikey
configuration.api_key['apikey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apikey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    username = 'username_example' # str | XXXXXXXXX 
    project = 'project_example' # str | XXXXXXXXX 
    name = 'name_example' # str | XXXXXXXXXX 

    try:
        api_response = api_instance.project_username_project_envvar_name_delete(username, project, name)
        print("The response of DefaultApi->project_username_project_envvar_name_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->project_username_project_envvar_name_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **str**| XXXXXXXXX  | 
 **project** | **str**| XXXXXXXXX  | 
 **name** | **str**| XXXXXXXXXX  | 

### Return type

[**ProjectUsernameProjectCheckoutKeyFingerprintDelete200Response**](ProjectUsernameProjectCheckoutKeyFingerprintDelete200Response.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Deletes the environment variable named &#39;:name&#39;  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **project_username_project_envvar_name_get**
> Envvar project_username_project_envvar_name_get(username, project, name)



Gets the hidden value of environment variable :name 

### Example

* Api Key Authentication (apikey):

```python
import openapi_client
from openapi_client.models.envvar import Envvar
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circleci.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circleci.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apikey
configuration.api_key['apikey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apikey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    username = 'username_example' # str | XXXXXXXXX 
    project = 'project_example' # str | XXXXXXXXX 
    name = 'name_example' # str | XXXXXXXXXX 

    try:
        api_response = api_instance.project_username_project_envvar_name_get(username, project, name)
        print("The response of DefaultApi->project_username_project_envvar_name_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->project_username_project_envvar_name_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **str**| XXXXXXXXX  | 
 **project** | **str**| XXXXXXXXX  | 
 **name** | **str**| XXXXXXXXXX  | 

### Return type

[**Envvar**](Envvar.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | XXX |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **project_username_project_envvar_post**
> Envvar project_username_project_envvar_post(username, project)



Creates a new environment variable 

### Example

* Api Key Authentication (apikey):

```python
import openapi_client
from openapi_client.models.envvar import Envvar
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circleci.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circleci.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apikey
configuration.api_key['apikey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apikey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    username = 'username_example' # str | XXXXXXXXX 
    project = 'project_example' # str | XXXXXXXXX 

    try:
        api_response = api_instance.project_username_project_envvar_post(username, project)
        print("The response of DefaultApi->project_username_project_envvar_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->project_username_project_envvar_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **str**| XXXXXXXXX  | 
 **project** | **str**| XXXXXXXXX  | 

### Return type

[**Envvar**](Envvar.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | XXX |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **project_username_project_get**
> List[Build] project_username_project_get(username, project, limit=limit, offset=offset, filter=filter)



Build summary for each of the last 30 builds for a single git repo. 

### Example

* Api Key Authentication (apikey):

```python
import openapi_client
from openapi_client.models.build import Build
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circleci.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circleci.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apikey
configuration.api_key['apikey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apikey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    username = 'username_example' # str | XXXXXXXXX 
    project = 'project_example' # str | XXXXXXXXX 
    limit = 30 # int | The number of builds to return. Maximum 100, defaults to 30.  (optional) (default to 30)
    offset = 0 # int | The API returns builds starting from this offset, defaults to 0.  (optional) (default to 0)
    filter = 'filter_example' # str | Restricts which builds are returned. Set to \"completed\", \"successful\", \"failed\", \"running\", or defaults to no filter.  (optional)

    try:
        api_response = api_instance.project_username_project_get(username, project, limit=limit, offset=offset, filter=filter)
        print("The response of DefaultApi->project_username_project_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->project_username_project_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **str**| XXXXXXXXX  | 
 **project** | **str**| XXXXXXXXX  | 
 **limit** | **int**| The number of builds to return. Maximum 100, defaults to 30.  | [optional] [default to 30]
 **offset** | **int**| The API returns builds starting from this offset, defaults to 0.  | [optional] [default to 0]
 **filter** | **str**| Restricts which builds are returned. Set to \&quot;completed\&quot;, \&quot;successful\&quot;, \&quot;failed\&quot;, \&quot;running\&quot;, or defaults to no filter.  | [optional] 

### Return type

[**List[Build]**](Build.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Build summary for each of the last 30 builds |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **project_username_project_post**
> BuildSummary project_username_project_post(username, project, project_username_project_post_request=project_username_project_post_request)



Triggers a new build, returns a summary of the build. 

### Example

* Api Key Authentication (apikey):

```python
import openapi_client
from openapi_client.models.build_summary import BuildSummary
from openapi_client.models.project_username_project_post_request import ProjectUsernameProjectPostRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circleci.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circleci.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apikey
configuration.api_key['apikey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apikey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    username = 'username_example' # str | XXXXXXXXX 
    project = 'project_example' # str | XXXXXXXXX 
    project_username_project_post_request = openapi_client.ProjectUsernameProjectPostRequest() # ProjectUsernameProjectPostRequest |  (optional)

    try:
        api_response = api_instance.project_username_project_post(username, project, project_username_project_post_request=project_username_project_post_request)
        print("The response of DefaultApi->project_username_project_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->project_username_project_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **str**| XXXXXXXXX  | 
 **project** | **str**| XXXXXXXXX  | 
 **project_username_project_post_request** | [**ProjectUsernameProjectPostRequest**](ProjectUsernameProjectPostRequest.md)|  | [optional] 

### Return type

[**BuildSummary**](BuildSummary.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | returns a summary of the build |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **project_username_project_ssh_key_post**
> ProjectUsernameProjectSshKeyPostDefaultResponse project_username_project_ssh_key_post(username, project, content_type, project_username_project_ssh_key_post_request)



Create an ssh key used to access external systems that require SSH key-based authentication 

### Example

* Api Key Authentication (apikey):

```python
import openapi_client
from openapi_client.models.project_username_project_ssh_key_post_default_response import ProjectUsernameProjectSshKeyPostDefaultResponse
from openapi_client.models.project_username_project_ssh_key_post_request import ProjectUsernameProjectSshKeyPostRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circleci.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circleci.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apikey
configuration.api_key['apikey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apikey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    username = 'username_example' # str | XXXXXXXXX 
    project = 'project_example' # str | XXXXXXXXX 
    content_type = 'content_type_example' # str | 
    project_username_project_ssh_key_post_request = openapi_client.ProjectUsernameProjectSshKeyPostRequest() # ProjectUsernameProjectSshKeyPostRequest | 

    try:
        api_response = api_instance.project_username_project_ssh_key_post(username, project, content_type, project_username_project_ssh_key_post_request)
        print("The response of DefaultApi->project_username_project_ssh_key_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->project_username_project_ssh_key_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **str**| XXXXXXXXX  | 
 **project** | **str**| XXXXXXXXX  | 
 **content_type** | **str**|  | 
 **project_username_project_ssh_key_post_request** | [**ProjectUsernameProjectSshKeyPostRequest**](ProjectUsernameProjectSshKeyPostRequest.md)|  | 

### Return type

[**ProjectUsernameProjectSshKeyPostDefaultResponse**](ProjectUsernameProjectSshKeyPostDefaultResponse.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | no response expected |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **project_username_project_tree_branch_post**
> Build project_username_project_tree_branch_post(username, project, branch, project_username_project_tree_branch_post_request=project_username_project_tree_branch_post_request)



Triggers a new build, returns a summary of the build. Optional build parameters can be set using an experimental API.  Note: For more about build parameters, read about [using parameterized builds](https://circleci.com/docs/parameterized-builds/) 

### Example

* Api Key Authentication (apikey):

```python
import openapi_client
from openapi_client.models.build import Build
from openapi_client.models.project_username_project_tree_branch_post_request import ProjectUsernameProjectTreeBranchPostRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circleci.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circleci.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apikey
configuration.api_key['apikey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apikey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    username = 'username_example' # str | XXXXXXXXX 
    project = 'project_example' # str | XXXXXXXXX 
    branch = 'branch_example' # str | The branch name should be url-encoded. 
    project_username_project_tree_branch_post_request = openapi_client.ProjectUsernameProjectTreeBranchPostRequest() # ProjectUsernameProjectTreeBranchPostRequest |  (optional)

    try:
        api_response = api_instance.project_username_project_tree_branch_post(username, project, branch, project_username_project_tree_branch_post_request=project_username_project_tree_branch_post_request)
        print("The response of DefaultApi->project_username_project_tree_branch_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->project_username_project_tree_branch_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **str**| XXXXXXXXX  | 
 **project** | **str**| XXXXXXXXX  | 
 **branch** | **str**| The branch name should be url-encoded.  | 
 **project_username_project_tree_branch_post_request** | [**ProjectUsernameProjectTreeBranchPostRequest**](ProjectUsernameProjectTreeBranchPostRequest.md)|  | [optional] 

### Return type

[**Build**](Build.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | returns a summary of the build |  * Location -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **projects_get**
> List[Project] projects_get()



List of all the projects you're following on CircleCI, with build information organized by branch. 

### Example

* Api Key Authentication (apikey):

```python
import openapi_client
from openapi_client.models.project import Project
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circleci.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circleci.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apikey
configuration.api_key['apikey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apikey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        api_response = api_instance.projects_get()
        print("The response of DefaultApi->projects_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->projects_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[Project]**](Project.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of all the projects you&#39;re following on CircleCI  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recent_builds_get**
> List[Build] recent_builds_get(limit=limit, offset=offset)



Build summary for each of the last 30 recent builds, ordered by build_num. 

### Example

* Api Key Authentication (apikey):

```python
import openapi_client
from openapi_client.models.build import Build
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circleci.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circleci.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apikey
configuration.api_key['apikey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apikey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    limit = 30 # int | The number of builds to return. Maximum 100, defaults to 30.  (optional) (default to 30)
    offset = 0 # int | The API returns builds starting from this offset, defaults to 0.  (optional) (default to 0)

    try:
        api_response = api_instance.recent_builds_get(limit=limit, offset=offset)
        print("The response of DefaultApi->recent_builds_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->recent_builds_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| The number of builds to return. Maximum 100, defaults to 30.  | [optional] [default to 30]
 **offset** | **int**| The API returns builds starting from this offset, defaults to 0.  | [optional] [default to 0]

### Return type

[**List[Build]**](Build.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Build summary for each of the last 30 recent builds |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_heroku_key_post**
> user_heroku_key_post()



Adds your Heroku API key to CircleCI, takes apikey as form param name. 

### Example

* Api Key Authentication (apikey):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circleci.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circleci.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apikey
configuration.api_key['apikey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apikey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        api_instance.user_heroku_key_post()
    except Exception as e:
        print("Exception when calling DefaultApi->user_heroku_key_post: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**403** | Your Heroku API key is invalid.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

