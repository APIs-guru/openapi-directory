# OrganizationsMembers


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | An email address | [optional] 
**full_name** | **str** | A string with a length of at least 1.  Cannot begin or end with a space. | [optional] 
**type** | **str** | One of: admin, normal or observer | [optional] 

## Example

```python
from openapi_client.models.organizations_members import OrganizationsMembers

# TODO update the JSON string below
json = "{}"
# create an instance of OrganizationsMembers from a JSON string
organizations_members_instance = OrganizationsMembers.from_json(json)
# print the JSON string representation of the object
print(OrganizationsMembers.to_json())

# convert the object into a dict
organizations_members_dict = organizations_members_instance.to_dict()
# create an instance of OrganizationsMembers from a dict
organizations_members_from_dict = OrganizationsMembers.from_dict(organizations_members_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


