# ListOperationsResponse

List operations response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[Operation]**](Operation.md) | operations | [optional] 

## Example

```python
from openapi_client.models.list_operations_response import ListOperationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListOperationsResponse from a JSON string
list_operations_response_instance = ListOperationsResponse.from_json(json)
# print the JSON string representation of the object
print(ListOperationsResponse.to_json())

# convert the object into a dict
list_operations_response_dict = list_operations_response_instance.to_dict()
# create an instance of ListOperationsResponse from a dict
list_operations_response_from_dict = ListOperationsResponse.from_dict(list_operations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


