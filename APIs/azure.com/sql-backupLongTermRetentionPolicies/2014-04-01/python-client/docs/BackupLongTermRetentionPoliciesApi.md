# openapi_client.BackupLongTermRetentionPoliciesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**backup_long_term_retention_policies_create_or_update**](BackupLongTermRetentionPoliciesApi.md#backup_long_term_retention_policies_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/backupLongTermRetentionPolicies/{backupLongTermRetentionPolicyName} | 
[**backup_long_term_retention_policies_get**](BackupLongTermRetentionPoliciesApi.md#backup_long_term_retention_policies_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/backupLongTermRetentionPolicies/{backupLongTermRetentionPolicyName} | 
[**backup_long_term_retention_policies_list_by_database**](BackupLongTermRetentionPoliciesApi.md#backup_long_term_retention_policies_list_by_database) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/backupLongTermRetentionPolicies | 


# **backup_long_term_retention_policies_create_or_update**
> BackupLongTermRetentionPolicy backup_long_term_retention_policies_create_or_update(api_version, subscription_id, resource_group_name, server_name, database_name, backup_long_term_retention_policy_name, parameters)



Creates or updates a database backup long term retention policy

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
    api_version = 'api_version_example' # str | The API version to use for the request.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    database_name = 'database_name_example' # str | The name of the database
    backup_long_term_retention_policy_name = 'backup_long_term_retention_policy_name_example' # str | The name of the backup long term retention policy
    parameters = openapi_client.BackupLongTermRetentionPolicy() # BackupLongTermRetentionPolicy | The required parameters to update a backup long term retention policy

    try:
        api_response = api_instance.backup_long_term_retention_policies_create_or_update(api_version, subscription_id, resource_group_name, server_name, database_name, backup_long_term_retention_policy_name, parameters)
        print("The response of BackupLongTermRetentionPoliciesApi->backup_long_term_retention_policies_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BackupLongTermRetentionPoliciesApi->backup_long_term_retention_policies_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the request. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of the database | 
 **backup_long_term_retention_policy_name** | **str**| The name of the backup long term retention policy | 
 **parameters** | [**BackupLongTermRetentionPolicy**](BackupLongTermRetentionPolicy.md)| The required parameters to update a backup long term retention policy | 

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
**200** | OK |  -  |
**201** | Created |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **backup_long_term_retention_policies_get**
> BackupLongTermRetentionPolicy backup_long_term_retention_policies_get(api_version, subscription_id, resource_group_name, server_name, database_name, backup_long_term_retention_policy_name)



Returns a database backup long term retention policy

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
    api_version = 'api_version_example' # str | The API version to use for the request.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    database_name = 'database_name_example' # str | The name of the database.
    backup_long_term_retention_policy_name = 'backup_long_term_retention_policy_name_example' # str | The name of the backup long term retention policy

    try:
        api_response = api_instance.backup_long_term_retention_policies_get(api_version, subscription_id, resource_group_name, server_name, database_name, backup_long_term_retention_policy_name)
        print("The response of BackupLongTermRetentionPoliciesApi->backup_long_term_retention_policies_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BackupLongTermRetentionPoliciesApi->backup_long_term_retention_policies_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the request. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of the database. | 
 **backup_long_term_retention_policy_name** | **str**| The name of the backup long term retention policy | 

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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **backup_long_term_retention_policies_list_by_database**
> BackupLongTermRetentionPolicyListResult backup_long_term_retention_policies_list_by_database(api_version, subscription_id, resource_group_name, server_name, database_name)



Returns a database backup long term retention policy

### Example


```python
import openapi_client
from openapi_client.models.backup_long_term_retention_policy_list_result import BackupLongTermRetentionPolicyListResult
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
    api_version = 'api_version_example' # str | The API version to use for the request.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    database_name = 'database_name_example' # str | The name of the database.

    try:
        api_response = api_instance.backup_long_term_retention_policies_list_by_database(api_version, subscription_id, resource_group_name, server_name, database_name)
        print("The response of BackupLongTermRetentionPoliciesApi->backup_long_term_retention_policies_list_by_database:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BackupLongTermRetentionPoliciesApi->backup_long_term_retention_policies_list_by_database: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the request. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of the database. | 

### Return type

[**BackupLongTermRetentionPolicyListResult**](BackupLongTermRetentionPolicyListResult.md)

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

