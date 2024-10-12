# ScopeLifecycleState

ScopeLifecycleState describes the state of a Scope resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Output only. The current state of the scope resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.scope_lifecycle_state import ScopeLifecycleState

# TODO update the JSON string below
json = "{}"
# create an instance of ScopeLifecycleState from a JSON string
scope_lifecycle_state_instance = ScopeLifecycleState.from_json(json)
# print the JSON string representation of the object
print(ScopeLifecycleState.to_json())

# convert the object into a dict
scope_lifecycle_state_dict = scope_lifecycle_state_instance.to_dict()
# create an instance of ScopeLifecycleState from a dict
scope_lifecycle_state_from_dict = ScopeLifecycleState.from_dict(scope_lifecycle_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


