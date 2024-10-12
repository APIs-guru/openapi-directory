# AvailableOperationsListResponse

List of available operations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link for next list of available operations | [optional] 
**value** | [**List[AvailableOperation]**](AvailableOperation.md) | Returns a list of available operations | [optional] 

## Example

```python
from openapi_client.models.available_operations_list_response import AvailableOperationsListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AvailableOperationsListResponse from a JSON string
available_operations_list_response_instance = AvailableOperationsListResponse.from_json(json)
# print the JSON string representation of the object
print(AvailableOperationsListResponse.to_json())

# convert the object into a dict
available_operations_list_response_dict = available_operations_list_response_instance.to_dict()
# create an instance of AvailableOperationsListResponse from a dict
available_operations_list_response_from_dict = AvailableOperationsListResponse.from_dict(available_operations_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


