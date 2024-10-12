# ClusterHealthReportExpiredEvent

Cluster Health Report Expired event.

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
from openapi_client.models.cluster_health_report_expired_event import ClusterHealthReportExpiredEvent

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterHealthReportExpiredEvent from a JSON string
cluster_health_report_expired_event_instance = ClusterHealthReportExpiredEvent.from_json(json)
# print the JSON string representation of the object
print(ClusterHealthReportExpiredEvent.to_json())

# convert the object into a dict
cluster_health_report_expired_event_dict = cluster_health_report_expired_event_instance.to_dict()
# create an instance of ClusterHealthReportExpiredEvent from a dict
cluster_health_report_expired_event_from_dict = ClusterHealthReportExpiredEvent.from_dict(cluster_health_report_expired_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


