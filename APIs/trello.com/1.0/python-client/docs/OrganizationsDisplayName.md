# OrganizationsDisplayName


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | A string with a length of at least 1.  Cannot begin or end with a space. | [optional] 

## Example

```python
from openapi_client.models.organizations_display_name import OrganizationsDisplayName

# TODO update the JSON string below
json = "{}"
# create an instance of OrganizationsDisplayName from a JSON string
organizations_display_name_instance = OrganizationsDisplayName.from_json(json)
# print the JSON string representation of the object
print(OrganizationsDisplayName.to_json())

# convert the object into a dict
organizations_display_name_dict = organizations_display_name_instance.to_dict()
# create an instance of OrganizationsDisplayName from a dict
organizations_display_name_from_dict = OrganizationsDisplayName.from_dict(organizations_display_name_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


