# AddUserDevicePayload

payload object for adding device to user

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**serial** | **str** | Device Serial | 
**timeout** | **int** | Device timeout in ms. If device is kept idle for this period, it will be automatically disconnected. Default is provider group timeout | [optional] 

## Example

```python
from openapi_client.models.add_user_device_payload import AddUserDevicePayload

# TODO update the JSON string below
json = "{}"
# create an instance of AddUserDevicePayload from a JSON string
add_user_device_payload_instance = AddUserDevicePayload.from_json(json)
# print the JSON string representation of the object
print(AddUserDevicePayload.to_json())

# convert the object into a dict
add_user_device_payload_dict = add_user_device_payload_instance.to_dict()
# create an instance of AddUserDevicePayload from a dict
add_user_device_payload_from_dict = AddUserDevicePayload.from_dict(add_user_device_payload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


