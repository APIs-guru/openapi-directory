# JitSchedulingPolicy

The JIT scheduling policies.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **str** |  | 
**start_time** | **datetime** | The start time of the request. | 
**type** | [**JitSchedulingType**](JitSchedulingType.md) |  | 

## Example

```python
from openapi_client.models.jit_scheduling_policy import JitSchedulingPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of JitSchedulingPolicy from a JSON string
jit_scheduling_policy_instance = JitSchedulingPolicy.from_json(json)
# print the JSON string representation of the object
print(JitSchedulingPolicy.to_json())

# convert the object into a dict
jit_scheduling_policy_dict = jit_scheduling_policy_instance.to_dict()
# create an instance of JitSchedulingPolicy from a dict
jit_scheduling_policy_from_dict = JitSchedulingPolicy.from_dict(jit_scheduling_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


