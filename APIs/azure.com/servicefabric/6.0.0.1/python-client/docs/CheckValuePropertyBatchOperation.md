# CheckValuePropertyBatchOperation

Represents a PropertyBatchOperation that compares the value of the property with the expected value.  The CheckValuePropertyBatchOperation is generally used as a precondition for the write operations in the batch.  Note that if one PropertyBatchOperation in a PropertyBatch fails,  the entire batch fails and cannot be committed in a transactional manner. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**PropertyValue**](PropertyValue.md) |  | 

## Example

```python
from openapi_client.models.check_value_property_batch_operation import CheckValuePropertyBatchOperation

# TODO update the JSON string below
json = "{}"
# create an instance of CheckValuePropertyBatchOperation from a JSON string
check_value_property_batch_operation_instance = CheckValuePropertyBatchOperation.from_json(json)
# print the JSON string representation of the object
print(CheckValuePropertyBatchOperation.to_json())

# convert the object into a dict
check_value_property_batch_operation_dict = check_value_property_batch_operation_instance.to_dict()
# create an instance of CheckValuePropertyBatchOperation from a dict
check_value_property_batch_operation_from_dict = CheckValuePropertyBatchOperation.from_dict(check_value_property_batch_operation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


