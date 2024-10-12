# openapi_client.ReleaseApi

All URIs are relative to *https://secure.agco-ats.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**release_delete_release_bundle**](ReleaseApi.md#release_delete_release_bundle) | **DELETE** /api/v2/Releases/{ReleaseId}/Bundle/{BundleId} | Deletes the association between a release and a bundle.
[**release_get_release**](ReleaseApi.md#release_get_release) | **GET** /api/v2/Releases/{ReleaseId} | Get a  Release by ID
[**release_get_releases**](ReleaseApi.md#release_get_releases) | **GET** /api/v2/Releases | Get Release
[**release_post_release**](ReleaseApi.md#release_post_release) | **POST** /api/v2/Releases | Create a Release
[**release_post_release_bundle**](ReleaseApi.md#release_post_release_bundle) | **POST** /api/v2/Releases/{ReleaseId}/Bundle/{BundleId} | Associates the release with a bundle.
[**release_put_content_definition**](ReleaseApi.md#release_put_content_definition) | **PUT** /api/v2/Releases/{releaseId} | Update a Release


# **release_delete_release_bundle**
> release_delete_release_bundle(release_id, bundle_id)

Deletes the association between a release and a bundle.

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
    api_instance = openapi_client.ReleaseApi(api_client)
    release_id = 56 # int | The release identifier.
    bundle_id = 'bundle_id_example' # str | The bundle identifier.

    try:
        # Deletes the association between a release and a bundle.
        api_instance.release_delete_release_bundle(release_id, bundle_id)
    except Exception as e:
        print("Exception when calling ReleaseApi->release_delete_release_bundle: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **release_id** | **int**| The release identifier. | 
 **bundle_id** | **str**| The bundle identifier. | 

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

# **release_get_release**
> ContentSubmissionSharedBusinessEntitiesRelease release_get_release(release_id)

Get a  Release by ID

Gets a Release by ID. When successful, the response is the requested Release.              If unsuccessful, an appropriate ApiError is returned.

### Example


```python
import openapi_client
from openapi_client.models.content_submission_shared_business_entities_release import ContentSubmissionSharedBusinessEntitiesRelease
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
    api_instance = openapi_client.ReleaseApi(api_client)
    release_id = 56 # int | The ID of the Release to get.

    try:
        # Get a  Release by ID
        api_response = api_instance.release_get_release(release_id)
        print("The response of ReleaseApi->release_get_release:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReleaseApi->release_get_release: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **release_id** | **int**| The ID of the Release to get. | 

### Return type

[**ContentSubmissionSharedBusinessEntitiesRelease**](ContentSubmissionSharedBusinessEntitiesRelease.md)

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

# **release_get_releases**
> APIPagedResponseContentSubmissionSharedBusinessEntitiesRelease release_get_releases(limit=limit, offset=offset, visible=visible, bundle_id=bundle_id)

Get Release

Gets a collection of Release. When successful, the response is a PagedResponse of Release.              If unsuccessful, an appropriate ApiError is returned.

### Example


```python
import openapi_client
from openapi_client.models.api_paged_response_content_submission_shared_business_entities_release import APIPagedResponseContentSubmissionSharedBusinessEntitiesRelease
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
    api_instance = openapi_client.ReleaseApi(api_client)
    limit = 56 # int | Optional. The page limit.  If not specified, the default page limit is 10. (optional)
    offset = 56 # int | Optional. The page offset.  If not specified, the default page offset is 0. (optional)
    visible = True # bool | Optional. Filter by visible. (optional)
    bundle_id = 'bundle_id_example' # str | Optional. Filter by BundleID. (optional)

    try:
        # Get Release
        api_response = api_instance.release_get_releases(limit=limit, offset=offset, visible=visible, bundle_id=bundle_id)
        print("The response of ReleaseApi->release_get_releases:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReleaseApi->release_get_releases: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Optional. The page limit.  If not specified, the default page limit is 10. | [optional] 
 **offset** | **int**| Optional. The page offset.  If not specified, the default page offset is 0. | [optional] 
 **visible** | **bool**| Optional. Filter by visible. | [optional] 
 **bundle_id** | **str**| Optional. Filter by BundleID. | [optional] 

### Return type

[**APIPagedResponseContentSubmissionSharedBusinessEntitiesRelease**](APIPagedResponseContentSubmissionSharedBusinessEntitiesRelease.md)

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

# **release_post_release**
> int release_post_release(content_submission_shared_business_entities_release)

Create a Release

Creates a Release.  The body of the POST is the Release to create.              The ReleaseId will be assigned on creation of the Job.  When successful, the response              is the Release Id.  If unsuccessful, an appropriate ApiError is returned.

### Example


```python
import openapi_client
from openapi_client.models.content_submission_shared_business_entities_release import ContentSubmissionSharedBusinessEntitiesRelease
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
    api_instance = openapi_client.ReleaseApi(api_client)
    content_submission_shared_business_entities_release = openapi_client.ContentSubmissionSharedBusinessEntitiesRelease() # ContentSubmissionSharedBusinessEntitiesRelease | The Release to create.

    try:
        # Create a Release
        api_response = api_instance.release_post_release(content_submission_shared_business_entities_release)
        print("The response of ReleaseApi->release_post_release:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReleaseApi->release_post_release: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_submission_shared_business_entities_release** | [**ContentSubmissionSharedBusinessEntitiesRelease**](ContentSubmissionSharedBusinessEntitiesRelease.md)| The Release to create. | 

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

# **release_post_release_bundle**
> release_post_release_bundle(release_id, bundle_id)

Associates the release with a bundle.

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
    api_instance = openapi_client.ReleaseApi(api_client)
    release_id = 56 # int | The release identifier.
    bundle_id = 'bundle_id_example' # str | The bundle identifier.

    try:
        # Associates the release with a bundle.
        api_instance.release_post_release_bundle(release_id, bundle_id)
    except Exception as e:
        print("Exception when calling ReleaseApi->release_post_release_bundle: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **release_id** | **int**| The release identifier. | 
 **bundle_id** | **str**| The bundle identifier. | 

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

# **release_put_content_definition**
> release_put_content_definition(release_id, content_submission_shared_business_entities_release)

Update a Release

Updates a Release.  The body of the PUT is the updated Release.                When successful, the response is empty.  If unsuccessful, an appropriate ApiError is returned.

### Example


```python
import openapi_client
from openapi_client.models.content_submission_shared_business_entities_release import ContentSubmissionSharedBusinessEntitiesRelease
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
    api_instance = openapi_client.ReleaseApi(api_client)
    release_id = 56 # int | The ID of the Release to update
    content_submission_shared_business_entities_release = openapi_client.ContentSubmissionSharedBusinessEntitiesRelease() # ContentSubmissionSharedBusinessEntitiesRelease | The updated Release

    try:
        # Update a Release
        api_instance.release_put_content_definition(release_id, content_submission_shared_business_entities_release)
    except Exception as e:
        print("Exception when calling ReleaseApi->release_put_content_definition: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **release_id** | **int**| The ID of the Release to update | 
 **content_submission_shared_business_entities_release** | [**ContentSubmissionSharedBusinessEntitiesRelease**](ContentSubmissionSharedBusinessEntitiesRelease.md)| The updated Release | 

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

