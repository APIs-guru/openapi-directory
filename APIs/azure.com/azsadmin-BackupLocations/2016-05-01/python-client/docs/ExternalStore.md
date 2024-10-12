# ExternalStore

Information about an external storage location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available_capacity** | **str** | Free space at the backup location. | [optional] 
**backup_frequency_in_hours** | **int** | The interval, in hours, for the frequency that the scheduler takes a backup. | [optional] 
**backup_retention_period_in_days** | **int** | The retention period, in days, for backs in the storage location. | [optional] 
**encryption_key_base64** | **str** | Encryption key. | [optional] 
**is_backup_scheduler_enabled** | **bool** | True if the backup scheduler is enabled. | [optional] 
**last_backup_time** | **datetime** | Time of backup. | [optional] 
**next_backup_time** | **datetime** | The scheduled time of the next backup. | [optional] 
**password** | **str** | Password to access the location. | [optional] 
**path** | **str** | Path to the update location | [optional] 
**user_name** | **str** | Username to access the location. | [optional] 

## Example

```python
from openapi_client.models.external_store import ExternalStore

# TODO update the JSON string below
json = "{}"
# create an instance of ExternalStore from a JSON string
external_store_instance = ExternalStore.from_json(json)
# print the JSON string representation of the object
print(ExternalStore.to_json())

# convert the object into a dict
external_store_dict = external_store_instance.to_dict()
# create an instance of ExternalStore from a dict
external_store_from_dict = ExternalStore.from_dict(external_store_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


