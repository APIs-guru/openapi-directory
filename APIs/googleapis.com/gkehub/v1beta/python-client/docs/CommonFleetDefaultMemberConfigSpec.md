# CommonFleetDefaultMemberConfigSpec

CommonFleetDefaultMemberConfigSpec contains default configuration information for memberships of a fleet

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configmanagement** | [**ConfigManagementMembershipSpec**](ConfigManagementMembershipSpec.md) |  | [optional] 
**identityservice** | [**IdentityServiceMembershipSpec**](IdentityServiceMembershipSpec.md) |  | [optional] 
**mesh** | [**ServiceMeshMembershipSpec**](ServiceMeshMembershipSpec.md) |  | [optional] 
**policycontroller** | [**PolicyControllerMembershipSpec**](PolicyControllerMembershipSpec.md) |  | [optional] 

## Example

```python
from openapi_client.models.common_fleet_default_member_config_spec import CommonFleetDefaultMemberConfigSpec

# TODO update the JSON string below
json = "{}"
# create an instance of CommonFleetDefaultMemberConfigSpec from a JSON string
common_fleet_default_member_config_spec_instance = CommonFleetDefaultMemberConfigSpec.from_json(json)
# print the JSON string representation of the object
print(CommonFleetDefaultMemberConfigSpec.to_json())

# convert the object into a dict
common_fleet_default_member_config_spec_dict = common_fleet_default_member_config_spec_instance.to_dict()
# create an instance of CommonFleetDefaultMemberConfigSpec from a dict
common_fleet_default_member_config_spec_from_dict = CommonFleetDefaultMemberConfigSpec.from_dict(common_fleet_default_member_config_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


