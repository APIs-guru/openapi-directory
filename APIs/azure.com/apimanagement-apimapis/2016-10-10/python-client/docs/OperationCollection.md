# OperationCollection

Paged Operation list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Total record count number across all pages. | [optional] 
**next_link** | **str** | Next page link if any. | [optional] 
**value** | [**List[OperationContract]**](OperationContract.md) | Page values. | [optional] 

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


