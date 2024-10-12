# DeviceCompromised

A mobile device compromised alert. Derived from audit logs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | The email of the user this alert was created for. | [optional] 
**events** | [**List[DeviceCompromisedSecurityDetail]**](DeviceCompromisedSecurityDetail.md) | Required. The list of security events. | [optional] 

## Example

```python
from openapi_client.models.device_compromised import DeviceCompromised

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceCompromised from a JSON string
device_compromised_instance = DeviceCompromised.from_json(json)
# print the JSON string representation of the object
print(DeviceCompromised.to_json())

# convert the object into a dict
device_compromised_dict = device_compromised_instance.to_dict()
# create an instance of DeviceCompromised from a dict
device_compromised_from_dict = DeviceCompromised.from_dict(device_compromised_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


