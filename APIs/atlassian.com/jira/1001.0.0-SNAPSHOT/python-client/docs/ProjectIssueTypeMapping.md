# ProjectIssueTypeMapping

The project and issue type mapping.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issue_type_id** | **str** | The ID of the issue type. | 
**project_id** | **str** | The ID of the project. | 

## Example

```python
from openapi_client.models.project_issue_type_mapping import ProjectIssueTypeMapping

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectIssueTypeMapping from a JSON string
project_issue_type_mapping_instance = ProjectIssueTypeMapping.from_json(json)
# print the JSON string representation of the object
print(ProjectIssueTypeMapping.to_json())

# convert the object into a dict
project_issue_type_mapping_dict = project_issue_type_mapping_instance.to_dict()
# create an instance of ProjectIssueTypeMapping from a dict
project_issue_type_mapping_from_dict = ProjectIssueTypeMapping.from_dict(project_issue_type_mapping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


