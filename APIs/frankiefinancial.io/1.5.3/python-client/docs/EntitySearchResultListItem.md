# EntitySearchResultListItem

Contains the individual search results for an entity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence** | [**SearchResultConfidenceObject**](SearchResultConfidenceObject.md) |  | [optional] 
**document_match_types** | **List[str]** | Array of descriptons of document field matches used to score this search. This is a summary for all the documents for the matched entity.  | [optional] 
**document_name_mismatches** | **List[str]** | If this entity has any level of name match then this is an array of document IDs for the entity where the document has an entity name and it doesn&#39;t match any entity names being sought.  | [optional] 
**entity** | [**EntityObject**](EntityObject.md) |  | [optional] 
**entity_match_types** | **List[str]** | Array of descriptons of entity field matches used to score this search.  | [optional] 

## Example

```python
from openapi_client.models.entity_search_result_list_item import EntitySearchResultListItem

# TODO update the JSON string below
json = "{}"
# create an instance of EntitySearchResultListItem from a JSON string
entity_search_result_list_item_instance = EntitySearchResultListItem.from_json(json)
# print the JSON string representation of the object
print(EntitySearchResultListItem.to_json())

# convert the object into a dict
entity_search_result_list_item_dict = entity_search_result_list_item_instance.to_dict()
# create an instance of EntitySearchResultListItem from a dict
entity_search_result_list_item_from_dict = EntitySearchResultListItem.from_dict(entity_search_result_list_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


