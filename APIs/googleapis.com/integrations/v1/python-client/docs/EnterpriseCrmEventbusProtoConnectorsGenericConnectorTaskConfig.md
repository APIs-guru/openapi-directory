# EnterpriseCrmEventbusProtoConnectorsGenericConnectorTaskConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection** | [**EnterpriseCrmEventbusProtoConnectorsConnection**](EnterpriseCrmEventbusProtoConnectorsConnection.md) |  | [optional] 
**operation** | **str** | Operation to perform using the configured connection. | [optional] 

## Example

```python
from openapi_client.models.enterprise_crm_eventbus_proto_connectors_generic_connector_task_config import EnterpriseCrmEventbusProtoConnectorsGenericConnectorTaskConfig

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCrmEventbusProtoConnectorsGenericConnectorTaskConfig from a JSON string
enterprise_crm_eventbus_proto_connectors_generic_connector_task_config_instance = EnterpriseCrmEventbusProtoConnectorsGenericConnectorTaskConfig.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCrmEventbusProtoConnectorsGenericConnectorTaskConfig.to_json())

# convert the object into a dict
enterprise_crm_eventbus_proto_connectors_generic_connector_task_config_dict = enterprise_crm_eventbus_proto_connectors_generic_connector_task_config_instance.to_dict()
# create an instance of EnterpriseCrmEventbusProtoConnectorsGenericConnectorTaskConfig from a dict
enterprise_crm_eventbus_proto_connectors_generic_connector_task_config_from_dict = EnterpriseCrmEventbusProtoConnectorsGenericConnectorTaskConfig.from_dict(enterprise_crm_eventbus_proto_connectors_generic_connector_task_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


