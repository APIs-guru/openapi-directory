# ModuleMetadata

Metadata of a module.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delivery_type** | **str** | Indicates the delivery type (e.g. on-demand) of the module. | [optional] 
**dependencies** | **List[str]** | Names of the modules that this module directly depends on. Each module implicitly depends on the base module. | [optional] 
**module_type** | **str** | Indicates the type of this feature module. | [optional] 
**name** | **str** | Module name. | [optional] 
**targeting** | [**ModuleTargeting**](ModuleTargeting.md) |  | [optional] 

## Example

```python
from openapi_client.models.module_metadata import ModuleMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of ModuleMetadata from a JSON string
module_metadata_instance = ModuleMetadata.from_json(json)
# print the JSON string representation of the object
print(ModuleMetadata.to_json())

# convert the object into a dict
module_metadata_dict = module_metadata_instance.to_dict()
# create an instance of ModuleMetadata from a dict
module_metadata_from_dict = ModuleMetadata.from_dict(module_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


