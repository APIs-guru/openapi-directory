# TokenResourceRelationshipsGroups


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[TokenResourceRelationshipsGroupsDataInner]**](TokenResourceRelationshipsGroupsDataInner.md) |  | 
**links** | [**TokenResourceRelationshipsGroupsLinks**](TokenResourceRelationshipsGroupsLinks.md) |  | 

## Example

```python
from openapi_client.models.token_resource_relationships_groups import TokenResourceRelationshipsGroups

# TODO update the JSON string below
json = "{}"
# create an instance of TokenResourceRelationshipsGroups from a JSON string
token_resource_relationships_groups_instance = TokenResourceRelationshipsGroups.from_json(json)
# print the JSON string representation of the object
print(TokenResourceRelationshipsGroups.to_json())

# convert the object into a dict
token_resource_relationships_groups_dict = token_resource_relationships_groups_instance.to_dict()
# create an instance of TokenResourceRelationshipsGroups from a dict
token_resource_relationships_groups_from_dict = TokenResourceRelationshipsGroups.from_dict(token_resource_relationships_groups_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


