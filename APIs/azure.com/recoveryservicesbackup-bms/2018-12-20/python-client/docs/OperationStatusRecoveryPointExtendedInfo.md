# OperationStatusRecoveryPointExtendedInfo

Operation status extended info for Updated Recovery Point.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deleted_backup_item_version** | **str** | In case the share is in soft-deleted state, populate this field with deleted backup item | [optional] 
**updated_recovery_point** | [**RecoveryPoint**](RecoveryPoint.md) |  | [optional] 

## Example

```python
from openapi_client.models.operation_status_recovery_point_extended_info import OperationStatusRecoveryPointExtendedInfo

# TODO update the JSON string below
json = "{}"
# create an instance of OperationStatusRecoveryPointExtendedInfo from a JSON string
operation_status_recovery_point_extended_info_instance = OperationStatusRecoveryPointExtendedInfo.from_json(json)
# print the JSON string representation of the object
print(OperationStatusRecoveryPointExtendedInfo.to_json())

# convert the object into a dict
operation_status_recovery_point_extended_info_dict = operation_status_recovery_point_extended_info_instance.to_dict()
# create an instance of OperationStatusRecoveryPointExtendedInfo from a dict
operation_status_recovery_point_extended_info_from_dict = OperationStatusRecoveryPointExtendedInfo.from_dict(operation_status_recovery_point_extended_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


