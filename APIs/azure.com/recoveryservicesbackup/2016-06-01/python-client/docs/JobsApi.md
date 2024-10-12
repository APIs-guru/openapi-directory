# openapi_client.JobsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**jobs_export**](JobsApi.md#jobs_export) | **POST** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupJobsExport | 
[**jobs_list**](JobsApi.md#jobs_list) | **GET** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupJobs | 


# **jobs_export**
> jobs_export(api_version, vault_name, resource_group_name, subscription_id, filter=filter)



Exports all jobs for a given Shared Access Signatures (SAS) URL. The SAS URL expires within 15 minutes of its creation.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
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
    api_instance = openapi_client.JobsApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    vault_name = 'vault_name_example' # str | The name of the Recovery Services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group associated with the Recovery Services vault.
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    filter = 'filter_example' # str | The OData filter options. status eq { InProgress , Completed , Failed , CompletedWithWarnings , Cancelled , Cancelling } and backupManagementType eq {AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql } and operation eq { ConfigureBackup , Backup , Restore , DisableBackup , DeleteBackupData } and jobId eq {guid} and startTime eq { yyyy-mm-dd hh:mm:ss PM } and endTime eq { yyyy-mm-dd hh:mm:ss PM }. (optional)

    try:
        api_instance.jobs_export(api_version, vault_name, resource_group_name, subscription_id, filter=filter)
    except Exception as e:
        print("Exception when calling JobsApi->jobs_export: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **vault_name** | **str**| The name of the Recovery Services vault. | 
 **resource_group_name** | **str**| The name of the resource group associated with the Recovery Services vault. | 
 **subscription_id** | **str**| The subscription ID. | 
 **filter** | **str**| The OData filter options. status eq { InProgress , Completed , Failed , CompletedWithWarnings , Cancelled , Cancelling } and backupManagementType eq {AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql } and operation eq { ConfigureBackup , Backup , Restore , DisableBackup , DeleteBackupData } and jobId eq {guid} and startTime eq { yyyy-mm-dd hh:mm:ss PM } and endTime eq { yyyy-mm-dd hh:mm:ss PM }. | [optional] 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Accepted. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jobs_list**
> JobResourceList jobs_list(api_version, vault_name, resource_group_name, subscription_id, filter=filter, skip_token=skip_token)



Provides a pageable list of jobs.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.job_resource_list import JobResourceList
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
    api_instance = openapi_client.JobsApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    vault_name = 'vault_name_example' # str | The name of the Recovery Services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group associated with the Recovery Services vault.
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    filter = 'filter_example' # str | The following equation can be used to filter the list of jobs based on status, type, start date, and end date. status eq { InProgress , Completed , Failed , CompletedWithWarnings , Cancelled , Cancelling } and backupManagementType eq {AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql } and operation eq { ConfigureBackup , Backup , Restore , DisableBackup , DeleteBackupData } and jobId eq {guid} and startTime eq { yyyy-mm-dd hh:mm:ss PM } and endTime eq { yyyy-mm-dd hh:mm:ss PM }. (optional)
    skip_token = 'skip_token_example' # str | The Skip Token filter. (optional)

    try:
        api_response = api_instance.jobs_list(api_version, vault_name, resource_group_name, subscription_id, filter=filter, skip_token=skip_token)
        print("The response of JobsApi->jobs_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobsApi->jobs_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **vault_name** | **str**| The name of the Recovery Services vault. | 
 **resource_group_name** | **str**| The name of the resource group associated with the Recovery Services vault. | 
 **subscription_id** | **str**| The subscription ID. | 
 **filter** | **str**| The following equation can be used to filter the list of jobs based on status, type, start date, and end date. status eq { InProgress , Completed , Failed , CompletedWithWarnings , Cancelled , Cancelling } and backupManagementType eq {AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql } and operation eq { ConfigureBackup , Backup , Restore , DisableBackup , DeleteBackupData } and jobId eq {guid} and startTime eq { yyyy-mm-dd hh:mm:ss PM } and endTime eq { yyyy-mm-dd hh:mm:ss PM }. | [optional] 
 **skip_token** | **str**| The Skip Token filter. | [optional] 

### Return type

[**JobResourceList**](JobResourceList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

