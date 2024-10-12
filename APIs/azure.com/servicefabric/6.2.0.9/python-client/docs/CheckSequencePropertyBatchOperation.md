# CheckSequencePropertyBatchOperation

Compares the Sequence Number of a property with the SequenceNumber argument. A property's sequence number can be thought of as that property's version. Every time the property is modified, its sequence number is increased. The sequence number can be found in a property's metadata. The comparison fails if the sequence numbers are not equal. CheckSequencePropertyBatchOperation is generally used as a precondition for the write operations in the batch. Note that if one PropertyBatchOperation in a PropertyBatch fails, the entire batch fails and cannot be committed in a transactional manner.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sequence_number** | **str** | The expected sequence number. | 

## Example

```python
from openapi_client.models.check_sequence_property_batch_operation import CheckSequencePropertyBatchOperation

# TODO update the JSON string below
json = "{}"
# create an instance of CheckSequencePropertyBatchOperation from a JSON string
check_sequence_property_batch_operation_instance = CheckSequencePropertyBatchOperation.from_json(json)
# print the JSON string representation of the object
print(CheckSequencePropertyBatchOperation.to_json())

# convert the object into a dict
check_sequence_property_batch_operation_dict = check_sequence_property_batch_operation_instance.to_dict()
# create an instance of CheckSequencePropertyBatchOperation from a dict
check_sequence_property_batch_operation_from_dict = CheckSequencePropertyBatchOperation.from_dict(check_sequence_property_batch_operation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


