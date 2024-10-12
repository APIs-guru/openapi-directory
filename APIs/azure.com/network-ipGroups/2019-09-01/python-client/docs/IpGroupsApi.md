# openapi_client.IpGroupsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ip_groups_create_or_update**](IpGroupsApi.md#ip_groups_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/ipGroups/{ipGroupsName} | 
[**ip_groups_delete**](IpGroupsApi.md#ip_groups_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/ipGroups/{ipGroupsName} | 
[**ip_groups_get**](IpGroupsApi.md#ip_groups_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/ipGroups/{ipGroupsName} | 
[**ip_groups_list**](IpGroupsApi.md#ip_groups_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Network/ipGroups | 
[**ip_groups_list_by_resource_group**](IpGroupsApi.md#ip_groups_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/ipGroups | 
[**ip_groups_update_groups**](IpGroupsApi.md#ip_groups_update_groups) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/ipGroups/{ipGroupsName} | 


# **ip_groups_create_or_update**
> IpGroup ip_groups_create_or_update(resource_group_name, ip_groups_name, api_version, subscription_id, parameters)



Creates or updates an ipGroups in a specified resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.ip_group import IpGroup
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
    api_instance = openapi_client.IpGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    ip_groups_name = 'ip_groups_name_example' # str | The name of the ipGroups.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.IpGroup() # IpGroup | Parameters supplied to the create or update IpGroups operation.

    try:
        api_response = api_instance.ip_groups_create_or_update(resource_group_name, ip_groups_name, api_version, subscription_id, parameters)
        print("The response of IpGroupsApi->ip_groups_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IpGroupsApi->ip_groups_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **ip_groups_name** | **str**| The name of the ipGroups. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**IpGroup**](IpGroup.md)| Parameters supplied to the create or update IpGroups operation. | 

### Return type

[**IpGroup**](IpGroup.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns the resulting ipGroups resource. |  -  |
**201** | Create successful. The operation returns the resulting ipGroups resource. |  -  |
**0** | Unexpected error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ip_groups_delete**
> ip_groups_delete(resource_group_name, ip_groups_name, api_version, subscription_id)



Deletes the specified ipGroups.

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
    api_instance = openapi_client.IpGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    ip_groups_name = 'ip_groups_name_example' # str | The name of the ipGroups.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.ip_groups_delete(resource_group_name, ip_groups_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling IpGroupsApi->ip_groups_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **ip_groups_name** | **str**| The name of the ipGroups. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

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
**200** | Delete successful. |  -  |
**202** | Accepted and the operation will complete asynchronously. |  -  |
**204** | Delete successful. |  -  |
**0** | Unexpected error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ip_groups_get**
> IpGroup ip_groups_get(resource_group_name, ip_groups_name, api_version, subscription_id, expand=expand)



Gets the specified ipGroups.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.ip_group import IpGroup
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
    api_instance = openapi_client.IpGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    ip_groups_name = 'ip_groups_name_example' # str | The name of the ipGroups.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    expand = 'expand_example' # str | Expands resourceIds (of Firewalls/Network Security Groups etc.) back referenced by the IpGroups resource. (optional)

    try:
        api_response = api_instance.ip_groups_get(resource_group_name, ip_groups_name, api_version, subscription_id, expand=expand)
        print("The response of IpGroupsApi->ip_groups_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IpGroupsApi->ip_groups_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **ip_groups_name** | **str**| The name of the ipGroups. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **expand** | **str**| Expands resourceIds (of Firewalls/Network Security Groups etc.) back referenced by the IpGroups resource. | [optional] 

### Return type

[**IpGroup**](IpGroup.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns the resulting IpGroups resource. |  -  |
**0** | Unexpected error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ip_groups_list**
> IpGroupListResult ip_groups_list(api_version, subscription_id)



Gets all IpGroups in a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.ip_group_list_result import IpGroupListResult
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
    api_instance = openapi_client.IpGroupsApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.ip_groups_list(api_version, subscription_id)
        print("The response of IpGroupsApi->ip_groups_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IpGroupsApi->ip_groups_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**IpGroupListResult**](IpGroupListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns a list of ipGroups resources. |  -  |
**0** | Unexpected error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ip_groups_list_by_resource_group**
> IpGroupListResult ip_groups_list_by_resource_group(resource_group_name, api_version, subscription_id)



Gets all IpGroups in a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.ip_group_list_result import IpGroupListResult
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
    api_instance = openapi_client.IpGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.ip_groups_list_by_resource_group(resource_group_name, api_version, subscription_id)
        print("The response of IpGroupsApi->ip_groups_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IpGroupsApi->ip_groups_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**IpGroupListResult**](IpGroupListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns a list of ipGroups resources. |  -  |
**0** | Unexpected error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ip_groups_update_groups**
> IpGroup ip_groups_update_groups(resource_group_name, ip_groups_name, api_version, subscription_id, parameters)



Updates tags of an IpGroups resource.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.ip_group import IpGroup
from openapi_client.models.ip_groups_update_groups_request import IpGroupsUpdateGroupsRequest
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
    api_instance = openapi_client.IpGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    ip_groups_name = 'ip_groups_name_example' # str | The name of the ipGroups.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.IpGroupsUpdateGroupsRequest() # IpGroupsUpdateGroupsRequest | Parameters supplied to the update ipGroups operation.

    try:
        api_response = api_instance.ip_groups_update_groups(resource_group_name, ip_groups_name, api_version, subscription_id, parameters)
        print("The response of IpGroupsApi->ip_groups_update_groups:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IpGroupsApi->ip_groups_update_groups: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **ip_groups_name** | **str**| The name of the ipGroups. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**IpGroupsUpdateGroupsRequest**](IpGroupsUpdateGroupsRequest.md)| Parameters supplied to the update ipGroups operation. | 

### Return type

[**IpGroup**](IpGroup.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns the resulting ipGroups resource. |  -  |
**0** | Unexpected error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

