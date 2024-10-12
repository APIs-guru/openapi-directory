# VolumePatch

Volume patch resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Resource Id | [optional] [readonly] 
**location** | **str** | Resource location | [optional] 
**name** | **str** | Resource name | [optional] [readonly] 
**properties** | [**VolumePatchProperties**](VolumePatchProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | Tags are a list of key-value pairs that describe the resource | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.volume_patch import VolumePatch

# TODO update the JSON string below
json = "{}"
# create an instance of VolumePatch from a JSON string
volume_patch_instance = VolumePatch.from_json(json)
# print the JSON string representation of the object
print(VolumePatch.to_json())

# convert the object into a dict
volume_patch_dict = volume_patch_instance.to_dict()
# create an instance of VolumePatch from a dict
volume_patch_from_dict = VolumePatch.from_dict(volume_patch_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


