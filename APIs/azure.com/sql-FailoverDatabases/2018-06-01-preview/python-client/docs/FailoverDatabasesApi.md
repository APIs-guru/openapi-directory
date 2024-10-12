# openapi_client.FailoverDatabasesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**databases_failover**](FailoverDatabasesApi.md#databases_failover) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/failover | 


# **databases_failover**
> databases_failover(resource_group_name, server_name, database_name, subscription_id, api_version, replica_type=replica_type)



Failovers a database.

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
    api_instance = openapi_client.FailoverDatabasesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    database_name = 'database_name_example' # str | The name of the database to failover.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    replica_type = 'replica_type_example' # str | The type of replica to be failed over. (optional)

    try:
        api_instance.databases_failover(resource_group_name, server_name, database_name, subscription_id, api_version, replica_type=replica_type)
    except Exception as e:
        print("Exception when calling FailoverDatabasesApi->databases_failover: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of the database to failover. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **replica_type** | **str**| The type of replica to be failed over. | [optional] 

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
**200** | Successfully completed database failover. |  -  |
**202** | Database failover is in progress. |  -  |
**0** | *** Error Responses: ***   * 400 ManagementServiceFeatureDisabled - User attempted to use a feature which is disabled.   * 400 DatabaseFailoverThrottled - There was a recent failover on the database or pool if database belongs in an elastic pool.   * 400 DatabaseFailoverNotSupportedOnSKU - This type of customer initiated failover is not supported on the given SKU.   * 409 ManagementServiceDatabaseBusy - Database &#39;{0}&#39; is busy with another operation. Please try your operation later.   * 409 DatabaseNotInStateToFailover - The database is currently in a state such that failover cannot be issued. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

