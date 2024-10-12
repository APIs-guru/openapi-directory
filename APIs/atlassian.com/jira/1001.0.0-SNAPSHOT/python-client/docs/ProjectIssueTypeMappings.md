# ProjectIssueTypeMappings

The project and issue type mappings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mappings** | [**List[ProjectIssueTypeMapping]**](ProjectIssueTypeMapping.md) | The project and issue type mappings. | 

## Example

```python
from openapi_client.models.project_issue_type_mappings import ProjectIssueTypeMappings

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectIssueTypeMappings from a JSON string
project_issue_type_mappings_instance = ProjectIssueTypeMappings.from_json(json)
# print the JSON string representation of the object
print(ProjectIssueTypeMappings.to_json())

# convert the object into a dict
project_issue_type_mappings_dict = project_issue_type_mappings_instance.to_dict()
# create an instance of ProjectIssueTypeMappings from a dict
project_issue_type_mappings_from_dict = ProjectIssueTypeMappings.from_dict(project_issue_type_mappings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


