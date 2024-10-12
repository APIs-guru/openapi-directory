# openapi_client.DefaultApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**action_groups_create_or_update**](DefaultApi.md#action_groups_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/actionGroups/{actionGroupName} | 
[**action_groups_delete**](DefaultApi.md#action_groups_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/actionGroups/{actionGroupName} | 
[**action_groups_enable_receiver**](DefaultApi.md#action_groups_enable_receiver) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/actionGroups/{actionGroupName}/subscribe | 
[**action_groups_get**](DefaultApi.md#action_groups_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/actionGroups/{actionGroupName} | 
[**action_groups_list_by_resource_group**](DefaultApi.md#action_groups_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/actionGroups | 
[**action_groups_list_by_subscription_id**](DefaultApi.md#action_groups_list_by_subscription_id) | **GET** /subscriptions/{subscriptionId}/providers/microsoft.insights/actionGroups | 
[**action_groups_update**](DefaultApi.md#action_groups_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/actionGroups/{actionGroupName} | 


# **action_groups_create_or_update**
> ActionGroupResource action_groups_create_or_update(resource_group_name, action_group_name, subscription_id, api_version, action_group)



Create a new action group or update an existing one.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.action_group_resource import ActionGroupResource
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
    api_instance = openapi_client.DefaultApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    action_group_name = 'action_group_name_example' # str | The name of the action group.
    subscription_id = 'subscription_id_example' # str | The Azure subscription Id.
    api_version = 'api_version_example' # str | Client Api Version.
    action_group = openapi_client.ActionGroupResource() # ActionGroupResource | The action group to create or use for the update.

    try:
        api_response = api_instance.action_groups_create_or_update(resource_group_name, action_group_name, subscription_id, api_version, action_group)
        print("The response of DefaultApi->action_groups_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->action_groups_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **action_group_name** | **str**| The name of the action group. | 
 **subscription_id** | **str**| The Azure subscription Id. | 
 **api_version** | **str**| Client Api Version. | 
 **action_group** | [**ActionGroupResource**](ActionGroupResource.md)| The action group to create or use for the update. | 

### Return type

[**ActionGroupResource**](ActionGroupResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An existing action group was successfully updated. |  -  |
**201** | A new action group was successfully created. |  -  |
**0** | An error occurred and the action group could not be created or updated. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **action_groups_delete**
> action_groups_delete(resource_group_name, action_group_name, subscription_id, api_version)



Delete an action group.

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
    api_instance = openapi_client.DefaultApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    action_group_name = 'action_group_name_example' # str | The name of the action group.
    subscription_id = 'subscription_id_example' # str | The Azure subscription Id.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_instance.action_groups_delete(resource_group_name, action_group_name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling DefaultApi->action_groups_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **action_group_name** | **str**| The name of the action group. | 
 **subscription_id** | **str**| The Azure subscription Id. | 
 **api_version** | **str**| Client Api Version. | 

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
**200** | The action group was successfully deleted. |  -  |
**204** | The action group does not exist. It may have already been deleted. |  -  |
**0** | An error occurred and the action group could not be deleted. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **action_groups_enable_receiver**
> action_groups_enable_receiver(resource_group_name, action_group_name, subscription_id, api_version, enable_request)



Enable a receiver in an action group. This changes the receiver's status from Disabled to Enabled.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.enable_request import EnableRequest
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
    api_instance = openapi_client.DefaultApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    action_group_name = 'action_group_name_example' # str | The name of the action group.
    subscription_id = 'subscription_id_example' # str | The Azure subscription Id.
    api_version = 'api_version_example' # str | Client Api Version.
    enable_request = openapi_client.EnableRequest() # EnableRequest | The receiver to re-enable.

    try:
        api_instance.action_groups_enable_receiver(resource_group_name, action_group_name, subscription_id, api_version, enable_request)
    except Exception as e:
        print("Exception when calling DefaultApi->action_groups_enable_receiver: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **action_group_name** | **str**| The name of the action group. | 
 **subscription_id** | **str**| The Azure subscription Id. | 
 **api_version** | **str**| Client Api Version. | 
 **enable_request** | [**EnableRequest**](EnableRequest.md)| The receiver to re-enable. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The receiver was successfully enabled. |  -  |
**409** | The receiver is already enabled in the action group. |  -  |
**0** | An error occurred and the receiver could not be enabled, e.g.: 404: The action group was not found or no matching receiver was found in the action group. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **action_groups_get**
> ActionGroupResource action_groups_get(resource_group_name, action_group_name, subscription_id, api_version)



Get an action group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.action_group_resource import ActionGroupResource
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
    api_instance = openapi_client.DefaultApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    action_group_name = 'action_group_name_example' # str | The name of the action group.
    subscription_id = 'subscription_id_example' # str | The Azure subscription Id.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.action_groups_get(resource_group_name, action_group_name, subscription_id, api_version)
        print("The response of DefaultApi->action_groups_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->action_groups_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **action_group_name** | **str**| The name of the action group. | 
 **subscription_id** | **str**| The Azure subscription Id. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**ActionGroupResource**](ActionGroupResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request succeeded. |  -  |
**0** | An error occurred and the action group could not be retrieved. 404: The action group does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **action_groups_list_by_resource_group**
> ActionGroupList action_groups_list_by_resource_group(resource_group_name, subscription_id, api_version)



Get a list of all action groups in a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.action_group_list import ActionGroupList
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
    api_instance = openapi_client.DefaultApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    subscription_id = 'subscription_id_example' # str | The Azure subscription Id.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.action_groups_list_by_resource_group(resource_group_name, subscription_id, api_version)
        print("The response of DefaultApi->action_groups_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->action_groups_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **subscription_id** | **str**| The Azure subscription Id. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**ActionGroupList**](ActionGroupList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request succeeded. |  -  |
**0** | An error occurred and the list of action groups could not be retrieved. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **action_groups_list_by_subscription_id**
> ActionGroupList action_groups_list_by_subscription_id(subscription_id, api_version)



Get a list of all action groups in a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.action_group_list import ActionGroupList
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure subscription Id.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.action_groups_list_by_subscription_id(subscription_id, api_version)
        print("The response of DefaultApi->action_groups_list_by_subscription_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->action_groups_list_by_subscription_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure subscription Id. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**ActionGroupList**](ActionGroupList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request succeeded. |  -  |
**0** | An error occurred and the list of action groups could not be retrieved. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **action_groups_update**
> ActionGroupResource action_groups_update(subscription_id, resource_group_name, action_group_name, api_version, action_group_patch)



Updates an existing action group's tags. To update other fields use the CreateOrUpdate method.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.action_group_patch_body import ActionGroupPatchBody
from openapi_client.models.action_group_resource import ActionGroupResource
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure subscription Id.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    action_group_name = 'action_group_name_example' # str | The name of the action group.
    api_version = 'api_version_example' # str | Client Api Version.
    action_group_patch = openapi_client.ActionGroupPatchBody() # ActionGroupPatchBody | Parameters supplied to the operation.

    try:
        api_response = api_instance.action_groups_update(subscription_id, resource_group_name, action_group_name, api_version, action_group_patch)
        print("The response of DefaultApi->action_groups_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->action_groups_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure subscription Id. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **action_group_name** | **str**| The name of the action group. | 
 **api_version** | **str**| Client Api Version. | 
 **action_group_patch** | [**ActionGroupPatchBody**](ActionGroupPatchBody.md)| Parameters supplied to the operation. | 

### Return type

[**ActionGroupResource**](ActionGroupResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An existing action group was successfully updated. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

