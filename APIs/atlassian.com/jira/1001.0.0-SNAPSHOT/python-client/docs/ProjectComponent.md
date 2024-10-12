# ProjectComponent

Details about a project component.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assignee** | [**User**](User.md) | The details of the user associated with &#x60;assigneeType&#x60;, if any. See &#x60;realAssignee&#x60; for details of the user assigned to issues created with this component. | [optional] [readonly] 
**assignee_type** | **str** | The nominal user type used to determine the assignee for issues created with this component. See &#x60;realAssigneeType&#x60; for details on how the type of the user, and hence the user, assigned to issues is determined. Can take the following values:   *  &#x60;PROJECT_LEAD&#x60; the assignee to any issues created with this component is nominally the lead for the project the component is in.  *  &#x60;COMPONENT_LEAD&#x60; the assignee to any issues created with this component is nominally the lead for the component.  *  &#x60;UNASSIGNED&#x60; an assignee is not set for issues created with this component.  *  &#x60;PROJECT_DEFAULT&#x60; the assignee to any issues created with this component is nominally the default assignee for the project that the component is in.  Default value: &#x60;PROJECT_DEFAULT&#x60;.   Optional when creating or updating a component. | [optional] 
**description** | **str** | The description for the component. Optional when creating or updating a component. | [optional] 
**id** | **str** | The unique identifier for the component. | [optional] [readonly] 
**is_assignee_type_valid** | **bool** | Whether a user is associated with &#x60;assigneeType&#x60;. For example, if the &#x60;assigneeType&#x60; is set to &#x60;COMPONENT_LEAD&#x60; but the component lead is not set, then &#x60;false&#x60; is returned. | [optional] [readonly] 
**lead** | [**User**](User.md) | The user details for the component&#39;s lead user. | [optional] [readonly] 
**lead_account_id** | **str** | The accountId of the component&#39;s lead user. The accountId uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. | [optional] 
**lead_user_name** | **str** | This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. | [optional] 
**name** | **str** | The unique name for the component in the project. Required when creating a component. Optional when updating a component. The maximum length is 255 characters. | [optional] 
**project** | **str** | The key of the project the component is assigned to. Required when creating a component. Can&#39;t be updated. | [optional] 
**project_id** | **int** | The ID of the project the component is assigned to. | [optional] [readonly] 
**real_assignee** | [**User**](User.md) | The user assigned to issues created with this component, when &#x60;assigneeType&#x60; does not identify a valid assignee. | [optional] [readonly] 
**real_assignee_type** | **str** | The type of the assignee that is assigned to issues created with this component, when an assignee cannot be set from the &#x60;assigneeType&#x60;. For example, &#x60;assigneeType&#x60; is set to &#x60;COMPONENT_LEAD&#x60; but no component lead is set. This property is set to one of the following values:   *  &#x60;PROJECT_LEAD&#x60; when &#x60;assigneeType&#x60; is &#x60;PROJECT_LEAD&#x60; and the project lead has permission to be assigned issues in the project that the component is in.  *  &#x60;COMPONENT_LEAD&#x60; when &#x60;assignee&#x60;Type is &#x60;COMPONENT_LEAD&#x60; and the component lead has permission to be assigned issues in the project that the component is in.  *  &#x60;UNASSIGNED&#x60; when &#x60;assigneeType&#x60; is &#x60;UNASSIGNED&#x60; and Jira is configured to allow unassigned issues.  *  &#x60;PROJECT_DEFAULT&#x60; when none of the preceding cases are true. | [optional] [readonly] 
**var_self** | **str** | The URL of the component. | [optional] [readonly] 

## Example

```python
from openapi_client.models.project_component import ProjectComponent

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectComponent from a JSON string
project_component_instance = ProjectComponent.from_json(json)
# print the JSON string representation of the object
print(ProjectComponent.to_json())

# convert the object into a dict
project_component_dict = project_component_instance.to_dict()
# create an instance of ProjectComponent from a dict
project_component_from_dict = ProjectComponent.from_dict(project_component_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


