# BackupEngineBaseResource

The base backup engine class. All workload specific backup engines derive from this class.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**BackupEngineBase**](BackupEngineBase.md) |  | [optional] 
**e_tag** | **str** | Optional ETag. | [optional] 
**id** | **str** | Resource Id represents the complete path to the resource. | [optional] [readonly] 
**location** | **str** | Resource location. | [optional] 
**name** | **str** | Resource name associated with the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**type** | **str** | Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/... | [optional] [readonly] 

## Example

```python
from openapi_client.models.backup_engine_base_resource import BackupEngineBaseResource

# TODO update the JSON string below
json = "{}"
# create an instance of BackupEngineBaseResource from a JSON string
backup_engine_base_resource_instance = BackupEngineBaseResource.from_json(json)
# print the JSON string representation of the object
print(BackupEngineBaseResource.to_json())

# convert the object into a dict
backup_engine_base_resource_dict = backup_engine_base_resource_instance.to_dict()
# create an instance of BackupEngineBaseResource from a dict
backup_engine_base_resource_from_dict = BackupEngineBaseResource.from_dict(backup_engine_base_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


