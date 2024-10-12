# Device

An Android or Chrome OS device registered for zero-touch enrollment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**claims** | [**List[DeviceClaim]**](DeviceClaim.md) | Output only. The provisioning claims for a device. Devices claimed for zero-touch enrollment have a claim with the type &#x60;SECTION_TYPE_ZERO_TOUCH&#x60;. Call &#x60;partners.devices.unclaim&#x60; or &#x60;partners.devices.unclaimAsync&#x60; to remove the device from zero-touch enrollment. | [optional] [readonly] 
**configuration** | **str** | Not available to resellers. | [optional] 
**device_id** | **str** | Output only. The ID of the device. Assigned by the server. | [optional] [readonly] 
**device_identifier** | [**DeviceIdentifier**](DeviceIdentifier.md) |  | [optional] 
**device_metadata** | [**DeviceMetadata**](DeviceMetadata.md) |  | [optional] 
**name** | **str** | Output only. The API resource name in the format &#x60;partners/[PARTNER_ID]/devices/[DEVICE_ID]&#x60;. Assigned by the server. | [optional] [readonly] 

## Example

```python
from openapi_client.models.device import Device

# TODO update the JSON string below
json = "{}"
# create an instance of Device from a JSON string
device_instance = Device.from_json(json)
# print the JSON string representation of the object
print(Device.to_json())

# convert the object into a dict
device_dict = device_instance.to_dict()
# create an instance of Device from a dict
device_from_dict = Device.from_dict(device_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


