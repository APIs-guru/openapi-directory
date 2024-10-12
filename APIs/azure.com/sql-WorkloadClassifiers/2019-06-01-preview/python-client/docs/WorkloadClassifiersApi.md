# openapi_client.WorkloadClassifiersApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**workload_classifiers_create_or_update**](WorkloadClassifiersApi.md#workload_classifiers_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/workloadGroups/{workloadGroupName}/workloadClassifiers/{workloadClassifierName} | 
[**workload_classifiers_delete**](WorkloadClassifiersApi.md#workload_classifiers_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/workloadGroups/{workloadGroupName}/workloadClassifiers/{workloadClassifierName} | 
[**workload_classifiers_get**](WorkloadClassifiersApi.md#workload_classifiers_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/workloadGroups/{workloadGroupName}/workloadClassifiers/{workloadClassifierName} | 
[**workload_classifiers_list_by_workload_group**](WorkloadClassifiersApi.md#workload_classifiers_list_by_workload_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/workloadGroups/{workloadGroupName}/workloadClassifiers | 


# **workload_classifiers_create_or_update**
> WorkloadClassifier workload_classifiers_create_or_update(resource_group_name, server_name, database_name, workload_group_name, workload_classifier_name, subscription_id, api_version, parameters)



Creates or updates a workload classifier.

### Example


```python
import openapi_client
from openapi_client.models.workload_classifier import WorkloadClassifier
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
    api_instance = openapi_client.WorkloadClassifiersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    database_name = 'database_name_example' # str | The name of the database.
    workload_group_name = 'workload_group_name_example' # str | The name of the workload group from which to receive the classifier from.
    workload_classifier_name = 'workload_classifier_name_example' # str | The name of the workload classifier to create/update.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    parameters = openapi_client.WorkloadClassifier() # WorkloadClassifier | The properties of the workload classifier.

    try:
        api_response = api_instance.workload_classifiers_create_or_update(resource_group_name, server_name, database_name, workload_group_name, workload_classifier_name, subscription_id, api_version, parameters)
        print("The response of WorkloadClassifiersApi->workload_classifiers_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkloadClassifiersApi->workload_classifiers_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of the database. | 
 **workload_group_name** | **str**| The name of the workload group from which to receive the classifier from. | 
 **workload_classifier_name** | **str**| The name of the workload classifier to create/update. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **parameters** | [**WorkloadClassifier**](WorkloadClassifier.md)| The properties of the workload classifier. | 

### Return type

[**WorkloadClassifier**](WorkloadClassifier.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the workload classifier. |  -  |
**201** | Successfully created the workload classifier. |  -  |
**202** | Create or update for the workload classifier is in progress. |  -  |
**0** | *** Error Responses: ***   * 400 FeatureDisabledOnSelectedEdition - User attempted to use a feature which is disabled on current database edition.   * 400 OperationNotAllowedOnPausedDatabase - Operation is not allowed on a paused database.   * 400 InvalidMemberNameParameter - Invalid member name parameter for this workload classifier.   * 400 InvalidStartTimeAndEndTimeParameters - Invalid start time and end time parameters for the workload classifier.   * 400 InvalidImportanceParameter - Importance must be one of the following strings: Low, Below_Normal, Normal, Above_Normal, High.   * 400 InvalidResourceRequestBody - The resource or resource properties in the request body is empty or invalid.   * 404 ServerNotInSubscriptionResourceGroup - Specified server does not exist in the specified resource group and subscription.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 DatabaseDoesNotExist - User has specified a database name that does not exist on this server instance.   * 404 ResourceNotFound - The requested resource was not found.   * 404 OperationIdNotFound - The operation with Id does not exist.   * 409 ConflictingSystemOperationInProgress - A system maintenance operation is in progress on the database and further operations need to wait until it is completed.   * 409 ConflictingDatabaseOperation - There is already some operation on the database and the current operation should wait till it is done.   * 409 OperationCancelled - The operation has been cancelled by user.   * 409 OperationInterrupted - The operation on the resource could not be completed because it was interrupted by another operation on the same resource.   * 500 OperationTimedOut - The operation timed out and automatically rolled back. Please retry the operation.   * 503 DatabaseUnavailable - The operation failed because the database is unavailable.   * 503 TooManyRequests - Requests beyond max requests that can be processed by available resources.   * 504 RequestTimeout - Service request exceeded the allowed timeout. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workload_classifiers_delete**
> workload_classifiers_delete(resource_group_name, server_name, database_name, workload_group_name, workload_classifier_name, subscription_id, api_version)



Deletes a workload classifier.

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
    api_instance = openapi_client.WorkloadClassifiersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    database_name = 'database_name_example' # str | The name of the database.
    workload_group_name = 'workload_group_name_example' # str | The name of the workload group from which to receive the classifier from.
    workload_classifier_name = 'workload_classifier_name_example' # str | The name of the workload classifier to delete.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_instance.workload_classifiers_delete(resource_group_name, server_name, database_name, workload_group_name, workload_classifier_name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling WorkloadClassifiersApi->workload_classifiers_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of the database. | 
 **workload_group_name** | **str**| The name of the workload group from which to receive the classifier from. | 
 **workload_classifier_name** | **str**| The name of the workload classifier to delete. | 
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
**200** | Successfully deleted the workload classifier. |  -  |
**202** | Deleting the workload classifier is in progress. |  -  |
**204** | The specified workload classifier does not exist. |  -  |
**0** | *** Error Responses: ***   * 400 FeatureDisabledOnSelectedEdition - User attempted to use a feature which is disabled on current database edition.   * 400 OperationNotAllowedOnPausedDatabase - Operation is not allowed on a paused database.   * 404 ServerNotInSubscriptionResourceGroup - Specified server does not exist in the specified resource group and subscription.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 DatabaseDoesNotExist - User has specified a database name that does not exist on this server instance.   * 404 ResourceNotFound - The requested resource was not found.   * 404 OperationIdNotFound - The operation with Id does not exist.   * 409 ConflictingSystemOperationInProgress - A system maintenance operation is in progress on the database and further operations need to wait until it is completed.   * 409 ConflictingDatabaseOperation - There is already some operation on the database and the current operation should wait till it is done.   * 409 OperationCancelled - The operation has been cancelled by user.   * 409 OperationInterrupted - The operation on the resource could not be completed because it was interrupted by another operation on the same resource.   * 500 OperationTimedOut - The operation timed out and automatically rolled back. Please retry the operation.   * 503 DatabaseUnavailable - The operation failed because the database is unavailable.   * 503 TooManyRequests - Requests beyond max requests that can be processed by available resources.   * 504 RequestTimeout - Service request exceeded the allowed timeout. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workload_classifiers_get**
> WorkloadClassifier workload_classifiers_get(resource_group_name, server_name, database_name, workload_group_name, workload_classifier_name, subscription_id, api_version)



Gets a workload classifier

### Example


```python
import openapi_client
from openapi_client.models.workload_classifier import WorkloadClassifier
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
    api_instance = openapi_client.WorkloadClassifiersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    database_name = 'database_name_example' # str | The name of the database.
    workload_group_name = 'workload_group_name_example' # str | The name of the workload group from which to receive the classifier from.
    workload_classifier_name = 'workload_classifier_name_example' # str | The name of the workload classifier.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.workload_classifiers_get(resource_group_name, server_name, database_name, workload_group_name, workload_classifier_name, subscription_id, api_version)
        print("The response of WorkloadClassifiersApi->workload_classifiers_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkloadClassifiersApi->workload_classifiers_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of the database. | 
 **workload_group_name** | **str**| The name of the workload group from which to receive the classifier from. | 
 **workload_classifier_name** | **str**| The name of the workload classifier. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**WorkloadClassifier**](WorkloadClassifier.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the specifies workload classifier. |  -  |
**0** | *** Error Responses: ***   * 400 FeatureDisabledOnSelectedEdition - User attempted to use a feature which is disabled on current database edition.   * 400 OperationNotAllowedOnPausedDatabase - Operation is not allowed on a paused database.   * 404 ServerNotInSubscriptionResourceGroup - Specified server does not exist in the specified resource group and subscription.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 DatabaseDoesNotExist - User has specified a database name that does not exist on this server instance.   * 404 ResourceNotFound - The requested resource was not found.   * 409 ConflictingSystemOperationInProgress - A system maintenance operation is in progress on the database and further operations need to wait until it is completed.   * 409 ConflictingDatabaseOperation - There is already some operation on the database and the current operation should wait till it is done.   * 503 DatabaseUnavailable - The operation failed because the database is unavailable.   * 503 TooManyRequests - Requests beyond max requests that can be processed by available resources.   * 504 RequestTimeout - Service request exceeded the allowed timeout. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workload_classifiers_list_by_workload_group**
> WorkloadClassifierListResult workload_classifiers_list_by_workload_group(resource_group_name, server_name, database_name, workload_group_name, subscription_id, api_version)



Gets the list of workload classifiers for a workload group

### Example


```python
import openapi_client
from openapi_client.models.workload_classifier_list_result import WorkloadClassifierListResult
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
    api_instance = openapi_client.WorkloadClassifiersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    database_name = 'database_name_example' # str | The name of the database.
    workload_group_name = 'workload_group_name_example' # str | The name of the workload group from which to receive the classifiers from.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.workload_classifiers_list_by_workload_group(resource_group_name, server_name, database_name, workload_group_name, subscription_id, api_version)
        print("The response of WorkloadClassifiersApi->workload_classifiers_list_by_workload_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkloadClassifiersApi->workload_classifiers_list_by_workload_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of the database. | 
 **workload_group_name** | **str**| The name of the workload group from which to receive the classifiers from. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**WorkloadClassifierListResult**](WorkloadClassifierListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of workload groups. |  -  |
**0** | *** Error Responses: ***   * 400 FeatureDisabledOnSelectedEdition - User attempted to use a feature which is disabled on current database edition.   * 400 OperationNotAllowedOnPausedDatabase - Operation is not allowed on a paused database.   * 404 ServerNotInSubscriptionResourceGroup - Specified server does not exist in the specified resource group and subscription.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 DatabaseDoesNotExist - User has specified a database name that does not exist on this server instance.   * 404 ResourceNotFound - The requested resource was not found.   * 409 ConflictingSystemOperationInProgress - A system maintenance operation is in progress on the database and further operations need to wait until it is completed.   * 409 ConflictingDatabaseOperation - There is already some operation on the database and the current operation should wait till it is done.   * 503 DatabaseUnavailable - The operation failed because the database is unavailable.   * 503 TooManyRequests - Requests beyond max requests that can be processed by available resources.   * 504 RequestTimeout - Service request exceeded the allowed timeout. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

