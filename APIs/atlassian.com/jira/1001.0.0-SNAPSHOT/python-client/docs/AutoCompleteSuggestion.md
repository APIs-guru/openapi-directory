# AutoCompleteSuggestion

A field auto-complete suggestion.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The display name of a suggested item. If &#x60;fieldValue&#x60; or &#x60;predicateValue&#x60; are provided, the matching text is highlighted with the HTML bold tag. | [optional] 
**value** | **str** | The value of a suggested item. | [optional] 

## Example

```python
from openapi_client.models.auto_complete_suggestion import AutoCompleteSuggestion

# TODO update the JSON string below
json = "{}"
# create an instance of AutoCompleteSuggestion from a JSON string
auto_complete_suggestion_instance = AutoCompleteSuggestion.from_json(json)
# print the JSON string representation of the object
print(AutoCompleteSuggestion.to_json())

# convert the object into a dict
auto_complete_suggestion_dict = auto_complete_suggestion_instance.to_dict()
# create an instance of AutoCompleteSuggestion from a dict
auto_complete_suggestion_from_dict = AutoCompleteSuggestion.from_dict(auto_complete_suggestion_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


