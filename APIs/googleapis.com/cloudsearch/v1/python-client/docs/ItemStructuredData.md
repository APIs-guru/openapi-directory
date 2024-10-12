# ItemStructuredData

Available structured data fields for the item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hash** | **str** | Hashing value provided by the API caller. This can be used with the items.push method to calculate modified state. The maximum length is 2048 characters. | [optional] 
**object** | [**StructuredDataObject**](StructuredDataObject.md) |  | [optional] 

## Example

```python
from openapi_client.models.item_structured_data import ItemStructuredData

# TODO update the JSON string below
json = "{}"
# create an instance of ItemStructuredData from a JSON string
item_structured_data_instance = ItemStructuredData.from_json(json)
# print the JSON string representation of the object
print(ItemStructuredData.to_json())

# convert the object into a dict
item_structured_data_dict = item_structured_data_instance.to_dict()
# create an instance of ItemStructuredData from a dict
item_structured_data_from_dict = ItemStructuredData.from_dict(item_structured_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


