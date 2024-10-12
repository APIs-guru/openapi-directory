# openapi_client.DatabasesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**databases_enumerate_databases**](DatabasesApi.md#databases_enumerate_databases) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/migrateProjects/{migrateProjectName}/databases | Gets a list of databases in the migrate project.
[**databases_get_database**](DatabasesApi.md#databases_get_database) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/migrateProjects/{migrateProjectName}/databases/{databaseName} | Gets a database in the migrate project.


# **databases_enumerate_databases**
> DatabaseCollection databases_enumerate_databases(subscription_id, resource_group_name, migrate_project_name, api_version, continuation_token=continuation_token, page_size=page_size, accept_language=accept_language)

Gets a list of databases in the migrate project.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.database_collection import DatabaseCollection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DatabasesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription Id in which migrate project was created.
    resource_group_name = 'resource_group_name_example' # str | Name of the Azure Resource Group that migrate project is part of.
    migrate_project_name = 'migrate_project_name_example' # str | Name of the Azure Migrate project.
    api_version = 'api_version_example' # str | Standard request header. Used by service to identify API version used by client.
    continuation_token = 'continuation_token_example' # str | The continuation token. (optional)
    page_size = 56 # int | The number of items to be returned in a single page. This value is honored only if it is less than the 100. (optional)
    accept_language = 'accept_language_example' # str | Standard request header. Used by service to respond to client in appropriate language. (optional)

    try:
        # Gets a list of databases in the migrate project.
        api_response = api_instance.databases_enumerate_databases(subscription_id, resource_group_name, migrate_project_name, api_version, continuation_token=continuation_token, page_size=page_size, accept_language=accept_language)
        print("The response of DatabasesApi->databases_enumerate_databases:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DatabasesApi->databases_enumerate_databases: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription Id in which migrate project was created. | 
 **resource_group_name** | **str**| Name of the Azure Resource Group that migrate project is part of. | 
 **migrate_project_name** | **str**| Name of the Azure Migrate project. | 
 **api_version** | **str**| Standard request header. Used by service to identify API version used by client. | 
 **continuation_token** | **str**| The continuation token. | [optional] 
 **page_size** | **int**| The number of items to be returned in a single page. This value is honored only if it is less than the 100. | [optional] 
 **accept_language** | **str**| Standard request header. Used by service to respond to client in appropriate language. | [optional] 

### Return type

[**DatabaseCollection**](DatabaseCollection.md)

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

# **databases_get_database**
> Database databases_get_database(subscription_id, resource_group_name, migrate_project_name, database_name, api_version, accept_language=accept_language)

Gets a database in the migrate project.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.database import Database
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DatabasesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription Id in which migrate project was created.
    resource_group_name = 'resource_group_name_example' # str | Name of the Azure Resource Group that migrate project is part of.
    migrate_project_name = 'migrate_project_name_example' # str | Name of the Azure Migrate project.
    database_name = 'database_name_example' # str | Unique name of a database in Azure migration hub.
    api_version = 'api_version_example' # str | Standard request header. Used by service to identify API version used by client.
    accept_language = 'accept_language_example' # str | Standard request header. Used by service to respond to client in appropriate language. (optional)

    try:
        # Gets a database in the migrate project.
        api_response = api_instance.databases_get_database(subscription_id, resource_group_name, migrate_project_name, database_name, api_version, accept_language=accept_language)
        print("The response of DatabasesApi->databases_get_database:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DatabasesApi->databases_get_database: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription Id in which migrate project was created. | 
 **resource_group_name** | **str**| Name of the Azure Resource Group that migrate project is part of. | 
 **migrate_project_name** | **str**| Name of the Azure Migrate project. | 
 **database_name** | **str**| Unique name of a database in Azure migration hub. | 
 **api_version** | **str**| Standard request header. Used by service to identify API version used by client. | 
 **accept_language** | **str**| Standard request header. Used by service to respond to client in appropriate language. | [optional] 

### Return type

[**Database**](Database.md)

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

