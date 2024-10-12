# AssetFamiliesAllOfEmbeddedItemsInnerAllOfProductLinkRulesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assign_assets_to** | [**List[AssetFamiliesAllOfEmbeddedItemsInnerAllOfProductLinkRulesInnerAssignAssetsToInner]**](AssetFamiliesAllOfEmbeddedItemsInnerAllOfProductLinkRulesInnerAssignAssetsToInner.md) | The product value in which your assets will be assigned. More details &lt;a href&#x3D;&#39;/concepts/asset-manager.html#product-value-assignment&#39;&gt;here&lt;/a&gt;. | [optional] 
**product_selections** | [**List[AssetFamiliesAllOfEmbeddedItemsInnerAllOfProductLinkRulesInnerProductSelectionsInner]**](AssetFamiliesAllOfEmbeddedItemsInnerAllOfProductLinkRulesInnerProductSelectionsInner.md) | The product selection to which the assets of the asset family to be automatically linked. More details &lt;a href&#x3D;&#39;/concepts/asset-manager.html#product-selection&#39;&gt;here&lt;/a&gt;. | [optional] 

## Example

```python
from openapi_client.models.asset_families_all_of_embedded_items_inner_all_of_product_link_rules_inner import AssetFamiliesAllOfEmbeddedItemsInnerAllOfProductLinkRulesInner

# TODO update the JSON string below
json = "{}"
# create an instance of AssetFamiliesAllOfEmbeddedItemsInnerAllOfProductLinkRulesInner from a JSON string
asset_families_all_of_embedded_items_inner_all_of_product_link_rules_inner_instance = AssetFamiliesAllOfEmbeddedItemsInnerAllOfProductLinkRulesInner.from_json(json)
# print the JSON string representation of the object
print(AssetFamiliesAllOfEmbeddedItemsInnerAllOfProductLinkRulesInner.to_json())

# convert the object into a dict
asset_families_all_of_embedded_items_inner_all_of_product_link_rules_inner_dict = asset_families_all_of_embedded_items_inner_all_of_product_link_rules_inner_instance.to_dict()
# create an instance of AssetFamiliesAllOfEmbeddedItemsInnerAllOfProductLinkRulesInner from a dict
asset_families_all_of_embedded_items_inner_all_of_product_link_rules_inner_from_dict = AssetFamiliesAllOfEmbeddedItemsInnerAllOfProductLinkRulesInner.from_dict(asset_families_all_of_embedded_items_inner_all_of_product_link_rules_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


