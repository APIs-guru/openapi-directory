# CategorySuggestionResponse

This type contains an array of suggested category tree nodes that are considered by eBay to most closely correspond to the keywords provided in a query string, from a specified category tree.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category_suggestions** | [**List[CategorySuggestion]**](CategorySuggestion.md) | Contains details about one or more suggested categories that correspond to the provided keywords. The array of suggested categories is sorted in order of eBay&#39;s confidence of the relevance of each category (the first category is the most relevant). Important: This call is not supported in the Sandbox environment. It will return a response payload in which the categoryName fields contain random or boilerplate text regardless of the query submitted. | [optional] 
**category_tree_id** | **str** | The unique identifier of the eBay category tree from which suggestions are returned. | [optional] 
**category_tree_version** | **str** | The version of the category tree identified by categoryTreeId. It&#39;s a good idea to cache this value for comparison so you can determine if this category tree has been modified in subsequent calls. | [optional] 

## Example

```python
from openapi_client.models.category_suggestion_response import CategorySuggestionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CategorySuggestionResponse from a JSON string
category_suggestion_response_instance = CategorySuggestionResponse.from_json(json)
# print the JSON string representation of the object
print(CategorySuggestionResponse.to_json())

# convert the object into a dict
category_suggestion_response_dict = category_suggestion_response_instance.to_dict()
# create an instance of CategorySuggestionResponse from a dict
category_suggestion_response_from_dict = CategorySuggestionResponse.from_dict(category_suggestion_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


