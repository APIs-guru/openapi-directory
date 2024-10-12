# IssueTypeScreenSchemeMapping

The IDs of the screen schemes for the issue type IDs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issue_type_id** | **str** | The ID of the issue type or *default*. Only issue types used in classic projects are accepted. An entry for *default* must be provided and defines the mapping for all issue types without a screen scheme. | 
**screen_scheme_id** | **str** | The ID of the screen scheme. Only screen schemes used in classic projects are accepted. | 

## Example

```python
from openapi_client.models.issue_type_screen_scheme_mapping import IssueTypeScreenSchemeMapping

# TODO update the JSON string below
json = "{}"
# create an instance of IssueTypeScreenSchemeMapping from a JSON string
issue_type_screen_scheme_mapping_instance = IssueTypeScreenSchemeMapping.from_json(json)
# print the JSON string representation of the object
print(IssueTypeScreenSchemeMapping.to_json())

# convert the object into a dict
issue_type_screen_scheme_mapping_dict = issue_type_screen_scheme_mapping_instance.to_dict()
# create an instance of IssueTypeScreenSchemeMapping from a dict
issue_type_screen_scheme_mapping_from_dict = IssueTypeScreenSchemeMapping.from_dict(issue_type_screen_scheme_mapping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


