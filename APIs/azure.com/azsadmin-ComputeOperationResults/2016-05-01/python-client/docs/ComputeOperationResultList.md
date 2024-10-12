# ComputeOperationResultList

Pageable list of compute operation results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to the next page. | [optional] 
**value** | [**List[ComputeOperationResult]**](ComputeOperationResult.md) | List of compute operation results. | [optional] 

## Example

```python
from openapi_client.models.compute_operation_result_list import ComputeOperationResultList

# TODO update the JSON string below
json = "{}"
# create an instance of ComputeOperationResultList from a JSON string
compute_operation_result_list_instance = ComputeOperationResultList.from_json(json)
# print the JSON string representation of the object
print(ComputeOperationResultList.to_json())

# convert the object into a dict
compute_operation_result_list_dict = compute_operation_result_list_instance.to_dict()
# create an instance of ComputeOperationResultList from a dict
compute_operation_result_list_from_dict = ComputeOperationResultList.from_dict(compute_operation_result_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


