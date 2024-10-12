# OperationInputs

Input values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the IoT Central application instance to check. | 
**type** | **str** | The type of the IoT Central resource to query. | [optional] [default to 'IoTApps']

## Example

```python
from openapi_client.models.operation_inputs import OperationInputs

# TODO update the JSON string below
json = "{}"
# create an instance of OperationInputs from a JSON string
operation_inputs_instance = OperationInputs.from_json(json)
# print the JSON string representation of the object
print(OperationInputs.to_json())

# convert the object into a dict
operation_inputs_dict = operation_inputs_instance.to_dict()
# create an instance of OperationInputs from a dict
operation_inputs_from_dict = OperationInputs.from_dict(operation_inputs_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


