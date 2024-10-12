# MemberDevicesInfoResponse

The information for a single distribution group member and their ios device

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avatar_url** | **str** | The avatar URL of the user | [optional] 
**can_change_password** | **bool** | User is required to send an old password in order to change the password. | [optional] 
**device_name** | **str** | The device description, in the format \&quot;iPhone 7 Plus (A1784)\&quot; | 
**display_name** | **str** | The full name of the user. Might for example be first and last name | [optional] 
**email** | **str** | The email address of the user | 
**full_device_name** | **str** | A combination of the device model name and the owner name. | [optional] 
**id** | **str** | The unique id (UUID) of the user | 
**imei** | **str** | The device&#39;s International Mobile Equipment Identity number. Always empty or undefined at present. | [optional] 
**invite_pending** | **bool** | Whether the has accepted the invite. Available when an invite is pending, and the value will be \&quot;true\&quot;. | [optional] 
**model** | **str** | The model identifier of the device, in the format iDeviceM,N | 
**name** | **str** | The unique name that is used to identify the user. | [optional] 
**os_build** | **str** | The last known OS version running on the device | 
**os_version** | **str** | The last known OS version running on the device | 
**owner_id** | **str** | The user ID of the device owner. | [optional] 
**registered_at** | **str** | Timestamp of when the device was registered in ISO format. | [optional] 
**serial** | **str** | The device&#39;s serial number. Always empty or undefined at present. | [optional] 
**status** | **str** | The provisioning status of the device. | 
**udid** | **str** | The Unique Device IDentifier of the device | 

## Example

```python
from openapi_client.models.member_devices_info_response import MemberDevicesInfoResponse

# TODO update the JSON string below
json = "{}"
# create an instance of MemberDevicesInfoResponse from a JSON string
member_devices_info_response_instance = MemberDevicesInfoResponse.from_json(json)
# print the JSON string representation of the object
print(MemberDevicesInfoResponse.to_json())

# convert the object into a dict
member_devices_info_response_dict = member_devices_info_response_instance.to_dict()
# create an instance of MemberDevicesInfoResponse from a dict
member_devices_info_response_from_dict = MemberDevicesInfoResponse.from_dict(member_devices_info_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


