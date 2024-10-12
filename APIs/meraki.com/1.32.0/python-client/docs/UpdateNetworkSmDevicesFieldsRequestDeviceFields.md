# UpdateNetworkSmDevicesFieldsRequestDeviceFields

The new fields of the device. Each field of this object is optional.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | New name for the device | [optional] 
**notes** | **str** | New notes for the device | [optional] 

## Example

```python
from openapi_client.models.update_network_sm_devices_fields_request_device_fields import UpdateNetworkSmDevicesFieldsRequestDeviceFields

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkSmDevicesFieldsRequestDeviceFields from a JSON string
update_network_sm_devices_fields_request_device_fields_instance = UpdateNetworkSmDevicesFieldsRequestDeviceFields.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkSmDevicesFieldsRequestDeviceFields.to_json())

# convert the object into a dict
update_network_sm_devices_fields_request_device_fields_dict = update_network_sm_devices_fields_request_device_fields_instance.to_dict()
# create an instance of UpdateNetworkSmDevicesFieldsRequestDeviceFields from a dict
update_network_sm_devices_fields_request_device_fields_from_dict = UpdateNetworkSmDevicesFieldsRequestDeviceFields.from_dict(update_network_sm_devices_fields_request_device_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


