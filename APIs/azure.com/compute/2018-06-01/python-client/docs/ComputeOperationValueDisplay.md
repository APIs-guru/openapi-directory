# ComputeOperationValueDisplay

Describes the properties of a Compute Operation Value Display.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the operation. | [optional] [readonly] 
**operation** | **str** | The display name of the compute operation. | [optional] [readonly] 
**provider** | **str** | The resource provider for the operation. | [optional] [readonly] 
**resource** | **str** | The display name of the resource the operation applies to. | [optional] [readonly] 

## Example

```python
from openapi_client.models.compute_operation_value_display import ComputeOperationValueDisplay

# TODO update the JSON string below
json = "{}"
# create an instance of ComputeOperationValueDisplay from a JSON string
compute_operation_value_display_instance = ComputeOperationValueDisplay.from_json(json)
# print the JSON string representation of the object
print(ComputeOperationValueDisplay.to_json())

# convert the object into a dict
compute_operation_value_display_dict = compute_operation_value_display_instance.to_dict()
# create an instance of ComputeOperationValueDisplay from a dict
compute_operation_value_display_from_dict = ComputeOperationValueDisplay.from_dict(compute_operation_value_display_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


