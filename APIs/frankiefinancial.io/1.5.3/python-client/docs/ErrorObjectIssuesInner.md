# ErrorObjectIssuesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issue** | **str** | Description of the problem | [optional] 
**issue_location** | **str** | Will describe the field or data location of the issue | 

## Example

```python
from openapi_client.models.error_object_issues_inner import ErrorObjectIssuesInner

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorObjectIssuesInner from a JSON string
error_object_issues_inner_instance = ErrorObjectIssuesInner.from_json(json)
# print the JSON string representation of the object
print(ErrorObjectIssuesInner.to_json())

# convert the object into a dict
error_object_issues_inner_dict = error_object_issues_inner_instance.to_dict()
# create an instance of ErrorObjectIssuesInner from a dict
error_object_issues_inner_from_dict = ErrorObjectIssuesInner.from_dict(error_object_issues_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


