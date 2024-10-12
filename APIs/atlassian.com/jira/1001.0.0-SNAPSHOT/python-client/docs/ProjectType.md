# ProjectType

Details about a project type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**color** | **str** | The color of the project type. | [optional] [readonly] 
**description_i18n_key** | **str** | The key of the project type&#39;s description. | [optional] [readonly] 
**formatted_key** | **str** | The formatted key of the project type. | [optional] [readonly] 
**icon** | **str** | The icon of the project type. | [optional] [readonly] 
**key** | **str** | The key of the project type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.project_type import ProjectType

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectType from a JSON string
project_type_instance = ProjectType.from_json(json)
# print the JSON string representation of the object
print(ProjectType.to_json())

# convert the object into a dict
project_type_dict = project_type_instance.to_dict()
# create an instance of ProjectType from a dict
project_type_from_dict = ProjectType.from_dict(project_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


