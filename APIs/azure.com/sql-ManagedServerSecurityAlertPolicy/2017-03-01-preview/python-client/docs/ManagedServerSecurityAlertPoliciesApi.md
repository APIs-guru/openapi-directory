# openapi_client.ManagedServerSecurityAlertPoliciesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**managed_server_security_alert_policies_create_or_update**](ManagedServerSecurityAlertPoliciesApi.md#managed_server_security_alert_policies_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/securityAlertPolicies/{securityAlertPolicyName} | 
[**managed_server_security_alert_policies_get**](ManagedServerSecurityAlertPoliciesApi.md#managed_server_security_alert_policies_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/securityAlertPolicies/{securityAlertPolicyName} | 
[**managed_server_security_alert_policies_list_by_instance**](ManagedServerSecurityAlertPoliciesApi.md#managed_server_security_alert_policies_list_by_instance) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/securityAlertPolicies | 


# **managed_server_security_alert_policies_create_or_update**
> ManagedServerSecurityAlertPolicy managed_server_security_alert_policies_create_or_update(resource_group_name, managed_instance_name, security_alert_policy_name, subscription_id, api_version, parameters)



Creates or updates a threat detection policy.

### Example


```python
import openapi_client
from openapi_client.models.managed_server_security_alert_policy import ManagedServerSecurityAlertPolicy
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
    api_instance = openapi_client.ManagedServerSecurityAlertPoliciesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    managed_instance_name = 'managed_instance_name_example' # str | The name of the managed instance.
    security_alert_policy_name = 'security_alert_policy_name_example' # str | The name of the security alert policy.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    parameters = openapi_client.ManagedServerSecurityAlertPolicy() # ManagedServerSecurityAlertPolicy | The managed server security alert policy.

    try:
        api_response = api_instance.managed_server_security_alert_policies_create_or_update(resource_group_name, managed_instance_name, security_alert_policy_name, subscription_id, api_version, parameters)
        print("The response of ManagedServerSecurityAlertPoliciesApi->managed_server_security_alert_policies_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedServerSecurityAlertPoliciesApi->managed_server_security_alert_policies_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **managed_instance_name** | **str**| The name of the managed instance. | 
 **security_alert_policy_name** | **str**| The name of the security alert policy. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **parameters** | [**ManagedServerSecurityAlertPolicy**](ManagedServerSecurityAlertPolicy.md)| The managed server security alert policy. | 

### Return type

[**ManagedServerSecurityAlertPolicy**](ManagedServerSecurityAlertPolicy.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the threat detection policy. |  -  |
**202** | Created request to set the server threat detection policy. |  -  |
**0** | *** Error Responses: ***   * 400 SecurityAlertPoliciesInvalidStorageAccountName - The provided storage account is not valid or does not exist.   * 400 SecurityAlertPoliciesInvalidStorageAccountCredentials - The provided storage account access key is not valid.   * 400 InvalidServerSecurityAlertPolicyCreateRequest - The create server Threat Detection security alert policy request does not exist or has no properties object.   * 400 DataSecurityInvalidUserSuppliedParameter - An invalid parameter value was provided by the client.   * 400 UpsertServerSecurityAlertPolicyFailed - An error has occurred while saving Threat detection settings, please try again later   * 400 UpsertServerSecurityAlertPolicyFailed - An error has occurred while saving Threat detection settings, please try again later   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 UpsertServerSecurityAlertPolicyFailed - An error has occurred while saving Threat detection settings, please try again later   * 409 ServerSecurityAlertPolicyInProgress - Set server security alert policy is already in progress   * 409 UpsertServerSecurityAlertPolicyFailed - An error has occurred while saving Threat detection settings, please try again later   * 500 DatabaseIsUnavailable - Loading failed. Please try again later.   * 500 UpsertServerSecurityAlertPolicyFailed - An error has occurred while saving Threat detection settings, please try again later   * 500 UpsertServerSecurityAlertPolicyFailed - An error has occurred while saving Threat detection settings, please try again later |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **managed_server_security_alert_policies_get**
> ManagedServerSecurityAlertPolicy managed_server_security_alert_policies_get(resource_group_name, managed_instance_name, security_alert_policy_name, subscription_id, api_version)



Get a managed server's threat detection policy.

### Example


```python
import openapi_client
from openapi_client.models.managed_server_security_alert_policy import ManagedServerSecurityAlertPolicy
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
    api_instance = openapi_client.ManagedServerSecurityAlertPoliciesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    managed_instance_name = 'managed_instance_name_example' # str | The name of the managed instance.
    security_alert_policy_name = 'security_alert_policy_name_example' # str | The name of the security alert policy.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.managed_server_security_alert_policies_get(resource_group_name, managed_instance_name, security_alert_policy_name, subscription_id, api_version)
        print("The response of ManagedServerSecurityAlertPoliciesApi->managed_server_security_alert_policies_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedServerSecurityAlertPoliciesApi->managed_server_security_alert_policies_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **managed_instance_name** | **str**| The name of the managed instance. | 
 **security_alert_policy_name** | **str**| The name of the security alert policy. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**ManagedServerSecurityAlertPolicy**](ManagedServerSecurityAlertPolicy.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the managed server threat detection policy. |  -  |
**0** | *** Error Responses: ***   * 400 SecurityAlertPoliciesInvalidStorageAccountName - The provided storage account is not valid or does not exist.   * 400 SecurityAlertPoliciesInvalidStorageAccountCredentials - The provided storage account access key is not valid.   * 400 InvalidServerSecurityAlertPolicyCreateRequest - The create server Threat Detection security alert policy request does not exist or has no properties object.   * 400 DataSecurityInvalidUserSuppliedParameter - An invalid parameter value was provided by the client.   * 400 UpsertServerSecurityAlertPolicyFailed - An error has occurred while saving Threat detection settings, please try again later   * 400 UpsertServerSecurityAlertPolicyFailed - An error has occurred while saving Threat detection settings, please try again later   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 UpsertServerSecurityAlertPolicyFailed - An error has occurred while saving Threat detection settings, please try again later   * 409 ServerSecurityAlertPolicyInProgress - Set server security alert policy is already in progress   * 409 UpsertServerSecurityAlertPolicyFailed - An error has occurred while saving Threat detection settings, please try again later   * 500 DatabaseIsUnavailable - Loading failed. Please try again later.   * 500 UpsertServerSecurityAlertPolicyFailed - An error has occurred while saving Threat detection settings, please try again later   * 500 GetServerSecurityAlertPolicyFailed - Failed to get Threat Detection settings |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **managed_server_security_alert_policies_list_by_instance**
> ManagedServerSecurityAlertPolicyListResult managed_server_security_alert_policies_list_by_instance(resource_group_name, managed_instance_name, subscription_id, api_version)



Get the managed server's threat detection policies.

### Example


```python
import openapi_client
from openapi_client.models.managed_server_security_alert_policy_list_result import ManagedServerSecurityAlertPolicyListResult
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
    api_instance = openapi_client.ManagedServerSecurityAlertPoliciesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    managed_instance_name = 'managed_instance_name_example' # str | The name of the managed instance.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.managed_server_security_alert_policies_list_by_instance(resource_group_name, managed_instance_name, subscription_id, api_version)
        print("The response of ManagedServerSecurityAlertPoliciesApi->managed_server_security_alert_policies_list_by_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedServerSecurityAlertPoliciesApi->managed_server_security_alert_policies_list_by_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **managed_instance_name** | **str**| The name of the managed instance. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**ManagedServerSecurityAlertPolicyListResult**](ManagedServerSecurityAlertPolicyListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the managed server threat detection policies. |  -  |
**0** | *** Error Responses: ***   * 400 SecurityAlertPoliciesInvalidStorageAccountName - The provided storage account is not valid or does not exist.   * 400 SecurityAlertPoliciesInvalidStorageAccountCredentials - The provided storage account access key is not valid.   * 400 InvalidServerSecurityAlertPolicyCreateRequest - The create server Threat Detection security alert policy request does not exist or has no properties object.   * 400 DataSecurityInvalidUserSuppliedParameter - An invalid parameter value was provided by the client.   * 400 UpsertServerSecurityAlertPolicyFailed - An error has occurred while saving Threat detection settings, please try again later   * 400 UpsertServerSecurityAlertPolicyFailed - An error has occurred while saving Threat detection settings, please try again later   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 UpsertServerSecurityAlertPolicyFailed - An error has occurred while saving Threat detection settings, please try again later   * 409 ServerSecurityAlertPolicyInProgress - Set server security alert policy is already in progress   * 409 UpsertServerSecurityAlertPolicyFailed - An error has occurred while saving Threat detection settings, please try again later   * 500 DatabaseIsUnavailable - Loading failed. Please try again later.   * 500 UpsertServerSecurityAlertPolicyFailed - An error has occurred while saving Threat detection settings, please try again later   * 500 GetServerSecurityAlertPolicyFailed - Failed to get Threat Detection settings |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

