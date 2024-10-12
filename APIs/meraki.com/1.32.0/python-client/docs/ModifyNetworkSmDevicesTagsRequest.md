# ModifyNetworkSmDevicesTagsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ids** | **List[str]** | The ids of the devices to be modified. | [optional] 
**scope** | **List[str]** | The scope (one of all, none, withAny, withAll, withoutAny, or withoutAll) and a set of tags of the devices to be modified. | [optional] 
**serials** | **List[str]** | The serials of the devices to be modified. | [optional] 
**tags** | **List[str]** | The tags to be added, deleted, or updated. | 
**update_action** | **str** | One of add, delete, or update. Only devices that have been modified will be returned. | 
**wifi_macs** | **List[str]** | The wifiMacs of the devices to be modified. | [optional] 

## Example

```python
from openapi_client.models.modify_network_sm_devices_tags_request import ModifyNetworkSmDevicesTagsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ModifyNetworkSmDevicesTagsRequest from a JSON string
modify_network_sm_devices_tags_request_instance = ModifyNetworkSmDevicesTagsRequest.from_json(json)
# print the JSON string representation of the object
print(ModifyNetworkSmDevicesTagsRequest.to_json())

# convert the object into a dict
modify_network_sm_devices_tags_request_dict = modify_network_sm_devices_tags_request_instance.to_dict()
# create an instance of ModifyNetworkSmDevicesTagsRequest from a dict
modify_network_sm_devices_tags_request_from_dict = ModifyNetworkSmDevicesTagsRequest.from_dict(modify_network_sm_devices_tags_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


