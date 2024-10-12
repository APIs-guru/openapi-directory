# openapi_client.ContentReleaseApi

All URIs are relative to *https://secure.agco-ats.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_v2_content_releases_content_release_id_get**](ContentReleaseApi.md#api_v2_content_releases_content_release_id_get) | **GET** /api/v2/ContentReleases/{ContentReleaseId} | Get a Content Release Version by ID
[**content_release_delete_content_release_versionn**](ContentReleaseApi.md#content_release_delete_content_release_versionn) | **DELETE** /api/v2/ContentReleases/{ContentReleaseId} | Delete a ContentReleaseVersion
[**content_release_get_content_release_version**](ContentReleaseApi.md#content_release_get_content_release_version) | **GET** /api/v2/ContentReleases | Get ContentReleaseVersion
[**content_release_post_content_release**](ContentReleaseApi.md#content_release_post_content_release) | **POST** /api/v2/ContentReleases | Create a ContentReleaseVersion
[**content_release_put_content_definition**](ContentReleaseApi.md#content_release_put_content_definition) | **PUT** /api/v2/ContentReleases/{ContentReleaseId} | Update a ContentReleaseVersion


# **api_v2_content_releases_content_release_id_get**
> ContentSubmissionSharedBusinessEntitiesContentReleaseVersion api_v2_content_releases_content_release_id_get(content_release_id)

Get a Content Release Version by ID

Gets a ContentReleaseVersion by ID. When successful, the response is the requested ContentReleaseVersion.              If unsuccessful, an appropriate ApiError is returned.

### Example


```python
import openapi_client
from openapi_client.models.content_submission_shared_business_entities_content_release_version import ContentSubmissionSharedBusinessEntitiesContentReleaseVersion
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
    api_instance = openapi_client.ContentReleaseApi(api_client)
    content_release_id = 56 # int | The ID of the ContentReleaseVersion to get.

    try:
        # Get a Content Release Version by ID
        api_response = api_instance.api_v2_content_releases_content_release_id_get(content_release_id)
        print("The response of ContentReleaseApi->api_v2_content_releases_content_release_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContentReleaseApi->api_v2_content_releases_content_release_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_release_id** | **int**| The ID of the ContentReleaseVersion to get. | 

### Return type

[**ContentSubmissionSharedBusinessEntitiesContentReleaseVersion**](ContentSubmissionSharedBusinessEntitiesContentReleaseVersion.md)

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

# **content_release_delete_content_release_versionn**
> content_release_delete_content_release_versionn(content_release_id)

Delete a ContentReleaseVersion

Deletes an ContentReleaseVersion. When successful, the response is empty.  If unsuccessful, an appropriate              ApiError is returned.

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
    api_instance = openapi_client.ContentReleaseApi(api_client)
    content_release_id = 56 # int | The ID of the ContentReleaseVersion to delete

    try:
        # Delete a ContentReleaseVersion
        api_instance.content_release_delete_content_release_versionn(content_release_id)
    except Exception as e:
        print("Exception when calling ContentReleaseApi->content_release_delete_content_release_versionn: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_release_id** | **int**| The ID of the ContentReleaseVersion to delete | 

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

# **content_release_get_content_release_version**
> APIPagedResponseContentSubmissionSharedBusinessEntitiesContentReleaseVersion content_release_get_content_release_version(limit=limit, offset=offset, deleted=deleted, release_id=release_id, user_id=user_id, content_definition_id=content_definition_id, version=version)

Get ContentReleaseVersion

Gets a collection of ContentReleaseVersion. When successful, the response is a PagedResponse of ContentReleaseVersion.              If unsuccessful, an appropriate ApiError is returned.

### Example


```python
import openapi_client
from openapi_client.models.api_paged_response_content_submission_shared_business_entities_content_release_version import APIPagedResponseContentSubmissionSharedBusinessEntitiesContentReleaseVersion
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
    api_instance = openapi_client.ContentReleaseApi(api_client)
    limit = 56 # int | Optional. The page limit.  If not specified, the default page limit is 10. (optional)
    offset = 56 # int | Optional. The page offset.  If not specified, the default page offset is 0. (optional)
    deleted = True # bool | Optional. Filter by deleted. (optional)
    release_id = 56 # int | Optional. Filter by releaseID. (optional)
    user_id = 56 # int | Optional. Filter by UserID. (optional)
    content_definition_id = 56 # int | Optional. Filter by ContentDefinitionID. (optional)
    version = 56 # int | Optional. Filter by Version. (optional)

    try:
        # Get ContentReleaseVersion
        api_response = api_instance.content_release_get_content_release_version(limit=limit, offset=offset, deleted=deleted, release_id=release_id, user_id=user_id, content_definition_id=content_definition_id, version=version)
        print("The response of ContentReleaseApi->content_release_get_content_release_version:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContentReleaseApi->content_release_get_content_release_version: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Optional. The page limit.  If not specified, the default page limit is 10. | [optional] 
 **offset** | **int**| Optional. The page offset.  If not specified, the default page offset is 0. | [optional] 
 **deleted** | **bool**| Optional. Filter by deleted. | [optional] 
 **release_id** | **int**| Optional. Filter by releaseID. | [optional] 
 **user_id** | **int**| Optional. Filter by UserID. | [optional] 
 **content_definition_id** | **int**| Optional. Filter by ContentDefinitionID. | [optional] 
 **version** | **int**| Optional. Filter by Version. | [optional] 

### Return type

[**APIPagedResponseContentSubmissionSharedBusinessEntitiesContentReleaseVersion**](APIPagedResponseContentSubmissionSharedBusinessEntitiesContentReleaseVersion.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **content_release_post_content_release**
> int content_release_post_content_release(content_submission_shared_business_entities_content_release_version)

Create a ContentReleaseVersion

Creates a ContentReleaseVersion.  The body of the POST is the ContentReleaseVersion to create.              The ContentReleaseId will be assigned on creation of the Job.  When successful, the response              is the contentReleaseId.  If unsuccessful, an appropriate ApiError is returned.

### Example


```python
import openapi_client
from openapi_client.models.content_submission_shared_business_entities_content_release_version import ContentSubmissionSharedBusinessEntitiesContentReleaseVersion
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
    api_instance = openapi_client.ContentReleaseApi(api_client)
    content_submission_shared_business_entities_content_release_version = openapi_client.ContentSubmissionSharedBusinessEntitiesContentReleaseVersion() # ContentSubmissionSharedBusinessEntitiesContentReleaseVersion | The ContentReleaseVersion to create.

    try:
        # Create a ContentReleaseVersion
        api_response = api_instance.content_release_post_content_release(content_submission_shared_business_entities_content_release_version)
        print("The response of ContentReleaseApi->content_release_post_content_release:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContentReleaseApi->content_release_post_content_release: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_submission_shared_business_entities_content_release_version** | [**ContentSubmissionSharedBusinessEntitiesContentReleaseVersion**](ContentSubmissionSharedBusinessEntitiesContentReleaseVersion.md)| The ContentReleaseVersion to create. | 

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

# **content_release_put_content_definition**
> content_release_put_content_definition(content_release_id, content_submission_shared_business_entities_content_release_version)

Update a ContentReleaseVersion

Updates a ContentReleaseVersion.  The body of the PUT is the updated ContentReleaseVersion.                When successful, the response is empty.  If unsuccessful, an appropriate ApiError is returned.

### Example


```python
import openapi_client
from openapi_client.models.content_submission_shared_business_entities_content_release_version import ContentSubmissionSharedBusinessEntitiesContentReleaseVersion
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
    api_instance = openapi_client.ContentReleaseApi(api_client)
    content_release_id = 56 # int | The ID of the ContentReleaseVersion to update
    content_submission_shared_business_entities_content_release_version = openapi_client.ContentSubmissionSharedBusinessEntitiesContentReleaseVersion() # ContentSubmissionSharedBusinessEntitiesContentReleaseVersion | The updated ContentReleaseVersion

    try:
        # Update a ContentReleaseVersion
        api_instance.content_release_put_content_definition(content_release_id, content_submission_shared_business_entities_content_release_version)
    except Exception as e:
        print("Exception when calling ContentReleaseApi->content_release_put_content_definition: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_release_id** | **int**| The ID of the ContentReleaseVersion to update | 
 **content_submission_shared_business_entities_content_release_version** | [**ContentSubmissionSharedBusinessEntitiesContentReleaseVersion**](ContentSubmissionSharedBusinessEntitiesContentReleaseVersion.md)| The updated ContentReleaseVersion | 

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

