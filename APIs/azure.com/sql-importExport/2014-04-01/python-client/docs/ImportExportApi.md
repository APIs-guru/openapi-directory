# openapi_client.ImportExportApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**databases_create_import_operation**](ImportExportApi.md#databases_create_import_operation) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/extensions/{extensionName} | 
[**databases_export**](ImportExportApi.md#databases_export) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/export | 
[**databases_import**](ImportExportApi.md#databases_import) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/import | 


# **databases_create_import_operation**
> ImportExportResponse databases_create_import_operation(api_version, subscription_id, resource_group_name, server_name, database_name, extension_name, parameters)



Creates an import operation that imports a bacpac into an existing database. The existing database must be empty.

### Example


```python
import openapi_client
from openapi_client.models.import_export_response import ImportExportResponse
from openapi_client.models.import_extension_request import ImportExtensionRequest
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
    api_instance = openapi_client.ImportExportApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for the request.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    database_name = 'database_name_example' # str | The name of the database to import into
    extension_name = 'extension_name_example' # str | The name of the operation to perform
    parameters = openapi_client.ImportExtensionRequest() # ImportExtensionRequest | The required parameters for importing a Bacpac into a database.

    try:
        api_response = api_instance.databases_create_import_operation(api_version, subscription_id, resource_group_name, server_name, database_name, extension_name, parameters)
        print("The response of ImportExportApi->databases_create_import_operation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ImportExportApi->databases_create_import_operation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the request. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of the database to import into | 
 **extension_name** | **str**| The name of the operation to perform | 
 **parameters** | [**ImportExtensionRequest**](ImportExtensionRequest.md)| The required parameters for importing a Bacpac into a database. | 

### Return type

[**ImportExportResponse**](ImportExportResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | OK |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **databases_export**
> ImportExportResponse databases_export(api_version, subscription_id, resource_group_name, server_name, database_name, parameters)



Exports a database to a bacpac.

### Example


```python
import openapi_client
from openapi_client.models.export_request import ExportRequest
from openapi_client.models.import_export_response import ImportExportResponse
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
    api_instance = openapi_client.ImportExportApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for the request.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    database_name = 'database_name_example' # str | The name of the database to be exported.
    parameters = openapi_client.ExportRequest() # ExportRequest | The required parameters for exporting a database.

    try:
        api_response = api_instance.databases_export(api_version, subscription_id, resource_group_name, server_name, database_name, parameters)
        print("The response of ImportExportApi->databases_export:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ImportExportApi->databases_export: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the request. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of the database to be exported. | 
 **parameters** | [**ExportRequest**](ExportRequest.md)| The required parameters for exporting a database. | 

### Return type

[**ImportExportResponse**](ImportExportResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **databases_import**
> ImportExportResponse databases_import(api_version, subscription_id, resource_group_name, server_name, parameters)



Imports a bacpac into a new database. 

### Example


```python
import openapi_client
from openapi_client.models.import_export_response import ImportExportResponse
from openapi_client.models.import_request import ImportRequest
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
    api_instance = openapi_client.ImportExportApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for the request.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    parameters = openapi_client.ImportRequest() # ImportRequest | The required parameters for importing a Bacpac into a database.

    try:
        api_response = api_instance.databases_import(api_version, subscription_id, resource_group_name, server_name, parameters)
        print("The response of ImportExportApi->databases_import:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ImportExportApi->databases_import: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the request. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **parameters** | [**ImportRequest**](ImportRequest.md)| The required parameters for importing a Bacpac into a database. | 

### Return type

[**ImportExportResponse**](ImportExportResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

