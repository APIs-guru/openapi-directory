# GetSearchApplicationSessionStatsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stats** | [**List[SearchApplicationSessionStats]**](SearchApplicationSessionStats.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_search_application_session_stats_response import GetSearchApplicationSessionStatsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetSearchApplicationSessionStatsResponse from a JSON string
get_search_application_session_stats_response_instance = GetSearchApplicationSessionStatsResponse.from_json(json)
# print the JSON string representation of the object
print(GetSearchApplicationSessionStatsResponse.to_json())

# convert the object into a dict
get_search_application_session_stats_response_dict = get_search_application_session_stats_response_instance.to_dict()
# create an instance of GetSearchApplicationSessionStatsResponse from a dict
get_search_application_session_stats_response_from_dict = GetSearchApplicationSessionStatsResponse.from_dict(get_search_application_session_stats_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


