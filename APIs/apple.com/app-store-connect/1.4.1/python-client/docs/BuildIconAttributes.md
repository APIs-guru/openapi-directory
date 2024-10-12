# BuildIconAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**icon_asset** | [**ImageAsset**](ImageAsset.md) |  | [optional] 
**icon_type** | [**IconAssetType**](IconAssetType.md) |  | [optional] 

## Example

```python
from openapi_client.models.build_icon_attributes import BuildIconAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of BuildIconAttributes from a JSON string
build_icon_attributes_instance = BuildIconAttributes.from_json(json)
# print the JSON string representation of the object
print(BuildIconAttributes.to_json())

# convert the object into a dict
build_icon_attributes_dict = build_icon_attributes_instance.to_dict()
# create an instance of BuildIconAttributes from a dict
build_icon_attributes_from_dict = BuildIconAttributes.from_dict(build_icon_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


