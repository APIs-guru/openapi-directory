# openapi_client.TableAuditingApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**database_connection_policies_create_or_update**](TableAuditingApi.md#database_connection_policies_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/connectionPolicies/{connectionPolicyName} | 
[**database_connection_policies_get**](TableAuditingApi.md#database_connection_policies_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/connectionPolicies/{connectionPolicyName} | 
[**database_table_auditing_policies_create_or_update**](TableAuditingApi.md#database_table_auditing_policies_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/auditingPolicies/{tableAuditingPolicyName} | 
[**database_table_auditing_policies_get**](TableAuditingApi.md#database_table_auditing_policies_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/auditingPolicies/{tableAuditingPolicyName} | 
[**database_table_auditing_policies_list_by_database**](TableAuditingApi.md#database_table_auditing_policies_list_by_database) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/auditingPolicies | 
[**server_table_auditing_policies_create_or_update**](TableAuditingApi.md#server_table_auditing_policies_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/auditingPolicies/{tableAuditingPolicyName} | 
[**server_table_auditing_policies_get**](TableAuditingApi.md#server_table_auditing_policies_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/auditingPolicies/{tableAuditingPolicyName} | 
[**server_table_auditing_policies_list_by_server**](TableAuditingApi.md#server_table_auditing_policies_list_by_server) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/auditingPolicies | 


# **database_connection_policies_create_or_update**
> DatabaseConnectionPolicy database_connection_policies_create_or_update(resource_group_name, server_name, database_name, connection_policy_name, subscription_id, api_version, parameters)



Creates or updates a database's connection policy, which is used with table auditing. Table auditing is deprecated, use blob auditing instead.

### Example


```python
import openapi_client
from openapi_client.models.database_connection_policy import DatabaseConnectionPolicy
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
    api_instance = openapi_client.TableAuditingApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    database_name = 'database_name_example' # str | The name of the database for which the connection policy will be defined.
    connection_policy_name = 'connection_policy_name_example' # str | The name of the connection policy.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    parameters = openapi_client.DatabaseConnectionPolicy() # DatabaseConnectionPolicy | The database connection policy.

    try:
        api_response = api_instance.database_connection_policies_create_or_update(resource_group_name, server_name, database_name, connection_policy_name, subscription_id, api_version, parameters)
        print("The response of TableAuditingApi->database_connection_policies_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TableAuditingApi->database_connection_policies_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of the database for which the connection policy will be defined. | 
 **connection_policy_name** | **str**| The name of the connection policy. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **parameters** | [**DatabaseConnectionPolicy**](DatabaseConnectionPolicy.md)| The database connection policy. | 

### Return type

[**DatabaseConnectionPolicy**](DatabaseConnectionPolicy.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully set the database connection policy. |  -  |
**201** | Successfully created the database connection policy. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_connection_policies_get**
> DatabaseConnectionPolicy database_connection_policies_get(resource_group_name, server_name, database_name, connection_policy_name, subscription_id, api_version)



Gets a database's connection policy, which is used with table auditing. Table auditing is deprecated, use blob auditing instead.

### Example


```python
import openapi_client
from openapi_client.models.database_connection_policy import DatabaseConnectionPolicy
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
    api_instance = openapi_client.TableAuditingApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    database_name = 'database_name_example' # str | The name of the database for which the connection policy is defined.
    connection_policy_name = 'connection_policy_name_example' # str | The name of the connection policy.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.database_connection_policies_get(resource_group_name, server_name, database_name, connection_policy_name, subscription_id, api_version)
        print("The response of TableAuditingApi->database_connection_policies_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TableAuditingApi->database_connection_policies_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of the database for which the connection policy is defined. | 
 **connection_policy_name** | **str**| The name of the connection policy. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**DatabaseConnectionPolicy**](DatabaseConnectionPolicy.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the database connection policy. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_table_auditing_policies_create_or_update**
> DatabaseTableAuditingPolicy database_table_auditing_policies_create_or_update(resource_group_name, server_name, database_name, table_auditing_policy_name, subscription_id, api_version, parameters)



Creates or updates a database's table auditing policy. Table auditing is deprecated, use blob auditing instead.

### Example


```python
import openapi_client
from openapi_client.models.database_table_auditing_policy import DatabaseTableAuditingPolicy
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
    api_instance = openapi_client.TableAuditingApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    database_name = 'database_name_example' # str | The name of the database for which the table auditing policy will be defined.
    table_auditing_policy_name = 'table_auditing_policy_name_example' # str | The name of the table auditing policy.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    parameters = openapi_client.DatabaseTableAuditingPolicy() # DatabaseTableAuditingPolicy | The database table auditing policy.

    try:
        api_response = api_instance.database_table_auditing_policies_create_or_update(resource_group_name, server_name, database_name, table_auditing_policy_name, subscription_id, api_version, parameters)
        print("The response of TableAuditingApi->database_table_auditing_policies_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TableAuditingApi->database_table_auditing_policies_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of the database for which the table auditing policy will be defined. | 
 **table_auditing_policy_name** | **str**| The name of the table auditing policy. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **parameters** | [**DatabaseTableAuditingPolicy**](DatabaseTableAuditingPolicy.md)| The database table auditing policy. | 

### Return type

[**DatabaseTableAuditingPolicy**](DatabaseTableAuditingPolicy.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully set the database table auditing policy. |  -  |
**201** | Successfully created the database table auditing policy. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_table_auditing_policies_get**
> DatabaseTableAuditingPolicy database_table_auditing_policies_get(resource_group_name, server_name, database_name, table_auditing_policy_name, subscription_id, api_version)



Gets a database's table auditing policy. Table auditing is deprecated, use blob auditing instead.

### Example


```python
import openapi_client
from openapi_client.models.database_table_auditing_policy import DatabaseTableAuditingPolicy
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
    api_instance = openapi_client.TableAuditingApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    database_name = 'database_name_example' # str | The name of the database for which the table audit policy is defined.
    table_auditing_policy_name = 'table_auditing_policy_name_example' # str | The name of the table auditing policy.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.database_table_auditing_policies_get(resource_group_name, server_name, database_name, table_auditing_policy_name, subscription_id, api_version)
        print("The response of TableAuditingApi->database_table_auditing_policies_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TableAuditingApi->database_table_auditing_policies_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of the database for which the table audit policy is defined. | 
 **table_auditing_policy_name** | **str**| The name of the table auditing policy. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**DatabaseTableAuditingPolicy**](DatabaseTableAuditingPolicy.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the database table auditing policy. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_table_auditing_policies_list_by_database**
> DatabaseTableAuditingPolicyListResult database_table_auditing_policies_list_by_database(resource_group_name, server_name, database_name, subscription_id, api_version)



Lists a database's table auditing policies. Table auditing is deprecated, use blob auditing instead.

### Example


```python
import openapi_client
from openapi_client.models.database_table_auditing_policy_list_result import DatabaseTableAuditingPolicyListResult
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
    api_instance = openapi_client.TableAuditingApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    database_name = 'database_name_example' # str | The name of the database for which the table audit policy is defined.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.database_table_auditing_policies_list_by_database(resource_group_name, server_name, database_name, subscription_id, api_version)
        print("The response of TableAuditingApi->database_table_auditing_policies_list_by_database:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TableAuditingApi->database_table_auditing_policies_list_by_database: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of the database for which the table audit policy is defined. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**DatabaseTableAuditingPolicyListResult**](DatabaseTableAuditingPolicyListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the database table auditing policies. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **server_table_auditing_policies_create_or_update**
> ServerTableAuditingPolicy server_table_auditing_policies_create_or_update(resource_group_name, server_name, table_auditing_policy_name, subscription_id, api_version, parameters)



Creates or updates a server's table auditing policy. Table auditing is deprecated, use blob auditing instead.

### Example


```python
import openapi_client
from openapi_client.models.server_table_auditing_policy import ServerTableAuditingPolicy
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
    api_instance = openapi_client.TableAuditingApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    table_auditing_policy_name = 'table_auditing_policy_name_example' # str | The name of the table auditing policy.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    parameters = openapi_client.ServerTableAuditingPolicy() # ServerTableAuditingPolicy | The server table auditing policy.

    try:
        api_response = api_instance.server_table_auditing_policies_create_or_update(resource_group_name, server_name, table_auditing_policy_name, subscription_id, api_version, parameters)
        print("The response of TableAuditingApi->server_table_auditing_policies_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TableAuditingApi->server_table_auditing_policies_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **table_auditing_policy_name** | **str**| The name of the table auditing policy. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **parameters** | [**ServerTableAuditingPolicy**](ServerTableAuditingPolicy.md)| The server table auditing policy. | 

### Return type

[**ServerTableAuditingPolicy**](ServerTableAuditingPolicy.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully set the server table auditing policy. |  -  |
**201** | Successfully created the server table auditing policy. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **server_table_auditing_policies_get**
> ServerTableAuditingPolicy server_table_auditing_policies_get(resource_group_name, server_name, table_auditing_policy_name, subscription_id, api_version)



Gets a server's table auditing policy. Table auditing is deprecated, use blob auditing instead.

### Example


```python
import openapi_client
from openapi_client.models.server_table_auditing_policy import ServerTableAuditingPolicy
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
    api_instance = openapi_client.TableAuditingApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    table_auditing_policy_name = 'table_auditing_policy_name_example' # str | The name of the table auditing policy.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.server_table_auditing_policies_get(resource_group_name, server_name, table_auditing_policy_name, subscription_id, api_version)
        print("The response of TableAuditingApi->server_table_auditing_policies_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TableAuditingApi->server_table_auditing_policies_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **table_auditing_policy_name** | **str**| The name of the table auditing policy. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**ServerTableAuditingPolicy**](ServerTableAuditingPolicy.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the server table auditing policy. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **server_table_auditing_policies_list_by_server**
> ServerTableAuditingPolicyListResult server_table_auditing_policies_list_by_server(resource_group_name, server_name, subscription_id, api_version)



Lists a server's table auditing policies. Table auditing is deprecated, use blob auditing instead.

### Example


```python
import openapi_client
from openapi_client.models.server_table_auditing_policy_list_result import ServerTableAuditingPolicyListResult
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
    api_instance = openapi_client.TableAuditingApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.server_table_auditing_policies_list_by_server(resource_group_name, server_name, subscription_id, api_version)
        print("The response of TableAuditingApi->server_table_auditing_policies_list_by_server:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TableAuditingApi->server_table_auditing_policies_list_by_server: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**ServerTableAuditingPolicyListResult**](ServerTableAuditingPolicyListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the server table auditing policies. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

