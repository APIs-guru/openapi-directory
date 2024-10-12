# openapi_client.SharesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**shares_create_or_update**](SharesApi.md#shares_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/shares/{name} | Creates a new share or updates an existing share on the device.
[**shares_delete**](SharesApi.md#shares_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/shares/{name} | 
[**shares_get**](SharesApi.md#shares_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/shares/{name} | Gets a share by name.
[**shares_list_by_data_box_edge_device**](SharesApi.md#shares_list_by_data_box_edge_device) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/shares | Lists all the shares in a data box edge/gateway device.
[**shares_refresh**](SharesApi.md#shares_refresh) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/shares/{name}/refresh | Refreshes the share metadata with the data from the cloud.


# **shares_create_or_update**
> Share shares_create_or_update(device_name, name, subscription_id, resource_group_name, api_version, share)

Creates a new share or updates an existing share on the device.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.share import Share
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
    api_instance = openapi_client.SharesApi(api_client)
    device_name = 'device_name_example' # str | The device name.
    name = 'name_example' # str | The share name.
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    api_version = 'api_version_example' # str | The API version.
    share = openapi_client.Share() # Share | The share properties.

    try:
        # Creates a new share or updates an existing share on the device.
        api_response = api_instance.shares_create_or_update(device_name, name, subscription_id, resource_group_name, api_version, share)
        print("The response of SharesApi->shares_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SharesApi->shares_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_name** | **str**| The device name. | 
 **name** | **str**| The share name. | 
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The resource group name. | 
 **api_version** | **str**| The API version. | 
 **share** | [**Share**](Share.md)| The share properties. | 

### Return type

[**Share**](Share.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully created or updated the share. |  -  |
**202** | Accepted the request to create or update the share. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **shares_delete**
> shares_delete(device_name, name, subscription_id, resource_group_name, api_version)



Deletes the share on the data box edge/gateway device.

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
    api_instance = openapi_client.SharesApi(api_client)
    device_name = 'device_name_example' # str | The device name.
    name = 'name_example' # str | The share name.
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_instance.shares_delete(device_name, name, subscription_id, resource_group_name, api_version)
    except Exception as e:
        print("Exception when calling SharesApi->shares_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_name** | **str**| The device name. | 
 **name** | **str**| The share name. | 
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The resource group name. | 
 **api_version** | **str**| The API version. | 

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
**200** | Successfully deleted the share. |  -  |
**202** | Accepted the request to delete the share. |  -  |
**204** | The share is already deleted. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **shares_get**
> Share shares_get(device_name, name, subscription_id, resource_group_name, api_version)

Gets a share by name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.share import Share
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
    api_instance = openapi_client.SharesApi(api_client)
    device_name = 'device_name_example' # str | The device name.
    name = 'name_example' # str | The share name.
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    api_version = 'api_version_example' # str | The API version.

    try:
        # Gets a share by name.
        api_response = api_instance.shares_get(device_name, name, subscription_id, resource_group_name, api_version)
        print("The response of SharesApi->shares_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SharesApi->shares_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_name** | **str**| The device name. | 
 **name** | **str**| The share name. | 
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The resource group name. | 
 **api_version** | **str**| The API version. | 

### Return type

[**Share**](Share.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The share details. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **shares_list_by_data_box_edge_device**
> ShareList shares_list_by_data_box_edge_device(device_name, subscription_id, resource_group_name, api_version)

Lists all the shares in a data box edge/gateway device.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.share_list import ShareList
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
    api_instance = openapi_client.SharesApi(api_client)
    device_name = 'device_name_example' # str | The device name.
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    api_version = 'api_version_example' # str | The API version.

    try:
        # Lists all the shares in a data box edge/gateway device.
        api_response = api_instance.shares_list_by_data_box_edge_device(device_name, subscription_id, resource_group_name, api_version)
        print("The response of SharesApi->shares_list_by_data_box_edge_device:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SharesApi->shares_list_by_data_box_edge_device: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_name** | **str**| The device name. | 
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The resource group name. | 
 **api_version** | **str**| The API version. | 

### Return type

[**ShareList**](ShareList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The collection of all the shares on the device. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **shares_refresh**
> shares_refresh(device_name, name, subscription_id, resource_group_name, api_version)

Refreshes the share metadata with the data from the cloud.

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
    api_instance = openapi_client.SharesApi(api_client)
    device_name = 'device_name_example' # str | The device name.
    name = 'name_example' # str | The share name.
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    api_version = 'api_version_example' # str | The API version.

    try:
        # Refreshes the share metadata with the data from the cloud.
        api_instance.shares_refresh(device_name, name, subscription_id, resource_group_name, api_version)
    except Exception as e:
        print("Exception when calling SharesApi->shares_refresh: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_name** | **str**| The device name. | 
 **name** | **str**| The share name. | 
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The resource group name. | 
 **api_version** | **str**| The API version. | 

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
**200** | Successfully refreshed the share on the device. |  -  |
**202** | Accepted the request to refresh the share on the device. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

