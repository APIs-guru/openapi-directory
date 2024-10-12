# openapi_client.ManagedDatabaseColumnsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**managed_database_columns_get**](ManagedDatabaseColumnsApi.md#managed_database_columns_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/schemas/{schemaName}/tables/{tableName}/columns/{columnName} | 
[**managed_database_columns_list_by_table**](ManagedDatabaseColumnsApi.md#managed_database_columns_list_by_table) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/schemas/{schemaName}/tables/{tableName}/columns | 


# **managed_database_columns_get**
> DatabaseColumn managed_database_columns_get(resource_group_name, managed_instance_name, database_name, schema_name, table_name, column_name, subscription_id, api_version)



Get managed database column

### Example


```python
import openapi_client
from openapi_client.models.database_column import DatabaseColumn
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
    api_instance = openapi_client.ManagedDatabaseColumnsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    managed_instance_name = 'managed_instance_name_example' # str | The name of the managed instance.
    database_name = 'database_name_example' # str | The name of the database.
    schema_name = 'schema_name_example' # str | The name of the schema.
    table_name = 'table_name_example' # str | The name of the table.
    column_name = 'column_name_example' # str | The name of the column.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.managed_database_columns_get(resource_group_name, managed_instance_name, database_name, schema_name, table_name, column_name, subscription_id, api_version)
        print("The response of ManagedDatabaseColumnsApi->managed_database_columns_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedDatabaseColumnsApi->managed_database_columns_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **managed_instance_name** | **str**| The name of the managed instance. | 
 **database_name** | **str**| The name of the database. | 
 **schema_name** | **str**| The name of the schema. | 
 **table_name** | **str**| The name of the table. | 
 **column_name** | **str**| The name of the column. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**DatabaseColumn**](DatabaseColumn.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved managed database column. |  -  |
**0** | *** Error Responses: ***   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 SourceDatabaseNotFound - The source database does not exist.   * 404 DatabaseDoesNotExist - User has specified a database name that does not exist on this server instance.   * 404 InvalidDatabaseSchema - Schema is missing in database.   * 404 InvalidDatabaseTable - Table is missing in database.   * 404 InvalidDatabaseColumn - Column is missing in table. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **managed_database_columns_list_by_table**
> DatabaseColumnListResult managed_database_columns_list_by_table(resource_group_name, managed_instance_name, database_name, schema_name, table_name, subscription_id, api_version, filter=filter)



List managed database columns

### Example


```python
import openapi_client
from openapi_client.models.database_column_list_result import DatabaseColumnListResult
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
    api_instance = openapi_client.ManagedDatabaseColumnsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    managed_instance_name = 'managed_instance_name_example' # str | The name of the managed instance.
    database_name = 'database_name_example' # str | The name of the database.
    schema_name = 'schema_name_example' # str | The name of the schema.
    table_name = 'table_name_example' # str | The name of the table.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    filter = 'filter_example' # str | An OData filter expression that filters elements in the collection. (optional)

    try:
        api_response = api_instance.managed_database_columns_list_by_table(resource_group_name, managed_instance_name, database_name, schema_name, table_name, subscription_id, api_version, filter=filter)
        print("The response of ManagedDatabaseColumnsApi->managed_database_columns_list_by_table:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedDatabaseColumnsApi->managed_database_columns_list_by_table: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **managed_instance_name** | **str**| The name of the managed instance. | 
 **database_name** | **str**| The name of the database. | 
 **schema_name** | **str**| The name of the schema. | 
 **table_name** | **str**| The name of the table. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **filter** | **str**| An OData filter expression that filters elements in the collection. | [optional] 

### Return type

[**DatabaseColumnListResult**](DatabaseColumnListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved managed database columns. |  -  |
**0** | *** Error Responses: ***   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 SourceDatabaseNotFound - The source database does not exist.   * 404 DatabaseDoesNotExist - User has specified a database name that does not exist on this server instance.   * 404 InvalidDatabaseSchema - Schema is missing in database.   * 404 InvalidDatabaseTable - Table is missing in database.   * 404 InvalidDatabaseColumn - Column is missing in table. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

