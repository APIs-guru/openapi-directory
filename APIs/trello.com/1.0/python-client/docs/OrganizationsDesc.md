# OrganizationsDesc


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | a string with a length from 0 to 16384 | [optional] 

## Example

```python
from openapi_client.models.organizations_desc import OrganizationsDesc

# TODO update the JSON string below
json = "{}"
# create an instance of OrganizationsDesc from a JSON string
organizations_desc_instance = OrganizationsDesc.from_json(json)
# print the JSON string representation of the object
print(OrganizationsDesc.to_json())

# convert the object into a dict
organizations_desc_dict = organizations_desc_instance.to_dict()
# create an instance of OrganizationsDesc from a dict
organizations_desc_from_dict = OrganizationsDesc.from_dict(organizations_desc_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


