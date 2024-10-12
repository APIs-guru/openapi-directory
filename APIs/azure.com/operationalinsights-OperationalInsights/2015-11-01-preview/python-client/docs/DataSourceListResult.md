# DataSourceListResult

The list data source by workspace operation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link (url) to the next page of datasources. | [optional] 
**value** | [**List[DataSource]**](DataSource.md) | A list of datasources. | [optional] 

## Example

```python
from openapi_client.models.data_source_list_result import DataSourceListResult

# TODO update the JSON string below
json = "{}"
# create an instance of DataSourceListResult from a JSON string
data_source_list_result_instance = DataSourceListResult.from_json(json)
# print the JSON string representation of the object
print(DataSourceListResult.to_json())

# convert the object into a dict
data_source_list_result_dict = data_source_list_result_instance.to_dict()
# create an instance of DataSourceListResult from a dict
data_source_list_result_from_dict = DataSourceListResult.from_dict(data_source_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


