# MlStatistics

Job statistics specific to a BigQuery ML training job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hparam_trials** | [**List[HparamTuningTrial]**](HparamTuningTrial.md) | Output only. Trials of a [hyperparameter tuning job](/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-hp-tuning-overview) sorted by trial_id. | [optional] [readonly] 
**iteration_results** | [**List[IterationResult]**](IterationResult.md) | Results for all completed iterations. Empty for [hyperparameter tuning jobs](/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-hp-tuning-overview). | [optional] 
**max_iterations** | **str** | Output only. Maximum number of iterations specified as max_iterations in the &#39;CREATE MODEL&#39; query. The actual number of iterations may be less than this number due to early stop. | [optional] [readonly] 
**model_type** | **str** | Output only. The type of the model that is being trained. | [optional] [readonly] 
**training_type** | **str** | Output only. Training type of the job. | [optional] [readonly] 

## Example

```python
from openapi_client.models.ml_statistics import MlStatistics

# TODO update the JSON string below
json = "{}"
# create an instance of MlStatistics from a JSON string
ml_statistics_instance = MlStatistics.from_json(json)
# print the JSON string representation of the object
print(MlStatistics.to_json())

# convert the object into a dict
ml_statistics_dict = ml_statistics_instance.to_dict()
# create an instance of MlStatistics from a dict
ml_statistics_from_dict = MlStatistics.from_dict(ml_statistics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


