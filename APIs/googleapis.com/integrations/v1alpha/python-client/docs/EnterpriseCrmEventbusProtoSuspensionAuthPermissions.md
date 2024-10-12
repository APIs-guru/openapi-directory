# EnterpriseCrmEventbusProtoSuspensionAuthPermissions

LINT.IfChange

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gaia_identity** | [**EnterpriseCrmEventbusProtoSuspensionAuthPermissionsGaiaIdentity**](EnterpriseCrmEventbusProtoSuspensionAuthPermissionsGaiaIdentity.md) |  | [optional] 
**google_group** | [**EnterpriseCrmEventbusProtoSuspensionAuthPermissionsGaiaIdentity**](EnterpriseCrmEventbusProtoSuspensionAuthPermissionsGaiaIdentity.md) |  | [optional] 
**loas_role** | **str** |  | [optional] 
**mdb_group** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.enterprise_crm_eventbus_proto_suspension_auth_permissions import EnterpriseCrmEventbusProtoSuspensionAuthPermissions

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCrmEventbusProtoSuspensionAuthPermissions from a JSON string
enterprise_crm_eventbus_proto_suspension_auth_permissions_instance = EnterpriseCrmEventbusProtoSuspensionAuthPermissions.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCrmEventbusProtoSuspensionAuthPermissions.to_json())

# convert the object into a dict
enterprise_crm_eventbus_proto_suspension_auth_permissions_dict = enterprise_crm_eventbus_proto_suspension_auth_permissions_instance.to_dict()
# create an instance of EnterpriseCrmEventbusProtoSuspensionAuthPermissions from a dict
enterprise_crm_eventbus_proto_suspension_auth_permissions_from_dict = EnterpriseCrmEventbusProtoSuspensionAuthPermissions.from_dict(enterprise_crm_eventbus_proto_suspension_auth_permissions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


