# DeviceCompromisedSecurityDetail

Detailed information of a single MDM device compromised event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_compromised_state** | **str** | The device compromised state. Possible values are \&quot;&#x60;Compromised&#x60;\&quot; or \&quot;&#x60;Not Compromised&#x60;\&quot;. | [optional] 
**device_id** | **str** | Required. The device ID. | [optional] 
**device_model** | **str** | The model of the device. | [optional] 
**device_type** | **str** | The type of the device. | [optional] 
**ios_vendor_id** | **str** | Required for iOS, empty for others. | [optional] 
**resource_id** | **str** | The device resource ID. | [optional] 
**serial_number** | **str** | The serial number of the device. | [optional] 

## Example

```python
from openapi_client.models.device_compromised_security_detail import DeviceCompromisedSecurityDetail

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceCompromisedSecurityDetail from a JSON string
device_compromised_security_detail_instance = DeviceCompromisedSecurityDetail.from_json(json)
# print the JSON string representation of the object
print(DeviceCompromisedSecurityDetail.to_json())

# convert the object into a dict
device_compromised_security_detail_dict = device_compromised_security_detail_instance.to_dict()
# create an instance of DeviceCompromisedSecurityDetail from a dict
device_compromised_security_detail_from_dict = DeviceCompromisedSecurityDetail.from_dict(device_compromised_security_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


