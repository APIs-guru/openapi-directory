# openapi_client.ConnectionPoliciesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**server_connection_policies_create_or_update**](ConnectionPoliciesApi.md#server_connection_policies_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/connectionPolicies/{connectionPolicyName} | 
[**server_connection_policies_get**](ConnectionPoliciesApi.md#server_connection_policies_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/connectionPolicies/{connectionPolicyName} | 


# **server_connection_policies_create_or_update**
> ServerConnectionPolicy server_connection_policies_create_or_update(api_version, subscription_id, resource_group_name, server_name, connection_policy_name, parameters)



Creates or updates the server's connection policy.

### Example


```python
import openapi_client
from openapi_client.models.server_connection_policy import ServerConnectionPolicy
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ConnectionPoliciesApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for the request.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    connection_policy_name = 'connection_policy_name_example' # str | The name of the connection policy.
    parameters = openapi_client.ServerConnectionPolicy() # ServerConnectionPolicy | The required parameters for updating a secure connection policy.

    try:
        api_response = api_instance.server_connection_policies_create_or_update(api_version, subscription_id, resource_group_name, server_name, connection_policy_name, parameters)
        print("The response of ConnectionPoliciesApi->server_connection_policies_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectionPoliciesApi->server_connection_policies_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the request. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **connection_policy_name** | **str**| The name of the connection policy. | 
 **parameters** | [**ServerConnectionPolicy**](ServerConnectionPolicy.md)| The required parameters for updating a secure connection policy. | 

### Return type

[**ServerConnectionPolicy**](ServerConnectionPolicy.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **server_connection_policies_get**
> ServerConnectionPolicy server_connection_policies_get(api_version, subscription_id, resource_group_name, server_name, connection_policy_name)



Gets the server's secure connection policy.

### Example


```python
import openapi_client
from openapi_client.models.server_connection_policy import ServerConnectionPolicy
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ConnectionPoliciesApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for the request.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    connection_policy_name = 'connection_policy_name_example' # str | The name of the connection policy.

    try:
        api_response = api_instance.server_connection_policies_get(api_version, subscription_id, resource_group_name, server_name, connection_policy_name)
        print("The response of ConnectionPoliciesApi->server_connection_policies_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectionPoliciesApi->server_connection_policies_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the request. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **connection_policy_name** | **str**| The name of the connection policy. | 

### Return type

[**ServerConnectionPolicy**](ServerConnectionPolicy.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

