# BackupRequestResource

Base class for the backup request. Workload-specific backup requests are derived from this class.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**BackupRequest**](BackupRequest.md) |  | [optional] 
**e_tag** | **str** | Optional ETag. | [optional] 
**id** | **str** | Resource ID represents the complete path to the resource. | [optional] 
**location** | **str** | Resource location. | [optional] 
**name** | **str** | Resource name associated with the resource. | [optional] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**type** | **str** | Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/... | [optional] 

## Example

```python
from openapi_client.models.backup_request_resource import BackupRequestResource

# TODO update the JSON string below
json = "{}"
# create an instance of BackupRequestResource from a JSON string
backup_request_resource_instance = BackupRequestResource.from_json(json)
# print the JSON string representation of the object
print(BackupRequestResource.to_json())

# convert the object into a dict
backup_request_resource_dict = backup_request_resource_instance.to_dict()
# create an instance of BackupRequestResource from a dict
backup_request_resource_from_dict = BackupRequestResource.from_dict(backup_request_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


