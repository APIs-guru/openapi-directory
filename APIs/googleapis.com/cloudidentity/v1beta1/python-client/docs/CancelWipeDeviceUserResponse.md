# CancelWipeDeviceUserResponse

Response message for cancelling an unfinished user account wipe.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_user** | [**DeviceUser**](DeviceUser.md) |  | [optional] 

## Example

```python
from openapi_client.models.cancel_wipe_device_user_response import CancelWipeDeviceUserResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CancelWipeDeviceUserResponse from a JSON string
cancel_wipe_device_user_response_instance = CancelWipeDeviceUserResponse.from_json(json)
# print the JSON string representation of the object
print(CancelWipeDeviceUserResponse.to_json())

# convert the object into a dict
cancel_wipe_device_user_response_dict = cancel_wipe_device_user_response_instance.to_dict()
# create an instance of CancelWipeDeviceUserResponse from a dict
cancel_wipe_device_user_response_from_dict = CancelWipeDeviceUserResponse.from_dict(cancel_wipe_device_user_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


