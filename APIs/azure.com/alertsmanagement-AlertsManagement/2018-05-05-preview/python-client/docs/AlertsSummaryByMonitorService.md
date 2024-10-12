# AlertsSummaryByMonitorService

Summary of the alerts by monitor service

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activity_log_administrative** | **int** | Count of alerts of \&quot;ActivityLog Administrative\&quot; | [optional] 
**activity_log_autoscale** | **int** | Count of alerts of \&quot;ActivityLog Autoscale\&quot; | [optional] 
**activity_log_policy** | **int** | Count of alerts of \&quot;ActivityLog Policy\&quot; | [optional] 
**activity_log_recommendation** | **int** | Count of alerts of \&quot;ActivityLog Recommendation\&quot; | [optional] 
**activity_log_security** | **int** | Count of alerts of \&quot;ActivityLog Security\&quot; | [optional] 
**application_insights** | **int** | Count of alerts of \&quot;Application Insights\&quot; | [optional] 
**infrastructure_insights** | **int** | Count of alerts of \&quot;Infrastructure Insights\&quot; | [optional] 
**log_analytics** | **int** | Count of alerts of \&quot;Log Analytics\&quot; | [optional] 
**nagios** | **int** | Count of alerts of \&quot;Nagios\&quot; | [optional] 
**platform** | **int** | Count of alerts of \&quot;Platform\&quot; | [optional] 
**scom** | **int** | Count of alerts of \&quot;SCOM\&quot; | [optional] 
**service_health** | **int** | Count of alerts of \&quot;ServiceHealth\&quot; | [optional] 
**smart_detector** | **int** | Count of alerts of \&quot;Smart Detector\&quot; | [optional] 
**zabbix** | **int** | Count of alerts of \&quot;Zabbix\&quot; | [optional] 

## Example

```python
from openapi_client.models.alerts_summary_by_monitor_service import AlertsSummaryByMonitorService

# TODO update the JSON string below
json = "{}"
# create an instance of AlertsSummaryByMonitorService from a JSON string
alerts_summary_by_monitor_service_instance = AlertsSummaryByMonitorService.from_json(json)
# print the JSON string representation of the object
print(AlertsSummaryByMonitorService.to_json())

# convert the object into a dict
alerts_summary_by_monitor_service_dict = alerts_summary_by_monitor_service_instance.to_dict()
# create an instance of AlertsSummaryByMonitorService from a dict
alerts_summary_by_monitor_service_from_dict = AlertsSummaryByMonitorService.from_dict(alerts_summary_by_monitor_service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


