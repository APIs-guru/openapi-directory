# XPSTablesClassificationMetricsCurveMetrics

Metrics curve data point for a single value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auc_pr** | **float** | The area under the precision-recall curve. | [optional] 
**auc_roc** | **float** | The area under receiver operating characteristic curve. | [optional] 
**confidence_metrics_entries** | [**List[XPSTablesConfidenceMetricsEntry]**](XPSTablesConfidenceMetricsEntry.md) | Metrics that have confidence thresholds. Precision-recall curve and ROC curve can be derived from them. | [optional] 
**log_loss** | **float** | The Log loss metric. | [optional] 
**position_threshold** | **int** | The position threshold value used to compute the metrics. | [optional] 
**value** | **str** | The CATEGORY row value (for ARRAY unnested) the curve metrics are for. | [optional] 

## Example

```python
from openapi_client.models.xps_tables_classification_metrics_curve_metrics import XPSTablesClassificationMetricsCurveMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of XPSTablesClassificationMetricsCurveMetrics from a JSON string
xps_tables_classification_metrics_curve_metrics_instance = XPSTablesClassificationMetricsCurveMetrics.from_json(json)
# print the JSON string representation of the object
print(XPSTablesClassificationMetricsCurveMetrics.to_json())

# convert the object into a dict
xps_tables_classification_metrics_curve_metrics_dict = xps_tables_classification_metrics_curve_metrics_instance.to_dict()
# create an instance of XPSTablesClassificationMetricsCurveMetrics from a dict
xps_tables_classification_metrics_curve_metrics_from_dict = XPSTablesClassificationMetricsCurveMetrics.from_dict(xps_tables_classification_metrics_curve_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


