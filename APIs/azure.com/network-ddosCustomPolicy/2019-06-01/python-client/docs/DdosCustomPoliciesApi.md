# openapi_client.DdosCustomPoliciesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ddos_custom_policies_create_or_update**](DdosCustomPoliciesApi.md#ddos_custom_policies_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/ddosCustomPolicies/{ddosCustomPolicyName} | 
[**ddos_custom_policies_delete**](DdosCustomPoliciesApi.md#ddos_custom_policies_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/ddosCustomPolicies/{ddosCustomPolicyName} | 
[**ddos_custom_policies_get**](DdosCustomPoliciesApi.md#ddos_custom_policies_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/ddosCustomPolicies/{ddosCustomPolicyName} | 
[**ddos_custom_policies_update_tags**](DdosCustomPoliciesApi.md#ddos_custom_policies_update_tags) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/ddosCustomPolicies/{ddosCustomPolicyName} | 


# **ddos_custom_policies_create_or_update**
> DdosCustomPolicy ddos_custom_policies_create_or_update(resource_group_name, ddos_custom_policy_name, api_version, subscription_id, parameters)



Creates or updates a DDoS custom policy.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.ddos_custom_policy import DdosCustomPolicy
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
    api_instance = openapi_client.DdosCustomPoliciesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    ddos_custom_policy_name = 'ddos_custom_policy_name_example' # str | The name of the DDoS custom policy.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.DdosCustomPolicy() # DdosCustomPolicy | Parameters supplied to the create or update operation.

    try:
        api_response = api_instance.ddos_custom_policies_create_or_update(resource_group_name, ddos_custom_policy_name, api_version, subscription_id, parameters)
        print("The response of DdosCustomPoliciesApi->ddos_custom_policies_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DdosCustomPoliciesApi->ddos_custom_policies_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **ddos_custom_policy_name** | **str**| The name of the DDoS custom policy. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**DdosCustomPolicy**](DdosCustomPolicy.md)| Parameters supplied to the create or update operation. | 

### Return type

[**DdosCustomPolicy**](DdosCustomPolicy.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Update successful. The operation returns the resulting DDoS custom policy resource. |  -  |
**201** | Create successful. The operation returns the resulting DDoS custom policy resource. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ddos_custom_policies_delete**
> ddos_custom_policies_delete(resource_group_name, ddos_custom_policy_name, api_version, subscription_id)



Deletes the specified DDoS custom policy.

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
    api_instance = openapi_client.DdosCustomPoliciesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    ddos_custom_policy_name = 'ddos_custom_policy_name_example' # str | The name of the DDoS custom policy.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.ddos_custom_policies_delete(resource_group_name, ddos_custom_policy_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling DdosCustomPoliciesApi->ddos_custom_policies_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **ddos_custom_policy_name** | **str**| The name of the DDoS custom policy. | 
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
**204** | Request successful. Resource does not exist. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ddos_custom_policies_get**
> DdosCustomPolicy ddos_custom_policies_get(resource_group_name, ddos_custom_policy_name, api_version, subscription_id)



Gets information about the specified DDoS custom policy.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.ddos_custom_policy import DdosCustomPolicy
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
    api_instance = openapi_client.DdosCustomPoliciesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    ddos_custom_policy_name = 'ddos_custom_policy_name_example' # str | The name of the DDoS custom policy.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.ddos_custom_policies_get(resource_group_name, ddos_custom_policy_name, api_version, subscription_id)
        print("The response of DdosCustomPoliciesApi->ddos_custom_policies_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DdosCustomPoliciesApi->ddos_custom_policies_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **ddos_custom_policy_name** | **str**| The name of the DDoS custom policy. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**DdosCustomPolicy**](DdosCustomPolicy.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns the specified DDoS custom policy resource. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ddos_custom_policies_update_tags**
> DdosCustomPolicy ddos_custom_policies_update_tags(resource_group_name, ddos_custom_policy_name, api_version, subscription_id, parameters)



Update a DDoS custom policy tags.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.ddos_custom_policies_update_tags_request import DdosCustomPoliciesUpdateTagsRequest
from openapi_client.models.ddos_custom_policy import DdosCustomPolicy
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
    api_instance = openapi_client.DdosCustomPoliciesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    ddos_custom_policy_name = 'ddos_custom_policy_name_example' # str | The name of the DDoS custom policy.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.DdosCustomPoliciesUpdateTagsRequest() # DdosCustomPoliciesUpdateTagsRequest | Parameters supplied to the update DDoS custom policy resource tags.

    try:
        api_response = api_instance.ddos_custom_policies_update_tags(resource_group_name, ddos_custom_policy_name, api_version, subscription_id, parameters)
        print("The response of DdosCustomPoliciesApi->ddos_custom_policies_update_tags:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DdosCustomPoliciesApi->ddos_custom_policies_update_tags: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **ddos_custom_policy_name** | **str**| The name of the DDoS custom policy. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**DdosCustomPoliciesUpdateTagsRequest**](DdosCustomPoliciesUpdateTagsRequest.md)| Parameters supplied to the update DDoS custom policy resource tags. | 

### Return type

[**DdosCustomPolicy**](DdosCustomPolicy.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Update successful. The operation returns the resulting DDoS custom policy resource. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

