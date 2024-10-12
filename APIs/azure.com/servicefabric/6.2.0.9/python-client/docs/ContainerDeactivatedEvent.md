# ContainerDeactivatedEvent

Container Deactivated event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code_package_name** | **str** | Name of Code package. | 
**container_name** | **str** | Name of Container. | 
**entry_point_type** | **str** | Type of EntryPoint. | 
**exit_code** | **int** | Exit code of process. | 
**host_id** | **str** | Host Id. | 
**image_name** | **str** | Name of Container image. | 
**is_exclusive** | **bool** | Indicates IsExclusive flag. | 
**service_name** | **str** | Name of Service. | 
**service_package_activation_id** | **str** | Activation Id of Service package. | 
**service_package_name** | **str** | Name of Service package. | 
**start_time** | **datetime** | Start time of process. | 
**unexpected_termination** | **bool** | Indicates if termination is unexpected. | 

## Example

```python
from openapi_client.models.container_deactivated_event import ContainerDeactivatedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerDeactivatedEvent from a JSON string
container_deactivated_event_instance = ContainerDeactivatedEvent.from_json(json)
# print the JSON string representation of the object
print(ContainerDeactivatedEvent.to_json())

# convert the object into a dict
container_deactivated_event_dict = container_deactivated_event_instance.to_dict()
# create an instance of ContainerDeactivatedEvent from a dict
container_deactivated_event_from_dict = ContainerDeactivatedEvent.from_dict(container_deactivated_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


