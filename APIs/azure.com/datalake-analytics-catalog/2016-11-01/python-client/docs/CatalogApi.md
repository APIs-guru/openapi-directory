# openapi_client.CatalogApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**catalog_create_credential**](CatalogApi.md#catalog_create_credential) | **PUT** /catalog/usql/databases/{databaseName}/credentials/{credentialName} | 
[**catalog_create_secret**](CatalogApi.md#catalog_create_secret) | **PUT** /catalog/usql/databases/{databaseName}/secrets/{secretName} | 
[**catalog_delete_all_secrets**](CatalogApi.md#catalog_delete_all_secrets) | **DELETE** /catalog/usql/databases/{databaseName}/secrets | 
[**catalog_delete_credential**](CatalogApi.md#catalog_delete_credential) | **POST** /catalog/usql/databases/{databaseName}/credentials/{credentialName} | 
[**catalog_delete_secret**](CatalogApi.md#catalog_delete_secret) | **DELETE** /catalog/usql/databases/{databaseName}/secrets/{secretName} | 
[**catalog_get_assembly**](CatalogApi.md#catalog_get_assembly) | **GET** /catalog/usql/databases/{databaseName}/assemblies/{assemblyName} | 
[**catalog_get_credential**](CatalogApi.md#catalog_get_credential) | **GET** /catalog/usql/databases/{databaseName}/credentials/{credentialName} | 
[**catalog_get_database**](CatalogApi.md#catalog_get_database) | **GET** /catalog/usql/databases/{databaseName} | 
[**catalog_get_external_data_source**](CatalogApi.md#catalog_get_external_data_source) | **GET** /catalog/usql/databases/{databaseName}/externaldatasources/{externalDataSourceName} | 
[**catalog_get_package**](CatalogApi.md#catalog_get_package) | **GET** /catalog/usql/databases/{databaseName}/schemas/{schemaName}/packages/{packageName} | 
[**catalog_get_procedure**](CatalogApi.md#catalog_get_procedure) | **GET** /catalog/usql/databases/{databaseName}/schemas/{schemaName}/procedures/{procedureName} | 
[**catalog_get_schema**](CatalogApi.md#catalog_get_schema) | **GET** /catalog/usql/databases/{databaseName}/schemas/{schemaName} | 
[**catalog_get_secret**](CatalogApi.md#catalog_get_secret) | **GET** /catalog/usql/databases/{databaseName}/secrets/{secretName} | 
[**catalog_get_table**](CatalogApi.md#catalog_get_table) | **GET** /catalog/usql/databases/{databaseName}/schemas/{schemaName}/tables/{tableName} | 
[**catalog_get_table_partition**](CatalogApi.md#catalog_get_table_partition) | **GET** /catalog/usql/databases/{databaseName}/schemas/{schemaName}/tables/{tableName}/partitions/{partitionName} | 
[**catalog_get_table_statistic**](CatalogApi.md#catalog_get_table_statistic) | **GET** /catalog/usql/databases/{databaseName}/schemas/{schemaName}/tables/{tableName}/statistics/{statisticsName} | 
[**catalog_get_table_type**](CatalogApi.md#catalog_get_table_type) | **GET** /catalog/usql/databases/{databaseName}/schemas/{schemaName}/tabletypes/{tableTypeName} | 
[**catalog_get_table_valued_function**](CatalogApi.md#catalog_get_table_valued_function) | **GET** /catalog/usql/databases/{databaseName}/schemas/{schemaName}/tablevaluedfunctions/{tableValuedFunctionName} | 
[**catalog_get_view**](CatalogApi.md#catalog_get_view) | **GET** /catalog/usql/databases/{databaseName}/schemas/{schemaName}/views/{viewName} | 
[**catalog_list_acls**](CatalogApi.md#catalog_list_acls) | **GET** /catalog/usql/acl | 
[**catalog_list_acls_by_database**](CatalogApi.md#catalog_list_acls_by_database) | **GET** /catalog/usql/databases/{databaseName}/acl | 
[**catalog_list_assemblies**](CatalogApi.md#catalog_list_assemblies) | **GET** /catalog/usql/databases/{databaseName}/assemblies | 
[**catalog_list_credentials**](CatalogApi.md#catalog_list_credentials) | **GET** /catalog/usql/databases/{databaseName}/credentials | 
[**catalog_list_databases**](CatalogApi.md#catalog_list_databases) | **GET** /catalog/usql/databases | 
[**catalog_list_external_data_sources**](CatalogApi.md#catalog_list_external_data_sources) | **GET** /catalog/usql/databases/{databaseName}/externaldatasources | 
[**catalog_list_packages**](CatalogApi.md#catalog_list_packages) | **GET** /catalog/usql/databases/{databaseName}/schemas/{schemaName}/packages | 
[**catalog_list_procedures**](CatalogApi.md#catalog_list_procedures) | **GET** /catalog/usql/databases/{databaseName}/schemas/{schemaName}/procedures | 
[**catalog_list_schemas**](CatalogApi.md#catalog_list_schemas) | **GET** /catalog/usql/databases/{databaseName}/schemas | 
[**catalog_list_table_fragments**](CatalogApi.md#catalog_list_table_fragments) | **GET** /catalog/usql/databases/{databaseName}/schemas/{schemaName}/tables/{tableName}/tablefragments | 
[**catalog_list_table_partitions**](CatalogApi.md#catalog_list_table_partitions) | **GET** /catalog/usql/databases/{databaseName}/schemas/{schemaName}/tables/{tableName}/partitions | 
[**catalog_list_table_statistics**](CatalogApi.md#catalog_list_table_statistics) | **GET** /catalog/usql/databases/{databaseName}/schemas/{schemaName}/tables/{tableName}/statistics | 
[**catalog_list_table_statistics_by_database**](CatalogApi.md#catalog_list_table_statistics_by_database) | **GET** /catalog/usql/databases/{databaseName}/statistics | 
[**catalog_list_table_statistics_by_database_and_schema**](CatalogApi.md#catalog_list_table_statistics_by_database_and_schema) | **GET** /catalog/usql/databases/{databaseName}/schemas/{schemaName}/statistics | 
[**catalog_list_table_types**](CatalogApi.md#catalog_list_table_types) | **GET** /catalog/usql/databases/{databaseName}/schemas/{schemaName}/tabletypes | 
[**catalog_list_table_valued_functions**](CatalogApi.md#catalog_list_table_valued_functions) | **GET** /catalog/usql/databases/{databaseName}/schemas/{schemaName}/tablevaluedfunctions | 
[**catalog_list_table_valued_functions_by_database**](CatalogApi.md#catalog_list_table_valued_functions_by_database) | **GET** /catalog/usql/databases/{databaseName}/tablevaluedfunctions | 
[**catalog_list_tables**](CatalogApi.md#catalog_list_tables) | **GET** /catalog/usql/databases/{databaseName}/schemas/{schemaName}/tables | 
[**catalog_list_tables_by_database**](CatalogApi.md#catalog_list_tables_by_database) | **GET** /catalog/usql/databases/{databaseName}/tables | 
[**catalog_list_types**](CatalogApi.md#catalog_list_types) | **GET** /catalog/usql/databases/{databaseName}/schemas/{schemaName}/types | 
[**catalog_list_views**](CatalogApi.md#catalog_list_views) | **GET** /catalog/usql/databases/{databaseName}/schemas/{schemaName}/views | 
[**catalog_list_views_by_database**](CatalogApi.md#catalog_list_views_by_database) | **GET** /catalog/usql/databases/{databaseName}/views | 
[**catalog_preview_table**](CatalogApi.md#catalog_preview_table) | **GET** /catalog/usql/databases/{databaseName}/schemas/{schemaName}/tables/{tableName}/previewrows | 
[**catalog_preview_table_partition**](CatalogApi.md#catalog_preview_table_partition) | **GET** /catalog/usql/databases/{databaseName}/schemas/{schemaName}/tables/{tableName}/partitions/{partitionName}/previewrows | 
[**catalog_update_credential**](CatalogApi.md#catalog_update_credential) | **PATCH** /catalog/usql/databases/{databaseName}/credentials/{credentialName} | 
[**catalog_update_secret**](CatalogApi.md#catalog_update_secret) | **PATCH** /catalog/usql/databases/{databaseName}/secrets/{secretName} | 


# **catalog_create_credential**
> catalog_create_credential(database_name, credential_name, api_version, parameters)



Creates the specified credential for use with external data sources in the specified database.

### Example


```python
import openapi_client
from openapi_client.models.data_lake_analytics_catalog_credential_create_parameters import DataLakeAnalyticsCatalogCredentialCreateParameters
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CatalogApi(api_client)
    database_name = 'database_name_example' # str | The name of the database in which to create the credential. Note: This is NOT an external database name, but the name of an existing U-SQL database that should contain the new credential object.
    credential_name = 'credential_name_example' # str | The name of the credential.
    api_version = 'api_version_example' # str | Client Api Version.
    parameters = openapi_client.DataLakeAnalyticsCatalogCredentialCreateParameters() # DataLakeAnalyticsCatalogCredentialCreateParameters | The parameters required to create the credential (name and password)

    try:
        api_instance.catalog_create_credential(database_name, credential_name, api_version, parameters)
    except Exception as e:
        print("Exception when calling CatalogApi->catalog_create_credential: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **database_name** | **str**| The name of the database in which to create the credential. Note: This is NOT an external database name, but the name of an existing U-SQL database that should contain the new credential object. | 
 **credential_name** | **str**| The name of the credential. | 
 **api_version** | **str**| Client Api Version. | 
 **parameters** | [**DataLakeAnalyticsCatalogCredentialCreateParameters**](DataLakeAnalyticsCatalogCredentialCreateParameters.md)| The parameters required to create the credential (name and password) | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully created the credential within the specified database. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **catalog_create_secret**
> catalog_create_secret(database_name, secret_name, api_version, parameters)



Creates the specified secret for use with external data sources in the specified database. This is deprecated and will be removed in the next release. Please use CreateCredential instead.

### Example


```python
import openapi_client
from openapi_client.models.data_lake_analytics_catalog_secret_create_or_update_parameters import DataLakeAnalyticsCatalogSecretCreateOrUpdateParameters
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CatalogApi(api_client)
    database_name = 'database_name_example' # str | The name of the database in which to create the secret.
    secret_name = 'secret_name_example' # str | The name of the secret.
    api_version = 'api_version_example' # str | Client Api Version.
    parameters = openapi_client.DataLakeAnalyticsCatalogSecretCreateOrUpdateParameters() # DataLakeAnalyticsCatalogSecretCreateOrUpdateParameters | The parameters required to create the secret (name and password)

    try:
        api_instance.catalog_create_secret(database_name, secret_name, api_version, parameters)
    except Exception as e:
        print("Exception when calling CatalogApi->catalog_create_secret: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **database_name** | **str**| The name of the database in which to create the secret. | 
 **secret_name** | **str**| The name of the secret. | 
 **api_version** | **str**| Client Api Version. | 
 **parameters** | [**DataLakeAnalyticsCatalogSecretCreateOrUpdateParameters**](DataLakeAnalyticsCatalogSecretCreateOrUpdateParameters.md)| The parameters required to create the secret (name and password) | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully created the specified secret in the specified database. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **catalog_delete_all_secrets**
> catalog_delete_all_secrets(database_name, api_version)



Deletes all secrets in the specified database. This is deprecated and will be removed in the next release. In the future, please only drop individual credentials using DeleteCredential

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CatalogApi(api_client)
    database_name = 'database_name_example' # str | The name of the database containing the secret.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_instance.catalog_delete_all_secrets(database_name, api_version)
    except Exception as e:
        print("Exception when calling CatalogApi->catalog_delete_all_secrets: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **database_name** | **str**| The name of the database containing the secret. | 
 **api_version** | **str**| Client Api Version. | 

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
**200** | Successfully deleted all secrets from the specified database. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **catalog_delete_credential**
> catalog_delete_credential(database_name, credential_name, api_version, cascade=cascade, parameters=parameters)



Deletes the specified credential in the specified database

### Example


```python
import openapi_client
from openapi_client.models.data_lake_analytics_catalog_credential_delete_parameters import DataLakeAnalyticsCatalogCredentialDeleteParameters
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CatalogApi(api_client)
    database_name = 'database_name_example' # str | The name of the database containing the credential.
    credential_name = 'credential_name_example' # str | The name of the credential to delete
    api_version = 'api_version_example' # str | Client Api Version.
    cascade = False # bool | Indicates if the delete should be a cascading delete (which deletes all resources dependent on the credential as well as the credential) or not. If false will fail if there are any resources relying on the credential. (optional) (default to False)
    parameters = openapi_client.DataLakeAnalyticsCatalogCredentialDeleteParameters() # DataLakeAnalyticsCatalogCredentialDeleteParameters | The parameters to delete a credential if the current user is not the account owner. (optional)

    try:
        api_instance.catalog_delete_credential(database_name, credential_name, api_version, cascade=cascade, parameters=parameters)
    except Exception as e:
        print("Exception when calling CatalogApi->catalog_delete_credential: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **database_name** | **str**| The name of the database containing the credential. | 
 **credential_name** | **str**| The name of the credential to delete | 
 **api_version** | **str**| Client Api Version. | 
 **cascade** | **bool**| Indicates if the delete should be a cascading delete (which deletes all resources dependent on the credential as well as the credential) or not. If false will fail if there are any resources relying on the credential. | [optional] [default to False]
 **parameters** | [**DataLakeAnalyticsCatalogCredentialDeleteParameters**](DataLakeAnalyticsCatalogCredentialDeleteParameters.md)| The parameters to delete a credential if the current user is not the account owner. | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully deleted the specified credential from the specified database. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **catalog_delete_secret**
> catalog_delete_secret(database_name, secret_name, api_version)



Deletes the specified secret in the specified database. This is deprecated and will be removed in the next release. Please use DeleteCredential instead.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CatalogApi(api_client)
    database_name = 'database_name_example' # str | The name of the database containing the secret.
    secret_name = 'secret_name_example' # str | The name of the secret to delete
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_instance.catalog_delete_secret(database_name, secret_name, api_version)
    except Exception as e:
        print("Exception when calling CatalogApi->catalog_delete_secret: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **database_name** | **str**| The name of the database containing the secret. | 
 **secret_name** | **str**| The name of the secret to delete | 
 **api_version** | **str**| Client Api Version. | 

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
**200** | Successfully deleted the specified secret from the specified database. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **catalog_get_assembly**
> USqlAssembly catalog_get_assembly(database_name, assembly_name, api_version)



Retrieves the specified assembly from the Data Lake Analytics catalog.

### Example


```python
import openapi_client
from openapi_client.models.u_sql_assembly import USqlAssembly
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CatalogApi(api_client)
    database_name = 'database_name_example' # str | The name of the database containing the assembly.
    assembly_name = 'assembly_name_example' # str | The name of the assembly.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.catalog_get_assembly(database_name, assembly_name, api_version)
        print("The response of CatalogApi->catalog_get_assembly:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CatalogApi->catalog_get_assembly: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **database_name** | **str**| The name of the database containing the assembly. | 
 **assembly_name** | **str**| The name of the assembly. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**USqlAssembly**](USqlAssembly.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the details of the specified assembly in the specified database. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **catalog_get_credential**
> USqlCredential catalog_get_credential(database_name, credential_name, api_version)



Retrieves the specified credential from the Data Lake Analytics catalog.

### Example


```python
import openapi_client
from openapi_client.models.u_sql_credential import USqlCredential
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CatalogApi(api_client)
    database_name = 'database_name_example' # str | The name of the database containing the schema.
    credential_name = 'credential_name_example' # str | The name of the credential.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.catalog_get_credential(database_name, credential_name, api_version)
        print("The response of CatalogApi->catalog_get_credential:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CatalogApi->catalog_get_credential: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **database_name** | **str**| The name of the database containing the schema. | 
 **credential_name** | **str**| The name of the credential. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**USqlCredential**](USqlCredential.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the specified credential (name only) from the specified database. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **catalog_get_database**
> USqlDatabase catalog_get_database(database_name, api_version)



Retrieves the specified database from the Data Lake Analytics catalog.

### Example


```python
import openapi_client
from openapi_client.models.u_sql_database import USqlDatabase
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CatalogApi(api_client)
    database_name = 'database_name_example' # str | The name of the database.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.catalog_get_database(database_name, api_version)
        print("The response of CatalogApi->catalog_get_database:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CatalogApi->catalog_get_database: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **database_name** | **str**| The name of the database. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**USqlDatabase**](USqlDatabase.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the details of the specified database. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **catalog_get_external_data_source**
> USqlExternalDataSource catalog_get_external_data_source(database_name, external_data_source_name, api_version)



Retrieves the specified external data source from the Data Lake Analytics catalog.

### Example


```python
import openapi_client
from openapi_client.models.u_sql_external_data_source import USqlExternalDataSource
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CatalogApi(api_client)
    database_name = 'database_name_example' # str | The name of the database containing the external data source.
    external_data_source_name = 'external_data_source_name_example' # str | The name of the external data source.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.catalog_get_external_data_source(database_name, external_data_source_name, api_version)
        print("The response of CatalogApi->catalog_get_external_data_source:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CatalogApi->catalog_get_external_data_source: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **database_name** | **str**| The name of the database containing the external data source. | 
 **external_data_source_name** | **str**| The name of the external data source. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**USqlExternalDataSource**](USqlExternalDataSource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved details of the specified external data source in the specified database. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **catalog_get_package**
> USqlPackage catalog_get_package(database_name, schema_name, package_name, api_version)



Retrieves the specified package from the Data Lake Analytics catalog.

### Example


```python
import openapi_client
from openapi_client.models.u_sql_package import USqlPackage
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CatalogApi(api_client)
    database_name = 'database_name_example' # str | The name of the database containing the package.
    schema_name = 'schema_name_example' # str | The name of the schema containing the package.
    package_name = 'package_name_example' # str | The name of the package.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.catalog_get_package(database_name, schema_name, package_name, api_version)
        print("The response of CatalogApi->catalog_get_package:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CatalogApi->catalog_get_package: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **database_name** | **str**| The name of the database containing the package. | 
 **schema_name** | **str**| The name of the schema containing the package. | 
 **package_name** | **str**| The name of the package. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**USqlPackage**](USqlPackage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the specified package from the underlying database and schema combination |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **catalog_get_procedure**
> USqlProcedure catalog_get_procedure(database_name, schema_name, procedure_name, api_version)



Retrieves the specified procedure from the Data Lake Analytics catalog.

### Example


```python
import openapi_client
from openapi_client.models.u_sql_procedure import USqlProcedure
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CatalogApi(api_client)
    database_name = 'database_name_example' # str | The name of the database containing the procedure.
    schema_name = 'schema_name_example' # str | The name of the schema containing the procedure.
    procedure_name = 'procedure_name_example' # str | The name of the procedure.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.catalog_get_procedure(database_name, schema_name, procedure_name, api_version)
        print("The response of CatalogApi->catalog_get_procedure:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CatalogApi->catalog_get_procedure: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **database_name** | **str**| The name of the database containing the procedure. | 
 **schema_name** | **str**| The name of the schema containing the procedure. | 
 **procedure_name** | **str**| The name of the procedure. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**USqlProcedure**](USqlProcedure.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the specified procedure from the underlying database and schema combination. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **catalog_get_schema**
> USqlSchema catalog_get_schema(database_name, schema_name, api_version)



Retrieves the specified schema from the Data Lake Analytics catalog.

### Example


```python
import openapi_client
from openapi_client.models.u_sql_schema import USqlSchema
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CatalogApi(api_client)
    database_name = 'database_name_example' # str | The name of the database containing the schema.
    schema_name = 'schema_name_example' # str | The name of the schema.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.catalog_get_schema(database_name, schema_name, api_version)
        print("The response of CatalogApi->catalog_get_schema:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CatalogApi->catalog_get_schema: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **database_name** | **str**| The name of the database containing the schema. | 
 **schema_name** | **str**| The name of the schema. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**USqlSchema**](USqlSchema.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the details of the specified schema in the specified database. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **catalog_get_secret**
> USqlSecret catalog_get_secret(database_name, secret_name, api_version)



Gets the specified secret in the specified database. This is deprecated and will be removed in the next release. Please use GetCredential instead.

### Example


```python
import openapi_client
from openapi_client.models.u_sql_secret import USqlSecret
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CatalogApi(api_client)
    database_name = 'database_name_example' # str | The name of the database containing the secret.
    secret_name = 'secret_name_example' # str | The name of the secret to get
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.catalog_get_secret(database_name, secret_name, api_version)
        print("The response of CatalogApi->catalog_get_secret:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CatalogApi->catalog_get_secret: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **database_name** | **str**| The name of the database containing the secret. | 
 **secret_name** | **str**| The name of the secret to get | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**USqlSecret**](USqlSecret.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved details of the specified secret in the specified database. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **catalog_get_table**
> USqlTable catalog_get_table(database_name, schema_name, table_name, api_version)



Retrieves the specified table from the Data Lake Analytics catalog.

### Example


```python
import openapi_client
from openapi_client.models.u_sql_table import USqlTable
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CatalogApi(api_client)
    database_name = 'database_name_example' # str | The name of the database containing the table.
    schema_name = 'schema_name_example' # str | The name of the schema containing the table.
    table_name = 'table_name_example' # str | The name of the table.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.catalog_get_table(database_name, schema_name, table_name, api_version)
        print("The response of CatalogApi->catalog_get_table:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CatalogApi->catalog_get_table: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **database_name** | **str**| The name of the database containing the table. | 
 **schema_name** | **str**| The name of the schema containing the table. | 
 **table_name** | **str**| The name of the table. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**USqlTable**](USqlTable.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the specified table from the underlying database and schema combination |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **catalog_get_table_partition**
> USqlTablePartition catalog_get_table_partition(database_name, schema_name, table_name, partition_name, api_version)



Retrieves the specified table partition from the Data Lake Analytics catalog.

### Example


```python
import openapi_client
from openapi_client.models.u_sql_table_partition import USqlTablePartition
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CatalogApi(api_client)
    database_name = 'database_name_example' # str | The name of the database containing the partition.
    schema_name = 'schema_name_example' # str | The name of the schema containing the partition.
    table_name = 'table_name_example' # str | The name of the table containing the partition.
    partition_name = 'partition_name_example' # str | The name of the table partition.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.catalog_get_table_partition(database_name, schema_name, table_name, partition_name, api_version)
        print("The response of CatalogApi->catalog_get_table_partition:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CatalogApi->catalog_get_table_partition: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **database_name** | **str**| The name of the database containing the partition. | 
 **schema_name** | **str**| The name of the schema containing the partition. | 
 **table_name** | **str**| The name of the table containing the partition. | 
 **partition_name** | **str**| The name of the table partition. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**USqlTablePartition**](USqlTablePartition.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the details of the specified table partition in the specified database, schema, and table. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **catalog_get_table_statistic**
> USqlTableStatistics catalog_get_table_statistic(database_name, schema_name, table_name, statistics_name, api_version)



Retrieves the specified table statistics from the Data Lake Analytics catalog.

### Example


```python
import openapi_client
from openapi_client.models.u_sql_table_statistics import USqlTableStatistics
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CatalogApi(api_client)
    database_name = 'database_name_example' # str | The name of the database containing the statistics.
    schema_name = 'schema_name_example' # str | The name of the schema containing the statistics.
    table_name = 'table_name_example' # str | The name of the table containing the statistics.
    statistics_name = 'statistics_name_example' # str | The name of the table statistics.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.catalog_get_table_statistic(database_name, schema_name, table_name, statistics_name, api_version)
        print("The response of CatalogApi->catalog_get_table_statistic:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CatalogApi->catalog_get_table_statistic: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **database_name** | **str**| The name of the database containing the statistics. | 
 **schema_name** | **str**| The name of the schema containing the statistics. | 
 **table_name** | **str**| The name of the table containing the statistics. | 
 **statistics_name** | **str**| The name of the table statistics. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**USqlTableStatistics**](USqlTableStatistics.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the details of the specified table statistics in the specified database and schema. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **catalog_get_table_type**
> USqlTableType catalog_get_table_type(database_name, schema_name, table_type_name, api_version)



Retrieves the specified table type from the Data Lake Analytics catalog.

### Example


```python
import openapi_client
from openapi_client.models.u_sql_table_type import USqlTableType
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CatalogApi(api_client)
    database_name = 'database_name_example' # str | The name of the database containing the table type.
    schema_name = 'schema_name_example' # str | The name of the schema containing the table type.
    table_type_name = 'table_type_name_example' # str | The name of the table type to retrieve.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.catalog_get_table_type(database_name, schema_name, table_type_name, api_version)
        print("The response of CatalogApi->catalog_get_table_type:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CatalogApi->catalog_get_table_type: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **database_name** | **str**| The name of the database containing the table type. | 
 **schema_name** | **str**| The name of the schema containing the table type. | 
 **table_type_name** | **str**| The name of the table type to retrieve. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**USqlTableType**](USqlTableType.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the specified table type from the underlying database and schema combination |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **catalog_get_table_valued_function**
> USqlTableValuedFunction catalog_get_table_valued_function(database_name, schema_name, table_valued_function_name, api_version)



Retrieves the specified table valued function from the Data Lake Analytics catalog.

### Example


```python
import openapi_client
from openapi_client.models.u_sql_table_valued_function import USqlTableValuedFunction
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CatalogApi(api_client)
    database_name = 'database_name_example' # str | The name of the database containing the table valued function.
    schema_name = 'schema_name_example' # str | The name of the schema containing the table valued function.
    table_valued_function_name = 'table_valued_function_name_example' # str | The name of the tableValuedFunction.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.catalog_get_table_valued_function(database_name, schema_name, table_valued_function_name, api_version)
        print("The response of CatalogApi->catalog_get_table_valued_function:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CatalogApi->catalog_get_table_valued_function: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **database_name** | **str**| The name of the database containing the table valued function. | 
 **schema_name** | **str**| The name of the schema containing the table valued function. | 
 **table_valued_function_name** | **str**| The name of the tableValuedFunction. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**USqlTableValuedFunction**](USqlTableValuedFunction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the details of the specified table valued function in the specified database and schema. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **catalog_get_view**
> USqlView catalog_get_view(database_name, schema_name, view_name, api_version)



Retrieves the specified view from the Data Lake Analytics catalog.

### Example


```python
import openapi_client
from openapi_client.models.u_sql_view import USqlView
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CatalogApi(api_client)
    database_name = 'database_name_example' # str | The name of the database containing the view.
    schema_name = 'schema_name_example' # str | The name of the schema containing the view.
    view_name = 'view_name_example' # str | The name of the view.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.catalog_get_view(database_name, schema_name, view_name, api_version)
        print("The response of CatalogApi->catalog_get_view:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CatalogApi->catalog_get_view: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **database_name** | **str**| The name of the database containing the view. | 
 **schema_name** | **str**| The name of the schema containing the view. | 
 **view_name** | **str**| The name of the view. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**USqlView**](USqlView.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the specified view from the underlying database and schema combination |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **catalog_list_acls**
> AclList catalog_list_acls(api_version, filter=filter, top=top, skip=skip, select=select, orderby=orderby, count=count)



Retrieves the list of access control list (ACL) entries for the Data Lake Analytics catalog.

### Example


```python
import openapi_client
from openapi_client.models.acl_list import AclList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CatalogApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    filter = 'filter_example' # str | OData filter. Optional. (optional)
    top = 56 # int | The number of items to return. Optional. (optional)
    skip = 56 # int | The number of items to skip over before returning elements. Optional. (optional)
    select = 'select_example' # str | OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional. (optional)
    orderby = 'orderby_example' # str | OrderBy clause. One or more comma-separated expressions with an optional \"asc\" (the default) or \"desc\" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional. (optional)
    count = True # bool | The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional. (optional)

    try:
        api_response = api_instance.catalog_list_acls(api_version, filter=filter, top=top, skip=skip, select=select, orderby=orderby, count=count)
        print("The response of CatalogApi->catalog_list_acls:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CatalogApi->catalog_list_acls: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **filter** | **str**| OData filter. Optional. | [optional] 
 **top** | **int**| The number of items to return. Optional. | [optional] 
 **skip** | **int**| The number of items to skip over before returning elements. Optional. | [optional] 
 **select** | **str**| OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select&#x3D;CategoryName,Description. Optional. | [optional] 
 **orderby** | **str**| OrderBy clause. One or more comma-separated expressions with an optional \&quot;asc\&quot; (the default) or \&quot;desc\&quot; depending on the order you&#39;d like the values sorted, e.g. Categories?$orderby&#x3D;CategoryName desc. Optional. | [optional] 
 **count** | **bool**| The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count&#x3D;true. Optional. | [optional] 

### Return type

[**AclList**](AclList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of access control list (ACL) entries for the Data Lake Analytics catalog. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **catalog_list_acls_by_database**
> AclList catalog_list_acls_by_database(database_name, api_version, filter=filter, top=top, skip=skip, select=select, orderby=orderby, count=count)



Retrieves the list of access control list (ACL) entries for the database from the Data Lake Analytics catalog.

### Example


```python
import openapi_client
from openapi_client.models.acl_list import AclList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CatalogApi(api_client)
    database_name = 'database_name_example' # str | The name of the database.
    api_version = 'api_version_example' # str | Client Api Version.
    filter = 'filter_example' # str | OData filter. Optional. (optional)
    top = 56 # int | The number of items to return. Optional. (optional)
    skip = 56 # int | The number of items to skip over before returning elements. Optional. (optional)
    select = 'select_example' # str | OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional. (optional)
    orderby = 'orderby_example' # str | OrderBy clause. One or more comma-separated expressions with an optional \"asc\" (the default) or \"desc\" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional. (optional)
    count = True # bool | The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional. (optional)

    try:
        api_response = api_instance.catalog_list_acls_by_database(database_name, api_version, filter=filter, top=top, skip=skip, select=select, orderby=orderby, count=count)
        print("The response of CatalogApi->catalog_list_acls_by_database:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CatalogApi->catalog_list_acls_by_database: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **database_name** | **str**| The name of the database. | 
 **api_version** | **str**| Client Api Version. | 
 **filter** | **str**| OData filter. Optional. | [optional] 
 **top** | **int**| The number of items to return. Optional. | [optional] 
 **skip** | **int**| The number of items to skip over before returning elements. Optional. | [optional] 
 **select** | **str**| OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select&#x3D;CategoryName,Description. Optional. | [optional] 
 **orderby** | **str**| OrderBy clause. One or more comma-separated expressions with an optional \&quot;asc\&quot; (the default) or \&quot;desc\&quot; depending on the order you&#39;d like the values sorted, e.g. Categories?$orderby&#x3D;CategoryName desc. Optional. | [optional] 
 **count** | **bool**| The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count&#x3D;true. Optional. | [optional] 

### Return type

[**AclList**](AclList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of access control list (ACL) entries for the specified database. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **catalog_list_assemblies**
> USqlAssemblyList catalog_list_assemblies(database_name, api_version, filter=filter, top=top, skip=skip, select=select, orderby=orderby, count=count)



Retrieves the list of assemblies from the Data Lake Analytics catalog.

### Example


```python
import openapi_client
from openapi_client.models.u_sql_assembly_list import USqlAssemblyList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CatalogApi(api_client)
    database_name = 'database_name_example' # str | The name of the database containing the assembly.
    api_version = 'api_version_example' # str | Client Api Version.
    filter = 'filter_example' # str | OData filter. Optional. (optional)
    top = 56 # int | The number of items to return. Optional. (optional)
    skip = 56 # int | The number of items to skip over before returning elements. Optional. (optional)
    select = 'select_example' # str | OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional. (optional)
    orderby = 'orderby_example' # str | OrderBy clause. One or more comma-separated expressions with an optional \"asc\" (the default) or \"desc\" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional. (optional)
    count = True # bool | The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional. (optional)

    try:
        api_response = api_instance.catalog_list_assemblies(database_name, api_version, filter=filter, top=top, skip=skip, select=select, orderby=orderby, count=count)
        print("The response of CatalogApi->catalog_list_assemblies:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CatalogApi->catalog_list_assemblies: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **database_name** | **str**| The name of the database containing the assembly. | 
 **api_version** | **str**| Client Api Version. | 
 **filter** | **str**| OData filter. Optional. | [optional] 
 **top** | **int**| The number of items to return. Optional. | [optional] 
 **skip** | **int**| The number of items to skip over before returning elements. Optional. | [optional] 
 **select** | **str**| OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select&#x3D;CategoryName,Description. Optional. | [optional] 
 **orderby** | **str**| OrderBy clause. One or more comma-separated expressions with an optional \&quot;asc\&quot; (the default) or \&quot;desc\&quot; depending on the order you&#39;d like the values sorted, e.g. Categories?$orderby&#x3D;CategoryName desc. Optional. | [optional] 
 **count** | **bool**| The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count&#x3D;true. Optional. | [optional] 

### Return type

[**USqlAssemblyList**](USqlAssemblyList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of assemblies in the specified database. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **catalog_list_credentials**
> USqlCredentialList catalog_list_credentials(database_name, api_version, filter=filter, top=top, skip=skip, select=select, orderby=orderby, count=count)



Retrieves the list of credentials from the Data Lake Analytics catalog.

### Example


```python
import openapi_client
from openapi_client.models.u_sql_credential_list import USqlCredentialList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CatalogApi(api_client)
    database_name = 'database_name_example' # str | The name of the database containing the schema.
    api_version = 'api_version_example' # str | Client Api Version.
    filter = 'filter_example' # str | OData filter. Optional. (optional)
    top = 56 # int | The number of items to return. Optional. (optional)
    skip = 56 # int | The number of items to skip over before returning elements. Optional. (optional)
    select = 'select_example' # str | OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional. (optional)
    orderby = 'orderby_example' # str | OrderBy clause. One or more comma-separated expressions with an optional \"asc\" (the default) or \"desc\" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional. (optional)
    count = True # bool | The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional. (optional)

    try:
        api_response = api_instance.catalog_list_credentials(database_name, api_version, filter=filter, top=top, skip=skip, select=select, orderby=orderby, count=count)
        print("The response of CatalogApi->catalog_list_credentials:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CatalogApi->catalog_list_credentials: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **database_name** | **str**| The name of the database containing the schema. | 
 **api_version** | **str**| Client Api Version. | 
 **filter** | **str**| OData filter. Optional. | [optional] 
 **top** | **int**| The number of items to return. Optional. | [optional] 
 **skip** | **int**| The number of items to skip over before returning elements. Optional. | [optional] 
 **select** | **str**| OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select&#x3D;CategoryName,Description. Optional. | [optional] 
 **orderby** | **str**| OrderBy clause. One or more comma-separated expressions with an optional \&quot;asc\&quot; (the default) or \&quot;desc\&quot; depending on the order you&#39;d like the values sorted, e.g. Categories?$orderby&#x3D;CategoryName desc. Optional. | [optional] 
 **count** | **bool**| The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count&#x3D;true. Optional. | [optional] 

### Return type

[**USqlCredentialList**](USqlCredentialList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of credentials in the specified database. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **catalog_list_databases**
> USqlDatabaseList catalog_list_databases(api_version, filter=filter, top=top, skip=skip, select=select, orderby=orderby, count=count)



Retrieves the list of databases from the Data Lake Analytics catalog.

### Example


```python
import openapi_client
from openapi_client.models.u_sql_database_list import USqlDatabaseList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CatalogApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    filter = 'filter_example' # str | OData filter. Optional. (optional)
    top = 56 # int | The number of items to return. Optional. (optional)
    skip = 56 # int | The number of items to skip over before returning elements. Optional. (optional)
    select = 'select_example' # str | OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional. (optional)
    orderby = 'orderby_example' # str | OrderBy clause. One or more comma-separated expressions with an optional \"asc\" (the default) or \"desc\" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional. (optional)
    count = True # bool | The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional. (optional)

    try:
        api_response = api_instance.catalog_list_databases(api_version, filter=filter, top=top, skip=skip, select=select, orderby=orderby, count=count)
        print("The response of CatalogApi->catalog_list_databases:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CatalogApi->catalog_list_databases: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **filter** | **str**| OData filter. Optional. | [optional] 
 **top** | **int**| The number of items to return. Optional. | [optional] 
 **skip** | **int**| The number of items to skip over before returning elements. Optional. | [optional] 
 **select** | **str**| OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select&#x3D;CategoryName,Description. Optional. | [optional] 
 **orderby** | **str**| OrderBy clause. One or more comma-separated expressions with an optional \&quot;asc\&quot; (the default) or \&quot;desc\&quot; depending on the order you&#39;d like the values sorted, e.g. Categories?$orderby&#x3D;CategoryName desc. Optional. | [optional] 
 **count** | **bool**| The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count&#x3D;true. Optional. | [optional] 

### Return type

[**USqlDatabaseList**](USqlDatabaseList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of databases. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **catalog_list_external_data_sources**
> USqlExternalDataSourceList catalog_list_external_data_sources(database_name, api_version, filter=filter, top=top, skip=skip, select=select, orderby=orderby, count=count)



Retrieves the list of external data sources from the Data Lake Analytics catalog.

### Example


```python
import openapi_client
from openapi_client.models.u_sql_external_data_source_list import USqlExternalDataSourceList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CatalogApi(api_client)
    database_name = 'database_name_example' # str | The name of the database containing the external data sources.
    api_version = 'api_version_example' # str | Client Api Version.
    filter = 'filter_example' # str | OData filter. Optional. (optional)
    top = 56 # int | The number of items to return. Optional. (optional)
    skip = 56 # int | The number of items to skip over before returning elements. Optional. (optional)
    select = 'select_example' # str | OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional. (optional)
    orderby = 'orderby_example' # str | OrderBy clause. One or more comma-separated expressions with an optional \"asc\" (the default) or \"desc\" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional. (optional)
    count = True # bool | The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional. (optional)

    try:
        api_response = api_instance.catalog_list_external_data_sources(database_name, api_version, filter=filter, top=top, skip=skip, select=select, orderby=orderby, count=count)
        print("The response of CatalogApi->catalog_list_external_data_sources:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CatalogApi->catalog_list_external_data_sources: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **database_name** | **str**| The name of the database containing the external data sources. | 
 **api_version** | **str**| Client Api Version. | 
 **filter** | **str**| OData filter. Optional. | [optional] 
 **top** | **int**| The number of items to return. Optional. | [optional] 
 **skip** | **int**| The number of items to skip over before returning elements. Optional. | [optional] 
 **select** | **str**| OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select&#x3D;CategoryName,Description. Optional. | [optional] 
 **orderby** | **str**| OrderBy clause. One or more comma-separated expressions with an optional \&quot;asc\&quot; (the default) or \&quot;desc\&quot; depending on the order you&#39;d like the values sorted, e.g. Categories?$orderby&#x3D;CategoryName desc. Optional. | [optional] 
 **count** | **bool**| The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count&#x3D;true. Optional. | [optional] 

### Return type

[**USqlExternalDataSourceList**](USqlExternalDataSourceList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of external data sources in the specified database. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **catalog_list_packages**
> USqlPackageList catalog_list_packages(database_name, schema_name, api_version, filter=filter, top=top, skip=skip, select=select, orderby=orderby, count=count)



Retrieves the list of packages from the Data Lake Analytics catalog.

### Example


```python
import openapi_client
from openapi_client.models.u_sql_package_list import USqlPackageList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CatalogApi(api_client)
    database_name = 'database_name_example' # str | The name of the database containing the packages.
    schema_name = 'schema_name_example' # str | The name of the schema containing the packages.
    api_version = 'api_version_example' # str | Client Api Version.
    filter = 'filter_example' # str | OData filter. Optional. (optional)
    top = 56 # int | The number of items to return. Optional. (optional)
    skip = 56 # int | The number of items to skip over before returning elements. Optional. (optional)
    select = 'select_example' # str | OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional. (optional)
    orderby = 'orderby_example' # str | OrderBy clause. One or more comma-separated expressions with an optional \"asc\" (the default) or \"desc\" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional. (optional)
    count = True # bool | The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional. (optional)

    try:
        api_response = api_instance.catalog_list_packages(database_name, schema_name, api_version, filter=filter, top=top, skip=skip, select=select, orderby=orderby, count=count)
        print("The response of CatalogApi->catalog_list_packages:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CatalogApi->catalog_list_packages: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **database_name** | **str**| The name of the database containing the packages. | 
 **schema_name** | **str**| The name of the schema containing the packages. | 
 **api_version** | **str**| Client Api Version. | 
 **filter** | **str**| OData filter. Optional. | [optional] 
 **top** | **int**| The number of items to return. Optional. | [optional] 
 **skip** | **int**| The number of items to skip over before returning elements. Optional. | [optional] 
 **select** | **str**| OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select&#x3D;CategoryName,Description. Optional. | [optional] 
 **orderby** | **str**| OrderBy clause. One or more comma-separated expressions with an optional \&quot;asc\&quot; (the default) or \&quot;desc\&quot; depending on the order you&#39;d like the values sorted, e.g. Categories?$orderby&#x3D;CategoryName desc. Optional. | [optional] 
 **count** | **bool**| The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count&#x3D;true. Optional. | [optional] 

### Return type

[**USqlPackageList**](USqlPackageList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of packages in the specified database and schema. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **catalog_list_procedures**
> USqlProcedureList catalog_list_procedures(database_name, schema_name, api_version, filter=filter, top=top, skip=skip, select=select, orderby=orderby, count=count)



Retrieves the list of procedures from the Data Lake Analytics catalog.

### Example


```python
import openapi_client
from openapi_client.models.u_sql_procedure_list import USqlProcedureList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CatalogApi(api_client)
    database_name = 'database_name_example' # str | The name of the database containing the procedures.
    schema_name = 'schema_name_example' # str | The name of the schema containing the procedures.
    api_version = 'api_version_example' # str | Client Api Version.
    filter = 'filter_example' # str | OData filter. Optional. (optional)
    top = 56 # int | The number of items to return. Optional. (optional)
    skip = 56 # int | The number of items to skip over before returning elements. Optional. (optional)
    select = 'select_example' # str | OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional. (optional)
    orderby = 'orderby_example' # str | OrderBy clause. One or more comma-separated expressions with an optional \"asc\" (the default) or \"desc\" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional. (optional)
    count = True # bool | The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional. (optional)

    try:
        api_response = api_instance.catalog_list_procedures(database_name, schema_name, api_version, filter=filter, top=top, skip=skip, select=select, orderby=orderby, count=count)
        print("The response of CatalogApi->catalog_list_procedures:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CatalogApi->catalog_list_procedures: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **database_name** | **str**| The name of the database containing the procedures. | 
 **schema_name** | **str**| The name of the schema containing the procedures. | 
 **api_version** | **str**| Client Api Version. | 
 **filter** | **str**| OData filter. Optional. | [optional] 
 **top** | **int**| The number of items to return. Optional. | [optional] 
 **skip** | **int**| The number of items to skip over before returning elements. Optional. | [optional] 
 **select** | **str**| OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select&#x3D;CategoryName,Description. Optional. | [optional] 
 **orderby** | **str**| OrderBy clause. One or more comma-separated expressions with an optional \&quot;asc\&quot; (the default) or \&quot;desc\&quot; depending on the order you&#39;d like the values sorted, e.g. Categories?$orderby&#x3D;CategoryName desc. Optional. | [optional] 
 **count** | **bool**| The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count&#x3D;true. Optional. | [optional] 

### Return type

[**USqlProcedureList**](USqlProcedureList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of procedures in the specified database and schema. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **catalog_list_schemas**
> USqlSchemaList catalog_list_schemas(database_name, api_version, filter=filter, top=top, skip=skip, select=select, orderby=orderby, count=count)



Retrieves the list of schemas from the Data Lake Analytics catalog.

### Example


```python
import openapi_client
from openapi_client.models.u_sql_schema_list import USqlSchemaList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CatalogApi(api_client)
    database_name = 'database_name_example' # str | The name of the database containing the schema.
    api_version = 'api_version_example' # str | Client Api Version.
    filter = 'filter_example' # str | OData filter. Optional. (optional)
    top = 56 # int | The number of items to return. Optional. (optional)
    skip = 56 # int | The number of items to skip over before returning elements. Optional. (optional)
    select = 'select_example' # str | OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional. (optional)
    orderby = 'orderby_example' # str | OrderBy clause. One or more comma-separated expressions with an optional \"asc\" (the default) or \"desc\" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional. (optional)
    count = True # bool | The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional. (optional)

    try:
        api_response = api_instance.catalog_list_schemas(database_name, api_version, filter=filter, top=top, skip=skip, select=select, orderby=orderby, count=count)
        print("The response of CatalogApi->catalog_list_schemas:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CatalogApi->catalog_list_schemas: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **database_name** | **str**| The name of the database containing the schema. | 
 **api_version** | **str**| Client Api Version. | 
 **filter** | **str**| OData filter. Optional. | [optional] 
 **top** | **int**| The number of items to return. Optional. | [optional] 
 **skip** | **int**| The number of items to skip over before returning elements. Optional. | [optional] 
 **select** | **str**| OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select&#x3D;CategoryName,Description. Optional. | [optional] 
 **orderby** | **str**| OrderBy clause. One or more comma-separated expressions with an optional \&quot;asc\&quot; (the default) or \&quot;desc\&quot; depending on the order you&#39;d like the values sorted, e.g. Categories?$orderby&#x3D;CategoryName desc. Optional. | [optional] 
 **count** | **bool**| The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count&#x3D;true. Optional. | [optional] 

### Return type

[**USqlSchemaList**](USqlSchemaList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of schemas in the specified database. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **catalog_list_table_fragments**
> USqlTableFragmentList catalog_list_table_fragments(database_name, schema_name, table_name, api_version, filter=filter, top=top, skip=skip, select=select, orderby=orderby, count=count)



Retrieves the list of table fragments from the Data Lake Analytics catalog.

### Example


```python
import openapi_client
from openapi_client.models.u_sql_table_fragment_list import USqlTableFragmentList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CatalogApi(api_client)
    database_name = 'database_name_example' # str | The name of the database containing the table fragments.
    schema_name = 'schema_name_example' # str | The name of the schema containing the table fragments.
    table_name = 'table_name_example' # str | The name of the table containing the table fragments.
    api_version = 'api_version_example' # str | Client Api Version.
    filter = 'filter_example' # str | OData filter. Optional. (optional)
    top = 56 # int | The number of items to return. Optional. (optional)
    skip = 56 # int | The number of items to skip over before returning elements. Optional. (optional)
    select = 'select_example' # str | OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional. (optional)
    orderby = 'orderby_example' # str | OrderBy clause. One or more comma-separated expressions with an optional \"asc\" (the default) or \"desc\" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional. (optional)
    count = True # bool | The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional. (optional)

    try:
        api_response = api_instance.catalog_list_table_fragments(database_name, schema_name, table_name, api_version, filter=filter, top=top, skip=skip, select=select, orderby=orderby, count=count)
        print("The response of CatalogApi->catalog_list_table_fragments:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CatalogApi->catalog_list_table_fragments: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **database_name** | **str**| The name of the database containing the table fragments. | 
 **schema_name** | **str**| The name of the schema containing the table fragments. | 
 **table_name** | **str**| The name of the table containing the table fragments. | 
 **api_version** | **str**| Client Api Version. | 
 **filter** | **str**| OData filter. Optional. | [optional] 
 **top** | **int**| The number of items to return. Optional. | [optional] 
 **skip** | **int**| The number of items to skip over before returning elements. Optional. | [optional] 
 **select** | **str**| OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select&#x3D;CategoryName,Description. Optional. | [optional] 
 **orderby** | **str**| OrderBy clause. One or more comma-separated expressions with an optional \&quot;asc\&quot; (the default) or \&quot;desc\&quot; depending on the order you&#39;d like the values sorted, e.g. Categories?$orderby&#x3D;CategoryName desc. Optional. | [optional] 
 **count** | **bool**| The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count&#x3D;true. Optional. | [optional] 

### Return type

[**USqlTableFragmentList**](USqlTableFragmentList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of table fragments in the specified database and schema. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **catalog_list_table_partitions**
> USqlTablePartitionList catalog_list_table_partitions(database_name, schema_name, table_name, api_version, filter=filter, top=top, skip=skip, select=select, orderby=orderby, count=count)



Retrieves the list of table partitions from the Data Lake Analytics catalog.

### Example


```python
import openapi_client
from openapi_client.models.u_sql_table_partition_list import USqlTablePartitionList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CatalogApi(api_client)
    database_name = 'database_name_example' # str | The name of the database containing the partitions.
    schema_name = 'schema_name_example' # str | The name of the schema containing the partitions.
    table_name = 'table_name_example' # str | The name of the table containing the partitions.
    api_version = 'api_version_example' # str | Client Api Version.
    filter = 'filter_example' # str | OData filter. Optional. (optional)
    top = 56 # int | The number of items to return. Optional. (optional)
    skip = 56 # int | The number of items to skip over before returning elements. Optional. (optional)
    select = 'select_example' # str | OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional. (optional)
    orderby = 'orderby_example' # str | OrderBy clause. One or more comma-separated expressions with an optional \"asc\" (the default) or \"desc\" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional. (optional)
    count = True # bool | The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional. (optional)

    try:
        api_response = api_instance.catalog_list_table_partitions(database_name, schema_name, table_name, api_version, filter=filter, top=top, skip=skip, select=select, orderby=orderby, count=count)
        print("The response of CatalogApi->catalog_list_table_partitions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CatalogApi->catalog_list_table_partitions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **database_name** | **str**| The name of the database containing the partitions. | 
 **schema_name** | **str**| The name of the schema containing the partitions. | 
 **table_name** | **str**| The name of the table containing the partitions. | 
 **api_version** | **str**| Client Api Version. | 
 **filter** | **str**| OData filter. Optional. | [optional] 
 **top** | **int**| The number of items to return. Optional. | [optional] 
 **skip** | **int**| The number of items to skip over before returning elements. Optional. | [optional] 
 **select** | **str**| OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select&#x3D;CategoryName,Description. Optional. | [optional] 
 **orderby** | **str**| OrderBy clause. One or more comma-separated expressions with an optional \&quot;asc\&quot; (the default) or \&quot;desc\&quot; depending on the order you&#39;d like the values sorted, e.g. Categories?$orderby&#x3D;CategoryName desc. Optional. | [optional] 
 **count** | **bool**| The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count&#x3D;true. Optional. | [optional] 

### Return type

[**USqlTablePartitionList**](USqlTablePartitionList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of table partitions in the specified database, schema, and table. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **catalog_list_table_statistics**
> USqlTableStatisticsList catalog_list_table_statistics(database_name, schema_name, table_name, api_version, filter=filter, top=top, skip=skip, select=select, orderby=orderby, count=count)



Retrieves the list of table statistics from the Data Lake Analytics catalog.

### Example


```python
import openapi_client
from openapi_client.models.u_sql_table_statistics_list import USqlTableStatisticsList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CatalogApi(api_client)
    database_name = 'database_name_example' # str | The name of the database containing the statistics.
    schema_name = 'schema_name_example' # str | The name of the schema containing the statistics.
    table_name = 'table_name_example' # str | The name of the table containing the statistics.
    api_version = 'api_version_example' # str | Client Api Version.
    filter = 'filter_example' # str | OData filter. Optional. (optional)
    top = 56 # int | The number of items to return. Optional. (optional)
    skip = 56 # int | The number of items to skip over before returning elements. Optional. (optional)
    select = 'select_example' # str | OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional. (optional)
    orderby = 'orderby_example' # str | OrderBy clause. One or more comma-separated expressions with an optional \"asc\" (the default) or \"desc\" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional. (optional)
    count = True # bool | The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional. (optional)

    try:
        api_response = api_instance.catalog_list_table_statistics(database_name, schema_name, table_name, api_version, filter=filter, top=top, skip=skip, select=select, orderby=orderby, count=count)
        print("The response of CatalogApi->catalog_list_table_statistics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CatalogApi->catalog_list_table_statistics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **database_name** | **str**| The name of the database containing the statistics. | 
 **schema_name** | **str**| The name of the schema containing the statistics. | 
 **table_name** | **str**| The name of the table containing the statistics. | 
 **api_version** | **str**| Client Api Version. | 
 **filter** | **str**| OData filter. Optional. | [optional] 
 **top** | **int**| The number of items to return. Optional. | [optional] 
 **skip** | **int**| The number of items to skip over before returning elements. Optional. | [optional] 
 **select** | **str**| OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select&#x3D;CategoryName,Description. Optional. | [optional] 
 **orderby** | **str**| OrderBy clause. One or more comma-separated expressions with an optional \&quot;asc\&quot; (the default) or \&quot;desc\&quot; depending on the order you&#39;d like the values sorted, e.g. Categories?$orderby&#x3D;CategoryName desc. Optional. | [optional] 
 **count** | **bool**| The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count&#x3D;true. Optional. | [optional] 

### Return type

[**USqlTableStatisticsList**](USqlTableStatisticsList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of table statistics in the specified database and schema. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **catalog_list_table_statistics_by_database**
> USqlTableStatisticsList catalog_list_table_statistics_by_database(database_name, api_version, filter=filter, top=top, skip=skip, select=select, orderby=orderby, count=count)



Retrieves the list of all statistics in a database from the Data Lake Analytics catalog.

### Example


```python
import openapi_client
from openapi_client.models.u_sql_table_statistics_list import USqlTableStatisticsList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CatalogApi(api_client)
    database_name = 'database_name_example' # str | The name of the database containing the table statistics.
    api_version = 'api_version_example' # str | Client Api Version.
    filter = 'filter_example' # str | OData filter. Optional. (optional)
    top = 56 # int | The number of items to return. Optional. (optional)
    skip = 56 # int | The number of items to skip over before returning elements. Optional. (optional)
    select = 'select_example' # str | OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional. (optional)
    orderby = 'orderby_example' # str | OrderBy clause. One or more comma-separated expressions with an optional \"asc\" (the default) or \"desc\" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional. (optional)
    count = True # bool | The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional. (optional)

    try:
        api_response = api_instance.catalog_list_table_statistics_by_database(database_name, api_version, filter=filter, top=top, skip=skip, select=select, orderby=orderby, count=count)
        print("The response of CatalogApi->catalog_list_table_statistics_by_database:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CatalogApi->catalog_list_table_statistics_by_database: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **database_name** | **str**| The name of the database containing the table statistics. | 
 **api_version** | **str**| Client Api Version. | 
 **filter** | **str**| OData filter. Optional. | [optional] 
 **top** | **int**| The number of items to return. Optional. | [optional] 
 **skip** | **int**| The number of items to skip over before returning elements. Optional. | [optional] 
 **select** | **str**| OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select&#x3D;CategoryName,Description. Optional. | [optional] 
 **orderby** | **str**| OrderBy clause. One or more comma-separated expressions with an optional \&quot;asc\&quot; (the default) or \&quot;desc\&quot; depending on the order you&#39;d like the values sorted, e.g. Categories?$orderby&#x3D;CategoryName desc. Optional. | [optional] 
 **count** | **bool**| The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count&#x3D;true. Optional. | [optional] 

### Return type

[**USqlTableStatisticsList**](USqlTableStatisticsList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of all table statistics in the specified database. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **catalog_list_table_statistics_by_database_and_schema**
> USqlTableStatisticsList catalog_list_table_statistics_by_database_and_schema(database_name, schema_name, api_version, filter=filter, top=top, skip=skip, select=select, orderby=orderby, count=count)



Retrieves the list of all table statistics within the specified schema from the Data Lake Analytics catalog.

### Example


```python
import openapi_client
from openapi_client.models.u_sql_table_statistics_list import USqlTableStatisticsList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CatalogApi(api_client)
    database_name = 'database_name_example' # str | The name of the database containing the statistics.
    schema_name = 'schema_name_example' # str | The name of the schema containing the statistics.
    api_version = 'api_version_example' # str | Client Api Version.
    filter = 'filter_example' # str | OData filter. Optional. (optional)
    top = 56 # int | The number of items to return. Optional. (optional)
    skip = 56 # int | The number of items to skip over before returning elements. Optional. (optional)
    select = 'select_example' # str | OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional. (optional)
    orderby = 'orderby_example' # str | OrderBy clause. One or more comma-separated expressions with an optional \"asc\" (the default) or \"desc\" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional. (optional)
    count = True # bool | The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional. (optional)

    try:
        api_response = api_instance.catalog_list_table_statistics_by_database_and_schema(database_name, schema_name, api_version, filter=filter, top=top, skip=skip, select=select, orderby=orderby, count=count)
        print("The response of CatalogApi->catalog_list_table_statistics_by_database_and_schema:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CatalogApi->catalog_list_table_statistics_by_database_and_schema: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **database_name** | **str**| The name of the database containing the statistics. | 
 **schema_name** | **str**| The name of the schema containing the statistics. | 
 **api_version** | **str**| Client Api Version. | 
 **filter** | **str**| OData filter. Optional. | [optional] 
 **top** | **int**| The number of items to return. Optional. | [optional] 
 **skip** | **int**| The number of items to skip over before returning elements. Optional. | [optional] 
 **select** | **str**| OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select&#x3D;CategoryName,Description. Optional. | [optional] 
 **orderby** | **str**| OrderBy clause. One or more comma-separated expressions with an optional \&quot;asc\&quot; (the default) or \&quot;desc\&quot; depending on the order you&#39;d like the values sorted, e.g. Categories?$orderby&#x3D;CategoryName desc. Optional. | [optional] 
 **count** | **bool**| The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count&#x3D;true. Optional. | [optional] 

### Return type

[**USqlTableStatisticsList**](USqlTableStatisticsList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of all table statistics in the specified database and schema. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **catalog_list_table_types**
> USqlTableTypeList catalog_list_table_types(database_name, schema_name, api_version, filter=filter, top=top, skip=skip, select=select, orderby=orderby, count=count)



Retrieves the list of table types from the Data Lake Analytics catalog.

### Example


```python
import openapi_client
from openapi_client.models.u_sql_table_type_list import USqlTableTypeList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CatalogApi(api_client)
    database_name = 'database_name_example' # str | The name of the database containing the table types.
    schema_name = 'schema_name_example' # str | The name of the schema containing the table types.
    api_version = 'api_version_example' # str | Client Api Version.
    filter = 'filter_example' # str | OData filter. Optional. (optional)
    top = 56 # int | The number of items to return. Optional. (optional)
    skip = 56 # int | The number of items to skip over before returning elements. Optional. (optional)
    select = 'select_example' # str | OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional. (optional)
    orderby = 'orderby_example' # str | OrderBy clause. One or more comma-separated expressions with an optional \"asc\" (the default) or \"desc\" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional. (optional)
    count = True # bool | The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional. (optional)

    try:
        api_response = api_instance.catalog_list_table_types(database_name, schema_name, api_version, filter=filter, top=top, skip=skip, select=select, orderby=orderby, count=count)
        print("The response of CatalogApi->catalog_list_table_types:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CatalogApi->catalog_list_table_types: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **database_name** | **str**| The name of the database containing the table types. | 
 **schema_name** | **str**| The name of the schema containing the table types. | 
 **api_version** | **str**| Client Api Version. | 
 **filter** | **str**| OData filter. Optional. | [optional] 
 **top** | **int**| The number of items to return. Optional. | [optional] 
 **skip** | **int**| The number of items to skip over before returning elements. Optional. | [optional] 
 **select** | **str**| OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select&#x3D;CategoryName,Description. Optional. | [optional] 
 **orderby** | **str**| OrderBy clause. One or more comma-separated expressions with an optional \&quot;asc\&quot; (the default) or \&quot;desc\&quot; depending on the order you&#39;d like the values sorted, e.g. Categories?$orderby&#x3D;CategoryName desc. Optional. | [optional] 
 **count** | **bool**| The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count&#x3D;true. Optional. | [optional] 

### Return type

[**USqlTableTypeList**](USqlTableTypeList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of table types in the specified database and schema. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **catalog_list_table_valued_functions**
> USqlTableValuedFunctionList catalog_list_table_valued_functions(database_name, schema_name, api_version, filter=filter, top=top, skip=skip, select=select, orderby=orderby, count=count)



Retrieves the list of table valued functions from the Data Lake Analytics catalog.

### Example


```python
import openapi_client
from openapi_client.models.u_sql_table_valued_function_list import USqlTableValuedFunctionList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CatalogApi(api_client)
    database_name = 'database_name_example' # str | The name of the database containing the table valued functions.
    schema_name = 'schema_name_example' # str | The name of the schema containing the table valued functions.
    api_version = 'api_version_example' # str | Client Api Version.
    filter = 'filter_example' # str | OData filter. Optional. (optional)
    top = 56 # int | The number of items to return. Optional. (optional)
    skip = 56 # int | The number of items to skip over before returning elements. Optional. (optional)
    select = 'select_example' # str | OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional. (optional)
    orderby = 'orderby_example' # str | OrderBy clause. One or more comma-separated expressions with an optional \"asc\" (the default) or \"desc\" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional. (optional)
    count = True # bool | The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional. (optional)

    try:
        api_response = api_instance.catalog_list_table_valued_functions(database_name, schema_name, api_version, filter=filter, top=top, skip=skip, select=select, orderby=orderby, count=count)
        print("The response of CatalogApi->catalog_list_table_valued_functions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CatalogApi->catalog_list_table_valued_functions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **database_name** | **str**| The name of the database containing the table valued functions. | 
 **schema_name** | **str**| The name of the schema containing the table valued functions. | 
 **api_version** | **str**| Client Api Version. | 
 **filter** | **str**| OData filter. Optional. | [optional] 
 **top** | **int**| The number of items to return. Optional. | [optional] 
 **skip** | **int**| The number of items to skip over before returning elements. Optional. | [optional] 
 **select** | **str**| OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select&#x3D;CategoryName,Description. Optional. | [optional] 
 **orderby** | **str**| OrderBy clause. One or more comma-separated expressions with an optional \&quot;asc\&quot; (the default) or \&quot;desc\&quot; depending on the order you&#39;d like the values sorted, e.g. Categories?$orderby&#x3D;CategoryName desc. Optional. | [optional] 
 **count** | **bool**| The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count&#x3D;true. Optional. | [optional] 

### Return type

[**USqlTableValuedFunctionList**](USqlTableValuedFunctionList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of table valued functions in the specified database and schema. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **catalog_list_table_valued_functions_by_database**
> USqlTableValuedFunctionList catalog_list_table_valued_functions_by_database(database_name, api_version, filter=filter, top=top, skip=skip, select=select, orderby=orderby, count=count)



Retrieves the list of all table valued functions in a database from the Data Lake Analytics catalog.

### Example


```python
import openapi_client
from openapi_client.models.u_sql_table_valued_function_list import USqlTableValuedFunctionList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CatalogApi(api_client)
    database_name = 'database_name_example' # str | The name of the database containing the table valued functions.
    api_version = 'api_version_example' # str | Client Api Version.
    filter = 'filter_example' # str | OData filter. Optional. (optional)
    top = 56 # int | The number of items to return. Optional. (optional)
    skip = 56 # int | The number of items to skip over before returning elements. Optional. (optional)
    select = 'select_example' # str | OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional. (optional)
    orderby = 'orderby_example' # str | OrderBy clause. One or more comma-separated expressions with an optional \"asc\" (the default) or \"desc\" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional. (optional)
    count = True # bool | The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional. (optional)

    try:
        api_response = api_instance.catalog_list_table_valued_functions_by_database(database_name, api_version, filter=filter, top=top, skip=skip, select=select, orderby=orderby, count=count)
        print("The response of CatalogApi->catalog_list_table_valued_functions_by_database:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CatalogApi->catalog_list_table_valued_functions_by_database: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **database_name** | **str**| The name of the database containing the table valued functions. | 
 **api_version** | **str**| Client Api Version. | 
 **filter** | **str**| OData filter. Optional. | [optional] 
 **top** | **int**| The number of items to return. Optional. | [optional] 
 **skip** | **int**| The number of items to skip over before returning elements. Optional. | [optional] 
 **select** | **str**| OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select&#x3D;CategoryName,Description. Optional. | [optional] 
 **orderby** | **str**| OrderBy clause. One or more comma-separated expressions with an optional \&quot;asc\&quot; (the default) or \&quot;desc\&quot; depending on the order you&#39;d like the values sorted, e.g. Categories?$orderby&#x3D;CategoryName desc. Optional. | [optional] 
 **count** | **bool**| The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count&#x3D;true. Optional. | [optional] 

### Return type

[**USqlTableValuedFunctionList**](USqlTableValuedFunctionList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of all table valued functions in the specified database. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **catalog_list_tables**
> USqlTableList catalog_list_tables(database_name, schema_name, api_version, filter=filter, top=top, skip=skip, select=select, orderby=orderby, count=count, basic=basic)



Retrieves the list of tables from the Data Lake Analytics catalog.

### Example


```python
import openapi_client
from openapi_client.models.u_sql_table_list import USqlTableList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CatalogApi(api_client)
    database_name = 'database_name_example' # str | The name of the database containing the tables.
    schema_name = 'schema_name_example' # str | The name of the schema containing the tables.
    api_version = 'api_version_example' # str | Client Api Version.
    filter = 'filter_example' # str | OData filter. Optional. (optional)
    top = 56 # int | The number of items to return. Optional. (optional)
    skip = 56 # int | The number of items to skip over before returning elements. Optional. (optional)
    select = 'select_example' # str | OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional. (optional)
    orderby = 'orderby_example' # str | OrderBy clause. One or more comma-separated expressions with an optional \"asc\" (the default) or \"desc\" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional. (optional)
    count = True # bool | The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional. (optional)
    basic = False # bool | The basic switch indicates what level of information to return when listing tables. When basic is true, only database_name, schema_name, table_name and version are returned for each table, otherwise all table metadata is returned. By default, it is false. Optional. (optional) (default to False)

    try:
        api_response = api_instance.catalog_list_tables(database_name, schema_name, api_version, filter=filter, top=top, skip=skip, select=select, orderby=orderby, count=count, basic=basic)
        print("The response of CatalogApi->catalog_list_tables:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CatalogApi->catalog_list_tables: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **database_name** | **str**| The name of the database containing the tables. | 
 **schema_name** | **str**| The name of the schema containing the tables. | 
 **api_version** | **str**| Client Api Version. | 
 **filter** | **str**| OData filter. Optional. | [optional] 
 **top** | **int**| The number of items to return. Optional. | [optional] 
 **skip** | **int**| The number of items to skip over before returning elements. Optional. | [optional] 
 **select** | **str**| OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select&#x3D;CategoryName,Description. Optional. | [optional] 
 **orderby** | **str**| OrderBy clause. One or more comma-separated expressions with an optional \&quot;asc\&quot; (the default) or \&quot;desc\&quot; depending on the order you&#39;d like the values sorted, e.g. Categories?$orderby&#x3D;CategoryName desc. Optional. | [optional] 
 **count** | **bool**| The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count&#x3D;true. Optional. | [optional] 
 **basic** | **bool**| The basic switch indicates what level of information to return when listing tables. When basic is true, only database_name, schema_name, table_name and version are returned for each table, otherwise all table metadata is returned. By default, it is false. Optional. | [optional] [default to False]

### Return type

[**USqlTableList**](USqlTableList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of tables in the specified database and schema. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **catalog_list_tables_by_database**
> USqlTableList catalog_list_tables_by_database(database_name, api_version, filter=filter, top=top, skip=skip, select=select, orderby=orderby, count=count, basic=basic)



Retrieves the list of all tables in a database from the Data Lake Analytics catalog.

### Example


```python
import openapi_client
from openapi_client.models.u_sql_table_list import USqlTableList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CatalogApi(api_client)
    database_name = 'database_name_example' # str | The name of the database containing the tables.
    api_version = 'api_version_example' # str | Client Api Version.
    filter = 'filter_example' # str | OData filter. Optional. (optional)
    top = 56 # int | The number of items to return. Optional. (optional)
    skip = 56 # int | The number of items to skip over before returning elements. Optional. (optional)
    select = 'select_example' # str | OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional. (optional)
    orderby = 'orderby_example' # str | OrderBy clause. One or more comma-separated expressions with an optional \"asc\" (the default) or \"desc\" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional. (optional)
    count = True # bool | The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional. (optional)
    basic = False # bool | The basic switch indicates what level of information to return when listing tables. When basic is true, only database_name, schema_name, table_name and version are returned for each table, otherwise all table metadata is returned. By default, it is false (optional) (default to False)

    try:
        api_response = api_instance.catalog_list_tables_by_database(database_name, api_version, filter=filter, top=top, skip=skip, select=select, orderby=orderby, count=count, basic=basic)
        print("The response of CatalogApi->catalog_list_tables_by_database:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CatalogApi->catalog_list_tables_by_database: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **database_name** | **str**| The name of the database containing the tables. | 
 **api_version** | **str**| Client Api Version. | 
 **filter** | **str**| OData filter. Optional. | [optional] 
 **top** | **int**| The number of items to return. Optional. | [optional] 
 **skip** | **int**| The number of items to skip over before returning elements. Optional. | [optional] 
 **select** | **str**| OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select&#x3D;CategoryName,Description. Optional. | [optional] 
 **orderby** | **str**| OrderBy clause. One or more comma-separated expressions with an optional \&quot;asc\&quot; (the default) or \&quot;desc\&quot; depending on the order you&#39;d like the values sorted, e.g. Categories?$orderby&#x3D;CategoryName desc. Optional. | [optional] 
 **count** | **bool**| The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count&#x3D;true. Optional. | [optional] 
 **basic** | **bool**| The basic switch indicates what level of information to return when listing tables. When basic is true, only database_name, schema_name, table_name and version are returned for each table, otherwise all table metadata is returned. By default, it is false | [optional] [default to False]

### Return type

[**USqlTableList**](USqlTableList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of all tables in the specified database. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **catalog_list_types**
> USqlTypeList catalog_list_types(database_name, schema_name, api_version, filter=filter, top=top, skip=skip, select=select, orderby=orderby, count=count)



Retrieves the list of types within the specified database and schema from the Data Lake Analytics catalog.

### Example


```python
import openapi_client
from openapi_client.models.u_sql_type_list import USqlTypeList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CatalogApi(api_client)
    database_name = 'database_name_example' # str | The name of the database containing the types.
    schema_name = 'schema_name_example' # str | The name of the schema containing the types.
    api_version = 'api_version_example' # str | Client Api Version.
    filter = 'filter_example' # str | OData filter. Optional. (optional)
    top = 56 # int | The number of items to return. Optional. (optional)
    skip = 56 # int | The number of items to skip over before returning elements. Optional. (optional)
    select = 'select_example' # str | OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional. (optional)
    orderby = 'orderby_example' # str | OrderBy clause. One or more comma-separated expressions with an optional \"asc\" (the default) or \"desc\" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional. (optional)
    count = True # bool | The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional. (optional)

    try:
        api_response = api_instance.catalog_list_types(database_name, schema_name, api_version, filter=filter, top=top, skip=skip, select=select, orderby=orderby, count=count)
        print("The response of CatalogApi->catalog_list_types:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CatalogApi->catalog_list_types: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **database_name** | **str**| The name of the database containing the types. | 
 **schema_name** | **str**| The name of the schema containing the types. | 
 **api_version** | **str**| Client Api Version. | 
 **filter** | **str**| OData filter. Optional. | [optional] 
 **top** | **int**| The number of items to return. Optional. | [optional] 
 **skip** | **int**| The number of items to skip over before returning elements. Optional. | [optional] 
 **select** | **str**| OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select&#x3D;CategoryName,Description. Optional. | [optional] 
 **orderby** | **str**| OrderBy clause. One or more comma-separated expressions with an optional \&quot;asc\&quot; (the default) or \&quot;desc\&quot; depending on the order you&#39;d like the values sorted, e.g. Categories?$orderby&#x3D;CategoryName desc. Optional. | [optional] 
 **count** | **bool**| The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count&#x3D;true. Optional. | [optional] 

### Return type

[**USqlTypeList**](USqlTypeList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of types in the specified database and schema. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **catalog_list_views**
> USqlViewList catalog_list_views(database_name, schema_name, api_version, filter=filter, top=top, skip=skip, select=select, orderby=orderby, count=count)



Retrieves the list of views from the Data Lake Analytics catalog.

### Example


```python
import openapi_client
from openapi_client.models.u_sql_view_list import USqlViewList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CatalogApi(api_client)
    database_name = 'database_name_example' # str | The name of the database containing the views.
    schema_name = 'schema_name_example' # str | The name of the schema containing the views.
    api_version = 'api_version_example' # str | Client Api Version.
    filter = 'filter_example' # str | OData filter. Optional. (optional)
    top = 56 # int | The number of items to return. Optional. (optional)
    skip = 56 # int | The number of items to skip over before returning elements. Optional. (optional)
    select = 'select_example' # str | OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional. (optional)
    orderby = 'orderby_example' # str | OrderBy clause. One or more comma-separated expressions with an optional \"asc\" (the default) or \"desc\" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional. (optional)
    count = True # bool | The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional. (optional)

    try:
        api_response = api_instance.catalog_list_views(database_name, schema_name, api_version, filter=filter, top=top, skip=skip, select=select, orderby=orderby, count=count)
        print("The response of CatalogApi->catalog_list_views:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CatalogApi->catalog_list_views: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **database_name** | **str**| The name of the database containing the views. | 
 **schema_name** | **str**| The name of the schema containing the views. | 
 **api_version** | **str**| Client Api Version. | 
 **filter** | **str**| OData filter. Optional. | [optional] 
 **top** | **int**| The number of items to return. Optional. | [optional] 
 **skip** | **int**| The number of items to skip over before returning elements. Optional. | [optional] 
 **select** | **str**| OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select&#x3D;CategoryName,Description. Optional. | [optional] 
 **orderby** | **str**| OrderBy clause. One or more comma-separated expressions with an optional \&quot;asc\&quot; (the default) or \&quot;desc\&quot; depending on the order you&#39;d like the values sorted, e.g. Categories?$orderby&#x3D;CategoryName desc. Optional. | [optional] 
 **count** | **bool**| The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count&#x3D;true. Optional. | [optional] 

### Return type

[**USqlViewList**](USqlViewList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of views in the specified database and schema. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **catalog_list_views_by_database**
> USqlViewList catalog_list_views_by_database(database_name, api_version, filter=filter, top=top, skip=skip, select=select, orderby=orderby, count=count)



Retrieves the list of all views in a database from the Data Lake Analytics catalog.

### Example


```python
import openapi_client
from openapi_client.models.u_sql_view_list import USqlViewList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CatalogApi(api_client)
    database_name = 'database_name_example' # str | The name of the database containing the views.
    api_version = 'api_version_example' # str | Client Api Version.
    filter = 'filter_example' # str | OData filter. Optional. (optional)
    top = 56 # int | The number of items to return. Optional. (optional)
    skip = 56 # int | The number of items to skip over before returning elements. Optional. (optional)
    select = 'select_example' # str | OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional. (optional)
    orderby = 'orderby_example' # str | OrderBy clause. One or more comma-separated expressions with an optional \"asc\" (the default) or \"desc\" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional. (optional)
    count = True # bool | The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional. (optional)

    try:
        api_response = api_instance.catalog_list_views_by_database(database_name, api_version, filter=filter, top=top, skip=skip, select=select, orderby=orderby, count=count)
        print("The response of CatalogApi->catalog_list_views_by_database:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CatalogApi->catalog_list_views_by_database: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **database_name** | **str**| The name of the database containing the views. | 
 **api_version** | **str**| Client Api Version. | 
 **filter** | **str**| OData filter. Optional. | [optional] 
 **top** | **int**| The number of items to return. Optional. | [optional] 
 **skip** | **int**| The number of items to skip over before returning elements. Optional. | [optional] 
 **select** | **str**| OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select&#x3D;CategoryName,Description. Optional. | [optional] 
 **orderby** | **str**| OrderBy clause. One or more comma-separated expressions with an optional \&quot;asc\&quot; (the default) or \&quot;desc\&quot; depending on the order you&#39;d like the values sorted, e.g. Categories?$orderby&#x3D;CategoryName desc. Optional. | [optional] 
 **count** | **bool**| The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count&#x3D;true. Optional. | [optional] 

### Return type

[**USqlViewList**](USqlViewList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of all views in the specified database. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **catalog_preview_table**
> USqlTablePreview catalog_preview_table(database_name, schema_name, table_name, api_version, max_rows=max_rows, max_columns=max_columns)



Retrieves a preview set of rows in given table.

### Example


```python
import openapi_client
from openapi_client.models.u_sql_table_preview import USqlTablePreview
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CatalogApi(api_client)
    database_name = 'database_name_example' # str | The name of the database containing the table.
    schema_name = 'schema_name_example' # str | The name of the schema containing the table.
    table_name = 'table_name_example' # str | The name of the table.
    api_version = 'api_version_example' # str | Client Api Version.
    max_rows = 56 # int | The maximum number of preview rows to be retrieved. Rows returned may be less than or equal to this number depending on row sizes and number of rows in the table. (optional)
    max_columns = 56 # int | The maximum number of columns to be retrieved. (optional)

    try:
        api_response = api_instance.catalog_preview_table(database_name, schema_name, table_name, api_version, max_rows=max_rows, max_columns=max_columns)
        print("The response of CatalogApi->catalog_preview_table:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CatalogApi->catalog_preview_table: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **database_name** | **str**| The name of the database containing the table. | 
 **schema_name** | **str**| The name of the schema containing the table. | 
 **table_name** | **str**| The name of the table. | 
 **api_version** | **str**| Client Api Version. | 
 **max_rows** | **int**| The maximum number of preview rows to be retrieved. Rows returned may be less than or equal to this number depending on row sizes and number of rows in the table. | [optional] 
 **max_columns** | **int**| The maximum number of columns to be retrieved. | [optional] 

### Return type

[**USqlTablePreview**](USqlTablePreview.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved preview rows for the specified table. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **catalog_preview_table_partition**
> USqlTablePreview catalog_preview_table_partition(database_name, schema_name, table_name, partition_name, api_version, max_rows=max_rows, max_columns=max_columns)



Retrieves a preview set of rows in given partition.

### Example


```python
import openapi_client
from openapi_client.models.u_sql_table_preview import USqlTablePreview
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CatalogApi(api_client)
    database_name = 'database_name_example' # str | The name of the database containing the partition.
    schema_name = 'schema_name_example' # str | The name of the schema containing the partition.
    table_name = 'table_name_example' # str | The name of the table containing the partition.
    partition_name = 'partition_name_example' # str | The name of the table partition.
    api_version = 'api_version_example' # str | Client Api Version.
    max_rows = 56 # int | The maximum number of preview rows to be retrieved.Rows returned may be less than or equal to this number depending on row sizes and number of rows in the partition. (optional)
    max_columns = 56 # int | The maximum number of columns to be retrieved. (optional)

    try:
        api_response = api_instance.catalog_preview_table_partition(database_name, schema_name, table_name, partition_name, api_version, max_rows=max_rows, max_columns=max_columns)
        print("The response of CatalogApi->catalog_preview_table_partition:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CatalogApi->catalog_preview_table_partition: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **database_name** | **str**| The name of the database containing the partition. | 
 **schema_name** | **str**| The name of the schema containing the partition. | 
 **table_name** | **str**| The name of the table containing the partition. | 
 **partition_name** | **str**| The name of the table partition. | 
 **api_version** | **str**| Client Api Version. | 
 **max_rows** | **int**| The maximum number of preview rows to be retrieved.Rows returned may be less than or equal to this number depending on row sizes and number of rows in the partition. | [optional] 
 **max_columns** | **int**| The maximum number of columns to be retrieved. | [optional] 

### Return type

[**USqlTablePreview**](USqlTablePreview.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved preview rows for the specified partition. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **catalog_update_credential**
> catalog_update_credential(database_name, credential_name, api_version, parameters)



Modifies the specified credential for use with external data sources in the specified database

### Example


```python
import openapi_client
from openapi_client.models.data_lake_analytics_catalog_credential_update_parameters import DataLakeAnalyticsCatalogCredentialUpdateParameters
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CatalogApi(api_client)
    database_name = 'database_name_example' # str | The name of the database containing the credential.
    credential_name = 'credential_name_example' # str | The name of the credential.
    api_version = 'api_version_example' # str | Client Api Version.
    parameters = openapi_client.DataLakeAnalyticsCatalogCredentialUpdateParameters() # DataLakeAnalyticsCatalogCredentialUpdateParameters | The parameters required to modify the credential (name and password)

    try:
        api_instance.catalog_update_credential(database_name, credential_name, api_version, parameters)
    except Exception as e:
        print("Exception when calling CatalogApi->catalog_update_credential: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **database_name** | **str**| The name of the database containing the credential. | 
 **credential_name** | **str**| The name of the credential. | 
 **api_version** | **str**| Client Api Version. | 
 **parameters** | [**DataLakeAnalyticsCatalogCredentialUpdateParameters**](DataLakeAnalyticsCatalogCredentialUpdateParameters.md)| The parameters required to modify the credential (name and password) | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the specified credential&#39;s password in the specified database |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **catalog_update_secret**
> catalog_update_secret(database_name, secret_name, api_version, parameters)



Modifies the specified secret for use with external data sources in the specified database. This is deprecated and will be removed in the next release. Please use UpdateCredential instead.

### Example


```python
import openapi_client
from openapi_client.models.data_lake_analytics_catalog_secret_create_or_update_parameters import DataLakeAnalyticsCatalogSecretCreateOrUpdateParameters
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CatalogApi(api_client)
    database_name = 'database_name_example' # str | The name of the database containing the secret.
    secret_name = 'secret_name_example' # str | The name of the secret.
    api_version = 'api_version_example' # str | Client Api Version.
    parameters = openapi_client.DataLakeAnalyticsCatalogSecretCreateOrUpdateParameters() # DataLakeAnalyticsCatalogSecretCreateOrUpdateParameters | The parameters required to modify the secret (name and password)

    try:
        api_instance.catalog_update_secret(database_name, secret_name, api_version, parameters)
    except Exception as e:
        print("Exception when calling CatalogApi->catalog_update_secret: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **database_name** | **str**| The name of the database containing the secret. | 
 **secret_name** | **str**| The name of the secret. | 
 **api_version** | **str**| Client Api Version. | 
 **parameters** | [**DataLakeAnalyticsCatalogSecretCreateOrUpdateParameters**](DataLakeAnalyticsCatalogSecretCreateOrUpdateParameters.md)| The parameters required to modify the secret (name and password) | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the details of the specified secret in the specified database. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

