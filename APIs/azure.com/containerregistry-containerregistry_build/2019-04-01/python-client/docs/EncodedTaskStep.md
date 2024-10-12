# EncodedTaskStep

The properties of a encoded task step.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encoded_task_content** | **str** | Base64 encoded value of the template/definition file content. | 
**encoded_values_content** | **str** | Base64 encoded value of the parameters/values file content. | [optional] 
**values** | [**List[SetValue]**](SetValue.md) | The collection of overridable values that can be passed when running a task. | [optional] 

## Example

```python
from openapi_client.models.encoded_task_step import EncodedTaskStep

# TODO update the JSON string below
json = "{}"
# create an instance of EncodedTaskStep from a JSON string
encoded_task_step_instance = EncodedTaskStep.from_json(json)
# print the JSON string representation of the object
print(EncodedTaskStep.to_json())

# convert the object into a dict
encoded_task_step_dict = encoded_task_step_instance.to_dict()
# create an instance of EncodedTaskStep from a dict
encoded_task_step_from_dict = EncodedTaskStep.from_dict(encoded_task_step_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


