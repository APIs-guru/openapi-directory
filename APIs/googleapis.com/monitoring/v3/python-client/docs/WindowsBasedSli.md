# WindowsBasedSli

A WindowsBasedSli defines good_service as the count of time windows for which the provided service was of good quality. Criteria for determining if service was good are embedded in the window_criterion.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**good_bad_metric_filter** | **str** | A monitoring filter (https://cloud.google.com/monitoring/api/v3/filters) specifying a TimeSeries with ValueType &#x3D; BOOL. The window is good if any true values appear in the window. | [optional] 
**good_total_ratio_threshold** | [**PerformanceThreshold**](PerformanceThreshold.md) |  | [optional] 
**metric_mean_in_range** | [**MetricRange**](MetricRange.md) |  | [optional] 
**metric_sum_in_range** | [**MetricRange**](MetricRange.md) |  | [optional] 
**window_period** | **str** | Duration over which window quality is evaluated. Must be an integer fraction of a day and at least 60s. | [optional] 

## Example

```python
from openapi_client.models.windows_based_sli import WindowsBasedSli

# TODO update the JSON string below
json = "{}"
# create an instance of WindowsBasedSli from a JSON string
windows_based_sli_instance = WindowsBasedSli.from_json(json)
# print the JSON string representation of the object
print(WindowsBasedSli.to_json())

# convert the object into a dict
windows_based_sli_dict = windows_based_sli_instance.to_dict()
# create an instance of WindowsBasedSli from a dict
windows_based_sli_from_dict = WindowsBasedSli.from_dict(windows_based_sli_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


