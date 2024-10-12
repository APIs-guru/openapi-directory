# ProjectUpdateParameters

The parameters for updating a machine learning project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ProjectPropertiesUpdateParameters**](ProjectPropertiesUpdateParameters.md) |  | [optional] 
**tags** | **Dict[str, str]** | The resource tags for the machine learning project. | [optional] 

## Example

```python
from openapi_client.models.project_update_parameters import ProjectUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectUpdateParameters from a JSON string
project_update_parameters_instance = ProjectUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(ProjectUpdateParameters.to_json())

# convert the object into a dict
project_update_parameters_dict = project_update_parameters_instance.to_dict()
# create an instance of ProjectUpdateParameters from a dict
project_update_parameters_from_dict = ProjectUpdateParameters.from_dict(project_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


