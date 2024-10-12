# EnterpriseCrmFrontendsEventbusProtoEventExecutionInfo

Contains all the execution details for a workflow instance. Next available id: 24

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | The event data user sends as request. | [optional] 
**create_time** | **str** | Auto-generated. | [optional] 
**error_code** | [**CrmlogErrorCode**](CrmlogErrorCode.md) |  | [optional] 
**errors** | [**List[EnterpriseCrmEventbusProtoErrorDetail]**](EnterpriseCrmEventbusProtoErrorDetail.md) | Errors, warnings, and informationals associated with the workflow/task. The order in which the errors were added by the workflow/task is maintained. | [optional] 
**event_execution_details** | [**EnterpriseCrmFrontendsEventbusProtoEventExecutionDetails**](EnterpriseCrmFrontendsEventbusProtoEventExecutionDetails.md) |  | [optional] 
**event_execution_info_id** | **str** | Auto-generated primary key. | [optional] 
**execution_trace_info** | [**EnterpriseCrmEventbusProtoExecutionTraceInfo**](EnterpriseCrmEventbusProtoExecutionTraceInfo.md) |  | [optional] 
**last_modified_time** | **str** | Auto-generated. | [optional] 
**post_method** | **str** | The ways user posts this event. | [optional] 
**product** | **str** | Which Google product the execution_info belongs to. If not set, the execution_info belongs to Integration Platform by default. | [optional] 
**request_id** | **str** | Optional. This is used to de-dup incoming request. | [optional] 
**request_params** | [**EnterpriseCrmFrontendsEventbusProtoEventParameters**](EnterpriseCrmFrontendsEventbusProtoEventParameters.md) |  | [optional] 
**response_params** | [**EnterpriseCrmFrontendsEventbusProtoEventParameters**](EnterpriseCrmFrontendsEventbusProtoEventParameters.md) |  | [optional] 
**snapshot_number** | **str** | Workflow snapshot number. | [optional] 
**tenant** | **str** | Tenant this event is created. Used to reschedule the event to correct tenant. | [optional] 
**trigger_id** | **str** | The trigger id of the workflow trigger config. If both trigger_id and client_id is present, the workflow is executed from the start tasks provided by the matching trigger config otherwise it is executed from the default start tasks. | [optional] 
**workflow_id** | **str** | Required. Pointer to the workflow it is executing. | [optional] 
**workflow_name** | **str** | Name of the workflow. | [optional] 
**workflow_retry_backoff_interval_seconds** | **str** | Time interval in seconds to schedule retry of workflow in manifold when workflow is already running | [optional] 

## Example

```python
from openapi_client.models.enterprise_crm_frontends_eventbus_proto_event_execution_info import EnterpriseCrmFrontendsEventbusProtoEventExecutionInfo

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCrmFrontendsEventbusProtoEventExecutionInfo from a JSON string
enterprise_crm_frontends_eventbus_proto_event_execution_info_instance = EnterpriseCrmFrontendsEventbusProtoEventExecutionInfo.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCrmFrontendsEventbusProtoEventExecutionInfo.to_json())

# convert the object into a dict
enterprise_crm_frontends_eventbus_proto_event_execution_info_dict = enterprise_crm_frontends_eventbus_proto_event_execution_info_instance.to_dict()
# create an instance of EnterpriseCrmFrontendsEventbusProtoEventExecutionInfo from a dict
enterprise_crm_frontends_eventbus_proto_event_execution_info_from_dict = EnterpriseCrmFrontendsEventbusProtoEventExecutionInfo.from_dict(enterprise_crm_frontends_eventbus_proto_event_execution_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


