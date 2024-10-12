# EntityAdWordsLinks

An entity Google Ads link collection provides a list of GA-Google Ads links Each resource in this collection corresponds to a single link.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[EntityAdWordsLink]**](EntityAdWordsLink.md) | A list of entity Google Ads links. | [optional] 
**items_per_page** | **int** | The maximum number of entries the response can contain, regardless of the actual number of entries returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. | [optional] 
**kind** | **str** | Collection type. | [optional] [default to 'analytics#entityAdWordsLinks']
**next_link** | **str** | Next link for this Google Ads link collection. | [optional] 
**previous_link** | **str** | Previous link for this Google Ads link collection. | [optional] 
**start_index** | **int** | The starting index of the entries, which is 1 by default or otherwise specified by the start-index query parameter. | [optional] 
**total_results** | **int** | The total number of results for the query, regardless of the number of results in the response. | [optional] 

## Example

```python
from openapi_client.models.entity_ad_words_links import EntityAdWordsLinks

# TODO update the JSON string below
json = "{}"
# create an instance of EntityAdWordsLinks from a JSON string
entity_ad_words_links_instance = EntityAdWordsLinks.from_json(json)
# print the JSON string representation of the object
print(EntityAdWordsLinks.to_json())

# convert the object into a dict
entity_ad_words_links_dict = entity_ad_words_links_instance.to_dict()
# create an instance of EntityAdWordsLinks from a dict
entity_ad_words_links_from_dict = EntityAdWordsLinks.from_dict(entity_ad_words_links_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


