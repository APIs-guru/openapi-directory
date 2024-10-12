# BackupResourceConfigResource

The resource storage details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**BackupResourceConfig**](BackupResourceConfig.md) |  | [optional] 
**e_tag** | **str** | Optional ETag. | [optional] 
**id** | **str** | Resource Id represents the complete path to the resource. | [optional] [readonly] 
**location** | **str** | Resource location. | [optional] 
**name** | **str** | Resource name associated with the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**type** | **str** | Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/... | [optional] [readonly] 

## Example

```python
from openapi_client.models.backup_resource_config_resource import BackupResourceConfigResource

# TODO update the JSON string below
json = "{}"
# create an instance of BackupResourceConfigResource from a JSON string
backup_resource_config_resource_instance = BackupResourceConfigResource.from_json(json)
# print the JSON string representation of the object
print(BackupResourceConfigResource.to_json())

# convert the object into a dict
backup_resource_config_resource_dict = backup_resource_config_resource_instance.to_dict()
# create an instance of BackupResourceConfigResource from a dict
backup_resource_config_resource_from_dict = BackupResourceConfigResource.from_dict(backup_resource_config_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


