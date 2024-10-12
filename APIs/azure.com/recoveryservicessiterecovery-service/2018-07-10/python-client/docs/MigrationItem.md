# MigrationItem

Migration item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**MigrationItemProperties**](MigrationItemProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**location** | **str** | Resource Location | [optional] 
**name** | **str** | Resource Name | [optional] [readonly] 
**type** | **str** | Resource Type | [optional] [readonly] 

## Example

```python
from openapi_client.models.migration_item import MigrationItem

# TODO update the JSON string below
json = "{}"
# create an instance of MigrationItem from a JSON string
migration_item_instance = MigrationItem.from_json(json)
# print the JSON string representation of the object
print(MigrationItem.to_json())

# convert the object into a dict
migration_item_dict = migration_item_instance.to_dict()
# create an instance of MigrationItem from a dict
migration_item_from_dict = MigrationItem.from_dict(migration_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


