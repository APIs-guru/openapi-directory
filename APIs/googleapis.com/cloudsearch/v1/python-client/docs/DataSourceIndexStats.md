# DataSourceIndexStats

Aggregation of items by status code as of the specified date.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_date** | [**ModelDate**](ModelDate.md) |  | [optional] 
**item_count_by_status** | [**List[ItemCountByStatus]**](ItemCountByStatus.md) | Number of items aggregrated by status code. | [optional] 

## Example

```python
from openapi_client.models.data_source_index_stats import DataSourceIndexStats

# TODO update the JSON string below
json = "{}"
# create an instance of DataSourceIndexStats from a JSON string
data_source_index_stats_instance = DataSourceIndexStats.from_json(json)
# print the JSON string representation of the object
print(DataSourceIndexStats.to_json())

# convert the object into a dict
data_source_index_stats_dict = data_source_index_stats_instance.to_dict()
# create an instance of DataSourceIndexStats from a dict
data_source_index_stats_from_dict = DataSourceIndexStats.from_dict(data_source_index_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


