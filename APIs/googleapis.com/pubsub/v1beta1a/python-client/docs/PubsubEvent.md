# PubsubEvent

An event indicating a received message or truncation event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deleted** | **bool** | Indicates that this subscription has been deleted. (Note that pull subscribers will always receive NOT_FOUND in response in their pull request on the subscription, rather than seeing this boolean.) | [optional] 
**message** | [**PubsubMessage**](PubsubMessage.md) |  | [optional] 
**subscription** | **str** | The subscription that received the event. | [optional] 
**truncated** | **bool** | Indicates that this subscription has been truncated. | [optional] 

## Example

```python
from openapi_client.models.pubsub_event import PubsubEvent

# TODO update the JSON string below
json = "{}"
# create an instance of PubsubEvent from a JSON string
pubsub_event_instance = PubsubEvent.from_json(json)
# print the JSON string representation of the object
print(PubsubEvent.to_json())

# convert the object into a dict
pubsub_event_dict = pubsub_event_instance.to_dict()
# create an instance of PubsubEvent from a dict
pubsub_event_from_dict = PubsubEvent.from_dict(pubsub_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


