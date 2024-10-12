# WaitForPrimaryPlacementSafetyCheck

Safety check that waits for the primary replica that was moved out of the node due to upgrade to be placed back again on that node.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------

## Example

```python
from openapi_client.models.wait_for_primary_placement_safety_check import WaitForPrimaryPlacementSafetyCheck

# TODO update the JSON string below
json = "{}"
# create an instance of WaitForPrimaryPlacementSafetyCheck from a JSON string
wait_for_primary_placement_safety_check_instance = WaitForPrimaryPlacementSafetyCheck.from_json(json)
# print the JSON string representation of the object
print(WaitForPrimaryPlacementSafetyCheck.to_json())

# convert the object into a dict
wait_for_primary_placement_safety_check_dict = wait_for_primary_placement_safety_check_instance.to_dict()
# create an instance of WaitForPrimaryPlacementSafetyCheck from a dict
wait_for_primary_placement_safety_check_from_dict = WaitForPrimaryPlacementSafetyCheck.from_dict(wait_for_primary_placement_safety_check_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


