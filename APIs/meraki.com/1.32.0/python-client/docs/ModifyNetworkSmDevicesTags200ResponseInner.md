# ModifyNetworkSmDevicesTags200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The Meraki Id of the device record. | [optional] 
**serial** | **str** | The device serial. | [optional] 
**tags** | **List[str]** | An array of tags associated with the device. | [optional] 
**wifi_mac** | **str** | The MAC of the device. | [optional] 

## Example

```python
from openapi_client.models.modify_network_sm_devices_tags200_response_inner import ModifyNetworkSmDevicesTags200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of ModifyNetworkSmDevicesTags200ResponseInner from a JSON string
modify_network_sm_devices_tags200_response_inner_instance = ModifyNetworkSmDevicesTags200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(ModifyNetworkSmDevicesTags200ResponseInner.to_json())

# convert the object into a dict
modify_network_sm_devices_tags200_response_inner_dict = modify_network_sm_devices_tags200_response_inner_instance.to_dict()
# create an instance of ModifyNetworkSmDevicesTags200ResponseInner from a dict
modify_network_sm_devices_tags200_response_inner_from_dict = ModifyNetworkSmDevicesTags200ResponseInner.from_dict(modify_network_sm_devices_tags200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


