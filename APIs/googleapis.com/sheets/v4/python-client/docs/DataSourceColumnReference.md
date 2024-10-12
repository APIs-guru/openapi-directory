# DataSourceColumnReference

An unique identifier that references a data source column.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The display name of the column. It should be unique within a data source. | [optional] 

## Example

```python
from openapi_client.models.data_source_column_reference import DataSourceColumnReference

# TODO update the JSON string below
json = "{}"
# create an instance of DataSourceColumnReference from a JSON string
data_source_column_reference_instance = DataSourceColumnReference.from_json(json)
# print the JSON string representation of the object
print(DataSourceColumnReference.to_json())

# convert the object into a dict
data_source_column_reference_dict = data_source_column_reference_instance.to_dict()
# create an instance of DataSourceColumnReference from a dict
data_source_column_reference_from_dict = DataSourceColumnReference.from_dict(data_source_column_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


