# XPSRegressionMetricsEntry

A pair of actual & observed values for the model being evaluated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**predicted_value** | **float** | The observed value for a row in the dataset. | [optional] 
**true_value** | **float** | The actual target value for a row in the dataset. | [optional] 

## Example

```python
from openapi_client.models.xps_regression_metrics_entry import XPSRegressionMetricsEntry

# TODO update the JSON string below
json = "{}"
# create an instance of XPSRegressionMetricsEntry from a JSON string
xps_regression_metrics_entry_instance = XPSRegressionMetricsEntry.from_json(json)
# print the JSON string representation of the object
print(XPSRegressionMetricsEntry.to_json())

# convert the object into a dict
xps_regression_metrics_entry_dict = xps_regression_metrics_entry_instance.to_dict()
# create an instance of XPSRegressionMetricsEntry from a dict
xps_regression_metrics_entry_from_dict = XPSRegressionMetricsEntry.from_dict(xps_regression_metrics_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


