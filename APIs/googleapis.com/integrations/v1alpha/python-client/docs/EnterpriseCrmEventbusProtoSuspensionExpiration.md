# EnterpriseCrmEventbusProtoSuspensionExpiration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expire_after_ms** | **int** | Milliseconds after which the suspension expires, if no action taken. | [optional] 
**lift_when_expired** | **bool** | Whether the suspension will be REJECTED or LIFTED upon expiration. REJECTED is the default behavior. | [optional] 
**remind_after_ms** | **int** | Milliseconds after which the previous suspension action reminder, if any, is sent using the selected notification option, for a suspension which is still PENDING_UNSPECIFIED. | [optional] 

## Example

```python
from openapi_client.models.enterprise_crm_eventbus_proto_suspension_expiration import EnterpriseCrmEventbusProtoSuspensionExpiration

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCrmEventbusProtoSuspensionExpiration from a JSON string
enterprise_crm_eventbus_proto_suspension_expiration_instance = EnterpriseCrmEventbusProtoSuspensionExpiration.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCrmEventbusProtoSuspensionExpiration.to_json())

# convert the object into a dict
enterprise_crm_eventbus_proto_suspension_expiration_dict = enterprise_crm_eventbus_proto_suspension_expiration_instance.to_dict()
# create an instance of EnterpriseCrmEventbusProtoSuspensionExpiration from a dict
enterprise_crm_eventbus_proto_suspension_expiration_from_dict = EnterpriseCrmEventbusProtoSuspensionExpiration.from_dict(enterprise_crm_eventbus_proto_suspension_expiration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


