# ContainerVersion

Represents a Google Tag Manager Container Version.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | GTM Account ID. | [optional] 
**container** | [**Container**](Container.md) |  | [optional] 
**container_id** | **str** | GTM Container ID. | [optional] 
**container_version_id** | **str** | The Container Version ID uniquely identifies the GTM Container Version. | [optional] 
**deleted** | **bool** | A value of true indicates this container version has been deleted. | [optional] 
**fingerprint** | **str** | The fingerprint of the GTM Container Version as computed at storage time. This value is recomputed whenever the container version is modified. | [optional] 
**folder** | [**List[Folder]**](Folder.md) | The folders in the container that this version was taken from. | [optional] 
**macro** | [**List[Macro]**](Macro.md) | The macros in the container that this version was taken from. | [optional] 
**name** | **str** | Container version display name. @mutable tagmanager.accounts.containers.versions.update | [optional] 
**notes** | **str** | User notes on how to apply this container version in the container. @mutable tagmanager.accounts.containers.versions.update | [optional] 
**rule** | [**List[Rule]**](Rule.md) | The rules in the container that this version was taken from. | [optional] 
**tag** | [**List[Tag]**](Tag.md) | The tags in the container that this version was taken from. | [optional] 
**trigger** | [**List[Trigger]**](Trigger.md) | The triggers in the container that this version was taken from. | [optional] 
**variable** | [**List[Variable]**](Variable.md) | The variables in the container that this version was taken from. | [optional] 

## Example

```python
from openapi_client.models.container_version import ContainerVersion

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerVersion from a JSON string
container_version_instance = ContainerVersion.from_json(json)
# print the JSON string representation of the object
print(ContainerVersion.to_json())

# convert the object into a dict
container_version_dict = container_version_instance.to_dict()
# create an instance of ContainerVersion from a dict
container_version_from_dict = ContainerVersion.from_dict(container_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


