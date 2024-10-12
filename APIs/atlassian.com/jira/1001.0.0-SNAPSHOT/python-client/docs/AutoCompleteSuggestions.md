# AutoCompleteSuggestions

The results from a JQL query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**results** | [**List[AutoCompleteSuggestion]**](AutoCompleteSuggestion.md) | The list of suggested item. | [optional] 

## Example

```python
from openapi_client.models.auto_complete_suggestions import AutoCompleteSuggestions

# TODO update the JSON string below
json = "{}"
# create an instance of AutoCompleteSuggestions from a JSON string
auto_complete_suggestions_instance = AutoCompleteSuggestions.from_json(json)
# print the JSON string representation of the object
print(AutoCompleteSuggestions.to_json())

# convert the object into a dict
auto_complete_suggestions_dict = auto_complete_suggestions_instance.to_dict()
# create an instance of AutoCompleteSuggestions from a dict
auto_complete_suggestions_from_dict = AutoCompleteSuggestions.from_dict(auto_complete_suggestions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


