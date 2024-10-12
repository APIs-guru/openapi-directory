# XPSTablesEvaluationMetrics


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**classification_metrics** | [**XPSTablesClassificationMetrics**](XPSTablesClassificationMetrics.md) |  | [optional] 
**regression_metrics** | [**XPSTablesRegressionMetrics**](XPSTablesRegressionMetrics.md) |  | [optional] 

## Example

```python
from openapi_client.models.xps_tables_evaluation_metrics import XPSTablesEvaluationMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of XPSTablesEvaluationMetrics from a JSON string
xps_tables_evaluation_metrics_instance = XPSTablesEvaluationMetrics.from_json(json)
# print the JSON string representation of the object
print(XPSTablesEvaluationMetrics.to_json())

# convert the object into a dict
xps_tables_evaluation_metrics_dict = xps_tables_evaluation_metrics_instance.to_dict()
# create an instance of XPSTablesEvaluationMetrics from a dict
xps_tables_evaluation_metrics_from_dict = XPSTablesEvaluationMetrics.from_dict(xps_tables_evaluation_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


