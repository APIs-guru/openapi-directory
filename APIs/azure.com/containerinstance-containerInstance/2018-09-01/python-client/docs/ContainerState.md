# ContainerState

The container instance state.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail_status** | **str** | The human-readable status of the container instance state. | [optional] 
**exit_code** | **int** | The container instance exit codes correspond to those from the &#x60;docker run&#x60; command. | [optional] 
**finish_time** | **datetime** | The date-time when the container instance state finished. | [optional] 
**start_time** | **datetime** | The date-time when the container instance state started. | [optional] 
**state** | **str** | The state of the container instance. | [optional] 

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


