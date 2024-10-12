# Condition

A condition is a true/false test that determines when an alerting policy should open an incident. If a condition evaluates to true, it signifies that something is wrong.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**condition_absent** | [**MetricAbsence**](MetricAbsence.md) |  | [optional] 
**condition_matched_log** | [**LogMatch**](LogMatch.md) |  | [optional] 
**condition_monitoring_query_language** | [**MonitoringQueryLanguageCondition**](MonitoringQueryLanguageCondition.md) |  | [optional] 
**condition_prometheus_query_language** | [**PrometheusQueryLanguageCondition**](PrometheusQueryLanguageCondition.md) |  | [optional] 
**condition_threshold** | [**MetricThreshold**](MetricThreshold.md) |  | [optional] 
**display_name** | **str** | A short name or phrase used to identify the condition in dashboards, notifications, and incidents. To avoid confusion, don&#39;t use the same display name for multiple conditions in the same policy. | [optional] 
**name** | **str** | Required if the condition exists. The unique resource name for this condition. Its format is: projects/[PROJECT_ID_OR_NUMBER]/alertPolicies/[POLICY_ID]/conditions/[CONDITION_ID] [CONDITION_ID] is assigned by Cloud Monitoring when the condition is created as part of a new or updated alerting policy.When calling the alertPolicies.create method, do not include the name field in the conditions of the requested alerting policy. Cloud Monitoring creates the condition identifiers and includes them in the new policy.When calling the alertPolicies.update method to update a policy, including a condition name causes the existing condition to be updated. Conditions without names are added to the updated policy. Existing conditions are deleted if they are not updated.Best practice is to preserve [CONDITION_ID] if you make only small changes, such as those to condition thresholds, durations, or trigger values. Otherwise, treat the change as a new condition and let the existing condition be deleted. | [optional] 

## Example

```python
from openapi_client.models.condition import Condition

# TODO update the JSON string below
json = "{}"
# create an instance of Condition from a JSON string
condition_instance = Condition.from_json(json)
# print the JSON string representation of the object
print(Condition.to_json())

# convert the object into a dict
condition_dict = condition_instance.to_dict()
# create an instance of Condition from a dict
condition_from_dict = Condition.from_dict(condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


