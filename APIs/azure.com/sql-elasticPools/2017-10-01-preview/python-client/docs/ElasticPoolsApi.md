# openapi_client.ElasticPoolsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**elastic_pools_create_or_update**](ElasticPoolsApi.md#elastic_pools_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/elasticPools/{elasticPoolName} | 
[**elastic_pools_delete**](ElasticPoolsApi.md#elastic_pools_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/elasticPools/{elasticPoolName} | 
[**elastic_pools_get**](ElasticPoolsApi.md#elastic_pools_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/elasticPools/{elasticPoolName} | 
[**elastic_pools_list_by_server**](ElasticPoolsApi.md#elastic_pools_list_by_server) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/elasticPools | 
[**elastic_pools_update**](ElasticPoolsApi.md#elastic_pools_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/elasticPools/{elasticPoolName} | 


# **elastic_pools_create_or_update**
> ElasticPool elastic_pools_create_or_update(resource_group_name, server_name, elastic_pool_name, subscription_id, api_version, parameters)



Creates or updates an elastic pool.

### Example


```python
import openapi_client
from openapi_client.models.elastic_pool import ElasticPool
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
    api_instance = openapi_client.ElasticPoolsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    elastic_pool_name = 'elastic_pool_name_example' # str | The name of the elastic pool.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    parameters = openapi_client.ElasticPool() # ElasticPool | The elastic pool parameters.

    try:
        api_response = api_instance.elastic_pools_create_or_update(resource_group_name, server_name, elastic_pool_name, subscription_id, api_version, parameters)
        print("The response of ElasticPoolsApi->elastic_pools_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ElasticPoolsApi->elastic_pools_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **elastic_pool_name** | **str**| The name of the elastic pool. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **parameters** | [**ElasticPool**](ElasticPool.md)| The elastic pool parameters. | 

### Return type

[**ElasticPool**](ElasticPool.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Updated the elastic pool |  -  |
**201** | Created the elastic pool |  -  |
**202** | Accepted |  -  |
**0** | *** Error Responses: ***   * 400 ElasticPoolStorageBelowLimitMB - Attempting to set the elastic pool storage limit below the supported limit.   * 400 ProvisioningDisabled - Displays error message from resources operation authorizer as is, without changes   * 400 ElasticPoolStorageNotAllowedMB - Attempting to set the elastic pool storage limit in mb which doesn&#39;t match the allowed values.   * 400 ElasticPoolStorageAboveLimitMB - Attempting to set the elastic pool storage limit below the supported limit.   * 400 ElasticPoolUpdateHkNotAllowed - The elastic pool cannot lower its service tier from Premium to Standard or Basic since one or more of its databases use memory-optimized objects.   * 400 ElasticPoolOverFileSpace - Insufficient file space in the elastic pool.   * 400 InvalidTier - The user specified an invalid tier.   * 400 ServerQuotaExceeded - Server cannot be added to a subscription because it will exceed quota.   * 400 ElasticPoolAlreadyExists - The server already contains an elastic pool with the specified name.   * 400 InvalidInputValueForEdition - Specified edition is not supported for elastic pool provisioning.   * 400 ElasticPoolDtuBelowLimit - The requested DTU value is too low for the requested elastic pool service tier.   * 400 ElasticPoolDtuAboveLimit - The requested DTU value is too high for the requested elastic pool service tier.   * 400 ElasticPoolDbDtuMaxBelowLimit - The requested per database DTU max is too low for the requested elastic pool service tier.   * 400 ElasticPoolDbDtuMaxAboveLimit - The requested per database DTU max is too high for the requested elastic pool service tier.   * 400 InvalidInputValueForDatabaseDtuMax - Attempting to set the DTU max per database for the Resource Pool which doesn&#39;t match the allowed values.   * 400 ElasticPoolDbDtuMinAboveLimit - The requested DTU min per database is too high for the requested service tier.   * 400 InvalidInputValueForDatabaseDtuMin - Attempting to set the DTU min per database for the Resource Pool which doesn&#39;t match the allowed values.   * 400 ElasticPoolStorageAboveLimitGB - Attempting to set the elastic pool storage limit below the supported limit.   * 400 ElasticPoolOverStorageUsage - Attempting to write data to a database when the storage limit of the elastic pool has been reached.   * 400 ElasticPoolsNotEnabled - Elastic pools have not been enabled in this region.   * 400 ElasticPoolNotEmpty - Request to delete an elastic pool that is not empty.   * 400 ElasticPoolStorageBelowLimitGB - Attempting to set the elastic pool storage limit below the supported limit.   * 400 ElasticPoolStorageNotAllowedGB - Attempting to set the elastic pool storage limit in gb which doesn&#39;t match the allowed values.   * 400 ElasticPoolDatabaseLimit - The elastic pool has reached its limit for number of databases.   * 400 ElasticPoolStorageDecreasePrecondition - There was an attempt to decrease the storage limit of the elastic pool below its storage usage.   * 400 ElasticPoolBusy - A management operation was attempted on an elastic pool which is busy.   * 400 InvalidInputValueDatabaseDtuMinLargerThanMax - Attempting to set the DTU min per database higher than the DTU max per database.   * 400 InvalidResourceRequestBody - The resource or resource properties in the request body is empty or invalid.   * 400 InvalidSkuName - Invalid SKU name.   * 400 MismatchedSkuNameAndCapacity - Mismatch between SKU name and capacity.   * 400 MismatchedSkuNameAndTier - Mismatch between SKU name and tier.   * 400 MismatchedSkuNameAndFamily - Mismatch between SKU name and family.   * 400 ElasticPoolStorageBelowLimitMB - Attempting to set the elastic pool storage limit below the supported limit.   * 400 ProvisioningDisabled - Displays error message from resources operation authorizer as is, without changes   * 400 ElasticPoolStorageNotAllowedMB - Attempting to set the elastic pool storage limit in mb which doesn&#39;t match the allowed values.   * 400 ElasticPoolStorageAboveLimitMB - Attempting to set the elastic pool storage limit below the supported limit.   * 400 ElasticPoolUpdateHkNotAllowed - The elastic pool cannot lower its service tier from Premium to Standard or Basic since one or more of its databases use memory-optimized objects.   * 400 ElasticPoolOverFileSpace - Insufficient file space in the elastic pool.   * 400 InvalidTier - The user specified an invalid tier.   * 400 ServerQuotaExceeded - Server cannot be added to a subscription because it will exceed quota.   * 400 ElasticPoolAlreadyExists - The server already contains an elastic pool with the specified name.   * 400 InvalidInputValueForEdition - Specified edition is not supported for elastic pool provisioning.   * 400 ElasticPoolDtuBelowLimit - The requested DTU value is too low for the requested elastic pool service tier.   * 400 ElasticPoolDtuAboveLimit - The requested DTU value is too high for the requested elastic pool service tier.   * 400 ElasticPoolDbDtuMaxBelowLimit - The requested per database DTU max is too low for the requested elastic pool service tier.   * 400 ElasticPoolDbDtuMaxAboveLimit - The requested per database DTU max is too high for the requested elastic pool service tier.   * 400 InvalidInputValueForDatabaseDtuMax - Attempting to set the DTU max per database for the Resource Pool which doesn&#39;t match the allowed values.   * 400 ElasticPoolDbDtuMinAboveLimit - The requested DTU min per database is too high for the requested service tier.   * 400 InvalidInputValueForDatabaseDtuMin - Attempting to set the DTU min per database for the Resource Pool which doesn&#39;t match the allowed values.   * 400 ElasticPoolStorageAboveLimitGB - Attempting to set the elastic pool storage limit below the supported limit.   * 400 ElasticPoolOverStorageUsage - Attempting to write data to a database when the storage limit of the elastic pool has been reached.   * 400 ElasticPoolsNotEnabled - Elastic pools have not been enabled in this region.   * 400 ElasticPoolNotEmpty - Request to delete an elastic pool that is not empty.   * 400 ElasticPoolStorageBelowLimitGB - Attempting to set the elastic pool storage limit below the supported limit.   * 400 ElasticPoolStorageNotAllowedGB - Attempting to set the elastic pool storage limit in gb which doesn&#39;t match the allowed values.   * 400 ElasticPoolDatabaseLimit - The elastic pool has reached its limit for number of databases.   * 400 ElasticPoolStorageDecreasePrecondition - There was an attempt to decrease the storage limit of the elastic pool below its storage usage.   * 400 ElasticPoolBusy - A management operation was attempted on an elastic pool which is busy.   * 400 InvalidInputValueDatabaseDtuMinLargerThanMax - Attempting to set the DTU min per database higher than the DTU max per database.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 ElasticPoolNotFound - The specified elastic pool does not exist for the specified server.   * 404 OperationIdNotFound - The operation with Id does not exist.   * 404 ElasticPoolNotFound - The specified elastic pool does not exist for the specified server.   * 405 NotSupported - This functionality is not supported.   * 405 NotSupported - This functionality is not supported.   * 409 ServerDisabled - Server is disabled.   * 409 OperationCancelled - The operation has been cancelled by user.   * 409 OperationInterrupted - The operation on the resource could not be completed because it was interrupted by another operation on the same resource.   * 409 ServerDisabled - Server is disabled.   * 500 OperationTimedOut - The operation timed out and automatically rolled back. Please retry the operation.   * 503 ServiceTemporarilyUnavailable - Feature temporarily unavailable.   * 503 ServiceTemporarilyUnavailable - Feature temporarily unavailable. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **elastic_pools_delete**
> elastic_pools_delete(resource_group_name, server_name, elastic_pool_name, subscription_id, api_version)



Deletes an elastic pool.

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
    api_instance = openapi_client.ElasticPoolsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    elastic_pool_name = 'elastic_pool_name_example' # str | The name of the elastic pool.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_instance.elastic_pools_delete(resource_group_name, server_name, elastic_pool_name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling ElasticPoolsApi->elastic_pools_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **elastic_pool_name** | **str**| The name of the elastic pool. | 
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
**200** | Deleted the elastic pool |  -  |
**202** | Accepted |  -  |
**204** | Elastic pool did not exist |  -  |
**0** | *** Error Responses: ***   * 400 ElasticPoolStorageBelowLimitMB - Attempting to set the elastic pool storage limit below the supported limit.   * 400 ProvisioningDisabled - Displays error message from resources operation authorizer as is, without changes   * 400 ElasticPoolStorageNotAllowedMB - Attempting to set the elastic pool storage limit in mb which doesn&#39;t match the allowed values.   * 400 ElasticPoolStorageAboveLimitMB - Attempting to set the elastic pool storage limit below the supported limit.   * 400 ElasticPoolUpdateHkNotAllowed - The elastic pool cannot lower its service tier from Premium to Standard or Basic since one or more of its databases use memory-optimized objects.   * 400 ElasticPoolOverFileSpace - Insufficient file space in the elastic pool.   * 400 InvalidTier - The user specified an invalid tier.   * 400 ServerQuotaExceeded - Server cannot be added to a subscription because it will exceed quota.   * 400 ElasticPoolAlreadyExists - The server already contains an elastic pool with the specified name.   * 400 InvalidInputValueForEdition - Specified edition is not supported for elastic pool provisioning.   * 400 ElasticPoolDtuBelowLimit - The requested DTU value is too low for the requested elastic pool service tier.   * 400 ElasticPoolDtuAboveLimit - The requested DTU value is too high for the requested elastic pool service tier.   * 400 ElasticPoolDbDtuMaxBelowLimit - The requested per database DTU max is too low for the requested elastic pool service tier.   * 400 ElasticPoolDbDtuMaxAboveLimit - The requested per database DTU max is too high for the requested elastic pool service tier.   * 400 InvalidInputValueForDatabaseDtuMax - Attempting to set the DTU max per database for the Resource Pool which doesn&#39;t match the allowed values.   * 400 ElasticPoolDbDtuMinAboveLimit - The requested DTU min per database is too high for the requested service tier.   * 400 InvalidInputValueForDatabaseDtuMin - Attempting to set the DTU min per database for the Resource Pool which doesn&#39;t match the allowed values.   * 400 ElasticPoolStorageAboveLimitGB - Attempting to set the elastic pool storage limit below the supported limit.   * 400 ElasticPoolOverStorageUsage - Attempting to write data to a database when the storage limit of the elastic pool has been reached.   * 400 ElasticPoolsNotEnabled - Elastic pools have not been enabled in this region.   * 400 ElasticPoolNotEmpty - Request to delete an elastic pool that is not empty.   * 400 ElasticPoolStorageBelowLimitGB - Attempting to set the elastic pool storage limit below the supported limit.   * 400 ElasticPoolStorageNotAllowedGB - Attempting to set the elastic pool storage limit in gb which doesn&#39;t match the allowed values.   * 400 ElasticPoolDatabaseLimit - The elastic pool has reached its limit for number of databases.   * 400 ElasticPoolStorageDecreasePrecondition - There was an attempt to decrease the storage limit of the elastic pool below its storage usage.   * 400 ElasticPoolBusy - A management operation was attempted on an elastic pool which is busy.   * 400 InvalidInputValueDatabaseDtuMinLargerThanMax - Attempting to set the DTU min per database higher than the DTU max per database.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 ElasticPoolNotFound - The specified elastic pool does not exist for the specified server.   * 404 OperationIdNotFound - The operation with Id does not exist.   * 405 NotSupported - This functionality is not supported.   * 409 ServerDisabled - Server is disabled.   * 409 OperationCancelled - The operation has been cancelled by user.   * 409 OperationInterrupted - The operation on the resource could not be completed because it was interrupted by another operation on the same resource.   * 500 OperationTimedOut - The operation timed out and automatically rolled back. Please retry the operation.   * 503 ServiceTemporarilyUnavailable - Feature temporarily unavailable. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **elastic_pools_get**
> ElasticPool elastic_pools_get(resource_group_name, server_name, elastic_pool_name, subscription_id, api_version)



Gets an elastic pool.

### Example


```python
import openapi_client
from openapi_client.models.elastic_pool import ElasticPool
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
    api_instance = openapi_client.ElasticPoolsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    elastic_pool_name = 'elastic_pool_name_example' # str | The name of the elastic pool.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.elastic_pools_get(resource_group_name, server_name, elastic_pool_name, subscription_id, api_version)
        print("The response of ElasticPoolsApi->elastic_pools_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ElasticPoolsApi->elastic_pools_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **elastic_pool_name** | **str**| The name of the elastic pool. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**ElasticPool**](ElasticPool.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Succeeded |  -  |
**0** | *** Error Responses: ***   * 400 ElasticPoolStorageBelowLimitMB - Attempting to set the elastic pool storage limit below the supported limit.   * 400 ProvisioningDisabled - Displays error message from resources operation authorizer as is, without changes   * 400 ElasticPoolStorageNotAllowedMB - Attempting to set the elastic pool storage limit in mb which doesn&#39;t match the allowed values.   * 400 ElasticPoolStorageAboveLimitMB - Attempting to set the elastic pool storage limit below the supported limit.   * 400 ElasticPoolUpdateHkNotAllowed - The elastic pool cannot lower its service tier from Premium to Standard or Basic since one or more of its databases use memory-optimized objects.   * 400 ElasticPoolOverFileSpace - Insufficient file space in the elastic pool.   * 400 InvalidTier - The user specified an invalid tier.   * 400 ServerQuotaExceeded - Server cannot be added to a subscription because it will exceed quota.   * 400 ElasticPoolAlreadyExists - The server already contains an elastic pool with the specified name.   * 400 InvalidInputValueForEdition - Specified edition is not supported for elastic pool provisioning.   * 400 ElasticPoolDtuBelowLimit - The requested DTU value is too low for the requested elastic pool service tier.   * 400 ElasticPoolDtuAboveLimit - The requested DTU value is too high for the requested elastic pool service tier.   * 400 ElasticPoolDbDtuMaxBelowLimit - The requested per database DTU max is too low for the requested elastic pool service tier.   * 400 ElasticPoolDbDtuMaxAboveLimit - The requested per database DTU max is too high for the requested elastic pool service tier.   * 400 InvalidInputValueForDatabaseDtuMax - Attempting to set the DTU max per database for the Resource Pool which doesn&#39;t match the allowed values.   * 400 ElasticPoolDbDtuMinAboveLimit - The requested DTU min per database is too high for the requested service tier.   * 400 InvalidInputValueForDatabaseDtuMin - Attempting to set the DTU min per database for the Resource Pool which doesn&#39;t match the allowed values.   * 400 ElasticPoolStorageAboveLimitGB - Attempting to set the elastic pool storage limit below the supported limit.   * 400 ElasticPoolOverStorageUsage - Attempting to write data to a database when the storage limit of the elastic pool has been reached.   * 400 ElasticPoolsNotEnabled - Elastic pools have not been enabled in this region.   * 400 ElasticPoolNotEmpty - Request to delete an elastic pool that is not empty.   * 400 ElasticPoolStorageBelowLimitGB - Attempting to set the elastic pool storage limit below the supported limit.   * 400 ElasticPoolStorageNotAllowedGB - Attempting to set the elastic pool storage limit in gb which doesn&#39;t match the allowed values.   * 400 ElasticPoolDatabaseLimit - The elastic pool has reached its limit for number of databases.   * 400 ElasticPoolStorageDecreasePrecondition - There was an attempt to decrease the storage limit of the elastic pool below its storage usage.   * 400 ElasticPoolBusy - A management operation was attempted on an elastic pool which is busy.   * 400 InvalidInputValueDatabaseDtuMinLargerThanMax - Attempting to set the DTU min per database higher than the DTU max per database.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 ElasticPoolNotFound - The specified elastic pool does not exist for the specified server.   * 404 OperationIdNotFound - The operation with Id does not exist.   * 404 ResourceNotFound - The requested resource was not found.   * 405 NotSupported - This functionality is not supported.   * 409 ServerDisabled - Server is disabled.   * 409 OperationCancelled - The operation has been cancelled by user.   * 409 OperationInterrupted - The operation on the resource could not be completed because it was interrupted by another operation on the same resource.   * 500 OperationTimedOut - The operation timed out and automatically rolled back. Please retry the operation.   * 503 ServiceTemporarilyUnavailable - Feature temporarily unavailable. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **elastic_pools_list_by_server**
> ElasticPoolListResult elastic_pools_list_by_server(resource_group_name, server_name, subscription_id, api_version, skip=skip)



Gets all elastic pools in a server.

### Example


```python
import openapi_client
from openapi_client.models.elastic_pool_list_result import ElasticPoolListResult
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
    api_instance = openapi_client.ElasticPoolsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    skip = 56 # int | The number of elements in the collection to skip. (optional)

    try:
        api_response = api_instance.elastic_pools_list_by_server(resource_group_name, server_name, subscription_id, api_version, skip=skip)
        print("The response of ElasticPoolsApi->elastic_pools_list_by_server:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ElasticPoolsApi->elastic_pools_list_by_server: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **skip** | **int**| The number of elements in the collection to skip. | [optional] 

### Return type

[**ElasticPoolListResult**](ElasticPoolListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Succeeded |  -  |
**0** | *** Error Responses: ***   * 400 ElasticPoolStorageBelowLimitMB - Attempting to set the elastic pool storage limit below the supported limit.   * 400 ProvisioningDisabled - Displays error message from resources operation authorizer as is, without changes   * 400 ElasticPoolStorageNotAllowedMB - Attempting to set the elastic pool storage limit in mb which doesn&#39;t match the allowed values.   * 400 ElasticPoolStorageAboveLimitMB - Attempting to set the elastic pool storage limit below the supported limit.   * 400 ElasticPoolUpdateHkNotAllowed - The elastic pool cannot lower its service tier from Premium to Standard or Basic since one or more of its databases use memory-optimized objects.   * 400 ElasticPoolOverFileSpace - Insufficient file space in the elastic pool.   * 400 InvalidTier - The user specified an invalid tier.   * 400 ServerQuotaExceeded - Server cannot be added to a subscription because it will exceed quota.   * 400 ElasticPoolAlreadyExists - The server already contains an elastic pool with the specified name.   * 400 InvalidInputValueForEdition - Specified edition is not supported for elastic pool provisioning.   * 400 ElasticPoolDtuBelowLimit - The requested DTU value is too low for the requested elastic pool service tier.   * 400 ElasticPoolDtuAboveLimit - The requested DTU value is too high for the requested elastic pool service tier.   * 400 ElasticPoolDbDtuMaxBelowLimit - The requested per database DTU max is too low for the requested elastic pool service tier.   * 400 ElasticPoolDbDtuMaxAboveLimit - The requested per database DTU max is too high for the requested elastic pool service tier.   * 400 InvalidInputValueForDatabaseDtuMax - Attempting to set the DTU max per database for the Resource Pool which doesn&#39;t match the allowed values.   * 400 ElasticPoolDbDtuMinAboveLimit - The requested DTU min per database is too high for the requested service tier.   * 400 InvalidInputValueForDatabaseDtuMin - Attempting to set the DTU min per database for the Resource Pool which doesn&#39;t match the allowed values.   * 400 ElasticPoolStorageAboveLimitGB - Attempting to set the elastic pool storage limit below the supported limit.   * 400 ElasticPoolOverStorageUsage - Attempting to write data to a database when the storage limit of the elastic pool has been reached.   * 400 ElasticPoolsNotEnabled - Elastic pools have not been enabled in this region.   * 400 ElasticPoolNotEmpty - Request to delete an elastic pool that is not empty.   * 400 ElasticPoolStorageBelowLimitGB - Attempting to set the elastic pool storage limit below the supported limit.   * 400 ElasticPoolStorageNotAllowedGB - Attempting to set the elastic pool storage limit in gb which doesn&#39;t match the allowed values.   * 400 ElasticPoolDatabaseLimit - The elastic pool has reached its limit for number of databases.   * 400 ElasticPoolStorageDecreasePrecondition - There was an attempt to decrease the storage limit of the elastic pool below its storage usage.   * 400 ElasticPoolBusy - A management operation was attempted on an elastic pool which is busy.   * 400 InvalidInputValueDatabaseDtuMinLargerThanMax - Attempting to set the DTU min per database higher than the DTU max per database.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 ElasticPoolNotFound - The specified elastic pool does not exist for the specified server.   * 404 OperationIdNotFound - The operation with Id does not exist.   * 405 NotSupported - This functionality is not supported.   * 409 ServerDisabled - Server is disabled.   * 409 OperationCancelled - The operation has been cancelled by user.   * 409 OperationInterrupted - The operation on the resource could not be completed because it was interrupted by another operation on the same resource.   * 500 OperationTimedOut - The operation timed out and automatically rolled back. Please retry the operation.   * 503 ServiceTemporarilyUnavailable - Feature temporarily unavailable. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **elastic_pools_update**
> ElasticPool elastic_pools_update(resource_group_name, server_name, elastic_pool_name, subscription_id, api_version, parameters)



Updates an elastic pool.

### Example


```python
import openapi_client
from openapi_client.models.elastic_pool import ElasticPool
from openapi_client.models.elastic_pool_update import ElasticPoolUpdate
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
    api_instance = openapi_client.ElasticPoolsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    elastic_pool_name = 'elastic_pool_name_example' # str | The name of the elastic pool.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    parameters = openapi_client.ElasticPoolUpdate() # ElasticPoolUpdate | The elastic pool update parameters.

    try:
        api_response = api_instance.elastic_pools_update(resource_group_name, server_name, elastic_pool_name, subscription_id, api_version, parameters)
        print("The response of ElasticPoolsApi->elastic_pools_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ElasticPoolsApi->elastic_pools_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **elastic_pool_name** | **str**| The name of the elastic pool. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **parameters** | [**ElasticPoolUpdate**](ElasticPoolUpdate.md)| The elastic pool update parameters. | 

### Return type

[**ElasticPool**](ElasticPool.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Updated the elastic pool |  -  |
**202** | Accepted |  -  |
**0** | *** Error Responses: ***   * 400 ElasticPoolStorageBelowLimitMB - Attempting to set the elastic pool storage limit below the supported limit.   * 400 ProvisioningDisabled - Displays error message from resources operation authorizer as is, without changes   * 400 ElasticPoolStorageNotAllowedMB - Attempting to set the elastic pool storage limit in mb which doesn&#39;t match the allowed values.   * 400 ElasticPoolStorageAboveLimitMB - Attempting to set the elastic pool storage limit below the supported limit.   * 400 ElasticPoolUpdateHkNotAllowed - The elastic pool cannot lower its service tier from Premium to Standard or Basic since one or more of its databases use memory-optimized objects.   * 400 ElasticPoolOverFileSpace - Insufficient file space in the elastic pool.   * 400 InvalidTier - The user specified an invalid tier.   * 400 ServerQuotaExceeded - Server cannot be added to a subscription because it will exceed quota.   * 400 ElasticPoolAlreadyExists - The server already contains an elastic pool with the specified name.   * 400 InvalidInputValueForEdition - Specified edition is not supported for elastic pool provisioning.   * 400 ElasticPoolDtuBelowLimit - The requested DTU value is too low for the requested elastic pool service tier.   * 400 ElasticPoolDtuAboveLimit - The requested DTU value is too high for the requested elastic pool service tier.   * 400 ElasticPoolDbDtuMaxBelowLimit - The requested per database DTU max is too low for the requested elastic pool service tier.   * 400 ElasticPoolDbDtuMaxAboveLimit - The requested per database DTU max is too high for the requested elastic pool service tier.   * 400 InvalidInputValueForDatabaseDtuMax - Attempting to set the DTU max per database for the Resource Pool which doesn&#39;t match the allowed values.   * 400 ElasticPoolDbDtuMinAboveLimit - The requested DTU min per database is too high for the requested service tier.   * 400 InvalidInputValueForDatabaseDtuMin - Attempting to set the DTU min per database for the Resource Pool which doesn&#39;t match the allowed values.   * 400 ElasticPoolStorageAboveLimitGB - Attempting to set the elastic pool storage limit below the supported limit.   * 400 ElasticPoolOverStorageUsage - Attempting to write data to a database when the storage limit of the elastic pool has been reached.   * 400 ElasticPoolsNotEnabled - Elastic pools have not been enabled in this region.   * 400 ElasticPoolNotEmpty - Request to delete an elastic pool that is not empty.   * 400 ElasticPoolStorageBelowLimitGB - Attempting to set the elastic pool storage limit below the supported limit.   * 400 ElasticPoolStorageNotAllowedGB - Attempting to set the elastic pool storage limit in gb which doesn&#39;t match the allowed values.   * 400 ElasticPoolDatabaseLimit - The elastic pool has reached its limit for number of databases.   * 400 ElasticPoolStorageDecreasePrecondition - There was an attempt to decrease the storage limit of the elastic pool below its storage usage.   * 400 ElasticPoolBusy - A management operation was attempted on an elastic pool which is busy.   * 400 InvalidInputValueDatabaseDtuMinLargerThanMax - Attempting to set the DTU min per database higher than the DTU max per database.   * 400 InvalidResourceRequestBody - The resource or resource properties in the request body is empty or invalid.   * 400 InvalidSkuName - Invalid SKU name.   * 400 MismatchedSkuNameAndCapacity - Mismatch between SKU name and capacity.   * 400 MismatchedSkuNameAndTier - Mismatch between SKU name and tier.   * 400 MismatchedSkuNameAndFamily - Mismatch between SKU name and family.   * 400 ElasticPoolStorageBelowLimitMB - Attempting to set the elastic pool storage limit below the supported limit.   * 400 ProvisioningDisabled - Displays error message from resources operation authorizer as is, without changes   * 400 ElasticPoolStorageNotAllowedMB - Attempting to set the elastic pool storage limit in mb which doesn&#39;t match the allowed values.   * 400 ElasticPoolStorageAboveLimitMB - Attempting to set the elastic pool storage limit below the supported limit.   * 400 ElasticPoolUpdateHkNotAllowed - The elastic pool cannot lower its service tier from Premium to Standard or Basic since one or more of its databases use memory-optimized objects.   * 400 ElasticPoolOverFileSpace - Insufficient file space in the elastic pool.   * 400 InvalidTier - The user specified an invalid tier.   * 400 ServerQuotaExceeded - Server cannot be added to a subscription because it will exceed quota.   * 400 ElasticPoolAlreadyExists - The server already contains an elastic pool with the specified name.   * 400 InvalidInputValueForEdition - Specified edition is not supported for elastic pool provisioning.   * 400 ElasticPoolDtuBelowLimit - The requested DTU value is too low for the requested elastic pool service tier.   * 400 ElasticPoolDtuAboveLimit - The requested DTU value is too high for the requested elastic pool service tier.   * 400 ElasticPoolDbDtuMaxBelowLimit - The requested per database DTU max is too low for the requested elastic pool service tier.   * 400 ElasticPoolDbDtuMaxAboveLimit - The requested per database DTU max is too high for the requested elastic pool service tier.   * 400 InvalidInputValueForDatabaseDtuMax - Attempting to set the DTU max per database for the Resource Pool which doesn&#39;t match the allowed values.   * 400 ElasticPoolDbDtuMinAboveLimit - The requested DTU min per database is too high for the requested service tier.   * 400 InvalidInputValueForDatabaseDtuMin - Attempting to set the DTU min per database for the Resource Pool which doesn&#39;t match the allowed values.   * 400 ElasticPoolStorageAboveLimitGB - Attempting to set the elastic pool storage limit below the supported limit.   * 400 ElasticPoolOverStorageUsage - Attempting to write data to a database when the storage limit of the elastic pool has been reached.   * 400 ElasticPoolsNotEnabled - Elastic pools have not been enabled in this region.   * 400 ElasticPoolNotEmpty - Request to delete an elastic pool that is not empty.   * 400 ElasticPoolStorageBelowLimitGB - Attempting to set the elastic pool storage limit below the supported limit.   * 400 ElasticPoolStorageNotAllowedGB - Attempting to set the elastic pool storage limit in gb which doesn&#39;t match the allowed values.   * 400 ElasticPoolDatabaseLimit - The elastic pool has reached its limit for number of databases.   * 400 ElasticPoolStorageDecreasePrecondition - There was an attempt to decrease the storage limit of the elastic pool below its storage usage.   * 400 ElasticPoolBusy - A management operation was attempted on an elastic pool which is busy.   * 400 InvalidInputValueDatabaseDtuMinLargerThanMax - Attempting to set the DTU min per database higher than the DTU max per database.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 ElasticPoolNotFound - The specified elastic pool does not exist for the specified server.   * 404 OperationIdNotFound - The operation with Id does not exist.   * 404 ElasticPoolNotFound - The specified elastic pool does not exist for the specified server.   * 405 NotSupported - This functionality is not supported.   * 405 NotSupported - This functionality is not supported.   * 409 ServerDisabled - Server is disabled.   * 409 OperationCancelled - The operation has been cancelled by user.   * 409 OperationInterrupted - The operation on the resource could not be completed because it was interrupted by another operation on the same resource.   * 409 ServerDisabled - Server is disabled.   * 500 OperationTimedOut - The operation timed out and automatically rolled back. Please retry the operation.   * 503 ServiceTemporarilyUnavailable - Feature temporarily unavailable.   * 503 ServiceTemporarilyUnavailable - Feature temporarily unavailable. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

