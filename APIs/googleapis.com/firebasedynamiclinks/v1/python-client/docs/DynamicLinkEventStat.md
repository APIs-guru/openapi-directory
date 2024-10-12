# DynamicLinkEventStat

Dynamic Link event stat.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **str** | The number of times this event occurred. | [optional] 
**event** | **str** | Link event. | [optional] 
**platform** | **str** | Requested platform. | [optional] 

## Example

```python
from openapi_client.models.dynamic_link_event_stat import DynamicLinkEventStat

# TODO update the JSON string below
json = "{}"
# create an instance of DynamicLinkEventStat from a JSON string
dynamic_link_event_stat_instance = DynamicLinkEventStat.from_json(json)
# print the JSON string representation of the object
print(DynamicLinkEventStat.to_json())

# convert the object into a dict
dynamic_link_event_stat_dict = dynamic_link_event_stat_instance.to_dict()
# create an instance of DynamicLinkEventStat from a dict
dynamic_link_event_stat_from_dict = DynamicLinkEventStat.from_dict(dynamic_link_event_stat_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


