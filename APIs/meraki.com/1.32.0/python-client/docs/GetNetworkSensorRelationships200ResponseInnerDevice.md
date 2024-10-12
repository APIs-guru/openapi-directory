# GetNetworkSensorRelationships200ResponseInnerDevice

A sensor or gateway device in the network

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the device | [optional] 
**product_type** | **str** | The product type of the device | [optional] 
**serial** | **str** | The serial of the device | [optional] 

## Example

```python
from openapi_client.models.get_network_sensor_relationships200_response_inner_device import GetNetworkSensorRelationships200ResponseInnerDevice

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkSensorRelationships200ResponseInnerDevice from a JSON string
get_network_sensor_relationships200_response_inner_device_instance = GetNetworkSensorRelationships200ResponseInnerDevice.from_json(json)
# print the JSON string representation of the object
print(GetNetworkSensorRelationships200ResponseInnerDevice.to_json())

# convert the object into a dict
get_network_sensor_relationships200_response_inner_device_dict = get_network_sensor_relationships200_response_inner_device_instance.to_dict()
# create an instance of GetNetworkSensorRelationships200ResponseInnerDevice from a dict
get_network_sensor_relationships200_response_inner_device_from_dict = GetNetworkSensorRelationships200ResponseInnerDevice.from_dict(get_network_sensor_relationships200_response_inner_device_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


