# openapi_client.RestorePointsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**restore_points_create**](RestorePointsApi.md#restore_points_create) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/restorePoints | 
[**restore_points_delete**](RestorePointsApi.md#restore_points_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/restorePoints/{restorePointName} | 
[**restore_points_get**](RestorePointsApi.md#restore_points_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/restorePoints/{restorePointName} | 
[**restore_points_list_by_database**](RestorePointsApi.md#restore_points_list_by_database) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/restorePoints | 


# **restore_points_create**
> RestorePoint restore_points_create(resource_group_name, server_name, database_name, subscription_id, api_version, parameters)



Creates a restore point for a data warehouse.

### Example


```python
import openapi_client
from openapi_client.models.create_database_restore_point_definition import CreateDatabaseRestorePointDefinition
from openapi_client.models.restore_point import RestorePoint
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
    api_instance = openapi_client.RestorePointsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    database_name = 'database_name_example' # str | The name of the database.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    parameters = openapi_client.CreateDatabaseRestorePointDefinition() # CreateDatabaseRestorePointDefinition | The definition for creating the restore point of this database.

    try:
        api_response = api_instance.restore_points_create(resource_group_name, server_name, database_name, subscription_id, api_version, parameters)
        print("The response of RestorePointsApi->restore_points_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RestorePointsApi->restore_points_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of the database. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **parameters** | [**CreateDatabaseRestorePointDefinition**](CreateDatabaseRestorePointDefinition.md)| The definition for creating the restore point of this database. | 

### Return type

[**RestorePoint**](RestorePoint.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully created the restore point request. |  -  |
**201** | Successfully created the restore point request. |  -  |
**202** | Accepted |  -  |
**0** | *** Error Responses: ***   * 400 FeatureDisabledOnSelectedEdition - User attempted to use a feature which is disabled on current database edition.   * 400 BackupNotAllowedOnDeactivatedDatabase - Cannot create restore point on a deactivated database.   * 400 RestorePointLimitReached - A restore point cannot be created because database would exceed the allowed quota of restore points.   * 400 RestorePointAttemptToDeleteSystemBackup - Cannot delete system restore point.   * 404 DatabaseRestorePointNotFound - Can not find database restore point.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 DatabaseDoesNotExist - User has specified a database name that does not exist on this server instance.   * 408 DatabaseRestorePointTimedOut - Create database restore point failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **restore_points_delete**
> restore_points_delete(resource_group_name, server_name, database_name, restore_point_name, subscription_id, api_version)



Deletes a restore point.

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
    api_instance = openapi_client.RestorePointsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    database_name = 'database_name_example' # str | The name of the database.
    restore_point_name = 'restore_point_name_example' # str | The name of the restore point.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_instance.restore_points_delete(resource_group_name, server_name, database_name, restore_point_name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling RestorePointsApi->restore_points_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of the database. | 
 **restore_point_name** | **str**| The name of the restore point. | 
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
**200** | Successfully deleted the restore point. |  -  |
**0** | *** Error Responses: ***   * 400 FeatureDisabledOnSelectedEdition - User attempted to use a feature which is disabled on current database edition.   * 400 BackupNotAllowedOnDeactivatedDatabase - Cannot create restore point on a deactivated database.   * 400 RestorePointLimitReached - A restore point cannot be created because database would exceed the allowed quota of restore points.   * 400 RestorePointAttemptToDeleteSystemBackup - Cannot delete system restore point.   * 404 DatabaseRestorePointNotFound - Can not find database restore point.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 DatabaseDoesNotExist - User has specified a database name that does not exist on this server instance.   * 408 DatabaseRestorePointTimedOut - Create database restore point failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **restore_points_get**
> RestorePoint restore_points_get(resource_group_name, server_name, database_name, restore_point_name, subscription_id, api_version)



Gets a restore point.

### Example


```python
import openapi_client
from openapi_client.models.restore_point import RestorePoint
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
    api_instance = openapi_client.RestorePointsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    database_name = 'database_name_example' # str | The name of the database.
    restore_point_name = 'restore_point_name_example' # str | The name of the restore point.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.restore_points_get(resource_group_name, server_name, database_name, restore_point_name, subscription_id, api_version)
        print("The response of RestorePointsApi->restore_points_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RestorePointsApi->restore_points_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of the database. | 
 **restore_point_name** | **str**| The name of the restore point. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**RestorePoint**](RestorePoint.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully returned the restore point. |  -  |
**0** | *** Error Responses: ***   * 400 FeatureDisabledOnSelectedEdition - User attempted to use a feature which is disabled on current database edition.   * 400 BackupNotAllowedOnDeactivatedDatabase - Cannot create restore point on a deactivated database.   * 400 RestorePointLimitReached - A restore point cannot be created because database would exceed the allowed quota of restore points.   * 400 RestorePointAttemptToDeleteSystemBackup - Cannot delete system restore point.   * 404 DatabaseRestorePointNotFound - Can not find database restore point.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 DatabaseDoesNotExist - User has specified a database name that does not exist on this server instance.   * 408 DatabaseRestorePointTimedOut - Create database restore point failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **restore_points_list_by_database**
> RestorePointListResult restore_points_list_by_database(resource_group_name, server_name, database_name, subscription_id, api_version)



Gets a list of database restore points.

### Example


```python
import openapi_client
from openapi_client.models.restore_point_list_result import RestorePointListResult
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
    api_instance = openapi_client.RestorePointsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    database_name = 'database_name_example' # str | The name of the database.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.restore_points_list_by_database(resource_group_name, server_name, database_name, subscription_id, api_version)
        print("The response of RestorePointsApi->restore_points_list_by_database:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RestorePointsApi->restore_points_list_by_database: %s\n" % e)
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

[**RestorePointListResult**](RestorePointListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully returned restore points. |  -  |
**0** | *** Error Responses: ***   * 400 FeatureDisabledOnSelectedEdition - User attempted to use a feature which is disabled on current database edition.   * 400 BackupNotAllowedOnDeactivatedDatabase - Cannot create restore point on a deactivated database.   * 400 RestorePointLimitReached - A restore point cannot be created because database would exceed the allowed quota of restore points.   * 400 RestorePointAttemptToDeleteSystemBackup - Cannot delete system restore point.   * 404 DatabaseRestorePointNotFound - Can not find database restore point.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 DatabaseDoesNotExist - User has specified a database name that does not exist on this server instance.   * 408 DatabaseRestorePointTimedOut - Create database restore point failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

