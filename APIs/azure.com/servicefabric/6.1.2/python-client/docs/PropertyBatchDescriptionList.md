# PropertyBatchDescriptionList

Describes a list of property batch operations to be executed. Either all or none of the operations will be committed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operations** | [**List[PropertyBatchOperation]**](PropertyBatchOperation.md) | A list of the property batch operations to be executed. | [optional] 

## Example

```python
from openapi_client.models.property_batch_description_list import PropertyBatchDescriptionList

# TODO update the JSON string below
json = "{}"
# create an instance of PropertyBatchDescriptionList from a JSON string
property_batch_description_list_instance = PropertyBatchDescriptionList.from_json(json)
# print the JSON string representation of the object
print(PropertyBatchDescriptionList.to_json())

# convert the object into a dict
property_batch_description_list_dict = property_batch_description_list_instance.to_dict()
# create an instance of PropertyBatchDescriptionList from a dict
property_batch_description_list_from_dict = PropertyBatchDescriptionList.from_dict(property_batch_description_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


