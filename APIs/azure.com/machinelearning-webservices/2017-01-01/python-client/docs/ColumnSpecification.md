# ColumnSpecification

Swagger 2.0 schema for a column within the data table representing a web service input or output. See Swagger specification: http://swagger.io/specification/

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enum** | **List[object]** | If the data type is categorical, this provides the list of accepted categories. | [optional] 
**format** | **str** | Additional format information for the data type. | [optional] 
**type** | **str** | Data type of the column. | 
**x_ms_isnullable** | **bool** | Flag indicating if the type supports null values or not. | [optional] 
**x_ms_isordered** | **bool** | Flag indicating whether the categories are treated as an ordered set or not, if this is a categorical column. | [optional] 

## Example

```python
from openapi_client.models.column_specification import ColumnSpecification

# TODO update the JSON string below
json = "{}"
# create an instance of ColumnSpecification from a JSON string
column_specification_instance = ColumnSpecification.from_json(json)
# print the JSON string representation of the object
print(ColumnSpecification.to_json())

# convert the object into a dict
column_specification_dict = column_specification_instance.to_dict()
# create an instance of ColumnSpecification from a dict
column_specification_from_dict = ColumnSpecification.from_dict(column_specification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


