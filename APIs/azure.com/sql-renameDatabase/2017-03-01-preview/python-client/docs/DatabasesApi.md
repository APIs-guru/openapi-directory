# openapi_client.DatabasesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**databases_rename**](DatabasesApi.md#databases_rename) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/move | 


# **databases_rename**
> databases_rename(resource_group_name, server_name, database_name, subscription_id, api_version, parameters)



Renames a database.

### Example


```python
import openapi_client
from openapi_client.models.resource_move_definition import ResourceMoveDefinition
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
    api_instance = openapi_client.DatabasesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    database_name = 'database_name_example' # str | The name of the database to rename.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    parameters = openapi_client.ResourceMoveDefinition() # ResourceMoveDefinition | The resource move definition for renaming this database.

    try:
        api_instance.databases_rename(resource_group_name, server_name, database_name, subscription_id, api_version, parameters)
    except Exception as e:
        print("Exception when calling DatabasesApi->databases_rename: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of the database to rename. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **parameters** | [**ResourceMoveDefinition**](ResourceMoveDefinition.md)| The resource move definition for renaming this database. | 

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
**200** | Successfully renamed the database. |  -  |
**0** | *** Error Responses: ***   * 400 InvalidResourceMoveRequest - The resource move request is invalid.   * 400 InvalidMoveTargetResourceId - The target resource identifier in move request is invalid.   * 400 MismatchingSubscriptionWithUrl - The provided subscription did not match the subscription in the Url.   * 400 MismatchingResourceGroupNameWithUrl - The provided resource group name did not match the name in the Url.   * 400 MismatchingServerNameWithUrl - The provided server name did not match the name in the Url.   * 400 UnsupportedServiceName - The specified name is an invalid name because it contains one or more unsupported unicode characters.   * 400 CannotMoveOrDropSyncMetadataDatabase - Cannot drop database used as sync metadata database.   * 400 InvalidIdentifier - The identifier contains NULL or an invalid unicode character.   * 400 TokenTooLong - The provided token is too long.   * 400 CannotMoveOrDropJobAccountDatabase - Cannot drop database associated with job account.   * 400 CannotUseReservedDatabaseName - Cannot use reserved database name in this operation.   * 404 SourceDatabaseNotFound - The source database does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

