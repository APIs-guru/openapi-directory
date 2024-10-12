# FamilyList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**PAMAssetCategoriesAllOfEmbeddedItemsInnerAllOfLinks**](PAMAssetCategoriesAllOfEmbeddedItemsInnerAllOfLinks.md) |  | [optional] 
**attribute_as_image** | **str** | Attribute code used as the main picture in the user interface (only since v2.0) | [optional] [default to 'null']
**attribute_as_label** | **str** | Attribute code used as label | 
**attribute_requirements** | [**FamiliesAllOfEmbeddedItemsInnerAllOfAttributeRequirements**](FamiliesAllOfEmbeddedItemsInnerAllOfAttributeRequirements.md) |  | [optional] 
**attributes** | **List[str]** | Attributes codes that compose the family | [optional] 
**code** | **str** | Family code | 
**labels** | [**FamiliesAllOfEmbeddedItemsInnerAllOfLabels**](FamiliesAllOfEmbeddedItemsInnerAllOfLabels.md) |  | [optional] 

## Example

```python
from openapi_client.models.family_list import FamilyList

# TODO update the JSON string below
json = "{}"
# create an instance of FamilyList from a JSON string
family_list_instance = FamilyList.from_json(json)
# print the JSON string representation of the object
print(FamilyList.to_json())

# convert the object into a dict
family_list_dict = family_list_instance.to_dict()
# create an instance of FamilyList from a dict
family_list_from_dict = FamilyList.from_dict(family_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


