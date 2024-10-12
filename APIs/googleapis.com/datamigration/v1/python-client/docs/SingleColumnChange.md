# SingleColumnChange

Options to configure rule type SingleColumnChange. The rule is used to change the properties of a column. The rule filter field can refer to one entity. The rule scope can be one of: Column. When using this rule, if a field is not specified than the destination column's configuration will be the same as the one in the source column..

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**array** | **bool** | Optional. Is the column of array type. | [optional] 
**array_length** | **int** | Optional. The length of the array, only relevant if the column type is an array. | [optional] 
**auto_generated** | **bool** | Optional. Is the column auto-generated/identity. | [optional] 
**charset** | **str** | Optional. Charset override - instead of table level charset. | [optional] 
**collation** | **str** | Optional. Collation override - instead of table level collation. | [optional] 
**comment** | **str** | Optional. Comment associated with the column. | [optional] 
**custom_features** | **Dict[str, object]** | Optional. Custom engine specific features. | [optional] 
**data_type** | **str** | Optional. Column data type name. | [optional] 
**fractional_seconds_precision** | **int** | Optional. Column fractional seconds precision - e.g. 2 as in timestamp (2) - when relevant. | [optional] 
**length** | **str** | Optional. Column length - e.g. 50 as in varchar (50) - when relevant. | [optional] 
**nullable** | **bool** | Optional. Is the column nullable. | [optional] 
**precision** | **int** | Optional. Column precision - e.g. 8 as in double (8,2) - when relevant. | [optional] 
**scale** | **int** | Optional. Column scale - e.g. 2 as in double (8,2) - when relevant. | [optional] 
**set_values** | **List[str]** | Optional. Specifies the list of values allowed in the column. | [optional] 
**udt** | **bool** | Optional. Is the column a UDT (User-defined Type). | [optional] 

## Example

```python
from openapi_client.models.single_column_change import SingleColumnChange

# TODO update the JSON string below
json = "{}"
# create an instance of SingleColumnChange from a JSON string
single_column_change_instance = SingleColumnChange.from_json(json)
# print the JSON string representation of the object
print(SingleColumnChange.to_json())

# convert the object into a dict
single_column_change_dict = single_column_change_instance.to_dict()
# create an instance of SingleColumnChange from a dict
single_column_change_from_dict = SingleColumnChange.from_dict(single_column_change_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


