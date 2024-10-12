# OrganizationsName


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | A string with a length of at least 3.  Only lowercase letters, underscores, and numbers are allowed.  Must be unique. | [optional] 

## Example

```python
from openapi_client.models.organizations_name import OrganizationsName

# TODO update the JSON string below
json = "{}"
# create an instance of OrganizationsName from a JSON string
organizations_name_instance = OrganizationsName.from_json(json)
# print the JSON string representation of the object
print(OrganizationsName.to_json())

# convert the object into a dict
organizations_name_dict = organizations_name_instance.to_dict()
# create an instance of OrganizationsName from a dict
organizations_name_from_dict = OrganizationsName.from_dict(organizations_name_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


