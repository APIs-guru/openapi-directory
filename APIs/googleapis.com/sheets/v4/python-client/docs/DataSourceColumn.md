# DataSourceColumn

A column in a data source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**formula** | **str** | The formula of the calculated column. | [optional] 
**reference** | [**DataSourceColumnReference**](DataSourceColumnReference.md) |  | [optional] 

## Example

```python
from openapi_client.models.data_source_column import DataSourceColumn

# TODO update the JSON string below
json = "{}"
# create an instance of DataSourceColumn from a JSON string
data_source_column_instance = DataSourceColumn.from_json(json)
# print the JSON string representation of the object
print(DataSourceColumn.to_json())

# convert the object into a dict
data_source_column_dict = data_source_column_instance.to_dict()
# create an instance of DataSourceColumn from a dict
data_source_column_from_dict = DataSourceColumn.from_dict(data_source_column_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


