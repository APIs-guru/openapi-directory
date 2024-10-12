# ResultTableColumnHeader

The description of a column of the result table.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column_type** | **str** | The type of the column (&#x60;DIMENSION&#x60; or &#x60;METRIC&#x60;). | [optional] 
**data_type** | **str** | The type of the data in the column (&#x60;STRING&#x60;, &#x60;INTEGER&#x60;, &#x60;FLOAT&#x60;, etc.). | [optional] 
**name** | **str** | The name of the dimension or metric. | [optional] 

## Example

```python
from openapi_client.models.result_table_column_header import ResultTableColumnHeader

# TODO update the JSON string below
json = "{}"
# create an instance of ResultTableColumnHeader from a JSON string
result_table_column_header_instance = ResultTableColumnHeader.from_json(json)
# print the JSON string representation of the object
print(ResultTableColumnHeader.to_json())

# convert the object into a dict
result_table_column_header_dict = result_table_column_header_instance.to_dict()
# create an instance of ResultTableColumnHeader from a dict
result_table_column_header_from_dict = ResultTableColumnHeader.from_dict(result_table_column_header_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


