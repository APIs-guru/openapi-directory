# AssetFamiliesAllOfEmbeddedItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**PAMAssetCategoriesAllOfEmbeddedItemsInnerAllOfLinks**](PAMAssetCategoriesAllOfEmbeddedItemsInnerAllOfLinks.md) |  | [optional] 
**attribute_as_main_media** | **str** | Attribute code that is used as the main media of the asset family. | [optional] [default to 'First media file or media link attribute that was created']
**code** | **str** | Asset family code | 
**labels** | [**AssetFamiliesAllOfEmbeddedItemsInnerAllOfLabels**](AssetFamiliesAllOfEmbeddedItemsInnerAllOfLabels.md) |  | [optional] 
**naming_convention** | [**AssetFamiliesAllOfEmbeddedItemsInnerAllOfNamingConvention**](AssetFamiliesAllOfEmbeddedItemsInnerAllOfNamingConvention.md) |  | [optional] 
**product_link_rules** | [**List[AssetFamiliesAllOfEmbeddedItemsInnerAllOfProductLinkRulesInner]**](AssetFamiliesAllOfEmbeddedItemsInnerAllOfProductLinkRulesInner.md) | The rules that will be run after the asset creation, in order to automatically link the assets of this family to a set of products. To understand the format of this property, see &lt;a href&#x3D;&#39;/concepts/asset-manager.html#focus-on-the-product-link-rule&#39;&gt;here&lt;/a&gt;. | [optional] 
**transformations** | [**List[AssetFamiliesAllOfEmbeddedItemsInnerAllOfTransformationsInner]**](AssetFamiliesAllOfEmbeddedItemsInnerAllOfTransformationsInner.md) | The transformations to perform on source files in order to generate new files into your asset attributes (only available since v4.0). To understand the format of this property, see &lt;a href&#x3D;&#39;/concepts/asset-manager.html#focus-on-the-transformations&#39;&gt;here&lt;/a&gt;. | [optional] 

## Example

```python
from openapi_client.models.asset_families_all_of_embedded_items_inner import AssetFamiliesAllOfEmbeddedItemsInner

# TODO update the JSON string below
json = "{}"
# create an instance of AssetFamiliesAllOfEmbeddedItemsInner from a JSON string
asset_families_all_of_embedded_items_inner_instance = AssetFamiliesAllOfEmbeddedItemsInner.from_json(json)
# print the JSON string representation of the object
print(AssetFamiliesAllOfEmbeddedItemsInner.to_json())

# convert the object into a dict
asset_families_all_of_embedded_items_inner_dict = asset_families_all_of_embedded_items_inner_instance.to_dict()
# create an instance of AssetFamiliesAllOfEmbeddedItemsInner from a dict
asset_families_all_of_embedded_items_inner_from_dict = AssetFamiliesAllOfEmbeddedItemsInner.from_dict(asset_families_all_of_embedded_items_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


