# WaitForReconfigurationSafetyCheck

Safety check that waits for the current reconfiguration of the partition to be completed before starting an upgrade.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------

## Example

```python
from openapi_client.models.wait_for_reconfiguration_safety_check import WaitForReconfigurationSafetyCheck

# TODO update the JSON string below
json = "{}"
# create an instance of WaitForReconfigurationSafetyCheck from a JSON string
wait_for_reconfiguration_safety_check_instance = WaitForReconfigurationSafetyCheck.from_json(json)
# print the JSON string representation of the object
print(WaitForReconfigurationSafetyCheck.to_json())

# convert the object into a dict
wait_for_reconfiguration_safety_check_dict = wait_for_reconfiguration_safety_check_instance.to_dict()
# create an instance of WaitForReconfigurationSafetyCheck from a dict
wait_for_reconfiguration_safety_check_from_dict = WaitForReconfigurationSafetyCheck.from_dict(wait_for_reconfiguration_safety_check_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


