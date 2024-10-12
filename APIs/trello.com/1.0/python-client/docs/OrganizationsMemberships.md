# OrganizationsMemberships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**member_fields** | **str** | all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username | [optional] 
**type** | **str** | One of: admin, normal or observer | [optional] 

## Example

```python
from openapi_client.models.organizations_memberships import OrganizationsMemberships

# TODO update the JSON string below
json = "{}"
# create an instance of OrganizationsMemberships from a JSON string
organizations_memberships_instance = OrganizationsMemberships.from_json(json)
# print the JSON string representation of the object
print(OrganizationsMemberships.to_json())

# convert the object into a dict
organizations_memberships_dict = organizations_memberships_instance.to_dict()
# create an instance of OrganizationsMemberships from a dict
organizations_memberships_from_dict = OrganizationsMemberships.from_dict(organizations_memberships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


