# IssueTypeUpdateBean


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avatar_id** | **int** | The ID of an issue type avatar. | [optional] 
**description** | **str** | The description of the issue type. | [optional] 
**name** | **str** | The unique name for the issue type. The maximum length is 60 characters. | [optional] 

## Example

```python
from openapi_client.models.issue_type_update_bean import IssueTypeUpdateBean

# TODO update the JSON string below
json = "{}"
# create an instance of IssueTypeUpdateBean from a JSON string
issue_type_update_bean_instance = IssueTypeUpdateBean.from_json(json)
# print the JSON string representation of the object
print(IssueTypeUpdateBean.to_json())

# convert the object into a dict
issue_type_update_bean_dict = issue_type_update_bean_instance.to_dict()
# create an instance of IssueTypeUpdateBean from a dict
issue_type_update_bean_from_dict = IssueTypeUpdateBean.from_dict(issue_type_update_bean_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


