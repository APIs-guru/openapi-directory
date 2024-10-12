# PerformanceGoal

Settings that control the performance goal of a campaign.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**performance_goal_amount_micros** | **str** | The goal amount, in micros of the advertiser&#39;s currency. Applicable when performance_goal_type is one of: * &#x60;PERFORMANCE_GOAL_TYPE_CPM&#x60; * &#x60;PERFORMANCE_GOAL_TYPE_CPC&#x60; * &#x60;PERFORMANCE_GOAL_TYPE_CPA&#x60; * &#x60;PERFORMANCE_GOAL_TYPE_CPIAVC&#x60; * &#x60;PERFORMANCE_GOAL_TYPE_VCPM&#x60; For example 1500000 represents 1.5 standard units of the currency. | [optional] 
**performance_goal_percentage_micros** | **str** | The decimal representation of the goal percentage in micros. Applicable when performance_goal_type is one of: * &#x60;PERFORMANCE_GOAL_TYPE_CTR&#x60; * &#x60;PERFORMANCE_GOAL_TYPE_VIEWABILITY&#x60; * &#x60;PERFORMANCE_GOAL_TYPE_CLICK_CVR&#x60; * &#x60;PERFORMANCE_GOAL_TYPE_IMPRESSION_CVR&#x60; * &#x60;PERFORMANCE_GOAL_TYPE_VTR&#x60; * &#x60;PERFORMANCE_GOAL_TYPE_AUDIO_COMPLETION_RATE&#x60; * &#x60;PERFORMANCE_GOAL_TYPE_VIDEO_COMPLETION_RATE&#x60; For example, 70000 represents 7% (decimal 0.07). | [optional] 
**performance_goal_string** | **str** | A key performance indicator (KPI) string, which can be empty. Must be UTF-8 encoded with a length of no more than 100 characters. Applicable when performance_goal_type is set to &#x60;PERFORMANCE_GOAL_TYPE_OTHER&#x60;. | [optional] 
**performance_goal_type** | **str** | Required. The type of the performance goal. | [optional] 

## Example

```python
from openapi_client.models.performance_goal import PerformanceGoal

# TODO update the JSON string below
json = "{}"
# create an instance of PerformanceGoal from a JSON string
performance_goal_instance = PerformanceGoal.from_json(json)
# print the JSON string representation of the object
print(PerformanceGoal.to_json())

# convert the object into a dict
performance_goal_dict = performance_goal_instance.to_dict()
# create an instance of PerformanceGoal from a dict
performance_goal_from_dict = PerformanceGoal.from_dict(performance_goal_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


