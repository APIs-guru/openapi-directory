# MergeConflict

Represents a merge conflict.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity_in_base_version** | [**Entity**](Entity.md) |  | [optional] 
**entity_in_workspace** | [**Entity**](Entity.md) |  | [optional] 

## Example

```python
from openapi_client.models.merge_conflict import MergeConflict

# TODO update the JSON string below
json = "{}"
# create an instance of MergeConflict from a JSON string
merge_conflict_instance = MergeConflict.from_json(json)
# print the JSON string representation of the object
print(MergeConflict.to_json())

# convert the object into a dict
merge_conflict_dict = merge_conflict_instance.to_dict()
# create an instance of MergeConflict from a dict
merge_conflict_from_dict = MergeConflict.from_dict(merge_conflict_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


