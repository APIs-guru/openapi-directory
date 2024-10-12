# openapi_client.DefaultApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**container_group_usage_list**](DefaultApi.md#container_group_usage_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.ContainerInstance/locations/{location}/usages | 
[**container_groups_create_or_update**](DefaultApi.md#container_groups_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/containerGroups/{containerGroupName} | Create or update container groups.
[**container_groups_delete**](DefaultApi.md#container_groups_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/containerGroups/{containerGroupName} | Delete the specified container group.
[**container_groups_get**](DefaultApi.md#container_groups_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/containerGroups/{containerGroupName} | Get the properties of the specified container group.
[**container_groups_list**](DefaultApi.md#container_groups_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.ContainerInstance/containerGroups | Get a list of container groups in the specified subscription.
[**container_groups_list_by_resource_group**](DefaultApi.md#container_groups_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/containerGroups | Get a list of container groups in the specified subscription and resource group.
[**container_groups_update**](DefaultApi.md#container_groups_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/containerGroups/{containerGroupName} | Update container groups.
[**container_logs_list**](DefaultApi.md#container_logs_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/containerGroups/{containerGroupName}/containers/{containerName}/logs | Get the logs for a specified container instance.
[**start_container_launch_exec**](DefaultApi.md#start_container_launch_exec) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/containerGroups/{containerGroupName}/containers/{containerName}/exec | Starts the exec command for a specific container instance.


# **container_group_usage_list**
> UsageListResult container_group_usage_list(subscription_id, location, api_version)



Get the usage for a subscription

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.usage_list_result import UsageListResult
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
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    location = 'location_example' # str | The identifier for the physical azure location.
    api_version = 'api_version_example' # str | Client API version

    try:
        api_response = api_instance.container_group_usage_list(subscription_id, location, api_version)
        print("The response of DefaultApi->container_group_usage_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->container_group_usage_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **location** | **str**| The identifier for the physical azure location. | 
 **api_version** | **str**| Client API version | 

### Return type

[**UsageListResult**](UsageListResult.md)

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

# **container_groups_create_or_update**
> ContainerGroup container_groups_create_or_update(subscription_id, api_version, resource_group_name, container_group_name, container_group)

Create or update container groups.

Create or update container groups with specified configurations.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.container_group import ContainerGroup
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
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API version
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    container_group_name = 'container_group_name_example' # str | The name of the container group.
    container_group = openapi_client.ContainerGroup() # ContainerGroup | The properties of the container group to be created or updated.

    try:
        # Create or update container groups.
        api_response = api_instance.container_groups_create_or_update(subscription_id, api_version, resource_group_name, container_group_name, container_group)
        print("The response of DefaultApi->container_groups_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->container_groups_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API version | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **container_group_name** | **str**| The name of the container group. | 
 **container_group** | [**ContainerGroup**](ContainerGroup.md)| The properties of the container group to be created or updated. | 

### Return type

[**ContainerGroup**](ContainerGroup.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created - the container group is created. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **container_groups_delete**
> ContainerGroup container_groups_delete(subscription_id, api_version, resource_group_name, container_group_name)

Delete the specified container group.

Delete the specified container group in the specified subscription and resource group. The operation does not delete other resources provided by the user, such as volumes.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.container_group import ContainerGroup
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
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API version
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    container_group_name = 'container_group_name_example' # str | The name of the container group.

    try:
        # Delete the specified container group.
        api_response = api_instance.container_groups_delete(subscription_id, api_version, resource_group_name, container_group_name)
        print("The response of DefaultApi->container_groups_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->container_groups_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API version | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **container_group_name** | **str**| The name of the container group. | 

### Return type

[**ContainerGroup**](ContainerGroup.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**204** | No Content - the specified container group was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **container_groups_get**
> ContainerGroup container_groups_get(subscription_id, api_version, resource_group_name, container_group_name)

Get the properties of the specified container group.

Gets the properties of the specified container group in the specified subscription and resource group. The operation returns the properties of each container group including containers, image registry credentials, restart policy, IP address type, OS type, state, and volumes.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.container_group import ContainerGroup
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
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API version
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    container_group_name = 'container_group_name_example' # str | The name of the container group.

    try:
        # Get the properties of the specified container group.
        api_response = api_instance.container_groups_get(subscription_id, api_version, resource_group_name, container_group_name)
        print("The response of DefaultApi->container_groups_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->container_groups_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API version | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **container_group_name** | **str**| The name of the container group. | 

### Return type

[**ContainerGroup**](ContainerGroup.md)

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

# **container_groups_list**
> ContainerGroupListResult container_groups_list(subscription_id, api_version)

Get a list of container groups in the specified subscription.

Get a list of container groups in the specified subscription. This operation returns properties of each container group including containers, image registry credentials, restart policy, IP address type, OS type, state, and volumes.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.container_group_list_result import ContainerGroupListResult
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
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API version

    try:
        # Get a list of container groups in the specified subscription.
        api_response = api_instance.container_groups_list(subscription_id, api_version)
        print("The response of DefaultApi->container_groups_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->container_groups_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API version | 

### Return type

[**ContainerGroupListResult**](ContainerGroupListResult.md)

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

# **container_groups_list_by_resource_group**
> ContainerGroupListResult container_groups_list_by_resource_group(subscription_id, api_version, resource_group_name)

Get a list of container groups in the specified subscription and resource group.

Get a list of container groups in a specified subscription and resource group. This operation returns properties of each container group including containers, image registry credentials, restart policy, IP address type, OS type, state, and volumes.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.container_group_list_result import ContainerGroupListResult
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
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API version
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.

    try:
        # Get a list of container groups in the specified subscription and resource group.
        api_response = api_instance.container_groups_list_by_resource_group(subscription_id, api_version, resource_group_name)
        print("The response of DefaultApi->container_groups_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->container_groups_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API version | 
 **resource_group_name** | **str**| The name of the resource group. | 

### Return type

[**ContainerGroupListResult**](ContainerGroupListResult.md)

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

# **container_groups_update**
> ContainerGroup container_groups_update(subscription_id, api_version, resource_group_name, container_group_name, resource)

Update container groups.

Updates container group tags with specified values.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.container_group import ContainerGroup
from openapi_client.models.resource import Resource
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
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API version
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    container_group_name = 'container_group_name_example' # str | The name of the container group.
    resource = openapi_client.Resource() # Resource | The container group resource with just the tags to be updated.

    try:
        # Update container groups.
        api_response = api_instance.container_groups_update(subscription_id, api_version, resource_group_name, container_group_name, resource)
        print("The response of DefaultApi->container_groups_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->container_groups_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API version | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **container_group_name** | **str**| The name of the container group. | 
 **resource** | [**Resource**](Resource.md)| The container group resource with just the tags to be updated. | 

### Return type

[**ContainerGroup**](ContainerGroup.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **container_logs_list**
> Logs container_logs_list(subscription_id, api_version, resource_group_name, container_group_name, container_name, tail=tail)

Get the logs for a specified container instance.

Get the logs for a specified container instance in a specified resource group and container group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.logs import Logs
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
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API version
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    container_group_name = 'container_group_name_example' # str | The name of the container group.
    container_name = 'container_name_example' # str | The name of the container instance.
    tail = 56 # int | The number of lines to show from the tail of the container instance log. If not provided, all available logs are shown up to 4mb. (optional)

    try:
        # Get the logs for a specified container instance.
        api_response = api_instance.container_logs_list(subscription_id, api_version, resource_group_name, container_group_name, container_name, tail=tail)
        print("The response of DefaultApi->container_logs_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->container_logs_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API version | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **container_group_name** | **str**| The name of the container group. | 
 **container_name** | **str**| The name of the container instance. | 
 **tail** | **int**| The number of lines to show from the tail of the container instance log. If not provided, all available logs are shown up to 4mb. | [optional] 

### Return type

[**Logs**](Logs.md)

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

# **start_container_launch_exec**
> ContainerExecResponse start_container_launch_exec(subscription_id, api_version, resource_group_name, container_group_name, container_name, container_exec_request)

Starts the exec command for a specific container instance.

Starts the exec command for a specified container instance in a specified resource group and container group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.container_exec_request import ContainerExecRequest
from openapi_client.models.container_exec_response import ContainerExecResponse
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
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API version
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    container_group_name = 'container_group_name_example' # str | The name of the container group.
    container_name = 'container_name_example' # str | The name of the container instance.
    container_exec_request = openapi_client.ContainerExecRequest() # ContainerExecRequest | The request for the exec command.

    try:
        # Starts the exec command for a specific container instance.
        api_response = api_instance.start_container_launch_exec(subscription_id, api_version, resource_group_name, container_group_name, container_name, container_exec_request)
        print("The response of DefaultApi->start_container_launch_exec:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->start_container_launch_exec: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API version | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **container_group_name** | **str**| The name of the container group. | 
 **container_name** | **str**| The name of the container instance. | 
 **container_exec_request** | [**ContainerExecRequest**](ContainerExecRequest.md)| The request for the exec command. | 

### Return type

[**ContainerExecResponse**](ContainerExecResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

