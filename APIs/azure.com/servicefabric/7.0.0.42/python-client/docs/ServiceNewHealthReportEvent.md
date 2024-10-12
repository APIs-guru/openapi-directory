# ServiceNewHealthReportEvent

Service Health Report Created event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of report. | 
**health_state** | **str** | Describes the property health state. | 
**instance_id** | **int** | Id of Service instance. | 
**var_property** | **str** | Describes the property. | 
**remove_when_expired** | **bool** | Indicates the removal when it expires. | 
**sequence_number** | **int** | Sequence number of report. | 
**source_id** | **str** | Id of report source. | 
**source_utc_timestamp** | **datetime** | Source time. | 
**time_to_live_ms** | **int** | Time to live in milli-seconds. | 

## Example

```python
from openapi_client.models.service_new_health_report_event import ServiceNewHealthReportEvent

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceNewHealthReportEvent from a JSON string
service_new_health_report_event_instance = ServiceNewHealthReportEvent.from_json(json)
# print the JSON string representation of the object
print(ServiceNewHealthReportEvent.to_json())

# convert the object into a dict
service_new_health_report_event_dict = service_new_health_report_event_instance.to_dict()
# create an instance of ServiceNewHealthReportEvent from a dict
service_new_health_report_event_from_dict = ServiceNewHealthReportEvent.from_dict(service_new_health_report_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


