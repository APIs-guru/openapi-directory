# RecommendedActionMetricInfo

Contains time series of various impacted metrics for an Azure SQL Database, Server or Elastic Pool Recommended Action.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metric_name** | **str** | Gets the name of the metric. e.g., CPU, Number of Queries. | [optional] [readonly] 
**start_time** | **datetime** | Gets the start time of time interval given by this MetricInfo. | [optional] [readonly] 
**time_grain** | **str** | Gets the duration of time interval for the value given by this MetricInfo. e.g., PT1H (1 hour) | [optional] [readonly] 
**unit** | **str** | Gets the unit in which metric is measured. e.g., DTU, Frequency | [optional] [readonly] 
**value** | **float** | Gets the value of the metric in the time interval given by this MetricInfo. | [optional] [readonly] 

## Example

```python
from openapi_client.models.recommended_action_metric_info import RecommendedActionMetricInfo

# TODO update the JSON string below
json = "{}"
# create an instance of RecommendedActionMetricInfo from a JSON string
recommended_action_metric_info_instance = RecommendedActionMetricInfo.from_json(json)
# print the JSON string representation of the object
print(RecommendedActionMetricInfo.to_json())

# convert the object into a dict
recommended_action_metric_info_dict = recommended_action_metric_info_instance.to_dict()
# create an instance of RecommendedActionMetricInfo from a dict
recommended_action_metric_info_from_dict = RecommendedActionMetricInfo.from_dict(recommended_action_metric_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


