# openapi_client.DrivesApi

All URIs are relative to *https://adminmanagement.local.azurestack.external*

Method | HTTP request | Description
------------- | ------------- | -------------
[**drives_get**](DrivesApi.md#drives_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric.Admin/fabricLocations/{location}/scaleUnits/{scaleUnit}/storageSubSystems/{storageSubSystem}/drives/{drive} | 
[**drives_list**](DrivesApi.md#drives_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric.Admin/fabricLocations/{location}/scaleUnits/{scaleUnit}/storageSubSystems/{storageSubSystem}/drives | 


# **drives_get**
> Drive drives_get(subscription_id, resource_group_name, location, scale_unit, storage_sub_system, drive, api_version)



Return the requested a storage drive.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.drive import Drive
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://adminmanagement.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://adminmanagement.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DrivesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group.
    location = 'location_example' # str | Location of the resource.
    scale_unit = 'scale_unit_example' # str | Name of the scale units.
    storage_sub_system = 'storage_sub_system_example' # str | Name of the storage system.
    drive = 'drive_example' # str | Name of the storage drive.
    api_version = '2018-10-01' # str | Client API Version. (default to '2018-10-01')

    try:
        api_response = api_instance.drives_get(subscription_id, resource_group_name, location, scale_unit, storage_sub_system, drive, api_version)
        print("The response of DrivesApi->drives_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DrivesApi->drives_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Name of the resource group. | 
 **location** | **str**| Location of the resource. | 
 **scale_unit** | **str**| Name of the scale units. | 
 **storage_sub_system** | **str**| Name of the storage system. | 
 **drive** | **str**| Name of the storage drive. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2018-10-01&#39;]

### Return type

[**Drive**](Drive.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | NOT FOUND |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **drives_list**
> DriveList drives_list(subscription_id, resource_group_name, location, scale_unit, storage_sub_system, api_version, filter=filter)



Returns a list of all storage drives at a location.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.drive_list import DriveList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://adminmanagement.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://adminmanagement.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DrivesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group.
    location = 'location_example' # str | Location of the resource.
    scale_unit = 'scale_unit_example' # str | Name of the scale units.
    storage_sub_system = 'storage_sub_system_example' # str | Name of the storage system.
    api_version = '2018-10-01' # str | Client API Version. (default to '2018-10-01')
    filter = 'filter_example' # str | OData filter parameter. (optional)

    try:
        api_response = api_instance.drives_list(subscription_id, resource_group_name, location, scale_unit, storage_sub_system, api_version, filter=filter)
        print("The response of DrivesApi->drives_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DrivesApi->drives_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Name of the resource group. | 
 **location** | **str**| Location of the resource. | 
 **scale_unit** | **str**| Name of the scale units. | 
 **storage_sub_system** | **str**| Name of the storage system. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2018-10-01&#39;]
 **filter** | **str**| OData filter parameter. | [optional] 

### Return type

[**DriveList**](DriveList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | NOT FOUND |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

