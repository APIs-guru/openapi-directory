# EmergingIssueListResult

The list of emerging issues.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link used to get the next page of emerging issues. | [optional] 
**value** | [**List[EmergingIssuesGetResult]**](EmergingIssuesGetResult.md) | The list of emerging issues. | [optional] 

## Example

```python
from openapi_client.models.emerging_issue_list_result import EmergingIssueListResult

# TODO update the JSON string below
json = "{}"
# create an instance of EmergingIssueListResult from a JSON string
emerging_issue_list_result_instance = EmergingIssueListResult.from_json(json)
# print the JSON string representation of the object
print(EmergingIssueListResult.to_json())

# convert the object into a dict
emerging_issue_list_result_dict = emerging_issue_list_result_instance.to_dict()
# create an instance of EmergingIssueListResult from a dict
emerging_issue_list_result_from_dict = EmergingIssueListResult.from_dict(emerging_issue_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


