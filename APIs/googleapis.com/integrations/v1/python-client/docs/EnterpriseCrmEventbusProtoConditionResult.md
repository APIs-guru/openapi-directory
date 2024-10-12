# EnterpriseCrmEventbusProtoConditionResult

Contains the combined condition calculation results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_task_number** | **str** | the current task number. | [optional] 
**next_task_number** | **str** | the next task number. | [optional] 
**result** | **bool** | the result comes out after evaluate the combined condition. True if there&#39;s no combined condition specified. | [optional] 

## Example

```python
from openapi_client.models.enterprise_crm_eventbus_proto_condition_result import EnterpriseCrmEventbusProtoConditionResult

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCrmEventbusProtoConditionResult from a JSON string
enterprise_crm_eventbus_proto_condition_result_instance = EnterpriseCrmEventbusProtoConditionResult.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCrmEventbusProtoConditionResult.to_json())

# convert the object into a dict
enterprise_crm_eventbus_proto_condition_result_dict = enterprise_crm_eventbus_proto_condition_result_instance.to_dict()
# create an instance of EnterpriseCrmEventbusProtoConditionResult from a dict
enterprise_crm_eventbus_proto_condition_result_from_dict = EnterpriseCrmEventbusProtoConditionResult.from_dict(enterprise_crm_eventbus_proto_condition_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


