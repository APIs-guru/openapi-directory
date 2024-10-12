# AssociationTypesAllOfEmbeddedItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**PAMAssetCategoriesAllOfEmbeddedItemsInnerAllOfLinks**](PAMAssetCategoriesAllOfEmbeddedItemsInnerAllOfLinks.md) |  | [optional] 
**code** | **str** | Association type code | 
**is_quantified** | **bool** | When true, the association is a quantified association (Only available in the PIM Serenity version.) | [optional] [default to False]
**is_two_way** | **bool** | When true, the association is a two-way association (Only available in the PIM Serenity version.) | [optional] [default to False]
**labels** | [**AssociationTypesAllOfEmbeddedItemsInnerAllOfLabels**](AssociationTypesAllOfEmbeddedItemsInnerAllOfLabels.md) |  | [optional] 

## Example

```python
from openapi_client.models.association_types_all_of_embedded_items_inner import AssociationTypesAllOfEmbeddedItemsInner

# TODO update the JSON string below
json = "{}"
# create an instance of AssociationTypesAllOfEmbeddedItemsInner from a JSON string
association_types_all_of_embedded_items_inner_instance = AssociationTypesAllOfEmbeddedItemsInner.from_json(json)
# print the JSON string representation of the object
print(AssociationTypesAllOfEmbeddedItemsInner.to_json())

# convert the object into a dict
association_types_all_of_embedded_items_inner_dict = association_types_all_of_embedded_items_inner_instance.to_dict()
# create an instance of AssociationTypesAllOfEmbeddedItemsInner from a dict
association_types_all_of_embedded_items_inner_from_dict = AssociationTypesAllOfEmbeddedItemsInner.from_dict(association_types_all_of_embedded_items_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


