# ContainerEvent

A container event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | The count of the event. | [optional] 
**first_timestamp** | **str** | Date/time of the first event. | [optional] 
**last_timestamp** | **str** | Date/time of the last event. | [optional] 
**message** | **str** | The event message | [optional] 
**name** | **str** | The name of the container event. | [optional] 
**type** | **str** | The event type. | [optional] 

## Example

```python
from openapi_client.models.container_event import ContainerEvent

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerEvent from a JSON string
container_event_instance = ContainerEvent.from_json(json)
# print the JSON string representation of the object
print(ContainerEvent.to_json())

# convert the object into a dict
container_event_dict = container_event_instance.to_dict()
# create an instance of ContainerEvent from a dict
container_event_from_dict = ContainerEvent.from_dict(container_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


