# ConstraintEntity

Constraint is not used as an independent entity, it is retrieved as part of another entity such as Table or View.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_features** | **Dict[str, object]** | Custom engine specific features. | [optional] 
**name** | **str** | The name of the table constraint. | [optional] 
**reference_columns** | **List[str]** | Reference columns which may be associated with the constraint. For example, if the constraint is a FOREIGN_KEY, this represents the list of full names of referenced columns by the foreign key. | [optional] 
**reference_table** | **str** | Reference table which may be associated with the constraint. For example, if the constraint is a FOREIGN_KEY, this represents the list of full name of the referenced table by the foreign key. | [optional] 
**table_columns** | **List[str]** | Table columns used as part of the Constraint, for example primary key constraint should list the columns which constitutes the key. | [optional] 
**table_name** | **str** | Table which is associated with the constraint. In case the constraint is defined on a table, this field is left empty as this information is stored in parent_name. However, if constraint is defined on a view, this field stores the table name on which the view is defined. | [optional] 
**type** | **str** | Type of constraint, for example unique, primary key, foreign key (currently only primary key is supported). | [optional] 

## Example

```python
from openapi_client.models.constraint_entity import ConstraintEntity

# TODO update the JSON string below
json = "{}"
# create an instance of ConstraintEntity from a JSON string
constraint_entity_instance = ConstraintEntity.from_json(json)
# print the JSON string representation of the object
print(ConstraintEntity.to_json())

# convert the object into a dict
constraint_entity_dict = constraint_entity_instance.to_dict()
# create an instance of ConstraintEntity from a dict
constraint_entity_from_dict = ConstraintEntity.from_dict(constraint_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


