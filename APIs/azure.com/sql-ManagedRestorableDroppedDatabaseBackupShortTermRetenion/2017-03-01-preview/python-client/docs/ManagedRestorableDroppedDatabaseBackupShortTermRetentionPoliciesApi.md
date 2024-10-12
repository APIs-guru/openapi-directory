# openapi_client.ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**managed_restorable_dropped_database_backup_short_term_retention_policies_create_or_update**](ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesApi.md#managed_restorable_dropped_database_backup_short_term_retention_policies_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/restorableDroppedDatabases/{restorableDroppedDatabaseId}/backupShortTermRetentionPolicies/{policyName} | 
[**managed_restorable_dropped_database_backup_short_term_retention_policies_get**](ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesApi.md#managed_restorable_dropped_database_backup_short_term_retention_policies_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/restorableDroppedDatabases/{restorableDroppedDatabaseId}/backupShortTermRetentionPolicies/{policyName} | 
[**managed_restorable_dropped_database_backup_short_term_retention_policies_list_by_restorable_dropped_database**](ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesApi.md#managed_restorable_dropped_database_backup_short_term_retention_policies_list_by_restorable_dropped_database) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/restorableDroppedDatabases/{restorableDroppedDatabaseId}/backupShortTermRetentionPolicies | 
[**managed_restorable_dropped_database_backup_short_term_retention_policies_update**](ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesApi.md#managed_restorable_dropped_database_backup_short_term_retention_policies_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/restorableDroppedDatabases/{restorableDroppedDatabaseId}/backupShortTermRetentionPolicies/{policyName} | 


# **managed_restorable_dropped_database_backup_short_term_retention_policies_create_or_update**
> ManagedBackupShortTermRetentionPolicy managed_restorable_dropped_database_backup_short_term_retention_policies_create_or_update(resource_group_name, managed_instance_name, restorable_dropped_database_id, policy_name, subscription_id, api_version, parameters)



Sets a database's long term retention policy.

### Example


```python
import openapi_client
from openapi_client.models.managed_backup_short_term_retention_policy import ManagedBackupShortTermRetentionPolicy
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
    api_instance = openapi_client.ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    managed_instance_name = 'managed_instance_name_example' # str | The name of the managed instance.
    restorable_dropped_database_id = 'restorable_dropped_database_id_example' # str | 
    policy_name = 'policy_name_example' # str | The policy name. Should always be \"default\".
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    parameters = openapi_client.ManagedBackupShortTermRetentionPolicy() # ManagedBackupShortTermRetentionPolicy | The long term retention policy info.

    try:
        api_response = api_instance.managed_restorable_dropped_database_backup_short_term_retention_policies_create_or_update(resource_group_name, managed_instance_name, restorable_dropped_database_id, policy_name, subscription_id, api_version, parameters)
        print("The response of ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesApi->managed_restorable_dropped_database_backup_short_term_retention_policies_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesApi->managed_restorable_dropped_database_backup_short_term_retention_policies_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **managed_instance_name** | **str**| The name of the managed instance. | 
 **restorable_dropped_database_id** | **str**|  | 
 **policy_name** | **str**| The policy name. Should always be \&quot;default\&quot;. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **parameters** | [**ManagedBackupShortTermRetentionPolicy**](ManagedBackupShortTermRetentionPolicy.md)| The long term retention policy info. | 

### Return type

[**ManagedBackupShortTermRetentionPolicy**](ManagedBackupShortTermRetentionPolicy.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the policy. |  -  |
**202** | Accepted |  -  |
**0** | *** Error Responses: ***   * 400 InvalidRestorableDroppedDatabaseDeletionDate - The restorable dropped database deletion date given is invalid   * 400 InvalidRestorableDroppedDatabaseId - Invalid restorable dropped database identifier   * 400 InvalidBackupRetentionPeriod - The retention days of {0} is not a valid configuration. Valid backup retention in days must be between {1} and {2}   * 400 InvalidBackupRetentionDays - The retention days of {0} is not a valid configuration. Valid backup retention must be in 7-day increments (7, 14, 21, etc.)   * 400 InvalidRestorableDroppedDatabaseDeletionDate - The restorable dropped database deletion date given is invalid   * 400 InvalidRestorableDroppedDatabaseId - Invalid restorable dropped database identifier   * 400 InvalidParameterValue - An invalid value was given to a parameter.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 ResourceNotFound - The requested resource was not found.   * 404 SourceDatabaseNotFound - The source database does not exist.   * 404 CannotFindObject - Cannot find the object because it does not exist or you do not have permissions   * 429 SubscriptionTooManyCreateUpdateRequests - Requests beyond max requests that can be processed by available resources.   * 429 SubscriptionTooManyRequests - Requests beyond max requests that can be processed by available resources.   * 503 TooManyRequests - Requests beyond max requests that can be processed by available resources.   * 504 RequestTimeout - Service request exceeded the allowed timeout. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **managed_restorable_dropped_database_backup_short_term_retention_policies_get**
> ManagedBackupShortTermRetentionPolicy managed_restorable_dropped_database_backup_short_term_retention_policies_get(resource_group_name, managed_instance_name, restorable_dropped_database_id, policy_name, subscription_id, api_version)



Gets a dropped database's short term retention policy.

### Example


```python
import openapi_client
from openapi_client.models.managed_backup_short_term_retention_policy import ManagedBackupShortTermRetentionPolicy
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
    api_instance = openapi_client.ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    managed_instance_name = 'managed_instance_name_example' # str | The name of the managed instance.
    restorable_dropped_database_id = 'restorable_dropped_database_id_example' # str | 
    policy_name = 'policy_name_example' # str | The policy name.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.managed_restorable_dropped_database_backup_short_term_retention_policies_get(resource_group_name, managed_instance_name, restorable_dropped_database_id, policy_name, subscription_id, api_version)
        print("The response of ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesApi->managed_restorable_dropped_database_backup_short_term_retention_policies_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesApi->managed_restorable_dropped_database_backup_short_term_retention_policies_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **managed_instance_name** | **str**| The name of the managed instance. | 
 **restorable_dropped_database_id** | **str**|  | 
 **policy_name** | **str**| The policy name. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**ManagedBackupShortTermRetentionPolicy**](ManagedBackupShortTermRetentionPolicy.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the policies. |  -  |
**0** | *** Error Responses: ***   * 400 InvalidRestorableDroppedDatabaseDeletionDate - The restorable dropped database deletion date given is invalid   * 400 InvalidRestorableDroppedDatabaseId - Invalid restorable dropped database identifier   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 ResourceNotFound - The requested resource was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **managed_restorable_dropped_database_backup_short_term_retention_policies_list_by_restorable_dropped_database**
> ManagedBackupShortTermRetentionPolicyListResult managed_restorable_dropped_database_backup_short_term_retention_policies_list_by_restorable_dropped_database(resource_group_name, managed_instance_name, restorable_dropped_database_id, subscription_id, api_version)



Gets a dropped database's short term retention policy list.

### Example


```python
import openapi_client
from openapi_client.models.managed_backup_short_term_retention_policy_list_result import ManagedBackupShortTermRetentionPolicyListResult
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
    api_instance = openapi_client.ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    managed_instance_name = 'managed_instance_name_example' # str | The name of the managed instance.
    restorable_dropped_database_id = 'restorable_dropped_database_id_example' # str | 
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.managed_restorable_dropped_database_backup_short_term_retention_policies_list_by_restorable_dropped_database(resource_group_name, managed_instance_name, restorable_dropped_database_id, subscription_id, api_version)
        print("The response of ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesApi->managed_restorable_dropped_database_backup_short_term_retention_policies_list_by_restorable_dropped_database:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesApi->managed_restorable_dropped_database_backup_short_term_retention_policies_list_by_restorable_dropped_database: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **managed_instance_name** | **str**| The name of the managed instance. | 
 **restorable_dropped_database_id** | **str**|  | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**ManagedBackupShortTermRetentionPolicyListResult**](ManagedBackupShortTermRetentionPolicyListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the policies. |  -  |
**0** | *** Error Responses: ***   * 400 InvalidRestorableDroppedDatabaseDeletionDate - The restorable dropped database deletion date given is invalid   * 400 InvalidRestorableDroppedDatabaseId - Invalid restorable dropped database identifier   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 ResourceNotFound - The requested resource was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **managed_restorable_dropped_database_backup_short_term_retention_policies_update**
> ManagedBackupShortTermRetentionPolicy managed_restorable_dropped_database_backup_short_term_retention_policies_update(resource_group_name, managed_instance_name, restorable_dropped_database_id, policy_name, subscription_id, api_version, parameters)



Sets a database's long term retention policy.

### Example


```python
import openapi_client
from openapi_client.models.managed_backup_short_term_retention_policy import ManagedBackupShortTermRetentionPolicy
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
    api_instance = openapi_client.ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    managed_instance_name = 'managed_instance_name_example' # str | The name of the managed instance.
    restorable_dropped_database_id = 'restorable_dropped_database_id_example' # str | 
    policy_name = 'policy_name_example' # str | The policy name. Should always be \"default\".
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    parameters = openapi_client.ManagedBackupShortTermRetentionPolicy() # ManagedBackupShortTermRetentionPolicy | The long term retention policy info.

    try:
        api_response = api_instance.managed_restorable_dropped_database_backup_short_term_retention_policies_update(resource_group_name, managed_instance_name, restorable_dropped_database_id, policy_name, subscription_id, api_version, parameters)
        print("The response of ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesApi->managed_restorable_dropped_database_backup_short_term_retention_policies_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesApi->managed_restorable_dropped_database_backup_short_term_retention_policies_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **managed_instance_name** | **str**| The name of the managed instance. | 
 **restorable_dropped_database_id** | **str**|  | 
 **policy_name** | **str**| The policy name. Should always be \&quot;default\&quot;. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **parameters** | [**ManagedBackupShortTermRetentionPolicy**](ManagedBackupShortTermRetentionPolicy.md)| The long term retention policy info. | 

### Return type

[**ManagedBackupShortTermRetentionPolicy**](ManagedBackupShortTermRetentionPolicy.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the policy. |  -  |
**202** | Accepted |  -  |
**0** | *** Error Responses: ***   * 400 InvalidRestorableDroppedDatabaseDeletionDate - The restorable dropped database deletion date given is invalid   * 400 InvalidRestorableDroppedDatabaseId - Invalid restorable dropped database identifier   * 400 InvalidBackupRetentionPeriod - The retention days of {0} is not a valid configuration. Valid backup retention in days must be between {1} and {2}   * 400 InvalidBackupRetentionDays - The retention days of {0} is not a valid configuration. Valid backup retention must be in 7-day increments (7, 14, 21, etc.)   * 400 InvalidRestorableDroppedDatabaseDeletionDate - The restorable dropped database deletion date given is invalid   * 400 InvalidRestorableDroppedDatabaseId - Invalid restorable dropped database identifier   * 400 InvalidParameterValue - An invalid value was given to a parameter.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 ResourceNotFound - The requested resource was not found.   * 404 SourceDatabaseNotFound - The source database does not exist.   * 404 CannotFindObject - Cannot find the object because it does not exist or you do not have permissions   * 429 SubscriptionTooManyCreateUpdateRequests - Requests beyond max requests that can be processed by available resources.   * 429 SubscriptionTooManyRequests - Requests beyond max requests that can be processed by available resources.   * 503 TooManyRequests - Requests beyond max requests that can be processed by available resources.   * 504 RequestTimeout - Service request exceeded the allowed timeout. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

