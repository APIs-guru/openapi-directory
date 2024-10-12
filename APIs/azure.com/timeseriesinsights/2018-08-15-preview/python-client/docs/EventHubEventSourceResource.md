# EventHubEventSourceResource

An event source that receives its data from an Azure EventHub.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**EventHubEventSourceResourceProperties**](EventHubEventSourceResourceProperties.md) |  | 
**kind** | **str** | The kind of the event source. | 
**location** | **str** | Resource location | 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**name** | **str** | Resource name | [optional] [readonly] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.event_hub_event_source_resource import EventHubEventSourceResource

# TODO update the JSON string below
json = "{}"
# create an instance of EventHubEventSourceResource from a JSON string
event_hub_event_source_resource_instance = EventHubEventSourceResource.from_json(json)
# print the JSON string representation of the object
print(EventHubEventSourceResource.to_json())

# convert the object into a dict
event_hub_event_source_resource_dict = event_hub_event_source_resource_instance.to_dict()
# create an instance of EventHubEventSourceResource from a dict
event_hub_event_source_resource_from_dict = EventHubEventSourceResource.from_dict(event_hub_event_source_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


