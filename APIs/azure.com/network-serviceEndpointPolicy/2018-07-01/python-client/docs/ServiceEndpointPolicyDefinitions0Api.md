# openapi_client.ServiceEndpointPolicyDefinitionsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**service_endpoint_policy_definitions_create_or_update**](ServiceEndpointPolicyDefinitionsApi.md#service_endpoint_policy_definitions_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/serviceEndpointPolicies/{serviceEndpointPolicyName}/serviceEndpointPolicyDefinitions/{serviceEndpointPolicyDefinitionName} | 
[**service_endpoint_policy_definitions_get**](ServiceEndpointPolicyDefinitionsApi.md#service_endpoint_policy_definitions_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/serviceEndpointPolicies/{serviceEndpointPolicyName}/serviceEndpointPolicyDefinitions/{serviceEndpointPolicyDefinitionName} | 


# **service_endpoint_policy_definitions_create_or_update**
> ServiceEndpointPolicyDefinition service_endpoint_policy_definitions_create_or_update(resource_group_name, service_endpoint_policy_name, service_endpoint_policy_definition_name, api_version, subscription_id, service_endpoint_policy_definitions)



Creates or updates a service endpoint policy definition in the specified service endpoint policy.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.service_endpoint_policy_definition import ServiceEndpointPolicyDefinition
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
    api_instance = openapi_client.ServiceEndpointPolicyDefinitionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    service_endpoint_policy_name = 'service_endpoint_policy_name_example' # str | The name of the service endpoint policy.
    service_endpoint_policy_definition_name = 'service_endpoint_policy_definition_name_example' # str | The name of the service endpoint policy definition name.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    service_endpoint_policy_definitions = openapi_client.ServiceEndpointPolicyDefinition() # ServiceEndpointPolicyDefinition | Parameters supplied to the create or update service endpoint policy operation.

    try:
        api_response = api_instance.service_endpoint_policy_definitions_create_or_update(resource_group_name, service_endpoint_policy_name, service_endpoint_policy_definition_name, api_version, subscription_id, service_endpoint_policy_definitions)
        print("The response of ServiceEndpointPolicyDefinitionsApi->service_endpoint_policy_definitions_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceEndpointPolicyDefinitionsApi->service_endpoint_policy_definitions_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **service_endpoint_policy_name** | **str**| The name of the service endpoint policy. | 
 **service_endpoint_policy_definition_name** | **str**| The name of the service endpoint policy definition name. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **service_endpoint_policy_definitions** | [**ServiceEndpointPolicyDefinition**](ServiceEndpointPolicyDefinition.md)| Parameters supplied to the create or update service endpoint policy operation. | 

### Return type

[**ServiceEndpointPolicyDefinition**](ServiceEndpointPolicyDefinition.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Update successful. The operation returns the resulting ServiceEndpointPolicyDefinition resource. |  -  |
**201** | Create successful. The operation returns the resulting ServiceEndpointPolicyDefinition resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **service_endpoint_policy_definitions_get**
> ServiceEndpointPolicyDefinition service_endpoint_policy_definitions_get(resource_group_name, service_endpoint_policy_name, service_endpoint_policy_definition_name, api_version, subscription_id)



Get the specified service endpoint policy definitions from service endpoint policy.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.service_endpoint_policy_definition import ServiceEndpointPolicyDefinition
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
    api_instance = openapi_client.ServiceEndpointPolicyDefinitionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    service_endpoint_policy_name = 'service_endpoint_policy_name_example' # str | The name of the service endpoint policy name.
    service_endpoint_policy_definition_name = 'service_endpoint_policy_definition_name_example' # str | The name of the service endpoint policy definition name.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.service_endpoint_policy_definitions_get(resource_group_name, service_endpoint_policy_name, service_endpoint_policy_definition_name, api_version, subscription_id)
        print("The response of ServiceEndpointPolicyDefinitionsApi->service_endpoint_policy_definitions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceEndpointPolicyDefinitionsApi->service_endpoint_policy_definitions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **service_endpoint_policy_name** | **str**| The name of the service endpoint policy name. | 
 **service_endpoint_policy_definition_name** | **str**| The name of the service endpoint policy definition name. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**ServiceEndpointPolicyDefinition**](ServiceEndpointPolicyDefinition.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns the resulting ServiceEndpointPolicyDefinition resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

