# AttributeGroupsAllOfEmbeddedItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**PAMAssetCategoriesAllOfEmbeddedItemsInnerAllOfLinks**](PAMAssetCategoriesAllOfEmbeddedItemsInnerAllOfLinks.md) |  | [optional] 
**attributes** | **List[str]** | Attribute codes that compose the attribute group | [optional] 
**code** | **str** | Attribute group code | 
**labels** | [**AttributeGroupsAllOfEmbeddedItemsInnerAllOfLabels**](AttributeGroupsAllOfEmbeddedItemsInnerAllOfLabels.md) |  | [optional] 
**sort_order** | **int** | Attribute group order among other attribute groups | [optional] 

## Example

```python
from openapi_client.models.attribute_groups_all_of_embedded_items_inner import AttributeGroupsAllOfEmbeddedItemsInner

# TODO update the JSON string below
json = "{}"
# create an instance of AttributeGroupsAllOfEmbeddedItemsInner from a JSON string
attribute_groups_all_of_embedded_items_inner_instance = AttributeGroupsAllOfEmbeddedItemsInner.from_json(json)
# print the JSON string representation of the object
print(AttributeGroupsAllOfEmbeddedItemsInner.to_json())

# convert the object into a dict
attribute_groups_all_of_embedded_items_inner_dict = attribute_groups_all_of_embedded_items_inner_instance.to_dict()
# create an instance of AttributeGroupsAllOfEmbeddedItemsInner from a dict
attribute_groups_all_of_embedded_items_inner_from_dict = AttributeGroupsAllOfEmbeddedItemsInner.from_dict(attribute_groups_all_of_embedded_items_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


