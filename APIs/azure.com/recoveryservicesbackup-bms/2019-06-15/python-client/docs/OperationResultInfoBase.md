# OperationResultInfoBase

Base class for operation result info.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_type** | **str** | This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types. | 

## Example

```python
from openapi_client.models.operation_result_info_base import OperationResultInfoBase

# TODO update the JSON string below
json = "{}"
# create an instance of OperationResultInfoBase from a JSON string
operation_result_info_base_instance = OperationResultInfoBase.from_json(json)
# print the JSON string representation of the object
print(OperationResultInfoBase.to_json())

# convert the object into a dict
operation_result_info_base_dict = operation_result_info_base_instance.to_dict()
# create an instance of OperationResultInfoBase from a dict
operation_result_info_base_from_dict = OperationResultInfoBase.from_dict(operation_result_info_base_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


