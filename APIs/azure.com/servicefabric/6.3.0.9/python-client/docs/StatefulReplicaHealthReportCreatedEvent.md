# StatefulReplicaHealthReportCreatedEvent

Stateful Replica Health Report Created event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of report. | 
**health_state** | **str** | Describes the property health state. | 
**var_property** | **str** | Describes the property. | 
**remove_when_expired** | **bool** | Indicates the removal when it expires. | 
**replica_instance_id** | **int** | Id of Replica instance. | 
**sequence_number** | **int** | Sequence number of report. | 
**source_id** | **str** | Id of report source. | 
**source_utc_timestamp** | **datetime** | Source time. | 
**time_to_live_ms** | **int** | Time to live in milli-seconds. | 

## Example

```python
from openapi_client.models.stateful_replica_health_report_created_event import StatefulReplicaHealthReportCreatedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of StatefulReplicaHealthReportCreatedEvent from a JSON string
stateful_replica_health_report_created_event_instance = StatefulReplicaHealthReportCreatedEvent.from_json(json)
# print the JSON string representation of the object
print(StatefulReplicaHealthReportCreatedEvent.to_json())

# convert the object into a dict
stateful_replica_health_report_created_event_dict = stateful_replica_health_report_created_event_instance.to_dict()
# create an instance of StatefulReplicaHealthReportCreatedEvent from a dict
stateful_replica_health_report_created_event_from_dict = StatefulReplicaHealthReportCreatedEvent.from_dict(stateful_replica_health_report_created_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


