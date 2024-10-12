# openapi_client.PatchSchedulesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**patch_schedules_create_or_update_0**](PatchSchedulesApi.md#patch_schedules_create_or_update_0) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{name}/patchSchedules/{default} | 
[**patch_schedules_delete_0**](PatchSchedulesApi.md#patch_schedules_delete_0) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{name}/patchSchedules/{default} | 
[**patch_schedules_get_0**](PatchSchedulesApi.md#patch_schedules_get_0) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{name}/patchSchedules/{default} | 
[**patch_schedules_list_by_redis_resource_0**](PatchSchedulesApi.md#patch_schedules_list_by_redis_resource_0) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{cacheName}/patchSchedules | 


# **patch_schedules_create_or_update_0**
> RedisPatchSchedule patch_schedules_create_or_update_0(resource_group_name, name, default, api_version, subscription_id, parameters)



Create or replace the patching schedule for Redis cache (requires Premium SKU).

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.redis_patch_schedule import RedisPatchSchedule
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
    api_instance = openapi_client.PatchSchedulesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    name = 'name_example' # str | The name of the Redis cache.
    default = 'default_example' # str | Default string modeled as parameter for auto generation to work correctly.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.RedisPatchSchedule() # RedisPatchSchedule | Parameters to set the patching schedule for Redis cache.

    try:
        api_response = api_instance.patch_schedules_create_or_update_0(resource_group_name, name, default, api_version, subscription_id, parameters)
        print("The response of PatchSchedulesApi->patch_schedules_create_or_update_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PatchSchedulesApi->patch_schedules_create_or_update_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **name** | **str**| The name of the Redis cache. | 
 **default** | **str**| Default string modeled as parameter for auto generation to work correctly. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**RedisPatchSchedule**](RedisPatchSchedule.md)| Parameters to set the patching schedule for Redis cache. | 

### Return type

[**RedisPatchSchedule**](RedisPatchSchedule.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The patch schedule was successfully updated. |  -  |
**201** | The patch schedule was successfully created. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patch_schedules_delete_0**
> patch_schedules_delete_0(resource_group_name, name, default, api_version, subscription_id)



Deletes the patching schedule of a redis cache (requires Premium SKU).

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
    api_instance = openapi_client.PatchSchedulesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    name = 'name_example' # str | The name of the redis cache.
    default = 'default_example' # str | Default string modeled as parameter for auto generation to work correctly.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.patch_schedules_delete_0(resource_group_name, name, default, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling PatchSchedulesApi->patch_schedules_delete_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **name** | **str**| The name of the redis cache. | 
 **default** | **str**| Default string modeled as parameter for auto generation to work correctly. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. |  -  |
**204** | Success. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patch_schedules_get_0**
> RedisPatchSchedule patch_schedules_get_0(resource_group_name, name, default, api_version, subscription_id)



Gets the patching schedule of a redis cache (requires Premium SKU).

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.redis_patch_schedule import RedisPatchSchedule
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
    api_instance = openapi_client.PatchSchedulesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    name = 'name_example' # str | The name of the redis cache.
    default = 'default_example' # str | Default string modeled as parameter for auto generation to work correctly.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.patch_schedules_get_0(resource_group_name, name, default, api_version, subscription_id)
        print("The response of PatchSchedulesApi->patch_schedules_get_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PatchSchedulesApi->patch_schedules_get_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **name** | **str**| The name of the redis cache. | 
 **default** | **str**| Default string modeled as parameter for auto generation to work correctly. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**RedisPatchSchedule**](RedisPatchSchedule.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Response of get patch schedules. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patch_schedules_list_by_redis_resource_0**
> RedisPatchScheduleListResult patch_schedules_list_by_redis_resource_0(api_version, subscription_id, resource_group_name, cache_name)



Gets all patch schedules in the specified redis cache (there is only one).

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.redis_patch_schedule_list_result import RedisPatchScheduleListResult
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
    api_instance = openapi_client.PatchSchedulesApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    cache_name = 'cache_name_example' # str | The name of the Redis cache.

    try:
        api_response = api_instance.patch_schedules_list_by_redis_resource_0(api_version, subscription_id, resource_group_name, cache_name)
        print("The response of PatchSchedulesApi->patch_schedules_list_by_redis_resource_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PatchSchedulesApi->patch_schedules_list_by_redis_resource_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **cache_name** | **str**| The name of the Redis cache. | 

### Return type

[**RedisPatchScheduleListResult**](RedisPatchScheduleListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully got the current patch schedules |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

