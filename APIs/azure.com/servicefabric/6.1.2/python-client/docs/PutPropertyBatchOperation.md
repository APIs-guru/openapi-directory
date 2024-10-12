# PutPropertyBatchOperation

Puts the specified property under the specified name. Note that if one PropertyBatchOperation in a PropertyBatch fails, the entire batch fails and cannot be committed in a transactional manner. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_type_id** | **str** | The property&#39;s custom type id. Using this property, the user is able to tag the type of the value of the property. | [optional] 
**value** | [**PropertyValue**](PropertyValue.md) |  | 

## Example

```python
from openapi_client.models.put_property_batch_operation import PutPropertyBatchOperation

# TODO update the JSON string below
json = "{}"
# create an instance of PutPropertyBatchOperation from a JSON string
put_property_batch_operation_instance = PutPropertyBatchOperation.from_json(json)
# print the JSON string representation of the object
print(PutPropertyBatchOperation.to_json())

# convert the object into a dict
put_property_batch_operation_dict = put_property_batch_operation_instance.to_dict()
# create an instance of PutPropertyBatchOperation from a dict
put_property_batch_operation_from_dict = PutPropertyBatchOperation.from_dict(put_property_batch_operation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


