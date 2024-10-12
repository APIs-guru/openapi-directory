# WipeDeviceResponse

Response message for wiping all data on the device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device** | [**Device**](Device.md) |  | [optional] 

## Example

```python
from openapi_client.models.wipe_device_response import WipeDeviceResponse

# TODO update the JSON string below
json = "{}"
# create an instance of WipeDeviceResponse from a JSON string
wipe_device_response_instance = WipeDeviceResponse.from_json(json)
# print the JSON string representation of the object
print(WipeDeviceResponse.to_json())

# convert the object into a dict
wipe_device_response_dict = wipe_device_response_instance.to_dict()
# create an instance of WipeDeviceResponse from a dict
wipe_device_response_from_dict = WipeDeviceResponse.from_dict(wipe_device_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


