# TokenResourceRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**groups** | [**TokenResourceRelationshipsGroups**](TokenResourceRelationshipsGroups.md) |  | [optional] 
**organization** | [**TokenResourceRelationshipsOrganization**](TokenResourceRelationshipsOrganization.md) |  | [optional] 

## Example

```python
from openapi_client.models.token_resource_relationships import TokenResourceRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of TokenResourceRelationships from a JSON string
token_resource_relationships_instance = TokenResourceRelationships.from_json(json)
# print the JSON string representation of the object
print(TokenResourceRelationships.to_json())

# convert the object into a dict
token_resource_relationships_dict = token_resource_relationships_instance.to_dict()
# create an instance of TokenResourceRelationships from a dict
token_resource_relationships_from_dict = TokenResourceRelationships.from_dict(token_resource_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


