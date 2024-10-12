# IssueTypeScreenSchemeDetails

The details of an issue type screen scheme.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the issue type screen scheme. The maximum length is 255 characters. | [optional] 
**issue_type_mappings** | [**List[IssueTypeScreenSchemeMapping]**](IssueTypeScreenSchemeMapping.md) | The IDs of the screen schemes for the issue type IDs and *default*. A *default* entry is required to create an issue type screen scheme, it defines the mapping for all issue types without a screen scheme. | 
**name** | **str** | The name of the issue type screen scheme. The name must be unique. The maximum length is 255 characters. | 

## Example

```python
from openapi_client.models.issue_type_screen_scheme_details import IssueTypeScreenSchemeDetails

# TODO update the JSON string below
json = "{}"
# create an instance of IssueTypeScreenSchemeDetails from a JSON string
issue_type_screen_scheme_details_instance = IssueTypeScreenSchemeDetails.from_json(json)
# print the JSON string representation of the object
print(IssueTypeScreenSchemeDetails.to_json())

# convert the object into a dict
issue_type_screen_scheme_details_dict = issue_type_screen_scheme_details_instance.to_dict()
# create an instance of IssueTypeScreenSchemeDetails from a dict
issue_type_screen_scheme_details_from_dict = IssueTypeScreenSchemeDetails.from_dict(issue_type_screen_scheme_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


