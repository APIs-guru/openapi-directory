# ModuleAssetParameter

Parameter definition for a module asset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mode_values_info** | [**Dict[str, ModeValueInfo]**](ModeValueInfo.md) | Definitions for nested interface parameters if this is a complex module parameter. | [optional] 
**name** | **str** | Parameter name. | [optional] 
**parameter_type** | **str** | Parameter type. | [optional] 

## Example

```python
from openapi_client.models.module_asset_parameter import ModuleAssetParameter

# TODO update the JSON string below
json = "{}"
# create an instance of ModuleAssetParameter from a JSON string
module_asset_parameter_instance = ModuleAssetParameter.from_json(json)
# print the JSON string representation of the object
print(ModuleAssetParameter.to_json())

# convert the object into a dict
module_asset_parameter_dict = module_asset_parameter_instance.to_dict()
# create an instance of ModuleAssetParameter from a dict
module_asset_parameter_from_dict = ModuleAssetParameter.from_dict(module_asset_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


