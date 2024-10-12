# openapi_client.StorageTargetsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**storage_targets_create**](StorageTargetsApi.md#storage_targets_create) | **PUT** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StorageCache/caches/{cacheName}/storageTargets/{storageTargetName} | 
[**storage_targets_delete**](StorageTargetsApi.md#storage_targets_delete) | **DELETE** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StorageCache/caches/{cacheName}/storageTargets/{storageTargetName} | 
[**storage_targets_get**](StorageTargetsApi.md#storage_targets_get) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StorageCache/caches/{cacheName}/storageTargets/{storageTargetName} | 
[**storage_targets_list_by_cache**](StorageTargetsApi.md#storage_targets_list_by_cache) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StorageCache/caches/{cacheName}/storageTargets | 
[**storage_targets_update**](StorageTargetsApi.md#storage_targets_update) | **PATCH** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StorageCache/caches/{cacheName}/storageTargets/{storageTargetName} | 


# **storage_targets_create**
> StorageTarget storage_targets_create(resource_group_name, api_version, subscription_id, cache_name, storage_target_name, storagetarget=storagetarget)



Create/update a storage target.  This operation is allowed at any time, but if the cache is down or unhealthy, the actual creation/modification of the storage target may be delayed until the cache is healthy again.

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
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    cache_name = 'cache_name_example' # str | Name of cache.
    storage_target_name = 'storage_target_name_example' # str | Name of storage target.
    storagetarget = openapi_client.StorageTarget() # StorageTarget | Object containing the definition of a storage target. (optional)

    try:
        api_response = api_instance.storage_targets_create(resource_group_name, api_version, subscription_id, cache_name, storage_target_name, storagetarget=storagetarget)
        print("The response of StorageTargetsApi->storage_targets_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorageTargetsApi->storage_targets_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Target resource group. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **cache_name** | **str**| Name of cache. | 
 **storage_target_name** | **str**| Name of storage target. | 
 **storagetarget** | [**StorageTarget**](StorageTarget.md)| Object containing the definition of a storage target. | [optional] 

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
**200** | Storage Target has been created. |  -  |
**201** | Storage Target creation has been initiated.  Poll the new Storage Target&#39;s provisioningState property to monitor creation progress. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storage_targets_delete**
> object storage_targets_delete(resource_group_name, api_version, subscription_id, cache_name, storage_target_name)



Removes a storage target from a cache.  This operation is allowed at any time, but if the cache is down or unhealthy, the actual removal of the storage target may be delayed until the cache is healthy again.

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
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    cache_name = 'cache_name_example' # str | Name of cache.
    storage_target_name = 'storage_target_name_example' # str | Name of storage target.

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
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **cache_name** | **str**| Name of cache. | 
 **storage_target_name** | **str**| Name of storage target. | 

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
**202** | Started the storage target&#39;s deletion. |  -  |
**204** | Storage target deleted. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storage_targets_get**
> StorageTarget storage_targets_get(resource_group_name, api_version, subscription_id, cache_name, storage_target_name)



Returns a storage target from a cache.

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
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    cache_name = 'cache_name_example' # str | Name of cache.
    storage_target_name = 'storage_target_name_example' # str | Name of storage target.

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
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **cache_name** | **str**| Name of cache. | 
 **storage_target_name** | **str**| Name of storage target. | 

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



Returns the StorageTargets for this cache in the subscription and resource group.

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
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    cache_name = 'cache_name_example' # str | Name of cache.

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
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **cache_name** | **str**| Name of cache. | 

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
**200** | Returns the list of storage targets defined by cacheId. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storage_targets_update**
> StorageTarget storage_targets_update(resource_group_name, api_version, subscription_id, cache_name, storage_target_name, storagetarget=storagetarget)



Update a storage target.  This operation is allowed at any time, but if the cache is down or unhealthy, the actual creation/modification of the storage target may be delayed until the cache is healthy again.

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
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    cache_name = 'cache_name_example' # str | Name of cache.
    storage_target_name = 'storage_target_name_example' # str | Name of storage target.
    storagetarget = openapi_client.StorageTarget() # StorageTarget | Object containing the definition of a storage target. (optional)

    try:
        api_response = api_instance.storage_targets_update(resource_group_name, api_version, subscription_id, cache_name, storage_target_name, storagetarget=storagetarget)
        print("The response of StorageTargetsApi->storage_targets_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorageTargetsApi->storage_targets_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Target resource group. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **cache_name** | **str**| Name of cache. | 
 **storage_target_name** | **str**| Name of storage target. | 
 **storagetarget** | [**StorageTarget**](StorageTarget.md)| Object containing the definition of a storage target. | [optional] 

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
**200** | Storage Target has been patched. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

