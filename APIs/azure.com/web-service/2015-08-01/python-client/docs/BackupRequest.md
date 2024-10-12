# BackupRequest

Description of a backup which will be performed

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** |  | [optional] 
**id** | **str** | Resource Id | [optional] 
**kind** | **str** | Kind of resource | [optional] 
**location** | **str** | Resource Location | 
**name** | **str** | Resource Name | [optional] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] 

## Example

```python
from openapi_client.models.backup_request import BackupRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BackupRequest from a JSON string
backup_request_instance = BackupRequest.from_json(json)
# print the JSON string representation of the object
print(BackupRequest.to_json())

# convert the object into a dict
backup_request_dict = backup_request_instance.to_dict()
# create an instance of BackupRequest from a dict
backup_request_from_dict = BackupRequest.from_dict(backup_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


