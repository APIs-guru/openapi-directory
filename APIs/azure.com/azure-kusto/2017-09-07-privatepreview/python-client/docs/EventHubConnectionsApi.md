# openapi_client.EventHubConnectionsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**event_hub_connections_create_or_update**](EventHubConnectionsApi.md#event_hub_connections_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/eventhubconnections/{eventHubConnectionName} | 
[**event_hub_connections_delete**](EventHubConnectionsApi.md#event_hub_connections_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/eventhubconnections/{eventHubConnectionName} | 
[**event_hub_connections_eventhub_connection_validation**](EventHubConnectionsApi.md#event_hub_connections_eventhub_connection_validation) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/eventhubConnectionValidation | 
[**event_hub_connections_get**](EventHubConnectionsApi.md#event_hub_connections_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/eventhubconnections/{eventHubConnectionName} | 
[**event_hub_connections_list_by_database**](EventHubConnectionsApi.md#event_hub_connections_list_by_database) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/eventhubconnections | 
[**event_hub_connections_update**](EventHubConnectionsApi.md#event_hub_connections_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/eventhubconnections/{eventHubConnectionName} | 


# **event_hub_connections_create_or_update**
> EventHubConnection event_hub_connections_create_or_update(resource_group_name, cluster_name, database_name, event_hub_connection_name, subscription_id, api_version, parameters)



Creates or updates a Event Hub connection.

### Example


```python
import openapi_client
from openapi_client.models.event_hub_connection import EventHubConnection
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
    api_instance = openapi_client.EventHubConnectionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group containing the Kusto cluster.
    cluster_name = 'cluster_name_example' # str | The name of the Kusto cluster.
    database_name = 'database_name_example' # str | The name of the database in the Kusto cluster.
    event_hub_connection_name = 'event_hub_connection_name_example' # str | The name of the event hub connection.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API Version.
    parameters = openapi_client.EventHubConnection() # EventHubConnection | The Event Hub connection parameters supplied to the CreateOrUpdate operation.

    try:
        api_response = api_instance.event_hub_connections_create_or_update(resource_group_name, cluster_name, database_name, event_hub_connection_name, subscription_id, api_version, parameters)
        print("The response of EventHubConnectionsApi->event_hub_connections_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventHubConnectionsApi->event_hub_connections_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group containing the Kusto cluster. | 
 **cluster_name** | **str**| The name of the Kusto cluster. | 
 **database_name** | **str**| The name of the database in the Kusto cluster. | 
 **event_hub_connection_name** | **str**| The name of the event hub connection. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API Version. | 
 **parameters** | [**EventHubConnection**](EventHubConnection.md)| The Event Hub connection parameters supplied to the CreateOrUpdate operation. | 

### Return type

[**EventHubConnection**](EventHubConnection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the Event Hub connection. |  -  |
**201** | Successfully created the Event Hub connection. |  -  |
**202** | Accepted the create Event Hub connection request. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **event_hub_connections_delete**
> event_hub_connections_delete(resource_group_name, cluster_name, database_name, event_hub_connection_name, subscription_id, api_version)



Deletes the Event Hub connection with the given name.

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
    api_instance = openapi_client.EventHubConnectionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group containing the Kusto cluster.
    cluster_name = 'cluster_name_example' # str | The name of the Kusto cluster.
    database_name = 'database_name_example' # str | The name of the database in the Kusto cluster.
    event_hub_connection_name = 'event_hub_connection_name_example' # str | The name of the event hub connection.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API Version.

    try:
        api_instance.event_hub_connections_delete(resource_group_name, cluster_name, database_name, event_hub_connection_name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling EventHubConnectionsApi->event_hub_connections_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group containing the Kusto cluster. | 
 **cluster_name** | **str**| The name of the Kusto cluster. | 
 **database_name** | **str**| The name of the database in the Kusto cluster. | 
 **event_hub_connection_name** | **str**| The name of the event hub connection. | 
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
**200** | Successfully deleted the Event Hub connection. |  -  |
**202** | Accepted. |  -  |
**204** | The specified Event Hub connection does not exist. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **event_hub_connections_eventhub_connection_validation**
> EventHubConnectionValidationListResult event_hub_connections_eventhub_connection_validation(resource_group_name, cluster_name, database_name, api_version, subscription_id, parameters)



Checks that the Event Hub data connection parameters are valid.

### Example


```python
import openapi_client
from openapi_client.models.event_hub_connection_validation import EventHubConnectionValidation
from openapi_client.models.event_hub_connection_validation_list_result import EventHubConnectionValidationListResult
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
    api_instance = openapi_client.EventHubConnectionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group containing the Kusto cluster.
    cluster_name = 'cluster_name_example' # str | The name of the Kusto cluster.
    database_name = 'database_name_example' # str | The name of the database in the Kusto cluster.
    api_version = 'api_version_example' # str | Client API Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.EventHubConnectionValidation() # EventHubConnectionValidation | The Event Hub connection parameters supplied to the CreateOrUpdate operation.

    try:
        api_response = api_instance.event_hub_connections_eventhub_connection_validation(resource_group_name, cluster_name, database_name, api_version, subscription_id, parameters)
        print("The response of EventHubConnectionsApi->event_hub_connections_eventhub_connection_validation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventHubConnectionsApi->event_hub_connections_eventhub_connection_validation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group containing the Kusto cluster. | 
 **cluster_name** | **str**| The name of the Kusto cluster. | 
 **database_name** | **str**| The name of the database in the Kusto cluster. | 
 **api_version** | **str**| Client API Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**EventHubConnectionValidation**](EventHubConnectionValidation.md)| The Event Hub connection parameters supplied to the CreateOrUpdate operation. | 

### Return type

[**EventHubConnectionValidationListResult**](EventHubConnectionValidationListResult.md)

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

# **event_hub_connections_get**
> EventHubConnection event_hub_connections_get(resource_group_name, cluster_name, database_name, event_hub_connection_name, subscription_id, api_version)



Returns an Event Hub connection.

### Example


```python
import openapi_client
from openapi_client.models.event_hub_connection import EventHubConnection
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
    api_instance = openapi_client.EventHubConnectionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group containing the Kusto cluster.
    cluster_name = 'cluster_name_example' # str | The name of the Kusto cluster.
    database_name = 'database_name_example' # str | The name of the database in the Kusto cluster.
    event_hub_connection_name = 'event_hub_connection_name_example' # str | The name of the event hub connection.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API Version.

    try:
        api_response = api_instance.event_hub_connections_get(resource_group_name, cluster_name, database_name, event_hub_connection_name, subscription_id, api_version)
        print("The response of EventHubConnectionsApi->event_hub_connections_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventHubConnectionsApi->event_hub_connections_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group containing the Kusto cluster. | 
 **cluster_name** | **str**| The name of the Kusto cluster. | 
 **database_name** | **str**| The name of the database in the Kusto cluster. | 
 **event_hub_connection_name** | **str**| The name of the event hub connection. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API Version. | 

### Return type

[**EventHubConnection**](EventHubConnection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the specified Event Hub connection. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **event_hub_connections_list_by_database**
> EventHubConnectionListResult event_hub_connections_list_by_database(resource_group_name, cluster_name, database_name, subscription_id, api_version)



Returns the list of Event Hub connections of the given Kusto database.

### Example


```python
import openapi_client
from openapi_client.models.event_hub_connection_list_result import EventHubConnectionListResult
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
    api_instance = openapi_client.EventHubConnectionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group containing the Kusto cluster.
    cluster_name = 'cluster_name_example' # str | The name of the Kusto cluster.
    database_name = 'database_name_example' # str | The name of the database in the Kusto cluster.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API Version.

    try:
        api_response = api_instance.event_hub_connections_list_by_database(resource_group_name, cluster_name, database_name, subscription_id, api_version)
        print("The response of EventHubConnectionsApi->event_hub_connections_list_by_database:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventHubConnectionsApi->event_hub_connections_list_by_database: %s\n" % e)
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

[**EventHubConnectionListResult**](EventHubConnectionListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of Event Hub connections. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **event_hub_connections_update**
> EventHubConnection event_hub_connections_update(resource_group_name, cluster_name, database_name, event_hub_connection_name, subscription_id, api_version, parameters)



Updates a Event Hub connection.

### Example


```python
import openapi_client
from openapi_client.models.event_hub_connection import EventHubConnection
from openapi_client.models.event_hub_connection_update import EventHubConnectionUpdate
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
    api_instance = openapi_client.EventHubConnectionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group containing the Kusto cluster.
    cluster_name = 'cluster_name_example' # str | The name of the Kusto cluster.
    database_name = 'database_name_example' # str | The name of the database in the Kusto cluster.
    event_hub_connection_name = 'event_hub_connection_name_example' # str | The name of the event hub connection.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API Version.
    parameters = openapi_client.EventHubConnectionUpdate() # EventHubConnectionUpdate | The Event Hub connection parameters supplied to the Update operation.

    try:
        api_response = api_instance.event_hub_connections_update(resource_group_name, cluster_name, database_name, event_hub_connection_name, subscription_id, api_version, parameters)
        print("The response of EventHubConnectionsApi->event_hub_connections_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventHubConnectionsApi->event_hub_connections_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group containing the Kusto cluster. | 
 **cluster_name** | **str**| The name of the Kusto cluster. | 
 **database_name** | **str**| The name of the database in the Kusto cluster. | 
 **event_hub_connection_name** | **str**| The name of the event hub connection. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API Version. | 
 **parameters** | [**EventHubConnectionUpdate**](EventHubConnectionUpdate.md)| The Event Hub connection parameters supplied to the Update operation. | 

### Return type

[**EventHubConnection**](EventHubConnection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the Event Hub connection. |  -  |
**201** | Successfully updated the Event Hub connection. |  -  |
**202** | Accepted the update Event Hub connection request. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

