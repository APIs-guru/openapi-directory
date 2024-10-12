# BareMetalAdminStorageConfig

BareMetalAdminStorageConfig specifies the cluster storage configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lvp_node_mounts_config** | [**BareMetalLvpConfig**](BareMetalLvpConfig.md) |  | [optional] 
**lvp_share_config** | [**BareMetalLvpShareConfig**](BareMetalLvpShareConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.bare_metal_admin_storage_config import BareMetalAdminStorageConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BareMetalAdminStorageConfig from a JSON string
bare_metal_admin_storage_config_instance = BareMetalAdminStorageConfig.from_json(json)
# print the JSON string representation of the object
print(BareMetalAdminStorageConfig.to_json())

# convert the object into a dict
bare_metal_admin_storage_config_dict = bare_metal_admin_storage_config_instance.to_dict()
# create an instance of BareMetalAdminStorageConfig from a dict
bare_metal_admin_storage_config_from_dict = BareMetalAdminStorageConfig.from_dict(bare_metal_admin_storage_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


