# openapi_client.ResourcePoolsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**resource_pools_get**](ResourcePoolsApi.md#resource_pools_get) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.VMwareCloudSimple/locations/{regionId}/privateClouds/{pcName}/resourcePools/{resourcePoolName} | Implements get of resource pool
[**resource_pools_list**](ResourcePoolsApi.md#resource_pools_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.VMwareCloudSimple/locations/{regionId}/privateClouds/{pcName}/resourcePools | Implements get of resource pools list


# **resource_pools_get**
> ResourcePool resource_pools_get(subscription_id, api_version, region_id, pc_name, resource_pool_name)

Implements get of resource pool

Returns resource pool templates by its name

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.resource_pool import ResourcePool
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
    api_instance = openapi_client.ResourcePoolsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    api_version = 'api_version_example' # str | Client API version.
    region_id = 'region_id_example' # str | The region Id (westus, eastus)
    pc_name = 'pc_name_example' # str | The private cloud name
    resource_pool_name = 'resource_pool_name_example' # str | resource pool id (vsphereId)

    try:
        # Implements get of resource pool
        api_response = api_instance.resource_pools_get(subscription_id, api_version, region_id, pc_name, resource_pool_name)
        print("The response of ResourcePoolsApi->resource_pools_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResourcePoolsApi->resource_pools_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **api_version** | **str**| Client API version. | 
 **region_id** | **str**| The region Id (westus, eastus) | 
 **pc_name** | **str**| The private cloud name | 
 **resource_pool_name** | **str**| resource pool id (vsphereId) | 

### Return type

[**ResourcePool**](ResourcePool.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**0** | General Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resource_pools_list**
> ResourcePoolsListResponse resource_pools_list(subscription_id, region_id, pc_name, api_version)

Implements get of resource pools list

Returns list of resource pools in region for private cloud

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.resource_pools_list_response import ResourcePoolsListResponse
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
    api_instance = openapi_client.ResourcePoolsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    region_id = 'region_id_example' # str | The region Id (westus, eastus)
    pc_name = 'pc_name_example' # str | The private cloud name
    api_version = 'api_version_example' # str | Client API version.

    try:
        # Implements get of resource pools list
        api_response = api_instance.resource_pools_list(subscription_id, region_id, pc_name, api_version)
        print("The response of ResourcePoolsApi->resource_pools_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResourcePoolsApi->resource_pools_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **region_id** | **str**| The region Id (westus, eastus) | 
 **pc_name** | **str**| The private cloud name | 
 **api_version** | **str**| Client API version. | 

### Return type

[**ResourcePoolsListResponse**](ResourcePoolsListResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**0** | General Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

