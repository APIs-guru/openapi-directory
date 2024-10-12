# ApproveDeviceUserResponse

Response message for approving the device to access user data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_user** | [**DeviceUser**](DeviceUser.md) |  | [optional] 

## Example

```python
from openapi_client.models.approve_device_user_response import ApproveDeviceUserResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ApproveDeviceUserResponse from a JSON string
approve_device_user_response_instance = ApproveDeviceUserResponse.from_json(json)
# print the JSON string representation of the object
print(ApproveDeviceUserResponse.to_json())

# convert the object into a dict
approve_device_user_response_dict = approve_device_user_response_instance.to_dict()
# create an instance of ApproveDeviceUserResponse from a dict
approve_device_user_response_from_dict = ApproveDeviceUserResponse.from_dict(approve_device_user_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


