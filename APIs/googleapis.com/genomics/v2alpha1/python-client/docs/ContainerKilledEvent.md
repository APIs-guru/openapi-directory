# ContainerKilledEvent

An event generated when a container is forcibly terminated by the worker. Currently, this only occurs when the container outlives the timeout specified by the user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_id** | **int** | The numeric ID of the action that started the container. | [optional] 

## Example

```python
from openapi_client.models.container_killed_event import ContainerKilledEvent

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerKilledEvent from a JSON string
container_killed_event_instance = ContainerKilledEvent.from_json(json)
# print the JSON string representation of the object
print(ContainerKilledEvent.to_json())

# convert the object into a dict
container_killed_event_dict = container_killed_event_instance.to_dict()
# create an instance of ContainerKilledEvent from a dict
container_killed_event_from_dict = ContainerKilledEvent.from_dict(container_killed_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


