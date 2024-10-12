# SuspiciousActivitySecurityDetail

Detailed information of a single MDM suspicious activity event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_id** | **str** | Required. The device ID. | [optional] 
**device_model** | **str** | The model of the device. | [optional] 
**device_property** | **str** | The device property which was changed. | [optional] 
**device_type** | **str** | The type of the device. | [optional] 
**ios_vendor_id** | **str** | Required for iOS, empty for others. | [optional] 
**new_value** | **str** | The new value of the device property after the change. | [optional] 
**old_value** | **str** | The old value of the device property before the change. | [optional] 
**resource_id** | **str** | The device resource ID. | [optional] 
**serial_number** | **str** | The serial number of the device. | [optional] 

## Example

```python
from openapi_client.models.suspicious_activity_security_detail import SuspiciousActivitySecurityDetail

# TODO update the JSON string below
json = "{}"
# create an instance of SuspiciousActivitySecurityDetail from a JSON string
suspicious_activity_security_detail_instance = SuspiciousActivitySecurityDetail.from_json(json)
# print the JSON string representation of the object
print(SuspiciousActivitySecurityDetail.to_json())

# convert the object into a dict
suspicious_activity_security_detail_dict = suspicious_activity_security_detail_instance.to_dict()
# create an instance of SuspiciousActivitySecurityDetail from a dict
suspicious_activity_security_detail_from_dict = SuspiciousActivitySecurityDetail.from_dict(suspicious_activity_security_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


