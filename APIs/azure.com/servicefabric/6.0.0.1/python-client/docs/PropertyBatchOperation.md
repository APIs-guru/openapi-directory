# PropertyBatchOperation

Represents the base type for property operations that can be put into a batch and submitted.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | [**PropertyBatchOperationKind**](PropertyBatchOperationKind.md) |  | 
**property_name** | **str** | The name of the Service Fabric property. | 

## Example

```python
from openapi_client.models.property_batch_operation import PropertyBatchOperation

# TODO update the JSON string below
json = "{}"
# create an instance of PropertyBatchOperation from a JSON string
property_batch_operation_instance = PropertyBatchOperation.from_json(json)
# print the JSON string representation of the object
print(PropertyBatchOperation.to_json())

# convert the object into a dict
property_batch_operation_dict = property_batch_operation_instance.to_dict()
# create an instance of PropertyBatchOperation from a dict
property_batch_operation_from_dict = PropertyBatchOperation.from_dict(property_batch_operation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


