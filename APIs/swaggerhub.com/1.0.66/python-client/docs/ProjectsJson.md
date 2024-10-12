# ProjectsJson


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**offset** | **int** |  | [optional] 
**projects** | [**List[Project]**](Project.md) |  | [optional] 
**total_count** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.projects_json import ProjectsJson

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectsJson from a JSON string
projects_json_instance = ProjectsJson.from_json(json)
# print the JSON string representation of the object
print(ProjectsJson.to_json())

# convert the object into a dict
projects_json_dict = projects_json_instance.to_dict()
# create an instance of ProjectsJson from a dict
projects_json_from_dict = ProjectsJson.from_dict(projects_json_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


