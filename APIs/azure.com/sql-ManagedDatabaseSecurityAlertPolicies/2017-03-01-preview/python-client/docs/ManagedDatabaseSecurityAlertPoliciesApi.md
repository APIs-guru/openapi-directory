# openapi_client.ManagedDatabaseSecurityAlertPoliciesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**managed_database_security_alert_policies_create_or_update**](ManagedDatabaseSecurityAlertPoliciesApi.md#managed_database_security_alert_policies_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/securityAlertPolicies/{securityAlertPolicyName} | 
[**managed_database_security_alert_policies_get**](ManagedDatabaseSecurityAlertPoliciesApi.md#managed_database_security_alert_policies_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/securityAlertPolicies/{securityAlertPolicyName} | 
[**managed_database_security_alert_policies_list_by_database**](ManagedDatabaseSecurityAlertPoliciesApi.md#managed_database_security_alert_policies_list_by_database) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/securityAlertPolicies | 


# **managed_database_security_alert_policies_create_or_update**
> ManagedDatabaseSecurityAlertPolicy managed_database_security_alert_policies_create_or_update(resource_group_name, managed_instance_name, database_name, security_alert_policy_name, subscription_id, api_version, parameters)



Creates or updates a database's security alert policy.

### Example


```python
import openapi_client
from openapi_client.models.managed_database_security_alert_policy import ManagedDatabaseSecurityAlertPolicy
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
    api_instance = openapi_client.ManagedDatabaseSecurityAlertPoliciesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    managed_instance_name = 'managed_instance_name_example' # str | The name of the managed instance.
    database_name = 'database_name_example' # str | The name of the managed database for which the security alert policy is defined.
    security_alert_policy_name = 'security_alert_policy_name_example' # str | The name of the security alert policy.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    parameters = openapi_client.ManagedDatabaseSecurityAlertPolicy() # ManagedDatabaseSecurityAlertPolicy | The database security alert policy.

    try:
        api_response = api_instance.managed_database_security_alert_policies_create_or_update(resource_group_name, managed_instance_name, database_name, security_alert_policy_name, subscription_id, api_version, parameters)
        print("The response of ManagedDatabaseSecurityAlertPoliciesApi->managed_database_security_alert_policies_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedDatabaseSecurityAlertPoliciesApi->managed_database_security_alert_policies_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **managed_instance_name** | **str**| The name of the managed instance. | 
 **database_name** | **str**| The name of the managed database for which the security alert policy is defined. | 
 **security_alert_policy_name** | **str**| The name of the security alert policy. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **parameters** | [**ManagedDatabaseSecurityAlertPolicy**](ManagedDatabaseSecurityAlertPolicy.md)| The database security alert policy. | 

### Return type

[**ManagedDatabaseSecurityAlertPolicy**](ManagedDatabaseSecurityAlertPolicy.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully set the managed database security alert policy. |  -  |
**201** | Successfully created the managed database security alert policy. |  -  |
**0** | *** Error Responses: *** |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **managed_database_security_alert_policies_get**
> ManagedDatabaseSecurityAlertPolicy managed_database_security_alert_policies_get(resource_group_name, managed_instance_name, database_name, security_alert_policy_name, subscription_id, api_version)



Gets a managed database's security alert policy.

### Example


```python
import openapi_client
from openapi_client.models.managed_database_security_alert_policy import ManagedDatabaseSecurityAlertPolicy
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
    api_instance = openapi_client.ManagedDatabaseSecurityAlertPoliciesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    managed_instance_name = 'managed_instance_name_example' # str | The name of the managed instance.
    database_name = 'database_name_example' # str | The name of the managed database for which the security alert policy is defined.
    security_alert_policy_name = 'security_alert_policy_name_example' # str | The name of the security alert policy.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.managed_database_security_alert_policies_get(resource_group_name, managed_instance_name, database_name, security_alert_policy_name, subscription_id, api_version)
        print("The response of ManagedDatabaseSecurityAlertPoliciesApi->managed_database_security_alert_policies_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedDatabaseSecurityAlertPoliciesApi->managed_database_security_alert_policies_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **managed_instance_name** | **str**| The name of the managed instance. | 
 **database_name** | **str**| The name of the managed database for which the security alert policy is defined. | 
 **security_alert_policy_name** | **str**| The name of the security alert policy. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**ManagedDatabaseSecurityAlertPolicy**](ManagedDatabaseSecurityAlertPolicy.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the managed database security alert policy. |  -  |
**0** | *** Error Responses: ***   * 400 SecurityAlertPoliciesInvalidStorageAccountName - The provided storage account is not valid or does not exist.   * 400 SecurityAlertPoliciesInvalidStorageAccountCredentials - The provided storage account access key is not valid.   * 400 InvalidServerSecurityAlertPolicyCreateRequest - The create server Threat Detection security alert policy request does not exist or has no properties object.   * 400 DataSecurityInvalidUserSuppliedParameter - An invalid parameter value was provided by the client.   * 400 UpsertServerSecurityAlertPolicyFailed - An error has occurred while saving Threat detection settings, please try again later   * 400 UpsertServerSecurityAlertPolicyFailed - An error has occurred while saving Threat detection settings, please try again later   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 UpsertServerSecurityAlertPolicyFailed - An error has occurred while saving Threat detection settings, please try again later   * 409 ServerSecurityAlertPolicyInProgress - Set server security alert policy is already in progress   * 409 UpsertServerSecurityAlertPolicyFailed - An error has occurred while saving Threat detection settings, please try again later   * 500 DatabaseIsUnavailable - Loading failed. Please try again later.   * 500 UpsertServerSecurityAlertPolicyFailed - An error has occurred while saving Threat detection settings, please try again later   * 500 GetServerSecurityAlertPolicyFailed - Failed to get Threat Detection settings |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **managed_database_security_alert_policies_list_by_database**
> ManagedDatabaseSecurityAlertPolicyListResult managed_database_security_alert_policies_list_by_database(resource_group_name, managed_instance_name, database_name, subscription_id, api_version)



Gets a list of managed database's security alert policies.

### Example


```python
import openapi_client
from openapi_client.models.managed_database_security_alert_policy_list_result import ManagedDatabaseSecurityAlertPolicyListResult
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
    api_instance = openapi_client.ManagedDatabaseSecurityAlertPoliciesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    managed_instance_name = 'managed_instance_name_example' # str | The name of the managed instance.
    database_name = 'database_name_example' # str | The name of the managed database for which the security alert policies are defined.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.managed_database_security_alert_policies_list_by_database(resource_group_name, managed_instance_name, database_name, subscription_id, api_version)
        print("The response of ManagedDatabaseSecurityAlertPoliciesApi->managed_database_security_alert_policies_list_by_database:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedDatabaseSecurityAlertPoliciesApi->managed_database_security_alert_policies_list_by_database: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **managed_instance_name** | **str**| The name of the managed instance. | 
 **database_name** | **str**| The name of the managed database for which the security alert policies are defined. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**ManagedDatabaseSecurityAlertPolicyListResult**](ManagedDatabaseSecurityAlertPolicyListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the managed database security alert policies. |  -  |
**0** | *** Error Responses: ***   * 400 SecurityAlertPoliciesInvalidStorageAccountName - The provided storage account is not valid or does not exist.   * 400 SecurityAlertPoliciesInvalidStorageAccountCredentials - The provided storage account access key is not valid.   * 400 InvalidServerSecurityAlertPolicyCreateRequest - The create server Threat Detection security alert policy request does not exist or has no properties object.   * 400 DataSecurityInvalidUserSuppliedParameter - An invalid parameter value was provided by the client.   * 400 UpsertServerSecurityAlertPolicyFailed - An error has occurred while saving Threat detection settings, please try again later   * 400 UpsertServerSecurityAlertPolicyFailed - An error has occurred while saving Threat detection settings, please try again later   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 UpsertServerSecurityAlertPolicyFailed - An error has occurred while saving Threat detection settings, please try again later   * 409 ServerSecurityAlertPolicyInProgress - Set server security alert policy is already in progress   * 409 UpsertServerSecurityAlertPolicyFailed - An error has occurred while saving Threat detection settings, please try again later   * 500 DatabaseIsUnavailable - Loading failed. Please try again later.   * 500 UpsertServerSecurityAlertPolicyFailed - An error has occurred while saving Threat detection settings, please try again later   * 500 GetServerSecurityAlertPolicyFailed - Failed to get Threat Detection settings |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

