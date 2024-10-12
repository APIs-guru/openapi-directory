# WorkspaceCustomBooleanParameter

The value which should be used for this field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**WorkspaceCustomParameterType**](WorkspaceCustomParameterType.md) |  | [optional] 
**value** | **bool** | The value which should be used for this field. | 

## Example

```python
from openapi_client.models.workspace_custom_boolean_parameter import WorkspaceCustomBooleanParameter

# TODO update the JSON string below
json = "{}"
# create an instance of WorkspaceCustomBooleanParameter from a JSON string
workspace_custom_boolean_parameter_instance = WorkspaceCustomBooleanParameter.from_json(json)
# print the JSON string representation of the object
print(WorkspaceCustomBooleanParameter.to_json())

# convert the object into a dict
workspace_custom_boolean_parameter_dict = workspace_custom_boolean_parameter_instance.to_dict()
# create an instance of WorkspaceCustomBooleanParameter from a dict
workspace_custom_boolean_parameter_from_dict = WorkspaceCustomBooleanParameter.from_dict(workspace_custom_boolean_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


