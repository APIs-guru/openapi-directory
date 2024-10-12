# EntityMove

Options to configure rule type EntityMove. The rule is used to move an entity to a new schema. The rule filter field can refer to one or more entities. The rule scope can be one of: Table, Column, Constraint, Index, View, Function, Stored Procedure, Materialized View, Sequence, UDT

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**new_schema** | **str** | Required. The new schema | [optional] 

## Example

```python
from openapi_client.models.entity_move import EntityMove

# TODO update the JSON string below
json = "{}"
# create an instance of EntityMove from a JSON string
entity_move_instance = EntityMove.from_json(json)
# print the JSON string representation of the object
print(EntityMove.to_json())

# convert the object into a dict
entity_move_dict = entity_move_instance.to_dict()
# create an instance of EntityMove from a dict
entity_move_from_dict = EntityMove.from_dict(entity_move_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


