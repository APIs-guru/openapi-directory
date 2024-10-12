# ZypperPatch

Details related to a Zypper Patch.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** | The category of the patch. | [optional] 
**patch_name** | **str** | The name of the patch. | [optional] 
**severity** | **str** | The severity specified for this patch | [optional] 
**summary** | **str** | Any summary information provided about this patch. | [optional] 

## Example

```python
from openapi_client.models.zypper_patch import ZypperPatch

# TODO update the JSON string below
json = "{}"
# create an instance of ZypperPatch from a JSON string
zypper_patch_instance = ZypperPatch.from_json(json)
# print the JSON string representation of the object
print(ZypperPatch.to_json())

# convert the object into a dict
zypper_patch_dict = zypper_patch_instance.to_dict()
# create an instance of ZypperPatch from a dict
zypper_patch_from_dict = ZypperPatch.from_dict(zypper_patch_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


