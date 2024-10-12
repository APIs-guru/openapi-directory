# IssueListItems

A key/value pair of strings that describe the location of the issue (key) and an issue description (value). Also inclused is a severity 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issue_description** | **str** | Human readable description of the issue  | [optional] 
**issue_location** | **str** | Where the issue occured. It will describe a location in the response structure  | [optional] 
**issue_severity** | **str** | The impact of the issue on the process.   Is it just informational, such as a trivial different in a name match? Is it a warning to highlight something that is important, but did not prevent the process from completing? Is it a critical issue that prevented the check from completing successfully? Is it a stop condition that prevented the checks from being run at all?  | [optional] 

## Example

```python
from openapi_client.models.issue_list_items import IssueListItems

# TODO update the JSON string below
json = "{}"
# create an instance of IssueListItems from a JSON string
issue_list_items_instance = IssueListItems.from_json(json)
# print the JSON string representation of the object
print(IssueListItems.to_json())

# convert the object into a dict
issue_list_items_dict = issue_list_items_instance.to_dict()
# create an instance of IssueListItems from a dict
issue_list_items_from_dict = IssueListItems.from_dict(issue_list_items_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


