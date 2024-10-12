# DeployedApplicationHealthReportExpiredEvent

Deployed Application Health Report Expired event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_instance_id** | **int** | Id of Application instance. | 
**description** | **str** | Description of report. | 
**health_state** | **str** | Describes the property health state. | 
**node_name** | **str** | The name of a Service Fabric node. | 
**var_property** | **str** | Describes the property. | 
**remove_when_expired** | **bool** | Indicates the removal when it expires. | 
**sequence_number** | **int** | Sequence number of report. | 
**source_id** | **str** | Id of report source. | 
**source_utc_timestamp** | **datetime** | Source time. | 
**time_to_live_ms** | **int** | Time to live in milli-seconds. | 

## Example

```python
from openapi_client.models.deployed_application_health_report_expired_event import DeployedApplicationHealthReportExpiredEvent

# TODO update the JSON string below
json = "{}"
# create an instance of DeployedApplicationHealthReportExpiredEvent from a JSON string
deployed_application_health_report_expired_event_instance = DeployedApplicationHealthReportExpiredEvent.from_json(json)
# print the JSON string representation of the object
print(DeployedApplicationHealthReportExpiredEvent.to_json())

# convert the object into a dict
deployed_application_health_report_expired_event_dict = deployed_application_health_report_expired_event_instance.to_dict()
# create an instance of DeployedApplicationHealthReportExpiredEvent from a dict
deployed_application_health_report_expired_event_from_dict = DeployedApplicationHealthReportExpiredEvent.from_dict(deployed_application_health_report_expired_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


