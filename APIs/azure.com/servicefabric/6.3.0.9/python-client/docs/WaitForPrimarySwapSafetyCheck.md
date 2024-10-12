# WaitForPrimarySwapSafetyCheck

Safety check that waits for the primary replica to be moved out of the node before starting an upgrade to ensure the availability of the primary replica for the partition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------

## Example

```python
from openapi_client.models.wait_for_primary_swap_safety_check import WaitForPrimarySwapSafetyCheck

# TODO update the JSON string below
json = "{}"
# create an instance of WaitForPrimarySwapSafetyCheck from a JSON string
wait_for_primary_swap_safety_check_instance = WaitForPrimarySwapSafetyCheck.from_json(json)
# print the JSON string representation of the object
print(WaitForPrimarySwapSafetyCheck.to_json())

# convert the object into a dict
wait_for_primary_swap_safety_check_dict = wait_for_primary_swap_safety_check_instance.to_dict()
# create an instance of WaitForPrimarySwapSafetyCheck from a dict
wait_for_primary_swap_safety_check_from_dict = WaitForPrimarySwapSafetyCheck.from_dict(wait_for_primary_swap_safety_check_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


