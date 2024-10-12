# FrameViolationEntry

A resource that contains a single violation of a reported `AssetFrame` resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_field** | **str** | The field of the original frame where the violation occurred. | [optional] 
**violation** | **str** | A message describing the violation. | [optional] 

## Example

```python
from openapi_client.models.frame_violation_entry import FrameViolationEntry

# TODO update the JSON string below
json = "{}"
# create an instance of FrameViolationEntry from a JSON string
frame_violation_entry_instance = FrameViolationEntry.from_json(json)
# print the JSON string representation of the object
print(FrameViolationEntry.to_json())

# convert the object into a dict
frame_violation_entry_dict = frame_violation_entry_instance.to_dict()
# create an instance of FrameViolationEntry from a dict
frame_violation_entry_from_dict = FrameViolationEntry.from_dict(frame_violation_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


