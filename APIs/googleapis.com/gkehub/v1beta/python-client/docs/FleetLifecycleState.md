# FleetLifecycleState

FleetLifecycleState describes the state of a Fleet resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Output only. The current state of the Fleet resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.fleet_lifecycle_state import FleetLifecycleState

# TODO update the JSON string below
json = "{}"
# create an instance of FleetLifecycleState from a JSON string
fleet_lifecycle_state_instance = FleetLifecycleState.from_json(json)
# print the JSON string representation of the object
print(FleetLifecycleState.to_json())

# convert the object into a dict
fleet_lifecycle_state_dict = fleet_lifecycle_state_instance.to_dict()
# create an instance of FleetLifecycleState from a dict
fleet_lifecycle_state_from_dict = FleetLifecycleState.from_dict(fleet_lifecycle_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


