# AclDeleteParameters

The parameters used to delete an access control list (ACL) entry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ace_type** | **str** | the access control list (ACL) entry type. UserObj and GroupObj denote the owning user and group, respectively. | 
**principal_id** | **str** | the Azure AD object ID of the user or group being specified in the access control list (ACL) entry. | 

## Example

```python
from openapi_client.models.acl_delete_parameters import AclDeleteParameters

# TODO update the JSON string below
json = "{}"
# create an instance of AclDeleteParameters from a JSON string
acl_delete_parameters_instance = AclDeleteParameters.from_json(json)
# print the JSON string representation of the object
print(AclDeleteParameters.to_json())

# convert the object into a dict
acl_delete_parameters_dict = acl_delete_parameters_instance.to_dict()
# create an instance of AclDeleteParameters from a dict
acl_delete_parameters_from_dict = AclDeleteParameters.from_dict(acl_delete_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


