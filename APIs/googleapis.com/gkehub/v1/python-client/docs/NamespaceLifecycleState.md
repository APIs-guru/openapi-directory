# NamespaceLifecycleState

NamespaceLifecycleState describes the state of a Namespace resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Output only. The current state of the Namespace resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.namespace_lifecycle_state import NamespaceLifecycleState

# TODO update the JSON string below
json = "{}"
# create an instance of NamespaceLifecycleState from a JSON string
namespace_lifecycle_state_instance = NamespaceLifecycleState.from_json(json)
# print the JSON string representation of the object
print(NamespaceLifecycleState.to_json())

# convert the object into a dict
namespace_lifecycle_state_dict = namespace_lifecycle_state_instance.to_dict()
# create an instance of NamespaceLifecycleState from a dict
namespace_lifecycle_state_from_dict = NamespaceLifecycleState.from_dict(namespace_lifecycle_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


