# ConfigMapEnvSource

Not supported by Cloud Run ConfigMapEnvSource selects a ConfigMap to populate the environment variables with. The contents of the target ConfigMap's Data field will represent the key-value pairs as environment variables.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**local_object_reference** | [**LocalObjectReference**](LocalObjectReference.md) |  | [optional] 
**name** | **str** | The ConfigMap to select from. | [optional] 
**optional** | **bool** | (Optional) Specify whether the ConfigMap must be defined | [optional] 

## Example

```python
from openapi_client.models.config_map_env_source import ConfigMapEnvSource

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigMapEnvSource from a JSON string
config_map_env_source_instance = ConfigMapEnvSource.from_json(json)
# print the JSON string representation of the object
print(ConfigMapEnvSource.to_json())

# convert the object into a dict
config_map_env_source_dict = config_map_env_source_instance.to_dict()
# create an instance of ConfigMapEnvSource from a dict
config_map_env_source_from_dict = ConfigMapEnvSource.from_dict(config_map_env_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


