# Transformation

Represents a Google Tag Manager Transformation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | GTM Account ID. | [optional] 
**container_id** | **str** | GTM Container ID. | [optional] 
**fingerprint** | **str** | The fingerprint of the GTM Transformation as computed at storage time. This value is recomputed whenever the transformation is modified. | [optional] 
**name** | **str** | Transformation display name. @mutable tagmanager.accounts.containers.workspaces.transformations.create @mutable tagmanager.accounts.containers.workspaces.transformations.update | [optional] 
**notes** | **str** | User notes on how to apply this transformation in the container. @mutable tagmanager.accounts.containers.workspaces.transformations.create @mutable tagmanager.accounts.containers.workspaces.transformations.update | [optional] 
**parameter** | [**List[Parameter]**](Parameter.md) | The transformation&#39;s parameters. @mutable tagmanager.accounts.containers.workspaces.transformations.create @mutable tagmanager.accounts.containers.workspaces.transformations.update | [optional] 
**parent_folder_id** | **str** | Parent folder id. | [optional] 
**path** | **str** | GTM transformation&#39;s API relative path. | [optional] 
**tag_manager_url** | **str** | Auto generated link to the tag manager UI | [optional] 
**transformation_id** | **str** | The Transformation ID uniquely identifies the GTM transformation. | [optional] 
**type** | **str** | Transformation type. @mutable tagmanager.accounts.containers.workspaces.transformations.create @mutable tagmanager.accounts.containers.workspaces.transformations.update | [optional] 
**workspace_id** | **str** | GTM Workspace ID. | [optional] 

## Example

```python
from openapi_client.models.transformation import Transformation

# TODO update the JSON string below
json = "{}"
# create an instance of Transformation from a JSON string
transformation_instance = Transformation.from_json(json)
# print the JSON string representation of the object
print(Transformation.to_json())

# convert the object into a dict
transformation_dict = transformation_instance.to_dict()
# create an instance of Transformation from a dict
transformation_from_dict = Transformation.from_dict(transformation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


