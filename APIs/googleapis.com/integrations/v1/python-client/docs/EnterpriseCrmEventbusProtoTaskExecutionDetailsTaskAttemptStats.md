# EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskAttemptStats


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **str** | The end time of the task execution for current attempt. | [optional] 
**start_time** | **str** | The start time of the task execution for current attempt. This could be in the future if it&#39;s been scheduled. | [optional] 

## Example

```python
from openapi_client.models.enterprise_crm_eventbus_proto_task_execution_details_task_attempt_stats import EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskAttemptStats

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskAttemptStats from a JSON string
enterprise_crm_eventbus_proto_task_execution_details_task_attempt_stats_instance = EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskAttemptStats.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskAttemptStats.to_json())

# convert the object into a dict
enterprise_crm_eventbus_proto_task_execution_details_task_attempt_stats_dict = enterprise_crm_eventbus_proto_task_execution_details_task_attempt_stats_instance.to_dict()
# create an instance of EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskAttemptStats from a dict
enterprise_crm_eventbus_proto_task_execution_details_task_attempt_stats_from_dict = EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskAttemptStats.from_dict(enterprise_crm_eventbus_proto_task_execution_details_task_attempt_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


