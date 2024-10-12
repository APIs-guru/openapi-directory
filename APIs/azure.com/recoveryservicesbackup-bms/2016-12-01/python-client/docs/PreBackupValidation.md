# PreBackupValidation

Pre-backup validation for Azure VM Workload provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Error code of protectable item | [optional] 
**message** | **str** | Message corresponding to the error code for the protectable item | [optional] 
**status** | **str** | Status of protectable item, i.e. InProgress,Succeeded,Failed | [optional] 

## Example

```python
from openapi_client.models.pre_backup_validation import PreBackupValidation

# TODO update the JSON string below
json = "{}"
# create an instance of PreBackupValidation from a JSON string
pre_backup_validation_instance = PreBackupValidation.from_json(json)
# print the JSON string representation of the object
print(PreBackupValidation.to_json())

# convert the object into a dict
pre_backup_validation_dict = pre_backup_validation_instance.to_dict()
# create an instance of PreBackupValidation from a dict
pre_backup_validation_from_dict = PreBackupValidation.from_dict(pre_backup_validation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


