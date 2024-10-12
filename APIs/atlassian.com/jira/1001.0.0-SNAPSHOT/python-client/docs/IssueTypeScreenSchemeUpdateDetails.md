# IssueTypeScreenSchemeUpdateDetails

Details of an issue type screen scheme.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the issue type screen scheme. The maximum length is 255 characters. | [optional] 
**name** | **str** | The name of the issue type screen scheme. The name must be unique. The maximum length is 255 characters. | [optional] 

## Example

```python
from openapi_client.models.issue_type_screen_scheme_update_details import IssueTypeScreenSchemeUpdateDetails

# TODO update the JSON string below
json = "{}"
# create an instance of IssueTypeScreenSchemeUpdateDetails from a JSON string
issue_type_screen_scheme_update_details_instance = IssueTypeScreenSchemeUpdateDetails.from_json(json)
# print the JSON string representation of the object
print(IssueTypeScreenSchemeUpdateDetails.to_json())

# convert the object into a dict
issue_type_screen_scheme_update_details_dict = issue_type_screen_scheme_update_details_instance.to_dict()
# create an instance of IssueTypeScreenSchemeUpdateDetails from a dict
issue_type_screen_scheme_update_details_from_dict = IssueTypeScreenSchemeUpdateDetails.from_dict(issue_type_screen_scheme_update_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


