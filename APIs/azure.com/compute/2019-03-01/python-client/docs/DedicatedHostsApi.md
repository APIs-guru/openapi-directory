# openapi_client.DedicatedHostsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dedicated_hosts_create_or_update**](DedicatedHostsApi.md#dedicated_hosts_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName}/hosts/{hostName} | 
[**dedicated_hosts_delete**](DedicatedHostsApi.md#dedicated_hosts_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName}/hosts/{hostName} | 
[**dedicated_hosts_get**](DedicatedHostsApi.md#dedicated_hosts_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName}/hosts/{hostName} | 
[**dedicated_hosts_update**](DedicatedHostsApi.md#dedicated_hosts_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName}/hosts/{hostName} | 


# **dedicated_hosts_create_or_update**
> DedicatedHost dedicated_hosts_create_or_update(resource_group_name, host_group_name, host_name, api_version, subscription_id, parameters)



Create or update a dedicated host .

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.dedicated_host import DedicatedHost
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
    api_instance = openapi_client.DedicatedHostsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    host_group_name = 'host_group_name_example' # str | The name of the dedicated host group.
    host_name = 'host_name_example' # str | The name of the dedicated host .
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.DedicatedHost() # DedicatedHost | Parameters supplied to the Create Dedicated Host.

    try:
        api_response = api_instance.dedicated_hosts_create_or_update(resource_group_name, host_group_name, host_name, api_version, subscription_id, parameters)
        print("The response of DedicatedHostsApi->dedicated_hosts_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DedicatedHostsApi->dedicated_hosts_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **host_group_name** | **str**| The name of the dedicated host group. | 
 **host_name** | **str**| The name of the dedicated host . | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**DedicatedHost**](DedicatedHost.md)| Parameters supplied to the Create Dedicated Host. | 

### Return type

[**DedicatedHost**](DedicatedHost.md)

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

# **dedicated_hosts_delete**
> dedicated_hosts_delete(resource_group_name, host_group_name, host_name, api_version, subscription_id)



Delete a dedicated host.

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
    api_instance = openapi_client.DedicatedHostsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    host_group_name = 'host_group_name_example' # str | The name of the dedicated host group.
    host_name = 'host_name_example' # str | The name of the dedicated host.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.dedicated_hosts_delete(resource_group_name, host_group_name, host_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling DedicatedHostsApi->dedicated_hosts_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **host_group_name** | **str**| The name of the dedicated host group. | 
 **host_name** | **str**| The name of the dedicated host. | 
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
**202** | Accepted |  -  |
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dedicated_hosts_get**
> DedicatedHost dedicated_hosts_get(resource_group_name, host_group_name, host_name, api_version, subscription_id, expand=expand)



Retrieves information about a dedicated host.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.dedicated_host import DedicatedHost
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
    api_instance = openapi_client.DedicatedHostsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    host_group_name = 'host_group_name_example' # str | The name of the dedicated host group.
    host_name = 'host_name_example' # str | The name of the dedicated host.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    expand = 'expand_example' # str | The expand expression to apply on the operation. (optional)

    try:
        api_response = api_instance.dedicated_hosts_get(resource_group_name, host_group_name, host_name, api_version, subscription_id, expand=expand)
        print("The response of DedicatedHostsApi->dedicated_hosts_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DedicatedHostsApi->dedicated_hosts_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **host_group_name** | **str**| The name of the dedicated host group. | 
 **host_name** | **str**| The name of the dedicated host. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **expand** | **str**| The expand expression to apply on the operation. | [optional] 

### Return type

[**DedicatedHost**](DedicatedHost.md)

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

# **dedicated_hosts_update**
> DedicatedHost dedicated_hosts_update(resource_group_name, host_group_name, host_name, api_version, subscription_id, parameters)



Update an dedicated host .

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.dedicated_host import DedicatedHost
from openapi_client.models.dedicated_host_update import DedicatedHostUpdate
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
    api_instance = openapi_client.DedicatedHostsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    host_group_name = 'host_group_name_example' # str | The name of the dedicated host group.
    host_name = 'host_name_example' # str | The name of the dedicated host .
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.DedicatedHostUpdate() # DedicatedHostUpdate | Parameters supplied to the Update Dedicated Host operation.

    try:
        api_response = api_instance.dedicated_hosts_update(resource_group_name, host_group_name, host_name, api_version, subscription_id, parameters)
        print("The response of DedicatedHostsApi->dedicated_hosts_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DedicatedHostsApi->dedicated_hosts_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **host_group_name** | **str**| The name of the dedicated host group. | 
 **host_name** | **str**| The name of the dedicated host . | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**DedicatedHostUpdate**](DedicatedHostUpdate.md)| Parameters supplied to the Update Dedicated Host operation. | 

### Return type

[**DedicatedHost**](DedicatedHost.md)

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

