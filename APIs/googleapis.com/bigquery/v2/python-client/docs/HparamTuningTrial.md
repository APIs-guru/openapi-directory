# HparamTuningTrial

Training info of a trial in [hyperparameter tuning](/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-hp-tuning-overview) models.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time_ms** | **str** | Ending time of the trial. | [optional] 
**error_message** | **str** | Error message for FAILED and INFEASIBLE trial. | [optional] 
**eval_loss** | **float** | Loss computed on the eval data at the end of trial. | [optional] 
**evaluation_metrics** | [**EvaluationMetrics**](EvaluationMetrics.md) |  | [optional] 
**hparam_tuning_evaluation_metrics** | [**EvaluationMetrics**](EvaluationMetrics.md) |  | [optional] 
**hparams** | [**TrainingOptions**](TrainingOptions.md) |  | [optional] 
**start_time_ms** | **str** | Starting time of the trial. | [optional] 
**status** | **str** | The status of the trial. | [optional] 
**training_loss** | **float** | Loss computed on the training data at the end of trial. | [optional] 
**trial_id** | **str** | 1-based index of the trial. | [optional] 

## Example

```python
from openapi_client.models.hparam_tuning_trial import HparamTuningTrial

# TODO update the JSON string below
json = "{}"
# create an instance of HparamTuningTrial from a JSON string
hparam_tuning_trial_instance = HparamTuningTrial.from_json(json)
# print the JSON string representation of the object
print(HparamTuningTrial.to_json())

# convert the object into a dict
hparam_tuning_trial_dict = hparam_tuning_trial_instance.to_dict()
# create an instance of HparamTuningTrial from a dict
hparam_tuning_trial_from_dict = HparamTuningTrial.from_dict(hparam_tuning_trial_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


