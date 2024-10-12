# openapi_client.AlertsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**alerts_get**](AlertsApi.md#alerts_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/alerts/{name} | Gets an alert by name.
[**alerts_list_by_data_box_edge_device**](AlertsApi.md#alerts_list_by_data_box_edge_device) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/alerts | 


# **alerts_get**
> Alert alerts_get(device_name, name, subscription_id, resource_group_name, api_version)

Gets an alert by name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.alert import Alert
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
    api_instance = openapi_client.AlertsApi(api_client)
    device_name = 'device_name_example' # str | The device name.
    name = 'name_example' # str | The alert name.
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    api_version = 'api_version_example' # str | The API version.

    try:
        # Gets an alert by name.
        api_response = api_instance.alerts_get(device_name, name, subscription_id, resource_group_name, api_version)
        print("The response of AlertsApi->alerts_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertsApi->alerts_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_name** | **str**| The device name. | 
 **name** | **str**| The alert name. | 
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The resource group name. | 
 **api_version** | **str**| The API version. | 

### Return type

[**Alert**](Alert.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The alert details. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **alerts_list_by_data_box_edge_device**
> AlertList alerts_list_by_data_box_edge_device(device_name, subscription_id, resource_group_name, api_version)



Gets all the alerts for a data box edge/gateway device.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.alert_list import AlertList
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
    api_instance = openapi_client.AlertsApi(api_client)
    device_name = 'device_name_example' # str | The device name.
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_response = api_instance.alerts_list_by_data_box_edge_device(device_name, subscription_id, resource_group_name, api_version)
        print("The response of AlertsApi->alerts_list_by_data_box_edge_device:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertsApi->alerts_list_by_data_box_edge_device: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_name** | **str**| The device name. | 
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The resource group name. | 
 **api_version** | **str**| The API version. | 

### Return type

[**AlertList**](AlertList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The collection of alerts. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

