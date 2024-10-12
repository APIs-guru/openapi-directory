# IssueTypeSchemeDetails

Details of an issue type scheme and its associated issue types.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_issue_type_id** | **str** | The ID of the default issue type of the issue type scheme. This ID must be included in &#x60;issueTypeIds&#x60;. | [optional] 
**description** | **str** | The description of the issue type scheme. The maximum length is 4000 characters. | [optional] 
**issue_type_ids** | **List[str]** | The list of issue types IDs of the issue type scheme. At least one standard issue type ID is required. | 
**name** | **str** | The name of the issue type scheme. The name must be unique. The maximum length is 255 characters. | 

## Example

```python
from openapi_client.models.issue_type_scheme_details import IssueTypeSchemeDetails

# TODO update the JSON string below
json = "{}"
# create an instance of IssueTypeSchemeDetails from a JSON string
issue_type_scheme_details_instance = IssueTypeSchemeDetails.from_json(json)
# print the JSON string representation of the object
print(IssueTypeSchemeDetails.to_json())

# convert the object into a dict
issue_type_scheme_details_dict = issue_type_scheme_details_instance.to_dict()
# create an instance of IssueTypeSchemeDetails from a dict
issue_type_scheme_details_from_dict = IssueTypeSchemeDetails.from_dict(issue_type_scheme_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


