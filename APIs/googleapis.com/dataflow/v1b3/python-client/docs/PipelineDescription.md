# PipelineDescription

A descriptive representation of submitted pipeline as well as the executed form. This data is provided by the Dataflow service for ease of visualizing the pipeline and interpreting Dataflow provided metrics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_data** | [**List[DisplayData]**](DisplayData.md) | Pipeline level display data. | [optional] 
**execution_pipeline_stage** | [**List[ExecutionStageSummary]**](ExecutionStageSummary.md) | Description of each stage of execution of the pipeline. | [optional] 
**original_pipeline_transform** | [**List[TransformSummary]**](TransformSummary.md) | Description of each transform in the pipeline and collections between them. | [optional] 
**step_names_hash** | **str** | A hash value of the submitted pipeline portable graph step names if exists. | [optional] 

## Example

```python
from openapi_client.models.pipeline_description import PipelineDescription

# TODO update the JSON string below
json = "{}"
# create an instance of PipelineDescription from a JSON string
pipeline_description_instance = PipelineDescription.from_json(json)
# print the JSON string representation of the object
print(PipelineDescription.to_json())

# convert the object into a dict
pipeline_description_dict = pipeline_description_instance.to_dict()
# create an instance of PipelineDescription from a dict
pipeline_description_from_dict = PipelineDescription.from_dict(pipeline_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


