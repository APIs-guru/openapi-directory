# ApplicationNewHealthReportEvent

Application Health Report Created event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_instance_id** | **int** | Id of Application instance. | 
**description** | **str** | Description of report. | 
**health_state** | **str** | Describes the property health state. | 
**var_property** | **str** | Describes the property. | 
**remove_when_expired** | **bool** | Indicates the removal when it expires. | 
**sequence_number** | **int** | Sequence number of report. | 
**source_id** | **str** | Id of report source. | 
**source_utc_timestamp** | **datetime** | Source time. | 
**time_to_live_ms** | **int** | Time to live in milli-seconds. | 

## Example

```python
from openapi_client.models.application_new_health_report_event import ApplicationNewHealthReportEvent

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationNewHealthReportEvent from a JSON string
application_new_health_report_event_instance = ApplicationNewHealthReportEvent.from_json(json)
# print the JSON string representation of the object
print(ApplicationNewHealthReportEvent.to_json())

# convert the object into a dict
application_new_health_report_event_dict = application_new_health_report_event_instance.to_dict()
# create an instance of ApplicationNewHealthReportEvent from a dict
application_new_health_report_event_from_dict = ApplicationNewHealthReportEvent.from_dict(application_new_health_report_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


