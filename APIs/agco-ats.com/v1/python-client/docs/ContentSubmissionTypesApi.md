# openapi_client.ContentSubmissionTypesApi

All URIs are relative to *https://secure.agco-ats.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**content_submission_types_delete_content_submission_type**](ContentSubmissionTypesApi.md#content_submission_types_delete_content_submission_type) | **DELETE** /api/v2/ContentSubmissionTypes/{id} | Remove a Content Submission Type
[**content_submission_types_get_content_submission_type**](ContentSubmissionTypesApi.md#content_submission_types_get_content_submission_type) | **GET** /api/v2/ContentSubmissionTypes/{id} | Retrieves a Content Submission Type by its ID.
[**content_submission_types_get_content_submission_types**](ContentSubmissionTypesApi.md#content_submission_types_get_content_submission_types) | **GET** /api/v2/ContentSubmissionTypes | Returns available Content Submission Types.
[**content_submission_types_post_content_submission_type**](ContentSubmissionTypesApi.md#content_submission_types_post_content_submission_type) | **POST** /api/v2/ContentSubmissionTypes | Add a Content Submission Type
[**content_submission_types_put_content_submission_type**](ContentSubmissionTypesApi.md#content_submission_types_put_content_submission_type) | **PUT** /api/v2/ContentSubmissionTypes/{id} | Update a Content Submission Type


# **content_submission_types_delete_content_submission_type**
> content_submission_types_delete_content_submission_type(id)

Remove a Content Submission Type

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ContentSubmissionTypesApi(api_client)
    id = 56 # int | The ID of the Content Submission Type

    try:
        # Remove a Content Submission Type
        api_instance.content_submission_types_delete_content_submission_type(id)
    except Exception as e:
        print("Exception when calling ContentSubmissionTypesApi->content_submission_types_delete_content_submission_type: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The ID of the Content Submission Type | 

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
**204** | No Content |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **content_submission_types_get_content_submission_type**
> ContentSubmissionSharedBusinessEntitiesContentSubmissionType content_submission_types_get_content_submission_type(id)

Retrieves a Content Submission Type by its ID.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.content_submission_shared_business_entities_content_submission_type import ContentSubmissionSharedBusinessEntitiesContentSubmissionType
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ContentSubmissionTypesApi(api_client)
    id = 56 # int | The ID of the Content Submission Type

    try:
        # Retrieves a Content Submission Type by its ID.
        api_response = api_instance.content_submission_types_get_content_submission_type(id)
        print("The response of ContentSubmissionTypesApi->content_submission_types_get_content_submission_type:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContentSubmissionTypesApi->content_submission_types_get_content_submission_type: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The ID of the Content Submission Type | 

### Return type

[**ContentSubmissionSharedBusinessEntitiesContentSubmissionType**](ContentSubmissionSharedBusinessEntitiesContentSubmissionType.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **content_submission_types_get_content_submission_types**
> List[ContentSubmissionSharedBusinessEntitiesContentSubmissionType] content_submission_types_get_content_submission_types(enabled=enabled)

Returns available Content Submission Types.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.content_submission_shared_business_entities_content_submission_type import ContentSubmissionSharedBusinessEntitiesContentSubmissionType
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ContentSubmissionTypesApi(api_client)
    enabled = True # bool |  (optional)

    try:
        # Returns available Content Submission Types.
        api_response = api_instance.content_submission_types_get_content_submission_types(enabled=enabled)
        print("The response of ContentSubmissionTypesApi->content_submission_types_get_content_submission_types:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContentSubmissionTypesApi->content_submission_types_get_content_submission_types: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **enabled** | **bool**|  | [optional] 

### Return type

[**List[ContentSubmissionSharedBusinessEntitiesContentSubmissionType]**](ContentSubmissionSharedBusinessEntitiesContentSubmissionType.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **content_submission_types_post_content_submission_type**
> int content_submission_types_post_content_submission_type(content_submission_shared_business_entities_content_submission_type)

Add a Content Submission Type

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.content_submission_shared_business_entities_content_submission_type import ContentSubmissionSharedBusinessEntitiesContentSubmissionType
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ContentSubmissionTypesApi(api_client)
    content_submission_shared_business_entities_content_submission_type = openapi_client.ContentSubmissionSharedBusinessEntitiesContentSubmissionType() # ContentSubmissionSharedBusinessEntitiesContentSubmissionType | The Content Submission Type

    try:
        # Add a Content Submission Type
        api_response = api_instance.content_submission_types_post_content_submission_type(content_submission_shared_business_entities_content_submission_type)
        print("The response of ContentSubmissionTypesApi->content_submission_types_post_content_submission_type:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContentSubmissionTypesApi->content_submission_types_post_content_submission_type: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_submission_shared_business_entities_content_submission_type** | [**ContentSubmissionSharedBusinessEntitiesContentSubmissionType**](ContentSubmissionSharedBusinessEntitiesContentSubmissionType.md)| The Content Submission Type | 

### Return type

**int**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **content_submission_types_put_content_submission_type**
> content_submission_types_put_content_submission_type(id, content_submission_shared_business_entities_content_submission_type)

Update a Content Submission Type

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.content_submission_shared_business_entities_content_submission_type import ContentSubmissionSharedBusinessEntitiesContentSubmissionType
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ContentSubmissionTypesApi(api_client)
    id = 56 # int | The ID of the Content Submission Type
    content_submission_shared_business_entities_content_submission_type = openapi_client.ContentSubmissionSharedBusinessEntitiesContentSubmissionType() # ContentSubmissionSharedBusinessEntitiesContentSubmissionType | The Content Submission Type

    try:
        # Update a Content Submission Type
        api_instance.content_submission_types_put_content_submission_type(id, content_submission_shared_business_entities_content_submission_type)
    except Exception as e:
        print("Exception when calling ContentSubmissionTypesApi->content_submission_types_put_content_submission_type: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The ID of the Content Submission Type | 
 **content_submission_shared_business_entities_content_submission_type** | [**ContentSubmissionSharedBusinessEntitiesContentSubmissionType**](ContentSubmissionSharedBusinessEntitiesContentSubmissionType.md)| The Content Submission Type | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

