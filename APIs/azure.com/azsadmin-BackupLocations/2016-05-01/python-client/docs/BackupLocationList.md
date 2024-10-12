# BackupLocationList

List of backup locations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to the next page. | [optional] 
**value** | [**List[BackupLocation]**](BackupLocation.md) | List of backup locations. | [optional] 

## Example

```python
from openapi_client.models.backup_location_list import BackupLocationList

# TODO update the JSON string below
json = "{}"
# create an instance of BackupLocationList from a JSON string
backup_location_list_instance = BackupLocationList.from_json(json)
# print the JSON string representation of the object
print(BackupLocationList.to_json())

# convert the object into a dict
backup_location_list_dict = backup_location_list_instance.to_dict()
# create an instance of BackupLocationList from a dict
backup_location_list_from_dict = BackupLocationList.from_dict(backup_location_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


