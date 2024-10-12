# ExtractedTableColumn

Extraction information of a column in  a table.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entries** | **List[List[ExtractedToken]]** | Extracted text for each cell of a column. Each cell  in the column can have a list of one or more tokens. | [optional] 
**header** | [**List[ExtractedToken]**](ExtractedToken.md) | List of extracted tokens for the column header. | [optional] 

## Example

```python
from openapi_client.models.extracted_table_column import ExtractedTableColumn

# TODO update the JSON string below
json = "{}"
# create an instance of ExtractedTableColumn from a JSON string
extracted_table_column_instance = ExtractedTableColumn.from_json(json)
# print the JSON string representation of the object
print(ExtractedTableColumn.to_json())

# convert the object into a dict
extracted_table_column_dict = extracted_table_column_instance.to_dict()
# create an instance of ExtractedTableColumn from a dict
extracted_table_column_from_dict = ExtractedTableColumn.from_dict(extracted_table_column_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


