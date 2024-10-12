# Project


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admin_url** | **str** | URL to the page where project administration can be done. Administrative access is still required when accessing the url. | [optional] 
**country** | **str** | The country code | [optional] 
**created** | **datetime** | The timestamp when this project was created. | [optional] 
**created_by** | **str** | The id of the user that created the project. If the creator is not known this value is *null* | [optional] 
**design_id** | **int** | The id of the design this project are using or null if no design is used | [optional] 
**external_id** | **str** | The external id (foreign key). Must not exceed 255 characters. | [optional] 
**id** | **int** | Unique identifier representing a specific project. Id numbers are never reused. | [optional] 
**locale** | **str** | The primary locale for this project | [optional] 
**name** | **str** | The internal name of the project | [optional] 
**note** | **str** | The internal note field | [optional] 
**org_id** | **int** | The id of the organization unit this project belongs to | [optional] 
**status** | **str** | Project status. Can be either ACTIVATED, NEW or DISABLED | [optional] 
**timezone** | **str** | The main timezone for the project | [optional] 
**user_description** | **str** | The description presented to participants. This value can be *null*. | [optional] 
**user_title** | **str** | The title presented to participants | [optional] 

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


