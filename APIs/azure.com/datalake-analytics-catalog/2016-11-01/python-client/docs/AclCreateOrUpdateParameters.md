# AclCreateOrUpdateParameters

The parameters used to create or update an access control list (ACL) entry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ace_type** | **str** | the access control list (ACL) entry type. UserObj and GroupObj denote the owning user and group, respectively. | 
**permission** | **str** | the permission type of the access control list (ACL) entry. | 
**principal_id** | **str** | the Azure AD object ID of the user or group being specified in the access control list (ACL) entry. | 

## Example

```python
from openapi_client.models.acl_create_or_update_parameters import AclCreateOrUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of AclCreateOrUpdateParameters from a JSON string
acl_create_or_update_parameters_instance = AclCreateOrUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(AclCreateOrUpdateParameters.to_json())

# convert the object into a dict
acl_create_or_update_parameters_dict = acl_create_or_update_parameters_instance.to_dict()
# create an instance of AclCreateOrUpdateParameters from a dict
acl_create_or_update_parameters_from_dict = AclCreateOrUpdateParameters.from_dict(acl_create_or_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


