# ManagementEventAggregationCondition

How the data that is collected should be combined over time.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operator** | [**ConditionOperator**](ConditionOperator.md) |  | [optional] 
**threshold** | **float** | The threshold value that activates the alert. | [optional] 
**window_size** | **str** | the period of time (in ISO 8601 duration format) that is used to monitor alert activity based on the threshold. If specified then it must be between 5 minutes and 1 day. | [optional] 

## Example

```python
from openapi_client.models.management_event_aggregation_condition import ManagementEventAggregationCondition

# TODO update the JSON string below
json = "{}"
# create an instance of ManagementEventAggregationCondition from a JSON string
management_event_aggregation_condition_instance = ManagementEventAggregationCondition.from_json(json)
# print the JSON string representation of the object
print(ManagementEventAggregationCondition.to_json())

# convert the object into a dict
management_event_aggregation_condition_dict = management_event_aggregation_condition_instance.to_dict()
# create an instance of ManagementEventAggregationCondition from a dict
management_event_aggregation_condition_from_dict = ManagementEventAggregationCondition.from_dict(management_event_aggregation_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


