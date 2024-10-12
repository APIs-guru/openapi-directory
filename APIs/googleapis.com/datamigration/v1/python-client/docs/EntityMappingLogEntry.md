# EntityMappingLogEntry

A single record of a rule which was used for a mapping.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mapping_comment** | **str** | Comment. | [optional] 
**rule_id** | **str** | Which rule caused this log entry. | [optional] 
**rule_revision_id** | **str** | Rule revision ID. | [optional] 

## Example

```python
from openapi_client.models.entity_mapping_log_entry import EntityMappingLogEntry

# TODO update the JSON string below
json = "{}"
# create an instance of EntityMappingLogEntry from a JSON string
entity_mapping_log_entry_instance = EntityMappingLogEntry.from_json(json)
# print the JSON string representation of the object
print(EntityMappingLogEntry.to_json())

# convert the object into a dict
entity_mapping_log_entry_dict = entity_mapping_log_entry_instance.to_dict()
# create an instance of EntityMappingLogEntry from a dict
entity_mapping_log_entry_from_dict = EntityMappingLogEntry.from_dict(entity_mapping_log_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


