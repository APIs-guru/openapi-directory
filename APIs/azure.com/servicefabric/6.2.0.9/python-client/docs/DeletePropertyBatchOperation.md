# DeletePropertyBatchOperation

Represents a PropertyBatchOperation that deletes a specified property if it exists. Note that if one PropertyBatchOperation in a PropertyBatch fails, the entire batch fails and cannot be committed in a transactional manner.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------

## Example

```python
from openapi_client.models.delete_property_batch_operation import DeletePropertyBatchOperation

# TODO update the JSON string below
json = "{}"
# create an instance of DeletePropertyBatchOperation from a JSON string
delete_property_batch_operation_instance = DeletePropertyBatchOperation.from_json(json)
# print the JSON string representation of the object
print(DeletePropertyBatchOperation.to_json())

# convert the object into a dict
delete_property_batch_operation_dict = delete_property_batch_operation_instance.to_dict()
# create an instance of DeletePropertyBatchOperation from a dict
delete_property_batch_operation_from_dict = DeletePropertyBatchOperation.from_dict(delete_property_batch_operation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


