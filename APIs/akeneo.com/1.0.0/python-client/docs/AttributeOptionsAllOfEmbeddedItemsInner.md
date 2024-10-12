# AttributeOptionsAllOfEmbeddedItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**PAMAssetCategoriesAllOfEmbeddedItemsInnerAllOfLinks**](PAMAssetCategoriesAllOfEmbeddedItemsInnerAllOfLinks.md) |  | [optional] 
**attribute** | **str** | Code of attribute related to the attribute option | [optional] 
**code** | **str** | Code of option | 
**labels** | [**AttributeOptionsAllOfEmbeddedItemsInnerAllOfLabels**](AttributeOptionsAllOfEmbeddedItemsInnerAllOfLabels.md) |  | [optional] 
**sort_order** | **int** | Order of attribute option | [optional] 

## Example

```python
from openapi_client.models.attribute_options_all_of_embedded_items_inner import AttributeOptionsAllOfEmbeddedItemsInner

# TODO update the JSON string below
json = "{}"
# create an instance of AttributeOptionsAllOfEmbeddedItemsInner from a JSON string
attribute_options_all_of_embedded_items_inner_instance = AttributeOptionsAllOfEmbeddedItemsInner.from_json(json)
# print the JSON string representation of the object
print(AttributeOptionsAllOfEmbeddedItemsInner.to_json())

# convert the object into a dict
attribute_options_all_of_embedded_items_inner_dict = attribute_options_all_of_embedded_items_inner_instance.to_dict()
# create an instance of AttributeOptionsAllOfEmbeddedItemsInner from a dict
attribute_options_all_of_embedded_items_inner_from_dict = AttributeOptionsAllOfEmbeddedItemsInner.from_dict(attribute_options_all_of_embedded_items_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


