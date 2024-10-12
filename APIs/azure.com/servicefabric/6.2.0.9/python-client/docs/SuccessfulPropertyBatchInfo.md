# SuccessfulPropertyBatchInfo

Derived from PropertyBatchInfo. Represents the property batch succeeding. Contains the results of any \"Get\" operations in the batch.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**Dict[str, PropertyInfo]**](PropertyInfo.md) | A map containing the properties that were requested through any \&quot;Get\&quot; property batch operations. The key represents the index of the \&quot;Get\&quot; operation in the original request, in string form. The value is the property. If a property is not found, it will not be in the map. | [optional] 

## Example

```python
from openapi_client.models.successful_property_batch_info import SuccessfulPropertyBatchInfo

# TODO update the JSON string below
json = "{}"
# create an instance of SuccessfulPropertyBatchInfo from a JSON string
successful_property_batch_info_instance = SuccessfulPropertyBatchInfo.from_json(json)
# print the JSON string representation of the object
print(SuccessfulPropertyBatchInfo.to_json())

# convert the object into a dict
successful_property_batch_info_dict = successful_property_batch_info_instance.to_dict()
# create an instance of SuccessfulPropertyBatchInfo from a dict
successful_property_batch_info_from_dict = SuccessfulPropertyBatchInfo.from_dict(successful_property_batch_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


