# openapi_client.DedicatedHostGroupsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dedicated_host_groups_create_or_update**](DedicatedHostGroupsApi.md#dedicated_host_groups_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName} | 
[**dedicated_host_groups_delete**](DedicatedHostGroupsApi.md#dedicated_host_groups_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName} | 
[**dedicated_host_groups_get**](DedicatedHostGroupsApi.md#dedicated_host_groups_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName} | 
[**dedicated_host_groups_list_by_resource_group**](DedicatedHostGroupsApi.md#dedicated_host_groups_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups | 
[**dedicated_host_groups_list_by_subscription**](DedicatedHostGroupsApi.md#dedicated_host_groups_list_by_subscription) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Compute/hostGroups | 
[**dedicated_host_groups_update**](DedicatedHostGroupsApi.md#dedicated_host_groups_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName} | 


# **dedicated_host_groups_create_or_update**
> DedicatedHostGroup dedicated_host_groups_create_or_update(resource_group_name, host_group_name, api_version, subscription_id, parameters)



Create or update a dedicated host group. For details of Dedicated Host and Dedicated Host Groups please see [Dedicated Host Documentation] (https://go.microsoft.com/fwlink/?linkid=2082596)

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.dedicated_host_group import DedicatedHostGroup
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
    api_instance = openapi_client.DedicatedHostGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    host_group_name = 'host_group_name_example' # str | The name of the dedicated host group.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.DedicatedHostGroup() # DedicatedHostGroup | Parameters supplied to the Create Dedicated Host Group.

    try:
        api_response = api_instance.dedicated_host_groups_create_or_update(resource_group_name, host_group_name, api_version, subscription_id, parameters)
        print("The response of DedicatedHostGroupsApi->dedicated_host_groups_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DedicatedHostGroupsApi->dedicated_host_groups_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **host_group_name** | **str**| The name of the dedicated host group. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**DedicatedHostGroup**](DedicatedHostGroup.md)| Parameters supplied to the Create Dedicated Host Group. | 

### Return type

[**DedicatedHostGroup**](DedicatedHostGroup.md)

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

# **dedicated_host_groups_delete**
> dedicated_host_groups_delete(resource_group_name, host_group_name, api_version, subscription_id)



Delete a dedicated host group.

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
    api_instance = openapi_client.DedicatedHostGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    host_group_name = 'host_group_name_example' # str | The name of the dedicated host group.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.dedicated_host_groups_delete(resource_group_name, host_group_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling DedicatedHostGroupsApi->dedicated_host_groups_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **host_group_name** | **str**| The name of the dedicated host group. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

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

# **dedicated_host_groups_get**
> DedicatedHostGroup dedicated_host_groups_get(resource_group_name, host_group_name, api_version, subscription_id)



Retrieves information about a dedicated host group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.dedicated_host_group import DedicatedHostGroup
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
    api_instance = openapi_client.DedicatedHostGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    host_group_name = 'host_group_name_example' # str | The name of the dedicated host group.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.dedicated_host_groups_get(resource_group_name, host_group_name, api_version, subscription_id)
        print("The response of DedicatedHostGroupsApi->dedicated_host_groups_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DedicatedHostGroupsApi->dedicated_host_groups_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **host_group_name** | **str**| The name of the dedicated host group. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**DedicatedHostGroup**](DedicatedHostGroup.md)

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

# **dedicated_host_groups_list_by_resource_group**
> DedicatedHostGroupListResult dedicated_host_groups_list_by_resource_group(resource_group_name, api_version, subscription_id)



Lists all of the dedicated host groups in the specified resource group. Use the nextLink property in the response to get the next page of dedicated host groups.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.dedicated_host_group_list_result import DedicatedHostGroupListResult
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
    api_instance = openapi_client.DedicatedHostGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.dedicated_host_groups_list_by_resource_group(resource_group_name, api_version, subscription_id)
        print("The response of DedicatedHostGroupsApi->dedicated_host_groups_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DedicatedHostGroupsApi->dedicated_host_groups_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**DedicatedHostGroupListResult**](DedicatedHostGroupListResult.md)

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

# **dedicated_host_groups_list_by_subscription**
> DedicatedHostGroupListResult dedicated_host_groups_list_by_subscription(api_version, subscription_id)



Lists all of the dedicated host groups in the subscription. Use the nextLink property in the response to get the next page of dedicated host groups.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.dedicated_host_group_list_result import DedicatedHostGroupListResult
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
    api_instance = openapi_client.DedicatedHostGroupsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.dedicated_host_groups_list_by_subscription(api_version, subscription_id)
        print("The response of DedicatedHostGroupsApi->dedicated_host_groups_list_by_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DedicatedHostGroupsApi->dedicated_host_groups_list_by_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**DedicatedHostGroupListResult**](DedicatedHostGroupListResult.md)

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

# **dedicated_host_groups_update**
> DedicatedHostGroup dedicated_host_groups_update(resource_group_name, host_group_name, api_version, subscription_id, parameters)



Update an dedicated host group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.dedicated_host_group import DedicatedHostGroup
from openapi_client.models.dedicated_host_group_update import DedicatedHostGroupUpdate
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
    api_instance = openapi_client.DedicatedHostGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    host_group_name = 'host_group_name_example' # str | The name of the dedicated host group.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.DedicatedHostGroupUpdate() # DedicatedHostGroupUpdate | Parameters supplied to the Update Dedicated Host Group operation.

    try:
        api_response = api_instance.dedicated_host_groups_update(resource_group_name, host_group_name, api_version, subscription_id, parameters)
        print("The response of DedicatedHostGroupsApi->dedicated_host_groups_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DedicatedHostGroupsApi->dedicated_host_groups_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **host_group_name** | **str**| The name of the dedicated host group. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**DedicatedHostGroupUpdate**](DedicatedHostGroupUpdate.md)| Parameters supplied to the Update Dedicated Host Group operation. | 

### Return type

[**DedicatedHostGroup**](DedicatedHostGroup.md)

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

