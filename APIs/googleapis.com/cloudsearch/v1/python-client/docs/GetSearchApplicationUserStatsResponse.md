# GetSearchApplicationUserStatsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stats** | [**List[SearchApplicationUserStats]**](SearchApplicationUserStats.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_search_application_user_stats_response import GetSearchApplicationUserStatsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetSearchApplicationUserStatsResponse from a JSON string
get_search_application_user_stats_response_instance = GetSearchApplicationUserStatsResponse.from_json(json)
# print the JSON string representation of the object
print(GetSearchApplicationUserStatsResponse.to_json())

# convert the object into a dict
get_search_application_user_stats_response_dict = get_search_application_user_stats_response_instance.to_dict()
# create an instance of GetSearchApplicationUserStatsResponse from a dict
get_search_application_user_stats_response_from_dict = GetSearchApplicationUserStatsResponse.from_dict(get_search_application_user_stats_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


