# MigrationItemCollection

Migration item collection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The value of next link. | [optional] 
**value** | [**List[MigrationItem]**](MigrationItem.md) | The list of migration items. | [optional] 

## Example

```python
from openapi_client.models.migration_item_collection import MigrationItemCollection

# TODO update the JSON string below
json = "{}"
# create an instance of MigrationItemCollection from a JSON string
migration_item_collection_instance = MigrationItemCollection.from_json(json)
# print the JSON string representation of the object
print(MigrationItemCollection.to_json())

# convert the object into a dict
migration_item_collection_dict = migration_item_collection_instance.to_dict()
# create an instance of MigrationItemCollection from a dict
migration_item_collection_from_dict = MigrationItemCollection.from_dict(migration_item_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


