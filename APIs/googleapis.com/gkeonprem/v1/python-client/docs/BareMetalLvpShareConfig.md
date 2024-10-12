# BareMetalLvpShareConfig

Specifies the configs for local persistent volumes under a shared file system.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lvp_config** | [**BareMetalLvpConfig**](BareMetalLvpConfig.md) |  | [optional] 
**shared_path_pv_count** | **int** | The number of subdirectories to create under path. | [optional] 

## Example

```python
from openapi_client.models.bare_metal_lvp_share_config import BareMetalLvpShareConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BareMetalLvpShareConfig from a JSON string
bare_metal_lvp_share_config_instance = BareMetalLvpShareConfig.from_json(json)
# print the JSON string representation of the object
print(BareMetalLvpShareConfig.to_json())

# convert the object into a dict
bare_metal_lvp_share_config_dict = bare_metal_lvp_share_config_instance.to_dict()
# create an instance of BareMetalLvpShareConfig from a dict
bare_metal_lvp_share_config_from_dict = BareMetalLvpShareConfig.from_dict(bare_metal_lvp_share_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


