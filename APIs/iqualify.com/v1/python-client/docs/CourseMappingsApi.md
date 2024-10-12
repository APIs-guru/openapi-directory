# openapi_client.CourseMappingsApi

All URIs are relative to *https://api.iqualify.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**course_mappings_externalcourse_external_course_id_get**](CourseMappingsApi.md#course_mappings_externalcourse_external_course_id_get) | **GET** /course-mappings/externalcourse/{externalCourseId} | Find course mappings by externalCourseId
[**course_mappings_get**](CourseMappingsApi.md#course_mappings_get) | **GET** /course-mappings | Find course mappings
[**course_mappings_offering_id_external_course_id_delete**](CourseMappingsApi.md#course_mappings_offering_id_external_course_id_delete) | **DELETE** /course-mappings/{offeringId}/{externalCourseId} | Remove course mapping
[**course_mappings_offering_id_external_course_id_put**](CourseMappingsApi.md#course_mappings_offering_id_external_course_id_put) | **PUT** /course-mappings/{offeringId}/{externalCourseId} | Add course mapping
[**course_mappings_offering_id_get**](CourseMappingsApi.md#course_mappings_offering_id_get) | **GET** /course-mappings/{offeringId} | Find course mappings by offeringId


# **course_mappings_externalcourse_external_course_id_get**
> List[str] course_mappings_externalcourse_external_course_id_get(external_course_id)

Find course mappings by externalCourseId

Responds with course mapping details by externalCourseId.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.iqualify.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.iqualify.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CourseMappingsApi(api_client)
    external_course_id = 'external_course_id_example' # str | external course's id

    try:
        # Find course mappings by externalCourseId
        api_response = api_instance.course_mappings_externalcourse_external_course_id_get(external_course_id)
        print("The response of CourseMappingsApi->course_mappings_externalcourse_external_course_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CourseMappingsApi->course_mappings_externalcourse_external_course_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **external_course_id** | **str**| external course&#39;s id | 

### Return type

**List[str]**

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Course Mapping |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **course_mappings_get**
> Dict[str, str] course_mappings_get()

Find course mappings

Returns all course mappings for course offerings.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.iqualify.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.iqualify.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CourseMappingsApi(api_client)

    try:
        # Find course mappings
        api_response = api_instance.course_mappings_get()
        print("The response of CourseMappingsApi->course_mappings_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CourseMappingsApi->course_mappings_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**Dict[str, str]**

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Course Mappings |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **course_mappings_offering_id_external_course_id_delete**
> List[str] course_mappings_offering_id_external_course_id_delete(offering_id, external_course_id)

Remove course mapping

Removes the course mapping between the offering and the externalCourseId.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.iqualify.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.iqualify.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CourseMappingsApi(api_client)
    offering_id = 'offering_id_example' # str | offering's id
    external_course_id = 'external_course_id_example' # str | external course's id

    try:
        # Remove course mapping
        api_response = api_instance.course_mappings_offering_id_external_course_id_delete(offering_id, external_course_id)
        print("The response of CourseMappingsApi->course_mappings_offering_id_external_course_id_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CourseMappingsApi->course_mappings_offering_id_external_course_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offering_id** | **str**| offering&#39;s id | 
 **external_course_id** | **str**| external course&#39;s id | 

### Return type

**List[str]**

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Course Mapping |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **course_mappings_offering_id_external_course_id_put**
> List[str] course_mappings_offering_id_external_course_id_put(offering_id, external_course_id)

Add course mapping

Creates a mapping between the offering and the externalCourseId.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.iqualify.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.iqualify.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CourseMappingsApi(api_client)
    offering_id = 'offering_id_example' # str | offering's id
    external_course_id = 'external_course_id_example' # str | external course's id

    try:
        # Add course mapping
        api_response = api_instance.course_mappings_offering_id_external_course_id_put(offering_id, external_course_id)
        print("The response of CourseMappingsApi->course_mappings_offering_id_external_course_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CourseMappingsApi->course_mappings_offering_id_external_course_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offering_id** | **str**| offering&#39;s id | 
 **external_course_id** | **str**| external course&#39;s id | 

### Return type

**List[str]**

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Course Mapping |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **course_mappings_offering_id_get**
> List[str] course_mappings_offering_id_get(offering_id)

Find course mappings by offeringId

Responds with course mapping details by offeringId.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.iqualify.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.iqualify.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CourseMappingsApi(api_client)
    offering_id = 'offering_id_example' # str | offering's id

    try:
        # Find course mappings by offeringId
        api_response = api_instance.course_mappings_offering_id_get(offering_id)
        print("The response of CourseMappingsApi->course_mappings_offering_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CourseMappingsApi->course_mappings_offering_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offering_id** | **str**| offering&#39;s id | 

### Return type

**List[str]**

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Course Mapping |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

