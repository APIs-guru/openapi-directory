# PipelineCondition

PipelineCondition contains all conditions relevant to a Delivery Pipeline.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pipeline_ready_condition** | [**PipelineReadyCondition**](PipelineReadyCondition.md) |  | [optional] 
**targets_present_condition** | [**TargetsPresentCondition**](TargetsPresentCondition.md) |  | [optional] 
**targets_type_condition** | [**TargetsTypeCondition**](TargetsTypeCondition.md) |  | [optional] 

## Example

```python
from openapi_client.models.pipeline_condition import PipelineCondition

# TODO update the JSON string below
json = "{}"
# create an instance of PipelineCondition from a JSON string
pipeline_condition_instance = PipelineCondition.from_json(json)
# print the JSON string representation of the object
print(PipelineCondition.to_json())

# convert the object into a dict
pipeline_condition_dict = pipeline_condition_instance.to_dict()
# create an instance of PipelineCondition from a dict
pipeline_condition_from_dict = PipelineCondition.from_dict(pipeline_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


