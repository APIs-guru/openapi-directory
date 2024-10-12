# ContainerStartedEvent

An event generated when a container starts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_id** | **int** | The numeric ID of the action that started this container. | [optional] 
**ip_address** | **str** | The public IP address that can be used to connect to the container. This field is only populated when at least one port mapping is present. If the instance was created with a private address, this field will be empty even if port mappings exist. | [optional] 
**port_mappings** | **Dict[str, int]** | The container-to-host port mappings installed for this container. This set will contain any ports exposed using the &#x60;PUBLISH_EXPOSED_PORTS&#x60; flag as well as any specified in the &#x60;Action&#x60; definition. | [optional] 

## Example

```python
from openapi_client.models.container_started_event import ContainerStartedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerStartedEvent from a JSON string
container_started_event_instance = ContainerStartedEvent.from_json(json)
# print the JSON string representation of the object
print(ContainerStartedEvent.to_json())

# convert the object into a dict
container_started_event_dict = container_started_event_instance.to_dict()
# create an instance of ContainerStartedEvent from a dict
container_started_event_from_dict = ContainerStartedEvent.from_dict(container_started_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


