# EventSourceEndpointInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** |  | [optional] 
**group_id** | **str** |  | [optional] 
**last_event_raised** | **datetime** |  | [optional] 
**subscription_id** | **str** |  | [optional] 
**team_id** | **str** |  | [optional] 
**type** | [**EventSourceEndpointTypes**](EventSourceEndpointTypes.md) |  | [optional] 

## Example

```python
from openapi_client.models.event_source_endpoint_info import EventSourceEndpointInfo

# TODO update the JSON string below
json = "{}"
# create an instance of EventSourceEndpointInfo from a JSON string
event_source_endpoint_info_instance = EventSourceEndpointInfo.from_json(json)
# print the JSON string representation of the object
print(EventSourceEndpointInfo.to_json())

# convert the object into a dict
event_source_endpoint_info_dict = event_source_endpoint_info_instance.to_dict()
# create an instance of EventSourceEndpointInfo from a dict
event_source_endpoint_info_from_dict = EventSourceEndpointInfo.from_dict(event_source_endpoint_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


