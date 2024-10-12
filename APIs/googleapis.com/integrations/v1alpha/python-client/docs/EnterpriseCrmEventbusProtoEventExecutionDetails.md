# EnterpriseCrmEventbusProtoEventExecutionDetails

Contains the details of the execution info of this event: this includes the tasks execution details plus the event execution statistics. Next available id: 10

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_attempt_stats** | [**List[EnterpriseCrmEventbusProtoEventExecutionDetailsEventAttemptStats]**](EnterpriseCrmEventbusProtoEventExecutionDetailsEventAttemptStats.md) |  | [optional] 
**event_execution_snapshot** | [**List[EnterpriseCrmEventbusProtoEventExecutionSnapshot]**](EnterpriseCrmEventbusProtoEventExecutionSnapshot.md) |  | [optional] 
**event_execution_state** | **str** |  | [optional] 
**event_retries_from_beginning_count** | **int** | Indicates the number of times the execution has restarted from the beginning. | [optional] 
**log_file_path** | **str** | The log file path (aka. cns address) for this event. | [optional] 
**network_address** | **str** | The network address (aka. bns address) that indicates where the event executor is running. | [optional] 
**next_execution_time** | **str** | Next scheduled execution time in case the execution status was RETRY_ON_HOLD. | [optional] 
**rye_lock_unheld_count** | **int** | Used internally and shouldn&#39;t be exposed to users. A counter for the cron job to record how many times this event is in in_process state but don&#39;t have a lock consecutively/ | [optional] 

## Example

```python
from openapi_client.models.enterprise_crm_eventbus_proto_event_execution_details import EnterpriseCrmEventbusProtoEventExecutionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCrmEventbusProtoEventExecutionDetails from a JSON string
enterprise_crm_eventbus_proto_event_execution_details_instance = EnterpriseCrmEventbusProtoEventExecutionDetails.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCrmEventbusProtoEventExecutionDetails.to_json())

# convert the object into a dict
enterprise_crm_eventbus_proto_event_execution_details_dict = enterprise_crm_eventbus_proto_event_execution_details_instance.to_dict()
# create an instance of EnterpriseCrmEventbusProtoEventExecutionDetails from a dict
enterprise_crm_eventbus_proto_event_execution_details_from_dict = EnterpriseCrmEventbusProtoEventExecutionDetails.from_dict(enterprise_crm_eventbus_proto_event_execution_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


