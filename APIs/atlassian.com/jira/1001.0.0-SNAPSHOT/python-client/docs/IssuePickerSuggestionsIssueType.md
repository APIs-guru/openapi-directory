# IssuePickerSuggestionsIssueType

A type of issue suggested for use in auto-completion.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the type of issues suggested for use in auto-completion. | [optional] [readonly] 
**issues** | [**List[SuggestedIssue]**](SuggestedIssue.md) | A list of issues suggested for use in auto-completion. | [optional] [readonly] 
**label** | **str** | The label of the type of issues suggested for use in auto-completion. | [optional] [readonly] 
**msg** | **str** | If no issue suggestions are found, returns a message indicating no suggestions were found, | [optional] [readonly] 
**sub** | **str** | If issue suggestions are found, returns a message indicating the number of issues suggestions found and returned. | [optional] [readonly] 

## Example

```python
from openapi_client.models.issue_picker_suggestions_issue_type import IssuePickerSuggestionsIssueType

# TODO update the JSON string below
json = "{}"
# create an instance of IssuePickerSuggestionsIssueType from a JSON string
issue_picker_suggestions_issue_type_instance = IssuePickerSuggestionsIssueType.from_json(json)
# print the JSON string representation of the object
print(IssuePickerSuggestionsIssueType.to_json())

# convert the object into a dict
issue_picker_suggestions_issue_type_dict = issue_picker_suggestions_issue_type_instance.to_dict()
# create an instance of IssuePickerSuggestionsIssueType from a dict
issue_picker_suggestions_issue_type_from_dict = IssuePickerSuggestionsIssueType.from_dict(issue_picker_suggestions_issue_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


