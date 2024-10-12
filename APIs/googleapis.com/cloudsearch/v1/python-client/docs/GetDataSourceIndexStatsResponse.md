# GetDataSourceIndexStatsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**average_indexed_item_count** | **str** | Average item count for the given date range for which billing is done. | [optional] 
**stats** | [**List[DataSourceIndexStats]**](DataSourceIndexStats.md) | Summary of indexed item counts, one for each day in the requested range. | [optional] 

## Example

```python
from openapi_client.models.get_data_source_index_stats_response import GetDataSourceIndexStatsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetDataSourceIndexStatsResponse from a JSON string
get_data_source_index_stats_response_instance = GetDataSourceIndexStatsResponse.from_json(json)
# print the JSON string representation of the object
print(GetDataSourceIndexStatsResponse.to_json())

# convert the object into a dict
get_data_source_index_stats_response_dict = get_data_source_index_stats_response_instance.to_dict()
# create an instance of GetDataSourceIndexStatsResponse from a dict
get_data_source_index_stats_response_from_dict = GetDataSourceIndexStatsResponse.from_dict(get_data_source_index_stats_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


