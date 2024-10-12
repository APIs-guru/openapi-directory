# ModelTrainingDetails

Model Training Details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**example_count** | **int** | The count of examples used to train the model. | [optional] 
**failure_reason** | **str** | Reason for the training failure. | [optional] 
**status** | [**TrainingStatus**](TrainingStatus.md) |  | [optional] 
**status_id** | **int** | The train request status ID. | [optional] 
**training_date_time** | **datetime** | When the model was trained. | [optional] 

## Example

```python
from openapi_client.models.model_training_details import ModelTrainingDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ModelTrainingDetails from a JSON string
model_training_details_instance = ModelTrainingDetails.from_json(json)
# print the JSON string representation of the object
print(ModelTrainingDetails.to_json())

# convert the object into a dict
model_training_details_dict = model_training_details_instance.to_dict()
# create an instance of ModelTrainingDetails from a dict
model_training_details_from_dict = ModelTrainingDetails.from_dict(model_training_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


