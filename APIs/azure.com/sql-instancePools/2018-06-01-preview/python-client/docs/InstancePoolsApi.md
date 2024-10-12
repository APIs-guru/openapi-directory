# openapi_client.InstancePoolsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**instance_pools_create_or_update**](InstancePoolsApi.md#instance_pools_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/instancePools/{instancePoolName} | 
[**instance_pools_delete**](InstancePoolsApi.md#instance_pools_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/instancePools/{instancePoolName} | 
[**instance_pools_get**](InstancePoolsApi.md#instance_pools_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/instancePools/{instancePoolName} | 
[**instance_pools_list**](InstancePoolsApi.md#instance_pools_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Sql/instancePools | 
[**instance_pools_list_by_resource_group**](InstancePoolsApi.md#instance_pools_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/instancePools | 
[**instance_pools_update**](InstancePoolsApi.md#instance_pools_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/instancePools/{instancePoolName} | 


# **instance_pools_create_or_update**
> InstancePool instance_pools_create_or_update(resource_group_name, instance_pool_name, subscription_id, api_version, parameters)



Creates or updates an instance pool.

### Example


```python
import openapi_client
from openapi_client.models.instance_pool import InstancePool
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
    api_instance = openapi_client.InstancePoolsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    instance_pool_name = 'instance_pool_name_example' # str | The name of the instance pool to be created or updated.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    parameters = openapi_client.InstancePool() # InstancePool | The requested instance pool resource state.

    try:
        api_response = api_instance.instance_pools_create_or_update(resource_group_name, instance_pool_name, subscription_id, api_version, parameters)
        print("The response of InstancePoolsApi->instance_pools_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InstancePoolsApi->instance_pools_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **instance_pool_name** | **str**| The name of the instance pool to be created or updated. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **parameters** | [**InstancePool**](InstancePool.md)| The requested instance pool resource state. | 

### Return type

[**InstancePool**](InstancePool.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the instance pool. |  -  |
**201** | Successfully created the instance pool. |  -  |
**202** | Accepted |  -  |
**0** | *** Error Responses: ***   * 400 InvalidResourceRequestBody - The resource or resource properties in the request body is empty or invalid.   * 400 MissingSkuName - Sku name is required.   * 400 InstancePoolRequestedVcoreCountIsInvalid - Requested vcore count for instance pool is invalid   * 400 InstancePoolRequestMissingSku - Instance pool request is missing sku   * 400 InstancePoolRequestMissingSkuTier - Instance pool request is missing sku tier   * 400 InstancePoolRequestMissingSkuFamily - Instance pool request is missing sku family   * 400 InstancePoolRequestedSubnetResourceIdIsInvalid - Subnet id for instance pool is null or empty   * 409 InstancePoolBusy - An instance pool is busy with another ongoing operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **instance_pools_delete**
> instance_pools_delete(resource_group_name, instance_pool_name, subscription_id, api_version)



Deletes an instance pool

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
    api_instance = openapi_client.InstancePoolsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    instance_pool_name = 'instance_pool_name_example' # str | The name of the instance pool to be deleted
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_instance.instance_pools_delete(resource_group_name, instance_pool_name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling InstancePoolsApi->instance_pools_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **instance_pool_name** | **str**| The name of the instance pool to be deleted | 
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
**200** | Successfully deleted the instance pool. |  -  |
**202** | Accepted |  -  |
**204** | The specified instance pool does not exist. |  -  |
**0** | *** Error Responses: ***   * 400 InstancePoolNotEmpty - An instance pool is not empty   * 404 InstancePoolNotFound - An instance pool cannot be found   * 404 InstancePoolNotFound - An instance pool cannot be found   * 409 InstancePoolBusy - An instance pool is busy with another ongoing operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **instance_pools_get**
> InstancePool instance_pools_get(resource_group_name, instance_pool_name, subscription_id, api_version)



Gets an instance pool.

### Example


```python
import openapi_client
from openapi_client.models.instance_pool import InstancePool
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
    api_instance = openapi_client.InstancePoolsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    instance_pool_name = 'instance_pool_name_example' # str | The name of the instance pool to be retrieved.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.instance_pools_get(resource_group_name, instance_pool_name, subscription_id, api_version)
        print("The response of InstancePoolsApi->instance_pools_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InstancePoolsApi->instance_pools_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **instance_pool_name** | **str**| The name of the instance pool to be retrieved. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**InstancePool**](InstancePool.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the specified instance pool. |  -  |
**0** | *** Error Responses: ***   * 404 InstancePoolNotFound - An instance pool cannot be found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **instance_pools_list**
> InstancePoolListResult instance_pools_list(subscription_id, api_version)



Gets a list of all instance pools in the subscription.

### Example


```python
import openapi_client
from openapi_client.models.instance_pool_list_result import InstancePoolListResult
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
    api_instance = openapi_client.InstancePoolsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.instance_pools_list(subscription_id, api_version)
        print("The response of InstancePoolsApi->instance_pools_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InstancePoolsApi->instance_pools_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**InstancePoolListResult**](InstancePoolListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of instance pools in a subscription. |  -  |
**0** | *** Error Responses: *** |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **instance_pools_list_by_resource_group**
> InstancePoolListResult instance_pools_list_by_resource_group(resource_group_name, subscription_id, api_version)



Gets a list of instance pools in the resource group

### Example


```python
import openapi_client
from openapi_client.models.instance_pool_list_result import InstancePoolListResult
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
    api_instance = openapi_client.InstancePoolsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.instance_pools_list_by_resource_group(resource_group_name, subscription_id, api_version)
        print("The response of InstancePoolsApi->instance_pools_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InstancePoolsApi->instance_pools_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**InstancePoolListResult**](InstancePoolListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of instance pools. |  -  |
**0** | *** Error Responses: *** |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **instance_pools_update**
> InstancePool instance_pools_update(resource_group_name, instance_pool_name, subscription_id, api_version, parameters)



Updates an instance pool.

### Example


```python
import openapi_client
from openapi_client.models.instance_pool import InstancePool
from openapi_client.models.instance_pool_update import InstancePoolUpdate
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
    api_instance = openapi_client.InstancePoolsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    instance_pool_name = 'instance_pool_name_example' # str | The name of the instance pool to be updated.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    parameters = openapi_client.InstancePoolUpdate() # InstancePoolUpdate | The requested instance pool resource state.

    try:
        api_response = api_instance.instance_pools_update(resource_group_name, instance_pool_name, subscription_id, api_version, parameters)
        print("The response of InstancePoolsApi->instance_pools_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InstancePoolsApi->instance_pools_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **instance_pool_name** | **str**| The name of the instance pool to be updated. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **parameters** | [**InstancePoolUpdate**](InstancePoolUpdate.md)| The requested instance pool resource state. | 

### Return type

[**InstancePool**](InstancePool.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the instance pool. |  -  |
**202** | Accepted |  -  |
**0** | *** Error Responses: ***   * 400 InvalidResourceRequestBody - The resource or resource properties in the request body is empty or invalid. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

