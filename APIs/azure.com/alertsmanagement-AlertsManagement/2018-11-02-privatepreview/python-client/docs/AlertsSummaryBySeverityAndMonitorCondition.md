# AlertsSummaryBySeverityAndMonitorCondition

Summary of the alerts by severity and monitor condition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sev0** | [**AlertsSummaryByMonitorCondition**](AlertsSummaryByMonitorCondition.md) | Summary of alerts by monitor condition with severity &#39;Sev0&#39; | [optional] 
**sev1** | [**AlertsSummaryByMonitorCondition**](AlertsSummaryByMonitorCondition.md) | Summary of alerts by monitor condition with severity &#39;Sev1&#39; | [optional] 
**sev2** | [**AlertsSummaryByMonitorCondition**](AlertsSummaryByMonitorCondition.md) | Summary of alerts by monitor condition with severity &#39;Sev2&#39; | [optional] 
**sev3** | [**AlertsSummaryByMonitorCondition**](AlertsSummaryByMonitorCondition.md) | Summary of alerts by monitor condition with severity &#39;Sev3&#39; | [optional] 
**sev4** | [**AlertsSummaryByMonitorCondition**](AlertsSummaryByMonitorCondition.md) | Summary of alerts by monitor condition with severity &#39;Sev4&#39; | [optional] 

## Example

```python
from openapi_client.models.alerts_summary_by_severity_and_monitor_condition import AlertsSummaryBySeverityAndMonitorCondition

# TODO update the JSON string below
json = "{}"
# create an instance of AlertsSummaryBySeverityAndMonitorCondition from a JSON string
alerts_summary_by_severity_and_monitor_condition_instance = AlertsSummaryBySeverityAndMonitorCondition.from_json(json)
# print the JSON string representation of the object
print(AlertsSummaryBySeverityAndMonitorCondition.to_json())

# convert the object into a dict
alerts_summary_by_severity_and_monitor_condition_dict = alerts_summary_by_severity_and_monitor_condition_instance.to_dict()
# create an instance of AlertsSummaryBySeverityAndMonitorCondition from a dict
alerts_summary_by_severity_and_monitor_condition_from_dict = AlertsSummaryBySeverityAndMonitorCondition.from_dict(alerts_summary_by_severity_and_monitor_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


