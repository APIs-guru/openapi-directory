# WorkspacePropertiesUpdateParameters

The parameters for updating the properties of a machine learning team account workspace.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description for this workspace. | [optional] 
**friendly_name** | **str** | Friendly name of this workspace. | [optional] 

## Example

```python
from openapi_client.models.workspace_properties_update_parameters import WorkspacePropertiesUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of WorkspacePropertiesUpdateParameters from a JSON string
workspace_properties_update_parameters_instance = WorkspacePropertiesUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(WorkspacePropertiesUpdateParameters.to_json())

# convert the object into a dict
workspace_properties_update_parameters_dict = workspace_properties_update_parameters_instance.to_dict()
# create an instance of WorkspacePropertiesUpdateParameters from a dict
workspace_properties_update_parameters_from_dict = WorkspacePropertiesUpdateParameters.from_dict(workspace_properties_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


