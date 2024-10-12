# openapi_client.DatabasesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**databases_add_principals**](DatabasesApi.md#databases_add_principals) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/addPrincipals | 
[**databases_check_name_availability**](DatabasesApi.md#databases_check_name_availability) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/checkNameAvailability | 
[**databases_create_or_update**](DatabasesApi.md#databases_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName} | 
[**databases_delete**](DatabasesApi.md#databases_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName} | 
[**databases_get**](DatabasesApi.md#databases_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName} | 
[**databases_list_by_cluster**](DatabasesApi.md#databases_list_by_cluster) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases | 
[**databases_list_principals**](DatabasesApi.md#databases_list_principals) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/listPrincipals | 
[**databases_remove_principals**](DatabasesApi.md#databases_remove_principals) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/removePrincipals | 
[**databases_update**](DatabasesApi.md#databases_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName} | 


# **databases_add_principals**
> DatabasePrincipalListResult databases_add_principals(resource_group_name, cluster_name, database_name, subscription_id, api_version, database_principals_to_add)



Add Database principals permissions.

### Example


```python
import openapi_client
from openapi_client.models.database_principal_list_request import DatabasePrincipalListRequest
from openapi_client.models.database_principal_list_result import DatabasePrincipalListResult
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
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group containing the Kusto cluster.
    cluster_name = 'cluster_name_example' # str | The name of the Kusto cluster.
    database_name = 'database_name_example' # str | The name of the database in the Kusto cluster.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API Version.
    database_principals_to_add = openapi_client.DatabasePrincipalListRequest() # DatabasePrincipalListRequest | List of database principals to add.

    try:
        api_response = api_instance.databases_add_principals(resource_group_name, cluster_name, database_name, subscription_id, api_version, database_principals_to_add)
        print("The response of DatabasesApi->databases_add_principals:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DatabasesApi->databases_add_principals: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group containing the Kusto cluster. | 
 **cluster_name** | **str**| The name of the Kusto cluster. | 
 **database_name** | **str**| The name of the database in the Kusto cluster. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API Version. | 
 **database_principals_to_add** | [**DatabasePrincipalListRequest**](DatabasePrincipalListRequest.md)| List of database principals to add. | 

### Return type

[**DatabasePrincipalListResult**](DatabasePrincipalListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- Successfully added the list of database principals. Returns the updated list of principals. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **databases_check_name_availability**
> CheckNameResult databases_check_name_availability(resource_group_name, cluster_name, api_version, subscription_id, resource_name)



Checks that the database name is valid and is not already in use.

### Example


```python
import openapi_client
from openapi_client.models.check_name_request import CheckNameRequest
from openapi_client.models.check_name_result import CheckNameResult
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
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group containing the Kusto cluster.
    cluster_name = 'cluster_name_example' # str | The name of the Kusto cluster.
    api_version = 'api_version_example' # str | Client API Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_name = openapi_client.CheckNameRequest() # CheckNameRequest | The name of the resource.

    try:
        api_response = api_instance.databases_check_name_availability(resource_group_name, cluster_name, api_version, subscription_id, resource_name)
        print("The response of DatabasesApi->databases_check_name_availability:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DatabasesApi->databases_check_name_availability: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group containing the Kusto cluster. | 
 **cluster_name** | **str**| The name of the Kusto cluster. | 
 **api_version** | **str**| Client API Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_name** | [**CheckNameRequest**](CheckNameRequest.md)| The name of the resource. | 

### Return type

[**CheckNameResult**](CheckNameResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- Operation to check the kusto resource name availability was successful. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **databases_create_or_update**
> Database databases_create_or_update(resource_group_name, cluster_name, database_name, subscription_id, api_version, parameters)



Creates or updates a database.

### Example


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


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DatabasesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group containing the Kusto cluster.
    cluster_name = 'cluster_name_example' # str | The name of the Kusto cluster.
    database_name = 'database_name_example' # str | The name of the database in the Kusto cluster.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API Version.
    parameters = openapi_client.Database() # Database | The database parameters supplied to the CreateOrUpdate operation.

    try:
        api_response = api_instance.databases_create_or_update(resource_group_name, cluster_name, database_name, subscription_id, api_version, parameters)
        print("The response of DatabasesApi->databases_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DatabasesApi->databases_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group containing the Kusto cluster. | 
 **cluster_name** | **str**| The name of the Kusto cluster. | 
 **database_name** | **str**| The name of the database in the Kusto cluster. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API Version. | 
 **parameters** | [**Database**](Database.md)| The database parameters supplied to the CreateOrUpdate operation. | 

### Return type

[**Database**](Database.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the database. |  -  |
**201** | Successfully created the database. |  -  |
**202** | Accepted the create database request. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **databases_delete**
> databases_delete(resource_group_name, cluster_name, database_name, subscription_id, api_version)



Deletes the database with the given name.

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
    api_instance = openapi_client.DatabasesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group containing the Kusto cluster.
    cluster_name = 'cluster_name_example' # str | The name of the Kusto cluster.
    database_name = 'database_name_example' # str | The name of the database in the Kusto cluster.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API Version.

    try:
        api_instance.databases_delete(resource_group_name, cluster_name, database_name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling DatabasesApi->databases_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group containing the Kusto cluster. | 
 **cluster_name** | **str**| The name of the Kusto cluster. | 
 **database_name** | **str**| The name of the database in the Kusto cluster. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API Version. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully deleted the database. |  -  |
**202** | Accepted. |  -  |
**204** | The specified database does not exist. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **databases_get**
> Database databases_get(resource_group_name, cluster_name, database_name, subscription_id, api_version)



Returns a database.

### Example


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


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DatabasesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group containing the Kusto cluster.
    cluster_name = 'cluster_name_example' # str | The name of the Kusto cluster.
    database_name = 'database_name_example' # str | The name of the database in the Kusto cluster.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API Version.

    try:
        api_response = api_instance.databases_get(resource_group_name, cluster_name, database_name, subscription_id, api_version)
        print("The response of DatabasesApi->databases_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DatabasesApi->databases_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group containing the Kusto cluster. | 
 **cluster_name** | **str**| The name of the Kusto cluster. | 
 **database_name** | **str**| The name of the database in the Kusto cluster. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API Version. | 

### Return type

[**Database**](Database.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the specified database. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **databases_list_by_cluster**
> DatabaseListResult databases_list_by_cluster(resource_group_name, cluster_name, subscription_id, api_version)



Returns the list of databases of the given Kusto cluster.

### Example


```python
import openapi_client
from openapi_client.models.database_list_result import DatabaseListResult
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
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group containing the Kusto cluster.
    cluster_name = 'cluster_name_example' # str | The name of the Kusto cluster.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API Version.

    try:
        api_response = api_instance.databases_list_by_cluster(resource_group_name, cluster_name, subscription_id, api_version)
        print("The response of DatabasesApi->databases_list_by_cluster:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DatabasesApi->databases_list_by_cluster: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group containing the Kusto cluster. | 
 **cluster_name** | **str**| The name of the Kusto cluster. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API Version. | 

### Return type

[**DatabaseListResult**](DatabaseListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of databases. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **databases_list_principals**
> DatabasePrincipalListResult databases_list_principals(resource_group_name, cluster_name, database_name, subscription_id, api_version)



Returns a list of database principals of the given Kusto cluster and database.

### Example


```python
import openapi_client
from openapi_client.models.database_principal_list_result import DatabasePrincipalListResult
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
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group containing the Kusto cluster.
    cluster_name = 'cluster_name_example' # str | The name of the Kusto cluster.
    database_name = 'database_name_example' # str | The name of the database in the Kusto cluster.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API Version.

    try:
        api_response = api_instance.databases_list_principals(resource_group_name, cluster_name, database_name, subscription_id, api_version)
        print("The response of DatabasesApi->databases_list_principals:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DatabasesApi->databases_list_principals: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group containing the Kusto cluster. | 
 **cluster_name** | **str**| The name of the Kusto cluster. | 
 **database_name** | **str**| The name of the database in the Kusto cluster. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API Version. | 

### Return type

[**DatabasePrincipalListResult**](DatabasePrincipalListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of database principals. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **databases_remove_principals**
> DatabasePrincipalListResult databases_remove_principals(resource_group_name, cluster_name, database_name, subscription_id, api_version, database_principals_to_remove)



Remove Database principals permissions.

### Example


```python
import openapi_client
from openapi_client.models.database_principal_list_request import DatabasePrincipalListRequest
from openapi_client.models.database_principal_list_result import DatabasePrincipalListResult
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
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group containing the Kusto cluster.
    cluster_name = 'cluster_name_example' # str | The name of the Kusto cluster.
    database_name = 'database_name_example' # str | The name of the database in the Kusto cluster.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API Version.
    database_principals_to_remove = openapi_client.DatabasePrincipalListRequest() # DatabasePrincipalListRequest | List of database principals to remove.

    try:
        api_response = api_instance.databases_remove_principals(resource_group_name, cluster_name, database_name, subscription_id, api_version, database_principals_to_remove)
        print("The response of DatabasesApi->databases_remove_principals:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DatabasesApi->databases_remove_principals: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group containing the Kusto cluster. | 
 **cluster_name** | **str**| The name of the Kusto cluster. | 
 **database_name** | **str**| The name of the database in the Kusto cluster. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API Version. | 
 **database_principals_to_remove** | [**DatabasePrincipalListRequest**](DatabasePrincipalListRequest.md)| List of database principals to remove. | 

### Return type

[**DatabasePrincipalListResult**](DatabasePrincipalListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- Successfully removed the list of database principals. Returns the updated list of principals. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **databases_update**
> Database databases_update(resource_group_name, cluster_name, database_name, subscription_id, api_version, parameters)



Updates a database.

### Example


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


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DatabasesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group containing the Kusto cluster.
    cluster_name = 'cluster_name_example' # str | The name of the Kusto cluster.
    database_name = 'database_name_example' # str | The name of the database in the Kusto cluster.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API Version.
    parameters = openapi_client.Database() # Database | The database parameters supplied to the Update operation.

    try:
        api_response = api_instance.databases_update(resource_group_name, cluster_name, database_name, subscription_id, api_version, parameters)
        print("The response of DatabasesApi->databases_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DatabasesApi->databases_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group containing the Kusto cluster. | 
 **cluster_name** | **str**| The name of the Kusto cluster. | 
 **database_name** | **str**| The name of the database in the Kusto cluster. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API Version. | 
 **parameters** | [**Database**](Database.md)| The database parameters supplied to the Update operation. | 

### Return type

[**Database**](Database.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the database. |  -  |
**201** | Successfully updated the database. |  -  |
**202** | Accepted the update database request. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

