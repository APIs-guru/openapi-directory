# BareMetalLvpConfig

Specifies the configs for local persistent volumes (PVs).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path** | **str** | Required. The host machine path. | [optional] 
**storage_class** | **str** | Required. The StorageClass name that PVs will be created with. | [optional] 

## Example

```python
from openapi_client.models.bare_metal_lvp_config import BareMetalLvpConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BareMetalLvpConfig from a JSON string
bare_metal_lvp_config_instance = BareMetalLvpConfig.from_json(json)
# print the JSON string representation of the object
print(BareMetalLvpConfig.to_json())

# convert the object into a dict
bare_metal_lvp_config_dict = bare_metal_lvp_config_instance.to_dict()
# create an instance of BareMetalLvpConfig from a dict
bare_metal_lvp_config_from_dict = BareMetalLvpConfig.from_dict(bare_metal_lvp_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


