# SearchApplicationQueryStats

Search application level query stats per date

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_date** | [**ModelDate**](ModelDate.md) |  | [optional] 
**query_count_by_status** | [**List[QueryCountByStatus]**](QueryCountByStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.search_application_query_stats import SearchApplicationQueryStats

# TODO update the JSON string below
json = "{}"
# create an instance of SearchApplicationQueryStats from a JSON string
search_application_query_stats_instance = SearchApplicationQueryStats.from_json(json)
# print the JSON string representation of the object
print(SearchApplicationQueryStats.to_json())

# convert the object into a dict
search_application_query_stats_dict = search_application_query_stats_instance.to_dict()
# create an instance of SearchApplicationQueryStats from a dict
search_application_query_stats_from_dict = SearchApplicationQueryStats.from_dict(search_application_query_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


