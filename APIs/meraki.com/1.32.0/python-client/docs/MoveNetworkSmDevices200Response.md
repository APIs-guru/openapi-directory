# MoveNetworkSmDevices200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ids** | **List[str]** | The Meraki Ids of the set of devices. | [optional] 
**new_network** | **str** | The network to which the devices was moved. | [optional] 

## Example

```python
from openapi_client.models.move_network_sm_devices200_response import MoveNetworkSmDevices200Response

# TODO update the JSON string below
json = "{}"
# create an instance of MoveNetworkSmDevices200Response from a JSON string
move_network_sm_devices200_response_instance = MoveNetworkSmDevices200Response.from_json(json)
# print the JSON string representation of the object
print(MoveNetworkSmDevices200Response.to_json())

# convert the object into a dict
move_network_sm_devices200_response_dict = move_network_sm_devices200_response_instance.to_dict()
# create an instance of MoveNetworkSmDevices200Response from a dict
move_network_sm_devices200_response_from_dict = MoveNetworkSmDevices200Response.from_dict(move_network_sm_devices200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


