# openapi_client.NetworksApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**network_create**](NetworksApi.md#network_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabricMesh/networks/{networkName} | Creates or updates a network resource.
[**network_delete**](NetworksApi.md#network_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabricMesh/networks/{networkName} | Deletes the network resource.
[**network_get**](NetworksApi.md#network_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabricMesh/networks/{networkName} | Gets the network resource.
[**network_list_by_resource_group**](NetworksApi.md#network_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabricMesh/networks | Gets all the network resources in a given resource group.
[**network_list_by_subscription**](NetworksApi.md#network_list_by_subscription) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.ServiceFabricMesh/networks | Gets all the network resources in a given subscription.


# **network_create**
> NetworkResourceDescription network_create(subscription_id, api_version, resource_group_name, network_name, network_resource_description)

Creates or updates a network resource.

Creates a network resource with the specified name and description. If a network with the same name already exists, then its description is updated to the one indicated in this request.  Use network resources to create private network and configure public connectivity for services within your application.  

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.network_resource_description import NetworkResourceDescription
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
    api_instance = openapi_client.NetworksApi(api_client)
    subscription_id = 'subscription_id_example' # str | The customer subscription identifier
    api_version = 2018-07-01-preview # str | The version of the API. This parameter is required and its value must be `2018-07-01-preview`. (default to 2018-07-01-preview)
    resource_group_name = 'resource_group_name_example' # str | Azure resource group name
    network_name = 'network_name_example' # str | The identity of the network.
    network_resource_description = openapi_client.NetworkResourceDescription() # NetworkResourceDescription | Description for creating a network resource.

    try:
        # Creates or updates a network resource.
        api_response = api_instance.network_create(subscription_id, api_version, resource_group_name, network_name, network_resource_description)
        print("The response of NetworksApi->network_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->network_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The customer subscription identifier | 
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#x60;2018-07-01-preview&#x60;. | [default to 2018-07-01-preview]
 **resource_group_name** | **str**| Azure resource group name | 
 **network_name** | **str**| The identity of the network. | 
 **network_resource_description** | [**NetworkResourceDescription**](NetworkResourceDescription.md)| Description for creating a network resource. | 

### Return type

[**NetworkResourceDescription**](NetworkResourceDescription.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**201** | Created |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **network_delete**
> network_delete(subscription_id, api_version, resource_group_name, network_name)

Deletes the network resource.

Deletes the network resource identified by the name.

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
    api_instance = openapi_client.NetworksApi(api_client)
    subscription_id = 'subscription_id_example' # str | The customer subscription identifier
    api_version = 2018-07-01-preview # str | The version of the API. This parameter is required and its value must be `2018-07-01-preview`. (default to 2018-07-01-preview)
    resource_group_name = 'resource_group_name_example' # str | Azure resource group name
    network_name = 'network_name_example' # str | The identity of the network.

    try:
        # Deletes the network resource.
        api_instance.network_delete(subscription_id, api_version, resource_group_name, network_name)
    except Exception as e:
        print("Exception when calling NetworksApi->network_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The customer subscription identifier | 
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#x60;2018-07-01-preview&#x60;. | [default to 2018-07-01-preview]
 **resource_group_name** | **str**| Azure resource group name | 
 **network_name** | **str**| The identity of the network. | 

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
**200** | OK |  -  |
**204** | No Content - the specified network was not found. |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **network_get**
> NetworkResourceDescription network_get(subscription_id, api_version, resource_group_name, network_name)

Gets the network resource.

Gets the information about the network resource with a given name. This information includes the network description and other runtime information. 

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.network_resource_description import NetworkResourceDescription
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
    api_instance = openapi_client.NetworksApi(api_client)
    subscription_id = 'subscription_id_example' # str | The customer subscription identifier
    api_version = 2018-07-01-preview # str | The version of the API. This parameter is required and its value must be `2018-07-01-preview`. (default to 2018-07-01-preview)
    resource_group_name = 'resource_group_name_example' # str | Azure resource group name
    network_name = 'network_name_example' # str | The identity of the network.

    try:
        # Gets the network resource.
        api_response = api_instance.network_get(subscription_id, api_version, resource_group_name, network_name)
        print("The response of NetworksApi->network_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->network_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The customer subscription identifier | 
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#x60;2018-07-01-preview&#x60;. | [default to 2018-07-01-preview]
 **resource_group_name** | **str**| Azure resource group name | 
 **network_name** | **str**| The identity of the network. | 

### Return type

[**NetworkResourceDescription**](NetworkResourceDescription.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **network_list_by_resource_group**
> NetworkResourceDescriptionList network_list_by_resource_group(subscription_id, api_version, resource_group_name)

Gets all the network resources in a given resource group.

Gets the information about all network resources in a given resource group. The information includes the network description and other runtime properties. 

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.network_resource_description_list import NetworkResourceDescriptionList
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
    api_instance = openapi_client.NetworksApi(api_client)
    subscription_id = 'subscription_id_example' # str | The customer subscription identifier
    api_version = 2018-07-01-preview # str | The version of the API. This parameter is required and its value must be `2018-07-01-preview`. (default to 2018-07-01-preview)
    resource_group_name = 'resource_group_name_example' # str | Azure resource group name

    try:
        # Gets all the network resources in a given resource group.
        api_response = api_instance.network_list_by_resource_group(subscription_id, api_version, resource_group_name)
        print("The response of NetworksApi->network_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->network_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The customer subscription identifier | 
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#x60;2018-07-01-preview&#x60;. | [default to 2018-07-01-preview]
 **resource_group_name** | **str**| Azure resource group name | 

### Return type

[**NetworkResourceDescriptionList**](NetworkResourceDescriptionList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **network_list_by_subscription**
> NetworkResourceDescriptionList network_list_by_subscription(subscription_id, api_version)

Gets all the network resources in a given subscription.

Gets the information about all network resources in a given subscription. The information includes the network description and other runtime properties.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.network_resource_description_list import NetworkResourceDescriptionList
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
    api_instance = openapi_client.NetworksApi(api_client)
    subscription_id = 'subscription_id_example' # str | The customer subscription identifier
    api_version = 2018-07-01-preview # str | The version of the API. This parameter is required and its value must be `2018-07-01-preview`. (default to 2018-07-01-preview)

    try:
        # Gets all the network resources in a given subscription.
        api_response = api_instance.network_list_by_subscription(subscription_id, api_version)
        print("The response of NetworksApi->network_list_by_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->network_list_by_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The customer subscription identifier | 
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#x60;2018-07-01-preview&#x60;. | [default to 2018-07-01-preview]

### Return type

[**NetworkResourceDescriptionList**](NetworkResourceDescriptionList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

