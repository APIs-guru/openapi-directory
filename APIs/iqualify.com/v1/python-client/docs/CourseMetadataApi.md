# openapi_client.CourseMetadataApi

All URIs are relative to *https://api.iqualify.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**courses_content_id_metadata_category_put**](CourseMetadataApi.md#courses_content_id_metadata_category_put) | **PUT** /courses/{contentId}/metadata/category | Update course category
[**courses_content_id_metadata_level_put**](CourseMetadataApi.md#courses_content_id_metadata_level_put) | **PUT** /courses/{contentId}/metadata/level | Update course level
[**courses_content_id_metadata_tags_put**](CourseMetadataApi.md#courses_content_id_metadata_tags_put) | **PUT** /courses/{contentId}/metadata/tags | Update course tags
[**courses_content_id_metadata_topic_put**](CourseMetadataApi.md#courses_content_id_metadata_topic_put) | **PUT** /courses/{contentId}/metadata/topic | Update course topic


# **courses_content_id_metadata_category_put**
> CourseMetaResponse courses_content_id_metadata_category_put(content_id, courses_content_id_metadata_category_put_request)

Update course category

Add or update course category in the metadata of a course.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.course_meta_response import CourseMetaResponse
from openapi_client.models.courses_content_id_metadata_category_put_request import CoursesContentIdMetadataCategoryPutRequest
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
    api_instance = openapi_client.CourseMetadataApi(api_client)
    content_id = 'content_id_example' # str | The content Id
    courses_content_id_metadata_category_put_request = openapi_client.CoursesContentIdMetadataCategoryPutRequest() # CoursesContentIdMetadataCategoryPutRequest | 

    try:
        # Update course category
        api_response = api_instance.courses_content_id_metadata_category_put(content_id, courses_content_id_metadata_category_put_request)
        print("The response of CourseMetadataApi->courses_content_id_metadata_category_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CourseMetadataApi->courses_content_id_metadata_category_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_id** | **str**| The content Id | 
 **courses_content_id_metadata_category_put_request** | [**CoursesContentIdMetadataCategoryPutRequest**](CoursesContentIdMetadataCategoryPutRequest.md)|  | 

### Return type

[**CourseMetaResponse**](CourseMetaResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Course detail |  -  |
**400** | Bad Request |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **courses_content_id_metadata_level_put**
> CourseMetaResponse courses_content_id_metadata_level_put(content_id, courses_content_id_metadata_level_put_request)

Update course level

Add or update the course level in the metadata of a course.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.course_meta_response import CourseMetaResponse
from openapi_client.models.courses_content_id_metadata_level_put_request import CoursesContentIdMetadataLevelPutRequest
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
    api_instance = openapi_client.CourseMetadataApi(api_client)
    content_id = 'content_id_example' # str | The content Id
    courses_content_id_metadata_level_put_request = openapi_client.CoursesContentIdMetadataLevelPutRequest() # CoursesContentIdMetadataLevelPutRequest | 

    try:
        # Update course level
        api_response = api_instance.courses_content_id_metadata_level_put(content_id, courses_content_id_metadata_level_put_request)
        print("The response of CourseMetadataApi->courses_content_id_metadata_level_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CourseMetadataApi->courses_content_id_metadata_level_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_id** | **str**| The content Id | 
 **courses_content_id_metadata_level_put_request** | [**CoursesContentIdMetadataLevelPutRequest**](CoursesContentIdMetadataLevelPutRequest.md)|  | 

### Return type

[**CourseMetaResponse**](CourseMetaResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Course detail |  -  |
**400** | Bad Request |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **courses_content_id_metadata_tags_put**
> CourseMetaResponse courses_content_id_metadata_tags_put(content_id, courses_content_id_metadata_tags_put_request)

Update course tags

Add or update course tags in the metadata of a course.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.course_meta_response import CourseMetaResponse
from openapi_client.models.courses_content_id_metadata_tags_put_request import CoursesContentIdMetadataTagsPutRequest
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
    api_instance = openapi_client.CourseMetadataApi(api_client)
    content_id = 'content_id_example' # str | The content Id
    courses_content_id_metadata_tags_put_request = openapi_client.CoursesContentIdMetadataTagsPutRequest() # CoursesContentIdMetadataTagsPutRequest | 

    try:
        # Update course tags
        api_response = api_instance.courses_content_id_metadata_tags_put(content_id, courses_content_id_metadata_tags_put_request)
        print("The response of CourseMetadataApi->courses_content_id_metadata_tags_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CourseMetadataApi->courses_content_id_metadata_tags_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_id** | **str**| The content Id | 
 **courses_content_id_metadata_tags_put_request** | [**CoursesContentIdMetadataTagsPutRequest**](CoursesContentIdMetadataTagsPutRequest.md)|  | 

### Return type

[**CourseMetaResponse**](CourseMetaResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Course detail |  -  |
**400** | Bad Request |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **courses_content_id_metadata_topic_put**
> CourseMetaResponse courses_content_id_metadata_topic_put(content_id, courses_content_id_metadata_topic_put_request)

Update course topic

Add or update the course topic in the metadata of a course.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.course_meta_response import CourseMetaResponse
from openapi_client.models.courses_content_id_metadata_topic_put_request import CoursesContentIdMetadataTopicPutRequest
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
    api_instance = openapi_client.CourseMetadataApi(api_client)
    content_id = 'content_id_example' # str | The content Id
    courses_content_id_metadata_topic_put_request = openapi_client.CoursesContentIdMetadataTopicPutRequest() # CoursesContentIdMetadataTopicPutRequest | 

    try:
        # Update course topic
        api_response = api_instance.courses_content_id_metadata_topic_put(content_id, courses_content_id_metadata_topic_put_request)
        print("The response of CourseMetadataApi->courses_content_id_metadata_topic_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CourseMetadataApi->courses_content_id_metadata_topic_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_id** | **str**| The content Id | 
 **courses_content_id_metadata_topic_put_request** | [**CoursesContentIdMetadataTopicPutRequest**](CoursesContentIdMetadataTopicPutRequest.md)|  | 

### Return type

[**CourseMetaResponse**](CourseMetaResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Course detail |  -  |
**400** | Bad Request |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

