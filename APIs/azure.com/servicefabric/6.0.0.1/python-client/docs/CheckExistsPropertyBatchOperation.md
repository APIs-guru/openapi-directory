# CheckExistsPropertyBatchOperation

Represents a PropertyBatchOperation that compares the Boolean existence of a property with the Exists argument.  The PropertyBatchOperation operation fails if the property's existence is not equal to the Exists argument.  The CheckExistsPropertyBatchOperation is generally used as a precondition for the write operations in the batch.  Note that if one PropertyBatchOperation in a PropertyBatch fails,  the entire batch fails and cannot be committed in a transactional manner. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exists** | **bool** | Whether or not the property should exist for the operation to pass. | 

## Example

```python
from openapi_client.models.check_exists_property_batch_operation import CheckExistsPropertyBatchOperation

# TODO update the JSON string below
json = "{}"
# create an instance of CheckExistsPropertyBatchOperation from a JSON string
check_exists_property_batch_operation_instance = CheckExistsPropertyBatchOperation.from_json(json)
# print the JSON string representation of the object
print(CheckExistsPropertyBatchOperation.to_json())

# convert the object into a dict
check_exists_property_batch_operation_dict = check_exists_property_batch_operation_instance.to_dict()
# create an instance of CheckExistsPropertyBatchOperation from a dict
check_exists_property_batch_operation_from_dict = CheckExistsPropertyBatchOperation.from_dict(check_exists_property_batch_operation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


