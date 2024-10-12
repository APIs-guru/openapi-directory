# Project


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apis** | **List[str]** | A list of APIs included in this project. The APIs must belong to the same owner as the project. API names are case-sensitive.  | [optional] 
**description** | **str** | Project description | [optional] [default to '']
**domains** | **List[str]** | A list of domains included in this project. The domains must belong to the same owner as the project. Domain names are case-sensitive.  | [optional] 
**name** | **str** | Project name | [optional] 

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


