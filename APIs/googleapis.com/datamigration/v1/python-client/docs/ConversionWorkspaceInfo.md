# ConversionWorkspaceInfo

A conversion workspace's version.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**commit_id** | **str** | The commit ID of the conversion workspace. | [optional] 
**name** | **str** | The resource name (URI) of the conversion workspace. | [optional] 

## Example

```python
from openapi_client.models.conversion_workspace_info import ConversionWorkspaceInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ConversionWorkspaceInfo from a JSON string
conversion_workspace_info_instance = ConversionWorkspaceInfo.from_json(json)
# print the JSON string representation of the object
print(ConversionWorkspaceInfo.to_json())

# convert the object into a dict
conversion_workspace_info_dict = conversion_workspace_info_instance.to_dict()
# create an instance of ConversionWorkspaceInfo from a dict
conversion_workspace_info_from_dict = ConversionWorkspaceInfo.from_dict(conversion_workspace_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


