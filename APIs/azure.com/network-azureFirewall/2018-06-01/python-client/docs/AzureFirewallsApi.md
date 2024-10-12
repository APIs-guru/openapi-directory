# openapi_client.AzureFirewallsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**azure_firewalls_create_or_update**](AzureFirewallsApi.md#azure_firewalls_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/azureFirewalls/{azureFirewallName} | 
[**azure_firewalls_delete**](AzureFirewallsApi.md#azure_firewalls_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/azureFirewalls/{azureFirewallName} | 
[**azure_firewalls_get**](AzureFirewallsApi.md#azure_firewalls_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/azureFirewalls/{azureFirewallName} | 
[**azure_firewalls_list**](AzureFirewallsApi.md#azure_firewalls_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/azureFirewalls | 
[**azure_firewalls_list_all**](AzureFirewallsApi.md#azure_firewalls_list_all) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Network/azureFirewalls | 


# **azure_firewalls_create_or_update**
> AzureFirewall azure_firewalls_create_or_update(resource_group_name, azure_firewall_name, api_version, subscription_id, parameters)



Creates or updates the specified Azure Firewall.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.azure_firewall import AzureFirewall
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
    api_instance = openapi_client.AzureFirewallsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    azure_firewall_name = 'azure_firewall_name_example' # str | The name of the Azure Firewall.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.AzureFirewall() # AzureFirewall | Parameters supplied to the create or update Azure Firewall operation.

    try:
        api_response = api_instance.azure_firewalls_create_or_update(resource_group_name, azure_firewall_name, api_version, subscription_id, parameters)
        print("The response of AzureFirewallsApi->azure_firewalls_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AzureFirewallsApi->azure_firewalls_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **azure_firewall_name** | **str**| The name of the Azure Firewall. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**AzureFirewall**](AzureFirewall.md)| Parameters supplied to the create or update Azure Firewall operation. | 

### Return type

[**AzureFirewall**](AzureFirewall.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Update successful. The operation returns the resulting AzureFirewall resource. |  -  |
**201** | Create successful. The operation returns the resulting AzureFirewall resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **azure_firewalls_delete**
> azure_firewalls_delete(resource_group_name, azure_firewall_name, api_version, subscription_id)



Deletes the specified Azure Firewall.

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
    api_instance = openapi_client.AzureFirewallsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    azure_firewall_name = 'azure_firewall_name_example' # str | The name of the Azure Firewall.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.azure_firewalls_delete(resource_group_name, azure_firewall_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling AzureFirewallsApi->azure_firewalls_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **azure_firewall_name** | **str**| The name of the Azure Firewall. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

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
**200** | Delete successful. |  -  |
**202** | Accepted and the operation will complete asynchronously. |  -  |
**204** | Request successful. Resource with the specified name does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **azure_firewalls_get**
> AzureFirewall azure_firewalls_get(resource_group_name, azure_firewall_name, api_version, subscription_id)



Gets the specified Azure Firewall.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.azure_firewall import AzureFirewall
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
    api_instance = openapi_client.AzureFirewallsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    azure_firewall_name = 'azure_firewall_name_example' # str | The name of the Azure Firewall.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.azure_firewalls_get(resource_group_name, azure_firewall_name, api_version, subscription_id)
        print("The response of AzureFirewallsApi->azure_firewalls_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AzureFirewallsApi->azure_firewalls_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **azure_firewall_name** | **str**| The name of the Azure Firewall. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**AzureFirewall**](AzureFirewall.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns a AzureFirewall resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **azure_firewalls_list**
> AzureFirewallListResult azure_firewalls_list(resource_group_name, api_version, subscription_id)



Lists all Azure Firewalls in a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.azure_firewall_list_result import AzureFirewallListResult
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
    api_instance = openapi_client.AzureFirewallsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.azure_firewalls_list(resource_group_name, api_version, subscription_id)
        print("The response of AzureFirewallsApi->azure_firewalls_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AzureFirewallsApi->azure_firewalls_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**AzureFirewallListResult**](AzureFirewallListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. The operation returns a list of AzureFirewall resources. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **azure_firewalls_list_all**
> AzureFirewallListResult azure_firewalls_list_all(api_version, subscription_id)



Gets all the Azure Firewalls in a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.azure_firewall_list_result import AzureFirewallListResult
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
    api_instance = openapi_client.AzureFirewallsApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.azure_firewalls_list_all(api_version, subscription_id)
        print("The response of AzureFirewallsApi->azure_firewalls_list_all:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AzureFirewallsApi->azure_firewalls_list_all: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**AzureFirewallListResult**](AzureFirewallListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. The operation returns a list of AzureFirewall resources. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

