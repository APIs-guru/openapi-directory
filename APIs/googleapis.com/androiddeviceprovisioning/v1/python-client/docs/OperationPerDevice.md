# OperationPerDevice

A task for each device in the operation. Corresponds to each device change in the request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**claim** | [**PartnerClaim**](PartnerClaim.md) |  | [optional] 
**result** | [**PerDeviceStatusInBatch**](PerDeviceStatusInBatch.md) |  | [optional] 
**unclaim** | [**PartnerUnclaim**](PartnerUnclaim.md) |  | [optional] 
**update_metadata** | [**UpdateMetadataArguments**](UpdateMetadataArguments.md) |  | [optional] 

## Example

```python
from openapi_client.models.operation_per_device import OperationPerDevice

# TODO update the JSON string below
json = "{}"
# create an instance of OperationPerDevice from a JSON string
operation_per_device_instance = OperationPerDevice.from_json(json)
# print the JSON string representation of the object
print(OperationPerDevice.to_json())

# convert the object into a dict
operation_per_device_dict = operation_per_device_instance.to_dict()
# create an instance of OperationPerDevice from a dict
operation_per_device_from_dict = OperationPerDevice.from_dict(operation_per_device_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


