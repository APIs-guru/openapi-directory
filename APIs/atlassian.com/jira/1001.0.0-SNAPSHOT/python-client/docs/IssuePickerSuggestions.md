# IssuePickerSuggestions

A list of issues suggested for use in auto-completion.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sections** | [**List[IssuePickerSuggestionsIssueType]**](IssuePickerSuggestionsIssueType.md) | A list of issues for an issue type suggested for use in auto-completion. | [optional] [readonly] 

## Example

```python
from openapi_client.models.issue_picker_suggestions import IssuePickerSuggestions

# TODO update the JSON string below
json = "{}"
# create an instance of IssuePickerSuggestions from a JSON string
issue_picker_suggestions_instance = IssuePickerSuggestions.from_json(json)
# print the JSON string representation of the object
print(IssuePickerSuggestions.to_json())

# convert the object into a dict
issue_picker_suggestions_dict = issue_picker_suggestions_instance.to_dict()
# create an instance of IssuePickerSuggestions from a dict
issue_picker_suggestions_from_dict = IssuePickerSuggestions.from_dict(issue_picker_suggestions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


