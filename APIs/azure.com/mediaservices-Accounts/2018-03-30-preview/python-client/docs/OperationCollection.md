# OperationCollection

A collection of Operation items.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**odata_next_link** | **str** | A link to the next page of the collection (when the collection contains too many results to return in one response). | [optional] 
**value** | [**List[Operation]**](Operation.md) | A collection of Operation items. | [optional] 

## Example

```python
from openapi_client.models.operation_collection import OperationCollection

# TODO update the JSON string below
json = "{}"
# create an instance of OperationCollection from a JSON string
operation_collection_instance = OperationCollection.from_json(json)
# print the JSON string representation of the object
print(OperationCollection.to_json())

# convert the object into a dict
operation_collection_dict = operation_collection_instance.to_dict()
# create an instance of OperationCollection from a dict
operation_collection_from_dict = OperationCollection.from_dict(operation_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


