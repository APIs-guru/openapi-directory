# CreatedIssue

Details about a created issue or subtask.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the created issue or subtask. | [optional] [readonly] 
**key** | **str** | The key of the created issue or subtask. | [optional] [readonly] 
**var_self** | **str** | The URL of the created issue or subtask. | [optional] [readonly] 
**transition** | [**NestedResponse**](NestedResponse.md) | The response code and messages related to any requested transition. | [optional] [readonly] 
**watchers** | [**NestedResponse**](NestedResponse.md) | The response code and messages related to any requested watchers. | [optional] [readonly] 

## Example

```python
from openapi_client.models.created_issue import CreatedIssue

# TODO update the JSON string below
json = "{}"
# create an instance of CreatedIssue from a JSON string
created_issue_instance = CreatedIssue.from_json(json)
# print the JSON string representation of the object
print(CreatedIssue.to_json())

# convert the object into a dict
created_issue_dict = created_issue_instance.to_dict()
# create an instance of CreatedIssue from a dict
created_issue_from_dict = CreatedIssue.from_dict(created_issue_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


