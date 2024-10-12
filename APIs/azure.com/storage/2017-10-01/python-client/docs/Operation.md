# Operation

Storage REST API operation definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display** | [**OperationDisplay**](OperationDisplay.md) |  | [optional] 
**name** | **str** | Operation name: {provider}/{resource}/{operation} | [optional] 
**origin** | **str** | The origin of operations. | [optional] 
**properties** | [**OperationProperties**](OperationProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.operation import Operation

# TODO update the JSON string below
json = "{}"
# create an instance of Operation from a JSON string
operation_instance = Operation.from_json(json)
# print the JSON string representation of the object
print(Operation.to_json())

# convert the object into a dict
operation_dict = operation_instance.to_dict()
# create an instance of Operation from a dict
operation_from_dict = Operation.from_dict(operation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


