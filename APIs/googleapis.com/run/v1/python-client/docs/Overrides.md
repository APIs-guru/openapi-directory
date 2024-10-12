# Overrides

RunJob Overrides that contains Execution fields to be overridden on the go.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container_overrides** | [**List[ContainerOverride]**](ContainerOverride.md) | Per container override specification. | [optional] 
**task_count** | **int** | The desired number of tasks the execution should run. Will replace existing task_count value. | [optional] 
**timeout_seconds** | **int** | Duration in seconds the task may be active before the system will actively try to mark it failed and kill associated containers. Will replace existing timeout_seconds value. | [optional] 

## Example

```python
from openapi_client.models.overrides import Overrides

# TODO update the JSON string below
json = "{}"
# create an instance of Overrides from a JSON string
overrides_instance = Overrides.from_json(json)
# print the JSON string representation of the object
print(Overrides.to_json())

# convert the object into a dict
overrides_dict = overrides_instance.to_dict()
# create an instance of Overrides from a dict
overrides_from_dict = Overrides.from_dict(overrides_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


