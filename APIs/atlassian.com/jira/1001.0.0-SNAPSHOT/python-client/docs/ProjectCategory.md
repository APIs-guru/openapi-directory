# ProjectCategory

A project category.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the project category. | [optional] 
**id** | **str** | The ID of the project category. | [optional] [readonly] 
**name** | **str** | The name of the project category. Required on create, optional on update. | [optional] 
**var_self** | **str** | The URL of the project category. | [optional] [readonly] 

## Example

```python
from openapi_client.models.project_category import ProjectCategory

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectCategory from a JSON string
project_category_instance = ProjectCategory.from_json(json)
# print the JSON string representation of the object
print(ProjectCategory.to_json())

# convert the object into a dict
project_category_dict = project_category_instance.to_dict()
# create an instance of ProjectCategory from a dict
project_category_from_dict = ProjectCategory.from_dict(project_category_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


