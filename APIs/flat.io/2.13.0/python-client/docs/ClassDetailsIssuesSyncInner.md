# ClassDetailsIssuesSyncInner

A sync issue

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | The email address of the user concerned by this sync issue | [optional] 
**id** | **str** | The account user identifier | [optional] 
**reason** | **str** | The reason why the account cannot be synced | [optional] 

## Example

```python
from openapi_client.models.class_details_issues_sync_inner import ClassDetailsIssuesSyncInner

# TODO update the JSON string below
json = "{}"
# create an instance of ClassDetailsIssuesSyncInner from a JSON string
class_details_issues_sync_inner_instance = ClassDetailsIssuesSyncInner.from_json(json)
# print the JSON string representation of the object
print(ClassDetailsIssuesSyncInner.to_json())

# convert the object into a dict
class_details_issues_sync_inner_dict = class_details_issues_sync_inner_instance.to_dict()
# create an instance of ClassDetailsIssuesSyncInner from a dict
class_details_issues_sync_inner_from_dict = ClassDetailsIssuesSyncInner.from_dict(class_details_issues_sync_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


