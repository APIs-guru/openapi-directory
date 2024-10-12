# TokenResourceRelationshipsOrganization


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**TokenResourceRelationshipsOrganizationData**](TokenResourceRelationshipsOrganizationData.md) |  | 
**links** | [**TokenResourceRelationshipsOrganizationLinks**](TokenResourceRelationshipsOrganizationLinks.md) |  | 

## Example

```python
from openapi_client.models.token_resource_relationships_organization import TokenResourceRelationshipsOrganization

# TODO update the JSON string below
json = "{}"
# create an instance of TokenResourceRelationshipsOrganization from a JSON string
token_resource_relationships_organization_instance = TokenResourceRelationshipsOrganization.from_json(json)
# print the JSON string representation of the object
print(TokenResourceRelationshipsOrganization.to_json())

# convert the object into a dict
token_resource_relationships_organization_dict = token_resource_relationships_organization_instance.to_dict()
# create an instance of TokenResourceRelationshipsOrganization from a dict
token_resource_relationships_organization_from_dict = TokenResourceRelationshipsOrganization.from_dict(token_resource_relationships_organization_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


