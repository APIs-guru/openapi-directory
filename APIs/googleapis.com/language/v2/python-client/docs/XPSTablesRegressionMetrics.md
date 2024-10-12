# XPSTablesRegressionMetrics

Metrics for Tables regression problems.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mean_absolute_error** | **float** | Mean absolute error. | [optional] 
**mean_absolute_percentage_error** | **float** | Mean absolute percentage error, only set if all of the target column&#39;s values are positive. | [optional] 
**r_squared** | **float** | R squared. | [optional] 
**regression_metrics_entries** | [**List[XPSRegressionMetricsEntry]**](XPSRegressionMetricsEntry.md) | A list of actual versus predicted points for the model being evaluated. | [optional] 
**root_mean_squared_error** | **float** | Root mean squared error. | [optional] 
**root_mean_squared_log_error** | **float** | Root mean squared log error. | [optional] 

## Example

```python
from openapi_client.models.xps_tables_regression_metrics import XPSTablesRegressionMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of XPSTablesRegressionMetrics from a JSON string
xps_tables_regression_metrics_instance = XPSTablesRegressionMetrics.from_json(json)
# print the JSON string representation of the object
print(XPSTablesRegressionMetrics.to_json())

# convert the object into a dict
xps_tables_regression_metrics_dict = xps_tables_regression_metrics_instance.to_dict()
# create an instance of XPSTablesRegressionMetrics from a dict
xps_tables_regression_metrics_from_dict = XPSTablesRegressionMetrics.from_dict(xps_tables_regression_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


