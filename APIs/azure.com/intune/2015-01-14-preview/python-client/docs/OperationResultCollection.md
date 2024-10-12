# OperationResultCollection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nextlink** | **str** | Gets the URL to get the next set of results. | [optional] [readonly] 
**value** | [**List[OperationResult]**](OperationResult.md) |  | 

## Example

```python
from openapi_client.models.operation_result_collection import OperationResultCollection

# TODO update the JSON string below
json = "{}"
# create an instance of OperationResultCollection from a JSON string
operation_result_collection_instance = OperationResultCollection.from_json(json)
# print the JSON string representation of the object
print(OperationResultCollection.to_json())

# convert the object into a dict
operation_result_collection_dict = operation_result_collection_instance.to_dict()
# create an instance of OperationResultCollection from a dict
operation_result_collection_from_dict = OperationResultCollection.from_dict(operation_result_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


