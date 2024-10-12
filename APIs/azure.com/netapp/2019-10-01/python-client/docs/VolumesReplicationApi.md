# openapi_client.VolumesReplicationApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**volumes_authorize_replication**](VolumesReplicationApi.md#volumes_authorize_replication) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/authorizeReplication | Authorize source volume replication
[**volumes_break_replication**](VolumesReplicationApi.md#volumes_break_replication) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/breakReplication | Break volume replication
[**volumes_delete_replication**](VolumesReplicationApi.md#volumes_delete_replication) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/deleteReplication | Delete volume replication
[**volumes_replication_status**](VolumesReplicationApi.md#volumes_replication_status) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/replicationStatus | Get volume replication status
[**volumes_resync_replication**](VolumesReplicationApi.md#volumes_resync_replication) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/resyncReplication | Resync volume replication


# **volumes_authorize_replication**
> volumes_authorize_replication(subscription_id, resource_group_name, account_name, pool_name, volume_name, api_version, body)

Authorize source volume replication

Authorize the replication connection on the source volume

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.authorize_request import AuthorizeRequest
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
    api_instance = openapi_client.VolumesReplicationApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    account_name = 'account_name_example' # str | The name of the NetApp account
    pool_name = 'pool_name_example' # str | The name of the capacity pool
    volume_name = 'volume_name_example' # str | The name of the volume
    api_version = '2019-10-01' # str | Version of the API to be used with the client request. (default to '2019-10-01')
    body = openapi_client.AuthorizeRequest() # AuthorizeRequest | authorize request object supplied in the body of the operation.

    try:
        # Authorize source volume replication
        api_instance.volumes_authorize_replication(subscription_id, resource_group_name, account_name, pool_name, volume_name, api_version, body)
    except Exception as e:
        print("Exception when calling VolumesReplicationApi->volumes_authorize_replication: %s\n" % e)
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
 **body** | [**AuthorizeRequest**](AuthorizeRequest.md)| authorize request object supplied in the body of the operation. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Accepted |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **volumes_break_replication**
> volumes_break_replication(subscription_id, resource_group_name, account_name, pool_name, volume_name, api_version)

Break volume replication

Break the replication connection on the destination volume

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
    api_instance = openapi_client.VolumesReplicationApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    account_name = 'account_name_example' # str | The name of the NetApp account
    pool_name = 'pool_name_example' # str | The name of the capacity pool
    volume_name = 'volume_name_example' # str | The name of the volume
    api_version = '2019-10-01' # str | Version of the API to be used with the client request. (default to '2019-10-01')

    try:
        # Break volume replication
        api_instance.volumes_break_replication(subscription_id, resource_group_name, account_name, pool_name, volume_name, api_version)
    except Exception as e:
        print("Exception when calling VolumesReplicationApi->volumes_break_replication: %s\n" % e)
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

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Accepted |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **volumes_delete_replication**
> volumes_delete_replication(subscription_id, resource_group_name, account_name, pool_name, volume_name, api_version)

Delete volume replication

Delete the replication connection on the destination volume, and send release to the source replication

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
    api_instance = openapi_client.VolumesReplicationApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    account_name = 'account_name_example' # str | The name of the NetApp account
    pool_name = 'pool_name_example' # str | The name of the capacity pool
    volume_name = 'volume_name_example' # str | The name of the volume
    api_version = '2019-10-01' # str | Version of the API to be used with the client request. (default to '2019-10-01')

    try:
        # Delete volume replication
        api_instance.volumes_delete_replication(subscription_id, resource_group_name, account_name, pool_name, volume_name, api_version)
    except Exception as e:
        print("Exception when calling VolumesReplicationApi->volumes_delete_replication: %s\n" % e)
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

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Accepted |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **volumes_replication_status**
> ReplicationStatus volumes_replication_status(subscription_id, resource_group_name, account_name, pool_name, volume_name, api_version)

Get volume replication status

Get the status of the replication

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.replication_status import ReplicationStatus
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
    api_instance = openapi_client.VolumesReplicationApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    account_name = 'account_name_example' # str | The name of the NetApp account
    pool_name = 'pool_name_example' # str | The name of the capacity pool
    volume_name = 'volume_name_example' # str | The name of the volume
    api_version = '2019-10-01' # str | Version of the API to be used with the client request. (default to '2019-10-01')

    try:
        # Get volume replication status
        api_response = api_instance.volumes_replication_status(subscription_id, resource_group_name, account_name, pool_name, volume_name, api_version)
        print("The response of VolumesReplicationApi->volumes_replication_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VolumesReplicationApi->volumes_replication_status: %s\n" % e)
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

[**ReplicationStatus**](ReplicationStatus.md)

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

# **volumes_resync_replication**
> volumes_resync_replication(subscription_id, resource_group_name, account_name, pool_name, volume_name, api_version)

Resync volume replication

Resync the connection on the destination volume. If the operation is ran on the source volume it will reverse-resync the connection and sync from source to destination.

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
    api_instance = openapi_client.VolumesReplicationApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    account_name = 'account_name_example' # str | The name of the NetApp account
    pool_name = 'pool_name_example' # str | The name of the capacity pool
    volume_name = 'volume_name_example' # str | The name of the volume
    api_version = '2019-10-01' # str | Version of the API to be used with the client request. (default to '2019-10-01')

    try:
        # Resync volume replication
        api_instance.volumes_resync_replication(subscription_id, resource_group_name, account_name, pool_name, volume_name, api_version)
    except Exception as e:
        print("Exception when calling VolumesReplicationApi->volumes_resync_replication: %s\n" % e)
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

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Accepted |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

