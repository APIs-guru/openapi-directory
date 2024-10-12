# IssueTypeInfo

Details of an issue type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avatar_id** | **int** | The avatar of the issue type. | [optional] [readonly] 
**id** | **int** | The ID of the issue type. | [optional] [readonly] 
**name** | **str** | The name of the issue type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.issue_type_info import IssueTypeInfo

# TODO update the JSON string below
json = "{}"
# create an instance of IssueTypeInfo from a JSON string
issue_type_info_instance = IssueTypeInfo.from_json(json)
# print the JSON string representation of the object
print(IssueTypeInfo.to_json())

# convert the object into a dict
issue_type_info_dict = issue_type_info_instance.to_dict()
# create an instance of IssueTypeInfo from a dict
issue_type_info_from_dict = IssueTypeInfo.from_dict(issue_type_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


