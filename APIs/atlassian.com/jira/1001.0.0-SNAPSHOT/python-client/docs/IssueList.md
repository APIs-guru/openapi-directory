# IssueList

A list of issue IDs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issue_ids** | **List[str]** | The list of issue IDs. | 

## Example

```python
from openapi_client.models.issue_list import IssueList

# TODO update the JSON string below
json = "{}"
# create an instance of IssueList from a JSON string
issue_list_instance = IssueList.from_json(json)
# print the JSON string representation of the object
print(IssueList.to_json())

# convert the object into a dict
issue_list_dict = issue_list_instance.to_dict()
# create an instance of IssueList from a dict
issue_list_from_dict = IssueList.from_dict(issue_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


