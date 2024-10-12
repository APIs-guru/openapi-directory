# openapi_client.FirewallPoliciesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**firewall_policies_create_or_update**](FirewallPoliciesApi.md#firewall_policies_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/firewallPolicies/{firewallPolicyName} | 
[**firewall_policies_delete**](FirewallPoliciesApi.md#firewall_policies_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/firewallPolicies/{firewallPolicyName} | 
[**firewall_policies_get**](FirewallPoliciesApi.md#firewall_policies_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/firewallPolicies/{firewallPolicyName} | 
[**firewall_policies_list**](FirewallPoliciesApi.md#firewall_policies_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/firewallPolicies | 
[**firewall_policies_list_all**](FirewallPoliciesApi.md#firewall_policies_list_all) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Network/firewallPolicies | 
[**firewall_policies_update_tags**](FirewallPoliciesApi.md#firewall_policies_update_tags) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/firewallPolicies/{firewallPolicyName} | 


# **firewall_policies_create_or_update**
> FirewallPolicy firewall_policies_create_or_update(resource_group_name, firewall_policy_name, api_version, subscription_id, parameters)



Creates or updates the specified Firewall Policy.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.firewall_policy import FirewallPolicy
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
    api_instance = openapi_client.FirewallPoliciesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    firewall_policy_name = 'firewall_policy_name_example' # str | The name of the Firewall Policy.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.FirewallPolicy() # FirewallPolicy | Parameters supplied to the create or update Firewall Policy operation.

    try:
        api_response = api_instance.firewall_policies_create_or_update(resource_group_name, firewall_policy_name, api_version, subscription_id, parameters)
        print("The response of FirewallPoliciesApi->firewall_policies_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirewallPoliciesApi->firewall_policies_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **firewall_policy_name** | **str**| The name of the Firewall Policy. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**FirewallPolicy**](FirewallPolicy.md)| Parameters supplied to the create or update Firewall Policy operation. | 

### Return type

[**FirewallPolicy**](FirewallPolicy.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns the resulting FirewallPolicy resource. |  -  |
**201** | Request received successfully. The operation returns the resulting FirewallPolicy resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **firewall_policies_delete**
> firewall_policies_delete(resource_group_name, firewall_policy_name, api_version, subscription_id)



Deletes the specified Firewall Policy.

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
    api_instance = openapi_client.FirewallPoliciesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    firewall_policy_name = 'firewall_policy_name_example' # str | The name of the Firewall Policy.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.firewall_policies_delete(resource_group_name, firewall_policy_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling FirewallPoliciesApi->firewall_policies_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **firewall_policy_name** | **str**| The name of the Firewall Policy. | 
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
**204** | Request successful. Resource with the specified name does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **firewall_policies_get**
> FirewallPolicy firewall_policies_get(resource_group_name, firewall_policy_name, api_version, subscription_id, expand=expand)



Gets the specified Firewall Policy.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.firewall_policy import FirewallPolicy
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
    api_instance = openapi_client.FirewallPoliciesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    firewall_policy_name = 'firewall_policy_name_example' # str | The name of the Firewall Policy.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    expand = 'expand_example' # str | Expands referenced resources. (optional)

    try:
        api_response = api_instance.firewall_policies_get(resource_group_name, firewall_policy_name, api_version, subscription_id, expand=expand)
        print("The response of FirewallPoliciesApi->firewall_policies_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirewallPoliciesApi->firewall_policies_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **firewall_policy_name** | **str**| The name of the Firewall Policy. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **expand** | **str**| Expands referenced resources. | [optional] 

### Return type

[**FirewallPolicy**](FirewallPolicy.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns a Firewall Policy resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **firewall_policies_list**
> FirewallPolicyListResult firewall_policies_list(resource_group_name, api_version, subscription_id)



Lists all Firewall Policies in a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.firewall_policy_list_result import FirewallPolicyListResult
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
    api_instance = openapi_client.FirewallPoliciesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.firewall_policies_list(resource_group_name, api_version, subscription_id)
        print("The response of FirewallPoliciesApi->firewall_policies_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirewallPoliciesApi->firewall_policies_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**FirewallPolicyListResult**](FirewallPolicyListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. The operation returns a list of FirewallPolicy resources. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **firewall_policies_list_all**
> FirewallPolicyListResult firewall_policies_list_all(api_version, subscription_id)



Gets all the Firewall Policies in a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.firewall_policy_list_result import FirewallPolicyListResult
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
    api_instance = openapi_client.FirewallPoliciesApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.firewall_policies_list_all(api_version, subscription_id)
        print("The response of FirewallPoliciesApi->firewall_policies_list_all:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirewallPoliciesApi->firewall_policies_list_all: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**FirewallPolicyListResult**](FirewallPolicyListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. The operation returns a list of FirewallPolicy resources. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **firewall_policies_update_tags**
> FirewallPolicy firewall_policies_update_tags(subscription_id, resource_group_name, firewall_policy_name, api_version, firewall_policy_parameters)



Updates a Firewall Policy Tags.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.firewall_policies_update_tags_request import FirewallPoliciesUpdateTagsRequest
from openapi_client.models.firewall_policy import FirewallPolicy
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
    api_instance = openapi_client.FirewallPoliciesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The resource group name of the Firewall Policy.
    firewall_policy_name = 'firewall_policy_name_example' # str | The name of the Firewall Policy being updated.
    api_version = 'api_version_example' # str | Client API version.
    firewall_policy_parameters = openapi_client.FirewallPoliciesUpdateTagsRequest() # FirewallPoliciesUpdateTagsRequest | Parameters supplied to Update Firewall Policy tags.

    try:
        api_response = api_instance.firewall_policies_update_tags(subscription_id, resource_group_name, firewall_policy_name, api_version, firewall_policy_parameters)
        print("The response of FirewallPoliciesApi->firewall_policies_update_tags:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirewallPoliciesApi->firewall_policies_update_tags: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The resource group name of the Firewall Policy. | 
 **firewall_policy_name** | **str**| The name of the Firewall Policy being updated. | 
 **api_version** | **str**| Client API version. | 
 **firewall_policy_parameters** | [**FirewallPoliciesUpdateTagsRequest**](FirewallPoliciesUpdateTagsRequest.md)| Parameters supplied to Update Firewall Policy tags. | 

### Return type

[**FirewallPolicy**](FirewallPolicy.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. Returns the details of the Firewall Policy updated. |  -  |
**0** | Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

