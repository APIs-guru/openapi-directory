# openapi_client.VolumesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**volumes_create_or_update**](VolumesApi.md#volumes_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName} | 
[**volumes_delete**](VolumesApi.md#volumes_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName} | 
[**volumes_get**](VolumesApi.md#volumes_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName} | 
[**volumes_list**](VolumesApi.md#volumes_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes | 
[**volumes_update**](VolumesApi.md#volumes_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName} | 


# **volumes_create_or_update**
> Volume volumes_create_or_update(subscription_id, resource_group_name, account_name, pool_name, volume_name, api_version, body)



Create or update a volume

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.volume import Volume
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
    api_instance = openapi_client.VolumesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    account_name = 'account_name_example' # str | The name of the NetApp account
    pool_name = 'pool_name_example' # str | The name of the capacity pool
    volume_name = 'volume_name_example' # str | The name of the volume
    api_version = '2017-08-15' # str | Version of the API to be used with the client request. (default to '2017-08-15')
    body = openapi_client.Volume() # Volume | Volume object supplied in the body of the operation.

    try:
        api_response = api_instance.volumes_create_or_update(subscription_id, resource_group_name, account_name, pool_name, volume_name, api_version, body)
        print("The response of VolumesApi->volumes_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VolumesApi->volumes_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **account_name** | **str**| The name of the NetApp account | 
 **pool_name** | **str**| The name of the capacity pool | 
 **volume_name** | **str**| The name of the volume | 
 **api_version** | **str**| Version of the API to be used with the client request. | [default to &#39;2017-08-15&#39;]
 **body** | [**Volume**](Volume.md)| Volume object supplied in the body of the operation. | 

### Return type

[**Volume**](Volume.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok - volume updated |  -  |
**201** | Volume created |  -  |
**202** | Accepted -- Create request accepted; operation will complete asynchronously |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **volumes_delete**
> volumes_delete(subscription_id, resource_group_name, account_name, pool_name, volume_name, api_version)



Delete a volume

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
    api_instance = openapi_client.VolumesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    account_name = 'account_name_example' # str | The name of the NetApp account
    pool_name = 'pool_name_example' # str | The name of the capacity pool
    volume_name = 'volume_name_example' # str | The name of the volume
    api_version = '2017-08-15' # str | Version of the API to be used with the client request. (default to '2017-08-15')

    try:
        api_instance.volumes_delete(subscription_id, resource_group_name, account_name, pool_name, volume_name, api_version)
    except Exception as e:
        print("Exception when calling VolumesApi->volumes_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **account_name** | **str**| The name of the NetApp account | 
 **pool_name** | **str**| The name of the capacity pool | 
 **volume_name** | **str**| The name of the volume | 
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

# **volumes_get**
> Volume volumes_get(subscription_id, resource_group_name, account_name, pool_name, volume_name, api_version)



Get a volume

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.volume import Volume
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
    api_instance = openapi_client.VolumesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    account_name = 'account_name_example' # str | The name of the NetApp account
    pool_name = 'pool_name_example' # str | The name of the capacity pool
    volume_name = 'volume_name_example' # str | The name of the volume
    api_version = '2017-08-15' # str | Version of the API to be used with the client request. (default to '2017-08-15')

    try:
        api_response = api_instance.volumes_get(subscription_id, resource_group_name, account_name, pool_name, volume_name, api_version)
        print("The response of VolumesApi->volumes_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VolumesApi->volumes_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **account_name** | **str**| The name of the NetApp account | 
 **pool_name** | **str**| The name of the capacity pool | 
 **volume_name** | **str**| The name of the volume | 
 **api_version** | **str**| Version of the API to be used with the client request. | [default to &#39;2017-08-15&#39;]

### Return type

[**Volume**](Volume.md)

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

# **volumes_list**
> VolumeList volumes_list(subscription_id, resource_group_name, account_name, pool_name, api_version)



List volumes

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.volume_list import VolumeList
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
    api_instance = openapi_client.VolumesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    account_name = 'account_name_example' # str | The name of the NetApp account
    pool_name = 'pool_name_example' # str | The name of the capacity pool
    api_version = '2017-08-15' # str | Version of the API to be used with the client request. (default to '2017-08-15')

    try:
        api_response = api_instance.volumes_list(subscription_id, resource_group_name, account_name, pool_name, api_version)
        print("The response of VolumesApi->volumes_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VolumesApi->volumes_list: %s\n" % e)
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

[**VolumeList**](VolumeList.md)

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

# **volumes_update**
> Volume volumes_update(subscription_id, resource_group_name, account_name, pool_name, volume_name, api_version, body)



Patch a volume

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.volume import Volume
from openapi_client.models.volume_patch import VolumePatch
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
    api_instance = openapi_client.VolumesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    account_name = 'account_name_example' # str | The name of the NetApp account
    pool_name = 'pool_name_example' # str | The name of the capacity pool
    volume_name = 'volume_name_example' # str | The name of the volume
    api_version = '2017-08-15' # str | Version of the API to be used with the client request. (default to '2017-08-15')
    body = openapi_client.VolumePatch() # VolumePatch | Volume object supplied in the body of the operation.

    try:
        api_response = api_instance.volumes_update(subscription_id, resource_group_name, account_name, pool_name, volume_name, api_version, body)
        print("The response of VolumesApi->volumes_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VolumesApi->volumes_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **account_name** | **str**| The name of the NetApp account | 
 **pool_name** | **str**| The name of the capacity pool | 
 **volume_name** | **str**| The name of the volume | 
 **api_version** | **str**| Version of the API to be used with the client request. | [default to &#39;2017-08-15&#39;]
 **body** | [**VolumePatch**](VolumePatch.md)| Volume object supplied in the body of the operation. | 

### Return type

[**Volume**](Volume.md)

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

