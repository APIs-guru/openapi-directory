# MigrationItemsQueryParameter

Query parameter to enumerate migration items.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_type** | **str** | The replication provider type. | [optional] 
**source_fabric_name** | **str** | The source fabric name filter. | [optional] 

## Example

```python
from openapi_client.models.migration_items_query_parameter import MigrationItemsQueryParameter

# TODO update the JSON string below
json = "{}"
# create an instance of MigrationItemsQueryParameter from a JSON string
migration_items_query_parameter_instance = MigrationItemsQueryParameter.from_json(json)
# print the JSON string representation of the object
print(MigrationItemsQueryParameter.to_json())

# convert the object into a dict
migration_items_query_parameter_dict = migration_items_query_parameter_instance.to_dict()
# create an instance of MigrationItemsQueryParameter from a dict
migration_items_query_parameter_from_dict = MigrationItemsQueryParameter.from_dict(migration_items_query_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


