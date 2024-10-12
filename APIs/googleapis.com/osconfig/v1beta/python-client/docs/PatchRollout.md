# PatchRollout

Patch rollout configuration specifications. Contains details on the concurrency control when applying patch(es) to all targeted VMs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disruption_budget** | [**FixedOrPercent**](FixedOrPercent.md) |  | [optional] 
**mode** | **str** | Mode of the patch rollout. | [optional] 

## Example

```python
from openapi_client.models.patch_rollout import PatchRollout

# TODO update the JSON string below
json = "{}"
# create an instance of PatchRollout from a JSON string
patch_rollout_instance = PatchRollout.from_json(json)
# print the JSON string representation of the object
print(PatchRollout.to_json())

# convert the object into a dict
patch_rollout_dict = patch_rollout_instance.to_dict()
# create an instance of PatchRollout from a dict
patch_rollout_from_dict = PatchRollout.from_dict(patch_rollout_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


