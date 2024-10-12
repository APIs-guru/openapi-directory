# FamilyVariantList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**PAMAssetCategoriesAllOfEmbeddedItemsInnerAllOfLinks**](PAMAssetCategoriesAllOfEmbeddedItemsInnerAllOfLinks.md) |  | [optional] 
**code** | **str** | Family variant code | 
**labels** | [**FamilyVariantsAllOfEmbeddedItemsInnerAllOfLabels**](FamilyVariantsAllOfEmbeddedItemsInnerAllOfLabels.md) |  | [optional] 
**variant_attribute_sets** | [**List[FamilyVariantsAllOfEmbeddedItemsInnerAllOfVariantAttributeSetsInner]**](FamilyVariantsAllOfEmbeddedItemsInnerAllOfVariantAttributeSetsInner.md) | Attributes distribution according to the enrichment level | 

## Example

```python
from openapi_client.models.family_variant_list import FamilyVariantList

# TODO update the JSON string below
json = "{}"
# create an instance of FamilyVariantList from a JSON string
family_variant_list_instance = FamilyVariantList.from_json(json)
# print the JSON string representation of the object
print(FamilyVariantList.to_json())

# convert the object into a dict
family_variant_list_dict = family_variant_list_instance.to_dict()
# create an instance of FamilyVariantList from a dict
family_variant_list_from_dict = FamilyVariantList.from_dict(family_variant_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


