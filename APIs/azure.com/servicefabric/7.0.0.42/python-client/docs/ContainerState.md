# ContainerState

The container state.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail_status** | **str** | Human-readable status of this state. | [optional] 
**exit_code** | **str** | The container exit code. | [optional] 
**finish_time** | **datetime** | Date/time when the container state finished. | [optional] 
**start_time** | **datetime** | Date/time when the container state started. | [optional] 
**state** | **str** | The state of this container | [optional] 

## Example

```python
from openapi_client.models.container_state import ContainerState

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerState from a JSON string
container_state_instance = ContainerState.from_json(json)
# print the JSON string representation of the object
print(ContainerState.to_json())

# convert the object into a dict
container_state_dict = container_state_instance.to_dict()
# create an instance of ContainerState from a dict
container_state_from_dict = ContainerState.from_dict(container_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


