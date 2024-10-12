# openapi_client.CachesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**caches_create_or_update**](CachesApi.md#caches_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StorageCache/caches/{cacheName} | 
[**caches_delete**](CachesApi.md#caches_delete) | **DELETE** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StorageCache/caches/{cacheName} | 
[**caches_flush**](CachesApi.md#caches_flush) | **POST** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StorageCache/caches/{cacheName}/flush | 
[**caches_get**](CachesApi.md#caches_get) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StorageCache/caches/{cacheName} | 
[**caches_list**](CachesApi.md#caches_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.StorageCache/caches | 
[**caches_list_by_resource_group**](CachesApi.md#caches_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StorageCache/caches | 
[**caches_start**](CachesApi.md#caches_start) | **POST** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StorageCache/caches/{cacheName}/start | 
[**caches_stop**](CachesApi.md#caches_stop) | **POST** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StorageCache/caches/{cacheName}/stop | 
[**caches_update**](CachesApi.md#caches_update) | **PATCH** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StorageCache/caches/{cacheName} | 
[**caches_upgrade_firmware**](CachesApi.md#caches_upgrade_firmware) | **POST** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StorageCache/caches/{cacheName}/upgrade | 


# **caches_create_or_update**
> Cache caches_create_or_update(resource_group_name, api_version, subscription_id, cache_name, cache=cache)



Create or update a Cache.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.cache import Cache
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
    api_instance = openapi_client.CachesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Target resource group.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    cache_name = 'cache_name_example' # str | Name of Cache.
    cache = openapi_client.Cache() # Cache | Object containing the user-selectable properties of the new Cache. If read-only properties are included, they must match the existing values of those properties. (optional)

    try:
        api_response = api_instance.caches_create_or_update(resource_group_name, api_version, subscription_id, cache_name, cache=cache)
        print("The response of CachesApi->caches_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CachesApi->caches_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Target resource group. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **cache_name** | **str**| Name of Cache. | 
 **cache** | [**Cache**](Cache.md)| Object containing the user-selectable properties of the new Cache. If read-only properties are included, they must match the existing values of those properties. | [optional] 

### Return type

[**Cache**](Cache.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Cache created or updated. |  -  |
**201** | Cache creation or update has been initiated. Poll the new Cache&#39;s provisioningState property to monitor creation progress. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **caches_delete**
> object caches_delete(resource_group_name, cache_name, api_version, subscription_id)



Schedules a Cache for deletion.

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
    api_instance = openapi_client.CachesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Target resource group.
    cache_name = 'cache_name_example' # str | Name of Cache.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.caches_delete(resource_group_name, cache_name, api_version, subscription_id)
        print("The response of CachesApi->caches_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CachesApi->caches_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Target resource group. | 
 **cache_name** | **str**| Name of Cache. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

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
**200** | Cache deleted. |  -  |
**202** | Started the Cache&#39;s transition to Deleted state. Poll the Cache to monitor. |  -  |
**204** | Cache deleted. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **caches_flush**
> object caches_flush(resource_group_name, api_version, subscription_id, cache_name)



Tells a Cache to write all dirty data to the Storage Target(s). During the flush, clients will see errors returned until the flush is complete.

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
    api_instance = openapi_client.CachesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Target resource group.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    cache_name = 'cache_name_example' # str | Name of Cache.

    try:
        api_response = api_instance.caches_flush(resource_group_name, api_version, subscription_id, cache_name)
        print("The response of CachesApi->caches_flush:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CachesApi->caches_flush: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Target resource group. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **cache_name** | **str**| Name of Cache. | 

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
**200** | All cached data has been flushed to the Storage Target(s). |  -  |
**202** | Cache has started flushing to its Storage Target(s). Poll the Cache&#39;s state field to monitor. |  -  |
**204** | Cache flushed. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **caches_get**
> Cache caches_get(resource_group_name, cache_name, api_version, subscription_id)



Returns a Cache.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.cache import Cache
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
    api_instance = openapi_client.CachesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Target resource group.
    cache_name = 'cache_name_example' # str | Name of Cache.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.caches_get(resource_group_name, cache_name, api_version, subscription_id)
        print("The response of CachesApi->caches_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CachesApi->caches_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Target resource group. | 
 **cache_name** | **str**| Name of Cache. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**Cache**](Cache.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the Cache object corresponding to cacheName. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **caches_list**
> CachesListResult caches_list(api_version, subscription_id)



Returns all Caches the user has access to under a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.caches_list_result import CachesListResult
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
    api_instance = openapi_client.CachesApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.caches_list(api_version, subscription_id)
        print("The response of CachesApi->caches_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CachesApi->caches_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**CachesListResult**](CachesListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of Cache objects. Note that entity references might replace complete Cache objects, as described in http://docs.oasis-open.org/odata/odata-json-format/v4.01/cs01/odata-json-format-v4.01-cs01.html#sec_EntityReference |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **caches_list_by_resource_group**
> CachesListResult caches_list_by_resource_group(resource_group_name, api_version, subscription_id)



Returns all Caches the user has access to under a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.caches_list_result import CachesListResult
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
    api_instance = openapi_client.CachesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Target resource group.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.caches_list_by_resource_group(resource_group_name, api_version, subscription_id)
        print("The response of CachesApi->caches_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CachesApi->caches_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Target resource group. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**CachesListResult**](CachesListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of Cache objects. Note that entity references might replace complete Cache objects, as described in http://docs.oasis-open.org/odata/odata-json-format/v4.01/cs01/odata-json-format-v4.01-cs01.html#sec_EntityReference |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **caches_start**
> object caches_start(resource_group_name, api_version, subscription_id, cache_name)



Tells a Stopped state Cache to transition to Active state.

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
    api_instance = openapi_client.CachesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Target resource group.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    cache_name = 'cache_name_example' # str | Name of Cache.

    try:
        api_response = api_instance.caches_start(resource_group_name, api_version, subscription_id, cache_name)
        print("The response of CachesApi->caches_start:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CachesApi->caches_start: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Target resource group. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **cache_name** | **str**| Name of Cache. | 

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
**200** | Cache is Active. |  -  |
**202** | Cache has started the transition to Active. Poll the Cache&#39;s state field to monitor. |  -  |
**204** | Restarted VMs associated with the cache. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **caches_stop**
> object caches_stop(resource_group_name, api_version, subscription_id, cache_name)



Tells an Active Cache to transition to Stopped state.

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
    api_instance = openapi_client.CachesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Target resource group.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    cache_name = 'cache_name_example' # str | Name of Cache.

    try:
        api_response = api_instance.caches_stop(resource_group_name, api_version, subscription_id, cache_name)
        print("The response of CachesApi->caches_stop:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CachesApi->caches_stop: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Target resource group. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **cache_name** | **str**| Name of Cache. | 

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
**200** | Cache is stopped. |  -  |
**202** | Cache has started the transition to Stopped. Poll the Cache&#39;s state field to monitor. |  -  |
**204** | Stopped VMs associated with the cache. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **caches_update**
> Cache caches_update(resource_group_name, api_version, subscription_id, cache_name, cache=cache)



Update a Cache instance.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.cache import Cache
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
    api_instance = openapi_client.CachesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Target resource group.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    cache_name = 'cache_name_example' # str | Name of Cache.
    cache = openapi_client.Cache() # Cache | Object containing the user-selectable properties of the Cache. If read-only properties are included, they must match the existing values of those properties. (optional)

    try:
        api_response = api_instance.caches_update(resource_group_name, api_version, subscription_id, cache_name, cache=cache)
        print("The response of CachesApi->caches_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CachesApi->caches_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Target resource group. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **cache_name** | **str**| Name of Cache. | 
 **cache** | [**Cache**](Cache.md)| Object containing the user-selectable properties of the Cache. If read-only properties are included, they must match the existing values of those properties. | [optional] 

### Return type

[**Cache**](Cache.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Updated the Cache. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **caches_upgrade_firmware**
> object caches_upgrade_firmware(resource_group_name, api_version, subscription_id, cache_name)



Upgrade a Cache's firmware if a new version is available. Otherwise, this operation has no effect.

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
    api_instance = openapi_client.CachesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Target resource group.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    cache_name = 'cache_name_example' # str | Name of Cache.

    try:
        api_response = api_instance.caches_upgrade_firmware(resource_group_name, api_version, subscription_id, cache_name)
        print("The response of CachesApi->caches_upgrade_firmware:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CachesApi->caches_upgrade_firmware: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Target resource group. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **cache_name** | **str**| Name of Cache. | 

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
**201** | Cache firmware is up to date. |  -  |
**202** | Cache has started the upgrade. Poll the Cache&#39;s state field to monitor. |  -  |
**204** | Cache firmware is up to date. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

