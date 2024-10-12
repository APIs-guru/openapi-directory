# PredictionModelStatus

The prediction model status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | The model status message. | [optional] [readonly] 
**model_version** | **str** | Version of the model. | [optional] [readonly] 
**prediction_guid_id** | **str** | The prediction GUID ID. | [optional] [readonly] 
**prediction_name** | **str** | The prediction name. | [optional] [readonly] 
**signals_used** | **int** | The signals used. | [optional] [readonly] 
**status** | **str** | Prediction model life cycle.  When prediction is in PendingModelConfirmation status, it is allowed to update the status to PendingFeaturing or Active through API. | 
**tenant_id** | **str** | The hub name. | [optional] [readonly] 
**test_set_count** | **int** | Count of the test set. | [optional] [readonly] 
**training_accuracy** | **int** | The training accuracy. | [optional] [readonly] 
**training_set_count** | **int** | Count of the training set. | [optional] [readonly] 
**validation_set_count** | **int** | Count of the validation set. | [optional] [readonly] 

## Example

```python
from openapi_client.models.prediction_model_status import PredictionModelStatus

# TODO update the JSON string below
json = "{}"
# create an instance of PredictionModelStatus from a JSON string
prediction_model_status_instance = PredictionModelStatus.from_json(json)
# print the JSON string representation of the object
print(PredictionModelStatus.to_json())

# convert the object into a dict
prediction_model_status_dict = prediction_model_status_instance.to_dict()
# create an instance of PredictionModelStatus from a dict
prediction_model_status_from_dict = PredictionModelStatus.from_dict(prediction_model_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


