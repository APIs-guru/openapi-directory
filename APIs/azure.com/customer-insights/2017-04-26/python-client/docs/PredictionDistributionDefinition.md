# PredictionDistributionDefinition

The definition of the prediction distribution.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**distributions** | [**List[PredictionDistributionDefinitionDistributionsInner]**](PredictionDistributionDefinitionDistributionsInner.md) | Distributions of the prediction. | [optional] 
**total_negatives** | **int** | Total negatives in the distribution. | [optional] 
**total_positives** | **int** | Total positive in the distribution. | [optional] 

## Example

```python
from openapi_client.models.prediction_distribution_definition import PredictionDistributionDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of PredictionDistributionDefinition from a JSON string
prediction_distribution_definition_instance = PredictionDistributionDefinition.from_json(json)
# print the JSON string representation of the object
print(PredictionDistributionDefinition.to_json())

# convert the object into a dict
prediction_distribution_definition_dict = prediction_distribution_definition_instance.to_dict()
# create an instance of PredictionDistributionDefinition from a dict
prediction_distribution_definition_from_dict = PredictionDistributionDefinition.from_dict(prediction_distribution_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


