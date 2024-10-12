# IssueTypeSchemeMapping

Issue type scheme item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issue_type_id** | **str** | The ID of the issue type. | 
**issue_type_scheme_id** | **str** | The ID of the issue type scheme. | 

## Example

```python
from openapi_client.models.issue_type_scheme_mapping import IssueTypeSchemeMapping

# TODO update the JSON string below
json = "{}"
# create an instance of IssueTypeSchemeMapping from a JSON string
issue_type_scheme_mapping_instance = IssueTypeSchemeMapping.from_json(json)
# print the JSON string representation of the object
print(IssueTypeSchemeMapping.to_json())

# convert the object into a dict
issue_type_scheme_mapping_dict = issue_type_scheme_mapping_instance.to_dict()
# create an instance of IssueTypeSchemeMapping from a dict
issue_type_scheme_mapping_from_dict = IssueTypeSchemeMapping.from_dict(issue_type_scheme_mapping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


