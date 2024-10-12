# GetPropertyBatchOperation

Represents a PropertyBatchOperation that gets the specified property if it exists. Note that if one PropertyBatchOperation in a PropertyBatch fails, the entire batch fails and cannot be committed in a transactional manner.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**include_value** | **bool** | Whether or not to return the property value with the metadata. True if values should be returned with the metadata; False to return only property metadata. | [optional] [default to False]

## Example

```python
from openapi_client.models.get_property_batch_operation import GetPropertyBatchOperation

# TODO update the JSON string below
json = "{}"
# create an instance of GetPropertyBatchOperation from a JSON string
get_property_batch_operation_instance = GetPropertyBatchOperation.from_json(json)
# print the JSON string representation of the object
print(GetPropertyBatchOperation.to_json())

# convert the object into a dict
get_property_batch_operation_dict = get_property_batch_operation_instance.to_dict()
# create an instance of GetPropertyBatchOperation from a dict
get_property_batch_operation_from_dict = GetPropertyBatchOperation.from_dict(get_property_batch_operation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


