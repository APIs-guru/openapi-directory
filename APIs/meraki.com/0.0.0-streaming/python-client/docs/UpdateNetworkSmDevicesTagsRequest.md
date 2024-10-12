# UpdateNetworkSmDevicesTagsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ids** | **str** | The ids of the devices to be modified. | [optional] 
**scope** | **str** | The scope (one of all, none, withAny, withAll, withoutAny, or withoutAll) and a set of tags of the devices to be modified. | [optional] 
**serials** | **str** | The serials of the devices to be modified. | [optional] 
**tags** | **str** | The tags to be added, deleted, or updated. | 
**update_action** | **str** | One of add, delete, or update. Only devices that have been modified will be returned. | 
**wifi_macs** | **str** | The wifiMacs of the devices to be modified. | [optional] 

## Example

```python
from openapi_client.models.update_network_sm_devices_tags_request import UpdateNetworkSmDevicesTagsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkSmDevicesTagsRequest from a JSON string
update_network_sm_devices_tags_request_instance = UpdateNetworkSmDevicesTagsRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkSmDevicesTagsRequest.to_json())

# convert the object into a dict
update_network_sm_devices_tags_request_dict = update_network_sm_devices_tags_request_instance.to_dict()
# create an instance of UpdateNetworkSmDevicesTagsRequest from a dict
update_network_sm_devices_tags_request_from_dict = UpdateNetworkSmDevicesTagsRequest.from_dict(update_network_sm_devices_tags_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


