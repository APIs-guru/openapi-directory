# BackupLocation

Information about the backup location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**BackupLocationModel**](BackupLocationModel.md) |  | [optional] 
**id** | **str** | URI of the resource. | [optional] [readonly] 
**location** | **str** | Location of the resource. | [optional] 
**name** | **str** | Name of the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | List of key value pairs. | [optional] 
**type** | **str** | Type of resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.backup_location import BackupLocation

# TODO update the JSON string below
json = "{}"
# create an instance of BackupLocation from a JSON string
backup_location_instance = BackupLocation.from_json(json)
# print the JSON string representation of the object
print(BackupLocation.to_json())

# convert the object into a dict
backup_location_dict = backup_location_instance.to_dict()
# create an instance of BackupLocation from a dict
backup_location_from_dict = BackupLocation.from_dict(backup_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


