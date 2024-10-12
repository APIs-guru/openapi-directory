# openapi_client.OfferingMetadataApi

All URIs are relative to *https://api.iqualify.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**offerings_offering_id_metadata_category_put**](OfferingMetadataApi.md#offerings_offering_id_metadata_category_put) | **PUT** /offerings/{offeringId}/metadata/category | Update offering category metadata
[**offerings_offering_id_metadata_level_put**](OfferingMetadataApi.md#offerings_offering_id_metadata_level_put) | **PUT** /offerings/{offeringId}/metadata/level | Update offering level metadata
[**offerings_offering_id_metadata_tags_put**](OfferingMetadataApi.md#offerings_offering_id_metadata_tags_put) | **PUT** /offerings/{offeringId}/metadata/tags | Update offering tags metadata
[**offerings_offering_id_metadata_topic_put**](OfferingMetadataApi.md#offerings_offering_id_metadata_topic_put) | **PUT** /offerings/{offeringId}/metadata/topic | Update offering topic metadata


# **offerings_offering_id_metadata_category_put**
> OfferingMetadataResponse offerings_offering_id_metadata_category_put(offering_id, courses_content_id_metadata_category_put_request)

Update offering category metadata

Updates the offering category metadata.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.courses_content_id_metadata_category_put_request import CoursesContentIdMetadataCategoryPutRequest
from openapi_client.models.offering_metadata_response import OfferingMetadataResponse
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
    api_instance = openapi_client.OfferingMetadataApi(api_client)
    offering_id = 'offering_id_example' # str | offering's id
    courses_content_id_metadata_category_put_request = openapi_client.CoursesContentIdMetadataCategoryPutRequest() # CoursesContentIdMetadataCategoryPutRequest | 

    try:
        # Update offering category metadata
        api_response = api_instance.offerings_offering_id_metadata_category_put(offering_id, courses_content_id_metadata_category_put_request)
        print("The response of OfferingMetadataApi->offerings_offering_id_metadata_category_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OfferingMetadataApi->offerings_offering_id_metadata_category_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offering_id** | **str**| offering&#39;s id | 
 **courses_content_id_metadata_category_put_request** | [**CoursesContentIdMetadataCategoryPutRequest**](CoursesContentIdMetadataCategoryPutRequest.md)|  | 

### Return type

[**OfferingMetadataResponse**](OfferingMetadataResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | offering updated |  -  |
**400** | Bad Request |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **offerings_offering_id_metadata_level_put**
> OfferingMetadataResponse offerings_offering_id_metadata_level_put(offering_id, courses_content_id_metadata_level_put_request)

Update offering level metadata

Updates the offering level metadata.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.courses_content_id_metadata_level_put_request import CoursesContentIdMetadataLevelPutRequest
from openapi_client.models.offering_metadata_response import OfferingMetadataResponse
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
    api_instance = openapi_client.OfferingMetadataApi(api_client)
    offering_id = 'offering_id_example' # str | offering's id
    courses_content_id_metadata_level_put_request = openapi_client.CoursesContentIdMetadataLevelPutRequest() # CoursesContentIdMetadataLevelPutRequest | 

    try:
        # Update offering level metadata
        api_response = api_instance.offerings_offering_id_metadata_level_put(offering_id, courses_content_id_metadata_level_put_request)
        print("The response of OfferingMetadataApi->offerings_offering_id_metadata_level_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OfferingMetadataApi->offerings_offering_id_metadata_level_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offering_id** | **str**| offering&#39;s id | 
 **courses_content_id_metadata_level_put_request** | [**CoursesContentIdMetadataLevelPutRequest**](CoursesContentIdMetadataLevelPutRequest.md)|  | 

### Return type

[**OfferingMetadataResponse**](OfferingMetadataResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | offering updated |  -  |
**400** | Bad Request |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **offerings_offering_id_metadata_tags_put**
> OfferingMetadataResponse offerings_offering_id_metadata_tags_put(offering_id, courses_content_id_metadata_tags_put_request)

Update offering tags metadata

Updates the offering tags metadata.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.courses_content_id_metadata_tags_put_request import CoursesContentIdMetadataTagsPutRequest
from openapi_client.models.offering_metadata_response import OfferingMetadataResponse
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
    api_instance = openapi_client.OfferingMetadataApi(api_client)
    offering_id = 'offering_id_example' # str | offering's id
    courses_content_id_metadata_tags_put_request = openapi_client.CoursesContentIdMetadataTagsPutRequest() # CoursesContentIdMetadataTagsPutRequest | 

    try:
        # Update offering tags metadata
        api_response = api_instance.offerings_offering_id_metadata_tags_put(offering_id, courses_content_id_metadata_tags_put_request)
        print("The response of OfferingMetadataApi->offerings_offering_id_metadata_tags_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OfferingMetadataApi->offerings_offering_id_metadata_tags_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offering_id** | **str**| offering&#39;s id | 
 **courses_content_id_metadata_tags_put_request** | [**CoursesContentIdMetadataTagsPutRequest**](CoursesContentIdMetadataTagsPutRequest.md)|  | 

### Return type

[**OfferingMetadataResponse**](OfferingMetadataResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | offering updated |  -  |
**400** | Bad Request |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **offerings_offering_id_metadata_topic_put**
> OfferingMetadataResponse offerings_offering_id_metadata_topic_put(offering_id, courses_content_id_metadata_topic_put_request)

Update offering topic metadata

Updates the offering topic metadata.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.courses_content_id_metadata_topic_put_request import CoursesContentIdMetadataTopicPutRequest
from openapi_client.models.offering_metadata_response import OfferingMetadataResponse
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
    api_instance = openapi_client.OfferingMetadataApi(api_client)
    offering_id = 'offering_id_example' # str | offering's id
    courses_content_id_metadata_topic_put_request = openapi_client.CoursesContentIdMetadataTopicPutRequest() # CoursesContentIdMetadataTopicPutRequest | 

    try:
        # Update offering topic metadata
        api_response = api_instance.offerings_offering_id_metadata_topic_put(offering_id, courses_content_id_metadata_topic_put_request)
        print("The response of OfferingMetadataApi->offerings_offering_id_metadata_topic_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OfferingMetadataApi->offerings_offering_id_metadata_topic_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offering_id** | **str**| offering&#39;s id | 
 **courses_content_id_metadata_topic_put_request** | [**CoursesContentIdMetadataTopicPutRequest**](CoursesContentIdMetadataTopicPutRequest.md)|  | 

### Return type

[**OfferingMetadataResponse**](OfferingMetadataResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | offering updated |  -  |
**400** | Bad Request |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

