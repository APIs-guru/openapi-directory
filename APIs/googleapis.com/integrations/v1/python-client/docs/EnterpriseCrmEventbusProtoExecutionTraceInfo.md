# EnterpriseCrmEventbusProtoExecutionTraceInfo

Message that helps aggregate all sub-executions triggered by one execution and keeps track of child-parent relationships.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parent_event_execution_info_id** | **str** | Parent event execution info id that triggers the current execution through SubWorkflowExecutorTask. | [optional] 
**trace_id** | **str** | Used to aggregate ExecutionTraceInfo. | [optional] 

## Example

```python
from openapi_client.models.enterprise_crm_eventbus_proto_execution_trace_info import EnterpriseCrmEventbusProtoExecutionTraceInfo

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCrmEventbusProtoExecutionTraceInfo from a JSON string
enterprise_crm_eventbus_proto_execution_trace_info_instance = EnterpriseCrmEventbusProtoExecutionTraceInfo.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCrmEventbusProtoExecutionTraceInfo.to_json())

# convert the object into a dict
enterprise_crm_eventbus_proto_execution_trace_info_dict = enterprise_crm_eventbus_proto_execution_trace_info_instance.to_dict()
# create an instance of EnterpriseCrmEventbusProtoExecutionTraceInfo from a dict
enterprise_crm_eventbus_proto_execution_trace_info_from_dict = EnterpriseCrmEventbusProtoExecutionTraceInfo.from_dict(enterprise_crm_eventbus_proto_execution_trace_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


