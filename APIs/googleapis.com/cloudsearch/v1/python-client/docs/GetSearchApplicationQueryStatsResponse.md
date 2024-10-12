# GetSearchApplicationQueryStatsResponse

Response format for getting query stats for a search application between given dates.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stats** | [**List[SearchApplicationQueryStats]**](SearchApplicationQueryStats.md) | Query stats per date for a search application. | [optional] 
**total_query_count** | **str** | Total successful query count (status code 200) for the given date range. | [optional] 

## Example

```python
from openapi_client.models.get_search_application_query_stats_response import GetSearchApplicationQueryStatsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetSearchApplicationQueryStatsResponse from a JSON string
get_search_application_query_stats_response_instance = GetSearchApplicationQueryStatsResponse.from_json(json)
# print the JSON string representation of the object
print(GetSearchApplicationQueryStatsResponse.to_json())

# convert the object into a dict
get_search_application_query_stats_response_dict = get_search_application_query_stats_response_instance.to_dict()
# create an instance of GetSearchApplicationQueryStatsResponse from a dict
get_search_application_query_stats_response_from_dict = GetSearchApplicationQueryStatsResponse.from_dict(get_search_application_query_stats_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


