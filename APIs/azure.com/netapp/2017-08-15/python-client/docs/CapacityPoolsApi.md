# openapi_client.CapacityPoolsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**pools_create_or_update**](CapacityPoolsApi.md#pools_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName} | 
[**pools_delete**](CapacityPoolsApi.md#pools_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName} | 
[**pools_get**](CapacityPoolsApi.md#pools_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName} | 
[**pools_list**](CapacityPoolsApi.md#pools_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools | 
[**pools_update**](CapacityPoolsApi.md#pools_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName} | 


# **pools_create_or_update**
> CapacityPool pools_create_or_update(subscription_id, resource_group_name, account_name, pool_name, api_version, body)



Create or Update a capacity pool

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.capacity_pool import CapacityPool
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
    api_instance = openapi_client.CapacityPoolsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    account_name = 'account_name_example' # str | The name of the NetApp account
    pool_name = 'pool_name_example' # str | The name of the capacity pool
    api_version = '2017-08-15' # str | Version of the API to be used with the client request. (default to '2017-08-15')
    body = openapi_client.CapacityPool() # CapacityPool | Capacity pool object supplied in the body of the operation.

    try:
        api_response = api_instance.pools_create_or_update(subscription_id, resource_group_name, account_name, pool_name, api_version, body)
        print("The response of CapacityPoolsApi->pools_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CapacityPoolsApi->pools_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **account_name** | **str**| The name of the NetApp account | 
 **pool_name** | **str**| The name of the capacity pool | 
 **api_version** | **str**| Version of the API to be used with the client request. | [default to &#39;2017-08-15&#39;]
 **body** | [**CapacityPool**](CapacityPool.md)| Capacity pool object supplied in the body of the operation. | 

### Return type

[**CapacityPool**](CapacityPool.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - pool updated |  -  |
**201** | Pool created |  -  |
**202** | Accepted -- Create request accepted; operation will complete asynchronously |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pools_delete**
> pools_delete(subscription_id, resource_group_name, account_name, pool_name, api_version)



Delete a capacity pool

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
    api_instance = openapi_client.CapacityPoolsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    account_name = 'account_name_example' # str | The name of the NetApp account
    pool_name = 'pool_name_example' # str | The name of the capacity pool
    api_version = '2017-08-15' # str | Version of the API to be used with the client request. (default to '2017-08-15')

    try:
        api_instance.pools_delete(subscription_id, resource_group_name, account_name, pool_name, api_version)
    except Exception as e:
        print("Exception when calling CapacityPoolsApi->pools_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **account_name** | **str**| The name of the NetApp account | 
 **pool_name** | **str**| The name of the capacity pool | 
 **api_version** | **str**| Version of the API to be used with the client request. | [default to &#39;2017-08-15&#39;]

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Accepted -- Create or update request accepted; operation will complete asynchronously |  -  |
**204** | NoContent -- Resource does not exist. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pools_get**
> CapacityPool pools_get(subscription_id, resource_group_name, account_name, pool_name, api_version)



Get a capacity pool

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.capacity_pool import CapacityPool
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
    api_instance = openapi_client.CapacityPoolsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    account_name = 'account_name_example' # str | The name of the NetApp account
    pool_name = 'pool_name_example' # str | The name of the capacity pool
    api_version = '2017-08-15' # str | Version of the API to be used with the client request. (default to '2017-08-15')

    try:
        api_response = api_instance.pools_get(subscription_id, resource_group_name, account_name, pool_name, api_version)
        print("The response of CapacityPoolsApi->pools_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CapacityPoolsApi->pools_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **account_name** | **str**| The name of the NetApp account | 
 **pool_name** | **str**| The name of the capacity pool | 
 **api_version** | **str**| Version of the API to be used with the client request. | [default to &#39;2017-08-15&#39;]

### Return type

[**CapacityPool**](CapacityPool.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pools_list**
> CapacityPoolList pools_list(subscription_id, resource_group_name, account_name, api_version)



Lists all capacity pools in the NetApp Account

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.capacity_pool_list import CapacityPoolList
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
    api_instance = openapi_client.CapacityPoolsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    account_name = 'account_name_example' # str | The name of the NetApp account
    api_version = '2017-08-15' # str | Version of the API to be used with the client request. (default to '2017-08-15')

    try:
        api_response = api_instance.pools_list(subscription_id, resource_group_name, account_name, api_version)
        print("The response of CapacityPoolsApi->pools_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CapacityPoolsApi->pools_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **account_name** | **str**| The name of the NetApp account | 
 **api_version** | **str**| Version of the API to be used with the client request. | [default to &#39;2017-08-15&#39;]

### Return type

[**CapacityPoolList**](CapacityPoolList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pools_update**
> CapacityPool pools_update(subscription_id, resource_group_name, account_name, pool_name, api_version, body)



Patch a capacity pool

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.capacity_pool import CapacityPool
from openapi_client.models.capacity_pool_patch import CapacityPoolPatch
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
    api_instance = openapi_client.CapacityPoolsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    account_name = 'account_name_example' # str | The name of the NetApp account
    pool_name = 'pool_name_example' # str | The name of the capacity pool
    api_version = '2017-08-15' # str | Version of the API to be used with the client request. (default to '2017-08-15')
    body = openapi_client.CapacityPoolPatch() # CapacityPoolPatch | Capacity pool object supplied in the body of the operation.

    try:
        api_response = api_instance.pools_update(subscription_id, resource_group_name, account_name, pool_name, api_version, body)
        print("The response of CapacityPoolsApi->pools_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CapacityPoolsApi->pools_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **account_name** | **str**| The name of the NetApp account | 
 **pool_name** | **str**| The name of the capacity pool | 
 **api_version** | **str**| Version of the API to be used with the client request. | [default to &#39;2017-08-15&#39;]
 **body** | [**CapacityPoolPatch**](CapacityPoolPatch.md)| Capacity pool object supplied in the body of the operation. | 

### Return type

[**CapacityPool**](CapacityPool.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

