# UpdateDeviceRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | The address of a device | [optional] 
**floor_plan_id** | **str** | The floor plan to associate to this device. null disassociates the device from the floorplan. | [optional] 
**lat** | **float** | The latitude of a device | [optional] 
**lng** | **float** | The longitude of a device | [optional] 
**move_map_marker** | **bool** | Whether or not to set the latitude and longitude of a device based on the new address. Only applies when lat and lng are not specified. | [optional] 
**name** | **str** | The name of a device | [optional] 
**notes** | **str** | The notes for the device. String. Limited to 255 characters. | [optional] 
**switch_profile_id** | **str** | The ID of a switch profile to bind to the device (for available switch profiles, see the &#39;Switch Profiles&#39; endpoint). Use null to unbind the switch device from the current profile. For a device to be bindable to a switch profile, it must (1) be a switch, and (2) belong to a network that is bound to a configuration template. | [optional] 
**tags** | **List[str]** | The list of tags of a device | [optional] 

## Example

```python
from openapi_client.models.update_device_request import UpdateDeviceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDeviceRequest from a JSON string
update_device_request_instance = UpdateDeviceRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateDeviceRequest.to_json())

# convert the object into a dict
update_device_request_dict = update_device_request_instance.to_dict()
# create an instance of UpdateDeviceRequest from a dict
update_device_request_from_dict = UpdateDeviceRequest.from_dict(update_device_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


