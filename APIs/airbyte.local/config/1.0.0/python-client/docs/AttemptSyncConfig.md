# AttemptSyncConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_configuration** | **object** | The values required to configure the destination. The schema for this must match the schema return by destination_definition_specifications/get for the destinationDefinition. | 
**source_configuration** | **object** | The values required to configure the source. The schema for this must match the schema return by source_definition_specifications/get for the source. | 
**state** | [**ConnectionState**](ConnectionState.md) |  | [optional] 

## Example

```python
from openapi_client.models.attempt_sync_config import AttemptSyncConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AttemptSyncConfig from a JSON string
attempt_sync_config_instance = AttemptSyncConfig.from_json(json)
# print the JSON string representation of the object
print(AttemptSyncConfig.to_json())

# convert the object into a dict
attempt_sync_config_dict = attempt_sync_config_instance.to_dict()
# create an instance of AttemptSyncConfig from a dict
attempt_sync_config_from_dict = AttemptSyncConfig.from_dict(attempt_sync_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


