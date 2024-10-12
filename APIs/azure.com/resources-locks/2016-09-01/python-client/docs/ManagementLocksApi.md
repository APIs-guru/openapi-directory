# openapi_client.ManagementLocksApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**management_locks_create_or_update_at_resource_group_level**](ManagementLocksApi.md#management_locks_create_or_update_at_resource_group_level) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Authorization/locks/{lockName} | Creates or updates a management lock at the resource group level.
[**management_locks_create_or_update_at_resource_level**](ManagementLocksApi.md#management_locks_create_or_update_at_resource_level) | **PUT** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{parentResourcePath}/{resourceType}/{resourceName}/providers/Microsoft.Authorization/locks/{lockName} | Creates or updates a management lock at the resource level or any level below the resource.
[**management_locks_create_or_update_at_subscription_level**](ManagementLocksApi.md#management_locks_create_or_update_at_subscription_level) | **PUT** /subscriptions/{subscriptionId}/providers/Microsoft.Authorization/locks/{lockName} | Creates or updates a management lock at the subscription level.
[**management_locks_create_or_update_by_scope**](ManagementLocksApi.md#management_locks_create_or_update_by_scope) | **PUT** /{scope}/providers/Microsoft.Authorization/locks/{lockName} | 
[**management_locks_delete_at_resource_group_level**](ManagementLocksApi.md#management_locks_delete_at_resource_group_level) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Authorization/locks/{lockName} | Deletes a management lock at the resource group level.
[**management_locks_delete_at_resource_level**](ManagementLocksApi.md#management_locks_delete_at_resource_level) | **DELETE** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{parentResourcePath}/{resourceType}/{resourceName}/providers/Microsoft.Authorization/locks/{lockName} | Deletes the management lock of a resource or any level below the resource.
[**management_locks_delete_at_subscription_level**](ManagementLocksApi.md#management_locks_delete_at_subscription_level) | **DELETE** /subscriptions/{subscriptionId}/providers/Microsoft.Authorization/locks/{lockName} | Deletes the management lock at the subscription level.
[**management_locks_delete_by_scope**](ManagementLocksApi.md#management_locks_delete_by_scope) | **DELETE** /{scope}/providers/Microsoft.Authorization/locks/{lockName} | 
[**management_locks_get_at_resource_group_level**](ManagementLocksApi.md#management_locks_get_at_resource_group_level) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Authorization/locks/{lockName} | 
[**management_locks_get_at_resource_level**](ManagementLocksApi.md#management_locks_get_at_resource_level) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{parentResourcePath}/{resourceType}/{resourceName}/providers/Microsoft.Authorization/locks/{lockName} | 
[**management_locks_get_at_subscription_level**](ManagementLocksApi.md#management_locks_get_at_subscription_level) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Authorization/locks/{lockName} | 
[**management_locks_get_by_scope**](ManagementLocksApi.md#management_locks_get_by_scope) | **GET** /{scope}/providers/Microsoft.Authorization/locks/{lockName} | 
[**management_locks_list_at_resource_group_level**](ManagementLocksApi.md#management_locks_list_at_resource_group_level) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Authorization/locks | 
[**management_locks_list_at_resource_level**](ManagementLocksApi.md#management_locks_list_at_resource_level) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{parentResourcePath}/{resourceType}/{resourceName}/providers/Microsoft.Authorization/locks | 
[**management_locks_list_at_subscription_level**](ManagementLocksApi.md#management_locks_list_at_subscription_level) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Authorization/locks | 
[**management_locks_list_by_scope**](ManagementLocksApi.md#management_locks_list_by_scope) | **GET** /{scope}/providers/Microsoft.Authorization/locks | 


# **management_locks_create_or_update_at_resource_group_level**
> ManagementLockObject management_locks_create_or_update_at_resource_group_level(resource_group_name, lock_name, api_version, subscription_id, parameters)

Creates or updates a management lock at the resource group level.

When you apply a lock at a parent scope, all child resources inherit the same lock. To create management locks, you must have access to Microsoft.Authorization/* or Microsoft.Authorization/locks/* actions. Of the built-in roles, only Owner and User Access Administrator are granted those actions.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.management_lock_object import ManagementLockObject
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
    api_instance = openapi_client.ManagementLocksApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to lock.
    lock_name = 'lock_name_example' # str | The lock name. The lock name can be a maximum of 260 characters. It cannot contain <, > %, &, :, \\, ?, /, or any control characters.
    api_version = 'api_version_example' # str | The API version to use for the operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    parameters = openapi_client.ManagementLockObject() # ManagementLockObject | The management lock parameters.

    try:
        # Creates or updates a management lock at the resource group level.
        api_response = api_instance.management_locks_create_or_update_at_resource_group_level(resource_group_name, lock_name, api_version, subscription_id, parameters)
        print("The response of ManagementLocksApi->management_locks_create_or_update_at_resource_group_level:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementLocksApi->management_locks_create_or_update_at_resource_group_level: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group to lock. | 
 **lock_name** | **str**| The lock name. The lock name can be a maximum of 260 characters. It cannot contain &lt;, &gt; %, &amp;, :, \\, ?, /, or any control characters. | 
 **api_version** | **str**| The API version to use for the operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **parameters** | [**ManagementLockObject**](ManagementLockObject.md)| The management lock parameters. | 

### Return type

[**ManagementLockObject**](ManagementLockObject.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns information about the lock. |  -  |
**201** | Created - Returns information about the lock. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **management_locks_create_or_update_at_resource_level**
> ManagementLockObject management_locks_create_or_update_at_resource_level(resource_group_name, resource_provider_namespace, parent_resource_path, resource_type, resource_name, lock_name, api_version, subscription_id, parameters)

Creates or updates a management lock at the resource level or any level below the resource.

When you apply a lock at a parent scope, all child resources inherit the same lock. To create management locks, you must have access to Microsoft.Authorization/* or Microsoft.Authorization/locks/* actions. Of the built-in roles, only Owner and User Access Administrator are granted those actions.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.management_lock_object import ManagementLockObject
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
    api_instance = openapi_client.ManagementLocksApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group containing the resource to lock. 
    resource_provider_namespace = 'resource_provider_namespace_example' # str | The resource provider namespace of the resource to lock.
    parent_resource_path = 'parent_resource_path_example' # str | The parent resource identity.
    resource_type = 'resource_type_example' # str | The resource type of the resource to lock.
    resource_name = 'resource_name_example' # str | The name of the resource to lock.
    lock_name = 'lock_name_example' # str | The name of lock. The lock name can be a maximum of 260 characters. It cannot contain <, > %, &, :, \\, ?, /, or any control characters.
    api_version = 'api_version_example' # str | The API version to use for the operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    parameters = openapi_client.ManagementLockObject() # ManagementLockObject | Parameters for creating or updating a  management lock.

    try:
        # Creates or updates a management lock at the resource level or any level below the resource.
        api_response = api_instance.management_locks_create_or_update_at_resource_level(resource_group_name, resource_provider_namespace, parent_resource_path, resource_type, resource_name, lock_name, api_version, subscription_id, parameters)
        print("The response of ManagementLocksApi->management_locks_create_or_update_at_resource_level:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementLocksApi->management_locks_create_or_update_at_resource_level: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group containing the resource to lock.  | 
 **resource_provider_namespace** | **str**| The resource provider namespace of the resource to lock. | 
 **parent_resource_path** | **str**| The parent resource identity. | 
 **resource_type** | **str**| The resource type of the resource to lock. | 
 **resource_name** | **str**| The name of the resource to lock. | 
 **lock_name** | **str**| The name of lock. The lock name can be a maximum of 260 characters. It cannot contain &lt;, &gt; %, &amp;, :, \\, ?, /, or any control characters. | 
 **api_version** | **str**| The API version to use for the operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **parameters** | [**ManagementLockObject**](ManagementLockObject.md)| Parameters for creating or updating a  management lock. | 

### Return type

[**ManagementLockObject**](ManagementLockObject.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns information about the lock. |  -  |
**201** | Created - Returns information about the lock. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **management_locks_create_or_update_at_subscription_level**
> ManagementLockObject management_locks_create_or_update_at_subscription_level(lock_name, api_version, subscription_id, parameters)

Creates or updates a management lock at the subscription level.

When you apply a lock at a parent scope, all child resources inherit the same lock. To create management locks, you must have access to Microsoft.Authorization/* or Microsoft.Authorization/locks/* actions. Of the built-in roles, only Owner and User Access Administrator are granted those actions.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.management_lock_object import ManagementLockObject
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
    api_instance = openapi_client.ManagementLocksApi(api_client)
    lock_name = 'lock_name_example' # str | The name of lock. The lock name can be a maximum of 260 characters. It cannot contain <, > %, &, :, \\, ?, /, or any control characters.
    api_version = 'api_version_example' # str | The API version to use for the operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    parameters = openapi_client.ManagementLockObject() # ManagementLockObject | The management lock parameters.

    try:
        # Creates or updates a management lock at the subscription level.
        api_response = api_instance.management_locks_create_or_update_at_subscription_level(lock_name, api_version, subscription_id, parameters)
        print("The response of ManagementLocksApi->management_locks_create_or_update_at_subscription_level:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementLocksApi->management_locks_create_or_update_at_subscription_level: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lock_name** | **str**| The name of lock. The lock name can be a maximum of 260 characters. It cannot contain &lt;, &gt; %, &amp;, :, \\, ?, /, or any control characters. | 
 **api_version** | **str**| The API version to use for the operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **parameters** | [**ManagementLockObject**](ManagementLockObject.md)| The management lock parameters. | 

### Return type

[**ManagementLockObject**](ManagementLockObject.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns information about the lock. |  -  |
**201** | Created - Returns information about the lock. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **management_locks_create_or_update_by_scope**
> ManagementLockObject management_locks_create_or_update_by_scope(scope, lock_name, api_version, parameters)



Create or update a management lock by scope.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.management_lock_object import ManagementLockObject
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
    api_instance = openapi_client.ManagementLocksApi(api_client)
    scope = 'scope_example' # str | The scope for the lock. When providing a scope for the assignment, use '/subscriptions/{subscriptionId}' for subscriptions, '/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}' for resource groups, and '/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{parentResourcePathIfPresent}/{resourceType}/{resourceName}' for resources.
    lock_name = 'lock_name_example' # str | The name of lock.
    api_version = 'api_version_example' # str | The API version to use for the operation.
    parameters = openapi_client.ManagementLockObject() # ManagementLockObject | Create or update management lock parameters.

    try:
        api_response = api_instance.management_locks_create_or_update_by_scope(scope, lock_name, api_version, parameters)
        print("The response of ManagementLocksApi->management_locks_create_or_update_by_scope:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementLocksApi->management_locks_create_or_update_by_scope: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| The scope for the lock. When providing a scope for the assignment, use &#39;/subscriptions/{subscriptionId}&#39; for subscriptions, &#39;/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}&#39; for resource groups, and &#39;/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{parentResourcePathIfPresent}/{resourceType}/{resourceName}&#39; for resources. | 
 **lock_name** | **str**| The name of lock. | 
 **api_version** | **str**| The API version to use for the operation. | 
 **parameters** | [**ManagementLockObject**](ManagementLockObject.md)| Create or update management lock parameters. | 

### Return type

[**ManagementLockObject**](ManagementLockObject.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **management_locks_delete_at_resource_group_level**
> management_locks_delete_at_resource_group_level(resource_group_name, lock_name, api_version, subscription_id)

Deletes a management lock at the resource group level.

To delete management locks, you must have access to Microsoft.Authorization/* or Microsoft.Authorization/locks/* actions. Of the built-in roles, only Owner and User Access Administrator are granted those actions.

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
    api_instance = openapi_client.ManagementLocksApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group containing the lock.
    lock_name = 'lock_name_example' # str | The name of lock to delete.
    api_version = 'api_version_example' # str | The API version to use for the operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.

    try:
        # Deletes a management lock at the resource group level.
        api_instance.management_locks_delete_at_resource_group_level(resource_group_name, lock_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling ManagementLocksApi->management_locks_delete_at_resource_group_level: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group containing the lock. | 
 **lock_name** | **str**| The name of lock to delete. | 
 **api_version** | **str**| The API version to use for the operation. | 
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
**204** | NoContent |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **management_locks_delete_at_resource_level**
> management_locks_delete_at_resource_level(resource_group_name, resource_provider_namespace, parent_resource_path, resource_type, resource_name, lock_name, api_version, subscription_id)

Deletes the management lock of a resource or any level below the resource.

To delete management locks, you must have access to Microsoft.Authorization/* or Microsoft.Authorization/locks/* actions. Of the built-in roles, only Owner and User Access Administrator are granted those actions.

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
    api_instance = openapi_client.ManagementLocksApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group containing the resource with the lock to delete. 
    resource_provider_namespace = 'resource_provider_namespace_example' # str | The resource provider namespace of the resource with the lock to delete.
    parent_resource_path = 'parent_resource_path_example' # str | The parent resource identity.
    resource_type = 'resource_type_example' # str | The resource type of the resource with the lock to delete.
    resource_name = 'resource_name_example' # str | The name of the resource with the lock to delete.
    lock_name = 'lock_name_example' # str | The name of the lock to delete.
    api_version = 'api_version_example' # str | The API version to use for the operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.

    try:
        # Deletes the management lock of a resource or any level below the resource.
        api_instance.management_locks_delete_at_resource_level(resource_group_name, resource_provider_namespace, parent_resource_path, resource_type, resource_name, lock_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling ManagementLocksApi->management_locks_delete_at_resource_level: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group containing the resource with the lock to delete.  | 
 **resource_provider_namespace** | **str**| The resource provider namespace of the resource with the lock to delete. | 
 **parent_resource_path** | **str**| The parent resource identity. | 
 **resource_type** | **str**| The resource type of the resource with the lock to delete. | 
 **resource_name** | **str**| The name of the resource with the lock to delete. | 
 **lock_name** | **str**| The name of the lock to delete. | 
 **api_version** | **str**| The API version to use for the operation. | 
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
**204** | NoContent |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **management_locks_delete_at_subscription_level**
> management_locks_delete_at_subscription_level(lock_name, api_version, subscription_id)

Deletes the management lock at the subscription level.

To delete management locks, you must have access to Microsoft.Authorization/* or Microsoft.Authorization/locks/* actions. Of the built-in roles, only Owner and User Access Administrator are granted those actions.

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
    api_instance = openapi_client.ManagementLocksApi(api_client)
    lock_name = 'lock_name_example' # str | The name of lock to delete.
    api_version = 'api_version_example' # str | The API version to use for the operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.

    try:
        # Deletes the management lock at the subscription level.
        api_instance.management_locks_delete_at_subscription_level(lock_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling ManagementLocksApi->management_locks_delete_at_subscription_level: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lock_name** | **str**| The name of lock to delete. | 
 **api_version** | **str**| The API version to use for the operation. | 
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
**204** | NoContent |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **management_locks_delete_by_scope**
> management_locks_delete_by_scope(scope, lock_name, api_version)



Delete a management lock by scope.

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
    api_instance = openapi_client.ManagementLocksApi(api_client)
    scope = 'scope_example' # str | The scope for the lock. 
    lock_name = 'lock_name_example' # str | The name of lock.
    api_version = 'api_version_example' # str | The API version to use for the operation.

    try:
        api_instance.management_locks_delete_by_scope(scope, lock_name, api_version)
    except Exception as e:
        print("Exception when calling ManagementLocksApi->management_locks_delete_by_scope: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| The scope for the lock.  | 
 **lock_name** | **str**| The name of lock. | 
 **api_version** | **str**| The API version to use for the operation. | 

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
**204** | NoContent |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **management_locks_get_at_resource_group_level**
> ManagementLockObject management_locks_get_at_resource_group_level(resource_group_name, lock_name, api_version, subscription_id)



Gets a management lock at the resource group level.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.management_lock_object import ManagementLockObject
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
    api_instance = openapi_client.ManagementLocksApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the locked resource group.
    lock_name = 'lock_name_example' # str | The name of the lock to get.
    api_version = 'api_version_example' # str | The API version to use for the operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.

    try:
        api_response = api_instance.management_locks_get_at_resource_group_level(resource_group_name, lock_name, api_version, subscription_id)
        print("The response of ManagementLocksApi->management_locks_get_at_resource_group_level:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementLocksApi->management_locks_get_at_resource_group_level: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the locked resource group. | 
 **lock_name** | **str**| The name of the lock to get. | 
 **api_version** | **str**| The API version to use for the operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 

### Return type

[**ManagementLockObject**](ManagementLockObject.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns information about the lock. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **management_locks_get_at_resource_level**
> ManagementLockObject management_locks_get_at_resource_level(resource_group_name, resource_provider_namespace, parent_resource_path, resource_type, resource_name, lock_name, api_version, subscription_id)



Get the management lock of a resource or any level below resource.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.management_lock_object import ManagementLockObject
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
    api_instance = openapi_client.ManagementLocksApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. 
    resource_provider_namespace = 'resource_provider_namespace_example' # str | The namespace of the resource provider.
    parent_resource_path = 'parent_resource_path_example' # str | An extra path parameter needed in some services, like SQL Databases.
    resource_type = 'resource_type_example' # str | The type of the resource.
    resource_name = 'resource_name_example' # str | The name of the resource.
    lock_name = 'lock_name_example' # str | The name of lock.
    api_version = 'api_version_example' # str | The API version to use for the operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.

    try:
        api_response = api_instance.management_locks_get_at_resource_level(resource_group_name, resource_provider_namespace, parent_resource_path, resource_type, resource_name, lock_name, api_version, subscription_id)
        print("The response of ManagementLocksApi->management_locks_get_at_resource_level:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementLocksApi->management_locks_get_at_resource_level: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group.  | 
 **resource_provider_namespace** | **str**| The namespace of the resource provider. | 
 **parent_resource_path** | **str**| An extra path parameter needed in some services, like SQL Databases. | 
 **resource_type** | **str**| The type of the resource. | 
 **resource_name** | **str**| The name of the resource. | 
 **lock_name** | **str**| The name of lock. | 
 **api_version** | **str**| The API version to use for the operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 

### Return type

[**ManagementLockObject**](ManagementLockObject.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **management_locks_get_at_subscription_level**
> ManagementLockObject management_locks_get_at_subscription_level(lock_name, api_version, subscription_id)



Gets a management lock at the subscription level.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.management_lock_object import ManagementLockObject
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
    api_instance = openapi_client.ManagementLocksApi(api_client)
    lock_name = 'lock_name_example' # str | The name of the lock to get.
    api_version = 'api_version_example' # str | The API version to use for the operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.

    try:
        api_response = api_instance.management_locks_get_at_subscription_level(lock_name, api_version, subscription_id)
        print("The response of ManagementLocksApi->management_locks_get_at_subscription_level:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementLocksApi->management_locks_get_at_subscription_level: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lock_name** | **str**| The name of the lock to get. | 
 **api_version** | **str**| The API version to use for the operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 

### Return type

[**ManagementLockObject**](ManagementLockObject.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns information about the lock. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **management_locks_get_by_scope**
> ManagementLockObject management_locks_get_by_scope(scope, lock_name, api_version)



Get a management lock by scope.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.management_lock_object import ManagementLockObject
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
    api_instance = openapi_client.ManagementLocksApi(api_client)
    scope = 'scope_example' # str | The scope for the lock. 
    lock_name = 'lock_name_example' # str | The name of lock.
    api_version = 'api_version_example' # str | The API version to use for the operation.

    try:
        api_response = api_instance.management_locks_get_by_scope(scope, lock_name, api_version)
        print("The response of ManagementLocksApi->management_locks_get_by_scope:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementLocksApi->management_locks_get_by_scope: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| The scope for the lock.  | 
 **lock_name** | **str**| The name of lock. | 
 **api_version** | **str**| The API version to use for the operation. | 

### Return type

[**ManagementLockObject**](ManagementLockObject.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **management_locks_list_at_resource_group_level**
> ManagementLockListResult management_locks_list_at_resource_group_level(resource_group_name, api_version, subscription_id, filter=filter)



Gets all the management locks for a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.management_lock_list_result import ManagementLockListResult
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
    api_instance = openapi_client.ManagementLocksApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group containing the locks to get.
    api_version = 'api_version_example' # str | The API version to use for the operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    filter = 'filter_example' # str | The filter to apply on the operation. (optional)

    try:
        api_response = api_instance.management_locks_list_at_resource_group_level(resource_group_name, api_version, subscription_id, filter=filter)
        print("The response of ManagementLocksApi->management_locks_list_at_resource_group_level:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementLocksApi->management_locks_list_at_resource_group_level: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group containing the locks to get. | 
 **api_version** | **str**| The API version to use for the operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **filter** | **str**| The filter to apply on the operation. | [optional] 

### Return type

[**ManagementLockListResult**](ManagementLockListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns an array of resource locks. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **management_locks_list_at_resource_level**
> ManagementLockListResult management_locks_list_at_resource_level(resource_group_name, resource_provider_namespace, parent_resource_path, resource_type, resource_name, api_version, subscription_id, filter=filter)



Gets all the management locks for a resource or any level below resource.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.management_lock_list_result import ManagementLockListResult
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
    api_instance = openapi_client.ManagementLocksApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group containing the locked resource. The name is case insensitive.
    resource_provider_namespace = 'resource_provider_namespace_example' # str | The namespace of the resource provider.
    parent_resource_path = 'parent_resource_path_example' # str | The parent resource identity.
    resource_type = 'resource_type_example' # str | The resource type of the locked resource.
    resource_name = 'resource_name_example' # str | The name of the locked resource.
    api_version = 'api_version_example' # str | The API version to use for the operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    filter = 'filter_example' # str | The filter to apply on the operation. (optional)

    try:
        api_response = api_instance.management_locks_list_at_resource_level(resource_group_name, resource_provider_namespace, parent_resource_path, resource_type, resource_name, api_version, subscription_id, filter=filter)
        print("The response of ManagementLocksApi->management_locks_list_at_resource_level:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementLocksApi->management_locks_list_at_resource_level: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group containing the locked resource. The name is case insensitive. | 
 **resource_provider_namespace** | **str**| The namespace of the resource provider. | 
 **parent_resource_path** | **str**| The parent resource identity. | 
 **resource_type** | **str**| The resource type of the locked resource. | 
 **resource_name** | **str**| The name of the locked resource. | 
 **api_version** | **str**| The API version to use for the operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **filter** | **str**| The filter to apply on the operation. | [optional] 

### Return type

[**ManagementLockListResult**](ManagementLockListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns an array of resource locks. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **management_locks_list_at_subscription_level**
> ManagementLockListResult management_locks_list_at_subscription_level(api_version, subscription_id, filter=filter)



Gets all the management locks for a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.management_lock_list_result import ManagementLockListResult
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
    api_instance = openapi_client.ManagementLocksApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for the operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    filter = 'filter_example' # str | The filter to apply on the operation. (optional)

    try:
        api_response = api_instance.management_locks_list_at_subscription_level(api_version, subscription_id, filter=filter)
        print("The response of ManagementLocksApi->management_locks_list_at_subscription_level:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementLocksApi->management_locks_list_at_subscription_level: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **filter** | **str**| The filter to apply on the operation. | [optional] 

### Return type

[**ManagementLockListResult**](ManagementLockListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns an array of resource locks. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **management_locks_list_by_scope**
> ManagementLockListResult management_locks_list_by_scope(scope, api_version, filter=filter)



Gets all the management locks for a scope.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.management_lock_list_result import ManagementLockListResult
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
    api_instance = openapi_client.ManagementLocksApi(api_client)
    scope = 'scope_example' # str | The scope for the lock. When providing a scope for the assignment, use '/subscriptions/{subscriptionId}' for subscriptions, '/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}' for resource groups, and '/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{parentResourcePathIfPresent}/{resourceType}/{resourceName}' for resources.
    api_version = 'api_version_example' # str | The API version to use for the operation.
    filter = 'filter_example' # str | The filter to apply on the operation. (optional)

    try:
        api_response = api_instance.management_locks_list_by_scope(scope, api_version, filter=filter)
        print("The response of ManagementLocksApi->management_locks_list_by_scope:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementLocksApi->management_locks_list_by_scope: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| The scope for the lock. When providing a scope for the assignment, use &#39;/subscriptions/{subscriptionId}&#39; for subscriptions, &#39;/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}&#39; for resource groups, and &#39;/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{parentResourcePathIfPresent}/{resourceType}/{resourceName}&#39; for resources. | 
 **api_version** | **str**| The API version to use for the operation. | 
 **filter** | **str**| The filter to apply on the operation. | [optional] 

### Return type

[**ManagementLockListResult**](ManagementLockListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns an array of resource locks. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

