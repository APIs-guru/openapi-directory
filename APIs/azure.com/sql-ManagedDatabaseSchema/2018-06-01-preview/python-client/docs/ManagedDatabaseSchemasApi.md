# openapi_client.ManagedDatabaseSchemasApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**managed_database_schemas_get**](ManagedDatabaseSchemasApi.md#managed_database_schemas_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/schemas/{schemaName} | 
[**managed_database_schemas_list_by_database**](ManagedDatabaseSchemasApi.md#managed_database_schemas_list_by_database) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/schemas | 


# **managed_database_schemas_get**
> DatabaseSchema managed_database_schemas_get(resource_group_name, managed_instance_name, database_name, schema_name, subscription_id, api_version)



Get managed database schema

### Example


```python
import openapi_client
from openapi_client.models.database_schema import DatabaseSchema
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
    api_instance = openapi_client.ManagedDatabaseSchemasApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    managed_instance_name = 'managed_instance_name_example' # str | The name of the managed instance.
    database_name = 'database_name_example' # str | The name of the database.
    schema_name = 'schema_name_example' # str | The name of the schema.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.managed_database_schemas_get(resource_group_name, managed_instance_name, database_name, schema_name, subscription_id, api_version)
        print("The response of ManagedDatabaseSchemasApi->managed_database_schemas_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedDatabaseSchemasApi->managed_database_schemas_get: %s\n" % e)
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

### Return type

[**DatabaseSchema**](DatabaseSchema.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved managed database schema. |  -  |
**0** | *** Error Responses: ***   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 SourceDatabaseNotFound - The source database does not exist.   * 404 DatabaseDoesNotExist - User has specified a database name that does not exist on this server instance.   * 404 InvalidDatabaseSchema - Schema is missing in database.   * 404 InvalidDatabaseTable - Table is missing in database.   * 404 InvalidDatabaseColumn - Column is missing in table. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **managed_database_schemas_list_by_database**
> DatabaseSchemaListResult managed_database_schemas_list_by_database(resource_group_name, managed_instance_name, database_name, subscription_id, api_version, filter=filter)



List managed database schemas

### Example


```python
import openapi_client
from openapi_client.models.database_schema_list_result import DatabaseSchemaListResult
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
    api_instance = openapi_client.ManagedDatabaseSchemasApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    managed_instance_name = 'managed_instance_name_example' # str | The name of the managed instance.
    database_name = 'database_name_example' # str | The name of the database.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    filter = 'filter_example' # str | An OData filter expression that filters elements in the collection. (optional)

    try:
        api_response = api_instance.managed_database_schemas_list_by_database(resource_group_name, managed_instance_name, database_name, subscription_id, api_version, filter=filter)
        print("The response of ManagedDatabaseSchemasApi->managed_database_schemas_list_by_database:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedDatabaseSchemasApi->managed_database_schemas_list_by_database: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **managed_instance_name** | **str**| The name of the managed instance. | 
 **database_name** | **str**| The name of the database. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **filter** | **str**| An OData filter expression that filters elements in the collection. | [optional] 

### Return type

[**DatabaseSchemaListResult**](DatabaseSchemaListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved managed database schemas. |  -  |
**0** | *** Error Responses: ***   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 SourceDatabaseNotFound - The source database does not exist.   * 404 DatabaseDoesNotExist - User has specified a database name that does not exist on this server instance.   * 404 InvalidDatabaseSchema - Schema is missing in database.   * 404 InvalidDatabaseTable - Table is missing in database.   * 404 InvalidDatabaseColumn - Column is missing in table. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

