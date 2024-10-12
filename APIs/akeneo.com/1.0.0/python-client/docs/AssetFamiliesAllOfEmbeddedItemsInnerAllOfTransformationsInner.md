# AssetFamiliesAllOfEmbeddedItemsInnerAllOfTransformationsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filename_prefix** | **str** | The prefix that will be prepended to the source filename to generate the target filename. More details &lt;a href&#x3D;&#39;/concepts/asset-manager.html#target-filename&#39;&gt;here&lt;/a&gt;. | [optional] 
**filename_suffix** | **str** | The suffix that will be appended to the source filename to generate the target filename. More details &lt;a href&#x3D;&#39;/concepts/asset-manager.html#target-filename&#39;&gt;here&lt;/a&gt;. | [optional] 
**label** | **str** | The name of the transformation | 
**operations** | [**AssetFamiliesAllOfEmbeddedItemsInnerAllOfTransformationsInnerOperations**](AssetFamiliesAllOfEmbeddedItemsInnerAllOfTransformationsInnerOperations.md) |  | 
**source** | [**AssetFamiliesAllOfEmbeddedItemsInnerAllOfTransformationsInnerSource**](AssetFamiliesAllOfEmbeddedItemsInnerAllOfTransformationsInnerSource.md) |  | 
**target** | [**AssetFamiliesAllOfEmbeddedItemsInnerAllOfTransformationsInnerTarget**](AssetFamiliesAllOfEmbeddedItemsInnerAllOfTransformationsInnerTarget.md) |  | 

## Example

```python
from openapi_client.models.asset_families_all_of_embedded_items_inner_all_of_transformations_inner import AssetFamiliesAllOfEmbeddedItemsInnerAllOfTransformationsInner

# TODO update the JSON string below
json = "{}"
# create an instance of AssetFamiliesAllOfEmbeddedItemsInnerAllOfTransformationsInner from a JSON string
asset_families_all_of_embedded_items_inner_all_of_transformations_inner_instance = AssetFamiliesAllOfEmbeddedItemsInnerAllOfTransformationsInner.from_json(json)
# print the JSON string representation of the object
print(AssetFamiliesAllOfEmbeddedItemsInnerAllOfTransformationsInner.to_json())

# convert the object into a dict
asset_families_all_of_embedded_items_inner_all_of_transformations_inner_dict = asset_families_all_of_embedded_items_inner_all_of_transformations_inner_instance.to_dict()
# create an instance of AssetFamiliesAllOfEmbeddedItemsInnerAllOfTransformationsInner from a dict
asset_families_all_of_embedded_items_inner_all_of_transformations_inner_from_dict = AssetFamiliesAllOfEmbeddedItemsInnerAllOfTransformationsInner.from_dict(asset_families_all_of_embedded_items_inner_all_of_transformations_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


