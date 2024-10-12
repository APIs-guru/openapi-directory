# ListOperationsResponse

ListOperationsResponse is the result of ListOperationsRequest.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**missing_zones** | **List[str]** | If any zones are listed here, the list of operations returned may be missing the operations from those zones. | [optional] 
**operations** | [**List[Operation]**](Operation.md) | A list of operations in the project in the specified zone. | [optional] 

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


