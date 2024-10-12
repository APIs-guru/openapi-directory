# EnsureAvailabilitySafetyCheck

Safety check that waits to ensure the availability of the partition. It waits until there are replicas available such that bringing down this replica will not cause availability loss for the partition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------

## Example

```python
from openapi_client.models.ensure_availability_safety_check import EnsureAvailabilitySafetyCheck

# TODO update the JSON string below
json = "{}"
# create an instance of EnsureAvailabilitySafetyCheck from a JSON string
ensure_availability_safety_check_instance = EnsureAvailabilitySafetyCheck.from_json(json)
# print the JSON string representation of the object
print(EnsureAvailabilitySafetyCheck.to_json())

# convert the object into a dict
ensure_availability_safety_check_dict = ensure_availability_safety_check_instance.to_dict()
# create an instance of EnsureAvailabilitySafetyCheck from a dict
ensure_availability_safety_check_from_dict = EnsureAvailabilitySafetyCheck.from_dict(ensure_availability_safety_check_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


