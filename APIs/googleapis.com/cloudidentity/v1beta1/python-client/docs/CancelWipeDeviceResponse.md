# CancelWipeDeviceResponse

Response message for cancelling an unfinished device wipe.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device** | [**Device**](Device.md) |  | [optional] 

## Example

```python
from openapi_client.models.cancel_wipe_device_response import CancelWipeDeviceResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CancelWipeDeviceResponse from a JSON string
cancel_wipe_device_response_instance = CancelWipeDeviceResponse.from_json(json)
# print the JSON string representation of the object
print(CancelWipeDeviceResponse.to_json())

# convert the object into a dict
cancel_wipe_device_response_dict = cancel_wipe_device_response_instance.to_dict()
# create an instance of CancelWipeDeviceResponse from a dict
cancel_wipe_device_response_from_dict = CancelWipeDeviceResponse.from_dict(cancel_wipe_device_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


