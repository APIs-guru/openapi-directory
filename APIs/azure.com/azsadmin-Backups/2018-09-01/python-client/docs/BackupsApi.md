# openapi_client.BackupsApi

All URIs are relative to *https://adminmanagement.local.azurestack.external*

Method | HTTP request | Description
------------- | ------------- | -------------
[**backups_get**](BackupsApi.md#backups_get) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Backup.Admin/backupLocations/{location}/backups/{backup} | 
[**backups_list**](BackupsApi.md#backups_list) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Backup.Admin/backupLocations/{location}/backups | 
[**backups_restore**](BackupsApi.md#backups_restore) | **POST** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Backup.Admin/backupLocations/{location}/backups/{backup}/restore | 


# **backups_get**
> Backup backups_get(subscription_id, resource_group_name, location, backup, api_version)



Returns a backup from a location based on name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.backup import Backup
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://adminmanagement.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://adminmanagement.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BackupsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group.
    location = 'location_example' # str | Name of the backup location.
    backup = 'backup_example' # str | Name of the backup.
    api_version = '2018-09-01' # str | Client API version. (default to '2018-09-01')

    try:
        api_response = api_instance.backups_get(subscription_id, resource_group_name, location, backup, api_version)
        print("The response of BackupsApi->backups_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BackupsApi->backups_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Name of the resource group. | 
 **location** | **str**| Name of the backup location. | 
 **backup** | **str**| Name of the backup. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-09-01&#39;]

### Return type

[**Backup**](Backup.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **backups_list**
> BackupList backups_list(subscription_id, resource_group_name, location, api_version)



Returns a list of backups from a location.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.backup_list import BackupList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://adminmanagement.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://adminmanagement.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BackupsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group.
    location = 'location_example' # str | Name of the backup location.
    api_version = '2018-09-01' # str | Client API version. (default to '2018-09-01')

    try:
        api_response = api_instance.backups_list(subscription_id, resource_group_name, location, api_version)
        print("The response of BackupsApi->backups_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BackupsApi->backups_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Name of the resource group. | 
 **location** | **str**| Name of the backup location. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-09-01&#39;]

### Return type

[**BackupList**](BackupList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **backups_restore**
> backups_restore(subscription_id, location, resource_group_name, backup, api_version, restore_options)



Restore a backup.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.restore_options import RestoreOptions
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://adminmanagement.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://adminmanagement.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BackupsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    location = 'location_example' # str | Name of the backup location.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group.
    backup = 'backup_example' # str | Name of the backup.
    api_version = '2018-09-01' # str | Client API version. (default to '2018-09-01')
    restore_options = openapi_client.RestoreOptions() # RestoreOptions | Restore options.

    try:
        api_instance.backups_restore(subscription_id, location, resource_group_name, backup, api_version, restore_options)
    except Exception as e:
        print("Exception when calling BackupsApi->backups_restore: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **location** | **str**| Name of the backup location. | 
 **resource_group_name** | **str**| Name of the resource group. | 
 **backup** | **str**| Name of the backup. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-09-01&#39;]
 **restore_options** | [**RestoreOptions**](RestoreOptions.md)| Restore options. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | ACCEPTED |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

