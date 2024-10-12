# ClusterNewHealthReportEvent

Cluster Health Report Created event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
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
from openapi_client.models.cluster_new_health_report_event import ClusterNewHealthReportEvent

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterNewHealthReportEvent from a JSON string
cluster_new_health_report_event_instance = ClusterNewHealthReportEvent.from_json(json)
# print the JSON string representation of the object
print(ClusterNewHealthReportEvent.to_json())

# convert the object into a dict
cluster_new_health_report_event_dict = cluster_new_health_report_event_instance.to_dict()
# create an instance of ClusterNewHealthReportEvent from a dict
cluster_new_health_report_event_from_dict = ClusterNewHealthReportEvent.from_dict(cluster_new_health_report_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


