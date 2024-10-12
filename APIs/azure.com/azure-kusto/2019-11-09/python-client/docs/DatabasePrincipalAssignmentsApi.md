# openapi_client.DatabasePrincipalAssignmentsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**database_principal_assignments_check_name_availability**](DatabasePrincipalAssignmentsApi.md#database_principal_assignments_check_name_availability) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/checkPrincipalAssignmentNameAvailability | 
[**database_principal_assignments_create_or_update**](DatabasePrincipalAssignmentsApi.md#database_principal_assignments_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/principalAssignments/{principalAssignmentName} | 
[**database_principal_assignments_delete**](DatabasePrincipalAssignmentsApi.md#database_principal_assignments_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/principalAssignments/{principalAssignmentName} | 
[**database_principal_assignments_get**](DatabasePrincipalAssignmentsApi.md#database_principal_assignments_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/principalAssignments/{principalAssignmentName} | 
[**database_principal_assignments_list**](DatabasePrincipalAssignmentsApi.md#database_principal_assignments_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/principalAssignments | 


# **database_principal_assignments_check_name_availability**
> CheckNameResult database_principal_assignments_check_name_availability(resource_group_name, cluster_name, database_name, api_version, subscription_id, principal_assignment_name)



Checks that the database principal assignment is valid and is not already in use.

### Example


```python
import openapi_client
from openapi_client.models.check_name_result import CheckNameResult
from openapi_client.models.database_principal_assignment_check_name_request import DatabasePrincipalAssignmentCheckNameRequest
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
    api_instance = openapi_client.DatabasePrincipalAssignmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group containing the Kusto cluster.
    cluster_name = 'cluster_name_example' # str | The name of the Kusto cluster.
    database_name = 'database_name_example' # str | The name of the database in the Kusto cluster.
    api_version = 'api_version_example' # str | Client API Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    principal_assignment_name = openapi_client.DatabasePrincipalAssignmentCheckNameRequest() # DatabasePrincipalAssignmentCheckNameRequest | The name of the resource.

    try:
        api_response = api_instance.database_principal_assignments_check_name_availability(resource_group_name, cluster_name, database_name, api_version, subscription_id, principal_assignment_name)
        print("The response of DatabasePrincipalAssignmentsApi->database_principal_assignments_check_name_availability:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DatabasePrincipalAssignmentsApi->database_principal_assignments_check_name_availability: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group containing the Kusto cluster. | 
 **cluster_name** | **str**| The name of the Kusto cluster. | 
 **database_name** | **str**| The name of the database in the Kusto cluster. | 
 **api_version** | **str**| Client API Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **principal_assignment_name** | [**DatabasePrincipalAssignmentCheckNameRequest**](DatabasePrincipalAssignmentCheckNameRequest.md)| The name of the resource. | 

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

# **database_principal_assignments_create_or_update**
> DatabasePrincipalAssignment database_principal_assignments_create_or_update(subscription_id, resource_group_name, cluster_name, database_name, principal_assignment_name, api_version, parameters)



Creates a Kusto cluster database principalAssignment.

### Example


```python
import openapi_client
from openapi_client.models.database_principal_assignment import DatabasePrincipalAssignment
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
    api_instance = openapi_client.DatabasePrincipalAssignmentsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group containing the Kusto cluster.
    cluster_name = 'cluster_name_example' # str | The name of the Kusto cluster.
    database_name = 'database_name_example' # str | The name of the database in the Kusto cluster.
    principal_assignment_name = 'principal_assignment_name_example' # str | The name of the Kusto principalAssignment.
    api_version = 'api_version_example' # str | Client API Version.
    parameters = openapi_client.DatabasePrincipalAssignment() # DatabasePrincipalAssignment | The Kusto principalAssignments parameters supplied for the operation.

    try:
        api_response = api_instance.database_principal_assignments_create_or_update(subscription_id, resource_group_name, cluster_name, database_name, principal_assignment_name, api_version, parameters)
        print("The response of DatabasePrincipalAssignmentsApi->database_principal_assignments_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DatabasePrincipalAssignmentsApi->database_principal_assignments_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group containing the Kusto cluster. | 
 **cluster_name** | **str**| The name of the Kusto cluster. | 
 **database_name** | **str**| The name of the database in the Kusto cluster. | 
 **principal_assignment_name** | **str**| The name of the Kusto principalAssignment. | 
 **api_version** | **str**| Client API Version. | 
 **parameters** | [**DatabasePrincipalAssignment**](DatabasePrincipalAssignment.md)| The Kusto principalAssignments parameters supplied for the operation. | 

### Return type

[**DatabasePrincipalAssignment**](DatabasePrincipalAssignment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the PrincipalAssignments. |  -  |
**201** | Successfully created the principalAssignments. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_principal_assignments_delete**
> database_principal_assignments_delete(subscription_id, resource_group_name, cluster_name, database_name, principal_assignment_name, api_version)



Deletes a Kusto principalAssignment.

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
    api_instance = openapi_client.DatabasePrincipalAssignmentsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group containing the Kusto cluster.
    cluster_name = 'cluster_name_example' # str | The name of the Kusto cluster.
    database_name = 'database_name_example' # str | The name of the database in the Kusto cluster.
    principal_assignment_name = 'principal_assignment_name_example' # str | The name of the Kusto principalAssignment.
    api_version = 'api_version_example' # str | Client API Version.

    try:
        api_instance.database_principal_assignments_delete(subscription_id, resource_group_name, cluster_name, database_name, principal_assignment_name, api_version)
    except Exception as e:
        print("Exception when calling DatabasePrincipalAssignmentsApi->database_principal_assignments_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group containing the Kusto cluster. | 
 **cluster_name** | **str**| The name of the Kusto cluster. | 
 **database_name** | **str**| The name of the database in the Kusto cluster. | 
 **principal_assignment_name** | **str**| The name of the Kusto principalAssignment. | 
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
**200** | OK -- principalAssignments deleted successfully. |  -  |
**202** | Accepted the delete principalAssignments request. |  -  |
**204** | NoContent -- principalAssignments does not exist in the subscription. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_principal_assignments_get**
> DatabasePrincipalAssignment database_principal_assignments_get(subscription_id, resource_group_name, cluster_name, database_name, principal_assignment_name, api_version)



Gets a Kusto cluster database principalAssignment.

### Example


```python
import openapi_client
from openapi_client.models.database_principal_assignment import DatabasePrincipalAssignment
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
    api_instance = openapi_client.DatabasePrincipalAssignmentsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group containing the Kusto cluster.
    cluster_name = 'cluster_name_example' # str | The name of the Kusto cluster.
    database_name = 'database_name_example' # str | The name of the database in the Kusto cluster.
    principal_assignment_name = 'principal_assignment_name_example' # str | The name of the Kusto principalAssignment.
    api_version = 'api_version_example' # str | Client API Version.

    try:
        api_response = api_instance.database_principal_assignments_get(subscription_id, resource_group_name, cluster_name, database_name, principal_assignment_name, api_version)
        print("The response of DatabasePrincipalAssignmentsApi->database_principal_assignments_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DatabasePrincipalAssignmentsApi->database_principal_assignments_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group containing the Kusto cluster. | 
 **cluster_name** | **str**| The name of the Kusto cluster. | 
 **database_name** | **str**| The name of the database in the Kusto cluster. | 
 **principal_assignment_name** | **str**| The name of the Kusto principalAssignment. | 
 **api_version** | **str**| Client API Version. | 

### Return type

[**DatabasePrincipalAssignment**](DatabasePrincipalAssignment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Kusto cluster database principal assignment object. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_principal_assignments_list**
> DatabasePrincipalAssignmentListResult database_principal_assignments_list(subscription_id, resource_group_name, cluster_name, database_name, api_version)



Lists all Kusto cluster database principalAssignments.

### Example


```python
import openapi_client
from openapi_client.models.database_principal_assignment_list_result import DatabasePrincipalAssignmentListResult
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
    api_instance = openapi_client.DatabasePrincipalAssignmentsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group containing the Kusto cluster.
    cluster_name = 'cluster_name_example' # str | The name of the Kusto cluster.
    database_name = 'database_name_example' # str | The name of the database in the Kusto cluster.
    api_version = 'api_version_example' # str | Client API Version.

    try:
        api_response = api_instance.database_principal_assignments_list(subscription_id, resource_group_name, cluster_name, database_name, api_version)
        print("The response of DatabasePrincipalAssignmentsApi->database_principal_assignments_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DatabasePrincipalAssignmentsApi->database_principal_assignments_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group containing the Kusto cluster. | 
 **cluster_name** | **str**| The name of the Kusto cluster. | 
 **database_name** | **str**| The name of the database in the Kusto cluster. | 
 **api_version** | **str**| Client API Version. | 

### Return type

[**DatabasePrincipalAssignmentListResult**](DatabasePrincipalAssignmentListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

