# ConversionWorkspace

The main conversion workspace resource entity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The timestamp when the workspace resource was created. | [optional] [readonly] 
**destination** | [**DatabaseEngineInfo**](DatabaseEngineInfo.md) |  | [optional] 
**display_name** | **str** | Optional. The display name for the workspace. | [optional] 
**global_settings** | **Dict[str, str]** | Optional. A generic list of settings for the workspace. The settings are database pair dependant and can indicate default behavior for the mapping rules engine or turn on or off specific features. Such examples can be: convert_foreign_key_to_interleave&#x3D;true, skip_triggers&#x3D;false, ignore_non_table_synonyms&#x3D;true | [optional] 
**has_uncommitted_changes** | **bool** | Output only. Whether the workspace has uncommitted changes (changes which were made after the workspace was committed). | [optional] [readonly] 
**latest_commit_id** | **str** | Output only. The latest commit ID. | [optional] [readonly] 
**latest_commit_time** | **str** | Output only. The timestamp when the workspace was committed. | [optional] [readonly] 
**name** | **str** | Full name of the workspace resource, in the form of: projects/{project}/locations/{location}/conversionWorkspaces/{conversion_workspace}. | [optional] 
**source** | [**DatabaseEngineInfo**](DatabaseEngineInfo.md) |  | [optional] 
**update_time** | **str** | Output only. The timestamp when the workspace resource was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.conversion_workspace import ConversionWorkspace

# TODO update the JSON string below
json = "{}"
# create an instance of ConversionWorkspace from a JSON string
conversion_workspace_instance = ConversionWorkspace.from_json(json)
# print the JSON string representation of the object
print(ConversionWorkspace.to_json())

# convert the object into a dict
conversion_workspace_dict = conversion_workspace_instance.to_dict()
# create an instance of ConversionWorkspace from a dict
conversion_workspace_from_dict = ConversionWorkspace.from_dict(conversion_workspace_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


