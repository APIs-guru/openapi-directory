# RichResultsIssue

Severity and status of a single issue affecting a single rich result instance on a page.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issue_message** | **str** | Rich Results issue type. | [optional] 
**severity** | **str** | Severity of this issue: WARNING, or ERROR. Items with an issue of status ERROR cannot appear with rich result features in Google Search results. | [optional] 

## Example

```python
from openapi_client.models.rich_results_issue import RichResultsIssue

# TODO update the JSON string below
json = "{}"
# create an instance of RichResultsIssue from a JSON string
rich_results_issue_instance = RichResultsIssue.from_json(json)
# print the JSON string representation of the object
print(RichResultsIssue.to_json())

# convert the object into a dict
rich_results_issue_dict = rich_results_issue_instance.to_dict()
# create an instance of RichResultsIssue from a dict
rich_results_issue_from_dict = RichResultsIssue.from_dict(rich_results_issue_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


