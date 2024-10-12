# MultiClassClassificationMetrics

Evaluation metrics for multi-class classification/classifier models.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregate_classification_metrics** | [**AggregateClassificationMetrics**](AggregateClassificationMetrics.md) |  | [optional] 
**confusion_matrix_list** | [**List[ConfusionMatrix]**](ConfusionMatrix.md) | Confusion matrix at different thresholds. | [optional] 

## Example

```python
from openapi_client.models.multi_class_classification_metrics import MultiClassClassificationMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of MultiClassClassificationMetrics from a JSON string
multi_class_classification_metrics_instance = MultiClassClassificationMetrics.from_json(json)
# print the JSON string representation of the object
print(MultiClassClassificationMetrics.to_json())

# convert the object into a dict
multi_class_classification_metrics_dict = multi_class_classification_metrics_instance.to_dict()
# create an instance of MultiClassClassificationMetrics from a dict
multi_class_classification_metrics_from_dict = MultiClassClassificationMetrics.from_dict(multi_class_classification_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


