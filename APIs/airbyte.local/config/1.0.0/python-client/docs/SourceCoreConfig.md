# SourceCoreConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_configuration** | **object** | The values required to configure the source. The schema for this must match the schema return by source_definition_specifications/get for the source. | 
**source_definition_id** | **str** |  | 
**source_id** | **str** |  | [optional] 
**workspace_id** | **str** |  | 

## Example

```python
from openapi_client.models.source_core_config import SourceCoreConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SourceCoreConfig from a JSON string
source_core_config_instance = SourceCoreConfig.from_json(json)
# print the JSON string representation of the object
print(SourceCoreConfig.to_json())

# convert the object into a dict
source_core_config_dict = source_core_config_instance.to_dict()
# create an instance of SourceCoreConfig from a dict
source_core_config_from_dict = SourceCoreConfig.from_dict(source_core_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


