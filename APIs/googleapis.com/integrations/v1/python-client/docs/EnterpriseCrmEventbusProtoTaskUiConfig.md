# EnterpriseCrmEventbusProtoTaskUiConfig

Task authors would use this type to configure the UI for a particular task by specifying what UI config modules should be included to compose the UI. Learn more about config module framework:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**task_ui_module_configs** | [**List[EnterpriseCrmEventbusProtoTaskUiModuleConfig]**](EnterpriseCrmEventbusProtoTaskUiModuleConfig.md) | Configurations of included config modules. | [optional] 

## Example

```python
from openapi_client.models.enterprise_crm_eventbus_proto_task_ui_config import EnterpriseCrmEventbusProtoTaskUiConfig

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCrmEventbusProtoTaskUiConfig from a JSON string
enterprise_crm_eventbus_proto_task_ui_config_instance = EnterpriseCrmEventbusProtoTaskUiConfig.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCrmEventbusProtoTaskUiConfig.to_json())

# convert the object into a dict
enterprise_crm_eventbus_proto_task_ui_config_dict = enterprise_crm_eventbus_proto_task_ui_config_instance.to_dict()
# create an instance of EnterpriseCrmEventbusProtoTaskUiConfig from a dict
enterprise_crm_eventbus_proto_task_ui_config_from_dict = EnterpriseCrmEventbusProtoTaskUiConfig.from_dict(enterprise_crm_eventbus_proto_task_ui_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


