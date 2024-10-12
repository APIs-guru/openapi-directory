# Acl

A Data Lake Analytics catalog access control list (ACL) entry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ace_type** | **str** | the access control list (ACL) entry type. UserObj and GroupObj denote the owning user and group, respectively. | [optional] [readonly] 
**permission** | **str** | the permission type of the access control list (ACL) entry. | [optional] [readonly] 
**principal_id** | **str** | the Azure AD object ID of the user or group being specified in the access control list (ACL) entry. | [optional] [readonly] 

## Example

```python
from openapi_client.models.acl import Acl

# TODO update the JSON string below
json = "{}"
# create an instance of Acl from a JSON string
acl_instance = Acl.from_json(json)
# print the JSON string representation of the object
print(Acl.to_json())

# convert the object into a dict
acl_dict = acl_instance.to_dict()
# create an instance of Acl from a dict
acl_from_dict = Acl.from_dict(acl_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


