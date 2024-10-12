# ManagerPatch

The StorSimple Manager patch.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **Dict[str, str]** | The tags attached to the StorSimple Manager. | [optional] 

## Example

```python
from openapi_client.models.manager_patch import ManagerPatch

# TODO update the JSON string below
json = "{}"
# create an instance of ManagerPatch from a JSON string
manager_patch_instance = ManagerPatch.from_json(json)
# print the JSON string representation of the object
print(ManagerPatch.to_json())

# convert the object into a dict
manager_patch_dict = manager_patch_instance.to_dict()
# create an instance of ManagerPatch from a dict
manager_patch_from_dict = ManagerPatch.from_dict(manager_patch_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


