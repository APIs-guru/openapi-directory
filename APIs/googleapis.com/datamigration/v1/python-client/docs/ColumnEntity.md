# ColumnEntity

Column is not used as an independent entity, it is retrieved as part of a Table entity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**array** | **bool** | Is the column of array type. | [optional] 
**array_length** | **int** | If the column is array, of which length. | [optional] 
**auto_generated** | **bool** | Is the column auto-generated/identity. | [optional] 
**charset** | **str** | Charset override - instead of table level charset. | [optional] 
**collation** | **str** | Collation override - instead of table level collation. | [optional] 
**comment** | **str** | Comment associated with the column. | [optional] 
**custom_features** | **Dict[str, object]** | Custom engine specific features. | [optional] 
**data_type** | **str** | Column data type. | [optional] 
**default_value** | **str** | Default value of the column. | [optional] 
**fractional_seconds_precision** | **int** | Column fractional second precision - used for timestamp based datatypes. | [optional] 
**length** | **str** | Column length - e.g. varchar (50). | [optional] 
**name** | **str** | Column name. | [optional] 
**nullable** | **bool** | Is the column nullable. | [optional] 
**ordinal_position** | **int** | Column order in the table. | [optional] 
**precision** | **int** | Column precision - when relevant. | [optional] 
**scale** | **int** | Column scale - when relevant. | [optional] 
**set_values** | **List[str]** | Specifies the list of values allowed in the column. Only used for set data type. | [optional] 
**udt** | **bool** | Is the column a UDT. | [optional] 

## Example

```python
from openapi_client.models.column_entity import ColumnEntity

# TODO update the JSON string below
json = "{}"
# create an instance of ColumnEntity from a JSON string
column_entity_instance = ColumnEntity.from_json(json)
# print the JSON string representation of the object
print(ColumnEntity.to_json())

# convert the object into a dict
column_entity_dict = column_entity_instance.to_dict()
# create an instance of ColumnEntity from a dict
column_entity_from_dict = ColumnEntity.from_dict(column_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


