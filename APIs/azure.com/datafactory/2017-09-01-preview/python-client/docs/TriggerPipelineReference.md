# TriggerPipelineReference

Pipeline that needs to be triggered with the given parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameters** | **Dict[str, object]** | An object mapping parameter names to argument values. | [optional] 
**pipeline_reference** | [**PipelineReference**](PipelineReference.md) |  | [optional] 

## Example

```python
from openapi_client.models.trigger_pipeline_reference import TriggerPipelineReference

# TODO update the JSON string below
json = "{}"
# create an instance of TriggerPipelineReference from a JSON string
trigger_pipeline_reference_instance = TriggerPipelineReference.from_json(json)
# print the JSON string representation of the object
print(TriggerPipelineReference.to_json())

# convert the object into a dict
trigger_pipeline_reference_dict = trigger_pipeline_reference_instance.to_dict()
# create an instance of TriggerPipelineReference from a dict
trigger_pipeline_reference_from_dict = TriggerPipelineReference.from_dict(trigger_pipeline_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


