# AvailableOperations

Available operations of the service

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL client should use to fetch the next page (per server side paging).  It&#39;s null for now, added for future use. | [optional] 
**value** | [**List[OperationDetail]**](OperationDetail.md) | Collection of available operation details | [optional] 

## Example

```python
from openapi_client.models.available_operations import AvailableOperations

# TODO update the JSON string below
json = "{}"
# create an instance of AvailableOperations from a JSON string
available_operations_instance = AvailableOperations.from_json(json)
# print the JSON string representation of the object
print(AvailableOperations.to_json())

# convert the object into a dict
available_operations_dict = available_operations_instance.to_dict()
# create an instance of AvailableOperations from a dict
available_operations_from_dict = AvailableOperations.from_dict(available_operations_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


