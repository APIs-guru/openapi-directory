# IssueTypeToContextMapping

Mapping of an issue type to a context.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context_id** | **str** | The ID of the context. | 
**is_any_issue_type** | **bool** | Whether the context is mapped to any issue type. | [optional] 
**issue_type_id** | **str** | The ID of the issue type. | [optional] 

## Example

```python
from openapi_client.models.issue_type_to_context_mapping import IssueTypeToContextMapping

# TODO update the JSON string below
json = "{}"
# create an instance of IssueTypeToContextMapping from a JSON string
issue_type_to_context_mapping_instance = IssueTypeToContextMapping.from_json(json)
# print the JSON string representation of the object
print(IssueTypeToContextMapping.to_json())

# convert the object into a dict
issue_type_to_context_mapping_dict = issue_type_to_context_mapping_instance.to_dict()
# create an instance of IssueTypeToContextMapping from a dict
issue_type_to_context_mapping_from_dict = IssueTypeToContextMapping.from_dict(issue_type_to_context_mapping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


