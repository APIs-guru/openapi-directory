# IssueTypeIdsToRemove

The list of issue type IDs to be removed from the field configuration scheme.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issue_type_ids** | **List[str]** | The list of issue type IDs. Must contain unique values not longer than 255 characters and not be empty. Maximum of 100 IDs. | 

## Example

```python
from openapi_client.models.issue_type_ids_to_remove import IssueTypeIdsToRemove

# TODO update the JSON string below
json = "{}"
# create an instance of IssueTypeIdsToRemove from a JSON string
issue_type_ids_to_remove_instance = IssueTypeIdsToRemove.from_json(json)
# print the JSON string representation of the object
print(IssueTypeIdsToRemove.to_json())

# convert the object into a dict
issue_type_ids_to_remove_dict = issue_type_ids_to_remove_instance.to_dict()
# create an instance of IssueTypeIdsToRemove from a dict
issue_type_ids_to_remove_from_dict = IssueTypeIdsToRemove.from_dict(issue_type_ids_to_remove_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


