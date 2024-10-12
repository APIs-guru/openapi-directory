# AggregateClassificationMetrics

Aggregate metrics for classification/classifier models. For multi-class models, the metrics are either macro-averaged or micro-averaged. When macro-averaged, the metrics are calculated for each label and then an unweighted average is taken of those values. When micro-averaged, the metric is calculated globally by counting the total number of correctly predicted rows.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accuracy** | **float** | Accuracy is the fraction of predictions given the correct label. For multiclass this is a micro-averaged metric. | [optional] 
**f1_score** | **float** | The F1 score is an average of recall and precision. For multiclass this is a macro-averaged metric. | [optional] 
**log_loss** | **float** | Logarithmic Loss. For multiclass this is a macro-averaged metric. | [optional] 
**precision** | **float** | Precision is the fraction of actual positive predictions that had positive actual labels. For multiclass this is a macro-averaged metric treating each class as a binary classifier. | [optional] 
**recall** | **float** | Recall is the fraction of actual positive labels that were given a positive prediction. For multiclass this is a macro-averaged metric. | [optional] 
**roc_auc** | **float** | Area Under a ROC Curve. For multiclass this is a macro-averaged metric. | [optional] 
**threshold** | **float** | Threshold at which the metrics are computed. For binary classification models this is the positive class threshold. For multi-class classfication models this is the confidence threshold. | [optional] 

## Example

```python
from openapi_client.models.aggregate_classification_metrics import AggregateClassificationMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of AggregateClassificationMetrics from a JSON string
aggregate_classification_metrics_instance = AggregateClassificationMetrics.from_json(json)
# print the JSON string representation of the object
print(AggregateClassificationMetrics.to_json())

# convert the object into a dict
aggregate_classification_metrics_dict = aggregate_classification_metrics_instance.to_dict()
# create an instance of AggregateClassificationMetrics from a dict
aggregate_classification_metrics_from_dict = AggregateClassificationMetrics.from_dict(aggregate_classification_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


