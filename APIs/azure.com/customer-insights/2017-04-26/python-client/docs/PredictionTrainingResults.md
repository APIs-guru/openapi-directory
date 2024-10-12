# PredictionTrainingResults

The training results of the prediction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**canonical_profiles** | [**List[CanonicalProfileDefinition]**](CanonicalProfileDefinition.md) | Canonical profiles. | [optional] [readonly] 
**prediction_distribution** | [**PredictionDistributionDefinition**](PredictionDistributionDefinition.md) |  | [optional] 
**primary_profile_instance_count** | **int** | Instance count of the primary profile. | [optional] [readonly] 
**score_name** | **str** | Score name. | [optional] [readonly] 
**tenant_id** | **str** | The hub name. | [optional] [readonly] 

## Example

```python
from openapi_client.models.prediction_training_results import PredictionTrainingResults

# TODO update the JSON string below
json = "{}"
# create an instance of PredictionTrainingResults from a JSON string
prediction_training_results_instance = PredictionTrainingResults.from_json(json)
# print the JSON string representation of the object
print(PredictionTrainingResults.to_json())

# convert the object into a dict
prediction_training_results_dict = prediction_training_results_instance.to_dict()
# create an instance of PredictionTrainingResults from a dict
prediction_training_results_from_dict = PredictionTrainingResults.from_dict(prediction_training_results_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


