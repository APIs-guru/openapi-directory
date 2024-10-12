# OperationResultInfoBaseResource

Base class for operation result information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**OperationResultInfoBase**](OperationResultInfoBase.md) |  | [optional] 
**headers** | **Dict[str, List[str]]** | The HTTP headers associated with this operation. | [optional] 
**status_code** | **str** | The HTTP status code of the operation. | [optional] 

## Example

```python
from openapi_client.models.operation_result_info_base_resource import OperationResultInfoBaseResource

# TODO update the JSON string below
json = "{}"
# create an instance of OperationResultInfoBaseResource from a JSON string
operation_result_info_base_resource_instance = OperationResultInfoBaseResource.from_json(json)
# print the JSON string representation of the object
print(OperationResultInfoBaseResource.to_json())

# convert the object into a dict
operation_result_info_base_resource_dict = operation_result_info_base_resource_instance.to_dict()
# create an instance of OperationResultInfoBaseResource from a dict
operation_result_info_base_resource_from_dict = OperationResultInfoBaseResource.from_dict(operation_result_info_base_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


