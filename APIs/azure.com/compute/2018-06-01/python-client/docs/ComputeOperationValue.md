# ComputeOperationValue

Describes the properties of a Compute Operation value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display** | [**ComputeOperationValueDisplay**](ComputeOperationValueDisplay.md) |  | [optional] 
**name** | **str** | The name of the compute operation. | [optional] [readonly] 
**origin** | **str** | The origin of the compute operation. | [optional] [readonly] 

## Example

```python
from openapi_client.models.compute_operation_value import ComputeOperationValue

# TODO update the JSON string below
json = "{}"
# create an instance of ComputeOperationValue from a JSON string
compute_operation_value_instance = ComputeOperationValue.from_json(json)
# print the JSON string representation of the object
print(ComputeOperationValue.to_json())

# convert the object into a dict
compute_operation_value_dict = compute_operation_value_instance.to_dict()
# create an instance of ComputeOperationValue from a dict
compute_operation_value_from_dict = ComputeOperationValue.from_dict(compute_operation_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


