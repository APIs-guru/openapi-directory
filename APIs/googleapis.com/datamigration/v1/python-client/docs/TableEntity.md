# TableEntity

Table's parent is a schema.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**columns** | [**List[ColumnEntity]**](ColumnEntity.md) | Table columns. | [optional] 
**comment** | **str** | Comment associated with the table. | [optional] 
**constraints** | [**List[ConstraintEntity]**](ConstraintEntity.md) | Table constraints. | [optional] 
**custom_features** | **Dict[str, object]** | Custom engine specific features. | [optional] 
**indices** | [**List[IndexEntity]**](IndexEntity.md) | Table indices. | [optional] 
**triggers** | [**List[TriggerEntity]**](TriggerEntity.md) | Table triggers. | [optional] 

## Example

```python
from openapi_client.models.table_entity import TableEntity

# TODO update the JSON string below
json = "{}"
# create an instance of TableEntity from a JSON string
table_entity_instance = TableEntity.from_json(json)
# print the JSON string representation of the object
print(TableEntity.to_json())

# convert the object into a dict
table_entity_dict = table_entity_instance.to_dict()
# create an instance of TableEntity from a dict
table_entity_from_dict = TableEntity.from_dict(table_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


