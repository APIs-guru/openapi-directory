# SyncDatabaseIdProperties

Properties of the sync database id.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ARM resource id of sync database. | [optional] [readonly] 

## Example

```python
from openapi_client.models.sync_database_id_properties import SyncDatabaseIdProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SyncDatabaseIdProperties from a JSON string
sync_database_id_properties_instance = SyncDatabaseIdProperties.from_json(json)
# print the JSON string representation of the object
print(SyncDatabaseIdProperties.to_json())

# convert the object into a dict
sync_database_id_properties_dict = sync_database_id_properties_instance.to_dict()
# create an instance of SyncDatabaseIdProperties from a dict
sync_database_id_properties_from_dict = SyncDatabaseIdProperties.from_dict(sync_database_id_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


