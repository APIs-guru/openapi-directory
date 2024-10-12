# ClosedListModelPatchObject

Object model for adding a batch of sublists to an existing closedlist.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sub_lists** | [**List[WordListObject]**](WordListObject.md) | Sublists to add. | [optional] 

## Example

```python
from openapi_client.models.closed_list_model_patch_object import ClosedListModelPatchObject

# TODO update the JSON string below
json = "{}"
# create an instance of ClosedListModelPatchObject from a JSON string
closed_list_model_patch_object_instance = ClosedListModelPatchObject.from_json(json)
# print the JSON string representation of the object
print(ClosedListModelPatchObject.to_json())

# convert the object into a dict
closed_list_model_patch_object_dict = closed_list_model_patch_object_instance.to_dict()
# create an instance of ClosedListModelPatchObject from a dict
closed_list_model_patch_object_from_dict = ClosedListModelPatchObject.from_dict(closed_list_model_patch_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


