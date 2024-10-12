# openapi_client.BackupLongTermRetentionPoliciesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**backup_long_term_retention_policies_create_or_update**](BackupLongTermRetentionPoliciesApi.md#backup_long_term_retention_policies_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/backupLongTermRetentionPolicies/{policyName} | 
[**backup_long_term_retention_policies_get**](BackupLongTermRetentionPoliciesApi.md#backup_long_term_retention_policies_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/backupLongTermRetentionPolicies/{policyName} | 
[**backup_long_term_retention_policies_list_by_database**](BackupLongTermRetentionPoliciesApi.md#backup_long_term_retention_policies_list_by_database) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/backupLongTermRetentionPolicies | 


# **backup_long_term_retention_policies_create_or_update**
> BackupLongTermRetentionPolicy backup_long_term_retention_policies_create_or_update(resource_group_name, server_name, database_name, policy_name, subscription_id, api_version, parameters)



Sets a database's long term retention policy.

### Example


```python
import openapi_client
from openapi_client.models.backup_long_term_retention_policy import BackupLongTermRetentionPolicy
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
    api_instance = openapi_client.BackupLongTermRetentionPoliciesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    database_name = 'database_name_example' # str | The name of the database.
    policy_name = 'policy_name_example' # str | The policy name. Should always be Default.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    parameters = openapi_client.BackupLongTermRetentionPolicy() # BackupLongTermRetentionPolicy | The long term retention policy info.

    try:
        api_response = api_instance.backup_long_term_retention_policies_create_or_update(resource_group_name, server_name, database_name, policy_name, subscription_id, api_version, parameters)
        print("The response of BackupLongTermRetentionPoliciesApi->backup_long_term_retention_policies_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BackupLongTermRetentionPoliciesApi->backup_long_term_retention_policies_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of the database. | 
 **policy_name** | **str**| The policy name. Should always be Default. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **parameters** | [**BackupLongTermRetentionPolicy**](BackupLongTermRetentionPolicy.md)| The long term retention policy info. | 

### Return type

[**BackupLongTermRetentionPolicy**](BackupLongTermRetentionPolicy.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully set the policy. |  -  |
**202** | Accepted |  -  |
**0** | *** Error Responses: ***   * 400 InvalidParameterValue - An invalid value was given to a parameter.   * 400 LongTermRetentionPolicyNotSupported - Long Term Retention is not supported on this database.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 ResourceNotFound - The requested resource was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **backup_long_term_retention_policies_get**
> BackupLongTermRetentionPolicy backup_long_term_retention_policies_get(resource_group_name, server_name, database_name, policy_name, subscription_id, api_version)



Gets a database's long term retention policy.

### Example


```python
import openapi_client
from openapi_client.models.backup_long_term_retention_policy import BackupLongTermRetentionPolicy
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
    api_instance = openapi_client.BackupLongTermRetentionPoliciesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    database_name = 'database_name_example' # str | The name of the database.
    policy_name = 'policy_name_example' # str | The policy name. Should always be Default.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.backup_long_term_retention_policies_get(resource_group_name, server_name, database_name, policy_name, subscription_id, api_version)
        print("The response of BackupLongTermRetentionPoliciesApi->backup_long_term_retention_policies_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BackupLongTermRetentionPoliciesApi->backup_long_term_retention_policies_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of the database. | 
 **policy_name** | **str**| The policy name. Should always be Default. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**BackupLongTermRetentionPolicy**](BackupLongTermRetentionPolicy.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully get the policy. |  -  |
**0** | *** Error Responses: ***   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 ResourceNotFound - The requested resource was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **backup_long_term_retention_policies_list_by_database**
> BackupLongTermRetentionPolicy backup_long_term_retention_policies_list_by_database(resource_group_name, server_name, database_name, subscription_id, api_version)



Gets a database's long term retention policy.

### Example


```python
import openapi_client
from openapi_client.models.backup_long_term_retention_policy import BackupLongTermRetentionPolicy
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
    api_instance = openapi_client.BackupLongTermRetentionPoliciesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    database_name = 'database_name_example' # str | The name of the database.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.backup_long_term_retention_policies_list_by_database(resource_group_name, server_name, database_name, subscription_id, api_version)
        print("The response of BackupLongTermRetentionPoliciesApi->backup_long_term_retention_policies_list_by_database:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BackupLongTermRetentionPoliciesApi->backup_long_term_retention_policies_list_by_database: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of the database. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**BackupLongTermRetentionPolicy**](BackupLongTermRetentionPolicy.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully get the policy. |  -  |
**0** | *** Error Responses: ***   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 ResourceNotFound - The requested resource was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

