# openapi_client.ManagedDatabaseTablesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**managed_database_tables_get**](ManagedDatabaseTablesApi.md#managed_database_tables_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/schemas/{schemaName}/tables/{tableName} | 
[**managed_database_tables_list_by_schema**](ManagedDatabaseTablesApi.md#managed_database_tables_list_by_schema) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/schemas/{schemaName}/tables | 


# **managed_database_tables_get**
> DatabaseTable managed_database_tables_get(resource_group_name, managed_instance_name, database_name, schema_name, table_name, subscription_id, api_version)



Get managed database table

### Example


```python
import openapi_client
from openapi_client.models.database_table import DatabaseTable
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
    api_instance = openapi_client.ManagedDatabaseTablesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    managed_instance_name = 'managed_instance_name_example' # str | The name of the managed instance.
    database_name = 'database_name_example' # str | The name of the database.
    schema_name = 'schema_name_example' # str | The name of the schema.
    table_name = 'table_name_example' # str | The name of the table.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.managed_database_tables_get(resource_group_name, managed_instance_name, database_name, schema_name, table_name, subscription_id, api_version)
        print("The response of ManagedDatabaseTablesApi->managed_database_tables_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedDatabaseTablesApi->managed_database_tables_get: %s\n" % e)
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

### Return type

[**DatabaseTable**](DatabaseTable.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved managed database table. |  -  |
**0** | *** Error Responses: ***   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 SourceDatabaseNotFound - The source database does not exist.   * 404 DatabaseDoesNotExist - User has specified a database name that does not exist on this server instance.   * 404 InvalidDatabaseSchema - Schema is missing in database.   * 404 InvalidDatabaseTable - Table is missing in database.   * 404 InvalidDatabaseColumn - Column is missing in table. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **managed_database_tables_list_by_schema**
> DatabaseTableListResult managed_database_tables_list_by_schema(resource_group_name, managed_instance_name, database_name, schema_name, subscription_id, api_version, filter=filter)



List managed database tables

### Example


```python
import openapi_client
from openapi_client.models.database_table_list_result import DatabaseTableListResult
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
    api_instance = openapi_client.ManagedDatabaseTablesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    managed_instance_name = 'managed_instance_name_example' # str | The name of the managed instance.
    database_name = 'database_name_example' # str | The name of the database.
    schema_name = 'schema_name_example' # str | The name of the schema.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    filter = 'filter_example' # str | An OData filter expression that filters elements in the collection. (optional)

    try:
        api_response = api_instance.managed_database_tables_list_by_schema(resource_group_name, managed_instance_name, database_name, schema_name, subscription_id, api_version, filter=filter)
        print("The response of ManagedDatabaseTablesApi->managed_database_tables_list_by_schema:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedDatabaseTablesApi->managed_database_tables_list_by_schema: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **managed_instance_name** | **str**| The name of the managed instance. | 
 **database_name** | **str**| The name of the database. | 
 **schema_name** | **str**| The name of the schema. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **filter** | **str**| An OData filter expression that filters elements in the collection. | [optional] 

### Return type

[**DatabaseTableListResult**](DatabaseTableListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved managed database tables. |  -  |
**0** | *** Error Responses: ***   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 SourceDatabaseNotFound - The source database does not exist.   * 404 DatabaseDoesNotExist - User has specified a database name that does not exist on this server instance.   * 404 InvalidDatabaseSchema - Schema is missing in database.   * 404 InvalidDatabaseTable - Table is missing in database.   * 404 InvalidDatabaseColumn - Column is missing in table. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

