# ComputeOperationListResult

The List Compute Operation operation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[ComputeOperationValue]**](ComputeOperationValue.md) | The list of compute operations | [optional] [readonly] 

## Example

```python
from openapi_client.models.compute_operation_list_result import ComputeOperationListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ComputeOperationListResult from a JSON string
compute_operation_list_result_instance = ComputeOperationListResult.from_json(json)
# print the JSON string representation of the object
print(ComputeOperationListResult.to_json())

# convert the object into a dict
compute_operation_list_result_dict = compute_operation_list_result_instance.to_dict()
# create an instance of ComputeOperationListResult from a dict
compute_operation_list_result_from_dict = ComputeOperationListResult.from_dict(compute_operation_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


