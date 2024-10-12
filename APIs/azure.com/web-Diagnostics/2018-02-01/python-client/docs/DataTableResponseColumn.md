# DataTableResponseColumn

Column definition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column_name** | **str** | Name of the column | [optional] 
**column_type** | **str** | Column Type | [optional] 
**data_type** | **str** | Data type which looks like &#39;String&#39; or &#39;Int32&#39;. | [optional] 

## Example

```python
from openapi_client.models.data_table_response_column import DataTableResponseColumn

# TODO update the JSON string below
json = "{}"
# create an instance of DataTableResponseColumn from a JSON string
data_table_response_column_instance = DataTableResponseColumn.from_json(json)
# print the JSON string representation of the object
print(DataTableResponseColumn.to_json())

# convert the object into a dict
data_table_response_column_dict = data_table_response_column_instance.to_dict()
# create an instance of DataTableResponseColumn from a dict
data_table_response_column_from_dict = DataTableResponseColumn.from_dict(data_table_response_column_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


