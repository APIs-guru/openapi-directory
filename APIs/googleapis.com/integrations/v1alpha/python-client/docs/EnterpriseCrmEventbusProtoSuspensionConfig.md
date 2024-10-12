# EnterpriseCrmEventbusProtoSuspensionConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_message** | **str** | Optional information to provide recipients of the suspension in addition to the resolution URL, typically containing relevant parameter values from the originating workflow. | [optional] 
**notifications** | [**List[EnterpriseCrmEventbusProtoNotification]**](EnterpriseCrmEventbusProtoNotification.md) |  | [optional] 
**suspension_expiration** | [**EnterpriseCrmEventbusProtoSuspensionExpiration**](EnterpriseCrmEventbusProtoSuspensionExpiration.md) |  | [optional] 
**who_may_resolve** | [**List[EnterpriseCrmEventbusProtoSuspensionAuthPermissions]**](EnterpriseCrmEventbusProtoSuspensionAuthPermissions.md) | Identities able to resolve this suspension. | [optional] 

## Example

```python
from openapi_client.models.enterprise_crm_eventbus_proto_suspension_config import EnterpriseCrmEventbusProtoSuspensionConfig

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCrmEventbusProtoSuspensionConfig from a JSON string
enterprise_crm_eventbus_proto_suspension_config_instance = EnterpriseCrmEventbusProtoSuspensionConfig.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCrmEventbusProtoSuspensionConfig.to_json())

# convert the object into a dict
enterprise_crm_eventbus_proto_suspension_config_dict = enterprise_crm_eventbus_proto_suspension_config_instance.to_dict()
# create an instance of EnterpriseCrmEventbusProtoSuspensionConfig from a dict
enterprise_crm_eventbus_proto_suspension_config_from_dict = EnterpriseCrmEventbusProtoSuspensionConfig.from_dict(enterprise_crm_eventbus_proto_suspension_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


