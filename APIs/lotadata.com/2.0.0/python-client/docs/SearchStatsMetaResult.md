# SearchStatsMetaResult

Shows invocation details about the query. Running query again, could produce different results

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Total matches for the query | [optional] 
**fieldset** | **str** | Specific fields returned by this query | [optional] 
**runtime** | **int** | Server side run time in msec for this request | [optional] 

## Example

```python
from openapi_client.models.search_stats_meta_result import SearchStatsMetaResult

# TODO update the JSON string below
json = "{}"
# create an instance of SearchStatsMetaResult from a JSON string
search_stats_meta_result_instance = SearchStatsMetaResult.from_json(json)
# print the JSON string representation of the object
print(SearchStatsMetaResult.to_json())

# convert the object into a dict
search_stats_meta_result_dict = search_stats_meta_result_instance.to_dict()
# create an instance of SearchStatsMetaResult from a dict
search_stats_meta_result_from_dict = SearchStatsMetaResult.from_dict(search_stats_meta_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


