# ResizeOperationStatus

Describes either the current operation (if the pool AllocationState is Resizing) or the previously completed operation (if the AllocationState is Steady).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**List[ResizeError]**](ResizeError.md) | This property is set only if an error occurred during the last pool resize, and only when the pool allocationState is Steady. | [optional] 
**node_deallocation_option** | [**ComputeNodeDeallocationOption**](ComputeNodeDeallocationOption.md) |  | [optional] 
**resize_timeout** | **str** | The default value is 15 minutes. The minimum value is 5 minutes. If you specify a value less than 5 minutes, the Batch service returns an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). | [optional] 
**start_time** | **datetime** |  | [optional] 
**target_dedicated_nodes** | **int** |  | [optional] 
**target_low_priority_nodes** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.resize_operation_status import ResizeOperationStatus

# TODO update the JSON string below
json = "{}"
# create an instance of ResizeOperationStatus from a JSON string
resize_operation_status_instance = ResizeOperationStatus.from_json(json)
# print the JSON string representation of the object
print(ResizeOperationStatus.to_json())

# convert the object into a dict
resize_operation_status_dict = resize_operation_status_instance.to_dict()
# create an instance of ResizeOperationStatus from a dict
resize_operation_status_from_dict = ResizeOperationStatus.from_dict(resize_operation_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


