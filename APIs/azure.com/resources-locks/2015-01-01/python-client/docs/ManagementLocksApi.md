# openapi_client.ManagementLocksApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**management_locks_create_or_update_at_resource_group_level**](ManagementLocksApi.md#management_locks_create_or_update_at_resource_group_level) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Authorization/locks/{lockName} | 
[**management_locks_create_or_update_at_resource_level**](ManagementLocksApi.md#management_locks_create_or_update_at_resource_level) | **PUT** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{parentResourcePath}/{resourceType}/{resourceName}/providers/Microsoft.Authorization/locks/{lockName} | 
[**management_locks_create_or_update_at_subscription_level**](ManagementLocksApi.md#management_locks_create_or_update_at_subscription_level) | **PUT** /subscriptions/{subscriptionId}/providers/Microsoft.Authorization/locks/{lockName} | 
[**management_locks_delete_at_resource_group_level**](ManagementLocksApi.md#management_locks_delete_at_resource_group_level) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Authorization/locks/{lockName} | 
[**management_locks_delete_at_resource_level**](ManagementLocksApi.md#management_locks_delete_at_resource_level) | **DELETE** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{parentResourcePath}/{resourceType}/{resourceName}/providers/Microsoft.Authorization/locks/{lockName} | 
[**management_locks_delete_at_subscription_level**](ManagementLocksApi.md#management_locks_delete_at_subscription_level) | **DELETE** /subscriptions/{subscriptionId}/providers/Microsoft.Authorization/locks/{lockName} | 
[**management_locks_get**](ManagementLocksApi.md#management_locks_get) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Authorization/locks/{lockName} | 
[**management_locks_get_at_resource_group_level**](ManagementLocksApi.md#management_locks_get_at_resource_group_level) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Authorization/locks/{lockName} | 
[**management_locks_list_at_resource_group_level**](ManagementLocksApi.md#management_locks_list_at_resource_group_level) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Authorization/locks | 
[**management_locks_list_at_resource_level**](ManagementLocksApi.md#management_locks_list_at_resource_level) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{parentResourcePath}/{resourceType}/{resourceName}/providers/Microsoft.Authorization/locks | 
[**management_locks_list_at_subscription_level**](ManagementLocksApi.md#management_locks_list_at_subscription_level) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Authorization/locks | 


# **management_locks_create_or_update_at_resource_group_level**
> ManagementLockObject management_locks_create_or_update_at_resource_group_level(resource_group_name, lock_name, api_version, subscription_id, parameters)



Create or update a management lock at the resource group level.

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
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    lock_name = 'lock_name_example' # str | The lock name.
    api_version = 'api_version_example' # str | The API version to use for the operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    parameters = openapi_client.ManagementLockObject() # ManagementLockObject | The management lock parameters.

    try:
        api_response = api_instance.management_locks_create_or_update_at_resource_group_level(resource_group_name, lock_name, api_version, subscription_id, parameters)
        print("The response of ManagementLocksApi->management_locks_create_or_update_at_resource_group_level:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementLocksApi->management_locks_create_or_update_at_resource_group_level: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The resource group name. | 
 **lock_name** | **str**| The lock name. | 
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
**200** | OK |  -  |
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **management_locks_create_or_update_at_resource_level**
> ManagementLockObject management_locks_create_or_update_at_resource_level(resource_group_name, resource_provider_namespace, parent_resource_path, resource_type, resource_name, lock_name, api_version, subscription_id, parameters)



Create or update a management lock at the resource level or any level below resource.

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
    resource_provider_namespace = 'resource_provider_namespace_example' # str | Resource identity.
    parent_resource_path = 'parent_resource_path_example' # str | Resource identity.
    resource_type = 'resource_type_example' # str | Resource identity.
    resource_name = 'resource_name_example' # str | Resource identity.
    lock_name = 'lock_name_example' # str | The name of lock.
    api_version = 'api_version_example' # str | The API version to use for the operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    parameters = openapi_client.ManagementLockObject() # ManagementLockObject | Create or update management lock parameters.

    try:
        api_response = api_instance.management_locks_create_or_update_at_resource_level(resource_group_name, resource_provider_namespace, parent_resource_path, resource_type, resource_name, lock_name, api_version, subscription_id, parameters)
        print("The response of ManagementLocksApi->management_locks_create_or_update_at_resource_level:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementLocksApi->management_locks_create_or_update_at_resource_level: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group.  | 
 **resource_provider_namespace** | **str**| Resource identity. | 
 **parent_resource_path** | **str**| Resource identity. | 
 **resource_type** | **str**| Resource identity. | 
 **resource_name** | **str**| Resource identity. | 
 **lock_name** | **str**| The name of lock. | 
 **api_version** | **str**| The API version to use for the operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
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

# **management_locks_create_or_update_at_subscription_level**
> ManagementLockObject management_locks_create_or_update_at_subscription_level(lock_name, api_version, subscription_id, parameters)



Create or update a management lock at the subscription level.

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
    lock_name = 'lock_name_example' # str | The name of lock.
    api_version = 'api_version_example' # str | The API version to use for the operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    parameters = openapi_client.ManagementLockObject() # ManagementLockObject | The management lock parameters.

    try:
        api_response = api_instance.management_locks_create_or_update_at_subscription_level(lock_name, api_version, subscription_id, parameters)
        print("The response of ManagementLocksApi->management_locks_create_or_update_at_subscription_level:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementLocksApi->management_locks_create_or_update_at_subscription_level: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lock_name** | **str**| The name of lock. | 
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
**200** | OK |  -  |
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **management_locks_delete_at_resource_group_level**
> management_locks_delete_at_resource_group_level(resource_group_name, lock_name, api_version, subscription_id)



Deletes the management lock of a resource group.

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
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    lock_name = 'lock_name_example' # str | The name of lock.
    api_version = 'api_version_example' # str | The API version to use for the operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.

    try:
        api_instance.management_locks_delete_at_resource_group_level(resource_group_name, lock_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling ManagementLocksApi->management_locks_delete_at_resource_group_level: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The resource group name. | 
 **lock_name** | **str**| The name of lock. | 
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



Deletes the management lock of a resource or any level below resource.

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
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. 
    resource_provider_namespace = 'resource_provider_namespace_example' # str | Resource identity.
    parent_resource_path = 'parent_resource_path_example' # str | Resource identity.
    resource_type = 'resource_type_example' # str | Resource identity.
    resource_name = 'resource_name_example' # str | Resource identity.
    lock_name = 'lock_name_example' # str | The name of lock.
    api_version = 'api_version_example' # str | The API version to use for the operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.

    try:
        api_instance.management_locks_delete_at_resource_level(resource_group_name, resource_provider_namespace, parent_resource_path, resource_type, resource_name, lock_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling ManagementLocksApi->management_locks_delete_at_resource_level: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group.  | 
 **resource_provider_namespace** | **str**| Resource identity. | 
 **parent_resource_path** | **str**| Resource identity. | 
 **resource_type** | **str**| Resource identity. | 
 **resource_name** | **str**| Resource identity. | 
 **lock_name** | **str**| The name of lock. | 
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



Deletes the management lock of a subscription.

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
    lock_name = 'lock_name_example' # str | The name of lock.
    api_version = 'api_version_example' # str | The API version to use for the operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.

    try:
        api_instance.management_locks_delete_at_subscription_level(lock_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling ManagementLocksApi->management_locks_delete_at_subscription_level: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lock_name** | **str**| The name of lock. | 
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

# **management_locks_get**
> ManagementLockObject management_locks_get(lock_name, api_version, subscription_id)



Gets the management lock of a scope.

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
    lock_name = 'lock_name_example' # str | Name of the management lock.
    api_version = 'api_version_example' # str | The API version to use for the operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.

    try:
        api_response = api_instance.management_locks_get(lock_name, api_version, subscription_id)
        print("The response of ManagementLocksApi->management_locks_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementLocksApi->management_locks_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lock_name** | **str**| Name of the management lock. | 
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
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    lock_name = 'lock_name_example' # str | The lock name.
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
 **resource_group_name** | **str**| The resource group name. | 
 **lock_name** | **str**| The lock name. | 
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

# **management_locks_list_at_resource_group_level**
> ManagementLockListResult management_locks_list_at_resource_group_level(resource_group_name, api_version, subscription_id, filter=filter)



Gets all the management locks of a resource group.

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
    resource_group_name = 'resource_group_name_example' # str | Resource group name.
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
 **resource_group_name** | **str**| Resource group name. | 
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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **management_locks_list_at_resource_level**
> ManagementLockListResult management_locks_list_at_resource_level(resource_group_name, resource_provider_namespace, parent_resource_path, resource_type, resource_name, api_version, subscription_id, filter=filter)



Gets all the management locks of a resource or any level below resource.

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
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    resource_provider_namespace = 'resource_provider_namespace_example' # str | Resource identity.
    parent_resource_path = 'parent_resource_path_example' # str | Resource identity.
    resource_type = 'resource_type_example' # str | Resource identity.
    resource_name = 'resource_name_example' # str | Resource identity.
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
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **resource_provider_namespace** | **str**| Resource identity. | 
 **parent_resource_path** | **str**| Resource identity. | 
 **resource_type** | **str**| Resource identity. | 
 **resource_name** | **str**| Resource identity. | 
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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **management_locks_list_at_subscription_level**
> ManagementLockListResult management_locks_list_at_subscription_level(api_version, subscription_id, filter=filter)



Gets all the management locks of a subscription.

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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

