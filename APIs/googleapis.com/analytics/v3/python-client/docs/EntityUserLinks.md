# EntityUserLinks

An entity user link collection provides a list of Analytics ACL links Each resource in this collection corresponds to a single link.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[EntityUserLink]**](EntityUserLink.md) | A list of entity user links. | [optional] 
**items_per_page** | **int** | The maximum number of entries the response can contain, regardless of the actual number of entries returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. | [optional] 
**kind** | **str** | Collection type. | [optional] [default to 'analytics#entityUserLinks']
**next_link** | **str** | Next link for this account collection. | [optional] 
**previous_link** | **str** | Previous link for this account collection. | [optional] 
**start_index** | **int** | The starting index of the entries, which is 1 by default or otherwise specified by the start-index query parameter. | [optional] 
**total_results** | **int** | The total number of results for the query, regardless of the number of results in the response. | [optional] 

## Example

```python
from openapi_client.models.entity_user_links import EntityUserLinks

# TODO update the JSON string below
json = "{}"
# create an instance of EntityUserLinks from a JSON string
entity_user_links_instance = EntityUserLinks.from_json(json)
# print the JSON string representation of the object
print(EntityUserLinks.to_json())

# convert the object into a dict
entity_user_links_dict = entity_user_links_instance.to_dict()
# create an instance of EntityUserLinks from a dict
entity_user_links_from_dict = EntityUserLinks.from_dict(entity_user_links_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


