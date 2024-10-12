# TransformColumn

Information about a single transform column.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Output only. Name of the column. | [optional] [readonly] 
**transform_sql** | **str** | Output only. The SQL expression used in the column transform. | [optional] [readonly] 
**type** | [**StandardSqlDataType**](StandardSqlDataType.md) |  | [optional] 

## Example

```python
from openapi_client.models.transform_column import TransformColumn

# TODO update the JSON string below
json = "{}"
# create an instance of TransformColumn from a JSON string
transform_column_instance = TransformColumn.from_json(json)
# print the JSON string representation of the object
print(TransformColumn.to_json())

# convert the object into a dict
transform_column_dict = transform_column_instance.to_dict()
# create an instance of TransformColumn from a dict
transform_column_from_dict = TransformColumn.from_dict(transform_column_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


