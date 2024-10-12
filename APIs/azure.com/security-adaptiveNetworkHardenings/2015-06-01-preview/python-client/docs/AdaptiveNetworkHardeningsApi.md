# openapi_client.AdaptiveNetworkHardeningsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**adaptive_network_hardenings_enforce**](AdaptiveNetworkHardeningsApi.md#adaptive_network_hardenings_enforce) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceNamespace}/{resourceType}/{resourceName}/providers/Microsoft.Security/adaptiveNetworkHardenings/{adaptiveNetworkHardeningResourceName}/{adaptiveNetworkHardeningEnforceAction} | 
[**adaptive_network_hardenings_get**](AdaptiveNetworkHardeningsApi.md#adaptive_network_hardenings_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceNamespace}/{resourceType}/{resourceName}/providers/Microsoft.Security/adaptiveNetworkHardenings/{adaptiveNetworkHardeningResourceName} | 
[**adaptive_network_hardenings_list_by_extended_resource**](AdaptiveNetworkHardeningsApi.md#adaptive_network_hardenings_list_by_extended_resource) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceNamespace}/{resourceType}/{resourceName}/providers/Microsoft.Security/adaptiveNetworkHardenings | 


# **adaptive_network_hardenings_enforce**
> adaptive_network_hardenings_enforce(subscription_id, resource_group_name, resource_namespace, resource_type, resource_name, adaptive_network_hardening_resource_name, adaptive_network_hardening_enforce_action, api_version, body)



Enforces the given rules on the NSG(s) listed in the request

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.adaptive_network_hardening_enforce_request import AdaptiveNetworkHardeningEnforceRequest
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
    api_instance = openapi_client.AdaptiveNetworkHardeningsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    resource_namespace = 'resource_namespace_example' # str | The Namespace of the resource.
    resource_type = 'resource_type_example' # str | The type of the resource.
    resource_name = 'resource_name_example' # str | Name of the resource.
    adaptive_network_hardening_resource_name = 'adaptive_network_hardening_resource_name_example' # str | The name of the Adaptive Network Hardening resource.
    adaptive_network_hardening_enforce_action = 'adaptive_network_hardening_enforce_action_example' # str | Enforces the given rules on the NSG(s) listed in the request
    api_version = 'api_version_example' # str | API version for the operation
    body = openapi_client.AdaptiveNetworkHardeningEnforceRequest() # AdaptiveNetworkHardeningEnforceRequest | 

    try:
        api_instance.adaptive_network_hardenings_enforce(subscription_id, resource_group_name, resource_namespace, resource_type, resource_name, adaptive_network_hardening_resource_name, adaptive_network_hardening_enforce_action, api_version, body)
    except Exception as e:
        print("Exception when calling AdaptiveNetworkHardeningsApi->adaptive_network_hardenings_enforce: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **resource_namespace** | **str**| The Namespace of the resource. | 
 **resource_type** | **str**| The type of the resource. | 
 **resource_name** | **str**| Name of the resource. | 
 **adaptive_network_hardening_resource_name** | **str**| The name of the Adaptive Network Hardening resource. | 
 **adaptive_network_hardening_enforce_action** | **str**| Enforces the given rules on the NSG(s) listed in the request | 
 **api_version** | **str**| API version for the operation | 
 **body** | [**AdaptiveNetworkHardeningEnforceRequest**](AdaptiveNetworkHardeningEnforceRequest.md)|  | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**202** | Accepted |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **adaptive_network_hardenings_get**
> AdaptiveNetworkHardening adaptive_network_hardenings_get(subscription_id, resource_group_name, resource_namespace, resource_type, resource_name, adaptive_network_hardening_resource_name, api_version)



Gets a single Adaptive Network Hardening resource

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.adaptive_network_hardening import AdaptiveNetworkHardening
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
    api_instance = openapi_client.AdaptiveNetworkHardeningsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    resource_namespace = 'resource_namespace_example' # str | The Namespace of the resource.
    resource_type = 'resource_type_example' # str | The type of the resource.
    resource_name = 'resource_name_example' # str | Name of the resource.
    adaptive_network_hardening_resource_name = 'adaptive_network_hardening_resource_name_example' # str | The name of the Adaptive Network Hardening resource.
    api_version = 'api_version_example' # str | API version for the operation

    try:
        api_response = api_instance.adaptive_network_hardenings_get(subscription_id, resource_group_name, resource_namespace, resource_type, resource_name, adaptive_network_hardening_resource_name, api_version)
        print("The response of AdaptiveNetworkHardeningsApi->adaptive_network_hardenings_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdaptiveNetworkHardeningsApi->adaptive_network_hardenings_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **resource_namespace** | **str**| The Namespace of the resource. | 
 **resource_type** | **str**| The type of the resource. | 
 **resource_name** | **str**| Name of the resource. | 
 **adaptive_network_hardening_resource_name** | **str**| The name of the Adaptive Network Hardening resource. | 
 **api_version** | **str**| API version for the operation | 

### Return type

[**AdaptiveNetworkHardening**](AdaptiveNetworkHardening.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **adaptive_network_hardenings_list_by_extended_resource**
> AdaptiveNetworkHardeningsList adaptive_network_hardenings_list_by_extended_resource(subscription_id, resource_group_name, resource_namespace, resource_type, resource_name, api_version)



Gets a list of Adaptive Network Hardenings resources in scope of an extended resource.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.adaptive_network_hardenings_list import AdaptiveNetworkHardeningsList
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
    api_instance = openapi_client.AdaptiveNetworkHardeningsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    resource_namespace = 'resource_namespace_example' # str | The Namespace of the resource.
    resource_type = 'resource_type_example' # str | The type of the resource.
    resource_name = 'resource_name_example' # str | Name of the resource.
    api_version = 'api_version_example' # str | API version for the operation

    try:
        api_response = api_instance.adaptive_network_hardenings_list_by_extended_resource(subscription_id, resource_group_name, resource_namespace, resource_type, resource_name, api_version)
        print("The response of AdaptiveNetworkHardeningsApi->adaptive_network_hardenings_list_by_extended_resource:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdaptiveNetworkHardeningsApi->adaptive_network_hardenings_list_by_extended_resource: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **resource_namespace** | **str**| The Namespace of the resource. | 
 **resource_type** | **str**| The type of the resource. | 
 **resource_name** | **str**| Name of the resource. | 
 **api_version** | **str**| API version for the operation | 

### Return type

[**AdaptiveNetworkHardeningsList**](AdaptiveNetworkHardeningsList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

