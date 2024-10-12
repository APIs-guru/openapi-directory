# ContainerState

ContainerState contains the externally-visible container state that is used to communicate the state and reasoning for that state to the CLH. This data is not persisted by CCFE, but is instead derived from CCFE's internal representation of the container state.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_reasons** | [**Reasons**](Reasons.md) |  | [optional] 
**previous_reasons** | [**Reasons**](Reasons.md) |  | [optional] 
**state** | **str** | The current state of the container. This state is the culmination of all of the opinions from external systems that CCFE knows about of the container. | [optional] 

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


