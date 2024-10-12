# OracleColumn

Oracle Column.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column** | **str** | Column name. | [optional] 
**data_type** | **str** | The Oracle data type. | [optional] 
**encoding** | **str** | Column encoding. | [optional] 
**length** | **int** | Column length. | [optional] 
**nullable** | **bool** | Whether or not the column can accept a null value. | [optional] 
**ordinal_position** | **int** | The ordinal position of the column in the table. | [optional] 
**precision** | **int** | Column precision. | [optional] 
**primary_key** | **bool** | Whether or not the column represents a primary key. | [optional] 
**scale** | **int** | Column scale. | [optional] 

## Example

```python
from openapi_client.models.oracle_column import OracleColumn

# TODO update the JSON string below
json = "{}"
# create an instance of OracleColumn from a JSON string
oracle_column_instance = OracleColumn.from_json(json)
# print the JSON string representation of the object
print(OracleColumn.to_json())

# convert the object into a dict
oracle_column_dict = oracle_column_instance.to_dict()
# create an instance of OracleColumn from a dict
oracle_column_from_dict = OracleColumn.from_dict(oracle_column_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


