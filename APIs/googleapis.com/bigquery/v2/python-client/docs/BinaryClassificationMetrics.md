# BinaryClassificationMetrics

Evaluation metrics for binary classification/classifier models.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregate_classification_metrics** | [**AggregateClassificationMetrics**](AggregateClassificationMetrics.md) |  | [optional] 
**binary_confusion_matrix_list** | [**List[BinaryConfusionMatrix]**](BinaryConfusionMatrix.md) | Binary confusion matrix at multiple thresholds. | [optional] 
**negative_label** | **str** | Label representing the negative class. | [optional] 
**positive_label** | **str** | Label representing the positive class. | [optional] 

## Example

```python
from openapi_client.models.binary_classification_metrics import BinaryClassificationMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of BinaryClassificationMetrics from a JSON string
binary_classification_metrics_instance = BinaryClassificationMetrics.from_json(json)
# print the JSON string representation of the object
print(BinaryClassificationMetrics.to_json())

# convert the object into a dict
binary_classification_metrics_dict = binary_classification_metrics_instance.to_dict()
# create an instance of BinaryClassificationMetrics from a dict
binary_classification_metrics_from_dict = BinaryClassificationMetrics.from_dict(binary_classification_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


