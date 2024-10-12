# openapi_client.BackupRestoreApi

All URIs are relative to *http://azure.local:19080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**backup_partition**](BackupRestoreApi.md#backup_partition) | **POST** /Partitions/{partitionId}/$/Backup | Triggers backup of the partition&#39;s state.
[**create_backup_policy**](BackupRestoreApi.md#create_backup_policy) | **POST** /BackupRestore/BackupPolicies/$/Create | Creates a backup policy.
[**delete_backup_policy**](BackupRestoreApi.md#delete_backup_policy) | **POST** /BackupRestore/BackupPolicies/{backupPolicyName}/$/Delete | Deletes the backup policy.
[**disable_application_backup**](BackupRestoreApi.md#disable_application_backup) | **POST** /Applications/{applicationId}/$/DisableBackup | Disables periodic backup of Service Fabric application.
[**disable_partition_backup**](BackupRestoreApi.md#disable_partition_backup) | **POST** /Partitions/{partitionId}/$/DisableBackup | Disables periodic backup of Service Fabric partition which was previously enabled.
[**disable_service_backup**](BackupRestoreApi.md#disable_service_backup) | **POST** /Services/{serviceId}/$/DisableBackup | Disables periodic backup of Service Fabric service which was previously enabled.
[**enable_application_backup**](BackupRestoreApi.md#enable_application_backup) | **POST** /Applications/{applicationId}/$/EnableBackup | Enables periodic backup of stateful partitions under this Service Fabric application.
[**enable_partition_backup**](BackupRestoreApi.md#enable_partition_backup) | **POST** /Partitions/{partitionId}/$/EnableBackup | Enables periodic backup of the stateful persisted partition.
[**enable_service_backup**](BackupRestoreApi.md#enable_service_backup) | **POST** /Services/{serviceId}/$/EnableBackup | Enables periodic backup of stateful partitions under this Service Fabric service.
[**get_all_entities_backed_up_by_policy**](BackupRestoreApi.md#get_all_entities_backed_up_by_policy) | **GET** /BackupRestore/BackupPolicies/{backupPolicyName}/$/GetBackupEnabledEntities | Gets the list of backup entities that are associated with this policy.
[**get_application_backup_configuration_info**](BackupRestoreApi.md#get_application_backup_configuration_info) | **GET** /Applications/{applicationId}/$/GetBackupConfigurationInfo | Gets the Service Fabric application backup configuration information.
[**get_application_backup_list**](BackupRestoreApi.md#get_application_backup_list) | **GET** /Applications/{applicationId}/$/GetBackups | Gets the list of backups available for every partition in this application.
[**get_backup_policy_by_name**](BackupRestoreApi.md#get_backup_policy_by_name) | **GET** /BackupRestore/BackupPolicies/{backupPolicyName} | Gets a particular backup policy by name.
[**get_backup_policy_list**](BackupRestoreApi.md#get_backup_policy_list) | **GET** /BackupRestore/BackupPolicies | Gets all the backup policies configured.
[**get_backups_from_backup_location**](BackupRestoreApi.md#get_backups_from_backup_location) | **POST** /BackupRestore/$/GetBackups | Gets the list of backups available for the specified backed up entity at the specified backup location.
[**get_partition_backup_configuration_info**](BackupRestoreApi.md#get_partition_backup_configuration_info) | **GET** /Partitions/{partitionId}/$/GetBackupConfigurationInfo | Gets the partition backup configuration information
[**get_partition_backup_list**](BackupRestoreApi.md#get_partition_backup_list) | **GET** /Partitions/{partitionId}/$/GetBackups | Gets the list of backups available for the specified partition.
[**get_partition_backup_progress**](BackupRestoreApi.md#get_partition_backup_progress) | **GET** /Partitions/{partitionId}/$/GetBackupProgress | Gets details for the latest backup triggered for this partition.
[**get_partition_restore_progress**](BackupRestoreApi.md#get_partition_restore_progress) | **GET** /Partitions/{partitionId}/$/GetRestoreProgress | Gets details for the latest restore operation triggered for this partition.
[**get_service_backup_configuration_info**](BackupRestoreApi.md#get_service_backup_configuration_info) | **GET** /Services/{serviceId}/$/GetBackupConfigurationInfo | Gets the Service Fabric service backup configuration information.
[**get_service_backup_list**](BackupRestoreApi.md#get_service_backup_list) | **GET** /Services/{serviceId}/$/GetBackups | Gets the list of backups available for every partition in this service.
[**restore_partition**](BackupRestoreApi.md#restore_partition) | **POST** /Partitions/{partitionId}/$/Restore | Triggers restore of the state of the partition using the specified restore partition description.
[**resume_application_backup**](BackupRestoreApi.md#resume_application_backup) | **POST** /Applications/{applicationId}/$/ResumeBackup | Resumes periodic backup of a Service Fabric application which was previously suspended.
[**resume_partition_backup**](BackupRestoreApi.md#resume_partition_backup) | **POST** /Partitions/{partitionId}/$/ResumeBackup | Resumes periodic backup of partition which was previously suspended.
[**resume_service_backup**](BackupRestoreApi.md#resume_service_backup) | **POST** /Services/{serviceId}/$/ResumeBackup | Resumes periodic backup of a Service Fabric service which was previously suspended.
[**suspend_application_backup**](BackupRestoreApi.md#suspend_application_backup) | **POST** /Applications/{applicationId}/$/SuspendBackup | Suspends periodic backup for the specified Service Fabric application.
[**suspend_partition_backup**](BackupRestoreApi.md#suspend_partition_backup) | **POST** /Partitions/{partitionId}/$/SuspendBackup | Suspends periodic backup for the specified partition.
[**suspend_service_backup**](BackupRestoreApi.md#suspend_service_backup) | **POST** /Services/{serviceId}/$/SuspendBackup | Suspends periodic backup for the specified Service Fabric service.
[**update_backup_policy**](BackupRestoreApi.md#update_backup_policy) | **POST** /BackupRestore/BackupPolicies/{backupPolicyName}/$/Update | Updates the backup policy.


# **backup_partition**
> backup_partition(partition_id, api_version, backup_timeout=backup_timeout, timeout=timeout, backup_partition_description=backup_partition_description)

Triggers backup of the partition's state.

Creates a backup of the stateful persisted partition's state. In case the partition is already being periodically backed up, then by default the new backup is created at the same backup storage. One can also override the same by specifying the backup storage details as part of the request body. Once the backup is initiated, its progress can be tracked using the GetBackupProgress operation.  In case, the operation times out, specify a greater backup timeout value in the query parameter.

### Example


```python
import openapi_client
from openapi_client.models.backup_partition_description import BackupPartitionDescription
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BackupRestoreApi(api_client)
    partition_id = 'partition_id_example' # str | The identity of the partition.
    api_version = 6.2-preview # str | The version of the API. This parameter is required and its value must be '6.2-preview'. (default to 6.2-preview)
    backup_timeout = 10 # int | Specifies the maximum amount of time, in minutes, to wait for the backup operation to complete. Post that, the operation completes with timeout error. However, in certain corner cases it could be that though the operation returns back timeout, the backup actually goes through. In case of timeout error, its recommended to invoke this operation again with a greater timeout value. The default value for the same is 10 minutes. (optional) (default to 10)
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)
    backup_partition_description = openapi_client.BackupPartitionDescription() # BackupPartitionDescription | Describes the parameters to backup the partition now. If not present, backup operation uses default parameters from the backup policy current associated with this partition. (optional)

    try:
        # Triggers backup of the partition's state.
        api_instance.backup_partition(partition_id, api_version, backup_timeout=backup_timeout, timeout=timeout, backup_partition_description=backup_partition_description)
    except Exception as e:
        print("Exception when calling BackupRestoreApi->backup_partition: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partition_id** | **str**| The identity of the partition. | 
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.2-preview&#39;. | [default to 6.2-preview]
 **backup_timeout** | **int**| Specifies the maximum amount of time, in minutes, to wait for the backup operation to complete. Post that, the operation completes with timeout error. However, in certain corner cases it could be that though the operation returns back timeout, the backup actually goes through. In case of timeout error, its recommended to invoke this operation again with a greater timeout value. The default value for the same is 10 minutes. | [optional] [default to 10]
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]
 **backup_partition_description** | [**BackupPartitionDescription**](BackupPartitionDescription.md)| Describes the parameters to backup the partition now. If not present, backup operation uses default parameters from the backup policy current associated with this partition. | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | A 202 status code indicates the operation request was accepted and backup will be initiated. Use GetPartitionBackupProgress operation to get the status of the backup operation. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_backup_policy**
> create_backup_policy(api_version, backup_policy_description, timeout=timeout)

Creates a backup policy.

Creates a backup policy which can be associated later with a Service Fabric application, service or a partition for periodic backup.

### Example


```python
import openapi_client
from openapi_client.models.backup_policy_description import BackupPolicyDescription
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BackupRestoreApi(api_client)
    api_version = 6.2-preview # str | The version of the API. This parameter is required and its value must be '6.2-preview'. (default to 6.2-preview)
    backup_policy_description = openapi_client.BackupPolicyDescription() # BackupPolicyDescription | Describes the backup policy.
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Creates a backup policy.
        api_instance.create_backup_policy(api_version, backup_policy_description, timeout=timeout)
    except Exception as e:
        print("Exception when calling BackupRestoreApi->create_backup_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.2-preview&#39;. | [default to 6.2-preview]
 **backup_policy_description** | [**BackupPolicyDescription**](BackupPolicyDescription.md)| Describes the backup policy. | 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | A successful operation returns 201 status code and creates a new backup policy. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_backup_policy**
> delete_backup_policy(backup_policy_name, api_version, timeout=timeout)

Deletes the backup policy.

Deletes an existing backup policy. A backup policy must be created before it can be deleted. A currently active backup policy, associated with any Service Fabric application, service or partition, cannot be deleted without first deleting the mapping.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BackupRestoreApi(api_client)
    backup_policy_name = 'backup_policy_name_example' # str | The name of the backup policy.
    api_version = 6.2-preview # str | The version of the API. This parameter is required and its value must be '6.2-preview'. (default to 6.2-preview)
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Deletes the backup policy.
        api_instance.delete_backup_policy(backup_policy_name, api_version, timeout=timeout)
    except Exception as e:
        print("Exception when calling BackupRestoreApi->delete_backup_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **backup_policy_name** | **str**| The name of the backup policy. | 
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.2-preview&#39;. | [default to 6.2-preview]
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful operation returns 200 status code and deletes the backup policy. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **disable_application_backup**
> disable_application_backup(application_id, api_version, timeout=timeout)

Disables periodic backup of Service Fabric application.

Disables periodic backup of Service Fabric application which was previously enabled.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BackupRestoreApi(api_client)
    application_id = 'application_id_example' # str | The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme. Starting from version 6.0, hierarchical names are delimited with the \"~\" character. For example, if the application name is \"fabric:/myapp/app1\", the application identity would be \"myapp~app1\" in 6.0+ and \"myapp/app1\" in previous versions.
    api_version = 6.2-preview # str | The version of the API. This parameter is required and its value must be '6.2-preview'. (default to 6.2-preview)
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Disables periodic backup of Service Fabric application.
        api_instance.disable_application_backup(application_id, api_version, timeout=timeout)
    except Exception as e:
        print("Exception when calling BackupRestoreApi->disable_application_backup: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application_id** | **str**| The identity of the application. This is typically the full name of the application without the &#39;fabric:&#39; URI scheme. Starting from version 6.0, hierarchical names are delimited with the \&quot;~\&quot; character. For example, if the application name is \&quot;fabric:/myapp/app1\&quot;, the application identity would be \&quot;myapp~app1\&quot; in 6.0+ and \&quot;myapp/app1\&quot; in previous versions. | 
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.2-preview&#39;. | [default to 6.2-preview]
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | A 202 status code indicates the request to disable application backup has been accepted. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **disable_partition_backup**
> disable_partition_backup(partition_id, api_version, timeout=timeout)

Disables periodic backup of Service Fabric partition which was previously enabled.

Disables periodic backup of partition which was previously enabled. Backup must be explicitly enabled before it can be disabled.  In case the backup is enabled for the Service Fabric application or service, which this partition is part of, this partition would continue to be periodically backed up as per the policy mapped at the higher level entity.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BackupRestoreApi(api_client)
    partition_id = 'partition_id_example' # str | The identity of the partition.
    api_version = 6.2-preview # str | The version of the API. This parameter is required and its value must be '6.2-preview'. (default to 6.2-preview)
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Disables periodic backup of Service Fabric partition which was previously enabled.
        api_instance.disable_partition_backup(partition_id, api_version, timeout=timeout)
    except Exception as e:
        print("Exception when calling BackupRestoreApi->disable_partition_backup: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partition_id** | **str**| The identity of the partition. | 
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.2-preview&#39;. | [default to 6.2-preview]
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | A 202 status code indicates the request to disable partition backup has been accepted. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **disable_service_backup**
> disable_service_backup(service_id, api_version, timeout=timeout)

Disables periodic backup of Service Fabric service which was previously enabled.

Disables periodic backup of Service Fabric service which was previously enabled. Backup must be explicitly enabled before it can be disabled. In case the backup is enabled for the Service Fabric application, which this service is part of, this service would continue to be periodically backed up as per the policy mapped at the application level.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BackupRestoreApi(api_client)
    service_id = 'service_id_example' # str | The identity of the service. This ID is typically the full name of the service without the 'fabric:' URI scheme. Starting from version 6.0, hierarchical names are delimited with the \"~\" character. For example, if the service name is \"fabric:/myapp/app1/svc1\", the service identity would be \"myapp~app1~svc1\" in 6.0+ and \"myapp/app1/svc1\" in previous versions.
    api_version = 6.2-preview # str | The version of the API. This parameter is required and its value must be '6.2-preview'. (default to 6.2-preview)
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Disables periodic backup of Service Fabric service which was previously enabled.
        api_instance.disable_service_backup(service_id, api_version, timeout=timeout)
    except Exception as e:
        print("Exception when calling BackupRestoreApi->disable_service_backup: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **str**| The identity of the service. This ID is typically the full name of the service without the &#39;fabric:&#39; URI scheme. Starting from version 6.0, hierarchical names are delimited with the \&quot;~\&quot; character. For example, if the service name is \&quot;fabric:/myapp/app1/svc1\&quot;, the service identity would be \&quot;myapp~app1~svc1\&quot; in 6.0+ and \&quot;myapp/app1/svc1\&quot; in previous versions. | 
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.2-preview&#39;. | [default to 6.2-preview]
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | A 202 status code indicates the request to disable service backup has been accepted. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **enable_application_backup**
> enable_application_backup(application_id, api_version, enable_backup_description, timeout=timeout)

Enables periodic backup of stateful partitions under this Service Fabric application.

Enables periodic backup of stateful partitions which are part of this Service Fabric application. Each partition is backed up individually as per the specified backup policy description.  Note only C# based Reliable Actor and Reliable Stateful services are currently supported for periodic backup.

### Example


```python
import openapi_client
from openapi_client.models.enable_backup_description import EnableBackupDescription
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BackupRestoreApi(api_client)
    application_id = 'application_id_example' # str | The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme. Starting from version 6.0, hierarchical names are delimited with the \"~\" character. For example, if the application name is \"fabric:/myapp/app1\", the application identity would be \"myapp~app1\" in 6.0+ and \"myapp/app1\" in previous versions.
    api_version = 6.2-preview # str | The version of the API. This parameter is required and its value must be '6.2-preview'. (default to 6.2-preview)
    enable_backup_description = openapi_client.EnableBackupDescription() # EnableBackupDescription | Specifies the parameters for enabling backup.
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Enables periodic backup of stateful partitions under this Service Fabric application.
        api_instance.enable_application_backup(application_id, api_version, enable_backup_description, timeout=timeout)
    except Exception as e:
        print("Exception when calling BackupRestoreApi->enable_application_backup: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application_id** | **str**| The identity of the application. This is typically the full name of the application without the &#39;fabric:&#39; URI scheme. Starting from version 6.0, hierarchical names are delimited with the \&quot;~\&quot; character. For example, if the application name is \&quot;fabric:/myapp/app1\&quot;, the application identity would be \&quot;myapp~app1\&quot; in 6.0+ and \&quot;myapp/app1\&quot; in previous versions. | 
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.2-preview&#39;. | [default to 6.2-preview]
 **enable_backup_description** | [**EnableBackupDescription**](EnableBackupDescription.md)| Specifies the parameters for enabling backup. | 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | A 202 status code indicates the request to enable application backup has been accepted. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **enable_partition_backup**
> enable_partition_backup(partition_id, api_version, enable_backup_description, timeout=timeout)

Enables periodic backup of the stateful persisted partition.

Enables periodic backup of stateful persisted partition. Each partition is backed up as per the specified backup policy description. In case the application or service, which is partition is part of, is already enabled for backup then this operation would override the policy being used to take the periodic backup of this partition. Note only C# based Reliable Actor and Reliable Stateful services are currently supported for periodic backup.

### Example


```python
import openapi_client
from openapi_client.models.enable_backup_description import EnableBackupDescription
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BackupRestoreApi(api_client)
    partition_id = 'partition_id_example' # str | The identity of the partition.
    api_version = 6.2-preview # str | The version of the API. This parameter is required and its value must be '6.2-preview'. (default to 6.2-preview)
    enable_backup_description = openapi_client.EnableBackupDescription() # EnableBackupDescription | Specifies the parameters for enabling backup.
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Enables periodic backup of the stateful persisted partition.
        api_instance.enable_partition_backup(partition_id, api_version, enable_backup_description, timeout=timeout)
    except Exception as e:
        print("Exception when calling BackupRestoreApi->enable_partition_backup: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partition_id** | **str**| The identity of the partition. | 
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.2-preview&#39;. | [default to 6.2-preview]
 **enable_backup_description** | [**EnableBackupDescription**](EnableBackupDescription.md)| Specifies the parameters for enabling backup. | 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | A 202 status code indicates the request to enable partition backup has been accepted. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **enable_service_backup**
> enable_service_backup(service_id, api_version, enable_backup_description, timeout=timeout)

Enables periodic backup of stateful partitions under this Service Fabric service.

Enables periodic backup of stateful partitions which are part of this Service Fabric service. Each partition is backed up individually as per the specified backup policy description. In case the application, which the service is part of, is already enabled for backup then this operation would override the policy being used to take the periodic backup for this service and its partitions (unless explicitly overridden at the partition level). Note only C# based Reliable Actor and Reliable Stateful services are currently supported for periodic backup.

### Example


```python
import openapi_client
from openapi_client.models.enable_backup_description import EnableBackupDescription
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BackupRestoreApi(api_client)
    service_id = 'service_id_example' # str | The identity of the service. This ID is typically the full name of the service without the 'fabric:' URI scheme. Starting from version 6.0, hierarchical names are delimited with the \"~\" character. For example, if the service name is \"fabric:/myapp/app1/svc1\", the service identity would be \"myapp~app1~svc1\" in 6.0+ and \"myapp/app1/svc1\" in previous versions.
    api_version = 6.2-preview # str | The version of the API. This parameter is required and its value must be '6.2-preview'. (default to 6.2-preview)
    enable_backup_description = openapi_client.EnableBackupDescription() # EnableBackupDescription | Specifies the parameters for enabling backup.
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Enables periodic backup of stateful partitions under this Service Fabric service.
        api_instance.enable_service_backup(service_id, api_version, enable_backup_description, timeout=timeout)
    except Exception as e:
        print("Exception when calling BackupRestoreApi->enable_service_backup: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **str**| The identity of the service. This ID is typically the full name of the service without the &#39;fabric:&#39; URI scheme. Starting from version 6.0, hierarchical names are delimited with the \&quot;~\&quot; character. For example, if the service name is \&quot;fabric:/myapp/app1/svc1\&quot;, the service identity would be \&quot;myapp~app1~svc1\&quot; in 6.0+ and \&quot;myapp/app1/svc1\&quot; in previous versions. | 
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.2-preview&#39;. | [default to 6.2-preview]
 **enable_backup_description** | [**EnableBackupDescription**](EnableBackupDescription.md)| Specifies the parameters for enabling backup. | 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | A 202 status code indicates the request to enable service backup has been accepted. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_all_entities_backed_up_by_policy**
> PagedBackupEntityList get_all_entities_backed_up_by_policy(backup_policy_name, api_version, continuation_token=continuation_token, max_results=max_results, timeout=timeout)

Gets the list of backup entities that are associated with this policy.

Returns a list of Service Fabric application, service or partition which are associated with this backup policy.

### Example


```python
import openapi_client
from openapi_client.models.paged_backup_entity_list import PagedBackupEntityList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BackupRestoreApi(api_client)
    backup_policy_name = 'backup_policy_name_example' # str | The name of the backup policy.
    api_version = 6.2-preview # str | The version of the API. This parameter is required and its value must be '6.2-preview'. (default to 6.2-preview)
    continuation_token = 'continuation_token_example' # str | The continuation token parameter is used to obtain next set of results. A continuation token with a non-empty value is included in the response of the API when the results from the system do not fit in a single response. When this value is passed to the next API call, the API returns next set of results. If there are no further results, then the continuation token does not contain a value. The value of this parameter should not be URL encoded. (optional)
    max_results = 0 # int | The maximum number of results to be returned as part of the paged queries. This parameter defines the upper bound on the number of results returned. The results returned can be less than the specified maximum results if they do not fit in the message as per the max message size restrictions defined in the configuration. If this parameter is zero or not specified, the paged query includes as many results as possible that fit in the return message. (optional) (default to 0)
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Gets the list of backup entities that are associated with this policy.
        api_response = api_instance.get_all_entities_backed_up_by_policy(backup_policy_name, api_version, continuation_token=continuation_token, max_results=max_results, timeout=timeout)
        print("The response of BackupRestoreApi->get_all_entities_backed_up_by_policy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BackupRestoreApi->get_all_entities_backed_up_by_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **backup_policy_name** | **str**| The name of the backup policy. | 
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.2-preview&#39;. | [default to 6.2-preview]
 **continuation_token** | **str**| The continuation token parameter is used to obtain next set of results. A continuation token with a non-empty value is included in the response of the API when the results from the system do not fit in a single response. When this value is passed to the next API call, the API returns next set of results. If there are no further results, then the continuation token does not contain a value. The value of this parameter should not be URL encoded. | [optional] 
 **max_results** | **int**| The maximum number of results to be returned as part of the paged queries. This parameter defines the upper bound on the number of results returned. The results returned can be less than the specified maximum results if they do not fit in the message as per the max message size restrictions defined in the configuration. If this parameter is zero or not specified, the paged query includes as many results as possible that fit in the return message. | [optional] [default to 0]
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

[**PagedBackupEntityList**](PagedBackupEntityList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful operation will return 200 status code and a paged list of Service Fabric entities that are associated with this policy. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_application_backup_configuration_info**
> PagedBackupConfigurationInfoList get_application_backup_configuration_info(application_id, api_version, continuation_token=continuation_token, max_results=max_results, timeout=timeout)

Gets the Service Fabric application backup configuration information.

Gets the Service Fabric backup configuration information for the application and the services and partitions under this application.

### Example


```python
import openapi_client
from openapi_client.models.paged_backup_configuration_info_list import PagedBackupConfigurationInfoList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BackupRestoreApi(api_client)
    application_id = 'application_id_example' # str | The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme. Starting from version 6.0, hierarchical names are delimited with the \"~\" character. For example, if the application name is \"fabric:/myapp/app1\", the application identity would be \"myapp~app1\" in 6.0+ and \"myapp/app1\" in previous versions.
    api_version = 6.2-preview # str | The version of the API. This parameter is required and its value must be '6.2-preview'. (default to 6.2-preview)
    continuation_token = 'continuation_token_example' # str | The continuation token parameter is used to obtain next set of results. A continuation token with a non-empty value is included in the response of the API when the results from the system do not fit in a single response. When this value is passed to the next API call, the API returns next set of results. If there are no further results, then the continuation token does not contain a value. The value of this parameter should not be URL encoded. (optional)
    max_results = 0 # int | The maximum number of results to be returned as part of the paged queries. This parameter defines the upper bound on the number of results returned. The results returned can be less than the specified maximum results if they do not fit in the message as per the max message size restrictions defined in the configuration. If this parameter is zero or not specified, the paged query includes as many results as possible that fit in the return message. (optional) (default to 0)
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Gets the Service Fabric application backup configuration information.
        api_response = api_instance.get_application_backup_configuration_info(application_id, api_version, continuation_token=continuation_token, max_results=max_results, timeout=timeout)
        print("The response of BackupRestoreApi->get_application_backup_configuration_info:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BackupRestoreApi->get_application_backup_configuration_info: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application_id** | **str**| The identity of the application. This is typically the full name of the application without the &#39;fabric:&#39; URI scheme. Starting from version 6.0, hierarchical names are delimited with the \&quot;~\&quot; character. For example, if the application name is \&quot;fabric:/myapp/app1\&quot;, the application identity would be \&quot;myapp~app1\&quot; in 6.0+ and \&quot;myapp/app1\&quot; in previous versions. | 
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.2-preview&#39;. | [default to 6.2-preview]
 **continuation_token** | **str**| The continuation token parameter is used to obtain next set of results. A continuation token with a non-empty value is included in the response of the API when the results from the system do not fit in a single response. When this value is passed to the next API call, the API returns next set of results. If there are no further results, then the continuation token does not contain a value. The value of this parameter should not be URL encoded. | [optional] 
 **max_results** | **int**| The maximum number of results to be returned as part of the paged queries. This parameter defines the upper bound on the number of results returned. The results returned can be less than the specified maximum results if they do not fit in the message as per the max message size restrictions defined in the configuration. If this parameter is zero or not specified, the paged query includes as many results as possible that fit in the return message. | [optional] [default to 0]
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

[**PagedBackupConfigurationInfoList**](PagedBackupConfigurationInfoList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful operation will return 200 status code and a paged list of backup configuration information for the application, and the services and partitions under this application, for which backup configuration has been overridden. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_application_backup_list**
> PagedBackupInfoList get_application_backup_list(application_id, api_version, timeout=timeout, latest=latest, start_date_time_filter=start_date_time_filter, end_date_time_filter=end_date_time_filter, continuation_token=continuation_token, max_results=max_results)

Gets the list of backups available for every partition in this application.

Returns a list of backups available for every partition in this Service Fabric application. The server enumerates all the backups available at the backup location configured in the backup policy. It also allows filtering of the result based on start and end datetime or just fetching the latest available backup for every partition.

### Example


```python
import openapi_client
from openapi_client.models.paged_backup_info_list import PagedBackupInfoList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BackupRestoreApi(api_client)
    application_id = 'application_id_example' # str | The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme. Starting from version 6.0, hierarchical names are delimited with the \"~\" character. For example, if the application name is \"fabric:/myapp/app1\", the application identity would be \"myapp~app1\" in 6.0+ and \"myapp/app1\" in previous versions.
    api_version = 6.2-preview # str | The version of the API. This parameter is required and its value must be '6.2-preview'. (default to 6.2-preview)
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)
    latest = False # bool | Specifies whether to get only the most recent backup available for a partition for the specified time range. (optional) (default to False)
    start_date_time_filter = '2013-10-20T19:20:30+01:00' # datetime | Specify the start date time from which to enumerate backups, in datetime format. The date time must be specified in ISO8601 format. This is an optional parameter. If not specified, all backups from the beginning are enumerated. (optional)
    end_date_time_filter = '2013-10-20T19:20:30+01:00' # datetime | Specify the end date time till which to enumerate backups, in datetime format. The date time must be specified in ISO8601 format. This is an optional parameter. If not specified, enumeration is done till the most recent backup. (optional)
    continuation_token = 'continuation_token_example' # str | The continuation token parameter is used to obtain next set of results. A continuation token with a non-empty value is included in the response of the API when the results from the system do not fit in a single response. When this value is passed to the next API call, the API returns next set of results. If there are no further results, then the continuation token does not contain a value. The value of this parameter should not be URL encoded. (optional)
    max_results = 0 # int | The maximum number of results to be returned as part of the paged queries. This parameter defines the upper bound on the number of results returned. The results returned can be less than the specified maximum results if they do not fit in the message as per the max message size restrictions defined in the configuration. If this parameter is zero or not specified, the paged query includes as many results as possible that fit in the return message. (optional) (default to 0)

    try:
        # Gets the list of backups available for every partition in this application.
        api_response = api_instance.get_application_backup_list(application_id, api_version, timeout=timeout, latest=latest, start_date_time_filter=start_date_time_filter, end_date_time_filter=end_date_time_filter, continuation_token=continuation_token, max_results=max_results)
        print("The response of BackupRestoreApi->get_application_backup_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BackupRestoreApi->get_application_backup_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application_id** | **str**| The identity of the application. This is typically the full name of the application without the &#39;fabric:&#39; URI scheme. Starting from version 6.0, hierarchical names are delimited with the \&quot;~\&quot; character. For example, if the application name is \&quot;fabric:/myapp/app1\&quot;, the application identity would be \&quot;myapp~app1\&quot; in 6.0+ and \&quot;myapp/app1\&quot; in previous versions. | 
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.2-preview&#39;. | [default to 6.2-preview]
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]
 **latest** | **bool**| Specifies whether to get only the most recent backup available for a partition for the specified time range. | [optional] [default to False]
 **start_date_time_filter** | **datetime**| Specify the start date time from which to enumerate backups, in datetime format. The date time must be specified in ISO8601 format. This is an optional parameter. If not specified, all backups from the beginning are enumerated. | [optional] 
 **end_date_time_filter** | **datetime**| Specify the end date time till which to enumerate backups, in datetime format. The date time must be specified in ISO8601 format. This is an optional parameter. If not specified, enumeration is done till the most recent backup. | [optional] 
 **continuation_token** | **str**| The continuation token parameter is used to obtain next set of results. A continuation token with a non-empty value is included in the response of the API when the results from the system do not fit in a single response. When this value is passed to the next API call, the API returns next set of results. If there are no further results, then the continuation token does not contain a value. The value of this parameter should not be URL encoded. | [optional] 
 **max_results** | **int**| The maximum number of results to be returned as part of the paged queries. This parameter defines the upper bound on the number of results returned. The results returned can be less than the specified maximum results if they do not fit in the message as per the max message size restrictions defined in the configuration. If this parameter is zero or not specified, the paged query includes as many results as possible that fit in the return message. | [optional] [default to 0]

### Return type

[**PagedBackupInfoList**](PagedBackupInfoList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful operation will return 200 status code and a paged list of backup information. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_backup_policy_by_name**
> BackupPolicyDescription get_backup_policy_by_name(backup_policy_name, api_version, timeout=timeout)

Gets a particular backup policy by name.

Gets a particular backup policy identified by {backupPolicyName}

### Example


```python
import openapi_client
from openapi_client.models.backup_policy_description import BackupPolicyDescription
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BackupRestoreApi(api_client)
    backup_policy_name = 'backup_policy_name_example' # str | The name of the backup policy.
    api_version = 6.2-preview # str | The version of the API. This parameter is required and its value must be '6.2-preview'. (default to 6.2-preview)
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Gets a particular backup policy by name.
        api_response = api_instance.get_backup_policy_by_name(backup_policy_name, api_version, timeout=timeout)
        print("The response of BackupRestoreApi->get_backup_policy_by_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BackupRestoreApi->get_backup_policy_by_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **backup_policy_name** | **str**| The name of the backup policy. | 
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.2-preview&#39;. | [default to 6.2-preview]
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

[**BackupPolicyDescription**](BackupPolicyDescription.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful operation will return 200 status code and the backup policy description. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_backup_policy_list**
> PagedBackupPolicyDescriptionList get_backup_policy_list(api_version, continuation_token=continuation_token, max_results=max_results, timeout=timeout)

Gets all the backup policies configured.

Get a list of all the backup policies configured.

### Example


```python
import openapi_client
from openapi_client.models.paged_backup_policy_description_list import PagedBackupPolicyDescriptionList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BackupRestoreApi(api_client)
    api_version = 6.2-preview # str | The version of the API. This parameter is required and its value must be '6.2-preview'. (default to 6.2-preview)
    continuation_token = 'continuation_token_example' # str | The continuation token parameter is used to obtain next set of results. A continuation token with a non-empty value is included in the response of the API when the results from the system do not fit in a single response. When this value is passed to the next API call, the API returns next set of results. If there are no further results, then the continuation token does not contain a value. The value of this parameter should not be URL encoded. (optional)
    max_results = 0 # int | The maximum number of results to be returned as part of the paged queries. This parameter defines the upper bound on the number of results returned. The results returned can be less than the specified maximum results if they do not fit in the message as per the max message size restrictions defined in the configuration. If this parameter is zero or not specified, the paged query includes as many results as possible that fit in the return message. (optional) (default to 0)
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Gets all the backup policies configured.
        api_response = api_instance.get_backup_policy_list(api_version, continuation_token=continuation_token, max_results=max_results, timeout=timeout)
        print("The response of BackupRestoreApi->get_backup_policy_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BackupRestoreApi->get_backup_policy_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.2-preview&#39;. | [default to 6.2-preview]
 **continuation_token** | **str**| The continuation token parameter is used to obtain next set of results. A continuation token with a non-empty value is included in the response of the API when the results from the system do not fit in a single response. When this value is passed to the next API call, the API returns next set of results. If there are no further results, then the continuation token does not contain a value. The value of this parameter should not be URL encoded. | [optional] 
 **max_results** | **int**| The maximum number of results to be returned as part of the paged queries. This parameter defines the upper bound on the number of results returned. The results returned can be less than the specified maximum results if they do not fit in the message as per the max message size restrictions defined in the configuration. If this parameter is zero or not specified, the paged query includes as many results as possible that fit in the return message. | [optional] [default to 0]
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

[**PagedBackupPolicyDescriptionList**](PagedBackupPolicyDescriptionList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful operation will return 200 status code and paged list of backup policies. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_backups_from_backup_location**
> PagedBackupInfoList get_backups_from_backup_location(api_version, get_backup_by_storage_query_description, timeout=timeout, continuation_token=continuation_token, max_results=max_results)

Gets the list of backups available for the specified backed up entity at the specified backup location.

Gets the list of backups available for the specified backed up entity (Application, Service or Partition) at the specified backup location (FileShare or Azure Blob Storage).

### Example


```python
import openapi_client
from openapi_client.models.get_backup_by_storage_query_description import GetBackupByStorageQueryDescription
from openapi_client.models.paged_backup_info_list import PagedBackupInfoList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BackupRestoreApi(api_client)
    api_version = 6.2-preview # str | The version of the API. This parameter is required and its value must be '6.2-preview'. (default to 6.2-preview)
    get_backup_by_storage_query_description = openapi_client.GetBackupByStorageQueryDescription() # GetBackupByStorageQueryDescription | Describes the filters and backup storage details to be used for enumerating backups.
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)
    continuation_token = 'continuation_token_example' # str | The continuation token parameter is used to obtain next set of results. A continuation token with a non-empty value is included in the response of the API when the results from the system do not fit in a single response. When this value is passed to the next API call, the API returns next set of results. If there are no further results, then the continuation token does not contain a value. The value of this parameter should not be URL encoded. (optional)
    max_results = 0 # int | The maximum number of results to be returned as part of the paged queries. This parameter defines the upper bound on the number of results returned. The results returned can be less than the specified maximum results if they do not fit in the message as per the max message size restrictions defined in the configuration. If this parameter is zero or not specified, the paged query includes as many results as possible that fit in the return message. (optional) (default to 0)

    try:
        # Gets the list of backups available for the specified backed up entity at the specified backup location.
        api_response = api_instance.get_backups_from_backup_location(api_version, get_backup_by_storage_query_description, timeout=timeout, continuation_token=continuation_token, max_results=max_results)
        print("The response of BackupRestoreApi->get_backups_from_backup_location:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BackupRestoreApi->get_backups_from_backup_location: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.2-preview&#39;. | [default to 6.2-preview]
 **get_backup_by_storage_query_description** | [**GetBackupByStorageQueryDescription**](GetBackupByStorageQueryDescription.md)| Describes the filters and backup storage details to be used for enumerating backups. | 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]
 **continuation_token** | **str**| The continuation token parameter is used to obtain next set of results. A continuation token with a non-empty value is included in the response of the API when the results from the system do not fit in a single response. When this value is passed to the next API call, the API returns next set of results. If there are no further results, then the continuation token does not contain a value. The value of this parameter should not be URL encoded. | [optional] 
 **max_results** | **int**| The maximum number of results to be returned as part of the paged queries. This parameter defines the upper bound on the number of results returned. The results returned can be less than the specified maximum results if they do not fit in the message as per the max message size restrictions defined in the configuration. If this parameter is zero or not specified, the paged query includes as many results as possible that fit in the return message. | [optional] [default to 0]

### Return type

[**PagedBackupInfoList**](PagedBackupInfoList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful operation will return 200 status code and a paged list of backup information. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_partition_backup_configuration_info**
> PartitionBackupConfigurationInfo get_partition_backup_configuration_info(partition_id, api_version, timeout=timeout)

Gets the partition backup configuration information

Gets the Service Fabric Backup configuration information for the specified partition.

### Example


```python
import openapi_client
from openapi_client.models.partition_backup_configuration_info import PartitionBackupConfigurationInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BackupRestoreApi(api_client)
    partition_id = 'partition_id_example' # str | The identity of the partition.
    api_version = 6.2-preview # str | The version of the API. This parameter is required and its value must be '6.2-preview'. (default to 6.2-preview)
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Gets the partition backup configuration information
        api_response = api_instance.get_partition_backup_configuration_info(partition_id, api_version, timeout=timeout)
        print("The response of BackupRestoreApi->get_partition_backup_configuration_info:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BackupRestoreApi->get_partition_backup_configuration_info: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partition_id** | **str**| The identity of the partition. | 
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.2-preview&#39;. | [default to 6.2-preview]
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

[**PartitionBackupConfigurationInfo**](PartitionBackupConfigurationInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful operation will return 200 status code and gets the partition&#39;s backup configuration information. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_partition_backup_list**
> PagedBackupInfoList get_partition_backup_list(partition_id, api_version, timeout=timeout, latest=latest, start_date_time_filter=start_date_time_filter, end_date_time_filter=end_date_time_filter)

Gets the list of backups available for the specified partition.

Returns a list of backups available for the specified partition. The server enumerates all the backups available in the backup store configured in the backup policy. It also allows filtering of the result based on start and end datetime or just fetching the latest available backup for the partition.

### Example


```python
import openapi_client
from openapi_client.models.paged_backup_info_list import PagedBackupInfoList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BackupRestoreApi(api_client)
    partition_id = 'partition_id_example' # str | The identity of the partition.
    api_version = 6.2-preview # str | The version of the API. This parameter is required and its value must be '6.2-preview'. (default to 6.2-preview)
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)
    latest = False # bool | Specifies whether to get only the most recent backup available for a partition for the specified time range. (optional) (default to False)
    start_date_time_filter = '2013-10-20T19:20:30+01:00' # datetime | Specify the start date time from which to enumerate backups, in datetime format. The date time must be specified in ISO8601 format. This is an optional parameter. If not specified, all backups from the beginning are enumerated. (optional)
    end_date_time_filter = '2013-10-20T19:20:30+01:00' # datetime | Specify the end date time till which to enumerate backups, in datetime format. The date time must be specified in ISO8601 format. This is an optional parameter. If not specified, enumeration is done till the most recent backup. (optional)

    try:
        # Gets the list of backups available for the specified partition.
        api_response = api_instance.get_partition_backup_list(partition_id, api_version, timeout=timeout, latest=latest, start_date_time_filter=start_date_time_filter, end_date_time_filter=end_date_time_filter)
        print("The response of BackupRestoreApi->get_partition_backup_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BackupRestoreApi->get_partition_backup_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partition_id** | **str**| The identity of the partition. | 
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.2-preview&#39;. | [default to 6.2-preview]
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]
 **latest** | **bool**| Specifies whether to get only the most recent backup available for a partition for the specified time range. | [optional] [default to False]
 **start_date_time_filter** | **datetime**| Specify the start date time from which to enumerate backups, in datetime format. The date time must be specified in ISO8601 format. This is an optional parameter. If not specified, all backups from the beginning are enumerated. | [optional] 
 **end_date_time_filter** | **datetime**| Specify the end date time till which to enumerate backups, in datetime format. The date time must be specified in ISO8601 format. This is an optional parameter. If not specified, enumeration is done till the most recent backup. | [optional] 

### Return type

[**PagedBackupInfoList**](PagedBackupInfoList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful operation will return 200 status code and a paged list of backup information. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_partition_backup_progress**
> BackupProgressInfo get_partition_backup_progress(partition_id, api_version, timeout=timeout)

Gets details for the latest backup triggered for this partition.

Returns information about the state of the latest backup along with details or failure reason in case of completion.

### Example


```python
import openapi_client
from openapi_client.models.backup_progress_info import BackupProgressInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BackupRestoreApi(api_client)
    partition_id = 'partition_id_example' # str | The identity of the partition.
    api_version = 6.2-preview # str | The version of the API. This parameter is required and its value must be '6.2-preview'. (default to 6.2-preview)
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Gets details for the latest backup triggered for this partition.
        api_response = api_instance.get_partition_backup_progress(partition_id, api_version, timeout=timeout)
        print("The response of BackupRestoreApi->get_partition_backup_progress:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BackupRestoreApi->get_partition_backup_progress: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partition_id** | **str**| The identity of the partition. | 
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.2-preview&#39;. | [default to 6.2-preview]
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

[**BackupProgressInfo**](BackupProgressInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful operation returns 200 status code and backup progress details. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_partition_restore_progress**
> RestoreProgressInfo get_partition_restore_progress(partition_id, api_version, timeout=timeout)

Gets details for the latest restore operation triggered for this partition.

Returns information about the state of the latest restore operation along with details or failure reason in case of completion.

### Example


```python
import openapi_client
from openapi_client.models.restore_progress_info import RestoreProgressInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BackupRestoreApi(api_client)
    partition_id = 'partition_id_example' # str | The identity of the partition.
    api_version = 6.2-preview # str | The version of the API. This parameter is required and its value must be '6.2-preview'. (default to 6.2-preview)
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Gets details for the latest restore operation triggered for this partition.
        api_response = api_instance.get_partition_restore_progress(partition_id, api_version, timeout=timeout)
        print("The response of BackupRestoreApi->get_partition_restore_progress:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BackupRestoreApi->get_partition_restore_progress: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partition_id** | **str**| The identity of the partition. | 
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.2-preview&#39;. | [default to 6.2-preview]
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

[**RestoreProgressInfo**](RestoreProgressInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful operation returns 200 status code and restore progress details. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_service_backup_configuration_info**
> PagedBackupConfigurationInfoList get_service_backup_configuration_info(service_id, api_version, continuation_token=continuation_token, max_results=max_results, timeout=timeout)

Gets the Service Fabric service backup configuration information.

Gets the Service Fabric backup configuration information for the service and the partitions under this service.

### Example


```python
import openapi_client
from openapi_client.models.paged_backup_configuration_info_list import PagedBackupConfigurationInfoList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BackupRestoreApi(api_client)
    service_id = 'service_id_example' # str | The identity of the service. This ID is typically the full name of the service without the 'fabric:' URI scheme. Starting from version 6.0, hierarchical names are delimited with the \"~\" character. For example, if the service name is \"fabric:/myapp/app1/svc1\", the service identity would be \"myapp~app1~svc1\" in 6.0+ and \"myapp/app1/svc1\" in previous versions.
    api_version = 6.2-preview # str | The version of the API. This parameter is required and its value must be '6.2-preview'. (default to 6.2-preview)
    continuation_token = 'continuation_token_example' # str | The continuation token parameter is used to obtain next set of results. A continuation token with a non-empty value is included in the response of the API when the results from the system do not fit in a single response. When this value is passed to the next API call, the API returns next set of results. If there are no further results, then the continuation token does not contain a value. The value of this parameter should not be URL encoded. (optional)
    max_results = 0 # int | The maximum number of results to be returned as part of the paged queries. This parameter defines the upper bound on the number of results returned. The results returned can be less than the specified maximum results if they do not fit in the message as per the max message size restrictions defined in the configuration. If this parameter is zero or not specified, the paged query includes as many results as possible that fit in the return message. (optional) (default to 0)
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Gets the Service Fabric service backup configuration information.
        api_response = api_instance.get_service_backup_configuration_info(service_id, api_version, continuation_token=continuation_token, max_results=max_results, timeout=timeout)
        print("The response of BackupRestoreApi->get_service_backup_configuration_info:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BackupRestoreApi->get_service_backup_configuration_info: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **str**| The identity of the service. This ID is typically the full name of the service without the &#39;fabric:&#39; URI scheme. Starting from version 6.0, hierarchical names are delimited with the \&quot;~\&quot; character. For example, if the service name is \&quot;fabric:/myapp/app1/svc1\&quot;, the service identity would be \&quot;myapp~app1~svc1\&quot; in 6.0+ and \&quot;myapp/app1/svc1\&quot; in previous versions. | 
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.2-preview&#39;. | [default to 6.2-preview]
 **continuation_token** | **str**| The continuation token parameter is used to obtain next set of results. A continuation token with a non-empty value is included in the response of the API when the results from the system do not fit in a single response. When this value is passed to the next API call, the API returns next set of results. If there are no further results, then the continuation token does not contain a value. The value of this parameter should not be URL encoded. | [optional] 
 **max_results** | **int**| The maximum number of results to be returned as part of the paged queries. This parameter defines the upper bound on the number of results returned. The results returned can be less than the specified maximum results if they do not fit in the message as per the max message size restrictions defined in the configuration. If this parameter is zero or not specified, the paged query includes as many results as possible that fit in the return message. | [optional] [default to 0]
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

[**PagedBackupConfigurationInfoList**](PagedBackupConfigurationInfoList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful operation will return 200 status code and a paged list of backup configuration information for the service, and the partitions under this service, for which backup configuration has been overridden. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_service_backup_list**
> PagedBackupInfoList get_service_backup_list(service_id, api_version, timeout=timeout, latest=latest, start_date_time_filter=start_date_time_filter, end_date_time_filter=end_date_time_filter, continuation_token=continuation_token, max_results=max_results)

Gets the list of backups available for every partition in this service.

Returns a list of backups available for every partition in this Service Fabric service. The server enumerates all the backups available in the backup store configured in the backup policy. It also allows filtering of the result based on start and end datetime or just fetching the latest available backup for every partition.

### Example


```python
import openapi_client
from openapi_client.models.paged_backup_info_list import PagedBackupInfoList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BackupRestoreApi(api_client)
    service_id = 'service_id_example' # str | The identity of the service. This ID is typically the full name of the service without the 'fabric:' URI scheme. Starting from version 6.0, hierarchical names are delimited with the \"~\" character. For example, if the service name is \"fabric:/myapp/app1/svc1\", the service identity would be \"myapp~app1~svc1\" in 6.0+ and \"myapp/app1/svc1\" in previous versions.
    api_version = 6.2-preview # str | The version of the API. This parameter is required and its value must be '6.2-preview'. (default to 6.2-preview)
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)
    latest = False # bool | Specifies whether to get only the most recent backup available for a partition for the specified time range. (optional) (default to False)
    start_date_time_filter = '2013-10-20T19:20:30+01:00' # datetime | Specify the start date time from which to enumerate backups, in datetime format. The date time must be specified in ISO8601 format. This is an optional parameter. If not specified, all backups from the beginning are enumerated. (optional)
    end_date_time_filter = '2013-10-20T19:20:30+01:00' # datetime | Specify the end date time till which to enumerate backups, in datetime format. The date time must be specified in ISO8601 format. This is an optional parameter. If not specified, enumeration is done till the most recent backup. (optional)
    continuation_token = 'continuation_token_example' # str | The continuation token parameter is used to obtain next set of results. A continuation token with a non-empty value is included in the response of the API when the results from the system do not fit in a single response. When this value is passed to the next API call, the API returns next set of results. If there are no further results, then the continuation token does not contain a value. The value of this parameter should not be URL encoded. (optional)
    max_results = 0 # int | The maximum number of results to be returned as part of the paged queries. This parameter defines the upper bound on the number of results returned. The results returned can be less than the specified maximum results if they do not fit in the message as per the max message size restrictions defined in the configuration. If this parameter is zero or not specified, the paged query includes as many results as possible that fit in the return message. (optional) (default to 0)

    try:
        # Gets the list of backups available for every partition in this service.
        api_response = api_instance.get_service_backup_list(service_id, api_version, timeout=timeout, latest=latest, start_date_time_filter=start_date_time_filter, end_date_time_filter=end_date_time_filter, continuation_token=continuation_token, max_results=max_results)
        print("The response of BackupRestoreApi->get_service_backup_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BackupRestoreApi->get_service_backup_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **str**| The identity of the service. This ID is typically the full name of the service without the &#39;fabric:&#39; URI scheme. Starting from version 6.0, hierarchical names are delimited with the \&quot;~\&quot; character. For example, if the service name is \&quot;fabric:/myapp/app1/svc1\&quot;, the service identity would be \&quot;myapp~app1~svc1\&quot; in 6.0+ and \&quot;myapp/app1/svc1\&quot; in previous versions. | 
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.2-preview&#39;. | [default to 6.2-preview]
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]
 **latest** | **bool**| Specifies whether to get only the most recent backup available for a partition for the specified time range. | [optional] [default to False]
 **start_date_time_filter** | **datetime**| Specify the start date time from which to enumerate backups, in datetime format. The date time must be specified in ISO8601 format. This is an optional parameter. If not specified, all backups from the beginning are enumerated. | [optional] 
 **end_date_time_filter** | **datetime**| Specify the end date time till which to enumerate backups, in datetime format. The date time must be specified in ISO8601 format. This is an optional parameter. If not specified, enumeration is done till the most recent backup. | [optional] 
 **continuation_token** | **str**| The continuation token parameter is used to obtain next set of results. A continuation token with a non-empty value is included in the response of the API when the results from the system do not fit in a single response. When this value is passed to the next API call, the API returns next set of results. If there are no further results, then the continuation token does not contain a value. The value of this parameter should not be URL encoded. | [optional] 
 **max_results** | **int**| The maximum number of results to be returned as part of the paged queries. This parameter defines the upper bound on the number of results returned. The results returned can be less than the specified maximum results if they do not fit in the message as per the max message size restrictions defined in the configuration. If this parameter is zero or not specified, the paged query includes as many results as possible that fit in the return message. | [optional] [default to 0]

### Return type

[**PagedBackupInfoList**](PagedBackupInfoList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful operation will return 200 status code and a paged list of backup information. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **restore_partition**
> restore_partition(partition_id, api_version, restore_partition_description, restore_timeout=restore_timeout, timeout=timeout)

Triggers restore of the state of the partition using the specified restore partition description.

Restores the state of a of the stateful persisted partition using the specified backup point. In case the partition is already being periodically backed up, then by default the backup point is looked for in the storage specified in backup policy. One can also override the same by specifying the backup storage details as part of the restore partition description in body. Once the restore is initiated, its progress can be tracked using the GetRestoreProgress operation.  In case, the operation times out, specify a greater restore timeout value in the query parameter.

### Example


```python
import openapi_client
from openapi_client.models.restore_partition_description import RestorePartitionDescription
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BackupRestoreApi(api_client)
    partition_id = 'partition_id_example' # str | The identity of the partition.
    api_version = 6.2-preview # str | The version of the API. This parameter is required and its value must be '6.2-preview'. (default to 6.2-preview)
    restore_partition_description = openapi_client.RestorePartitionDescription() # RestorePartitionDescription | Describes the parameters to restore the partition.
    restore_timeout = 10 # int | Specifies the maximum amount of time to wait, in minutes, for the restore operation to complete. Post that, the operation returns back with timeout error. However, in certain corner cases it could be that the restore operation goes through even though it completes with timeout. In case of timeout error, its recommended to invoke this operation again with a greater timeout value. the default value for the same is 10 minutes. (optional) (default to 10)
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Triggers restore of the state of the partition using the specified restore partition description.
        api_instance.restore_partition(partition_id, api_version, restore_partition_description, restore_timeout=restore_timeout, timeout=timeout)
    except Exception as e:
        print("Exception when calling BackupRestoreApi->restore_partition: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partition_id** | **str**| The identity of the partition. | 
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.2-preview&#39;. | [default to 6.2-preview]
 **restore_partition_description** | [**RestorePartitionDescription**](RestorePartitionDescription.md)| Describes the parameters to restore the partition. | 
 **restore_timeout** | **int**| Specifies the maximum amount of time to wait, in minutes, for the restore operation to complete. Post that, the operation returns back with timeout error. However, in certain corner cases it could be that the restore operation goes through even though it completes with timeout. In case of timeout error, its recommended to invoke this operation again with a greater timeout value. the default value for the same is 10 minutes. | [optional] [default to 10]
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | A 202 status code indicates the operation request was accepted and restore will be initiated. Use GetPartitionRestoreProgress operation to get the status of the restore operation. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resume_application_backup**
> resume_application_backup(application_id, api_version, timeout=timeout)

Resumes periodic backup of a Service Fabric application which was previously suspended.

The previously suspended Service Fabric application resumes taking periodic backup as per the backup policy currently configured for the same.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BackupRestoreApi(api_client)
    application_id = 'application_id_example' # str | The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme. Starting from version 6.0, hierarchical names are delimited with the \"~\" character. For example, if the application name is \"fabric:/myapp/app1\", the application identity would be \"myapp~app1\" in 6.0+ and \"myapp/app1\" in previous versions.
    api_version = 6.2-preview # str | The version of the API. This parameter is required and its value must be '6.2-preview'. (default to 6.2-preview)
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Resumes periodic backup of a Service Fabric application which was previously suspended.
        api_instance.resume_application_backup(application_id, api_version, timeout=timeout)
    except Exception as e:
        print("Exception when calling BackupRestoreApi->resume_application_backup: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application_id** | **str**| The identity of the application. This is typically the full name of the application without the &#39;fabric:&#39; URI scheme. Starting from version 6.0, hierarchical names are delimited with the \&quot;~\&quot; character. For example, if the application name is \&quot;fabric:/myapp/app1\&quot;, the application identity would be \&quot;myapp~app1\&quot; in 6.0+ and \&quot;myapp/app1\&quot; in previous versions. | 
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.2-preview&#39;. | [default to 6.2-preview]
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | A 202 status code indicates the operation request was accepted and application backup will be resumed. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resume_partition_backup**
> resume_partition_backup(partition_id, api_version, timeout=timeout)

Resumes periodic backup of partition which was previously suspended.

The previously suspended partition resumes taking periodic backup as per the backup policy currently configured for the same.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BackupRestoreApi(api_client)
    partition_id = 'partition_id_example' # str | The identity of the partition.
    api_version = 6.2-preview # str | The version of the API. This parameter is required and its value must be '6.2-preview'. (default to 6.2-preview)
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Resumes periodic backup of partition which was previously suspended.
        api_instance.resume_partition_backup(partition_id, api_version, timeout=timeout)
    except Exception as e:
        print("Exception when calling BackupRestoreApi->resume_partition_backup: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partition_id** | **str**| The identity of the partition. | 
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.2-preview&#39;. | [default to 6.2-preview]
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | A 202 status code indicates the operation request was accepted and partition backup will be resumed. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resume_service_backup**
> resume_service_backup(service_id, api_version, timeout=timeout)

Resumes periodic backup of a Service Fabric service which was previously suspended.

The previously suspended Service Fabric service resumes taking periodic backup as per the backup policy currently configured for the same.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BackupRestoreApi(api_client)
    service_id = 'service_id_example' # str | The identity of the service. This ID is typically the full name of the service without the 'fabric:' URI scheme. Starting from version 6.0, hierarchical names are delimited with the \"~\" character. For example, if the service name is \"fabric:/myapp/app1/svc1\", the service identity would be \"myapp~app1~svc1\" in 6.0+ and \"myapp/app1/svc1\" in previous versions.
    api_version = 6.2-preview # str | The version of the API. This parameter is required and its value must be '6.2-preview'. (default to 6.2-preview)
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Resumes periodic backup of a Service Fabric service which was previously suspended.
        api_instance.resume_service_backup(service_id, api_version, timeout=timeout)
    except Exception as e:
        print("Exception when calling BackupRestoreApi->resume_service_backup: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **str**| The identity of the service. This ID is typically the full name of the service without the &#39;fabric:&#39; URI scheme. Starting from version 6.0, hierarchical names are delimited with the \&quot;~\&quot; character. For example, if the service name is \&quot;fabric:/myapp/app1/svc1\&quot;, the service identity would be \&quot;myapp~app1~svc1\&quot; in 6.0+ and \&quot;myapp/app1/svc1\&quot; in previous versions. | 
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.2-preview&#39;. | [default to 6.2-preview]
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | A 202 status code indicates the operation request was accepted and service backup will be resumed. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **suspend_application_backup**
> suspend_application_backup(application_id, api_version, timeout=timeout)

Suspends periodic backup for the specified Service Fabric application.

The application which is configured to take periodic backups, is suspended for taking further backups till it is resumed again. This operation applies to the entire application's hierarchy. It means all the services and partitions under this application are now suspended for backup.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BackupRestoreApi(api_client)
    application_id = 'application_id_example' # str | The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme. Starting from version 6.0, hierarchical names are delimited with the \"~\" character. For example, if the application name is \"fabric:/myapp/app1\", the application identity would be \"myapp~app1\" in 6.0+ and \"myapp/app1\" in previous versions.
    api_version = 6.2-preview # str | The version of the API. This parameter is required and its value must be '6.2-preview'. (default to 6.2-preview)
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Suspends periodic backup for the specified Service Fabric application.
        api_instance.suspend_application_backup(application_id, api_version, timeout=timeout)
    except Exception as e:
        print("Exception when calling BackupRestoreApi->suspend_application_backup: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application_id** | **str**| The identity of the application. This is typically the full name of the application without the &#39;fabric:&#39; URI scheme. Starting from version 6.0, hierarchical names are delimited with the \&quot;~\&quot; character. For example, if the application name is \&quot;fabric:/myapp/app1\&quot;, the application identity would be \&quot;myapp~app1\&quot; in 6.0+ and \&quot;myapp/app1\&quot; in previous versions. | 
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.2-preview&#39;. | [default to 6.2-preview]
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | A 202 status code indicates the operation request was accepted and application backup will be suspended. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **suspend_partition_backup**
> suspend_partition_backup(partition_id, api_version, timeout=timeout)

Suspends periodic backup for the specified partition.

The partition which is configured to take periodic backups, is suspended for taking further backups till it is resumed again.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BackupRestoreApi(api_client)
    partition_id = 'partition_id_example' # str | The identity of the partition.
    api_version = 6.2-preview # str | The version of the API. This parameter is required and its value must be '6.2-preview'. (default to 6.2-preview)
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Suspends periodic backup for the specified partition.
        api_instance.suspend_partition_backup(partition_id, api_version, timeout=timeout)
    except Exception as e:
        print("Exception when calling BackupRestoreApi->suspend_partition_backup: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partition_id** | **str**| The identity of the partition. | 
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.2-preview&#39;. | [default to 6.2-preview]
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | A 202 status code indicates the operation request was accepted and partition backup will be suspended. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **suspend_service_backup**
> suspend_service_backup(service_id, api_version, timeout=timeout)

Suspends periodic backup for the specified Service Fabric service.

The service which is configured to take periodic backups, is suspended for taking further backups till it is resumed again. This operation applies to the entire service's hierarchy. It means all the partitions under this service are now suspended for backup.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BackupRestoreApi(api_client)
    service_id = 'service_id_example' # str | The identity of the service. This ID is typically the full name of the service without the 'fabric:' URI scheme. Starting from version 6.0, hierarchical names are delimited with the \"~\" character. For example, if the service name is \"fabric:/myapp/app1/svc1\", the service identity would be \"myapp~app1~svc1\" in 6.0+ and \"myapp/app1/svc1\" in previous versions.
    api_version = 6.2-preview # str | The version of the API. This parameter is required and its value must be '6.2-preview'. (default to 6.2-preview)
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Suspends periodic backup for the specified Service Fabric service.
        api_instance.suspend_service_backup(service_id, api_version, timeout=timeout)
    except Exception as e:
        print("Exception when calling BackupRestoreApi->suspend_service_backup: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **str**| The identity of the service. This ID is typically the full name of the service without the &#39;fabric:&#39; URI scheme. Starting from version 6.0, hierarchical names are delimited with the \&quot;~\&quot; character. For example, if the service name is \&quot;fabric:/myapp/app1/svc1\&quot;, the service identity would be \&quot;myapp~app1~svc1\&quot; in 6.0+ and \&quot;myapp/app1/svc1\&quot; in previous versions. | 
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.2-preview&#39;. | [default to 6.2-preview]
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | A 202 status code indicates the operation request was accepted and service backup will be suspended. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_backup_policy**
> update_backup_policy(backup_policy_name, api_version, backup_policy_description, timeout=timeout)

Updates the backup policy.

Updates the backup policy identified by {backupPolicyName}

### Example


```python
import openapi_client
from openapi_client.models.backup_policy_description import BackupPolicyDescription
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BackupRestoreApi(api_client)
    backup_policy_name = 'backup_policy_name_example' # str | The name of the backup policy.
    api_version = 6.2-preview # str | The version of the API. This parameter is required and its value must be '6.2-preview'. (default to 6.2-preview)
    backup_policy_description = openapi_client.BackupPolicyDescription() # BackupPolicyDescription | Describes the backup policy.
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Updates the backup policy.
        api_instance.update_backup_policy(backup_policy_name, api_version, backup_policy_description, timeout=timeout)
    except Exception as e:
        print("Exception when calling BackupRestoreApi->update_backup_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **backup_policy_name** | **str**| The name of the backup policy. | 
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.2-preview&#39;. | [default to 6.2-preview]
 **backup_policy_description** | [**BackupPolicyDescription**](BackupPolicyDescription.md)| Describes the backup policy. | 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful operation returns 200 status code and updates the backup policy description. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

