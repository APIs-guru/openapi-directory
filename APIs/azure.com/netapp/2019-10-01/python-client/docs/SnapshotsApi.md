# openapi_client.SnapshotsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**snapshots_create**](SnapshotsApi.md#snapshots_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/snapshots/{snapshotName} | Create a snapshot
[**snapshots_delete**](SnapshotsApi.md#snapshots_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/snapshots/{snapshotName} | Delete a snapshot
[**snapshots_get**](SnapshotsApi.md#snapshots_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/snapshots/{snapshotName} | Describe a snapshot
[**snapshots_list**](SnapshotsApi.md#snapshots_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/snapshots | Describe all snapshots
[**snapshots_update**](SnapshotsApi.md#snapshots_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/snapshots/{snapshotName} | Update a snapshot


# **snapshots_create**
> Snapshot snapshots_create(subscription_id, resource_group_name, account_name, pool_name, volume_name, snapshot_name, api_version, body)

Create a snapshot

Create the specified snapshot within the given volume

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.snapshot import Snapshot
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
    api_instance = openapi_client.SnapshotsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    account_name = 'account_name_example' # str | The name of the NetApp account
    pool_name = 'pool_name_example' # str | The name of the capacity pool
    volume_name = 'volume_name_example' # str | The name of the volume
    snapshot_name = 'snapshot_name_example' # str | The name of the mount target
    api_version = '2019-10-01' # str | Version of the API to be used with the client request. (default to '2019-10-01')
    body = openapi_client.Snapshot() # Snapshot | Snapshot object supplied in the body of the operation.

    try:
        # Create a snapshot
        api_response = api_instance.snapshots_create(subscription_id, resource_group_name, account_name, pool_name, volume_name, snapshot_name, api_version, body)
        print("The response of SnapshotsApi->snapshots_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SnapshotsApi->snapshots_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **account_name** | **str**| The name of the NetApp account | 
 **pool_name** | **str**| The name of the capacity pool | 
 **volume_name** | **str**| The name of the volume | 
 **snapshot_name** | **str**| The name of the mount target | 
 **api_version** | **str**| Version of the API to be used with the client request. | [default to &#39;2019-10-01&#39;]
 **body** | [**Snapshot**](Snapshot.md)| Snapshot object supplied in the body of the operation. | 

### Return type

[**Snapshot**](Snapshot.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Snapshot created |  -  |
**202** | Accepted -- Create request accepted; operation will complete asynchronously |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **snapshots_delete**
> snapshots_delete(subscription_id, resource_group_name, account_name, pool_name, volume_name, snapshot_name, api_version)

Delete a snapshot

Delete snapshot

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
    api_instance = openapi_client.SnapshotsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    account_name = 'account_name_example' # str | The name of the NetApp account
    pool_name = 'pool_name_example' # str | The name of the capacity pool
    volume_name = 'volume_name_example' # str | The name of the volume
    snapshot_name = 'snapshot_name_example' # str | The name of the mount target
    api_version = '2019-10-01' # str | Version of the API to be used with the client request. (default to '2019-10-01')

    try:
        # Delete a snapshot
        api_instance.snapshots_delete(subscription_id, resource_group_name, account_name, pool_name, volume_name, snapshot_name, api_version)
    except Exception as e:
        print("Exception when calling SnapshotsApi->snapshots_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **account_name** | **str**| The name of the NetApp account | 
 **pool_name** | **str**| The name of the capacity pool | 
 **volume_name** | **str**| The name of the volume | 
 **snapshot_name** | **str**| The name of the mount target | 
 **api_version** | **str**| Version of the API to be used with the client request. | [default to &#39;2019-10-01&#39;]

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
**200** | OK |  -  |
**202** | Accepted -- Create, update or delete request accepted; operation will complete asynchronously |  -  |
**204** | NoContent -- Resource does not exist. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **snapshots_get**
> Snapshot snapshots_get(subscription_id, resource_group_name, account_name, pool_name, volume_name, snapshot_name, api_version)

Describe a snapshot

Get details of the specified snapshot

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.snapshot import Snapshot
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
    api_instance = openapi_client.SnapshotsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    account_name = 'account_name_example' # str | The name of the NetApp account
    pool_name = 'pool_name_example' # str | The name of the capacity pool
    volume_name = 'volume_name_example' # str | The name of the volume
    snapshot_name = 'snapshot_name_example' # str | The name of the mount target
    api_version = '2019-10-01' # str | Version of the API to be used with the client request. (default to '2019-10-01')

    try:
        # Describe a snapshot
        api_response = api_instance.snapshots_get(subscription_id, resource_group_name, account_name, pool_name, volume_name, snapshot_name, api_version)
        print("The response of SnapshotsApi->snapshots_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SnapshotsApi->snapshots_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **account_name** | **str**| The name of the NetApp account | 
 **pool_name** | **str**| The name of the capacity pool | 
 **volume_name** | **str**| The name of the volume | 
 **snapshot_name** | **str**| The name of the mount target | 
 **api_version** | **str**| Version of the API to be used with the client request. | [default to &#39;2019-10-01&#39;]

### Return type

[**Snapshot**](Snapshot.md)

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

# **snapshots_list**
> SnapshotsList snapshots_list(subscription_id, resource_group_name, account_name, pool_name, volume_name, api_version)

Describe all snapshots

List all snapshots associated with the volume

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.snapshots_list import SnapshotsList
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
    api_instance = openapi_client.SnapshotsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    account_name = 'account_name_example' # str | The name of the NetApp account
    pool_name = 'pool_name_example' # str | The name of the capacity pool
    volume_name = 'volume_name_example' # str | The name of the volume
    api_version = '2019-10-01' # str | Version of the API to be used with the client request. (default to '2019-10-01')

    try:
        # Describe all snapshots
        api_response = api_instance.snapshots_list(subscription_id, resource_group_name, account_name, pool_name, volume_name, api_version)
        print("The response of SnapshotsApi->snapshots_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SnapshotsApi->snapshots_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **account_name** | **str**| The name of the NetApp account | 
 **pool_name** | **str**| The name of the capacity pool | 
 **volume_name** | **str**| The name of the volume | 
 **api_version** | **str**| Version of the API to be used with the client request. | [default to &#39;2019-10-01&#39;]

### Return type

[**SnapshotsList**](SnapshotsList.md)

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

# **snapshots_update**
> Snapshot snapshots_update(subscription_id, resource_group_name, account_name, pool_name, volume_name, snapshot_name, api_version, body)

Update a snapshot

Patch a snapshot

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.snapshot import Snapshot
from openapi_client.models.snapshot_patch import SnapshotPatch
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
    api_instance = openapi_client.SnapshotsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    account_name = 'account_name_example' # str | The name of the NetApp account
    pool_name = 'pool_name_example' # str | The name of the capacity pool
    volume_name = 'volume_name_example' # str | The name of the volume
    snapshot_name = 'snapshot_name_example' # str | The name of the mount target
    api_version = '2019-10-01' # str | Version of the API to be used with the client request. (default to '2019-10-01')
    body = openapi_client.SnapshotPatch() # SnapshotPatch | Snapshot object supplied in the body of the operation.

    try:
        # Update a snapshot
        api_response = api_instance.snapshots_update(subscription_id, resource_group_name, account_name, pool_name, volume_name, snapshot_name, api_version, body)
        print("The response of SnapshotsApi->snapshots_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SnapshotsApi->snapshots_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **account_name** | **str**| The name of the NetApp account | 
 **pool_name** | **str**| The name of the capacity pool | 
 **volume_name** | **str**| The name of the volume | 
 **snapshot_name** | **str**| The name of the mount target | 
 **api_version** | **str**| Version of the API to be used with the client request. | [default to &#39;2019-10-01&#39;]
 **body** | [**SnapshotPatch**](SnapshotPatch.md)| Snapshot object supplied in the body of the operation. | 

### Return type

[**Snapshot**](Snapshot.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted -- Update request accepted; operation will complete asynchronously |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

