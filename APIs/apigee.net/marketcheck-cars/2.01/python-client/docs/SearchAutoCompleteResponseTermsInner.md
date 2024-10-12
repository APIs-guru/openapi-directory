# SearchAutoCompleteResponseTermsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | The number of listings with item as value for given field | [optional] 
**item** | **str** | The actual term that either has prefix or contains given input | [optional] 

## Example

```python
from openapi_client.models.search_auto_complete_response_terms_inner import SearchAutoCompleteResponseTermsInner

# TODO update the JSON string below
json = "{}"
# create an instance of SearchAutoCompleteResponseTermsInner from a JSON string
search_auto_complete_response_terms_inner_instance = SearchAutoCompleteResponseTermsInner.from_json(json)
# print the JSON string representation of the object
print(SearchAutoCompleteResponseTermsInner.to_json())

# convert the object into a dict
search_auto_complete_response_terms_inner_dict = search_auto_complete_response_terms_inner_instance.to_dict()
# create an instance of SearchAutoCompleteResponseTermsInner from a dict
search_auto_complete_response_terms_inner_from_dict = SearchAutoCompleteResponseTermsInner.from_dict(search_auto_complete_response_terms_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


