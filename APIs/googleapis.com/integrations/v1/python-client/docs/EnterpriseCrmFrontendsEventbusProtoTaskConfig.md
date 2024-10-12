# EnterpriseCrmFrontendsEventbusProtoTaskConfig

The task configuration details. This is not the implementation of Task. There might be multiple TaskConfigs for the same Task.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alert_configs** | [**List[EnterpriseCrmEventbusProtoTaskAlertConfig]**](EnterpriseCrmEventbusProtoTaskAlertConfig.md) | Alert configurations on error rate, warning rate, number of runs, durations, etc. | [optional] 
**create_time** | **str** | Auto-generated. | [optional] 
**creator_email** | **str** | The creator&#39;s email address. Auto-generated from the user&#39;s email. | [optional] 
**description** | **str** | User-provided description intended to give more business context about the task. | [optional] 
**disable_strict_type_validation** | **bool** | If this config contains a TypedTask, allow validation to succeed if an input is read from the output of another TypedTask whose output type is declared as a superclass of the requested input type. For instance, if the previous task declares an output of type Message, any task with this flag enabled will pass validation when attempting to read any proto Message type from the resultant Event parameter. | [optional] 
**error_catcher_id** | **str** | Optional Error catcher id of the error catch flow which will be executed when execution error happens in the task | [optional] 
**external_task_type** | **str** |  | [optional] 
**failure_policy** | [**EnterpriseCrmEventbusProtoFailurePolicy**](EnterpriseCrmEventbusProtoFailurePolicy.md) |  | [optional] 
**incoming_edge_count** | **int** | The number of edges leading into this TaskConfig. | [optional] 
**json_validation_option** | **str** | If set, overrides the option configured in the Task implementation class. | [optional] 
**label** | **str** | User-provided label that is attached to this TaskConfig in the UI. | [optional] 
**last_modified_time** | **str** | Auto-generated. | [optional] 
**next_tasks** | [**List[EnterpriseCrmEventbusProtoNextTask]**](EnterpriseCrmEventbusProtoNextTask.md) | The set of tasks that are next in line to be executed as per the execution graph defined for the parent event, specified by &#x60;event_config_id&#x60;. Each of these next tasks are executed only if the condition associated with them evaluates to true. | [optional] 
**next_tasks_execution_policy** | **str** | The policy dictating the execution of the next set of tasks for the current task. | [optional] 
**parameters** | [**Dict[str, EnterpriseCrmFrontendsEventbusProtoParameterEntry]**](EnterpriseCrmFrontendsEventbusProtoParameterEntry.md) | The customized parameters the user can pass to this task. | [optional] 
**position** | [**EnterpriseCrmEventbusProtoCoordinate**](EnterpriseCrmEventbusProtoCoordinate.md) |  | [optional] 
**precondition** | **str** | Optional. Standard filter expression evaluated before execution. Independent of other conditions and tasks. Can be used to enable rollout. e.g. \&quot;rollout(5)\&quot; will only allow 5% of incoming traffic to task. | [optional] 
**precondition_label** | **str** | Optional. User-provided label that is attached to precondition in the UI. | [optional] 
**rollback_strategy** | [**EnterpriseCrmFrontendsEventbusProtoRollbackStrategy**](EnterpriseCrmFrontendsEventbusProtoRollbackStrategy.md) |  | [optional] 
**success_policy** | [**EnterpriseCrmEventbusProtoSuccessPolicy**](EnterpriseCrmEventbusProtoSuccessPolicy.md) |  | [optional] 
**synchronous_call_failure_policy** | [**EnterpriseCrmEventbusProtoFailurePolicy**](EnterpriseCrmEventbusProtoFailurePolicy.md) |  | [optional] 
**task_entity** | [**EnterpriseCrmFrontendsEventbusProtoTaskEntity**](EnterpriseCrmFrontendsEventbusProtoTaskEntity.md) |  | [optional] 
**task_execution_strategy** | **str** | The policy dictating the execution strategy of this task. | [optional] 
**task_name** | **str** | The name for the task. | [optional] 
**task_number** | **str** | REQUIRED: the identifier of this task within its parent event config, specified by the client. This should be unique among all the tasks belong to the same event config. We use this field as the identifier to find next tasks (via field &#x60;next_tasks.task_number&#x60;). | [optional] 
**task_spec** | **str** | A string template that allows user to configure task parameters (with either literal default values or tokens which will be resolved at execution time) for the task. It will eventually replace the old \&quot;parameters\&quot; field. | [optional] 
**task_template_name** | **str** | Used to define task-template name if task is of type task-template | [optional] 
**task_type** | **str** | Defines the type of the task | [optional] 

## Example

```python
from openapi_client.models.enterprise_crm_frontends_eventbus_proto_task_config import EnterpriseCrmFrontendsEventbusProtoTaskConfig

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCrmFrontendsEventbusProtoTaskConfig from a JSON string
enterprise_crm_frontends_eventbus_proto_task_config_instance = EnterpriseCrmFrontendsEventbusProtoTaskConfig.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCrmFrontendsEventbusProtoTaskConfig.to_json())

# convert the object into a dict
enterprise_crm_frontends_eventbus_proto_task_config_dict = enterprise_crm_frontends_eventbus_proto_task_config_instance.to_dict()
# create an instance of EnterpriseCrmFrontendsEventbusProtoTaskConfig from a dict
enterprise_crm_frontends_eventbus_proto_task_config_from_dict = EnterpriseCrmFrontendsEventbusProtoTaskConfig.from_dict(enterprise_crm_frontends_eventbus_proto_task_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


