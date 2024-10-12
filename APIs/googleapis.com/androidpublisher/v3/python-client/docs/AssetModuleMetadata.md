# AssetModuleMetadata

Metadata of an asset module.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delivery_type** | **str** | Indicates the delivery type for persistent install. | [optional] 
**name** | **str** | Module name. | [optional] 

## Example

```python
from openapi_client.models.asset_module_metadata import AssetModuleMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of AssetModuleMetadata from a JSON string
asset_module_metadata_instance = AssetModuleMetadata.from_json(json)
# print the JSON string representation of the object
print(AssetModuleMetadata.to_json())

# convert the object into a dict
asset_module_metadata_dict = asset_module_metadata_instance.to_dict()
# create an instance of AssetModuleMetadata from a dict
asset_module_metadata_from_dict = AssetModuleMetadata.from_dict(asset_module_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


