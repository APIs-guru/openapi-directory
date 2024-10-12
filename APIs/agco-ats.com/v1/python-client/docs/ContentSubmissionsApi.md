# openapi_client.ContentSubmissionsApi

All URIs are relative to *https://secure.agco-ats.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**content_submissions_delete_content_submission**](ContentSubmissionsApi.md#content_submissions_delete_content_submission) | **DELETE** /api/v2/ContentSubmissions/{contentSubmissionID} | Delete a ContentSubmission
[**content_submissions_delete_content_submission_attribute**](ContentSubmissionsApi.md#content_submissions_delete_content_submission_attribute) | **DELETE** /api/v2/ContentSubmissionAttributes/{contentSubmissionAttributeID} | Remove an Attribute from a ContentSubmission
[**content_submissions_get_content_submission**](ContentSubmissionsApi.md#content_submissions_get_content_submission) | **GET** /api/v2/ContentSubmissions/{contentSubmissionID} | Get a ContentSubmission by ID
[**content_submissions_get_content_submission_attributes**](ContentSubmissionsApi.md#content_submissions_get_content_submission_attributes) | **GET** /api/v2/ContentSubmissions/{contentSubmissionID}/Attributes | Get Attributes for a ContentSubmission
[**content_submissions_get_content_submission_status**](ContentSubmissionsApi.md#content_submissions_get_content_submission_status) | **GET** /api/v2/ContentSubmissions/{contentSubmissionID}/Status | Get the status of a ContentSubmission
[**content_submissions_get_content_submissions**](ContentSubmissionsApi.md#content_submissions_get_content_submissions) | **GET** /api/v2/ContentSubmissions | Get ContentSubmissions
[**content_submissions_post_content_submission**](ContentSubmissionsApi.md#content_submissions_post_content_submission) | **POST** /api/v2/ContentSubmissions | Create a ContentSubmission
[**content_submissions_post_content_submission_attribute**](ContentSubmissionsApi.md#content_submissions_post_content_submission_attribute) | **POST** /api/v2/ContentSubmissions/{contentSubmissionID}/Attributes | Add an Attribute to a ContentSubmission
[**content_submissions_post_content_submission_attributes**](ContentSubmissionsApi.md#content_submissions_post_content_submission_attributes) | **POST** /api/v2/ContentSubmissions/{contentSubmissionID}/Attributes/Batch | No Documentation Found.
[**content_submissions_put_content_submission**](ContentSubmissionsApi.md#content_submissions_put_content_submission) | **PUT** /api/v2/ContentSubmissions/{contentSubmissionID} | Update a ContentSubmission
[**content_submissions_put_content_submission_attribute_async**](ContentSubmissionsApi.md#content_submissions_put_content_submission_attribute_async) | **PUT** /api/v2/ContentSubmissionAttributes/{contentSubmissionAttributeID} | Update an Attribute for a ContentSubmission
[**content_submissions_put_content_submission_attributes**](ContentSubmissionsApi.md#content_submissions_put_content_submission_attributes) | **PUT** /api/v2/ContentSubmissionAttributes/Batch | No Documentation Found.


# **content_submissions_delete_content_submission**
> content_submissions_delete_content_submission(content_submission_id)

Delete a ContentSubmission

Deletes an ContentSubmission. When successful, the response is empty.  If unsuccessful, an appropriate              ApiError is returned.

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
    api_instance = openapi_client.ContentSubmissionsApi(api_client)
    content_submission_id = 56 # int | The ID of the ContentSubmission to delete

    try:
        # Delete a ContentSubmission
        api_instance.content_submissions_delete_content_submission(content_submission_id)
    except Exception as e:
        print("Exception when calling ContentSubmissionsApi->content_submissions_delete_content_submission: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_submission_id** | **int**| The ID of the ContentSubmission to delete | 

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

# **content_submissions_delete_content_submission_attribute**
> content_submissions_delete_content_submission_attribute(content_submission_attribute_id)

Remove an Attribute from a ContentSubmission

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
    api_instance = openapi_client.ContentSubmissionsApi(api_client)
    content_submission_attribute_id = 56 # int | The ID of the Attribute to remove.

    try:
        # Remove an Attribute from a ContentSubmission
        api_instance.content_submissions_delete_content_submission_attribute(content_submission_attribute_id)
    except Exception as e:
        print("Exception when calling ContentSubmissionsApi->content_submissions_delete_content_submission_attribute: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_submission_attribute_id** | **int**| The ID of the Attribute to remove. | 

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

# **content_submissions_get_content_submission**
> ContentSubmissionSharedBusinessEntitiesContentSubmission content_submissions_get_content_submission(content_submission_id, include_attributes=include_attributes)

Get a ContentSubmission by ID

Gets a ContentSubmission by ID. When successful, the response is the requested ContentSubmission.              If unsuccessful, an appropriate ApiError is returned.

### Example


```python
import openapi_client
from openapi_client.models.content_submission_shared_business_entities_content_submission import ContentSubmissionSharedBusinessEntitiesContentSubmission
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
    api_instance = openapi_client.ContentSubmissionsApi(api_client)
    content_submission_id = 56 # int | The ID of the ContentSubmission to get.
    include_attributes = 'include_attributes_example' # str | Names of Attributes to include when retrieving this submission. This should be a comma-separated list. (optional)

    try:
        # Get a ContentSubmission by ID
        api_response = api_instance.content_submissions_get_content_submission(content_submission_id, include_attributes=include_attributes)
        print("The response of ContentSubmissionsApi->content_submissions_get_content_submission:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContentSubmissionsApi->content_submissions_get_content_submission: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_submission_id** | **int**| The ID of the ContentSubmission to get. | 
 **include_attributes** | **str**| Names of Attributes to include when retrieving this submission. This should be a comma-separated list. | [optional] 

### Return type

[**ContentSubmissionSharedBusinessEntitiesContentSubmission**](ContentSubmissionSharedBusinessEntitiesContentSubmission.md)

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

# **content_submissions_get_content_submission_attributes**
> APIPagedResponseContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute content_submissions_get_content_submission_attributes(content_submission_id, limit=limit, offset=offset, name=name)

Get Attributes for a ContentSubmission

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.api_paged_response_content_submission_shared_business_entities_content_submission_attribute import APIPagedResponseContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute
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
    api_instance = openapi_client.ContentSubmissionsApi(api_client)
    content_submission_id = 56 # int | The ID of the ContentSubmission.
    limit = 56 # int | Optional. The page limit.  If not specified, the default page limit is 10. (optional)
    offset = 56 # int | Optional. The page offset.  If not specified, the default page offset is 0. (optional)
    name = 'name_example' # str | Optional. Filter the attributes by Name. (optional)

    try:
        # Get Attributes for a ContentSubmission
        api_response = api_instance.content_submissions_get_content_submission_attributes(content_submission_id, limit=limit, offset=offset, name=name)
        print("The response of ContentSubmissionsApi->content_submissions_get_content_submission_attributes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContentSubmissionsApi->content_submissions_get_content_submission_attributes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_submission_id** | **int**| The ID of the ContentSubmission. | 
 **limit** | **int**| Optional. The page limit.  If not specified, the default page limit is 10. | [optional] 
 **offset** | **int**| Optional. The page offset.  If not specified, the default page offset is 0. | [optional] 
 **name** | **str**| Optional. Filter the attributes by Name. | [optional] 

### Return type

[**APIPagedResponseContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute**](APIPagedResponseContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute.md)

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

# **content_submissions_get_content_submission_status**
> BuildSystemSharedInterfacesIJobRun content_submissions_get_content_submission_status(content_submission_id, include_activity_run_details=include_activity_run_details)

Get the status of a ContentSubmission

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.build_system_shared_interfaces_i_job_run import BuildSystemSharedInterfacesIJobRun
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
    api_instance = openapi_client.ContentSubmissionsApi(api_client)
    content_submission_id = 56 # int | The ID of the ContentSubmission to get.
    include_activity_run_details = True # bool | True to include all status details if JobRun. Defaults to false (optional)

    try:
        # Get the status of a ContentSubmission
        api_response = api_instance.content_submissions_get_content_submission_status(content_submission_id, include_activity_run_details=include_activity_run_details)
        print("The response of ContentSubmissionsApi->content_submissions_get_content_submission_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContentSubmissionsApi->content_submissions_get_content_submission_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_submission_id** | **int**| The ID of the ContentSubmission to get. | 
 **include_activity_run_details** | **bool**| True to include all status details if JobRun. Defaults to false | [optional] 

### Return type

[**BuildSystemSharedInterfacesIJobRun**](BuildSystemSharedInterfacesIJobRun.md)

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

# **content_submissions_get_content_submissions**
> APIPagedResponseContentSubmissionSharedBusinessEntitiesContentSubmission content_submissions_get_content_submissions(limit=limit, offset=offset, user_id=user_id, content_definition_id=content_definition_id, include_attributes=include_attributes, release_id=release_id, type_id=type_id, version=version, include_definition=include_definition)

Get ContentSubmissions

Gets a collection of ContentSubmissions. When successful, the response is a PagedResponse of ContentSubmissions. Additional searches: attributes[Name]=Value. This can be used to search for submissions that have the specified values for attributes. Beginning and ending wildcard (*) supported for value.              If unsuccessful, an appropriate ApiError is returned.

### Example


```python
import openapi_client
from openapi_client.models.api_paged_response_content_submission_shared_business_entities_content_submission import APIPagedResponseContentSubmissionSharedBusinessEntitiesContentSubmission
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
    api_instance = openapi_client.ContentSubmissionsApi(api_client)
    limit = 56 # int | Optional. The page limit.  If not specified, the default page limit is 10. (optional)
    offset = 56 # int | Optional. The page offset.  If not specified, the default page offset is 0. (optional)
    user_id = 56 # int | Optional. Filter by UserID. (optional)
    content_definition_id = 56 # int | Optional. Filter by ContentDefinitionID (optional)
    include_attributes = 'include_attributes_example' # str | Names of Attributes to include when retrieving this submission. This should be a comma-separated list. If not provided, Attributes are not included. If '*', all Attributes are included. (optional)
    release_id = 56 # int | Optional. Filter the submissions by whether they are part of the Release with the specified Release ID. (optional)
    type_id = 56 # int | Optional. Filter submissions by their ContentDefinition's Type ID. (optional)
    version = 56 # int | Optional. Filter submissions by their Version. (optional)
    include_definition = True # bool | Optional. If true, includes the ContentDefinition for each submission. (optional)

    try:
        # Get ContentSubmissions
        api_response = api_instance.content_submissions_get_content_submissions(limit=limit, offset=offset, user_id=user_id, content_definition_id=content_definition_id, include_attributes=include_attributes, release_id=release_id, type_id=type_id, version=version, include_definition=include_definition)
        print("The response of ContentSubmissionsApi->content_submissions_get_content_submissions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContentSubmissionsApi->content_submissions_get_content_submissions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Optional. The page limit.  If not specified, the default page limit is 10. | [optional] 
 **offset** | **int**| Optional. The page offset.  If not specified, the default page offset is 0. | [optional] 
 **user_id** | **int**| Optional. Filter by UserID. | [optional] 
 **content_definition_id** | **int**| Optional. Filter by ContentDefinitionID | [optional] 
 **include_attributes** | **str**| Names of Attributes to include when retrieving this submission. This should be a comma-separated list. If not provided, Attributes are not included. If &#39;*&#39;, all Attributes are included. | [optional] 
 **release_id** | **int**| Optional. Filter the submissions by whether they are part of the Release with the specified Release ID. | [optional] 
 **type_id** | **int**| Optional. Filter submissions by their ContentDefinition&#39;s Type ID. | [optional] 
 **version** | **int**| Optional. Filter submissions by their Version. | [optional] 
 **include_definition** | **bool**| Optional. If true, includes the ContentDefinition for each submission. | [optional] 

### Return type

[**APIPagedResponseContentSubmissionSharedBusinessEntitiesContentSubmission**](APIPagedResponseContentSubmissionSharedBusinessEntitiesContentSubmission.md)

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

# **content_submissions_post_content_submission**
> int content_submissions_post_content_submission(content_submission_shared_business_entities_content_submission)

Create a ContentSubmission

Creates a ContentSubmission.  The body of the POST is the ContentSubmission to create.              The ContentSubmissionID will be assigned on creation of the Job.  When successful, the response              is the ContentSubmissionID.  If unsuccessful, an appropriate ApiError is returned.

### Example


```python
import openapi_client
from openapi_client.models.content_submission_shared_business_entities_content_submission import ContentSubmissionSharedBusinessEntitiesContentSubmission
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
    api_instance = openapi_client.ContentSubmissionsApi(api_client)
    content_submission_shared_business_entities_content_submission = openapi_client.ContentSubmissionSharedBusinessEntitiesContentSubmission() # ContentSubmissionSharedBusinessEntitiesContentSubmission | The ContentSubmission to create.

    try:
        # Create a ContentSubmission
        api_response = api_instance.content_submissions_post_content_submission(content_submission_shared_business_entities_content_submission)
        print("The response of ContentSubmissionsApi->content_submissions_post_content_submission:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContentSubmissionsApi->content_submissions_post_content_submission: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_submission_shared_business_entities_content_submission** | [**ContentSubmissionSharedBusinessEntitiesContentSubmission**](ContentSubmissionSharedBusinessEntitiesContentSubmission.md)| The ContentSubmission to create. | 

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

# **content_submissions_post_content_submission_attribute**
> int content_submissions_post_content_submission_attribute(content_submission_id, content_submission_shared_business_entities_content_submission_attribute)

Add an Attribute to a ContentSubmission

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.content_submission_shared_business_entities_content_submission_attribute import ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute
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
    api_instance = openapi_client.ContentSubmissionsApi(api_client)
    content_submission_id = 56 # int | The ID of the ContentSubmission
    content_submission_shared_business_entities_content_submission_attribute = openapi_client.ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute() # ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute | The Attribute to add.

    try:
        # Add an Attribute to a ContentSubmission
        api_response = api_instance.content_submissions_post_content_submission_attribute(content_submission_id, content_submission_shared_business_entities_content_submission_attribute)
        print("The response of ContentSubmissionsApi->content_submissions_post_content_submission_attribute:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContentSubmissionsApi->content_submissions_post_content_submission_attribute: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_submission_id** | **int**| The ID of the ContentSubmission | 
 **content_submission_shared_business_entities_content_submission_attribute** | [**ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute**](ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute.md)| The Attribute to add. | 

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

# **content_submissions_post_content_submission_attributes**
> content_submissions_post_content_submission_attributes(content_submission_id, content_submission_shared_business_entities_content_submission_attribute)

No Documentation Found.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.content_submission_shared_business_entities_content_submission_attribute import ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute
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
    api_instance = openapi_client.ContentSubmissionsApi(api_client)
    content_submission_id = 56 # int | 
    content_submission_shared_business_entities_content_submission_attribute = [openapi_client.ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute()] # List[ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute] | 

    try:
        # No Documentation Found.
        api_instance.content_submissions_post_content_submission_attributes(content_submission_id, content_submission_shared_business_entities_content_submission_attribute)
    except Exception as e:
        print("Exception when calling ContentSubmissionsApi->content_submissions_post_content_submission_attributes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_submission_id** | **int**|  | 
 **content_submission_shared_business_entities_content_submission_attribute** | [**List[ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute]**](ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute.md)|  | 

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

# **content_submissions_put_content_submission**
> content_submissions_put_content_submission(content_submission_id, content_submission_shared_business_entities_content_submission)

Update a ContentSubmission

Updates a ContentSubmission.  The body of the PUT is the updated ContentSubmission.                When successful, the response is empty.  If unsuccessful, an appropriate ApiError is returned.

### Example


```python
import openapi_client
from openapi_client.models.content_submission_shared_business_entities_content_submission import ContentSubmissionSharedBusinessEntitiesContentSubmission
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
    api_instance = openapi_client.ContentSubmissionsApi(api_client)
    content_submission_id = 56 # int | The ID of the ContentSubmission to update
    content_submission_shared_business_entities_content_submission = openapi_client.ContentSubmissionSharedBusinessEntitiesContentSubmission() # ContentSubmissionSharedBusinessEntitiesContentSubmission | The updated ContentSubmission

    try:
        # Update a ContentSubmission
        api_instance.content_submissions_put_content_submission(content_submission_id, content_submission_shared_business_entities_content_submission)
    except Exception as e:
        print("Exception when calling ContentSubmissionsApi->content_submissions_put_content_submission: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_submission_id** | **int**| The ID of the ContentSubmission to update | 
 **content_submission_shared_business_entities_content_submission** | [**ContentSubmissionSharedBusinessEntitiesContentSubmission**](ContentSubmissionSharedBusinessEntitiesContentSubmission.md)| The updated ContentSubmission | 

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

# **content_submissions_put_content_submission_attribute_async**
> content_submissions_put_content_submission_attribute_async(content_submission_attribute_id, content_submission_shared_business_entities_content_submission_attribute)

Update an Attribute for a ContentSubmission

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.content_submission_shared_business_entities_content_submission_attribute import ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute
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
    api_instance = openapi_client.ContentSubmissionsApi(api_client)
    content_submission_attribute_id = 56 # int | The ID of the Attribute to update.
    content_submission_shared_business_entities_content_submission_attribute = openapi_client.ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute() # ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute | The Attribute to update.

    try:
        # Update an Attribute for a ContentSubmission
        api_instance.content_submissions_put_content_submission_attribute_async(content_submission_attribute_id, content_submission_shared_business_entities_content_submission_attribute)
    except Exception as e:
        print("Exception when calling ContentSubmissionsApi->content_submissions_put_content_submission_attribute_async: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_submission_attribute_id** | **int**| The ID of the Attribute to update. | 
 **content_submission_shared_business_entities_content_submission_attribute** | [**ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute**](ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute.md)| The Attribute to update. | 

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

# **content_submissions_put_content_submission_attributes**
> content_submissions_put_content_submission_attributes(content_submission_shared_business_entities_content_submission_attribute)

No Documentation Found.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.content_submission_shared_business_entities_content_submission_attribute import ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute
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
    api_instance = openapi_client.ContentSubmissionsApi(api_client)
    content_submission_shared_business_entities_content_submission_attribute = [openapi_client.ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute()] # List[ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute] | 

    try:
        # No Documentation Found.
        api_instance.content_submissions_put_content_submission_attributes(content_submission_shared_business_entities_content_submission_attribute)
    except Exception as e:
        print("Exception when calling ContentSubmissionsApi->content_submissions_put_content_submission_attributes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_submission_shared_business_entities_content_submission_attribute** | [**List[ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute]**](ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute.md)|  | 

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

