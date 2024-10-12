# SuggestedIssue

An issue suggested for use in the issue picker auto-completion.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | The ID of the issue. | [optional] [readonly] 
**img** | **str** | The URL of the issue type&#39;s avatar. | [optional] [readonly] 
**key** | **str** | The key of the issue. | [optional] [readonly] 
**key_html** | **str** | The key of the issue in HTML format. | [optional] [readonly] 
**summary** | **str** | The phrase containing the query string in HTML format, with the string highlighted with HTML bold tags. | [optional] [readonly] 
**summary_text** | **str** | The phrase containing the query string, as plain text. | [optional] [readonly] 

## Example

```python
from openapi_client.models.suggested_issue import SuggestedIssue

# TODO update the JSON string below
json = "{}"
# create an instance of SuggestedIssue from a JSON string
suggested_issue_instance = SuggestedIssue.from_json(json)
# print the JSON string representation of the object
print(SuggestedIssue.to_json())

# convert the object into a dict
suggested_issue_dict = suggested_issue_instance.to_dict()
# create an instance of SuggestedIssue from a dict
suggested_issue_from_dict = SuggestedIssue.from_dict(suggested_issue_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


