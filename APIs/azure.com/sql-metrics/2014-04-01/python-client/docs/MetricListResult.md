# MetricListResult

The response to a list database metrics request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[Metric]**](Metric.md) | The list of metrics for the database. | 

## Example

```python
from openapi_client.models.metric_list_result import MetricListResult

# TODO update the JSON string below
json = "{}"
# create an instance of MetricListResult from a JSON string
metric_list_result_instance = MetricListResult.from_json(json)
# print the JSON string representation of the object
print(MetricListResult.to_json())

# convert the object into a dict
metric_list_result_dict = metric_list_result_instance.to_dict()
# create an instance of MetricListResult from a dict
metric_list_result_from_dict = MetricListResult.from_dict(metric_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


