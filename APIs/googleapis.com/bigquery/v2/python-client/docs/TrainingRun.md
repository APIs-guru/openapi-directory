# TrainingRun

Information about a single training query run for the model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**class_level_global_explanations** | [**List[GlobalExplanation]**](GlobalExplanation.md) | Output only. Global explanation contains the explanation of top features on the class level. Applies to classification models only. | [optional] [readonly] 
**data_split_result** | [**DataSplitResult**](DataSplitResult.md) |  | [optional] 
**evaluation_metrics** | [**EvaluationMetrics**](EvaluationMetrics.md) |  | [optional] 
**model_level_global_explanation** | [**GlobalExplanation**](GlobalExplanation.md) |  | [optional] 
**results** | [**List[IterationResult]**](IterationResult.md) | Output only. Output of each iteration run, results.size() &lt;&#x3D; max_iterations. | [optional] [readonly] 
**start_time** | **str** | Output only. The start time of this training run. | [optional] [readonly] 
**training_options** | [**TrainingOptions**](TrainingOptions.md) |  | [optional] 
**training_start_time** | **str** | Output only. The start time of this training run, in milliseconds since epoch. | [optional] [readonly] 
**vertex_ai_model_id** | **str** | The model id in the [Vertex AI Model Registry](https://cloud.google.com/vertex-ai/docs/model-registry/introduction) for this training run. | [optional] 
**vertex_ai_model_version** | **str** | Output only. The model version in the [Vertex AI Model Registry](https://cloud.google.com/vertex-ai/docs/model-registry/introduction) for this training run. | [optional] [readonly] 

## Example

```python
from openapi_client.models.training_run import TrainingRun

# TODO update the JSON string below
json = "{}"
# create an instance of TrainingRun from a JSON string
training_run_instance = TrainingRun.from_json(json)
# print the JSON string representation of the object
print(TrainingRun.to_json())

# convert the object into a dict
training_run_dict = training_run_instance.to_dict()
# create an instance of TrainingRun from a dict
training_run_from_dict = TrainingRun.from_dict(training_run_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


