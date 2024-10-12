# BulkOperationErrorResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**element_errors** | [**ErrorCollection**](ErrorCollection.md) |  | [optional] 
**failed_element_number** | **int** |  | [optional] 
**status** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.bulk_operation_error_result import BulkOperationErrorResult

# TODO update the JSON string below
json = "{}"
# create an instance of BulkOperationErrorResult from a JSON string
bulk_operation_error_result_instance = BulkOperationErrorResult.from_json(json)
# print the JSON string representation of the object
print(BulkOperationErrorResult.to_json())

# convert the object into a dict
bulk_operation_error_result_dict = bulk_operation_error_result_instance.to_dict()
# create an instance of BulkOperationErrorResult from a dict
bulk_operation_error_result_from_dict = BulkOperationErrorResult.from_dict(bulk_operation_error_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


