# Project

Details about a project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**archived** | **bool** | Whether the project is archived. | [optional] [readonly] 
**archived_by** | [**User**](User.md) | The user who archived the project. | [optional] [readonly] 
**archived_date** | **datetime** | The date when the project was archived. | [optional] [readonly] 
**assignee_type** | **str** | The default assignee when creating issues for this project. | [optional] [readonly] 
**avatar_urls** | [**AvatarUrlsBean**](AvatarUrlsBean.md) | The URLs of the project&#39;s avatars. | [optional] [readonly] 
**components** | [**List[ProjectComponent]**](ProjectComponent.md) | List of the components contained in the project. | [optional] [readonly] 
**deleted** | **bool** | Whether the project is marked as deleted. | [optional] [readonly] 
**deleted_by** | [**User**](User.md) | The user who marked the project as deleted. | [optional] [readonly] 
**deleted_date** | **datetime** | The date when the project was marked as deleted. | [optional] [readonly] 
**description** | **str** | A brief description of the project. | [optional] [readonly] 
**email** | **str** | An email address associated with the project. | [optional] 
**expand** | **str** | Expand options that include additional project details in the response. | [optional] [readonly] 
**favourite** | **bool** | Whether the project is selected as a favorite. | [optional] 
**id** | **str** | The ID of the project. | [optional] 
**insight** | [**ProjectInsight**](ProjectInsight.md) | Insights about the project. | [optional] [readonly] 
**is_private** | **bool** | Whether the project is private. | [optional] [readonly] 
**issue_type_hierarchy** | [**Hierarchy**](Hierarchy.md) | The issue type hierarchy for the project. | [optional] [readonly] 
**issue_types** | [**List[IssueTypeDetails]**](IssueTypeDetails.md) | List of the issue types available in the project. | [optional] [readonly] 
**key** | **str** | The key of the project. | [optional] [readonly] 
**landing_page_info** | [**ProjectLandingPageInfo**](ProjectLandingPageInfo.md) | The project landing page info. | [optional] [readonly] 
**lead** | [**User**](User.md) | The username of the project lead. | [optional] [readonly] 
**name** | **str** | The name of the project. | [optional] [readonly] 
**permissions** | [**ProjectPermissions**](ProjectPermissions.md) | User permissions on the project | [optional] [readonly] 
**project_category** | [**ProjectCategory**](ProjectCategory.md) | The category the project belongs to. | [optional] [readonly] 
**project_type_key** | **str** | The [project type](https://confluence.atlassian.com/x/GwiiLQ#Jiraapplicationsoverview-Productfeaturesandprojecttypes) of the project. | [optional] [readonly] 
**properties** | **Dict[str, object]** | Map of project properties | [optional] [readonly] 
**retention_till_date** | **datetime** | The date when the project is deleted permanently. | [optional] [readonly] 
**roles** | **Dict[str, str]** | The name and self URL for each role defined in the project. For more information, see [Create project role](#api-rest-api-3-role-post). | [optional] [readonly] 
**var_self** | **str** | The URL of the project details. | [optional] [readonly] 
**simplified** | **bool** | Whether the project is simplified. | [optional] [readonly] 
**style** | **str** | The type of the project. | [optional] [readonly] 
**url** | **str** | A link to information about this project, such as project documentation. | [optional] [readonly] 
**uuid** | **str** | Unique ID for next-gen projects. | [optional] [readonly] 
**versions** | [**List[Version]**](Version.md) | The versions defined in the project. For more information, see [Create version](#api-rest-api-3-version-post). | [optional] [readonly] 

## Example

```python
from openapi_client.models.project import Project

# TODO update the JSON string below
json = "{}"
# create an instance of Project from a JSON string
project_instance = Project.from_json(json)
# print the JSON string representation of the object
print(Project.to_json())

# convert the object into a dict
project_dict = project_instance.to_dict()
# create an instance of Project from a dict
project_from_dict = Project.from_dict(project_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


