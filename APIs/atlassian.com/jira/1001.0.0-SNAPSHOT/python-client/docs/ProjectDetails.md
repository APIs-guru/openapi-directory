# ProjectDetails

Details about a project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avatar_urls** | [**AvatarUrlsBean**](AvatarUrlsBean.md) | The URLs of the project&#39;s avatars. | [optional] [readonly] 
**id** | **str** | The ID of the project. | [optional] 
**key** | **str** | The key of the project. | [optional] [readonly] 
**name** | **str** | The name of the project. | [optional] [readonly] 
**project_category** | [**UpdatedProjectCategory**](UpdatedProjectCategory.md) | The category the project belongs to. | [optional] [readonly] 
**project_type_key** | **str** | The [project type](https://confluence.atlassian.com/x/GwiiLQ#Jiraapplicationsoverview-Productfeaturesandprojecttypes) of the project. | [optional] [readonly] 
**var_self** | **str** | The URL of the project details. | [optional] [readonly] 
**simplified** | **bool** | Whether or not the project is simplified. | [optional] [readonly] 

## Example

```python
from openapi_client.models.project_details import ProjectDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectDetails from a JSON string
project_details_instance = ProjectDetails.from_json(json)
# print the JSON string representation of the object
print(ProjectDetails.to_json())

# convert the object into a dict
project_details_dict = project_details_instance.to_dict()
# create an instance of ProjectDetails from a dict
project_details_from_dict = ProjectDetails.from_dict(project_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


