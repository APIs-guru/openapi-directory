# EvaluationMetrics

Evaluation metrics of a model. These are either computed on all training data or just the eval data based on whether eval data was used during training. These are not present for imported models.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**arima_forecasting_metrics** | [**ArimaForecastingMetrics**](ArimaForecastingMetrics.md) |  | [optional] 
**binary_classification_metrics** | [**BinaryClassificationMetrics**](BinaryClassificationMetrics.md) |  | [optional] 
**clustering_metrics** | [**ClusteringMetrics**](ClusteringMetrics.md) |  | [optional] 
**dimensionality_reduction_metrics** | [**DimensionalityReductionMetrics**](DimensionalityReductionMetrics.md) |  | [optional] 
**multi_class_classification_metrics** | [**MultiClassClassificationMetrics**](MultiClassClassificationMetrics.md) |  | [optional] 
**ranking_metrics** | [**RankingMetrics**](RankingMetrics.md) |  | [optional] 
**regression_metrics** | [**RegressionMetrics**](RegressionMetrics.md) |  | [optional] 

## Example

```python
from openapi_client.models.evaluation_metrics import EvaluationMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of EvaluationMetrics from a JSON string
evaluation_metrics_instance = EvaluationMetrics.from_json(json)
# print the JSON string representation of the object
print(EvaluationMetrics.to_json())

# convert the object into a dict
evaluation_metrics_dict = evaluation_metrics_instance.to_dict()
# create an instance of EvaluationMetrics from a dict
evaluation_metrics_from_dict = EvaluationMetrics.from_dict(evaluation_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


