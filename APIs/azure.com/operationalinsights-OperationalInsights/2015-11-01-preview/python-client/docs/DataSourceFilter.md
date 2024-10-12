# DataSourceFilter

DataSource filter. Right now, only filter by kind is supported.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | [**DataSourceKind**](DataSourceKind.md) |  | [optional] 

## Example

```python
from openapi_client.models.data_source_filter import DataSourceFilter

# TODO update the JSON string below
json = "{}"
# create an instance of DataSourceFilter from a JSON string
data_source_filter_instance = DataSourceFilter.from_json(json)
# print the JSON string representation of the object
print(DataSourceFilter.to_json())

# convert the object into a dict
data_source_filter_dict = data_source_filter_instance.to_dict()
# create an instance of DataSourceFilter from a dict
data_source_filter_from_dict = DataSourceFilter.from_dict(data_source_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


