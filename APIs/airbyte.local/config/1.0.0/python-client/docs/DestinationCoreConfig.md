# DestinationCoreConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_configuration** | **object** | The values required to configure the destination. The schema for this must match the schema return by destination_definition_specifications/get for the destinationDefinition. | 
**destination_definition_id** | **str** |  | 
**destination_id** | **str** |  | [optional] 
**workspace_id** | **str** |  | 

## Example

```python
from openapi_client.models.destination_core_config import DestinationCoreConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DestinationCoreConfig from a JSON string
destination_core_config_instance = DestinationCoreConfig.from_json(json)
# print the JSON string representation of the object
print(DestinationCoreConfig.to_json())

# convert the object into a dict
destination_core_config_dict = destination_core_config_instance.to_dict()
# create an instance of DestinationCoreConfig from a dict
destination_core_config_from_dict = DestinationCoreConfig.from_dict(destination_core_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


