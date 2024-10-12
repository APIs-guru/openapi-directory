# openapi_client.ResourcesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**resources_check_existence**](ResourcesApi.md#resources_check_existence) | **HEAD** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{parentResourcePath}/{resourceType}/{resourceName} | 
[**resources_create_or_update**](ResourcesApi.md#resources_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{parentResourcePath}/{resourceType}/{resourceName} | 
[**resources_delete**](ResourcesApi.md#resources_delete) | **DELETE** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{parentResourcePath}/{resourceType}/{resourceName} | 
[**resources_get**](ResourcesApi.md#resources_get) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{parentResourcePath}/{resourceType}/{resourceName} | 
[**resources_list**](ResourcesApi.md#resources_list) | **GET** /subscriptions/{subscriptionId}/resources | 
[**resources_move_resources**](ResourcesApi.md#resources_move_resources) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{sourceResourceGroupName}/moveResources | 
[**resources_update**](ResourcesApi.md#resources_update) | **PATCH** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{parentResourcePath}/{resourceType}/{resourceName} | 


# **resources_check_existence**
> resources_check_existence(resource_group_name, resource_provider_namespace, parent_resource_path, resource_type, resource_name, api_version, subscription_id)



Checks whether resource exists.

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
    api_instance = openapi_client.ResourcesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    resource_provider_namespace = 'resource_provider_namespace_example' # str | Resource identity.
    parent_resource_path = 'parent_resource_path_example' # str | Resource identity.
    resource_type = 'resource_type_example' # str | Resource identity.
    resource_name = 'resource_name_example' # str | Resource identity.
    api_version = 'api_version_example' # str | Api version to use.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.resources_check_existence(resource_group_name, resource_provider_namespace, parent_resource_path, resource_type, resource_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling ResourcesApi->resources_check_existence: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **resource_provider_namespace** | **str**| Resource identity. | 
 **parent_resource_path** | **str**| Resource identity. | 
 **resource_type** | **str**| Resource identity. | 
 **resource_name** | **str**| Resource identity. | 
 **api_version** | **str**| Api version to use. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

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
**204** |  |  -  |
**404** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resources_create_or_update**
> GenericResource resources_create_or_update(resource_group_name, resource_provider_namespace, parent_resource_path, resource_type, resource_name, api_version, subscription_id, parameters)



Create a resource.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.generic_resource import GenericResource
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
    api_instance = openapi_client.ResourcesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    resource_provider_namespace = 'resource_provider_namespace_example' # str | Resource identity.
    parent_resource_path = 'parent_resource_path_example' # str | Resource identity.
    resource_type = 'resource_type_example' # str | Resource identity.
    resource_name = 'resource_name_example' # str | Resource identity.
    api_version = 'api_version_example' # str | Api version to use.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.GenericResource() # GenericResource | Create or update resource parameters.

    try:
        api_response = api_instance.resources_create_or_update(resource_group_name, resource_provider_namespace, parent_resource_path, resource_type, resource_name, api_version, subscription_id, parameters)
        print("The response of ResourcesApi->resources_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResourcesApi->resources_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **resource_provider_namespace** | **str**| Resource identity. | 
 **parent_resource_path** | **str**| Resource identity. | 
 **resource_type** | **str**| Resource identity. | 
 **resource_name** | **str**| Resource identity. | 
 **api_version** | **str**| Api version to use. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**GenericResource**](GenericResource.md)| Create or update resource parameters. | 

### Return type

[**GenericResource**](GenericResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resources_delete**
> resources_delete(resource_group_name, resource_provider_namespace, parent_resource_path, resource_type, resource_name, api_version, subscription_id)



Delete resource and all of its resources. 

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
    api_instance = openapi_client.ResourcesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    resource_provider_namespace = 'resource_provider_namespace_example' # str | Resource identity.
    parent_resource_path = 'parent_resource_path_example' # str | Resource identity.
    resource_type = 'resource_type_example' # str | Resource identity.
    resource_name = 'resource_name_example' # str | Resource identity.
    api_version = 'api_version_example' # str | Api version to use.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.resources_delete(resource_group_name, resource_provider_namespace, parent_resource_path, resource_type, resource_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling ResourcesApi->resources_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **resource_provider_namespace** | **str**| Resource identity. | 
 **parent_resource_path** | **str**| Resource identity. | 
 **resource_type** | **str**| Resource identity. | 
 **resource_name** | **str**| Resource identity. | 
 **api_version** | **str**| Api version to use. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

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
**200** |  |  -  |
**202** |  |  -  |
**204** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resources_get**
> GenericResource resources_get(resource_group_name, resource_provider_namespace, parent_resource_path, resource_type, resource_name, api_version, subscription_id)



Returns a resource belonging to a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.generic_resource import GenericResource
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
    api_instance = openapi_client.ResourcesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    resource_provider_namespace = 'resource_provider_namespace_example' # str | Resource identity.
    parent_resource_path = 'parent_resource_path_example' # str | Resource identity.
    resource_type = 'resource_type_example' # str | Resource identity.
    resource_name = 'resource_name_example' # str | Resource identity.
    api_version = 'api_version_example' # str | Api version to use.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.resources_get(resource_group_name, resource_provider_namespace, parent_resource_path, resource_type, resource_name, api_version, subscription_id)
        print("The response of ResourcesApi->resources_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResourcesApi->resources_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **resource_provider_namespace** | **str**| Resource identity. | 
 **parent_resource_path** | **str**| Resource identity. | 
 **resource_type** | **str**| Resource identity. | 
 **resource_name** | **str**| Resource identity. | 
 **api_version** | **str**| Api version to use. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**GenericResource**](GenericResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resources_list**
> ResourceListResult resources_list(api_version, subscription_id, filter=filter, expand=expand, top=top)



Get all of the resources under a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.resource_list_result import ResourceListResult
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
    api_instance = openapi_client.ResourcesApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    filter = 'filter_example' # str | The filter to apply on the operation. (optional)
    expand = 'expand_example' # str | The $expand query parameter. (optional)
    top = 56 # int | Query parameters. If null is passed returns all resource groups. (optional)

    try:
        api_response = api_instance.resources_list(api_version, subscription_id, filter=filter, expand=expand, top=top)
        print("The response of ResourcesApi->resources_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResourcesApi->resources_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **filter** | **str**| The filter to apply on the operation. | [optional] 
 **expand** | **str**| The $expand query parameter. | [optional] 
 **top** | **int**| Query parameters. If null is passed returns all resource groups. | [optional] 

### Return type

[**ResourceListResult**](ResourceListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resources_move_resources**
> resources_move_resources(source_resource_group_name, api_version, subscription_id, parameters)



Move resources from one resource group to another. The resources being moved should all be in the same resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.resources_move_info import ResourcesMoveInfo
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
    api_instance = openapi_client.ResourcesApi(api_client)
    source_resource_group_name = 'source_resource_group_name_example' # str | Source resource group name.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.ResourcesMoveInfo() # ResourcesMoveInfo | move resources' parameters.

    try:
        api_instance.resources_move_resources(source_resource_group_name, api_version, subscription_id, parameters)
    except Exception as e:
        print("Exception when calling ResourcesApi->resources_move_resources: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source_resource_group_name** | **str**| Source resource group name. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**ResourcesMoveInfo**](ResourcesMoveInfo.md)| move resources&#39; parameters. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** |  |  -  |
**204** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resources_update**
> GenericResource resources_update(resource_group_name, resource_provider_namespace, parent_resource_path, resource_type, resource_name, api_version, subscription_id, parameters)



Updates a resource.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.generic_resource import GenericResource
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
    api_instance = openapi_client.ResourcesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group for the resource. The name is case insensitive.
    resource_provider_namespace = 'resource_provider_namespace_example' # str | The namespace of the resource provider.
    parent_resource_path = 'parent_resource_path_example' # str | The parent resource identity.
    resource_type = 'resource_type_example' # str | The resource type of the resource to update.
    resource_name = 'resource_name_example' # str | The name of the resource to update.
    api_version = 'api_version_example' # str | The API version to use for the operation.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.GenericResource() # GenericResource | Parameters for updating the resource.

    try:
        api_response = api_instance.resources_update(resource_group_name, resource_provider_namespace, parent_resource_path, resource_type, resource_name, api_version, subscription_id, parameters)
        print("The response of ResourcesApi->resources_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResourcesApi->resources_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group for the resource. The name is case insensitive. | 
 **resource_provider_namespace** | **str**| The namespace of the resource provider. | 
 **parent_resource_path** | **str**| The parent resource identity. | 
 **resource_type** | **str**| The resource type of the resource to update. | 
 **resource_name** | **str**| The name of the resource to update. | 
 **api_version** | **str**| The API version to use for the operation. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**GenericResource**](GenericResource.md)| Parameters for updating the resource. | 

### Return type

[**GenericResource**](GenericResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns information about the resource. |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

