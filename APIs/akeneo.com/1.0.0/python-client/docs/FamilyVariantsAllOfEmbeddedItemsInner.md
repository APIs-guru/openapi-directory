# FamilyVariantsAllOfEmbeddedItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**PAMAssetCategoriesAllOfEmbeddedItemsInnerAllOfLinks**](PAMAssetCategoriesAllOfEmbeddedItemsInnerAllOfLinks.md) |  | [optional] 
**code** | **str** | Family variant code | 
**labels** | [**FamilyVariantsAllOfEmbeddedItemsInnerAllOfLabels**](FamilyVariantsAllOfEmbeddedItemsInnerAllOfLabels.md) |  | [optional] 
**variant_attribute_sets** | [**List[FamilyVariantsAllOfEmbeddedItemsInnerAllOfVariantAttributeSetsInner]**](FamilyVariantsAllOfEmbeddedItemsInnerAllOfVariantAttributeSetsInner.md) | Attributes distribution according to the enrichment level | 

## Example

```python
from openapi_client.models.family_variants_all_of_embedded_items_inner import FamilyVariantsAllOfEmbeddedItemsInner

# TODO update the JSON string below
json = "{}"
# create an instance of FamilyVariantsAllOfEmbeddedItemsInner from a JSON string
family_variants_all_of_embedded_items_inner_instance = FamilyVariantsAllOfEmbeddedItemsInner.from_json(json)
# print the JSON string representation of the object
print(FamilyVariantsAllOfEmbeddedItemsInner.to_json())

# convert the object into a dict
family_variants_all_of_embedded_items_inner_dict = family_variants_all_of_embedded_items_inner_instance.to_dict()
# create an instance of FamilyVariantsAllOfEmbeddedItemsInner from a dict
family_variants_all_of_embedded_items_inner_from_dict = FamilyVariantsAllOfEmbeddedItemsInner.from_dict(family_variants_all_of_embedded_items_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


