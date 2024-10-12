# SuggestRelationshipLinksResponse

The response of suggest relationship links operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**interaction_name** | **str** | The interaction name. | [optional] [readonly] 
**suggested_relationships** | [**List[RelationshipsLookup]**](RelationshipsLookup.md) | Suggested relationships for the type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.suggest_relationship_links_response import SuggestRelationshipLinksResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SuggestRelationshipLinksResponse from a JSON string
suggest_relationship_links_response_instance = SuggestRelationshipLinksResponse.from_json(json)
# print the JSON string representation of the object
print(SuggestRelationshipLinksResponse.to_json())

# convert the object into a dict
suggest_relationship_links_response_dict = suggest_relationship_links_response_instance.to_dict()
# create an instance of SuggestRelationshipLinksResponse from a dict
suggest_relationship_links_response_from_dict = SuggestRelationshipLinksResponse.from_dict(suggest_relationship_links_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


