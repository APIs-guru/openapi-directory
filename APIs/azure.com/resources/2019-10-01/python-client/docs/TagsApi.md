# openapi_client.TagsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tags_create_or_update**](TagsApi.md#tags_create_or_update) | **PUT** /subscriptions/{subscriptionId}/tagNames/{tagName} | Creates a predefined tag name.
[**tags_create_or_update_at_scope**](TagsApi.md#tags_create_or_update_at_scope) | **PUT** /{scope}/providers/Microsoft.Resources/tags/default | Creates or updates the entire set of tags on a resource or subscription.
[**tags_create_or_update_value**](TagsApi.md#tags_create_or_update_value) | **PUT** /subscriptions/{subscriptionId}/tagNames/{tagName}/tagValues/{tagValue} | Creates a predefined value for a predefined tag name.
[**tags_delete**](TagsApi.md#tags_delete) | **DELETE** /subscriptions/{subscriptionId}/tagNames/{tagName} | Deletes a predefined tag name.
[**tags_delete_at_scope**](TagsApi.md#tags_delete_at_scope) | **DELETE** /{scope}/providers/Microsoft.Resources/tags/default | Deletes the entire set of tags on a resource or subscription.
[**tags_delete_value**](TagsApi.md#tags_delete_value) | **DELETE** /subscriptions/{subscriptionId}/tagNames/{tagName}/tagValues/{tagValue} | Deletes a predefined tag value for a predefined tag name.
[**tags_get_at_scope**](TagsApi.md#tags_get_at_scope) | **GET** /{scope}/providers/Microsoft.Resources/tags/default | Gets the entire set of tags on a resource or subscription.
[**tags_list**](TagsApi.md#tags_list) | **GET** /subscriptions/{subscriptionId}/tagNames | Gets a summary of tag usage under the subscription.
[**tags_update_at_scope**](TagsApi.md#tags_update_at_scope) | **PATCH** /{scope}/providers/Microsoft.Resources/tags/default | Selectively updates the set of tags on a resource or subscription.


# **tags_create_or_update**
> TagDetails tags_create_or_update(tag_name, api_version, subscription_id)

Creates a predefined tag name.

This operation allows adding a name to the list of predefined tag names for the given subscription. A tag name can have a maximum of 512 characters and is case-insensitive. Tag names cannot have the following prefixes which are reserved for Azure use: 'microsoft', 'azure', 'windows'.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.tag_details import TagDetails
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TagsApi(api_client)
    tag_name = 'tag_name_example' # str | The name of the tag to create.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.

    try:
        # Creates a predefined tag name.
        api_response = api_instance.tags_create_or_update(tag_name, api_version, subscription_id)
        print("The response of TagsApi->tags_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TagsApi->tags_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag_name** | **str**| The name of the tag to create. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 

### Return type

[**TagDetails**](TagDetails.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Predefined tag name already exists. Returns information about the predefined tag name. |  -  |
**201** | Predefined tag name successfully created. Returns information about the predefined tag name. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tags_create_or_update_at_scope**
> TagsResource tags_create_or_update_at_scope(scope, api_version, parameters)

Creates or updates the entire set of tags on a resource or subscription.

This operation allows adding or replacing the entire set of tags on the specified resource or subscription. The specified entity can have a maximum of 50 tags.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.tags_resource import TagsResource
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TagsApi(api_client)
    scope = 'scope_example' # str | The resource scope.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    parameters = openapi_client.TagsResource() # TagsResource | 

    try:
        # Creates or updates the entire set of tags on a resource or subscription.
        api_response = api_instance.tags_create_or_update_at_scope(scope, api_version, parameters)
        print("The response of TagsApi->tags_create_or_update_at_scope:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TagsApi->tags_create_or_update_at_scope: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| The resource scope. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **parameters** | [**TagsResource**](TagsResource.md)|  | 

### Return type

[**TagsResource**](TagsResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Tags updated successfully. Returns tags from the specified object. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tags_create_or_update_value**
> TagValue tags_create_or_update_value(tag_name, tag_value, api_version, subscription_id)

Creates a predefined value for a predefined tag name.

This operation allows adding a value to the list of predefined values for an existing predefined tag name. A tag value can have a maximum of 256 characters.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.tag_value import TagValue
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TagsApi(api_client)
    tag_name = 'tag_name_example' # str | The name of the tag.
    tag_value = 'tag_value_example' # str | The value of the tag to create.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.

    try:
        # Creates a predefined value for a predefined tag name.
        api_response = api_instance.tags_create_or_update_value(tag_name, tag_value, api_version, subscription_id)
        print("The response of TagsApi->tags_create_or_update_value:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TagsApi->tags_create_or_update_value: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag_name** | **str**| The name of the tag. | 
 **tag_value** | **str**| The value of the tag to create. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 

### Return type

[**TagValue**](TagValue.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Predefined tag value already exists. Returns information about the predefined tag value. |  -  |
**201** | Predefined tag value successfully created. Returns information about the predefined tag value. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tags_delete**
> tags_delete(tag_name, api_version, subscription_id)

Deletes a predefined tag name.

This operation allows deleting a name from the list of predefined tag names for the given subscription. The name being deleted must not be in use as a tag name for any resource. All predefined values for the given name must have already been deleted.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TagsApi(api_client)
    tag_name = 'tag_name_example' # str | The name of the tag.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.

    try:
        # Deletes a predefined tag name.
        api_instance.tags_delete(tag_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling TagsApi->tags_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag_name** | **str**| The name of the tag. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Predefined tag name successfully deleted. |  -  |
**204** | Predefined tag name did not exist. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tags_delete_at_scope**
> tags_delete_at_scope(scope, api_version)

Deletes the entire set of tags on a resource or subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TagsApi(api_client)
    scope = 'scope_example' # str | The resource scope.
    api_version = 'api_version_example' # str | The API version to use for this operation.

    try:
        # Deletes the entire set of tags on a resource or subscription.
        api_instance.tags_delete_at_scope(scope, api_version)
    except Exception as e:
        print("Exception when calling TagsApi->tags_delete_at_scope: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| The resource scope. | 
 **api_version** | **str**| The API version to use for this operation. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Tags successfully deleted. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tags_delete_value**
> tags_delete_value(tag_name, tag_value, api_version, subscription_id)

Deletes a predefined tag value for a predefined tag name.

This operation allows deleting a value from the list of predefined values for an existing predefined tag name. The value being deleted must not be in use as a tag value for the given tag name for any resource.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TagsApi(api_client)
    tag_name = 'tag_name_example' # str | The name of the tag.
    tag_value = 'tag_value_example' # str | The value of the tag to delete.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.

    try:
        # Deletes a predefined tag value for a predefined tag name.
        api_instance.tags_delete_value(tag_name, tag_value, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling TagsApi->tags_delete_value: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag_name** | **str**| The name of the tag. | 
 **tag_value** | **str**| The value of the tag to delete. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Predefined tag value successfully deleted. |  -  |
**204** | Predefined tag value did not exist. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tags_get_at_scope**
> TagsResource tags_get_at_scope(scope, api_version)

Gets the entire set of tags on a resource or subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.tags_resource import TagsResource
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TagsApi(api_client)
    scope = 'scope_example' # str | The resource scope.
    api_version = 'api_version_example' # str | The API version to use for this operation.

    try:
        # Gets the entire set of tags on a resource or subscription.
        api_response = api_instance.tags_get_at_scope(scope, api_version)
        print("The response of TagsApi->tags_get_at_scope:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TagsApi->tags_get_at_scope: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| The resource scope. | 
 **api_version** | **str**| The API version to use for this operation. | 

### Return type

[**TagsResource**](TagsResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns tags from the specified object. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tags_list**
> TagsListResult tags_list(api_version, subscription_id)

Gets a summary of tag usage under the subscription.

This operation performs a union of predefined tags, resource tags, resource group tags and subscription tags, and returns a summary of usage for each tag name and value under the given subscription. In case of a large number of tags, this operation may return a previously cached result.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.tags_list_result import TagsListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TagsApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.

    try:
        # Gets a summary of tag usage under the subscription.
        api_response = api_instance.tags_list(api_version, subscription_id)
        print("The response of TagsApi->tags_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TagsApi->tags_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 

### Return type

[**TagsListResult**](TagsListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns an array of tag names and values. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tags_update_at_scope**
> TagsResource tags_update_at_scope(scope, api_version, parameters)

Selectively updates the set of tags on a resource or subscription.

This operation allows replacing, merging or selectively deleting tags on the specified resource or subscription. The specified entity can have a maximum of 50 tags at the end of the operation. The 'replace' option replaces the entire set of existing tags with a new set. The 'merge' option allows adding tags with new names and updating the values of tags with existing names. The 'delete' option allows selectively deleting tags based on given names or name/value pairs.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.tags_patch_resource import TagsPatchResource
from openapi_client.models.tags_resource import TagsResource
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TagsApi(api_client)
    scope = 'scope_example' # str | The resource scope.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    parameters = openapi_client.TagsPatchResource() # TagsPatchResource | 

    try:
        # Selectively updates the set of tags on a resource or subscription.
        api_response = api_instance.tags_update_at_scope(scope, api_version, parameters)
        print("The response of TagsApi->tags_update_at_scope:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TagsApi->tags_update_at_scope: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| The resource scope. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **parameters** | [**TagsPatchResource**](TagsPatchResource.md)|  | 

### Return type

[**TagsResource**](TagsResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Tags updated successfully. Returns tags from the specified object. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

