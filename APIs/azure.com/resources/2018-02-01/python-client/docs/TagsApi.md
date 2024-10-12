# openapi_client.TagsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tags_create_or_update**](TagsApi.md#tags_create_or_update) | **PUT** /subscriptions/{subscriptionId}/tagNames/{tagName} | Creates a tag in the subscription.
[**tags_create_or_update_value**](TagsApi.md#tags_create_or_update_value) | **PUT** /subscriptions/{subscriptionId}/tagNames/{tagName}/tagValues/{tagValue} | 
[**tags_delete**](TagsApi.md#tags_delete) | **DELETE** /subscriptions/{subscriptionId}/tagNames/{tagName} | Deletes a tag from the subscription.
[**tags_delete_value**](TagsApi.md#tags_delete_value) | **DELETE** /subscriptions/{subscriptionId}/tagNames/{tagName}/tagValues/{tagValue} | 
[**tags_list**](TagsApi.md#tags_list) | **GET** /subscriptions/{subscriptionId}/tagNames | 


# **tags_create_or_update**
> TagDetails tags_create_or_update(tag_name, api_version, subscription_id)

Creates a tag in the subscription.

The tag name can have a maximum of 512 characters and is case insensitive. Tag names created by Azure have prefixes of microsoft, azure, or windows. You cannot create tags with one of these prefixes.

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
        # Creates a tag in the subscription.
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
**200** | OK - Returns information about the tag. |  -  |
**201** | Created - Returns information about the tag. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tags_create_or_update_value**
> TagValue tags_create_or_update_value(tag_name, tag_value, api_version, subscription_id)



Creates a tag value. The name of the tag must already exist.

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
**200** | OK - Returns information about the tag value. |  -  |
**201** | Created - Returns information about the tag value. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tags_delete**
> tags_delete(tag_name, api_version, subscription_id)

Deletes a tag from the subscription.

You must remove all values from a resource tag before you can delete it.

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
        # Deletes a tag from the subscription.
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
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tags_delete_value**
> tags_delete_value(tag_name, tag_value, api_version, subscription_id)



Deletes a tag value.

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
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tags_list**
> TagsListResult tags_list(api_version, subscription_id)



Gets the names and values of all resource tags that are defined in a subscription.

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

