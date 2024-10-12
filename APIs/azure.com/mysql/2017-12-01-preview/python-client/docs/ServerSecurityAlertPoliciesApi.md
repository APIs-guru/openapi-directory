# openapi_client.ServerSecurityAlertPoliciesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**server_security_alert_policies_create_or_update**](ServerSecurityAlertPoliciesApi.md#server_security_alert_policies_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/servers/{serverName}/securityAlertPolicies/{securityAlertPolicyName} | 
[**server_security_alert_policies_get**](ServerSecurityAlertPoliciesApi.md#server_security_alert_policies_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/servers/{serverName}/securityAlertPolicies/{securityAlertPolicyName} | 


# **server_security_alert_policies_create_or_update**
> ServerSecurityAlertPolicy server_security_alert_policies_create_or_update(resource_group_name, server_name, security_alert_policy_name, subscription_id, api_version, parameters)



Creates or updates a threat detection policy.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.server_security_alert_policy import ServerSecurityAlertPolicy
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
    api_instance = openapi_client.ServerSecurityAlertPoliciesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    security_alert_policy_name = 'security_alert_policy_name_example' # str | The name of the threat detection policy.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    parameters = openapi_client.ServerSecurityAlertPolicy() # ServerSecurityAlertPolicy | The server security alert policy.

    try:
        api_response = api_instance.server_security_alert_policies_create_or_update(resource_group_name, server_name, security_alert_policy_name, subscription_id, api_version, parameters)
        print("The response of ServerSecurityAlertPoliciesApi->server_security_alert_policies_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServerSecurityAlertPoliciesApi->server_security_alert_policies_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **security_alert_policy_name** | **str**| The name of the threat detection policy. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **parameters** | [**ServerSecurityAlertPolicy**](ServerSecurityAlertPolicy.md)| The server security alert policy. | 

### Return type

[**ServerSecurityAlertPolicy**](ServerSecurityAlertPolicy.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the threat detection policy. |  -  |
**202** | Created request to set the server threat detection policy. |  -  |
**0** | Error response describing why the operation of setting security alert policies failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **server_security_alert_policies_get**
> ServerSecurityAlertPolicy server_security_alert_policies_get(resource_group_name, server_name, security_alert_policy_name, subscription_id, api_version)



Get a server's security alert policy.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.server_security_alert_policy import ServerSecurityAlertPolicy
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
    api_instance = openapi_client.ServerSecurityAlertPoliciesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    security_alert_policy_name = 'security_alert_policy_name_example' # str | The name of the security alert policy.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.server_security_alert_policies_get(resource_group_name, server_name, security_alert_policy_name, subscription_id, api_version)
        print("The response of ServerSecurityAlertPoliciesApi->server_security_alert_policies_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServerSecurityAlertPoliciesApi->server_security_alert_policies_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **security_alert_policy_name** | **str**| The name of the security alert policy. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**ServerSecurityAlertPolicy**](ServerSecurityAlertPolicy.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the server threat detection policy. |  -  |
**0** | Error response describing why the operation of getting security alert policies failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

