# OverviewEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acknowledged_alerts** | **List[str]** |  | [optional] 
**alert_id** | **str** |  | [optional] 
**category_id** | **str** |  | [optional] 
**closed_alerts** | **List[str]** |  | [optional] 
**creation_time** | **datetime** |  | [optional] 
**event_source_type** | [**EventSourceTypes**](EventSourceTypes.md) |  | [optional] 
**event_status** | [**EventStatusCodes**](EventStatusCodes.md) |  | [optional] 
**id** | **str** |  | [optional] 
**last_modified** | **datetime** |  | [optional] 
**severity** | [**EventSeverities**](EventSeverities.md) |  | [optional] 
**team_id** | **str** |  | [optional] 
**text** | **str** |  | [optional] 
**title** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.overview_event import OverviewEvent

# TODO update the JSON string below
json = "{}"
# create an instance of OverviewEvent from a JSON string
overview_event_instance = OverviewEvent.from_json(json)
# print the JSON string representation of the object
print(OverviewEvent.to_json())

# convert the object into a dict
overview_event_dict = overview_event_instance.to_dict()
# create an instance of OverviewEvent from a dict
overview_event_from_dict = OverviewEvent.from_dict(overview_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


