# SyncGroupSchema

Properties of sync group schema.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**master_sync_member_name** | **str** | Name of master sync member where the schema is from. | [optional] 
**tables** | [**List[SyncGroupSchemaTable]**](SyncGroupSchemaTable.md) | List of tables in sync group schema. | [optional] 

## Example

```python
from openapi_client.models.sync_group_schema import SyncGroupSchema

# TODO update the JSON string below
json = "{}"
# create an instance of SyncGroupSchema from a JSON string
sync_group_schema_instance = SyncGroupSchema.from_json(json)
# print the JSON string representation of the object
print(SyncGroupSchema.to_json())

# convert the object into a dict
sync_group_schema_dict = sync_group_schema_instance.to_dict()
# create an instance of SyncGroupSchema from a dict
sync_group_schema_from_dict = SyncGroupSchema.from_dict(sync_group_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


