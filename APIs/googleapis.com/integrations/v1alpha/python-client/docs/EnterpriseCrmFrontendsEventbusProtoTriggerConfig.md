# EnterpriseCrmFrontendsEventbusProtoTriggerConfig

Configuration detail of a trigger. Next available id: 19

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alert_config** | [**List[EnterpriseCrmEventbusProtoWorkflowAlertConfig]**](EnterpriseCrmEventbusProtoWorkflowAlertConfig.md) | An alert threshold configuration for the [trigger + client + workflow] tuple. If these values are not specified in the trigger config, default values will be populated by the system. Note that there must be exactly one alert threshold configured per [client + trigger + workflow] when published. | [optional] 
**cloud_scheduler_config** | [**EnterpriseCrmEventbusProtoCloudSchedulerConfig**](EnterpriseCrmEventbusProtoCloudSchedulerConfig.md) |  | [optional] 
**description** | **str** | User-provided description intended to give more business context about the task. | [optional] 
**enabled_clients** | **List[str]** | Required. The list of client ids which are enabled to execute the workflow using this trigger. In other words, these clients have the workflow execution privledges for this trigger. For API trigger, the client id in the incoming request is validated against the list of enabled clients. For non-API triggers, one workflow execution is triggered on behalf of each enabled client. | [optional] 
**error_catcher_id** | **str** | Optional Error catcher id of the error catch flow which will be executed when execution error happens in the task | [optional] 
**label** | **str** | The user created label for a particular trigger. | [optional] 
**next_tasks_execution_policy** | **str** | Dictates how next tasks will be executed. | [optional] 
**pause_workflow_executions** | **bool** | Optional. If set to true, any upcoming requests for this trigger config will be paused and the executions will be resumed later when the flag is reset. The workflow to which this trigger config belongs has to be in ACTIVE status for the executions to be paused or resumed. | [optional] 
**position** | [**EnterpriseCrmEventbusProtoCoordinate**](EnterpriseCrmEventbusProtoCoordinate.md) |  | [optional] 
**properties** | **Dict[str, str]** | Configurable properties of the trigger, not to be confused with workflow parameters. E.g. \&quot;name\&quot; is a property for API triggers and \&quot;subscription\&quot; is a property for Cloud Pubsub triggers. | [optional] 
**start_tasks** | [**List[EnterpriseCrmEventbusProtoNextTask]**](EnterpriseCrmEventbusProtoNextTask.md) | Set of tasks numbers from where the workflow execution is started by this trigger. If this is empty, then workflow is executed with default start tasks. In the list of start tasks, none of two tasks can have direct ancestor-descendant relationships (i.e. in a same workflow execution graph). | [optional] 
**trigger_criteria** | [**EnterpriseCrmEventbusProtoTriggerCriteria**](EnterpriseCrmEventbusProtoTriggerCriteria.md) |  | [optional] 
**trigger_id** | **str** | The backend trigger ID. | [optional] 
**trigger_number** | **str** | Required. A number to uniquely identify each trigger config within the workflow on UI. | [optional] 
**trigger_type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.enterprise_crm_frontends_eventbus_proto_trigger_config import EnterpriseCrmFrontendsEventbusProtoTriggerConfig

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCrmFrontendsEventbusProtoTriggerConfig from a JSON string
enterprise_crm_frontends_eventbus_proto_trigger_config_instance = EnterpriseCrmFrontendsEventbusProtoTriggerConfig.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCrmFrontendsEventbusProtoTriggerConfig.to_json())

# convert the object into a dict
enterprise_crm_frontends_eventbus_proto_trigger_config_dict = enterprise_crm_frontends_eventbus_proto_trigger_config_instance.to_dict()
# create an instance of EnterpriseCrmFrontendsEventbusProtoTriggerConfig from a dict
enterprise_crm_frontends_eventbus_proto_trigger_config_from_dict = EnterpriseCrmFrontendsEventbusProtoTriggerConfig.from_dict(enterprise_crm_frontends_eventbus_proto_trigger_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


