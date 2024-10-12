# EventSourceResource

An environment receives data from one or more event sources. Each event source has associated connection info that allows the Time Series Insights ingress pipeline to connect to and pull data from the event source

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | The kind of the event source. | 
**location** | **str** | Resource location | 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**name** | **str** | Resource name | [optional] [readonly] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.event_source_resource import EventSourceResource

# TODO update the JSON string below
json = "{}"
# create an instance of EventSourceResource from a JSON string
event_source_resource_instance = EventSourceResource.from_json(json)
# print the JSON string representation of the object
print(EventSourceResource.to_json())

# convert the object into a dict
event_source_resource_dict = event_source_resource_instance.to_dict()
# create an instance of EventSourceResource from a dict
event_source_resource_from_dict = EventSourceResource.from_dict(event_source_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


