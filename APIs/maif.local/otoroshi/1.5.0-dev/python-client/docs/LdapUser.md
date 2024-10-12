# LdapUser

A user

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | Email of the user | 
**metadata** | **Dict[str, str]** | Metadata of the user | 
**name** | **str** | Name of the user | 

## Example

```python
from openapi_client.models.ldap_user import LdapUser

# TODO update the JSON string below
json = "{}"
# create an instance of LdapUser from a JSON string
ldap_user_instance = LdapUser.from_json(json)
# print the JSON string representation of the object
print(LdapUser.to_json())

# convert the object into a dict
ldap_user_dict = ldap_user_instance.to_dict()
# create an instance of LdapUser from a dict
ldap_user_from_dict = LdapUser.from_dict(ldap_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


