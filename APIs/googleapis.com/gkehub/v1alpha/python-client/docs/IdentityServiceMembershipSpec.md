# IdentityServiceMembershipSpec

**Anthos Identity Service**: Configuration for a single Membership.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_methods** | [**List[IdentityServiceAuthMethod]**](IdentityServiceAuthMethod.md) | A member may support multiple auth methods. | [optional] 

## Example

```python
from openapi_client.models.identity_service_membership_spec import IdentityServiceMembershipSpec

# TODO update the JSON string below
json = "{}"
# create an instance of IdentityServiceMembershipSpec from a JSON string
identity_service_membership_spec_instance = IdentityServiceMembershipSpec.from_json(json)
# print the JSON string representation of the object
print(IdentityServiceMembershipSpec.to_json())

# convert the object into a dict
identity_service_membership_spec_dict = identity_service_membership_spec_instance.to_dict()
# create an instance of IdentityServiceMembershipSpec from a dict
identity_service_membership_spec_from_dict = IdentityServiceMembershipSpec.from_dict(identity_service_membership_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


