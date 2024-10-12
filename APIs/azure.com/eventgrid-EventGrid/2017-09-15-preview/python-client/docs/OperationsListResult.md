# OperationsListResult

Result of the List Operations operation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[Operation]**](Operation.md) | A collection of operations | [optional] 

## Example

```python
from openapi_client.models.operations_list_result import OperationsListResult

# TODO update the JSON string below
json = "{}"
# create an instance of OperationsListResult from a JSON string
operations_list_result_instance = OperationsListResult.from_json(json)
# print the JSON string representation of the object
print(OperationsListResult.to_json())

# convert the object into a dict
operations_list_result_dict = operations_list_result_instance.to_dict()
# create an instance of OperationsListResult from a dict
operations_list_result_from_dict = OperationsListResult.from_dict(operations_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


