# ResourceCondition

ResourceCondition provides a standard mechanism for higher-level status reporting from controller.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_transition_time** | **str** | Last time the condition transit from one status to another. | [optional] 
**message** | **str** | Human-readable message indicating details about last transition. | [optional] 
**reason** | **str** | Machine-readable message indicating details about last transition. | [optional] 
**state** | **str** | state of the condition. | [optional] 
**type** | **str** | Type of the condition. (e.g., ClusterRunning, NodePoolRunning or ServerSidePreflightReady) | [optional] 

## Example

```python
from openapi_client.models.resource_condition import ResourceCondition

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceCondition from a JSON string
resource_condition_instance = ResourceCondition.from_json(json)
# print the JSON string representation of the object
print(ResourceCondition.to_json())

# convert the object into a dict
resource_condition_dict = resource_condition_instance.to_dict()
# create an instance of ResourceCondition from a dict
resource_condition_from_dict = ResourceCondition.from_dict(resource_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


