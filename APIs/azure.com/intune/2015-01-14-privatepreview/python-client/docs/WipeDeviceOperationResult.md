# WipeDeviceOperationResult

Device entity for Intune.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**WipeDeviceOperationResultProperties**](WipeDeviceOperationResultProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**location** | **str** | Resource Location | [optional] 
**name** | **str** | Resource name | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource Tags | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.wipe_device_operation_result import WipeDeviceOperationResult

# TODO update the JSON string below
json = "{}"
# create an instance of WipeDeviceOperationResult from a JSON string
wipe_device_operation_result_instance = WipeDeviceOperationResult.from_json(json)
# print the JSON string representation of the object
print(WipeDeviceOperationResult.to_json())

# convert the object into a dict
wipe_device_operation_result_dict = wipe_device_operation_result_instance.to_dict()
# create an instance of WipeDeviceOperationResult from a dict
wipe_device_operation_result_from_dict = WipeDeviceOperationResult.from_dict(wipe_device_operation_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


