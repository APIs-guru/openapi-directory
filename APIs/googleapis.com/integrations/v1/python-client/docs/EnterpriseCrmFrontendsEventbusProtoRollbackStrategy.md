# EnterpriseCrmFrontendsEventbusProtoRollbackStrategy

Next available id: 4

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameters** | [**EnterpriseCrmFrontendsEventbusProtoEventParameters**](EnterpriseCrmFrontendsEventbusProtoEventParameters.md) |  | [optional] 
**rollback_task_implementation_class_name** | **str** | Required. This is the name of the task that needs to be executed upon rollback of this task. | [optional] 
**task_numbers_to_rollback** | **List[str]** | Required. These are the tasks numbers of the tasks whose &#x60;rollback_strategy.rollback_task_implementation_class_name&#x60; needs to be executed upon failure of this task. | [optional] 

## Example

```python
from openapi_client.models.enterprise_crm_frontends_eventbus_proto_rollback_strategy import EnterpriseCrmFrontendsEventbusProtoRollbackStrategy

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCrmFrontendsEventbusProtoRollbackStrategy from a JSON string
enterprise_crm_frontends_eventbus_proto_rollback_strategy_instance = EnterpriseCrmFrontendsEventbusProtoRollbackStrategy.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCrmFrontendsEventbusProtoRollbackStrategy.to_json())

# convert the object into a dict
enterprise_crm_frontends_eventbus_proto_rollback_strategy_dict = enterprise_crm_frontends_eventbus_proto_rollback_strategy_instance.to_dict()
# create an instance of EnterpriseCrmFrontendsEventbusProtoRollbackStrategy from a dict
enterprise_crm_frontends_eventbus_proto_rollback_strategy_from_dict = EnterpriseCrmFrontendsEventbusProtoRollbackStrategy.from_dict(enterprise_crm_frontends_eventbus_proto_rollback_strategy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


