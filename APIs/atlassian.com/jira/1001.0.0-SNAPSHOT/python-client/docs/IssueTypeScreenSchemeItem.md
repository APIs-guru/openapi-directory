# IssueTypeScreenSchemeItem

The screen scheme for an issue type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issue_type_id** | **str** | The ID of the issue type or *default*. Only issue types used in classic projects are accepted. When creating an issue screen scheme, an entry for *default* must be provided and defines the mapping for all issue types without a screen scheme. Otherwise, a *default* entry can&#39;t be provided. | 
**issue_type_screen_scheme_id** | **str** | The ID of the issue type screen scheme. | 
**screen_scheme_id** | **str** | The ID of the screen scheme. | 

## Example

```python
from openapi_client.models.issue_type_screen_scheme_item import IssueTypeScreenSchemeItem

# TODO update the JSON string below
json = "{}"
# create an instance of IssueTypeScreenSchemeItem from a JSON string
issue_type_screen_scheme_item_instance = IssueTypeScreenSchemeItem.from_json(json)
# print the JSON string representation of the object
print(IssueTypeScreenSchemeItem.to_json())

# convert the object into a dict
issue_type_screen_scheme_item_dict = issue_type_screen_scheme_item_instance.to_dict()
# create an instance of IssueTypeScreenSchemeItem from a dict
issue_type_screen_scheme_item_from_dict = IssueTypeScreenSchemeItem.from_dict(issue_type_screen_scheme_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


