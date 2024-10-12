# PercentileMetricListResult

The response to a list percentile metrics request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[PercentileMetric]**](PercentileMetric.md) | The list of percentile metrics for the account. | [optional] [readonly] 

## Example

```python
from openapi_client.models.percentile_metric_list_result import PercentileMetricListResult

# TODO update the JSON string below
json = "{}"
# create an instance of PercentileMetricListResult from a JSON string
percentile_metric_list_result_instance = PercentileMetricListResult.from_json(json)
# print the JSON string representation of the object
print(PercentileMetricListResult.to_json())

# convert the object into a dict
percentile_metric_list_result_dict = percentile_metric_list_result_instance.to_dict()
# create an instance of PercentileMetricListResult from a dict
percentile_metric_list_result_from_dict = PercentileMetricListResult.from_dict(percentile_metric_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


