# ProjectIssueCreateMetadata

Details of the issue creation metadata for a project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avatar_urls** | [**AvatarUrlsBean**](AvatarUrlsBean.md) | List of the project&#39;s avatars, returning the avatar size and associated URL. | [optional] [readonly] 
**expand** | **str** | Expand options that include additional project issue create metadata details in the response. | [optional] [readonly] 
**id** | **str** | The ID of the project. | [optional] [readonly] 
**issuetypes** | [**List[IssueTypeIssueCreateMetadata]**](IssueTypeIssueCreateMetadata.md) | List of the issue types supported by the project. | [optional] [readonly] 
**key** | **str** | The key of the project. | [optional] [readonly] 
**name** | **str** | The name of the project. | [optional] [readonly] 
**var_self** | **str** | The URL of the project. | [optional] [readonly] 

## Example

```python
from openapi_client.models.project_issue_create_metadata import ProjectIssueCreateMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectIssueCreateMetadata from a JSON string
project_issue_create_metadata_instance = ProjectIssueCreateMetadata.from_json(json)
# print the JSON string representation of the object
print(ProjectIssueCreateMetadata.to_json())

# convert the object into a dict
project_issue_create_metadata_dict = project_issue_create_metadata_instance.to_dict()
# create an instance of ProjectIssueCreateMetadata from a dict
project_issue_create_metadata_from_dict = ProjectIssueCreateMetadata.from_dict(project_issue_create_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


