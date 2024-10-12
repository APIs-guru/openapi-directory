# EnterpriseCrmEventbusProtoEventExecutionDetailsEventAttemptStats


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **str** | The end time of the event execution for current attempt. | [optional] 
**start_time** | **str** | The start time of the event execution for current attempt. This could be in the future if it&#39;s been scheduled. | [optional] 

## Example

```python
from openapi_client.models.enterprise_crm_eventbus_proto_event_execution_details_event_attempt_stats import EnterpriseCrmEventbusProtoEventExecutionDetailsEventAttemptStats

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCrmEventbusProtoEventExecutionDetailsEventAttemptStats from a JSON string
enterprise_crm_eventbus_proto_event_execution_details_event_attempt_stats_instance = EnterpriseCrmEventbusProtoEventExecutionDetailsEventAttemptStats.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCrmEventbusProtoEventExecutionDetailsEventAttemptStats.to_json())

# convert the object into a dict
enterprise_crm_eventbus_proto_event_execution_details_event_attempt_stats_dict = enterprise_crm_eventbus_proto_event_execution_details_event_attempt_stats_instance.to_dict()
# create an instance of EnterpriseCrmEventbusProtoEventExecutionDetailsEventAttemptStats from a dict
enterprise_crm_eventbus_proto_event_execution_details_event_attempt_stats_from_dict = EnterpriseCrmEventbusProtoEventExecutionDetailsEventAttemptStats.from_dict(enterprise_crm_eventbus_proto_event_execution_details_event_attempt_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


