# SearchApplicationSessionStats


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_date** | [**ModelDate**](ModelDate.md) |  | [optional] 
**search_sessions_count** | **str** | The count of search sessions on the day | [optional] 

## Example

```python
from openapi_client.models.search_application_session_stats import SearchApplicationSessionStats

# TODO update the JSON string below
json = "{}"
# create an instance of SearchApplicationSessionStats from a JSON string
search_application_session_stats_instance = SearchApplicationSessionStats.from_json(json)
# print the JSON string representation of the object
print(SearchApplicationSessionStats.to_json())

# convert the object into a dict
search_application_session_stats_dict = search_application_session_stats_instance.to_dict()
# create an instance of SearchApplicationSessionStats from a dict
search_application_session_stats_from_dict = SearchApplicationSessionStats.from_dict(search_application_session_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


