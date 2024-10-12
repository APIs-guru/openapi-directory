# SearchSpelling

Spell correction information for a query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**corrected_query** | **str** | The corrected query. | [optional] 
**html_corrected_query** | **str** | The corrected query, formatted in HTML. | [optional] 

## Example

```python
from openapi_client.models.search_spelling import SearchSpelling

# TODO update the JSON string below
json = "{}"
# create an instance of SearchSpelling from a JSON string
search_spelling_instance = SearchSpelling.from_json(json)
# print the JSON string representation of the object
print(SearchSpelling.to_json())

# convert the object into a dict
search_spelling_dict = search_spelling_instance.to_dict()
# create an instance of SearchSpelling from a dict
search_spelling_from_dict = SearchSpelling.from_dict(search_spelling_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


