# ContainerStoppedEvent

An event generated when a container exits.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_id** | **int** | The numeric ID of the action that started this container. | [optional] 
**exit_status** | **int** | The exit status of the container. | [optional] 
**stderr** | **str** | The tail end of any content written to standard error by the container. If the content emits large amounts of debugging noise or contains sensitive information, you can prevent the content from being printed by setting the &#x60;DISABLE_STANDARD_ERROR_CAPTURE&#x60; flag. Note that only a small amount of the end of the stream is captured here. The entire stream is stored in the &#x60;/google/logs&#x60; directory mounted into each action, and can be copied off the machine as described elsewhere. | [optional] 

## Example

```python
from openapi_client.models.container_stopped_event import ContainerStoppedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerStoppedEvent from a JSON string
container_stopped_event_instance = ContainerStoppedEvent.from_json(json)
# print the JSON string representation of the object
print(ContainerStoppedEvent.to_json())

# convert the object into a dict
container_stopped_event_dict = container_stopped_event_instance.to_dict()
# create an instance of ContainerStoppedEvent from a dict
container_stopped_event_from_dict = ContainerStoppedEvent.from_dict(container_stopped_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


