# Model


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**best_trial_id** | **str** | The best trial_id across all training runs. | [optional] 
**creation_time** | **str** | Output only. The time when this model was created, in millisecs since the epoch. | [optional] [readonly] 
**default_trial_id** | **str** | Output only. The default trial_id to use in TVFs when the trial_id is not passed in. For single-objective [hyperparameter tuning](/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-hp-tuning-overview) models, this is the best trial ID. For multi-objective [hyperparameter tuning](/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-hp-tuning-overview) models, this is the smallest trial ID among all Pareto optimal trials. | [optional] [readonly] 
**description** | **str** | Optional. A user-friendly description of this model. | [optional] 
**encryption_configuration** | [**EncryptionConfiguration**](EncryptionConfiguration.md) |  | [optional] 
**etag** | **str** | Output only. A hash of this resource. | [optional] [readonly] 
**expiration_time** | **str** | Optional. The time when this model expires, in milliseconds since the epoch. If not present, the model will persist indefinitely. Expired models will be deleted and their storage reclaimed. The defaultTableExpirationMs property of the encapsulating dataset can be used to set a default expirationTime on newly created models. | [optional] 
**feature_columns** | [**List[StandardSqlField]**](StandardSqlField.md) | Output only. Input feature columns for the model inference. If the model is trained with TRANSFORM clause, these are the input of the TRANSFORM clause. | [optional] [readonly] 
**friendly_name** | **str** | Optional. A descriptive name for this model. | [optional] 
**hparam_search_spaces** | [**HparamSearchSpaces**](HparamSearchSpaces.md) |  | [optional] 
**hparam_trials** | [**List[HparamTuningTrial]**](HparamTuningTrial.md) | Output only. Trials of a [hyperparameter tuning](/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-hp-tuning-overview) model sorted by trial_id. | [optional] [readonly] 
**label_columns** | [**List[StandardSqlField]**](StandardSqlField.md) | Output only. Label columns that were used to train this model. The output of the model will have a \&quot;predicted_\&quot; prefix to these columns. | [optional] [readonly] 
**labels** | **Dict[str, str]** | The labels associated with this model. You can use these to organize and group your models. Label keys and values can be no longer than 63 characters, can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter and each label in the list must have a different key. | [optional] 
**last_modified_time** | **str** | Output only. The time when this model was last modified, in millisecs since the epoch. | [optional] [readonly] 
**location** | **str** | Output only. The geographic location where the model resides. This value is inherited from the dataset. | [optional] [readonly] 
**model_reference** | [**ModelReference**](ModelReference.md) |  | [optional] 
**model_type** | **str** | Output only. Type of the model resource. | [optional] [readonly] 
**optimal_trial_ids** | **List[str]** | Output only. For single-objective [hyperparameter tuning](/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-hp-tuning-overview) models, it only contains the best trial. For multi-objective [hyperparameter tuning](/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-hp-tuning-overview) models, it contains all Pareto optimal trials sorted by trial_id. | [optional] [readonly] 
**remote_model_info** | [**RemoteModelInfo**](RemoteModelInfo.md) |  | [optional] 
**training_runs** | [**List[TrainingRun]**](TrainingRun.md) | Information for all training runs in increasing order of start_time. | [optional] 
**transform_columns** | [**List[TransformColumn]**](TransformColumn.md) | Output only. This field will be populated if a TRANSFORM clause was used to train a model. TRANSFORM clause (if used) takes feature_columns as input and outputs transform_columns. transform_columns then are used to train the model. | [optional] [readonly] 

## Example

```python
from openapi_client.models.model import Model

# TODO update the JSON string below
json = "{}"
# create an instance of Model from a JSON string
model_instance = Model.from_json(json)
# print the JSON string representation of the object
print(Model.to_json())

# convert the object into a dict
model_dict = model_instance.to_dict()
# create an instance of Model from a dict
model_from_dict = Model.from_dict(model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


