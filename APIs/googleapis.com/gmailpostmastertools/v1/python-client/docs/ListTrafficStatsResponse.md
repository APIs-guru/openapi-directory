# ListTrafficStatsResponse

Response message for ListTrafficStats.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 
**traffic_stats** | [**List[TrafficStats]**](TrafficStats.md) | The list of TrafficStats. | [optional] 

## Example

```python
from openapi_client.models.list_traffic_stats_response import ListTrafficStatsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListTrafficStatsResponse from a JSON string
list_traffic_stats_response_instance = ListTrafficStatsResponse.from_json(json)
# print the JSON string representation of the object
print(ListTrafficStatsResponse.to_json())

# convert the object into a dict
list_traffic_stats_response_dict = list_traffic_stats_response_instance.to_dict()
# create an instance of ListTrafficStatsResponse from a dict
list_traffic_stats_response_from_dict = ListTrafficStatsResponse.from_dict(list_traffic_stats_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


