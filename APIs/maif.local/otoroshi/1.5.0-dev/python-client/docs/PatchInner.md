# PatchInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**op** | **str** |  | 
**path** | **str** |  | 
**value** | **object** |  | [optional] 

## Example

```python
from openapi_client.models.patch_inner import PatchInner

# TODO update the JSON string below
json = "{}"
# create an instance of PatchInner from a JSON string
patch_inner_instance = PatchInner.from_json(json)
# print the JSON string representation of the object
print(PatchInner.to_json())

# convert the object into a dict
patch_inner_dict = patch_inner_instance.to_dict()
# create an instance of PatchInner from a dict
patch_inner_from_dict = PatchInner.from_dict(patch_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


