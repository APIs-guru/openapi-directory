# ListGroupStatsResponse

Contains a set of requested error group stats.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_group_stats** | [**List[ErrorGroupStats]**](ErrorGroupStats.md) | The error group stats which match the given request. | [optional] 
**next_page_token** | **str** | If non-empty, more results are available. Pass this token, along with the same query parameters as the first request, to view the next page of results. | [optional] 
**time_range_begin** | **str** | The timestamp specifies the start time to which the request was restricted. The start time is set based on the requested time range. It may be adjusted to a later time if a project has exceeded the storage quota and older data has been deleted. | [optional] 

## Example

```python
from openapi_client.models.list_group_stats_response import ListGroupStatsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListGroupStatsResponse from a JSON string
list_group_stats_response_instance = ListGroupStatsResponse.from_json(json)
# print the JSON string representation of the object
print(ListGroupStatsResponse.to_json())

# convert the object into a dict
list_group_stats_response_dict = list_group_stats_response_instance.to_dict()
# create an instance of ListGroupStatsResponse from a dict
list_group_stats_response_from_dict = ListGroupStatsResponse.from_dict(list_group_stats_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


