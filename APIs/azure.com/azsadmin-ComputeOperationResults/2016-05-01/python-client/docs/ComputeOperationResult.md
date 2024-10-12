# ComputeOperationResult

Compute operation result description.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ComputeOperationResultModel**](ComputeOperationResultModel.md) |  | [optional] 
**id** | **str** | URI of the resource. | [optional] [readonly] 
**location** | **str** | The region where the resource is located. | [optional] 
**name** | **str** | Name of the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | List of key-value pairs. | [optional] 
**type** | **str** | Type of resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.compute_operation_result import ComputeOperationResult

# TODO update the JSON string below
json = "{}"
# create an instance of ComputeOperationResult from a JSON string
compute_operation_result_instance = ComputeOperationResult.from_json(json)
# print the JSON string representation of the object
print(ComputeOperationResult.to_json())

# convert the object into a dict
compute_operation_result_dict = compute_operation_result_instance.to_dict()
# create an instance of ComputeOperationResult from a dict
compute_operation_result_from_dict = ComputeOperationResult.from_dict(compute_operation_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


