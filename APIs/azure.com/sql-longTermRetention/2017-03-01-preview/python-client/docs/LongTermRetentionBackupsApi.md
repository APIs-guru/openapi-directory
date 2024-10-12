# openapi_client.LongTermRetentionBackupsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**long_term_retention_backups_delete**](LongTermRetentionBackupsApi.md#long_term_retention_backups_delete) | **DELETE** /subscriptions/{subscriptionId}/providers/Microsoft.Sql/locations/{locationName}/longTermRetentionServers/{longTermRetentionServerName}/longTermRetentionDatabases/{longTermRetentionDatabaseName}/longTermRetentionBackups/{backupName} | 
[**long_term_retention_backups_delete_by_resource_group**](LongTermRetentionBackupsApi.md#long_term_retention_backups_delete_by_resource_group) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/locations/{locationName}/longTermRetentionServers/{longTermRetentionServerName}/longTermRetentionDatabases/{longTermRetentionDatabaseName}/longTermRetentionBackups/{backupName} | 
[**long_term_retention_backups_get**](LongTermRetentionBackupsApi.md#long_term_retention_backups_get) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Sql/locations/{locationName}/longTermRetentionServers/{longTermRetentionServerName}/longTermRetentionDatabases/{longTermRetentionDatabaseName}/longTermRetentionBackups/{backupName} | 
[**long_term_retention_backups_get_by_resource_group**](LongTermRetentionBackupsApi.md#long_term_retention_backups_get_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/locations/{locationName}/longTermRetentionServers/{longTermRetentionServerName}/longTermRetentionDatabases/{longTermRetentionDatabaseName}/longTermRetentionBackups/{backupName} | 
[**long_term_retention_backups_list_by_database**](LongTermRetentionBackupsApi.md#long_term_retention_backups_list_by_database) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Sql/locations/{locationName}/longTermRetentionServers/{longTermRetentionServerName}/longTermRetentionDatabases/{longTermRetentionDatabaseName}/longTermRetentionBackups | 
[**long_term_retention_backups_list_by_location**](LongTermRetentionBackupsApi.md#long_term_retention_backups_list_by_location) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Sql/locations/{locationName}/longTermRetentionBackups | 
[**long_term_retention_backups_list_by_resource_group_database**](LongTermRetentionBackupsApi.md#long_term_retention_backups_list_by_resource_group_database) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/locations/{locationName}/longTermRetentionServers/{longTermRetentionServerName}/longTermRetentionDatabases/{longTermRetentionDatabaseName}/longTermRetentionBackups | 
[**long_term_retention_backups_list_by_resource_group_location**](LongTermRetentionBackupsApi.md#long_term_retention_backups_list_by_resource_group_location) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/locations/{locationName}/longTermRetentionBackups | 
[**long_term_retention_backups_list_by_resource_group_server**](LongTermRetentionBackupsApi.md#long_term_retention_backups_list_by_resource_group_server) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/locations/{locationName}/longTermRetentionServers/{longTermRetentionServerName}/longTermRetentionBackups | 
[**long_term_retention_backups_list_by_server**](LongTermRetentionBackupsApi.md#long_term_retention_backups_list_by_server) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Sql/locations/{locationName}/longTermRetentionServers/{longTermRetentionServerName}/longTermRetentionBackups | 


# **long_term_retention_backups_delete**
> long_term_retention_backups_delete(location_name, long_term_retention_server_name, long_term_retention_database_name, backup_name, subscription_id, api_version)



Deletes a long term retention backup.

### Example


```python
import openapi_client
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
    api_instance = openapi_client.LongTermRetentionBackupsApi(api_client)
    location_name = 'location_name_example' # str | The location of the database
    long_term_retention_server_name = 'long_term_retention_server_name_example' # str | The name of the server
    long_term_retention_database_name = 'long_term_retention_database_name_example' # str | The name of the database
    backup_name = 'backup_name_example' # str | The backup name.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_instance.long_term_retention_backups_delete(location_name, long_term_retention_server_name, long_term_retention_database_name, backup_name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling LongTermRetentionBackupsApi->long_term_retention_backups_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location_name** | **str**| The location of the database | 
 **long_term_retention_server_name** | **str**| The name of the server | 
 **long_term_retention_database_name** | **str**| The name of the database | 
 **backup_name** | **str**| The backup name. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully deleted the backup. |  -  |
**202** | Accepted |  -  |
**0** | *** Error Responses: ***   * 400 InvalidLongTermRetentionBackupId - Invalid long term retention backup identifier.   * 404 ServerNotInSubscriptionResourceGroup - Specified server does not exist in the specified resource group and subscription.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **long_term_retention_backups_delete_by_resource_group**
> long_term_retention_backups_delete_by_resource_group(resource_group_name, location_name, long_term_retention_server_name, long_term_retention_database_name, backup_name, subscription_id, api_version)



Deletes a long term retention backup.

### Example


```python
import openapi_client
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
    api_instance = openapi_client.LongTermRetentionBackupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    location_name = 'location_name_example' # str | The location of the database
    long_term_retention_server_name = 'long_term_retention_server_name_example' # str | The name of the server
    long_term_retention_database_name = 'long_term_retention_database_name_example' # str | The name of the database
    backup_name = 'backup_name_example' # str | The backup name.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_instance.long_term_retention_backups_delete_by_resource_group(resource_group_name, location_name, long_term_retention_server_name, long_term_retention_database_name, backup_name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling LongTermRetentionBackupsApi->long_term_retention_backups_delete_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **location_name** | **str**| The location of the database | 
 **long_term_retention_server_name** | **str**| The name of the server | 
 **long_term_retention_database_name** | **str**| The name of the database | 
 **backup_name** | **str**| The backup name. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully deleted the backup. |  -  |
**202** | Accepted |  -  |
**0** | *** Error Responses: ***   * 400 InvalidLongTermRetentionBackupId - Invalid long term retention backup identifier.   * 404 ServerNotInSubscriptionResourceGroup - Specified server does not exist in the specified resource group and subscription.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 ServerNotInSubscriptionResourceGroup - Specified server does not exist in the specified resource group and subscription.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **long_term_retention_backups_get**
> LongTermRetentionBackup long_term_retention_backups_get(location_name, long_term_retention_server_name, long_term_retention_database_name, backup_name, subscription_id, api_version)



Gets a long term retention backup.

### Example


```python
import openapi_client
from openapi_client.models.long_term_retention_backup import LongTermRetentionBackup
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
    api_instance = openapi_client.LongTermRetentionBackupsApi(api_client)
    location_name = 'location_name_example' # str | The location of the database.
    long_term_retention_server_name = 'long_term_retention_server_name_example' # str | The name of the server
    long_term_retention_database_name = 'long_term_retention_database_name_example' # str | The name of the database
    backup_name = 'backup_name_example' # str | The backup name.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.long_term_retention_backups_get(location_name, long_term_retention_server_name, long_term_retention_database_name, backup_name, subscription_id, api_version)
        print("The response of LongTermRetentionBackupsApi->long_term_retention_backups_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LongTermRetentionBackupsApi->long_term_retention_backups_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location_name** | **str**| The location of the database. | 
 **long_term_retention_server_name** | **str**| The name of the server | 
 **long_term_retention_database_name** | **str**| The name of the database | 
 **backup_name** | **str**| The backup name. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**LongTermRetentionBackup**](LongTermRetentionBackup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the backup. |  -  |
**0** | *** Error Responses: ***   * 400 InvalidLongTermRetentionBackupId - Invalid long term retention backup identifier.   * 404 ServerNotInSubscriptionResourceGroup - Specified server does not exist in the specified resource group and subscription.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 ResourceNotFound - The requested resource was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **long_term_retention_backups_get_by_resource_group**
> LongTermRetentionBackup long_term_retention_backups_get_by_resource_group(resource_group_name, location_name, long_term_retention_server_name, long_term_retention_database_name, backup_name, subscription_id, api_version)



Gets a long term retention backup.

### Example


```python
import openapi_client
from openapi_client.models.long_term_retention_backup import LongTermRetentionBackup
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
    api_instance = openapi_client.LongTermRetentionBackupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    location_name = 'location_name_example' # str | The location of the database.
    long_term_retention_server_name = 'long_term_retention_server_name_example' # str | The name of the server
    long_term_retention_database_name = 'long_term_retention_database_name_example' # str | The name of the database
    backup_name = 'backup_name_example' # str | The backup name.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.long_term_retention_backups_get_by_resource_group(resource_group_name, location_name, long_term_retention_server_name, long_term_retention_database_name, backup_name, subscription_id, api_version)
        print("The response of LongTermRetentionBackupsApi->long_term_retention_backups_get_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LongTermRetentionBackupsApi->long_term_retention_backups_get_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **location_name** | **str**| The location of the database. | 
 **long_term_retention_server_name** | **str**| The name of the server | 
 **long_term_retention_database_name** | **str**| The name of the database | 
 **backup_name** | **str**| The backup name. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**LongTermRetentionBackup**](LongTermRetentionBackup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the backup. |  -  |
**0** | *** Error Responses: ***   * 400 InvalidLongTermRetentionBackupId - Invalid long term retention backup identifier.   * 404 ServerNotInSubscriptionResourceGroup - Specified server does not exist in the specified resource group and subscription.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 ResourceNotFound - The requested resource was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **long_term_retention_backups_list_by_database**
> LongTermRetentionBackupListResult long_term_retention_backups_list_by_database(location_name, long_term_retention_server_name, long_term_retention_database_name, subscription_id, api_version, only_latest_per_database=only_latest_per_database, database_state=database_state)



Lists all long term retention backups for a database.

### Example


```python
import openapi_client
from openapi_client.models.long_term_retention_backup_list_result import LongTermRetentionBackupListResult
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
    api_instance = openapi_client.LongTermRetentionBackupsApi(api_client)
    location_name = 'location_name_example' # str | The location of the database
    long_term_retention_server_name = 'long_term_retention_server_name_example' # str | The name of the server
    long_term_retention_database_name = 'long_term_retention_database_name_example' # str | The name of the database
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    only_latest_per_database = True # bool | Whether or not to only get the latest backup for each database. (optional)
    database_state = 'database_state_example' # str | Whether to query against just live databases, just deleted databases, or all databases. (optional)

    try:
        api_response = api_instance.long_term_retention_backups_list_by_database(location_name, long_term_retention_server_name, long_term_retention_database_name, subscription_id, api_version, only_latest_per_database=only_latest_per_database, database_state=database_state)
        print("The response of LongTermRetentionBackupsApi->long_term_retention_backups_list_by_database:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LongTermRetentionBackupsApi->long_term_retention_backups_list_by_database: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location_name** | **str**| The location of the database | 
 **long_term_retention_server_name** | **str**| The name of the server | 
 **long_term_retention_database_name** | **str**| The name of the database | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **only_latest_per_database** | **bool**| Whether or not to only get the latest backup for each database. | [optional] 
 **database_state** | **str**| Whether to query against just live databases, just deleted databases, or all databases. | [optional] 

### Return type

[**LongTermRetentionBackupListResult**](LongTermRetentionBackupListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of backups. |  -  |
**0** | *** Error Responses: ***   * 404 ServerNotInSubscriptionResourceGroup - Specified server does not exist in the specified resource group and subscription.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **long_term_retention_backups_list_by_location**
> LongTermRetentionBackupListResult long_term_retention_backups_list_by_location(location_name, subscription_id, api_version, only_latest_per_database=only_latest_per_database, database_state=database_state)



Lists the long term retention backups for a given location.

### Example


```python
import openapi_client
from openapi_client.models.long_term_retention_backup_list_result import LongTermRetentionBackupListResult
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
    api_instance = openapi_client.LongTermRetentionBackupsApi(api_client)
    location_name = 'location_name_example' # str | The location of the database
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    only_latest_per_database = True # bool | Whether or not to only get the latest backup for each database. (optional)
    database_state = 'database_state_example' # str | Whether to query against just live databases, just deleted databases, or all databases. (optional)

    try:
        api_response = api_instance.long_term_retention_backups_list_by_location(location_name, subscription_id, api_version, only_latest_per_database=only_latest_per_database, database_state=database_state)
        print("The response of LongTermRetentionBackupsApi->long_term_retention_backups_list_by_location:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LongTermRetentionBackupsApi->long_term_retention_backups_list_by_location: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location_name** | **str**| The location of the database | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **only_latest_per_database** | **bool**| Whether or not to only get the latest backup for each database. | [optional] 
 **database_state** | **str**| Whether to query against just live databases, just deleted databases, or all databases. | [optional] 

### Return type

[**LongTermRetentionBackupListResult**](LongTermRetentionBackupListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of backups. |  -  |
**0** | *** Error Responses: ***   * 404 ServerNotInSubscriptionResourceGroup - Specified server does not exist in the specified resource group and subscription.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **long_term_retention_backups_list_by_resource_group_database**
> LongTermRetentionBackupListResult long_term_retention_backups_list_by_resource_group_database(resource_group_name, location_name, long_term_retention_server_name, long_term_retention_database_name, subscription_id, api_version, only_latest_per_database=only_latest_per_database, database_state=database_state)



Lists all long term retention backups for a database.

### Example


```python
import openapi_client
from openapi_client.models.long_term_retention_backup_list_result import LongTermRetentionBackupListResult
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
    api_instance = openapi_client.LongTermRetentionBackupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    location_name = 'location_name_example' # str | The location of the database
    long_term_retention_server_name = 'long_term_retention_server_name_example' # str | The name of the server
    long_term_retention_database_name = 'long_term_retention_database_name_example' # str | The name of the database
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    only_latest_per_database = True # bool | Whether or not to only get the latest backup for each database. (optional)
    database_state = 'database_state_example' # str | Whether to query against just live databases, just deleted databases, or all databases. (optional)

    try:
        api_response = api_instance.long_term_retention_backups_list_by_resource_group_database(resource_group_name, location_name, long_term_retention_server_name, long_term_retention_database_name, subscription_id, api_version, only_latest_per_database=only_latest_per_database, database_state=database_state)
        print("The response of LongTermRetentionBackupsApi->long_term_retention_backups_list_by_resource_group_database:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LongTermRetentionBackupsApi->long_term_retention_backups_list_by_resource_group_database: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **location_name** | **str**| The location of the database | 
 **long_term_retention_server_name** | **str**| The name of the server | 
 **long_term_retention_database_name** | **str**| The name of the database | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **only_latest_per_database** | **bool**| Whether or not to only get the latest backup for each database. | [optional] 
 **database_state** | **str**| Whether to query against just live databases, just deleted databases, or all databases. | [optional] 

### Return type

[**LongTermRetentionBackupListResult**](LongTermRetentionBackupListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of backups. |  -  |
**0** | *** Error Responses: ***   * 404 ServerNotInSubscriptionResourceGroup - Specified server does not exist in the specified resource group and subscription.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **long_term_retention_backups_list_by_resource_group_location**
> LongTermRetentionBackupListResult long_term_retention_backups_list_by_resource_group_location(resource_group_name, location_name, subscription_id, api_version, only_latest_per_database=only_latest_per_database, database_state=database_state)



Lists the long term retention backups for a given location.

### Example


```python
import openapi_client
from openapi_client.models.long_term_retention_backup_list_result import LongTermRetentionBackupListResult
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
    api_instance = openapi_client.LongTermRetentionBackupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    location_name = 'location_name_example' # str | The location of the database
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    only_latest_per_database = True # bool | Whether or not to only get the latest backup for each database. (optional)
    database_state = 'database_state_example' # str | Whether to query against just live databases, just deleted databases, or all databases. (optional)

    try:
        api_response = api_instance.long_term_retention_backups_list_by_resource_group_location(resource_group_name, location_name, subscription_id, api_version, only_latest_per_database=only_latest_per_database, database_state=database_state)
        print("The response of LongTermRetentionBackupsApi->long_term_retention_backups_list_by_resource_group_location:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LongTermRetentionBackupsApi->long_term_retention_backups_list_by_resource_group_location: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **location_name** | **str**| The location of the database | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **only_latest_per_database** | **bool**| Whether or not to only get the latest backup for each database. | [optional] 
 **database_state** | **str**| Whether to query against just live databases, just deleted databases, or all databases. | [optional] 

### Return type

[**LongTermRetentionBackupListResult**](LongTermRetentionBackupListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of backups. |  -  |
**0** | *** Error Responses: ***   * 404 ServerNotInSubscriptionResourceGroup - Specified server does not exist in the specified resource group and subscription.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **long_term_retention_backups_list_by_resource_group_server**
> LongTermRetentionBackupListResult long_term_retention_backups_list_by_resource_group_server(resource_group_name, location_name, long_term_retention_server_name, subscription_id, api_version, only_latest_per_database=only_latest_per_database, database_state=database_state)



Lists the long term retention backups for a given server.

### Example


```python
import openapi_client
from openapi_client.models.long_term_retention_backup_list_result import LongTermRetentionBackupListResult
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
    api_instance = openapi_client.LongTermRetentionBackupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    location_name = 'location_name_example' # str | The location of the database
    long_term_retention_server_name = 'long_term_retention_server_name_example' # str | The name of the server
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    only_latest_per_database = True # bool | Whether or not to only get the latest backup for each database. (optional)
    database_state = 'database_state_example' # str | Whether to query against just live databases, just deleted databases, or all databases. (optional)

    try:
        api_response = api_instance.long_term_retention_backups_list_by_resource_group_server(resource_group_name, location_name, long_term_retention_server_name, subscription_id, api_version, only_latest_per_database=only_latest_per_database, database_state=database_state)
        print("The response of LongTermRetentionBackupsApi->long_term_retention_backups_list_by_resource_group_server:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LongTermRetentionBackupsApi->long_term_retention_backups_list_by_resource_group_server: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **location_name** | **str**| The location of the database | 
 **long_term_retention_server_name** | **str**| The name of the server | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **only_latest_per_database** | **bool**| Whether or not to only get the latest backup for each database. | [optional] 
 **database_state** | **str**| Whether to query against just live databases, just deleted databases, or all databases. | [optional] 

### Return type

[**LongTermRetentionBackupListResult**](LongTermRetentionBackupListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of backups. |  -  |
**0** | *** Error Responses: ***   * 404 ServerNotInSubscriptionResourceGroup - Specified server does not exist in the specified resource group and subscription.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **long_term_retention_backups_list_by_server**
> LongTermRetentionBackupListResult long_term_retention_backups_list_by_server(location_name, long_term_retention_server_name, subscription_id, api_version, only_latest_per_database=only_latest_per_database, database_state=database_state)



Lists the long term retention backups for a given server.

### Example


```python
import openapi_client
from openapi_client.models.long_term_retention_backup_list_result import LongTermRetentionBackupListResult
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
    api_instance = openapi_client.LongTermRetentionBackupsApi(api_client)
    location_name = 'location_name_example' # str | The location of the database
    long_term_retention_server_name = 'long_term_retention_server_name_example' # str | The name of the server
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    only_latest_per_database = True # bool | Whether or not to only get the latest backup for each database. (optional)
    database_state = 'database_state_example' # str | Whether to query against just live databases, just deleted databases, or all databases. (optional)

    try:
        api_response = api_instance.long_term_retention_backups_list_by_server(location_name, long_term_retention_server_name, subscription_id, api_version, only_latest_per_database=only_latest_per_database, database_state=database_state)
        print("The response of LongTermRetentionBackupsApi->long_term_retention_backups_list_by_server:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LongTermRetentionBackupsApi->long_term_retention_backups_list_by_server: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location_name** | **str**| The location of the database | 
 **long_term_retention_server_name** | **str**| The name of the server | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **only_latest_per_database** | **bool**| Whether or not to only get the latest backup for each database. | [optional] 
 **database_state** | **str**| Whether to query against just live databases, just deleted databases, or all databases. | [optional] 

### Return type

[**LongTermRetentionBackupListResult**](LongTermRetentionBackupListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of backups. |  -  |
**0** | *** Error Responses: ***   * 404 ServerNotInSubscriptionResourceGroup - Specified server does not exist in the specified resource group and subscription.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

