# openapi_client.RelationshipsApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_device_sensor_relationships_1**](RelationshipsApi.md#get_device_sensor_relationships_1) | **GET** /devices/{serial}/sensor/relationships | List the sensor roles for a given sensor or camera device.
[**get_network_sensor_relationships_1**](RelationshipsApi.md#get_network_sensor_relationships_1) | **GET** /networks/{networkId}/sensor/relationships | List the sensor roles for devices in a given network
[**update_device_sensor_relationships_1**](RelationshipsApi.md#update_device_sensor_relationships_1) | **PUT** /devices/{serial}/sensor/relationships | Assign one or more sensor roles to a given sensor or camera device.


# **get_device_sensor_relationships_1**
> List[GetDeviceSensorRelationships200ResponseInner] get_device_sensor_relationships_1(serial)

List the sensor roles for a given sensor or camera device.

List the sensor roles for a given sensor or camera device.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_device_sensor_relationships200_response_inner import GetDeviceSensorRelationships200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RelationshipsApi(api_client)
    serial = 'serial_example' # str | 

    try:
        # List the sensor roles for a given sensor or camera device.
        api_response = api_instance.get_device_sensor_relationships_1(serial)
        print("The response of RelationshipsApi->get_device_sensor_relationships_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RelationshipsApi->get_device_sensor_relationships_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 

### Return type

[**List[GetDeviceSensorRelationships200ResponseInner]**](GetDeviceSensorRelationships200ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_network_sensor_relationships_1**
> List[GetNetworkSensorRelationships200ResponseInner] get_network_sensor_relationships_1(network_id)

List the sensor roles for devices in a given network

List the sensor roles for devices in a given network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_sensor_relationships200_response_inner import GetNetworkSensorRelationships200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RelationshipsApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List the sensor roles for devices in a given network
        api_response = api_instance.get_network_sensor_relationships_1(network_id)
        print("The response of RelationshipsApi->get_network_sensor_relationships_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RelationshipsApi->get_network_sensor_relationships_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

[**List[GetNetworkSensorRelationships200ResponseInner]**](GetNetworkSensorRelationships200ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_device_sensor_relationships_1**
> GetDeviceSensorRelationships200ResponseInner update_device_sensor_relationships_1(serial, update_device_sensor_relationships_request=update_device_sensor_relationships_request)

Assign one or more sensor roles to a given sensor or camera device.

Assign one or more sensor roles to a given sensor or camera device.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_device_sensor_relationships200_response_inner import GetDeviceSensorRelationships200ResponseInner
from openapi_client.models.update_device_sensor_relationships_request import UpdateDeviceSensorRelationshipsRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RelationshipsApi(api_client)
    serial = 'serial_example' # str | 
    update_device_sensor_relationships_request = openapi_client.UpdateDeviceSensorRelationshipsRequest() # UpdateDeviceSensorRelationshipsRequest |  (optional)

    try:
        # Assign one or more sensor roles to a given sensor or camera device.
        api_response = api_instance.update_device_sensor_relationships_1(serial, update_device_sensor_relationships_request=update_device_sensor_relationships_request)
        print("The response of RelationshipsApi->update_device_sensor_relationships_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RelationshipsApi->update_device_sensor_relationships_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **update_device_sensor_relationships_request** | [**UpdateDeviceSensorRelationshipsRequest**](UpdateDeviceSensorRelationshipsRequest.md)|  | [optional] 

### Return type

[**GetDeviceSensorRelationships200ResponseInner**](GetDeviceSensorRelationships200ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

