# AlertsSummaryByMonitorCondition

Summary of the alerts by monitor condition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fired** | **int** | Count of alerts with monitorCondition &#39;Fired&#39; | [optional] 
**resolved** | **int** | Count of alerts with monitorCondition &#39;Resolved&#39; | [optional] 

## Example

```python
from openapi_client.models.alerts_summary_by_monitor_condition import AlertsSummaryByMonitorCondition

# TODO update the JSON string below
json = "{}"
# create an instance of AlertsSummaryByMonitorCondition from a JSON string
alerts_summary_by_monitor_condition_instance = AlertsSummaryByMonitorCondition.from_json(json)
# print the JSON string representation of the object
print(AlertsSummaryByMonitorCondition.to_json())

# convert the object into a dict
alerts_summary_by_monitor_condition_dict = alerts_summary_by_monitor_condition_instance.to_dict()
# create an instance of AlertsSummaryByMonitorCondition from a dict
alerts_summary_by_monitor_condition_from_dict = AlertsSummaryByMonitorCondition.from_dict(alerts_summary_by_monitor_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


