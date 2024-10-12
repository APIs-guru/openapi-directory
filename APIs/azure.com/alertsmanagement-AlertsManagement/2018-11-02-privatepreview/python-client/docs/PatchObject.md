# PatchObject

Properties supported by patch

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** | Indicates if the given action rule is enabled or disabled | [optional] 
**tags** | **object** | tags to be updated | [optional] 

## Example

```python
from openapi_client.models.patch_object import PatchObject

# TODO update the JSON string below
json = "{}"
# create an instance of PatchObject from a JSON string
patch_object_instance = PatchObject.from_json(json)
# print the JSON string representation of the object
print(PatchObject.to_json())

# convert the object into a dict
patch_object_dict = patch_object_instance.to_dict()
# create an instance of PatchObject from a dict
patch_object_from_dict = PatchObject.from_dict(patch_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


