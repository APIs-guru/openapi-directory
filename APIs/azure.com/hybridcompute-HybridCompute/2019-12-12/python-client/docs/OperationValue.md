# OperationValue

Describes the properties of a Compute Operation value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display** | [**OperationValueDisplay**](OperationValueDisplay.md) | Display properties | [optional] 
**name** | **str** | The name of the compute operation. | [optional] [readonly] 
**origin** | **str** | The origin of the compute operation. | [optional] [readonly] 

## Example

```python
from openapi_client.models.operation_value import OperationValue

# TODO update the JSON string below
json = "{}"
# create an instance of OperationValue from a JSON string
operation_value_instance = OperationValue.from_json(json)
# print the JSON string representation of the object
print(OperationValue.to_json())

# convert the object into a dict
operation_value_dict = operation_value_instance.to_dict()
# create an instance of OperationValue from a dict
operation_value_from_dict = OperationValue.from_dict(operation_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


