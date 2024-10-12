# UpdateNetworkSmDevicesFields200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The Meraki Id of the device record. | [optional] 
**name** | **str** | The name of the device. | [optional] 
**notes** | **str** | Notes associated with the device. | [optional] 
**serial** | **str** | The device serial. | [optional] 
**wifi_mac** | **str** | The MAC of the device. | [optional] 

## Example

```python
from openapi_client.models.update_network_sm_devices_fields200_response_inner import UpdateNetworkSmDevicesFields200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkSmDevicesFields200ResponseInner from a JSON string
update_network_sm_devices_fields200_response_inner_instance = UpdateNetworkSmDevicesFields200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkSmDevicesFields200ResponseInner.to_json())

# convert the object into a dict
update_network_sm_devices_fields200_response_inner_dict = update_network_sm_devices_fields200_response_inner_instance.to_dict()
# create an instance of UpdateNetworkSmDevicesFields200ResponseInner from a dict
update_network_sm_devices_fields200_response_inner_from_dict = UpdateNetworkSmDevicesFields200ResponseInner.from_dict(update_network_sm_devices_fields200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


