# EnterpriseCrmFrontendsEventbusProtoTaskEntity

Contains a task's metadata and associated information. Next available id: 7

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disabled_for_vpc_sc** | **bool** | True if the task has conflict with vpcsc | [optional] 
**metadata** | [**EnterpriseCrmEventbusProtoTaskMetadata**](EnterpriseCrmEventbusProtoTaskMetadata.md) |  | [optional] 
**param_specs** | [**EnterpriseCrmFrontendsEventbusProtoParamSpecsMessage**](EnterpriseCrmFrontendsEventbusProtoParamSpecsMessage.md) |  | [optional] 
**stats** | [**EnterpriseCrmEventbusStats**](EnterpriseCrmEventbusStats.md) |  | [optional] 
**task_type** | **str** | Defines the type of the task | [optional] 
**ui_config** | [**EnterpriseCrmEventbusProtoTaskUiConfig**](EnterpriseCrmEventbusProtoTaskUiConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.enterprise_crm_frontends_eventbus_proto_task_entity import EnterpriseCrmFrontendsEventbusProtoTaskEntity

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCrmFrontendsEventbusProtoTaskEntity from a JSON string
enterprise_crm_frontends_eventbus_proto_task_entity_instance = EnterpriseCrmFrontendsEventbusProtoTaskEntity.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCrmFrontendsEventbusProtoTaskEntity.to_json())

# convert the object into a dict
enterprise_crm_frontends_eventbus_proto_task_entity_dict = enterprise_crm_frontends_eventbus_proto_task_entity_instance.to_dict()
# create an instance of EnterpriseCrmFrontendsEventbusProtoTaskEntity from a dict
enterprise_crm_frontends_eventbus_proto_task_entity_from_dict = EnterpriseCrmFrontendsEventbusProtoTaskEntity.from_dict(enterprise_crm_frontends_eventbus_proto_task_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


