# PredictionDistributionDefinitionDistributionsInner

The definition of a prediction distribution.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**negatives** | **int** | Number of negatives. | [optional] 
**negatives_above_threshold** | **int** | Number of negatives above threshold. | [optional] 
**positives** | **int** | Number of positives. | [optional] 
**positives_above_threshold** | **int** | Number of positives above threshold. | [optional] 
**score_threshold** | **int** | Score threshold. | [optional] 

## Example

```python
from openapi_client.models.prediction_distribution_definition_distributions_inner import PredictionDistributionDefinitionDistributionsInner

# TODO update the JSON string below
json = "{}"
# create an instance of PredictionDistributionDefinitionDistributionsInner from a JSON string
prediction_distribution_definition_distributions_inner_instance = PredictionDistributionDefinitionDistributionsInner.from_json(json)
# print the JSON string representation of the object
print(PredictionDistributionDefinitionDistributionsInner.to_json())

# convert the object into a dict
prediction_distribution_definition_distributions_inner_dict = prediction_distribution_definition_distributions_inner_instance.to_dict()
# create an instance of PredictionDistributionDefinitionDistributionsInner from a dict
prediction_distribution_definition_distributions_inner_from_dict = PredictionDistributionDefinitionDistributionsInner.from_dict(prediction_distribution_definition_distributions_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


