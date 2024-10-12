# EnterpriseCrmEventbusProtoNextTeardownTask

The teardown task that is next in line to be executed. We support only sequential execution of teardown tasks (i.e. no branching).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Required. Name of the next teardown task. | [optional] 

## Example

```python
from openapi_client.models.enterprise_crm_eventbus_proto_next_teardown_task import EnterpriseCrmEventbusProtoNextTeardownTask

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCrmEventbusProtoNextTeardownTask from a JSON string
enterprise_crm_eventbus_proto_next_teardown_task_instance = EnterpriseCrmEventbusProtoNextTeardownTask.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCrmEventbusProtoNextTeardownTask.to_json())

# convert the object into a dict
enterprise_crm_eventbus_proto_next_teardown_task_dict = enterprise_crm_eventbus_proto_next_teardown_task_instance.to_dict()
# create an instance of EnterpriseCrmEventbusProtoNextTeardownTask from a dict
enterprise_crm_eventbus_proto_next_teardown_task_from_dict = EnterpriseCrmEventbusProtoNextTeardownTask.from_dict(enterprise_crm_eventbus_proto_next_teardown_task_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


