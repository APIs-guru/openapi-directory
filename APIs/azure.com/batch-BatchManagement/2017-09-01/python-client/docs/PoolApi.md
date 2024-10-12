# openapi_client.PoolApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**pool_create**](PoolApi.md#pool_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/pools/{poolName} | 
[**pool_delete**](PoolApi.md#pool_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/pools/{poolName} | 
[**pool_disable_auto_scale**](PoolApi.md#pool_disable_auto_scale) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/pools/{poolName}/disableAutoScale | 
[**pool_get**](PoolApi.md#pool_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/pools/{poolName} | 
[**pool_list_by_batch_account**](PoolApi.md#pool_list_by_batch_account) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/pools | 
[**pool_stop_resize**](PoolApi.md#pool_stop_resize) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/pools/{poolName}/stopResize | Stops an ongoing resize operation on the pool.
[**pool_update**](PoolApi.md#pool_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/pools/{poolName} | 


# **pool_create**
> Pool pool_create(resource_group_name, account_name, pool_name, api_version, subscription_id, parameters, if_match=if_match, if_none_match=if_none_match)



Creates a new pool inside the specified account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.pool import Pool
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
    api_instance = openapi_client.PoolApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the Batch account.
    account_name = 'account_name_example' # str | The name of the Batch account.
    pool_name = 'pool_name_example' # str | The pool name. This must be unique within the account.
    api_version = 'api_version_example' # str | The API version to be used with the HTTP request.
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
    parameters = openapi_client.Pool() # Pool | Additional parameters for pool creation.
    if_match = 'if_match_example' # str | The entity state (ETag) version of the pool to update. A value of \"*\" can be used to apply the operation only if the pool already exists. If omitted, this operation will always be applied. (optional)
    if_none_match = 'if_none_match_example' # str | Set to '*' to allow a new pool to be created, but to prevent updating an existing pool. Other values will be ignored. (optional)

    try:
        api_response = api_instance.pool_create(resource_group_name, account_name, pool_name, api_version, subscription_id, parameters, if_match=if_match, if_none_match=if_none_match)
        print("The response of PoolApi->pool_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PoolApi->pool_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the Batch account. | 
 **account_name** | **str**| The name of the Batch account. | 
 **pool_name** | **str**| The pool name. This must be unique within the account. | 
 **api_version** | **str**| The API version to be used with the HTTP request. | 
 **subscription_id** | **str**| The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000) | 
 **parameters** | [**Pool**](Pool.md)| Additional parameters for pool creation. | 
 **if_match** | **str**| The entity state (ETag) version of the pool to update. A value of \&quot;*\&quot; can be used to apply the operation only if the pool already exists. If omitted, this operation will always be applied. | [optional] 
 **if_none_match** | **str**| Set to &#39;*&#39; to allow a new pool to be created, but to prevent updating an existing pool. Other values will be ignored. | [optional] 

### Return type

[**Pool**](Pool.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation was successful. The response contains the pool entity. |  * ETag - The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Match or If-None-Match headers. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pool_delete**
> pool_delete(resource_group_name, account_name, pool_name, api_version, subscription_id)



Deletes the specified pool.

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
    api_instance = openapi_client.PoolApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the Batch account.
    account_name = 'account_name_example' # str | The name of the Batch account.
    pool_name = 'pool_name_example' # str | The pool name. This must be unique within the account.
    api_version = 'api_version_example' # str | The API version to be used with the HTTP request.
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)

    try:
        api_instance.pool_delete(resource_group_name, account_name, pool_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling PoolApi->pool_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the Batch account. | 
 **account_name** | **str**| The name of the Batch account. | 
 **pool_name** | **str**| The pool name. This must be unique within the account. | 
 **api_version** | **str**| The API version to be used with the HTTP request. | 
 **subscription_id** | **str**| The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000) | 

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
**200** | The operation was successful. |  -  |
**202** | The operation will be completed asynchronously. |  * Retry-After - Suggested delay to check the status of the asynchronous operation. The value is an integer that represents the seconds. <br>  * Location - The URL of the resource used to check the status of the asynchronous operation. <br>  |
**204** | The operation was successful. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pool_disable_auto_scale**
> Pool pool_disable_auto_scale(resource_group_name, account_name, pool_name, api_version, subscription_id)



Disables automatic scaling for a pool.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.pool import Pool
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
    api_instance = openapi_client.PoolApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the Batch account.
    account_name = 'account_name_example' # str | The name of the Batch account.
    pool_name = 'pool_name_example' # str | The pool name. This must be unique within the account.
    api_version = 'api_version_example' # str | The API version to be used with the HTTP request.
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)

    try:
        api_response = api_instance.pool_disable_auto_scale(resource_group_name, account_name, pool_name, api_version, subscription_id)
        print("The response of PoolApi->pool_disable_auto_scale:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PoolApi->pool_disable_auto_scale: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the Batch account. | 
 **account_name** | **str**| The name of the Batch account. | 
 **pool_name** | **str**| The pool name. This must be unique within the account. | 
 **api_version** | **str**| The API version to be used with the HTTP request. | 
 **subscription_id** | **str**| The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000) | 

### Return type

[**Pool**](Pool.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation was successful. The response contains the pool entity. |  * ETag - The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Match or If-None-Match headers. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pool_get**
> Pool pool_get(resource_group_name, account_name, pool_name, api_version, subscription_id)



Gets information about the specified pool.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.pool import Pool
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
    api_instance = openapi_client.PoolApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the Batch account.
    account_name = 'account_name_example' # str | The name of the Batch account.
    pool_name = 'pool_name_example' # str | The pool name. This must be unique within the account.
    api_version = 'api_version_example' # str | The API version to be used with the HTTP request.
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)

    try:
        api_response = api_instance.pool_get(resource_group_name, account_name, pool_name, api_version, subscription_id)
        print("The response of PoolApi->pool_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PoolApi->pool_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the Batch account. | 
 **account_name** | **str**| The name of the Batch account. | 
 **pool_name** | **str**| The pool name. This must be unique within the account. | 
 **api_version** | **str**| The API version to be used with the HTTP request. | 
 **subscription_id** | **str**| The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000) | 

### Return type

[**Pool**](Pool.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation was successful. The response contains the pool entity. |  * ETag - The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Match or If-None-Match headers. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pool_list_by_batch_account**
> ListPoolsResult pool_list_by_batch_account(resource_group_name, account_name, api_version, subscription_id, maxresults=maxresults, select=select, filter=filter)



Lists all of the pools in the specified account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.list_pools_result import ListPoolsResult
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
    api_instance = openapi_client.PoolApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the Batch account.
    account_name = 'account_name_example' # str | The name of the Batch account.
    api_version = 'api_version_example' # str | The API version to be used with the HTTP request.
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
    maxresults = 56 # int | The maximum number of items to return in the response. (optional)
    select = 'select_example' # str | Comma separated list of properties that should be returned. e.g. \"properties/provisioningState\". Only top level properties under properties/ are valid for selection. (optional)
    filter = 'filter_example' # str | OData filter expression. Valid properties for filtering are:   name  properties/allocationState  properties/allocationStateTransitionTime  properties/creationTime  properties/provisioningState  properties/provisioningStateTransitionTime  properties/lastModified  properties/vmSize  properties/interNodeCommunication  properties/scaleSettings/autoScale  properties/scaleSettings/fixedScale (optional)

    try:
        api_response = api_instance.pool_list_by_batch_account(resource_group_name, account_name, api_version, subscription_id, maxresults=maxresults, select=select, filter=filter)
        print("The response of PoolApi->pool_list_by_batch_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PoolApi->pool_list_by_batch_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the Batch account. | 
 **account_name** | **str**| The name of the Batch account. | 
 **api_version** | **str**| The API version to be used with the HTTP request. | 
 **subscription_id** | **str**| The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000) | 
 **maxresults** | **int**| The maximum number of items to return in the response. | [optional] 
 **select** | **str**| Comma separated list of properties that should be returned. e.g. \&quot;properties/provisioningState\&quot;. Only top level properties under properties/ are valid for selection. | [optional] 
 **filter** | **str**| OData filter expression. Valid properties for filtering are:   name  properties/allocationState  properties/allocationStateTransitionTime  properties/creationTime  properties/provisioningState  properties/provisioningStateTransitionTime  properties/lastModified  properties/vmSize  properties/interNodeCommunication  properties/scaleSettings/autoScale  properties/scaleSettings/fixedScale | [optional] 

### Return type

[**ListPoolsResult**](ListPoolsResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation was successful. The response contains a list of certificates associated with the account. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pool_stop_resize**
> Pool pool_stop_resize(resource_group_name, account_name, pool_name, api_version, subscription_id)

Stops an ongoing resize operation on the pool.

This does not restore the pool to its previous state before the resize operation: it only stops any further changes being made, and the pool maintains its current state. After stopping, the pool stabilizes at the number of nodes it was at when the stop operation was done. During the stop operation, the pool allocation state changes first to stopping and then to steady. A resize operation need not be an explicit resize pool request; this API can also be used to halt the initial sizing of the pool when it is created.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.pool import Pool
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
    api_instance = openapi_client.PoolApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the Batch account.
    account_name = 'account_name_example' # str | The name of the Batch account.
    pool_name = 'pool_name_example' # str | The pool name. This must be unique within the account.
    api_version = 'api_version_example' # str | The API version to be used with the HTTP request.
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)

    try:
        # Stops an ongoing resize operation on the pool.
        api_response = api_instance.pool_stop_resize(resource_group_name, account_name, pool_name, api_version, subscription_id)
        print("The response of PoolApi->pool_stop_resize:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PoolApi->pool_stop_resize: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the Batch account. | 
 **account_name** | **str**| The name of the Batch account. | 
 **pool_name** | **str**| The pool name. This must be unique within the account. | 
 **api_version** | **str**| The API version to be used with the HTTP request. | 
 **subscription_id** | **str**| The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000) | 

### Return type

[**Pool**](Pool.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation was successful. The response contains the pool entity. |  * ETag - The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Match or If-None-Match headers. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pool_update**
> Pool pool_update(resource_group_name, account_name, pool_name, api_version, subscription_id, parameters, if_match=if_match)



Updates the properties of an existing pool.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.pool import Pool
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
    api_instance = openapi_client.PoolApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the Batch account.
    account_name = 'account_name_example' # str | The name of the Batch account.
    pool_name = 'pool_name_example' # str | The pool name. This must be unique within the account.
    api_version = 'api_version_example' # str | The API version to be used with the HTTP request.
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
    parameters = openapi_client.Pool() # Pool | Pool properties that should be updated. Properties that are supplied will be updated, any property not supplied will be unchanged.
    if_match = 'if_match_example' # str | The entity state (ETag) version of the pool to update. This value can be omitted or set to \"*\" to apply the operation unconditionally. (optional)

    try:
        api_response = api_instance.pool_update(resource_group_name, account_name, pool_name, api_version, subscription_id, parameters, if_match=if_match)
        print("The response of PoolApi->pool_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PoolApi->pool_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the Batch account. | 
 **account_name** | **str**| The name of the Batch account. | 
 **pool_name** | **str**| The pool name. This must be unique within the account. | 
 **api_version** | **str**| The API version to be used with the HTTP request. | 
 **subscription_id** | **str**| The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000) | 
 **parameters** | [**Pool**](Pool.md)| Pool properties that should be updated. Properties that are supplied will be updated, any property not supplied will be unchanged. | 
 **if_match** | **str**| The entity state (ETag) version of the pool to update. This value can be omitted or set to \&quot;*\&quot; to apply the operation unconditionally. | [optional] 

### Return type

[**Pool**](Pool.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation was successful. The response contains the pool entity. |  * ETag - The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Match or If-None-Match headers. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

