# XPSTablesClassificationMetrics

Metrics for Tables classification problems.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**curve_metrics** | [**List[XPSTablesClassificationMetricsCurveMetrics]**](XPSTablesClassificationMetricsCurveMetrics.md) | Metrics building a curve. | [optional] 

## Example

```python
from openapi_client.models.xps_tables_classification_metrics import XPSTablesClassificationMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of XPSTablesClassificationMetrics from a JSON string
xps_tables_classification_metrics_instance = XPSTablesClassificationMetrics.from_json(json)
# print the JSON string representation of the object
print(XPSTablesClassificationMetrics.to_json())

# convert the object into a dict
xps_tables_classification_metrics_dict = xps_tables_classification_metrics_instance.to_dict()
# create an instance of XPSTablesClassificationMetrics from a dict
xps_tables_classification_metrics_from_dict = XPSTablesClassificationMetrics.from_dict(xps_tables_classification_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


