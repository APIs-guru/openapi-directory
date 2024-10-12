# OperationStatusProvisionILRExtendedInfo

Operation status extended info for ILR provision action.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recovery_target** | [**InstantItemRecoveryTarget**](InstantItemRecoveryTarget.md) |  | [optional] 

## Example

```python
from openapi_client.models.operation_status_provision_ilr_extended_info import OperationStatusProvisionILRExtendedInfo

# TODO update the JSON string below
json = "{}"
# create an instance of OperationStatusProvisionILRExtendedInfo from a JSON string
operation_status_provision_ilr_extended_info_instance = OperationStatusProvisionILRExtendedInfo.from_json(json)
# print the JSON string representation of the object
print(OperationStatusProvisionILRExtendedInfo.to_json())

# convert the object into a dict
operation_status_provision_ilr_extended_info_dict = operation_status_provision_ilr_extended_info_instance.to_dict()
# create an instance of OperationStatusProvisionILRExtendedInfo from a dict
operation_status_provision_ilr_extended_info_from_dict = OperationStatusProvisionILRExtendedInfo.from_dict(operation_status_provision_ilr_extended_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


