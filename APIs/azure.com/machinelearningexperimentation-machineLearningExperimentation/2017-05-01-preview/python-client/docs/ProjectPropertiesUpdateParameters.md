# ProjectPropertiesUpdateParameters

The parameters for updating the properties of a project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of this project. | [optional] 
**friendly_name** | **str** | The friendly name for this project. | [optional] 
**gitrepo** | **str** | The reference to git repo for this project. | [optional] 

## Example

```python
from openapi_client.models.project_properties_update_parameters import ProjectPropertiesUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectPropertiesUpdateParameters from a JSON string
project_properties_update_parameters_instance = ProjectPropertiesUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(ProjectPropertiesUpdateParameters.to_json())

# convert the object into a dict
project_properties_update_parameters_dict = project_properties_update_parameters_instance.to_dict()
# create an instance of ProjectPropertiesUpdateParameters from a dict
project_properties_update_parameters_from_dict = ProjectPropertiesUpdateParameters.from_dict(project_properties_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


