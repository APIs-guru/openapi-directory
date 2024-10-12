# BlockDeviceUserResponse

Response message for blocking the device from accessing user data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_user** | [**DeviceUser**](DeviceUser.md) |  | [optional] 

## Example

```python
from openapi_client.models.block_device_user_response import BlockDeviceUserResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BlockDeviceUserResponse from a JSON string
block_device_user_response_instance = BlockDeviceUserResponse.from_json(json)
# print the JSON string representation of the object
print(BlockDeviceUserResponse.to_json())

# convert the object into a dict
block_device_user_response_dict = block_device_user_response_instance.to_dict()
# create an instance of BlockDeviceUserResponse from a dict
block_device_user_response_from_dict = BlockDeviceUserResponse.from_dict(block_device_user_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


