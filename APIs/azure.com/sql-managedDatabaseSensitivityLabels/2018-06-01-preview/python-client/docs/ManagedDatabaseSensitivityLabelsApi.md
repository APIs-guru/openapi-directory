# openapi_client.ManagedDatabaseSensitivityLabelsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**managed_database_sensitivity_labels_create_or_update**](ManagedDatabaseSensitivityLabelsApi.md#managed_database_sensitivity_labels_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/schemas/{schemaName}/tables/{tableName}/columns/{columnName}/sensitivityLabels/{sensitivityLabelSource} | 
[**managed_database_sensitivity_labels_delete**](ManagedDatabaseSensitivityLabelsApi.md#managed_database_sensitivity_labels_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/schemas/{schemaName}/tables/{tableName}/columns/{columnName}/sensitivityLabels/{sensitivityLabelSource} | 
[**managed_database_sensitivity_labels_disable_recommendation**](ManagedDatabaseSensitivityLabelsApi.md#managed_database_sensitivity_labels_disable_recommendation) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/schemas/{schemaName}/tables/{tableName}/columns/{columnName}/sensitivityLabels/{sensitivityLabelSource}/disable | 
[**managed_database_sensitivity_labels_enable_recommendation**](ManagedDatabaseSensitivityLabelsApi.md#managed_database_sensitivity_labels_enable_recommendation) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/schemas/{schemaName}/tables/{tableName}/columns/{columnName}/sensitivityLabels/{sensitivityLabelSource}/enable | 
[**managed_database_sensitivity_labels_get**](ManagedDatabaseSensitivityLabelsApi.md#managed_database_sensitivity_labels_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/schemas/{schemaName}/tables/{tableName}/columns/{columnName}/sensitivityLabels/{sensitivityLabelSource} | 
[**managed_database_sensitivity_labels_list_current_by_database**](ManagedDatabaseSensitivityLabelsApi.md#managed_database_sensitivity_labels_list_current_by_database) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/currentSensitivityLabels | 
[**managed_database_sensitivity_labels_list_recommended_by_database**](ManagedDatabaseSensitivityLabelsApi.md#managed_database_sensitivity_labels_list_recommended_by_database) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/recommendedSensitivityLabels | 


# **managed_database_sensitivity_labels_create_or_update**
> SensitivityLabel managed_database_sensitivity_labels_create_or_update(resource_group_name, managed_instance_name, database_name, schema_name, table_name, column_name, sensitivity_label_source, subscription_id, api_version, parameters)



Creates or updates the sensitivity label of a given column

### Example


```python
import openapi_client
from openapi_client.models.sensitivity_label import SensitivityLabel
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
    api_instance = openapi_client.ManagedDatabaseSensitivityLabelsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    managed_instance_name = 'managed_instance_name_example' # str | The name of the managed instance.
    database_name = 'database_name_example' # str | The name of the database.
    schema_name = 'schema_name_example' # str | The name of the schema.
    table_name = 'table_name_example' # str | The name of the table.
    column_name = 'column_name_example' # str | The name of the column.
    sensitivity_label_source = 'sensitivity_label_source_example' # str | The source of the sensitivity label.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    parameters = openapi_client.SensitivityLabel() # SensitivityLabel | The column sensitivity label resource.

    try:
        api_response = api_instance.managed_database_sensitivity_labels_create_or_update(resource_group_name, managed_instance_name, database_name, schema_name, table_name, column_name, sensitivity_label_source, subscription_id, api_version, parameters)
        print("The response of ManagedDatabaseSensitivityLabelsApi->managed_database_sensitivity_labels_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedDatabaseSensitivityLabelsApi->managed_database_sensitivity_labels_create_or_update: %s\n" % e)
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
 **sensitivity_label_source** | **str**| The source of the sensitivity label. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **parameters** | [**SensitivityLabel**](SensitivityLabel.md)| The column sensitivity label resource. | 

### Return type

[**SensitivityLabel**](SensitivityLabel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the sensitivity label. |  -  |
**201** | Successfully created the sensitivity label. |  -  |
**0** | *** Error Responses: ***   * 400 DatawarehouseDatabaseIsDeactivated - Could not execute Data Classification operation because the database is paused. Please resume it.   * 400 SensitivityLabelSourceNameNotSupported - The specified sensitivity label source is not valid   * 400 InvalidSensitivityLabelResource - The specified sensitivity label resource is not valid   * 400 SensitivityLabelLabelNameAndInfoTypeNotProvided - At least one of LabelName and InformationType must be specified   * 400 LabelNameTooLong - Label name cannot exceed {0} characters   * 400 InformationTypeTooLong - Information type cannot exceed {0} characters   * 400 LabelIdMustBeGuid - Label ID must be a GUID   * 400 InformationTypeIdMustBeGuid - Information type ID must be a GUID   * 400 LabelMissing - Label is missing   * 400 InformationTypeMissing - Information Type is missing   * 404 SensitivityLabelsColumnNotFound - The specified schema/table/column could not be found   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 DatabaseDoesNotExist - User has specified a database name that does not exist on this server instance.   * 404 SensitivityLabelsLabelNotFound - The specified sensitivity label could not be found   * 501 SensitivityLabelRecommendedSourceNameNotSupported - &#39;Recommended&#39; sensitivity label source is not supported yet |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **managed_database_sensitivity_labels_delete**
> managed_database_sensitivity_labels_delete(resource_group_name, managed_instance_name, database_name, schema_name, table_name, column_name, sensitivity_label_source, subscription_id, api_version)



Deletes the sensitivity label of a given column

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
    api_instance = openapi_client.ManagedDatabaseSensitivityLabelsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    managed_instance_name = 'managed_instance_name_example' # str | The name of the managed instance.
    database_name = 'database_name_example' # str | The name of the database.
    schema_name = 'schema_name_example' # str | The name of the schema.
    table_name = 'table_name_example' # str | The name of the table.
    column_name = 'column_name_example' # str | The name of the column.
    sensitivity_label_source = 'sensitivity_label_source_example' # str | The source of the sensitivity label.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_instance.managed_database_sensitivity_labels_delete(resource_group_name, managed_instance_name, database_name, schema_name, table_name, column_name, sensitivity_label_source, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling ManagedDatabaseSensitivityLabelsApi->managed_database_sensitivity_labels_delete: %s\n" % e)
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
 **sensitivity_label_source** | **str**| The source of the sensitivity label. | 
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
**200** | Successfully deleted the sensitivity label. |  -  |
**0** | *** Error Responses: ***   * 400 DatawarehouseDatabaseIsDeactivated - Could not execute Data Classification operation because the database is paused. Please resume it.   * 400 SensitivityLabelSourceNameNotSupported - The specified sensitivity label source is not valid   * 404 SensitivityLabelsColumnNotFound - The specified schema/table/column could not be found   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 DatabaseDoesNotExist - User has specified a database name that does not exist on this server instance.   * 404 SensitivityLabelsLabelNotFound - The specified sensitivity label could not be found   * 501 SensitivityLabelRecommendedSourceNameNotSupported - &#39;Recommended&#39; sensitivity label source is not supported yet |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **managed_database_sensitivity_labels_disable_recommendation**
> managed_database_sensitivity_labels_disable_recommendation(resource_group_name, managed_instance_name, database_name, schema_name, table_name, column_name, sensitivity_label_source, subscription_id, api_version)



Disables sensitivity recommendations on a given column

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
    api_instance = openapi_client.ManagedDatabaseSensitivityLabelsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    managed_instance_name = 'managed_instance_name_example' # str | The name of the managed instance.
    database_name = 'database_name_example' # str | The name of the database.
    schema_name = 'schema_name_example' # str | The name of the schema.
    table_name = 'table_name_example' # str | The name of the table.
    column_name = 'column_name_example' # str | The name of the column.
    sensitivity_label_source = 'sensitivity_label_source_example' # str | 
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_instance.managed_database_sensitivity_labels_disable_recommendation(resource_group_name, managed_instance_name, database_name, schema_name, table_name, column_name, sensitivity_label_source, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling ManagedDatabaseSensitivityLabelsApi->managed_database_sensitivity_labels_disable_recommendation: %s\n" % e)
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
 **sensitivity_label_source** | **str**|  | 
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
**200** | Successfully disabled the sensitivity recommendations on the given column. |  -  |
**0** | *** Error Responses: ***   * 404 SensitivityLabelsColumnNotFound - The specified column could not be found   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 DatabaseDoesNotExist - User has specified a database name that does not exist on this server instance. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **managed_database_sensitivity_labels_enable_recommendation**
> managed_database_sensitivity_labels_enable_recommendation(resource_group_name, managed_instance_name, database_name, schema_name, table_name, column_name, sensitivity_label_source, subscription_id, api_version)



Enables sensitivity recommendations on a given column (recommendations are enabled by default on all columns)

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
    api_instance = openapi_client.ManagedDatabaseSensitivityLabelsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    managed_instance_name = 'managed_instance_name_example' # str | The name of the managed instance.
    database_name = 'database_name_example' # str | The name of the database.
    schema_name = 'schema_name_example' # str | The name of the schema.
    table_name = 'table_name_example' # str | The name of the table.
    column_name = 'column_name_example' # str | The name of the column.
    sensitivity_label_source = 'sensitivity_label_source_example' # str | 
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_instance.managed_database_sensitivity_labels_enable_recommendation(resource_group_name, managed_instance_name, database_name, schema_name, table_name, column_name, sensitivity_label_source, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling ManagedDatabaseSensitivityLabelsApi->managed_database_sensitivity_labels_enable_recommendation: %s\n" % e)
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
 **sensitivity_label_source** | **str**|  | 
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
**200** | Successfully enabled the sensitivity recommendations on the given column. |  -  |
**0** | *** Error Responses: ***   * 404 SensitivityLabelsColumnNotFound - The specified column could not be found   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 DatabaseDoesNotExist - User has specified a database name that does not exist on this server instance. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **managed_database_sensitivity_labels_get**
> SensitivityLabel managed_database_sensitivity_labels_get(resource_group_name, managed_instance_name, database_name, schema_name, table_name, column_name, sensitivity_label_source, subscription_id, api_version)



Gets the sensitivity label of a given column

### Example


```python
import openapi_client
from openapi_client.models.sensitivity_label import SensitivityLabel
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
    api_instance = openapi_client.ManagedDatabaseSensitivityLabelsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    managed_instance_name = 'managed_instance_name_example' # str | The name of the managed instance.
    database_name = 'database_name_example' # str | The name of the database.
    schema_name = 'schema_name_example' # str | The name of the schema.
    table_name = 'table_name_example' # str | The name of the table.
    column_name = 'column_name_example' # str | The name of the column.
    sensitivity_label_source = 'sensitivity_label_source_example' # str | The source of the sensitivity label.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.managed_database_sensitivity_labels_get(resource_group_name, managed_instance_name, database_name, schema_name, table_name, column_name, sensitivity_label_source, subscription_id, api_version)
        print("The response of ManagedDatabaseSensitivityLabelsApi->managed_database_sensitivity_labels_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedDatabaseSensitivityLabelsApi->managed_database_sensitivity_labels_get: %s\n" % e)
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
 **sensitivity_label_source** | **str**| The source of the sensitivity label. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**SensitivityLabel**](SensitivityLabel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the sensitivity label. |  -  |
**0** | *** Error Responses: ***   * 400 DatawarehouseDatabaseIsDeactivated - Could not execute Data Classification operation because the database is paused. Please resume it.   * 400 SensitivityLabelSourceNameNotSupported - The specified sensitivity label source is not valid   * 404 SensitivityLabelsColumnNotFound - The specified schema/table/column could not be found   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 DatabaseDoesNotExist - User has specified a database name that does not exist on this server instance.   * 404 SensitivityLabelsLabelNotFound - The specified sensitivity label could not be found   * 501 SensitivityLabelRecommendedSourceNameNotSupported - &#39;Recommended&#39; sensitivity label source is not supported yet |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **managed_database_sensitivity_labels_list_current_by_database**
> SensitivityLabelListResult managed_database_sensitivity_labels_list_current_by_database(resource_group_name, managed_instance_name, database_name, subscription_id, api_version, filter=filter)



Gets the sensitivity labels of a given database

### Example


```python
import openapi_client
from openapi_client.models.sensitivity_label_list_result import SensitivityLabelListResult
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
    api_instance = openapi_client.ManagedDatabaseSensitivityLabelsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    managed_instance_name = 'managed_instance_name_example' # str | The name of the managed instance.
    database_name = 'database_name_example' # str | The name of the database.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    filter = 'filter_example' # str | An OData filter expression that filters elements in the collection. (optional)

    try:
        api_response = api_instance.managed_database_sensitivity_labels_list_current_by_database(resource_group_name, managed_instance_name, database_name, subscription_id, api_version, filter=filter)
        print("The response of ManagedDatabaseSensitivityLabelsApi->managed_database_sensitivity_labels_list_current_by_database:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedDatabaseSensitivityLabelsApi->managed_database_sensitivity_labels_list_current_by_database: %s\n" % e)
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

[**SensitivityLabelListResult**](SensitivityLabelListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the sensitivity labels. |  -  |
**0** | *** Error Responses: ***   * 400 DatawarehouseDatabaseIsDeactivated - Could not execute Data Classification operation because the database is paused. Please resume it.   * 400 SensitivityLabelsInvalidODataQuery - The specified OData query is either not valid or not supported   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 DatabaseDoesNotExist - User has specified a database name that does not exist on this server instance. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **managed_database_sensitivity_labels_list_recommended_by_database**
> SensitivityLabelListResult managed_database_sensitivity_labels_list_recommended_by_database(resource_group_name, managed_instance_name, database_name, subscription_id, api_version, include_disabled_recommendations=include_disabled_recommendations, skip_token=skip_token, filter=filter)



Gets the sensitivity labels of a given database

### Example


```python
import openapi_client
from openapi_client.models.sensitivity_label_list_result import SensitivityLabelListResult
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
    api_instance = openapi_client.ManagedDatabaseSensitivityLabelsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    managed_instance_name = 'managed_instance_name_example' # str | The name of the managed instance.
    database_name = 'database_name_example' # str | The name of the database.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    include_disabled_recommendations = True # bool | Specifies whether to include disabled recommendations or not. (optional)
    skip_token = 'skip_token_example' # str |  (optional)
    filter = 'filter_example' # str | An OData filter expression that filters elements in the collection. (optional)

    try:
        api_response = api_instance.managed_database_sensitivity_labels_list_recommended_by_database(resource_group_name, managed_instance_name, database_name, subscription_id, api_version, include_disabled_recommendations=include_disabled_recommendations, skip_token=skip_token, filter=filter)
        print("The response of ManagedDatabaseSensitivityLabelsApi->managed_database_sensitivity_labels_list_recommended_by_database:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedDatabaseSensitivityLabelsApi->managed_database_sensitivity_labels_list_recommended_by_database: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **managed_instance_name** | **str**| The name of the managed instance. | 
 **database_name** | **str**| The name of the database. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **include_disabled_recommendations** | **bool**| Specifies whether to include disabled recommendations or not. | [optional] 
 **skip_token** | **str**|  | [optional] 
 **filter** | **str**| An OData filter expression that filters elements in the collection. | [optional] 

### Return type

[**SensitivityLabelListResult**](SensitivityLabelListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the sensitivity labels. |  -  |
**0** | *** Error Responses: ***   * 400 DatawarehouseDatabaseIsDeactivated - Could not execute Data Classification operation because the database is paused. Please resume it.   * 400 SensitivityLabelsInvalidODataQuery - The specified OData query is either not valid or not supported   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 DatabaseDoesNotExist - User has specified a database name that does not exist on this server instance. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

