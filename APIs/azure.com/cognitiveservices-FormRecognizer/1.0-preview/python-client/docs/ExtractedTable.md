# ExtractedTable

Extraction information about a table  contained in a page.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**columns** | [**List[ExtractedTableColumn]**](ExtractedTableColumn.md) | List of columns contained in the table. | [optional] 
**id** | **str** | Table identifier. | [optional] 

## Example

```python
from openapi_client.models.extracted_table import ExtractedTable

# TODO update the JSON string below
json = "{}"
# create an instance of ExtractedTable from a JSON string
extracted_table_instance = ExtractedTable.from_json(json)
# print the JSON string representation of the object
print(ExtractedTable.to_json())

# convert the object into a dict
extracted_table_dict = extracted_table_instance.to_dict()
# create an instance of ExtractedTable from a dict
extracted_table_from_dict = ExtractedTable.from_dict(extracted_table_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


