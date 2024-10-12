# EnterpriseCrmEventbusProtoTaskExecutionDetails

Contains the details of the execution of this task. Next available id: 11

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**task_attempt_stats** | [**List[EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskAttemptStats]**](EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskAttemptStats.md) |  | [optional] 
**task_execution_state** | **str** |  | [optional] 
**task_number** | **str** | Pointer to the task config it used for execution. | [optional] 

## Example

```python
from openapi_client.models.enterprise_crm_eventbus_proto_task_execution_details import EnterpriseCrmEventbusProtoTaskExecutionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCrmEventbusProtoTaskExecutionDetails from a JSON string
enterprise_crm_eventbus_proto_task_execution_details_instance = EnterpriseCrmEventbusProtoTaskExecutionDetails.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCrmEventbusProtoTaskExecutionDetails.to_json())

# convert the object into a dict
enterprise_crm_eventbus_proto_task_execution_details_dict = enterprise_crm_eventbus_proto_task_execution_details_instance.to_dict()
# create an instance of EnterpriseCrmEventbusProtoTaskExecutionDetails from a dict
enterprise_crm_eventbus_proto_task_execution_details_from_dict = EnterpriseCrmEventbusProtoTaskExecutionDetails.from_dict(enterprise_crm_eventbus_proto_task_execution_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


