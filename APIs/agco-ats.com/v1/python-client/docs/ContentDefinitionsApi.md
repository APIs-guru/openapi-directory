# openapi_client.ContentDefinitionsApi

All URIs are relative to *https://secure.agco-ats.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**content_definitions_delete_content_definition**](ContentDefinitionsApi.md#content_definitions_delete_content_definition) | **DELETE** /api/v2/ContentDefinitions/{contentDefinitionID} | Delete a ContentDefinition
[**content_definitions_delete_content_definition_attribute**](ContentDefinitionsApi.md#content_definitions_delete_content_definition_attribute) | **DELETE** /api/v2/ContentDefinitionAttributes/{contentDefinitionAttributeID} | Remove an Attribute from a ContentDefinition
[**content_definitions_get_content_definition**](ContentDefinitionsApi.md#content_definitions_get_content_definition) | **GET** /api/v2/ContentDefinitions/{contentDefinitionID} | Get a ContentDefinition by ID
[**content_definitions_get_content_definition_attributes**](ContentDefinitionsApi.md#content_definitions_get_content_definition_attributes) | **GET** /api/v2/ContentDefinitions/{contentDefinitionID}/Attributes | Get Attributes for a ContentDefinition
[**content_definitions_get_content_definitions**](ContentDefinitionsApi.md#content_definitions_get_content_definitions) | **GET** /api/v2/ContentDefinitions | Get ContentDefinitions
[**content_definitions_post_content_definition**](ContentDefinitionsApi.md#content_definitions_post_content_definition) | **POST** /api/v2/ContentDefinitions | Create a ContentDefinition
[**content_definitions_post_content_definition_attribute**](ContentDefinitionsApi.md#content_definitions_post_content_definition_attribute) | **POST** /api/v2/ContentDefinitions/{contentDefinitionID}/Attributes | Add an Attribute to a ContentDefinition
[**content_definitions_post_content_definition_attributes**](ContentDefinitionsApi.md#content_definitions_post_content_definition_attributes) | **POST** /api/v2/ContentDefinitions/{contentDefinitionID}/Attributes/Batch | No Documentation Found.
[**content_definitions_put_content_definition**](ContentDefinitionsApi.md#content_definitions_put_content_definition) | **PUT** /api/v2/ContentDefinitions/{contentDefinitionID} | Update a ContentDefinition
[**content_definitions_put_content_definition_attribute_async**](ContentDefinitionsApi.md#content_definitions_put_content_definition_attribute_async) | **PUT** /api/v2/ContentDefinitionAttributes/{contentDefinitionAttributeID} | Update an Attribute for a ContentDefinition
[**content_definitions_put_content_definition_attributes**](ContentDefinitionsApi.md#content_definitions_put_content_definition_attributes) | **PUT** /api/v2/ContentDefinitionAttributes/Batch | No Documentation Found.


# **content_definitions_delete_content_definition**
> content_definitions_delete_content_definition(content_definition_id)

Delete a ContentDefinition

Deletes an ContentDefinition. When successful, the response is empty.  If unsuccessful, an appropriate              ApiError is returned.

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
    api_instance = openapi_client.ContentDefinitionsApi(api_client)
    content_definition_id = 56 # int | The ID of the ContentDefinition to delete

    try:
        # Delete a ContentDefinition
        api_instance.content_definitions_delete_content_definition(content_definition_id)
    except Exception as e:
        print("Exception when calling ContentDefinitionsApi->content_definitions_delete_content_definition: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_definition_id** | **int**| The ID of the ContentDefinition to delete | 

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

# **content_definitions_delete_content_definition_attribute**
> content_definitions_delete_content_definition_attribute(content_definition_attribute_id)

Remove an Attribute from a ContentDefinition

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
    api_instance = openapi_client.ContentDefinitionsApi(api_client)
    content_definition_attribute_id = 56 # int | The ID of the Attribute to remove.

    try:
        # Remove an Attribute from a ContentDefinition
        api_instance.content_definitions_delete_content_definition_attribute(content_definition_attribute_id)
    except Exception as e:
        print("Exception when calling ContentDefinitionsApi->content_definitions_delete_content_definition_attribute: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_definition_attribute_id** | **int**| The ID of the Attribute to remove. | 

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

# **content_definitions_get_content_definition**
> ContentSubmissionSharedBusinessEntitiesContentDefinition content_definitions_get_content_definition(content_definition_id, include_attributes=include_attributes)

Get a ContentDefinition by ID

Gets a ContentDefinition by ID. When successful, the response is the requested ContentDefinition.              If unsuccessful, an appropriate ApiError is returned.

### Example


```python
import openapi_client
from openapi_client.models.content_submission_shared_business_entities_content_definition import ContentSubmissionSharedBusinessEntitiesContentDefinition
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
    api_instance = openapi_client.ContentDefinitionsApi(api_client)
    content_definition_id = 56 # int | The ID of the ContentDefinition to get.
    include_attributes = 'include_attributes_example' # str | Names of Attributes to include when retrieving this definition. This should be a comma-separated list. If not provided, Attributes are not included. If '*', all Attributes are included. (optional)

    try:
        # Get a ContentDefinition by ID
        api_response = api_instance.content_definitions_get_content_definition(content_definition_id, include_attributes=include_attributes)
        print("The response of ContentDefinitionsApi->content_definitions_get_content_definition:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContentDefinitionsApi->content_definitions_get_content_definition: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_definition_id** | **int**| The ID of the ContentDefinition to get. | 
 **include_attributes** | **str**| Names of Attributes to include when retrieving this definition. This should be a comma-separated list. If not provided, Attributes are not included. If &#39;*&#39;, all Attributes are included. | [optional] 

### Return type

[**ContentSubmissionSharedBusinessEntitiesContentDefinition**](ContentSubmissionSharedBusinessEntitiesContentDefinition.md)

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

# **content_definitions_get_content_definition_attributes**
> APIPagedResponseContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute content_definitions_get_content_definition_attributes(content_definition_id, limit=limit, offset=offset, name=name)

Get Attributes for a ContentDefinition

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.api_paged_response_content_submission_shared_business_entities_content_definition_attribute import APIPagedResponseContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute
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
    api_instance = openapi_client.ContentDefinitionsApi(api_client)
    content_definition_id = 56 # int | The ID of the ContentDefinition.
    limit = 56 # int | Optional. The page limit.  If not specified, the default page limit is 10. (optional)
    offset = 56 # int | Optional. The page offset.  If not specified, the default page offset is 0. (optional)
    name = 'name_example' # str | Optional. Filter the attributes by Name. (optional)

    try:
        # Get Attributes for a ContentDefinition
        api_response = api_instance.content_definitions_get_content_definition_attributes(content_definition_id, limit=limit, offset=offset, name=name)
        print("The response of ContentDefinitionsApi->content_definitions_get_content_definition_attributes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContentDefinitionsApi->content_definitions_get_content_definition_attributes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_definition_id** | **int**| The ID of the ContentDefinition. | 
 **limit** | **int**| Optional. The page limit.  If not specified, the default page limit is 10. | [optional] 
 **offset** | **int**| Optional. The page offset.  If not specified, the default page offset is 0. | [optional] 
 **name** | **str**| Optional. Filter the attributes by Name. | [optional] 

### Return type

[**APIPagedResponseContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute**](APIPagedResponseContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute.md)

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

# **content_definitions_get_content_definitions**
> APIPagedResponseContentSubmissionSharedBusinessEntitiesContentDefinition content_definitions_get_content_definitions(limit=limit, offset=offset, user_id=user_id, include_attributes=include_attributes, name=name, type_id=type_id, package_type_id=package_type_id)

Get ContentDefinitions

Gets a collection of ContentDefinitions. When successful, the response is a PagedResponse of ContentDefinitions.              If unsuccessful, an appropriate ApiError is returned.

### Example


```python
import openapi_client
from openapi_client.models.api_paged_response_content_submission_shared_business_entities_content_definition import APIPagedResponseContentSubmissionSharedBusinessEntitiesContentDefinition
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
    api_instance = openapi_client.ContentDefinitionsApi(api_client)
    limit = 56 # int | Optional. The page limit.  If not specified, the default page limit is 10. (optional)
    offset = 56 # int | Optional. The page offset.  If not specified, the default page offset is 0. (optional)
    user_id = 56 # int | Optional. Filter by UserID. (optional)
    include_attributes = 'include_attributes_example' # str | Names of Attributes to include when retrieving this definition. This should be a comma-separated list. If not provided, Attributes are not included. If '*', all Attributes are included. (optional)
    name = 'name_example' # str | Optional. Filter by Name. Supports beginning and ending wildcard (*). (optional)
    type_id = 56 # int | Optional. Filter by TypeID. (optional)
    package_type_id = 'package_type_id_example' # str | Optional. Filter by PackageTypeID. (optional)

    try:
        # Get ContentDefinitions
        api_response = api_instance.content_definitions_get_content_definitions(limit=limit, offset=offset, user_id=user_id, include_attributes=include_attributes, name=name, type_id=type_id, package_type_id=package_type_id)
        print("The response of ContentDefinitionsApi->content_definitions_get_content_definitions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContentDefinitionsApi->content_definitions_get_content_definitions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Optional. The page limit.  If not specified, the default page limit is 10. | [optional] 
 **offset** | **int**| Optional. The page offset.  If not specified, the default page offset is 0. | [optional] 
 **user_id** | **int**| Optional. Filter by UserID. | [optional] 
 **include_attributes** | **str**| Names of Attributes to include when retrieving this definition. This should be a comma-separated list. If not provided, Attributes are not included. If &#39;*&#39;, all Attributes are included. | [optional] 
 **name** | **str**| Optional. Filter by Name. Supports beginning and ending wildcard (*). | [optional] 
 **type_id** | **int**| Optional. Filter by TypeID. | [optional] 
 **package_type_id** | **str**| Optional. Filter by PackageTypeID. | [optional] 

### Return type

[**APIPagedResponseContentSubmissionSharedBusinessEntitiesContentDefinition**](APIPagedResponseContentSubmissionSharedBusinessEntitiesContentDefinition.md)

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

# **content_definitions_post_content_definition**
> int content_definitions_post_content_definition(content_submission_shared_business_entities_content_definition)

Create a ContentDefinition

Creates a ContentDefinition.  The body of the POST is the ContentDefinition to create.              The ContentDefinitionID will be assigned on creation of the Job.  When successful, the response              is the JobID.  If unsuccessful, an appropriate ApiError is returned.

### Example


```python
import openapi_client
from openapi_client.models.content_submission_shared_business_entities_content_definition import ContentSubmissionSharedBusinessEntitiesContentDefinition
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
    api_instance = openapi_client.ContentDefinitionsApi(api_client)
    content_submission_shared_business_entities_content_definition = openapi_client.ContentSubmissionSharedBusinessEntitiesContentDefinition() # ContentSubmissionSharedBusinessEntitiesContentDefinition | The ContentDefinition to create.

    try:
        # Create a ContentDefinition
        api_response = api_instance.content_definitions_post_content_definition(content_submission_shared_business_entities_content_definition)
        print("The response of ContentDefinitionsApi->content_definitions_post_content_definition:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContentDefinitionsApi->content_definitions_post_content_definition: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_submission_shared_business_entities_content_definition** | [**ContentSubmissionSharedBusinessEntitiesContentDefinition**](ContentSubmissionSharedBusinessEntitiesContentDefinition.md)| The ContentDefinition to create. | 

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

# **content_definitions_post_content_definition_attribute**
> int content_definitions_post_content_definition_attribute(content_definition_id, content_submission_shared_business_entities_content_definition_attribute)

Add an Attribute to a ContentDefinition

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.content_submission_shared_business_entities_content_definition_attribute import ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute
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
    api_instance = openapi_client.ContentDefinitionsApi(api_client)
    content_definition_id = 56 # int | The ID of the ContentDefinition
    content_submission_shared_business_entities_content_definition_attribute = openapi_client.ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute() # ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute | The Attribute to add.

    try:
        # Add an Attribute to a ContentDefinition
        api_response = api_instance.content_definitions_post_content_definition_attribute(content_definition_id, content_submission_shared_business_entities_content_definition_attribute)
        print("The response of ContentDefinitionsApi->content_definitions_post_content_definition_attribute:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContentDefinitionsApi->content_definitions_post_content_definition_attribute: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_definition_id** | **int**| The ID of the ContentDefinition | 
 **content_submission_shared_business_entities_content_definition_attribute** | [**ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute**](ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute.md)| The Attribute to add. | 

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

# **content_definitions_post_content_definition_attributes**
> content_definitions_post_content_definition_attributes(content_definition_id, content_submission_shared_business_entities_content_definition_attribute)

No Documentation Found.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.content_submission_shared_business_entities_content_definition_attribute import ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute
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
    api_instance = openapi_client.ContentDefinitionsApi(api_client)
    content_definition_id = 56 # int | 
    content_submission_shared_business_entities_content_definition_attribute = [openapi_client.ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute()] # List[ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute] | 

    try:
        # No Documentation Found.
        api_instance.content_definitions_post_content_definition_attributes(content_definition_id, content_submission_shared_business_entities_content_definition_attribute)
    except Exception as e:
        print("Exception when calling ContentDefinitionsApi->content_definitions_post_content_definition_attributes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_definition_id** | **int**|  | 
 **content_submission_shared_business_entities_content_definition_attribute** | [**List[ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute]**](ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute.md)|  | 

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

# **content_definitions_put_content_definition**
> content_definitions_put_content_definition(content_definition_id, content_submission_shared_business_entities_content_definition)

Update a ContentDefinition

Updates a ContentDefinition.  The body of the PUT is the updated ContentDefinition.                When successful, the response is empty.  If unsuccessful, an appropriate ApiError is returned.

### Example


```python
import openapi_client
from openapi_client.models.content_submission_shared_business_entities_content_definition import ContentSubmissionSharedBusinessEntitiesContentDefinition
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
    api_instance = openapi_client.ContentDefinitionsApi(api_client)
    content_definition_id = 56 # int | The ID of the ContentDefinition to update
    content_submission_shared_business_entities_content_definition = openapi_client.ContentSubmissionSharedBusinessEntitiesContentDefinition() # ContentSubmissionSharedBusinessEntitiesContentDefinition | The updated ContentDefinition

    try:
        # Update a ContentDefinition
        api_instance.content_definitions_put_content_definition(content_definition_id, content_submission_shared_business_entities_content_definition)
    except Exception as e:
        print("Exception when calling ContentDefinitionsApi->content_definitions_put_content_definition: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_definition_id** | **int**| The ID of the ContentDefinition to update | 
 **content_submission_shared_business_entities_content_definition** | [**ContentSubmissionSharedBusinessEntitiesContentDefinition**](ContentSubmissionSharedBusinessEntitiesContentDefinition.md)| The updated ContentDefinition | 

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

# **content_definitions_put_content_definition_attribute_async**
> content_definitions_put_content_definition_attribute_async(content_definition_attribute_id, content_submission_shared_business_entities_content_definition_attribute)

Update an Attribute for a ContentDefinition

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.content_submission_shared_business_entities_content_definition_attribute import ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute
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
    api_instance = openapi_client.ContentDefinitionsApi(api_client)
    content_definition_attribute_id = 56 # int | The ID of the Attribute to update.
    content_submission_shared_business_entities_content_definition_attribute = openapi_client.ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute() # ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute | The Attribute to update.

    try:
        # Update an Attribute for a ContentDefinition
        api_instance.content_definitions_put_content_definition_attribute_async(content_definition_attribute_id, content_submission_shared_business_entities_content_definition_attribute)
    except Exception as e:
        print("Exception when calling ContentDefinitionsApi->content_definitions_put_content_definition_attribute_async: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_definition_attribute_id** | **int**| The ID of the Attribute to update. | 
 **content_submission_shared_business_entities_content_definition_attribute** | [**ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute**](ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute.md)| The Attribute to update. | 

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

# **content_definitions_put_content_definition_attributes**
> content_definitions_put_content_definition_attributes(content_submission_shared_business_entities_content_definition_attribute)

No Documentation Found.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.content_submission_shared_business_entities_content_definition_attribute import ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute
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
    api_instance = openapi_client.ContentDefinitionsApi(api_client)
    content_submission_shared_business_entities_content_definition_attribute = [openapi_client.ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute()] # List[ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute] | 

    try:
        # No Documentation Found.
        api_instance.content_definitions_put_content_definition_attributes(content_submission_shared_business_entities_content_definition_attribute)
    except Exception as e:
        print("Exception when calling ContentDefinitionsApi->content_definitions_put_content_definition_attributes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_submission_shared_business_entities_content_definition_attribute** | [**List[ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute]**](ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute.md)|  | 

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

