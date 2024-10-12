# openapi_client.NetworkSecurityGroupsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**network_security_groups_create_or_update**](NetworkSecurityGroupsApi.md#network_security_groups_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkSecurityGroups/{networkSecurityGroupName} | 
[**network_security_groups_delete**](NetworkSecurityGroupsApi.md#network_security_groups_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkSecurityGroups/{networkSecurityGroupName} | 
[**network_security_groups_get**](NetworkSecurityGroupsApi.md#network_security_groups_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkSecurityGroups/{networkSecurityGroupName} | 
[**network_security_groups_list**](NetworkSecurityGroupsApi.md#network_security_groups_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkSecurityGroups | 
[**network_security_groups_list_all**](NetworkSecurityGroupsApi.md#network_security_groups_list_all) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Network/networkSecurityGroups | 


# **network_security_groups_create_or_update**
> NetworkSecurityGroup network_security_groups_create_or_update(resource_group_name, network_security_group_name, api_version, subscription_id, parameters)



The Put NetworkSecurityGroup operation creates/updates a network security group in the specified resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.network_security_group import NetworkSecurityGroup
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
    api_instance = openapi_client.NetworkSecurityGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    network_security_group_name = 'network_security_group_name_example' # str | The name of the network security group.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.NetworkSecurityGroup() # NetworkSecurityGroup | Parameters supplied to the create/update Network Security Group operation

    try:
        api_response = api_instance.network_security_groups_create_or_update(resource_group_name, network_security_group_name, api_version, subscription_id, parameters)
        print("The response of NetworkSecurityGroupsApi->network_security_groups_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkSecurityGroupsApi->network_security_groups_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **network_security_group_name** | **str**| The name of the network security group. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**NetworkSecurityGroup**](NetworkSecurityGroup.md)| Parameters supplied to the create/update Network Security Group operation | 

### Return type

[**NetworkSecurityGroup**](NetworkSecurityGroup.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **network_security_groups_delete**
> network_security_groups_delete(resource_group_name, network_security_group_name, api_version, subscription_id)



The Delete NetworkSecurityGroup operation deletes the specified network security group

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
    api_instance = openapi_client.NetworkSecurityGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    network_security_group_name = 'network_security_group_name_example' # str | The name of the network security group.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.network_security_groups_delete(resource_group_name, network_security_group_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling NetworkSecurityGroupsApi->network_security_groups_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **network_security_group_name** | **str**| The name of the network security group. | 
 **api_version** | **str**| Client Api Version. | 
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

# **network_security_groups_get**
> NetworkSecurityGroup network_security_groups_get(resource_group_name, network_security_group_name, api_version, subscription_id)



The Get NetworkSecurityGroups operation retrieves information about the specified network security group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.network_security_group import NetworkSecurityGroup
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
    api_instance = openapi_client.NetworkSecurityGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    network_security_group_name = 'network_security_group_name_example' # str | The name of the network security group.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.network_security_groups_get(resource_group_name, network_security_group_name, api_version, subscription_id)
        print("The response of NetworkSecurityGroupsApi->network_security_groups_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkSecurityGroupsApi->network_security_groups_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **network_security_group_name** | **str**| The name of the network security group. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**NetworkSecurityGroup**](NetworkSecurityGroup.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **network_security_groups_list**
> NetworkSecurityGroupListResult network_security_groups_list(resource_group_name, api_version, subscription_id)



The list NetworkSecurityGroups returns all network security groups in a resource group

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.network_security_group_list_result import NetworkSecurityGroupListResult
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
    api_instance = openapi_client.NetworkSecurityGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.network_security_groups_list(resource_group_name, api_version, subscription_id)
        print("The response of NetworkSecurityGroupsApi->network_security_groups_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkSecurityGroupsApi->network_security_groups_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**NetworkSecurityGroupListResult**](NetworkSecurityGroupListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **network_security_groups_list_all**
> NetworkSecurityGroupListResult network_security_groups_list_all(api_version, subscription_id)



The list NetworkSecurityGroups returns all network security groups in a subscription

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.network_security_group_list_result import NetworkSecurityGroupListResult
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
    api_instance = openapi_client.NetworkSecurityGroupsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.network_security_groups_list_all(api_version, subscription_id)
        print("The response of NetworkSecurityGroupsApi->network_security_groups_list_all:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkSecurityGroupsApi->network_security_groups_list_all: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**NetworkSecurityGroupListResult**](NetworkSecurityGroupListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

