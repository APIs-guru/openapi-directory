# AssetSliceSet

Set of asset slices belonging to a single asset module.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apk_description** | [**List[ApkDescription]**](ApkDescription.md) | Asset slices. | [optional] 
**asset_module_metadata** | [**AssetModuleMetadata**](AssetModuleMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.asset_slice_set import AssetSliceSet

# TODO update the JSON string below
json = "{}"
# create an instance of AssetSliceSet from a JSON string
asset_slice_set_instance = AssetSliceSet.from_json(json)
# print the JSON string representation of the object
print(AssetSliceSet.to_json())

# convert the object into a dict
asset_slice_set_dict = asset_slice_set_instance.to_dict()
# create an instance of AssetSliceSet from a dict
asset_slice_set_from_dict = AssetSliceSet.from_dict(asset_slice_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


