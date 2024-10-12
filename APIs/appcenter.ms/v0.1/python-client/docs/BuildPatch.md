# BuildPatch


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** | The build status; used to cancel builds | [optional] 

## Example

```python
from openapi_client.models.build_patch import BuildPatch

# TODO update the JSON string below
json = "{}"
# create an instance of BuildPatch from a JSON string
build_patch_instance = BuildPatch.from_json(json)
# print the JSON string representation of the object
print(BuildPatch.to_json())

# convert the object into a dict
build_patch_dict = build_patch_instance.to_dict()
# create an instance of BuildPatch from a dict
build_patch_from_dict = BuildPatch.from_dict(build_patch_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


