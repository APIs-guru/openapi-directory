# OrganizationsWebsite


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | A URL starting with http:// or https:// or null | [optional] 

## Example

```python
from openapi_client.models.organizations_website import OrganizationsWebsite

# TODO update the JSON string below
json = "{}"
# create an instance of OrganizationsWebsite from a JSON string
organizations_website_instance = OrganizationsWebsite.from_json(json)
# print the JSON string representation of the object
print(OrganizationsWebsite.to_json())

# convert the object into a dict
organizations_website_dict = organizations_website_instance.to_dict()
# create an instance of OrganizationsWebsite from a dict
organizations_website_from_dict = OrganizationsWebsite.from_dict(organizations_website_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


