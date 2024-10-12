# NewDeviceEvent

An event generated when a new device is ready to be managed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_id** | **str** | The Android ID of the device. This field will always be present. | [optional] 
**dpc_package_name** | **str** | Policy app on the device. | [optional] 
**management_type** | **str** | Identifies the extent to which the device is controlled by an Android EMM in various deployment configurations. Possible values include: - \&quot;managedDevice\&quot;, a device where the DPC is set as device owner, - \&quot;managedProfile\&quot;, a device where the DPC is set as profile owner.  | [optional] 
**user_id** | **str** | The ID of the user. This field will always be present. | [optional] 

## Example

```python
from openapi_client.models.new_device_event import NewDeviceEvent

# TODO update the JSON string below
json = "{}"
# create an instance of NewDeviceEvent from a JSON string
new_device_event_instance = NewDeviceEvent.from_json(json)
# print the JSON string representation of the object
print(NewDeviceEvent.to_json())

# convert the object into a dict
new_device_event_dict = new_device_event_instance.to_dict()
# create an instance of NewDeviceEvent from a dict
new_device_event_from_dict = NewDeviceEvent.from_dict(new_device_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


