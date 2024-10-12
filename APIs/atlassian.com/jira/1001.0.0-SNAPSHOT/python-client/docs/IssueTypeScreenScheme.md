# IssueTypeScreenScheme

Details of an issue type screen scheme.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the issue type screen scheme. | [optional] 
**id** | **str** | The ID of the issue type screen scheme. | 
**name** | **str** | The name of the issue type screen scheme. | 

## Example

```python
from openapi_client.models.issue_type_screen_scheme import IssueTypeScreenScheme

# TODO update the JSON string below
json = "{}"
# create an instance of IssueTypeScreenScheme from a JSON string
issue_type_screen_scheme_instance = IssueTypeScreenScheme.from_json(json)
# print the JSON string representation of the object
print(IssueTypeScreenScheme.to_json())

# convert the object into a dict
issue_type_screen_scheme_dict = issue_type_screen_scheme_instance.to_dict()
# create an instance of IssueTypeScreenScheme from a dict
issue_type_screen_scheme_from_dict = IssueTypeScreenScheme.from_dict(issue_type_screen_scheme_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


