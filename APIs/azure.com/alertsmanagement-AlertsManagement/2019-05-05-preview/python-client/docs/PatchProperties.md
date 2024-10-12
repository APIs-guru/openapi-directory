# PatchProperties

Action rule properties supported by patch

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** | Indicates if the given action rule is enabled or disabled | [optional] 

## Example

```python
from openapi_client.models.patch_properties import PatchProperties

# TODO update the JSON string below
json = "{}"
# create an instance of PatchProperties from a JSON string
patch_properties_instance = PatchProperties.from_json(json)
# print the JSON string representation of the object
print(PatchProperties.to_json())

# convert the object into a dict
patch_properties_dict = patch_properties_instance.to_dict()
# create an instance of PatchProperties from a dict
patch_properties_from_dict = PatchProperties.from_dict(patch_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


