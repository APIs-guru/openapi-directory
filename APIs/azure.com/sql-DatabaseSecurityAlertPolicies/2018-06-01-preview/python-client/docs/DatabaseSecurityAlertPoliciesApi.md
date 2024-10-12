# openapi_client.DatabaseSecurityAlertPoliciesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**database_security_alert_policies_create_or_update**](DatabaseSecurityAlertPoliciesApi.md#database_security_alert_policies_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/securityAlertPolicies/{securityAlertPolicyName} | 
[**database_security_alert_policies_get**](DatabaseSecurityAlertPoliciesApi.md#database_security_alert_policies_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/securityAlertPolicies/{securityAlertPolicyName} | 
[**database_security_alert_policies_list_by_database**](DatabaseSecurityAlertPoliciesApi.md#database_security_alert_policies_list_by_database) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/securityAlertPolicies | 


# **database_security_alert_policies_create_or_update**
> DatabaseSecurityAlertPolicy database_security_alert_policies_create_or_update(resource_group_name, server_name, database_name, security_alert_policy_name, subscription_id, api_version, parameters)



Creates or updates a database's security alert policy.

### Example


```python
import openapi_client
from openapi_client.models.database_security_alert_policy import DatabaseSecurityAlertPolicy
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
    api_instance = openapi_client.DatabaseSecurityAlertPoliciesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the  server.
    database_name = 'database_name_example' # str | The name of the  database for which the security alert policy is defined.
    security_alert_policy_name = 'security_alert_policy_name_example' # str | The name of the security alert policy.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    parameters = openapi_client.DatabaseSecurityAlertPolicy() # DatabaseSecurityAlertPolicy | The database security alert policy.

    try:
        api_response = api_instance.database_security_alert_policies_create_or_update(resource_group_name, server_name, database_name, security_alert_policy_name, subscription_id, api_version, parameters)
        print("The response of DatabaseSecurityAlertPoliciesApi->database_security_alert_policies_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DatabaseSecurityAlertPoliciesApi->database_security_alert_policies_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the  server. | 
 **database_name** | **str**| The name of the  database for which the security alert policy is defined. | 
 **security_alert_policy_name** | **str**| The name of the security alert policy. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **parameters** | [**DatabaseSecurityAlertPolicy**](DatabaseSecurityAlertPolicy.md)| The database security alert policy. | 

### Return type

[**DatabaseSecurityAlertPolicy**](DatabaseSecurityAlertPolicy.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully set the  database security alert policy. |  -  |
**201** | Successfully created the  database security alert policy. |  -  |
**0** | *** Error Responses: ***   * 400 SecurityAlertPoliciesInvalidStorageAccountName - The provided storage account is not valid or does not exist.   * 400 SecurityAlertPoliciesInvalidStorageAccountCredentials - The provided storage account access key is not valid.   * 400 InvalidDatabaseSecurityAlertPolicyCreateRequest - The create database Threat Detection security alert policy request does not exist or has no properties object.   * 400 DataSecurityInvalidUserSuppliedParameter - An invalid parameter value was provided by the client.   * 400 UpsertDatabaseSecurityAlertPolicyFailed - An error has occurred while saving Threat detection settings, please try again later   * 400 UpsertDatabaseSecurityAlertPolicyFailed - An error has occurred while saving Threat detection settings, please try again later   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 DatabaseDoesNotExist - User has specified a database name that does not exist on this server instance.   * 404 UpsertDatabaseSecurityAlertPolicyFailed - An error has occurred while saving Threat detection settings, please try again later   * 409 DatabaseSecurityAlertPolicyInProgress - Set database security alert policy is already in progress   * 409 UpsertDatabaseSecurityAlertPolicyFailed - An error has occurred while saving Threat detection settings, please try again later   * 500 DatabaseIsUnavailable - Loading failed. Please try again later.   * 500 UpsertDatabaseSecurityAlertPolicyFailed - An error has occurred while saving Threat detection settings, please try again later   * 500 GetDatabaseSecurityAlertPolicyFailed - Failed to get Threat Detection settings |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_security_alert_policies_get**
> DatabaseSecurityAlertPolicy database_security_alert_policies_get(resource_group_name, server_name, database_name, security_alert_policy_name, subscription_id, api_version)



Gets a  database's security alert policy.

### Example


```python
import openapi_client
from openapi_client.models.database_security_alert_policy import DatabaseSecurityAlertPolicy
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
    api_instance = openapi_client.DatabaseSecurityAlertPoliciesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the  server.
    database_name = 'database_name_example' # str | The name of the  database for which the security alert policy is defined.
    security_alert_policy_name = 'security_alert_policy_name_example' # str | The name of the security alert policy.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.database_security_alert_policies_get(resource_group_name, server_name, database_name, security_alert_policy_name, subscription_id, api_version)
        print("The response of DatabaseSecurityAlertPoliciesApi->database_security_alert_policies_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DatabaseSecurityAlertPoliciesApi->database_security_alert_policies_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the  server. | 
 **database_name** | **str**| The name of the  database for which the security alert policy is defined. | 
 **security_alert_policy_name** | **str**| The name of the security alert policy. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**DatabaseSecurityAlertPolicy**](DatabaseSecurityAlertPolicy.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the  database security alert policy. |  -  |
**0** | *** Error Responses: ***   * 400 SecurityAlertPoliciesInvalidStorageAccountName - The provided storage account is not valid or does not exist.   * 400 SecurityAlertPoliciesInvalidStorageAccountCredentials - The provided storage account access key is not valid.   * 400 InvalidDatabaseSecurityAlertPolicyCreateRequest - The create database Threat Detection security alert policy request does not exist or has no properties object.   * 400 DataSecurityInvalidUserSuppliedParameter - An invalid parameter value was provided by the client.   * 400 UpsertDatabaseSecurityAlertPolicyFailed - An error has occurred while saving Threat detection settings, please try again later   * 400 UpsertDatabaseSecurityAlertPolicyFailed - An error has occurred while saving Threat detection settings, please try again later   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 DatabaseDoesNotExist - User has specified a database name that does not exist on this server instance.   * 404 UpsertDatabaseSecurityAlertPolicyFailed - An error has occurred while saving Threat detection settings, please try again later   * 409 DatabaseSecurityAlertPolicyInProgress - Set database security alert policy is already in progress   * 409 UpsertDatabaseSecurityAlertPolicyFailed - An error has occurred while saving Threat detection settings, please try again later   * 500 DatabaseIsUnavailable - Loading failed. Please try again later.   * 500 UpsertDatabaseSecurityAlertPolicyFailed - An error has occurred while saving Threat detection settings, please try again later   * 500 GetDatabaseSecurityAlertPolicyFailed - Failed to get Threat Detection settings |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_security_alert_policies_list_by_database**
> DatabaseSecurityAlertListResult database_security_alert_policies_list_by_database(resource_group_name, server_name, database_name, subscription_id, api_version)



Gets a list of database's security alert policies.

### Example


```python
import openapi_client
from openapi_client.models.database_security_alert_list_result import DatabaseSecurityAlertListResult
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
    api_instance = openapi_client.DatabaseSecurityAlertPoliciesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the  server.
    database_name = 'database_name_example' # str | The name of the  database for which the security alert policy is defined.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.database_security_alert_policies_list_by_database(resource_group_name, server_name, database_name, subscription_id, api_version)
        print("The response of DatabaseSecurityAlertPoliciesApi->database_security_alert_policies_list_by_database:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DatabaseSecurityAlertPoliciesApi->database_security_alert_policies_list_by_database: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the  server. | 
 **database_name** | **str**| The name of the  database for which the security alert policy is defined. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**DatabaseSecurityAlertListResult**](DatabaseSecurityAlertListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the  database security alert policy. |  -  |
**0** | *** Error Responses: ***   * 400 SecurityAlertPoliciesInvalidStorageAccountName - The provided storage account is not valid or does not exist.   * 400 SecurityAlertPoliciesInvalidStorageAccountCredentials - The provided storage account access key is not valid.   * 400 InvalidDatabaseSecurityAlertPolicyCreateRequest - The create database Threat Detection security alert policy request does not exist or has no properties object.   * 400 DataSecurityInvalidUserSuppliedParameter - An invalid parameter value was provided by the client.   * 400 UpsertDatabaseSecurityAlertPolicyFailed - An error has occurred while saving Threat detection settings, please try again later   * 400 UpsertDatabaseSecurityAlertPolicyFailed - An error has occurred while saving Threat detection settings, please try again later   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 DatabaseDoesNotExist - User has specified a database name that does not exist on this server instance.   * 404 UpsertDatabaseSecurityAlertPolicyFailed - An error has occurred while saving Threat detection settings, please try again later   * 409 DatabaseSecurityAlertPolicyInProgress - Set database security alert policy is already in progress   * 409 UpsertDatabaseSecurityAlertPolicyFailed - An error has occurred while saving Threat detection settings, please try again later   * 500 DatabaseIsUnavailable - Loading failed. Please try again later.   * 500 UpsertDatabaseSecurityAlertPolicyFailed - An error has occurred while saving Threat detection settings, please try again later   * 500 GetDatabaseSecurityAlertPolicyFailed - Failed to get Threat Detection settings |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

