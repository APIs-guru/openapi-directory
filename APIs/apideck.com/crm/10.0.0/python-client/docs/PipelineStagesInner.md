# PipelineStagesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_order** | **int** | The order in which the Pipeline Stage is displayed in the UI. | [optional] 
**id** | **str** | The unique identifier of the Pipeline Stage. | [optional] [readonly] 
**name** | **str** | The name of the Pipeline Stage. | [optional] 
**value** | **str** | The value of the Pipeline Stage. | [optional] 
**win_probability** | **int** | The expected probability of winning an Opportunity in this Pipeline Stage. Valid values are [0-100]. | [optional] 

## Example

```python
from openapi_client.models.pipeline_stages_inner import PipelineStagesInner

# TODO update the JSON string below
json = "{}"
# create an instance of PipelineStagesInner from a JSON string
pipeline_stages_inner_instance = PipelineStagesInner.from_json(json)
# print the JSON string representation of the object
print(PipelineStagesInner.to_json())

# convert the object into a dict
pipeline_stages_inner_dict = pipeline_stages_inner_instance.to_dict()
# create an instance of PipelineStagesInner from a dict
pipeline_stages_inner_from_dict = PipelineStagesInner.from_dict(pipeline_stages_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


