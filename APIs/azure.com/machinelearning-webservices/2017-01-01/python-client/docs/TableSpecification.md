# TableSpecification

The swagger 2.0 schema describing a single service input or output. See Swagger specification: http://swagger.io/specification/

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Swagger schema description. | [optional] 
**format** | **str** | The format, if &#39;type&#39; is not &#39;object&#39; | [optional] 
**properties** | [**Dict[str, ColumnSpecification]**](ColumnSpecification.md) | The set of columns within the data table. | [optional] 
**title** | **str** | Swagger schema title. | [optional] 
**type** | **str** | The type of the entity described in swagger. | [default to 'object']

## Example

```python
from openapi_client.models.table_specification import TableSpecification

# TODO update the JSON string below
json = "{}"
# create an instance of TableSpecification from a JSON string
table_specification_instance = TableSpecification.from_json(json)
# print the JSON string representation of the object
print(TableSpecification.to_json())

# convert the object into a dict
table_specification_dict = table_specification_instance.to_dict()
# create an instance of TableSpecification from a dict
table_specification_from_dict = TableSpecification.from_dict(table_specification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


