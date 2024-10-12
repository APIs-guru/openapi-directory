# IssueTypeIssueCreateMetadata

Details of the issue creation metadata for an issue type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avatar_id** | **int** | The ID of the issue type&#39;s avatar. | [optional] [readonly] 
**description** | **str** | The description of the issue type. | [optional] [readonly] 
**entity_id** | **str** | Unique ID for next-gen projects. | [optional] [readonly] 
**expand** | **str** | Expand options that include additional issue type metadata details in the response. | [optional] [readonly] 
**fields** | [**Dict[str, FieldMetadata]**](FieldMetadata.md) | List of the fields available when creating an issue for the issue type. | [optional] [readonly] 
**hierarchy_level** | **int** | Hierarchy level of the issue type. | [optional] [readonly] 
**icon_url** | **str** | The URL of the issue type&#39;s avatar. | [optional] [readonly] 
**id** | **str** | The ID of the issue type. | [optional] [readonly] 
**name** | **str** | The name of the issue type. | [optional] [readonly] 
**scope** | [**Scope**](Scope.md) | Details of the next-gen projects the issue type is available in. | [optional] [readonly] 
**var_self** | **str** | The URL of these issue type details. | [optional] [readonly] 
**subtask** | **bool** | Whether this issue type is used to create subtasks. | [optional] [readonly] 

## Example

```python
from openapi_client.models.issue_type_issue_create_metadata import IssueTypeIssueCreateMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of IssueTypeIssueCreateMetadata from a JSON string
issue_type_issue_create_metadata_instance = IssueTypeIssueCreateMetadata.from_json(json)
# print the JSON string representation of the object
print(IssueTypeIssueCreateMetadata.to_json())

# convert the object into a dict
issue_type_issue_create_metadata_dict = issue_type_issue_create_metadata_instance.to_dict()
# create an instance of IssueTypeIssueCreateMetadata from a dict
issue_type_issue_create_metadata_from_dict = IssueTypeIssueCreateMetadata.from_dict(issue_type_issue_create_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


