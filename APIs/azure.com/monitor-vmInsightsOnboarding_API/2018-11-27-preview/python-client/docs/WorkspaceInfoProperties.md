# WorkspaceInfoProperties

Resource properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer_id** | **str** | Log Analytics workspace identifier. | 

## Example

```python
from openapi_client.models.workspace_info_properties import WorkspaceInfoProperties

# TODO update the JSON string below
json = "{}"
# create an instance of WorkspaceInfoProperties from a JSON string
workspace_info_properties_instance = WorkspaceInfoProperties.from_json(json)
# print the JSON string representation of the object
print(WorkspaceInfoProperties.to_json())

# convert the object into a dict
workspace_info_properties_dict = workspace_info_properties_instance.to_dict()
# create an instance of WorkspaceInfoProperties from a dict
workspace_info_properties_from_dict = WorkspaceInfoProperties.from_dict(workspace_info_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


