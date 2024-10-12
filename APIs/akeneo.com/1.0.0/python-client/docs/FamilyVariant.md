# FamilyVariant


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Family variant code | 
**labels** | [**FamilyVariantsAllOfEmbeddedItemsInnerAllOfLabels**](FamilyVariantsAllOfEmbeddedItemsInnerAllOfLabels.md) |  | [optional] 
**variant_attribute_sets** | [**List[FamilyVariantsAllOfEmbeddedItemsInnerAllOfVariantAttributeSetsInner]**](FamilyVariantsAllOfEmbeddedItemsInnerAllOfVariantAttributeSetsInner.md) | Attributes distribution according to the enrichment level | 

## Example

```python
from openapi_client.models.family_variant import FamilyVariant

# TODO update the JSON string below
json = "{}"
# create an instance of FamilyVariant from a JSON string
family_variant_instance = FamilyVariant.from_json(json)
# print the JSON string representation of the object
print(FamilyVariant.to_json())

# convert the object into a dict
family_variant_dict = family_variant_instance.to_dict()
# create an instance of FamilyVariant from a dict
family_variant_from_dict = FamilyVariant.from_dict(family_variant_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


