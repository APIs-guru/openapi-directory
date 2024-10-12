# ComputeOperationResultModel

Compute operation result properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instances** | **List[str]** | List of operation result instances. | [optional] 
**provisioning_state** | **str** | Success or failure of operation. | [optional] 

## Example

```python
from openapi_client.models.compute_operation_result_model import ComputeOperationResultModel

# TODO update the JSON string below
json = "{}"
# create an instance of ComputeOperationResultModel from a JSON string
compute_operation_result_model_instance = ComputeOperationResultModel.from_json(json)
# print the JSON string representation of the object
print(ComputeOperationResultModel.to_json())

# convert the object into a dict
compute_operation_result_model_dict = compute_operation_result_model_instance.to_dict()
# create an instance of ComputeOperationResultModel from a dict
compute_operation_result_model_from_dict = ComputeOperationResultModel.from_dict(compute_operation_result_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


