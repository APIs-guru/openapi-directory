# DeviceReference

A `DeviceReference` is an API abstraction that lets you supply a _device_ argument to a method using one of the following identifier types: * A numeric API resource ID. * Real-world hardware IDs, such as IMEI number, belonging to the manufactured device. Methods that operate on devices take a `DeviceReference` as a parameter type because it's more flexible for the caller. To learn more about device identifiers, read [Identifiers](https://developers.google.com/zero-touch/guides/identifiers).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_id** | **str** | The ID of the device. | [optional] 
**device_identifier** | [**DeviceIdentifier**](DeviceIdentifier.md) |  | [optional] 

## Example

```python
from openapi_client.models.device_reference import DeviceReference

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceReference from a JSON string
device_reference_instance = DeviceReference.from_json(json)
# print the JSON string representation of the object
print(DeviceReference.to_json())

# convert the object into a dict
device_reference_dict = device_reference_instance.to_dict()
# create an instance of DeviceReference from a dict
device_reference_from_dict = DeviceReference.from_dict(device_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


