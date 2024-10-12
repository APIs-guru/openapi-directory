# SolutionPatch

The properties of a Solution that can be patched.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **Dict[str, str]** | Resource tags | [optional] 

## Example

```python
from openapi_client.models.solution_patch import SolutionPatch

# TODO update the JSON string below
json = "{}"
# create an instance of SolutionPatch from a JSON string
solution_patch_instance = SolutionPatch.from_json(json)
# print the JSON string representation of the object
print(SolutionPatch.to_json())

# convert the object into a dict
solution_patch_dict = solution_patch_instance.to_dict()
# create an instance of SolutionPatch from a dict
solution_patch_from_dict = SolutionPatch.from_dict(solution_patch_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


