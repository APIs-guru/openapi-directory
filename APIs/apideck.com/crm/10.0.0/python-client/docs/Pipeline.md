# Pipeline


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** | Whether the Pipeline is active or not. | [optional] 
**archived** | **bool** | Whether the Pipeline is archived or not. | [optional] 
**created_at** | **datetime** | The date and time when the object was created. | [optional] [readonly] 
**currency** | [**Currency**](Currency.md) |  | [optional] 
**display_order** | **int** | The order in which the Pipeline is displayed in the UI. | [optional] 
**id** | **str** | The unique identifier of the Pipeline. | [optional] 
**name** | **str** | The name of the Pipeline. | 
**stages** | [**List[PipelineStagesInner]**](PipelineStagesInner.md) | The Pipeline Stages. | [optional] 
**updated_at** | **datetime** | The date and time when the object was last updated. | [optional] [readonly] 
**win_probability_enabled** | **bool** | Whether the Pipeline has win probability enabled or not. | [optional] 

## Example

```python
from openapi_client.models.pipeline import Pipeline

# TODO update the JSON string below
json = "{}"
# create an instance of Pipeline from a JSON string
pipeline_instance = Pipeline.from_json(json)
# print the JSON string representation of the object
print(Pipeline.to_json())

# convert the object into a dict
pipeline_dict = pipeline_instance.to_dict()
# create an instance of Pipeline from a dict
pipeline_from_dict = Pipeline.from_dict(pipeline_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


