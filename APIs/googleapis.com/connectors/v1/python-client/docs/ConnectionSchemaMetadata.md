# ConnectionSchemaMetadata

ConnectionSchemaMetadata is the singleton resource of each connection. It includes the entity and action names of runtime resources exposed by a connection backend.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | **List[str]** | Output only. List of actions. | [optional] [readonly] 
**entities** | **List[str]** | Output only. List of entity names. | [optional] [readonly] 
**error_message** | **str** | Error message for users. | [optional] 
**name** | **str** | Output only. Resource name. Format: projects/{project}/locations/{location}/connections/{connection}/connectionSchemaMetadata | [optional] [readonly] 
**refresh_time** | **str** | Output only. Timestamp when the connection runtime schema refresh was triggered. | [optional] [readonly] 
**state** | **str** | Output only. The current state of runtime schema. | [optional] [readonly] 
**update_time** | **str** | Output only. Timestamp when the connection runtime schema was updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.connection_schema_metadata import ConnectionSchemaMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionSchemaMetadata from a JSON string
connection_schema_metadata_instance = ConnectionSchemaMetadata.from_json(json)
# print the JSON string representation of the object
print(ConnectionSchemaMetadata.to_json())

# convert the object into a dict
connection_schema_metadata_dict = connection_schema_metadata_instance.to_dict()
# create an instance of ConnectionSchemaMetadata from a dict
connection_schema_metadata_from_dict = ConnectionSchemaMetadata.from_dict(connection_schema_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


