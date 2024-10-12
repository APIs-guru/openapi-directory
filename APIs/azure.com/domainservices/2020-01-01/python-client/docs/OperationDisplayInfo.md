# OperationDisplayInfo

The operation supported by Domain Services.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the operation. | [optional] 
**operation** | **str** | The action that users can perform, based on their permission level. | [optional] 
**provider** | **str** | Service provider: Domain Services. | [optional] 
**resource** | **str** | Resource on which the operation is performed. | [optional] 

## Example

```python
from openapi_client.models.operation_display_info import OperationDisplayInfo

# TODO update the JSON string below
json = "{}"
# create an instance of OperationDisplayInfo from a JSON string
operation_display_info_instance = OperationDisplayInfo.from_json(json)
# print the JSON string representation of the object
print(OperationDisplayInfo.to_json())

# convert the object into a dict
operation_display_info_dict = operation_display_info_instance.to_dict()
# create an instance of OperationDisplayInfo from a dict
operation_display_info_from_dict = OperationDisplayInfo.from_dict(operation_display_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


