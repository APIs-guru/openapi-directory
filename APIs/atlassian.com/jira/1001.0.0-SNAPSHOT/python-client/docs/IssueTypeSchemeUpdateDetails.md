# IssueTypeSchemeUpdateDetails

Details of the name, description, and default issue type for an issue type scheme.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_issue_type_id** | **str** | The ID of the default issue type of the issue type scheme. | [optional] 
**description** | **str** | The description of the issue type scheme. The maximum length is 4000 characters. | [optional] 
**name** | **str** | The name of the issue type scheme. The name must be unique. The maximum length is 255 characters. | [optional] 

## Example

```python
from openapi_client.models.issue_type_scheme_update_details import IssueTypeSchemeUpdateDetails

# TODO update the JSON string below
json = "{}"
# create an instance of IssueTypeSchemeUpdateDetails from a JSON string
issue_type_scheme_update_details_instance = IssueTypeSchemeUpdateDetails.from_json(json)
# print the JSON string representation of the object
print(IssueTypeSchemeUpdateDetails.to_json())

# convert the object into a dict
issue_type_scheme_update_details_dict = issue_type_scheme_update_details_instance.to_dict()
# create an instance of IssueTypeSchemeUpdateDetails from a dict
issue_type_scheme_update_details_from_dict = IssueTypeSchemeUpdateDetails.from_dict(issue_type_scheme_update_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


