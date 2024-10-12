# AvailableOperation

Resource provider available operation model

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display** | [**AvailableOperationDisplay**](AvailableOperationDisplay.md) |  | [optional] 
**is_data_action** | **bool** | Indicating whether the operation is a data action or not | [optional] [default to False]
**name** | **str** | {resourceProviderNamespace}/{resourceType}/{read|write|delete|action} | [optional] 
**origin** | **str** | The origin of operation | [optional] 
**properties** | [**AvailableOperationDisplayPropertyServiceSpecification**](AvailableOperationDisplayPropertyServiceSpecification.md) |  | [optional] 

## Example

```python
from openapi_client.models.available_operation import AvailableOperation

# TODO update the JSON string below
json = "{}"
# create an instance of AvailableOperation from a JSON string
available_operation_instance = AvailableOperation.from_json(json)
# print the JSON string representation of the object
print(AvailableOperation.to_json())

# convert the object into a dict
available_operation_dict = available_operation_instance.to_dict()
# create an instance of AvailableOperation from a dict
available_operation_from_dict = AvailableOperation.from_dict(available_operation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


