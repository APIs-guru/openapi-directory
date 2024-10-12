# BackupRequest

Description of a backup which will be performed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | BackupRequest resource specific properties | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

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


