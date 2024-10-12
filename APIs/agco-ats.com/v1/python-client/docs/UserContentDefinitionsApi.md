# openapi_client.UserContentDefinitionsApi

All URIs are relative to *https://secure.agco-ats.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**user_content_definitions_delete_user_content_definition**](UserContentDefinitionsApi.md#user_content_definitions_delete_user_content_definition) | **DELETE** /api/v2/UserContentDefinitions/{userContentDefinitionID} | Delete a UserContentDefinition
[**user_content_definitions_get_user_content_definition**](UserContentDefinitionsApi.md#user_content_definitions_get_user_content_definition) | **GET** /api/v2/UserContentDefinitions/{userContentDefinitionID} | Get a UserContentDefinition by ID
[**user_content_definitions_get_user_content_definitions**](UserContentDefinitionsApi.md#user_content_definitions_get_user_content_definitions) | **GET** /api/v2/UserContentDefinitions | Get UserContentDefinitions
[**user_content_definitions_post_user_content_definition**](UserContentDefinitionsApi.md#user_content_definitions_post_user_content_definition) | **POST** /api/v2/UserContentDefinitions | Create a UserContentDefinition


# **user_content_definitions_delete_user_content_definition**
> user_content_definitions_delete_user_content_definition(user_content_definition_id)

Delete a UserContentDefinition

Deletes an UserContentDefinition. When successful, the response is empty.  If unsuccessful, an appropriate              ApiError is returned.

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
    api_instance = openapi_client.UserContentDefinitionsApi(api_client)
    user_content_definition_id = 56 # int | The ID of the UserContentDefinition to delete

    try:
        # Delete a UserContentDefinition
        api_instance.user_content_definitions_delete_user_content_definition(user_content_definition_id)
    except Exception as e:
        print("Exception when calling UserContentDefinitionsApi->user_content_definitions_delete_user_content_definition: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_content_definition_id** | **int**| The ID of the UserContentDefinition to delete | 

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

# **user_content_definitions_get_user_content_definition**
> ContentSubmissionSharedBusinessEntitiesUserContentDefinition user_content_definitions_get_user_content_definition(user_content_definition_id)

Get a UserContentDefinition by ID

Gets a UserContentDefinition by ID. When successful, the response is the requested UserContentDefinition.              If unsuccessful, an appropriate ApiError is returned.

### Example


```python
import openapi_client
from openapi_client.models.content_submission_shared_business_entities_user_content_definition import ContentSubmissionSharedBusinessEntitiesUserContentDefinition
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
    api_instance = openapi_client.UserContentDefinitionsApi(api_client)
    user_content_definition_id = 56 # int | The ID of the UserContentDefinition to get.

    try:
        # Get a UserContentDefinition by ID
        api_response = api_instance.user_content_definitions_get_user_content_definition(user_content_definition_id)
        print("The response of UserContentDefinitionsApi->user_content_definitions_get_user_content_definition:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserContentDefinitionsApi->user_content_definitions_get_user_content_definition: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_content_definition_id** | **int**| The ID of the UserContentDefinition to get. | 

### Return type

[**ContentSubmissionSharedBusinessEntitiesUserContentDefinition**](ContentSubmissionSharedBusinessEntitiesUserContentDefinition.md)

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

# **user_content_definitions_get_user_content_definitions**
> APIPagedResponseContentSubmissionSharedBusinessEntitiesUserContentDefinition user_content_definitions_get_user_content_definitions(limit=limit, offset=offset, user_id=user_id, content_definition_id=content_definition_id)

Get UserContentDefinitions

Gets a collection of UserContentDefinitions. When successful, the response is a PagedResponse of UserContentDefinitions.              If unsuccessful, an appropriate ApiError is returned.

### Example


```python
import openapi_client
from openapi_client.models.api_paged_response_content_submission_shared_business_entities_user_content_definition import APIPagedResponseContentSubmissionSharedBusinessEntitiesUserContentDefinition
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
    api_instance = openapi_client.UserContentDefinitionsApi(api_client)
    limit = 56 # int | Optional. The page limit.  If not specified, the default page limit is 10. (optional)
    offset = 56 # int | Optional. The page offset.  If not specified, the default page offset is 0. (optional)
    user_id = 56 # int | Optional. Filter by UserID. (optional)
    content_definition_id = 56 # int | Optional. Filter by ContentDefinitionID (optional)

    try:
        # Get UserContentDefinitions
        api_response = api_instance.user_content_definitions_get_user_content_definitions(limit=limit, offset=offset, user_id=user_id, content_definition_id=content_definition_id)
        print("The response of UserContentDefinitionsApi->user_content_definitions_get_user_content_definitions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserContentDefinitionsApi->user_content_definitions_get_user_content_definitions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Optional. The page limit.  If not specified, the default page limit is 10. | [optional] 
 **offset** | **int**| Optional. The page offset.  If not specified, the default page offset is 0. | [optional] 
 **user_id** | **int**| Optional. Filter by UserID. | [optional] 
 **content_definition_id** | **int**| Optional. Filter by ContentDefinitionID | [optional] 

### Return type

[**APIPagedResponseContentSubmissionSharedBusinessEntitiesUserContentDefinition**](APIPagedResponseContentSubmissionSharedBusinessEntitiesUserContentDefinition.md)

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

# **user_content_definitions_post_user_content_definition**
> int user_content_definitions_post_user_content_definition(content_submission_shared_business_entities_user_content_definition)

Create a UserContentDefinition

Creates a UserContentDefinition.  The body of the POST is the UserContentDefinition to create.              The UserContentDefinitionID will be assigned on creation of the Job.  When successful, the response              is the UserContentDefinitionID.  If unsuccessful, an appropriate ApiError is returned.

### Example


```python
import openapi_client
from openapi_client.models.content_submission_shared_business_entities_user_content_definition import ContentSubmissionSharedBusinessEntitiesUserContentDefinition
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
    api_instance = openapi_client.UserContentDefinitionsApi(api_client)
    content_submission_shared_business_entities_user_content_definition = openapi_client.ContentSubmissionSharedBusinessEntitiesUserContentDefinition() # ContentSubmissionSharedBusinessEntitiesUserContentDefinition | The UserContentDefinition to create.

    try:
        # Create a UserContentDefinition
        api_response = api_instance.user_content_definitions_post_user_content_definition(content_submission_shared_business_entities_user_content_definition)
        print("The response of UserContentDefinitionsApi->user_content_definitions_post_user_content_definition:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserContentDefinitionsApi->user_content_definitions_post_user_content_definition: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_submission_shared_business_entities_user_content_definition** | [**ContentSubmissionSharedBusinessEntitiesUserContentDefinition**](ContentSubmissionSharedBusinessEntitiesUserContentDefinition.md)| The UserContentDefinition to create. | 

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

