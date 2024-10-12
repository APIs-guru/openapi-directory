# OperationList

List all the operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Url to get the next page of items. | [optional] 
**value** | [**List[OperationResponse]**](OperationResponse.md) | List of all operations | [optional] 

## Example

```python
from openapi_client.models.operation_list import OperationList

# TODO update the JSON string below
json = "{}"
# create an instance of OperationList from a JSON string
operation_list_instance = OperationList.from_json(json)
# print the JSON string representation of the object
print(OperationList.to_json())

# convert the object into a dict
operation_list_dict = operation_list_instance.to_dict()
# create an instance of OperationList from a dict
operation_list_from_dict = OperationList.from_dict(operation_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


