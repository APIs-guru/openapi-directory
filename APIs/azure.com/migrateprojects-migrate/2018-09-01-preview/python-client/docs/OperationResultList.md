# OperationResultList

List of API operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[Operation]**](Operation.md) | List of operations. | [optional] 

## Example

```python
from openapi_client.models.operation_result_list import OperationResultList

# TODO update the JSON string below
json = "{}"
# create an instance of OperationResultList from a JSON string
operation_result_list_instance = OperationResultList.from_json(json)
# print the JSON string representation of the object
print(OperationResultList.to_json())

# convert the object into a dict
operation_result_list_dict = operation_result_list_instance.to_dict()
# create an instance of OperationResultList from a dict
operation_result_list_from_dict = OperationResultList.from_dict(operation_result_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


