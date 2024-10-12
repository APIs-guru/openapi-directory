# WorkspaceCustomStringParameter

The Value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**WorkspaceCustomParameterType**](WorkspaceCustomParameterType.md) |  | [optional] 
**value** | **str** | The value which should be used for this field. | 

## Example

```python
from openapi_client.models.workspace_custom_string_parameter import WorkspaceCustomStringParameter

# TODO update the JSON string below
json = "{}"
# create an instance of WorkspaceCustomStringParameter from a JSON string
workspace_custom_string_parameter_instance = WorkspaceCustomStringParameter.from_json(json)
# print the JSON string representation of the object
print(WorkspaceCustomStringParameter.to_json())

# convert the object into a dict
workspace_custom_string_parameter_dict = workspace_custom_string_parameter_instance.to_dict()
# create an instance of WorkspaceCustomStringParameter from a dict
workspace_custom_string_parameter_from_dict = WorkspaceCustomStringParameter.from_dict(workspace_custom_string_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


