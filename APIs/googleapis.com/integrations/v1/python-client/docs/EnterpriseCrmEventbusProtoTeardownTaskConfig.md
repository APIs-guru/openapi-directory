# EnterpriseCrmEventbusProtoTeardownTaskConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creator_email** | **str** | The creator&#39;s email address. | [optional] 
**name** | **str** | Required. Unique identifier of the teardown task within this Config. We use this field as the identifier to find next teardown tasks. | [optional] 
**next_teardown_task** | [**EnterpriseCrmEventbusProtoNextTeardownTask**](EnterpriseCrmEventbusProtoNextTeardownTask.md) |  | [optional] 
**parameters** | [**EnterpriseCrmEventbusProtoEventParameters**](EnterpriseCrmEventbusProtoEventParameters.md) |  | [optional] 
**properties** | [**EnterpriseCrmEventbusProtoEventBusProperties**](EnterpriseCrmEventbusProtoEventBusProperties.md) |  | [optional] 
**teardown_task_implementation_class_name** | **str** | Required. Implementation class name. | [optional] 

## Example

```python
from openapi_client.models.enterprise_crm_eventbus_proto_teardown_task_config import EnterpriseCrmEventbusProtoTeardownTaskConfig

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCrmEventbusProtoTeardownTaskConfig from a JSON string
enterprise_crm_eventbus_proto_teardown_task_config_instance = EnterpriseCrmEventbusProtoTeardownTaskConfig.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCrmEventbusProtoTeardownTaskConfig.to_json())

# convert the object into a dict
enterprise_crm_eventbus_proto_teardown_task_config_dict = enterprise_crm_eventbus_proto_teardown_task_config_instance.to_dict()
# create an instance of EnterpriseCrmEventbusProtoTeardownTaskConfig from a dict
enterprise_crm_eventbus_proto_teardown_task_config_from_dict = EnterpriseCrmEventbusProtoTeardownTaskConfig.from_dict(enterprise_crm_eventbus_proto_teardown_task_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


