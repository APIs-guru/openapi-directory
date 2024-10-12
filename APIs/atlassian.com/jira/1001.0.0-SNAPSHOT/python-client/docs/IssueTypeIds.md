# IssueTypeIds

The list of issue type IDs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issue_type_ids** | **List[str]** | The list of issue type IDs. | 

## Example

```python
from openapi_client.models.issue_type_ids import IssueTypeIds

# TODO update the JSON string below
json = "{}"
# create an instance of IssueTypeIds from a JSON string
issue_type_ids_instance = IssueTypeIds.from_json(json)
# print the JSON string representation of the object
print(IssueTypeIds.to_json())

# convert the object into a dict
issue_type_ids_dict = issue_type_ids_instance.to_dict()
# create an instance of IssueTypeIds from a dict
issue_type_ids_from_dict = IssueTypeIds.from_dict(issue_type_ids_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


