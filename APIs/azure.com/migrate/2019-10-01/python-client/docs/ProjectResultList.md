# ProjectResultList

List of projects.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[Project]**](Project.md) | List of projects. | [optional] 

## Example

```python
from openapi_client.models.project_result_list import ProjectResultList

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectResultList from a JSON string
project_result_list_instance = ProjectResultList.from_json(json)
# print the JSON string representation of the object
print(ProjectResultList.to_json())

# convert the object into a dict
project_result_list_dict = project_result_list_instance.to_dict()
# create an instance of ProjectResultList from a dict
project_result_list_from_dict = ProjectResultList.from_dict(project_result_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


