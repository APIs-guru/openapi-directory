# SyncFullSchemaProperties

Properties of the database full schema.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_update_time** | **datetime** | Last update time of the database schema. | [optional] [readonly] 
**tables** | [**List[SyncFullSchemaTable]**](SyncFullSchemaTable.md) | List of tables in the database full schema. | [optional] [readonly] 

## Example

```python
from openapi_client.models.sync_full_schema_properties import SyncFullSchemaProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SyncFullSchemaProperties from a JSON string
sync_full_schema_properties_instance = SyncFullSchemaProperties.from_json(json)
# print the JSON string representation of the object
print(SyncFullSchemaProperties.to_json())

# convert the object into a dict
sync_full_schema_properties_dict = sync_full_schema_properties_instance.to_dict()
# create an instance of SyncFullSchemaProperties from a dict
sync_full_schema_properties_from_dict = SyncFullSchemaProperties.from_dict(sync_full_schema_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


