# openapi_client.DataConnectionsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**data_connections_check_name_availability**](DataConnectionsApi.md#data_connections_check_name_availability) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/checkNameAvailability | 
[**data_connections_create_or_update**](DataConnectionsApi.md#data_connections_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/dataConnections/{dataConnectionName} | 
[**data_connections_data_connection_validation**](DataConnectionsApi.md#data_connections_data_connection_validation) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/dataConnectionValidation | 
[**data_connections_delete**](DataConnectionsApi.md#data_connections_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/dataConnections/{dataConnectionName} | 
[**data_connections_get**](DataConnectionsApi.md#data_connections_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/dataConnections/{dataConnectionName} | 
[**data_connections_list_by_database**](DataConnectionsApi.md#data_connections_list_by_database) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/dataConnections | 
[**data_connections_update**](DataConnectionsApi.md#data_connections_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/dataConnections/{dataConnectionName} | 


# **data_connections_check_name_availability**
> CheckNameResult data_connections_check_name_availability(resource_group_name, cluster_name, database_name, api_version, subscription_id, data_connection_name)



Checks that the data connection name is valid and is not already in use.

### Example


```python
import openapi_client
from openapi_client.models.check_name_result import CheckNameResult
from openapi_client.models.data_connection_check_name_request import DataConnectionCheckNameRequest
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
    api_instance = openapi_client.DataConnectionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group containing the Kusto cluster.
    cluster_name = 'cluster_name_example' # str | The name of the Kusto cluster.
    database_name = 'database_name_example' # str | The name of the database in the Kusto cluster.
    api_version = 'api_version_example' # str | Client API Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    data_connection_name = openapi_client.DataConnectionCheckNameRequest() # DataConnectionCheckNameRequest | The name of the data connection.

    try:
        api_response = api_instance.data_connections_check_name_availability(resource_group_name, cluster_name, database_name, api_version, subscription_id, data_connection_name)
        print("The response of DataConnectionsApi->data_connections_check_name_availability:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataConnectionsApi->data_connections_check_name_availability: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group containing the Kusto cluster. | 
 **cluster_name** | **str**| The name of the Kusto cluster. | 
 **database_name** | **str**| The name of the database in the Kusto cluster. | 
 **api_version** | **str**| Client API Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **data_connection_name** | [**DataConnectionCheckNameRequest**](DataConnectionCheckNameRequest.md)| The name of the data connection. | 

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
**200** | OK -- Operation to check the Kusto resource name availability was successful. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_connections_create_or_update**
> DataConnection data_connections_create_or_update(resource_group_name, cluster_name, database_name, data_connection_name, subscription_id, api_version, parameters)



Creates or updates a data connection.

### Example


```python
import openapi_client
from openapi_client.models.data_connection import DataConnection
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
    api_instance = openapi_client.DataConnectionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group containing the Kusto cluster.
    cluster_name = 'cluster_name_example' # str | The name of the Kusto cluster.
    database_name = 'database_name_example' # str | The name of the database in the Kusto cluster.
    data_connection_name = 'data_connection_name_example' # str | The name of the data connection.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API Version.
    parameters = openapi_client.DataConnection() # DataConnection | The data connection parameters supplied to the CreateOrUpdate operation.

    try:
        api_response = api_instance.data_connections_create_or_update(resource_group_name, cluster_name, database_name, data_connection_name, subscription_id, api_version, parameters)
        print("The response of DataConnectionsApi->data_connections_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataConnectionsApi->data_connections_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group containing the Kusto cluster. | 
 **cluster_name** | **str**| The name of the Kusto cluster. | 
 **database_name** | **str**| The name of the database in the Kusto cluster. | 
 **data_connection_name** | **str**| The name of the data connection. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API Version. | 
 **parameters** | [**DataConnection**](DataConnection.md)| The data connection parameters supplied to the CreateOrUpdate operation. | 

### Return type

[**DataConnection**](DataConnection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the data connection. |  -  |
**201** | Successfully created the data connection. |  -  |
**202** | Accepted the create data connection request. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_connections_data_connection_validation**
> DataConnectionValidationListResult data_connections_data_connection_validation(resource_group_name, cluster_name, database_name, api_version, subscription_id, parameters)



Checks that the data connection parameters are valid.

### Example


```python
import openapi_client
from openapi_client.models.data_connection_validation import DataConnectionValidation
from openapi_client.models.data_connection_validation_list_result import DataConnectionValidationListResult
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
    api_instance = openapi_client.DataConnectionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group containing the Kusto cluster.
    cluster_name = 'cluster_name_example' # str | The name of the Kusto cluster.
    database_name = 'database_name_example' # str | The name of the database in the Kusto cluster.
    api_version = 'api_version_example' # str | Client API Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.DataConnectionValidation() # DataConnectionValidation | The data connection parameters supplied to the CreateOrUpdate operation.

    try:
        api_response = api_instance.data_connections_data_connection_validation(resource_group_name, cluster_name, database_name, api_version, subscription_id, parameters)
        print("The response of DataConnectionsApi->data_connections_data_connection_validation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataConnectionsApi->data_connections_data_connection_validation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group containing the Kusto cluster. | 
 **cluster_name** | **str**| The name of the Kusto cluster. | 
 **database_name** | **str**| The name of the database in the Kusto cluster. | 
 **api_version** | **str**| Client API Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**DataConnectionValidation**](DataConnectionValidation.md)| The data connection parameters supplied to the CreateOrUpdate operation. | 

### Return type

[**DataConnectionValidationListResult**](DataConnectionValidationListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- Operation to check the kusto resource name availability was successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_connections_delete**
> data_connections_delete(resource_group_name, cluster_name, database_name, data_connection_name, subscription_id, api_version)



Deletes the data connection with the given name.

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
    api_instance = openapi_client.DataConnectionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group containing the Kusto cluster.
    cluster_name = 'cluster_name_example' # str | The name of the Kusto cluster.
    database_name = 'database_name_example' # str | The name of the database in the Kusto cluster.
    data_connection_name = 'data_connection_name_example' # str | The name of the data connection.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API Version.

    try:
        api_instance.data_connections_delete(resource_group_name, cluster_name, database_name, data_connection_name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling DataConnectionsApi->data_connections_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group containing the Kusto cluster. | 
 **cluster_name** | **str**| The name of the Kusto cluster. | 
 **database_name** | **str**| The name of the database in the Kusto cluster. | 
 **data_connection_name** | **str**| The name of the data connection. | 
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
**200** | Successfully deleted the data connection. |  -  |
**202** | Accepted. |  -  |
**204** | The specified data connection does not exist. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_connections_get**
> DataConnection data_connections_get(resource_group_name, cluster_name, database_name, data_connection_name, subscription_id, api_version)



Returns a data connection.

### Example


```python
import openapi_client
from openapi_client.models.data_connection import DataConnection
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
    api_instance = openapi_client.DataConnectionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group containing the Kusto cluster.
    cluster_name = 'cluster_name_example' # str | The name of the Kusto cluster.
    database_name = 'database_name_example' # str | The name of the database in the Kusto cluster.
    data_connection_name = 'data_connection_name_example' # str | The name of the data connection.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API Version.

    try:
        api_response = api_instance.data_connections_get(resource_group_name, cluster_name, database_name, data_connection_name, subscription_id, api_version)
        print("The response of DataConnectionsApi->data_connections_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataConnectionsApi->data_connections_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group containing the Kusto cluster. | 
 **cluster_name** | **str**| The name of the Kusto cluster. | 
 **database_name** | **str**| The name of the database in the Kusto cluster. | 
 **data_connection_name** | **str**| The name of the data connection. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API Version. | 

### Return type

[**DataConnection**](DataConnection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the specified data connection. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_connections_list_by_database**
> DataConnectionListResult data_connections_list_by_database(resource_group_name, cluster_name, database_name, subscription_id, api_version)



Returns the list of data connections of the given Kusto database.

### Example


```python
import openapi_client
from openapi_client.models.data_connection_list_result import DataConnectionListResult
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
    api_instance = openapi_client.DataConnectionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group containing the Kusto cluster.
    cluster_name = 'cluster_name_example' # str | The name of the Kusto cluster.
    database_name = 'database_name_example' # str | The name of the database in the Kusto cluster.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API Version.

    try:
        api_response = api_instance.data_connections_list_by_database(resource_group_name, cluster_name, database_name, subscription_id, api_version)
        print("The response of DataConnectionsApi->data_connections_list_by_database:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataConnectionsApi->data_connections_list_by_database: %s\n" % e)
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

[**DataConnectionListResult**](DataConnectionListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of data connections. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_connections_update**
> DataConnection data_connections_update(resource_group_name, cluster_name, database_name, data_connection_name, subscription_id, api_version, parameters)



Updates a data connection.

### Example


```python
import openapi_client
from openapi_client.models.data_connection import DataConnection
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
    api_instance = openapi_client.DataConnectionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group containing the Kusto cluster.
    cluster_name = 'cluster_name_example' # str | The name of the Kusto cluster.
    database_name = 'database_name_example' # str | The name of the database in the Kusto cluster.
    data_connection_name = 'data_connection_name_example' # str | The name of the data connection.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API Version.
    parameters = openapi_client.DataConnection() # DataConnection | The data connection parameters supplied to the Update operation.

    try:
        api_response = api_instance.data_connections_update(resource_group_name, cluster_name, database_name, data_connection_name, subscription_id, api_version, parameters)
        print("The response of DataConnectionsApi->data_connections_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataConnectionsApi->data_connections_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group containing the Kusto cluster. | 
 **cluster_name** | **str**| The name of the Kusto cluster. | 
 **database_name** | **str**| The name of the database in the Kusto cluster. | 
 **data_connection_name** | **str**| The name of the data connection. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API Version. | 
 **parameters** | [**DataConnection**](DataConnection.md)| The data connection parameters supplied to the Update operation. | 

### Return type

[**DataConnection**](DataConnection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the data connection. |  -  |
**201** | Successfully updated the data connection. |  -  |
**202** | Accepted the update data connection request. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

