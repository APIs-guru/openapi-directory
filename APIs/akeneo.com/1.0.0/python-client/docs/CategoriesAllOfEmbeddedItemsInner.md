# CategoriesAllOfEmbeddedItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**PAMAssetCategoriesAllOfEmbeddedItemsInnerAllOfLinks**](PAMAssetCategoriesAllOfEmbeddedItemsInnerAllOfLinks.md) |  | [optional] 
**code** | **str** | Category code | 
**labels** | [**CategoriesAllOfEmbeddedItemsInnerAllOfLabels**](CategoriesAllOfEmbeddedItemsInnerAllOfLabels.md) |  | [optional] 
**parent** | **str** | Category code of the parent&#39;s category | [optional] [default to 'null']
**position** | **int** | Position of the category in its level, start from 1 (only available since the 7.0 version and when query parameter \&quot;with_position\&quot; is set to \&quot;true\&quot;) | [optional] 
**updated** | **str** | Date of the last update | [optional] 
**values** | [**CategoriesAllOfEmbeddedItemsInnerAllOfValues**](CategoriesAllOfEmbeddedItemsInnerAllOfValues.md) |  | [optional] 

## Example

```python
from openapi_client.models.categories_all_of_embedded_items_inner import CategoriesAllOfEmbeddedItemsInner

# TODO update the JSON string below
json = "{}"
# create an instance of CategoriesAllOfEmbeddedItemsInner from a JSON string
categories_all_of_embedded_items_inner_instance = CategoriesAllOfEmbeddedItemsInner.from_json(json)
# print the JSON string representation of the object
print(CategoriesAllOfEmbeddedItemsInner.to_json())

# convert the object into a dict
categories_all_of_embedded_items_inner_dict = categories_all_of_embedded_items_inner_instance.to_dict()
# create an instance of CategoriesAllOfEmbeddedItemsInner from a dict
categories_all_of_embedded_items_inner_from_dict = CategoriesAllOfEmbeddedItemsInner.from_dict(categories_all_of_embedded_items_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


