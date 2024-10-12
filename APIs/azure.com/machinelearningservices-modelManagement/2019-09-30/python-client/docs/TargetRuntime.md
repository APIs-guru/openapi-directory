# TargetRuntime

The target runtime.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**os_type** | **str** | The target operating system. | [optional] 
**properties** | **Dict[str, str]** | The properties dictionary. | [optional] [readonly] 
**runtime_type** | **str** | The target runtime type. | [optional] 
**target_architecture** | **str** | The target architecture. | [optional] 

## Example

```python
from openapi_client.models.target_runtime import TargetRuntime

# TODO update the JSON string below
json = "{}"
# create an instance of TargetRuntime from a JSON string
target_runtime_instance = TargetRuntime.from_json(json)
# print the JSON string representation of the object
print(TargetRuntime.to_json())

# convert the object into a dict
target_runtime_dict = target_runtime_instance.to_dict()
# create an instance of TargetRuntime from a dict
target_runtime_from_dict = TargetRuntime.from_dict(target_runtime_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


