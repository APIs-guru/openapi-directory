# PropertyBatchInfo

Information about the results of a property batch.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | [**PropertyBatchInfoKind**](PropertyBatchInfoKind.md) |  | 

## Example

```python
from openapi_client.models.property_batch_info import PropertyBatchInfo

# TODO update the JSON string below
json = "{}"
# create an instance of PropertyBatchInfo from a JSON string
property_batch_info_instance = PropertyBatchInfo.from_json(json)
# print the JSON string representation of the object
print(PropertyBatchInfo.to_json())

# convert the object into a dict
property_batch_info_dict = property_batch_info_instance.to_dict()
# create an instance of PropertyBatchInfo from a dict
property_batch_info_from_dict = PropertyBatchInfo.from_dict(property_batch_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


