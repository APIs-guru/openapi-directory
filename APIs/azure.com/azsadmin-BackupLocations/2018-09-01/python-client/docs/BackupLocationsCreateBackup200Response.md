# BackupLocationsCreateBackup200Response

Information related to a backup.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**BackupLocationsCreateBackup200ResponseProperties**](BackupLocationsCreateBackup200ResponseProperties.md) |  | [optional] 
**id** | **str** | URI of the resource. | [optional] [readonly] 
**location** | **str** | Location of the resource. | [optional] 
**name** | **str** | Name of the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | List of key value pairs. | [optional] 
**type** | **str** | Type of resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.backup_locations_create_backup200_response import BackupLocationsCreateBackup200Response

# TODO update the JSON string below
json = "{}"
# create an instance of BackupLocationsCreateBackup200Response from a JSON string
backup_locations_create_backup200_response_instance = BackupLocationsCreateBackup200Response.from_json(json)
# print the JSON string representation of the object
print(BackupLocationsCreateBackup200Response.to_json())

# convert the object into a dict
backup_locations_create_backup200_response_dict = backup_locations_create_backup200_response_instance.to_dict()
# create an instance of BackupLocationsCreateBackup200Response from a dict
backup_locations_create_backup200_response_from_dict = BackupLocationsCreateBackup200Response.from_dict(backup_locations_create_backup200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


