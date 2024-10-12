# EnterpriseCrmEventbusProtoTriggerCriteria


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**condition** | **str** | Required. Standard filter expression, when true the workflow will be executed. If there&#39;s no trigger_criteria_task_implementation_class_name specified, the condition will be validated directly. | [optional] 
**parameters** | [**EnterpriseCrmEventbusProtoEventParameters**](EnterpriseCrmEventbusProtoEventParameters.md) |  | [optional] 
**trigger_criteria_task_implementation_class_name** | **str** | Optional. Implementation class name. The class should implement the “TypedTask” interface. | [optional] 

## Example

```python
from openapi_client.models.enterprise_crm_eventbus_proto_trigger_criteria import EnterpriseCrmEventbusProtoTriggerCriteria

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCrmEventbusProtoTriggerCriteria from a JSON string
enterprise_crm_eventbus_proto_trigger_criteria_instance = EnterpriseCrmEventbusProtoTriggerCriteria.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCrmEventbusProtoTriggerCriteria.to_json())

# convert the object into a dict
enterprise_crm_eventbus_proto_trigger_criteria_dict = enterprise_crm_eventbus_proto_trigger_criteria_instance.to_dict()
# create an instance of EnterpriseCrmEventbusProtoTriggerCriteria from a dict
enterprise_crm_eventbus_proto_trigger_criteria_from_dict = EnterpriseCrmEventbusProtoTriggerCriteria.from_dict(enterprise_crm_eventbus_proto_trigger_criteria_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


