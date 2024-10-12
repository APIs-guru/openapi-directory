# DynamicLinkStats

Analytics stats of a Dynamic Link for a given timeframe.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**link_event_stats** | [**List[DynamicLinkEventStat]**](DynamicLinkEventStat.md) | Dynamic Link event stats. | [optional] 

## Example

```python
from openapi_client.models.dynamic_link_stats import DynamicLinkStats

# TODO update the JSON string below
json = "{}"
# create an instance of DynamicLinkStats from a JSON string
dynamic_link_stats_instance = DynamicLinkStats.from_json(json)
# print the JSON string representation of the object
print(DynamicLinkStats.to_json())

# convert the object into a dict
dynamic_link_stats_dict = dynamic_link_stats_instance.to_dict()
# create an instance of DynamicLinkStats from a dict
dynamic_link_stats_from_dict = DynamicLinkStats.from_dict(dynamic_link_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


