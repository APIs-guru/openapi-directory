# openapi_client.StorageTargetsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**storage_targets_create_or_update**](StorageTargetsApi.md#storage_targets_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StorageCache/caches/{cacheName}/storageTargets/{storageTargetName} | 
[**storage_targets_delete**](StorageTargetsApi.md#storage_targets_delete) | **DELETE** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StorageCache/caches/{cacheName}/storageTargets/{storageTargetName} | 
[**storage_targets_get**](StorageTargetsApi.md#storage_targets_get) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StorageCache/caches/{cacheName}/storageTargets/{storageTargetName} | 
[**storage_targets_list_by_cache**](StorageTargetsApi.md#storage_targets_list_by_cache) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StorageCache/caches/{cacheName}/storageTargets | 


# **storage_targets_create_or_update**
> StorageTarget storage_targets_create_or_update(resource_group_name, api_version, subscription_id, cache_name, storage_target_name, storagetarget=storagetarget)



Create or update a Storage Target. This operation is allowed at any time, but if the Cache is down or unhealthy, the actual creation/modification of the Storage Target may be delayed until the Cache is healthy again.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.storage_target import StorageTarget
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
    api_instance = openapi_client.StorageTargetsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Target resource group.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    cache_name = 'cache_name_example' # str | Name of Cache.
    storage_target_name = 'storage_target_name_example' # str | Name of the Storage Target.
    storagetarget = openapi_client.StorageTarget() # StorageTarget | Object containing the definition of a Storage Target. (optional)

    try:
        api_response = api_instance.storage_targets_create_or_update(resource_group_name, api_version, subscription_id, cache_name, storage_target_name, storagetarget=storagetarget)
        print("The response of StorageTargetsApi->storage_targets_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorageTargetsApi->storage_targets_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Target resource group. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **cache_name** | **str**| Name of Cache. | 
 **storage_target_name** | **str**| Name of the Storage Target. | 
 **storagetarget** | [**StorageTarget**](StorageTarget.md)| Object containing the definition of a Storage Target. | [optional] 

### Return type

[**StorageTarget**](StorageTarget.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Storage Target has been created or updated. |  -  |
**201** | Storage Target creation or update has been initiated. Poll the new Storage Target&#39;s provisioningState property to monitor creation progress. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storage_targets_delete**
> object storage_targets_delete(resource_group_name, api_version, subscription_id, cache_name, storage_target_name)



Removes a Storage Target from a Cache. This operation is allowed at any time, but if the Cache is down or unhealthy, the actual removal of the Storage Target may be delayed until the Cache is healthy again. Note that if the Cache has data to flush to the Storage Target, the data will be flushed before the Storage Target will be deleted.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
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
    api_instance = openapi_client.StorageTargetsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Target resource group.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    cache_name = 'cache_name_example' # str | Name of Cache.
    storage_target_name = 'storage_target_name_example' # str | Name of Storage Target.

    try:
        api_response = api_instance.storage_targets_delete(resource_group_name, api_version, subscription_id, cache_name, storage_target_name)
        print("The response of StorageTargetsApi->storage_targets_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorageTargetsApi->storage_targets_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Target resource group. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **cache_name** | **str**| Name of Cache. | 
 **storage_target_name** | **str**| Name of Storage Target. | 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Storage target deleted. |  -  |
**202** | Started the Storage Target&#39;s deletion. Poll the Cache&#39;s Storage Targets to monitor. |  -  |
**204** | Storage Target deleted. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storage_targets_get**
> StorageTarget storage_targets_get(resource_group_name, api_version, subscription_id, cache_name, storage_target_name)



Returns a Storage Target from a Cache.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.storage_target import StorageTarget
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
    api_instance = openapi_client.StorageTargetsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Target resource group.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    cache_name = 'cache_name_example' # str | Name of Cache.
    storage_target_name = 'storage_target_name_example' # str | Name of the Storage Target.

    try:
        api_response = api_instance.storage_targets_get(resource_group_name, api_version, subscription_id, cache_name, storage_target_name)
        print("The response of StorageTargetsApi->storage_targets_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorageTargetsApi->storage_targets_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Target resource group. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **cache_name** | **str**| Name of Cache. | 
 **storage_target_name** | **str**| Name of the Storage Target. | 

### Return type

[**StorageTarget**](StorageTarget.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the Storage Target object corresponding to storageTargetName. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storage_targets_list_by_cache**
> StorageTargetsResult storage_targets_list_by_cache(resource_group_name, api_version, subscription_id, cache_name)



Returns a list of Storage Targets for the specified Cache.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.storage_targets_result import StorageTargetsResult
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
    api_instance = openapi_client.StorageTargetsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Target resource group.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    cache_name = 'cache_name_example' # str | Name of Cache.

    try:
        api_response = api_instance.storage_targets_list_by_cache(resource_group_name, api_version, subscription_id, cache_name)
        print("The response of StorageTargetsApi->storage_targets_list_by_cache:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorageTargetsApi->storage_targets_list_by_cache: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Target resource group. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **cache_name** | **str**| Name of Cache. | 

### Return type

[**StorageTargetsResult**](StorageTargetsResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the list of Storage Targets defined by cacheName. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

