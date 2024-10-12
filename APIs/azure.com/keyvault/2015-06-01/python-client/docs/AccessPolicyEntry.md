# AccessPolicyEntry

An identity that have access to the key vault. All identities in the array must use the same tenant ID as the key vault's tenant ID.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_id** | **str** |  Application ID of the client making request on behalf of a principal | [optional] 
**object_id** | **str** | The object ID of a user, service principal or security group in the Azure Active Directory tenant for the vault. The object ID must be unique for the list of access policies. | 
**permissions** | [**Permissions**](Permissions.md) |  | 
**tenant_id** | **str** | The Azure Active Directory tenant ID that should be used for authenticating requests to the key vault. | 

## Example

```python
from openapi_client.models.access_policy_entry import AccessPolicyEntry

# TODO update the JSON string below
json = "{}"
# create an instance of AccessPolicyEntry from a JSON string
access_policy_entry_instance = AccessPolicyEntry.from_json(json)
# print the JSON string representation of the object
print(AccessPolicyEntry.to_json())

# convert the object into a dict
access_policy_entry_dict = access_policy_entry_instance.to_dict()
# create an instance of AccessPolicyEntry from a dict
access_policy_entry_from_dict = AccessPolicyEntry.from_dict(access_policy_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


