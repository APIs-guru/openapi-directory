# BulkEntityRelation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Bulk Identifier | [optional] 
**item** | **List[object]** | Item | [optional] 

## Example

```python
from openapi_client.models.bulk_entity_relation import BulkEntityRelation

# TODO update the JSON string below
json = "{}"
# create an instance of BulkEntityRelation from a JSON string
bulk_entity_relation_instance = BulkEntityRelation.from_json(json)
# print the JSON string representation of the object
print(BulkEntityRelation.to_json())

# convert the object into a dict
bulk_entity_relation_dict = bulk_entity_relation_instance.to_dict()
# create an instance of BulkEntityRelation from a dict
bulk_entity_relation_from_dict = BulkEntityRelation.from_dict(bulk_entity_relation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


