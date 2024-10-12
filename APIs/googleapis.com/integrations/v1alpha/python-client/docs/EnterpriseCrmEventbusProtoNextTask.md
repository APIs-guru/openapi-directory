# EnterpriseCrmEventbusProtoNextTask

The task that is next in line to be executed, if the condition specified evaluated to true.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**combined_conditions** | [**List[EnterpriseCrmEventbusProtoCombinedCondition]**](EnterpriseCrmEventbusProtoCombinedCondition.md) | Combined condition for this task to become an eligible next task. Each of these combined_conditions are joined with logical OR. DEPRECATED: use &#x60;condition&#x60; | [optional] 
**condition** | **str** | Standard filter expression for this task to become an eligible next task. | [optional] 
**description** | **str** | User-provided description intended to give more business context about the next task edge or condition. | [optional] 
**label** | **str** | User-provided label that is attached to this edge in the UI. | [optional] 
**task_config_id** | **str** | ID of the next task. | [optional] 
**task_number** | **str** | Task number of the next task. | [optional] 

## Example

```python
from openapi_client.models.enterprise_crm_eventbus_proto_next_task import EnterpriseCrmEventbusProtoNextTask

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCrmEventbusProtoNextTask from a JSON string
enterprise_crm_eventbus_proto_next_task_instance = EnterpriseCrmEventbusProtoNextTask.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCrmEventbusProtoNextTask.to_json())

# convert the object into a dict
enterprise_crm_eventbus_proto_next_task_dict = enterprise_crm_eventbus_proto_next_task_instance.to_dict()
# create an instance of EnterpriseCrmEventbusProtoNextTask from a dict
enterprise_crm_eventbus_proto_next_task_from_dict = EnterpriseCrmEventbusProtoNextTask.from_dict(enterprise_crm_eventbus_proto_next_task_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


