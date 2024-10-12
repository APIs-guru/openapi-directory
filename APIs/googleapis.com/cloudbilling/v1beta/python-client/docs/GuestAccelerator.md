# GuestAccelerator

Specification of a set of guest accelerators attached to a machine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accelerator_count** | **str** | The number of the guest accelerator cards exposed to each instance. | [optional] 
**accelerator_type** | **str** | The type of the guest accelerator cards. For example: \&quot;nvidia-tesla-t4\&quot;. | [optional] 

## Example

```python
from openapi_client.models.guest_accelerator import GuestAccelerator

# TODO update the JSON string below
json = "{}"
# create an instance of GuestAccelerator from a JSON string
guest_accelerator_instance = GuestAccelerator.from_json(json)
# print the JSON string representation of the object
print(GuestAccelerator.to_json())

# convert the object into a dict
guest_accelerator_dict = guest_accelerator_instance.to_dict()
# create an instance of GuestAccelerator from a dict
guest_accelerator_from_dict = GuestAccelerator.from_dict(guest_accelerator_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


