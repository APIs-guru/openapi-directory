# IssueTypeScheme

Details of an issue type scheme.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_issue_type_id** | **str** | The ID of the default issue type of the issue type scheme. | [optional] 
**description** | **str** | The description of the issue type scheme. | [optional] 
**id** | **str** | The ID of the issue type scheme. | 
**is_default** | **bool** | Whether the issue type scheme is the default. | [optional] 
**name** | **str** | The name of the issue type scheme. | 

## Example

```python
from openapi_client.models.issue_type_scheme import IssueTypeScheme

# TODO update the JSON string below
json = "{}"
# create an instance of IssueTypeScheme from a JSON string
issue_type_scheme_instance = IssueTypeScheme.from_json(json)
# print the JSON string representation of the object
print(IssueTypeScheme.to_json())

# convert the object into a dict
issue_type_scheme_dict = issue_type_scheme_instance.to_dict()
# create an instance of IssueTypeScheme from a dict
issue_type_scheme_from_dict = IssueTypeScheme.from_dict(issue_type_scheme_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


