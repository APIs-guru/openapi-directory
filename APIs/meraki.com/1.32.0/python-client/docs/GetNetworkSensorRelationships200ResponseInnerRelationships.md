# GetNetworkSensorRelationships200ResponseInnerRelationships

An object describing the relationships defined between the device and other devices

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**livestream** | [**GetDeviceSensorRelationships200ResponseInnerLivestream**](GetDeviceSensorRelationships200ResponseInnerLivestream.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_network_sensor_relationships200_response_inner_relationships import GetNetworkSensorRelationships200ResponseInnerRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkSensorRelationships200ResponseInnerRelationships from a JSON string
get_network_sensor_relationships200_response_inner_relationships_instance = GetNetworkSensorRelationships200ResponseInnerRelationships.from_json(json)
# print the JSON string representation of the object
print(GetNetworkSensorRelationships200ResponseInnerRelationships.to_json())

# convert the object into a dict
get_network_sensor_relationships200_response_inner_relationships_dict = get_network_sensor_relationships200_response_inner_relationships_instance.to_dict()
# create an instance of GetNetworkSensorRelationships200ResponseInnerRelationships from a dict
get_network_sensor_relationships200_response_inner_relationships_from_dict = GetNetworkSensorRelationships200ResponseInnerRelationships.from_dict(get_network_sensor_relationships200_response_inner_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


