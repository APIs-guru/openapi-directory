# ProjectResourceUpdateParameters

The parameters to update a project resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **Dict[str, str]** | The custom tags to be set on the resource. | [optional] 

## Example

```python
from openapi_client.models.project_resource_update_parameters import ProjectResourceUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectResourceUpdateParameters from a JSON string
project_resource_update_parameters_instance = ProjectResourceUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(ProjectResourceUpdateParameters.to_json())

# convert the object into a dict
project_resource_update_parameters_dict = project_resource_update_parameters_instance.to_dict()
# create an instance of ProjectResourceUpdateParameters from a dict
project_resource_update_parameters_from_dict = ProjectResourceUpdateParameters.from_dict(project_resource_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


